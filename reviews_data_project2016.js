const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Spart mir Stunden an manueller Arbeit jede Woche. Läuft auch auf meinem etwas älteren Laptop flüssig. Habe es schon Kollegen empfohlen.",
    "customer_name": "Silke X. aus Schwabach",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke für den schnellen Service. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Die Reports sind Gold wert für Meetings mit der Geschäftsführung. Support hat mir kurz bei der Installation geholfen, top. Bester Deal im Netz.",
    "customer_name": "Uwe Z. aus Bonn",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Alles genau wie beschrieben. 10 von 10 Punkten.",
    "customer_name": "Birgit D. aus Waghäusel",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Ideal für die Planung großer Rollouts. Rechnung wurde korrekt ausgestellt. Sehr gut.",
    "customer_name": "Dennis Q. aus Buxtehude",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Verwende es für Migrationsprojekte, läuft stabil. Alles bestens.",
    "customer_name": "Melanie M. aus Potsdam",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Die Timeline-Ansicht ist super für Präsentationen. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Gerne wieder.",
    "customer_name": "Anja U. aus Neuburg an der Donau",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Installation war in 5 Minuten erledigt. Budgetplanung ist damit viel genauer als früher. Verkäufer hat schnell auf meine Frage reagiert. Guter Preis, gute Leistung.",
    "customer_name": "Silke B. aus Butzbach",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Mein Team ist viel organisierter seit wir es nutzen. Bin sehr happy.",
    "customer_name": "Uwe V. aus Saarbrücken",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Verdiente 5 Sterne.",
    "customer_name": "Barbara K. aus Zirndorf",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für mich die beste Project -Version. Exportfunktionen nach Excel sind sehr hilfreich. Planung von Gewerken läuft damit viel strukturierter. Code war sofort da und funktionierte direkt. Alles bestens.",
    "customer_name": "Torsten W. aus Lüdenscheid",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Die Berichte sind wichtig für die Bauherrenbesprechung. Daumen hoch.",
    "customer_name": "Christian G. aus Bad Säckingen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Ohne Project könnte ich meine Bauprojekte nicht managen. Key kam per Mail, keine Wartezeit. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Planung von Gewerken läuft damit viel strukturierter. Danke!",
    "customer_name": "Ingrid X. aus Ludwigshafen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Originale Lizenz, sofort aktiviert. Download direkt von MS, das schafft Vertrauen. Kritische Pfade lassen sich sofort erkennen. Alles genau wie beschrieben. Jederzeit wieder.",
    "customer_name": "Laura P. aus Oberhausen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle und saubere Abwicklung. Keine Cloud-Zwang, das ist für unsere Security wichtig. Download direkt von MS, das schafft Vertrauen. Super Service.",
    "customer_name": "Karin N. aus Seevetal",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Software.",
    "customer_name": "Daniel S. aus Bedburg",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wichtiges Werkzeug im Büro. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Die Timeline-Ansicht ist super für Präsentationen. Key kam per Mail, keine Wartezeit. 10 von 10 Punkten.",
    "customer_name": "Frank N. aus Weißenburg in Bayern",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Preis-Leistung ist hier unschlagbar. Alles genau wie beschrieben. Top!",
    "customer_name": "Dennis F. aus Tübingen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Schnittstellen zu SharePoint funktionieren. Ein echtes Profi-Tool.",
    "customer_name": "Leon C. aus Plettenberg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Hilft beim Tracking von Sprints und Meilensteinen. Gute Wahl für alle, die professionelle Funktionen brauchen. Aktivierung ging problemlos online/telefonisch. Die Reports sind Gold wert für Meetings mit der Geschäftsführung. Habe es schon Kollegen empfohlen.",
    "customer_name": "Fabian B. aus Wuppertal",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Hatte vorher eine Testversion, die Vollversion lohnt sich. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Vielen Dank.",
    "customer_name": "Johannes E. aus Neuwied",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Übersichtliche Darstellung von Abhängigkeiten. Installation war in 5 Minuten erledigt. Download direkt von MS, das schafft Vertrauen. Danke!",
    "customer_name": "Elisabeth E. aus Tübingen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Code kam binnen Minuten. Planung von Gewerken läuft damit viel strukturierter. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Hatte vorher eine Testversion, die Vollversion lohnt sich. Verzögerungen lassen sich schnell neu durchrechnen. Super Service.",
    "customer_name": "Sabine I. aus Waltrop",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Unverzichtbar für meine tägliche Arbeit. Die Einarbeitungszeit war kurz, da Office-Look. Die Features sind für den Preis unglaublich. Bester Deal im Netz.",
    "customer_name": "Petra B. aus Ansbach",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Ideal, um Arbeitsstunden und Material zu kalkulieren. Ohne Project könnte ich meine Bauprojekte nicht managen. Bin froh, diese Version noch gefunden zu haben. Perfekt.",
    "customer_name": "Jan O. aus Wesel",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Erstelle damit Wochenpläne für die Poliere. Aktivierung ging problemlos online/telefonisch. So macht Arbeit Spaß.",
    "customer_name": "Ralf G. aus Wegberg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Elisabeth S. aus Löhne",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Bug-Tracking Integration ist indirekt gut machbar. Rechnung wurde korrekt ausgestellt. Top Produkt.",
    "customer_name": "Melanie I. aus Bayreuth",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Habe es für die Firma gekauft, alle sind zufrieden. Bin sehr happy.",
    "customer_name": "Joachim L. aus Bremerhaven",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Support hat mir kurz bei der Installation geholfen, top. Support hat mir kurz bei der Installation geholfen, top. Nicht zögern, kaufen.",
    "customer_name": "Ingrid U. aus Grevenbroich",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich nutze Project schon seit Jahren. Mein Team ist viel organisierter seit wir es nutzen. 5 Sterne.",
    "customer_name": "Andreas Q. aus Witten",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Besser als die neuen Cloud-Versionen. Hilft beim Tracking von Sprints und Meilensteinen. Support hat mir kurz bei der Installation geholfen, top. Alles genau wie beschrieben. Die Reports sind Gold wert für Meetings mit der Geschäftsführung. Hat mir viel Stress erspart.",
    "customer_name": "Sven L. aus Lörrach",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Beste ist: Einmalzahlung, kein Abo. Super Integration mit anderen Office-Produkten. Aktivierung ging problemlos online/telefonisch. 5 Sterne.",
    "customer_name": "Werner O. aus Bad Salzuflen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert tadellos. Danke!",
    "customer_name": "Frank J. aus Plauen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Hatte vorher eine Testversion, die Vollversion lohnt sich. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Alles bestens.",
    "customer_name": "Fritz E. aus Kehl",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Wir managen damit unsere Marketing-Kampagnen. Einmal kaufen, ewig nutzen - so muss das sein. Einfach klasse.",
    "customer_name": "Johannes X. aus Ansbach",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke!",
    "customer_name": "Susanne I. aus Koblenz",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Jeden Cent wert. Perfekt für unsere Architekturbüro-Projekte. Installation war selbsterklärend. Einfach klasse.",
    "customer_name": "Julia W. aus Remscheid",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation easy.",
    "customer_name": "Nadine W. aus Schwäbisch Gmünd",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Bin wunschlos glücklich.",
    "customer_name": "Sebastian M. aus Kerpen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort. Danke!",
    "customer_name": "Jürgen I. aus Mainz",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Kompatibilität mit älteren Dateien ist gegeben. Die Einarbeitungszeit war kurz, da Office-Look. Reagiert schnell und stürzt nicht ab. Planung von Server-Wartungen klappt hervorragend. Bester Deal im Netz.",
    "customer_name": "Gabi B. aus Morsbach",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Planung von Gewerken läuft damit viel strukturierter. Code war sofort da und funktionierte direkt. Kann ich nur raten.",
    "customer_name": "Andreas R. aus Rüsselsheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Super Integration mit anderen Office-Produkten. Reagiert schnell und stürzt nicht ab. Seriöser Shop.",
    "customer_name": "Gerd Z. aus Fürth",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Budgetplanung ist damit viel genauer als früher. 5 Sterne.",
    "customer_name": "Niklas L. aus Bensheim",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich nutze Project schon seit Jahren. Die Reports sind Gold wert für Meetings mit der Geschäftsführung. 5 Sterne.",
    "customer_name": "Christa B. aus Idstein",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Unverzichtbar für meine tägliche Arbeit. Materialfluss und Personalplanung sind jetzt im Griff. Ein zufriedener Kunde.",
    "customer_name": "Marco B. aus Königswinter",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Ideal, um Arbeitsstunden und Material zu kalkulieren. Alles genau wie beschrieben. Ein echtes Profi-Tool.",
    "customer_name": "Dieter V. aus Nettetal",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Keine Probleme mit der Lizenzierung bisher. Keine Beanstandungen.",
    "customer_name": "Sven Y. aus Forchheim",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Projekt läuft.",
    "customer_name": "Julia N. aus Augsburg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Netzwerkpläne sind schnell erstellt und übersichtlich. Fristen werden jetzt zuverlässiger eingehalten. Rechnung wurde korrekt ausgestellt. Würde ich wieder kaufen.",
    "customer_name": "Michael B. aus Oberkirch",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Code kam binnen Minuten. Installation war selbsterklärend. Installation war selbsterklärend. Kann ich nur raten.",
    "customer_name": "Sarah G. aus Achern",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Alles genau wie beschrieben. Netzwerkpläne sind schnell erstellt und übersichtlich. Rechnung wurde korrekt ausgestellt. Top Produkt.",
    "customer_name": "Sven P. aus Eschborn",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich die Vollversion gekauft. Läuft auch auf meinem etwas älteren Laptop flüssig. Keine Beanstandungen.",
    "customer_name": "Simon T. aus Bayreuth",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Software läuft sehr stabil. Nutze es für die Planung unserer Software-Releases. Download direkt von MS, das schafft Vertrauen. Lohnt sich absolut.",
    "customer_name": "Mario T. aus Aalen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Endlich weg von den teuren monatlichen Abos. Die Features sind für den Preis unglaublich. Code war sofort da und funktionierte direkt. Super Service.",
    "customer_name": "Christa I. aus Ratingen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Verzögerungen lassen sich schnell neu durchrechnen. Installation war selbsterklärend. Würde ich wieder kaufen.",
    "customer_name": "Christina P. aus Dresden",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Einmal kaufen, ewig nutzen - so muss das sein. Guter Preis, gute Leistung.",
    "customer_name": "Christa X. aus Rheine",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Kollaboration im Team hat sich verbessert. Download direkt von MS, das schafft Vertrauen. Jederzeit wieder.",
    "customer_name": "Andrea L. aus Ratingen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Geschäft.",
    "customer_name": "Matthias J. aus Bruchköbel",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Genau das, was ich brauchte. Ideal für die Planung großer Rollouts. Weiter so.",
    "customer_name": "Ralf W. aus Waldkirch",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für mich die beste Project -Version. Reagiert schnell und stürzt nicht ab. Endlich weg von den teuren monatlichen Abos. Aktivierung ging problemlos online/telefonisch. Aktivierung ging problemlos online/telefonisch. Ein zufriedener Kunde.",
    "customer_name": "Julia U. aus Brandenburg an der Havel",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Verzögerungen lassen sich schnell neu durchrechnen. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Verkäufer hat schnell auf meine Frage reagiert. 5 Sterne.",
    "customer_name": "Gabi C. aus Rostock",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Habe es für die Firma gekauft, alle sind zufrieden. Bin froh, diese Version noch gefunden zu haben. Rechnung wurde korrekt ausgestellt. Habe es schon Kollegen empfohlen.",
    "customer_name": "Fritz X. aus Singen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Beste ist: Einmalzahlung, kein Abo. Gute Wahl für alle, die professionelle Funktionen brauchen. Ein zufriedener Kunde.",
    "customer_name": "Dieter F. aus Plettenberg",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Die Fortschrittsverfolgung ist für Baustellen essentiell. Bin froh, diese Version noch gefunden zu haben. Gute Wahl für alle, die professionelle Funktionen brauchen. Jederzeit wieder.",
    "customer_name": "Gerd A. aus Pfungstadt",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Unverzichtbar für meine tägliche Arbeit. Wir nutzen es für Eventplanung, klappt super. Ideal, um Arbeitsstunden und Material zu kalkulieren. Die Features sind für den Preis unglaublich. Alles bestens.",
    "customer_name": "Simon F. aus Schwäbisch Hall",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Originale Lizenz, sofort aktiviert. Habe es für die Firma gekauft, alle sind zufrieden. Behalte damit den Überblick über alle Subunternehmer. Code war sofort da und funktionierte direkt. Übersichtliche Darstellung von Abhängigkeiten. Einfach klasse.",
    "customer_name": "Ute N. aus Wegberg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Wir managen damit unsere Marketing-Kampagnen. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Läuft auch auf meinem etwas älteren Laptop flüssig. Personalressourcen werden effizienter eingesetzt. Weiter so.",
    "customer_name": "Karin P. aus Weil am Rhein",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann ich nur empfehlen. Erleichtert die Koordination von Lieferterminen enorm. Top Produkt.",
    "customer_name": "Bettina W. aus Leinfelden-Echterdingen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein solides Stück Software. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Gerne wieder.",
    "customer_name": "Hans N. aus Lampertheim",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich die Vollversion gekauft. Kritische Pfade lassen sich sofort erkennen. Alles genau wie beschrieben. Bin sehr happy.",
    "customer_name": "Dieter N. aus Butzbach",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für mich die beste Project -Version. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Habe es einem Kollegen empfohlen, der auch zufrieden ist. 5 Sterne.",
    "customer_name": "Torsten N. aus Velbert",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Perfekt für unsere Architekturbüro-Projekte. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Die Features sind für den Preis unglaublich. 5 Sterne.",
    "customer_name": "Klaus V. aus Odenthal",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Unverzichtbar für meine tägliche Arbeit. Hilft mir sehr bei der Ressourcenplanung auf der Baustelle. Verkäufer hat schnell auf meine Frage reagiert. Kaufempfehlung!",
    "customer_name": "Frank C. aus Weiterstadt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Kaufabwicklung. Alles genau wie beschrieben. Einfach klasse.",
    "customer_name": "Frank F. aus Lauf",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Planung von Gewerken läuft damit viel strukturierter. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Planung von Gewerken läuft damit viel strukturierter. Daumen hoch.",
    "customer_name": "Lukas N. aus Nürnberg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Software läuft sehr stabil. Wir managen damit unsere Marketing-Kampagnen. Rechnung wurde korrekt ausgestellt. Seriöser Shop.",
    "customer_name": "Sabine B. aus Bayreuth",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis/Leistung top.",
    "customer_name": "Alexander X. aus Troisdorf",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Die Features sind für den Preis unglaublich. Die 2016er Version ist schön schlank und schnell. Alles genau wie beschrieben. Läuft auch auf meinem etwas älteren Laptop flüssig. Weiter so.",
    "customer_name": "Heinz V. aus Vreden",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Kollaboration im Team hat sich verbessert. Verkäufer hat schnell auf meine Frage reagiert. Gerne wieder.",
    "customer_name": "Heike E. aus Heidenheim",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Mail. Top.",
    "customer_name": "Katharina A. aus Plauen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Kritische Pfade lassen sich sofort erkennen. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Reagiert schnell und stürzt nicht ab. Hat mir viel Stress erspart.",
    "customer_name": "Bernd A. aus Iserlohn",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Software läuft sehr stabil. Endlich weg von den teuren monatlichen Abos. Bin froh, diese Version noch gefunden zu haben. Top Produkt.",
    "customer_name": "Markus S. aus Bad Oeynhausen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Nutze es für die Planung unserer Software-Releases. Vielen Dank.",
    "customer_name": "Leon D. aus Warendorf",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Die Timeline-Ansicht ist super für Präsentationen. Die 2016er Version ist schön schlank und schnell. Download direkt von MS, das schafft Vertrauen. Die Einarbeitungszeit war kurz, da Office-Look. Klare Kaufempfehlung.",
    "customer_name": "Gabriele H. aus Wuppertal",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Code kam binnen Minuten. Kollaboration im Team hat sich verbessert. Hilft mir sehr bei der Ressourcenplanung auf der Baustelle. Hatte vorher eine Testversion, die Vollversion lohnt sich. Ausgezeichnet.",
    "customer_name": "Stefan B. aus Aachen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Deal.",
    "customer_name": "Andrea W. aus Herscheid",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kauf hat sich gelohnt. Erstelle damit Wochenpläne für die Poliere. Wir managen damit unsere Marketing-Kampagnen. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Ein zufriedener Kunde.",
    "customer_name": "Barbara I. aus Regensburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles ok.",
    "customer_name": "Jürgen C. aus Bremen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Die Timeline-Ansicht ist super für Präsentationen. Super Integration mit anderen Office-Produkten. Key kam per Mail, keine Wartezeit. Strategische Planung ist damit viel einfacher. Kaufempfehlung!",
    "customer_name": "Ingrid V. aus Oberursel",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Download direkt von MS, das schafft Vertrauen. Lohnt sich absolut.",
    "customer_name": "Karin B. aus Laatzen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Die Gantt-Diagramme sind super übersichtlich für Kunden. Key kam per Mail, keine Wartezeit. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Vielen Dank.",
    "customer_name": "Bernd D. aus Essen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Die Einarbeitungszeit war kurz, da Office-Look. Hatte vorher eine Testversion, die Vollversion lohnt sich. Hat mir viel Stress erspart.",
    "customer_name": "Christina G. aus Buxtehude",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Genau das, was ich brauchte. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Ideal für die Planung großer Rollouts. Key kam per Mail, keine Wartezeit. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Weiter so.",
    "customer_name": "Jörg K. aus Worms",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Die Meilensteine sind klar definiert und sichtbar. Kritische Pfade lassen sich sofort erkennen. Key kam per Mail, keine Wartezeit. Kritische Pfade lassen sich sofort erkennen. So macht Arbeit Spaß.",
    "customer_name": "Doris B. aus Germering",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Mein Team ist viel organisierter seit wir es nutzen. Planung von Gewerken läuft damit viel strukturierter. Code war sofort da und funktionierte direkt. Preis-Leistung ist hier unschlagbar. Klare Kaufempfehlung.",
    "customer_name": "Susanne J. aus Sankt Augustin",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation war überraschend einfach. Endlich weg von den teuren monatlichen Abos. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Key kam per Mail, keine Wartezeit. Gut investiertes Geld.",
    "customer_name": "Timo B. aus Stralsund",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Download direkt von MS, das schafft Vertrauen. Wir managen damit unsere Marketing-Kampagnen. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Kann ich nur raten.",
    "customer_name": "Renate I. aus Ingolstadt",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Keine Cloud-Zwang, das ist für unsere Security wichtig. Endlich weg von den teuren monatlichen Abos. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Top Produkt.",
    "customer_name": "Stefanie G. aus Heppenheim",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Key kam per Mail, keine Wartezeit. Die Timeline-Ansicht ist super für Präsentationen. Läuft auch auf meinem etwas älteren Laptop flüssig. Weiter so.",
    "customer_name": "Tobias T. aus Landshut",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Die Timeline-Ansicht ist super für Präsentationen. Einfach klasse.",
    "customer_name": "Paul U. aus Biberach",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Gute Wahl für alle, die professionelle Funktionen brauchen. Perfekt für unsere Architekturbüro-Projekte. Download direkt von MS, das schafft Vertrauen. Hatte vorher eine Testversion, die Vollversion lohnt sich. Ein zufriedener Kunde.",
    "customer_name": "Doris I. aus Ahaus",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Verkäufer hat schnell auf meine Frage reagiert. Schnittstellen zu SharePoint funktionieren. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Alles genau wie beschrieben. Ein echtes Profi-Tool.",
    "customer_name": "Lukas F. aus Rheinstetten",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Software läuft sehr stabil. Die Features sind für den Preis unglaublich. Rechnung wurde korrekt ausgestellt. Bin froh, diese Version noch gefunden zu haben. Seriöser Shop.",
    "customer_name": "Johannes Y. aus Rheinberg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke für den schnellen Service. Erleichtert die Koordination von Lieferterminen enorm. Alles richtig gemacht.",
    "customer_name": "Renate K. aus Bergheim",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Ressourcenzuordnung bei Entwicklern ist damit einfach. Planung von Gewerken läuft damit viel strukturierter. Support hat mir kurz bei der Installation geholfen, top. Verwende es für Migrationsprojekte, läuft stabil. Kann ich nur raten.",
    "customer_name": "Susanne T. aus Unterhaching",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber bin voll überzeugt. Hilft beim Tracking von Sprints und Meilensteinen. Übersichtliche Darstellung von Abhängigkeiten. Download direkt von MS, das schafft Vertrauen. Gerne wieder.",
    "customer_name": "Ingrid A. aus Meerbusch",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Personalressourcen werden effizienter eingesetzt. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Läuft auch auf meinem etwas älteren Laptop flüssig. Endlich weg von den teuren monatlichen Abos. Ein zufriedener Kunde.",
    "customer_name": "Lisa U. aus Wiesbaden",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Die Timeline-Ansicht ist super für Präsentationen. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Die Features sind für den Preis unglaublich. Weiter so.",
    "customer_name": "Oliver F. aus Dormagen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Übersichtliche Darstellung von Abhängigkeiten. Unverzichtbar für die Bauphasenplanung. Alles genau wie beschrieben. Bin sehr happy.",
    "customer_name": "Birgit Q. aus Görlitz",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Support ist klasse.",
    "customer_name": "Elke L. aus Saarbrücken",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Die Reports sind Gold wert für Meetings mit der Geschäftsführung. Installation war selbsterklärend. Alles bestens.",
    "customer_name": "Ingrid H. aus Ambreg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Seriöser Anbieter. Top.",
    "customer_name": "Susanne E. aus Stendal",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top für Profis. Code war sofort da und funktionierte direkt. Sehr gut.",
    "customer_name": "Martin Y. aus Wegberg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top für Profis. Habe es für die Firma gekauft, alle sind zufrieden. Gut investiertes Geld.",
    "customer_name": "Gerd W. aus Waldkirch",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Verzögerungen lassen sich schnell neu durchrechnen. Netzwerkpläne sind schnell erstellt und übersichtlich. Die Features sind für den Preis unglaublich. Bin wunschlos glücklich.",
    "customer_name": "Katharina L. aus Paderborn",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wichtiges Werkzeug im Büro. Bin froh, diese Version noch gefunden zu haben. Alles richtig gemacht.",
    "customer_name": "Marion L. aus Flörsheim",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Gute Übersicht über alle laufenden IT-Tickets und Projekte. Super Service.",
    "customer_name": "Wolfgang A. aus Wolfenbüttel",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle und saubere Abwicklung. Personalressourcen werden effizienter eingesetzt. Danke!",
    "customer_name": "Katja U. aus Offenburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Ohne Project könnte ich meine Bauprojekte nicht managen. Top!",
    "customer_name": "Mario B. aus Oldenburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für mich die beste Project -Version. Perfekt für unsere Architekturbüro-Projekte. Verzögerungen lassen sich schnell neu durchrechnen. Einmal kaufen, ewig nutzen - so muss das sein. Lohnt sich absolut.",
    "customer_name": "Hans G. aus Mönchengladbach",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber bin voll überzeugt. Wir managen damit unsere Marketing-Kampagnen. Gute Wahl für alle, die professionelle Funktionen brauchen. Keine Beanstandungen.",
    "customer_name": "Florian L. aus Dreieich",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Stefan M. aus Kelkheim",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Die 2016er Version ist schön schlank und schnell. Ohne Project könnte ich meine Bauprojekte nicht managen. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Daumen hoch.",
    "customer_name": "Rainer T. aus Herzogenaurach",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle und saubere Abwicklung. Die Features sind für den Preis unglaublich. Passt perfekt in unsere IT-Infrastruktur. Hatte vorher eine Testversion, die Vollversion lohnt sich. Key kam per Mail, keine Wartezeit. Weiter so.",
    "customer_name": "Karl K. aus Königswinter",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top für Profis. Wir managen damit unsere Marketing-Kampagnen. Personalressourcen werden effizienter eingesetzt. Verkäufer hat schnell auf meine Frage reagiert. 10 von 10 Punkten.",
    "customer_name": "Tobias R. aus München",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich nutze Project schon seit Jahren. Kritische Pfade lassen sich sofort erkennen. Fristen werden jetzt zuverlässiger eingehalten. Installation war selbsterklärend. Sehr gut.",
    "customer_name": "Felix O. aus Rheinfelden",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Kaufabwicklung. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Alles genau wie beschrieben. Keine Beanstandungen.",
    "customer_name": "Jörg J. aus Gummersbach",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Genau das, was ich brauchte. Perfekt für unsere Architekturbüro-Projekte. Ideal für die Planung großer Rollouts. Reagiert schnell und stürzt nicht ab. Erleichtert die Koordination von Lieferterminen enorm. Ein zufriedener Kunde.",
    "customer_name": "Alexander X. aus Wangen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell und einfach.",
    "customer_name": "Daniel E. aus Zwickau",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Materialfluss und Personalplanung sind jetzt im Griff. Die Features sind für den Preis unglaublich. Perfekt.",
    "customer_name": "Doris W. aus Euskirchen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft einwandfrei auf Windows 10. Wir nutzen es für Eventplanung, klappt super. Verwende es für Migrationsprojekte, läuft stabil. Einmal kaufen, ewig nutzen - so muss das sein. Einfach klasse.",
    "customer_name": "Helga E. aus Waldkraiburg",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wichtiges Werkzeug im Büro. Fristen werden jetzt zuverlässiger eingehalten. Rechnung wurde korrekt ausgestellt. Seriöser Shop.",
    "customer_name": "Leon O. aus Heinsberg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Fristen werden jetzt zuverlässiger eingehalten. Sehr gut.",
    "customer_name": "Petra H. aus Germersheim",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Support ist klasse. Danke!",
    "customer_name": "Sarah A. aus Rüsselsheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert tadellos.",
    "customer_name": "Ursula Z. aus Kempten",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Geschäft. Danke!",
    "customer_name": "Andreas T. aus Karlsruhe",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles super.",
    "customer_name": "Nicole S. aus Bad Homburg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann ich nur empfehlen. Die Berichte sind wichtig für die Bauherrenbesprechung. Installation war in 5 Minuten erledigt. Läuft auch auf meinem etwas älteren Laptop flüssig. Keine Beanstandungen.",
    "customer_name": "Florian P. aus Bonn",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Die Fortschrittsverfolgung ist für Baustellen essentiell. Bin froh, diese Version noch gefunden zu haben. Key kam per Mail, keine Wartezeit. Ideal, um Arbeitsstunden und Material zu kalkulieren. Hat mir viel Stress erspart.",
    "customer_name": "Florian E. aus Neumünster",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Programm.",
    "customer_name": "Petra H. aus München",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Verwende es für Migrationsprojekte, läuft stabil. Guter Preis, gute Leistung.",
    "customer_name": "Oliver X. aus Nagold",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lizenz funktioniert einwandfrei. Budgetplanung ist damit viel genauer als früher. Übersichtliche Darstellung von Abhängigkeiten. Code war sofort da und funktionierte direkt. Alles richtig gemacht.",
    "customer_name": "Hannelore F. aus Wangen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Alles genau wie beschrieben. Verkäufer hat schnell auf meine Frage reagiert. Top Produkt.",
    "customer_name": "Heike E. aus Viernheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kauf hat sich gelohnt. Erleichtert die Koordination von Lieferterminen enorm. Exportfunktionen nach Excel sind sehr hilfreich. Bin froh, diese Version noch gefunden zu haben. Jederzeit wieder.",
    "customer_name": "Fabian K. aus Dachau",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Beste ist: Einmalzahlung, kein Abo. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Key kam per Mail, keine Wartezeit. Sehr gut.",
    "customer_name": "Dennis M. aus Stuttgart",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Code kam binnen Minuten. Behalte damit den Überblick über alle Subunternehmer. Bin wunschlos glücklich.",
    "customer_name": "Michael F. aus Bocholt",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Strategische Planung ist damit viel einfacher. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Installation war selbsterklärend. Danke!",
    "customer_name": "Elisabeth B. aus Hofheim",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Habe es für die Firma gekauft, alle sind zufrieden. Ein zufriedener Kunde.",
    "customer_name": "Marco W. aus Aurich",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Reagiert schnell und stürzt nicht ab. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Guter Preis, gute Leistung.",
    "customer_name": "Laura Z. aus Monheim am Rhein",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Installation war selbsterklärend. Bin froh, diese Version noch gefunden zu haben. Die Meilensteine sind klar definiert und sichtbar. Super Service.",
    "customer_name": "Johannes O. aus Offenburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Ohne Project könnte ich meine Bauprojekte nicht managen. Strategische Planung ist damit viel einfacher. Hatte vorher eine Testversion, die Vollversion lohnt sich. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Nicht zögern, kaufen.",
    "customer_name": "Hans N. aus Herten",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kauf hat sich gelohnt. Support hat mir kurz bei der Installation geholfen, top. Materialfluss und Personalplanung sind jetzt im Griff. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Alles genau wie beschrieben. Klare Kaufempfehlung.",
    "customer_name": "Lisa U. aus Kronberg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Bin froh, diese Version noch gefunden zu haben. Die Einarbeitungszeit war kurz, da Office-Look. Code war sofort da und funktionierte direkt. Bin sehr happy.",
    "customer_name": "Bernd F. aus Nettetal",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Die Gantt-Diagramme sind super übersichtlich für Kunden. Ein zufriedener Kunde.",
    "customer_name": "Tim Y. aus Schramberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Bug-Tracking Integration ist indirekt gut machbar. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Guter Preis, gute Leistung.",
    "customer_name": "Tobias E. aus Waltrop",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wichtiges Werkzeug im Büro. Viel besser als Excel für komplexe Aufgaben. Aktivierung ging problemlos online/telefonisch. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Hat mir viel Stress erspart.",
    "customer_name": "Dieter T. aus Ahaus",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Ideal, um Arbeitsstunden und Material zu kalkulieren. Hatte vorher eine Testversion, die Vollversion lohnt sich. Gut investiertes Geld.",
    "customer_name": "Sarah G. aus Velbert",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Die Fortschrittsverfolgung ist für Baustellen essentiell. Die Features sind für den Preis unglaublich. So macht Arbeit Spaß.",
    "customer_name": "Matthias F. aus Bad Vilbel",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Seriöser Anbieter.",
    "customer_name": "Sven D. aus Troisdorf",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Originale Lizenz, sofort aktiviert. Die Timeline-Ansicht ist super für Präsentationen. Keine Probleme mit der Lizenzierung bisher. Top Produkt.",
    "customer_name": "Martina D. aus Erkrath",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lizenz funktioniert einwandfrei. Die Features sind für den Preis unglaublich. Schnittstellen zu SharePoint funktionieren. Code war sofort da und funktionierte direkt. Sehr gut.",
    "customer_name": "Matthias H. aus Worms",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke für den schnellen Service. Die Einarbeitungszeit war kurz, da Office-Look. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Einfach klasse.",
    "customer_name": "Stefan Y. aus Hürth",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Unverzichtbar. Bin zufrieden.",
    "customer_name": "Julian S. aus Krefeld",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich nutze Project schon seit Jahren. Strategische Planung ist damit viel einfacher. Keine Probleme mit der Lizenzierung bisher. Weiter so.",
    "customer_name": "Anna M. aus Schwabach",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Gute Übersicht über alle laufenden IT-Tickets und Projekte. Läuft auch auf meinem etwas älteren Laptop flüssig. Code war sofort da und funktionierte direkt. Sehr gut.",
    "customer_name": "Christian T. aus Traunstein",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Immer wieder.",
    "customer_name": "Daniel W. aus Freiberg",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Installation war selbsterklärend. Rechnung wurde korrekt ausgestellt. Läuft auch auf meinem etwas älteren Laptop flüssig. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Gerne wieder.",
    "customer_name": "Karin T. aus Dormagen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Ohne Project könnte ich meine Bauprojekte nicht managen. Installation war in 5 Minuten erledigt. Code war sofort da und funktionierte direkt. Die Meilensteine sind klar definiert und sichtbar. Vielen Dank.",
    "customer_name": "Maximilian T. aus Wesseling",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Unverzichtbar für die Bauphasenplanung. Endlich weg von den teuren monatlichen Abos. Aktivierung ging problemlos online/telefonisch. Kann ich nur raten.",
    "customer_name": "Mario H. aus Marl",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Besser als die neuen Cloud-Versionen. Verzögerungen lassen sich schnell neu durchrechnen. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Bester Deal im Netz.",
    "customer_name": "Simon Z. aus Rheinberg",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Kompatibilität mit älteren Dateien ist gegeben. Hatte vorher eine Testversion, die Vollversion lohnt sich. Bin sehr happy.",
    "customer_name": "Hannelore G. aus Emden",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Jeden Cent wert. Viel besser als Excel für komplexe Aufgaben. Die Fortschrittsverfolgung ist für Baustellen essentiell. Alles genau wie beschrieben. Mein Team ist viel organisierter seit wir es nutzen. Bin sehr happy.",
    "customer_name": "Paul O. aus Kelheim",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle und saubere Abwicklung. Wir managen damit unsere Marketing-Kampagnen. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Bin froh, diese Version noch gefunden zu haben. So macht Arbeit Spaß.",
    "customer_name": "Bettina F. aus Hamburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Service.",
    "customer_name": "Sven L. aus Kleve",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Bug-Tracking Integration ist indirekt gut machbar. Lohnt sich absolut.",
    "customer_name": "Martin W. aus Lingen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber bin voll überzeugt. Kollaboration im Team hat sich verbessert. Seriöser Shop.",
    "customer_name": "Gerd Q. aus Ahlen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Netzwerkpläne sind schnell erstellt und übersichtlich. Viel besser als Excel für komplexe Aufgaben. Key kam per Mail, keine Wartezeit. Gerne wieder.",
    "customer_name": "Bettina P. aus Böblingen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein solides Stück Software. Kritische Pfade lassen sich sofort erkennen. Support hat mir kurz bei der Installation geholfen, top. Gut investiertes Geld.",
    "customer_name": "Klaus M. aus Darmstadt",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Habe es schon Kollegen empfohlen.",
    "customer_name": "Katja F. aus Oranienburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Beste ist: Einmalzahlung, kein Abo. Personalressourcen werden effizienter eingesetzt. Läuft auch auf meinem etwas älteren Laptop flüssig. Nicht zögern, kaufen.",
    "customer_name": "David M. aus Hof",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mächtiges Tool.",
    "customer_name": "Silke V. aus Warendorf",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Wir nutzen es für Eventplanung, klappt super. Einmal kaufen, ewig nutzen - so muss das sein. Hat mir viel Stress erspart.",
    "customer_name": "Florian K. aus Ludwigshafen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Die Timeline-Ansicht ist super für Präsentationen. Läuft auch auf meinem etwas älteren Laptop flüssig. Daumen hoch.",
    "customer_name": "Susanne H. aus Erftstadt",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann ich nur empfehlen. Die Einarbeitungszeit war kurz, da Office-Look. Rechnung wurde korrekt ausgestellt. Danke!",
    "customer_name": "Nicole S. aus Offenbach",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lizenz funktioniert einwandfrei. Aktivierung ging problemlos online/telefonisch. Kaufempfehlung!",
    "customer_name": "Petra A. aus Lübeck",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation war überraschend einfach. Exportfunktionen nach Excel sind sehr hilfreich. Planung von Server-Wartungen klappt hervorragend. Keine Probleme mit der Lizenzierung bisher. Perfekt.",
    "customer_name": "Laura P. aus Aurich",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann ich nur empfehlen. Budgetplanung ist damit viel genauer als früher. Gute Wahl für alle, die professionelle Funktionen brauchen. Guter Preis, gute Leistung.",
    "customer_name": "Lisa J. aus Bingen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Ersatz für mein altes Programm. Bin froh, diese Version noch gefunden zu haben. Code war sofort da und funktionierte direkt. Kaufempfehlung!",
    "customer_name": "Martina O. aus Freising",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Klasse für die Kostenkontrolle bei großen Bauvorhaben. Weiter so.",
    "customer_name": "Heike S. aus Heidenheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Endlich weg von den teuren monatlichen Abos. Super Integration mit anderen Office-Produkten. Hatte vorher eine Testversion, die Vollversion lohnt sich. Keine Beanstandungen.",
    "customer_name": "Sandra R. aus Achern",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Blitzschneller Mail-Versand. Top.",
    "customer_name": "Manuela W. aus Sinsheim",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Behalte damit den Überblick über alle Subunternehmer. Exportfunktionen nach Excel sind sehr hilfreich. Download direkt von MS, das schafft Vertrauen. Klare Kaufempfehlung.",
    "customer_name": "Werner Y. aus Seligenstadt",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Planung von Server-Wartungen klappt hervorragend. Seriöser Shop.",
    "customer_name": "Manuela R. aus Hilden",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Verzögerungen lassen sich schnell neu durchrechnen. Hilft mir sehr bei der Ressourcenplanung auf der Baustelle. Alles genau wie beschrieben. Seriöser Shop.",
    "customer_name": "Torsten N. aus Eschborn",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Läuft auch auf meinem etwas älteren Laptop flüssig. Support hat mir kurz bei der Installation geholfen, top. 5 Sterne.",
    "customer_name": "Angelika Q. aus Elsdorf",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Lukas Y. aus Gladbeck",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Rechnung wurde korrekt ausgestellt. Verkäufer hat schnell auf meine Frage reagiert. Bin wunschlos glücklich.",
    "customer_name": "Renate H. aus Monheim am Rhein",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Besser als die neuen Cloud-Versionen. Verzögerungen lassen sich schnell neu durchrechnen. Sehr gut.",
    "customer_name": "Elke V. aus Marienheide",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Jeden Cent wert. Key kam per Mail, keine Wartezeit. Vielen Dank.",
    "customer_name": "Jürgen O. aus Worms",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Übersichtliche Darstellung von Abhängigkeiten. Fristen werden jetzt zuverlässiger eingehalten. Habe es einem Kollegen empfohlen, der auch zufrieden ist. 5 Sterne.",
    "customer_name": "Tobias Q. aus Alsdorf",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Verzögerungen lassen sich schnell neu durchrechnen. Läuft auch auf meinem etwas älteren Laptop flüssig. Guter Preis, gute Leistung.",
    "customer_name": "Dennis D. aus Elmshorn",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Erstelle damit Wochenpläne für die Poliere. So macht Arbeit Spaß.",
    "customer_name": "Markus Q. aus Emden",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Lizenz.",
    "customer_name": "Doris U. aus Bad Kreuznach",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Spart mir Stunden an manueller Arbeit jede Woche. Installation war selbsterklärend. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Die Einarbeitungszeit war kurz, da Office-Look. Ausgezeichnet.",
    "customer_name": "Karin B. aus Bergheim",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Verkäufer hat schnell auf meine Frage reagiert. Die Features sind für den Preis unglaublich. Keine Probleme mit der Lizenzierung bisher. Danke!",
    "customer_name": "Kerstin T. aus Schwandorf",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Rechnung wurde korrekt ausgestellt. Netzwerkpläne sind schnell erstellt und übersichtlich. Hatte vorher eine Testversion, die Vollversion lohnt sich. Hatte vorher eine Testversion, die Vollversion lohnt sich. Habe es schon Kollegen empfohlen.",
    "customer_name": "Jan F. aus Haar",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kauf hat sich gelohnt. Keine Probleme mit der Lizenzierung bisher. Alles bestens.",
    "customer_name": "Maximilian Y. aus Ludwigshafen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein solides Stück Software. Code war sofort da und funktionierte direkt. Key kam per Mail, keine Wartezeit. 5 Sterne.",
    "customer_name": "Nadine N. aus Ottobrunn",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Software läuft sehr stabil. Die Meilensteine sind klar definiert und sichtbar. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Ideal, um Arbeitsstunden und Material zu kalkulieren. Ein zufriedener Kunde.",
    "customer_name": "Melanie K. aus Waldkraiburg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein solides Stück Software. Ohne Project könnte ich meine Bauprojekte nicht managen. Rechnung wurde korrekt ausgestellt. Habe es schon Kollegen empfohlen.",
    "customer_name": "Anna F. aus Weilheim in Oberbayern",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Exportfunktionen nach Excel sind sehr hilfreich. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Mein Team ist viel organisierter seit wir es nutzen. Gut investiertes Geld.",
    "customer_name": "Doris O. aus Forchheim",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Kaufabwicklung. Support hat mir kurz bei der Installation geholfen, top. Download direkt von MS, das schafft Vertrauen. Danke!",
    "customer_name": "Frank Z. aus Müllheim",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Key. Bin zufrieden.",
    "customer_name": "Bernd L. aus Rheinberg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann nicht klagen.",
    "customer_name": "Fritz Y. aus Bingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Habe es für die Firma gekauft, alle sind zufrieden. Installation war selbsterklärend. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Exportfunktionen nach Excel sind sehr hilfreich. Vielen Dank.",
    "customer_name": "Christa G. aus Wesel",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Kaufabwicklung. Hilft mir sehr bei der Ressourcenplanung auf der Baustelle. Super Service.",
    "customer_name": "Klaus M. aus Duisburg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top für Profis. Exportfunktionen nach Excel sind sehr hilfreich. Download direkt von MS, das schafft Vertrauen. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Ausgezeichnet.",
    "customer_name": "Timo Y. aus Traunreut",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Installation war selbsterklärend. Kaufempfehlung!",
    "customer_name": "Uwe C. aus Fulda",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle und saubere Abwicklung. Nutze es für die Planung unserer Software-Releases. Jederzeit wieder.",
    "customer_name": "Elke E. aus Waldshut-Tiengen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein solides Stück Software. Kritische Pfade lassen sich sofort erkennen. Alles richtig gemacht.",
    "customer_name": "Gerd J. aus Jüchen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Verwende es für Migrationsprojekte, läuft stabil. Rechnung wurde korrekt ausgestellt. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Super Service.",
    "customer_name": "Rainer M. aus Stutensee",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort an. Planung von Server-Wartungen klappt hervorragend. Key kam per Mail, keine Wartezeit. Ausgezeichnet.",
    "customer_name": "Martin J. aus Alzey",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Unverzichtbar für meine tägliche Arbeit. Wir managen damit unsere Marketing-Kampagnen. Perfekt.",
    "customer_name": "Timo B. aus Worms",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Preis-Leistung ist hier unschlagbar. Läuft auch auf meinem etwas älteren Laptop flüssig. Bester Deal im Netz.",
    "customer_name": "Hannelore Z. aus Bornheim",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Programm. Danke!",
    "customer_name": "Barbara I. aus Siegburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Aktivierung ging problemlos online/telefonisch. Mein Team ist viel organisierter seit wir es nutzen. Gute Wahl für alle, die professionelle Funktionen brauchen. Aktivierung ging problemlos online/telefonisch. Bin sehr happy.",
    "customer_name": "Patrick Y. aus Neuwied",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Mein Team ist viel organisierter seit wir es nutzen. Die Features sind für den Preis unglaublich. Weiter so.",
    "customer_name": "Doris J. aus Bühl",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Ohne Project könnte ich meine Bauprojekte nicht managen. Alles richtig gemacht.",
    "customer_name": "Laura M. aus Waldshut-Tiengen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es für ein neues Großprojekt angeschafft. Mein Team ist viel organisierter seit wir es nutzen. Bester Deal im Netz.",
    "customer_name": "Fabian M. aus Pinneberg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das beste Tool für Projektmanagement. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Danke!",
    "customer_name": "Elisabeth T. aus Tönisvorst",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Gute Übersicht über alle laufenden IT-Tickets und Projekte. Perfekt.",
    "customer_name": "Leon J. aus Ludwigshafen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gern wieder. Bin zufrieden.",
    "customer_name": "Matthias T. aus Neuwied",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich nutze Project schon seit Jahren. Ideal, um Arbeitsstunden und Material zu kalkulieren. Alles bestens.",
    "customer_name": "Torsten K. aus Schweinfurt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Kaufabwicklung. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Ein zufriedener Kunde.",
    "customer_name": "Anna D. aus Lübeck",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Jeden Cent wert. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Exportfunktionen nach Excel sind sehr hilfreich. Die Features sind für den Preis unglaublich. Die Gantt-Diagramme sind super übersichtlich für Kunden. Perfekt.",
    "customer_name": "Andreas J. aus Bietigheim-Bissingen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke für den schnellen Service. Wir managen damit unsere Marketing-Kampagnen. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Ausgezeichnet.",
    "customer_name": "Elke Q. aus Gladbeck",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für mich die beste Project -Version. Key kam per Mail, keine Wartezeit. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Würde ich wieder kaufen.",
    "customer_name": "Timo H. aus Schwäbisch Hall",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke für den schnellen Service. Rechnung wurde korrekt ausgestellt. Die Fortschrittsverfolgung ist für Baustellen essentiell. Keine Probleme mit der Lizenzierung bisher. Aktivierung ging problemlos online/telefonisch. Jederzeit wieder.",
    "customer_name": "Monika P. aus Hückelhoven",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation war überraschend einfach. Kompatibilität mit älteren Dateien ist gegeben. Perfekt.",
    "customer_name": "Bettina H. aus Viersen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Projektmanager. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Keine Beanstandungen.",
    "customer_name": "Werner B. aus Ibbenbüren",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber bin voll überzeugt. Strategische Planung ist damit viel einfacher. Exportfunktionen nach Excel sind sehr hilfreich. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Die Timeline-Ansicht ist super für Präsentationen. Kann ich nur raten.",
    "customer_name": "Hannelore W. aus Ellwangen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kauf hat sich gelohnt. Wir managen damit unsere Marketing-Kampagnen. Exportfunktionen nach Excel sind sehr hilfreich. Bin froh, diese Version noch gefunden zu haben. Preis-Leistung ist hier unschlagbar. Bester Deal im Netz.",
    "customer_name": "Christian M. aus Jüchen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top für Profis. Kritische Pfade lassen sich sofort erkennen. Installation war selbsterklärend. Aktivierung ging problemlos online/telefonisch. Die Fortschrittsverfolgung ist für Baustellen essentiell. Bester Deal im Netz.",
    "customer_name": "Fritz V. aus Stolberg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert von der Stabilität. Budgetplanung ist damit viel genauer als früher. 10 von 10 Punkten.",
    "customer_name": "Heinz P. aus Potsdam",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke! Top.",
    "customer_name": "Petra M. aus Neuwied",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Abo-Kosten mehr. Planung von Server-Wartungen klappt hervorragend. Seriöser Shop.",
    "customer_name": "Thomas W. aus Sinsheim",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Die 2016er Version ist schön schlank und schnell. Ein echtes Profi-Tool.",
    "customer_name": "Heinz D. aus Erding",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles so, wie es sein soll. Nutze es für die Bauleitung und der Zeitplan ist extrem präzise. Die Oberfläche ist vertraut und man findet sich schnell zurecht. 10 von 10 Punkten.",
    "customer_name": "Barbara A. aus Berlin",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Verdiente 5 Sterne. Bin zufrieden.",
    "customer_name": "Hannelore C. aus Engelskirchen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Einmal kaufen, ewig nutzen - so muss das sein. Bin froh, diese Version noch gefunden zu haben. Bin wunschlos glücklich.",
    "customer_name": "Sven N. aus Grevenbroich",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Planung von Server-Wartungen klappt hervorragend. Viel besser als Excel für komplexe Aufgaben. Hatte vorher eine Testversion, die Vollversion lohnt sich. Agile Methoden lassen sich gut abbilden. Danke!",
    "customer_name": "Karin T. aus Wiesbaden",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Budgetplanung ist damit viel genauer als früher. Alles richtig gemacht.",
    "customer_name": "Maximilian P. aus Königswinter",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber bin voll überzeugt. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Die Reports sind Gold wert für Meetings mit der Geschäftsführung. Installation war selbsterklärend. 10 von 10 Punkten.",
    "customer_name": "Maximilian C. aus Unna",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Großer Unterschied zu kostenlosen Tools. Kompatibilität mit älteren Dateien ist gegeben. Perfekt.",
    "customer_name": "Maximilian O. aus Eschborn",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation war überraschend einfach. Budgetplanung ist damit viel genauer als früher. Gute Wahl für alle, die professionelle Funktionen brauchen. Einmal kaufen, ewig nutzen - so muss das sein. Danke!",
    "customer_name": "Julia P. aus Rheinbach",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Geht doch! Top.",
    "customer_name": "Maria C. aus Mönchengladbach",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Genau das, was ich brauchte. Kritische Pfade lassen sich sofort erkennen. Ich kann den Projektfortschritt jetzt jederzeit genau sehen. Aktivierung ging problemlos online/telefonisch. Ein echtes Profi-Tool.",
    "customer_name": "Wolfgang J. aus Dessau-Roßlau",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation war überraschend einfach. Übersichtliche Darstellung von Abhängigkeiten. Einfach klasse.",
    "customer_name": "Markus P. aus Brotterode",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach dieser Version gesucht. Bin froh, diese Version noch gefunden zu haben. Verzögerungen lassen sich schnell neu durchrechnen. Installation war selbsterklärend. Guter Preis, gute Leistung.",
    "customer_name": "Kerstin Q. aus Hürth",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die perfekte Lösung für Aufgabenplanung. Hilft mir sehr bei der Ressourcenplanung auf der Baustelle. Key kam per Mail, keine Wartezeit. Die Features sind für den Preis unglaublich. Kritische Pfade lassen sich sofort erkennen. Super Service.",
    "customer_name": "Susanne Y. aus Radolfzell",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zu empfehlen.",
    "customer_name": "Christian N. aus Nettetal",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Erleichtert die Koordination von Lieferterminen enorm. Super Integration mit anderen Office-Produkten. Aktivierung ging problemlos online/telefonisch. Alles richtig gemacht.",
    "customer_name": "Doris W. aus Wegberg",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Jeden Cent wert. Verzögerungen lassen sich schnell neu durchrechnen. Fristen werden jetzt zuverlässiger eingehalten. Bin froh, diese Version noch gefunden zu haben. Alles richtig gemacht.",
    "customer_name": "Barbara K. aus Meckenheim",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hervorragendes Programm. Habe es einem Kollegen empfohlen, der auch zufrieden ist. Netzwerkpläne sind schnell erstellt und übersichtlich. Hatte vorher eine Testversion, die Vollversion lohnt sich. Die Features sind für den Preis unglaublich. Jederzeit wieder.",
    "customer_name": "Dieter E. aus Viernheim",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr professionelles Tool. Fristen werden jetzt zuverlässiger eingehalten. Super Service.",
    "customer_name": "Elisabeth T. aus Gaggenau",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber bin voll überzeugt. Code war sofort da und funktionierte direkt. Die Gantt-Diagramme sind super übersichtlich für Kunden. Die Features sind für den Preis unglaublich. Support hat mir kurz bei der Installation geholfen, top. Ausgezeichnet.",
    "customer_name": "Bernd T. aus Morsbach",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe gezielt nach der 2016er Version gesucht. Die Oberfläche ist vertraut und man findet sich schnell zurecht. Keine Probleme mit der Lizenzierung bisher. Perfekt.",
    "customer_name": "Kerstin V. aus Haar",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Originalware. Top.",
    "customer_name": "Manuela P. aus Straubing",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert wie erwartet. Einmal kaufen, ewig nutzen - so muss das sein. Hilft mir sehr bei der Ressourcenplanung auf der Baustelle. Bin froh, diese Version noch gefunden zu haben. Reagiert schnell und stürzt nicht ab. Danke!",
    "customer_name": "Mario X. aus Wiesloch",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Echte Kaufempfehlung von mir. Hilft beim Tracking von Sprints und Meilensteinen. Bin froh, diese Version noch gefunden zu haben. Danke an den Support.",
    "customer_name": "Lukas V. aus Haltern am See",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lizenz funktioniert einwandfrei. Nutze es für die Planung unserer Software-Releases. 10 von 10 Punkten.",
    "customer_name": "Gerd V. aus Brandenburg an der Havel",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann ich nur empfehlen. Ideal, um Arbeitsstunden und Material zu kalkulieren. Kompatibilität mit älteren Dateien ist gegeben. Finde es super, dass man es nicht jedes Jahr neu kaufen muss. Klare Kaufempfehlung.",
    "customer_name": "Tim R. aus Neuburg an der Donau",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zu empfehlen. Top.",
    "customer_name": "Anja Q. aus Nachrodt-Wiblingwerde",
    "date": "2025-10-01"
  }
];