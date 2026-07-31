/* Return trip from Kit.

   The form POSTs straight to Kit and Kit redirects back to /?enrolled=1 — no Kit
   JavaScript is loaded, so nothing third-party runs on this page except the
   analytics tag the colophon already declares.

   Order matters below: the GA event fires BEFORE the query string is cleaned,
   or the conversion is invisible. Same trap as madamewhisper.com. */

(function () {
  var params = new URLSearchParams(window.location.search);
  if (!params.has('enrolled')) return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'signup_complete', { method: 'kit_waitlist' });
  }

  var form = document.getElementById('enrol');
  if (form) {
    var note = document.createElement('p');
    note.className = 'enrol-done';
    // textContent, not innerHTML: this is plain prose and never needs markup.
    note.textContent = 'Your name is in the book. One letter, on the day it opens — ' +
                       'and none before it.';
    form.parentNode.replaceChild(note, form);
  }

  // Clean the URL so a refresh or a shared link doesn't re-announce it.
  var clean = window.location.pathname + window.location.hash;
  window.history.replaceState({}, document.title, clean);
})();
