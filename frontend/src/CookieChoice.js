import React, { useEffect, useState } from 'react';
import { getConsent, saveConsent, startAnalytics } from './analytics';

export default function CookieChoice() {
  const [open, setOpen] = useState(() => !getConsent());
  useEffect(() => {
    startAnalytics();
    const sync = (event) => { if (event.key === 'jf-analytics-consent-v1') window.location.reload(); };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  function choose(choice) { saveConsent(choice); setOpen(false); }
  return <>
    <div className="text-center pb-6 text-sm"><a className="underline text-text-muted mr-5" href="/privacy.html">Privacy</a><button className="underline text-text-muted" onClick={() => setOpen(true)}>Cookie settings</button></div>
    {open && <section aria-label="Analytics cookie choice" className="fixed bottom-0 inset-x-0 z-[100] bg-zinc-950 border-t border-white/20 p-5 shadow-xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 md:items-center">
        <div className="flex-1"><h2 className="font-bold mb-2">Your cookie choice</h2><p className="text-sm text-gray-300">With your permission, we use Google Analytics to understand visits and enquiries. Analytics is off until you accept. Rejecting it does not affect the website or contact form. You can change your choice in Cookie settings. <a href="/privacy.html" className="underline">Privacy details</a></p></div>
        <div className="flex gap-3 shrink-0"><button onClick={() => choose('rejected')} className="border border-white rounded-lg px-4 py-3 font-semibold">Reject analytics</button><button onClick={() => choose('accepted')} className="border border-white rounded-lg px-4 py-3 font-semibold">Accept analytics</button></div>
      </div>
    </section>}
  </>;
}
