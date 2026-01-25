const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders EasyClean gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Alexander J. aus Sindelfingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Robin C. aus Würzburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Sascha E. aus Aschaffenburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Birgit U. aus Dachau",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Werde dabei bleiben.",
    "customer_name": "Finn D. aus Hanau",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Aufsatz gefällt mir gut. Vielen Dank.",
    "customer_name": "Christoph C. aus Oberhausen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Oskar H. aus Peine",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Anja J. aus Bielefeld",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Tim Z. aus Plauen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Andrea I. aus Plauen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Daumen hoch!",
    "customer_name": "Noah O. aus Herford",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Johannes W. aus Neunkirchen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Niklas A. aus Saarbrücken",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Dennis Z. aus Neunkirchen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Philipp Z. aus Marburg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Malte B. aus Erftstadt",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Vielen Dank.",
    "customer_name": "Philipp G. aus Weimar",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Niklas N. aus Lippstadt",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Maria Q. aus Bergkamen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Aufsatz gefällt mir gut. Lohnt sich.",
    "customer_name": "Mats R. aus Chemnitz",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Li-Ion gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Samuel R. aus Marburg",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Nico K. aus Hagen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Aufsatz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lukas Q. aus Detmold",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Tanja F. aus Rastatt",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Simon O. aus Albstadt",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Gründlichkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Susanne Z. aus Fulda",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Anton E. aus Mannheim",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Anna E. aus Frechen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Jonas N. aus Hanau",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Yannick V. aus Arnsberg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Aufsatz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Stefanie J. aus Neumünster",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Aufsatz gefällt mir gut. Daumen hoch!",
    "customer_name": "Emil J. aus Aurich",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Gründlichkeit gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Dennis G. aus Ibbenbüren",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Theo V. aus Lörrach",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Jonas K. aus Bad Salzuflen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo F. aus Euskirchen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "David F. aus Gummersbach",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Susanne X. aus Herten",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Max U. aus Greifswald",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Nassrasur ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Jannik E. aus Monheim am Rhein",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "David K. aus Halle (Saale)",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Oskar O. aus Lingen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Lenny A. aus Kleve",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Matteo S. aus Monheim am Rhein",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Nicole R. aus Düren",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Luca F. aus Wesel",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Gründlichkeit gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Philipp R. aus Augsburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Gründlichkeit gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus C. aus Aschaffenburg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Gründlichkeit gefällt mir gut. Top, weiter so.",
    "customer_name": "Christina Y. aus Lünen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders EasyClean gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Christoph L. aus Wesel",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Sabine V. aus Schwäbisch Gmünd",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Nassrasur gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Leon V. aus Aurich",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Anna Y. aus Halle (Saale)",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Nassrasur gefällt mir gut. Top, weiter so.",
    "customer_name": "Simon S. aus Aalen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Finn U. aus Konstanz",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Andrea P. aus Peine",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Elias K. aus Dresden",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders EasyClean gefällt mir gut. Vielen Dank.",
    "customer_name": "Petra W. aus Freiburg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Erik I. aus Heinsberg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Fabian J. aus Neustadt an der Weinstraße",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz R. aus Regensburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Claudia T. aus Salzgitter",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Daumen hoch!",
    "customer_name": "Julian P. aus Neu-Ulm",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Vincent A. aus Rastatt",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Robin M. aus Garbsen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Florian B. aus Görlitz",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Florian B. aus Gera",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Adrian Z. aus Eschweiler",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Leo U. aus Remscheid",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Li-Ion gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Liam T. aus Lingen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Sascha P. aus Leipzig",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Lohnt sich.",
    "customer_name": "Luis G. aus Freiburg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Leo S. aus Krefeld",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Melanie P. aus Lemgo",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah V. aus Heidenheim",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Bin zufrieden.",
    "customer_name": "Malte O. aus Heinsberg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Stefanie X. aus Paderborn",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Gründlichkeit gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Oskar H. aus Lüneburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Gründlichkeit gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Moritz Z. aus Solingen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Preis/Leistung past einfach.",
    "customer_name": "Birgit P. aus Kerpen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Christoph Y. aus Essen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Daumen hoch!",
    "customer_name": "Philipp A. aus Baden-Baden",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Oskar B. aus Rastatt",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Leo J. aus Sindelfingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Stefanie W. aus Fürth",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Gründlichkeit gefällt mir gut. Top, weiter so.",
    "customer_name": "Laura J. aus Hanau",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Vincent R. aus Leonberg",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Noah U. aus Kerpen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Sarah I. aus Herne",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Elias L. aus Ibbenbüren",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Sandra G. aus Erlangen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "David M. aus Hameln",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Yannick J. aus Friedrichshafen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Christina P. aus Wesel",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Petra D. aus Eisenach",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Timo V. aus Regensburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Nassrasur gefällt mir gut. Daumen hoch!",
    "customer_name": "Mats L. aus Plauen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia N. aus Bad Oeynhausen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Jannik J. aus Bochum",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Nicole L. aus Marl",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Noah D. aus Herzogenrath",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Gründlichkeit gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Laura L. aus Waiblingen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders EasyClean gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Dominik W. aus Gladbeck",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Danke!",
    "customer_name": "Sarah G. aus Pulheim",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Florian Y. aus Hamm",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Florian S. aus Plauen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Absolute Kaufempfehlung.",
    "customer_name": "Tobias O. aus Kaiserslautern",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Gründlichkeit gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Dominik V. aus Gronau",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Matteo K. aus Gütersloh",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Alles richtig gemacht.",
    "customer_name": "Benedikt I. aus Oranienburg",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Jan Z. aus Grevenbroich",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Aufsatz gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Kilian T. aus Bremen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Marlon T. aus Trier",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Benedikt A. aus Bietigheim-Bissingen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Malte V. aus Dormagen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Dominik B. aus Sankt Augustin",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Niklas T. aus Hilden",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Paul X. aus Bornheim",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Christoph D. aus Oberursel",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Tanja G. aus Wetzlar",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Moritz Y. aus Euskirchen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Sabine J. aus Lübeck",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Anna O. aus Elmshorn",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Marlon F. aus Castrop-Rauxel",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Milan I. aus München",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders EasyClean gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "David G. aus Arnsberg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian D. aus Konstanz",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Nico K. aus Rosenheim",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Christoph J. aus Kiel",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Lenny A. aus Konstanz",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Danke!",
    "customer_name": "Sascha S. aus Bergisch Gladbach",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Nadine Y. aus Mönchengladbach",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Sarah C. aus Zwickau",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Mats M. aus Detmold",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Petra A. aus Herzogenrath",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Erik G. aus Ratingen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Oskar Y. aus Aurich",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "David W. aus Erlangen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Claudia F. aus Kerpen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Monika L. aus Kiel",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Claudia M. aus Ravensburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Lukas K. aus Offenburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Erik G. aus Memmingen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Tom H. aus Brotterode",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Nico C. aus Leinfelden-Echterdingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Ben B. aus Hattingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Tim X. aus Essen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Johannes A. aus Baden-Baden",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Valentin V. aus Rüsselsheim",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Nassrasur ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Simon Y. aus Dinslaken",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Stefanie T. aus Bornheim",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Jonas X. aus Lüneburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Tom S. aus Hilden",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Andrea F. aus Kempten",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. 5 Sterne von mir.",
    "customer_name": "Tobias P. aus Euskirchen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Jonas M. aus Regensburg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Paul C. aus Marburg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Arne P. aus Dortmund",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders EasyClean gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Benedikt O. aus Konstanz",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Anja B. aus Baden-Baden",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Yannick P. aus Ravensburg",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Nadine K. aus Nürnberg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Aufsatz gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Jannik U. aus Flensburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Top, weiter so.",
    "customer_name": "Birgit X. aus Lünen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Luis K. aus Gießen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anton I. aus Rastatt",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Kerstin D. aus Rodgau",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Luis X. aus Hof",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Finn C. aus Mainz",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Adrian R. aus Pforzheim",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Henry C. aus Borken",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders EasyClean gefällt mir gut. Daumen hoch!",
    "customer_name": "Elias D. aus Filderstadt",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Leon N. aus Mainz",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Lisa H. aus Freiburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Anna F. aus Heilbronn",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Nadine Z. aus Bielefeld",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders EasyClean gefällt mir gut. Vielen Dank.",
    "customer_name": "Arne O. aus Böblingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Adrian E. aus Dülmen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Lukas Q. aus Frankfurt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Gründlichkeit gefällt mir gut. Lohnt sich.",
    "customer_name": "Christoph Z. aus Lüneburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Johannes K. aus Rodgau",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Lenny O. aus Bocholt",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Sabine A. aus Herzogenrath",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Aufsatz gefällt mir gut. Daumen hoch!",
    "customer_name": "Kilian J. aus Oberursel",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Aufsatz gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Maria G. aus Rostock",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Philipp U. aus Norderstedt",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Bin zufrieden.",
    "customer_name": "Stefanie M. aus Lünen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Simon H. aus Menden",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Noah V. aus Bocholt",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Klare 10/10.",
    "customer_name": "Sabine H. aus Paderborn",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Tom X. aus Duisburg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Li-Ion gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christina S. aus Erfurt",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Aufsatz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Tanja M. aus Solingen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Lenny I. aus Lüneburg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Tim Q. aus Baden-Baden",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Erik K. aus Ingolstadt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Maria H. aus Gummersbach",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders EasyClean gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Kerstin A. aus Hürth",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Petra D. aus Lemgo",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Anna P. aus Esslingen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Lenny V. aus Memmingen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Robin S. aus Sindelfingen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Nadine Z. aus Bornheim",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Bastian A. aus Borken",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "David F. aus Dülmen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anja R. aus Potsdam",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Gründlichkeit gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Johannes R. aus Menden",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Nassrasur gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Timo L. aus Bamberg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Valentin S. aus Gießen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Sarah C. aus Ludwigshafen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Anja U. aus Dülmen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Henry V. aus Wesel",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Christoph V. aus Flensburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Mats O. aus Düsseldorf",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Oskar P. aus Freising",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Kann ich nur weiterempfehlen.",
    "customer_name": "Andrea M. aus Rostock",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Li-Ion gefällt mir gut. Klare 10/10.",
    "customer_name": "Christina R. aus Rostock",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Oskar U. aus Lörrach",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Henry R. aus Hattingen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Lenny Y. aus Pulheim",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Jan T. aus Oberhausen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Max P. aus Essen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Nassrasur gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "David W. aus Sankt Augustin",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Laura P. aus Mainz",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Alles richtig gemacht.",
    "customer_name": "Kevin Y. aus Trier",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Lenny F. aus Gronau",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Nassrasur ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Bastian J. aus Viersen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Henry H. aus Delmenhorst",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Yannick P. aus Unna",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Anton C. aus Dinslaken",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Maria A. aus Herford",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Sascha M. aus Pulheim",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Gründlichkeit gefällt mir gut. Daumen hoch!",
    "customer_name": "Leo C. aus Neunkirchen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Tim D. aus Garbsen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny C. aus Neunkirchen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Nassrasur gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Luca F. aus Halle (Saale)",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Valentin G. aus Heilbronn",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Danke!",
    "customer_name": "Christoph V. aus Mainz",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Leo K. aus Borken",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Marlon F. aus Lemgo",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Katharina D. aus Bamberg",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Bin zufrieden.",
    "customer_name": "Adrian O. aus Borken",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Monika V. aus Kamen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Justus D. aus Frankfurt",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Timo G. aus Kaiserslautern",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Max A. aus Bergisch Gladbach",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders EasyClean gefällt mir gut. Vielen Dank.",
    "customer_name": "Noah Y. aus Gütersloh",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Bastian M. aus Aurich",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Paul V. aus Marl",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Julian A. aus Unna",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Noah S. aus Kamen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Marlon V. aus Langenhagen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Noah Y. aus Wolfenbüttel",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Maximilian L. aus Hanau",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Bastian O. aus Halle (Saale)",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Aufsatz gefällt mir gut. Daumen hoch!",
    "customer_name": "Simon X. aus Pulheim",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Katharina P. aus Filderstadt",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Moritz E. aus Straubing",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Matteo R. aus Lemgo",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Aufsatz gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Justus P. aus Moers",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Sandra B. aus Herten",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Lohnt sich.",
    "customer_name": "Valentin D. aus Unna",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Samuel O. aus Wunstorf",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Maria Y. aus Marl",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Einfach klasse.",
    "customer_name": "Luca V. aus Heinsberg",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Melanie E. aus Schwäbisch Gmünd",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Li-Ion gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Julian X. aus Detmold",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Alexander L. aus Borken",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Li-Ion gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Erik U. aus Leipzig",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Katharina R. aus Nürnberg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Tobias U. aus Bonn",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Johannes R. aus Erlangen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Tanja Y. aus Dülmen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Philipp C. aus Wetzlar",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Matteo B. aus Wolfsburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. 5 Sterne von mir.",
    "customer_name": "Maximilian D. aus Darmstadt",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Gründlichkeit gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Vincent K. aus Augsburg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Valentin W. aus Bruchsal",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Johannes N. aus Worms",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Luca I. aus Straubing",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny A. aus Aachen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Erik J. aus Dormagen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Moritz L. aus Rheine",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Aufsatz gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Florian M. aus Bornheim",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Simon I. aus Rheine",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Nadine B. aus Cottbus",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom V. aus Lübeck",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Anton O. aus Landshut",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Aufsatz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Tobias S. aus Aalen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Aufsatz gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz K. aus Euskirchen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Nicole J. aus Ingolstadt",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Super Shop, super Ware.",
    "customer_name": "Tom L. aus Garbsen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Dennis Q. aus Langenfeld",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Li-Ion gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra F. aus Neustadt an der Weinstraße",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Paul B. aus Essen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Alexander L. aus Grevenbroich",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Birgit A. aus Göttingen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Nassrasur gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Christina X. aus Bruchsal",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Stefanie A. aus Cottbus",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Hannes V. aus Stolberg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Moritz G. aus Ratingen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Li-Ion gefällt mir gut. Lohnt sich.",
    "customer_name": "Sabine I. aus Rheda-Wiedenbrück",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Top, weiter so.",
    "customer_name": "Anja N. aus Passau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Katharina M. aus Peine",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "Hannes S. aus Bottrop",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Justus B. aus Reutlingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Aufsatz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "David B. aus Hattingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny J. aus Neustadt an der Weinstraße",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Monika S. aus Langenfeld",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Leo G. aus Hagen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nadine R. aus Villingen-Schwenningen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Tobias M. aus Herne",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Fabian L. aus Neuss",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Sabine H. aus Bergkamen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Li-Ion gefällt mir gut. Top, weiter so.",
    "customer_name": "Katharina R. aus Darmstadt",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders EasyClean gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Laura T. aus Melle",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders EasyClean gefällt mir gut. Daumen hoch!",
    "customer_name": "Kerstin V. aus Bielefeld",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Emil F. aus Gütersloh",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Johannes C. aus Stuttgart",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Aufsatz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin W. aus Trier",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Timo I. aus Hof",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Nadine O. aus Heilbronn",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Melanie J. aus Frechen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Christoph J. aus Bayreuth",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders EasyClean gefällt mir gut. Klare 10/10.",
    "customer_name": "Arne Q. aus Herten",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik W. aus Bochum",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Sandra U. aus Tübingen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Aufsatz gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Sarah S. aus Weinheim",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Birgit D. aus Leipzig",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Henry O. aus Iserlohn",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Li-Ion gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Elias W. aus Kiel",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias N. aus Rottenburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders EasyClean gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Jannik T. aus Esslingen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Monika K. aus Aschaffenburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Valentin W. aus Köln",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Adrian R. aus Brandenburg an der Havel",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Lenny N. aus Langenfeld",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Monika Z. aus Cottbus",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Nicole R. aus Berlin",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Christina H. aus Potsdam",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Tanja Z. aus Pforzheim",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Alles richtig gemacht.",
    "customer_name": "Sabine F. aus Dormagen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Lenny U. aus Kaiserslautern",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Sehr zu empfehlen.",
    "customer_name": "Jannik V. aus Neumünster",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Aufsatz gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Laura C. aus Greifswald",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Nassrasur gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Anna W. aus Marburg",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Nassrasur gefällt mir gut. Vielen Dank.",
    "customer_name": "Philipp A. aus Viersen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Arne S. aus Esslingen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Nadine Z. aus Gelsenkirchen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Anja S. aus Esslingen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Emil G. aus Leipzig",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Malte Q. aus Troisdorf",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "Matteo C. aus Mainz",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Alles richtig gemacht.",
    "customer_name": "Stefanie Y. aus Bietigheim-Bissingen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Nassrasur gefällt mir gut. Lohnt sich.",
    "customer_name": "Nadine Y. aus Ludwigshafen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Sascha Z. aus Albstadt",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Kerstin Q. aus Cottbus",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Johannes W. aus Nettetal",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Nassrasur gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Hannes M. aus Erlangen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Erik Y. aus Wetzlar",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Nadine W. aus Marburg",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Tanja Q. aus Gießen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Christoph P. aus Rosenheim",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Benedikt L. aus Ludwigsburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Daumen hoch!",
    "customer_name": "Luis Z. aus Offenburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Sandra D. aus Heidelberg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Susanne X. aus Wolfenbüttel",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Adrian J. aus Memmingen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Erik W. aus Jena",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders EasyClean gefällt mir gut. Daumen hoch!",
    "customer_name": "Robin R. aus Greifswald",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders EasyClean gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Erik S. aus Lahr",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Top.",
    "customer_name": "Laura D. aus Brandenburg an der Havel",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Claudia T. aus Hannover",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Johannes X. aus Eisenach",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Mats F. aus Bad Salzuflen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Liam L. aus Mannheim",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Melanie Q. aus Herzogenrath",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Julian O. aus Landshut",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Andrea Z. aus Dortmund",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Dominik G. aus Bietigheim-Bissingen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Kerstin S. aus Wunstorf",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Henry N. aus Kempten",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Lenny C. aus Bonn",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Preis/Leistung past einfach.",
    "customer_name": "Ben K. aus Aalen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Elias Q. aus Euskirchen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Timo F. aus Speyer",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Aufsatz gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Theo U. aus Hagen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Gründlichkeit gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Johannes B. aus Kassel",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Samuel L. aus Heilbronn",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Moritz F. aus Friedrichshafen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Aufsatz gefällt mir gut. Top, weiter so.",
    "customer_name": "Malte E. aus Herne",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian F. aus Ravensburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Claudia C. aus Velbert",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Nassrasur ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Christoph T. aus Flensburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Gründlichkeit gefällt mir gut. Vielen Dank.",
    "customer_name": "Anton W. aus Bielefeld",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders EasyClean gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Elias Q. aus Eschweiler",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Laura D. aus Bremerhaven",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Robin K. aus Hameln",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Anja W. aus Erkrath",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Gründlichkeit gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Kilian W. aus Straubing",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Alles richtig gemacht.",
    "customer_name": "Sabine E. aus Hattingen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Li-Ion gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dominik V. aus Elmshorn",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Gründlichkeit gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Dominik J. aus Göppingen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Aufsatz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Kevin B. aus Lübeck",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders EasyClean gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sandra W. aus Bielefeld",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Jonas Q. aus Tübingen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Li-Ion gefällt mir gut. Top, weiter so.",
    "customer_name": "Jannik X. aus Fellbach",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Finn R. aus Monheim am Rhein",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Super Shop, super Ware.",
    "customer_name": "Jan I. aus Pforzheim",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Li-Ion gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Mats V. aus Bielefeld",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Aufsatz gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam Z. aus Hilden",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Vincent H. aus Ambreg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Anton M. aus Aalen",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Mats S. aus Neumünster",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tim D. aus Hattingen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Aufsatz gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Mats U. aus Köln",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Monika G. aus Emden",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Dennis U. aus Reutlingen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Birgit C. aus Hilden",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Malte A. aus Bochum",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders EasyClean gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Stefanie O. aus Recklinghausen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Samuel U. aus Hanau",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Anna V. aus Hameln",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Samuel J. aus Leipzig",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Leo W. aus Recklinghausen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Julia H. aus Wolfsburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Aufsatz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Arne M. aus Bottrop",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Aufsatz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin I. aus Rheda-Wiedenbrück",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Gründlichkeit gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Hannes E. aus Salzgitter",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Maria F. aus Celle",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Yannick L. aus Aachen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Top.",
    "customer_name": "Leo Y. aus Aschaffenburg",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Nicole M. aus Menden",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Gründlichkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Robin S. aus Dresden",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Milan S. aus Rheine",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Stefanie S. aus Bochum",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Max P. aus Hamburg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Leon D. aus Hamburg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Tanja W. aus Wetzlar",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Ben N. aus Flensburg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Maria V. aus Stralsund",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Top.",
    "customer_name": "Felix Z. aus Neunkirchen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Lenny M. aus Landshut",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders EasyClean gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lukas C. aus Speyer",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Katharina T. aus Neustadt an der Weinstraße",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Paul U. aus Jena",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. 5 Sterne von mir.",
    "customer_name": "Mats U. aus Herzogenrath",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Nadine X. aus Kaiserslautern",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Kerstin Y. aus Mönchengladbach",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Anton J. aus Lemgo",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Johannes E. aus Witten",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders EasyClean gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Ben X. aus Wesel",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Sascha E. aus Bergisch Gladbach",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Hannes M. aus Magdeburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Lohnt sich.",
    "customer_name": "Sascha G. aus Fürth",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature EasyClean ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Florian B. aus Duisburg",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Gründlichkeit gefällt mir gut. Einfach klasse.",
    "customer_name": "Melanie J. aus Saarbrücken",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Moritz O. aus Hannover",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Kevin P. aus Kaufbeuren",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Sandra C. aus Erkrath",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Gründlichkeit gefällt mir gut. Top, weiter so.",
    "customer_name": "Susanne O. aus Mainz",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Aufsatz gefällt mir gut. Top, weiter so.",
    "customer_name": "Nico Q. aus Mülheim an der Ruhr",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin K. aus Friedrichshafen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Malte G. aus Braunschweig",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Sarah G. aus Kaufbeuren",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Benedikt G. aus Minden",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Aufsatz gefällt mir gut. Einfach klasse.",
    "customer_name": "Kevin U. aus Kassel",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Timo L. aus Hildesheim",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Lukas Y. aus Augsburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Samuel P. aus Frankfurt (Oder)",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Hannes Z. aus Magdeburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Leon A. aus Ratingen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Nadine T. aus Konstanz",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Moritz I. aus Rheda-Wiedenbrück",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Aufsatz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Yannick V. aus Bruchsal",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Li-Ion gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Birgit R. aus Recklinghausen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Gründlichkeit gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo E. aus Garbsen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Jannik G. aus Bad Salzuflen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Malte D. aus Friedrichshafen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Birgit U. aus Velbert",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Robin A. aus Köln",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Timo B. aus Wuppertal",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Christina Z. aus Neuwied",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Tom V. aus Weimar",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Kilian Q. aus Wiesbaden",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Ben G. aus Neuss",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Stefanie L. aus Neuwied",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Matteo W. aus Ratingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Max G. aus Marburg",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Valentin F. aus Friedrichshafen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Stefanie Q. aus Gütersloh",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Sascha X. aus Neustadt an der Weinstraße",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon O. aus Nordhorn",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders EasyClean gefällt mir gut. Einfach klasse.",
    "customer_name": "Simon N. aus Ingolstadt",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Bin rundum glücklich damit.",
    "customer_name": "Leon Y. aus Stuttgart",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Sandra V. aus Nordhorn",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Birgit D. aus Bergheim",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Nicole P. aus Wesel",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Nassrasur gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sascha M. aus Regensburg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik U. aus Landshut",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders EasyClean gefällt mir gut. Klare 10/10.",
    "customer_name": "Felix F. aus Darmstadt",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Mats X. aus Monheim am Rhein",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Li-Ion gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Laura N. aus Unna",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Melanie P. aus Baden-Baden",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Li-Ion gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Florian Y. aus Dülmen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Arne I. aus Neumünster",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Top.",
    "customer_name": "Julian V. aus Dinslaken",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Monika G. aus Celle",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders EasyClean gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra J. aus Plauen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Mats N. aus Garbsen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Laura K. aus Reutlingen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Monika X. aus Dachau",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Bastian L. aus Bornheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Nicole S. aus Remscheid",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Dennis K. aus Lahr",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Werde dabei bleiben.",
    "customer_name": "Anna V. aus Göppingen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Melanie E. aus Flensburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Lohnt sich.",
    "customer_name": "Emil X. aus Hamm",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Maria Q. aus Hildesheim",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Marlon X. aus Herne",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Anton A. aus Sindelfingen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Stefanie K. aus Remscheid",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Anton Q. aus Hennef",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Robin Y. aus Hannover",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Dennis M. aus Melle",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Benedikt X. aus Brandenburg an der Havel",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Johannes F. aus Hamburg",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Bastian R. aus Rodgau",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Laura S. aus Tübingen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Andrea F. aus Worms",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Vincent X. aus Herzogenrath",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Monika Y. aus Tübingen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Aufsatz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Stefanie Y. aus Ambreg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Valentin H. aus Marburg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Nico G. aus Langenhagen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Christoph P. aus Freiburg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christoph V. aus Frankfurt",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Felix T. aus Gera",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Top.",
    "customer_name": "Sascha A. aus Lingen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Arne A. aus Ludwigshafen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Anton W. aus Neuss",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Liam F. aus Herne",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Samuel X. aus Heidelberg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Elias F. aus Memmingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Tobias R. aus Neunkirchen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Gründlichkeit gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dominik H. aus Magdeburg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Julian R. aus Gronau",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Nassrasur gefällt mir gut. Einfach klasse.",
    "customer_name": "Jannik W. aus Greifswald",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Gründlichkeit gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Christina C. aus Leonberg",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Adrian B. aus Delmenhorst",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Andrea S. aus Bonn",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Sandra M. aus Augsburg",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Claudia L. aus Nordhorn",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Jan B. aus Passau",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Tanja V. aus Herford",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Emil X. aus Lüneburg",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Kevin A. aus Kiel",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Aufsatz gefällt mir gut. Klare 10/10.",
    "customer_name": "David M. aus Friedrichshafen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Max Q. aus Eschweiler",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Gründlichkeit gefällt mir gut. Klare 10/10.",
    "customer_name": "Bastian B. aus Hamburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Anton Z. aus Leonberg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Anna H. aus Bayreuth",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. 5 Sterne von mir.",
    "customer_name": "Tanja I. aus Herzogenrath",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Jan C. aus Oldenburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Kevin E. aus Stralsund",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Nico T. aus Oldenburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "David T. aus Dortmund",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Monika J. aus Celle",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Johannes L. aus Koblenz",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Justus P. aus Dortmund",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Nassrasur gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Marlon K. aus Detmold",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Katharina V. aus Weinheim",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Birgit N. aus Göttingen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Nassrasur gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Sarah U. aus Bochum",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Dennis K. aus Minden",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Dominik W. aus Soest",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Bastian U. aus Jena",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Top.",
    "customer_name": "Leo M. aus Hürth",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Adrian F. aus Rheda-Wiedenbrück",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Elias E. aus Jena",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Nie mehr ohne.",
    "customer_name": "Kerstin L. aus Menden",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Alles richtig gemacht.",
    "customer_name": "Julia L. aus Aurich",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Susanne C. aus Frankfurt",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Danke!",
    "customer_name": "Nico Z. aus Halle (Saale)",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Liam H. aus Oberursel",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Sarah O. aus Bad Kreuznach",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Tim J. aus Emden",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Luca G. aus Pulheim",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Jannik U. aus Konstanz",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Nassrasur gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil B. aus Celle",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Aufsatz gefällt mir gut. Einfach klasse.",
    "customer_name": "Katharina C. aus Worms",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Jan M. aus Lippstadt",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Jannik O. aus Herne",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Birgit X. aus Waiblingen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Aufsatz gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent U. aus Neuss",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Aufsatz gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julia Z. aus Delmenhorst",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Jan H. aus Worms",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Bastian Q. aus Bocholt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Dominik U. aus Weinheim",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Lisa I. aus Berlin",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Nassrasur gefällt mir gut. Daumen hoch!",
    "customer_name": "Simon R. aus Zwickau",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Klare 10/10.",
    "customer_name": "Christina P. aus Delmenhorst",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julia A. aus Landshut",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Leon Y. aus Essen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Melanie Z. aus Filderstadt",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Samuel N. aus Schweinfurt",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Kevin J. aus Paderborn",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Dominik W. aus Bonn",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Klare 10/10.",
    "customer_name": "Sascha K. aus Bad Homburg",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Nassrasur gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Maria R. aus Frechen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Bastian W. aus Bremerhaven",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Andrea H. aus Aalen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Preis/Leistung past einfach.",
    "customer_name": "Tanja N. aus Görlitz",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "David Y. aus Rüsselsheim",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Nicole M. aus Pforzheim",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Malte E. aus Heidelberg",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Lisa J. aus Chemnitz",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Tom L. aus Fürth",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Liam X. aus Hilden",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Jan D. aus Osnabrück",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Christoph C. aus München",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Dominik A. aus Bayreuth",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Johannes U. aus Ingolstadt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Nassrasur gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nicole T. aus Speyer",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Anna Q. aus Worms",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Preis/Leistung past einfach.",
    "customer_name": "Julia Y. aus Villingen-Schwenningen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Aufsatz gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Adrian A. aus Herten",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Arne W. aus Peine",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Laura D. aus Pulheim",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Gründlichkeit gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Vincent J. aus Frechen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Top.",
    "customer_name": "Felix Z. aus Iserlohn",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Elias D. aus Hilden",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Aufsatz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Mats J. aus Paderborn",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Jonas X. aus Hilden",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Gründlichkeit ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Benedikt L. aus Darmstadt",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Malte W. aus Mönchengladbach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders EasyClean gefällt mir gut. Top, weiter so.",
    "customer_name": "Monika X. aus Bergisch Gladbach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Li-Ion gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Kilian H. aus Tübingen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Hannes U. aus Eisenach",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Andrea K. aus Dülmen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Hannes G. aus Pulheim",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Dennis J. aus Kamen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Preis/Leistung past einfach.",
    "customer_name": "Niklas N. aus München",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Vincent G. aus Lünen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Preis/Leistung past einfach.",
    "customer_name": "Dennis C. aus Viersen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Adrian P. aus Lünen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Li-Ion gefällt mir gut. Klare 10/10.",
    "customer_name": "Christoph F. aus Münster",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian F. aus Memmingen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Christina N. aus Bad Oeynhausen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Nassrasur gefällt mir gut. Top, weiter so.",
    "customer_name": "Noah C. aus Bocholt",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Alexander E. aus Euskirchen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Aufsatz gefällt mir gut. Lohnt sich.",
    "customer_name": "Tim L. aus Neu-Ulm",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Besser geht es nicht.",
    "customer_name": "Simon E. aus Schweinfurt",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Matteo B. aus Wiesbaden",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Andrea I. aus Witten",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders EasyClean gefällt mir gut. Klare 10/10.",
    "customer_name": "Robin I. aus Pforzheim",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Niklas I. aus Herne",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Li-Ion gefällt mir gut. Top, weiter so.",
    "customer_name": "Florian K. aus Hennef",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Nie mehr ohne.",
    "customer_name": "Kevin C. aus Siegen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Felix F. aus Speyer",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Bin zufrieden.",
    "customer_name": "Christina Z. aus Darmstadt",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Andrea S. aus Rheda-Wiedenbrück",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Elias G. aus Recklinghausen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Emil X. aus Emden",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Robin O. aus Moers",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Bin zufrieden.",
    "customer_name": "Samuel U. aus Landshut",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature EasyClean ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Noah W. aus Bad Oeynhausen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Liam A. aus Straubing",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Nassrasur ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Anja Z. aus Heinsberg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Leon F. aus Offenburg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Sandra J. aus Regensburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Leon G. aus Essen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Noah G. aus Sindelfingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Noah I. aus Meerbusch",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature EasyClean ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Fabian O. aus Gronau",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Johannes Y. aus Magdeburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Werde dabei bleiben.",
    "customer_name": "Claudia X. aus Unna",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Milan D. aus Augsburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah G. aus Peine",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Marlon H. aus Fürth",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Danke!",
    "customer_name": "Emil L. aus Norderstedt",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Melanie Z. aus Mülheim an der Ruhr",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Nassrasur gefällt mir gut. Lohnt sich.",
    "customer_name": "Emil O. aus Karlsruhe",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Jannik I. aus Hildesheim",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders EasyClean gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Arne J. aus Bremerhaven",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Philipp Z. aus Saarbrücken",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Daumen hoch!",
    "customer_name": "Nicole T. aus Würzburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Li-Ion gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Maria C. aus Remscheid",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Johannes M. aus Gronau",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Gründlichkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Katharina S. aus Oldenburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Mats M. aus Rodgau",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Noah V. aus Menden",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Tobias G. aus Rastatt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Li-Ion gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Leon Q. aus Monheim am Rhein",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Tim Y. aus Trier",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max L. aus Lünen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Luca P. aus Stolberg",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Li-Ion gefällt mir gut. Lohnt sich.",
    "customer_name": "Liam G. aus Pforzheim",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Stefanie P. aus Salzgitter",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia N. aus Neustadt an der Weinstraße",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Benedikt F. aus Bayreuth",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Gründlichkeit gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes G. aus Worms",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Bin zufrieden.",
    "customer_name": "Maximilian C. aus Monheim am Rhein",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Theo G. aus Kiel",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Julia H. aus Fulda",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "David O. aus Münster",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Lukas V. aus Lingen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Maria I. aus Sindelfingen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Aufsatz gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Yannick N. aus Gütersloh",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Max T. aus Neunkirchen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz D. aus Sindelfingen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Nicole E. aus Dorsten",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Theo O. aus Speyer",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Lisa E. aus Hattingen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Tim S. aus Menden",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Justus L. aus Bergheim",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Hannes C. aus Düren",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Kilian J. aus Düsseldorf",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Tom Q. aus Ibbenbüren",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Christina G. aus Würzburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Anja J. aus Oberhausen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. 5 Sterne von mir.",
    "customer_name": "Claudia U. aus Menden",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Tobias J. aus Viersen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Bin zufrieden.",
    "customer_name": "Marlon Z. aus Dinslaken",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Super Shop, super Ware.",
    "customer_name": "Erik P. aus Fürth",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Li-Ion gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Dennis X. aus Dachau",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Sarah K. aus Lörrach",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Felix H. aus Celle",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders EasyClean gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tobias A. aus Bergkamen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Theo F. aus Neuwied",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Dominik D. aus Braunschweig",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Niklas F. aus Rosenheim",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Nassrasur gefällt mir gut. Vielen Dank.",
    "customer_name": "Tobias F. aus Kaufbeuren",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Stefanie E. aus Reutlingen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Niklas M. aus Kempten",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders EasyClean gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Vincent P. aus Gronau",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Bin zufrieden.",
    "customer_name": "Claudia Q. aus Celle",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Li-Ion gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Benedikt G. aus Magdeburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Bin zufrieden.",
    "customer_name": "Lisa Y. aus Moers",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Nassrasur gefällt mir gut. Daumen hoch!",
    "customer_name": "Katharina B. aus Bielefeld",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Benedikt C. aus Albstadt",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Kilian C. aus Saarbrücken",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Felix Z. aus Heidelberg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Max X. aus Speyer",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Andrea J. aus Arnsberg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Li-Ion gefällt mir gut. Daumen hoch!",
    "customer_name": "Kilian M. aus Gütersloh",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Luis L. aus Pforzheim",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Sarah X. aus Rosenheim",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Nassrasur gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Liam E. aus Bad Kreuznach",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Aufsatz gefällt mir gut. Vielen Dank.",
    "customer_name": "Sandra K. aus Schwerin",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Jonas T. aus Düren",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Kilian S. aus Düsseldorf",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Susanne J. aus Darmstadt",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Melanie B. aus Mülheim an der Ruhr",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Kilian Y. aus Stuttgart",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Gründlichkeit gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Felix P. aus Konstanz",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Samuel I. aus Bremerhaven",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Kilian I. aus Braunschweig",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Li-Ion gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Timo D. aus Zwickau",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Luis H. aus Krefeld",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Leon T. aus Soest",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Gründlichkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Julia C. aus Rodgau",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Emil R. aus Dormagen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Simon R. aus Trier",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Li-Ion ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Lisa A. aus Herten",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature EasyClean ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Justus Z. aus Kaiserslautern",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Nassrasur gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Yannick Y. aus Monheim am Rhein",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Li-Ion gefällt mir gut. Klare 10/10.",
    "customer_name": "Dennis F. aus Borken",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Tom U. aus Weimar",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Top.",
    "customer_name": "Melanie Z. aus Marburg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders EasyClean gefällt mir gut. Top, weiter so.",
    "customer_name": "Florian K. aus Troisdorf",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Susanne L. aus Heinsberg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Aufsatz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Vincent P. aus Reutlingen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Philipp M. aus Kiel",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Christina B. aus Kiel",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Jan G. aus Bornheim",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Matteo K. aus Hildesheim",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Ben T. aus Euskirchen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Laura Q. aus Düsseldorf",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Gründlichkeit gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Max S. aus Bad Kreuznach",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Julian J. aus Sankt Augustin",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Aufsatz ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Noah A. aus Hamburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Bin zufrieden.",
    "customer_name": "Fabian H. aus Heilbronn",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders EasyClean gefällt mir gut. Einfach klasse.",
    "customer_name": "Christoph K. aus Göppingen",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Sarah U. aus Hannover",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Top.",
    "customer_name": "Leon F. aus Koblenz",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Andrea I. aus Mülheim an der Ruhr",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Kann ich nur weiterempfehlen.",
    "customer_name": "Valentin K. aus Bottrop",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Nassrasur gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik D. aus München",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "David U. aus Trier",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Anja G. aus Grevenbroich",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Einfach klasse.",
    "customer_name": "Jannik R. aus Osnabrück",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Nassrasur gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Maximilian G. aus Sankt Augustin",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Claudia Y. aus Emden",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Malte R. aus Rodgau",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Li-Ion gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Monika I. aus Ravensburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Mats I. aus Rosenheim",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Henry X. aus Lüneburg",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Milan V. aus Lörrach",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Timo V. aus Hamburg",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Ben Y. aus Freising",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Niklas L. aus Siegen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders EasyClean gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Benedikt P. aus Ibbenbüren",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders EasyClean gefällt mir gut. Top, weiter so.",
    "customer_name": "Tom D. aus Gießen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Nadine R. aus Esslingen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Erik X. aus Dorsten",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Elias P. aus Oldenburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sabine R. aus Hürth",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Petra Q. aus Karlsruhe",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Susanne W. aus Neu-Ulm",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Top.",
    "customer_name": "Anja L. aus Bocholt",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Gründlichkeit ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Christina X. aus Wunstorf",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Monika J. aus München",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Bastian E. aus Rüsselsheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Katharina H. aus Erftstadt",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Li-Ion gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Tom V. aus Hannover",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Aufsatz gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Nadine G. aus Göppingen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Anja X. aus Augsburg",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Preis/Leistung past einfach.",
    "customer_name": "Anja R. aus Tübingen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Aufsatz ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Sascha Q. aus Fellbach",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Jan R. aus Wunstorf",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Sandra U. aus Hannover",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders EasyClean gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico W. aus Hattingen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Li-Ion ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Justus X. aus Potsdam",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gründlichkeit ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Philipp D. aus Erkrath",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Alles richtig gemacht.",
    "customer_name": "Nicole J. aus Kerpen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Nassrasur gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Susanne X. aus Lingen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Aufsatz gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Kilian I. aus Delmenhorst",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Matteo A. aus Rastatt",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Marlon F. aus Bergkamen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Gründlichkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Benedikt H. aus Frankfurt",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Aufsatz gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Milan L. aus Bergheim",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Li-Ion gefällt mir gut. Top, weiter so.",
    "customer_name": "Noah Z. aus Plauen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Erik F. aus Herne",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Nassrasur ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Henry M. aus Erftstadt",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Maria Y. aus Wesel",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Li-Ion ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Tom K. aus Ludwigsburg",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Laura T. aus Peine",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Gründlichkeit gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Dominik O. aus Hildesheim",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Nassrasur gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny E. aus Ludwigsburg",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Nassrasur ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Julia I. aus Düren",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Tim T. aus Ratingen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Hannes A. aus Pulheim",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Li-Ion ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Maximilian P. aus Iserlohn",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Monika Y. aus Albstadt",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Nassrasur ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Sarah J. aus Gummersbach",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Sabine N. aus Celle",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Marlon B. aus Dorsten",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Paul S. aus Kerpen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Nassrasur ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Julia J. aus Regensburg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Fabian L. aus Münster",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja N. aus Kempten",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Aufsatz gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Erik X. aus Greifswald",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Nassrasur gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Erik L. aus Velbert",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Aufsatz ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Luca N. aus Gera",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature EasyClean ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Robin Y. aus Schwäbisch Gmünd",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Nico T. aus Villingen-Schwenningen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature EasyClean ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Florian A. aus Peine",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Li-Ion ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Anja X. aus Hennef",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Monika U. aus Aalen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Maria X. aus Nürnberg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Theo Z. aus Frankfurt (Oder)",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature EasyClean ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Anja C. aus Rodgau",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Li-Ion gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Nicole Q. aus Krefeld",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Gründlichkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Maria H. aus Dresden",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Aufsatz ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Anja M. aus Flensburg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders EasyClean gefällt mir gut. Top, weiter so.",
    "customer_name": "Lenny W. aus Wilhelmshaven",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Nico E. aus Essen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Gründlichkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Matteo M. aus Hameln",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Nassrasur ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Ben L. aus Erfurt",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Finn P. aus Moers",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Leo O. aus Hamburg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Nassrasur ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Julian T. aus Traunstein",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Aufsatz ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Birgit F. aus München",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Laura H. aus Speyer",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Preis/Leistung past einfach.",
    "customer_name": "Maria G. aus Detmold",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Gründlichkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Elias J. aus Kaufbeuren",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Sarah R. aus Leipzig",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Li-Ion ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Felix P. aus Düren",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Gründlichkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Robin E. aus Ibbenbüren",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Preis/Leistung past einfach.",
    "customer_name": "Tanja M. aus Berlin",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kilian M. aus Herford",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Besser geht es nicht.",
    "customer_name": "Erik E. aus Oberursel",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Li-Ion gefällt mir gut. Lohnt sich.",
    "customer_name": "Kevin D. aus Kleve",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. 5 Sterne von mir.",
    "customer_name": "Tobias H. aus Freising",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Nassrasur gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sarah B. aus Wetzlar",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Benedikt V. aus Wetzlar",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Laura R. aus Fürth",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Aufsatz gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Tom E. aus Moers",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Anna A. aus Gummersbach",
    "date": "2025-04-01"
  }
];