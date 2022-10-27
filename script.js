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
    githubUrl: "https://github.com/helenahcodes/adventeire",
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
    githubUrl: "https://github.com/LukasKurpiela/pokemon-api-app",
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
    githubUrl: "https://github.com/helenahcodes/quizney-react",
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
    githubUrl: "https://github.com/helenahcodes/quiz-app",
    imgSrc: "resources/img/quizney.png",
    imgAlt: "Quizney Preview",
  },
  {
    id: "choredoor",
    name: "Chore Door",
    languages: "JavaScript, HTML, CSS",
    description:
      "Ziel dieses Spiels ist es alle Türen zu öffnen ohne dem ChoreBot(rechts) zu begegnen, der andernfalls die Spielrunde sofort beendet. Zwei Zähler zeigen die aktuelle Gewinnserie sowie den Serienrekord der Sitzung an. Deployed mit GitHub Pages. (HTML und CSS großteils von Codecademy bereitgestellt)",
    pageUrl: "https://helenahcodes.github.io/choredoor/",
    githubUrl: "https://github.com/helenahcodes/choredoor",
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
    descriptionP.innerText = project.description;
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
      "Frontend-Anwendungen mit React & JSX",
      "Backend-Entwicklung mit Node.js, Express und MongoDB",
      "APIs",
      "Git Workflow und GitHub",
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
      "Git Workflow und GitHub",
      "Frontend-Anwendungen mit React & JSX",
      "Backend-Entwicklung mit Node.js",
      "SQL & Datenbanken",
      "APIs",
      "Test Driven Development mit Mocha & Node.js",
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
      "Funktionen (inkl. eingebaute)",
      "Arrays",
      "HTML Form Handling",
      "Bedingungen und logische Operatoren",
      "Schleifen",
      "Datenvalidierung",
      "Klassen und Objekte",
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
      "Funktionen",
      "Komplexe Typen (Arrays, Custom Types",
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
      li.innerText = content;
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
    aTag.innerText = "Vollansicht";
    buttonP.appendChild(aTag);

    const certImg = document.createElement("img");
    certImg.src = certificate.certImgSrc;
    certImg.alt = certificate.certAlt;
    newCert.appendChild(certImg);
  });
}

createCertificates();

/*<div class="boxes" id="webdev">
          <figure>
            <img
              src="resources/img/WebDevCert.jpg"
              alt="Web Development Certificate"
            />
          </figure>
          <div class="contents">
            <h3>Web Development at Codecademy</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Kommandozeile</li>
              <li>Git und GitHub</li>
              <li>Front-End-Anwendungen mit React & JSX</li>
              <li>Back-End-Entwicklung mit Node.js</li>
              <li>SQL & Datenbanken</li>
              <li>APIs</li>
              <li>Test Driven Development (Mocha & Node.js)</li>
            </ul>
            <div class="buttons">
              <p class="button">
                <a
                  href="https://www.codecademy.com/profiles/datschx/certificates/5b32457b646caa5007c30975"
                  target="_blank"
                  >Zur Verifizierung</a
                >
              </p>
            </div>
          </div>
        </div>


        <div class="boxes" id="php">
          <div class="contents">
            <h3>PHP at Codecademy</h3>
            <ul>
              <li>Funktionen (inkl. eingebaute)</li>
              <li>Arrays</li>
              <li>HTML Form Handling</li>
              <li>Bedingungen und logische Operatoren</li>
              <li>Schleifen</li>
              <li>Datenvalidierung</li>
              <li>Klassen und Objekte</li>
            </ul>
            <div class="buttons">
              <p class="button">
                <a
                  href="https://www.codecademy.com/profiles/datschx/certificates/d24ce3aa4ed99ac04afffec4a78e2e44"
                  target="_blank"
                  >Zur Verifizierung</a
                >
              </p>
            </div>
          </div>
          <figure>
            <img src="resources/img/PHPCert.jpg" alt="PHP Certificate" />
          </figure>
        </div>


        <div class="boxes" id="typescript">
          <figure>
            <img src="resources/img/TSCert.jpg" alt="TypeScript Certificate" />
          </figure>
          <div class="contents">
            <h3>TypeScript at Codecademy</h3>
            <ul>
              <li>Types</li>
              <li>Funktionen</li>
              <li>Komplexe Typen (Arrays, Custom Types)</li>
              <li>Union Types</li>
              <li>Type Narrowing</li>
              <li>Advanced Object Types (Interfaces)</li>
            </ul>
            <div class="buttons">
              <p class="button">
                <a
                  href="https://www.codecademy.com/profiles/datschx/certificates/56fb1e71303e37b643bb1905f31c8a09"
                  target="_blank"
                  >Zur Verifizierung</a
                >
              </p>
            </div>
          </div>
        </div> */
