import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

/** Off-canvas panel that slides in from the right. Backdrop + Escape close, scroll-lock. */
export function Drawer({
  open,
  onClose,
  title,
  icon,
  children,
  footer,
}: DrawerProps) {
  const { t } = useI18n();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className="fixed inset-0 z-[80]"
      aria-hidden={!open}
      inert={!open ? true : undefined}
      style={{ pointerEvents: open ? "auto" : "none" }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={t.drawer.close}
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-default bg-green-dark/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-green-dark/10 px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif-display text-xl text-green-dark">
            {icon}
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.drawer.closePanel}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>

        {footer && (
          <div className="border-t border-green-dark/10 px-5 py-4">{footer}</div>
        )}
      </div>
    </div>
  );
}
