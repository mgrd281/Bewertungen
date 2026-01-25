const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Theo F. aus Frankfurt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Katharina G. aus Rheine",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Susanne N. aus Lüdenscheid",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Liam X. aus Worms",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Matteo W. aus Schwäbisch Gmünd",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Fabian U. aus Ravensburg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Elias N. aus Nürnberg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Max P. aus Solingen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Mild gefällt mir gut. Einfach klasse.",
    "customer_name": "Tanja N. aus Bremen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie S. aus Bamberg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Henry D. aus Passau",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Petra Q. aus Borken",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Katharina F. aus Eschweiler",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Tim I. aus Neumünster",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Zahnfleisch gefällt mir gut. Top, weiter so.",
    "customer_name": "Simon Z. aus Herne",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Samuel M. aus Augsburg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Stefanie N. aus Herne",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Bin zufrieden.",
    "customer_name": "Christoph A. aus Gladbeck",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Liam O. aus Dülmen",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Noah E. aus Gießen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Luca L. aus Bad Homburg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Danke!",
    "customer_name": "Henry R. aus Hagen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Arne C. aus Braunschweig",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Noah V. aus Münster",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Anja J. aus Saarbrücken",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Balsam gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Benedikt T. aus Ludwigsburg",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Tom E. aus Schwäbisch Gmünd",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Bastian Y. aus Waiblingen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Julia P. aus Zwickau",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Nadine P. aus Jena",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Yannick D. aus Fellbach",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Balsam gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Niklas Q. aus Paderborn",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Pflege gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Felix F. aus Böblingen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Anna K. aus Waiblingen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Zahnfleisch ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Johannes P. aus Ludwigshafen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Bin zufrieden.",
    "customer_name": "Christina F. aus Hof",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Maria X. aus Fulda",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Simon Y. aus Troisdorf",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Felix O. aus Eisenach",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Top, weiter so.",
    "customer_name": "Monika M. aus Witten",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Luca Q. aus Rottenburg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Dominik S. aus Herzogenrath",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Henry H. aus Erkrath",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Sarah X. aus Ingolstadt",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Andrea S. aus Braunschweig",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Balsam gefällt mir gut. Nie mehr ohne.",
    "customer_name": "David C. aus Ludwigsburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Zahnfleisch gefällt mir gut. Vielen Dank.",
    "customer_name": "Henry H. aus Mülheim an der Ruhr",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schutz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Felix V. aus Freising",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Theo X. aus Rostock",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Sabine C. aus Regensburg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Laura A. aus Dresden",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Mild gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Kilian Q. aus Stralsund",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Pflege gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Moritz N. aus Berlin",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Marlon P. aus Hof",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Tobias Q. aus Speyer",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Lenny Z. aus Lünen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Johannes A. aus Kaiserslautern",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Mild gefällt mir gut. Vielen Dank.",
    "customer_name": "Elias M. aus Chemnitz",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Jonas Z. aus Kiel",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Simon Q. aus Witten",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Mats H. aus Castrop-Rauxel",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Balsam gefällt mir gut. Lohnt sich.",
    "customer_name": "Katharina X. aus Freising",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Balsam gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Oskar I. aus Schweinfurt",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Leo P. aus Halle (Saale)",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Max O. aus Erftstadt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Elias I. aus Hattingen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Maria B. aus Gronau",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Balsam gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico Z. aus Leverkusen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Zahnfleisch gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Melanie S. aus Dülmen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Stefanie T. aus Salzgitter",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Nico C. aus Dormagen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "David N. aus Koblenz",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Balsam gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Dennis P. aus Bornheim",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Mild gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Sabine R. aus Ibbenbüren",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Katharina A. aus Frankfurt (Oder)",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Balsam gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Jonas T. aus Wilhelmshaven",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Petra O. aus Magdeburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Dennis I. aus Worms",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Anton K. aus Dresden",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Werde dabei bleiben.",
    "customer_name": "Stefanie E. aus Hameln",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Zahnfleisch gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Kevin L. aus Stolberg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Simon V. aus Konstanz",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Jan X. aus Rodgau",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Theo C. aus Offenburg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Theo G. aus Ludwigsburg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Lukas J. aus Neuss",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Susanne Z. aus Potsdam",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Lisa V. aus Kassel",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Luca E. aus Stolberg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Johannes T. aus Herne",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Balsam ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Justus J. aus Köln",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Matteo M. aus Lippstadt",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Milan K. aus Buxtehude",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Balsam ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Andrea Q. aus Paderborn",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Matteo W. aus Gelsenkirchen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Klare 10/10.",
    "customer_name": "Anna C. aus Konstanz",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Zahnfleisch gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Paul Y. aus Hürth",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Top.",
    "customer_name": "Marlon T. aus Bad Salzuflen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Ben T. aus Essen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Nicole L. aus Rastatt",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Zahnfleisch gefällt mir gut. Besser geht es nicht.",
    "customer_name": "David Z. aus Neuwied",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Werde dabei bleiben.",
    "customer_name": "Leon U. aus Dessau-Roßlau",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik K. aus Böblingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Mats J. aus Bayreuth",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Theo P. aus Wiesbaden",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Pflege gefällt mir gut. Lohnt sich.",
    "customer_name": "Matteo I. aus Buxtehude",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Matteo W. aus Kleve",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Robin E. aus Göttingen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Mild gefällt mir gut. Daumen hoch!",
    "customer_name": "Henry N. aus Rheda-Wiedenbrück",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Leon H. aus Bergheim",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Werde dabei bleiben.",
    "customer_name": "Jannik X. aus Göttingen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Zahnfleisch ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Erik D. aus Dülmen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Theo E. aus Konstanz",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Zahnfleisch gefällt mir gut. Klare 10/10.",
    "customer_name": "Stefanie C. aus Hof",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Luca W. aus Stralsund",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Danke!",
    "customer_name": "Erik A. aus Lemgo",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Benedikt L. aus Ludwigsburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Valentin J. aus Bad Oeynhausen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Lohnt sich.",
    "customer_name": "Fabian W. aus Herzogenrath",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Kevin M. aus Flensburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Zahnfleisch gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea U. aus Nürnberg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schutz gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Tom V. aus Soest",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Melanie C. aus Straubing",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Vielen Dank.",
    "customer_name": "Elias T. aus Gießen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Marlon T. aus Paderborn",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Mats C. aus Hamm",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Pflege gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Fabian R. aus Frankfurt (Oder)",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Pflege gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Sarah O. aus Pulheim",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Kerstin G. aus Heilbronn",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Christina H. aus Bad Salzuflen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Sabine L. aus Viersen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Mild gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Kerstin J. aus Kamen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Mild gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Milan B. aus Leonberg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Oskar Q. aus Bad Oeynhausen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Schutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Samuel X. aus Konstanz",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Erik Y. aus Hildesheim",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Zahnfleisch gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lisa U. aus Kamen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Jannik A. aus Hannover",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Zahnfleisch gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sabine J. aus Marburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "David P. aus Münster",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Zahnfleisch gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Luis U. aus Greifswald",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Max L. aus Bottrop",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Leo O. aus Koblenz",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Lenny A. aus Kempten",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Tom G. aus Ahlen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Ben V. aus Rottenburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Sandra N. aus Bad Salzuflen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Dominik G. aus Borken",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Luis Y. aus Hildesheim",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Daumen hoch!",
    "customer_name": "Robin U. aus Castrop-Rauxel",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Arne Z. aus Cottbus",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Sandra F. aus Erlangen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Niklas I. aus Bad Salzuflen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Balsam gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Oskar L. aus Elmshorn",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Balsam gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max E. aus Offenbach",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Nicole R. aus Soest",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Max X. aus Melle",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Luca Y. aus Bergheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Lohnt sich.",
    "customer_name": "Tobias G. aus Hennef",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Zahnfleisch gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Niklas H. aus Herzogenrath",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Zahnfleisch gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Elias N. aus Berlin",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Ben O. aus Lemgo",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Absolute Kaufempfehlung.",
    "customer_name": "Christina R. aus Halle (Saale)",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Luca P. aus Gütersloh",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Julia I. aus Bremerhaven",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Emil A. aus Euskirchen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Zahnfleisch ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Birgit K. aus Jena",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Anton F. aus Krefeld",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Mild gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz N. aus Hamm",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Lenny Z. aus Leonberg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Malte W. aus Wunstorf",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Marlon D. aus Dresden",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Stefanie J. aus Hamburg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Vielen Dank.",
    "customer_name": "Milan S. aus Soest",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Jannik H. aus Schwerin",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Anna I. aus Kaiserslautern",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. 5 Sterne von mir.",
    "customer_name": "Monika T. aus Frankfurt (Oder)",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Paul C. aus Wesel",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Paul N. aus Neustadt an der Weinstraße",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Nadine V. aus Speyer",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Mats L. aus Bochum",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Luis R. aus Delmenhorst",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Elias M. aus Dessau-Roßlau",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Mild gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Tom P. aus Waiblingen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Susanne T. aus Braunschweig",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon J. aus Bottrop",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Tim E. aus Hürth",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Moritz T. aus Neunkirchen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Mild gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Theo X. aus Bergkamen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Milan J. aus Heidenheim",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Laura C. aus Dresden",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Christina E. aus Viersen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Mild gefällt mir gut. Vielen Dank.",
    "customer_name": "Monika L. aus Stolberg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sandra D. aus Ludwigsburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Malte W. aus Albstadt",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Julia C. aus Reutlingen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Finn U. aus Fürth",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Simon G. aus Koblenz",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Theo Q. aus Fulda",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Stefanie A. aus Leonberg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Ben L. aus Kleve",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Balsam gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra K. aus Paderborn",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Mats K. aus Ingolstadt",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Alles richtig gemacht.",
    "customer_name": "Paul L. aus Heidelberg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny C. aus Lünen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Ben Q. aus Münster",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Nico J. aus Melle",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Susanne J. aus Wolfenbüttel",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Max A. aus Albstadt",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus U. aus Minden",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Ben L. aus Memmingen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Zahnfleisch gefällt mir gut. Daumen hoch!",
    "customer_name": "Claudia G. aus Potsdam",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Top.",
    "customer_name": "Valentin Y. aus Gummersbach",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Justus W. aus Bielefeld",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Tobias K. aus Langenhagen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Simon K. aus Bochum",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Samuel H. aus Bietigheim-Bissingen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Emil K. aus Kamen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Christina I. aus Norderstedt",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Andrea J. aus Rottenburg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Mild gefällt mir gut. Daumen hoch!",
    "customer_name": "Christina Z. aus Essen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Top.",
    "customer_name": "Philipp K. aus Gießen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Sascha Z. aus Rosenheim",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Arne K. aus Dormagen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. 5 Sterne von mir.",
    "customer_name": "Petra E. aus Weinheim",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Mats F. aus Schwäbisch Gmünd",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Zahnfleisch gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Nicole C. aus Fürth",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Dominik J. aus Gummersbach",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Petra X. aus Grevenbroich",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "David K. aus Neunkirchen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Alexander N. aus Bad Homburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Hannes X. aus Wolfsburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Nico F. aus Herne",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Sarah J. aus Schwäbisch Gmünd",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Leon Q. aus Potsdam",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Zahnfleisch ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Andrea K. aus Euskirchen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Elias D. aus Neuwied",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Luis F. aus Lübeck",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Samuel Z. aus Hilden",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Moritz W. aus Dresden",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Paul X. aus Iserlohn",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Samuel A. aus Pulheim",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. 5 Sterne von mir.",
    "customer_name": "Nadine B. aus Bremen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Tim R. aus Stolberg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Liam I. aus Heinsberg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Kann ich nur weiterempfehlen.",
    "customer_name": "Florian L. aus Stuttgart",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Nadine D. aus Bocholt",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Jonas T. aus Brandenburg an der Havel",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Justus T. aus Bad Homburg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Arne J. aus Herford",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Timo M. aus Waiblingen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tobias I. aus Dachau",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Pflege gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Erik N. aus Marburg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Zahnfleisch gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Matteo K. aus Dachau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Balsam ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Valentin Z. aus Eschweiler",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Monika X. aus Lübeck",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Paul J. aus Viersen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Tanja Q. aus Sankt Augustin",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Balsam gefällt mir gut. Lohnt sich.",
    "customer_name": "Justus H. aus Elmshorn",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Sabine M. aus Peine",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Zahnfleisch ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Monika Y. aus Fürth",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Vincent P. aus Eschweiler",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Christina J. aus Rostock",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Sascha E. aus Weinheim",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Hannes C. aus Chemnitz",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Vielen Dank.",
    "customer_name": "Fabian P. aus Elmshorn",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Julia E. aus Hürth",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Paul R. aus Konstanz",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Luis W. aus Eisenach",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Benedikt A. aus Minden",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Mild gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "David E. aus Ibbenbüren",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Monika W. aus Lingen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Sandra D. aus Bietigheim-Bissingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Anna C. aus Wuppertal",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Zahnfleisch gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Benedikt U. aus Bayreuth",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Leon J. aus Reutlingen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Kerstin H. aus Dinslaken",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Philipp E. aus Rastatt",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Zahnfleisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Philipp Y. aus Detmold",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Henry M. aus Detmold",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Sabine J. aus Herten",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Nicole J. aus Unna",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Balsam gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne X. aus Celle",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Milan K. aus Esslingen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Marlon X. aus Aurich",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Christina J. aus Salzgitter",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Balsam ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Simon E. aus Wetzlar",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Finn P. aus Koblenz",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Henry A. aus Melle",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Nico U. aus Herten",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Mats K. aus Villingen-Schwenningen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Mats O. aus Mannheim",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Yannick G. aus Lübeck",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Mild gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sandra E. aus Bergheim",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Zahnfleisch gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Mats H. aus Bayreuth",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Stefanie F. aus Mülheim an der Ruhr",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Zahnfleisch gefällt mir gut. Top, weiter so.",
    "customer_name": "Philipp P. aus Erfurt",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Tom M. aus Bornheim",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Mats Q. aus Alsdorf",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Jannik Z. aus Mainz",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Justus Z. aus Oranienburg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Top.",
    "customer_name": "Marlon W. aus Zwickau",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Zahnfleisch gefällt mir gut. Lohnt sich.",
    "customer_name": "Simon M. aus Pulheim",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Henry P. aus Berlin",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schutz gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Luis D. aus Buxtehude",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Noah O. aus Lahr",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia P. aus Bergkamen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Zahnfleisch gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin W. aus Minden",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Pflege gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Leo T. aus Leinfelden-Echterdingen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Dennis N. aus Stuttgart",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian T. aus München",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra U. aus Worms",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Julia Q. aus Oberursel",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Claudia L. aus Görlitz",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Balsam gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Jonas R. aus Bochum",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Max X. aus Freising",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Dennis J. aus Stralsund",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Nie mehr ohne.",
    "customer_name": "Birgit G. aus Lingen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Dennis B. aus Salzgitter",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Kevin Z. aus Langenhagen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik M. aus Buxtehude",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Oskar I. aus Mönchengladbach",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Tobias B. aus Bocholt",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Moritz K. aus Bergkamen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Maria N. aus Gießen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Sascha M. aus Mönchengladbach",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Alexander Y. aus Saarbrücken",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Max J. aus Rheda-Wiedenbrück",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Leo N. aus Borken",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "David U. aus Bielefeld",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schutz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah T. aus Peine",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Bin zufrieden.",
    "customer_name": "Malte O. aus Tübingen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny I. aus Darmstadt",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Jonas R. aus Traunstein",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Nadine C. aus Salzgitter",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Dennis R. aus Koblenz",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Adrian Z. aus Heinsberg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Bin zufrieden.",
    "customer_name": "Monika D. aus Rostock",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "Lisa Z. aus Dülmen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Daumen hoch!",
    "customer_name": "Katharina G. aus Monheim am Rhein",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Johannes F. aus Dorsten",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Finn L. aus Düren",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Zahnfleisch ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Nicole Y. aus Essen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Erik V. aus Oberursel",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Balsam gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Tim M. aus Reutlingen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Pflege gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Erik N. aus Rheda-Wiedenbrück",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schutz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Christina D. aus Trier",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Luca U. aus Dachau",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Pflege ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Maximilian P. aus Heinsberg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Sascha I. aus Menden",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Lohnt sich.",
    "customer_name": "Julian P. aus Bornheim",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Finn F. aus Dortmund",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Melanie P. aus Hildesheim",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schutz gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Tobias V. aus Reutlingen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Zahnfleisch gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Simon Q. aus Albstadt",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Pflege gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Philipp K. aus Pinneberg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Maria Y. aus Bamberg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Erik X. aus Kerpen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra F. aus Aurich",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Johannes Z. aus Leonberg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Theo M. aus Lüdenscheid",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Katharina S. aus Ludwigsburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Ben R. aus Lahr",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Timo R. aus Rostock",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Robin Q. aus Emden",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Kerstin S. aus Lüdenscheid",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah Z. aus Rodgau",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Yannick R. aus Troisdorf",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Oskar K. aus Eschweiler",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Mild gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kevin V. aus Leverkusen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Birgit Y. aus Dresden",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Leo M. aus Unna",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Laura E. aus Düsseldorf",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Maximilian Q. aus Oldenburg",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Mild gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Alexander N. aus Bielefeld",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Leon Z. aus Chemnitz",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea E. aus Velbert",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Zahnfleisch gefällt mir gut. Vielen Dank.",
    "customer_name": "Leo S. aus Eisenach",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Milan Y. aus Oberhausen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Paul K. aus Ratingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Danke!",
    "customer_name": "Robin N. aus Viersen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Emil Q. aus Menden",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian O. aus Bad Salzuflen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Liam E. aus Bocholt",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Justus E. aus Soest",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Super Shop, super Ware.",
    "customer_name": "Philipp V. aus Norderstedt",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Birgit Q. aus Dachau",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Emil E. aus Schwerin",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Justus Q. aus Menden",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Schutz gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tanja X. aus München",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Pflege gefällt mir gut. Lohnt sich.",
    "customer_name": "Kilian U. aus Solingen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Liam N. aus Ulm",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Birgit H. aus Essen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Mild gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Tanja Q. aus Rottenburg",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Noah C. aus Bottrop",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Ben P. aus Sankt Augustin",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Birgit X. aus Erfurt",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Nicole T. aus Friedrichshafen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Zahnfleisch gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Sandra M. aus Dortmund",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Tobias Q. aus Bocholt",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Anton O. aus Hildesheim",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Balsam gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja R. aus Norderstedt",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Timo O. aus Herzogenrath",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Claudia S. aus Nordhorn",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Kerstin P. aus Passau",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Birgit S. aus Hanau",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Jannik X. aus Ibbenbüren",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Emil O. aus Freiburg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Alexander W. aus Stuttgart",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schutz gefällt mir gut. Daumen hoch!",
    "customer_name": "Felix L. aus Peine",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Lisa R. aus Würzburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schutz gefällt mir gut. Vielen Dank.",
    "customer_name": "David U. aus Halle (Saale)",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Benedikt N. aus Aschaffenburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Katharina J. aus Hof",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Leon M. aus Rheine",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Zahnfleisch ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Kilian Q. aus Ludwigshafen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Schutz gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Dominik G. aus Bielefeld",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Samuel W. aus Viersen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Top.",
    "customer_name": "Fabian Z. aus Norderstedt",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Tanja H. aus Grevenbroich",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Vincent N. aus Essen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Balsam gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Henry K. aus Zwickau",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Mild gefällt mir gut. Top, weiter so.",
    "customer_name": "Fabian V. aus Dormagen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Sascha I. aus Heilbronn",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Timo N. aus Ravensburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias P. aus Straubing",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Noah I. aus Friedrichshafen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Daumen hoch!",
    "customer_name": "Leo F. aus Hamm",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Mild gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Susanne S. aus Darmstadt",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Pflege gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sascha V. aus Hamm",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Nicole P. aus Augsburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah E. aus Baden-Baden",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lukas G. aus Duisburg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Maria E. aus Fellbach",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Anja H. aus Sankt Augustin",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Robin J. aus Zwickau",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Sascha K. aus Peine",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Leo Z. aus Herzogenrath",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Kilian B. aus Hof",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Lukas I. aus Peine",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Lukas A. aus Garbsen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Vincent S. aus Weinheim",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Timo C. aus Lüdenscheid",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik P. aus Pulheim",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Pflege gefällt mir gut. Lohnt sich.",
    "customer_name": "Kevin P. aus Rastatt",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Preis/Leistung past einfach.",
    "customer_name": "Monika T. aus Leverkusen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Anton R. aus Weinheim",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Moritz P. aus Dorsten",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Stefanie F. aus Bamberg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Emil J. aus Krefeld",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Balsam gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Anja D. aus Grevenbroich",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Super Shop, super Ware.",
    "customer_name": "Ben O. aus Wiesbaden",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Pflege gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Henry V. aus Fellbach",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna Y. aus Würzburg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Lisa W. aus Gießen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Timo K. aus Osnabrück",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Moritz F. aus Memmingen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Melanie K. aus Heilbronn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Anja U. aus Pforzheim",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Emil E. aus Greifswald",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Laura Q. aus Ludwigsburg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tobias R. aus Duisburg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Emil A. aus Plauen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Alexander C. aus Schwerin",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Alles richtig gemacht.",
    "customer_name": "Maria D. aus Kerpen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Leon V. aus Bottrop",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Sascha P. aus Oberursel",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Emil D. aus Hilden",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Milan A. aus Menden",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Leon C. aus Iserlohn",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Samuel K. aus Münster",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Bastian J. aus Albstadt",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Paul J. aus Pulheim",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Schutz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Benedikt Z. aus Velbert",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Zahnfleisch gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Paul G. aus Münster",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Theo W. aus Leipzig",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Nadine Q. aus Flensburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Birgit S. aus Moers",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa O. aus Passau",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Zahnfleisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Liam Q. aus Flensburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Ben S. aus Jena",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Kevin P. aus Nettetal",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Sarah G. aus Bochum",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Top.",
    "customer_name": "Timo B. aus Speyer",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Oskar G. aus Kassel",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Pflege gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Marlon E. aus Troisdorf",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Absolute Kaufempfehlung.",
    "customer_name": "Tom W. aus Speyer",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Elias D. aus Chemnitz",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Ben K. aus Lingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Balsam gefällt mir gut. Daumen hoch!",
    "customer_name": "Finn Z. aus Kleve",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Leo G. aus Alsdorf",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Simon I. aus Langenfeld",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Henry Q. aus Hannover",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Florian V. aus Norderstedt",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Finn O. aus Baden-Baden",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Ben E. aus Bonn",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Dominik U. aus Jena",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Kevin L. aus Mannheim",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Bastian H. aus Stralsund",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Luca K. aus Hagen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Anja C. aus Konstanz",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Daumen hoch!",
    "customer_name": "Elias C. aus Neuwied",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Danke!",
    "customer_name": "Monika E. aus Gladbeck",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Leon T. aus Buxtehude",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Bastian A. aus Meerbusch",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Timo J. aus Wilhelmshaven",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Noah O. aus Herford",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Tom A. aus Kempten",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Oskar P. aus Brotterode",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Christoph P. aus Langenfeld",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "David N. aus Mainz",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Henry F. aus Hennef",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jonas L. aus Peine",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Matteo L. aus Freising",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Florian G. aus Langenfeld",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Petra R. aus Siegen",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Balsam ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Julia G. aus Pforzheim",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Tobias C. aus Bruchsal",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Julia A. aus Aurich",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schutz gefällt mir gut. Top, weiter so.",
    "customer_name": "Lenny L. aus Traunstein",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Vincent A. aus Zwickau",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Sarah W. aus Hamm",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Monika M. aus Gelsenkirchen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Sandra H. aus Emden",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Florian U. aus Bad Oeynhausen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Bastian A. aus Bremerhaven",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Moritz C. aus Menden",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Pflege gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Robin J. aus Siegen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Leon W. aus Kiel",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Bin zufrieden.",
    "customer_name": "Birgit O. aus Witten",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Balsam gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Nicole P. aus Dinslaken",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Dennis G. aus Hattingen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christina C. aus Iserlohn",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Danke!",
    "customer_name": "Birgit Q. aus Traunstein",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Tim X. aus Ulm",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Benedikt T. aus Heinsberg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Lohnt sich.",
    "customer_name": "Lukas W. aus Erftstadt",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Jan V. aus Aalen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Ben O. aus Bad Homburg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Robin B. aus Aschaffenburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Pflege gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Alexander K. aus Emden",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Lisa R. aus Duisburg",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian G. aus Lahr",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Stefanie J. aus Neunkirchen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Tobias Z. aus Emden",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Emil I. aus Darmstadt",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Tobias N. aus Ingolstadt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Mild gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas Q. aus Würzburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Petra B. aus Mönchengladbach",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Balsam ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Susanne E. aus Straubing",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Tim I. aus Aalen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Zahnfleisch gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Leo R. aus Alsdorf",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Anna H. aus Garbsen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Oskar V. aus Bocholt",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Tim H. aus Düren",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Balsam gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Andrea I. aus Bad Oeynhausen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Jan K. aus Leverkusen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas V. aus Gelsenkirchen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Christoph U. aus Freising",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Zahnfleisch gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Hannes V. aus Rottenburg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Danke!",
    "customer_name": "Lenny B. aus Hilden",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Vincent S. aus Salzgitter",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Mild gefällt mir gut. Einfach klasse.",
    "customer_name": "Liam H. aus Euskirchen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Claudia X. aus Mönchengladbach",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Nie mehr ohne.",
    "customer_name": "Sandra A. aus Neuss",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Stefanie J. aus Detmold",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Vincent J. aus Karlsruhe",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Justus E. aus Lörrach",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Claudia R. aus Ambreg",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Milan U. aus Bamberg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Werde dabei bleiben.",
    "customer_name": "Kerstin Y. aus Wuppertal",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Mild gefällt mir gut. Klare 10/10.",
    "customer_name": "Sabine G. aus Frankfurt (Oder)",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Danke!",
    "customer_name": "Paul A. aus Wuppertal",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Zahnfleisch ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian J. aus Kaiserslautern",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Matteo J. aus Gronau",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Schutz ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus U. aus Heilbronn",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Yannick F. aus Frankfurt",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Erik A. aus Hannover",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Klare 10/10.",
    "customer_name": "Lenny A. aus Osnabrück",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Mild gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Simon M. aus Erkrath",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Bin zufrieden.",
    "customer_name": "Tom T. aus Baden-Baden",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Moritz K. aus Erfurt",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Julia T. aus Landshut",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "David B. aus Düsseldorf",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Noah J. aus Greifswald",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Lisa A. aus Hamburg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Sandra C. aus Rüsselsheim",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Balsam gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Arne S. aus Gießen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Ben Z. aus Erkrath",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Hannes V. aus Fellbach",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Nicole N. aus Hildesheim",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Zahnfleisch gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Emil K. aus Hennef",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Kauf ich definitiv wieder.",
    "customer_name": "Laura C. aus Freising",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Tim B. aus Darmstadt",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Simon V. aus Hattingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Theo L. aus Schweinfurt",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Zahnfleisch gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Dominik O. aus Memmingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah X. aus Paderborn",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Lukas F. aus Aurich",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Claudia D. aus Detmold",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Nadine C. aus Witten",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Sehr zu empfehlen.",
    "customer_name": "Dominik B. aus Bonn",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sandra Q. aus Ibbenbüren",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Sascha X. aus Braunschweig",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna R. aus Bottrop",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Top, weiter so.",
    "customer_name": "Mats G. aus Leverkusen",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schutz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Florian G. aus Rheine",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Erik S. aus Herford",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Top.",
    "customer_name": "Philipp S. aus Siegen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Mild gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Malte M. aus Lünen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Noah M. aus Pforzheim",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Tom K. aus Bottrop",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Luis V. aus Ingolstadt",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Zahnfleisch ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Leo C. aus Bad Homburg",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Pflege gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Sandra E. aus Kaiserslautern",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Robin P. aus Rastatt",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christoph N. aus Berlin",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Paul A. aus Lüdenscheid",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Zahnfleisch ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Philipp R. aus Paderborn",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Mild gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Jannik K. aus Herford",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Lukas J. aus Castrop-Rauxel",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Liam T. aus Lemgo",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Bastian G. aus Unna",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Timo M. aus Offenburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Lenny S. aus Fellbach",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jan W. aus Pulheim",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Philipp X. aus Friedrichshafen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Balsam gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Liam A. aus Neumünster",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Lenny N. aus Witten",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Mild gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Theo N. aus Hameln",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Paul K. aus Saarbrücken",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Zahnfleisch gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lukas S. aus Zwickau",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Balsam ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Finn C. aus Moers",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Balsam gefällt mir gut. Klare 10/10.",
    "customer_name": "David S. aus Zwickau",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Emil T. aus Pforzheim",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Christina Q. aus Münster",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Liam F. aus Moers",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schutz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Max J. aus Erftstadt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Kerstin D. aus Oldenburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Timo E. aus Essen",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin W. aus Saarbrücken",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Valentin O. aus Herford",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Balsam gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tim Y. aus Speyer",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Mild gefällt mir gut. Klare 10/10.",
    "customer_name": "Timo X. aus Bruchsal",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Lukas R. aus Friedrichshafen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Paul S. aus Schwerin",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Finn X. aus Velbert",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Claudia J. aus Erkrath",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Leo S. aus Potsdam",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Danke!",
    "customer_name": "Henry V. aus Rüsselsheim",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Tobias S. aus Detmold",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Christoph P. aus Lüdenscheid",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Fabian D. aus Delmenhorst",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Vincent T. aus Dachau",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Zahnfleisch gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "David J. aus Münster",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Schutz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Yannick J. aus Aurich",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Kevin X. aus Braunschweig",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Finn W. aus Wuppertal",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Erik E. aus Gladbeck",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Milan I. aus Gummersbach",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis Z. aus Hamm",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Anja F. aus Siegen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Valentin U. aus Friedrichshafen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Sandra W. aus Viersen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Niklas E. aus Bremerhaven",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Katharina A. aus Euskirchen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Pflege ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Arne I. aus Gronau",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Birgit H. aus Landshut",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schutz gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Luca K. aus Ludwigshafen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Pflege gefällt mir gut. Top, weiter so.",
    "customer_name": "Kerstin T. aus Rodgau",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Erik A. aus Bocholt",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Super Shop, super Ware.",
    "customer_name": "Erik W. aus Worms",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Zahnfleisch gefällt mir gut. Vielen Dank.",
    "customer_name": "Oskar G. aus Langenhagen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Zahnfleisch gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Yannick C. aus Castrop-Rauxel",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Christoph K. aus Herford",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schutz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Monika T. aus Hagen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Leon Q. aus Heinsberg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Julian A. aus Rheda-Wiedenbrück",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Florian D. aus Pulheim",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Erik J. aus Oberhausen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Sarah D. aus Bielefeld",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Balsam gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Anton W. aus Filderstadt",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Arne Q. aus Worms",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Pflege ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Elias C. aus Halle (Saale)",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Top.",
    "customer_name": "Arne B. aus Waiblingen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Pflege ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Sascha C. aus Castrop-Rauxel",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Sabine T. aus Lüneburg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Anja G. aus Rheda-Wiedenbrück",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Sarah V. aus Hürth",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Schutz ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Liam L. aus Aurich",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Philipp P. aus Norderstedt",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Arne K. aus Wetzlar",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Andrea P. aus Traunstein",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Malte F. aus Karlsruhe",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Balsam gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Alexander G. aus Reutlingen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Yannick Y. aus Osnabrück",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Balsam gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Leo Z. aus Stuttgart",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Andrea Q. aus Frankfurt",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dennis O. aus Bochum",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Sandra N. aus Bad Kreuznach",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Leo X. aus Frechen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Petra K. aus Soest",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Zahnfleisch gefällt mir gut. Top, weiter so.",
    "customer_name": "Kerstin U. aus Emden",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Pflege ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Jonas W. aus Hamburg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Timo J. aus Bonn",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Bin rundum glücklich damit.",
    "customer_name": "Anna T. aus Aalen",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Mats K. aus Weimar",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Bin zufrieden.",
    "customer_name": "Tobias C. aus Oranienburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "David Y. aus Soest",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Malte H. aus Kempten",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Jannik K. aus Menden",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Balsam ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Timo V. aus Rodgau",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schutz ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Bastian V. aus Tübingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Schutz gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria V. aus Ibbenbüren",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Katharina X. aus Neumünster",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Petra Q. aus Dorsten",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "David C. aus Schwerin",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Sarah R. aus Speyer",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Werde dabei bleiben.",
    "customer_name": "Susanne J. aus Greifswald",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schutz gefällt mir gut. Vielen Dank.",
    "customer_name": "Benedikt S. aus Neumünster",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Leo U. aus Oberhausen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Theo J. aus Lingen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Nadine B. aus Heidenheim",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Zahnfleisch gefällt mir gut. Vielen Dank.",
    "customer_name": "Sascha V. aus Garbsen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Simon X. aus Hamburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Zahnfleisch gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tanja R. aus Sindelfingen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Mild ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Melanie N. aus Essen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Leo K. aus Bornheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Paul F. aus Freiburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Julia P. aus Kleve",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Pflege gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Lukas U. aus Ludwigsburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Lohnt sich.",
    "customer_name": "Adrian P. aus Hanau",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Pflege gefällt mir gut. Top, weiter so.",
    "customer_name": "Lukas T. aus Darmstadt",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Pflege gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Arne Q. aus Marl",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Pflege ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Lukas H. aus Gießen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Fabian E. aus Wiesbaden",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Super Shop, super Ware.",
    "customer_name": "Theo Q. aus Peine",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Zahnfleisch ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Leo C. aus Brandenburg an der Havel",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Mild ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Samuel N. aus Krefeld",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Samuel R. aus Minden",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Balsam gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Fabian O. aus Iserlohn",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Mild ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Felix S. aus Monheim am Rhein",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Pflege ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Robin E. aus Lübeck",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Tim X. aus Essen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Zahnfleisch ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Jan Q. aus Ibbenbüren",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Timo Y. aus Bremerhaven",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Maximilian D. aus Tübingen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Pflege ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Florian C. aus Flensburg",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Pflege ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Simon W. aus Bremen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schutz gefällt mir gut. Klare 10/10.",
    "customer_name": "Philipp R. aus Bonn",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Preis/Leistung past einfach.",
    "customer_name": "Marlon D. aus Witten",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Klare 10/10.",
    "customer_name": "Jannik T. aus Bruchsal",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Philipp V. aus Flensburg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Philipp G. aus Herten",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Lukas X. aus Sankt Augustin",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Balsam ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Luis T. aus Bayreuth",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Bin zufrieden.",
    "customer_name": "Adrian U. aus Ludwigshafen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Mild gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Leon E. aus Ludwigsburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Christoph N. aus Osnabrück",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Pflege ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Petra K. aus Weimar",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Zahnfleisch ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Vincent O. aus Aschaffenburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Arne L. aus Dormagen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Pflege ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Laura R. aus Erkrath",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schutz ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Laura E. aus Castrop-Rauxel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Zahnfleisch gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Malte L. aus Moers",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Balsam ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Lenny U. aus Bergisch Gladbach",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Philipp V. aus Schwäbisch Gmünd",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Mild ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Kerstin J. aus Oberhausen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Susanne N. aus Bayreuth",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Zahnfleisch ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Susanne J. aus Castrop-Rauxel",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Emil M. aus Dresden",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Hannes T. aus Bonn",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Zahnfleisch ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anton J. aus Cottbus",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Balsam ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Jan B. aus Hannover",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar X. aus Wunstorf",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Bin rundum glücklich damit.",
    "customer_name": "Dominik J. aus Freiburg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Emil L. aus Elmshorn",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Zahnfleisch ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "David R. aus Frankfurt (Oder)",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Mild ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Leo U. aus Schwäbisch Gmünd",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schutz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Sarah E. aus Rostock",
    "date": "2025-04-01"
  }
];