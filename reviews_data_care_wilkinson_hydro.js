const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sanft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Jan N. aus Dachau",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Sandra U. aus Mannheim",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Gel-Reservoir gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Sarah C. aus Gummersbach",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Monika I. aus Detmold",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Moritz Q. aus Memmingen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Noah P. aus Wuppertal",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Gel-Reservoir gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Nicole W. aus Hanau",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Luca C. aus Bonn",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sanft gefällt mir gut. Vielen Dank.",
    "customer_name": "Liam Q. aus Konstanz",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Bin zufrieden.",
    "customer_name": "Leon S. aus Leverkusen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Anton J. aus Langenfeld",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Johannes D. aus Gießen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Nadine K. aus Erkrath",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders 5 Klingen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lenny Q. aus Wetzlar",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Tanja X. aus Dorsten",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sanft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lisa A. aus Kassel",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tim J. aus Herne",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Johannes U. aus Flensburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Valentin I. aus Witten",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Kippkopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura V. aus Neunkirchen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Benedikt W. aus Kamen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Gel-Reservoir gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Anton W. aus Schwerin",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Philipp Y. aus Bad Oeynhausen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sanft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Luis J. aus Witten",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Gel-Reservoir gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Nicole Z. aus Rastatt",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Laura I. aus Hof",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Sehr zu empfehlen.",
    "customer_name": "Florian P. aus Remscheid",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Noah Q. aus Passau",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders 5 Klingen gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Vincent C. aus Weimar",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Susanne R. aus Wilhelmshaven",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik A. aus Velbert",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Gel-Reservoir gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Dominik U. aus Köln",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Gel-Reservoir gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Tanja R. aus Lüneburg",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna L. aus Fulda",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Malte I. aus Schwäbisch Gmünd",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sanft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Jannik C. aus Erftstadt",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Claudia M. aus Bremerhaven",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Maria J. aus Hamburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Sarah A. aus Potsdam",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders 5 Klingen gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Finn Y. aus Ratingen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Kippkopf gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Florian B. aus Offenburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Fabian E. aus Wolfenbüttel",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hautschutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Ben W. aus Dresden",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Marlon L. aus Esslingen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Katharina O. aus Leonberg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Simon P. aus Kaiserslautern",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Milan L. aus Pforzheim",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Jan K. aus Oberhausen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Luca K. aus Eisenach",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Kippkopf gefällt mir gut. Klare 10/10.",
    "customer_name": "Fabian Y. aus Traunstein",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Fabian L. aus Recklinghausen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Melanie T. aus Trier",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautschutz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik O. aus Würzburg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Erik I. aus Kleve",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Birgit B. aus Kamen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Finn F. aus Oranienburg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon P. aus Arnsberg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Dennis X. aus Dresden",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders 5 Klingen gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Moritz U. aus Freiburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Marlon Y. aus Ravensburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Jannik Z. aus Hürth",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Matteo E. aus Kassel",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Werde dabei bleiben.",
    "customer_name": "Malte W. aus Paderborn",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Hautschutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Milan M. aus Kamen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Susanne B. aus Darmstadt",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Claudia N. aus Speyer",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Hannes M. aus Regensburg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Vincent Y. aus Paderborn",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Anja U. aus Aalen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Bin rundum glücklich damit.",
    "customer_name": "Benedikt A. aus Stralsund",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Julian V. aus Wolfenbüttel",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Milan J. aus Herne",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Yannick R. aus Detmold",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa M. aus Heinsberg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Kippkopf gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Petra Y. aus Nordhorn",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Julian W. aus Meerbusch",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Dominik S. aus Gladbeck",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Dennis A. aus Soest",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Paul W. aus Halle (Saale)",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Noah E. aus Neuwied",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Absolute Kaufempfehlung.",
    "customer_name": "Noah L. aus Remscheid",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Yannick T. aus Leipzig",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Samuel U. aus Lünen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Anna V. aus Gummersbach",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Max E. aus Freising",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Nico V. aus Offenbach",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Jonas L. aus Bad Kreuznach",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sanft ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Birgit V. aus Chemnitz",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Matteo X. aus Speyer",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Valentin D. aus Brandenburg an der Havel",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hautschutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Sabine B. aus Bad Oeynhausen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Sandra Q. aus Kiel",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders 5 Klingen gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Noah W. aus Marburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Kerstin D. aus Bonn",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Anna W. aus Hennef",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Ben Q. aus Rosenheim",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Sabine N. aus Offenbach",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Liam S. aus Rottenburg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Top.",
    "customer_name": "Kevin U. aus Oranienburg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Emil N. aus Hamm",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Simon S. aus Trier",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Matteo T. aus Ulm",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Gel-Reservoir gefällt mir gut. Einfach klasse.",
    "customer_name": "Nicole S. aus Ambreg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sanft gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Liam A. aus Halle (Saale)",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Nico H. aus Wiesbaden",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Philipp Z. aus Dormagen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Milan F. aus Konstanz",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Kippkopf gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Johannes E. aus Erkrath",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Alexander B. aus Castrop-Rauxel",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Bastian M. aus Fellbach",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Luca K. aus Jena",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Katharina B. aus Dresden",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Sanft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Dominik F. aus Neuwied",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Theo E. aus Rüsselsheim",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Christina O. aus Neumünster",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Bin rundum glücklich damit.",
    "customer_name": "Benedikt Q. aus Rodgau",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Anja F. aus Iserlohn",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Gel-Reservoir gefällt mir gut. Einfach klasse.",
    "customer_name": "Samuel Z. aus Hannover",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Sehr zu empfehlen.",
    "customer_name": "Arne E. aus Marburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Oskar X. aus Waiblingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Malte M. aus Oberhausen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Adrian R. aus Potsdam",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Alexander A. aus Zwickau",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Sascha X. aus Köln",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Monika K. aus Freising",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Bin zufrieden.",
    "customer_name": "Katharina B. aus Schwäbisch Gmünd",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Kippkopf gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Tanja N. aus Cottbus",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Monika J. aus Wetzlar",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Sabine M. aus Hildesheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Ben O. aus Ahlen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Christoph V. aus Recklinghausen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Kerstin Y. aus Schweinfurt",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Niklas M. aus Aschaffenburg",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes O. aus Aachen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Leo O. aus Rostock",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Lenny B. aus Wiesbaden",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Hautschutz gefällt mir gut. Lohnt sich.",
    "customer_name": "Valentin L. aus Buxtehude",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Robin Y. aus Recklinghausen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Sabine M. aus Unna",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Jan S. aus Wilhelmshaven",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Paul C. aus Görlitz",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Vincent L. aus Hof",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Kerstin B. aus Peine",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Moritz J. aus Greifswald",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Jonas H. aus Schwerin",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Robin G. aus Oranienburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Klare 10/10.",
    "customer_name": "Tom H. aus Konstanz",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Valentin R. aus Chemnitz",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Sabine H. aus Oldenburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Milan Y. aus Kassel",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Gel-Reservoir gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Robin U. aus Memmingen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julia W. aus Eisenach",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Vincent H. aus Oranienburg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Lisa W. aus Heidenheim",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Sanft ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Alexander X. aus Heilbronn",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Erik C. aus Konstanz",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Klare 10/10.",
    "customer_name": "Adrian C. aus Göppingen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Danke!",
    "customer_name": "Sandra G. aus Braunschweig",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Kippkopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Ben D. aus Bremen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders 5 Klingen gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Tom K. aus Böblingen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders 5 Klingen gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Melanie B. aus Aurich",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Moritz B. aus Würzburg",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra N. aus Ulm",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Christina F. aus Eschweiler",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Absolute Kaufempfehlung.",
    "customer_name": "Ben C. aus Mülheim an der Ruhr",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Gel-Reservoir gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Leo U. aus Erfurt",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Andrea U. aus Böblingen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "David E. aus Dachau",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Tim M. aus Weinheim",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Benedikt X. aus Rheda-Wiedenbrück",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Anton S. aus Frankfurt (Oder)",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Susanne T. aus Düren",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Julia A. aus Kaufbeuren",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Henry V. aus Nettetal",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Claudia G. aus Wolfsburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Valentin K. aus Bornheim",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Sabine M. aus Waiblingen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Sanft ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul F. aus Neustadt an der Weinstraße",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Sandra K. aus Freising",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Justus Z. aus Göttingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Elias P. aus Troisdorf",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Max C. aus Siegen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dennis D. aus Lünen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Hautschutz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Malte I. aus Pulheim",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Malte K. aus Rastatt",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Hannes N. aus Lörrach",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Robin Z. aus Schwerin",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Katharina R. aus Neu-Ulm",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Erik C. aus Melle",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Einfach klasse.",
    "customer_name": "Julia R. aus Offenburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Dominik T. aus Rodgau",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Benedikt T. aus Brotterode",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Timo B. aus Oranienburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sanft gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Hannes O. aus Hennef",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Sanft ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Maximilian V. aus Reutlingen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Luca I. aus Leinfelden-Echterdingen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Samuel O. aus Velbert",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Vincent W. aus Halle (Saale)",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders 5 Klingen gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Nicole K. aus Detmold",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Christoph X. aus Oberhausen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Claudia K. aus Friedrichshafen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Luis K. aus Hameln",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Yannick A. aus Saarbrücken",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sanft gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Maria B. aus Heilbronn",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Kippkopf gefällt mir gut. Lohnt sich.",
    "customer_name": "Mats T. aus Kaufbeuren",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Tobias Z. aus Eschweiler",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Johannes D. aus Herford",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Kann ich nur weiterempfehlen.",
    "customer_name": "Henry A. aus Göppingen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Anja H. aus Dortmund",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Justus I. aus Recklinghausen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Tobias E. aus Bad Salzuflen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Bastian N. aus Neuwied",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Einfach klasse.",
    "customer_name": "Felix A. aus Herford",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Monika H. aus Neunkirchen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Bin zufrieden.",
    "customer_name": "Henry H. aus Weinheim",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Gel-Reservoir gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Max L. aus Frankfurt",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Max Q. aus Schwerin",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Preis/Leistung past einfach.",
    "customer_name": "Emil Q. aus Gera",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Elias C. aus Brandenburg an der Havel",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Robin F. aus Düsseldorf",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Top.",
    "customer_name": "Samuel Y. aus Eschweiler",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Julia J. aus Bremen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Oskar A. aus Pforzheim",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Samuel M. aus Kempten",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Arne X. aus Rostock",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Alexander V. aus Hennef",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Milan Q. aus Hagen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Luis B. aus Trier",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Lukas M. aus Bruchsal",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Leo O. aus Leinfelden-Echterdingen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Luis D. aus Augsburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Luca O. aus Bad Salzuflen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Luis T. aus Recklinghausen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Theo O. aus Oberursel",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Sanft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Nadine X. aus Oberursel",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Tom J. aus Hanau",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin C. aus Münster",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Sabine Z. aus Castrop-Rauxel",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Lukas M. aus Wesel",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Malte B. aus Neustadt an der Weinstraße",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Kippkopf gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Maria D. aus Neumünster",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Felix B. aus Schwerin",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Niklas D. aus Neustadt an der Weinstraße",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Luis Z. aus Mülheim an der Ruhr",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Lisa T. aus Oldenburg",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Melanie W. aus Emden",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Stefanie F. aus Soest",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Kippkopf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Valentin E. aus Leverkusen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Mats X. aus Leipzig",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Jan F. aus Wetzlar",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Niklas N. aus Aurich",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Claudia C. aus Salzgitter",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Luca W. aus Borken",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Lohnt sich.",
    "customer_name": "Noah A. aus Tübingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Mats S. aus Kaufbeuren",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Philipp E. aus Gelsenkirchen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Hannes E. aus Bietigheim-Bissingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Emil Y. aus Rheda-Wiedenbrück",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders 5 Klingen gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Oskar V. aus Baden-Baden",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Milan Z. aus Bornheim",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hautschutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Elias I. aus Herford",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Nico H. aus Bruchsal",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina Z. aus Lüneburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders 5 Klingen gefällt mir gut. Daumen hoch!",
    "customer_name": "Tom J. aus Leipzig",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Philipp X. aus Nettetal",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Dennis L. aus Lippstadt",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Gel-Reservoir gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Monika V. aus Remscheid",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Adrian I. aus Frechen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Andrea R. aus Nettetal",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders 5 Klingen gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Philipp Y. aus Dinslaken",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sanft gefällt mir gut. Daumen hoch!",
    "customer_name": "Tim I. aus Esslingen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Top.",
    "customer_name": "Leon H. aus Flensburg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Theo H. aus Detmold",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Gel-Reservoir gefällt mir gut. Daumen hoch!",
    "customer_name": "Susanne X. aus Trier",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Andrea Y. aus Hamm",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Oskar J. aus Essen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Florian Z. aus Magdeburg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Sascha X. aus Buxtehude",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Robin N. aus Marburg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sanft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Niklas C. aus Bremerhaven",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Yannick G. aus Tübingen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Werde dabei bleiben.",
    "customer_name": "Theo Y. aus Dinslaken",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Jan J. aus Mülheim an der Ruhr",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Hannes Z. aus Göttingen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Kilian C. aus Garbsen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Katharina H. aus Neuss",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. 5 Sterne von mir.",
    "customer_name": "Sascha T. aus Chemnitz",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Henry K. aus Aachen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Theo W. aus Bergisch Gladbach",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Kilian V. aus Aurich",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders 5 Klingen gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Tim L. aus Leverkusen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders 5 Klingen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Johannes A. aus Tübingen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Sandra C. aus Rottenburg",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sanft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Tom V. aus Weimar",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Sanft gefällt mir gut. Top, weiter so.",
    "customer_name": "Maximilian Q. aus Greifswald",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Christina E. aus Straubing",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Julia Z. aus Lörrach",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders 5 Klingen gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Petra Y. aus Freiburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Leo M. aus Garbsen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Leon J. aus Lingen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Simon J. aus Münster",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Bin zufrieden.",
    "customer_name": "Leo Y. aus Eisenach",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders 5 Klingen gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Melanie K. aus Krefeld",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "Monika S. aus Sankt Augustin",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Christoph F. aus Villingen-Schwenningen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Christina N. aus Friedrichshafen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Emil I. aus Hilden",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Alles richtig gemacht.",
    "customer_name": "Nadine U. aus Bad Kreuznach",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Elias L. aus Bonn",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Maximilian Y. aus Bonn",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Einfach klasse.",
    "customer_name": "Hannes N. aus Viersen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Kippkopf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Liam T. aus Halle (Saale)",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Hautschutz gefällt mir gut. Lohnt sich.",
    "customer_name": "Andrea X. aus Kleve",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Andrea H. aus Rastatt",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Danke!",
    "customer_name": "Luis S. aus Lünen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Marlon H. aus Pinneberg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Anja I. aus Bonn",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Sanft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Liam A. aus Schweinfurt",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max M. aus Zwickau",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sanft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Max T. aus Saarbrücken",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sanft gefällt mir gut. Lohnt sich.",
    "customer_name": "Henry B. aus Brotterode",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Gel-Reservoir gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Liam X. aus Gütersloh",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Christoph V. aus Ulm",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Werde dabei bleiben.",
    "customer_name": "Justus A. aus Aschaffenburg",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Samuel R. aus Düsseldorf",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Matteo L. aus Moers",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Jonas M. aus Rüsselsheim",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Philipp W. aus Dinslaken",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Milan U. aus Garbsen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "Susanne L. aus Ludwigshafen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Kilian O. aus München",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Timo W. aus Bad Oeynhausen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Justus R. aus Rheda-Wiedenbrück",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Maria B. aus Düren",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Anna Y. aus Würzburg",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Niklas D. aus Herford",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hautschutz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Felix D. aus Gütersloh",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Henry W. aus Bruchsal",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Bin zufrieden.",
    "customer_name": "Lenny N. aus Bad Salzuflen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Marlon N. aus Dachau",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Danke!",
    "customer_name": "Florian W. aus Ibbenbüren",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Vielen Dank.",
    "customer_name": "Nico Q. aus Konstanz",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders 5 Klingen gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Fabian K. aus Rastatt",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Birgit J. aus Monheim am Rhein",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hautschutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Niklas D. aus Bergkamen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Susanne Y. aus Aschaffenburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Elias E. aus Osnabrück",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Bin zufrieden.",
    "customer_name": "Christina V. aus Neunkirchen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Leon R. aus Dinslaken",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Paul D. aus Schwäbisch Gmünd",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Kippkopf gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Niklas K. aus Mönchengladbach",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Kilian N. aus Landshut",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Florian H. aus Fürth",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Matteo U. aus Lahr",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sabine Q. aus Ludwigsburg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders 5 Klingen gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Petra I. aus Herten",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Liam J. aus Albstadt",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sanft gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Philipp P. aus Peine",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Samuel I. aus Nordhorn",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Nadine S. aus Halle (Saale)",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Kilian L. aus Halle (Saale)",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Arne E. aus Gummersbach",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Bin zufrieden.",
    "customer_name": "Simon E. aus Wesel",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Philipp F. aus Gronau",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Julian A. aus Arnsberg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Daumen hoch!",
    "customer_name": "Timo L. aus Pforzheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautschutz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Philipp F. aus Bocholt",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Top.",
    "customer_name": "Maria F. aus Bayreuth",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders 5 Klingen gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Philipp E. aus Frechen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Justus L. aus Herzogenrath",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sanft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Marlon E. aus Minden",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Nie mehr ohne.",
    "customer_name": "Dominik Z. aus Gelsenkirchen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders 5 Klingen gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Max S. aus Castrop-Rauxel",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Stefanie A. aus Weimar",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Maximilian X. aus Dresden",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Sascha D. aus Ludwigsburg",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Sabine E. aus Wilhelmshaven",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Jan N. aus Herford",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Laura I. aus Lemgo",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Liam K. aus Bornheim",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Nico M. aus Soest",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Hautschutz gefällt mir gut. Einfach klasse.",
    "customer_name": "Tim X. aus Ingolstadt",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Emil C. aus Mülheim an der Ruhr",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Bastian B. aus Heinsberg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Philipp R. aus Göppingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Luis C. aus Bietigheim-Bissingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Kauf ich definitiv wieder.",
    "customer_name": "Fabian Q. aus Sindelfingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature 5 Klingen ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Philipp F. aus Dorsten",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Gel-Reservoir gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon Y. aus Saarbrücken",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Hautschutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Robin P. aus Aschaffenburg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Kilian J. aus Langenhagen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Matteo V. aus Ludwigsburg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Kippkopf gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Samuel A. aus Regensburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Absolute Kaufempfehlung.",
    "customer_name": "Petra I. aus Bruchsal",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sanft gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam P. aus Friedrichshafen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Dennis F. aus München",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Lukas J. aus Neuwied",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Luca I. aus Braunschweig",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Nicole W. aus Kamen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Marlon H. aus Alsdorf",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders 5 Klingen gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sarah P. aus Göttingen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Kauf ich definitiv wieder.",
    "customer_name": "Justus V. aus Mannheim",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders 5 Klingen gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Justus Y. aus Böblingen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Dennis O. aus Stuttgart",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Matteo M. aus Bergisch Gladbach",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Leon Y. aus Lahr",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Laura Q. aus Düren",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Katharina O. aus Paderborn",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Gel-Reservoir gefällt mir gut. Klare 10/10.",
    "customer_name": "Hannes Q. aus Magdeburg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Timo H. aus Leinfelden-Echterdingen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik A. aus Worms",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Dennis V. aus Herten",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Felix J. aus Passau",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis F. aus Potsdam",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Moritz K. aus Kaiserslautern",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Lukas B. aus Monheim am Rhein",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Noah T. aus Heilbronn",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Kippkopf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Christoph Y. aus Chemnitz",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Melanie U. aus Reutlingen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Kippkopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny C. aus Freiburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Hautschutz gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Lisa E. aus Borken",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Hannes M. aus Dülmen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Laura R. aus Worms",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Sanft ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Arne O. aus Brotterode",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Top, weiter so.",
    "customer_name": "Sascha Q. aus Oberursel",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Timo T. aus Pulheim",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Maximilian P. aus Delmenhorst",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Kippkopf gefällt mir gut. Vielen Dank.",
    "customer_name": "Theo M. aus Kassel",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Leo K. aus Gütersloh",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Milan V. aus Göttingen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Kerstin U. aus Bocholt",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Kippkopf gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Christina Q. aus Herford",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Moritz X. aus Wiesbaden",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Max T. aus Gelsenkirchen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Kauf ich definitiv wieder.",
    "customer_name": "Julian T. aus Elmshorn",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Kerstin Y. aus Lübeck",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Kippkopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Laura Q. aus Neumünster",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Christoph X. aus Oldenburg",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Nico P. aus Gütersloh",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Andrea J. aus Göttingen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Tom V. aus Hürth",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Kippkopf gefällt mir gut. Vielen Dank.",
    "customer_name": "Lisa H. aus Ahlen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Claudia L. aus Salzgitter",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Adrian E. aus Bocholt",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Yannick E. aus Viersen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin H. aus Darmstadt",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Katharina T. aus Eschweiler",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders 5 Klingen gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Vincent V. aus Hamburg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Besser geht es nicht.",
    "customer_name": "Julian R. aus Erftstadt",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Bin rundum glücklich damit.",
    "customer_name": "Malte Y. aus Velbert",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Bin zufrieden.",
    "customer_name": "Katharina R. aus Schwäbisch Gmünd",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Einfach klasse.",
    "customer_name": "Claudia J. aus Ludwigshafen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Ben V. aus Speyer",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Top.",
    "customer_name": "Lukas V. aus Lahr",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Laura P. aus Marburg",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Jonas W. aus Erlangen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Gel-Reservoir gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Anton L. aus Marburg",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Sarah O. aus Dülmen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sanft gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Dominik K. aus Bamberg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Kippkopf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Kevin Q. aus Paderborn",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders 5 Klingen gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Jonas U. aus Speyer",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Justus N. aus Hanau",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hautschutz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Florian N. aus Bad Oeynhausen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders 5 Klingen gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Paul E. aus Paderborn",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Hautschutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Maria C. aus Leverkusen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Monika L. aus Weinheim",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Benedikt F. aus Aachen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sanft gefällt mir gut. Einfach klasse.",
    "customer_name": "David U. aus Böblingen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Laura E. aus Ahlen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Anton C. aus Augsburg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Marlon H. aus Frankfurt",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Tobias H. aus Eisenach",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Justus N. aus Kerpen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Klare 10/10.",
    "customer_name": "Julia L. aus Castrop-Rauxel",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Timo G. aus Offenbach",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Dennis W. aus Heilbronn",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Nadine S. aus Sindelfingen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Sabine R. aus Straubing",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Hautschutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Finn A. aus Leinfelden-Echterdingen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Hautschutz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Florian R. aus Gießen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Hautschutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Arne J. aus Gera",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Nadine P. aus Ambreg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Noah X. aus Soest",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Sanft gefällt mir gut. Top, weiter so.",
    "customer_name": "Tom U. aus Elmshorn",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Liam Y. aus Euskirchen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Birgit W. aus Wunstorf",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Jonas A. aus Borken",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Johannes H. aus Rheda-Wiedenbrück",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Gel-Reservoir gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lukas O. aus Unna",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Kippkopf gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Laura Y. aus Neuss",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Lenny B. aus Freising",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Yannick F. aus Oldenburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Christoph R. aus Solingen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sanft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Leon S. aus Memmingen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Yannick N. aus Herten",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Yannick O. aus Koblenz",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Dennis E. aus Freiburg",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Timo M. aus Marl",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Lohnt sich.",
    "customer_name": "Dennis A. aus Reutlingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Laura J. aus Baden-Baden",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Kippkopf gefällt mir gut. Klare 10/10.",
    "customer_name": "Dominik L. aus Aschaffenburg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Lukas Q. aus Bamberg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Sandra W. aus Chemnitz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders 5 Klingen gefällt mir gut. Daumen hoch!",
    "customer_name": "Elias B. aus Castrop-Rauxel",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Jannik F. aus Bremerhaven",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Paul T. aus Melle",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders 5 Klingen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Luca N. aus Saarbrücken",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Monika X. aus Köln",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Hannes T. aus Neunkirchen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Sascha I. aus Wiesbaden",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Luca K. aus Stuttgart",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Moritz V. aus Ludwigshafen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Dennis R. aus Neunkirchen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders 5 Klingen gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Jonas O. aus Gummersbach",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Tanja J. aus Dachau",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Henry X. aus Rostock",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Hannes S. aus Remscheid",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Kilian K. aus Hagen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Nadine X. aus Leverkusen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Hautschutz gefällt mir gut. Einfach klasse.",
    "customer_name": "Florian L. aus Halle (Saale)",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Nadine W. aus Gütersloh",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Luis V. aus Rastatt",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Valentin C. aus Detmold",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Katharina K. aus Rodgau",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Alexander O. aus Mülheim an der Ruhr",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Anja U. aus Wesel",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Kippkopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia P. aus Kamen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Melanie L. aus Lüneburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Lukas P. aus Lörrach",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sanft gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Robin O. aus Bottrop",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Dennis Y. aus Eisenach",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Ben Y. aus Wilhelmshaven",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Sascha R. aus Villingen-Schwenningen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Noah K. aus München",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Benedikt F. aus Frankfurt (Oder)",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Emil J. aus Augsburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hautschutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Emil K. aus Greifswald",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah D. aus Dachau",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Gel-Reservoir gefällt mir gut. Vielen Dank.",
    "customer_name": "Tim N. aus Nordhorn",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sanft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Laura J. aus Kaufbeuren",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "David U. aus Rheda-Wiedenbrück",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Claudia U. aus Pulheim",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sanft ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Arne S. aus Stuttgart",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Nicole E. aus Berlin",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Gel-Reservoir gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Laura U. aus Trier",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Tom D. aus Unna",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Lenny K. aus Menden",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Maximilian W. aus Flensburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Lisa M. aus Waiblingen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders 5 Klingen gefällt mir gut. Einfach klasse.",
    "customer_name": "Sabine X. aus Berlin",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Timo M. aus München",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Gel-Reservoir gefällt mir gut. Vielen Dank.",
    "customer_name": "Fabian K. aus Kassel",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Kippkopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Tobias U. aus Koblenz",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Milan K. aus Darmstadt",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Oskar A. aus Hanau",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Sascha R. aus Koblenz",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina F. aus Bruchsal",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Sabine G. aus Filderstadt",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik J. aus Köln",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders 5 Klingen gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Anton V. aus Dormagen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Anton N. aus Bergisch Gladbach",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Florian M. aus Mannheim",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders 5 Klingen gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Luis Z. aus Frankfurt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Sanft ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Hannes C. aus Lippstadt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Petra G. aus Aschaffenburg",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Stefanie I. aus Hagen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Emil B. aus Greifswald",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Benedikt H. aus Borken",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Kippkopf ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Max N. aus Jena",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Lukas H. aus Rostock",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Florian F. aus Freiburg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Moritz H. aus Gelsenkirchen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Klare 10/10.",
    "customer_name": "Lenny N. aus Hamburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautschutz gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Julia Q. aus Weimar",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Anja F. aus Minden",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Noah G. aus Melle",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Anna X. aus Saarbrücken",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Andrea G. aus Fürth",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Niklas W. aus Bad Kreuznach",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Kippkopf gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Bastian V. aus Neuss",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Sanft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Lenny H. aus Lübeck",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Robin A. aus Iserlohn",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Christoph W. aus Albstadt",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik Y. aus Böblingen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Philipp U. aus Ludwigshafen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Elias N. aus Peine",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Anna N. aus Leverkusen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Top.",
    "customer_name": "Monika D. aus Dorsten",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Mats K. aus Ravensburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Leon F. aus Göttingen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Yannick X. aus Sindelfingen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. 5 Sterne von mir.",
    "customer_name": "Leo W. aus Recklinghausen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Kerstin P. aus Neuss",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Valentin K. aus Arnsberg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Melanie U. aus Erlangen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Dominik I. aus Lahr",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Jan F. aus Gronau",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders 5 Klingen gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Maria D. aus Delmenhorst",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Gel-Reservoir gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Matteo F. aus Dessau-Roßlau",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Kippkopf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Anna W. aus Wolfsburg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Jannik V. aus Kamen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sanft ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Mats S. aus Mannheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Alles richtig gemacht.",
    "customer_name": "Finn X. aus Heidenheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders 5 Klingen gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Mats H. aus Osnabrück",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "David W. aus Moers",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Emil L. aus Gütersloh",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Kilian K. aus Dinslaken",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders 5 Klingen gefällt mir gut. Klare 10/10.",
    "customer_name": "Niklas B. aus Bergheim",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Timo N. aus Dessau-Roßlau",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Maximilian F. aus Ibbenbüren",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Einfach klasse.",
    "customer_name": "Samuel K. aus Heidenheim",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Daumen hoch!",
    "customer_name": "Tanja P. aus Moers",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders 5 Klingen gefällt mir gut. Daumen hoch!",
    "customer_name": "Henry O. aus Bergheim",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Vielen Dank.",
    "customer_name": "Tim M. aus Potsdam",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Tobias S. aus Bad Oeynhausen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Valentin C. aus Menden",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Anton I. aus Oberursel",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Vincent C. aus Norderstedt",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hautschutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Paul H. aus Schwerin",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Leo P. aus Garbsen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Kippkopf gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Leon X. aus Freising",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders 5 Klingen gefällt mir gut. Daumen hoch!",
    "customer_name": "Susanne G. aus Lahr",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Anna T. aus Langenfeld",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "David Q. aus Erlangen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Timo P. aus Dessau-Roßlau",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Noah X. aus Lübeck",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Florian T. aus Ambreg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Erik J. aus Peine",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Julia V. aus Borken",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders 5 Klingen gefällt mir gut. Top, weiter so.",
    "customer_name": "Matteo V. aus Düren",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Christina K. aus Rheine",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Nicole N. aus Tübingen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Valentin G. aus Leipzig",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Christina N. aus Dinslaken",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Mats H. aus Langenfeld",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Nadine T. aus Wiesbaden",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Sascha C. aus Troisdorf",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Andrea M. aus Bochum",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin J. aus Hattingen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Tom R. aus Darmstadt",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Oskar Z. aus Augsburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Henry H. aus Fellbach",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Adrian S. aus Berlin",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Fabian D. aus Neuwied",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Top, weiter so.",
    "customer_name": "Sarah C. aus Borken",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature 5 Klingen ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Moritz B. aus Tübingen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Theo M. aus Ingolstadt",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Finn E. aus Kamen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hautschutz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin V. aus Erlangen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Monika I. aus Fellbach",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Tom S. aus Bergisch Gladbach",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Absolute Kaufempfehlung.",
    "customer_name": "Tanja T. aus Rheda-Wiedenbrück",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Arne S. aus Kiel",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja K. aus Neumünster",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Kauf ich definitiv wieder.",
    "customer_name": "Theo W. aus Bayreuth",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Susanne P. aus Viersen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Samuel P. aus Kaufbeuren",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Gel-Reservoir gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Anna U. aus Krefeld",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Monika X. aus Buxtehude",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Maria K. aus Traunstein",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Nicole D. aus Norderstedt",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Daumen hoch!",
    "customer_name": "Moritz Y. aus Detmold",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Jan K. aus Hannover",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Tobias W. aus Ibbenbüren",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Gel-Reservoir gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik C. aus Potsdam",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Danke!",
    "customer_name": "Liam Z. aus Kerpen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Niklas X. aus Garbsen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Sanft ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nadine X. aus Greifswald",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Maria S. aus Kerpen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders 5 Klingen gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Lukas H. aus Brotterode",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders 5 Klingen gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Claudia D. aus Chemnitz",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Henry F. aus Offenburg",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Kippkopf ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Fabian W. aus Bonn",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Anja S. aus Elmshorn",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Maximilian N. aus Kaiserslautern",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hautschutz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Theo X. aus Witten",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Jonas U. aus Bruchsal",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hautschutz ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Nadine R. aus Bruchsal",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Hautschutz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Christina M. aus Garbsen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Alexander P. aus Paderborn",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sanft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Sarah M. aus Viersen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Kippkopf gefällt mir gut. Klare 10/10.",
    "customer_name": "Luis N. aus Darmstadt",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Stefanie E. aus Erkrath",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Jan B. aus Neunkirchen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Niklas W. aus Rastatt",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Tom V. aus Borken",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Kippkopf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Alexander Z. aus Kleve",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Top.",
    "customer_name": "Marlon L. aus Bamberg",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "David J. aus Bergkamen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Christina M. aus Sindelfingen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Werde dabei bleiben.",
    "customer_name": "Katharina V. aus Eschweiler",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Anja V. aus Moers",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Gel-Reservoir gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Julia F. aus Lippstadt",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Philipp L. aus Kempten",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Sandra U. aus Ahlen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Matteo K. aus Bergheim",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Kippkopf gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Dominik L. aus Moers",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Nie mehr ohne.",
    "customer_name": "Nadine V. aus Oldenburg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Leon D. aus Magdeburg",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Kippkopf ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Nadine B. aus Buxtehude",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Danke!",
    "customer_name": "Timo Q. aus Konstanz",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie O. aus Garbsen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "David G. aus Minden",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Bin zufrieden.",
    "customer_name": "Maria F. aus Lemgo",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Theo E. aus Magdeburg",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Leo A. aus Nordhorn",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Luis N. aus Memmingen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Lisa N. aus Bamberg",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders 5 Klingen gefällt mir gut. Top, weiter so.",
    "customer_name": "Monika F. aus Bielefeld",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "David M. aus Grevenbroich",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hautschutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Alexander N. aus Fürth",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Leo F. aus Ludwigshafen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Matteo I. aus Aachen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Erik Q. aus Oberhausen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Hannes Q. aus Trier",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Yannick F. aus Lingen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Gel-Reservoir gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Matteo Q. aus Kleve",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Kauf ich definitiv wieder.",
    "customer_name": "Susanne C. aus Lüdenscheid",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Oskar K. aus Essen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Birgit G. aus Nürnberg",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Kippkopf gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Nadine X. aus Potsdam",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Felix A. aus Monheim am Rhein",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Monika W. aus Rottenburg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sanft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Fabian U. aus Brandenburg an der Havel",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Florian K. aus Troisdorf",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Sanft ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Stefanie O. aus Dormagen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Preis/Leistung past einfach.",
    "customer_name": "Julian M. aus Bergisch Gladbach",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Andrea E. aus Wiesbaden",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Gel-Reservoir gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Milan C. aus Bruchsal",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Lukas Z. aus Rostock",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Sanft ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Dominik D. aus Oberursel",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Danke!",
    "customer_name": "Anna B. aus Mainz",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Petra H. aus Wolfenbüttel",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Sarah U. aus Offenbach",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Sascha H. aus Bielefeld",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Timo I. aus Herne",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hautschutz gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Florian S. aus Neumünster",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Leo D. aus Gießen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Kippkopf gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Dennis V. aus Ibbenbüren",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders 5 Klingen gefällt mir gut. Vielen Dank.",
    "customer_name": "Benedikt V. aus Bergkamen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Andrea S. aus Leonberg",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Yannick O. aus Wetzlar",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders 5 Klingen gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Claudia U. aus Delmenhorst",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Christina H. aus Ratingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Sanft gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico U. aus Siegen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Theo M. aus Schwerin",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Hannes S. aus Bamberg",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature 5 Klingen ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Valentin M. aus Passau",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders 5 Klingen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian N. aus Sankt Augustin",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature 5 Klingen ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Sandra R. aus München",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Lisa X. aus Dinslaken",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Kippkopf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Theo E. aus Herten",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Bastian I. aus Lörrach",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Justus D. aus Eisenach",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Daumen hoch!",
    "customer_name": "Marlon J. aus Friedrichshafen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Kippkopf gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lisa I. aus Heidelberg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Robin U. aus Wolfenbüttel",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Leo I. aus Mülheim an der Ruhr",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Nadine I. aus Frankfurt",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Luca F. aus Hilden",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Finn F. aus Lahr",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Melanie K. aus Meerbusch",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Petra B. aus Gummersbach",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Kevin N. aus Schwerin",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Julia R. aus Ratingen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Yannick W. aus Braunschweig",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Werde dabei bleiben.",
    "customer_name": "Jan E. aus Emden",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Sabine E. aus Freising",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sanft ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Florian M. aus Potsdam",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sanft gefällt mir gut. Lohnt sich.",
    "customer_name": "Hannes Y. aus Rastatt",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Alexander T. aus Gießen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Johannes D. aus Neustadt an der Weinstraße",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Hannes C. aus Filderstadt",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Kippkopf gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah J. aus Ingolstadt",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Bastian S. aus Aalen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sanft ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Maria Q. aus Menden",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Sanft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Oskar E. aus Gronau",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Florian F. aus Bremen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature 5 Klingen ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Benedikt F. aus Borken",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Hautschutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Sandra Q. aus Albstadt",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Dominik N. aus Kassel",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Kippkopf gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Melanie R. aus Herten",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Vielen Dank.",
    "customer_name": "Petra G. aus Offenbach",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Justus O. aus Trier",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature 5 Klingen ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Niklas Z. aus Gelsenkirchen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Justus J. aus Solingen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Luca B. aus Langenhagen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jan G. aus Neuwied",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Henry A. aus Hilden",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sanft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Nicole T. aus Garbsen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Christina L. aus Minden",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Kippkopf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom E. aus Viersen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Max K. aus Wolfsburg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Danke!",
    "customer_name": "Sandra D. aus Hennef",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gel-Reservoir ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Kerstin D. aus Bergheim",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Hautschutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne A. aus Gronau",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Simon T. aus Marl",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Christina C. aus Weinheim",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Jan V. aus Velbert",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gel-Reservoir ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Felix Z. aus Viersen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature 5 Klingen ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Theo B. aus Filderstadt",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Anton C. aus Mannheim",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Julia U. aus Kempten",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Hautschutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent H. aus Rüsselsheim",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sanft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Sarah A. aus Gelsenkirchen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Einfach klasse.",
    "customer_name": "Matteo P. aus Bielefeld",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Daumen hoch!",
    "customer_name": "Christina D. aus Baden-Baden",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Kippkopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Dominik M. aus Garbsen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Petra C. aus Berlin",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Kippkopf gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Anton U. aus Bremerhaven",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Preis/Leistung past einfach.",
    "customer_name": "Milan Q. aus Nürnberg",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Tim F. aus Sankt Augustin",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Robin W. aus Offenburg",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hautschutz ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Malte E. aus Sankt Augustin",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Kippkopf gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Philipp N. aus Herford",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Yannick S. aus Gütersloh",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Kippkopf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Milan C. aus Mülheim an der Ruhr",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Kippkopf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Katharina I. aus Eschweiler",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Robin Q. aus Rottenburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Sandra M. aus Worms",
    "date": "2025-04-01"
  }
];