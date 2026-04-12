// --- THE SILENT HIJACK ---
if (typeof document !== 'undefined') {
  // This redefines how the browser sets the title
  const originalTitle = document.title;

  Object.defineProperty(document, 'title', {
    set: function (value) {
      // Whenever Strapi tries to set a title containing "Strapi", 
      // we intercept it and swap it for "NEXFLARE"
      const newTitle = value.replace(/Strapi/g, 'NEXFLARE');
      document.querySelector('title')!.textContent = newTitle;
    },
    get: function () {
      return document.querySelector('title')?.textContent || '';
    },
    configurable: true
  });

  // Set the initial title immediately
  document.title = "Admin | NEXFLARE";
}
// --- END HIJACK ---

import Logo from '/logo.png';
import { Icon, Mail, Mailbox } from 'lucide-react'
import React, { createElement } from 'react';

export default {
  config: {
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    theme: {
      dark: {
        colors: {
          // 1. THIS KILLS THE NAV HIGHLIGHT BLUE
          primary100: 'hsl(0, 0%, 3%)', // Dark Flame background for active nav item
          primary200: 'hsl(24, 100%, 25%)', // Border for active nav item
          primary500: 'hsl(24, 100%, 55%)', // The Main Flame (Icons/Text)
          primary600: 'hsl(24, 100%, 60%)', // Hover Flame
          primary700: 'hsl(24, 90%, 65%)', // Active/Pressed Flame

          // 2. THIS KILLS THE SECONDARY "NAVY" BLUE (Sidebar background)
          secondary100: 'hsl(0, 0%, 3%)',   // Sidebar sub-menu background
          secondary200: 'hsl(0, 0%, 3%)', // Often used for small accents/badges

          // 3. BACKGROUND & NEUTRALS
          neutral0: 'hsl(0, 0%, 6%)',       // Component BG
          neutral100: 'hsl(0, 0%, 3%)',     // Main deep black BG
          neutral150: 'hsl(0, 0%, 10%)',    // Borders
          neutral800: 'hsl(0, 0%, 95%)',    // Text

          // 4. BUTTONS
          buttonPrimary500: 'hsl(24, 100%, 55%)',
          buttonPrimary600: 'hsl(24, 100%, 50%)',
        },
      },
      light: {
        colors: {
          primary500: 'hsl(24, 100%, 50%)',
          buttonPrimary500: 'hsl(24, 100%, 50%)',
        },
      },
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "NEXFLARE",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "NEXFLARE Admin",
        "app.components.HomePage.welcome": "Welcome to NEXFLARE",
        "notification.version.update.message": "NEXFLARE is up to date",
      },
    },
  },

  bootstrap(app: any) {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        /* 1. CSS Fallback: Target the specific Chargebee link and its parent container */
        a[href*="chargebeeportal.com"],
        a[href*="strapi.io/pricing"],
        div:has(> div > a[href*="chargebeeportal.com"]),
        [data-testid="upgrade-banner"] {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);

      // 2. The "Executioner": Watch for the element and remove it from the DOM
      const observer = new MutationObserver(() => {
        const upgradeLink = document.querySelector('a[href*="chargebeeportal.com"]');
        if (upgradeLink) {
          // Find the top-level container of the banner (usually 2 or 3 levels up)
          const banner = upgradeLink.closest('div[class*="sc-"]');
          if (banner && banner.parentElement) {
            banner.remove();
            console.log("NEXFLARE: Growth Banner Extinguished");
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    const managementLinks = [
      {
        name: 'Brevo',
        to: 'https://app.brevo.com/',
        customIcon: (
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Brevo--Streamline-Simple-Icons" height="18" width="18">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12 -12A12 12 0 0 0 12 0zM7.2 4.8h5.747c2.34 0 3.895 1.406 3.895 3.516 0 1.022 -0.348 1.862 -1.09 2.588C17.189 11.812 18 13.22 18 14.785c0 2.86 -2.64 5.016 -6.164 5.016H7.199v-15zm2.085 1.952v5.537h0.07c0.233 -0.432 0.858 -0.796 2.249 -1.226 2.039 -0.659 3.037 -1.52 3.037 -2.655 0 -0.998 -0.766 -1.656 -1.924 -1.656H9.285zm4.87 5.266c-0.766 0.385 -1.67 0.748 -2.76 1.11 -1.229 0.387 -2.11 1.386 -2.11 2.407v2.315h2.365c2.387 0 4.149 -1.34 4.149 -3.155 0 -1.067 -0.625 -2.087 -1.645 -2.677z" fill="#0a986f" stroke-width="1"></path>
          </svg>
        ),
        label: 'Mgmt: Brevo Dashboard'
      },
      {
        name: 'Hostinger',
        to: 'https://mail.hostinger.com/',
        customIcon: (
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Hostinger--Streamline-Simple-Icons" height="18" width="18">
            <path d="M16.415 0v7.16l5.785 3.384V2.949L16.415 0ZM1.8 0v11.237h18.815L14.89 8.09l-7.457 -0.003V3.024L1.8 0Zm14.615 20.894v-5.019l-7.514 -0.005c0.007 0.033 -5.82 -3.197 -5.82 -3.197l19.119 0.091V24l-5.785 -3.106ZM1.8 13.551v7.343l5.633 2.949v-6.988L1.8 13.551Z" fill="#673ce7" stroke-width="1"></path>
          </svg>
        ),
        label: 'Mgmt: Nexflare Webmail'
      },
      {
        name: 'Facebook',
        to: 'https://www.facebook.com/profile.php?id=61573409737062',
        customIcon: (
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Facebook--Streamline-Simple-Icons" height="18" width="18">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0 -4.085 1.848 -5.978 5.858 -5.978 0.401 0 0.955 0.042 1.468 0.103a8.68 8.68 0 0 1 1.141 0.195v3.325a8.623 8.623 0 0 0 -0.653 -0.036 26.805 26.805 0 0 0 -0.733 -0.009c-0.707 0 -1.259 0.096 -1.675 0.309a1.686 1.686 0 0 0 -0.679 0.622c-0.258 0.42 -0.374 0.995 -0.374 1.752v1.297h3.919l-0.386 2.103 -0.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0 -6.627 -5.373 -12 -12 -12s-12 5.373 -12 12c0 5.628 3.874 10.35 9.101 11.647Z" fill="#0966fe" stroke-width="1"></path>
          </svg>
        ),
        label: 'Mgmt: Facebook Page'
      }
    ];

    managementLinks.forEach((link) => {
      app.addMenuLink({
        to: link.to,
        icon: () => (
          <>{link.customIcon ? link.customIcon : createElement(link.icon, { size: 18 })}</>
        ),
        intlLabel: {
          id: `external-link.${link.name.toLowerCase()}`,
          defaultMessage: link.label,
        },
        // This ensures it opens in a new tab and doesn't break the Strapi session
        Component: async () => {
          const component = () => {
            window.open(link.to, '_blank', 'noopener,noreferrer');
            window.history.back();
            return null;
          };
          return component;
        },
      });
    });
  },
};