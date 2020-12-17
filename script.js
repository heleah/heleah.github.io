function getInfo(id) {
    let text = "";
    switch(id) {
        case "education":
            text = "Nach dem <em>Abitur</em> studierte ich an der TH Köln das Studienfach <em>Mehrsprachige Kommunikation</em> mit den Sprachen <em>Spanisch und Englisch</em> sowie dem Schwerpunkt <em>Kultur & Medien</em>." + "<br>" + 
            "Im Juli 2020 entschied ich mich zu einer Umschulung in den Bereich Webentwicklung und widmete mich bis November mit Begeisterung dem <em>Webentwicklungskurs von Codecademy</em> (Zertifikat siehe unten).";
            break;
        case "work":
            text = "<em>04/2017 - 04/2018 International Artist Communication Manager, artboxONE, Köln:</em> Kommunikation mit Künstlern, Pflege der Motivdatenbank und Artbuying-Zahlen.<br><em>08/2018 - 04/2019 Online Advertising Campaign Optimiser, arvato/majorel, Dublin:</em> Optimierung und Erstellung digitaler Suchmaschinen-Kampagnen mit GoogleAds.<br><em>05/2019 - 07/2020 Group Operations Executive, Tour Partner Group, Dublin:</em> Kommunikation mit Hotels, Sehenswürdigkeiten, Busunternehmen, Tourguides, Kunden und Partnern, sowie Verwaltung von Reiseabläufen.";
            break;
        case "motivation":
            text = "Meine ersten Erfahrungen mit HTML und CSS sammelte ich als Teenager, als ich voller Stolz eigene Layouts für Fanseiten auf <em>MySpace</em> erstellte. <br> Im Juli 2020 begann ich Kurse auf Codecademy zu belegen, um mein Wissen etwas aufzufrischen. Der Spaß von damals kam wieder auf und so entschloss ich mich zu einer Karriere in der Webentwicklung.<br>Am Programmieren gefällt mir unter anderem, dass man reine Ideen zum Leben bringt und <em>immer wieder Neues</em> dazulernt.";
            break;
        case "interests":
            text = "In meiner Freizeit gebe ich mich gerne meiner kreativen Ader hin, indem ich <em>Ukulele spiele, fotografiere, backe oder zeichne</em>. Außerdem <em>reise</em> ich (unter normalen Umständen) sehr gerne, um neue Orte und Kulturen kennenzulernen. <br> Mein Auslandssemester habe ich in <em>Chile</em> verbracht und bis vor kurzem für zwei Jahre in <em>Irland</em> gelebt.";
            break;
        default:
            text = null;
    };
    document.getElementById("textbox").innerHTML = `<p>${text}</p>`;
}

document.getElementById("education").onclick = function() {
    getInfo("education");
};

document.getElementById("work").onclick = function() {
    getInfo("work");
};

document.getElementById("motivation").onclick = function() {
    getInfo("motivation");
};

document.getElementById("interests").onclick = function() {
    getInfo("interests");
};
