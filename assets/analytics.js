/* Google Analytics 4 — property "deadthinkers.com" under the daladim account,
   filed alongside the other properties there.

   THE MEASUREMENT ID LIVES HERE AND NOWHERE ELSE. Today the site is one page,
   so that looks like overkill — but the whole plan (design.md §4) is ~300
   pre-rendered mind pages, and there is no build step and no partials. The
   alternative is the same gtag block pasted into three hundred <head>s, which
   is three hundred copies of one fact. Every page loads this file instead.

   ⛔ What this must NEVER be used for: the visitor's API key or any part of a
   summoned conversation. D5/D7 — the key stays in the browser and the
   conversation is never transmitted anywhere. This counts page visits, and the
   page says so out loud in the colophon rather than burying it. A tracker that
   is disclosed is a trade-off; an undisclosed one under a privacy claim is a
   lie, and this site's entire pitch is that it does not tell them. */

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'G-P8GNM0PLG3');

var s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagmanager.com/gtag/js?id=G-P8GNM0PLG3';
document.head.appendChild(s);
