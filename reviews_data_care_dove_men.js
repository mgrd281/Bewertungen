const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Luca U. aus Herford",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Frische gefällt mir gut. Klare 10/10.",
    "customer_name": "Sascha B. aus Bietigheim-Bissingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Angenehm gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Henry Z. aus Magdeburg",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Hautgefühl gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Max S. aus Erkrath",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Täglich gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Hannes H. aus Marburg",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Top.",
    "customer_name": "Matteo T. aus Arnsberg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Anja C. aus Herzogenrath",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Milan L. aus Ravensburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Felix F. aus Bergheim",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Luca E. aus Wiesbaden",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Samuel F. aus Velbert",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Paul P. aus Menden",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Anna S. aus Hürth",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Susanne A. aus Detmold",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Christina C. aus Hennef",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Valentin G. aus Garbsen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Philipp R. aus Neuss",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Justus Z. aus Magdeburg",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Matteo H. aus Witten",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautgefühl ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "David R. aus Leonberg",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Einfach klasse.",
    "customer_name": "Liam Z. aus Mülheim an der Ruhr",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Bin rundum glücklich damit.",
    "customer_name": "Christina Z. aus Neustadt an der Weinstraße",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Milan K. aus Emden",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Laura D. aus Offenburg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Angenehm gefällt mir gut. Lohnt sich.",
    "customer_name": "Henry R. aus Lippstadt",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Niklas K. aus Garbsen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia J. aus Brandenburg an der Havel",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Melanie F. aus Weinheim",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Liam V. aus Böblingen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Tanja M. aus Bonn",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Ben Q. aus Saarbrücken",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah O. aus Koblenz",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Anna S. aus Soest",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Lukas H. aus Eisenach",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Arne D. aus Kassel",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Susanne E. aus Bremen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Oskar M. aus Osnabrück",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Claudia G. aus Cottbus",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Angenehm gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Sandra H. aus Heidenheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Valentin C. aus Bremen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Milan D. aus Dinslaken",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Kilian S. aus Lübeck",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Top.",
    "customer_name": "Luca U. aus Soest",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Marlon L. aus Hameln",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Anna P. aus Dorsten",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Andrea P. aus Brandenburg an der Havel",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Susanne S. aus Troisdorf",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luca P. aus Celle",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Fabian Z. aus Borken",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Andrea G. aus Leipzig",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Max B. aus Ingolstadt",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna H. aus Greifswald",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Ben P. aus Offenbach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Tom E. aus Chemnitz",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Sarah M. aus Bergisch Gladbach",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Vincent M. aus Düren",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Vincent G. aus Offenbach",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Monika R. aus Erlangen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Susanne R. aus Leinfelden-Echterdingen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Jan R. aus Bochum",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Frische gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Simon O. aus Stolberg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Frische gefällt mir gut. Top, weiter so.",
    "customer_name": "Julia F. aus Bremen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Sascha S. aus Elmshorn",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Kevin K. aus Pulheim",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Stefanie L. aus Stralsund",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Hannes X. aus Neu-Ulm",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Kerstin O. aus Bocholt",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Mats C. aus Sindelfingen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne U. aus Kaufbeuren",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Angenehm gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Kevin O. aus Aschaffenburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Mats O. aus Ludwigsburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Angenehm gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sandra B. aus Hattingen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Angenehm gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Liam G. aus Schwäbisch Gmünd",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Philipp I. aus Speyer",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Bin zufrieden.",
    "customer_name": "Monika F. aus Hamburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Malte I. aus Bremen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Anja Z. aus Dormagen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Feuchtigkeit gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Anton T. aus Hürth",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Dennis O. aus Neunkirchen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Jannik Y. aus Bergheim",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "David O. aus Wolfsburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Preis/Leistung past einfach.",
    "customer_name": "Nico Q. aus Worms",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Tom C. aus Oberursel",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Matteo G. aus Kamen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Luis K. aus Göppingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Täglich gefällt mir gut. Vielen Dank.",
    "customer_name": "Anton P. aus Ratingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo D. aus Wolfsburg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Lisa N. aus Herne",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Niklas P. aus Hennef",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Tanja W. aus Kerpen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Bin zufrieden.",
    "customer_name": "Valentin Z. aus Lünen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Julian B. aus Neunkirchen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Maximilian V. aus Tübingen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Lisa B. aus Oldenburg",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Tanja T. aus Dülmen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Justus N. aus Düren",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Justus G. aus Rheda-Wiedenbrück",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Birgit Z. aus Saarbrücken",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Malte W. aus Emden",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Feuchtigkeit gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Malte B. aus Waiblingen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Frische gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Petra T. aus Straubing",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. 5 Sterne von mir.",
    "customer_name": "Leo A. aus Filderstadt",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hautgefühl gefällt mir gut. Vielen Dank.",
    "customer_name": "Laura V. aus Göppingen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Birgit V. aus Schwäbisch Gmünd",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Leon L. aus Oldenburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Frische gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Valentin A. aus Menden",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Bastian T. aus Jena",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Noah Y. aus Bornheim",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Feuchtigkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Luca M. aus Rottenburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautgefühl gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Dennis I. aus Borken",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Timo X. aus Cottbus",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Jan R. aus Saarbrücken",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Valentin G. aus Kaiserslautern",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Mats Q. aus Freiburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes A. aus Meerbusch",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Angenehm gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Nico L. aus Ratingen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Hautgefühl gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Katharina K. aus Wolfenbüttel",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Adrian R. aus Peine",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico P. aus Marburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Preis/Leistung past einfach.",
    "customer_name": "Marlon H. aus Wiesbaden",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Feuchtigkeit gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Jonas C. aus Speyer",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Paul P. aus Neu-Ulm",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Leon K. aus Göppingen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Lenny H. aus Garbsen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Top.",
    "customer_name": "Finn Z. aus Wuppertal",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Liam R. aus Freising",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Stefanie E. aus Frankfurt (Oder)",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Leon O. aus Esslingen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Lisa T. aus Lahr",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Dennis H. aus Marl",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Claudia P. aus Kassel",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Alexander H. aus Düren",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Philipp J. aus Iserlohn",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Luca I. aus Lübeck",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Marlon J. aus Ahlen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Feuchtigkeit gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz E. aus Mönchengladbach",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Sascha S. aus Wiesbaden",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Frische gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Katharina I. aus Dachau",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Theo J. aus Memmingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "David W. aus Rottenburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Leo M. aus Gronau",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Anton X. aus Eisenach",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Ben M. aus Offenburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Tobias P. aus Bornheim",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Tobias Q. aus Würzburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Bin rundum glücklich damit.",
    "customer_name": "Oskar P. aus Gummersbach",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Danke!",
    "customer_name": "Arne M. aus Pforzheim",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Elias Q. aus Magdeburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Frische gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Sabine Z. aus Castrop-Rauxel",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Adrian F. aus Schwäbisch Gmünd",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Täglich gefällt mir gut. Lohnt sich.",
    "customer_name": "Anton A. aus Herten",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Feuchtigkeit gefällt mir gut. Klare 10/10.",
    "customer_name": "Robin R. aus Bornheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Oskar C. aus Velbert",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Jonas G. aus Lünen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Katharina F. aus Baden-Baden",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Samuel O. aus Alsdorf",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Christoph T. aus Düsseldorf",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Super Shop, super Ware.",
    "customer_name": "Valentin F. aus Memmingen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Täglich gefällt mir gut. Top, weiter so.",
    "customer_name": "Sandra Q. aus Siegen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Yannick A. aus Oldenburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Tanja F. aus Bad Kreuznach",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Jannik M. aus Melle",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Philipp D. aus Braunschweig",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Benedikt L. aus Oberhausen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Vielen Dank.",
    "customer_name": "Lukas V. aus Köln",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Erik T. aus Landshut",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Milan K. aus Peine",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Benedikt O. aus Aurich",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil D. aus Remscheid",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Christoph T. aus Paderborn",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Timo J. aus Alsdorf",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Susanne C. aus Bremen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Samuel E. aus Augsburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Susanne I. aus Bergisch Gladbach",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Arne S. aus Hildesheim",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Ben S. aus Herten",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Hannes T. aus Dormagen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Daumen hoch!",
    "customer_name": "Robin D. aus Potsdam",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Nicole I. aus Wolfenbüttel",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Emil T. aus Neu-Ulm",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Samuel N. aus Schweinfurt",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nicole A. aus Bornheim",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Sabine U. aus Frechen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Tom I. aus Görlitz",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Danke!",
    "customer_name": "David D. aus Wilhelmshaven",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Kevin A. aus Buxtehude",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Top.",
    "customer_name": "Tim L. aus Passau",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Frische gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Simon Z. aus Nettetal",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Valentin U. aus Wolfenbüttel",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Arne P. aus Iserlohn",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. 5 Sterne von mir.",
    "customer_name": "Kerstin X. aus Garbsen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Klare 10/10.",
    "customer_name": "Anja T. aus Memmingen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Werde dabei bleiben.",
    "customer_name": "Mats W. aus Dinslaken",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Tobias T. aus Regensburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Bastian F. aus Berlin",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Valentin S. aus Bochum",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Feuchtigkeit gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Jonas P. aus Villingen-Schwenningen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Dominik Z. aus Ingolstadt",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Luis R. aus Stuttgart",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Noah T. aus Bayreuth",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Nadine K. aus Brotterode",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie J. aus Wetzlar",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Matteo H. aus Lünen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Johannes E. aus Gießen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Feuchtigkeit ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Mats L. aus Potsdam",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Täglich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tobias R. aus Gießen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Adrian B. aus Offenburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Stefanie B. aus Würzburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Benedikt O. aus Reutlingen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Angenehm gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Theo N. aus Buxtehude",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Frische gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jonas X. aus Zwickau",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Lenny Z. aus Braunschweig",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Vielen Dank.",
    "customer_name": "Theo O. aus Fürth",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Melanie U. aus Bergisch Gladbach",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Täglich gefällt mir gut. Vielen Dank.",
    "customer_name": "Lisa A. aus Freiburg",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Moritz T. aus Gelsenkirchen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. Vielen Dank.",
    "customer_name": "Tanja R. aus Menden",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina X. aus Wiesbaden",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Hannes D. aus Kamen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Top, weiter so.",
    "customer_name": "Sascha D. aus Dessau-Roßlau",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautgefühl gefällt mir gut. Klare 10/10.",
    "customer_name": "Hannes D. aus Bad Salzuflen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Angenehm gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Matteo V. aus Lörrach",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Sarah H. aus Filderstadt",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Alles richtig gemacht.",
    "customer_name": "Luis Q. aus Esslingen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Feuchtigkeit gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Laura Q. aus Rosenheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Christoph G. aus Duisburg",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Leon E. aus Leverkusen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Sarah F. aus Heidenheim",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Anja L. aus Herford",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Hautgefühl gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Moritz Z. aus Buxtehude",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Tobias W. aus Brotterode",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Alexander Q. aus Ambreg",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Lukas N. aus Neuwied",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Tanja S. aus Osnabrück",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Adrian B. aus Troisdorf",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina B. aus Heidelberg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Täglich gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Nadine Z. aus Dülmen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Frische gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Nicole Q. aus Pulheim",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Fabian R. aus Marl",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Paul A. aus Bad Kreuznach",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Ben F. aus Memmingen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Robin X. aus Kassel",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Top.",
    "customer_name": "Monika D. aus Kempten",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Susanne J. aus Dorsten",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Benedikt A. aus Darmstadt",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Bin zufrieden.",
    "customer_name": "Henry L. aus Wolfsburg",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Tim B. aus Karlsruhe",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Jonas D. aus Oberhausen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Lisa G. aus Mönchengladbach",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Laura A. aus Borken",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Moritz B. aus Garbsen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Alexander D. aus Solingen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Angenehm gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Melanie Z. aus Traunstein",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Anton P. aus Köln",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Paul Z. aus Potsdam",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Angenehm gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Laura T. aus Kempten",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Matteo K. aus Baden-Baden",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Philipp F. aus Bietigheim-Bissingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Sabine Q. aus Stolberg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa U. aus Leverkusen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Sabine N. aus Troisdorf",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Täglich gefällt mir gut. Einfach klasse.",
    "customer_name": "Milan S. aus Unna",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Benedikt G. aus Potsdam",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Vincent X. aus Düren",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Fabian J. aus Stolberg",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Luis R. aus Lahr",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Frische gefällt mir gut. Lohnt sich.",
    "customer_name": "Leon H. aus Bad Salzuflen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Frische gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Sandra T. aus Gladbeck",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Anton Z. aus Böblingen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "David P. aus Bergisch Gladbach",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Philipp J. aus Moers",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Arne T. aus Dresden",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Sarah A. aus Ludwigshafen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Julia C. aus Bielefeld",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Lohnt sich.",
    "customer_name": "Elias X. aus Schwerin",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Marlon Y. aus Aschaffenburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Täglich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik Z. aus Berlin",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Dominik P. aus Lüneburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Lukas F. aus Grevenbroich",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Kerstin S. aus Hennef",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Christina D. aus Schweinfurt",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Christina T. aus Hof",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Anja Y. aus Dortmund",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Bin rundum glücklich damit.",
    "customer_name": "Paul H. aus Schwäbisch Gmünd",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Matteo C. aus Freiburg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Katharina T. aus Bremerhaven",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Mats R. aus Rastatt",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Erik B. aus Bonn",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Dennis S. aus Gießen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Dennis W. aus Bottrop",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Niklas X. aus Gummersbach",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Melanie L. aus Lemgo",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Hautgefühl gefällt mir gut. Klare 10/10.",
    "customer_name": "Stefanie J. aus Dachau",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Maria F. aus Leverkusen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Tim R. aus Herzogenrath",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Emil D. aus Passau",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Frische gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Nico Q. aus Koblenz",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Benedikt P. aus Kleve",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Henry H. aus Bamberg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Frische gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Matteo V. aus Wolfenbüttel",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Melanie P. aus Bietigheim-Bissingen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Henry O. aus Trier",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Vincent D. aus Göttingen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Danke!",
    "customer_name": "Milan S. aus Peine",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Besser geht es nicht.",
    "customer_name": "Julia H. aus Essen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Moritz G. aus Buxtehude",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Noah Z. aus Hattingen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Christina T. aus Darmstadt",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Birgit N. aus Kassel",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Florian U. aus Gießen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Monika H. aus Gronau",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Einfach klasse.",
    "customer_name": "Petra B. aus Dinslaken",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Kauf ich definitiv wieder.",
    "customer_name": "Milan P. aus Offenburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Angenehm gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Mats V. aus Stralsund",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Milan S. aus Darmstadt",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Feuchtigkeit gefällt mir gut. Vielen Dank.",
    "customer_name": "Vincent A. aus Bietigheim-Bissingen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Benedikt E. aus Wesel",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Mats A. aus Landshut",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Bin zufrieden.",
    "customer_name": "Stefanie V. aus Detmold",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Katharina E. aus Hanau",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Valentin M. aus Weinheim",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Robin C. aus Mainz",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Feuchtigkeit ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Julian A. aus Görlitz",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Bastian V. aus Aachen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Robin U. aus Hürth",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Justus F. aus Bruchsal",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Samuel O. aus Filderstadt",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Hautgefühl gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Christoph F. aus Herford",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Nico K. aus Lemgo",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Lenny D. aus Greifswald",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Benedikt E. aus Stralsund",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Andrea Q. aus Bergheim",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Elias Y. aus Kiel",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Henry N. aus Gronau",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Elias H. aus Monheim am Rhein",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Angenehm gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sandra O. aus Bremen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Malte S. aus Karlsruhe",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hautgefühl gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Benedikt H. aus Ludwigshafen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Dominik S. aus Rheine",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Angenehm gefällt mir gut. Top, weiter so.",
    "customer_name": "Birgit O. aus Schweinfurt",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Petra R. aus Hof",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "David D. aus Essen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Maria F. aus Mönchengladbach",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Angenehm gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina B. aus Tübingen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Täglich gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Birgit X. aus Flensburg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Danke!",
    "customer_name": "Lukas R. aus Marburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea D. aus Bochum",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Klare 10/10.",
    "customer_name": "Luis F. aus Oberhausen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Kevin G. aus Rheine",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Noah B. aus Frechen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Samuel O. aus Aschaffenburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Erik W. aus Marburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Philipp G. aus Worms",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Florian W. aus Saarbrücken",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Valentin K. aus Nettetal",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Täglich gefällt mir gut. Vielen Dank.",
    "customer_name": "Anton E. aus Moers",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Julia W. aus Soest",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Feuchtigkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Stefanie P. aus Halle (Saale)",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Leo E. aus Bad Salzuflen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "Emil F. aus Elmshorn",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Melanie W. aus Lippstadt",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Florian F. aus Rheda-Wiedenbrück",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Anna C. aus Minden",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Simon A. aus Marl",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Frische gefällt mir gut. Klare 10/10.",
    "customer_name": "Dominik G. aus Ingolstadt",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Jannik M. aus Paderborn",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Oskar I. aus Stuttgart",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Katharina U. aus Erftstadt",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Katharina B. aus Bad Kreuznach",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Täglich gefällt mir gut. Top, weiter so.",
    "customer_name": "Tom X. aus Rheda-Wiedenbrück",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Preis/Leistung past einfach.",
    "customer_name": "Lukas W. aus Kaiserslautern",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Maria M. aus Berlin",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Elias Q. aus Lemgo",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Matteo I. aus Wiesbaden",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anja G. aus Gütersloh",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Angenehm gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Mats S. aus Gütersloh",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Lohnt sich.",
    "customer_name": "Theo H. aus Gießen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Täglich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie I. aus Pulheim",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Nadine C. aus Freiburg",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "David S. aus Hildesheim",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Marlon P. aus Augsburg",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Kauf ich definitiv wieder.",
    "customer_name": "Nadine U. aus Wilhelmshaven",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Jannik U. aus Troisdorf",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautgefühl gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Emil A. aus Chemnitz",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Robin X. aus Soest",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Melanie Y. aus Norderstedt",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Max M. aus Gladbeck",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis A. aus Villingen-Schwenningen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Nadine U. aus Bielefeld",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Nicole K. aus Bergkamen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Lenny G. aus Bayreuth",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Tim H. aus Leonberg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Johannes F. aus Neuss",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "David X. aus Bad Kreuznach",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Marlon V. aus Leverkusen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Julia U. aus Bocholt",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Marlon M. aus Paderborn",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Matteo P. aus Villingen-Schwenningen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Feuchtigkeit ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Alexander J. aus Schweinfurt",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Elias E. aus Monheim am Rhein",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Lisa Y. aus Alsdorf",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah Z. aus München",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Frische gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Moritz Q. aus Magdeburg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Theo H. aus Hamm",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Moritz J. aus Buxtehude",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik Q. aus Bonn",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Leon S. aus Soest",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Milan V. aus Stuttgart",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Nadine S. aus Wesel",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Yannick N. aus Dessau-Roßlau",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Melanie S. aus Freiburg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Stefanie X. aus Lünen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Marlon G. aus Ravensburg",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne M. aus Lüneburg",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Anton G. aus Erkrath",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Vincent N. aus Ludwigshafen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Luca O. aus Traunstein",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Simon Y. aus Hilden",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Julian T. aus Kiel",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Leon W. aus Berlin",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Hautgefühl gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Noah Y. aus Delmenhorst",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Samuel L. aus Stralsund",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Leo B. aus Melle",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Angenehm gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Emil G. aus Bremen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Kerstin G. aus Brotterode",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Besser geht es nicht.",
    "customer_name": "Kilian B. aus Friedrichshafen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Daumen hoch!",
    "customer_name": "Matteo J. aus Worms",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Hannes E. aus Fellbach",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Nadine I. aus Bergheim",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Kauf ich definitiv wieder.",
    "customer_name": "Robin X. aus Norderstedt",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Dominik W. aus Bremerhaven",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Angenehm gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Maria D. aus Karlsruhe",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Danke!",
    "customer_name": "Felix T. aus Solingen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Danke!",
    "customer_name": "Moritz P. aus Bergkamen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Angenehm gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Sabine R. aus Bocholt",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Melanie F. aus Herne",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Petra I. aus München",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Angenehm gefällt mir gut. Top, weiter so.",
    "customer_name": "Samuel E. aus Frechen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Feuchtigkeit gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Birgit C. aus Kaiserslautern",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Sarah N. aus Lörrach",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "Moritz A. aus Erkrath",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Angenehm gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Matteo R. aus Delmenhorst",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Birgit T. aus Bamberg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Hautgefühl gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Lukas E. aus Neuss",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Susanne S. aus Passau",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Hannes W. aus Reutlingen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Claudia S. aus Hürth",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Täglich gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Felix P. aus Landshut",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Hautgefühl gefällt mir gut. Lohnt sich.",
    "customer_name": "Henry U. aus Nordhorn",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Stefanie B. aus Fulda",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Hannes B. aus Darmstadt",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Luis I. aus Rodgau",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Ben B. aus Passau",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Ben K. aus Erlangen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Angenehm gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian M. aus Cottbus",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Tim P. aus Rüsselsheim",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. 5 Sterne von mir.",
    "customer_name": "Monika Z. aus Heinsberg",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Werde dabei bleiben.",
    "customer_name": "Anton C. aus Rheda-Wiedenbrück",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Moritz M. aus Menden",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Lenny X. aus Monheim am Rhein",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Frische gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max B. aus Wesel",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz V. aus Göppingen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Nico C. aus Dinslaken",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hautgefühl gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam T. aus Bietigheim-Bissingen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nadine L. aus Hilden",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Max S. aus Gelsenkirchen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Kevin I. aus Schwerin",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Arne H. aus Wetzlar",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Noah S. aus Lemgo",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Tom C. aus Ulm",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Christina U. aus Magdeburg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Noah L. aus Heilbronn",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Benedikt V. aus Fürth",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Leo J. aus Zwickau",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Lisa T. aus Krefeld",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Elias N. aus Monheim am Rhein",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Melanie V. aus Baden-Baden",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Luca O. aus Darmstadt",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra U. aus Hamm",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Sehr zu empfehlen.",
    "customer_name": "Timo T. aus Böblingen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Hautgefühl gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent P. aus Dormagen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Melanie V. aus Bayreuth",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Bin rundum glücklich damit.",
    "customer_name": "Anna D. aus Esslingen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Hautgefühl gefällt mir gut. Klare 10/10.",
    "customer_name": "Liam Z. aus Lüneburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Tom B. aus Grevenbroich",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Tim Z. aus Neuss",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Sascha Y. aus Friedrichshafen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Emil U. aus Wuppertal",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Marlon J. aus Lüneburg",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Jonas O. aus Krefeld",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Angenehm gefällt mir gut. Lohnt sich.",
    "customer_name": "Theo M. aus Mannheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Fabian Q. aus Herford",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Kilian D. aus Sindelfingen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Hautgefühl gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Fabian T. aus Neunkirchen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Feuchtigkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Melanie T. aus Freiburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Arne O. aus Neustadt an der Weinstraße",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Florian P. aus Heilbronn",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Top.",
    "customer_name": "Christoph T. aus Ravensburg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Florian L. aus Greifswald",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Feuchtigkeit gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Florian V. aus Friedrichshafen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Yannick O. aus Kempten",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Feuchtigkeit gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Johannes Z. aus Ludwigshafen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Julian B. aus Stralsund",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Andrea F. aus Mainz",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz G. aus Garbsen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Feuchtigkeit gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Timo G. aus Wetzlar",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Luis W. aus Mönchengladbach",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Feuchtigkeit gefällt mir gut. Vielen Dank.",
    "customer_name": "Matteo K. aus Speyer",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Sarah N. aus Ambreg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anton W. aus Bergkamen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautgefühl gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit M. aus Ulm",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Benedikt Q. aus Aalen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Einfach klasse.",
    "customer_name": "Sabine O. aus Gießen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Julian M. aus Herzogenrath",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Emil X. aus Moers",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Top.",
    "customer_name": "David C. aus Unna",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Lukas S. aus Worms",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Sabine Y. aus Aachen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautgefühl gefällt mir gut. Lohnt sich.",
    "customer_name": "Henry H. aus Speyer",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Dennis P. aus Leipzig",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Danke!",
    "customer_name": "Alexander K. aus Kamen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Milan W. aus Aurich",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Erik M. aus Landshut",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Bin zufrieden.",
    "customer_name": "Philipp N. aus Friedrichshafen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Maximilian A. aus Cottbus",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Nico J. aus Saarbrücken",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Täglich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Susanne U. aus Kempten",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Daumen hoch!",
    "customer_name": "Philipp K. aus Böblingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Anna K. aus Castrop-Rauxel",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Timo D. aus Peine",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Adrian F. aus Ratingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Tim K. aus Berlin",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Felix J. aus Aurich",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Theo A. aus Dormagen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Niklas H. aus Ratingen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautgefühl gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah I. aus Erftstadt",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Birgit R. aus Heidelberg",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Angenehm gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Monika M. aus Villingen-Schwenningen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Lohnt sich.",
    "customer_name": "Fabian Q. aus Ratingen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Täglich gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Leo V. aus Göppingen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Melanie S. aus München",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Malte V. aus Brandenburg an der Havel",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Feuchtigkeit gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Melanie S. aus Bocholt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Angenehm gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Finn N. aus Pinneberg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Moritz M. aus Speyer",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Luca K. aus Bietigheim-Bissingen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Lukas A. aus Salzgitter",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Emil K. aus Dortmund",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Finn E. aus Sindelfingen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Melanie S. aus Dormagen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Kevin X. aus Hameln",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Ben O. aus Straubing",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Dennis W. aus Paderborn",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Bin zufrieden.",
    "customer_name": "Liam C. aus Lüdenscheid",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Angenehm gefällt mir gut. Daumen hoch!",
    "customer_name": "Niklas Y. aus Filderstadt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Daumen hoch!",
    "customer_name": "Stefanie Q. aus Oldenburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Angenehm gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Sabine N. aus Kaufbeuren",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah A. aus Braunschweig",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Anna U. aus Rheine",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Mats R. aus Borken",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Kilian Y. aus Waiblingen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Simon O. aus Ratingen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Nicole D. aus Neunkirchen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Dennis C. aus Eschweiler",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Täglich gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Sascha E. aus Potsdam",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Erik A. aus Lünen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Kerstin T. aus Castrop-Rauxel",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Jan T. aus Magdeburg",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Christina Z. aus Lippstadt",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Tom T. aus Hennef",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Kerstin S. aus Lahr",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Täglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Kilian W. aus Unna",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Milan Z. aus Hildesheim",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Kilian L. aus Witten",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Feuchtigkeit gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Benedikt M. aus Dinslaken",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Tom E. aus Unna",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Paul E. aus Bochum",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Samuel V. aus Kamen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. 5 Sterne von mir.",
    "customer_name": "Finn V. aus Lemgo",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anja I. aus Potsdam",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Timo C. aus Oranienburg",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Andrea I. aus Bielefeld",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Sarah Y. aus Sindelfingen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Valentin X. aus Buxtehude",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Preis/Leistung past einfach.",
    "customer_name": "Kilian K. aus Pinneberg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Elias D. aus Rüsselsheim",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Julian X. aus Aachen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Kilian C. aus Albstadt",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Bin zufrieden.",
    "customer_name": "Anna X. aus Iserlohn",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "David N. aus Bad Homburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Adrian E. aus Duisburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Felix G. aus Bad Homburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Elias Q. aus Rosenheim",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Feuchtigkeit gefällt mir gut. Lohnt sich.",
    "customer_name": "Philipp B. aus Fulda",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Feuchtigkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Christoph W. aus Tübingen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hautgefühl gefällt mir gut. Lohnt sich.",
    "customer_name": "Dominik N. aus Neu-Ulm",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Felix C. aus Hagen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Julia K. aus Erlangen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Mats F. aus Kempten",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Feuchtigkeit gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Luis I. aus Ibbenbüren",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Melanie T. aus Mainz",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Alles richtig gemacht.",
    "customer_name": "Sascha G. aus Ravensburg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Lenny X. aus Nürnberg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautgefühl gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Leon L. aus Nürnberg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Birgit Z. aus Göttingen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Florian J. aus Dachau",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Laura F. aus Hamburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Angenehm gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Florian N. aus Bornheim",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Täglich gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sarah C. aus Hamm",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Feuchtigkeit gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Luca E. aus Oberursel",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Mats W. aus Ahlen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Marlon S. aus Bad Oeynhausen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Andrea Y. aus Aschaffenburg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Alexander O. aus Marl",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Werde dabei bleiben.",
    "customer_name": "Jannik G. aus Wiesbaden",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Katharina V. aus Kiel",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Hautgefühl gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Leon Z. aus Göppingen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Angenehm gefällt mir gut. Top, weiter so.",
    "customer_name": "Valentin C. aus Hattingen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Leon W. aus Weinheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Oskar X. aus Meerbusch",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. Top, weiter so.",
    "customer_name": "Birgit G. aus Kleve",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Daumen hoch!",
    "customer_name": "Justus T. aus Osnabrück",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Sabine G. aus Peine",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Tobias G. aus Gießen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Anja U. aus Gladbeck",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Theo M. aus Bergisch Gladbach",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Liam Z. aus Rüsselsheim",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Anja A. aus Neuss",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah F. aus Wetzlar",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Andrea V. aus Göppingen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Bin zufrieden.",
    "customer_name": "Moritz O. aus Eisenach",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Nicole O. aus Neuss",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Laura U. aus Borken",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Ben M. aus Erftstadt",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Milan D. aus Salzgitter",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Dennis E. aus Ratingen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Frische gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian Z. aus Oberhausen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Leon X. aus Bietigheim-Bissingen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Katharina A. aus Tübingen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah W. aus Buxtehude",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Melanie M. aus Marburg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Melanie N. aus Salzgitter",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Felix A. aus Dessau-Roßlau",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Katharina I. aus Soest",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Hannes C. aus Kempten",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Lohnt sich.",
    "customer_name": "Timo P. aus Langenfeld",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Erik M. aus Bonn",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Angenehm gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tim A. aus Stolberg",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Maria A. aus Moers",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Simon O. aus Erfurt",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Benedikt U. aus Frankfurt (Oder)",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Hautgefühl gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sascha R. aus Esslingen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Maximilian O. aus Buxtehude",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Marlon T. aus Konstanz",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Fabian A. aus Mainz",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Luca G. aus Langenfeld",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Tobias K. aus Oldenburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Milan Q. aus Leinfelden-Echterdingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Matteo H. aus Hamm",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Feuchtigkeit gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra N. aus Neunkirchen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hautgefühl gefällt mir gut. Top, weiter so.",
    "customer_name": "Fabian K. aus Hattingen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Tom S. aus Chemnitz",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Bin zufrieden.",
    "customer_name": "Henry A. aus Freising",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Matteo E. aus Offenburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Täglich gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian M. aus Detmold",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Maximilian E. aus Gelsenkirchen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Besser geht es nicht.",
    "customer_name": "Nicole B. aus Lörrach",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Feuchtigkeit gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Felix W. aus Ludwigshafen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Frische gefällt mir gut. Top, weiter so.",
    "customer_name": "Tim N. aus Gronau",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Katharina A. aus Pforzheim",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Julian Q. aus Eisenach",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Jonas P. aus Kerpen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Alexander M. aus Gießen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Sabine J. aus Köln",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Sandra V. aus Schwäbisch Gmünd",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Frische gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Julian C. aus Göttingen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Henry Q. aus Detmold",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Birgit Y. aus Fürth",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul L. aus Menden",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Julia T. aus Ratingen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia Q. aus Heidelberg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Jan F. aus Baden-Baden",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Luca K. aus Meerbusch",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Vincent Q. aus Hamburg",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Mats Y. aus Rostock",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Anja U. aus Jena",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Sabine B. aus Hürth",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Jonas I. aus Viersen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Stefanie H. aus Hagen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Anna M. aus Offenburg",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Feuchtigkeit gefällt mir gut. Lohnt sich.",
    "customer_name": "Vincent G. aus Göttingen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Timo Y. aus Stralsund",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Hautgefühl gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Dominik Y. aus Lingen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Kilian A. aus Oldenburg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Angenehm gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Sandra B. aus Hürth",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lukas H. aus Reutlingen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Stefanie Z. aus Mülheim an der Ruhr",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Malte B. aus Passau",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Florian D. aus Dülmen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Melanie C. aus Gütersloh",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautgefühl ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Maria E. aus Nettetal",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Simon O. aus Norderstedt",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Luis T. aus Berlin",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Max N. aus Flensburg",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Leo G. aus Lahr",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nadine W. aus Remscheid",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Laura V. aus Kempten",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Angenehm gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Philipp U. aus Rostock",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Leo P. aus Langenfeld",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Milan T. aus Unna",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Angenehm gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Lukas A. aus Ibbenbüren",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Fabian S. aus Schwäbisch Gmünd",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Hannes O. aus Berlin",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Petra T. aus Kaiserslautern",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Claudia L. aus Bottrop",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Bastian H. aus Alsdorf",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Jan Z. aus Dresden",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Frische gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Matteo S. aus Bad Oeynhausen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Johannes B. aus Emden",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Frische gefällt mir gut. Daumen hoch!",
    "customer_name": "Tanja J. aus Saarbrücken",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Florian J. aus Eschweiler",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Max W. aus Bremen",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Täglich gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Finn W. aus Hildesheim",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Liam J. aus Schwäbisch Gmünd",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Maximilian W. aus Braunschweig",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Vincent L. aus Buxtehude",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Lisa V. aus Weimar",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Samuel M. aus Schwerin",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Sehr zu empfehlen.",
    "customer_name": "Moritz A. aus Herzogenrath",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Kann ich nur weiterempfehlen.",
    "customer_name": "Liam P. aus Ratingen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Moritz A. aus Herne",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Paul V. aus Recklinghausen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Oskar J. aus Straubing",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Sandra Z. aus Bremen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max U. aus Meerbusch",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Top.",
    "customer_name": "Petra S. aus Bonn",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Tanja V. aus Speyer",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Henry H. aus Alsdorf",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Hautgefühl gefällt mir gut. Einfach klasse.",
    "customer_name": "Anton H. aus Oberhausen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Valentin Z. aus Neuwied",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Benedikt Y. aus Lüneburg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Moritz B. aus Gummersbach",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Tom O. aus Bamberg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. Daumen hoch!",
    "customer_name": "Leon T. aus Offenbach",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Angenehm ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Sascha X. aus Herne",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Paul V. aus Brotterode",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Petra Y. aus Ingolstadt",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Alles richtig gemacht.",
    "customer_name": "Sarah Y. aus Siegen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Täglich gefällt mir gut. Lohnt sich.",
    "customer_name": "Malte J. aus Lübeck",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Jan F. aus Augsburg",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Maximilian W. aus Bergheim",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Leon P. aus Ravensburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Andrea E. aus Hamburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Niklas C. aus Heilbronn",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Bin rundum glücklich damit.",
    "customer_name": "Jonas C. aus Bottrop",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Matteo V. aus Menden",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Angenehm gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Anja Q. aus Gronau",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis W. aus Leinfelden-Echterdingen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Yannick T. aus Berlin",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Bastian F. aus Pforzheim",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina O. aus Minden",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Lenny S. aus Solingen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Liam Z. aus Solingen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Malte K. aus Brandenburg an der Havel",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Angenehm gefällt mir gut. Einfach klasse.",
    "customer_name": "Maximilian Y. aus Augsburg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Liam Q. aus Schwäbisch Gmünd",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Valentin K. aus Moers",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Justus B. aus Leverkusen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Maria F. aus Siegen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Valentin I. aus Köln",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Bastian E. aus Bremen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Jonas H. aus Waiblingen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Angenehm ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Yannick A. aus Herzogenrath",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Hannes M. aus Gießen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie H. aus Stralsund",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Florian S. aus Hannover",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Susanne I. aus Leonberg",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Fabian M. aus Hürth",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Noah Z. aus Wolfenbüttel",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Sarah W. aus Lüneburg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Angenehm ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Monika Q. aus Weimar",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Luca P. aus Norderstedt",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Kerstin A. aus Sankt Augustin",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Angenehm ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Oskar H. aus Langenhagen",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Ben C. aus Herford",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Lukas Z. aus Konstanz",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Luis I. aus Memmingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Alexander F. aus Sindelfingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Ben U. aus Detmold",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Liam O. aus Gelsenkirchen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Tanja C. aus Arnsberg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Samuel D. aus Bremen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Alexander K. aus Weinheim",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Täglich gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Erik R. aus Neunkirchen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Angenehm gefällt mir gut. Daumen hoch!",
    "customer_name": "Anna Q. aus Borken",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna K. aus Straubing",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Klare 10/10.",
    "customer_name": "Philipp P. aus Tübingen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Tom S. aus Freiburg",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Marlon A. aus Detmold",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Robin V. aus Rheda-Wiedenbrück",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Sandra A. aus Erfurt",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautgefühl ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Lenny K. aus Gießen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Täglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Jan H. aus Rüsselsheim",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Anton B. aus Heidenheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Tom G. aus Hannover",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Marlon L. aus Wiesbaden",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Luis I. aus Lemgo",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Erik Q. aus Lemgo",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Anton P. aus Leinfelden-Echterdingen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Top.",
    "customer_name": "Christoph M. aus Frankfurt",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Monika C. aus Eschweiler",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Vincent G. aus Garbsen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Anna U. aus Rottenburg",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Alexander O. aus Friedrichshafen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Täglich gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Marlon B. aus Bocholt",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Dominik I. aus Karlsruhe",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Frische gefällt mir gut. Daumen hoch!",
    "customer_name": "Lisa E. aus Magdeburg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Sarah P. aus Detmold",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Sarah G. aus Garbsen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Feuchtigkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Melanie R. aus Magdeburg",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Angenehm gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Anton X. aus Bornheim",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Angenehm ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Kilian Q. aus Heilbronn",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Angenehm ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Tim F. aus Halle (Saale)",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Vincent E. aus Castrop-Rauxel",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Luis N. aus Bremerhaven",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Paul V. aus Ludwigshafen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Feuchtigkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Yannick I. aus Villingen-Schwenningen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Petra S. aus Bamberg",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Christina Y. aus Frankfurt (Oder)",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Hannes X. aus Marburg",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Täglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent T. aus Görlitz",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie I. aus Passau",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Werde dabei bleiben.",
    "customer_name": "Julian F. aus Ludwigsburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Lisa I. aus Freising",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Mats Z. aus Erftstadt",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Andrea J. aus Pforzheim",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Maria E. aus Moers",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautgefühl ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Lenny Z. aus Lahr",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja A. aus Konstanz",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Nadine R. aus Detmold",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Danke!",
    "customer_name": "Kerstin B. aus Eschweiler",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Liam A. aus Dessau-Roßlau",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Justus A. aus Kassel",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Feuchtigkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Tom B. aus Dortmund",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautgefühl ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Nadine Q. aus Lünen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Nico O. aus Saarbrücken",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Maximilian K. aus Unna",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Hautgefühl ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Tim M. aus Kerpen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Frische gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Jan W. aus Brotterode",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Robin C. aus Duisburg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Max T. aus Worms",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Felix L. aus Nordhorn",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Tim K. aus Neumünster",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Julian O. aus Bornheim",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Lisa U. aus Gelsenkirchen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Tobias X. aus Chemnitz",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Leon M. aus Moers",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Täglich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Arne K. aus Lünen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Julian L. aus Bietigheim-Bissingen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Luca K. aus Worms",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Feuchtigkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Lukas R. aus Monheim am Rhein",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautgefühl ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Petra I. aus Hildesheim",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Angenehm ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Christoph Q. aus Traunstein",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Täglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Matteo Q. aus Chemnitz",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Feuchtigkeit ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Noah D. aus Dinslaken",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Bastian W. aus Wesel",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautgefühl ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Jannik E. aus Hannover",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Angenehm ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Theo V. aus Würzburg",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Benedikt O. aus Heinsberg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Feuchtigkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Niklas M. aus Kempten",
    "date": "2025-04-01"
  }
];