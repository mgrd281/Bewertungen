const REVIEWS_DATA = [
  {
    "rating": 5,
    "content": "Office 2016 läuft auf meinem MacBook Pro perfekt. Key kam innerhalb von 3 Minuten per Mail. Aktivierung war kinderleicht!",
    "customer_name": "Markus H., München",
    "date": "2026-02-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich ein dauerhaftes Office ohne Abo-Zwang! Word, Excel und PowerPoint funktionieren einwandfrei auf meinem Mac.",
    "customer_name": "Julia S., Hamburg",
    "date": "2026-02-04",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Installation hat geklappt, aber ich musste erst googeln wie man Office auf dem Mac installiert. Eine Anleitung wäre hilfreich gewesen.",
    "customer_name": "Thomas K., Berlin",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen iMac genau das Richtige. Kein nerviges Office 365 Abo mehr, einmal zahlen und fertig!",
    "customer_name": "Sandra M., Köln",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schnelle Lieferung, Key funktioniert. Word und Excel laufen auf macOS Monterey ohne Probleme.",
    "customer_name": "Christian B., Frankfurt",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Mail mit dem Key kam erst nach 45 Minuten, nicht sofort wie versprochen. Aber Office funktioniert einwandfrei, daher trotzdem zufrieden.",
    "customer_name": "Lisa R., Stuttgart",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Perfekt für Home-Office auf dem Mac! PowerPoint-Präsentationen laufen flüssig, Excel rechnet schnell. Top!",
    "customer_name": "Daniel W., Düsseldorf",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Air hat jetzt ein vollwertiges Office. Für den Preis unschlagbar! Hab's auch meiner Schwester empfohlen.",
    "customer_name": "Anna L., Leipzig",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Outlook für Mac funktioniert super mit meinem E-Mail-Konto. Kalender und Kontakte sind synchronisiert. Alles bestens!",
    "customer_name": "Michael F., Dresden",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Office 2016 ist nicht das Neueste, aber für meine Zwecke völlig ausreichend. Für unter 15€ kann man nicht meckern.",
    "customer_name": "Jennifer P., Nürnberg",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Key kam blitzschnell. Aktivierung über Microsoft-Konto war einfach. Läuft seit 2 Wochen stabil auf meinem Mac mini.",
    "customer_name": "Stefan G., Hannover",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte vorher die Testversion. Jetzt mit dem günstigen Key endlich die Vollversion! Alle Features freigeschaltet.",
    "customer_name": "Katharina E., Bremen",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für mein Studium auf dem MacBook genau richtig. Word für Hausarbeiten, Excel für Statistik – alles dabei!",
    "customer_name": "Patrick T., Essen",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Die Aktivierung hat erst beim zweiten Versuch geklappt. Aber jetzt läuft Office ohne Probleme. Am Ende alles gut.",
    "customer_name": "Nina A., Dortmund",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "OneNote für Mac ist super für meine Notizen. Zusammen mit Word und Excel ein komplettes Paket!",
    "customer_name": "Robert V., Duisburg",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Dauerlizenz statt Abo – genau was ich wollte! Einmal 12,90€ zahlen und für immer nutzen. Besser geht's nicht.",
    "customer_name": "Melanie D., Bochum",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office auf meinem neuen M1 MacBook installiert. Läuft über Rosetta 2 einwandfrei, keine Performance-Probleme!",
    "customer_name": "Alexander J., Wuppertal",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key funktioniert wie beschrieben. Hätte mir nur gewünscht dass die Download-Links gleich mitgeliefert werden.",
    "customer_name": "Sabrina C., Bielefeld",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein älterer Mac mini von 2014 läuft jetzt mit Office 2016. Perfekte Kombination! Schnell und stabil.",
    "customer_name": "Tobias N., Bonn",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für das kleine Büro meiner Frau einen Mac eingerichtet. Office 2016 deckt alle Anforderungen ab!",
    "customer_name": "Sarah Z., Mannheim",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Excel 2016 für Mac hat alle Funktionen die ich brauche. Pivot-Tabellen, SVERWEIS – alles funktioniert!",
    "customer_name": "David O., Karlsruhe",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Mail landete im Spam-Ordner, hab 30 Minuten gesucht. Aber Key ist echt und Office läuft perfekt.",
    "customer_name": "Christina U., Münster",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "PowerPoint-Präsentationen für die Uni sehen auf dem Mac super aus. Exportiere auch als PDF, funktioniert einwandfrei!",
    "customer_name": "Florian I., Wiesbaden",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Support hat mir bei einer Frage zur Installation geholfen. Sehr freundlich und kompetent! Key funktioniert.",
    "customer_name": "Jessica X., Gelsenkirchen",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab von Windows auf Mac gewechselt. Office 2016 fühlt sich vertraut an, alles an gewohnter Stelle!",
    "customer_name": "Maximilian Q., Mönchengladbach",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Etwas ältere Version, aber für den Preis perfekt. Moderne Features brauche ich sowieso nicht. Macht was es soll.",
    "customer_name": "Vanessa Y., Braunschweig",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Sohn braucht Office für die Schule. Auf seinem MacBook läuft jetzt alles was er braucht. Danke!",
    "customer_name": "Tim B., Chemnitz",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich kann ich .docx-Dateien auf meinem Mac richtig bearbeiten, nicht nur in Pages konvertieren!",
    "customer_name": "Claudia W., Aachen",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schneller Versand, echter Key, einfache Installation. Mehr braucht man nicht! Bin sehr zufrieden.",
    "customer_name": "Benjamin S., Kiel",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Installation war etwas umständlich weil ich die Microsoft-Seite erst finden musste. Aber Office läuft jetzt top!",
    "customer_name": "Martin K., Magdeburg",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Pro 2019 hat jetzt ein vollwertiges Office. Word öffnet blitzschnell, Excel rechnet flüssig!",
    "customer_name": "Stefanie H., Freiburg",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für Freiberufler wie mich ideal. Rechnungen in Excel, Angebote in Word – alles ohne monatliche Kosten!",
    "customer_name": "Jan R., Lübeck",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Outlook für Mac synchronisiert perfekt mit meinem iPhone. Kalender und Mails immer aktuell!",
    "customer_name": "Marie M., Erfurt",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Office 2016 ist nicht das Neueste, aber stabil und funktional. Für einfache Büroarbeiten mehr als ausreichend.",
    "customer_name": "Andreas L., Rostock",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab den Key für meinen Vater gekauft. Installation auf seinem iMac war einfach, er ist begeistert!",
    "customer_name": "Petra F., Mainz",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Word 2016 für Mac hat alle Formatierungsoptionen die ich brauche. Dokumente sehen professionell aus!",
    "customer_name": "Oliver G., Kassel",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kaufabwicklung war super einfach. PayPal bezahlt, 2 Minuten später Key per Mail. So muss das sein!",
    "customer_name": "Nadine D., Halle",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Support hat mir geholfen als die Aktivierung nicht sofort klappte. Nach dem zweiten Anlauf ging alles.",
    "customer_name": "Ralf A., Saarbrücken",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine Mutter hat jetzt Office auf ihrem MacBook Air. Word und Excel reichen ihr völlig, perfekter Kauf!",
    "customer_name": "Yvonne T., Potsdam",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 für Mac zum Schnäppchenpreis. Funktioniert seit einem Monat einwandfrei, keine Probleme!",
    "customer_name": "Felix E., Ludwigshafen",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Job brauche ich Excel täglich. Die Mac-Version funktioniert genauso gut wie unter Windows!",
    "customer_name": "Hannah P., Oldenburg",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Gutes Produkt zum guten Preis. Einziger Nachteil: Keine automatischen Updates wie bei Office 365. Aber dafür kein Abo!",
    "customer_name": "Simon V., Osnabrück",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "PowerPoint für Mac ist super für meine Verkaufspräsentationen. Animationen laufen flüssig auf meinem Mac!",
    "customer_name": "Laura J., Leverkusen",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab Office 2016 auf meinem MacBook und meinem iMac verglichen – läuft auf beiden Geräten identisch gut!",
    "customer_name": "Dennis C., Solingen",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der günstige Preis hat mich erst skeptisch gemacht, aber der Key ist 100% echt! Sehr empfehlenswert.",
    "customer_name": "Birgit N., Heidelberg",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Office funktioniert gut auf meinem Mac. Würde mir nur wünschen dass OneDrive besser integriert wäre.",
    "customer_name": "Erik Z., Darmstadt",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meine kleine Grafikagentur nutze ich Excel für Budgets und Word für Verträge. Perfekte Lösung!",
    "customer_name": "Carina O., Paderborn",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Key kam sofort, Installation dauerte 10 Minuten, Aktivierung ging beim ersten Mal. Alles perfekt!",
    "customer_name": "Marco I., Regensburg",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein alter Mac von 2015 läuft super mit Office 2016. Keine Performance-Probleme, alles flüssig!",
    "customer_name": "Tanja U., Würzburg",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hab zuerst die falsche Version runtergeladen (Windows). Nach dem richtigen Download ging alles easy.",
    "customer_name": "Jens X., Ingolstadt",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Outlook 2016 für Mac ist perfekt für mein Business. Termine, Mails, Kontakte – alles an einem Ort!",
    "customer_name": "Silke Q., Ulm",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe drei Macs in der Familie. Für jeden einen Key gekauft, alle funktionieren einwandfrei!",
    "customer_name": "Uwe Y., Heilbronn",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Word für Mac öffnet auch alte .doc-Dateien ohne Probleme. Kompatibilität ist super!",
    "customer_name": "Monika B., Göttingen",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Gutes Office-Paket, aber die Mac-Version hat weniger Features als Windows. Für mich trotzdem ausreichend.",
    "customer_name": "Thorsten W., Pforzheim",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Excel für Mac rechnet genauso schnell wie auf meinem alten Windows-PC. Sehr zufrieden!",
    "customer_name": "Angelika S., Bottrop",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Air M1 läuft mit Office 2016 über Rosetta problemlos. Keinerlei Abstürze!",
    "customer_name": "Wolfgang K., Recklinghausen",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für unter 15€ ein vollständiges Office-Paket. Wo gibt's das sonst? Klare Kaufempfehlung!",
    "customer_name": "Heike R., Offenbach",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key kam per Mail, aber ohne Installationsanleitung. Mit Google-Hilfe trotzdem schnell installiert.",
    "customer_name": "Norbert M., Siegen",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 auf meinem Mac mini Server – perfekt für Dokumente im Home-Office!",
    "customer_name": "Susanne L., Bergisch Gladbach",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab's meinem Neffen für sein Studium geschenkt. Er ist super happy mit dem Mac-Office!",
    "customer_name": "Rainer H., Cottbus",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "PowerPoint-Vorlagen aus dem Internet funktionieren problemlos mit der Mac-Version. Sehr gut!",
    "customer_name": "Kerstin F., Hildesheim",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Office 2016 ist nicht das Neuste, aber stabil und zuverlässig. Für den Preis absolut okay!",
    "customer_name": "Volker D., Witten",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neues MacBook Pro 14\" hat jetzt Office. Installation war easy, läuft perfekt!",
    "customer_name": "Gabriele G., Gera",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Word, Excel, PowerPoint, OneNote, Outlook – alles dabei für unter 15€. Unschlagbar!",
    "customer_name": "Karsten A., Salzgitter",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Support hat mir geholfen als ich Probleme hatte. Sehr schnelle und freundliche Hilfe!",
    "customer_name": "Martina T., Iserlohn",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key funktioniert einwandfrei. Allerdings hätte ich mir eine deutsche Downloadseite gewünscht.",
    "customer_name": "Bernd E., Schwerin",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Nutze Office 2016 auf meinem Mac für die Buchhaltung. Excel ist super für Tabellen und Berechnungen!",
    "customer_name": "Renate P., Jena",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte vorher OpenOffice auf dem Mac. Mit Microsoft Office ist alles viel kompatibler mit Kunden!",
    "customer_name": "Holger V., Zwickau",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für das Geld kann man wirklich nicht meckern. Echtes Microsoft Office für den Mac!",
    "customer_name": "Elke J., Trier",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Aktivierung hat beim ersten Mal nicht geklappt, aber beim zweiten Versuch ging es. Jetzt läuft alles.",
    "customer_name": "Klaus C., Kaiserslautern",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein iMac 27\" hat jetzt ein vollständiges Office. Auf dem großen Bildschirm macht Excel richtig Spaß!",
    "customer_name": "Ute O., Ratingen",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office-Paket für Mac gesucht und hier gefunden. Preis-Leistung ist der Wahnsinn!",
    "customer_name": "Heinrich N., Moers",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich kann ich Word-Dokumente von Kollegen ohne Formatierungsprobleme öffnen. Perfekt!",
    "customer_name": "Ingrid Z., Velbert",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Die Webseite hätte übersichtlicher sein können, aber am Ende hab ich gefunden was ich brauche.",
    "customer_name": "Dirk U., Fürth",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 für Mac – schnell geliefert, einfach installiert, problemlos aktiviert. Top!",
    "customer_name": "Gisela X., Konstanz",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Air M2 läuft mit Office 2016 über Rosetta 2 ohne jede Verzögerung!",
    "customer_name": "Manfred Q., Marl",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab's für meine Tochter gekauft. Sie studiert und braucht Office täglich. Perfekte Lösung!",
    "customer_name": "Edith Y., Lünen",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key ist echt und Office funktioniert. Nur die Mail war im Spam gelandet, fast hätte ich sie übersehen.",
    "customer_name": "Helmut I., Hanau",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "OneNote für Mac ist super für meine Notizen im Meeting. Synchronisiert auch mit dem iPhone!",
    "customer_name": "Rita B., Villingen-Schwenningen",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alle Office-Programme laufen stabil auf meinem Mac. Keine Abstürze, keine Probleme!",
    "customer_name": "Erwin W., Esslingen",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Mac mini im Arbeitszimmer. Office 2016 reicht mir vollkommen, brauche kein 365!",
    "customer_name": "Doris S., Ludwigsburg",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Schnelle Lieferung, funktionierender Key. Einziger Kritikpunkt: Keine Rechnung dabei, musste ich anfordern.",
    "customer_name": "Günter M., Gütersloh",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein altes MacBook Pro 2013 läuft perfekt mit Office 2016. Genau die richtige Kombi!",
    "customer_name": "Helga K., Minden",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Weihnachtsgeschenk für mich selbst. Bestes Geschenk seit langem – endlich richtiges Office!",
    "customer_name": "Werner L., Rheine",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Excel für Mac ist perfekt für meine Steuererklärung. Alle Formeln funktionieren wie gewohnt!",
    "customer_name": "Brigitte H., Troisdorf",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Installation war etwas fummelig, aber mit Geduld hat es geklappt. Office läuft jetzt super!",
    "customer_name": "Rudolf F., Dorsten",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Outlook für Mac holt meine Mails jetzt automatisch ab. Endlich professionelles Mailprogramm!",
    "customer_name": "Marianne D., Detmold",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für mein kleines Unternehmen drei Keys gekauft. Alle Macs laufen jetzt mit Office 2016!",
    "customer_name": "Peter G., Castrop-Rauxel",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Word für Mac hat alle Funktionen die ich brauche. Serienbriefe, Makros, alles da!",
    "customer_name": "Ursula A., Arnsberg",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Gutes Produkt, aber die Mac-Version unterscheidet sich etwas von Windows. Man gewöhnt sich dran.",
    "customer_name": "Lothar T., Landshut",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Air hat jetzt Office. Für Uni-Arbeiten perfekt, alles was ich brauche!",
    "customer_name": "Erika E., Kempten",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 für Mac zu diesem Preis – das ist wirklich ein Schnäppchen!",
    "customer_name": "Alfred R., Lüneburg",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "PowerPoint für Mac ist super für meine Präsentationen. Übergänge und Animationen funktionieren perfekt!",
    "customer_name": "Elisabeth P., Bamberg",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key funktioniert. Hätte mir nur eine deutsche Anleitung gewünscht, die Microsoft-Seite ist auf Englisch.",
    "customer_name": "Ernst V., Bayreuth",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Grafikdesign-Mac genau das Richtige. Word für Briefings, Excel für Budgets!",
    "customer_name": "Gerda J., Plauen",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office-Dateien von Windows-Kollegen öffnen sich jetzt problemlos auf meinem Mac!",
    "customer_name": "Friedrich C., Stralsund",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein älterer iMac von 2012 läuft mit Office 2016 noch super. Perfekte Kombi!",
    "customer_name": "Hannelore O., Neuss",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Support musste mir helfen, da der Key anfangs nicht akzeptiert wurde. Problem gelöst, alles gut!",
    "customer_name": "Kurt Z., Herford",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für unter 15€ ein komplettes Office-Paket. Microsoft wäre stolz auf diesen Preis! 😄",
    "customer_name": "Anneliese U., Brandenburg",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 auf meinem Mac mini M1 – schnell, stabil, zuverlässig. Mehr braucht man nicht!",
    "customer_name": "Heinz X., Rosenheim",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook läuft jetzt mit echtem Microsoft Office. Endlich volle Kompatibilität!",
    "customer_name": "Gertrud Q., Wolfsburg",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Alles funktioniert wie versprochen. Nur schade dass Office 2016 kein Dark Mode hat auf dem Mac.",
    "customer_name": "Otto Y., Fulda",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Excel für Mac berechnet meine Tabellen genauso schnell wie vorher auf Windows. Super!",
    "customer_name": "Lieselotte I., Celle",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab den Key für meinen Bruder gekauft. Sein Mac läuft jetzt mit Office, er ist zufrieden!",
    "customer_name": "Hans N., Aschaffenburg",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Word für Mac ist perfekt für meine Romane. Formatierung und Rechtschreibprüfung top!",
    "customer_name": "Ilse B., Marburg",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Download hat etwas gedauert, aber Installation und Aktivierung liefen dann problemlos.",
    "customer_name": "Willi W., Schwäbisch Gmünd",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Outlook für Mac organisiert meine E-Mails jetzt professionell. Viel besser als Apple Mail!",
    "customer_name": "Rosemarie S., Weimar",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Mac Pro Workstation. Office 2016 läuft darauf wie geschmiert!",
    "customer_name": "Paul K., Friedrichshafen",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Dauerlizenz statt Abo – genau das wollte ich! Einmal zahlen, für immer nutzen.",
    "customer_name": "Elfriede M., Speyer",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Office funktioniert gut. Würde mir nur wünschen dass Updates einfacher wären als über Microsoft.",
    "customer_name": "Walter L., Passau",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Air 2020 hat jetzt ein vollwertiges Office. Alles funktioniert perfekt!",
    "customer_name": "Margot H., Herten",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für das Home-Office meiner Frau. Sie ist begeistert von Word und Excel auf dem Mac!",
    "customer_name": "Herbert F., Emden",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "OneNote für Mac synchronisiert perfekt mit meinem Windows-PC im Büro. Klasse!",
    "customer_name": "Agnes D., Kleve",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Preis ist unschlagbar. Einziger Minuspunkt: Keine Updates wie bei Office 365. Aber okay.",
    "customer_name": "Bruno G., Bad Homburg",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 auf meinem alten MacBook Air 2015 – läuft immer noch super stabil!",
    "customer_name": "Christa A., Pulheim",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Excel für Mac ist perfekt für meine Inventurlisten. Alle Funktionen die ich brauche!",
    "customer_name": "Wilhelm T., Frechen",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "PowerPoint-Präsentationen exportiere ich als PDF – funktioniert auf dem Mac einwandfrei!",
    "customer_name": "Johanna R., Bad Salzuflen",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key kam sofort, Aktivierung brauchte zwei Anläufe. Am Ende alles wie es sein soll!",
    "customer_name": "Georg E., Dormagen",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meine Praxis brauche ich Word für Patientenbriefe. Läuft perfekt auf meinem iMac!",
    "customer_name": "Anna-Maria P., Hattingen",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office 2016 für Mac – günstig, schnell geliefert, funktioniert einwandfrei. Was will man mehr?",
    "customer_name": "Richard V., Viersen",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Sohn studiert Wirtschaft und braucht Excel. Auf seinem MacBook läuft es jetzt perfekt!",
    "customer_name": "Emma J., Langenfeld",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Die Aktivierung war etwas kompliziert wegen Microsoft-Konto. Aber der Support hat geholfen!",
    "customer_name": "Fritz C., Ahlen",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich ein vollwertiges Office auf meinem Mac. Für unter 15€ ein absolutes Schnäppchen!",
    "customer_name": "Hildegard O., Norderstedt",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Word, Excel, PowerPoint, Outlook, OneNote – alles dabei und alles funktioniert auf dem Mac!",
    "customer_name": "Josef Z., Kerpen",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein MacBook Pro 16\" hat jetzt Office. Bildschirm ist groß genug für Excel-Tabellen!",
    "customer_name": "Martha U., Bocholt",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Guter Kauf! Einziger Kritikpunkt: Man braucht ein Microsoft-Konto für die Aktivierung.",
    "customer_name": "Anton X., Gladbeck",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen iMac im Arbeitszimmer. Office 2016 ist perfekt für Alltags-Büroarbeit!",
    "customer_name": "Frieda Q., Dinslaken",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Office-Dateien zwischen Mac und Windows austauschen – jetzt kein Problem mehr!",
    "customer_name": "Karl Y., Euskirchen",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Support war sehr hilfsbereit bei meiner Frage zur Installation. Klasse Service!",
    "customer_name": "Herta I., Erkrath",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Office funktioniert super auf meinem Mac. Nur schade dass die Version nicht mehr aktualisiert wird.",
    "customer_name": "Ludwig N., Ibbenbüren",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für 12,90€ ein komplettes Office-Paket für Mac. Günstiger geht's wirklich nicht!",
    "customer_name": "Else B., Hürth",
    "date": "2025-12-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neuer Mac mini M2 läuft mit Office 2016 über Rosetta perfekt. Keine Probleme!",
    "customer_name": "Max W., Meerbusch",
    "date": "2025-12-01",
    "verified": true
  }
];
