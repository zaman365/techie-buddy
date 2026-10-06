(function () {
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('mnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }

  // "Anfragen" buttons preselect the service in the form
  var select = document.getElementById('serviceSelect');
  document.querySelectorAll('[data-service]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!select) return;
      var v = a.getAttribute('data-service');
      for (var i = 0; i < select.options.length; i++) if (select.options[i].text === v) select.selectedIndex = i;
    });
  });

  // Contact form: builds a ready-to-send e-mail, nothing is stored on the site
  var form = document.getElementById('contactForm'), note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, missing = [];
      ['name', 'email', 'message'].forEach(function (k) { if (!f[k].value.trim()) missing.push(f[k]); });
      if (f.email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value)) missing.push(f.email);
      form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
      if (missing.length) {
        missing.forEach(function (el) { el.setAttribute('aria-invalid', 'true'); });
        missing[0].focus();
        note.textContent = 'Bitte Name, eine gültige E-Mail-Adresse und eine kurze Beschreibung eintragen.';
        return;
      }
      var subject = 'Anfrage: ' + f.service.value;
      var body = f.message.value.trim() + '\n\n—\nName: ' + f.name.value.trim() + '\nE-Mail: ' + f.email.value.trim() + '\nLeistung: ' + f.service.value;
      window.location.href = 'mailto:info@techiebuddy.de?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      note.textContent = 'Dein E-Mail-Programm sollte sich jetzt öffnen. Falls nicht, schreib direkt an info@techiebuddy.de.';
    });
  }
})();
