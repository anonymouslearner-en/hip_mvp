import { type ReactNode } from "react";

type LayoutType = "default" | "sidebar" | "fullscreen" | "split";

interface Props {
  children: ReactNode;
  layoutType?: LayoutType;
  title?: string;
  description?: string;
  keywords?: string;
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
}

export const Page = ({
  children,
  layoutType = "default",
  title = "HIP MVP",
  description = "",
  keywords = "",
  header,
  sidebar,
  footer,
}: Props) => {
  // Update document head
  if (title) {
    document.title = title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute("content", description);
  }

  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && keywords) {
    metaKeywords.setAttribute("content", keywords);
  }

  const layoutClasses = {
    default: "max-w-full",
    sidebar: "flex min-h-screen",
    fullscreen: "w-full h-screen",
    split: "grid grid-cols-1 lg:grid-cols-2 min-h-screen",
  };

  const renderLayout = () => {
    switch (layoutType) {
      case "sidebar":
        return (
          <div className={layoutClasses.sidebar}>
            {sidebar && (
              <aside className="w-64 bg-gray-50 border-r border-gray-200">
                {sidebar}
              </aside>
            )}
            <div className="flex-1 flex flex-col">
              {header && (
                <header className="border-b border-gray-200">{header}</header>
              )}
              <main className="flex-1 p-8">{children}</main>
              {footer && (
                <footer className="border-t border-gray-200">{footer}</footer>
              )}
            </div>
          </div>
        );

      case "fullscreen":
        return (
          <div className={layoutClasses.fullscreen}>
            {header && <header>{header}</header>}
            <main className="h-full">{children}</main>
            {footer && <footer>{footer}</footer>}
          </div>
        );

      case "split":
        return (
          <div className={layoutClasses.split}>
            {header && (
              <div className="sticky top-0 w-full min-h-16 shadow-md! bg-neutral-100 z-10">
                {header}
              </div>
            )}
            {children}
            {footer && (
              <footer className="col-span-full border-t border-gray-200">
                {footer}
              </footer>
            )}
          </div>
        );

      case "default":
      default:
        return (
          <div className="min-h-screen z-0 flex flex-col">
            {header && (
              <header className="sticky top-0 w-full min-h-16 shadow-md! bg-neutral-100 z-10">
                {header}
              </header>
            )}
            <main className={layoutClasses.default}>{children}</main>
            {footer && (
              <footer className="border-t border-gray-200 mt-auto">
                {footer}
              </footer>
            )}
          </div>
        );
    }
  };

  return renderLayout();
};
