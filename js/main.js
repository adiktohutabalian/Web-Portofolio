// ===== Helper & navigasi =====
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
function toast(m) {
  const t = $("#toast");
  t.textContent = m;
  t.style.display = "block";
  clearTimeout(t._);
  t._ = setTimeout(() => (t.style.display = "none"), 2400);
}
function go(id) {
  if (!document.getElementById(id)) id = "home";
  $("#sxB").hidden = true;
  $("#sxP").hidden = true;
  $("#sxT").setAttribute("aria-expanded", "false");
  $$("#sxB button").forEach((b) => b.classList.remove("on"));
  $$(".view").forEach((v) => v.classList.toggle("on", v.id === id));
  $$("#menu button").forEach((b) => b.classList.toggle("on", b.dataset.go === (id === "hobi" ? "home" : id)));
  history.replaceState(null, "", "#" + id);
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (typeof musSync === "function") musSync(id);
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-go]");
  if (b) go(b.dataset.go);
});

// ===== Keahlian =====
$("#skills").innerHTML = SKG.map(
  ([n, a]) =>
    `<div style="margin-top:14px"><b style="font-size:14px">${n}</b><div style="margin-top:6px">${a.map((x) => `<span class="chip" style="background:var(--card);border:1.5px solid var(--ink)">${x}</span>`).join("")}</div></div>`,
).join("");

// ===== Sertifikat (tab & lightbox) =====
function drawC(k) {
  $("#clist").innerHTML = CT[k]
    .map(
      (c) =>
        `<div class="card cert"><div class="ic">${IC[c.i] || ""}</div><div><b>${c.t}</b><p class="sm">${c.o} · ${c.d}</p><p style="font-size:13px;margin-top:6px;line-height:1.5">${c.n}</p>${c.tag ? `<span class="chip" style="margin-top:6px;background:var(--pink)">${c.tag}</span>` : ""}${c.m ? `<div class="ths">${c.m.map((k, j) => `<button class="thb" data-k="${k}" data-t="${c.t}" aria-label="Lihat gambar sertifikat ${c.t}${c.m.length > 1 ? " halaman " + (j + 1) : ""}"><img src="${IMG[k]}" alt=""></button>`).join("")}</div><p class="sm" style="margin-top:6px">Klik gambar untuk memperbesar</p>` : ""}${c.l ? `<p style="margin-top:8px"><a class="link" style="font-size:13px" href="${c.l}" target="_blank" rel="noopener">Verifikasi sertifikat →</a></p>` : ""}</div></div>`,
    )
    .join("");
}
$("#cf").innerHTML = CTabs.map(
  ([k, n], i) => `<button data-k="${k}" class="${i ? "" : "on"}">${n}</button>`,
).join("");
$("#cf").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  $$("#cf button").forEach((x) => x.classList.toggle("on", x === b));
  drawC(b.dataset.k);
});
drawC("magang");
$("#clist").addEventListener("click", (e) => {
  const b = e.target.closest(".thb");
  if (!b) return;
  const l = $("#lb");
  l.querySelector("img").src = IMG[b.dataset.k];
  l.querySelector("p").textContent = b.dataset.t;
  l.classList.add("on");
});

// ===== Jam real-time =====
const fm = (z) =>
  new Intl.DateTimeFormat("id-ID", {
    timeZone: z,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .format(new Date())
    .replace(/\./g, ":");
const t0 = Date.now();
function tick() {
  $("#tWib").textContent = fm("Asia/Jakarta");
  $("#tUtc").textContent = fm("UTC");
  $("#dWib").textContent =
    new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(new Date()) + " · WIB";
  const s = Math.floor((Date.now() - t0) / 1000);
  $("#up").textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
tick();
setInterval(tick, 1000);

// ===== Tombol CV, salin email & ganti tema =====
$("#dl").onclick = () =>
  CV_URL ? window.open(CV_URL, "_blank", "noopener") : toast("Hubungkan ke file CV PDF kamu");
$("#cpm").onclick = async () => {
  const m = "adiktohutabalian72@gmail.com";
  try {
    await navigator.clipboard.writeText(m);
    toast("Email berhasil disalin");
  } catch (e) {
    toast(m);
  }
};
$("#theme").onclick = () => {
  const r = document.documentElement,
    d = r.dataset.theme === "dark" || (!r.dataset.theme && matchMedia("(prefers-color-scheme:dark)").matches);
  r.dataset.theme = d ? "light" : "dark";
};

// ===== Menu tersembunyi "lebih dekat" =====
function sxShow(k) {
  const d = SX[k],
    p = $("#sxP");
  $$("#sxB button").forEach((b) => b.classList.toggle("on", b.dataset.sx === k));
  const list = `<div><p class="over">${d.t}</p><div class="sxl">${d.items.map(([e, t]) => `<div><span class="ico" style="background:#ffd8df;width:34px;height:34px">${IC[e] || ""}</span><span>${t}</span></div>`).join("")}</div></div>`;
  const pol =
    d.photo !== undefined
      ? `<div class="pol"><div class="ph">${d.photo ? `<img src="${d.photo}" alt="Karakter favorit">` : "foto karakter favorit"}</div><p>my favorite ♥</p></div>`
      : "";
  p.className = "sxp" + (pol ? "" : " solo");
  p.innerHTML = pol + list;
  p.hidden = false;
}
$("#sxT").onclick = () => {
  const b = $("#sxB"),
    o = b.hidden;
  b.hidden = !o;
  $("#sxT").setAttribute("aria-expanded", o);
  if (!o) $("#sxP").hidden = true;
  else $$("#sxB button").forEach((x) => x.classList.remove("on"));
};
$$("#sxB button").forEach(
  (b) => (b.onclick = () => (b.dataset.sx === "hobi" ? go("hobi") : sxShow(b.dataset.sx))),
);

// ===== Halaman Hobi: galeri, waifu hari ini, lightbox =====
$("#gal").innerHTML =
  GAL.map(
    (g, i) =>
      `<button class="fr" data-i="${i}" aria-label="Perbesar ${g.t}"><div class="im"><img src="${g.src}" alt="${g.t}" loading="lazy"></div><div class="cp"><span><b>${g.t}</b><small>${g.s}</small></span><span class="chip">${g.g}</span></div></button>`,
  ).join("") +
  `<div class="slot"><div><svg class="bi" style="width:20px;height:20px" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg><br>Slot berikutnya<br>masih ada waifu lain</div></div>`;
let wi = 0,
  wdP = false;
$("#wdD").insertAdjacentHTML(
  "afterend",
  '<div id="wdDots" style="display:flex;gap:6px;margin-top:10px"></div>',
);
function wdShow(first) {
  const g = GAL[wi % GAL.length],
    im = $("#wdI");
  const set = () => {
    im.src = g.src;
    $("#wdT").textContent = g.t;
    $("#wdD").textContent = g.s;
    im.style.opacity = 1;
    $("#wdDots").innerHTML = GAL.map(
      (_, i) =>
        `<span style="width:${i === wi % GAL.length ? 22 : 8}px;height:8px;border-radius:99px;border:1.5px solid var(--ink);background:${i === wi % GAL.length ? "var(--orange)" : "var(--card)"};transition:.3s"></span>`,
    ).join("");
  };
  if (first) {
    set();
    return;
  }
  im.style.opacity = 0;
  setTimeout(set, 180);
}
wdShow(true);
setInterval(() => {
  if (wdP || !$("#hobi").classList.contains("on")) return;
  wi++;
  wdShow();
}, 4000);
$(".wd").addEventListener("mouseenter", () => (wdP = true));
$(".wd").addEventListener("mouseleave", () => (wdP = false));
$("#mqT").innerHTML = "ANIME ✦ MANHWA ✦ GAME ✦ ".repeat(8);
document.body.insertAdjacentHTML(
  "beforeend",
  '<div id="lb" role="dialog" aria-label="Pratinjau gambar"><img alt=""><p></p></div>',
);
const lb = $("#lb");
$("#gal").addEventListener("click", (e) => {
  const b = e.target.closest(".fr");
  if (!b) return;
  const g = GAL[b.dataset.i];
  lb.querySelector("img").src = g.src;
  lb.querySelector("p").textContent = g.t + " · " + g.s;
  lb.classList.add("on");
});
lb.onclick = () => lb.classList.remove("on");
addEventListener("keydown", (e) => {
  if (e.key === "Escape") lb.classList.remove("on");
});

// ===== Musik (opsional) =====
let au = null,
  musOn = true;
function musSync(id) {
  if (!MUSIC.src) return;
  if (id === "hobi" && musOn) {
    if (!au) {
      au = new Audio(MUSIC.src);
      au.volume = MUSIC.vol;
      au.preload = "auto";
      au.addEventListener("loadedmetadata", () => {
        if (au.currentTime < MUSIC.start) au.currentTime = MUSIC.start;
      });
      au.addEventListener("timeupdate", () => {
        if (au.currentTime >= MUSIC.end) au.currentTime = MUSIC.start;
      });
    }
    if (au.currentTime < MUSIC.start && au.readyState > 0) au.currentTime = MUSIC.start;
    au.play().catch(() => {});
  } else if (au) au.pause();
}
if (MUSIC.src) {
  const mb = $("#musB");
  mb.hidden = false;
  mb.onclick = () => {
    musOn = !musOn;
    mb.textContent = musOn ? "♪ Musik: nyala" : "♪ Musik: mati";
    musSync(musOn ? "hobi" : "");
  };
}

// ===== Cuplikan project (Vendora & game) =====
$("#pxT").innerHTML = PXC.map(
  ([k, t]) =>
    `<button class="thb" data-k="${k}" data-t="${t}" aria-label="Lihat ${t}"><img src="${IMG[k]}" alt=""></button>`,
).join("");
$("#pxT").addEventListener("click", (e) => {
  const b = e.target.closest(".thb");
  if (!b) return;
  const l = $("#lb");
  l.querySelector("img").src = IMG[b.dataset.k];
  l.querySelector("p").textContent = b.dataset.t;
  l.classList.add("on");
});
$("#gmT").innerHTML = GMC.map(
  ([k, t]) =>
    `<button class="thb" data-k="${k}" data-t="${t}" aria-label="Lihat ${t}"><img src="${IMG[k]}" alt=""></button>`,
).join("");
$("#gmT").addEventListener("click", (e) => {
  const b = e.target.closest(".thb");
  if (!b) return;
  const l = $("#lb");
  l.querySelector("img").src = IMG[b.dataset.k];
  l.querySelector("p").textContent = b.dataset.t;
  l.classList.add("on");
});

// ===== Efek animasi halaman Hobi =====
const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
if (!RM) {
  const fx = document.createElement("div");
  fx.className = "fx";
  fx.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 24; i++) {
    const s = document.createElement("span"),
      z = 10 + Math.random() * 16;
    s.style.cssText = `left:${Math.random() * 100}%;width:${z}px;height:${z}px;color:${FXC[i % 4]};animation-duration:${9 + Math.random() * 9}s,${2.5 + Math.random() * 2}s;animation-delay:${-Math.random() * 14}s,0s`;
    s.innerHTML = IC.spark;
    fx.appendChild(s);
  }
  $("#hobi").prepend(fx);
}
if (!RM && matchMedia("(hover:hover)").matches) {
  $("#gal").addEventListener("pointermove", (e) => {
    const f = e.target.closest(".fr");
    if (!f) return;
    const r = f.getBoundingClientRect();
    f.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 10 + "deg");
    f.style.setProperty("--rx", -((e.clientY - r.top) / r.height - 0.5) * 10 + "deg");
  });
  $("#gal").addEventListener("pointerout", (e) => {
    const f = e.target.closest(".fr");
    if (f) {
      f.style.removeProperty("--ry");
      f.style.removeProperty("--rx");
    }
  });
}
$("#hobi").addEventListener("click", (e) => {
  if (RM || e.target.closest("button,a")) return;
  for (let i = 0; i < 8; i++) {
    const s = document.createElement("span"),
      a = (i / 8) * 6.283 + Math.random() * 0.6,
      d = 40 + Math.random() * 50;
    s.className = "bst";
    s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;color:${FXC[i % 4]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
    s.innerHTML = IC.spark;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 850);
  }
});

// ===== Vibe hari ini (halaman Hobi) =====
(function () {
  const h =
    parseInt(
      new Intl.DateTimeFormat("id-ID", { timeZone: "Asia/Jakarta", hour: "numeric", hour12: false }).format(
        new Date(),
      ),
      10,
    ) % 24;
  const v = h < 4 ? VIBES[3] : [...VIBES].reverse().find((x) => h >= x[0]);
  $("#viT").textContent = v[1];
  $("#viS").textContent = v[2];
  let k = 0;
  const show = () => {
    const [ic, n] = VH[k % VH.length],
      el = $("#viI");
    el.innerHTML = IC[ic];
    el.classList.remove("sw");
    void el.offsetWidth;
    el.classList.add("sw");
    $("#viH").textContent = n;
  };
  show();
  setInterval(() => {
    if (!$("#hobi").classList.contains("on")) return;
    k++;
    show();
  }, 3500);
})();

// ===== Routing berbasis #hash =====
addEventListener("hashchange", () => go(location.hash.slice(1)));
go(location.hash.slice(1) || "home");
