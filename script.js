/* =========================================
   HIBA RAISS — PORTFOLIO SCRIPT
   Mobile menu, theme, i18n, filters
   ========================================= */

/* ========== MOBILE MENU ========== */
const navToggle = document.getElementById("navToggle");
const navMenu   = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  document.addEventListener("click", e => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", false);
    }
  });
}

/* ========== FOOTER YEAR ========== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ========== THEME ========== */
function applyTheme(theme) {
  document.documentElement.classList.toggle("light", theme === "light");
  const icon = document.getElementById("themeIcon");
  if (icon) icon.textContent = theme === "light" ? "🌙" : "☀️";
  localStorage.setItem("theme", theme);
}

function initTheme() {
  const saved  = localStorage.getItem("theme");
  const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(saved || system);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.addEventListener("click", () => {
    applyTheme(document.documentElement.classList.contains("light") ? "dark" : "light");
  });
}

/* ========== TRANSLATIONS ========== */
const translations = {
  en: {
    /* Nav */
    nav_profile:  "Profile",
    nav_skills:   "Skills",
    nav_projects: "Projects",
    nav_contact:  "Contact",
    brand_name:   "Hiba Raiss",
    menu_toggle:  "Menu",

    /* Page titles */
    page_title_home:     "Profile — Hiba Raiss",
    page_title_skills:   "Skills — Hiba Raiss",
    page_title_projects: "Projects — Hiba Raiss",
    page_title_contact:  "Contact — Hiba Raiss",

    /* Profile / Home */
    profile_heading:  "My Profile",
    profile_sub:      "Computer Science Engineering Student · Full-Stack Developer",
    about_title:      "About Me",
    about_text:       "I am Hiba Raiss, a third-year Computer Science Engineering student at EMSI Casablanca. Passionate about building clean, efficient web applications — from elegant frontends to robust backends. I combine academic rigor with hands-on project experience across PHP, Python, Symfony, Django, and more.",
    available:        "Available for opportunities",
    available_short:  "Available",

    stat_projects: "Projects",
    stat_certs:    "Certifications",
    stat_langs:    "Languages",

    info_title:        "Information",
    info_name:         "Name",
    info_name_value:   "Hiba Raiss",
    info_age:          "Age",
    info_age_value:    "21",
    info_location:     "Location",
    info_location_value: "Casablanca, Morocco",
    info_email:        "Email",
    info_phone:        "Phone",
    info_level:        "Level",
    info_level_value:  "3rd Year — Engineering Cycle",
    info_freelance:    "Status",

    /* Education */
    education_title: "Education",
    edu_date_1:  "2025 — Now",
    edu_school_1:"EMSI — Engineering Cycle",
    edu_desc_1:  "Computer Science Engineering (3rd year) — Software Engineering specialization, Casablanca.",
    edu_date_2:  "2023 — 2025",
    edu_school_2:"EMSI — Preparatory Cycle",
    edu_desc_2:  "Integrated 2-year preparatory program in mathematics, physics and computer science fundamentals.",
    edu_date_3:  "2022 — 2023",
    edu_school_3:"High School — Ouled Hriz El Gharbia",
    edu_desc_3:  "Baccalaureate in Physical Sciences (Physics & Chemistry) — Had Soualem.",

    /* Experience */
    experience_title: "Experience",
    exp_date_1:  "Jun–Jul 2025",
    exp_title_1: "Internship · SOFALIM",
    exp_desc_1:  "Observation internship in the IS department: SAP data entry & verification, internal database management, administrative support and ERP system discovery.",
    exp_date_2:  "2025 — 2026",
    exp_title_2: "President — Club Career Forward",
    exp_desc_2:  "Leading student community, organizing professional events, managing member engagement at EMSI Casablanca.",
    exp_date_3:  "2024 — 2026",
    exp_title_3: "Academic & Personal Projects",
    exp_desc_3:  "Development of 5+ web applications using PHP, Python/Django, Symfony, and more.",
    view_projects: "View Projects →",

    /* Engagement */
    engagement_title:   "Engagement & Volunteering",
    leader_1_title:     "President of Engagement & Members — Club Career Forward (2026)",
    leader_1_desc:      "Student community leadership, professional event organization, member engagement and follow-up.",
    leader_2_title:     "Support — Hult Prize EMSI (2026)",
    leader_2_desc:      "Organizational support at the Hult Prize Opening Ceremony at EMSI Casablanca.",
    leader_3_title:     "Volunteer — KOFA Initiative, Ramadan (2025)",
    leader_3_desc:      "Participated in preparation and distribution of meals during Ramadan.",

    /* Skills */
    skills_title:   "My Skills",
    skills_intro:   "Technical competencies, tools and professional strengths.",
    skills_web:     "Programming Languages & Web",
    frameworks_title: "Frameworks & Databases",
    tools_title:    "Tools & Environment",
    methods_label:  "Methods",
    strengths_title:"Professional Strengths",
    strength_1: "Analytical mindset and problem-solving skills",
    strength_2: "Strong teamwork and collaboration abilities",
    strength_3: "Fast learner, autonomous and organized",
    strength_4: "Clear communication and presentation skills",
    strength_5: "Effective time management",

    skill_level_advanced:    "Advanced",
    skill_level_intermediate:"Intermediate",
    skill_level_beginner:    "Beginner",

    languages_title: "Languages",
    lang_arabic:  "Arabic",
    lang_french:  "French",
    lang_english: "English",
    lang_native:  "Native",
    lang_fluent:  "Fluent",
    lang_good:    "Good level",

    certifications_title: "Certifications",
    cert_1_title: "Python for Web Data Access",
    cert_1_org:   "University of Michigan — Coursera",
    cert_2_title: "Software Design & Project Management",
    cert_2_org:   "UST Hong Kong — Coursera",
    cert_3_title: "Intro to OOP in C++",
    cert_3_org:   "École Polytechnique Fédérale de Lausanne — Coursera",

    interests_title: "Interests",

    /* Projects */
    projects_title: "My Projects",
    projects_sub:   "Academic & personal work — 2024–2026",
    search_placeholder: "Search project…",
    filter_all:      "All",
    filter_frontend: "Front-end",
    filter_fullstack:"Full-stack",
    filter_django:   "Django",
    filter_symfony:  "Symfony",
    filter_python:   "Python",

    badge_fullstack: "Full-stack",
    badge_frontend:  "Front-end",

    project1_title: "Store Management System",
    project1_desc:  "Web application for store management with Django, featuring full CRUD, automatic sales calculation, an analytics dashboard, and a Python-based simple sales forecasting module.",
    project2_title: "File Automation Tool",
    project2_desc:  "System automation tool in Python that sorts, classifies and dynamically organizes documents by category, handles extensions, and improves productivity.",
    project3_title: "School Management System",
    project3_desc:  "Full-stack web application to manage students, classes and school records with complete admin features and structured data handling.",
    project4_title: "User Management System",
    project4_desc:  "Web system for managing user accounts with full CRUD operations, role management, built with Symfony and XAMPP.",
    project5_title: "Hospital Management System",
    project5_desc:  "Web system for managing patient records (CRUD) built in C, demonstrating low-level system programming applied to a real-world use case.",
    project6_title: "Restaurant Menu Website",
    project6_desc:  "Responsive restaurant menu website with interactive navigation and clean visual design, focused on UX and readability.",

    btn_github: "GitHub",
    btn_video:  "Video Demo",
    btn_live:   "Live Demo",

    /* Contact */
    contact_title:         "Get in Touch",
    contact_intro_1:       "Open to internships, freelance projects, and collaboration opportunities.",
    contact_intro_2:       "Feel free to contact me through any of the channels below:",
    contact_get_in_touch:  "Reach Out",
    contact_email_label:   "Email",
    contact_phone_label:   "Phone",
    contact_availability:  "Availability",
    avail_status:          "Looking for Summer Internship (PFA) — 1 to 2 months",
    avail_tag_1: "Internship",
    avail_tag_2: "Freelance",
    avail_tag_3: "Open to opportunities",
    contact_profile_label: "Profile Snapshot",
    contact_school:        "School",
    contact_stack:         "Stack",
    contact_response:      "Response",
    contact_response_val:  "Within 24h",
    contact_cv_title:      "Download CV",
    contact_cv_desc:       "Download my full resume in PDF format.",
    contact_cv_btn:        "Download CV (PDF)",

    back_to_profile: "← Back to profile",
    back_to_home:    "← Back to Home",
  },

  fr: {
    /* Nav */
    nav_profile:  "Profil",
    nav_skills:   "Compétences",
    nav_projects: "Projets",
    nav_contact:  "Contact",
    brand_name:   "Hiba Raiss",
    menu_toggle:  "Menu",

    page_title_home:     "Profil — Hiba Raiss",
    page_title_skills:   "Compétences — Hiba Raiss",
    page_title_projects: "Projets — Hiba Raiss",
    page_title_contact:  "Contact — Hiba Raiss",

    profile_heading: "Mon Profil",
    profile_sub:     "Étudiante en Génie Informatique · Développeuse Full-Stack",
    about_title:     "À propos",
    about_text:      "Je suis Hiba Raiss, étudiante en 3e année cycle ingénieur informatique à l'EMSI Casablanca. Passionnée par la création d'applications web efficaces — du frontend élégant au backend robuste. Je combine rigueur académique et expérience projet en PHP, Python, Symfony, Django et plus.",
    available:       "Disponible pour des opportunités",
    available_short: "Disponible",

    stat_projects: "Projets",
    stat_certs:    "Certifications",
    stat_langs:    "Langues",

    info_title:        "Informations",
    info_name:         "Nom",
    info_name_value:   "Hiba Raiss",
    info_age:          "Âge",
    info_age_value:    "21",
    info_location:     "Lieu",
    info_location_value: "Casablanca, Maroc",
    info_email:        "Email",
    info_phone:        "Téléphone",
    info_level:        "Niveau",
    info_level_value:  "3e année — Cycle Ingénieur",
    info_freelance:    "Statut",

    education_title: "Formation",
    edu_date_1:  "2025 — En cours",
    edu_school_1:"EMSI — Cycle Ingénieur",
    edu_desc_1:  "Génie Informatique (3e année) — Spécialité Génie Logiciel, Casablanca.",
    edu_date_2:  "2023 — 2025",
    edu_school_2:"EMSI — Cycle Préparatoire",
    edu_desc_2:  "Programme préparatoire intégré (2 ans) en mathématiques, physique et informatique.",
    edu_date_3:  "2022 — 2023",
    edu_school_3:"Lycée — Ouled Hriz El Gharbia",
    edu_desc_3:  "Baccalauréat en Sciences Physiques (Physique & Chimie) — Had Soualem.",

    experience_title: "Expériences",
    exp_date_1:  "Juin–Juil. 2025",
    exp_title_1: "Stage d'observation · SOFALIM",
    exp_desc_1:  "Stage au département SI : saisie & vérification SAP, gestion des bases de données internes, support administratif et découverte des ERP.",
    exp_date_2:  "2025 — 2026",
    exp_title_2: "Présidente de l'engagement et des membres — Club Career Forward",
    exp_desc_2:  "Animation de la communauté étudiante, organisation d'événements professionnels, suivi des membres à l'EMSI Casablanca.",
    exp_date_3:  "2024 — 2026",
    exp_title_3: "Projets Académiques & Personnels",
    exp_desc_3:  "Développement de 5+ applications web avec PHP, Python/Django, Symfony et plus.",
    view_projects: "Voir les projets →",

    engagement_title:   "Engagement & Bénévolat",
    leader_1_title:     "Présidente de l'engagement et des membres — Club Career Forward (2026)",
    leader_1_desc:      "Leadership communautaire, organisation d'événements professionnels, suivi des membres.",
    leader_2_title:     "Support — Hult Prize EMSI (2026)",
    leader_2_desc:      "Soutien organisationnel lors de la cérémonie d'ouverture du Hult Prize à l'EMSI.",
    leader_3_title:     "Bénévole — Initiative KOFA, Ramadan (2025)",
    leader_3_desc:      "Participation à la préparation et distribution de repas pendant le Ramadan.",

    skills_title:    "Mes Compétences",
    skills_intro:    "Compétences techniques, outils et atouts professionnels.",
    skills_web:      "Langages de Programmation & Web",
    frameworks_title:"Frameworks & Bases de Données",
    tools_title:     "Outils & Environnement",
    methods_label:   "Méthodes",
    strengths_title: "Atouts Professionnels",
    strength_1: "Esprit d'analyse et résolution de problèmes",
    strength_2: "Excellente capacité de travail en équipe",
    strength_3: "Apprentissage rapide, autonome et organisé",
    strength_4: "Communication claire et présentation",
    strength_5: "Gestion efficace du temps",

    skill_level_advanced:    "Avancé",
    skill_level_intermediate:"Intermédiaire",
    skill_level_beginner:    "Débutant",

    languages_title: "Langues",
    lang_arabic:  "Arabe",
    lang_french:  "Français",
    lang_english: "Anglais",
    lang_native:  "Langue maternelle",
    lang_fluent:  "Courant",
    lang_good:    "Bon niveau",

    certifications_title: "Certifications",
    cert_1_title: "Python pour l'accès aux données Web",
    cert_1_org:   "Université du Michigan — Coursera",
    cert_2_title: "Conception logicielle & Gestion de projets",
    cert_2_org:   "UST Hong Kong — Coursera",
    cert_3_title: "Introduction à la POO en C++",
    cert_3_org:   "École Polytechnique Fédérale de Lausanne — Coursera",

    interests_title: "Centres d'intérêts",

    projects_title: "Mes Projets",
    projects_sub:   "Travaux académiques & personnels — 2024–2026",
    search_placeholder: "Rechercher un projet…",
    filter_all:      "Tous",
    filter_frontend: "Front-end",
    filter_fullstack:"Full-stack",
    filter_django:   "Django",
    filter_symfony:  "Symfony",
    filter_python:   "Python",

    badge_fullstack: "Full-stack",
    badge_frontend:  "Front-end",

    project1_title: "Système de Gestion de Magasin",
    project1_desc:  "Application web de gestion de magasin avec Django : CRUD complet, calcul automatique des ventes, tableau de bord analytique et module de prévision simple des ventes en Python.",
    project2_title: "Outil d'Automatisation de Fichiers",
    project2_desc:  "Outil d'automatisation système en Python pour trier, classer et organiser dynamiquement les documents par catégorie, avec gestion des extensions.",
    project3_title: "Système de Gestion Scolaire",
    project3_desc:  "Application web full-stack pour gérer les étudiants, classes et dossiers scolaires avec fonctionnalités admin complètes.",
    project4_title: "Système de Gestion d'Utilisateurs",
    project4_desc:  "Système web pour gérer les comptes utilisateurs avec CRUD complet et gestion des rôles, développé avec Symfony et XAMPP.",
    project5_title: "Système de Gestion des Hôpitaux",
    project5_desc:  "Système web pour gérer les dossiers patients (CRUD) développé en C, démontrant la programmation système appliquée à un cas réel.",
    project6_title: "Site Menu Restaurant",
    project6_desc:  "Site de menu restaurant responsive avec navigation interactive et design visuel épuré, axé sur l'UX et la lisibilité.",

    btn_github: "GitHub",
    btn_video:  "Démo Vidéo",
    btn_live:   "Démo Live",

    contact_title:         "Prendre Contact",
    contact_intro_1:       "Ouverte aux stages, projets freelance et opportunités de collaboration.",
    contact_intro_2:       "N'hésitez pas à me contacter via les canaux ci-dessous :",
    contact_get_in_touch:  "Me contacter",
    contact_email_label:   "Email",
    contact_phone_label:   "Téléphone",
    contact_availability:  "Disponibilité",
    avail_status:          "Recherche un stage d'été (PFA) — 1 à 2 mois",
    avail_tag_1: "Stage",
    avail_tag_2: "Freelance",
    avail_tag_3: "Ouverte aux opportunités",
    contact_profile_label: "Résumé Profil",
    contact_school:        "École",
    contact_stack:         "Stack",
    contact_response:      "Réponse",
    contact_response_val:  "Sous 24h",
    contact_cv_title:      "Télécharger CV",
    contact_cv_desc:       "Téléchargez mon CV complet en PDF.",
    contact_cv_btn:        "Télécharger CV (PDF)",

    back_to_profile: "← Retour au profil",
    back_to_home:    "← Retour à l'accueil",
  }
};

/* ========== LANGUAGE ========== */
function setLanguage(lang) {
  if (!translations[lang]) return;
  document.documentElement.lang = lang;

  // Page title
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) {
    const key = titleEl.getAttribute("data-i18n");
    if (translations[lang][key]) titleEl.textContent = translations[lang][key];
  }

  // All i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (el.tagName === "TITLE") return;
    const key = el.getAttribute("data-i18n");
    const val = translations[lang][key];
    if (!val) return;
    if ((el.tagName === "INPUT" || el.tagName === "TEXTAREA") && el.hasAttribute("placeholder")) {
      el.setAttribute("placeholder", val);
    } else if (el.tagName === "IMG" && el.hasAttribute("alt")) {
      el.setAttribute("alt", val);
    } else {
      el.textContent = val;
    }
  });

  // Active lang btn
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("preferred_lang", lang);
}

function loadLanguage() {
  const saved   = localStorage.getItem("preferred_lang");
  const browser = navigator.language.split("-")[0];
  setLanguage(saved && translations[saved] ? saved : (translations[browser] ? browser : "en"));
}

/* ========== PROJECT FILTERS ========== */
function initProjectsFilter() {
  const grid    = document.getElementById("projectsGrid");
  const filters = document.querySelectorAll(".segmented__btn[data-filter]");
  const search  = document.getElementById("searchInput");
  if (!grid || !filters.length) return;

  const cards = Array.from(grid.querySelectorAll(".project"));
  cards.forEach(c => { c.style.transition = "opacity .25s, transform .25s"; });

  function applyFilters() {
    const active = document.querySelector(".segmented__btn.is-active")?.dataset.filter || "all";
    const term   = search ? search.value.toLowerCase().trim() : "";
    cards.forEach(card => {
      const cats  = card.dataset.category || "";
      const title = (card.dataset.title || "").toLowerCase();
      const text  = card.textContent.toLowerCase();
      const catOk = active === "all" || cats.includes(active);
      const srcOk = !term || title.includes(term) || text.includes(term) || cats.includes(term);
      if (catOk && srcOk) {
        card.style.display = "flex";
        requestAnimationFrame(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; });
      } else {
        card.style.opacity = "0"; card.style.transform = "translateY(8px)";
        setTimeout(() => { if (card.style.opacity === "0") card.style.display = "none"; }, 260);
      }
    });
  }

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyFilters();
    });
  });

  if (search) {
    search.addEventListener("input", applyFilters);
    search.addEventListener("keydown", e => { if (e.key === "Escape") { search.value = ""; applyFilters(); } });
  }
  applyFilters();
}

/* ========== ACTIVE NAV ========== */
function highlightNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach(link => {
    link.classList.toggle("is-active", link.getAttribute("href") === page);
  });
}

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  loadLanguage();
  initProjectsFilter();
  highlightNav();

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang) setLanguage(lang);
    });
  });
});

window.setLanguage = setLanguage;
