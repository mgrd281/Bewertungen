const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Sarah D. aus Ratingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Katharina V. aus Schwerin",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Danke!",
    "customer_name": "Mats H. aus Marl",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Tobias W. aus Heinsberg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Niklas Z. aus Langenfeld",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Susanne J. aus Kiel",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Samuel S. aus Fürth",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Simon R. aus Hürth",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Atem gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Nadine V. aus Herford",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Kilian D. aus Kempten",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Tobias J. aus Fulda",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Hannes Y. aus Nettetal",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Leon E. aus Worms",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Frische gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Henry C. aus Heilbronn",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Lisa E. aus Bamberg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Lukas J. aus Kerpen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Moritz E. aus Tübingen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Tanja Y. aus Fürth",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Anja Z. aus Leinfelden-Echterdingen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Benedikt V. aus Rüsselsheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Absolute Kaufempfehlung.",
    "customer_name": "Erik N. aus Esslingen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Dominik E. aus Castrop-Rauxel",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Sabine F. aus Berlin",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Ben V. aus Ahlen",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "Sandra L. aus Lingen",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Bin zufrieden.",
    "customer_name": "Christina E. aus Traunstein",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Felix B. aus Düsseldorf",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Petra T. aus Witten",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Hannes Q. aus Kassel",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Scharf gefällt mir gut. Daumen hoch!",
    "customer_name": "Luis O. aus Mülheim an der Ruhr",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Sabine C. aus Wilhelmshaven",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Claudia Q. aus Stolberg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Stefanie I. aus Hannover",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Erik D. aus Wesel",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Tobias H. aus Bremen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Mats M. aus Flensburg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Täglich gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Stefanie P. aus Trier",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Scharf gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Leo N. aus Tübingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Jan G. aus Castrop-Rauxel",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Hannes U. aus Hildesheim",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Ben M. aus Speyer",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Niklas W. aus Dorsten",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Luis Z. aus Bietigheim-Bissingen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Noah A. aus Rodgau",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Lisa T. aus Friedrichshafen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Samuel X. aus Weinheim",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Claudia Z. aus Worms",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Petra C. aus Düsseldorf",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Fabian S. aus Leinfelden-Echterdingen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Matteo X. aus Schwerin",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sauberkeit gefällt mir gut. Vielen Dank.",
    "customer_name": "Theo B. aus Filderstadt",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Emil E. aus Ambreg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Hannes T. aus Dachau",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauberkeit gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sascha Y. aus Konstanz",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Luis U. aus Heinsberg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Nico B. aus Rastatt",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Sarah Z. aus Hildesheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Atem ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Elias A. aus Herne",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Adrian F. aus Bamberg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Atem gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Luca B. aus Dülmen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Johannes O. aus Remscheid",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Matteo D. aus Nordhorn",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. 5 Sterne von mir.",
    "customer_name": "Oskar K. aus Freiburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Top.",
    "customer_name": "Benedikt X. aus Weimar",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Kerstin X. aus Freiburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Alexander A. aus Waiblingen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Sauberkeit gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sascha W. aus Köln",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Christina T. aus Weinheim",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Jannik E. aus Potsdam",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Atem gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Sarah G. aus Lörrach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Benedikt M. aus Stralsund",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Petra T. aus Braunschweig",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Justus B. aus Chemnitz",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Luis B. aus Eschweiler",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Hannes V. aus Bocholt",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Nadine M. aus Frankfurt",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Tom K. aus Köln",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Justus L. aus Rostock",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Andrea W. aus Düsseldorf",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Hannes V. aus Neuss",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Lisa A. aus Villingen-Schwenningen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Malte I. aus Bruchsal",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Nicole V. aus Ulm",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Anton S. aus Hamburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Matteo K. aus Straubing",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Luca C. aus Ahlen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Valentin X. aus Lemgo",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luca T. aus Köln",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Kilian H. aus Hof",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Scharf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Christina N. aus Zwickau",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Täglich gefällt mir gut. Lohnt sich.",
    "customer_name": "Tanja T. aus Erkrath",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik O. aus Gütersloh",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Valentin A. aus Freising",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Sauberkeit gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Luca N. aus Hildesheim",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Dominik Q. aus Fürth",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Nico N. aus Hennef",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Hannes U. aus Passau",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Finn P. aus Rheda-Wiedenbrück",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauberkeit gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico B. aus Leonberg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Frische gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Christoph E. aus Brotterode",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Scharf gefällt mir gut. Einfach klasse.",
    "customer_name": "Dennis X. aus Wilhelmshaven",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Moritz L. aus Heidenheim",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Petra K. aus Göttingen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Monika W. aus Freiburg",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes Y. aus Wuppertal",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Top.",
    "customer_name": "Jonas S. aus Remscheid",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Tom T. aus Herzogenrath",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Täglich gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul Z. aus Freiburg",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Bin rundum glücklich damit.",
    "customer_name": "Matteo D. aus Freising",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Theo I. aus Herten",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa Y. aus Lüdenscheid",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Daumen hoch!",
    "customer_name": "Leo Z. aus Koblenz",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Bin zufrieden.",
    "customer_name": "Elias X. aus Chemnitz",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Scharf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Sandra V. aus Herten",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Mats X. aus Herford",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Petra Z. aus Freiburg",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Malte X. aus Frankfurt (Oder)",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Sarah N. aus Hagen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Leon U. aus Regensburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Atem gefällt mir gut. Top, weiter so.",
    "customer_name": "Felix M. aus Dortmund",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Leo E. aus Fellbach",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Super Shop, super Ware.",
    "customer_name": "Jonas J. aus Lünen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Nicole J. aus Bielefeld",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Timo R. aus Gladbeck",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Felix R. aus Hamburg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Jannik S. aus Duisburg",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Moritz E. aus Minden",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Anna Z. aus Borken",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Täglich gefällt mir gut. Klare 10/10.",
    "customer_name": "Tanja K. aus Sankt Augustin",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Tim L. aus Moers",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Julian P. aus Herten",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Tom C. aus Speyer",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Claudia R. aus Pinneberg",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Alexander V. aus Rostock",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Luca Y. aus Zwickau",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Atem ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Jonas W. aus Eschweiler",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Monika P. aus Erfurt",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Max C. aus Ludwigshafen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Bin zufrieden.",
    "customer_name": "Anja R. aus Darmstadt",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Atem gefällt mir gut. Einfach klasse.",
    "customer_name": "Adrian K. aus Neuwied",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Erik Z. aus Bocholt",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Bin zufrieden.",
    "customer_name": "Paul G. aus Weinheim",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Tom I. aus Lippstadt",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Täglich gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Bastian W. aus Mannheim",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Top, weiter so.",
    "customer_name": "Sascha Z. aus Neu-Ulm",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Mats S. aus Hildesheim",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Hannes Z. aus Rastatt",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Melanie G. aus Krefeld",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Täglich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah D. aus Erftstadt",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Justus Q. aus Oranienburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Hannes F. aus Neunkirchen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin C. aus Konstanz",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Ben K. aus Kiel",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Ben O. aus Ambreg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Frische gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia C. aus Fellbach",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Leo Z. aus Leipzig",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Tim Z. aus Baden-Baden",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Sabine L. aus Mannheim",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Melanie H. aus Troisdorf",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Täglich gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin E. aus Bonn",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Anja G. aus Grevenbroich",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja T. aus München",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Kevin V. aus Bielefeld",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Noah W. aus Dinslaken",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Daumen hoch!",
    "customer_name": "Anna H. aus Bochum",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Anton F. aus Mönchengladbach",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Besser geht es nicht.",
    "customer_name": "Lukas I. aus Neustadt an der Weinstraße",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Lukas Y. aus Grevenbroich",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Matteo B. aus Oberhausen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Ben Z. aus Frechen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Sandra A. aus Filderstadt",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Henry R. aus Paderborn",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Atem gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Milan M. aus Leonberg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Einfach klasse.",
    "customer_name": "Anja H. aus Oberhausen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Tim F. aus Braunschweig",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Paul F. aus Bergheim",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Liam W. aus Bielefeld",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Emil H. aus Troisdorf",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Robin G. aus Ravensburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sauberkeit gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Birgit S. aus Cottbus",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Benedikt Z. aus Nettetal",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Täglich gefällt mir gut. Vielen Dank.",
    "customer_name": "Nadine J. aus Pulheim",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Benedikt W. aus Aurich",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Felix E. aus Frankfurt (Oder)",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Anja Z. aus Berlin",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Yannick Y. aus Traunstein",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Adrian Q. aus Würzburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Frische gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Erik N. aus Moers",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Atem gefällt mir gut. Klare 10/10.",
    "customer_name": "Melanie P. aus Langenfeld",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Mats W. aus Halle (Saale)",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Nadine R. aus Düren",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Liam G. aus Konstanz",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Henry K. aus Kleve",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Matteo O. aus Erkrath",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Maximilian M. aus Leverkusen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Bastian M. aus Sindelfingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Julia P. aus Ravensburg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Johannes I. aus Ulm",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Fabian H. aus Rosenheim",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Stefanie O. aus Monheim am Rhein",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Elias N. aus Mannheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Petra L. aus Bremerhaven",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Kerstin L. aus Hof",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Tanja E. aus Dülmen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sauberkeit gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Jan J. aus Heinsberg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Laura W. aus Mainz",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Sauberkeit gefällt mir gut. Vielen Dank.",
    "customer_name": "Max J. aus Viersen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Bastian Z. aus Villingen-Schwenningen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Tom F. aus Grevenbroich",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Scharf gefällt mir gut. Vielen Dank.",
    "customer_name": "Florian Y. aus Filderstadt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Alexander Z. aus München",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Christina B. aus Sankt Augustin",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Frische gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Maria J. aus Leonberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Sarah U. aus Lübeck",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Anna E. aus Heidelberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Scharf gefällt mir gut. Top, weiter so.",
    "customer_name": "Nadine D. aus Neuwied",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Finn Q. aus Heidenheim",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Justus J. aus Arnsberg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Katharina W. aus Hagen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Mats D. aus Offenbach",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Claudia O. aus Hattingen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Danke!",
    "customer_name": "Julia K. aus Schwäbisch Gmünd",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Valentin C. aus Dorsten",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Atem gefällt mir gut. Top, weiter so.",
    "customer_name": "Sascha V. aus Garbsen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Max V. aus Neumünster",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Sascha P. aus Oberursel",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Top, weiter so.",
    "customer_name": "Simon E. aus Fellbach",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Lisa T. aus Detmold",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Susanne I. aus Rheda-Wiedenbrück",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Christoph T. aus Recklinghausen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Bin rundum glücklich damit.",
    "customer_name": "Leo F. aus Remscheid",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sauberkeit gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Erik Y. aus Rosenheim",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Philipp Q. aus Hameln",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Oskar L. aus Freiburg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Sabine S. aus Ludwigshafen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Timo V. aus Pulheim",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Top, weiter so.",
    "customer_name": "Ben B. aus Rüsselsheim",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Maria W. aus Wolfsburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Einfach klasse.",
    "customer_name": "Finn L. aus Hof",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Kevin W. aus Bruchsal",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Marlon A. aus Iserlohn",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Yannick O. aus Nettetal",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Lohnt sich.",
    "customer_name": "Felix R. aus Mainz",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Maria X. aus Rottenburg",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Katharina M. aus Castrop-Rauxel",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Lenny P. aus Potsdam",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Arne M. aus Karlsruhe",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christoph T. aus Stuttgart",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Sandra G. aus Marburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Felix W. aus Unna",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Nico I. aus Leverkusen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Timo M. aus Lingen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Täglich gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Anton Y. aus Aachen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Sarah U. aus Lemgo",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Johannes I. aus Neu-Ulm",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sauberkeit gefällt mir gut. Daumen hoch!",
    "customer_name": "Kevin P. aus Erfurt",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Maximilian V. aus Herten",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Maria G. aus Norderstedt",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Milan C. aus Oberursel",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Petra J. aus Neunkirchen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Tom R. aus Wuppertal",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar G. aus Viersen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Bin rundum glücklich damit.",
    "customer_name": "Leo E. aus Ambreg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Malte S. aus Herten",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Felix C. aus Gummersbach",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Anton M. aus Frankfurt",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "David S. aus Leinfelden-Echterdingen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Dominik F. aus Albstadt",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Klare 10/10.",
    "customer_name": "Timo Z. aus Weinheim",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Absolute Kaufempfehlung.",
    "customer_name": "Paul I. aus Regensburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Frische gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Niklas Y. aus Aurich",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Sauberkeit gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Felix P. aus Bornheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Kauf ich definitiv wieder.",
    "customer_name": "Leon T. aus Bayreuth",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia V. aus Düren",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Stefanie B. aus Delmenhorst",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Hannes O. aus Würzburg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Susanne Y. aus Nordhorn",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Nadine G. aus Bergheim",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Anton W. aus Göppingen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Melanie Q. aus Menden",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. Daumen hoch!",
    "customer_name": "Max U. aus Düren",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Tanja B. aus Troisdorf",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Tim S. aus Wolfenbüttel",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Liam Y. aus Rosenheim",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Scharf gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Katharina E. aus Stralsund",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Sarah R. aus Gelsenkirchen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Milan A. aus Hildesheim",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Andrea K. aus Gütersloh",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Julian N. aus Hennef",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Paul T. aus Rodgau",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Simon J. aus Castrop-Rauxel",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Christina L. aus Mainz",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Fabian X. aus Celle",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Top, weiter so.",
    "customer_name": "Finn F. aus Nürnberg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Täglich gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Nicole D. aus Bremen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Sascha A. aus Recklinghausen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Scharf gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Max R. aus Troisdorf",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Mats O. aus Hannover",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Atem gefällt mir gut. Vielen Dank.",
    "customer_name": "Sarah S. aus Pulheim",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sauberkeit gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Anton H. aus Augsburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Andrea C. aus Minden",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Scharf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Tanja U. aus Fulda",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Hannes T. aus Nürnberg",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Alexander O. aus Bottrop",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Laura A. aus Rüsselsheim",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Matteo B. aus Neunkirchen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Johannes H. aus Velbert",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Samuel F. aus Osnabrück",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Valentin S. aus Delmenhorst",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Stefanie J. aus Bergheim",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Paul U. aus Gummersbach",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Anja Q. aus Essen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "David K. aus Kleve",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Kilian J. aus Kassel",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Adrian W. aus Chemnitz",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Julian F. aus Neuwied",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Alexander W. aus Solingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Top.",
    "customer_name": "Birgit F. aus Memmingen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Sarah R. aus Trier",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Liam E. aus Hagen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Besser geht es nicht.",
    "customer_name": "Theo L. aus Chemnitz",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Daumen hoch!",
    "customer_name": "Niklas V. aus Mainz",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Alexander Z. aus Weinheim",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Erik Y. aus München",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Philipp G. aus Albstadt",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Frische gefällt mir gut. Klare 10/10.",
    "customer_name": "Lukas M. aus Ibbenbüren",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Katharina B. aus Melle",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Stefanie Y. aus Darmstadt",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Moritz G. aus Lemgo",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Atem ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Timo R. aus Garbsen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Sarah P. aus Sindelfingen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Täglich gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Henry H. aus Heilbronn",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Justus Q. aus Salzgitter",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Benedikt T. aus Bergisch Gladbach",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Philipp F. aus Darmstadt",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Danke!",
    "customer_name": "Arne E. aus Eisenach",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Bin zufrieden.",
    "customer_name": "Oskar L. aus Filderstadt",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Johannes L. aus Melle",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Absolute Kaufempfehlung.",
    "customer_name": "Lukas K. aus Bayreuth",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Andrea B. aus Celle",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Andrea P. aus Detmold",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Tom M. aus Rostock",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Mats P. aus Gelsenkirchen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Emil V. aus Bad Kreuznach",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sauberkeit gefällt mir gut. Top, weiter so.",
    "customer_name": "Noah T. aus Alsdorf",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Lenny W. aus Elmshorn",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Leo M. aus Gladbeck",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sauberkeit gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Sandra P. aus Aurich",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Birgit F. aus Worms",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Robin Q. aus Heidelberg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Tim B. aus Jena",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Bastian F. aus Moers",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Henry B. aus Neustadt an der Weinstraße",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Sandra D. aus Wunstorf",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Hannes I. aus Koblenz",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Theo U. aus Chemnitz",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Noah V. aus Wetzlar",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Justus H. aus Herten",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Christina C. aus München",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Susanne T. aus Witten",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Lisa I. aus Greifswald",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah J. aus Essen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Kerstin V. aus Hof",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Emil Z. aus Wilhelmshaven",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Matteo R. aus Albstadt",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Justus H. aus Dormagen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Leon Q. aus Zwickau",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Adrian T. aus Peine",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Atem ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Bastian O. aus Moers",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lukas V. aus Ingolstadt",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Simon U. aus Langenfeld",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Top.",
    "customer_name": "Jan F. aus Leipzig",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Luis T. aus Erfurt",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Lenny P. aus München",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Sabine I. aus Aachen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Andrea D. aus Lüdenscheid",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Lukas L. aus Traunstein",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Täglich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Maria Q. aus Bochum",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Christina T. aus Wolfenbüttel",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Susanne U. aus Herford",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Melanie M. aus Peine",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Absolute Kaufempfehlung.",
    "customer_name": "Nadine Z. aus Mannheim",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Finn H. aus Erkrath",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Theo K. aus Wesel",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Niklas S. aus Castrop-Rauxel",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Justus H. aus Wiesbaden",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Erik D. aus Friedrichshafen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Birgit E. aus Bonn",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Tobias I. aus Erlangen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Luca L. aus Gießen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Andrea K. aus Dessau-Roßlau",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Finn P. aus Bergheim",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Dennis C. aus Ravensburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Philipp C. aus Stralsund",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Timo Y. aus Mönchengladbach",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Petra U. aus Mönchengladbach",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Hannes Y. aus Hof",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Hannes Q. aus Oberursel",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. 5 Sterne von mir.",
    "customer_name": "Simon F. aus Cottbus",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Daumen hoch!",
    "customer_name": "Dominik Z. aus Hagen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Andrea G. aus Sindelfingen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Katharina C. aus Ravensburg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Kerstin A. aus Bottrop",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Dennis M. aus Krefeld",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Kauf ich definitiv wieder.",
    "customer_name": "Mats C. aus München",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Sauberkeit gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Andrea E. aus Moers",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Täglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Sabine A. aus Bocholt",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Monika U. aus Potsdam",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sauberkeit gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Tanja L. aus Kerpen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Atem ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Liam F. aus Wuppertal",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Atem ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Philipp R. aus Gütersloh",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Timo H. aus Berlin",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Oskar D. aus Moers",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Theo Z. aus Frankfurt (Oder)",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Kilian W. aus Wolfenbüttel",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Moritz U. aus Bamberg",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Melanie Y. aus Kiel",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Simon Y. aus Landshut",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Atem gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Lisa W. aus Freising",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Bin zufrieden.",
    "customer_name": "Christoph J. aus Ratingen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik J. aus Witten",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Justus H. aus Eschweiler",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Milan R. aus Bayreuth",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Bin zufrieden.",
    "customer_name": "Tim A. aus Dortmund",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Tim D. aus Gießen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Samuel C. aus Fürth",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Atem gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Jonas I. aus Lüdenscheid",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Tobias G. aus Nettetal",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sauberkeit gefällt mir gut. Klare 10/10.",
    "customer_name": "Oskar X. aus Hagen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Alexander K. aus Witten",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Tobias D. aus Detmold",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Malte Y. aus Bottrop",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Scharf gefällt mir gut. Lohnt sich.",
    "customer_name": "Vincent R. aus Bremerhaven",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Frische gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Maximilian W. aus Hanau",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Tom E. aus Wuppertal",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Philipp V. aus Mainz",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Finn I. aus Ibbenbüren",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Arne I. aus Erkrath",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Susanne F. aus Würzburg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Ben Y. aus Reutlingen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Oskar N. aus Wilhelmshaven",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Stefanie M. aus Stolberg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Max V. aus Solingen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Maria F. aus Ulm",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Frische gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "David U. aus Hannover",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Theo D. aus Bielefeld",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Frische gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Sarah V. aus Sankt Augustin",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Atem gefällt mir gut. Einfach klasse.",
    "customer_name": "Paul J. aus Hamm",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Simon Q. aus Esslingen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Birgit M. aus Oldenburg",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Frische gefällt mir gut. Daumen hoch!",
    "customer_name": "Anja R. aus Erfurt",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Matteo N. aus Chemnitz",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Yannick D. aus Kassel",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Lohnt sich.",
    "customer_name": "Malte D. aus Leonberg",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Scharf gefällt mir gut. Top, weiter so.",
    "customer_name": "Christoph P. aus Hof",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Benedikt K. aus Aurich",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Bin rundum glücklich damit.",
    "customer_name": "Moritz F. aus Hanau",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Moritz P. aus Marburg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Anton X. aus Ludwigsburg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Kilian E. aus Witten",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Ben B. aus Regensburg",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Maximilian A. aus Witten",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Valentin T. aus Nürnberg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Lisa C. aus Aurich",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Milan F. aus Trier",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Atem ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Arne W. aus Hattingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Elias H. aus Buxtehude",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Sauberkeit gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Claudia O. aus Hürth",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Dennis U. aus Saarbrücken",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Mats B. aus Marburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Melanie O. aus Kerpen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Bin zufrieden.",
    "customer_name": "Nico M. aus Dessau-Roßlau",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Frische gefällt mir gut. Daumen hoch!",
    "customer_name": "Oskar Z. aus Kamen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Theo N. aus Nettetal",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Atem gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis I. aus Norderstedt",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Werde dabei bleiben.",
    "customer_name": "Theo F. aus Delmenhorst",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Christina S. aus Fellbach",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Sandra K. aus Rostock",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Arne L. aus Moers",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Scharf gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Liam B. aus Rodgau",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Susanne W. aus Bergisch Gladbach",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Scharf gefällt mir gut. Daumen hoch!",
    "customer_name": "Philipp Z. aus Ludwigshafen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Werde dabei bleiben.",
    "customer_name": "Liam N. aus Bergkamen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauberkeit gefällt mir gut. Daumen hoch!",
    "customer_name": "Sandra Y. aus Rottenburg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo B. aus Bielefeld",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Paul Z. aus Rostock",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Frische gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sarah U. aus Kiel",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Anna A. aus Heilbronn",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Christoph A. aus Troisdorf",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Anja Z. aus Rodgau",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Top.",
    "customer_name": "Nicole T. aus Arnsberg",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Noah B. aus Lüneburg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Täglich gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Max C. aus Leverkusen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Andrea V. aus Flensburg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Kerstin O. aus Halle (Saale)",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Erik R. aus Hanau",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Julian C. aus Magdeburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Johannes L. aus Neunkirchen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Danke!",
    "customer_name": "Alexander I. aus Herford",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Anja B. aus Frechen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Atem ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik Y. aus Peine",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Simon W. aus Worms",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Sabine O. aus Düren",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Lukas G. aus Detmold",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Philipp E. aus Darmstadt",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Marlon W. aus Lüdenscheid",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Maria F. aus Traunstein",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Liam S. aus Bayreuth",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Malte K. aus Aschaffenburg",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Felix D. aus Cottbus",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Nadine G. aus Heidelberg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Anja G. aus Waiblingen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Super Shop, super Ware.",
    "customer_name": "Robin G. aus Neu-Ulm",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "David Q. aus Soest",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Theo Z. aus Gronau",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Dennis L. aus Schwerin",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Frische gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Tobias F. aus Ludwigsburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Luca B. aus Ingolstadt",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Kerstin G. aus Erlangen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Anja R. aus Duisburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Atem ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Henry G. aus Rostock",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Top.",
    "customer_name": "Petra E. aus Lippstadt",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Bin zufrieden.",
    "customer_name": "Sarah S. aus Salzgitter",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Sabine A. aus Neumünster",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Anja Z. aus Neumünster",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Täglich gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Tanja G. aus Kerpen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Nicole K. aus Ravensburg",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Atem gefällt mir gut. Daumen hoch!",
    "customer_name": "Lukas P. aus Bad Oeynhausen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Sascha R. aus Wolfenbüttel",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Scharf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Ben Q. aus Mannheim",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. 5 Sterne von mir.",
    "customer_name": "Jan Z. aus Traunstein",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Robin Z. aus Ulm",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Atem gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Milan X. aus Emden",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Matteo I. aus Heilbronn",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Susanne J. aus Würzburg",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Lisa J. aus Wetzlar",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Absolute Kaufempfehlung.",
    "customer_name": "Moritz T. aus Ingolstadt",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Anja I. aus Unna",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Atem gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Theo A. aus Plauen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Lisa C. aus Salzgitter",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Mats R. aus Erfurt",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Lisa E. aus Magdeburg",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Absolute Kaufempfehlung.",
    "customer_name": "Luca F. aus Münster",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Frische gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Anja L. aus Freiburg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Nicole D. aus Worms",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Samuel B. aus Neu-Ulm",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Claudia K. aus Kaufbeuren",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Danke!",
    "customer_name": "Julian O. aus Fürth",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Paul O. aus Flensburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Nico H. aus Duisburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Scharf gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Tanja N. aus Essen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Tom E. aus Fulda",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Sauberkeit gefällt mir gut. Daumen hoch!",
    "customer_name": "Arne O. aus Dresden",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Danke!",
    "customer_name": "Nicole Z. aus Ingolstadt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Täglich gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Katharina U. aus Iserlohn",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Atem gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Maximilian C. aus Koblenz",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Frische gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Dennis P. aus Münster",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Sarah Z. aus München",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Timo L. aus Hannover",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Atem gefällt mir gut. Top, weiter so.",
    "customer_name": "Leon U. aus Lahr",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Scharf gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Mats B. aus Osnabrück",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja Q. aus Heidenheim",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Anna V. aus Viersen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Scharf gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Paul O. aus Leonberg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. 5 Sterne von mir.",
    "customer_name": "Valentin E. aus Iserlohn",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Klare 10/10.",
    "customer_name": "Hannes F. aus Bremen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Bin zufrieden.",
    "customer_name": "Emil R. aus Remscheid",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon B. aus Aalen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Scharf gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Arne I. aus Chemnitz",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Sabine C. aus Memmingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dennis I. aus Neu-Ulm",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. 5 Sterne von mir.",
    "customer_name": "Christina Q. aus Hürth",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Benedikt M. aus Bornheim",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Valentin Z. aus Frankfurt (Oder)",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Valentin Q. aus Friedrichshafen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Paul N. aus Delmenhorst",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Vincent R. aus Cottbus",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Sandra O. aus Düren",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Sandra M. aus Neumünster",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis F. aus Aachen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Yannick A. aus Chemnitz",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauberkeit gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Johannes V. aus Bad Oeynhausen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Robin Z. aus Rostock",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Anna O. aus Hameln",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Vincent G. aus Wuppertal",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Emil D. aus Lübeck",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Kauf ich definitiv wieder.",
    "customer_name": "Stefanie V. aus Saarbrücken",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Fabian L. aus Kempten",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Anton R. aus Augsburg",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Oskar P. aus Viersen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Kerstin A. aus Lippstadt",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Philipp W. aus Leipzig",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Petra H. aus Wiesbaden",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Katharina D. aus Garbsen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Christina V. aus Münster",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Anna V. aus Neumünster",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Täglich ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Julia K. aus Offenbach",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Sarah R. aus Nettetal",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Noah V. aus Zwickau",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Frische gefällt mir gut. Lohnt sich.",
    "customer_name": "Benedikt J. aus Erftstadt",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Moritz K. aus Siegen",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Robin G. aus Alsdorf",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Daumen hoch!",
    "customer_name": "Jonas F. aus Lörrach",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Monika X. aus Melle",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Arne Q. aus Weinheim",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Timo D. aus Chemnitz",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Julian T. aus Lüdenscheid",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Atem ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Robin J. aus Marburg",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Nadine C. aus Leipzig",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Johannes L. aus Augsburg",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Theo E. aus Mönchengladbach",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Erik I. aus Münster",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Täglich gefällt mir gut. Top, weiter so.",
    "customer_name": "Arne V. aus Bochum",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Benedikt K. aus Siegen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Florian M. aus Leverkusen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauberkeit gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Arne I. aus Ludwigsburg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Theo Y. aus Frechen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Timo Q. aus Bad Salzuflen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Frische gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz W. aus Filderstadt",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Atem gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Anja R. aus Ibbenbüren",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Nadine Q. aus Straubing",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Vielen Dank.",
    "customer_name": "Lisa B. aus Lüneburg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "David F. aus Monheim am Rhein",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Tanja F. aus Pulheim",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Frische gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Samuel S. aus Speyer",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Jannik B. aus Dortmund",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Susanne U. aus Saarbrücken",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauberkeit gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja Y. aus Herford",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra N. aus Rodgau",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Emil P. aus Eschweiler",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Anna C. aus Neunkirchen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Frische gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Erik D. aus Albstadt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Kilian X. aus Greifswald",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Sabine C. aus Wesel",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Scharf gefällt mir gut. Top, weiter so.",
    "customer_name": "Maximilian R. aus Halle (Saale)",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Katharina T. aus Kerpen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Theo V. aus Schweinfurt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Moritz Z. aus Ingolstadt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Nadine O. aus Recklinghausen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Scharf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Claudia X. aus Offenburg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Lisa Z. aus Jena",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Kerstin P. aus Elmshorn",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Emil E. aus Bergkamen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Andrea I. aus Lahr",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Dennis F. aus Tübingen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Katharina G. aus Salzgitter",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Fabian P. aus Rottenburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo M. aus Wetzlar",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik L. aus Neuss",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Fabian X. aus Passau",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Susanne V. aus Krefeld",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra D. aus Solingen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Nadine C. aus Frechen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Oskar Q. aus Konstanz",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Tobias T. aus Bergisch Gladbach",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Atem gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dennis H. aus Regensburg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Claudia B. aus Osnabrück",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes C. aus Bad Oeynhausen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Marlon F. aus Reutlingen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia S. aus Tübingen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Hannes X. aus Nettetal",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Tanja M. aus Bruchsal",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Lisa B. aus Wuppertal",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Anton F. aus Lemgo",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Paul G. aus Schwerin",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Atem ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Stefanie P. aus Jena",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Maximilian K. aus Wolfenbüttel",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Emil J. aus Pulheim",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik T. aus Ahlen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Niklas T. aus Lingen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Max X. aus Göppingen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea M. aus Gummersbach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian K. aus Heidenheim",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Scharf gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo I. aus München",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Katharina T. aus Gronau",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Henry X. aus Bornheim",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Henry T. aus Eschweiler",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Lisa K. aus Castrop-Rauxel",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Jannik P. aus Rostock",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Scharf gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik I. aus Menden",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Elias A. aus Velbert",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis L. aus Meerbusch",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Dennis F. aus Baden-Baden",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Milan K. aus Bocholt",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Vincent W. aus Marburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Melanie S. aus Salzgitter",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Scharf gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Tim N. aus Bad Kreuznach",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Ben M. aus Melle",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Bastian X. aus Memmingen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Absolute Kaufempfehlung.",
    "customer_name": "Marlon F. aus Troisdorf",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Julia H. aus Erftstadt",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Moritz B. aus Frankfurt",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Christoph W. aus Solingen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Atem gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Malte J. aus Dachau",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Sauberkeit gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar V. aus Darmstadt",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Lisa H. aus Fellbach",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Lohnt sich.",
    "customer_name": "Theo H. aus Rottenburg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Werde dabei bleiben.",
    "customer_name": "Benedikt J. aus Sankt Augustin",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Vincent V. aus Lippstadt",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Scharf ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Lenny X. aus Herten",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Kilian Y. aus Grevenbroich",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Matteo K. aus Paderborn",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauberkeit gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lukas I. aus Stolberg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Dominik C. aus Arnsberg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Paul T. aus Recklinghausen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Paul D. aus Brandenburg an der Havel",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Frische gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Christoph R. aus Fellbach",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Fabian Y. aus Dülmen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Scharf gefällt mir gut. Klare 10/10.",
    "customer_name": "Nadine F. aus Nordhorn",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Maximilian Y. aus Ambreg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Felix N. aus Salzgitter",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Bin zufrieden.",
    "customer_name": "Katharina T. aus Konstanz",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Robin L. aus Euskirchen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Täglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Erik E. aus Bremerhaven",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Maximilian Z. aus Hamm",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Sarah E. aus Offenbach",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Robin L. aus Weimar",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Paul B. aus Neuwied",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Robin U. aus Stolberg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Daumen hoch!",
    "customer_name": "Florian Y. aus Hamburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Ben S. aus Mainz",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Tom G. aus Rottenburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Scharf gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Stefanie T. aus Leonberg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Noah A. aus Bergheim",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Andrea Z. aus Esslingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Monika J. aus Heidenheim",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Noah M. aus Sankt Augustin",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Niklas G. aus Köln",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Atem gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Jan E. aus Hannover",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "Ben U. aus Koblenz",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Sehr zu empfehlen.",
    "customer_name": "Simon E. aus Bergisch Gladbach",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Paul I. aus Greifswald",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Tim S. aus Bad Homburg",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Julian M. aus Wetzlar",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Felix I. aus Ingolstadt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Christoph M. aus Frankfurt (Oder)",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Sascha Q. aus Landshut",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Johannes C. aus Rastatt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Felix M. aus Konstanz",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Moritz F. aus Würzburg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Preis/Leistung past einfach.",
    "customer_name": "Matteo C. aus Brandenburg an der Havel",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Philipp V. aus Oberhausen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Erik E. aus Chemnitz",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Lukas C. aus Minden",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Sascha Y. aus Esslingen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Scharf gefällt mir gut. Vielen Dank.",
    "customer_name": "Kilian P. aus Rodgau",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Scharf gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Maximilian Z. aus Heidelberg",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Arne G. aus Osnabrück",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Sascha U. aus Saarbrücken",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Anja J. aus Wetzlar",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Atem gefällt mir gut. Lohnt sich.",
    "customer_name": "Finn W. aus Leonberg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Arne T. aus Traunstein",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Anna U. aus Remscheid",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Malte O. aus Ibbenbüren",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Maria V. aus Ravensburg",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Birgit K. aus Frankfurt",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Melanie W. aus Meerbusch",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Monika D. aus Soest",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Frische gefällt mir gut. Einfach klasse.",
    "customer_name": "Florian V. aus Bonn",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Sabine S. aus Düsseldorf",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Julia L. aus Tübingen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Simon A. aus Lünen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Yannick J. aus Salzgitter",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Tobias N. aus Bottrop",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Top, weiter so.",
    "customer_name": "Valentin E. aus Aschaffenburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Atem ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Lukas O. aus Essen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Susanne P. aus Frankfurt (Oder)",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Robin C. aus Würzburg",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "David D. aus Herten",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Susanne R. aus Unna",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Dominik M. aus Velbert",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Dominik X. aus Regensburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Kann ich nur weiterempfehlen.",
    "customer_name": "Sascha V. aus Peine",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Yannick U. aus Castrop-Rauxel",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Florian R. aus Tübingen",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Dennis O. aus Hildesheim",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Frische gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kevin W. aus Ambreg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Lisa H. aus Karlsruhe",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Philipp G. aus Mannheim",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Tom V. aus Dortmund",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Moritz V. aus Erftstadt",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Theo C. aus Düsseldorf",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Atem gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Anja A. aus Salzgitter",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Monika V. aus Hamm",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Julian H. aus Monheim am Rhein",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Täglich gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Dominik I. aus Frankfurt (Oder)",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Frische gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Niklas R. aus Gütersloh",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Monika B. aus Memmingen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Florian U. aus Oberursel",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Nico V. aus Rheine",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Bin rundum glücklich damit.",
    "customer_name": "Birgit H. aus Regensburg",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Tobias I. aus Solingen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Scharf ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Lukas O. aus Bergheim",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Max W. aus Ludwigshafen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "David W. aus Celle",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Sauberkeit ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Marlon G. aus Ahlen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Yannick I. aus Erfurt",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Finn O. aus Lübeck",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Felix S. aus Magdeburg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Dominik X. aus Rottenburg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon H. aus Dülmen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Milan O. aus Aalen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julia F. aus Norderstedt",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Ben W. aus Heinsberg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Lukas U. aus Passau",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Felix U. aus Rheda-Wiedenbrück",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Frische gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Noah G. aus Fulda",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Scharf ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Jan J. aus Aurich",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Luca J. aus Trier",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Sauberkeit gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Anja W. aus Ludwigshafen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Atem gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Emil Q. aus Neu-Ulm",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Leon A. aus Göttingen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Maria S. aus Schwerin",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Tobias Q. aus Heinsberg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Täglich gefällt mir gut. Vielen Dank.",
    "customer_name": "Paul E. aus Schwäbisch Gmünd",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Scharf ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Anton A. aus Siegen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Stefanie L. aus Bruchsal",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sauberkeit gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Niklas Y. aus Monheim am Rhein",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Luca R. aus Braunschweig",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Scharf gefällt mir gut. Einfach klasse.",
    "customer_name": "Sarah X. aus Weinheim",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sauberkeit gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Claudia P. aus Magdeburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Leon S. aus Kaiserslautern",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Anna X. aus Wetzlar",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Petra O. aus Hürth",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Philipp Z. aus Solingen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Benedikt K. aus Bocholt",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Bastian P. aus Lippstadt",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sauberkeit gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne T. aus Passau",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Atem gefällt mir gut. Lohnt sich.",
    "customer_name": "Susanne R. aus Paderborn",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Moritz N. aus Lahr",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Vincent V. aus Mönchengladbach",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Theo P. aus Ulm",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Yannick G. aus Hennef",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Tim K. aus Wuppertal",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Leon U. aus Gelsenkirchen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Danke!",
    "customer_name": "Florian Y. aus Nettetal",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauberkeit gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Stefanie W. aus Gronau",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Einfach klasse.",
    "customer_name": "Samuel R. aus Oberursel",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Henry T. aus Stuttgart",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Alles richtig gemacht.",
    "customer_name": "Erik H. aus Lemgo",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Sauberkeit ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Tom Y. aus Wolfsburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Scharf ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Kerstin Y. aus Eschweiler",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Noah O. aus Gelsenkirchen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah Z. aus Ratingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauberkeit ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Monika C. aus Lemgo",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Theo S. aus Buxtehude",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Noah Q. aus Speyer",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Yannick T. aus Würzburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Nadine X. aus Lüdenscheid",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Julia Y. aus Troisdorf",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Scharf ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Nico Q. aus Speyer",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sauberkeit gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Valentin G. aus Herten",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Frische ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Valentin E. aus Marl",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Anna E. aus Castrop-Rauxel",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Top.",
    "customer_name": "Christina K. aus Hilden",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Daumen hoch!",
    "customer_name": "Florian B. aus Remscheid",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Monika X. aus Ludwigsburg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Atem gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Julia F. aus Neunkirchen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Atem ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Sascha W. aus Erlangen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Noah L. aus Konstanz",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Atem gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Henry A. aus Bad Salzuflen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Scharf gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Claudia B. aus Schwäbisch Gmünd",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Scharf gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Yannick V. aus Wiesbaden",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Daumen hoch!",
    "customer_name": "Julia E. aus Nettetal",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Fabian E. aus Oberursel",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Atem ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Henry G. aus Wolfsburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Sarah W. aus Offenbach",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kerstin O. aus Mülheim an der Ruhr",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Täglich gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Fabian D. aus Dresden",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Felix U. aus Borken",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Sarah X. aus Bergisch Gladbach",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Täglich ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Samuel B. aus Herne",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Elias E. aus Bergisch Gladbach",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Nico M. aus Nürnberg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Frische gefällt mir gut. Klare 10/10.",
    "customer_name": "Julia D. aus Aalen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Scharf gefällt mir gut. Klare 10/10.",
    "customer_name": "Tobias A. aus Aalen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Lukas L. aus Paderborn",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Täglich ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Dominik O. aus Gladbeck",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Scharf ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Johannes T. aus Herten",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus R. aus Bergkamen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Yannick A. aus Lünen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Frische ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Jannik T. aus Hattingen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Milan B. aus Dinslaken",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Benedikt V. aus Herten",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Anja K. aus Hagen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Atem gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Yannick B. aus Lahr",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Kevin A. aus Erlangen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Täglich ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon W. aus Dinslaken",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Atem ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Nicole L. aus Gießen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Top.",
    "customer_name": "Milan N. aus Kaufbeuren",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Atem ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Samuel E. aus Elmshorn",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauberkeit ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Finn U. aus Stolberg",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Leon K. aus Wilhelmshaven",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Täglich ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Noah W. aus Detmold",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Atem ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Sabine B. aus Minden",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Scharf ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Milan P. aus Bremen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Max H. aus Heilbronn",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Atem ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Milan W. aus Herzogenrath",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sauberkeit gefällt mir gut. Lohnt sich.",
    "customer_name": "Katharina C. aus Dresden",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Scharf gefällt mir gut. Daumen hoch!",
    "customer_name": "Erik W. aus Düren",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Christina R. aus Lünen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Sauberkeit ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Anton W. aus Aalen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Jan J. aus Stolberg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Täglich ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Dominik J. aus Duisburg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Frische ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah V. aus Solingen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Marlon I. aus Hameln",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Luca P. aus Neuwied",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Philipp D. aus Böblingen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Frische ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Julian I. aus Troisdorf",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nicole Y. aus Kiel",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Sascha L. aus Baden-Baden",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Frische ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Fabian F. aus Bottrop",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo G. aus Wolfsburg",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Absolute Kaufempfehlung.",
    "customer_name": "Christoph M. aus Hattingen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Frische gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Valentin V. aus Garbsen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Täglich ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Luis E. aus Elmshorn",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Atem ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Tom I. aus Erftstadt",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Malte Y. aus Gießen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Nicole M. aus Ahlen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Frische ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Anton C. aus Gera",
    "date": "2025-04-01"
  }
];