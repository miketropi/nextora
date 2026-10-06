"use strict";
(() => {
  // blocks/advanced-button-button/view.ts
  var BUTTON_SELECTOR = '[data-nextora-advanced-button-click-event="1"]:not([data-nextora-advanced-button-click-init="1"])';
  var INIT_ATTR = "data-nextora-advanced-button-click-init";
  function initClickEventButton(button) {
    if (button.getAttribute(INIT_ATTR) === "1") {
      return;
    }
    const eventId = button.getAttribute("data-nextora-advanced-button-event-id");
    if (!eventId) {
      return;
    }
    const scriptEl = document.getElementById(eventId);
    const code = scriptEl?.textContent?.trim() ?? "";
    if ("" === code) {
      return;
    }
    button.setAttribute(INIT_ATTR, "1");
    button.addEventListener("click", (event) => {
      event.preventDefault();
      try {
        const run = new Function("event", "button", code);
        run.call(button, event, button);
      } catch (error) {
        console.error("[nextora/advanced-button-button] Click event failed.", error);
      }
    });
  }
  function initAll() {
    document.querySelectorAll(BUTTON_SELECTOR).forEach(initClickEventButton);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDbGljay1ldmVudCBoYW5kbGVycyBmb3IgYG5leHRvcmEvYWR2YW5jZWQtYnV0dG9uLWJ1dHRvbmAuXG4gKi9cblxuY29uc3QgQlVUVE9OX1NFTEVDVE9SID1cblx0J1tkYXRhLW5leHRvcmEtYWR2YW5jZWQtYnV0dG9uLWNsaWNrLWV2ZW50PVwiMVwiXTpub3QoW2RhdGEtbmV4dG9yYS1hZHZhbmNlZC1idXR0b24tY2xpY2staW5pdD1cIjFcIl0pJztcbmNvbnN0IElOSVRfQVRUUiA9ICdkYXRhLW5leHRvcmEtYWR2YW5jZWQtYnV0dG9uLWNsaWNrLWluaXQnO1xuXG5mdW5jdGlvbiBpbml0Q2xpY2tFdmVudEJ1dHRvbiggYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCApOiB2b2lkIHtcblx0aWYgKCBidXR0b24uZ2V0QXR0cmlidXRlKCBJTklUX0FUVFIgKSA9PT0gJzEnICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGV2ZW50SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCAnZGF0YS1uZXh0b3JhLWFkdmFuY2VkLWJ1dHRvbi1ldmVudC1pZCcgKTtcblx0aWYgKCAhIGV2ZW50SWQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2NyaXB0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggZXZlbnRJZCApO1xuXHRjb25zdCBjb2RlID0gc2NyaXB0RWw/LnRleHRDb250ZW50Py50cmltKCkgPz8gJyc7XG5cdGlmICggJycgPT09IGNvZGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YnV0dG9uLnNldEF0dHJpYnV0ZSggSU5JVF9BVFRSLCAnMScgKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICggZXZlbnQgKSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0cnkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbXBsaWVkLWV2YWwgLS0gQWR2YW5jZWQgZWRpdG9yLW9ubHkgY3VzdG9tIGNsaWNrIHNjcmlwdHMuXG5cdFx0XHRjb25zdCBydW4gPSBuZXcgRnVuY3Rpb24oICdldmVudCcsICdidXR0b24nLCBjb2RlICkgYXMgKFxuXHRcdFx0XHRldmVudEFyZzogRXZlbnQsXG5cdFx0XHRcdGJ1dHRvbkFyZzogSFRNTEJ1dHRvbkVsZW1lbnQsXG5cdFx0XHQpID0+IHZvaWQ7XG5cdFx0XHRydW4uY2FsbCggYnV0dG9uLCBldmVudCwgYnV0dG9uICk7XG5cdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gU3VyZmFjZSBjdXN0b20gc2NyaXB0IGVycm9ycyB0byBkZXZlbG9wZXJzLlxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1tuZXh0b3JhL2FkdmFuY2VkLWJ1dHRvbi1idXR0b25dIENsaWNrIGV2ZW50IGZhaWxlZC4nLCBlcnJvciApO1xuXHRcdH1cblx0fSApO1xufVxuXG5mdW5jdGlvbiBpbml0QWxsKCk6IHZvaWQge1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yQWxsPCBIVE1MQnV0dG9uRWxlbWVudCA+KCBCVVRUT05fU0VMRUNUT1IgKVxuXHRcdC5mb3JFYWNoKCBpbml0Q2xpY2tFdmVudEJ1dHRvbiApO1xufVxuXG5pZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyApIHtcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0QWxsICk7XG59IGVsc2Uge1xuXHRpbml0QWxsKCk7XG59XG5cbmV4cG9ydCB7fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQUlBLE1BQU0sa0JBQ0w7QUFDRCxNQUFNLFlBQVk7QUFFbEIsV0FBUyxxQkFBc0IsUUFBa0M7QUFDaEUsUUFBSyxPQUFPLGFBQWMsU0FBVSxNQUFNLEtBQU07QUFDL0M7QUFBQSxJQUNEO0FBRUEsVUFBTSxVQUFVLE9BQU8sYUFBYyx1Q0FBd0M7QUFDN0UsUUFBSyxDQUFFLFNBQVU7QUFDaEI7QUFBQSxJQUNEO0FBRUEsVUFBTSxXQUFXLFNBQVMsZUFBZ0IsT0FBUTtBQUNsRCxVQUFNLE9BQU8sVUFBVSxhQUFhLEtBQUssS0FBSztBQUM5QyxRQUFLLE9BQU8sTUFBTztBQUNsQjtBQUFBLElBQ0Q7QUFFQSxXQUFPLGFBQWMsV0FBVyxHQUFJO0FBQ3BDLFdBQU8saUJBQWtCLFNBQVMsQ0FBRSxVQUFXO0FBQzlDLFlBQU0sZUFBZTtBQUNyQixVQUFJO0FBRUgsY0FBTSxNQUFNLElBQUksU0FBVSxTQUFTLFVBQVUsSUFBSztBQUlsRCxZQUFJLEtBQU0sUUFBUSxPQUFPLE1BQU87QUFBQSxNQUNqQyxTQUFVLE9BQVE7QUFFakIsZ0JBQVEsTUFBTyx3REFBd0QsS0FBTTtBQUFBLE1BQzlFO0FBQUEsSUFDRCxDQUFFO0FBQUEsRUFDSDtBQUVBLFdBQVMsVUFBZ0I7QUFDeEIsYUFDRSxpQkFBdUMsZUFBZ0IsRUFDdkQsUUFBUyxvQkFBcUI7QUFBQSxFQUNqQztBQUVBLE1BQUssU0FBUyxlQUFlLFdBQVk7QUFDeEMsYUFBUyxpQkFBa0Isb0JBQW9CLE9BQVE7QUFBQSxFQUN4RCxPQUFPO0FBQ04sWUFBUTtBQUFBLEVBQ1Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
