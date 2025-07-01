import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
       <>
          <img
            src="/logosdocs.svg"
            alt="Logo"
            width={140}
            height={140}
            style={{ display: 'inline', marginRight: 8 }}
          />
          {/* DETECTA */}
        </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
