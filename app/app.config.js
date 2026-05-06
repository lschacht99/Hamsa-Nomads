/* Hamsa Nomads Web App Configuration
   Replace placeholder URLs after dropping this /app folder into your repo.
   Launch-safe default: local/demo login + static content.
   Production path: connect authApiBase to the Cloudflare Worker in /extras. */
window.HN_APP_CONFIG = {
  brandName: 'Hamsa Nomads',
  homeUrl: 'https://www.hamsanomads.com',
  appUrl: 'https://www.hamsanomads.com/app/',
  applyUrl: 'https://www.hamsanomads.com/Forms/apply.html',
  paymentUrl: 'https://www.hamsanomads.com/Forms/payment.html',
  scheduleCallUrl: 'https://www.hamsanomads.com/schedule/call.html',
  whatsappInviteUrl: 'https://chat.whatsapp.com/ET7DARjTZ0kJbzPVXFhcjQ?mode=gi_t',

  // Optional: paste your deployed Google Apps Script Web App URL here.
  // If this remains empty, community form submissions are saved locally for testing.
  communityFormEndpoint: '',
  suggestCityFormEndpoint: '',

  // Set to false if you do not want people redirected to WhatsApp after the request form.
  redirectToWhatsappAfterSubmit: false,

  // AUTH
  // 'local' = launch/demo mode. Works instantly but is NOT secure for real user accounts.
  // 'api' = production mode. Set authApiBase to your Cloudflare Worker URL.
  authMode: 'local',
  authApiBase: '', // Example: 'https://hamsa-auth.YOUR_SUBDOMAIN.workers.dev'
  requireLoginForPaidActivities: true,

  // PAID ACTIVITIES
  // Keep these empty for launch. Add Stripe Payment Links or your payment page later.
  paidActivityMode: 'payment-link',
  paidActivityPaymentLinks: {
    'vermont-ai-escape-game': '',
    'city-secret-route-game': '',
    'shabbat-table-mystery-kit': ''
  },

  logoAssets: {
    icon: 'assets/logos/logo-icon.png',
    wordmark: 'assets/logos/logo-wordmark.png',
    wordmarkTagline: 'assets/logos/logo-tagline-wordmark.png',
    stacked: 'assets/logos/logo-stacked.png',
    stackedTagline: 'assets/logos/logo-stacked-tagline.png',
    horizontalIcon: 'assets/logos/logo-horizontal-icon.png',
    text2Line: 'assets/logos/logo-text-2line.png'
  },
  paidActivityFallbackUrl: 'community.html'
};
