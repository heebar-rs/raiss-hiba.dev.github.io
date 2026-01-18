// ========== MOBILE MENU ==========
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
    const isExpanded = navMenu.classList.contains("is-open");
    navToggle.setAttribute("aria-expanded", isExpanded);
  });

  // Fermer le menu en cliquant à l'extérieur
  document.addEventListener("click", (event) => {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", false);
    }
  });
}

// ========== FOOTER YEAR ==========
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========== THEME MANAGEMENT ==========
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const root = document.documentElement;
  const body = document.body;
  
  // Retirer toutes les classes de thème
  root.classList.remove('dark', 'light', 'dark-theme', 'light-theme');
  body.classList.remove('dark', 'light', 'dark-theme', 'light-theme');
  
  // Ajouter la classe du thème sélectionné
  if (theme === 'dark') {
    root.classList.add('dark');
    body.classList.add('dark');
  } else {
    root.classList.add('light');
    body.classList.add('light');
  }
  
  // Mettre à jour l'icône
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  
  // Sauvegarder dans localStorage
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = getSystemTheme();
  
  // Utiliser le thème sauvegardé ou le thème système
  const themeToApply = savedTheme || systemTheme;
  applyTheme(themeToApply);
  
  // Ajouter l'événement au bouton
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

/* ========== MULTI LANGUAGE SYSTEM ========== */
const translations = {
  en: {
    // Navigation (all pages)
    nav_profile: "Profile",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    brand_name: "Hiba Raiss",
    menu_toggle: "Menu",
    
    // Page titles
    page_title_home: "Profile | Hiba Raiss",
    page_title_skills: "Skills | Hiba Raiss",
    page_title_projects: "Projects | Hiba Raiss",
    page_title_contact: "Contact | Hiba Raiss",
    
    // Home page
    profile_heading: "My Profile",
    about_title: "About Me",
    about_text: "I am Hiba Raiss, a passionate full-stack web developer. I specialize in building clean, efficient, and user-friendly web applications. I have experience working on academic and personal projects including showcase websites, dashboards, and dynamic web platforms.",
    info_title: "Information",
    info_name: "Name:",
    info_name_value: "Hiba Raiss",
    info_age: "Age:",
    info_age_value: "20",
    info_location: "Location:",
    info_location_value: "Casablanca, Morocco",
    info_email: "Email:",
    info_email_value: "raisshiba.dev@email.com",
    info_exp: "Experience:",
    info_exp_value: "3 years",
    info_freelance: "Freelance:",
    available: "Available",
    
    // Tags
    tag_fullstack: "Full-stack Development",
    tag_symfony: "Symfony",
    tag_laravel: "Laravel",
    
    // Education
    education_title: "Education",
    education_date_1: "2024 — 2026",
    education_school_1: "EMSI Engineering School",
    education_desc_1: "Integrated Preparatory Program (2 years) Computer Science Engineering (3rd year)",
    education_date_2: "2022 — 2023",
    education_school_2: "High School – Ouled Hriz El Gharbia",
    education_desc_2: "High School Diploma in Physical Sciences (Physics & Chemistry)",
    
    // Experience
    experience_title: "Experiences",
    exp_date_1: "2025",
    exp_title_1: "Internship",
    exp_desc_1: "SOFALIM — Observation internship within the Information Systems (IS) department, gaining exposure to IT infrastructure, data management, and internal systems.",
    exp_date_2: "2024",
    exp_title_2: "Personal Projects",
    exp_desc_2: "Development of multiple academic and personal web projects.",
    view_projects: "View projects",
    
    // Skills page
    skills_title: "My Skills",
    skills_intro: "Here are my technical skills and competencies:",
    skills_web: "Languages & Web",
    frameworks_title: "Frameworks",
    skill_html: "HTML / CSS",
    skill_php: "PHP",
    skill_javascript: "JavaScript",
    skill_level_advanced: "Advanced",
    skill_level_intermediate: "Intermediate",
    skill_level_beginner: "Beginner",
    framework_laravel: "Laravel",
    framework_symfony: "Symfony",
    
    // Tools
    tools_title: "Tools",
    tool_git: "Git / GitHub",
    tool_figma: "Figma",
    tool_vscode: "VS Code",
    tool_xampp: "XAMPP",
    tool_symfony_laravel: "Symfony / Laravel",
    
    // Certifications
    certifications_title: "Certifications / Training",
    cert_1: "Certificate 1 — coursera : c++/cpp",
    cert_2: "Certificate 2 — Coursera : javascript",
    cert_3: "Training Program — ALX",
    
    // Strengths
    strengths_title: "Professional Strengths",
    strength_1: "Strong collaboration and teamwork skills",
    strength_2: "Ability to work independently and stay organized",
    strength_3: "Clear communication and presentation skills",
    strength_4: "Effective time management",
    
    // Languages
    languages_title: "Languages",
    lang_french: "French",
    lang_english: "English",
    lang_arabic: "Arabic",
    lang_intermediate: "Intermediate",
    lang_fluent: "Fluent",
    lang_native: "Native",
    
    // Projects page
    projects_title: "My Projects",
    projects_intro: "A selection of my recent work:",
    search_placeholder: "Search project...",
    filter_all: "All",
    filter_frontend: "Front-end",
    filter_fullstack: "Full-stack",
    filter_php: "PHP",
    filter_javascript: "JavaScript",
    
    // Project badges
    badge_fullstack: "Full-stack",
    badge_frontend: "Front-end",
    
    // Project titles
    project1_title: "School Management System",
    project1_desc: "A full-stack web application for managing students, classes, and school records. It provides structured data handling and administrative features.",
    project2_title: "Restaurant Menu Website",
    project2_desc: "A responsive restaurant menu website with interactive navigation, designed to improve user experience and visual clarity.",
    project3_title: "User Management System",
    project3_desc: "A web-based system for managing user accounts, roles, and permissions, developed using PHP and JavaScript in a local server environment.",
    
    // Contact page
    contact_title: "Contact",
    contact_get_in_touch: "Get in Touch",
    contact_intro_1: "I'm always open to discussing new opportunities, projects, or collaborations.",
    contact_intro_2: "Feel free to reach out using any of the channels below:",
    contact_email_label: "Email",
    contact_availability: "Availability",
    contact_availability_text: "Freelance · Internship · Open to opportunities",
    
    // Buttons
    btn_github: "GitHub",
    btn_video: "Video Demo",
    btn_live: "Live Demo",
    
    // Footer
    back_to_profile: "← Back to profile",
    back_to_home: "← Back to Home",
  },

  fr: {
    // Navigation (toutes les pages)
    nav_profile: "Profil",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_contact: "Contact",
    brand_name: "Hiba Raiss",
    menu_toggle: "Menu",
    
    // Page titles
    page_title_home: "Profil | Hiba Raiss",
    page_title_skills: "Compétences | Hiba Raiss",
    page_title_projects: "Projets | Hiba Raiss",
    page_title_contact: "Contact | Hiba Raiss",
    
    // Home page
    profile_heading: "Mon profil",
    about_title: "À propos de moi",
    about_text: "Je suis Hiba Raiss, développeuse web full-stack passionnée. Je me spécialise dans la création d'applications web propres, efficaces et conviviales. J'ai de l'expérience dans des projets académiques et personnels incluant des sites vitrines, tableaux de bord et plateformes web dynamiques.",
    info_title: "Informations",
    info_name: "Nom :",
    info_name_value: "Hiba Raiss",
    info_age: "Âge :",
    info_age_value: "20",
    info_location: "Localisation :",
    info_location_value: "Casablanca, Maroc",
    info_email: "Email :",
    info_email_value: "raisshiba.dev@email.com",
    info_exp: "Expérience :",
    info_exp_value: "3 ans",
    info_freelance: "Freelance :",
    available: "Disponible",
    
    // Tags
    tag_fullstack: "Développement Full-stack",
    tag_symfony: "Symfony",
    tag_laravel: "Laravel",
    
    // Education
    education_title: "Éducation",
    education_date_1: "2024 — 2026",
    education_school_1: "École d'Ingénieurs EMSI",
    education_desc_1: "Programme Préparatoire Intégré (2 ans) Ingénierie Informatique (3ème année)",
    education_date_2: "2022 — 2023",
    education_school_2: "Lycée – Ouled Hriz El Gharbia",
    education_desc_2: "Baccalauréat en Sciences Physiques (Physique & Chimie)",
    
    // Experience
    experience_title: "Expériences",
    exp_date_1: "2025",
    exp_title_1: "Stage",
    exp_desc_1: "SOFALIM — Stage d'observation au sein du département des Systèmes d'Information, exposition à l'infrastructure informatique, la gestion des données et les systèmes internes.",
    exp_date_2: "2024",
    exp_title_2: "Projets Personnels",
    exp_desc_2: "Développement de multiples projets web académiques et personnels.",
    view_projects: "Voir les projets",
    
    // Skills page
    skills_title: "Mes Compétences",
    skills_intro: "Voici mes compétences techniques et professionnelles :",
    skills_web: "Langages & Web",
    frameworks_title: "Frameworks",
    skill_html: "HTML / CSS",
    skill_php: "PHP",
    skill_javascript: "JavaScript",
    skill_level_advanced: "Avancé",
    skill_level_intermediate: "Intermédiaire",
    skill_level_beginner: "Débutant",
    framework_laravel: "Laravel",
    framework_symfony: "Symfony",
    
    // Tools
    tools_title: "Outils",
    tool_git: "Git / GitHub",
    tool_figma: "Figma",
    tool_vscode: "VS Code",
    tool_xampp: "XAMPP",
    tool_symfony_laravel: "Symfony / Laravel",
    
    // Certifications
    certifications_title: "Certifications / Formations",
    cert_1: "Certificate 1 — coursera : c++/cpp",
    cert_2: "Certificate 2 — Coursera : javascript",
    cert_3: "Programme de formation — ALX",
    
    // Strengths
    strengths_title: "Qualités professionnelles",
    strength_1: "Excellente collaboration et travail d'équipe",
    strength_2: "Capacité à travailler de manière autonome et organisée",
    strength_3: "Bonne communication et présentation",
    strength_4: "Gestion efficace du temps",
    
    // Languages
    languages_title: "Langues",
    lang_french: "Français",
    lang_english: "Anglais",
    lang_arabic: "Arabe",
    lang_intermediate: "Intermédiaire",
    lang_fluent: "Courant",
    lang_native: "Maternelle",
    
    // Projects page
    projects_title: "Mes Projets",
    projects_intro: "Une sélection de mes travaux récents :",
    search_placeholder: "Rechercher un projet...",
    filter_all: "Tous",
    filter_frontend: "Front-end",
    filter_fullstack: "Full-stack",
    filter_php: "PHP",
    filter_javascript: "JavaScript",
    
    // Project badges
    badge_fullstack: "Full-stack",
    badge_frontend: "Front-end",
    
    // Project titles
    project1_title: "Système de Gestion Scolaire",
    project1_desc: "Une application web full-stack pour gérer les étudiants, les classes et les dossiers scolaires. Elle fournit une gestion structurée des données et des fonctionnalités administratives.",
    project2_title: "Site Web de Menu Restaurant",
    project2_desc: "Un site web de menu restaurant responsive avec navigation interactive, conçu pour améliorer l'expérience utilisateur et la clarté visuelle.",
   project3_title: "Système de Gestion d'Utilisateurs",
    project3_desc: "Un système web pour gérer les comptes utilisateurs, rôles et permissions, développé en utilisant PHP et JavaScript dans un environnement serveur local.",
    
    // Contact page
    contact_title: "Contact",
    contact_get_in_touch: "Prendre contact",
    contact_intro_1: "Je suis toujours ouverte à discuter de nouvelles opportunités, projets ou collaborations.",
    contact_intro_2: "N'hésitez pas à me contacter par l'un des canaux ci-dessous :",
    contact_email_label: "Email",
    contact_availability: "Disponibilité",
    contact_availability_text: "Freelance · Stage · Ouvert aux opportunités",
    
    // Buttons
    btn_github: "GitHub",
    btn_video: "Démo Vidéo",
    btn_live: "Démo Live",
    
    // Footer
    back_to_profile: "← Retour au profil",
    back_to_home: "← Retour à l'accueil",
  }
};

/* 🔹 SET LANGUAGE - FONCTION CORRIGÉE */
function setLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Langue non supportée: ${lang}`);
    return;
  }
  
  // 1. Changer l'attribut lang de la balise html
  document.documentElement.lang = lang;
  
  // 2. Mettre à jour le titre de la page
  const pageTitle = document.querySelector('title[data-i18n]');
  if (pageTitle) {
    const key = pageTitle.getAttribute('data-i18n');
    if (translations[lang][key]) {
      pageTitle.textContent = translations[lang][key];
    }
  }
  
  // 3. Mettre à jour TOUS les éléments avec data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  
  elements.forEach(el => {
    // Ne pas traiter le titre ici, déjà fait
    if (el.tagName === 'TITLE') return;
    
    const key = el.getAttribute('data-i18n');
    
    if (key && translations[lang][key]) {
      const translation = translations[lang][key];
      
      // Vérifier le type d'élément
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) {
          el.setAttribute('placeholder', translation);
        }
        if (el.hasAttribute('value') && !el.type === 'submit') {
          el.setAttribute('value', translation);
        }
      } else if (el.tagName === 'IMG') {
        if (el.hasAttribute('alt')) {
          el.setAttribute('alt', translation);
        }
      } else if (el.tagName === 'A' && el.hasAttribute('href') && el.getAttribute('href').startsWith('mailto:')) {
        // Ne pas modifier les liens mailto
      } else {
        // Pour les autres éléments, mettre à jour le texte
        el.textContent = translation;
      }
    }
  });
  
  // 4. Mettre à jour les boutons de langue actifs
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // 5. Sauvegarder la préférence de langue
  localStorage.setItem("preferred_lang", lang);
  
  console.log(`Langue changée vers: ${lang}`);
}

/* 🔹 LOAD SAVED LANGUAGE */
function loadLanguage() {
  const savedLang = localStorage.getItem("preferred_lang");
  const browserLang = navigator.language.split('-')[0];
  
  let langToUse = "en"; // Par défaut
  
  if (savedLang && translations[savedLang]) {
    langToUse = savedLang;
  } else if (translations[browserLang]) {
    langToUse = browserLang;
  }
  
  setLanguage(langToUse);
}

/* 🔹 INITIALISATION COMPLÈTE */


document.addEventListener('DOMContentLoaded', function() {
  console.log("Initialisation du site...");
  
  // Initialiser le thème
  initTheme();
  
  // Initialiser les années du footer
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Initialiser la langue
  loadLanguage();

    // Initialiser les filtres de projets
  initProjectsFilter(); 

  
  // Gestionnaires pour les boutons de langue
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
      }
    });


  }



);
  
  // Pour compatibilité avec les anciens boutons onclick
  const oldLangButtons = document.querySelectorAll('button[onclick*="setLanguage("]');
  oldLangButtons.forEach(btn => {
    const oldOnClick = btn.getAttribute('onclick');
    if (oldOnClick) {
      btn.removeAttribute('onclick');
      const langMatch = oldOnClick.match(/setLanguage\('(\w+)'\)/);
      if (langMatch) {
        btn.classList.add('lang-btn');
        btn.setAttribute('data-lang', langMatch[1]);
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          setLanguage(langMatch[1]);
        });
      }
    }
  });
  
  console.log("Initialisation terminée");
});
// ========== PROJECTS FILTER & SEARCH ==========
function initProjectsFilter() {
  const projectsGrid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('.segmented__btn[data-filter]');
  const searchInput = document.getElementById('searchInput');
  
  if (!projectsGrid || filterButtons.length === 0) return;
  
  const projects = Array.from(projectsGrid.querySelectorAll('.project'));
  
  // Fonction pour filtrer les projets
  function filterProjects() {
    const activeFilter = document.querySelector('.segmented__btn.is-active')?.dataset.filter || 'all';
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    projects.forEach(project => {
      const categories = project.dataset.category || '';
      const title = project.dataset.title || '';
      const textContent = project.textContent.toLowerCase();
      
      let categoryMatch = activeFilter === 'all' || categories.includes(activeFilter);
      let searchMatch = !searchTerm || 
                       title.toLowerCase().includes(searchTerm) || 
                       textContent.includes(searchTerm) ||
                       categories.toLowerCase().includes(searchTerm);
      
      if (categoryMatch && searchMatch) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }
  
  // Gestion des clics sur les boutons de filtre
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach(btn => btn.classList.remove('is-active'));
      // Ajouter la classe active au bouton cliqué
      button.classList.add('is-active');
      // Appliquer le filtre
      filterProjects();
    });
  });
  
  // Gestion de la recherche en temps réel
  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }
  
  // Initialiser avec tous les projets visibles
  filterProjects();
}
// Rendre la fonction accessible globalement pour la compatibilité
window.setLanguage = setLanguage;