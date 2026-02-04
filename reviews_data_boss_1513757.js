const REVIEWS_DATA = [
  // 12 x 4-Sterne Bewertungen (~8.5%)
  {
    rating: 4,
    content: "Sehr schöne Uhr, die Verarbeitung ist top und das Edelstahlarmband fühlt sich hochwertig an. Einziger Kritikpunkt: Die Anleitung zum Einstellen der Chronographen hätte ausführlicher sein können.",
    customer_name: "Michael Berger",
    date: "2024-12-08",
    verified: true
  },
  {
    rating: 4,
    content: "Die Uhr sieht am Handgelenk wirklich elegant aus. Das silberne Zifferblatt mit den blauen Akzenten gefällt mir sehr. Nur das Armband war anfangs etwas steif, wurde aber nach einigen Tagen angenehmer.",
    customer_name: "Thomas Richter",
    date: "2024-11-22",
    verified: true
  },
  {
    rating: 4,
    content: "Preis-Leistung stimmt bei dieser Boss Uhr absolut. Der Chronograph funktioniert einwandfrei. Hätte mir nur gewünscht, dass die Leuchtzeiger etwas heller wären.",
    customer_name: "Andreas Schneider",
    date: "2024-11-05",
    verified: true
  },
  {
    rating: 4,
    content: "Tolle Uhr für den Alltag und auch für besondere Anlässe geeignet. Die Verpackung war sehr hochwertig. Minimal störend: Das Verschließen der Faltschließe erfordert etwas Übung.",
    customer_name: "Stefan Hoffmann",
    date: "2024-10-18",
    verified: true
  },
  {
    rating: 4,
    content: "Mein Mann trägt die Uhr jeden Tag und ist sehr zufrieden. Das Design ist zeitlos elegant. Ein Stern Abzug, da die Uhr etwas schwerer ist als erwartet.",
    customer_name: "Claudia Weber",
    date: "2024-10-03",
    verified: true
  },
  {
    rating: 4,
    content: "Die 1513757 ist eine wunderschöne Uhr. Das Edelstahlarmband passt perfekt zum Gehäuse. Einzig die Kratzfestigkeit des Glases könnte besser sein.",
    customer_name: "Jürgen Fischer",
    date: "2024-09-15",
    verified: true
  },
  {
    rating: 4,
    content: "Schicke Herrenuhr mit tollem Design. Die blauen Details auf dem Zifferblatt sind ein echter Hingucker. Die Datumsanzeige ist nur etwas klein geraten.",
    customer_name: "Peter Müller",
    date: "2024-08-28",
    verified: true
  },
  {
    rating: 4,
    content: "Qualitativ hochwertige Uhr von Boss. Der Chronograph lässt sich gut ablesen. Einziges Manko: Das Verstellen der Armbandglieder erfordert Spezialwerkzeug.",
    customer_name: "Markus Koch",
    date: "2024-08-12",
    verified: true
  },
  {
    rating: 4,
    content: "Elegante Uhr, die zu vielen Outfits passt. Die Verarbeitung ist Boss-typisch sehr gut. Nur die Wasserdichtigkeit könnte für den Preis höher sein.",
    customer_name: "Frank Bauer",
    date: "2024-07-25",
    verified: true
  },
  {
    rating: 4,
    content: "Die Uhr kam in einer sehr schönen Geschenkbox. Das silberne Finish ist makellos. Der Sekundenzeiger hätte für mich gerne etwas länger sein können.",
    customer_name: "Daniel Wolf",
    date: "2024-07-08",
    verified: true
  },
  {
    rating: 4,
    content: "Als Geschenk für meinen Freund gekauft - er ist begeistert. Die Uhr sieht teurer aus als sie ist. Nur die Helligkeit der Leuchtpunkte könnte besser sein.",
    customer_name: "Lisa Hartmann",
    date: "2024-06-20",
    verified: true
  },
  {
    rating: 4,
    content: "Sehr gute Uhr für den Preis. Das Edelstahlarmband ist bequem und die Chronographenfunktion funktioniert präzise. Die Größe von 44mm ist für schmale Handgelenke etwas groß.",
    customer_name: "Christian Lange",
    date: "2024-06-02",
    verified: true
  },
  // 128 x 5-Sterne Bewertungen
  {
    rating: 5,
    content: "Absolut begeistert von dieser Uhr! Das silberne Edelstahlarmband schmiegt sich perfekt ans Handgelenk und der Chronograph funktioniert tadellos. Die blauen Akzente auf dem Zifferblatt geben der Uhr einen modernen Touch. Klare Kaufempfehlung!",
    customer_name: "Martin Schulz",
    date: "2024-12-10",
    verified: true
  },
  {
    rating: 5,
    content: "Endlich eine Uhr, die sowohl elegant als auch sportlich aussieht. Die Verarbeitung ist erstklassig und das Gewicht fühlt sich sehr wertig an. Perfekt für Business und Freizeit.",
    customer_name: "Alexander Klein",
    date: "2024-12-09",
    verified: true
  },
  {
    rating: 5,
    content: "Diese Boss Uhr ist jeden Cent wert! Das Design ist zeitlos und die Qualität übertrifft meine Erwartungen. Bekomme ständig Komplimente dafür.",
    customer_name: "Tobias Meier",
    date: "2024-12-07",
    verified: true
  },
  {
    rating: 5,
    content: "Habe die Uhr als Geburtstagsgeschenk für meinen Mann gekauft. Er war total begeistert! Die Präsentation in der Box ist sehr hochwertig und die Uhr selbst ist ein echtes Schmuckstück.",
    customer_name: "Sandra Wagner",
    date: "2024-12-06",
    verified: true
  },
  {
    rating: 5,
    content: "Top Qualität! Das Edelstahlarmband ist sehr angenehm zu tragen und lässt sich einfach anpassen. Der Chronograph ist präzise und gut ablesbar. Bin sehr zufrieden.",
    customer_name: "Florian Becker",
    date: "2024-12-05",
    verified: true
  },
  {
    rating: 5,
    content: "Traumhafte Uhr! Das silberne Finish ist makellos und die blauen Details sind ein echter Eyecatcher. Perfekte Größe am Handgelenk.",
    customer_name: "Patrick Zimmermann",
    date: "2024-12-04",
    verified: true
  },
  {
    rating: 5,
    content: "Meine dritte Boss Uhr und wieder vollkommen überzeugt. Die 1513757 ist die schönste bisher. Elegantes Design, perfekte Verarbeitung, super Tragekomfort.",
    customer_name: "Robert Krause",
    date: "2024-12-03",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Uhr für den Preis! Die Chronographenfunktion ist praktisch und das Design ist sowohl im Büro als auch in der Freizeit passend. 100% empfehlenswert.",
    customer_name: "Christoph Braun",
    date: "2024-12-02",
    verified: true
  },
  {
    rating: 5,
    content: "Die Lieferung war blitzschnell und die Uhr ist noch schöner als auf den Bildern. Das Edelstahlarmband hat genau die richtige Gliederung. Perfekt!",
    customer_name: "Matthias Werner",
    date: "2024-12-01",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Herrenuhr! Das 44mm Gehäuse ist genau richtig für mein Handgelenk. Die Stoppuhr-Funktion nutze ich täglich beim Sport. Absolut zufrieden!",
    customer_name: "Jan Schmitt",
    date: "2024-11-30",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Uhr mit perfekter Verarbeitung. Das Glas ist kratzsicher und das Zifferblatt sehr gut ablesbar. Boss liefert wie immer Qualität.",
    customer_name: "Sebastian Neumann",
    date: "2024-11-29",
    verified: true
  },
  {
    rating: 5,
    content: "Habe lange nach einer silbernen Uhr mit blauen Akzenten gesucht - diese hier ist perfekt! Tolle Qualität, schönes Design und der Preis ist fair.",
    customer_name: "Niklas Schwarz",
    date: "2024-11-28",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr, die ich je hatte! Das Edelstahlarmband glänzt wunderschön und der Chronograph funktioniert einwandfrei. Sehr empfehlenswert!",
    customer_name: "Dennis Hartmann",
    date: "2024-11-27",
    verified: true
  },
  {
    rating: 5,
    content: "Elegante Boss Uhr, die zu jedem Anlass passt. Die Verarbeitung ist makellos und das Gewicht vermittelt ein Gefühl von Qualität. Kaufe gerne wieder!",
    customer_name: "Tim Schäfer",
    date: "2024-11-26",
    verified: true
  },
  {
    rating: 5,
    content: "Absolut hochwertige Uhr! Das silberne Gehäuse sieht edel aus und die Chronographen-Zifferblätter sind sehr übersichtlich angeordnet. Top!",
    customer_name: "Marcel König",
    date: "2024-11-25",
    verified: true
  },
  {
    rating: 5,
    content: "Mein Freund ist total begeistert von seinem Geschenk! Die Uhr sieht am Handgelenk noch besser aus als auf den Fotos. Perfekte Wahl.",
    customer_name: "Jennifer Schmidt",
    date: "2024-11-24",
    verified: true
  },
  {
    rating: 5,
    content: "Super schöne Uhr! Die Qualität entspricht voll und ganz den Erwartungen an die Marke Boss. Der Chronograph ist auch sehr nützlich.",
    customer_name: "Kevin Fuchs",
    date: "2024-11-23",
    verified: true
  },
  {
    rating: 5,
    content: "Hervorragende Verarbeitung, edles Design und angenehmer Tragekomfort. Die 1513757 ist meine Lieblingsuhr geworden. Absolut empfehlenswert!",
    customer_name: "Daniel Peters",
    date: "2024-11-21",
    verified: true
  },
  {
    rating: 5,
    content: "Die Uhr kam gut verpackt und sicher an. Das Edelstahlarmband hat eine tolle Haptik und die Stoppuhr funktioniert präzise. Sehr zufrieden!",
    customer_name: "Lars Meyer",
    date: "2024-11-20",
    verified: true
  },
  {
    rating: 5,
    content: "Eine wahre Augenweide! Das silberne Zifferblatt mit den blauen Zeigern ist wunderschön. Die Uhr fühlt sich sehr hochwertig an. Top Qualität!",
    customer_name: "Oliver Hofmann",
    date: "2024-11-19",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Alltagsuhr! Das Edelstahlarmband ist robust und gleichzeitig elegant. Der Chronograph macht die Uhr zusätzlich praktisch. Volle Punktzahl!",
    customer_name: "Mike Jäger",
    date: "2024-11-18",
    verified: true
  },
  {
    rating: 5,
    content: "Bin absolut begeistert von der Qualität und dem Design. Die Boss 1513757 ist eine perfekte Kombination aus Eleganz und Funktionalität.",
    customer_name: "Sascha Arnold",
    date: "2024-11-17",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Uhr zu einem fairen Preis! Die Verarbeitung ist erstklassig und das Design zeitlos elegant. Würde sie jederzeit wieder kaufen.",
    customer_name: "Benjamin Graf",
    date: "2024-11-16",
    verified: true
  },
  {
    rating: 5,
    content: "Diese Uhr hat meine Erwartungen übertroffen! Das Edelstahlarmband ist sehr bequem und der Chronograph funktioniert einwandfrei. Klare Empfehlung!",
    customer_name: "Philipp Krüger",
    date: "2024-11-15",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Herrenuhr! Die Kombination aus Silber und den blauen Akzenten ist perfekt. Bekomme regelmäßig Komplimente für die Uhr.",
    customer_name: "Jonas Friedrich",
    date: "2024-11-14",
    verified: true
  },
  {
    rating: 5,
    content: "Die Uhr ist ein absoluter Hingucker! Das 44mm Gehäuse hat genau die richtige Größe und das Gewicht fühlt sich sehr wertig an. Super zufrieden!",
    customer_name: "Julian Böhm",
    date: "2024-11-13",
    verified: true
  },
  {
    rating: 5,
    content: "Top Qualität von Boss! Die Uhr sieht nicht nur toll aus, sondern liegt auch sehr angenehm am Handgelenk. Der Chronograph ist sehr präzise.",
    customer_name: "Fabian Keller",
    date: "2024-11-12",
    verified: true
  },
  {
    rating: 5,
    content: "Habe die Uhr als Hochzeitsgeschenk für meinen Bruder gekauft. Er war überglücklich! Die Präsentation in der Geschenkbox ist wirklich edel.",
    customer_name: "Sarah Vogel",
    date: "2024-11-11",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Uhr! Das silberne Edelstahlarmband ist sehr hochwertig verarbeitet und der Verschluss ist stabil. Absolute Kaufempfehlung!",
    customer_name: "Nico Winter",
    date: "2024-11-10",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr in meiner Sammlung! Das Design ist zeitlos und die Qualität stimmt. Boss hat hier wieder mal einen tollen Job gemacht.",
    customer_name: "Max Sommer",
    date: "2024-11-09",
    verified: true
  },
  {
    rating: 5,
    content: "Traumhafte Uhr zum fairen Preis! Das Zifferblatt ist sehr gut ablesbar und die Chronographenfunktion funktioniert perfekt. Bin begeistert!",
    customer_name: "David Pohl",
    date: "2024-11-08",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist meine erste Boss Uhr und ich bin sehr zufrieden! Das Design ist elegant und die Verarbeitung hochwertig. Klare Empfehlung!",
    customer_name: "Lukas Roth",
    date: "2024-11-07",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für Business und Freizeit! Das silberne Finish ist makellos und die blauen Details geben der Uhr einen modernen Look.",
    customer_name: "Simon Heinrich",
    date: "2024-11-06",
    verified: true
  },
  {
    rating: 5,
    content: "Mein Mann trägt die Uhr jeden Tag und ist total begeistert! Die Qualität ist hervorragend und das Design zeitlos schön.",
    customer_name: "Maria Lehmann",
    date: "2024-11-04",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Verarbeitung und edles Design! Das Edelstahlarmband passt perfekt und der Chronograph ist sehr übersichtlich. Top Uhr!",
    customer_name: "René Günther",
    date: "2024-11-03",
    verified: true
  },
  {
    rating: 5,
    content: "Die Uhr ist noch schöner als erwartet! Das silberne Gehäuse glänzt wunderschön und die blauen Zeiger sind ein toller Kontrast. Perfekt!",
    customer_name: "Timo Ludwig",
    date: "2024-11-02",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Uhr zu einem guten Preis! Die Stoppuhr-Funktion ist sehr praktisch und das Design ist sowohl elegant als auch sportlich.",
    customer_name: "Dominik Brandt",
    date: "2024-11-01",
    verified: true
  },
  {
    rating: 5,
    content: "Bin total begeistert von der Boss 1513757! Das Edelstahlarmband ist sehr bequem und die Uhr sieht am Handgelenk einfach klasse aus.",
    customer_name: "André Beck",
    date: "2024-10-31",
    verified: true
  },
  {
    rating: 5,
    content: "Erstklassige Qualität! Die Uhr fühlt sich sehr wertig an und das Design ist zeitlos elegant. Perfekt für jeden Anlass geeignet.",
    customer_name: "Thorsten Haas",
    date: "2024-10-30",
    verified: true
  },
  {
    rating: 5,
    content: "Die Lieferung war schnell und die Uhr war perfekt verpackt. Die Qualität ist hervorragend und das Design überzeugt auf ganzer Linie!",
    customer_name: "Marco Lorenz",
    date: "2024-10-29",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Uhr mit tollem Tragekomfort! Das 44mm Gehäuse ist perfekt für mein Handgelenk. Bin sehr zufrieden mit dem Kauf.",
    customer_name: "Patrick Schulz",
    date: "2024-10-28",
    verified: true
  },
  {
    rating: 5,
    content: "Top Uhr von Boss! Die Verarbeitung ist makellos und das Design elegant. Der Chronograph funktioniert präzise. Absolute Empfehlung!",
    customer_name: "Kai Bergmann",
    date: "2024-10-27",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Entscheidung! Die Uhr sieht fantastisch aus und die Qualität ist hervorragend. Das Edelstahlarmband ist sehr angenehm zu tragen.",
    customer_name: "Sven Franke",
    date: "2024-10-26",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für den täglichen Gebrauch! Das silberne Finish ist elegant und die blauen Akzente geben der Uhr einen sportlichen Touch.",
    customer_name: "Steffen Schreiber",
    date: "2024-10-25",
    verified: true
  },
  {
    rating: 5,
    content: "Habe die Uhr als Geschenk erhalten und bin total begeistert! Die Qualität ist erstklassig und das Design zeitlos schön.",
    customer_name: "Felix Walter",
    date: "2024-10-24",
    verified: true
  },
  {
    rating: 5,
    content: "Großartige Uhr! Das Edelstahlarmband ist sehr hochwertig und der Chronograph funktioniert einwandfrei. Preis-Leistung stimmt absolut!",
    customer_name: "Ralf Simon",
    date: "2024-10-23",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist eine wunderschöne Uhr! Das silberne Zifferblatt mit den blauen Details ist ein echter Hingucker. Volle Kaufempfehlung!",
    customer_name: "Uwe Herrmann",
    date: "2024-10-22",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Qualität von Boss! Die Uhr liegt perfekt am Handgelenk und das Design ist sowohl elegant als auch sportlich. Top!",
    customer_name: "Dirk Kaiser",
    date: "2024-10-21",
    verified: true
  },
  {
    rating: 5,
    content: "Meine neue Lieblingsuhr! Die Verarbeitung ist hochwertig und das Design zeitlos. Der Chronograph ist sehr übersichtlich. Perfekt!",
    customer_name: "Jens Engel",
    date: "2024-10-20",
    verified: true
  },
  {
    rating: 5,
    content: "Super schöne Uhr mit tollem Tragekomfort! Das Edelstahlarmband ist sehr bequem und das Gewicht fühlt sich sehr wertig an.",
    customer_name: "Wolfgang Seifert",
    date: "2024-10-19",
    verified: true
  },
  {
    rating: 5,
    content: "Die Uhr hat alle meine Erwartungen übertroffen! Das Design ist elegant und die Qualität ist hervorragend. Absolute Empfehlung!",
    customer_name: "Holger Dietrich",
    date: "2024-10-17",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Herrenuhr! Das silberne Finish ist makellos und die blauen Zeiger sind wunderschön. Bin sehr zufrieden mit dem Kauf.",
    customer_name: "Karsten Otto",
    date: "2024-10-16",
    verified: true
  },
  {
    rating: 5,
    content: "Traumhafte Uhr! Die Qualität ist hervorragend und das Design zeitlos elegant. Das Edelstahlarmband ist sehr hochwertig verarbeitet.",
    customer_name: "Bernd Ritter",
    date: "2024-10-15",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr für diesen Preis! Das Design ist wunderschön und die Chronographenfunktion sehr praktisch. Klare Kaufempfehlung!",
    customer_name: "Gerd Schubert",
    date: "2024-10-14",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Boss Uhr mit tollem Design! Das Edelstahlarmband ist sehr angenehm zu tragen und der Verschluss ist stabil und sicher.",
    customer_name: "Klaus Pfeiffer",
    date: "2024-10-13",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für jeden Anlass! Das silberne Gehäuse und die blauen Akzente harmonieren perfekt. Bin absolut begeistert!",
    customer_name: "Manfred Busch",
    date: "2024-10-12",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist eine exzellente Wahl! Die Verarbeitung ist erstklassig und das Design zeitlos schön. Würde sie jederzeit wieder kaufen.",
    customer_name: "Werner Kunz",
    date: "2024-10-11",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Uhr! Das Edelstahlarmband glänzt wunderschön und der Chronograph ist sehr übersichtlich. Top Qualität von Boss!",
    customer_name: "Helmut Kraft",
    date: "2024-10-10",
    verified: true
  },
  {
    rating: 5,
    content: "Super zufrieden mit der Uhr! Das Design ist elegant und die Qualität stimmt. Das 44mm Gehäuse hat genau die richtige Größe.",
    customer_name: "Ernst Lindner",
    date: "2024-10-09",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Entscheidung des Jahres! Die Uhr ist wunderschön und sehr hochwertig verarbeitet. Bekomme ständig Komplimente dafür.",
    customer_name: "Karl Baumann",
    date: "2024-10-08",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Uhr zum fairen Preis! Das silberne Finish ist makellos und die blauen Details geben der Uhr einen besonderen Touch.",
    customer_name: "Herbert Kuhn",
    date: "2024-10-07",
    verified: true
  },
  {
    rating: 5,
    content: "Meine Erwartungen wurden übertroffen! Die Qualität ist hervorragend und das Design zeitlos elegant. Absolute Kaufempfehlung!",
    customer_name: "Dieter Horn",
    date: "2024-10-06",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Uhr von Boss! Das Edelstahlarmband ist sehr bequem und der Chronograph funktioniert einwandfrei. Bin sehr zufrieden!",
    customer_name: "Norbert Stein",
    date: "2024-10-05",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Alltagsuhr! Das Design ist sowohl elegant als auch sportlich. Die Verarbeitung ist wie von Boss gewohnt erstklassig.",
    customer_name: "Reinhard Wolff",
    date: "2024-10-04",
    verified: true
  },
  {
    rating: 5,
    content: "Habe lange nach der perfekten Uhr gesucht und endlich gefunden! Die 1513757 ist wunderschön und sehr hochwertig.",
    customer_name: "Heinz Seidel",
    date: "2024-10-02",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Uhr! Das silberne Zifferblatt ist sehr gut ablesbar und die blauen Zeiger sind ein toller Kontrast. Top!",
    customer_name: "Günter Weise",
    date: "2024-10-01",
    verified: true
  },
  {
    rating: 5,
    content: "Die Uhr ist ein echtes Schmuckstück! Die Qualität ist hervorragend und das Design zeitlos schön. Klare Empfehlung!",
    customer_name: "Harald Beyer",
    date: "2024-09-30",
    verified: true
  },
  {
    rating: 5,
    content: "Bin total begeistert von dieser Uhr! Das Edelstahlarmband ist sehr angenehm und der Chronograph ist sehr praktisch.",
    customer_name: "Rüdiger Köhler",
    date: "2024-09-29",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Boss Uhr mit tollem Tragekomfort! Das Design ist elegant und die Verarbeitung hochwertig. Perfekt!",
    customer_name: "Lothar Maier",
    date: "2024-09-28",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Qualität! Die Uhr sieht am Handgelenk fantastisch aus. Das silberne Finish mit den blauen Akzenten ist perfekt.",
    customer_name: "Eckhard Hahn",
    date: "2024-09-27",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr in meiner Sammlung! Die Verarbeitung ist makellos und das Design zeitlos elegant. Absolute Empfehlung!",
    customer_name: "Horst Voigt",
    date: "2024-09-26",
    verified: true
  },
  {
    rating: 5,
    content: "Super zufrieden! Das Edelstahlarmband ist sehr hochwertig und der Chronograph funktioniert präzise. Top Qualität von Boss!",
    customer_name: "Siegfried Wirth",
    date: "2024-09-25",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für jeden Anlass! Das Design ist wunderschön und die Qualität stimmt. Würde sie jederzeit wieder kaufen.",
    customer_name: "Anton Scholz",
    date: "2024-09-24",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist eine traumhafte Uhr! Das silberne Gehäuse glänzt wunderschön und das Gewicht fühlt sich sehr wertig an.",
    customer_name: "Rudolf Kraus",
    date: "2024-09-23",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Herrenuhr mit tollem Design! Das Edelstahlarmband ist sehr bequem und der Verschluss ist stabil. Perfekt!",
    customer_name: "Alfons Huber",
    date: "2024-09-22",
    verified: true
  },
  {
    rating: 5,
    content: "Bin absolut begeistert! Die Qualität ist hervorragend und das Design zeitlos schön. Die blauen Details sind ein echter Hingucker.",
    customer_name: "Otto Schuster",
    date: "2024-09-21",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Uhr zum fairen Preis! Das silberne Finish ist makellos und der Chronograph ist sehr übersichtlich. Klare Empfehlung!",
    customer_name: "Kurt Heller",
    date: "2024-09-20",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Entscheidung! Die Uhr ist wunderschön und sehr hochwertig verarbeitet. Das Edelstahlarmband ist sehr angenehm.",
    customer_name: "Walter Albrecht",
    date: "2024-09-19",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Boss Uhr! Das Design ist elegant und die Qualität stimmt auf ganzer Linie. Absolute Kaufempfehlung!",
    customer_name: "Fritz Stark",
    date: "2024-09-18",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für Business und Freizeit! Das 44mm Gehäuse ist genau richtig und das Gewicht fühlt sich sehr wertig an.",
    customer_name: "Erich Krug",
    date: "2024-09-17",
    verified: true
  },
  {
    rating: 5,
    content: "Super schöne Uhr! Das silberne Zifferblatt mit den blauen Zeigern ist wunderschön. Die Verarbeitung ist erstklassig.",
    customer_name: "Konrad Thiel",
    date: "2024-09-16",
    verified: true
  },
  {
    rating: 5,
    content: "Die Uhr ist ein absolutes Highlight! Das Design ist zeitlos elegant und die Qualität übertrifft meine Erwartungen.",
    customer_name: "Hans Berger",
    date: "2024-09-14",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Herrenuhr mit tollem Tragekomfort! Das Edelstahlarmband ist sehr bequem und der Chronograph sehr praktisch.",
    customer_name: "Josef Richter",
    date: "2024-09-13",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Uhr! Die Qualität ist hervorragend und das Design zeitlos schön. Bin sehr zufrieden mit dem Kauf.",
    customer_name: "Franz Schneider",
    date: "2024-09-12",
    verified: true
  },
  {
    rating: 5,
    content: "Top Qualität von Boss! Das silberne Finish ist makellos und die blauen Akzente geben der Uhr einen besonderen Touch.",
    customer_name: "Georg Hoffmann",
    date: "2024-09-11",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist perfekt! Das Edelstahlarmband ist sehr hochwertig und der Chronograph funktioniert einwandfrei.",
    customer_name: "Heinrich Weber",
    date: "2024-09-10",
    verified: true
  },
  {
    rating: 5,
    content: "Traumhafte Uhr! Das Design ist elegant und die Verarbeitung hochwertig. Bekomme ständig Komplimente für die Uhr.",
    customer_name: "Ludwig Fischer",
    date: "2024-09-09",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Alltagsuhr! Das silberne Gehäuse glänzt wunderschön und die blauen Details sind ein echter Hingucker.",
    customer_name: "Wilhelm Müller",
    date: "2024-09-08",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Boss Uhr zum fairen Preis! Die Qualität ist hervorragend und das Design zeitlos elegant. Top!",
    customer_name: "Alfred Koch",
    date: "2024-09-07",
    verified: true
  },
  {
    rating: 5,
    content: "Super zufrieden mit der Uhr! Das Edelstahlarmband ist sehr angenehm und der Verschluss ist stabil und sicher.",
    customer_name: "Richard Bauer",
    date: "2024-09-06",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr für den Alltag! Das 44mm Gehäuse ist perfekt und die Chronographenfunktion sehr praktisch.",
    customer_name: "Willi Wolf",
    date: "2024-09-05",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Verarbeitung! Die Uhr sieht am Handgelenk fantastisch aus. Das Design ist sowohl elegant als auch sportlich.",
    customer_name: "August Hartmann",
    date: "2024-09-04",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Uhr! Das silberne Zifferblatt ist sehr gut ablesbar und die blauen Zeiger sind wunderschön.",
    customer_name: "Bruno Lange",
    date: "2024-09-03",
    verified: true
  },
  {
    rating: 5,
    content: "Bin absolut begeistert von der Boss 1513757! Das Edelstahlarmband ist sehr hochwertig und das Design zeitlos.",
    customer_name: "Emil Krause",
    date: "2024-09-02",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Qualität! Die Uhr fühlt sich sehr wertig an und das Design ist wunderschön. Absolute Empfehlung!",
    customer_name: "Anton Braun",
    date: "2024-09-01",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Herrenuhr mit perfekter Verarbeitung! Das silberne Finish ist makellos und der Chronograph sehr übersichtlich.",
    customer_name: "Gustav Werner",
    date: "2024-08-31",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Entscheidung des Jahres! Die Uhr ist wunderschön und die Qualität ist hervorragend. Klare Kaufempfehlung!",
    customer_name: "Hugo Schmitt",
    date: "2024-08-30",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für jeden Anlass! Das Edelstahlarmband ist sehr bequem und das Design zeitlos elegant.",
    customer_name: "Viktor Neumann",
    date: "2024-08-29",
    verified: true
  },
  {
    rating: 5,
    content: "Super schöne Boss Uhr! Das silberne Gehäuse und die blauen Akzente harmonieren perfekt. Top Qualität!",
    customer_name: "Albert Schwarz",
    date: "2024-08-27",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist ein echtes Schmuckstück! Die Verarbeitung ist erstklassig und das Design zeitlos schön.",
    customer_name: "Paul Zimmermann",
    date: "2024-08-26",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Uhr zum fairen Preis! Das Edelstahlarmband ist sehr angenehm und der Chronograph funktioniert einwandfrei.",
    customer_name: "Carl König",
    date: "2024-08-25",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Uhr! Das Design ist elegant und die Qualität stimmt. Das 44mm Gehäuse ist genau richtig.",
    customer_name: "Eduard Schäfer",
    date: "2024-08-24",
    verified: true
  },
  {
    rating: 5,
    content: "Bin sehr zufrieden! Die Uhr sieht am Handgelenk toll aus und die Stoppuhr-Funktion ist sehr praktisch.",
    customer_name: "Friedrich Fuchs",
    date: "2024-08-23",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Herrenuhr! Das silberne Finish ist makellos und die blauen Details geben der Uhr einen besonderen Touch.",
    customer_name: "Gottfried Peters",
    date: "2024-08-22",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Boss Uhr! Die Verarbeitung ist hochwertig und das Design zeitlos elegant. Absolute Empfehlung!",
    customer_name: "Hermann Meyer",
    date: "2024-08-21",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Alltagsuhr! Das Edelstahlarmband ist sehr bequem und der Verschluss ist stabil. Top Qualität!",
    customer_name: "Ignaz Hofmann",
    date: "2024-08-20",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr in meiner Sammlung! Das Design ist wunderschön und die Qualität ist hervorragend.",
    customer_name: "Johann Jäger",
    date: "2024-08-19",
    verified: true
  },
  {
    rating: 5,
    content: "Super zufrieden mit dem Kauf! Das silberne Zifferblatt ist sehr gut ablesbar und die Chronographen funktionieren präzise.",
    customer_name: "Leopold Arnold",
    date: "2024-08-18",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Uhr von Boss! Das Edelstahlarmband ist sehr hochwertig und das Design zeitlos elegant. Klare Empfehlung!",
    customer_name: "Maximilian Graf",
    date: "2024-08-17",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist perfekt! Das silberne Gehäuse glänzt wunderschön und die blauen Akzente sind ein Hingucker.",
    customer_name: "Nikolaus Krüger",
    date: "2024-08-16",
    verified: true
  },
  {
    rating: 5,
    content: "Traumhafte Uhr zum fairen Preis! Die Verarbeitung ist erstklassig und das Design zeitlos schön.",
    customer_name: "Oskar Friedrich",
    date: "2024-08-15",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Herrenuhr! Das Edelstahlarmband ist sehr angenehm und der Chronograph ist sehr übersichtlich.",
    customer_name: "Philipp Böhm",
    date: "2024-08-14",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Qualität! Die Uhr fühlt sich sehr wertig an und das Design ist wunderschön. Top!",
    customer_name: "Robert Keller",
    date: "2024-08-13",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Uhr für Business und Freizeit! Das silberne Finish ist makellos und die Qualität stimmt.",
    customer_name: "Sebastian Vogel",
    date: "2024-08-11",
    verified: true
  },
  {
    rating: 5,
    content: "Bin absolut begeistert! Das Edelstahlarmband ist sehr bequem und das Design zeitlos elegant.",
    customer_name: "Theo Winter",
    date: "2024-08-10",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Boss Uhr! Das 44mm Gehäuse ist perfekt und die Chronographenfunktion sehr praktisch.",
    customer_name: "Ulrich Sommer",
    date: "2024-08-09",
    verified: true
  },
  {
    rating: 5,
    content: "Super schöne Uhr mit tollem Tragekomfort! Das silberne Zifferblatt ist sehr gut ablesbar.",
    customer_name: "Valentin Pohl",
    date: "2024-08-08",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Entscheidung! Die Uhr ist ein echtes Schmuckstück und die Qualität ist hervorragend.",
    customer_name: "Werner Roth",
    date: "2024-08-07",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Uhr! Das Edelstahlarmband ist sehr hochwertig und der Verschluss ist stabil und sicher.",
    customer_name: "Xaver Heinrich",
    date: "2024-08-06",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Herrenuhr mit perfekter Verarbeitung! Das Design ist sowohl elegant als auch sportlich.",
    customer_name: "Yannick Lehmann",
    date: "2024-08-05",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist traumhaft! Das silberne Gehäuse und die blauen Details harmonieren perfekt.",
    customer_name: "Zacharias Günther",
    date: "2024-08-04",
    verified: true
  },
  {
    rating: 5,
    content: "Hochwertige Uhr zum fairen Preis! Die Verarbeitung ist erstklassig und das Design zeitlos.",
    customer_name: "Adrian Ludwig",
    date: "2024-08-03",
    verified: true
  },
  {
    rating: 5,
    content: "Fantastische Boss Uhr! Das Edelstahlarmband ist sehr angenehm und der Chronograph funktioniert einwandfrei.",
    customer_name: "Björn Brandt",
    date: "2024-08-02",
    verified: true
  },
  {
    rating: 5,
    content: "Perfekte Alltagsuhr! Das silberne Finish ist makellos und die Qualität ist hervorragend.",
    customer_name: "Clemens Beck",
    date: "2024-08-01",
    verified: true
  },
  {
    rating: 5,
    content: "Super zufrieden! Die Uhr sieht am Handgelenk fantastisch aus. Absolute Kaufempfehlung!",
    customer_name: "Dominik Haas",
    date: "2024-07-31",
    verified: true
  },
  {
    rating: 5,
    content: "Wunderschöne Uhr mit tollem Design! Das 44mm Gehäuse ist genau richtig für mein Handgelenk.",
    customer_name: "Erik Lorenz",
    date: "2024-07-30",
    verified: true
  },
  {
    rating: 5,
    content: "Die beste Uhr für den Alltag! Das Edelstahlarmband ist sehr bequem und das Design zeitlos elegant.",
    customer_name: "Fabian Schulz",
    date: "2024-07-29",
    verified: true
  },
  {
    rating: 5,
    content: "Exzellente Qualität von Boss! Das silberne Zifferblatt ist sehr gut ablesbar und die blauen Zeiger wunderschön.",
    customer_name: "Gabriel Bergmann",
    date: "2024-07-28",
    verified: true
  },
  {
    rating: 5,
    content: "Tolle Uhr! Die Verarbeitung ist hochwertig und das Design zeitlos schön. Klare Empfehlung!",
    customer_name: "Hannes Franke",
    date: "2024-07-27",
    verified: true
  },
  {
    rating: 5,
    content: "Die 1513757 ist perfekt für jeden Anlass! Das Edelstahlarmband ist sehr hochwertig verarbeitet.",
    customer_name: "Igor Schreiber",
    date: "2024-07-26",
    verified: true
  }
];
