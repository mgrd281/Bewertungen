const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Henry Y. aus Heilbronn",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Theo X. aus Rheda-Wiedenbrück",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Florian M. aus Soest",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Vincent S. aus Freiburg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sport gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Luis Q. aus Gelsenkirchen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Monika M. aus Düsseldorf",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Kerstin T. aus Troisdorf",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Leon B. aus Zwickau",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "Claudia W. aus Rüsselsheim",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Melanie D. aus Lörrach",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Justus C. aus Marl",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Nadine D. aus Pulheim",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Johannes U. aus Hamm",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Liam I. aus Hürth",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Mats I. aus Ahlen",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sport ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Justus O. aus Bietigheim-Bissingen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Leo M. aus Frankfurt",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja O. aus Marl",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Luis X. aus Rottenburg",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Bastian A. aus Neuss",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Leon E. aus Dinslaken",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Trocken gefällt mir gut. Klare 10/10.",
    "customer_name": "Katharina I. aus Arnsberg",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Benedikt F. aus Filderstadt",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Niklas X. aus Göppingen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schutz gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Emil O. aus Schwerin",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Sandra P. aus Siegen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Samuel F. aus Rheine",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sport gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Leo L. aus Fulda",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Yannick V. aus Albstadt",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Max F. aus Lörrach",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Samuel Q. aus Augsburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Sport gefällt mir gut. Daumen hoch!",
    "customer_name": "Fabian J. aus Aachen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Arne Z. aus Kleve",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Bin zufrieden.",
    "customer_name": "Birgit L. aus Hilden",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Henry S. aus Stolberg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea O. aus Neuwied",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Sport ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Lisa F. aus Marl",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Lukas E. aus Rosenheim",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Sascha V. aus Straubing",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Sport ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Marlon V. aus Eschweiler",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Benedikt N. aus Düren",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Trocken gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Benedikt Q. aus Ingolstadt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Leon P. aus Nürnberg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schutz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Philipp V. aus Schwäbisch Gmünd",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Niklas L. aus Ibbenbüren",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Bin rundum glücklich damit.",
    "customer_name": "Benedikt Q. aus Leinfelden-Echterdingen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Hält ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Christoph E. aus Gütersloh",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Top.",
    "customer_name": "Stefanie F. aus Osnabrück",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Trocken ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Christina M. aus Eisenach",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Bewegung gefällt mir gut. Lohnt sich.",
    "customer_name": "Tobias R. aus Nordhorn",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Bewegung gefällt mir gut. Vielen Dank.",
    "customer_name": "Tim O. aus Erlangen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Liam L. aus Ludwigshafen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Christoph W. aus Aschaffenburg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Emil O. aus Delmenhorst",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Leon E. aus Bonn",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Alles richtig gemacht.",
    "customer_name": "Hannes I. aus Lüneburg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Noah F. aus Greifswald",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Bewegung gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Sarah Z. aus Augsburg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schutz gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Noah C. aus Garbsen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Luca Y. aus Nordhorn",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Florian Y. aus Nettetal",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Kilian Q. aus Leverkusen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Sport ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Lukas Y. aus Fürth",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Jan B. aus Heinsberg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Malte I. aus Rheine",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sport gefällt mir gut. Daumen hoch!",
    "customer_name": "Susanne V. aus Recklinghausen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Sport gefällt mir gut. Vielen Dank.",
    "customer_name": "Philipp C. aus Wuppertal",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Sascha R. aus Schwäbisch Gmünd",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Vincent C. aus Rodgau",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sport gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Melanie X. aus Fellbach",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Sport gefällt mir gut. Lohnt sich.",
    "customer_name": "Philipp C. aus Freiburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Leon G. aus Paderborn",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Sport ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Arne J. aus München",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Theo V. aus Görlitz",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Maria L. aus Velbert",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Hält gefällt mir gut. Lohnt sich.",
    "customer_name": "Tom J. aus Magdeburg",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Finn Z. aus Filderstadt",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Susanne M. aus München",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Monika N. aus Eschweiler",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Matteo V. aus Langenhagen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Tanja N. aus Euskirchen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schutz gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Robin J. aus Dormagen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Kevin W. aus Waiblingen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Vincent I. aus Bielefeld",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Anna X. aus Passau",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Vincent T. aus Leinfelden-Echterdingen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Dominik A. aus Wuppertal",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sport gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Jan E. aus Gelsenkirchen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Simon J. aus Rodgau",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Oskar X. aus Ludwigsburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas V. aus Borken",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Petra J. aus Kaufbeuren",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Emil L. aus Duisburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Benedikt M. aus Ambreg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sport gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Robin G. aus Kamen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Finn K. aus Kamen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Bewegung gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Leon D. aus Nettetal",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Luca T. aus Pforzheim",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Finn R. aus Heinsberg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Luca U. aus Hanau",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Jannik P. aus Grevenbroich",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Kauf ich definitiv wieder.",
    "customer_name": "Alexander F. aus Stralsund",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Andrea Z. aus Frankfurt",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Ben O. aus Ambreg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Monika O. aus Buxtehude",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Yannick F. aus Augsburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Melanie S. aus Göttingen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Finn A. aus Leonberg",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Trocken ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Simon H. aus Dorsten",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Finn J. aus Aurich",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Anton A. aus Bonn",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Oskar R. aus Leinfelden-Echterdingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Tanja D. aus Remscheid",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Benedikt T. aus Münster",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Kilian Y. aus Aschaffenburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Vielen Dank.",
    "customer_name": "Katharina G. aus Ingolstadt",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hält ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Nadine O. aus Aschaffenburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hält gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Lisa S. aus Koblenz",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Maria B. aus Aalen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Bin zufrieden.",
    "customer_name": "Justus K. aus Ingolstadt",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Anja L. aus Heinsberg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Jonas R. aus Bottrop",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Melanie W. aus Hattingen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hält gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Luis E. aus Hanau",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Kerstin X. aus Hagen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Sport ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Benedikt S. aus Bergkamen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Fabian F. aus Herne",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Trocken ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Elias D. aus Fürth",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Samuel C. aus Herten",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Fabian T. aus Gera",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schutz gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria C. aus Nordhorn",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Anna Y. aus Wetzlar",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Top, weiter so.",
    "customer_name": "Melanie N. aus Fellbach",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Christina M. aus Chemnitz",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Florian N. aus Stralsund",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Finn Y. aus Hamm",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Niklas F. aus Dessau-Roßlau",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Julian K. aus Nürnberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Hält gefällt mir gut. Vielen Dank.",
    "customer_name": "Johannes E. aus Bad Kreuznach",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "David D. aus Fellbach",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Petra K. aus Ambreg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sport ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Kerstin S. aus Kaiserslautern",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Schutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Nadine Z. aus Pinneberg",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Valentin J. aus Osnabrück",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Monika J. aus Duisburg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Daumen hoch!",
    "customer_name": "Arne F. aus Görlitz",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz B. aus Pinneberg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Lisa F. aus Herzogenrath",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja A. aus Wunstorf",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Melanie M. aus Essen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Tom D. aus Esslingen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Nicole O. aus Heidenheim",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sport gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Susanne G. aus Weimar",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Bewegung gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sarah C. aus Traunstein",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Melanie X. aus Nettetal",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Petra V. aus Stolberg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Kauf ich definitiv wieder.",
    "customer_name": "Johannes Z. aus Nettetal",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Tanja M. aus Rheine",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Andrea C. aus Neumünster",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Liam C. aus Sankt Augustin",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Luis K. aus Neunkirchen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Leon T. aus Ravensburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Milan V. aus Bremen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Sascha H. aus Pinneberg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Sport gefällt mir gut. Klare 10/10.",
    "customer_name": "Marlon Y. aus Remscheid",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Emil D. aus Filderstadt",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. 5 Sterne von mir.",
    "customer_name": "Philipp O. aus Jena",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom H. aus Braunschweig",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Anna M. aus Oldenburg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Emil G. aus Fürth",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Lenny H. aus Essen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Julia F. aus Hennef",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Alexander D. aus Ibbenbüren",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Dominik F. aus Leonberg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schutz gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Erik T. aus Eschweiler",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Kevin O. aus Köln",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Felix Q. aus Lüdenscheid",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Lohnt sich.",
    "customer_name": "Leo T. aus Rheine",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Adrian R. aus Lahr",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Julian T. aus Wetzlar",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Kauf ich definitiv wieder.",
    "customer_name": "Finn D. aus Kleve",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Sport ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Felix G. aus Waiblingen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Erik S. aus Koblenz",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Alexander X. aus Kaufbeuren",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hält gefällt mir gut. Klare 10/10.",
    "customer_name": "Laura O. aus Gummersbach",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Hannes K. aus Erkrath",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Trocken gefällt mir gut. Daumen hoch!",
    "customer_name": "Felix X. aus Detmold",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Hält gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Sabine H. aus Aachen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Henry M. aus Erftstadt",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Leo Y. aus München",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Kauf ich definitiv wieder.",
    "customer_name": "Lukas T. aus Plauen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Claudia X. aus Frechen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Nie mehr ohne.",
    "customer_name": "Christina E. aus Recklinghausen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Alexander W. aus Euskirchen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sport gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Laura L. aus Sindelfingen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Julia S. aus Fellbach",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Trocken ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Petra B. aus Fulda",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Bewegung gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Luis J. aus Eschweiler",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Matteo X. aus Böblingen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Moritz P. aus Gronau",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Ben G. aus Lahr",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Nico M. aus Sindelfingen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Henry W. aus Bad Salzuflen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Trocken gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Timo E. aus Münster",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Oskar X. aus Brotterode",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Lukas W. aus Bergisch Gladbach",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Bewegung gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Vincent D. aus Erfurt",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Anja E. aus Wiesbaden",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Bewegung gefällt mir gut. Klare 10/10.",
    "customer_name": "Birgit E. aus Hannover",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Sascha O. aus Langenfeld",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sport gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Erik B. aus Eschweiler",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Theo J. aus Kiel",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schutz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Maximilian C. aus Tübingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Top.",
    "customer_name": "Nicole E. aus Bad Kreuznach",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Hält gefällt mir gut. Vielen Dank.",
    "customer_name": "Lukas I. aus Duisburg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Bin zufrieden.",
    "customer_name": "Samuel I. aus Freising",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Sport ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Elias D. aus Wolfenbüttel",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Schutz gefällt mir gut. Lohnt sich.",
    "customer_name": "Emil X. aus Lüdenscheid",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Marlon P. aus Gießen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Sabine G. aus Erftstadt",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hält gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Nicole B. aus Darmstadt",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Sport ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Bastian J. aus Konstanz",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Top.",
    "customer_name": "Robin A. aus Kaiserslautern",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Valentin X. aus Remscheid",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Andrea D. aus Dachau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Birgit D. aus Wesel",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sport gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Monika W. aus Erfurt",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Kerstin U. aus Straubing",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Hält gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Monika L. aus Lemgo",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Theo V. aus Koblenz",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Trocken ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Christina X. aus Grevenbroich",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Ben O. aus Pulheim",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes W. aus Grevenbroich",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Sascha A. aus Dessau-Roßlau",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Adrian A. aus Freising",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Jonas U. aus Dinslaken",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sport gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Tanja E. aus Gütersloh",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Paul A. aus Hannover",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Jan J. aus Alsdorf",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Trocken gefällt mir gut. Lohnt sich.",
    "customer_name": "Jonas I. aus Eschweiler",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Bewegung gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Leo Z. aus Mülheim an der Ruhr",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Matteo F. aus Kempten",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Oskar C. aus Saarbrücken",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Fabian F. aus Zwickau",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Erik M. aus Wunstorf",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Leon D. aus Memmingen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Hält gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Lukas B. aus Nettetal",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Bewegung gefällt mir gut. Daumen hoch!",
    "customer_name": "Leo A. aus Düren",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Vielen Dank.",
    "customer_name": "Sabine O. aus Delmenhorst",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hält gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Maximilian Y. aus Rodgau",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Super Shop, super Ware.",
    "customer_name": "Max S. aus Erlangen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Birgit L. aus Fellbach",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Florian W. aus Erfurt",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Theo S. aus Ulm",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Milan K. aus Nettetal",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Timo C. aus Pinneberg",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Johannes E. aus Baden-Baden",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Luca N. aus Ludwigsburg",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sport gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sabine J. aus Magdeburg",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Trocken gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Tanja E. aus Ahlen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Christina Z. aus Bremen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Milan E. aus Neustadt an der Weinstraße",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Anton Y. aus Aalen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Marlon F. aus Darmstadt",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Malte U. aus Offenburg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Arne W. aus Borken",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Schutz gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo M. aus Cottbus",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Top.",
    "customer_name": "Maria X. aus Speyer",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Kauf ich definitiv wieder.",
    "customer_name": "Sandra N. aus Osnabrück",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Bewegung ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Milan Y. aus Chemnitz",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Anja I. aus Hamburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Trocken ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Jan W. aus Mannheim",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Oskar M. aus Mönchengladbach",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Simon P. aus Detmold",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Sport ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Fabian G. aus Unna",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Vincent E. aus Recklinghausen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Sabine F. aus Görlitz",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Johannes W. aus Rheda-Wiedenbrück",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Stefanie T. aus Wolfsburg",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Andrea X. aus Flensburg",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Luca Y. aus Aurich",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Julian I. aus Bad Salzuflen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Christoph I. aus Düren",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Birgit U. aus Bottrop",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Hält gefällt mir gut. Vielen Dank.",
    "customer_name": "Hannes A. aus Langenfeld",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Simon H. aus Offenburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Daumen hoch!",
    "customer_name": "Samuel J. aus Chemnitz",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Julian D. aus Ravensburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Petra Q. aus Hamm",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Tim T. aus Hanau",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Florian R. aus Ulm",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hält gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Dominik D. aus Zwickau",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Tom J. aus Freiburg",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Lukas V. aus Frankfurt (Oder)",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Niklas U. aus Lüdenscheid",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Anton M. aus Eschweiler",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Benedikt D. aus Mannheim",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Henry D. aus Erftstadt",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Lukas F. aus Bruchsal",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Sabine Q. aus Rheda-Wiedenbrück",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Bastian D. aus Wolfsburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Susanne V. aus Dorsten",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Trocken gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "David U. aus München",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Finn I. aus Stuttgart",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Hält ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Julian E. aus Göppingen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Maria F. aus Rosenheim",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Trocken ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Julia T. aus Friedrichshafen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Susanne G. aus Reutlingen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin T. aus Unna",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Elias Q. aus Bergheim",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sport ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Leo L. aus Aschaffenburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Claudia Y. aus Rüsselsheim",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Paul N. aus Neuss",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Hält ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Henry M. aus Rottenburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hält ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Oskar C. aus Schweinfurt",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Leon H. aus Rostock",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Schutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Samuel E. aus Solingen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Max T. aus Borken",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Leo L. aus Düren",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Claudia S. aus Freising",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schutz gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Erik W. aus Aschaffenburg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Florian E. aus Minden",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Nicole V. aus Rheine",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Erik A. aus Oberhausen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Andrea V. aus Hildesheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Fabian J. aus Kaufbeuren",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Birgit P. aus Gummersbach",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Kerstin Z. aus Hamm",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Noah S. aus Oberhausen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Valentin Q. aus Sindelfingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Birgit C. aus Offenbach",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Katharina H. aus Waiblingen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Lisa Q. aus Schwäbisch Gmünd",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar U. aus Düren",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Trocken ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Florian B. aus Osnabrück",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Bewegung ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Claudia Z. aus Alsdorf",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Tim K. aus Neumünster",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Sport gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Florian E. aus Gladbeck",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Hält gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Petra H. aus Bruchsal",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Melanie X. aus Göttingen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Matteo O. aus Göppingen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Kerstin N. aus Neuss",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Liam U. aus Pforzheim",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sport gefällt mir gut. Lohnt sich.",
    "customer_name": "Leon I. aus Cottbus",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Robin X. aus Schwerin",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sport gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Stefanie R. aus Stuttgart",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Benedikt N. aus Moers",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Hannes Y. aus Weimar",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hält gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Melanie D. aus Bremerhaven",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Schutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Tim R. aus Remscheid",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Kevin O. aus Wolfsburg",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. 5 Sterne von mir.",
    "customer_name": "Erik J. aus Solingen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Susanne J. aus Baden-Baden",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Simon I. aus Tübingen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Nico V. aus Troisdorf",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Bewegung gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Tobias E. aus Heidenheim",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Alexander L. aus Worms",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Hält gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Max W. aus Wetzlar",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Bewegung gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Paul F. aus Greifswald",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Maximilian K. aus Recklinghausen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Lisa L. aus Tübingen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Jan V. aus Koblenz",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Hält gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Theo N. aus Stralsund",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Valentin S. aus Dorsten",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Katharina K. aus Wolfenbüttel",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Bin zufrieden.",
    "customer_name": "Nadine E. aus Schwäbisch Gmünd",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Luis R. aus Wolfsburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Emil U. aus Ulm",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. 5 Sterne von mir.",
    "customer_name": "Julia Q. aus Herten",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Anna Z. aus Oberursel",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Trocken ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Florian W. aus Jena",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Matteo A. aus Moers",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Hält gefällt mir gut. Einfach klasse.",
    "customer_name": "Sascha B. aus Würzburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Jonas H. aus Frechen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sport gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sandra V. aus Trier",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Absolute Kaufempfehlung.",
    "customer_name": "Mats F. aus Iserlohn",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sport gefällt mir gut. Klare 10/10.",
    "customer_name": "Nadine Y. aus Pinneberg",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Andrea G. aus Herten",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Lukas N. aus Castrop-Rauxel",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Nadine U. aus Wuppertal",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Birgit B. aus Lippstadt",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Ben E. aus Hamburg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Hält gefällt mir gut. Top, weiter so.",
    "customer_name": "Timo R. aus Melle",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Anton V. aus Worms",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sport gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christoph M. aus Wunstorf",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hält ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Timo W. aus Rheine",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Bewegung gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Justus V. aus Gera",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Felix B. aus Lörrach",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Moritz K. aus Gießen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Trocken ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Claudia P. aus Kempten",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hält ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Dennis S. aus Remscheid",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Leon B. aus Melle",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Lohnt sich.",
    "customer_name": "Anna T. aus Bad Homburg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Maria A. aus Gladbeck",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Moritz N. aus Bamberg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Nadine O. aus Düsseldorf",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Nico A. aus Dachau",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Petra H. aus Bottrop",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Birgit P. aus Dorsten",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Tom O. aus Landshut",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Emil S. aus Rüsselsheim",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Andrea C. aus Augsburg",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Bewegung gefällt mir gut. Lohnt sich.",
    "customer_name": "Birgit S. aus Baden-Baden",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Danke!",
    "customer_name": "Anton M. aus Rosenheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Jannik J. aus Koblenz",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Malte W. aus Kempten",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Anton A. aus Monheim am Rhein",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Luis G. aus Wolfsburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Danke!",
    "customer_name": "Justus W. aus Kaiserslautern",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Julia R. aus Wiesbaden",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Liam P. aus Rüsselsheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Claudia I. aus Leipzig",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Samuel F. aus Freiburg",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Simon X. aus Gelsenkirchen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Yannick E. aus Bad Homburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Kilian X. aus Neuwied",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Lenny V. aus Detmold",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Anton J. aus Erftstadt",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Trocken ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "David L. aus Dresden",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Christoph F. aus Rosenheim",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Nico O. aus Elmshorn",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Simon T. aus Frankfurt (Oder)",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Hält gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Niklas B. aus Frechen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Schutz gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sascha V. aus Bayreuth",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Theo W. aus Mainz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Timo P. aus Leipzig",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Bastian E. aus Celle",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Sandra P. aus Chemnitz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Tom W. aus Erfurt",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Sandra Q. aus Cottbus",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Florian S. aus Aachen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Alles richtig gemacht.",
    "customer_name": "Alexander I. aus Jena",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Tim Q. aus Rodgau",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Jan Y. aus Melle",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Lukas G. aus Iserlohn",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Henry B. aus Menden",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Vielen Dank.",
    "customer_name": "Hannes Q. aus Nürnberg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Bewegung gefällt mir gut. Vielen Dank.",
    "customer_name": "Nicole M. aus Garbsen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Dennis M. aus Zwickau",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Sport ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Robin W. aus Lüneburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Susanne B. aus Lüdenscheid",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Trocken gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Philipp L. aus Freiburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Hält gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lenny H. aus Stuttgart",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Johannes N. aus Minden",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Danke!",
    "customer_name": "Julian N. aus Koblenz",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Vielen Dank.",
    "customer_name": "Anton X. aus Bremerhaven",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Paul Q. aus Oberhausen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hält gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz J. aus Osnabrück",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Bin rundum glücklich damit.",
    "customer_name": "Dominik M. aus Aschaffenburg",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Alles richtig gemacht.",
    "customer_name": "Petra C. aus Memmingen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Trocken gefällt mir gut. Daumen hoch!",
    "customer_name": "Mats S. aus Siegen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Hält gefällt mir gut. Top, weiter so.",
    "customer_name": "Lukas S. aus Göppingen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Trocken gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sascha V. aus Göppingen",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Timo T. aus Stuttgart",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Milan H. aus Würzburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Sarah B. aus Bocholt",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "Emil W. aus Lingen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Marlon R. aus Wetzlar",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Melanie M. aus Viersen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Ben M. aus Kaufbeuren",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Elias S. aus Meerbusch",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Elias H. aus Dorsten",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Lenny N. aus Krefeld",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Bewegung gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "David F. aus Mülheim an der Ruhr",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Anton I. aus Worms",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Bastian U. aus Hof",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian C. aus Herford",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Andrea S. aus Rheda-Wiedenbrück",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Tom G. aus Tübingen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Trocken gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Valentin Q. aus Kassel",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin K. aus Paderborn",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Maria Y. aus Pforzheim",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hält gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian P. aus Herzogenrath",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Lukas P. aus Gütersloh",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Trocken gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Florian O. aus Bergheim",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Jan Z. aus Bad Salzuflen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Laura G. aus Speyer",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Hält gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Anna A. aus Castrop-Rauxel",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Philipp O. aus Schweinfurt",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Leo N. aus Bergkamen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Tanja E. aus Lemgo",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Theo Q. aus Rheda-Wiedenbrück",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Tanja P. aus Reutlingen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Laura L. aus Kaufbeuren",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Sabine W. aus Aachen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sport gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Nicole A. aus Ambreg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Simon Z. aus Greifswald",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Bewegung gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Fabian U. aus Hagen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Laura M. aus Worms",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Bewegung ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Elias W. aus Ludwigsburg",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa N. aus Bergisch Gladbach",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Trocken ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Yannick V. aus Detmold",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Super Shop, super Ware.",
    "customer_name": "Nadine R. aus Gummersbach",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "David L. aus Cottbus",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Trocken gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie M. aus Nettetal",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Yannick O. aus Bamberg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Florian A. aus Ratingen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schutz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christoph Q. aus Hildesheim",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Top.",
    "customer_name": "Liam I. aus Hattingen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Malte W. aus Bad Kreuznach",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Bewegung gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Andrea V. aus Borken",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Luca P. aus Hildesheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Tanja C. aus Ludwigshafen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Trocken gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Birgit X. aus Dinslaken",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Trocken gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Valentin S. aus Wesel",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Melanie H. aus Delmenhorst",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Kerstin K. aus Hennef",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Trocken ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Samuel I. aus Recklinghausen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Bewegung gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Matteo F. aus Lemgo",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Johannes P. aus Dachau",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Lukas V. aus Chemnitz",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Schutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Nadine Z. aus Tübingen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja G. aus Ahlen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Simon X. aus Albstadt",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Elias Z. aus Osnabrück",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Trocken gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Moritz A. aus Delmenhorst",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Hält gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Henry F. aus Worms",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Susanne N. aus Euskirchen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Fabian S. aus Wuppertal",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Kann ich nur weiterempfehlen.",
    "customer_name": "Luca C. aus Hanau",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Laura Z. aus Marl",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Robin O. aus Münster",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Liam Z. aus Eschweiler",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Alles richtig gemacht.",
    "customer_name": "Katharina E. aus Buxtehude",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Valentin T. aus Görlitz",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Dominik R. aus Trier",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Kevin V. aus Ludwigshafen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian E. aus Kamen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Sascha X. aus Gera",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Anna E. aus Rüsselsheim",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Hält gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Birgit V. aus Wilhelmshaven",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Sport ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Leon E. aus Dortmund",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Hält gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Robin P. aus Leverkusen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Katharina A. aus Passau",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Sandra U. aus Neuwied",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Christina C. aus Oberhausen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Tanja Y. aus Buxtehude",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Vincent W. aus Recklinghausen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Tanja M. aus Dormagen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Julia J. aus Aurich",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Lisa C. aus Cottbus",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Dominik L. aus Bruchsal",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Nicole V. aus Hilden",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Maria R. aus Memmingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Laura K. aus Elmshorn",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Leon H. aus Duisburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Sport ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Sandra G. aus Pinneberg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Julian R. aus Hof",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Trocken ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Noah D. aus Darmstadt",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Top, weiter so.",
    "customer_name": "Lenny M. aus Ahlen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sport ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Finn C. aus Wolfenbüttel",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Tim J. aus Köln",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Niklas V. aus Kiel",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Nico Z. aus Frankfurt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Trocken ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Sascha T. aus Lemgo",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Bastian P. aus Erftstadt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Hält gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Yannick O. aus Heidelberg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Florian O. aus Detmold",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sport gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz Q. aus Bamberg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Emil Y. aus Lüdenscheid",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Malte W. aus Lübeck",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Nicole U. aus Lünen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Luis W. aus Krefeld",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Bin zufrieden.",
    "customer_name": "Marlon E. aus Leipzig",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Felix B. aus Witten",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Maria W. aus Bocholt",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sport ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Nico N. aus Bad Salzuflen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Top.",
    "customer_name": "Lukas P. aus Brotterode",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Theo G. aus München",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Monika J. aus Gießen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Maria F. aus Moers",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Julian Y. aus Koblenz",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Fabian L. aus Lippstadt",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Fabian H. aus Hamm",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Nico M. aus Leverkusen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Susanne H. aus Moers",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Top.",
    "customer_name": "Christina F. aus Bietigheim-Bissingen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Emil N. aus Heidenheim",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Claudia W. aus Neu-Ulm",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Johannes E. aus Mülheim an der Ruhr",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Leon S. aus Remscheid",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Matteo R. aus Brandenburg an der Havel",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Trocken gefällt mir gut. Klare 10/10.",
    "customer_name": "Paul D. aus Melle",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Danke!",
    "customer_name": "Monika Z. aus Landshut",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Trocken gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tom N. aus Magdeburg",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Nico N. aus Sindelfingen",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Lisa U. aus Jena",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Tom E. aus Heilbronn",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sport ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Andrea A. aus Kerpen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Luca M. aus Minden",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Anna X. aus Solingen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Nico J. aus Brandenburg an der Havel",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Daumen hoch!",
    "customer_name": "Malte B. aus Straubing",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Valentin C. aus Frankfurt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Tim M. aus Schweinfurt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hält gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Julian G. aus Dachau",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Justus B. aus Memmingen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Yannick H. aus Hilden",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hält ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Monika R. aus Rosenheim",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Danke!",
    "customer_name": "Simon O. aus Rheine",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Nadine B. aus Rostock",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Bewegung gefällt mir gut. Klare 10/10.",
    "customer_name": "Adrian O. aus Kiel",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Bewegung gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Milan V. aus Leverkusen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Leo V. aus Lippstadt",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Florian Y. aus Norderstedt",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Emil K. aus Neuss",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Moritz I. aus Peine",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sport gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Lisa L. aus Hattingen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Valentin I. aus Frechen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Simon T. aus Bornheim",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Hält gefällt mir gut. Top, weiter so.",
    "customer_name": "Dennis N. aus Heilbronn",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Yannick U. aus Karlsruhe",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Melanie H. aus Kerpen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Hält ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia O. aus Mainz",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Trocken ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Adrian Z. aus Rüsselsheim",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. 5 Sterne von mir.",
    "customer_name": "Malte H. aus Erftstadt",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Tanja N. aus Erlangen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sandra F. aus Langenfeld",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Sandra V. aus Leverkusen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Elias W. aus Bornheim",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Nie mehr ohne.",
    "customer_name": "Anna J. aus Bremen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Schutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Adrian O. aus Ratingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hält gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Florian H. aus Ludwigshafen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "David N. aus Euskirchen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Anja H. aus Oranienburg",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Maria S. aus Frankfurt",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Luis T. aus Monheim am Rhein",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Hält ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Lenny G. aus Siegen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Melanie J. aus Schweinfurt",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Nadine G. aus Plauen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Timo L. aus Kassel",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Sport gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Oskar K. aus Cottbus",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Hält ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Sabine L. aus Buxtehude",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "David U. aus Hattingen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Kauf ich definitiv wieder.",
    "customer_name": "Theo P. aus Menden",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Melanie D. aus Tübingen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Trocken ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Birgit K. aus Viersen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Daumen hoch!",
    "customer_name": "Simon W. aus Ratingen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Leo B. aus Kiel",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Trocken ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Christoph I. aus Reutlingen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Hält gefällt mir gut. Klare 10/10.",
    "customer_name": "Oskar X. aus Bergisch Gladbach",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Fabian R. aus Gladbeck",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Maria W. aus Brotterode",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Trocken ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Mats H. aus Leverkusen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Claudia L. aus Hildesheim",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Andrea P. aus Lemgo",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Yannick F. aus Dortmund",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Bewegung ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Benedikt P. aus Euskirchen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schutz gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Marlon K. aus Elmshorn",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Bewegung ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Sabine G. aus Duisburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Laura E. aus Friedrichshafen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Kilian H. aus Dessau-Roßlau",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Werde dabei bleiben.",
    "customer_name": "Tobias K. aus Gronau",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Benedikt U. aus Hameln",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Hält gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sabine L. aus Flensburg",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Niklas I. aus Menden",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Luis N. aus Rodgau",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Tobias O. aus Bietigheim-Bissingen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Tobias X. aus Speyer",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Birgit A. aus Weinheim",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik U. aus Tübingen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Laura H. aus Heidenheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Klare 10/10.",
    "customer_name": "Paul X. aus Berlin",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Christoph Q. aus Rosenheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Moritz J. aus Bayreuth",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Lukas M. aus Witten",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Laura N. aus Bornheim",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul D. aus Brotterode",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Hält ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Christina R. aus Oldenburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Petra O. aus Hagen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Bastian D. aus Wunstorf",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Absolute Kaufempfehlung.",
    "customer_name": "Leo A. aus Albstadt",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Justus H. aus Frankfurt",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Stefanie K. aus Menden",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Hält gefällt mir gut. Klare 10/10.",
    "customer_name": "Susanne M. aus Rottenburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Schutz gefällt mir gut. Lohnt sich.",
    "customer_name": "Dennis M. aus Weimar",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Emil H. aus Jena",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Sehr zu empfehlen.",
    "customer_name": "Florian V. aus Neuss",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Tobias X. aus Cottbus",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Bewegung ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Lisa N. aus Traunstein",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Kerstin X. aus München",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Nicole W. aus Solingen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Johannes R. aus Soest",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Hält ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Johannes I. aus München",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Timo I. aus Kaiserslautern",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Maria E. aus Herzogenrath",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Elias P. aus Plauen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Sascha A. aus Lüdenscheid",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Justus M. aus Nordhorn",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Julia V. aus Erfurt",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Maximilian W. aus Troisdorf",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Philipp H. aus Wiesbaden",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Sabine A. aus Gelsenkirchen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Jonas Z. aus Offenbach",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Marlon Q. aus Wetzlar",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Danke!",
    "customer_name": "Leon I. aus Oberursel",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Monika Z. aus Wolfsburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Elias K. aus Kamen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Hält ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Benedikt X. aus Hanau",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Christoph U. aus Kamen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah U. aus Flensburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Bewegung ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus W. aus Görlitz",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Theo R. aus Brandenburg an der Havel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Bewegung ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Benedikt T. aus Heidenheim",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Kilian Z. aus Bad Homburg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sport ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Elias K. aus Trier",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Bewegung ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Stefanie V. aus Marl",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Oskar M. aus Ravensburg",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Hält ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Simon E. aus Ibbenbüren",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Florian N. aus Friedrichshafen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Kerstin I. aus Passau",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Florian U. aus Nettetal",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Emil O. aus Kiel",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Trocken gefällt mir gut. Einfach klasse.",
    "customer_name": "Andrea A. aus Herford",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Philipp B. aus Gera",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Trocken ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Claudia Q. aus Celle",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Sabine Q. aus Lüdenscheid",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Bewegung ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Julian Q. aus Rottenburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schutz gefällt mir gut. Einfach klasse.",
    "customer_name": "Dominik S. aus Würzburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Danke!",
    "customer_name": "Noah M. aus Filderstadt",
    "date": "2025-04-01"
  }
];