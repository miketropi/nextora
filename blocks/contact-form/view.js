"use strict";
(() => {
  // blocks/contact-form/view.ts
  var FORM_SELECTOR = 'form[data-nextora-contact-form="1"]:not([data-nextora-contact-form-inited="1"])';
  var EMPTY_MESSAGE_RE = /^(?:\s|<p>\s*<\/p>|<p>\s*<br\s*\/?>\s*<\/p>)*$/i;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
  }
  function isMessageEmpty(value) {
    const trimmed = value.trim();
    if (trimmed === "") {
      return true;
    }
    return EMPTY_MESSAGE_RE.test(trimmed);
  }
  function isContactField(value) {
    return value === "full_name" || value === "email" || value === "message";
  }
  function getFieldWrapper(form, field) {
    return form.querySelector(`[data-nextora-field="${field}"]`);
  }
  function clearFieldErrors(form) {
    form.querySelectorAll(".nextora-contact-form__field--error").forEach((wrapper) => {
      wrapper.classList.remove("nextora-contact-form__field--error");
      wrapper.querySelectorAll('[aria-invalid="true"]').forEach((control) => {
        control.removeAttribute("aria-invalid");
      });
    });
  }
  function setFieldErrors(form, fields) {
    clearFieldErrors(form);
    const unique = [...new Set(fields)];
    for (const field of unique) {
      const wrapper = getFieldWrapper(form, field);
      if (!wrapper) {
        continue;
      }
      wrapper.classList.add("nextora-contact-form__field--error");
      const control = wrapper.querySelector(
        "input, textarea, .nextora-tiptap-shell"
      );
      control?.setAttribute("aria-invalid", "true");
    }
  }
  function collectValidationErrors(fullName, email, message) {
    const fields = [];
    if (!fullName) {
      fields.push("full_name");
    }
    if (!email) {
      fields.push("email");
    } else if (!EMAIL_RE.test(email)) {
      fields.push("email");
    }
    if (isMessageEmpty(message)) {
      fields.push("message");
    }
    return fields;
  }
  function resolveServerFieldErrors(payload, fullName, email, message) {
    const fromServer = payload.data?.fields ?? [];
    const resolved = fromServer.filter(isContactField);
    if (resolved.length > 0) {
      return resolved;
    }
    switch (payload.code) {
      case "invalid_email":
        return ["email"];
      case "missing_message":
        return ["message"];
      case "missing_fields": {
        const inferred = [];
        if (!fullName) {
          inferred.push("full_name");
        }
        if (!email) {
          inferred.push("email");
        }
        if (isMessageEmpty(message)) {
          inferred.push("message");
        }
        return inferred;
      }
      default:
        return [];
    }
  }
  function showNotice(notice, message, type) {
    notice.textContent = message;
    notice.classList.remove(
      "nextora-contact-form__notice--hidden",
      "nextora-contact-form__notice--success",
      "nextora-contact-form__notice--error"
    );
    notice.classList.add(`nextora-contact-form__notice--${type}`);
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
  }
  function hideNotice(notice) {
    notice.textContent = "";
    notice.classList.add("nextora-contact-form__notice--hidden");
    notice.classList.remove(
      "nextora-contact-form__notice--success",
      "nextora-contact-form__notice--error"
    );
  }
  function getErrorMessage(form, fallback) {
    return form.dataset.errorMessage?.trim() || fallback;
  }
  function isTiptapHostMounted(host) {
    return host.querySelector(".ProseMirror") !== null;
  }
  function ensureContactFormTiptap(form) {
    const host = form.querySelector(".nextora-tiptap-host[id]");
    if (!host || isTiptapHostMounted(host)) {
      return;
    }
    if (typeof window.nextoraMountContactFormTiptap === "function") {
      window.nextoraMountContactFormTiptap();
      return;
    }
    if (!host.id) {
      return;
    }
    const textarea = form.querySelector('textarea[name="message"]');
    const label = form.querySelector('[id^="nextora-contact-form-message-label-"]');
    if (!textarea?.id || typeof window.nextoraMountTiptapConfig !== "function") {
      return;
    }
    window.nextoraMountTiptapConfig({
      hostId: host.id,
      textareaSelector: `#${CSS.escape(textarea.id)}`,
      labelId: label?.id ?? "",
      toolbarSelector: ".nextora-tiptap-toolbar"
    });
  }
  function scheduleContactFormTiptapRetries(form) {
    const delays = [0, 50, 150, 400];
    for (const delay of delays) {
      window.setTimeout(() => {
        const host = form.querySelector(".nextora-tiptap-host[id]");
        if (!host || isTiptapHostMounted(host)) {
          return;
        }
        ensureContactFormTiptap(form);
      }, delay);
    }
  }
  function readMessageValue(form, messageField) {
    const host = form.querySelector(".nextora-tiptap-host[id]");
    if (host?.id && typeof window.nextoraSyncTiptapHost === "function") {
      window.nextoraSyncTiptapHost(host.id);
    }
    return (messageField?.value ?? "").trim();
  }
  async function getRecaptchaToken(form) {
    if (form.dataset.recaptcha !== "1") {
      return "";
    }
    const siteKey = form.dataset.recaptchaSiteKey?.trim() ?? "";
    if (!siteKey || !window.grecaptcha) {
      return "";
    }
    return new Promise((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha?.execute(siteKey, { action: "contact_form" }).then(resolve).catch(reject);
      });
    });
  }
  function initScrollReveal(root) {
    if (prefersReducedMotion() || root.getAttribute("data-nextora-scroll-reveal") !== "1") {
      return;
    }
    if (root.getAttribute("data-nextora-contact-form-scroll-init") === "1") {
      return;
    }
    root.classList.add("nextora-contact-form--reveal-pending");
    root.setAttribute("data-nextora-contact-form-scroll-init", "1");
    const reveal = () => {
      root.classList.remove("nextora-contact-form--reveal-pending");
      root.classList.add("nextora-contact-form--reveal-ready");
    };
    if (typeof window.IntersectionObserver === "function") {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal();
              observer.disconnect();
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(root);
      window.setTimeout(reveal, 1800);
    } else {
      reveal();
    }
  }
  function initContactForm(form) {
    const blockRoot = form.closest(".nextora-contact-form");
    const notice = blockRoot?.querySelector(".nextora-contact-form__notice") ?? null;
    const submitBtn = form.querySelector(".nextora-contact-form__submit");
    const messageField = form.querySelector('textarea[name="message"]');
    if (!notice || !submitBtn) {
      return;
    }
    form.setAttribute("data-nextora-contact-form-inited", "1");
    if (blockRoot) {
      initScrollReveal(blockRoot);
    }
    scheduleContactFormTiptapRetries(form);
    const restUrl = form.dataset.restUrl?.trim() ?? "";
    const nonce = form.dataset.nonce?.trim() ?? "";
    const sendingLabel = form.dataset.sendingLabel?.trim() || "Sending\u2026";
    const successMessage = form.dataset.successMessage?.trim() || "Thank you! Your message has been sent.";
    const defaultError = getErrorMessage(form, "Something went wrong. Please try again.");
    const requiredError = form.dataset.requiredError?.trim() || "Please fill in all required fields.";
    const invalidEmailError = form.dataset.invalidEmailError?.trim() || "Please enter a valid email address.";
    const defaultBtnLabel = submitBtn.textContent?.trim() || "Send Message";
    const clearErrorsOnEdit = () => {
      clearFieldErrors(form);
    };
    form.addEventListener("input", clearErrorsOnEdit);
    form.addEventListener("focusin", clearErrorsOnEdit);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      hideNotice(notice);
      clearFieldErrors(form);
      const fullName = (form.querySelector('input[name="full_name"]')?.value ?? "").trim();
      const phone = (form.querySelector('input[name="phone"]')?.value ?? "").trim();
      const email = (form.querySelector('input[name="email"]')?.value ?? "").trim();
      const message = readMessageValue(form, messageField);
      const honeypot = (form.querySelector('input[name="company_website"]')?.value ?? "").trim();
      if (honeypot !== "") {
        return;
      }
      const validationErrors = collectValidationErrors(fullName, email, message);
      if (validationErrors.length > 0) {
        setFieldErrors(form, validationErrors);
        const onlyInvalidEmail = validationErrors.length === 1 && validationErrors[0] === "email" && fullName !== "" && email !== "" && !isMessageEmpty(message);
        showNotice(notice, onlyInvalidEmail ? invalidEmailError : requiredError, "error");
        return;
      }
      if (!restUrl || !nonce) {
        showNotice(notice, defaultError, "error");
        return;
      }
      submitBtn.disabled = true;
      submitBtn.textContent = sendingLabel;
      const instanceIndex = parseInt(form.dataset.instanceIndex ?? "0", 10) || 0;
      const postId = parseInt(form.dataset.postId ?? "0", 10) || 0;
      const configAdminEmail = form.dataset.adminEmail?.trim() ?? "";
      const configAdminEmailToken = form.dataset.adminEmailToken?.trim() ?? "";
      const configRecaptchaSiteKey = form.dataset.recaptchaSiteKey?.trim() ?? "";
      const configRecaptchaToken = form.dataset.recaptchaConfigToken?.trim() ?? "";
      let recaptchaToken = "";
      if (form.dataset.recaptcha === "1") {
        try {
          recaptchaToken = await getRecaptchaToken(form);
        } catch {
          showNotice(notice, defaultError, "error");
          submitBtn.disabled = false;
          submitBtn.textContent = defaultBtnLabel;
          return;
        }
      }
      try {
        const response = await fetch(restUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            full_name: fullName,
            phone,
            email,
            message,
            _wpnonce: nonce,
            instance_index: instanceIndex,
            post_id: postId,
            config_admin_email: configAdminEmail,
            config_admin_email_token: configAdminEmailToken,
            config_recaptcha_site_key: configRecaptchaSiteKey,
            config_recaptcha_token: configRecaptchaToken,
            recaptcha_token: recaptchaToken
          })
        });
        let payload = {};
        try {
          payload = await response.json();
        } catch {
          payload = {};
        }
        if (response.ok && payload.success) {
          showNotice(notice, payload.message?.trim() || successMessage, "success");
          clearFieldErrors(form);
          form.reset();
          const tiptapHost = form.querySelector(".nextora-tiptap-host[id]");
          if (tiptapHost?.id && typeof window.nextoraClearTiptapHost === "function") {
            window.nextoraClearTiptapHost(tiptapHost.id);
          } else if (messageField) {
            messageField.value = "";
          }
        } else {
          const errMsg = typeof payload.message === "string" && payload.message.trim() !== "" ? payload.message.trim() : defaultError;
          const serverFields = resolveServerFieldErrors(
            payload,
            fullName,
            email,
            message
          );
          if (serverFields.length > 0) {
            setFieldErrors(form, serverFields);
          }
          showNotice(notice, errMsg, "error");
        }
      } catch {
        showNotice(notice, defaultError, "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultBtnLabel;
      }
    });
  }
  function initAll() {
    document.querySelectorAll(FORM_SELECTOR).forEach((form) => {
      initContactForm(form);
    });
  }
  function bootContactForms() {
    initAll();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootContactForms);
  } else {
    bootContactForms();
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDb250YWN0IGZvcm0gXHUyMDE0IFJFU1Qgc3VibWl0ICsgc3RhdHVzIG5vdGljZXMgZm9yIGBuZXh0b3JhL2NvbnRhY3QtZm9ybWAuXG4gKiBUaXB0YXAgbW91bnRzIHZpYSBgaW5pdENvbW1lbnRUaXB0YXAoKWAgaW4gbWFpbi50cyAobm90IGhlcmUpLlxuICovXG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0bmV4dG9yYUNsZWFyVGlwdGFwSG9zdD86IChob3N0SWQ6IHN0cmluZykgPT4gdm9pZDtcblx0XHRncmVjYXB0Y2hhPzoge1xuXHRcdFx0cmVhZHk6IChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZDtcblx0XHRcdGV4ZWN1dGU6IChzaXRlS2V5OiBzdHJpbmcsIG9wdGlvbnM6IHsgYWN0aW9uOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTxzdHJpbmc+O1xuXHRcdH07XG5cdH1cbn1cblxuY29uc3QgRk9STV9TRUxFQ1RPUiA9ICdmb3JtW2RhdGEtbmV4dG9yYS1jb250YWN0LWZvcm09XCIxXCJdOm5vdChbZGF0YS1uZXh0b3JhLWNvbnRhY3QtZm9ybS1pbml0ZWQ9XCIxXCJdKSc7XG5cbmNvbnN0IEVNUFRZX01FU1NBR0VfUkUgPSAvXig/Olxcc3w8cD5cXHMqPFxcL3A+fDxwPlxccyo8YnJcXHMqXFwvPz5cXHMqPFxcL3A+KSokL2k7XG5cbmNvbnN0IEVNQUlMX1JFID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG5cbnR5cGUgQ29udGFjdEZpZWxkID0gJ2Z1bGxfbmFtZScgfCAnZW1haWwnIHwgJ21lc3NhZ2UnO1xuXG5pbnRlcmZhY2UgUmVzdFBheWxvYWQge1xuXHRzdWNjZXNzPzogYm9vbGVhbjtcblx0bWVzc2FnZT86IHN0cmluZztcblx0Y29kZT86IHN0cmluZztcblx0ZGF0YT86IHtcblx0XHRzdGF0dXM/OiBudW1iZXI7XG5cdFx0ZmllbGRzPzogc3RyaW5nW107XG5cdH07XG59XG5cbmZ1bmN0aW9uIHByZWZlcnNSZWR1Y2VkTW90aW9uKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93Lm1hdGNoTWVkaWE/LignKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzID09PSB0cnVlXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGlzTWVzc2FnZUVtcHR5KHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0Y29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcblx0aWYgKHRyaW1tZWQgPT09ICcnKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIEVNUFRZX01FU1NBR0VfUkUudGVzdCh0cmltbWVkKTtcbn1cblxuZnVuY3Rpb24gaXNDb250YWN0RmllbGQodmFsdWU6IHN0cmluZyk6IHZhbHVlIGlzIENvbnRhY3RGaWVsZCB7XG5cdHJldHVybiB2YWx1ZSA9PT0gJ2Z1bGxfbmFtZScgfHwgdmFsdWUgPT09ICdlbWFpbCcgfHwgdmFsdWUgPT09ICdtZXNzYWdlJztcbn1cblxuZnVuY3Rpb24gZ2V0RmllbGRXcmFwcGVyKGZvcm06IEhUTUxGb3JtRWxlbWVudCwgZmllbGQ6IENvbnRhY3RGaWVsZCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG5cdHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KGBbZGF0YS1uZXh0b3JhLWZpZWxkPVwiJHtmaWVsZH1cIl1gKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGaWVsZEVycm9ycyhmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcblx0Zm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcubmV4dG9yYS1jb250YWN0LWZvcm1fX2ZpZWxkLS1lcnJvcicpLmZvckVhY2goKHdyYXBwZXIpID0+IHtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25leHRvcmEtY29udGFjdC1mb3JtX19maWVsZC0tZXJyb3InKTtcblx0XHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLWludmFsaWQ9XCJ0cnVlXCJdJykuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuXHRcdFx0Y29udHJvbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2V0RmllbGRFcnJvcnMoZm9ybTogSFRNTEZvcm1FbGVtZW50LCBmaWVsZHM6IENvbnRhY3RGaWVsZFtdKTogdm9pZCB7XG5cdGNsZWFyRmllbGRFcnJvcnMoZm9ybSk7XG5cdGNvbnN0IHVuaXF1ZSA9IFsuLi5uZXcgU2V0KGZpZWxkcyldO1xuXHRmb3IgKGNvbnN0IGZpZWxkIG9mIHVuaXF1ZSkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBnZXRGaWVsZFdyYXBwZXIoZm9ybSwgZmllbGQpO1xuXHRcdGlmICghd3JhcHBlcikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmV4dG9yYS1jb250YWN0LWZvcm1fX2ZpZWxkLS1lcnJvcicpO1xuXHRcdGNvbnN0IGNvbnRyb2wgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuXHRcdFx0J2lucHV0LCB0ZXh0YXJlYSwgLm5leHRvcmEtdGlwdGFwLXNoZWxsJyxcblx0XHQpO1xuXHRcdGNvbnRyb2w/LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0VmFsaWRhdGlvbkVycm9ycyhcblx0ZnVsbE5hbWU6IHN0cmluZyxcblx0ZW1haWw6IHN0cmluZyxcblx0bWVzc2FnZTogc3RyaW5nLFxuKTogQ29udGFjdEZpZWxkW10ge1xuXHRjb25zdCBmaWVsZHM6IENvbnRhY3RGaWVsZFtdID0gW107XG5cdGlmICghZnVsbE5hbWUpIHtcblx0XHRmaWVsZHMucHVzaCgnZnVsbF9uYW1lJyk7XG5cdH1cblx0aWYgKCFlbWFpbCkge1xuXHRcdGZpZWxkcy5wdXNoKCdlbWFpbCcpO1xuXHR9IGVsc2UgaWYgKCFFTUFJTF9SRS50ZXN0KGVtYWlsKSkge1xuXHRcdGZpZWxkcy5wdXNoKCdlbWFpbCcpO1xuXHR9XG5cdGlmIChpc01lc3NhZ2VFbXB0eShtZXNzYWdlKSkge1xuXHRcdGZpZWxkcy5wdXNoKCdtZXNzYWdlJyk7XG5cdH1cblx0cmV0dXJuIGZpZWxkcztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlckZpZWxkRXJyb3JzKFxuXHRwYXlsb2FkOiBSZXN0UGF5bG9hZCxcblx0ZnVsbE5hbWU6IHN0cmluZyxcblx0ZW1haWw6IHN0cmluZyxcblx0bWVzc2FnZTogc3RyaW5nLFxuKTogQ29udGFjdEZpZWxkW10ge1xuXHRjb25zdCBmcm9tU2VydmVyID0gcGF5bG9hZC5kYXRhPy5maWVsZHMgPz8gW107XG5cdGNvbnN0IHJlc29sdmVkID0gZnJvbVNlcnZlci5maWx0ZXIoaXNDb250YWN0RmllbGQpO1xuXHRpZiAocmVzb2x2ZWQubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiByZXNvbHZlZDtcblx0fVxuXG5cdHN3aXRjaCAocGF5bG9hZC5jb2RlKSB7XG5cdFx0Y2FzZSAnaW52YWxpZF9lbWFpbCc6XG5cdFx0XHRyZXR1cm4gWydlbWFpbCddO1xuXHRcdGNhc2UgJ21pc3NpbmdfbWVzc2FnZSc6XG5cdFx0XHRyZXR1cm4gWydtZXNzYWdlJ107XG5cdFx0Y2FzZSAnbWlzc2luZ19maWVsZHMnOiB7XG5cdFx0XHRjb25zdCBpbmZlcnJlZDogQ29udGFjdEZpZWxkW10gPSBbXTtcblx0XHRcdGlmICghZnVsbE5hbWUpIHtcblx0XHRcdFx0aW5mZXJyZWQucHVzaCgnZnVsbF9uYW1lJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVtYWlsKSB7XG5cdFx0XHRcdGluZmVycmVkLnB1c2goJ2VtYWlsJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNNZXNzYWdlRW1wdHkobWVzc2FnZSkpIHtcblx0XHRcdFx0aW5mZXJyZWQucHVzaCgnbWVzc2FnZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGluZmVycmVkO1xuXHRcdH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNob3dOb3RpY2UoXG5cdG5vdGljZTogSFRNTEVsZW1lbnQsXG5cdG1lc3NhZ2U6IHN0cmluZyxcblx0dHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyxcbik6IHZvaWQge1xuXHRub3RpY2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHRub3RpY2UuY2xhc3NMaXN0LnJlbW92ZShcblx0XHQnbmV4dG9yYS1jb250YWN0LWZvcm1fX25vdGljZS0taGlkZGVuJyxcblx0XHQnbmV4dG9yYS1jb250YWN0LWZvcm1fX25vdGljZS0tc3VjY2VzcycsXG5cdFx0J25leHRvcmEtY29udGFjdC1mb3JtX19ub3RpY2UtLWVycm9yJyxcblx0KTtcblx0bm90aWNlLmNsYXNzTGlzdC5hZGQoYG5leHRvcmEtY29udGFjdC1mb3JtX19ub3RpY2UtLSR7dHlwZX1gKTtcblx0bm90aWNlLnNldEF0dHJpYnV0ZSgncm9sZScsICdzdGF0dXMnKTtcblx0bm90aWNlLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xufVxuXG5mdW5jdGlvbiBoaWRlTm90aWNlKG5vdGljZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0bm90aWNlLnRleHRDb250ZW50ID0gJyc7XG5cdG5vdGljZS5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLWNvbnRhY3QtZm9ybV9fbm90aWNlLS1oaWRkZW4nKTtcblx0bm90aWNlLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0J25leHRvcmEtY29udGFjdC1mb3JtX19ub3RpY2UtLXN1Y2Nlc3MnLFxuXHRcdCduZXh0b3JhLWNvbnRhY3QtZm9ybV9fbm90aWNlLS1lcnJvcicsXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShmb3JtOiBIVE1MRm9ybUVsZW1lbnQsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRyZXR1cm4gZm9ybS5kYXRhc2V0LmVycm9yTWVzc2FnZT8udHJpbSgpIHx8IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBpc1RpcHRhcEhvc3RNb3VudGVkKGhvc3Q6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG5cdHJldHVybiBob3N0LnF1ZXJ5U2VsZWN0b3IoJy5Qcm9zZU1pcnJvcicpICE9PSBudWxsO1xufVxuXG4vKiogUmV0cnkgdW50aWwgVGlwdGFwIG1vdW50cyAobWFpbi5qcyBtYXkgbG9hZCBhZnRlciB0aGlzIHNjcmlwdCkuICovXG5mdW5jdGlvbiBlbnN1cmVDb250YWN0Rm9ybVRpcHRhcChmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3QgaG9zdCA9IGZvcm0ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXRpcHRhcC1ob3N0W2lkXScpO1xuXHRpZiAoIWhvc3QgfHwgaXNUaXB0YXBIb3N0TW91bnRlZChob3N0KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh0eXBlb2Ygd2luZG93Lm5leHRvcmFNb3VudENvbnRhY3RGb3JtVGlwdGFwID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0d2luZG93Lm5leHRvcmFNb3VudENvbnRhY3RGb3JtVGlwdGFwKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFob3N0LmlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGV4dGFyZWEgPSBmb3JtLnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9XCJtZXNzYWdlXCJdJyk7XG5cdGNvbnN0IGxhYmVsID0gZm9ybS5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2lkXj1cIm5leHRvcmEtY29udGFjdC1mb3JtLW1lc3NhZ2UtbGFiZWwtXCJdJyk7XG5cdGlmICghdGV4dGFyZWE/LmlkIHx8IHR5cGVvZiB3aW5kb3cubmV4dG9yYU1vdW50VGlwdGFwQ29uZmlnICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2luZG93Lm5leHRvcmFNb3VudFRpcHRhcENvbmZpZyh7XG5cdFx0aG9zdElkOiBob3N0LmlkLFxuXHRcdHRleHRhcmVhU2VsZWN0b3I6IGAjJHtDU1MuZXNjYXBlKHRleHRhcmVhLmlkKX1gLFxuXHRcdGxhYmVsSWQ6IGxhYmVsPy5pZCA/PyAnJyxcblx0XHR0b29sYmFyU2VsZWN0b3I6ICcubmV4dG9yYS10aXB0YXAtdG9vbGJhcicsXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzY2hlZHVsZUNvbnRhY3RGb3JtVGlwdGFwUmV0cmllcyhmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3QgZGVsYXlzID0gWzAsIDUwLCAxNTAsIDQwMF07XG5cdGZvciAoY29uc3QgZGVsYXkgb2YgZGVsYXlzKSB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y29uc3QgaG9zdCA9IGZvcm0ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXRpcHRhcC1ob3N0W2lkXScpO1xuXHRcdFx0aWYgKCFob3N0IHx8IGlzVGlwdGFwSG9zdE1vdW50ZWQoaG9zdCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZW5zdXJlQ29udGFjdEZvcm1UaXB0YXAoZm9ybSk7XG5cdFx0fSwgZGVsYXkpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlYWRNZXNzYWdlVmFsdWUoXG5cdGZvcm06IEhUTUxGb3JtRWxlbWVudCxcblx0bWVzc2FnZUZpZWxkOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCxcbik6IHN0cmluZyB7XG5cdGNvbnN0IGhvc3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS10aXB0YXAtaG9zdFtpZF0nKTtcblx0aWYgKGhvc3Q/LmlkICYmIHR5cGVvZiB3aW5kb3cubmV4dG9yYVN5bmNUaXB0YXBIb3N0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0d2luZG93Lm5leHRvcmFTeW5jVGlwdGFwSG9zdChob3N0LmlkKTtcblx0fVxuXG5cdHJldHVybiAobWVzc2FnZUZpZWxkPy52YWx1ZSA/PyAnJykudHJpbSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRSZWNhcHRjaGFUb2tlbihmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRpZiAoZm9ybS5kYXRhc2V0LnJlY2FwdGNoYSAhPT0gJzEnKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3Qgc2l0ZUtleSA9IGZvcm0uZGF0YXNldC5yZWNhcHRjaGFTaXRlS2V5Py50cmltKCkgPz8gJyc7XG5cdGlmICghc2l0ZUtleSB8fCAhd2luZG93LmdyZWNhcHRjaGEpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHdpbmRvdy5ncmVjYXB0Y2hhPy5yZWFkeSgoKSA9PiB7XG5cdFx0XHR3aW5kb3cuZ3JlY2FwdGNoYVxuXHRcdFx0XHQ/LmV4ZWN1dGUoc2l0ZUtleSwgeyBhY3Rpb246ICdjb250YWN0X2Zvcm0nIH0pXG5cdFx0XHRcdC50aGVuKHJlc29sdmUpXG5cdFx0XHRcdC5jYXRjaChyZWplY3QpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdFNjcm9sbFJldmVhbChyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSB8fCByb290LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLXNjcm9sbC1yZXZlYWwnKSAhPT0gJzEnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChyb290LmdldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvbnRhY3QtZm9ybS1zY3JvbGwtaW5pdCcpID09PSAnMScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyb290LmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtY29udGFjdC1mb3JtLS1yZXZlYWwtcGVuZGluZycpO1xuXHRyb290LnNldEF0dHJpYnV0ZSgnZGF0YS1uZXh0b3JhLWNvbnRhY3QtZm9ybS1zY3JvbGwtaW5pdCcsICcxJyk7XG5cblx0Y29uc3QgcmV2ZWFsID0gKCk6IHZvaWQgPT4ge1xuXHRcdHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnbmV4dG9yYS1jb250YWN0LWZvcm0tLXJldmVhbC1wZW5kaW5nJyk7XG5cdFx0cm9vdC5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLWNvbnRhY3QtZm9ybS0tcmV2ZWFsLXJlYWR5Jyk7XG5cdH07XG5cblx0aWYgKHR5cGVvZiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0XHRcdChlbnRyaWVzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdFx0XHRcdGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdFx0cmV2ZWFsKCk7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0eyB0aHJlc2hvbGQ6IDAuMTIsIHJvb3RNYXJnaW46ICcwcHggMHB4IC04JSAwcHgnIH0sXG5cdFx0KTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKHJvb3QpO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KHJldmVhbCwgMTgwMCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV2ZWFsKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaW5pdENvbnRhY3RGb3JtKGZvcm06IEhUTUxGb3JtRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCBibG9ja1Jvb3QgPSBmb3JtLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1jb250YWN0LWZvcm0nKTtcblx0Ly8gTm90aWNlIGlzIHJlbmRlcmVkIGFzIGEgc2libGluZyBhYm92ZSB0aGUgZm9ybSBpbiByZW5kZXIucGhwIFx1MjAxNCBub3QgaW5zaWRlIDxmb3JtPi5cblx0Y29uc3Qgbm90aWNlID1cblx0XHRibG9ja1Jvb3Q/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1jb250YWN0LWZvcm1fX25vdGljZScpID8/IG51bGw7XG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJy5uZXh0b3JhLWNvbnRhY3QtZm9ybV9fc3VibWl0Jyk7XG5cdGNvbnN0IG1lc3NhZ2VGaWVsZCA9IGZvcm0ucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT1cIm1lc3NhZ2VcIl0nKTtcblxuXHRpZiAoIW5vdGljZSB8fCAhc3VibWl0QnRuKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmV4dG9yYS1jb250YWN0LWZvcm0taW5pdGVkJywgJzEnKTtcblxuXHRpZiAoYmxvY2tSb290KSB7XG5cdFx0aW5pdFNjcm9sbFJldmVhbChibG9ja1Jvb3QpO1xuXHR9XG5cblx0c2NoZWR1bGVDb250YWN0Rm9ybVRpcHRhcFJldHJpZXMoZm9ybSk7XG5cblx0Y29uc3QgcmVzdFVybCA9IGZvcm0uZGF0YXNldC5yZXN0VXJsPy50cmltKCkgPz8gJyc7XG5cdGNvbnN0IG5vbmNlID0gZm9ybS5kYXRhc2V0Lm5vbmNlPy50cmltKCkgPz8gJyc7XG5cdGNvbnN0IHNlbmRpbmdMYWJlbCA9IGZvcm0uZGF0YXNldC5zZW5kaW5nTGFiZWw/LnRyaW0oKSB8fCAnU2VuZGluZ1x1MjAyNic7XG5cdGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID1cblx0XHRmb3JtLmRhdGFzZXQuc3VjY2Vzc01lc3NhZ2U/LnRyaW0oKSB8fCAnVGhhbmsgeW91ISBZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudC4nO1xuXHRjb25zdCBkZWZhdWx0RXJyb3IgPSBnZXRFcnJvck1lc3NhZ2UoZm9ybSwgJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuXHRjb25zdCByZXF1aXJlZEVycm9yID1cblx0XHRmb3JtLmRhdGFzZXQucmVxdWlyZWRFcnJvcj8udHJpbSgpIHx8ICdQbGVhc2UgZmlsbCBpbiBhbGwgcmVxdWlyZWQgZmllbGRzLic7XG5cdGNvbnN0IGludmFsaWRFbWFpbEVycm9yID1cblx0XHRmb3JtLmRhdGFzZXQuaW52YWxpZEVtYWlsRXJyb3I/LnRyaW0oKSB8fCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy4nO1xuXG5cdGNvbnN0IGRlZmF1bHRCdG5MYWJlbCA9IHN1Ym1pdEJ0bi50ZXh0Q29udGVudD8udHJpbSgpIHx8ICdTZW5kIE1lc3NhZ2UnO1xuXG5cdGNvbnN0IGNsZWFyRXJyb3JzT25FZGl0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNsZWFyRmllbGRFcnJvcnMoZm9ybSk7XG5cdH07XG5cblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNsZWFyRXJyb3JzT25FZGl0KTtcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2xlYXJFcnJvcnNPbkVkaXQpO1xuXG5cdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRoaWRlTm90aWNlKG5vdGljZSk7XG5cdFx0Y2xlYXJGaWVsZEVycm9ycyhmb3JtKTtcblxuXHRcdGNvbnN0IGZ1bGxOYW1lID0gKFxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwiZnVsbF9uYW1lXCJdJyk/LnZhbHVlID8/ICcnXG5cdFx0KS50cmltKCk7XG5cdFx0Y29uc3QgcGhvbmUgPSAoXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJwaG9uZVwiXScpPy52YWx1ZSA/PyAnJ1xuXHRcdCkudHJpbSgpO1xuXHRcdGNvbnN0IGVtYWlsID0gKFxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKT8udmFsdWUgPz8gJydcblx0XHQpLnRyaW0oKTtcblx0XHRjb25zdCBtZXNzYWdlID0gcmVhZE1lc3NhZ2VWYWx1ZShmb3JtLCBtZXNzYWdlRmllbGQpO1xuXHRcdGNvbnN0IGhvbmV5cG90ID0gKFxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwiY29tcGFueV93ZWJzaXRlXCJdJyk/LnZhbHVlID8/ICcnXG5cdFx0KS50cmltKCk7XG5cblx0XHRpZiAoaG9uZXlwb3QgIT09ICcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsaWRhdGlvbkVycm9ycyA9IGNvbGxlY3RWYWxpZGF0aW9uRXJyb3JzKGZ1bGxOYW1lLCBlbWFpbCwgbWVzc2FnZSk7XG5cdFx0aWYgKHZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0c2V0RmllbGRFcnJvcnMoZm9ybSwgdmFsaWRhdGlvbkVycm9ycyk7XG5cdFx0XHRjb25zdCBvbmx5SW52YWxpZEVtYWlsID1cblx0XHRcdFx0dmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDEgJiZcblx0XHRcdFx0dmFsaWRhdGlvbkVycm9yc1swXSA9PT0gJ2VtYWlsJyAmJlxuXHRcdFx0XHRmdWxsTmFtZSAhPT0gJycgJiZcblx0XHRcdFx0ZW1haWwgIT09ICcnICYmXG5cdFx0XHRcdCFpc01lc3NhZ2VFbXB0eShtZXNzYWdlKTtcblx0XHRcdHNob3dOb3RpY2Uobm90aWNlLCBvbmx5SW52YWxpZEVtYWlsID8gaW52YWxpZEVtYWlsRXJyb3IgOiByZXF1aXJlZEVycm9yLCAnZXJyb3InKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXJlc3RVcmwgfHwgIW5vbmNlKSB7XG5cdFx0XHRzaG93Tm90aWNlKG5vdGljZSwgZGVmYXVsdEVycm9yLCAnZXJyb3InKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdWJtaXRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IHNlbmRpbmdMYWJlbDtcblxuXHRcdGNvbnN0IGluc3RhbmNlSW5kZXggPSBwYXJzZUludChmb3JtLmRhdGFzZXQuaW5zdGFuY2VJbmRleCA/PyAnMCcsIDEwKSB8fCAwO1xuXHRcdGNvbnN0IHBvc3RJZCA9IHBhcnNlSW50KGZvcm0uZGF0YXNldC5wb3N0SWQgPz8gJzAnLCAxMCkgfHwgMDtcblx0XHRjb25zdCBjb25maWdBZG1pbkVtYWlsID0gZm9ybS5kYXRhc2V0LmFkbWluRW1haWw/LnRyaW0oKSA/PyAnJztcblx0XHRjb25zdCBjb25maWdBZG1pbkVtYWlsVG9rZW4gPSBmb3JtLmRhdGFzZXQuYWRtaW5FbWFpbFRva2VuPy50cmltKCkgPz8gJyc7XG5cdFx0Y29uc3QgY29uZmlnUmVjYXB0Y2hhU2l0ZUtleSA9IGZvcm0uZGF0YXNldC5yZWNhcHRjaGFTaXRlS2V5Py50cmltKCkgPz8gJyc7XG5cdFx0Y29uc3QgY29uZmlnUmVjYXB0Y2hhVG9rZW4gPSBmb3JtLmRhdGFzZXQucmVjYXB0Y2hhQ29uZmlnVG9rZW4/LnRyaW0oKSA/PyAnJztcblxuXHRcdGxldCByZWNhcHRjaGFUb2tlbiA9ICcnO1xuXHRcdGlmIChmb3JtLmRhdGFzZXQucmVjYXB0Y2hhID09PSAnMScpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlY2FwdGNoYVRva2VuID0gYXdhaXQgZ2V0UmVjYXB0Y2hhVG9rZW4oZm9ybSk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0c2hvd05vdGljZShub3RpY2UsIGRlZmF1bHRFcnJvciwgJ2Vycm9yJyk7XG5cdFx0XHRcdHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBkZWZhdWx0QnRuTGFiZWw7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXN0VXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGZ1bGxfbmFtZTogZnVsbE5hbWUsXG5cdFx0XHRcdFx0cGhvbmUsXG5cdFx0XHRcdFx0ZW1haWwsXG5cdFx0XHRcdFx0bWVzc2FnZSxcblx0XHRcdFx0XHRfd3Bub25jZTogbm9uY2UsXG5cdFx0XHRcdFx0aW5zdGFuY2VfaW5kZXg6IGluc3RhbmNlSW5kZXgsXG5cdFx0XHRcdFx0cG9zdF9pZDogcG9zdElkLFxuXHRcdFx0XHRcdGNvbmZpZ19hZG1pbl9lbWFpbDogY29uZmlnQWRtaW5FbWFpbCxcblx0XHRcdFx0XHRjb25maWdfYWRtaW5fZW1haWxfdG9rZW46IGNvbmZpZ0FkbWluRW1haWxUb2tlbixcblx0XHRcdFx0XHRjb25maWdfcmVjYXB0Y2hhX3NpdGVfa2V5OiBjb25maWdSZWNhcHRjaGFTaXRlS2V5LFxuXHRcdFx0XHRcdGNvbmZpZ19yZWNhcHRjaGFfdG9rZW46IGNvbmZpZ1JlY2FwdGNoYVRva2VuLFxuXHRcdFx0XHRcdHJlY2FwdGNoYV90b2tlbjogcmVjYXB0Y2hhVG9rZW4sXG5cdFx0XHRcdH0pLFxuXHRcdFx0fSk7XG5cblx0XHRcdGxldCBwYXlsb2FkOiBSZXN0UGF5bG9hZCA9IHt9O1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGF5bG9hZCA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIFJlc3RQYXlsb2FkO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHBheWxvYWQgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlLm9rICYmIHBheWxvYWQuc3VjY2Vzcykge1xuXHRcdFx0XHRzaG93Tm90aWNlKG5vdGljZSwgcGF5bG9hZC5tZXNzYWdlPy50cmltKCkgfHwgc3VjY2Vzc01lc3NhZ2UsICdzdWNjZXNzJyk7XG5cdFx0XHRcdGNsZWFyRmllbGRFcnJvcnMoZm9ybSk7XG5cdFx0XHRcdGZvcm0ucmVzZXQoKTtcblx0XHRcdFx0Y29uc3QgdGlwdGFwSG9zdCA9IGZvcm0ucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXRpcHRhcC1ob3N0W2lkXScpO1xuXHRcdFx0XHRpZiAodGlwdGFwSG9zdD8uaWQgJiYgdHlwZW9mIHdpbmRvdy5uZXh0b3JhQ2xlYXJUaXB0YXBIb3N0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0d2luZG93Lm5leHRvcmFDbGVhclRpcHRhcEhvc3QodGlwdGFwSG9zdC5pZCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobWVzc2FnZUZpZWxkKSB7XG5cdFx0XHRcdFx0bWVzc2FnZUZpZWxkLnZhbHVlID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGVyck1zZyA9XG5cdFx0XHRcdFx0dHlwZW9mIHBheWxvYWQubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgcGF5bG9hZC5tZXNzYWdlLnRyaW0oKSAhPT0gJydcblx0XHRcdFx0XHRcdD8gcGF5bG9hZC5tZXNzYWdlLnRyaW0oKVxuXHRcdFx0XHRcdFx0OiBkZWZhdWx0RXJyb3I7XG5cdFx0XHRcdGNvbnN0IHNlcnZlckZpZWxkcyA9IHJlc29sdmVTZXJ2ZXJGaWVsZEVycm9ycyhcblx0XHRcdFx0XHRwYXlsb2FkLFxuXHRcdFx0XHRcdGZ1bGxOYW1lLFxuXHRcdFx0XHRcdGVtYWlsLFxuXHRcdFx0XHRcdG1lc3NhZ2UsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChzZXJ2ZXJGaWVsZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNldEZpZWxkRXJyb3JzKGZvcm0sIHNlcnZlckZpZWxkcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hvd05vdGljZShub3RpY2UsIGVyck1zZywgJ2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRzaG93Tm90aWNlKG5vdGljZSwgZGVmYXVsdEVycm9yLCAnZXJyb3InKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c3VibWl0QnRuLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBkZWZhdWx0QnRuTGFiZWw7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdEFsbCgpOiB2b2lkIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRm9ybUVsZW1lbnQ+KEZPUk1fU0VMRUNUT1IpLmZvckVhY2goKGZvcm0pID0+IHtcblx0XHRpbml0Q29udGFjdEZvcm0oZm9ybSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBib290Q29udGFjdEZvcm1zKCk6IHZvaWQge1xuXHQvLyBSdW4gYWZ0ZXIgaW5pdENvbW1lbnRUaXB0YXAgKHNhbWUgZXZlbnQ7IG1haW4gYnVuZGxlIHJlZ2lzdGVycyBmaXJzdCkuXG5cdGluaXRBbGwoKTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdENvbnRhY3RGb3Jtcyk7XG59IGVsc2Uge1xuXHRib290Q29udGFjdEZvcm1zKCk7XG59XG5cbmV4cG9ydCB7fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQWVBLE1BQU0sZ0JBQWdCO0FBRXRCLE1BQU0sbUJBQW1CO0FBRXpCLE1BQU0sV0FBVztBQWNqQixXQUFTLHVCQUFnQztBQUN4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
