const ID = 'G-LM1F5JQV84';
const KEY = 'jf-analytics-consent-v1';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
let started = false;

export function getConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return saved && Date.now() - saved.time < MAX_AGE && ['accepted', 'rejected'].includes(saved.choice) ? saved.choice : null;
  } catch { return null; }
}

export function startAnalytics() {
  if (started || getConsent() !== 'accepted') return;
  started = true;
  window['ga-disable-' + ID] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', ID, { cookie_expires: 15552000, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: window.location.origin + window.location.pathname });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(script);
}

export function saveConsent(choice) {
  try { localStorage.setItem(KEY, JSON.stringify({ choice, time: Date.now() })); } catch { /* Tracking remains off if the choice cannot be stored. */ }
  if (choice === 'accepted') { startAnalytics(); return; }
  window['ga-disable-' + ID] = true;
  // Remove Analytics cookies on the host and parent domain when consent is withdrawn.
  const domains = ['', window.location.hostname, '.' + window.location.hostname, '.jaredfixes.com'];
  document.cookie.split(';').forEach(cookie => {
    const name = cookie.split('=')[0].trim();
    if (name === '_ga' || name.startsWith('_ga_')) domains.forEach(domain => {
      document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
    });
  });
  if (started) window.location.reload();
}

export function trackEvent(name) {
  if (getConsent() === 'accepted' && window.gtag) window.gtag('event', name);
}
