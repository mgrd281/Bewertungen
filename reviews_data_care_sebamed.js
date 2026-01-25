const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Jan X. aus Rodgau",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Danke!",
    "customer_name": "Erik G. aus Würzburg",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Valentin X. aus Lippstadt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Empfindlich gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Monika R. aus Friedrichshafen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Seifenfrei gefällt mir gut. Lohnt sich.",
    "customer_name": "Anton W. aus Krefeld",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo E. aus Heilbronn",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Mild gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Tobias A. aus Cottbus",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Kevin F. aus Lörrach",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Melanie X. aus Dachau",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Petra G. aus Velbert",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Sascha I. aus Ahlen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Anton N. aus Hannover",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Emil W. aus Kempten",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Samuel J. aus Menden",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Seifenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Simon J. aus Herten",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Tim W. aus Esslingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Seifenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Tobias T. aus Herne",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. 5 Sterne von mir.",
    "customer_name": "Maximilian A. aus Dachau",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Erik I. aus Minden",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Seifenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Oskar O. aus Neumünster",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Kerstin T. aus Hannover",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Mild gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Niklas Y. aus Bayreuth",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Maria A. aus Heidelberg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Besser geht es nicht.",
    "customer_name": "Lukas J. aus Fürth",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Lukas M. aus Freiburg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Fabian E. aus Villingen-Schwenningen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin S. aus Landshut",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Bin rundum glücklich damit.",
    "customer_name": "Finn H. aus Landshut",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Laura G. aus Bielefeld",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Oskar J. aus Zwickau",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Christina K. aus Görlitz",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Nie mehr ohne.",
    "customer_name": "Emil L. aus Gladbeck",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Empfindlich ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Dennis B. aus Halle (Saale)",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Luca L. aus Brandenburg an der Havel",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Empfindlich gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Mats G. aus Bad Oeynhausen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Birgit E. aus Hennef",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Monika G. aus Freising",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Seifenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Julian B. aus Kaufbeuren",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Super Shop, super Ware.",
    "customer_name": "Susanne J. aus Celle",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Mild gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia H. aus Bottrop",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Johannes R. aus Hanau",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Benedikt T. aus Salzgitter",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Florian N. aus Kamen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Tom U. aus Tübingen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Jannik K. aus Tübingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Sarah X. aus Hagen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Danke!",
    "customer_name": "Matteo C. aus Flensburg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Timo M. aus Gelsenkirchen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Liam A. aus Sankt Augustin",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Mild gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Philipp H. aus Kaiserslautern",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Seifenfrei ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Susanne Y. aus Lippstadt",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Arne V. aus Oberhausen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Timo Q. aus Bruchsal",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Empfindlich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Mats N. aus Marl",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Seifenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Sabine H. aus München",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Erik B. aus Halle (Saale)",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Alles richtig gemacht.",
    "customer_name": "Philipp I. aus Münster",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Dominik Y. aus Magdeburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Seifenfrei gefällt mir gut. Einfach klasse.",
    "customer_name": "Felix Y. aus Reutlingen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Samuel L. aus Potsdam",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Claudia M. aus Fürth",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Bastian Y. aus Melle",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Kauf ich definitiv wieder.",
    "customer_name": "Milan P. aus Heinsberg",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Leon V. aus Fürth",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Vielen Dank.",
    "customer_name": "Erik H. aus Düsseldorf",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Top.",
    "customer_name": "Robin P. aus Rosenheim",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Leon X. aus Rostock",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Tanja Y. aus Unna",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Top.",
    "customer_name": "Jonas I. aus Regensburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Jonas D. aus Koblenz",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Katharina N. aus Sankt Augustin",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Monika Q. aus Alsdorf",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Felix Z. aus Bad Oeynhausen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Lisa C. aus Nürnberg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. 5 Sterne von mir.",
    "customer_name": "Fabian R. aus Hildesheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Nadine V. aus Brandenburg an der Havel",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Hannes G. aus Bergisch Gladbach",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Danke!",
    "customer_name": "Sabine O. aus Villingen-Schwenningen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis C. aus Schwäbisch Gmünd",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Paul G. aus Lemgo",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Moritz T. aus Frankfurt (Oder)",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Mild gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Justus Y. aus Lüdenscheid",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Monika B. aus Dresden",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Alexander O. aus Pforzheim",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Dennis V. aus Neuss",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Elias P. aus Peine",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Benedikt O. aus Augsburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Jan L. aus Passau",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders pH-Wert gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Birgit I. aus Schwerin",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Susanne C. aus Bad Kreuznach",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Benedikt F. aus Freiburg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Hautschutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Timo B. aus Kassel",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Lenny R. aus Herten",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Maria P. aus Bad Kreuznach",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Kevin L. aus Koblenz",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Seifenfrei ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Jonas R. aus Dortmund",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Sabine U. aus Leonberg",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Hautschutz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Anton P. aus Delmenhorst",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Empfindlich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Christina N. aus Frankfurt",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Dennis V. aus Marburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Stefanie N. aus Traunstein",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Vielen Dank.",
    "customer_name": "Tim E. aus Kaiserslautern",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Tim K. aus Rosenheim",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Empfindlich gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Lisa G. aus Pforzheim",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Jannik O. aus Bietigheim-Bissingen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Justus S. aus Memmingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Mild gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tom Y. aus Lübeck",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Sabine G. aus Hennef",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Seifenfrei gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Birgit D. aus Kleve",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Laura O. aus Halle (Saale)",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Marlon E. aus Elmshorn",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Seifenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Sascha K. aus Peine",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Birgit V. aus Bottrop",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Mild gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Stefanie D. aus Rüsselsheim",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Seifenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Justus H. aus Troisdorf",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Birgit I. aus Jena",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Robin W. aus Darmstadt",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Fabian V. aus Berlin",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Kevin E. aus Freising",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Birgit P. aus Lüdenscheid",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Empfindlich ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Christina F. aus Bayreuth",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Lukas O. aus Rostock",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Seifenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Marlon G. aus Neuwied",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Tim E. aus Baden-Baden",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Emil F. aus Duisburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik K. aus Soest",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature pH-Wert ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Melanie Q. aus Marburg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Florian F. aus Borken",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Susanne M. aus Nordhorn",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Dominik J. aus Bochum",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Seifenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Bastian D. aus Zwickau",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Timo K. aus Heinsberg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Julia T. aus Dessau-Roßlau",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Seifenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Lukas O. aus Rastatt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Monika Z. aus Castrop-Rauxel",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max Y. aus Siegen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Ben R. aus Straubing",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Jannik K. aus Kleve",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Mild gefällt mir gut. Klare 10/10.",
    "customer_name": "Anna K. aus Friedrichshafen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Nicole W. aus Düren",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Empfindlich gefällt mir gut. Vielen Dank.",
    "customer_name": "Andrea C. aus Dessau-Roßlau",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Monika E. aus Neu-Ulm",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Hautschutz gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Sandra Z. aus Flensburg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Bastian X. aus Lingen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Empfindlich gefällt mir gut. Top, weiter so.",
    "customer_name": "Johannes N. aus Cottbus",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Lisa D. aus Leverkusen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Henry K. aus Konstanz",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Liam F. aus Monheim am Rhein",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Seifenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Vincent J. aus Rastatt",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Sarah A. aus Erlangen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Sascha D. aus Aurich",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Adrian D. aus Frankfurt (Oder)",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Lohnt sich.",
    "customer_name": "Sabine U. aus Plauen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Alexander R. aus Herne",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Mild gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Henry K. aus Leonberg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Lohnt sich.",
    "customer_name": "Tanja D. aus Ludwigsburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Hautschutz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Lenny C. aus Kempten",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Dominik F. aus Wesel",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Yannick W. aus Rodgau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Johannes U. aus Aachen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Sascha G. aus Ibbenbüren",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna K. aus Iserlohn",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders pH-Wert gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Justus I. aus Schweinfurt",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Leo M. aus Nordhorn",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Max W. aus Minden",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Julian S. aus Buxtehude",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Henry T. aus Lüneburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders pH-Wert gefällt mir gut. Top, weiter so.",
    "customer_name": "Lenny E. aus Bad Homburg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Petra D. aus Grevenbroich",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Julia H. aus Essen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Nadine S. aus Dresden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Sarah X. aus Kassel",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Bastian L. aus Plauen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Lukas J. aus Bamberg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Seifenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Anja F. aus Bocholt",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Mild gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Dominik B. aus Regensburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Tim P. aus Magdeburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Andrea Y. aus Ulm",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautschutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Jonas V. aus Bocholt",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Felix N. aus Wilhelmshaven",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Lukas P. aus Aalen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Petra Q. aus Bergisch Gladbach",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Laura H. aus Aschaffenburg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Danke!",
    "customer_name": "Yannick R. aus Duisburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Matteo Q. aus Solingen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Daumen hoch!",
    "customer_name": "Moritz E. aus Siegen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Maximilian R. aus Gronau",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Philipp O. aus Hennef",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Fabian C. aus Gelsenkirchen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Mild gefällt mir gut. Lohnt sich.",
    "customer_name": "Max V. aus Herford",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas G. aus Bayreuth",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Empfindlich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Nico V. aus Gießen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Florian N. aus Salzgitter",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie U. aus Ludwigshafen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Timo M. aus Darmstadt",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Sascha H. aus Buxtehude",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Vincent K. aus Offenbach",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Noah A. aus Peine",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Leon F. aus Bad Salzuflen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Emil G. aus Brotterode",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Luis X. aus Oberursel",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Arne C. aus Ludwigshafen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Maria D. aus München",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Nadine G. aus Soest",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Simon V. aus Bergkamen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Jonas U. aus Neumünster",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Maximilian A. aus Chemnitz",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Luis I. aus Augsburg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Vincent D. aus Oberursel",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautschutz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Philipp P. aus Passau",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders pH-Wert gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Maximilian Q. aus Lüneburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Finn M. aus Frankfurt (Oder)",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Mild gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Nadine O. aus Mönchengladbach",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Laura L. aus Meerbusch",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders pH-Wert gefällt mir gut. Daumen hoch!",
    "customer_name": "Johannes G. aus Nordhorn",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Nadine W. aus Dinslaken",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Robin U. aus Eschweiler",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Fabian A. aus Pforzheim",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Matteo V. aus Pforzheim",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Empfindlich gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Hannes D. aus Hattingen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Elias U. aus Norderstedt",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Benedikt B. aus Kleve",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders pH-Wert gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Hannes B. aus Moers",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Seifenfrei gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis L. aus Paderborn",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders pH-Wert gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Kevin S. aus Plauen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Bin zufrieden.",
    "customer_name": "Theo I. aus Langenfeld",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Liam M. aus Osnabrück",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Seifenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Luis S. aus Dormagen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders pH-Wert gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Kerstin O. aus Oranienburg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Seifenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Maria O. aus Hagen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Christoph Q. aus Würzburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Bin zufrieden.",
    "customer_name": "Robin I. aus Ambreg",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Bin zufrieden.",
    "customer_name": "Julian Q. aus Hannover",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Mild gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Emil V. aus Memmingen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Empfindlich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Julian A. aus Bocholt",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Nadine Y. aus Ravensburg",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Seifenfrei gefällt mir gut. Vielen Dank.",
    "customer_name": "Dennis T. aus Konstanz",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Kevin F. aus Dresden",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Tom J. aus Siegen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Seifenfrei gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Anna P. aus Bietigheim-Bissingen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Alles richtig gemacht.",
    "customer_name": "Luis G. aus Bamberg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Liam P. aus Hamm",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "David J. aus Kaufbeuren",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Emil S. aus Bielefeld",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Kevin E. aus Gießen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Philipp T. aus Weinheim",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Mild gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Adrian A. aus Bergheim",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Milan Y. aus Lübeck",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Christina G. aus Wesel",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Lenny Q. aus Euskirchen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Robin G. aus Gütersloh",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Seifenfrei ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Vincent L. aus Konstanz",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hautschutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Leo S. aus Essen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Empfindlich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Justus Y. aus Freiburg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Nadine P. aus Bonn",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Kauf ich definitiv wieder.",
    "customer_name": "Felix B. aus Cottbus",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Jonas Z. aus Remscheid",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders pH-Wert gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Bastian A. aus Peine",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Sabine J. aus Kaiserslautern",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Erik T. aus Mainz",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Andrea B. aus Speyer",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Seifenfrei gefällt mir gut. Daumen hoch!",
    "customer_name": "Maria K. aus Leinfelden-Echterdingen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Theo T. aus Neuss",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Sehr zu empfehlen.",
    "customer_name": "Adrian T. aus Gummersbach",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Malte C. aus Bad Salzuflen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Tanja B. aus Lippstadt",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hautschutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Ben Y. aus Böblingen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Timo L. aus Lörrach",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia F. aus Schweinfurt",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christina S. aus Oberursel",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Mild gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Lisa E. aus Bochum",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Monika Q. aus Erlangen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Jan R. aus Kerpen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Hautschutz gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Paul S. aus Koblenz",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Robin M. aus Dormagen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Julia R. aus Wesel",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Seifenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Maria Z. aus Fulda",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Philipp J. aus Buxtehude",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Ben A. aus Halle (Saale)",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Seifenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Nicole D. aus Garbsen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Moritz G. aus Trier",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Dennis D. aus Schwäbisch Gmünd",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Top.",
    "customer_name": "Jan V. aus Halle (Saale)",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Mild gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Christina S. aus Aalen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Lohnt sich.",
    "customer_name": "Niklas P. aus Hamburg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Seifenfrei gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Elias J. aus Brandenburg an der Havel",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Bastian W. aus Erfurt",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Kevin J. aus Kempten",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Lohnt sich.",
    "customer_name": "Malte S. aus Düren",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Seifenfrei gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tim J. aus Kleve",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Liam I. aus Hildesheim",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders pH-Wert gefällt mir gut. Lohnt sich.",
    "customer_name": "Max Y. aus Lingen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Laura Y. aus Witten",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Empfindlich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sabine A. aus Elmshorn",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders pH-Wert gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Henry S. aus Wetzlar",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Claudia X. aus Kaiserslautern",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hautschutz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Jonas N. aus Minden",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Leo O. aus Castrop-Rauxel",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin E. aus Bietigheim-Bissingen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Seifenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Christina Z. aus Viersen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Werde dabei bleiben.",
    "customer_name": "Melanie K. aus Eisenach",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Seifenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Robin G. aus Ulm",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Dennis H. aus Essen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Sascha U. aus Moers",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Ben I. aus Wesel",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Erik V. aus Nürnberg",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Sascha H. aus Gießen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Justus P. aus Emden",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Jan Z. aus Bamberg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Ben I. aus Gladbeck",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Hautschutz gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dominik V. aus Heinsberg",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Bastian O. aus Bad Homburg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny L. aus Sankt Augustin",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Anna U. aus Langenfeld",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Seifenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar B. aus Aachen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Marlon B. aus Oberursel",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Petra A. aus Ludwigsburg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Empfindlich ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Florian M. aus Monheim am Rhein",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Nadine N. aus Trier",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Alexander E. aus Borken",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Daumen hoch!",
    "customer_name": "Nico T. aus Mainz",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Fabian R. aus Bad Oeynhausen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Claudia B. aus Fürth",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Lohnt sich.",
    "customer_name": "Emil F. aus Marl",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Erik P. aus Konstanz",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Liam B. aus Neuwied",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Tobias N. aus Ludwigsburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Bin zufrieden.",
    "customer_name": "Christoph V. aus Passau",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Seifenfrei ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Lukas Q. aus Pforzheim",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Anja G. aus Regensburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Bin zufrieden.",
    "customer_name": "Oskar M. aus Gummersbach",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Jonas S. aus Ulm",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Seifenfrei gefällt mir gut. Lohnt sich.",
    "customer_name": "Nico D. aus Frankfurt (Oder)",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Fabian T. aus Kamen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Claudia N. aus Kassel",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Hannes L. aus Aschaffenburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Empfindlich ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Maria G. aus Nettetal",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Empfindlich gefällt mir gut. Vielen Dank.",
    "customer_name": "Valentin N. aus Neunkirchen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Nicole W. aus Göttingen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Max U. aus Velbert",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Jannik L. aus Gütersloh",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Petra H. aus Konstanz",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Sabine E. aus Dormagen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Absolute Kaufempfehlung.",
    "customer_name": "Yannick X. aus Erftstadt",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Danke!",
    "customer_name": "Finn C. aus Trier",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Liam T. aus Weimar",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Jonas X. aus Göttingen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Nico Z. aus Eisenach",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Mild gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Kevin U. aus Lüneburg",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Seifenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Timo V. aus Bergisch Gladbach",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "Malte V. aus Hof",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Mild gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Moritz R. aus Heilbronn",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Empfindlich ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Philipp J. aus Ravensburg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Seifenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Laura S. aus Remscheid",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Seifenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Monika Z. aus Görlitz",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Jonas R. aus Elmshorn",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Erik B. aus Gera",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Vincent P. aus Gelsenkirchen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders pH-Wert gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Kevin P. aus Hameln",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Leo U. aus Essen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Mild gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Florian Q. aus Ambreg",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Florian G. aus Nordhorn",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Max J. aus Nordhorn",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Luis Q. aus Münster",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "David L. aus Leinfelden-Echterdingen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Jonas P. aus Köln",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Mild gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar U. aus Norderstedt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Sascha H. aus Dachau",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "David N. aus Dortmund",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Mild gefällt mir gut. Top, weiter so.",
    "customer_name": "Sandra J. aus Hanau",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Monika K. aus Velbert",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Bin zufrieden.",
    "customer_name": "Fabian X. aus Bremerhaven",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Super Shop, super Ware.",
    "customer_name": "Kilian U. aus Schwerin",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Dennis V. aus Nordhorn",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Daumen hoch!",
    "customer_name": "Finn I. aus Delmenhorst",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias V. aus Pinneberg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Elias E. aus Stolberg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Oskar Y. aus Flensburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Kevin O. aus Leipzig",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Arne F. aus München",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Anja K. aus Göppingen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Emil L. aus Salzgitter",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Seifenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "David V. aus Weimar",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Seifenfrei gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Johannes K. aus Unna",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Max Y. aus Würzburg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Seifenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Theo O. aus Erlangen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hautschutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Leon A. aus Salzgitter",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Seifenfrei ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Dennis W. aus Hannover",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Sabine R. aus Detmold",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature pH-Wert ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Anja J. aus Rheine",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Seifenfrei gefällt mir gut. Einfach klasse.",
    "customer_name": "Finn M. aus Leonberg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Empfindlich gefällt mir gut. Top, weiter so.",
    "customer_name": "Elias F. aus Memmingen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Birgit D. aus Regensburg",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature pH-Wert ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Dennis U. aus Kaiserslautern",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Mild gefällt mir gut. Daumen hoch!",
    "customer_name": "Maximilian H. aus Witten",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Katharina E. aus Nettetal",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Erik B. aus Fürth",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Seifenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas H. aus Hamburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature pH-Wert ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Justus X. aus Düren",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Stefanie M. aus Neu-Ulm",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Kevin P. aus Nürnberg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Hautschutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Marlon O. aus Essen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Empfindlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna O. aus Bayreuth",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Seifenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Robin Y. aus Arnsberg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Ben N. aus Düsseldorf",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature pH-Wert ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Dominik Z. aus Magdeburg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Einfach klasse.",
    "customer_name": "Jan B. aus Ulm",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Marlon G. aus Pforzheim",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Laura E. aus Rheda-Wiedenbrück",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Oskar X. aus Paderborn",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Tanja T. aus Stuttgart",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautschutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Dominik X. aus Hof",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Sarah M. aus Herford",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Milan S. aus Weinheim",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Tim K. aus Koblenz",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Sabine V. aus Rostock",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Empfindlich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Leon Q. aus Karlsruhe",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Empfindlich gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Melanie V. aus Lörrach",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Mild gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Melanie N. aus Bayreuth",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Seifenfrei gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Malte H. aus Garbsen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Empfindlich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Julia I. aus Bremen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Adrian V. aus Erlangen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Paul O. aus Lemgo",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Valentin R. aus Troisdorf",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders pH-Wert gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Luis Q. aus Dormagen",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Mild gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Samuel F. aus Dessau-Roßlau",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Seifenfrei ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Dominik J. aus Norderstedt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Empfindlich ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Claudia P. aus Schwerin",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Lisa V. aus Neumünster",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Empfindlich ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Adrian P. aus München",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Alexander Z. aus Meerbusch",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Empfindlich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Fabian U. aus Nordhorn",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Dominik Y. aus Menden",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Jonas Y. aus Bad Homburg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Samuel R. aus Freiburg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Claudia M. aus Görlitz",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Seifenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Sabine I. aus Rastatt",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Dennis Z. aus Fulda",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Empfindlich ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Lenny D. aus Norderstedt",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Marlon R. aus Garbsen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Adrian U. aus Hildesheim",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Kerstin G. aus Troisdorf",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Elias Y. aus Bad Salzuflen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Einfach klasse.",
    "customer_name": "Liam G. aus Fulda",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Elias M. aus Schwerin",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian S. aus Hameln",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Finn P. aus Chemnitz",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Empfindlich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Claudia Z. aus Marl",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Paul H. aus Greifswald",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Seifenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Anton H. aus Unna",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Max F. aus Frankfurt",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Mild gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Hannes Q. aus Trier",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Seifenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Luis T. aus Leinfelden-Echterdingen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Kilian S. aus Bremerhaven",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Sarah J. aus Speyer",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Henry S. aus Oberhausen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik X. aus Stuttgart",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Daumen hoch!",
    "customer_name": "Sandra U. aus Freising",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Hautschutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Julia G. aus Kleve",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Seifenfrei gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Kilian Z. aus Soest",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders pH-Wert gefällt mir gut. Lohnt sich.",
    "customer_name": "Marlon T. aus Leverkusen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Top.",
    "customer_name": "Christoph Z. aus Wunstorf",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Julia W. aus Siegen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Christina B. aus Hürth",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Empfindlich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Julian V. aus Wunstorf",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Seifenfrei gefällt mir gut. Einfach klasse.",
    "customer_name": "Dominik D. aus Duisburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Emil V. aus Dülmen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders pH-Wert gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sascha V. aus Augsburg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Maximilian K. aus Trier",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Bin zufrieden.",
    "customer_name": "Maria A. aus Garbsen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Hautschutz gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Julian T. aus Neumünster",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Philipp Q. aus Bremen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Milan Q. aus Potsdam",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Mats J. aus Norderstedt",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Alexander Q. aus Brotterode",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Empfindlich ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Kilian M. aus Memmingen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Anja M. aus Pulheim",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Empfindlich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Oskar D. aus Viersen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Seifenfrei ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Lisa Q. aus Bad Homburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Alles richtig gemacht.",
    "customer_name": "Tom Q. aus Marl",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Empfindlich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Milan A. aus Eisenach",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom D. aus Dresden",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Benedikt C. aus Elmshorn",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders pH-Wert gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Malte S. aus Witten",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Tim M. aus Wesel",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Einfach klasse.",
    "customer_name": "Luis N. aus Minden",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Empfindlich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Alexander N. aus Worms",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders pH-Wert gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Milan J. aus Magdeburg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Benedikt B. aus Friedrichshafen",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature pH-Wert ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Johannes Z. aus Erkrath",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Niklas I. aus Speyer",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Klare 10/10.",
    "customer_name": "Timo R. aus Arnsberg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Vincent Z. aus Bad Oeynhausen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Julia T. aus Solingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Mild gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Birgit Z. aus Mönchengladbach",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Mild gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Monika Y. aus Offenbach",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Jonas L. aus Gelsenkirchen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Seifenfrei gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra K. aus Iserlohn",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Melanie D. aus Kassel",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Anja S. aus Remscheid",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Kilian L. aus Bochum",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Mild gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Nicole N. aus Straubing",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Empfindlich ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Jannik W. aus Heidelberg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders pH-Wert gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Philipp P. aus Görlitz",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Adrian Q. aus Weinheim",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Seifenfrei ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Yannick H. aus Neuwied",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature pH-Wert ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Florian B. aus Rottenburg",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Preis/Leistung past einfach.",
    "customer_name": "Christina O. aus Herford",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Nicole U. aus Lingen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders pH-Wert gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Melanie X. aus Dormagen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Mild gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Julian P. aus Witten",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature pH-Wert ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Ben I. aus Mainz",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Florian G. aus Mannheim",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders pH-Wert gefällt mir gut. Vielen Dank.",
    "customer_name": "Vincent Z. aus Gießen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Kilian O. aus Freising",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature pH-Wert ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Jan F. aus Plauen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Hannes X. aus Mülheim an der Ruhr",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature pH-Wert ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Katharina D. aus Wolfenbüttel",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Seifenfrei gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Dominik B. aus Hilden",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Petra S. aus Lübeck",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature pH-Wert ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Luca A. aus Dorsten",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Lenny A. aus Rottenburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Fabian E. aus Elmshorn",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Seifenfrei ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Justus C. aus Mülheim an der Ruhr",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Johannes E. aus Norderstedt",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Empfindlich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Monika T. aus Wuppertal",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Tom X. aus Lüdenscheid",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra W. aus Hof",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Seifenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Benedikt C. aus Emden",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Nico S. aus Berlin",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Hautschutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Felix R. aus Menden",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Empfindlich ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik C. aus Gera",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "Melanie K. aus Dachau",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Anja O. aus Ravensburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature pH-Wert ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Malte O. aus Ahlen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Benedikt X. aus Meerbusch",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Mild gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Stefanie Y. aus Borken",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Claudia V. aus Osnabrück",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas K. aus Heilbronn",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Monika H. aus Hamm",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Mats E. aus Ibbenbüren",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Milan D. aus Kleve",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Alles richtig gemacht.",
    "customer_name": "Petra V. aus Monheim am Rhein",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne U. aus Detmold",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautschutz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Birgit L. aus Saarbrücken",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Besser geht es nicht.",
    "customer_name": "Arne B. aus Kaiserslautern",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Jonas X. aus Erkrath",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature pH-Wert ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Niklas Z. aus Euskirchen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Super Shop, super Ware.",
    "customer_name": "Luca J. aus Dormagen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Adrian H. aus Kleve",
    "date": "2025-04-01"
  }
];