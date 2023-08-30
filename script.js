// Language Switch
const defaultLocale = "en";
let currentLocale;
let translations = {};

const header = document.querySelector("header");
const switchFlagImg = document.createElement("img");
header.appendChild(switchFlagImg);

document.addEventListener("DOMContentLoaded", () => {
  setLocale(defaultLocale);
  bindLocaleSwitcher();
});

function bindLocaleSwitcher() {
  switchFlagImg.src = "resources/img/icons8-germany-100.png";
  switchFlagImg.alt = "Zu Deutsch wechseln";
  switchFlagImg.addEventListener("click", () =>
    setLocale(currentLocale === "en" ? "de" : "en")
  );
}

async function setLocale(newLocale) {
  if (newLocale === currentLocale) return;
  const newTranslations = await fetchTranslations(newLocale);
  currentLocale = newLocale;
  translations = newTranslations;
  switchFlagImg.src =
    currentLocale === "en"
      ? "resources/img/icons8-germany-100.png"
      : "resources/img/icons8-great-britain-100.png";
  switchFlagImg.alt =
    currentLocale === "en" ? "Zu Deutsch wechseln" : "Switch to English";
  translatePage();
}

async function fetchTranslations(newLocale) {
  const res = await fetch(`lang/${newLocale}.json`);
  return await res.json();
}

function translatePage() {
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

function translateElement(el) {
  const key = el.getAttribute("data-i18n-key");
  const translation = translations[key];
  el.innerHTML = translation;
}

// Work Experience

const experienceContainer = document.querySelector(".experience-jobs");

const experience = [
  {
    id: "neuefische-data",
    position: "Trainee Data Analytics",
    company: "neuefische",
    time: "05/2023 - 08/2023",
    location: "remote",
    description:
      "Intensiv-Coding-Bootcamp in 540 Stunden Programmierpraxis mit Entwicklung eines vierwöchigen Abschlussprojekts in Teamarbeit hauptsächlich mit Python, SQL und Tableau.",
  },
  {
    id: "mobilab",
    position: "Full Stack Engineer",
    company: "MobiLab Solutions",
    time: "05/2022 - 09/2022",
    location: "cgn",
    description:
      "Interne und externe Projekte von Web-Plattformen mit React (Next.js), TypeScript, styled-components, REST APIs, Recoil, react-query anhand von Figma-Designs.",
  },
  {
    id: "fadi",
    position:
      "Developer Omnichannel and Sales (E-Commerce) / Consumer Applications",
    company: "Fashion Digital",
    time: "09/2021 - 04/2022",
    location: "remote",
    description:
      "Frontend-Entwicklung von Online-Shops mit React, Apollo GraphQL, TypeScript, serverseitiges Node.js, HTML5, CSS3, Dust.js für Mobile und Desktop.",
  },
  {
    id: "neuefische-web",
    position: "Trainee Web Development",
    company: "neuefische",
    time: "04/2021 - 07/2021",
    location: "remote",
    description:
      "Intensiv-Coding-Bootcamp in 540 Stunden Programmierpraxis mit Eigenentwicklung einer App als Abschlussarbeit hauptsächlich mit React und styled-components.",
  },
];

function createExperience() {
  experience.forEach((experience) => {
    const newExperience = document.createElement("section");
    newExperience.classList.add("job-box");
    newExperience.id = experience.id;
    experienceContainer.appendChild(newExperience);

    const jobTitle = document.createElement("h4");
    jobTitle.innerHTML = experience.position;
    newExperience.appendChild(jobTitle);

    const company = document.createElement("p");
    company.classList.add("job-company");
    company.innerHTML = experience.company;
    newExperience.appendChild(company);

    const timeFrame = document.createElement("p");
    timeFrame.classList.add("job-time");
    timeFrame.innerHTML = experience.time;
    newExperience.appendChild(timeFrame);

    const location = document.createElement("p");
    location.classList.add("job-location");
    location.setAttribute("data-i18n-key", experience.location);
    newExperience.appendChild(location);

    const description = document.createElement("p");
    description.classList.add("job-description");
    description.setAttribute("data-i18n-key", "description-" + experience.id);
    newExperience.appendChild(description);
  });
}

createExperience();

// Projects

const projectContainer = document.getElementById("projects");

const projects = [
  {
    id: "adventeire",
    name: "adventéire",
    languages: "React, Styled Components, Styleguidist",
    pageUrl: "https://adventeire.herokuapp.com/",
    githubUrl: "https://github.com/heleah/adventeire",
    imgSrc: "resources/img/adventeire_preview.png",
    imgAlt: "Adventéire Preview",
  },
  {
    id: "statistikkurs-de",
    name: "Statistik-kurs.de (Data Analytics)",
    languages: "Python, SQL, Tableau",
    pageUrl: "./resources/Statistik-kurs-de_pres.pdf#toolbar=0",
    //githubUrl: "https://github.com/heleah/adventeire",
    imgSrc: "resources/img/statistikkursde.png",
    imgAlt: "Statistik-kurs.de Analytics",
  },
  /*   {
    id: "domindme",
    name: "DoMindMe",
    languages: "Next.js 13, Sass, Prisma, Supabase",
    //pageUrl: "",
    githubUrl: "https://github.com/heleah/domindme",
    //imgSrc: "",
    //imgAlt: "DoMindMe Preview",
  }, */
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    languages: "React, Styled Components",
    pageUrl: "https://frontendmentor-rockpaperscissors-smoky.vercel.app/",
    githubUrl: "https://github.com/heleah/frontendmentor-rockpaperscissors",
    imgSrc: "resources/img/rps_mobile.png",
    imgAlt: "Rock Paper Scissors Preview",
  },
  {
    id: "rest-countries",
    name: "REST Countries API",
    languages: "Next.js, React, Bootstrap, React Bootstrap, next-themes",
    pageUrl: "https://frontendmentor-rest-countries.vercel.app/",
    githubUrl: "https://github.com/heleah/frontendmentor-rest-countries",
    imgSrc: "resources/img/restcountries.png",
    imgAlt: "REST Countries API Preview",
  },
  {
    id: "pokemon",
    name: "Pokemon API App",
    languages: "React, Styled Components, Styleguidist",
    pageUrl: "https://pokemon-api-app.vercel.app/",
    githubUrl: "https://github.com/heleah/pokemon-api-app",
    imgSrc: "resources/img/pokemonapp.png",
    imgAlt: "Pokemon App Preview",
  },
  {
    id: "quizney-react",
    name: "Quizney App (React)",
    languages: "React, Styled Components",
    pageUrl: "https://quizney-react.vercel.app/",
    githubUrl: "https://github.com/heleah/quizney-react",
    imgSrc: "resources/img/quizney.png",
    imgAlt: "Quizney React Preview",
  },
  {
    id: "quizney",
    name: "Quizney App",
    languages: "Vanilla JS, CSS, HTML",
    pageUrl: "https://quizney-hah.vercel.app/",
    githubUrl: "https://github.com/heleah/quiz-app",
    imgSrc: "resources/img/quizney.png",
    imgAlt: "Quizney Preview",
  },
  /*   {
    id: "choredoor",
    name: "Chore Door",
    languages: "JavaScript, HTML, CSS",
    pageUrl: "https://heleah.github.io/choredoor/",
    githubUrl: "https://github.com/heleah/choredoor",
    imgSrc: "resources/img/choredoor.jpg",
    imgAlt: "Chore Door Preview",
  }, */
];

function createProjects() {
  projects.forEach((project) => {
    const newProject = document.createElement("article");
    newProject.classList.add("boxes");
    newProject.id = project.id;
    projectContainer.appendChild(newProject);

    const contentWrapper = document.createElement("section");
    contentWrapper.classList.add("contents");
    newProject.appendChild(contentWrapper);

    const h3 = document.createElement("h3");
    h3.innerText = project.name;
    contentWrapper.appendChild(h3);

    const languageP = document.createElement("p");
    languageP.innerText = project.languages;
    languageP.style.fontWeight = "700";
    contentWrapper.appendChild(languageP);

    const descriptionP = document.createElement("p");
    descriptionP.setAttribute("data-i18n-key", "description-" + project.id);
    contentWrapper.appendChild(descriptionP);

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("buttons", "multipleButtons");
    contentWrapper.appendChild(buttonWrapper);

    const ul = document.createElement("ul");
    buttonWrapper.appendChild(ul);

    if (project.pageUrl) {
      const pageButton = document.createElement("li");
      pageButton.classList.add("button");
      ul.appendChild(pageButton);

      const pageA = document.createElement("a");
      pageA.href = project.pageUrl;
      pageA.target = "_blank";
      pageA.innerText = "Demo";
      pageButton.appendChild(pageA);
    }

    if (project.githubUrl) {
      const githubButton = document.createElement("li");
      githubButton.classList.add("button");
      ul.appendChild(githubButton);

      const githubA = document.createElement("a");
      githubA.href = project.githubUrl;
      githubA.target = "_blank";
      githubA.innerText = "Repository";
      githubButton.appendChild(githubA);
    }

    if (project.imgSrc) {
      const projectImg = document.createElement("img");
      projectImg.src = project.imgSrc;
      projectImg.alt = project.imgAlt;
      newProject.appendChild(projectImg);
    }
  });
}

createProjects();

// Certificates

const certificateContainer = document.getElementById("certificate-container");

const certificates = [
  {
    name: "Data Analytics Bootcamp at neuefische GmbH",
    id: "neuefische-data",
    contents: [
      "Python",
      "Numpy, pandas",
      "SQL",
      "Tableau",
      "EDA",
      "Data Visualization",
      "Stakeholder Management",
    ],
    certSrc: "./resources/certificate-Data_Analytics-Helena_Heil.pdf#toolbar=0",
    certImgSrc: "./resources/img/neuefischeData.png",
    certAlt: "Data Analytics Certificate neuefische",
  },
  {
    name: "Web Development Bootcamp at neuefische GmbH",
    id: "neuefische-web",
    contents: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Shell",
      "frontend-react-jsx",
      "backend-node-exp-mong",
      "APIs",
      "Git Workflow, GitHub",
    ],
    certSrc: "./resources/HelenaHeil_neuefische_certificate.pdf#toolbar=0",
    certImgSrc: "./resources/img/neuefischeCert.png",
    certAlt: "Web Development Certificate neuefische",
  },
  {
    name: "Web Development at Codecademy",
    id: "webdev",
    contents: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Shell",
      "Git Workflow, GitHub",
      "frontend-react-jsx",
      "backend-node",
      "sql-dbs",
      "APIs",
      "tdd",
    ],
    certSrc:
      "https://www.codecademy.com/profiles/datschx/certificates/5b32457b646caa5007c30975",
    certImgSrc: "./resources/img/WebDevCert.jpg",
    certAlt: "Web Development Certificate Codecademy",
  },
  {
    name: "PHP at Codecademy",
    id: "php",
    contents: [
      "functions-incl",
      "Arrays",
      "HTML Form Handling",
      "conditions-logical",
      "loops",
      "data-validation",
      "classes-obj",
    ],
    certSrc:
      "https://www.codecademy.com/profiles/datschx/certificates/d24ce3aa4ed99ac04afffec4a78e2e44",
    certImgSrc: "./resources/img/TSCert.jpg",
    certAlt: "PHP Certificate",
  },
  {
    name: "TypeScript at Codecademy",
    id: "typescript",
    contents: [
      "Types",
      "functions",
      "complex-types",
      "Union Types",
      "Type Narrowing",
      "Advanced Object Types (Interfaces)",
    ],
    certSrc:
      "https://www.codecademy.com/profiles/datschx/certificates/56fb1e71303e37b643bb1905f31c8a09",
    certImgSrc: "./resources/img/TSCert.jpg",
    certAlt: "TypeScript Certificate",
  },
  {
    name: "Bootstrap at Codecademy",
    id: "bootstrap",
    contents: ["Grid", "Utilities and Components"],
    certSrc:
      "https://www.codecademy.com/profiles/datschx/certificates/0595479d03627a8cb816b069000e4d06",
    certImgSrc: "./resources/img/BootstrapCert.png",
    certAlt: "Bootstrap Certificate",
  },
];

function createCertificates() {
  certificates.forEach((certificate) => {
    const newCert = document.createElement("article");
    newCert.classList.add("boxes");
    newCert.id = certificate.id;
    certificateContainer.appendChild(newCert);

    const contentsSect = document.createElement("section");
    contentsSect.classList.add("contents");
    newCert.appendChild(contentsSect);

    const h3 = document.createElement("h3");
    h3.innerText = certificate.name;
    contentsSect.appendChild(h3);

    const ul = document.createElement("ul");
    contentsSect.appendChild(ul);

    certificate.contents.forEach((content) => {
      const li = document.createElement("li");
      if (content === content.toLowerCase()) {
        li.setAttribute("data-i18n-key", content);
      } else {
        li.innerText = content;
      }
      ul.appendChild(li);
    });

    const buttonContainer = document.createElement("section");
    buttonContainer.classList.add("buttons");
    contentsSect.appendChild(buttonContainer);

    const buttonP = document.createElement("p");
    buttonP.classList.add("button");
    buttonContainer.appendChild(buttonP);

    const aTag = document.createElement("a");
    aTag.href = certificate.certSrc;
    aTag.target = "_blank";
    aTag.setAttribute("data-i18n-key", "full-view");
    buttonP.appendChild(aTag);

    const certImg = document.createElement("img");
    certImg.src = certificate.certImgSrc;
    certImg.alt = certificate.certAlt;
    newCert.appendChild(certImg);
  });
}

createCertificates();

// Slide in on Scroll

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slides = document.querySelectorAll(".slide-in");

function checkSlide() {
  slides.forEach((slide) => {
    const slideTop = slide.getBoundingClientRect().top;
    const isInWindow =
      slideTop <= (window.innerHeight || document.documentElement.clientHeight);
    isInWindow && slide.classList.add("active");
  });
}

window.addEventListener("scroll", debounce(checkSlide));
