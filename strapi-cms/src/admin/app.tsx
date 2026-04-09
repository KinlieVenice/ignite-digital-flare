// --- THE SILENT HIJACK ---
if (typeof document !== 'undefined') {
  // This redefines how the browser sets the title
  const originalTitle = document.title;
  
  Object.defineProperty(document, 'title', {
    set: function(value) {
      // Whenever Strapi tries to set a title containing "Strapi", 
      // we intercept it and swap it for "NEXFLARE"
      const newTitle = value.replace(/Strapi/g, 'NEXFLARE');
      document.querySelector('title')!.textContent = newTitle;
    },
    get: function() {
      return document.querySelector('title')?.textContent || '';
    },
    configurable: true
  });
  
  // Set the initial title immediately
  document.title = "Admin | NEXFLARE";
}
// --- END HIJACK ---

import Logo from '/logo.png';

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
  },
};