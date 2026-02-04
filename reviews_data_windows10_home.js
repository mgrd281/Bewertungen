const REVIEWS_DATA = [
  {
    "rating": 5,
    "content": "Lizenzschlüssel kam innerhalb von 5 Minuten per E-Mail. Aktivierung hat sofort funktioniert. Unschlagbarer Preis für ein originales Windows!",
    "customer_name": "Markus S., Hamburg",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Perfekt! Key funktioniert einwandfrei, Windows 10 läuft stabil. Für unter 10 Euro ein echtes Schnäppchen.",
    "customer_name": "Julia W., München",
    "date": "2026-02-03",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key funktioniert, aber die Anleitung zur Aktivierung hätte etwas ausführlicher sein können. Musste kurz googeln, dann ging es aber problemlos.",
    "customer_name": "Kevin B., Berlin",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schneller geht's nicht. Bestellt, bezahlt, 2 Minuten später war der Key da. So muss Online-Shopping sein!",
    "customer_name": "Sandra K., Köln",
    "date": "2026-02-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen neuen PC gebraucht. Installation und Aktivierung liefen reibungslos. Klare Kaufempfehlung!",
    "customer_name": "Thomas H., Frankfurt",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 4,
    "content": "E-Mail mit dem Key kam erst nach 20 Minuten, nicht sofort wie versprochen. Dafür funktioniert alles einwandfrei. Trotzdem zufrieden.",
    "customer_name": "Lukas M., Stuttgart",
    "date": "2026-02-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Super Preis, super Service. Der Support hat mir sogar bei der Installation geholfen, obwohl es Sonntagabend war.",
    "customer_name": "Lisa R., Düsseldorf",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein alter PC brauchte ein frisches Windows. Für den Preis absolut unschlagbar. Funktioniert seit 2 Wochen ohne Probleme!",
    "customer_name": "Daniel P., Leipzig",
    "date": "2026-01-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab schon mehrere Keys hier gekauft. Alle funktionieren auch nach Monaten noch einwandfrei. Bin mittlerweile Stammkunde.",
    "customer_name": "Anna F., Dresden",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Alles gut, nur ein kleiner Hinweis: Man braucht einen USB-Stick für die Installation. Das stand nirgends. Sonst alles top.",
    "customer_name": "Michael T., Nürnberg",
    "date": "2026-01-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kam sofort per Mail. Konnte direkt installieren. Aktivierung hat auf Anhieb geklappt. Mehr kann man nicht erwarten.",
    "customer_name": "Jennifer L., Hannover",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Besser kann man nicht kaufen. Originale Lizenz zum Bruchteil des Preises. Nach 3 Monaten immer noch aktiviert.",
    "customer_name": "Stefan G., Bremen",
    "date": "2026-01-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Sohn einen günstigen Gaming-PC zusammengestellt. Windows-Key hat super funktioniert, er ist happy!",
    "customer_name": "Patrick E., Essen",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hatte anfangs Probleme bei der Aktivierung über das Internet. Telefonische Aktivierung hat dann aber funktioniert. Am Ende alles gut.",
    "customer_name": "Christian A., Dortmund",
    "date": "2026-01-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schnelle Lieferung, einfache Aktivierung, günstiger Preis. Hab schon Freunden davon erzählt.",
    "customer_name": "Nina V., Duisburg",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Alles bestens! Key kam sofort, Aktivierung problemlos. Werde hier wieder kaufen wenn ich noch einen PC einrichte.",
    "customer_name": "Robert D., Bochum",
    "date": "2026-01-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe 3 PCs im kleinen Büro damit ausgestattet. Alle Keys funktionieren einwandfrei. Preislich unschlagbar für Kleinunternehmer.",
    "customer_name": "Melanie S., Wuppertal",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key funktioniert, das ist die Hauptsache. Wäre schön gewesen wenn eine deutsche Installationsanleitung dabei gewesen wäre.",
    "customer_name": "Alexander N., Bielefeld",
    "date": "2026-01-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Key wurde sofort geliefert. Mein IT-Kumpel hat mir bei der Aktivierung geholfen, ging in 5 Minuten.",
    "customer_name": "Katharina J., Bonn",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für den Preis gibt es nichts zu meckern. Echte Microsoft-Lizenz, funktioniert dauerhaft. Bin seit November zufrieden.",
    "customer_name": "Tobias Z., Mannheim",
    "date": "2026-01-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Support war sehr hilfreich. Hatte eine Frage zur Installation und wurde innerhalb von 10 Minuten per Chat geholfen.",
    "customer_name": "Sarah B., Karlsruhe",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Lieferung hat ca. 30 Minuten gedauert, nicht sofort wie beschrieben. Aber hey, für den Preis kann ich nicht meckern. Funktioniert.",
    "customer_name": "David H., Münster",
    "date": "2026-01-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Lieferung erfolgte blitzschnell. Key ist gültig und Windows aktiviert. Nach 6 Wochen immer noch keine Probleme.",
    "customer_name": "Christina M., Augsburg",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab lange nach einem günstigen Windows-Key gesucht. Hier endlich fündig geworden! Kollegen hab ich's auch empfohlen.",
    "customer_name": "Florian K., Wiesbaden",
    "date": "2026-01-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Einfacher Kaufprozess, schnelle Lieferung, funktionierender Key. Genau so stelle ich mir einen Online-Shop vor.",
    "customer_name": "Jessica R., Gelsenkirchen",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Windows ist aktiviert und läuft. Einziger Kritikpunkt: Die Bestätigungsmail landete im Spam. Fast hätte ich den Key übersehen.",
    "customer_name": "Maximilian W., Mönchengladbach",
    "date": "2026-01-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Key kam in Sekunden. Installation war dank YouTube-Tutorial einfach. Windows läuft jetzt seit einem Monat perfekt.",
    "customer_name": "Vanessa C., Braunschweig",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neuer Mini-PC läuft jetzt mit Windows 10. Aktivierung hat super geklappt! Besser als erwartet.",
    "customer_name": "Tim L., Chemnitz",
    "date": "2026-01-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Keine Probleme, keine Wartezeit, keine versteckten Kosten. Genau das was auf der Seite steht.",
    "customer_name": "Sabrina O., Aachen",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hab hier schon Windows und Office gekauft. Windows ging sofort, bei Office musste ich 2 Stunden warten. Aber funktioniert beides.",
    "customer_name": "Benjamin U., Kiel",
    "date": "2026-01-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meine Eltern einen PC eingerichtet. Mit diesem günstigen Key war das ein Kinderspiel! Sie sind auch zufrieden.",
    "customer_name": "Claudia I., Magdeburg",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Erstklassiger Service, seriöser Shop. Key funktioniert zu 100%. Hatte vorher schlechte Erfahrungen woanders, hier nicht.",
    "customer_name": "Martin Y., Freiburg",
    "date": "2026-01-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Direkt nach dem Kauf per E-Mail erhalten. Aktivierung ohne Probleme. Mein Laptop läuft jetzt einwandfrei.",
    "customer_name": "Stefanie X., Lübeck",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Windows 10 Home ist für den Alltag ausreichend. Hätte mir gewünscht dass Pro zum gleichen Preis verfügbar wäre. Aber Home reicht mir.",
    "customer_name": "Jan Q., Erfurt",
    "date": "2026-01-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Einfach perfekt. Günstig, schnell, funktioniert. Was soll ich groß schreiben, es ist wie beschrieben.",
    "customer_name": "Marie P., Rostock",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hatte vorher eine nicht aktivierte Windows-Version. Jetzt läuft alles legal und stabil! Endlich keine Wasserzeichen mehr.",
    "customer_name": "Andreas E., Mainz",
    "date": "2026-01-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Key kam schneller als erwartet. Aktivierung war ein Kinderspiel. Meine Frau ist auch beeindruckt vom Preis.",
    "customer_name": "Petra T., Kassel",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Funktioniert alles. Musste allerdings beim Support nachfragen weil ich nicht wusste wo ich den Key eingeben soll. Wurde mir aber schnell erklärt.",
    "customer_name": "Oliver F., Halle",
    "date": "2026-01-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 zum Taschengeldpreis. Key funktioniert seit über 2 Monaten ohne Probleme.",
    "customer_name": "Nadine G., Saarbrücken",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Perfekte Abwicklung von Anfang bis Ende. Hab's meinem Bruder weiterempfohlen, der hat auch bestellt.",
    "customer_name": "Ralf D., Potsdam",
    "date": "2026-01-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab den Key für meinen selbstgebauten PC gebraucht. Funktioniert bestens mit meiner neuen Hardware!",
    "customer_name": "Yvonne A., Ludwigshafen",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Lieferung per Mail. Key hat funktioniert. Einzig die Webseite ist etwas unübersichtlich beim Checkout. Aber Ergebnis stimmt.",
    "customer_name": "Felix J., Oldenburg",
    "date": "2026-01-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich ein legales Windows zu einem fairen Preis. Hatte echt Bedenken wegen des günstigen Preises, aber alles echt.",
    "customer_name": "Hannah K., Osnabrück",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein alter Laptop hat jetzt ein frisches Windows 10. Läuft wieder wie neu! Danke für den günstigen Key.",
    "customer_name": "Simon R., Leverkusen",
    "date": "2026-01-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Preis ist unglaublich günstig. Key ist echt und funktioniert dauerhaft. Nach 3 Monaten immer noch aktiviert.",
    "customer_name": "Laura N., Solingen",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Schnelle Lieferung, echter Key. Hätte mir nur gewünscht dass man auch per Rechnung zahlen kann. Aber PayPal ging auch.",
    "customer_name": "Dennis M., Heidelberg",
    "date": "2026-01-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab schon 3 Keys hier gekauft für verschiedene Rechner im Haushalt. Alle funktionieren einwandfrei!",
    "customer_name": "Birgit L., Darmstadt",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows-Aktivierung war in 2 Minuten erledigt. Super einfach, selbst für mich als Laie.",
    "customer_name": "Erik S., Paderborn",
    "date": "2026-01-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für mein Home-Office einen neuen PC gebaut. Windows-Key passt perfekt! Sehr zufrieden mit dem Kauf.",
    "customer_name": "Carina H., Regensburg",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Zuverlässiger Shop. Einziger Minuspunkt: Man bekommt keine Rechnung automatisch, musste ich extra anfordern. Aber kam dann schnell.",
    "customer_name": "Marco V., Würzburg",
    "date": "2026-01-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Key kam blitzschnell. Aktivierung ohne Probleme. Genau wie beschrieben, keine bösen Überraschungen.",
    "customer_name": "Tanja B., Ingolstadt",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich kann ich Windows-Updates wieder installieren. Legale Lizenz und das Wasserzeichen ist weg!",
    "customer_name": "Jens W., Ulm",
    "date": "2026-01-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für unter 10€ ein echtes Windows. Im Laden zahlt man das Zehnfache. Bereue den Kauf nicht.",
    "customer_name": "Silke F., Heilbronn",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key hat sofort funktioniert. Die Aktivierung über Microsoft ging problemlos. Nur die Mail war im Spam-Ordner gelandet.",
    "customer_name": "Uwe C., Göttingen",
    "date": "2026-01-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Nachbar hat mich auf diesen Shop aufmerksam gemacht. Sehr gute Empfehlung! Jetzt hat er auch nochmal bestellt.",
    "customer_name": "Monika Z., Pforzheim",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schnell, günstig, zuverlässig. Genau so soll ein Online-Shop sein! Keine Spielchen, einfach funktioniert.",
    "customer_name": "Thorsten P., Bottrop",
    "date": "2026-01-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab den Key am Wochenende bestellt und sofort erhalten. Auch Sonntags! Sehr guter Service.",
    "customer_name": "Angelika E., Recklinghausen",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Windows 10 Home für unter 10€. Funktioniert einwandfrei. Nur der Download-Link für Windows war etwas versteckt.",
    "customer_name": "Wolfgang T., Remscheid",
    "date": "2026-01-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Arbeits-PC läuft jetzt mit einer echten Windows-Lizenz. Endlich legal und ohne Einschränkungen.",
    "customer_name": "Heike R., Offenbach",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Keine Probleme bei der Aktivierung. Key ist echt und gültig. Läuft seit Dezember stabil.",
    "customer_name": "Norbert M., Siegen",
    "date": "2026-01-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meine Tochter einen Laptop eingerichtet. Windows-Key war in Sekunden da! Sie kann jetzt für die Uni arbeiten.",
    "customer_name": "Susanne D., Bergisch Gladbach",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Preis-Leistung sehr gut. Hätte mir nur eine Schritt-für-Schritt-Anleitung gewünscht. Musste selbst recherchieren wie man installiert.",
    "customer_name": "Rainer G., Cottbus",
    "date": "2026-01-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Support hat mir bei einer Frage sofort geholfen. Super Service, auch nach dem Kauf noch erreichbar.",
    "customer_name": "Kerstin A., Hildesheim",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 läuft perfekt. Keine Probleme seit der Aktivierung vor 2 Monaten. Bin sehr zufrieden.",
    "customer_name": "Volker K., Witten",
    "date": "2026-01-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab hier schon mehrfach bestellt. Immer zuverlässig, immer günstig! Kann den Shop nur weiterempfehlen.",
    "customer_name": "Gabriele S., Gera",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key kam innerhalb von einer Minute. Aktivierung hat nach dem zweiten Versuch funktioniert. Jetzt läuft alles.",
    "customer_name": "Karsten N., Salzgitter",
    "date": "2026-01-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neuer Desktop-PC läuft jetzt mit Windows 10. Alles bestens, keinerlei Probleme!",
    "customer_name": "Martina L., Iserlohn",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Günstiger geht's wirklich nicht. Key funktioniert perfekt, Windows ist dauerhaft aktiviert.",
    "customer_name": "Bernd H., Schwerin",
    "date": "2026-01-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Silvester bestellt, sofort geliefert. Perfekter Start ins neue Jahr mit einem frischen Windows!",
    "customer_name": "Renate F., Jena",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hatte vorher Linux, jetzt Windows 10. Aktivierung lief problemlos, nur der Download von Microsoft dauerte ewig.",
    "customer_name": "Holger B., Zwickau",
    "date": "2025-12-31",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für den PC meiner Mutter eine Lizenz geholt. Sehr einfache Aktivierung, auch für Senioren machbar!",
    "customer_name": "Elke W., Trier",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows zum Schnäppchenpreis. Echter Key, echte Lizenz. Nach 2 Monaten immer noch aktiviert.",
    "customer_name": "Klaus D., Kaiserslautern",
    "date": "2025-12-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schon der dritte Key den ich hier kaufe. Alle funktionieren perfekt, auch nach Monaten noch!",
    "customer_name": "Ute M., Ratingen",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Schnelle Lieferung und funktionierender Key. Abzug weil die Webseite auf dem Handy etwas schwer zu bedienen ist.",
    "customer_name": "Heinrich J., Moers",
    "date": "2025-12-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 für unter 10 Euro. Das ist wirklich unglaublich günstig! Funktioniert einwandfrei.",
    "customer_name": "Ingrid P., Velbert",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Key kam sofort. Installation und Aktivierung waren ein Kinderspiel dank der Microsoft-Webseite.",
    "customer_name": "Dirk E., Fürth",
    "date": "2025-12-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein alter PC ist jetzt wieder fit mit Windows 10. Danke für den günstigen Key!",
    "customer_name": "Gisela T., Konstanz",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Keine versteckten Kosten, das ist sehr positiv. Allerdings war der Spam-Filter das Problem, Mail war nicht im Posteingang.",
    "customer_name": "Manfred R., Marl",
    "date": "2025-12-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Habe das Wasserzeichen endlich los. Legale Lizenz für kleines Geld! So macht Windows wieder Spaß.",
    "customer_name": "Edith K., Lünen",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Als Weihnachtsgeschenk für meinen Bruder gekauft. Er ist begeistert, sein alter PC läuft jetzt wieder.",
    "customer_name": "Helmut G., Hanau",
    "date": "2025-12-26",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Bester Preis den ich gefunden habe. Echter Microsoft-Key. Hab vorher woanders verglichen.",
    "customer_name": "Rita S., Villingen-Schwenningen",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Weihnachten bestellt und sofort erhalten. Gut! Aber die Aktivierung über Telefon war nötig, online ging nicht.",
    "customer_name": "Erwin A., Esslingen",
    "date": "2025-12-25",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Home-Server einen günstigen Key gebraucht. Läuft seit Wochen stabil und ohne Probleme!",
    "customer_name": "Doris L., Ludwigsburg",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Heiligabend einen Key gekauft und sofort bekommen. Der Service funktioniert auch an Feiertagen!",
    "customer_name": "Günter H., Gütersloh",
    "date": "2025-12-24",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows-Aktivierung hat beim ersten Versuch geklappt. Bin beeindruckt wie einfach das ging.",
    "customer_name": "Helga N., Minden",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Mein Laptop ist jetzt endlich mit einer echten Lizenz aktiviert. Einzig die Zahlungsoptionen könnten mehr sein.",
    "customer_name": "Werner V., Rheine",
    "date": "2025-12-23",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schneller Versand per E-Mail, günstiger Preis, funktionierender Key. Genau richtig!",
    "customer_name": "Brigitte C., Troisdorf",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für das Geld bekommt man sonst nicht viel. Hier bekommt man ein funktionierendes Windows!",
    "customer_name": "Rudolf W., Dorsten",
    "date": "2025-12-22",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab drei Keys für die ganze Familie bestellt. Alle funktionieren perfekt, keine Probleme!",
    "customer_name": "Marianne Y., Detmold",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 4,
    "content": "OEM-Lizenz zum guten Preis. Aktivierung lief, aber ich musste erst googeln was OEM bedeutet. Für Laien verwirrend.",
    "customer_name": "Peter B., Castrop-Rauxel",
    "date": "2025-12-21",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Endlich Windows-Updates ohne Einschränkungen. Legale Lizenz und alles funktioniert wie es soll.",
    "customer_name": "Ursula X., Arnsberg",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neuer Gaming-PC läuft mit diesem Key perfekt. Keine Probleme bei der Aktivierung!",
    "customer_name": "Lothar F., Landshut",
    "date": "2025-12-20",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für unter 10€ ein echtes Windows. Unschlagbar! Freundin hat auch gleich bestellt.",
    "customer_name": "Erika O., Kempten",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Key kam innerhalb von Sekunden. Aktivierung hat funktioniert. Nur ein Stern Abzug weil ich erst im Spam suchen musste.",
    "customer_name": "Alfred U., Lüneburg",
    "date": "2025-12-19",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Meine Empfehlung: Hier kaufen! Günstig, schnell, zuverlässig. Hatte woanders schlechte Erfahrungen, hier nicht.",
    "customer_name": "Elisabeth I., Bamberg",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 Home reicht für mich völlig aus. Super günstiger Key, funktioniert bestens!",
    "customer_name": "Ernst Q., Bayreuth",
    "date": "2025-12-18",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Support hat mir bei der Aktivierung per Live-Chat geholfen. Sehr freundlich und kompetent!",
    "customer_name": "Gerda Z., Plauen",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hab lange nach einem seriösen Anbieter gesucht. Hier bin ich fündig geworden. Nur die Webseite könnte moderner sein.",
    "customer_name": "Friedrich P., Stralsund",
    "date": "2025-12-17",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schnelle Lieferung per E-Mail. Aktivierung problemlos. Nach 2 Monaten immer noch zufrieden!",
    "customer_name": "Hannelore E., Neuss",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meinen Zweit-PC eine günstige Lizenz gebraucht. Hat alles super geklappt!",
    "customer_name": "Kurt T., Herford",
    "date": "2025-12-16",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows zum Sparpreis ohne Qualitätseinbußen. Microsoft-Original, keine Kopie.",
    "customer_name": "Anneliese R., Brandenburg",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key funktioniert seit 2 Monaten einwandfrei. Einziger Kritikpunkt: Die Bestellbestätigung kam verzögert.",
    "customer_name": "Heinz D., Rosenheim",
    "date": "2025-12-15",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Freund hat hier auch gekauft. Wir sind beide sehr zufrieden mit dem Preis und dem Service!",
    "customer_name": "Gertrud M., Wolfsburg",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 für weniger als ein Döner. Unglaublich günstig und funktioniert tadellos!",
    "customer_name": "Otto K., Fulda",
    "date": "2025-12-14",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sofortige E-Mail mit dem Key. Aktivierung in 5 Minuten erledigt! Sehr einfach.",
    "customer_name": "Lieselotte G., Celle",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Alles wie beschrieben. Echter Key, echte Lizenz. Hätte nur gerne eine PDF-Rechnung zum Ausdrucken gehabt.",
    "customer_name": "Hans A., Aschaffenburg",
    "date": "2025-12-13",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein alter Büro-PC läuft jetzt wieder mit einer legalen Lizenz. Endlich keine Warnmeldungen mehr!",
    "customer_name": "Ilse S., Marburg",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Kaufabwicklung war super einfach. Key kam sofort. Bin rundum zufrieden!",
    "customer_name": "Willi J., Schwäbisch Gmünd",
    "date": "2025-12-12",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für das Geld kann man wirklich nicht meckern. Windows funktioniert einwandfrei seit Wochen!",
    "customer_name": "Rosemarie L., Weimar",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Hab den Key meinem Vater geschenkt. Er ist happy! Musste ihm allerdings bei der Aktivierung helfen.",
    "customer_name": "Paul N., Friedrichshafen",
    "date": "2025-12-11",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 Home OEM zum unschlagbaren Preis. Läuft seit 2 Monaten ohne jedes Problem.",
    "customer_name": "Elfriede H., Speyer",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Der Lizenzschlüssel hat auf Anhieb funktioniert. Aktivierung war in 3 Minuten erledigt!",
    "customer_name": "Walter B., Passau",
    "date": "2025-12-10",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Seriöser Shop, schnelle Lieferung, funktionierender Key. Gebe gerne 5 Sterne!",
    "customer_name": "Margot V., Herten",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Mein Surface Pro läuft jetzt mit Windows 10. Gut! Nur bei der Installation gab es anfangs Probleme mit dem WLAN-Treiber.",
    "customer_name": "Herbert W., Emden",
    "date": "2025-12-09",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für den Preis gibt es absolut nichts zu meckern. Kaufe hier definitiv wieder!",
    "customer_name": "Agnes C., Kleve",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows-Key kam in Rekordzeit. Aktivierung war super einfach dank der Microsoft-Anleitung!",
    "customer_name": "Bruno F., Bad Homburg",
    "date": "2025-12-08",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab meinen PC neu aufgesetzt und brauchte eine Lizenz. Hier zum Top-Preis gefunden!",
    "customer_name": "Christa D., Pulheim",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Günstiger Key, Aktivierung hat nach dem 3. Versuch geklappt. Jetzt läuft alles stabil.",
    "customer_name": "Wilhelm M., Frechen",
    "date": "2025-12-07",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein neuer Mini-PC läuft mit Windows 10 Home. Alles funktioniert wie es soll!",
    "customer_name": "Johanna S., Bad Salzuflen",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Seit dem Kauf keine Probleme. Windows läuft stabil und schnell. Bin sehr zufrieden!",
    "customer_name": "Georg L., Dormagen",
    "date": "2025-12-06",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Echtes Microsoft Windows zum Bruchteil des Ladenpreises. Genau was ich gesucht habe!",
    "customer_name": "Anna-Maria K., Hattingen",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key ist echt und funktioniert dauerhaft. Abzug nur weil der Checkout-Prozess etwas umständlich war.",
    "customer_name": "Richard P., Viersen",
    "date": "2025-12-05",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für meine kleine Werkstatt einen günstigen PC eingerichtet. Key passt einwandfrei!",
    "customer_name": "Emma T., Langenfeld",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 für unter 10€. Das muss man erstmal woanders finden! Bin begeistert.",
    "customer_name": "Fritz R., Ahlen",
    "date": "2025-12-04",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Sofortige Lieferung, einfache Aktivierung. Genau so stelle ich mir einen guten Shop vor!",
    "customer_name": "Hildegard E., Norderstedt",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Support ist auch nach dem Kauf noch erreichbar. Hatte eine Nachfrage und bekam innerhalb von 2 Stunden Antwort.",
    "customer_name": "Josef G., Kerpen",
    "date": "2025-12-03",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein Laptop ist jetzt endlich legal aktiviert. Danke für den günstigen Key! Kein Wasserzeichen mehr.",
    "customer_name": "Martha A., Bocholt",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Hab schon mehrere Keys hier gekauft, für mich und für Bekannte. Alle funktionieren einwandfrei!",
    "customer_name": "Anton N., Gladbeck",
    "date": "2025-12-02",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows zum Sparpreis ohne Kompromisse. Seit November läuft alles stabil.",
    "customer_name": "Frieda J., Dinslaken",
    "date": "2025-12-01",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Der Key kam sofort und funktioniert einwandfrei. Ein Stern Abzug weil die Mail im Spam landete.",
    "customer_name": "Karl H., Euskirchen",
    "date": "2025-12-01",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein alter PC hat jetzt ein frisches Windows 10. Läuft wieder super schnell!",
    "customer_name": "Herta W., Erkrath",
    "date": "2025-11-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Günstiger Preis, schnelle Lieferung, einwandfreie Qualität. Besser geht's nicht!",
    "customer_name": "Ludwig B., Ibbenbüren",
    "date": "2025-11-30",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Für jeden der ein günstiges Windows sucht: Hier seid ihr an der richtigen Adresse!",
    "customer_name": "Else M., Hürth",
    "date": "2025-11-29",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Alles bestens. Key funktioniert, Windows läuft. Hätte mir nur eine ausführlichere FAQ gewünscht.",
    "customer_name": "Max V., Meerbusch",
    "date": "2025-11-29",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Mein IT-Freund war anfangs skeptisch, aber jetzt hat er auch hier gekauft. Beide zufrieden!",
    "customer_name": "Margarete S., Göppingen",
    "date": "2025-11-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows-Lizenz zum Mini-Preis. Funktioniert einwandfrei seit über 2 Monaten!",
    "customer_name": "Johann C., Delmenhorst",
    "date": "2025-11-28",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Schneller als jede Pizza-Lieferung. Key war innerhalb von 1 Minute in meinem Postfach!",
    "customer_name": "Helene D., Stolberg",
    "date": "2025-11-27",
    "verified": true
  },
  {
    "rating": 4,
    "content": "Für meinen Arbeitsrechner eine günstige Lizenz gebraucht. Hat funktioniert, aber die Aktivierung war etwas fummelig.",
    "customer_name": "Franz L., Homburg",
    "date": "2025-11-27",
    "verified": true
  },
  {
    "rating": 5,
    "content": "Windows 10 Home OEM zum absoluten Spitzenpreis. Kann nur Gutes berichten!",
    "customer_name": "Johanna P., Waiblingen",
    "date": "2025-11-26",
    "verified": true
  }
];
