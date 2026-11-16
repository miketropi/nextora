import type { ReactNode } from 'react';

/** Native, keyboard-accessible disclosure; opening it never updates block attributes. */
export function InspectorSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="nextora-ac-inspector-section">
      <summary>{title}</summary>
      <div className="nextora-ac-inspector-section__body">{children}</div>
    </details>
  );
}

export function inspectorTitle(label: string, status: string): string {
  return `${label} — ${status}`;
}
