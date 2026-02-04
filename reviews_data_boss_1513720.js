const REVIEWS_DATA = [
  {
    "rating": 5,
    "content": "Die Uhr sieht am Handgelenk absolut fantastisch aus. Das komplett schwarze Design ist ein echter Hingucker. Chronograph-Funktionen arbeiten präzise.",
    "customer_name": "Markus H., München",
    "date": "2026-02-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Boss Qualität wie gewohnt! Das Silikonarmband sitzt super bequem, auch bei langen Arbeitstagen. Sehr zufrieden mit dem Kauf.",
    "customer_name": "Julia S., Hamburg",
    "date": "2026-02-04",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Schöne Uhr, gute Verarbeitung. Das Armband war anfangs etwas steif, aber nach ein paar Tagen Tragen hat es sich angepasst.",
    "customer_name": "Thomas K., Berlin",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe die Uhr als Geburtstagsgeschenk für meinen Mann gekauft. Er ist total begeistert! Das schwarze Finish ist elegant und sportlich zugleich.",
    "customer_name": "Sandra M., Köln",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für den Preis von 279€ ein echtes Schnäppchen! Im Laden kostet die mindestens 359€. Schnelle Lieferung, Top-Zustand.",
    "customer_name": "Christian B., Frankfurt",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Die Uhr ist super, aber die Verpackung war leicht beschädigt. Uhr selbst war zum Glück einwandfrei. Optisch ein Traum!",
    "customer_name": "Lisa R., Stuttgart",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine dritte Boss-Uhr und wieder begeistert. Die Datumsanzeige ist praktisch, die Stoppuhr funktioniert einwandfrei. Klare Kaufempfehlung!",
    "customer_name": "Daniel W., Düsseldorf",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das All-Black-Design ist der Hammer! Passt perfekt zu Business-Outfits aber auch zu Jeans und T-Shirt. Sehr vielseitig.",
    "customer_name": "Anna L., Leipzig",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die 5 ATM Wasserdichtigkeit gibt mir Sicherheit beim Händewaschen und im Regen. Tolle Alltagsuhr mit Style!",
    "customer_name": "Michael F., Dresden",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Qualitativ hochwertig, aber für dünne Handgelenke vielleicht etwas groß (44mm). Mir persönlich gefällt es, aber als Hinweis für andere.",
    "customer_name": "Jennifer P., Nürnberg",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Silikonarmband ist perfekt für den Sommer – kein Schwitzen wie bei Lederarmbändern! Sehr angenehm zu tragen.",
    "customer_name": "Stefan G., Hannover",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Leuchtzeiger sind im Dunkeln gut sichtbar. Praktisch wenn man nachts kurz die Zeit checken will. Top Verarbeitung!",
    "customer_name": "Katharina E., Bremen",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe lange nach einer schwarzen Chronographen-Uhr gesucht. Diese Boss 1513720 ist perfekt! Endlich gefunden.",
    "customer_name": "Patrick T., Essen",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Sehr schöne Uhr, leider kam sie ohne Bedienungsanleitung. Hab online nachgeschaut wie man den Chronographen benutzt.",
    "customer_name": "Nina A., Dortmund",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Schließe hält bombenfest! Keine Angst dass die Uhr versehentlich aufgeht. Boss-Logo ist dezent aber edel.",
    "customer_name": "Robert V., Duisburg",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "22% Rabatt war ein No-Brainer! Originale Boss-Uhr zum Top-Preis. Lieferung in 2 Tagen, alles perfekt.",
    "customer_name": "Melanie D., Bochum",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das matte Schwarz des Gehäuses ist unglaublich edel. Absolut keine Fingerabdrücke sichtbar. Sehr durchdacht!",
    "customer_name": "Alexander J., Wuppertal",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Super Uhr, aber das Silikonband zieht leider etwas Staub an. Regelmäßig abwischen und gut ist. Sonst top!",
    "customer_name": "Sabrina C., Bielefeld",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bin Fitness-Fan und brauche eine Uhr die was aushält. Diese Boss ist robust und sieht dabei noch mega aus!",
    "customer_name": "Tobias N., Bonn",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Freund hat die gleiche Uhr, jetzt hab ich auch eine. Passt super als Partnerlook, sieht auch an Frauen gut aus!",
    "customer_name": "Sarah Z., Mannheim",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die drei Nebenziferblätter (Sekunde, Minute, Stunde) des Chronographen sind super ablesbar. Gute Ergonomie!",
    "customer_name": "David O., Karlsruhe",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Schöne Uhr, Lieferung hat aber 5 Tage gedauert statt 2-3 wie angegeben. Aber Hauptsache sie ist angekommen!",
    "customer_name": "Christina U., Münster",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Zifferblatt ist auch bei direkter Sonneneinstrahlung gut ablesbar. Keine störenden Reflexionen. Top!",
    "customer_name": "Florian I., Wiesbaden",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab die Uhr jetzt seit 3 Wochen. Geht immer noch sekundengenau! Boss-Qualität macht sich bemerkbar.",
    "customer_name": "Jessica X., Gelsenkirchen",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Von meiner Freundin zum Valentinstag bekommen. Sie hat sich beraten lassen und perfekt gewählt! Bin verliebt.",
    "customer_name": "Maximilian Q., Mönchengladbach",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Tolle Uhr, aber ich finde den roten Sekundenzeiger etwas unpassend zum sonst komplett schwarzen Design. Geschmackssache.",
    "customer_name": "Vanessa Y., Braunschweig",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Sohn zum bestandenen Abi gekauft. Er trägt sie jeden Tag! Beste Investition.",
    "customer_name": "Tim B., Chemnitz",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Gewicht der Uhr ist angenehm – nicht zu leicht, nicht zu schwer. Fühlt sich wertig an am Handgelenk!",
    "customer_name": "Claudia W., Aachen",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich eine Uhr die zu meinem schwarzen Auto passt! Das All-Black-Design ist einfach unschlagbar.",
    "customer_name": "Benjamin S., Kiel",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hochwertige Uhr, aber die Batterie sollte laut Verkäufer 2-3 Jahre halten. Bin gespannt ob das stimmt.",
    "customer_name": "Martin K., Magdeburg",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab viele Uhren, aber diese Boss trage ich am liebsten. Das Design ist zeitlos und passt immer!",
    "customer_name": "Stefanie H., Freiburg",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Drücker für den Chronographen haben einen satten Druckpunkt. Fühlt sich mechanisch hochwertig an.",
    "customer_name": "Jan R., Lübeck",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für ein Meeting extra diese Uhr bestellt. Hat viele Komplimente bekommen! Chef war beeindruckt.",
    "customer_name": "Marie M., Erfurt",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Die Uhr ist klasse! Einziger Minuspunkt: Die Krone ist etwas schwer zu greifen wegen dem sportlichen Design.",
    "customer_name": "Andreas L., Rostock",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Mann ist Pilot und liebt Chronographen. Diese Boss hat ihn sofort überzeugt. Perfektes Geschenk!",
    "customer_name": "Petra F., Mainz",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Mineralglas ist anscheinend gut gehärtet – nach 2 Monaten Alltag kein einziger Kratzer!",
    "customer_name": "Oliver G., Kassel",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für 279€ bekommt man hier Luxus-Feeling. Vergleichbare Uhren kosten bei anderen Marken deutlich mehr.",
    "customer_name": "Nadine D., Halle",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Sehr zufrieden! Nur die Originalverpackung war etwas kleiner als erwartet. Für Geschenke vielleicht extra einpacken.",
    "customer_name": "Ralf A., Saarbrücken",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das BOSS-Branding auf dem Armband und Zifferblatt ist dezent aber edel. Genau richtig, nicht zu aufdringlich!",
    "customer_name": "Yvonne T., Potsdam",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schwimmen war ich damit noch nicht, aber Duschen kein Problem. 5 ATM reichen für den Alltag absolut!",
    "customer_name": "Felix E., Ludwigshafen",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bin begeistert wie angenehm das Silikonband auf der Haut liegt. Kein Schwitzen, kein Kratzen. Perfekt!",
    "customer_name": "Hannah P., Oldenburg",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Tolle Uhr, das Datum allerdings etwas klein zum Ablesen. Für meine Augen könnte es größer sein.",
    "customer_name": "Simon V., Osnabrück",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Chronograph-Funktion nutze ich tatsächlich oft beim Kochen! Praktisch und stylish in einem.",
    "customer_name": "Laura J., Leverkusen",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Nach 2 Monaten Dauertragen immer noch wie neu! Boss weiß wie man langlebige Uhren baut.",
    "customer_name": "Dennis C., Solingen",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte erst Bedenken wegen Online-Kauf, aber die Uhr ist 100% Original! Sogar mit Garantiekarte.",
    "customer_name": "Birgit N., Heidelberg",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Wunderschöne Uhr! Einzig das Ticken ist in ruhigen Räumen hörbar. Stört mich persönlich nicht.",
    "customer_name": "Erik Z., Darmstadt",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe sie direkt beim Auspacken angezogen und seitdem nicht mehr abgelegt. Absolute Lieblinguhr!",
    "customer_name": "Carina O., Paderborn",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die schwarze Beschichtung des Gehäuses ist extrem kratzfest. Auch nach Wochen noch makellos!",
    "customer_name": "Marco I., Regensburg",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mega Deal ist tatsächlich mega! Hab verglichen, das ist wirklich der beste Preis im Netz.",
    "customer_name": "Tanja U., Würzburg",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Silikonband passt gut, aber ich musste 3 Löcher weiter machen für mein dünnes Handgelenk. Geht aber einfach.",
    "customer_name": "Jens X., Ingolstadt",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die roten Akzente am Sekundenzeiger geben der Uhr das gewisse Etwas. Sehr durchdachtes Design!",
    "customer_name": "Silke Q., Ulm",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für Sportler ideal! Das Armband rutscht nicht beim Training, die Uhr sitzt fest. Und sieht dabei cool aus.",
    "customer_name": "Uwe Y., Heilbronn",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kollegen im Büro haben mich auf die Uhr angesprochen. Jetzt wollen zwei auch eine bestellen!",
    "customer_name": "Monika B., Göttingen",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hochwertig und elegant. Das einzige was fehlt ist eine kleine Tasche zur Aufbewahrung auf Reisen.",
    "customer_name": "Thorsten W., Pforzheim",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Vom Fachmann bestätigt: Original Boss! War erst skeptisch wegen des Preises, aber alles echt.",
    "customer_name": "Angelika S., Bottrop",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Zifferblatt hat eine schöne Textur, die man erst bei genauerem Hinsehen entdeckt. Liebe zum Detail!",
    "customer_name": "Wolfgang K., Recklinghausen",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine neue Lieblingsuhr für den Alltag! Weder zu schick noch zu sportlich – genau richtig.",
    "customer_name": "Heike R., Offenbach",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Top Uhr, aber ich musste das Band kürzen lassen. Wer kleine Handgelenke hat, sollte das einplanen.",
    "customer_name": "Norbert M., Siegen",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die 44mm sind für mein Handgelenk perfekt! Wirkt markant aber nicht übertrieben. Genau mein Stil.",
    "customer_name": "Susanne L., Bergisch Gladbach",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab sie zu meiner Rolex im Tresor gelegt – aber die Boss trage ich öfter! Für den Alltag perfekt.",
    "customer_name": "Rainer H., Cottbus",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Service war top! Frage zur Größe wurde innerhalb einer Stunde beantwortet. Uhr passt perfekt.",
    "customer_name": "Kerstin F., Hildesheim",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr zufrieden! Wäre super wenn man das Armband gegen Leder tauschen könnte, aber Silikon ist auch gut.",
    "customer_name": "Volker D., Witten",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das matte Finish sieht live noch besser aus als auf den Fotos! War positiv überrascht.",
    "customer_name": "Gabriele G., Gera",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe die Uhr zu Weihnachten bekommen. Trage sie seitdem täglich. Beste Qualität!",
    "customer_name": "Karsten A., Salzgitter",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Verpackung und Präsentation beim Auspacken war schon ein Erlebnis. Boss macht das richtig!",
    "customer_name": "Martina T., Iserlohn",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schöne Uhr, aber das Stellen des Datums war etwas fummelig. Einmal eingestellt, passt alles.",
    "customer_name": "Bernd E., Schwerin",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Als Geschäftsmann brauche ich eine Uhr die Eindruck macht. Diese Boss liefert genau das!",
    "customer_name": "Renate P., Jena",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Perfekte Ergänzung zu meiner Boss-Gürtelschnalle. Der Look ist komplett! Sehr stylisch.",
    "customer_name": "Holger V., Zwickau",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Bruder bestellt, jetzt will ich auch eine! Das Schwarz ist einfach zeitlos.",
    "customer_name": "Elke J., Trier",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Super Uhr! Die Zeiger hätten für mich etwas heller leuchten können im Dunkeln, aber okay.",
    "customer_name": "Klaus C., Kaiserslautern",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Preis-Leistungs-Verhältnis ist unschlagbar! Bei 80€ Ersparnis konnte ich nicht nein sagen.",
    "customer_name": "Ute O., Ratingen",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Silvester mit neuer Boss-Uhr gefeiert! Die Komplimente haben nicht aufgehört. Toller Kauf!",
    "customer_name": "Heinrich N., Moers",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine alte Uhr war Silber, wollte mal was Neues. Diese schwarze Boss ist genau richtig!",
    "customer_name": "Ingrid Z., Velbert",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Tolle Uhr, aber der Chronograph hat beim ersten Mal nicht auf Null gestanden. Nach Reset alles gut.",
    "customer_name": "Dirk U., Fürth",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Gehäuse liegt flach auf dem Handgelenk, hängt nirgends. Sehr bequem auch unter dem Hemdärmel!",
    "customer_name": "Gisela X., Konstanz",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab mir selbst ein Weihnachtsgeschenk gegönnt. Diese Boss-Uhr war die richtige Wahl!",
    "customer_name": "Manfred Q., Marl",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Indexe sind leicht erhaben und geben dem Zifferblatt Tiefe. Wunderschöne Optik!",
    "customer_name": "Edith Y., Lünen",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Wunderschöne Uhr! Hätte mir nur gewünscht dass ein Ersatzband dabei wäre. Aber naja.",
    "customer_name": "Helmut I., Hanau",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Vater ist Uhrensammler und war beeindruckt von der Verarbeitung. Für den Preis top!",
    "customer_name": "Rita B., Villingen-Schwenningen",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Silikonarmband lässt sich super reinigen – einfach mit Wasser und Seife. Praktisch!",
    "customer_name": "Erwin W., Esslingen",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab lange überlegt zwischen Gold und Schwarz. Schwarz war die richtige Entscheidung!",
    "customer_name": "Doris S., Ludwigsburg",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gute Uhr, guter Preis. Das Armband ist allerdings etwas länger, musste ich kürzen.",
    "customer_name": "Günter M., Gütersloh",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Weihnachtsgeschenk für mich selbst! Die Lieferung kam pünktlich am 24.12. Perfekt!",
    "customer_name": "Helga K., Minden",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Krone ist mit BOSS graviert – kleine Details die den Unterschied machen!",
    "customer_name": "Werner L., Rheine",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab die Uhr zu meinem Anzug getragen. Der Kontrast zum weißen Hemd ist fantastisch!",
    "customer_name": "Brigitte H., Troisdorf",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr zufrieden! Ein extra Uhrenputztuch wäre noch das Tüpfelchen auf dem i gewesen.",
    "customer_name": "Rudolf F., Dorsten",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Uhr kam in einer schönen Boss-Box. Perfekt zum Verschenken oder selber freuen!",
    "customer_name": "Marianne D., Detmold",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Quarzwerk ist super präzise. Nach 6 Wochen keine Sekunde Abweichung!",
    "customer_name": "Peter G., Castrop-Rauxel",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine Freundin ist neidisch – jetzt sucht sie auch nach einer Damenuhr von Boss!",
    "customer_name": "Ursula A., Arnsberg",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Uhr ist top! Einziger Wunsch: Ein NATO-Band wäre als Alternative schön gewesen.",
    "customer_name": "Lothar T., Landshut",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Design ist modern aber nicht zu trendy. Wird auch in 10 Jahren noch gut aussehen!",
    "customer_name": "Erika E., Kempten",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe die Uhr meinem Vater zum 60. geschenkt. Er trägt sie jeden Tag! Voller Erfolg.",
    "customer_name": "Alfred R., Lüneburg",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für Business-Meetings genau das Richtige. Nicht zu protzig, aber dennoch elegant.",
    "customer_name": "Elisabeth P., Bamberg",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alles super, nur die Lieferzeit war etwas länger wegen der Feiertage. Aber verständlich!",
    "customer_name": "Ernst V., Bayreuth",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das schwarze Zifferblatt mit den schwarzen Subdials – ein echter Blickfang! Sehr cool.",
    "customer_name": "Gerda J., Plauen",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für den Preis bekommt man hier echte Qualität. Boss enttäuscht nie!",
    "customer_name": "Friedrich C., Stralsund",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Nach 2 Monaten täglichem Tragen immer noch keine Gebrauchsspuren. Sehr robust!",
    "customer_name": "Hannelore O., Neuss",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr schöne Uhr! Bei der Lieferung war leider ein kleiner Kratzer auf der Box, Uhr aber top.",
    "customer_name": "Kurt Z., Herford",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Kombination aus Edelstahl und Silikon ist perfekt. Sportlich und elegant zugleich!",
    "customer_name": "Anneliese U., Brandenburg",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine dritte Uhr aus diesem Shop – immer Top-Qualität! Kann ich nur empfehlen.",
    "customer_name": "Heinz X., Rosenheim",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Datum springt um Mitternacht exakt um. Gute Qualität des Uhrwerks!",
    "customer_name": "Gertrud Q., Wolfsburg",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gute Uhr, aber die Schließe lässt sich manchmal schwer öffnen. Wird mit der Zeit sicher besser.",
    "customer_name": "Otto Y., Fulda",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Als Technik-Fan liebe ich die Chronograph-Funktion. Und dabei sieht die Uhr auch noch super aus!",
    "customer_name": "Lieselotte I., Celle",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bin begeistert! Die Uhr kam schneller als erwartet und ist noch schöner als auf den Bildern.",
    "customer_name": "Hans N., Aschaffenburg",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Armband ist hypoallergen – perfekt für meine empfindliche Haut. Keine Reizungen!",
    "customer_name": "Ilse B., Marburg",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Optisch ein Traum! Das Einstellen der Zeit ging etwas schwer, aber jetzt passt alles.",
    "customer_name": "Willi W., Schwäbisch Gmünd",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Gehäuseboden ist mit Seriennummer graviert – echt authentisch! Bin zufrieden.",
    "customer_name": "Rosemarie S., Weimar",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neues Lieblingsstück! Trage sie zu Sport und Anzug – passt immer.",
    "customer_name": "Paul K., Friedrichshafen",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die schwarze Beschichtung sieht viel hochwertiger aus als ich erwartet hatte. Wow!",
    "customer_name": "Elfriede M., Speyer",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Tolles Design, aber die Drücker für den Chronographen könnten etwas größer sein.",
    "customer_name": "Walter L., Passau",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich eine sportliche Luxusuhr die bezahlbar ist! Boss macht's möglich.",
    "customer_name": "Margot H., Herten",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Shop hat meine Fragen vor dem Kauf super beantwortet. Uhr ist perfekt!",
    "customer_name": "Herbert F., Emden",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für 279€ eine solche Qualität – das ist der Wahnsinn! Absolut empfehlenswert.",
    "customer_name": "Agnes D., Kleve",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Uhr ist fantastisch! Einzig die Verpackung hatte einen kleinen Riss. Uhr war aber perfekt.",
    "customer_name": "Bruno G., Bad Homburg",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Silikonband ist richtig weich – hätte ich bei dem Preis nicht erwartet!",
    "customer_name": "Christa A., Pulheim",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine Frau sagt die Uhr steht mir ausgezeichnet. Das ist das beste Kompliment!",
    "customer_name": "Wilhelm T., Frechen",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das komplett schwarze Design ist genau mein Ding. Endlich gefunden!",
    "customer_name": "Johanna R., Bad Salzuflen",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Super Uhr, das Tracking der Lieferung war aber etwas ungenau. Kam trotzdem pünktlich.",
    "customer_name": "Georg E., Dormagen",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Gewicht ist perfekt ausbalanciert – die Uhr sitzt wie angegossen!",
    "customer_name": "Anna-Maria P., Hattingen",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe die Uhr jetzt seit 3 Monaten. Läuft immer noch perfekt, sieht aus wie neu!",
    "customer_name": "Richard V., Viersen",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Neffen zum Studienabschluss – er war total begeistert! Tolle Wahl.",
    "customer_name": "Emma J., Langenfeld",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alles top! Nur die Bedienungsanleitung ist etwas knapp gehalten. Aber YouTube hilft!",
    "customer_name": "Fritz C., Ahlen",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Uhr sieht auch unter dem Hemdärmel gut aus – nicht zu dick, nicht zu dünn!",
    "customer_name": "Hildegard O., Norderstedt",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für alle die eine elegante Sportuhr suchen: Das ist sie! Kaufen, nicht bereuen.",
    "customer_name": "Josef Z., Kerpen",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das schwarze Gehäuse mit den schwarzen Zeigern – ein echter Stealth-Look! Liebe es.",
    "customer_name": "Martha U., Bocholt",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Optisch perfekt! Nur bei sehr dunklem Schwarz sind die Zeiger manchmal schwer zu sehen.",
    "customer_name": "Anton X., Gladbeck",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Uhr liegt perfekt am Handgelenk. Nicht zu locker, nicht zu eng. Genau richtig!",
    "customer_name": "Frieda Q., Dinslaken",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine fünfte Boss-Uhr und immer noch begeistert. Die Marke hält was sie verspricht!",
    "customer_name": "Karl Y., Euskirchen",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab schon viele Komplimente bekommen. Die Uhr fällt auf, ohne aufdringlich zu wirken.",
    "customer_name": "Herta I., Erkrath",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr schöne Uhr! Wäre cool wenn es eine App zur Stoppuhr gäbe, aber analog ist auch gut.",
    "customer_name": "Ludwig N., Ibbenbüren",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das matte Schwarz ist viel edler als glänzend. Boss hat den richtigen Look gewählt!",
    "customer_name": "Else B., Hürth",
    "date": "2025-12-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Perfekte Alltagsuhr mit Premium-Feeling! Kann ich jedem nur empfehlen.",
    "customer_name": "Max W., Meerbusch",
    "date": "2025-12-01",
    "verified": true
  }
];
