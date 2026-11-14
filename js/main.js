/* mossls — rendering, i18n and interactions */
(function () {
  "use strict";

  var DATA = window.MOSSLS || { products: [], categories: [], members: [] };
  var LANGS = window.I18N_LANGS || [];
  var I18N = window.I18N || {};
  var DEFAULT_LANG = "zh";
  var STORE_KEY = "mossls.lang";
  var REPO_BASE = "https://github.com/" + (DATA.orgLabel || "KOGGUA-EDIT") + "/";

  var lang = DEFAULT_LANG;
  var io = null;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }

  function t(key, vars) {
    var d = I18N[lang] || {};
    var s = d[key];
    if (s == null) s = (I18N[DEFAULT_LANG] || {})[key];
    if (s == null) return key;
    if (vars) {
      Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    }
    return s;
  }

  function pName(p) { return (p.names && p.names[lang]) || p.name; }
  function pTagline(p) { return (p.tagline && (p.tagline[lang] || p.tagline.en)) || ""; }
  function pDesc(p) { return (p.desc && (p.desc[lang] || p.desc.en)) || ""; }
  function pIndex(p) { return DATA.products.indexOf(p) + 1; }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function catOf(p) {
    return DATA.categories.filter(function (c) { return c.id === p.category; })[0] || DATA.categories[0];
  }
  function repoURL(p) { return REPO_BASE + p.repo; }
  function releaseURL(p) { return repoURL(p) + "/releases/latest"; }

  var ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON_DOWN = '<svg class="btn__ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M5 20h14"/></svg>';

  /* ---------------- language ---------------- */

  function normalize(code) {
    if (!code) return null;
    var c = String(code).toLowerCase();
    if (c === "zh" || c.indexOf("zh-") === 0) return "zh";
    var base = c.split("-")[0];
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === base) return base;
    return null;
  }

  function resolveLang() {
    var fromUrl = null, saved = null, detected = null;
    try { fromUrl = normalize(new URLSearchParams(location.search).get("lang")); } catch (e) {}
    try { saved = normalize(localStorage.getItem(STORE_KEY)); } catch (e) {}
    var nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""]);
    for (var i = 0; i < nav.length; i++) {
      detected = normalize(nav[i]);
      if (detected) break;
    }
    return fromUrl || saved || detected || DEFAULT_LANG;
  }

  function applyLang(next) {
    lang = normalize(next) || DEFAULT_LANG;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    var meta = LANGS.filter(function (l) { return l.code === lang; })[0] || { dir: "ltr" };
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir === "rtl" ? "rtl" : "ltr";
    document.title = t("meta.title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc"));

    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    $$("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    updateLangButton();
    renderNavLists();
    renderMarquee();
    renderHeroMeta();

    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome();
    if (page === "all") renderAllPage();
    if (page === "product") renderProduct();
    if (page === "team") renderTeam();
  }

  function setLang(code) {
    applyLang(code);
    try {
      var url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    } catch (e) {}
  }

  function updateLangButton() {
    var cur = LANGS.filter(function (l) { return l.code === lang; })[0];
    var label = $("#langCurrent");
    var code = $("#langCode");
    if (label && cur) label.textContent = cur.label;
    if (code) code.textContent = lang.toUpperCase();
    $$("#langMenu [data-lang]").forEach(function (b) {
      b.setAttribute("aria-selected", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function renderLangMenu() {
    var menu = $("#langMenu");
    if (!menu) return;
    menu.innerHTML = LANGS.map(function (l) {
      return '<li><button type="button" class="lang__opt" role="option" aria-selected="false" data-lang="' +
        l.code + '"><span>' + esc(l.label) + '</span><span class="lang__code">' + l.code.toUpperCase() + "</span></button></li>";
    }).join("");
    menu.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lang]");
      if (!b) return;
      setLang(b.getAttribute("data-lang"));
      closeLangMenu();
    });
  }

  function closeLangMenu() {
    var box = $("#lang"), btn = $("#langBtn");
    if (box) box.classList.remove("is-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  /* ---------------- header ---------------- */

  function renderNavLists() {
    DATA.categories.forEach(function (cat) {
      var host = $('[data-nav-list="' + cat.id + '"]');
      if (!host) return;
      var items = DATA.products.filter(function (p) { return p.category === cat.id; });
      host.innerHTML = items.map(function (p) {
        return '<a class="pitem" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
          '<span class="pitem__dot" style="background:' + cat.accent + '"></span>' +
          '<span><span class="pitem__name">' + esc(pName(p)) + "</span>" +
          '<span class="pitem__desc">' + esc(pTagline(p)) + "</span></span>" +
        "</a>";
      }).join("") +
      '<a class="pitem__more" href="all.html?cat=' + encodeURIComponent(cat.id) + '">' + esc(t("nav.viewAll")) + " →</a>";
    });
  }

  function closeNavItems() {
    $$(".navitem").forEach(function (item) {
      item.classList.remove("is-open");
      var btn = $(".navitem__btn", item);
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  function initHeader() {
    var menu = $("#navMenu");
    var burger = $("#burger");
    if (burger && menu) {
      burger.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    $$(".navitem__btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var item = btn.closest(".navitem");
        var open = item.classList.contains("is-open");
        closeNavItems();
        item.classList.toggle("is-open", !open);
        btn.setAttribute("aria-expanded", open ? "false" : "true");
      });
    });

    var langBox = $("#lang"), langBtn = $("#langBtn");
    if (langBox && langBtn) {
      langBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = langBox.classList.toggle("is-open");
        langBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".navitem")) closeNavItems();
      if (!e.target.closest("#lang")) closeLangMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeNavItems(); closeLangMenu(); }
    });
    if (menu) {
      menu.addEventListener("click", function (e) {
        if (e.target.closest("a") && burger) {
          menu.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  /* ---------------- reveal ---------------- */

  function observeReveals() {
    var nodes = $$(".reveal:not(.in)");
    if (!nodes.length) return;
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    }
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------------- home ---------------- */

  function renderHeroMeta() {
    var el = $("#heroMeta");
    if (!el) return;
    el.innerHTML = "<b>" + esc(t("sec.count", { n: DATA.products.length })) + "</b>" +
      ' · <a href="' + esc(DATA.org) + '" target="_blank" rel="noopener">GitHub ↗</a>';
    var chips = $("#heroChips");
    if (chips) chips.innerHTML = DATA.categories.map(function (c, i) {
      var n = DATA.products.filter(function (p) { return p.category === c.id; }).length;
      return '<a class="chip" href="#cat-' + c.id + '" style="--acc:' + c.accent + ";--acc-soft:" + c.soft + ";--r:" + [-4, 3, -2][i % 3] + 'deg">' +
        esc(t(c.labelKey)) + ' <b>' + n + "</b></a>";
    }).join("");
  }

  function renderMarquee() {
    var track = $("#marquee");
    if (!track) return;
    var parts = [t("marquee.open"), "MOSSLS", t("nav.scripts"), "MOSSLS", t("nav.plugins"), "MOSSLS", t("nav.software")];
    var unit = parts.map(function (s, i) {
      return '<span class="' + (i % 2 ? "outline" : "") + '">' + esc(s) + "</span>" +
        '<span class="star" aria-hidden="true">✦</span>';
    }).join("");
    track.innerHTML = unit + unit;
  }

  function cardHTML(p, i) {
    var cat = catOf(p);
    return '<a class="card reveal" href="product.html?id=' + encodeURIComponent(p.id) + '"' +
      ' style="--c1:' + p.c1 + ";--c2:" + p.c2 + ";--acc:" + cat.accent + ";--acc-soft:" + cat.soft +
      ";--rd:" + (i * 0.07).toFixed(2) + 's">' +
      '<span class="card__cover">' +
        '<span class="cover__dots"></span>' +
        (p.shots && p.shots.length
          ? '<span class="cover__shot"><img src="' + esc(p.shots[0]) + '" alt="" loading="lazy" decoding="async"></span>' +
            '<span class="cover__badge">' + esc(p.initial) + "</span>"
          : '<span class="cover__num">' + pad2(pIndex(p)) + "</span>" +
            '<span class="cover__tile">' + esc(p.initial) + "</span>") +
        '<span class="cover__cat">' + esc(t(cat.labelKey)) + "</span>" +
      "</span>" +
      '<span class="card__body">' +
        '<span class="card__name"><span>' + esc(pName(p)) + "</span>" +
          '<span class="card__go" aria-hidden="true">' + ICON_ARROW + "</span></span>" +
        '<span class="card__tag">' + esc(pTagline(p)) + "</span>" +
        '<span class="card__foot">' +
          p.tags.slice(0, 2).map(function (tag) { return '<span class="tag">' + esc(tag) + "</span>"; }).join("") +
          '<span class="tag tag--ver">' + esc(p.version) + "</span>" +
        "</span>" +
      "</span>" +
    "</a>";
  }

  function soonCardHTML(cat) {
    return '<a class="card card--soon reveal" href="' + esc(DATA.org) + '" target="_blank" rel="noopener"' +
      ' style="--acc:' + cat.accent + ";--acc-soft:" + cat.soft + ';--rd:.14s">' +
      '<span class="soon__plus" aria-hidden="true">+</span>' +
      '<span class="soon__title">' + esc(t("card.soon")) + "</span>" +
      '<span class="soon__sub">' + esc(t("card.soonSub")) + "</span>" +
      '<span class="soon__stickers" aria-hidden="true"><i>✦</i><i>●</i><i>✦</i></span>' +
    "</a>";
  }

  function renderHome() {
    renderSections();
  }

  /* ---------------- sections ---------------- */

  var HOME_LIMIT = 3;

  function renderSections() {
    var wrap = $("#sections");
    if (!wrap) return;
    wrap.innerHTML = DATA.categories.map(function (cat, ci) {
      var items = DATA.products.filter(function (p) { return p.category === cat.id; });
      var more = items.length > HOME_LIMIT
        ? '<a class="section__all reveal" style="--rd:.12s" href="all.html?cat=' + encodeURIComponent(cat.id) + '">' +
            "<span>" + esc(t("section.all")) + ' <span class="section__allnum">' + items.length + "</span></span>" +
            "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h13M12 5l7 7-7 7\"/></svg>" +
          "</a>"
        : "";
      return '<section class="section" id="cat-' + cat.id + '" style="--acc:' + cat.accent + ";--acc-soft:" + cat.soft + '">' +
        '<header class="section__head">' +
          '<span class="section__num reveal">' + pad2(ci + 1) + "</span>" +
          '<div class="section__titlewrap">' +
            '<h2 class="section__title reveal" style="--rd:.06s">' + esc(t(cat.labelKey)) + "</h2>" +
          "</div>" +
          more +
        "</header>" +
        (items.length
          ? '<div class="grid">' + items.slice(0, HOME_LIMIT).map(cardHTML).join("") +
              (items.length < HOME_LIMIT ? soonCardHTML(cat) : "") + "</div>"
          : '<p class="section__empty">' + esc(t("search.empty")) + "</p>") +
      "</section>";
    }).join("");
    observeReveals();
  }

  /* ---------------- search ---------------- */

  var APPS = ["EffectCraft", "DSH", "Windows"];
  var tokenCache = {};
  var allState = { q: "", type: "", app: "", order: null };

  function tokenize(raw) {
    return String(raw)
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .split(/[^0-9a-z\u3400-\u9fff]+/)
      .filter(Boolean);
  }

  function uniq(list) {
    var out = [];
    list.forEach(function (v) { if (out.indexOf(v) === -1) out.push(v); });
    return out;
  }

  function pTokens(p) {
    if (tokenCache[p.id]) return tokenCache[p.id];
    var nameParts = [p.name, p.id];
    if (p.names) Object.keys(p.names).forEach(function (l) { nameParts.push(p.names[l]); });
    var nameToks = [];
    nameParts.forEach(function (s) { nameToks = nameToks.concat(tokenize(s)); });
    var catToks = tokenize(t(catOf(p).labelKey));
    var tagToks = [];
    (p.tags || []).forEach(function (tag) { tagToks = tagToks.concat(tokenize(tag)); });
    var textToks = [];
    ["tagline", "desc"].forEach(function (k) {
      if (!p[k]) return;
      Object.keys(p[k]).forEach(function (l) { textToks = textToks.concat(tokenize(p[k][l])); });
    });
    var cache = {
      name: uniq(nameToks),
      all: uniq(nameToks.concat(catToks, tagToks, textToks)),
    };
    tokenCache[p.id] = cache;
    return cache;
  }

  // 名字按词首匹配；单个字母只搜名字（避免一输入 c 就命中所有带 EffectCraft 的项目）
  function matchesQuery(p, raw) {
    var q = String(raw || "").trim().toLowerCase();
    if (!q) return true;
    var parts = q.split(/\s+/).filter(Boolean);
    var cache = pTokens(p);
    return parts.every(function (part) {
      var cjk = /[\u3400-\u9fff]/.test(part);
      if (cjk) return cache.all.some(function (w) { return w.indexOf(part) !== -1; });
      if (part.length === 1) return cache.name.some(function (w) { return w.indexOf(part) === 0; });
      return cache.all.some(function (w) { return w.indexOf(part) !== -1; });
    });
  }

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = list[i]; list[i] = list[j]; list[j] = tmp;
    }
    return list;
  }

  function appOptions() {
    var used = [];
    DATA.products.forEach(function (p) {
      (p.tags || []).forEach(function (tag) {
        if (APPS.indexOf(tag) !== -1 && used.indexOf(tag) === -1) used.push(tag);
      });
    });
    return APPS.filter(function (a) { return used.indexOf(a) !== -1; });
  }

  function facetHTML(id, labelKey, options) {
    return '<div class="facet" data-facet="' + id + '">' +
      '<span class="facet__label">' + esc(t(labelKey)) + "</span>" +
      '<div class="chips">' + options.map(function (o) {
        var on = allState[id] === o.v;
        return '<button type="button" class="chip' + (on ? " is-on" : "") + '" data-value="' + esc(o.v) +
          '" aria-pressed="' + (on ? "true" : "false") + '">' + esc(o.label) + "</button>";
      }).join("") + "</div></div>";
  }

  function renderAllFacets() {
    var host = $("#allFacets");
    if (!host) return;
    var typeOpts = [{ v: "", label: t("filter.all") }].concat(DATA.categories.map(function (c) {
      return { v: c.id, label: t(c.labelKey) };
    }));
    var appOpts = [{ v: "", label: t("filter.all") }].concat(appOptions().map(function (a) {
      return { v: a, label: a };
    }));
    host.innerHTML = facetHTML("type", "filter.type", typeOpts) + facetHTML("app", "filter.app", appOpts);
  }

  function allItems() {
    return (allState.order || DATA.products).filter(function (p) {
      if (allState.type && p.category !== allState.type) return false;
      if (allState.app && (p.tags || []).indexOf(allState.app) === -1) return false;
      return matchesQuery(p, allState.q);
    });
  }

  function renderAllGrid() {
    var grid = $("#allGrid");
    if (!grid) return;
    var items = allItems();
    grid.innerHTML = items.map(cardHTML).join("");
    var count = $("#allCount");
    if (count) count.textContent = t("sec.count", { n: items.length });
    var empty = $("#allEmpty");
    if (empty) empty.hidden = items.length > 0;
    observeReveals();
  }

  function renderAllPage() {
    renderAllFacets();
    renderAllGrid();
    var input = $("#allQ");
    if (input && input.value !== allState.q) input.value = allState.q;
  }

  function syncAllUrl() {
    try {
      var url = new URL(location.href);
      if (allState.q) url.searchParams.set("q", allState.q); else url.searchParams.delete("q");
      if (allState.type) url.searchParams.set("cat", allState.type); else url.searchParams.delete("cat");
      if (allState.app) url.searchParams.set("app", allState.app); else url.searchParams.delete("app");
      history.replaceState(null, "", url);
    } catch (e) {}
  }

  function initAllPage() {
    if (document.body.getAttribute("data-page") !== "all") return;
    var params = new URLSearchParams(location.search);
    allState.q = (params.get("q") || "").trim();
    allState.type = params.get("cat") || "";
    allState.app = params.get("app") || "";
    allState.order = shuffle(DATA.products.slice());

    var form = $("#allSearch");
    var input = $("#allQ");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        allState.q = input ? input.value : allState.q;
        syncAllUrl();
        renderAllGrid();
      });
    }
    if (input) {
      input.addEventListener("input", function () {
        allState.q = input.value;
        syncAllUrl();
        renderAllGrid();
      });
      input.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        input.value = "";
        allState.q = "";
        syncAllUrl();
        renderAllGrid();
      });
    }
    var facets = $("#allFacets");
    if (facets) {
      facets.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (!chip) return;
        var facet = chip.closest(".facet");
        var id = facet && facet.getAttribute("data-facet");
        if (!id) return;
        allState[id] = chip.getAttribute("data-value") || "";
        syncAllUrl();
        renderAllFacets();
        renderAllGrid();
      });
    }
  }

  function initNavSearch() {
    var form = $("#navSearch");
    var input = $("#navQ");
    if (!form || !input) return;
    if (document.body.getAttribute("data-page") === "all") return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = input.value.trim();
      location.href = "all.html" + (v ? "?q=" + encodeURIComponent(v) : "");
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") input.blur();
    });
  }

  /* ---------------- product ---------------- */

  function shotHTML(p) {
    return '<div class="shot" style="--c1:' + p.c1 + ";--c2:" + p.c2 + '">' +
      '<div class="shot__win">' +
        '<div class="shot__bar"><i></i><i></i><i></i></div>' +
        '<div class="shot__ui"><span class="shot__side"></span>' +
          '<div class="shot__main"><i></i><i></i><i></i></div>' +
        "</div>" +
      "</div>" +
    "</div>";
  }

  function shotImg(p, src) {
    return '<div class="shot shot--img">' +
      '<img src="' + esc(src) + '" alt="' + esc(pName(p)) + '" loading="lazy" decoding="async" width="1600" height="1000">' +
    "</div>";
  }

  function shotsHTML(p) {
    if (p.shots && p.shots.length) {
      return p.shots.map(function (s) { return shotImg(p, s); }).join("");
    }
    return shotHTML(p) + shotHTML(p) + shotHTML(p);
  }

  function renderProduct() {
    var root = $("#productRoot");
    if (!root) return;
    var id = null;
    try { id = new URLSearchParams(location.search).get("id"); } catch (e) {}
    var p = DATA.products.filter(function (x) { return x.id === id; })[0];

    if (!p) {
      root.innerHTML = '<div class="notfound">' +
        '<span class="eyebrow">404</span>' +
        "<h1>" + esc(t("common.notfound")) + "</h1>" +
        "<p>" + esc(t("common.notfoundSub")) + "</p>" +
        '<a class="btn btn--primary" href="index.html">' + esc(t("common.back")) + "</a>" +
      "</div>";
      return;
    }

    document.title = pName(p) + " — mossls";
    var cat = catOf(p);
    var metas = [[t("common.version"), p.version], [t("common.platform"), p.platform]];
    if (p.license) metas.push([t("common.license"), p.license]);
    var related = DATA.products.filter(function (x) { return x.id !== p.id && x.category === p.category; }).slice(0, 3);

    root.innerHTML = '<header class="prod-head">' +
        '<div class="prod-cover' + (p.shots && p.shots.length ? " prod-cover--shot" : "") + '" style="--c1:' + p.c1 + ";--c2:" + p.c2 + '">' +
          (p.shots && p.shots.length
            ? '<span class="prod-cover__shot"><img src="' + esc(p.shots[0]) + '" alt="' + esc(pName(p)) + '" decoding="async"></span>' +
              '<span class="prod-cover__badge">' + esc(p.initial) + "</span>"
            : '<span class="prod-cover__num">' + pad2(pIndex(p)) + "</span>" +
              '<span class="prod-cover__tile">' + esc(p.initial) + "</span>") +
          '<span class="prod-cover__name">' + esc(pName(p)) + "</span>" +
        "</div>" +
        '<div class="prod-info">' +
          '<p class="eyebrow">' + esc(t(cat.labelKey)) + "</p>" +
          "<h1>" + esc(pName(p)) + "</h1>" +
          '<p class="lead">' + esc(pTagline(p)) + "</p>" +
          '<ul class="tags">' + p.tags.map(function (tag) { return '<li class="tag">' + esc(tag) + "</li>"; }).join("") + "</ul>" +
          '<dl class="meta-grid" style="--cols:' + metas.length + '">' + metas.map(function (m) {
            return "<div><dt>" + esc(m[0]) + "</dt><dd>" + esc(m[1]) + "</dd></div>";
          }).join("") + "</dl>" +
          '<div class="prod-actions">' +
            '<a class="btn btn--primary" href="' + esc(releaseURL(p)) + '" target="_blank" rel="noopener">' + esc(t("common.download")) + ICON_DOWN + "</a>" +
            '<a class="btn" href="' + esc(repoURL(p)) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
          "</div>" +
          '<p class="note">' + esc(t("common.releaseNote")) + "</p>" +
        "</div>" +
      "</header>" +
      '<div class="prod-body">' +
        "<h2>" + esc(t("common.overview")) + "</h2>" +
        "<p>" + esc(pDesc(p)) + "</p>" +
        "<h2>" + esc(t("common.preview")) + "</h2>" +
        '<div class="shots">' + shotsHTML(p) + "</div>" +
      "</div>" +
      (related.length ? '<section class="related">' +
        "<h2>" + esc(t("common.related")) + "</h2>" +
        '<div class="grid">' + related.map(cardHTML).join("") + "</div>" +
      "</section>" : "");
    observeReveals();
  }

  /* ---------------- team ---------------- */

  function renderTeam() {
    var box = $("#members");
    if (!box) return;
    box.innerHTML = DATA.members.map(function (m) {
      return '<article class="member reveal">' +
        '<img src="' + esc(m.avatar) + '" alt="" width="480" height="480" loading="lazy">' +
        "<div><h3 class=\"member__name\">" + esc(m.name) + "</h3>" +
        '<p class="member__role">' + esc(t(m.roleKey)) + "</p></div>" +
        '<a class="member__link" href="' + esc(m.github) + '" target="_blank" rel="noopener">GitHub ↗</a>' +
      "</article>";
    }).join("") +
      '<a class="member member--join reveal" href="' + esc(DATA.org) + '" target="_blank" rel="noopener">' +
        '<span class="member__plus" aria-hidden="true">+</span>' +
        "<div><h3 class=\"member__name\">" + esc(t("team.join")) + "</h3>" +
        '<p class="member__role">' + esc(t("team.joinSub")) + "</p></div>" +
      "</a>";
    observeReveals();
  }

  function scrollToHash() {
    if (!location.hash) return;
    var el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }

  /* ---------------- boot ---------------- */

  renderLangMenu();
  initHeader();
  initNavSearch();
  initAllPage();
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  applyLang(resolveLang());
  setTimeout(scrollToHash, 0);
})();
