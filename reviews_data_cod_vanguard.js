const REVIEWS_DATA = [
  {
    "rating": 5,
    "content": "Absolut geniales Spiel! Die Kampagne ist unglaublich packend und emotional. Hab das Spiel an einem Wochenende durchgezockt – konnte einfach nicht aufhören. Der Multiplayer macht süchtig.",
    "customer_name": "Markus S., Hamburg",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Lieferung kam superschnell, war positiv überrascht. Verpackung einwandfrei, Spiel läuft butter auf der PS5.",
    "customer_name": "Julia W., München",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Grafik ist der Hammer. Sound auch. Kampagne spielt sich wie ein Blockbuster-Film. Wer auf Action steht, macht hier nichts falsch.",
    "customer_name": "Kevin B., Berlin",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Preis-Leistung top! Für unter 80€ ein AAA-Titel dieser Qualität – da kann man nicht meckern.",
    "customer_name": "Sandra K., Köln",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Sohn hat sich mega gefreut. Zombies-Modus ist sein absoluter Favorit. Danke für den schnellen Versand!",
    "customer_name": "Thomas H., Frankfurt",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich mal wieder ein CoD, das mich richtig fesselt. Die WW2-Atmosphäre ist einfach ungeschlagen.",
    "customer_name": "Lukas M., Stuttgart",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab lange überlegt, ob ich zuschlagen soll. Bereue es keine Sekunde! Mega Spiel.",
    "customer_name": "Lisa R., Düsseldorf",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Multiplayer ist einfach anders. So viele Maps, so viele Waffen – da wird's nie langweilig. Zocke jeden Abend mit meinen Kumpels.",
    "customer_name": "Daniel P., Leipzig",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "PS5-Version läuft flüssig ohne Ruckler. DualSense-Feedback ist nice, man spürt jeden Schuss. Sehr immersiv!",
    "customer_name": "Anna F., Dresden",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kam pünktlich an, Zustand wie neu. Einlegen, spielen, glücklich sein. So muss das!",
    "customer_name": "Michael T., Nürnberg",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Story hat mich echt berührt. Selten so eine emotionale Kampagne erlebt in einem Shooter.",
    "customer_name": "Jennifer L., Hannover",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Top Service, schnelle Lieferung, fairer Preis. Was will man mehr? Das Spiel selbst ist natürlich auch klasse.",
    "customer_name": "Stefan G., Bremen",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Zombies mit Freunden ist einfach das Beste. Stundenlanger Spielspaß garantiert!",
    "customer_name": "Patrick E., Essen",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gutes Spiel, aber die Story ist etwas kurz geraten. Multiplayer macht das aber wieder wett.",
    "customer_name": "Christian A., Dortmund",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "War erst skeptisch wegen der Bewertungen anderswo, aber hier stimmt alles. Tolles Game!",
    "customer_name": "Nina V., Duisburg",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine Frau hasst es, wenn ich zocke – aber bei dem Spiel versteht sie es. Die Grafik ist einfach Wahnsinn.",
    "customer_name": "Robert D., Bochum",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte vorher Cold War, aber Vanguard gefällt mir viel besser. Das Setting ist einfach atmosphärischer.",
    "customer_name": "Melanie S., Wuppertal",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Lieferung innerhalb von 2 Tagen, alles bestens verpackt. Spiel funktioniert einwandfrei.",
    "customer_name": "Alexander N., Bielefeld",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bin begeistert! Die verschiedenen Protagonisten in der Kampagne bringen Abwechslung rein.",
    "customer_name": "Katharina J., Bonn",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Solider Shooter. Nicht das beste CoD aller Zeiten, aber definitiv sein Geld wert.",
    "customer_name": "Tobias Z., Mannheim",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Einfach geil. Hab schon über 100 Stunden drin und es macht immer noch Spaß.",
    "customer_name": "Sarah B., Karlsruhe",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Spiel hat mich positiv überrascht. Erwartungen übertroffen!",
    "customer_name": "David H., Münster",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kundenservice war super hilfsbereit bei einer Frage zur Lieferung. Spiel ist natürlich auch top!",
    "customer_name": "Christina M., Augsburg",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die historischen Details sind beeindruckend. Man merkt, dass viel Recherche reingeflossen ist.",
    "customer_name": "Florian K., Wiesbaden",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für jeden FPS-Fan ein Muss. Kaufempfehlung!",
    "customer_name": "Jessica R., Gelsenkirchen",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schnelle Lieferung, günstiger Preis, geiles Spiel. Besser geht's nicht!",
    "customer_name": "Maximilian W., Mönchengladbach",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Sound durch die PS5-3D-Audio ist unfassbar gut. Fühlt sich an wie im Kino!",
    "customer_name": "Vanessa C., Braunschweig",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Macht Spaß, aber manchmal laggt der Multiplayer. Hoffentlich wird das noch gepatcht.",
    "customer_name": "Tim L., Chemnitz",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab mir das Spiel als Geburtstagsgeschenk selbst gegönnt. Beste Entscheidung!",
    "customer_name": "Sabrina O., Aachen",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Call of Duty in Bestform. Die Waffen fühlen sich alle unterschiedlich und authentisch an.",
    "customer_name": "Benjamin U., Kiel",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Zocke normalerweise kein CoD, aber Vanguard hat mich überzeugt. Sehr gute Spielmechanik.",
    "customer_name": "Claudia I., Magdeburg",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Leveldesigns sind kreativ und abwechslungsreich. Jede Map hat ihren eigenen Charme.",
    "customer_name": "Martin Y., Freiburg",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Paket kam sicher an, alles original verpackt. Super zufrieden mit dem Kauf!",
    "customer_name": "Stefanie X., Lübeck",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Championshill-Modus ist extrem spaßig. Perfekt für kurze Sessions zwischendurch.",
    "customer_name": "Jan Q., Erfurt",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Richtig guter Kauf. Spiele es jeden Tag und freue mich jedes Mal drauf.",
    "customer_name": "Marie P., Rostock",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gutes Spiel, könnte aber mehr Zombies-Content haben. Trotzdem empfehlenswert.",
    "customer_name": "Andreas E., Mainz",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe mehrere Shooter probiert, aber an Vanguard kommt keiner ran. Qualität spürt man.",
    "customer_name": "Petra T., Kassel",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Super schnelle Lieferung! Hab Freitag bestellt und Montag war es schon da.",
    "customer_name": "Oliver F., Halle",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Gunplay ist einfach perfekt. Jeder Treffer fühlt sich befriedigend an.",
    "customer_name": "Nadine G., Saarbrücken",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Als alter CoD-Veteran: Vanguard macht vieles richtig. Nostalgie pur!",
    "customer_name": "Ralf D., Potsdam",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Preis war günstiger als woanders. Schnell zugeschlagen und nicht bereut.",
    "customer_name": "Yvonne A., Ludwigshafen",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Animationen sind unglaublich flüssig. Technisch absolut auf der Höhe.",
    "customer_name": "Felix J., Oldenburg",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bin mega happy mit dem Kauf. Danke für den tollen Service!",
    "customer_name": "Hannah K., Osnabrück",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Operator-Designs sind cool. Jeder Charakter hat seine eigene Backstory.",
    "customer_name": "Simon R., Leverkusen",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gutes Game. Ein paar kleine Bugs, aber nichts Dramatisches. Macht trotzdem Laune.",
    "customer_name": "Laura N., Solingen",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Explosionen sehen so real aus! Sledgehammer hat hier echt abgeliefert.",
    "customer_name": "Dennis M., Heidelberg",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab das Spiel für meinen Mann gekauft. Er ist total begeistert, spielt nur noch das.",
    "customer_name": "Birgit L., Darmstadt",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Pazifik-Kriegsschauplatz ist super umgesetzt. Sehr authentische Atmosphäre.",
    "customer_name": "Erik S., Paderborn",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alles bestens. Lieferung pünktlich, Ware einwandfrei. Gerne wieder!",
    "customer_name": "Carina H., Regensburg",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Waffenupgrade-System ist richtig gut durchdacht. So viele Möglichkeiten!",
    "customer_name": "Marco V., Würzburg",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte erst Modern Warfare im Blick, aber Vanguard ist mindestens genauso gut.",
    "customer_name": "Tanja B., Ingolstadt",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für Geschichtsfans wie mich ein Traum. WW2-Flair vom Feinsten!",
    "customer_name": "Jens W., Ulm",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Richtig gut! Spiele es mit meinem Bruder online und wir haben riesigen Spaß.",
    "customer_name": "Silke F., Heilbronn",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schönes Spiel, aber der Einstieg ist etwas schwer. Nach ein paar Stunden läuft's aber.",
    "customer_name": "Uwe C., Göttingen",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Scharfschützen-Missionen in der Kampagne sind der Wahnsinn. Sehr intensiv!",
    "customer_name": "Monika Z., Pforzheim",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kann ich nur empfehlen. Preis-Leistung stimmt, Qualität stimmt, alles top.",
    "customer_name": "Thorsten P., Bottrop",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich ein CoD ohne nervige futuristische Elemente. Back to the roots!",
    "customer_name": "Angelika E., Recklinghausen",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Lieferung war schneller als erwartet. Bin sehr zufrieden!",
    "customer_name": "Wolfgang T., Remscheid",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Blitz-Pakt-Modus ist super für schnelle Matches. Perfekt nach der Arbeit.",
    "customer_name": "Heike R., Offenbach",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine Kinder haben das Spiel geliebt. Natürlich erst ab 18!",
    "customer_name": "Norbert M., Siegen",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Nachlade-Animationen sind so detailliert. Man merkt die Liebe zum Detail.",
    "customer_name": "Susanne D., Bergisch Gladbach",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Solider Shooter. Kampagne etwas kurz, aber der Rest macht's wett.",
    "customer_name": "Rainer G., Cottbus",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab mehrere Shooterspiele verglichen, Vanguard ist mein Favorit geworden.",
    "customer_name": "Kerstin A., Hildesheim",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schnell, günstig, unkompliziert. So macht Online-Shopping Spaß!",
    "customer_name": "Volker K., Witten",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Nahkampf-Mechanik ist brutal gut. Messer-Kills sind so befriedigend!",
    "customer_name": "Gabriele S., Gera",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das beste Geburtstagsgeschenk, das ich mir selbst gemacht habe. Absolut empfehlenswert!",
    "customer_name": "Karsten N., Salzgitter",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Spiele es seit Release und es macht immer noch genauso viel Spaß wie am ersten Tag.",
    "customer_name": "Martina L., Iserlohn",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Stalingrad-Mission ist emotional so packend. Gänsehaut pur!",
    "customer_name": "Bernd H., Schwerin",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Vanguard hat meine Erwartungen übertroffen. Klar weiterzuempfehlen.",
    "customer_name": "Renate F., Jena",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab das Spiel zum zweiten Mal gekauft, nachdem ich die PS5 geholt hab. Sieht nochmal besser aus!",
    "customer_name": "Holger B., Zwickau",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gutes Spiel, aber ich wünsche mir mehr neue Maps. Content-Updates bitte!",
    "customer_name": "Elke W., Trier",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Killstreak-Hund ist genial! Macht so viel Spaß, wenn er loszieht.",
    "customer_name": "Klaus D., Kaiserslautern",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab noch nie so viele Stunden in ein Spiel gesteckt. Absolut süchtig machend!",
    "customer_name": "Ute M., Ratingen",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Sprachausgabe ist hervorragend. Deutsche Synchro absolut auf Kinoniveau.",
    "customer_name": "Heinrich J., Moers",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Tolles Spiel für den Preis. Hätte auch mehr bezahlt!",
    "customer_name": "Ingrid P., Velbert",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Go-to-Spiel, wenn ich abschalten will. Perfekt zum Entspannen... oder Aufregen!",
    "customer_name": "Dirk E., Fürth",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alles perfekt! Bin seit Jahren Kunde hier und wurde noch nie enttäuscht.",
    "customer_name": "Gisela T., Konstanz",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die verschiedenen Fraktionen sind alle spielenswert. Abwechslung pur!",
    "customer_name": "Manfred R., Marl",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab am Weihnachtsabend bestellt und es kam noch vor Silvester. Mega Service!",
    "customer_name": "Edith K., Lünen",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bestes Geschenk für meinen Neffen. Er liebt es!",
    "customer_name": "Helmut G., Hanau",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr gut, aber nicht perfekt. Trotzdem jeden Cent wert.",
    "customer_name": "Rita S., Villingen-Schwenningen",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Thompson-Maschinenpistole ist meine Lieblingswaffe. So ein geiles Feeling!",
    "customer_name": "Erwin A., Esslingen",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Weihnachtsgeschenk an mich selbst. Hat sich total gelohnt!",
    "customer_name": "Doris L., Ludwigsburg",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kompliment an das Entwicklerteam. Hier stimmt einfach alles.",
    "customer_name": "Günter H., Gütersloh",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Suchte ein gutes Multiplayer-Game. Gefunden! Danke für die Empfehlung im Chat.",
    "customer_name": "Helga N., Minden",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Night-Maps sind so atmosphärisch. Richtig gruselig teilweise!",
    "customer_name": "Werner V., Rheine",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Vom Auspacken bis zum ersten Match keine 15 Minuten. PS5 sei Dank!",
    "customer_name": "Brigitte C., Troisdorf",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich wieder Clan-Matches mit den alten Kumpels. Wie früher!",
    "customer_name": "Rudolf W., Dorsten",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte Bedenken wegen USK 18, aber für Erwachsene ein Top-Spiel.",
    "customer_name": "Marianne Y., Detmold",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das beste CoD seit Black Ops. Change my mind!",
    "customer_name": "Peter B., Castrop-Rauxel",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe es in einer Woche durchgespielt und direkt wieder angefangen. Suchtfaktor!",
    "customer_name": "Ursula X., Arnsberg",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Flamethrower-Kills sind brutal. Genau richtig für Action-Fans!",
    "customer_name": "Lothar F., Landshut",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Macht Spaß, aber der Skill-Based-Matchmaking nervt manchmal. Ansonsten super!",
    "customer_name": "Erika O., Kempten",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Grafikqualität ist next level. Jedes Detail stimmt.",
    "customer_name": "Alfred U., Lüneburg",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hätte nicht gedacht, dass mich ein WW2-Shooter nochmal so packt. Falsch gedacht!",
    "customer_name": "Elisabeth I., Bamberg",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Lieferung top, Verpackung top, Spiel top. 10/10!",
    "customer_name": "Ernst Q., Bayreuth",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Perfektes Spiel für lange Winterabende. Da vergisst man die Zeit.",
    "customer_name": "Gerda Z., Plauen",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Kill-Cam ist so satisfying. Immer wieder geil zu sehen!",
    "customer_name": "Friedrich P., Stralsund",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab mich extra für das Spiel eine PS5 geholt. Hat sich gelohnt!",
    "customer_name": "Hannelore E., Neuss",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Steuerung liegt gut in der Hand. Sehr präzise, kein Input-Lag.",
    "customer_name": "Kurt T., Herford",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Top Preis, schnelle Lieferung. Was will man mehr von einem Online-Shop?",
    "customer_name": "Anneliese R., Brandenburg",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Game hat mich wieder zum Zocken gebracht. War jahrelang abstinent!",
    "customer_name": "Heinz D., Rosenheim",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Support hier ist erste Sahne. Hatte eine Frage und sofort Antwort bekommen.",
    "customer_name": "Gertrud M., Wolfsburg",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die verschiedenen Spielmodi halten das Spiel frisch. Nie langweilig!",
    "customer_name": "Otto K., Fulda",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gutes Spiel. Wünsche mir nur mehr historische Genauigkeit bei manchen Waffen.",
    "customer_name": "Lieselotte G., Celle",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab schon alle CoDs gezockt – Vanguard gehört zu den besten!",
    "customer_name": "Hans A., Aschaffenburg",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Online-Community ist auch super. Meistens faire Matches.",
    "customer_name": "Ilse S., Marburg",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Jeder Cent gut investiert. Danke für die schnelle Abwicklung!",
    "customer_name": "Willi J., Schwäbisch Gmünd",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Explosionen fühlen sich so real an. Controller vibriert wie verrückt!",
    "customer_name": "Rosemarie L., Weimar",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab es als Geschenk gekauft und dann selbst behalten. Sorry, Bruder!",
    "customer_name": "Paul N., Friedrichshafen",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Ein Meisterwerk des Shooter-Genres. Absolut überragend!",
    "customer_name": "Elfriede H., Speyer",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Waffenskins sind richtig cool. Freue mich über jeden neuen Drop.",
    "customer_name": "Walter B., Passau",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "5 Sterne reichen eigentlich nicht. Würde 6 geben wenn möglich!",
    "customer_name": "Margot V., Herten",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "War lange unentschlossen, aber jetzt bin ich froh, dass ich es gekauft hab.",
    "customer_name": "Herbert W., Emden",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Churchill-Panzer-Mission ist episch. So ein gutes Spieldesign!",
    "customer_name": "Agnes C., Kleve",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Zocke es parallel auf Xbox und PS5. PS5 Version läuft minimal besser.",
    "customer_name": "Bruno F., Bad Homburg",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Guter Shooter, aber Warzone Integration hätte besser sein können.",
    "customer_name": "Christa D., Pulheim",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Ladezeiten dank SSD quasi nicht vorhanden. Genial!",
    "customer_name": "Wilhelm M., Frechen",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Nordafrika-Maps sind super designed. Viel taktische Tiefe!",
    "customer_name": "Johanna S., Bad Salzuflen",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe hier mehrfach bestellt, immer zufrieden. Shop meines Vertrauens!",
    "customer_name": "Georg L., Dormagen",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Highlight des Jahres. Spiele es fast täglich.",
    "customer_name": "Anna-Maria K., Hattingen",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Einfach nur genial. Punkt.",
    "customer_name": "Richard P., Viersen",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Buddy-Boost-Funktion ist super für Einsteiger. Gut durchdacht!",
    "customer_name": "Emma T., Langenfeld",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Spiel allein ist den PS5-Kauf wert gewesen. Mega!",
    "customer_name": "Fritz R., Ahlen",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab alles richtig gemacht mit diesem Kauf. Absolute Empfehlung!",
    "customer_name": "Hildegard E., Norderstedt",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Audio-Qualität ist unglaublich. Höre jeden Fußschritt im Surround!",
    "customer_name": "Josef G., Kerpen",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Besser als erwartet. Und ich hatte hohe Erwartungen!",
    "customer_name": "Martha A., Bocholt",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Wer WW2-Games mag, kommt hier nicht dran vorbei. Must-have!",
    "customer_name": "Anton N., Gladbeck",
    "date": "2025-12-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mega schnelle Lieferung, top Zustand, super Preis. Perfekt!",
    "customer_name": "Frieda J., Dinslaken",
    "date": "2025-12-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr gut, nur die Server könnten manchmal stabiler sein. Ansonsten top!",
    "customer_name": "Karl H., Euskirchen",
    "date": "2025-11-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Schildkröten-Formation im Team ist so lustig. Social Gaming at its best!",
    "customer_name": "Herta W., Erkrath",
    "date": "2025-11-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte Probleme mit der Bestellung, wurde aber sofort gelöst. Super Support!",
    "customer_name": "Ludwig B., Ibbenbüren",
    "date": "2025-11-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Ein Shooter-Erlebnis der Extraklasse. Kann ich nur weiterempfehlen.",
    "customer_name": "Else M., Hürth",
    "date": "2025-11-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Gewehre klingen alle unterschiedlich und authentisch. Sounddesign vom Feinsten!",
    "customer_name": "Max V., Meerbusch",
    "date": "2025-11-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte schon Cold War und MW, aber Vanguard ist mein neuer Favorit.",
    "customer_name": "Margarete S., Göppingen",
    "date": "2025-11-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für den Preis absolute Spitzenqualität. Danke!",
    "customer_name": "Johann C., Delmenhorst",
    "date": "2025-11-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Jeden Abend eine Runde zocken – mein neues Ritual!",
    "customer_name": "Helene D., Stolberg",
    "date": "2025-11-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die verschiedenen Charaktere haben alle ihre Stärken. Taktisch interessant!",
    "customer_name": "Franz L., Homburg",
    "date": "2025-11-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schneller Versand, fairer Preis, geiles Game. Was will man mehr?",
    "customer_name": "Johanna P., Waiblingen",
    "date": "2025-11-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Ostfront-Kampagne ist hammermäßig inszeniert. Wie ein Kriegsfilm!",
    "customer_name": "Adolf R., Neustadt",
    "date": "2025-11-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Gutes Spiel, aber manchmal etwas repetitiv. Trotzdem empfehlenswert!",
    "customer_name": "Klara F., Unna",
    "date": "2025-11-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab mir eine neue Gaming-Session-Routine aufgebaut dank Vanguard. Liebe es!",
    "customer_name": "Oskar T., Garbsen",
    "date": "2025-11-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alles bestens gelaufen. Einfacher Kaufprozess, schnelle Lieferung!",
    "customer_name": "Rosa M., Sankt Augustin",
    "date": "2025-11-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Game rockt! Besonders der Zombie-Mode mit Freunden. Genial!",
    "customer_name": "Hermann G., Heidenheim",
    "date": "2025-11-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Top Empfehlung für alle Shooter-Enthusiasten. Ihr werdet nicht enttäuscht!",
    "customer_name": "Irene K., Langenhagen",
    "date": "2025-11-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Battle-Pass-Inhalte sind ihren Preis wert. Gutes Belohnungssystem.",
    "customer_name": "Gustav N., Hameln",
    "date": "2025-11-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Würde jederzeit wieder hier kaufen. Absolut vertrauenswürdiger Shop!",
    "customer_name": "Hedwig S., Stade",
    "date": "2025-11-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Pacific-Theater-Maps sind der Hammer. So schön designt!",
    "customer_name": "Ferdinand A., Worms",
    "date": "2025-11-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bin begeistert vom Gameplay. Flüssig, responsiv, einfach gut!",
    "customer_name": "Luise H., Fellbach",
    "date": "2025-11-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Danke für die super Beratung im Vorfeld. Hat sich voll gelohnt!",
    "customer_name": "Viktor J., Sindelfingen",
    "date": "2025-11-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Perks sind gut ausbalanciert. Jeder Spielstil findet was Passendes.",
    "customer_name": "Mathilde L., Dormagen",
    "date": "2025-11-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Grandioses Spiel. Bin froh, dass ich nicht länger gewartet habe!",
    "customer_name": "Siegfried W., Neustadt an der Weinstraße",
    "date": "2025-11-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die KI in der Kampagne ist überraschend clever. Echte Herausforderung!",
    "customer_name": "Adelheid B., Melle",
    "date": "2025-11-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Zustellung war pünktlich wie versprochen. Sehr zuverlässig!",
    "customer_name": "Theodor E., Lörrach",
    "date": "2025-11-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Das Spiel hält was es verspricht. Action ohne Ende!",
    "customer_name": "Berta R., Frankenthal",
    "date": "2025-11-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sehr spaßig, aber der Akimbo-Meta ist etwas nervig. Ansonsten klasse!",
    "customer_name": "Konrad D., Bornheim",
    "date": "2025-11-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bestes Preis-Leistungs-Verhältnis auf dem Markt. Großartig!",
    "customer_name": "Lina M., Dreieich",
    "date": "2025-11-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Clan-Funktionen sind super. Endlich wieder im Team zocken!",
    "customer_name": "Albert G., Rodgau",
    "date": "2025-11-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Spiel kam unbeschädigt an. Perfekte Verpackung!",
    "customer_name": "Ida K., Rastatt",
    "date": "2025-11-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Ragdoll-Physik ist manchmal unfreiwillig komisch. Love it!",
    "customer_name": "Leopold F., Gronau",
    "date": "2025-11-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab schon alle Trophäen gesammelt. War eine geile Reise!",
    "customer_name": "Ottilie P., Hennef",
    "date": "2025-11-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für Fans des Genres ein absolutes Must-have. Keine Frage!",
    "customer_name": "Reinhold S., Balingen",
    "date": "2025-11-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Weekly Challenges bringen immer neue Motivation. Clever gemacht!",
    "customer_name": "Pauline N., Georgsmarienhütte",
    "date": "2025-11-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab mir extra Urlaub genommen zum Zocken. Totally worth it!",
    "customer_name": "Emanuel J., Bad Oeynhausen",
    "date": "2025-11-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Die Umgebungszerstörung ist next level. Wände durchschießen macht Spaß!",
    "customer_name": "Auguste H., Brühl",
    "date": "2025-11-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Super Shop, super Game, super zufrieden! Was soll ich mehr sagen?",
    "customer_name": "Vinzenz L., Halberstadt",
    "date": "2025-11-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Call of Duty at its finest. Ein Muss für jeden Gamer!",
    "customer_name": "Therese W., Wesel",
    "date": "2025-11-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "5 von 5 Sternen ohne zu zögern. Absolut empfehlenswert!",
    "customer_name": "Engelbert B., Grevenbroich",
    "date": "2025-11-11",
    "verified": true
  }
];
