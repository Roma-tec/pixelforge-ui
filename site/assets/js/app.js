/* ==========================================================================
   PixelForge — общий модуль приложения
   Тема, аккаунт, проекты, тосты, модалки, иконки
   ========================================================================== */
(function (w) {
  'use strict';

  var K = {
    theme: 'pf-theme', accent: 'pf-accent', scale: 'pf-scale',
    user: 'pf-user', projects: 'pf-projects'
  };

  function ls(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      if (val === null) return localStorage.removeItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  function jget(key, def) {
    try { var v = ls(key); return v ? JSON.parse(v) : def; } catch (e) { return def; }
  }
  function jset(key, obj) { ls(key, JSON.stringify(obj)); }

  /* ---------------- ТЕМА ---------------- */
  var Theme = {
    get: function () { return ls(K.theme) || 'dark'; },
    set: function (t) {
      ls(K.theme, t);
      document.documentElement.setAttribute('data-theme', t);
      Theme.sync();
    },
    toggle: function () { Theme.set(Theme.get() === 'dark' ? 'light' : 'dark'); },
    sync: function () {
      var dark = Theme.get() === 'dark';
      Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (b) {
        b.textContent = dark ? '☀' : '☾';
        b.title = dark ? 'Светлая тема' : 'Тёмная тема';
      });
    }
  };

  /* ---------------- АКЦЕНТ И МАСШТАБ ---------------- */
  var Accent = {
    get: function () { return ls(K.accent) || 'violet'; },
    set: function (a) {
      ls(K.accent, a);
      if (a === 'violet') document.documentElement.removeAttribute('data-accent');
      else document.documentElement.setAttribute('data-accent', a);
      Array.prototype.forEach.call(document.querySelectorAll('[data-accent-pick]'), function (b) {
        b.classList.toggle('on', b.getAttribute('data-accent-pick') === a);
      });
    }
  };
  var Scale = {
    get: function () { return +(ls(K.scale) || 100); },
    set: function (s) {
      ls(K.scale, s);
      document.documentElement.style.setProperty('--scale', s / 100);
      document.documentElement.style.fontSize = (s / 100 * 14) + 'px';
      Array.prototype.forEach.call(document.querySelectorAll('[data-scale-pick]'), function (b) {
        b.classList.toggle('on', +b.getAttribute('data-scale-pick') === +s);
      });
    }
  };

  /* ---------------- ПОЛЬЗОВАТЕЛЬ ---------------- */
  var User = {
    get: function () { return jget(K.user, null); },
    set: function (u) { jset(K.user, u); },
    out: function () { ls(K.user, null); },
    initials: function () {
      var u = User.get(); if (!u || !u.name) return 'Г';
      return u.name.trim().split(/\s+/).map(function (p) { return p[0]; }).join('').slice(0, 2).toUpperCase();
    },
    full: function () { var u = User.get(); return u && u.name ? u.name : 'Гость'; },
    require: function (back) {
      if (!User.get()) {
        location.href = 'login.html' + (back ? '?next=' + encodeURIComponent(back) : '');
        return false;
      }
      return true;
    }
  };

  /* ---------------- ПРОЕКТЫ ---------------- */
  var GRADS = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'];
  var Projects = {
    all: function () { return jget(K.projects, null) || Projects.seed(); },
    save: function (list) { jset(K.projects, list); },
    get: function (id) {
      return Projects.all().filter(function (p) { return p.id === id; })[0] || null;
    },
    create: function (o) {
      var list = Projects.all();
      var p = {
        id: 'p' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36),
        name: o.name || 'Новый проект',
        w: o.w || 1080, h: o.h || 1080,
        grad: o.grad || GRADS[Math.floor(Math.random() * GRADS.length)],
        template: o.template || null,
        updated: Date.now(),
        layers: o.layers || null
      };
      list.unshift(p);
      Projects.save(list);
      return p;
    },
    update: function (id, patch) {
      var list = Projects.all();
      list.forEach(function (p) { if (p.id === id) { for (var k in patch) p[k] = patch[k]; p.updated = Date.now(); } });
      Projects.save(list);
    },
    remove: function (id) {
      Projects.save(Projects.all().filter(function (p) { return p.id !== id; }));
    },
    duplicate: function (id) {
      var p = Projects.get(id); if (!p) return null;
      var c = JSON.parse(JSON.stringify(p));
      c.id = 'p' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36);
      c.name = p.name + ' (копия)'; c.updated = Date.now();
      var list = Projects.all(); list.unshift(c); Projects.save(list);
      return c;
    },
    seed: function () {
      var base = [
        ['Летняя распродажа', 1080, 1080, 'g1'],
        ['Аватар для Telegram', 512, 512, 'g3'],
        ['Презентация_01', 1920, 1080, 'g2'],
        ['Мем для сторис', 1080, 1920, 'g6'],
        ['Иллюстрация «Город»', 1400, 1400, 'g5'],
        ['Ретушь фото 08', 2000, 1333, 'g4'],
        ['Логотип кофейни', 1000, 1000, 'g2'],
        ['Коллаж «Осень»', 1600, 1000, 'g1']
      ];
      var now = Date.now();
      var list = base.map(function (b, i) {
        return { id: 'seed' + i, name: b[0], w: b[1], h: b[2], grad: b[3],
                 updated: now - i * 3600e3 * (i + 1), layers: null };
      });
      Projects.save(list);
      return list;
    }
  };

  /* ---------------- ИКОНКИ ---------------- */
  var P = {
    move: 'M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3',
    select: 'M4 7V5h3M17 5h3v2M20 17v2h-3M7 19H4v-2M4 12h16',
    lasso: 'M12 5c5 0 8 3 8 6s-3 6-8 6-8-3-8-6 3-6 8-6zM8 16c-1 3 1 4 3 4',
    crop: 'M6 2v16h16M2 6h16v16',
    brush: 'M17 3l4 4-9 9-4-4 9-9zM8 16l-4 5 5-4',
    eraser: 'M4 16l8-8 8 8-4 4H8l-4-4zM9 21h11',
    fill: 'M4 12l7-8 7 8-7 8-7-8zM9 20l3-3',
    text: 'M4 6h16M12 6v13M9 19h6',
    shape: 'M3 4h11v11H3zM12 12h9v9h-9z',
    pipette: 'M14 3l7 7-3 3-7-7 3-3zM10 8l-6 6v5h5l6-6',
    zoom: 'M11 4a7 7 0 100 14 7 7 0 000-14zM16 16l5 5M8 11h6',
    hand: 'M7 12V6a1.5 1.5 0 013 0v5M10 11V5a1.5 1.5 0 013 0v6M13 11V7a1.5 1.5 0 013 0v7c0 4-3 7-6 7s-6-2-6-5v-4l-1-2 2-1 2 3',
    mask: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 3a9 9 0 010 18z',
    layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
    history: 'M4 12a8 8 0 108-8M4 12l-1-4M4 12l4-1M12 8v5l3 2',
    sparkle: 'M12 3v18M3 12h18M6 6l12 12M18 6L6 18',
    settings: 'M12 9a3 3 0 100 6 3 3 0 000-6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',
    grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
    list: 'M4 6h16M4 12h16M4 18h16',
    search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM16 16l5 5',
    plus: 'M12 5v14M5 12h14',
    trash: 'M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6',
    copy: 'M9 9h11v11H9zM4 15V4h11',
    eye: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6zM12 9a3 3 0 100 6 3 3 0 000-6z',
    eyeoff: 'M4 4l16 16M9 9a3 3 0 004 4M6 6C3.5 8 2 12 2 12s3.5 6 10 6c2 0 3.6-.5 5-1.2M11 6c.3 0 .7 0 1 0 6.5 0 10 6 10 6s-.9 1.6-2.6 3',
    lock: 'M6 11h12v9H6zM9 11V8a3 3 0 016 0v3',
    star: 'M12 3l2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8L12 3z',
    download: 'M12 3v12M7 10l5 5 5-5M4 21h16',
    image: 'M3 4h18v16H3zM3 16l5-5 4 4 3-3 6 6',
    folder: 'M3 6h6l2 2h10v12H3z',
    user: 'M12 11a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6',
    users: 'M9 11a4 4 0 100-8 4 4 0 000 8zM2 21c0-3 3-5 7-5s7 2 7 5M17 4a4 4 0 010 8M22 21c0-3-2-5-5-5',
    back: 'M15 5l-7 7 7 7',
    chev: 'M9 6l6 6-6 6',
    close: 'M6 6l12 12M18 6L6 18',
    check: 'M5 13l4 4 10-11',
    send: 'M4 12l16-8-6 16-3-6-7-2z',
    save: 'M5 3h11l3 3v15H5zM8 3v6h8V3M8 21v-7h8v7',
    phone: 'M7 2h10v20H7zM10 5h4M11 19h2',
    share: 'M12 3v11M8 7l4-4 4 4M5 13v7h14v-7'
  };
  function icon(name, size, cls) {
    var d = P[name] || P.grid;
    return '<svg class="' + (cls || '') + '" width="' + (size || 18) + '" height="' + (size || 18) +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
  }

  /* ---------------- ТОСТЫ ---------------- */
  function toast(msg, kind, title) {
    var box = document.getElementById('toasts');
    if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); }
    var el = document.createElement('div');
    el.className = 'toast ' + (kind || '');
    el.innerHTML = (title ? '<b>' + title + '</b>' : '') + msg;
    box.appendChild(el);
    setTimeout(function () {
      el.style.transition = 'opacity .25s,transform .25s';
      el.style.opacity = 0; el.style.transform = 'translateX(20px)';
      setTimeout(function () { el.remove(); }, 260);
    }, kind === 'err' ? 5200 : 3200);
  }

  /* ---------------- МОДАЛКИ ---------------- */
  function openModal(id) {
    var m = document.getElementById(id); if (!m) return;
    m.classList.add('on');
    var f = m.querySelector('input,select,textarea,button'); if (f) setTimeout(function () { f.focus(); }, 60);
  }
  function closeModal(id) {
    var m = typeof id === 'string' ? document.getElementById(id) : id;
    if (m) m.classList.remove('on');
  }
  document.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('modal')) e.target.classList.remove('on');
    var c = e.target.closest('[data-close]');
    if (c) closeModal(c.closest('.modal'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.modal.on'); if (open) open.classList.remove('on');
    }
  });

  /* ---------------- ХЕДЕР ---------------- */
  function header(el, opts) {
    if (!el) return;
    opts = opts || {};
    el.innerHTML =
      '<a href="dashboard.html" class="logo" title="PixelForge"></a>' +
      (opts.project
        ? '<b style="font-size:14px">' + opts.project + '</b><span class="dim" style="font-size:11px">✓ Сохранено</span>'
        : '<span class="brand">PixelForge</span>') +
      '<span class="spacer"></span>' +
      (opts.left || '') +
      '<button class="btn ghost icon" data-theme-toggle title="Тема">☀</button>' +
      '<a class="btn ghost" href="settings.html" title="Профиль" style="gap:8px">' +
      '<span style="width:24px;height:24px;border-radius:50%;background:var(--grad);color:#fff;display:grid;place-items:center;font-size:10px;font-weight:700">' +
      User.initials() + '</span><span>' + User.full().split(' ')[0] + '</span></a>';
  }

  /* ---------------- ПРОЧЕЕ ---------------- */
  function uid(p) { return (p || 'id') + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36); }
  function when(ts) {
    var d = Date.now() - ts, m = 60000, h = 3600e3, day = 86400e3;
    if (d < m) return 'только что';
    if (d < h) return Math.floor(d / m) + ' мин назад';
    if (d < day) return Math.floor(d / h) + ' ч назад';
    if (d < 7 * day) return Math.floor(d / day) + ' дн назад';
    return new Date(ts).toLocaleDateString('ru-RU');
  }
  function size(w, h) { return w + '×' + h; }

  /* ---------------- СТАРТ ---------------- */
  function boot() {
    document.documentElement.setAttribute('data-theme', Theme.get());
    var a = Accent.get();
    if (a !== 'violet') document.documentElement.setAttribute('data-accent', a);
    document.documentElement.style.fontSize = (Scale.get() / 100 * 14) + 'px';
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-theme-toggle]');
      if (t) { Theme.toggle(); }
      var ap = e.target.closest('[data-accent-pick]');
      if (ap) Accent.set(ap.getAttribute('data-accent-pick'));
      var sp = e.target.closest('[data-scale-pick]');
      if (sp) Scale.set(+sp.getAttribute('data-scale-pick'));
    });
    Theme.sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  w.PF = {
    Theme: Theme, Accent: Accent, Scale: Scale, User: User, Projects: Projects,
    toast: toast, openModal: openModal, closeModal: closeModal, header: header,
    icon: icon, uid: uid, when: when, size: size, GRADS: GRADS
  };
})(window);
