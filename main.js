/* ============================================================
   VISUAL ARCH — بيانات الأقسام
   عشان تضيف صور حقيقية لأي قسم:
   1) حط الصور جوه فولدر assets/images/<اسم-القسم>
   2) ضيف اسم كل ملف في المصفوفة images[] بتاعة القسم هنا تحت
   ============================================================ */
const categories = {
  "living-modern": {
    title: "Modern Living Room",
    ar: "صالون مودرن",
    folder: "living-room-modern",
    images: [
      { file: "01.jpg", cap: "وحدة التلفزيون والإضاءة المخفية" },
      { file: "02.jpg", cap: "ركن الاستقبال واللوحة الفنية" },
      { file: "03.jpg", cap: "إطلالة عامة على الصالون" },
      { file: "04.jpg", cap: "تفاصيل الجلسة والسجاد" }
    ]
  },
  "living-classic": {
    title: "Classic Living Room",
    ar: "صالون كلاسيك",
    folder: "living-room-classic",
    images: [
      { file: "01.jpg", cap: "جلسة القراءة والإضاءة السقفية" },
      { file: "02.jpg", cap: "صالون بطابع فاخر وإضاءة ذهبية" },
      { file: "03.jpg", cap: "جلسة كلاسيك بتفاصيل مطرزة" }
    ]
  },
  "kitchen": {
    title: "Kitchen",
    ar: "المطبخ",
    folder: "kitchen",
    images: [
      { file: "01.jpg", cap: "مطبخ حديث بخطوط داكنة وإضاءة مخفية" },
      { file: "02.jpg", cap: "مطبخ بتصميم رمادي وإضاءة سقف مميزة" }
    ]
  },
  "bathroom": {
    title: "Bathroom",
    ar: "الحمام",
    folder: "bathroom",
    images: [
      { file: "01.jpg", cap: "حمام بلمسة ذهبية وبانيو مستقل" },
      { file: "02.jpg", cap: "حمام برخام وخشب دافئ" },
      { file: "03.jpg", cap: "حمام مودرن برخام فاتح وتفاصيل سوداء" }
    ]
  },
  "bedroom": {
    title: "Bedroom",
    ar: "غرفة النوم",
    folder: "bedroom",
    images: [
      { file: "01.jpg", cap: "غرفة نوم فاخرة بتفاصيل مرايا ذهبية" },
      { file: "02.jpg", cap: "غرفة نوم مودرن بدولاب رمادي وإضاءة معلقة" }
    ]
  },
  "dining-room": {
    title: "Dining Room",
    ar: "غرفة السفرة",
    folder: "dining-room",
    images: [
      { file: "01.jpg", cap: "طاولة سفرة بتصميم عصري وإضاءة نيون" },
      { file: "02.jpg", cap: "سفرة خشبية دافئة بجدار داكن وإضاءة معلقة" }
    ]
  },
  "office": {
    title: "Home Office",
    ar: "المكتب المنزلي",
    folder: "office",
    images: [
      { file: "01.jpg", cap: "مكتب منزلي بألوان فاتحة وتنظيم عملي" },
      { file: "02.jpg", cap: "ركن مكتب بلمسة هادئة" },
      { file: "03.jpg", cap: "مكتب مزدوج بتخزين ذكي" }
    ]
  }
};

const IMG_BASE = "assets/images/";

/* رسومات خطية بسيطة بديلة عن الصور لحد ما تتوفر صور المشاريع الحقيقية */
const roomIcons = {
  "kitchen": `<svg viewBox="0 0 64 64" fill="none" stroke="#c9a24b" stroke-width="1.6"><rect x="10" y="14" width="44" height="14" rx="2"/><rect x="10" y="30" width="44" height="20" rx="2"/><line x1="10" y1="38" x2="54" y2="38"/><circle cx="18" cy="21" r="2" fill="#c9a24b" stroke="none"/><circle cx="26" cy="21" r="2" fill="#c9a24b" stroke="none"/></svg>`,
  "bathroom": `<svg viewBox="0 0 64 64" fill="none" stroke="#c9a24b" stroke-width="1.6"><path d="M8 34h48v6a12 12 0 0 1-12 12H20A12 12 0 0 1 8 40v-6z"/><path d="M14 34V18a6 6 0 0 1 10-4.4"/><circle cx="47" cy="28" r="1.6" fill="#c9a24b" stroke="none"/></svg>`,
  "bedroom": `<svg viewBox="0 0 64 64" fill="none" stroke="#c9a24b" stroke-width="1.6"><path d="M8 48V26a4 4 0 0 1 4-4h8v10"/><path d="M8 40h48v8"/><path d="M56 48V30a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v6"/><path d="M8 48v6M56 48v6"/></svg>`,
  "dining-room": `<svg viewBox="0 0 64 64" fill="none" stroke="#c9a24b" stroke-width="1.6"><ellipse cx="32" cy="26" rx="20" ry="7"/><line x1="14" y1="26" x2="14" y2="46"/><line x1="50" y1="26" x2="50" y2="46"/><line x1="10" y1="48" x2="18" y2="48"/><line x1="46" y1="48" x2="54" y2="48"/></svg>`,
  "office": `<svg viewBox="0 0 64 64" fill="none" stroke="#c9a24b" stroke-width="1.6"><rect x="8" y="16" width="48" height="30" rx="2"/><line x1="8" y1="38" x2="56" y2="38"/><path d="M24 46l-3 8M40 46l3 8"/></svg>`
};

/* ---------- scroll reveal ---------- */
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
els.forEach((el) => io.observe(el));

/* ---------- build category grid ---------- */
const grid = document.getElementById("catGrid");
Object.entries(categories).forEach(([id, cat]) => {
  const hasImages = cat.images.length > 0;
  const card = document.createElement("div");
  card.className = "cat-card reveal";
  card.dataset.cat = id;
  card.innerHTML = `
    <div class="arrow">↖</div>
    ${hasImages
      ? `<img src="${IMG_BASE}${cat.folder}/${cat.images[0].file}" alt="${cat.ar}">`
      : `<div class="empty-bg">${roomIcons[id] || ""}</div>`}
    <div class="info">
      <span class="count lat">${hasImages ? cat.images.length + " Photos" : "—"}</span>
      <h4>${cat.ar}</h4>
      ${hasImages ? "" : `<span class="soon">قريباً</span>`}
    </div>`;
  grid.appendChild(card);
  io.observe(card);
});

/* ---------- transition + gallery open/close ---------- */
const wipe = document.getElementById("wipe");
const wipeLabel = document.getElementById("wipeLabel");
const wipeLabelText = document.getElementById("wipeLabelText");
const galleryView = document.getElementById("galleryView");
const gvTitle = document.getElementById("gvTitle");
const gvSub = document.getElementById("gvSub");
const gvGrid = document.getElementById("gvGrid");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function playWipe(labelText, onMid) {
  if (reduceMotion) { onMid(); return; }
  wipeLabelText.textContent = labelText;
  wipe.classList.remove("play"); void wipe.offsetWidth;
  wipeLabel.classList.remove("show"); void wipeLabel.offsetWidth;
  wipe.classList.add("play");
  wipeLabel.classList.add("show");
  setTimeout(onMid, 520);
}

function openCategory(id) {
  const cat = categories[id];
  playWipe(cat.ar, () => {
    gvTitle.textContent = cat.ar;
    gvSub.textContent = cat.title;
    gvGrid.innerHTML = "";
    if (cat.images.length) {
      gvGrid.style.display = "grid";
      cat.images.forEach((img) => {
        const fig = document.createElement("figure");
        const src = `${IMG_BASE}${cat.folder}/${img.file}`;
        fig.innerHTML = `<img src="${src}" alt="${img.cap}" loading="lazy">`;
        fig.addEventListener("click", () => openLightbox(src, img.cap));
        gvGrid.appendChild(fig);
      });
    } else {
      gvGrid.style.display = "block";
      gvGrid.innerHTML = `
        <div class="gv-empty">
          ${roomIcons[id] || `<div class="ic">◈</div>`}
          <h4>الصور جاية قريباً</h4>
          <p>هيتم إضافة صور مشاريع هذا القسم بعد رفعها من فريق الاستوديو.</p>
        </div>`;
    }
    galleryView.classList.add("show");
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  });
}

function closeCategory() {
  playWipe("", () => {
    galleryView.classList.remove("show");
    document.body.style.overflow = "";
  });
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".cat-card");
  if (card) openCategory(card.dataset.cat);
});

document.getElementById("gvBack").addEventListener("click", closeCategory);

/* ---------- lightbox (full-screen image view) ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCap = document.getElementById("lightboxCap");

function openLightbox(src, cap) {
  lightboxImg.src = src;
  lightboxImg.alt = cap || "";
  lightboxCap.textContent = cap || "";
  lightbox.classList.add("show");
}
function closeLightbox() {
  lightbox.classList.remove("show");
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
