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
    id: "neuefische",
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
    description:
      "Mobile-first Abschlussarbeit für das neue fische Bootcamps. Nutzer können durch eine Liste von Sehenswürdigkeiten in Irland browsen, bestimmte Sehenswürdigkeiten als Favorit markieren, eine Detailansicht aufrufen, sowie Sehenswürdigkeiten auf eine eigene Reisroute setzen. Deployed mit Heroku.",
    pageUrl: "https://adventeire.herokuapp.com/",
    githubUrl: "https://github.com/heleah/adventeire",
    imgSrc: "resources/img/adventeire_preview.png",
    imgAlt: "Adventéire Preview",
  },
  {
    id: "pokemon",
    name: "Pokemon API App",
    languages: "React, Styled Components, Styleguidist",
    description:
      "Mobile-first Pokemon-App im Rahmen des neue fische Bootcamps, bei der die Daten von einer API gezogen wurden. Auf der Pokemon-Seite kann man durch eine Suchleiste bestimmte Pokemon suchen und sie per Button auf seine Favoriten-Liste setzen. Über den Info-Button werden weitere Details über das jeweilige Pokemon angezeigt. Gruppenprojekt zusammen mit Bejan Afshar, Lukas Kurpiela und Sharine Ankenbrand, deployed mit Vercel.",
    pageUrl: "https://pokemon-api-app.vercel.app/",
    githubUrl: "https://github.com/heleah/pokemon-api-app",
    imgSrc: "resources/img/pokemonapp.png",
    imgAlt: "Pokemon App Preview",
  },
  {
    id: "quizney-react",
    name: "Quizney App (React)",
    languages: "React, Styled Components",
    description:
      "Mobile-first Quiz-App mit Fragen rund um Disney im Rahmen des neue fische Bootcamps. Die Home Seite beinhaltet Fragen mit vier Antwortmöglichkeiten. Bei Klick auf eine Antwort wird angezeigt, ob diese richtig oder falsch ist. Die anderen Seiten sind Bookmarks, welche auf Klick auf das Kronen-Icon hinzugefügt bzw. entfernt werden. Das Neue-Fragen-Formulat ist (noch) nicht funktional, genau wie die Profilseite (statisch). Deployed mit Vercel.",
    pageUrl: "https://quizney-react.vercel.app/",
    githubUrl: "https://github.com/heleah/quizney-react",
    imgSrc: "resources/img/quizney.png",
    imgAlt: "Quizney React Preview",
  },
  {
    id: "quizney",
    name: "Quizney App",
    languages: "Vanilla JS, CSS, HTML",
    description:
      "Mobile-first Quiz-App mit Fragen rund um Disney im Rahmen des neue fische Bootcamps. Die Home Seite beinhaltet Fragen mit vier Antwortmöglichkeiten. Bei Klick auf eine Antwort wird angezeigt, ob diese richtig oder falsch ist. Die anderen Seiten sind Bookmarks (noch nicht funktional), Eintragen von neuen Fragen (nicht funktional), sowie eine Profilseite (statisch). Deployed mit Vercel.",
    pageUrl: "https://quizney-hah.vercel.app/",
    githubUrl: "https://github.com/heleah/quiz-app",
    imgSrc: "resources/img/quizney.png",
    imgAlt: "Quizney Preview",
  },
  {
    id: "choredoor",
    name: "Chore Door",
    languages: "JavaScript, HTML, CSS",
    description:
      "Ziel dieses Spiels ist es alle Türen zu öffnen ohne dem ChoreBot(rechts) zu begegnen, der andernfalls die Spielrunde sofort beendet. Zwei Zähler zeigen die aktuelle Gewinnserie sowie den Serienrekord der Sitzung an. Deployed mit GitHub Pages. (HTML und CSS großteils von Codecademy bereitgestellt)",
    pageUrl: "https://heleah.github.io/choredoor/",
    githubUrl: "https://github.com/heleah/choredoor",
    imgSrc: "resources/img/choredoor.jpg",
    imgAlt: "Chore Door Preview",
  },
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

    const pageButton = document.createElement("li");
    pageButton.classList.add("button");
    ul.appendChild(pageButton);

    const pageA = document.createElement("a");
    pageA.href = project.pageUrl;
    pageA.target = "_blank";
    pageA.innerText = "Demo";
    pageButton.appendChild(pageA);

    const githubButton = document.createElement("li");
    githubButton.classList.add("button");
    ul.appendChild(githubButton);

    const githubA = document.createElement("a");
    githubA.href = project.githubUrl;
    githubA.target = "_blank";
    githubA.innerText = "Repository";
    githubButton.appendChild(githubA);

    const projectImg = document.createElement("img");
    projectImg.src = project.imgSrc;
    projectImg.alt = project.imgAlt;
    newProject.appendChild(projectImg);
  });
}

createProjects();

// Certificates

const certificateContainer = document.getElementById("certificate-container");

const certificates = [
  {
    name: "Web Development Bootcamp at neuefische GmbH",
    id: "neuefische",
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
