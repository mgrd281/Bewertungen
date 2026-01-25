const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Emil G. aus Unna",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schnell gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tom X. aus Bietigheim-Bissingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schnell gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Alexander U. aus Düsseldorf",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Lisa S. aus Herten",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Lenny N. aus Bremerhaven",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Samuel X. aus Aschaffenburg",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Turbo-Modus ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Tanja Z. aus Bochum",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia C. aus Passau",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Bastian T. aus München",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Abwaschbar gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Erik X. aus Hamburg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. 5 Sterne von mir.",
    "customer_name": "Alexander T. aus Soest",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Sarah X. aus Braunschweig",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Johannes S. aus Eisenach",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Susanne Q. aus Oranienburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schnittbreite gefällt mir gut. Lohnt sich.",
    "customer_name": "Justus T. aus Würzburg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Akku ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Petra T. aus Darmstadt",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Akku ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Kevin S. aus Monheim am Rhein",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Sehr zu empfehlen.",
    "customer_name": "Tom Z. aus Flensburg",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Vielen Dank.",
    "customer_name": "Leo I. aus Bremen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Akku ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lukas C. aus Erfurt",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "Erik V. aus Iserlohn",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Abwaschbar gefällt mir gut. Daumen hoch!",
    "customer_name": "Valentin A. aus Bergheim",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Leo I. aus Bremen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Sascha X. aus Dachau",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Bin rundum glücklich damit.",
    "customer_name": "Leo N. aus Lübeck",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Top.",
    "customer_name": "Leo N. aus Baden-Baden",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Lohnt sich.",
    "customer_name": "Kevin L. aus Esslingen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Anton F. aus Karlsruhe",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Erik C. aus Greifswald",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Preis/Leistung past einfach.",
    "customer_name": "Moritz F. aus Neumünster",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Claudia K. aus Frechen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Abwaschbar gefällt mir gut. Lohnt sich.",
    "customer_name": "Katharina Q. aus Straubing",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Abwaschbar ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Jan R. aus Fürth",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Kauf ich definitiv wieder.",
    "customer_name": "Tim M. aus Bergisch Gladbach",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Adrian S. aus Recklinghausen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Andrea N. aus Freising",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Schnittbreite ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom Y. aus Arnsberg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Schnell ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Benedikt Q. aus Gelsenkirchen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Turbo-Modus gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tom Q. aus Remscheid",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Akku gefällt mir gut. Klare 10/10.",
    "customer_name": "Lisa I. aus Kempten",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Kevin C. aus Heidenheim",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Valentin K. aus Hürth",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico U. aus Bergisch Gladbach",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Alexander P. aus Delmenhorst",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Akku gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Tom F. aus Ingolstadt",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Lukas A. aus Castrop-Rauxel",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Sehr zu empfehlen.",
    "customer_name": "Stefanie E. aus Essen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Vincent A. aus Monheim am Rhein",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Maximilian P. aus Gladbeck",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schnell ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Kilian D. aus Nettetal",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Akku ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Florian R. aus Viersen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Akku gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Philipp U. aus Heidelberg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Laura Q. aus Rheda-Wiedenbrück",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Sehr zu empfehlen.",
    "customer_name": "Maria Z. aus Mannheim",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Maria J. aus Bochum",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Tim U. aus Worms",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Timo Z. aus Grevenbroich",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Klare 10/10.",
    "customer_name": "Jannik J. aus Bietigheim-Bissingen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Abwaschbar ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Max Y. aus Traunstein",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Julia C. aus Tübingen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Milan E. aus Rostock",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Leon Z. aus Aalen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Turbo-Modus gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Theo E. aus Delmenhorst",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Akku ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Jan Q. aus Ravensburg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Erik Q. aus Ulm",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Abwaschbar ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Felix O. aus Gummersbach",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Simon J. aus Marl",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Turbo-Modus ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Luis V. aus Dessau-Roßlau",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Leon Y. aus Bamberg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Schnell gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Mats O. aus Sindelfingen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Maximilian W. aus Fürth",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Abwaschbar gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Vincent P. aus Regensburg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Abwaschbar ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Felix P. aus Elmshorn",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Tanja G. aus Osnabrück",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Bastian K. aus Traunstein",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. 5 Sterne von mir.",
    "customer_name": "Philipp M. aus Weinheim",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Turbo-Modus gefällt mir gut. Daumen hoch!",
    "customer_name": "Niklas V. aus Fürth",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Akku ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Hannes D. aus Schwerin",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo Y. aus Köln",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Justus G. aus Langenhagen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Stefanie S. aus Minden",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Akku ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Valentin S. aus Leinfelden-Echterdingen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Danke!",
    "customer_name": "Finn C. aus Gera",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Tom B. aus Fürth",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Abwaschbar ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Simon P. aus Bad Oeynhausen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Stefanie G. aus Speyer",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Simon Y. aus Dortmund",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Nicole G. aus Essen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Kilian A. aus Flensburg",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Melanie I. aus Borken",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Lukas T. aus Göppingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schnell gefällt mir gut. Klare 10/10.",
    "customer_name": "Paul F. aus Köln",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Liam T. aus Stuttgart",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Abwaschbar gefällt mir gut. Top, weiter so.",
    "customer_name": "Ben A. aus Böblingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas T. aus Salzgitter",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Birgit O. aus Aurich",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Julian V. aus Frankfurt",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Mats W. aus Velbert",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Jonas T. aus Menden",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Andrea G. aus Bremerhaven",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Turbo-Modus gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Fabian O. aus Flensburg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Sandra K. aus Rheda-Wiedenbrück",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Einfach klasse.",
    "customer_name": "Florian U. aus Bochum",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Henry S. aus Wunstorf",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik W. aus Krefeld",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schnittbreite gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Sabine S. aus Bietigheim-Bissingen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Akku ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Anton E. aus Stralsund",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Milan N. aus Landshut",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Julian X. aus Oranienburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Matteo Y. aus Düren",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Finn A. aus Ratingen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Kann ich nur weiterempfehlen.",
    "customer_name": "Kerstin F. aus Buxtehude",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Akku ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Jannik T. aus Bad Homburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Susanne V. aus Krefeld",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Sehr zu empfehlen.",
    "customer_name": "Alexander J. aus Essen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Philipp I. aus Halle (Saale)",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Turbo-Modus ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Luca U. aus Hürth",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schnittbreite gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Ben F. aus Offenburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Simon O. aus Wesel",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Akku gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Justus S. aus Freising",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Leon E. aus Viersen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Turbo-Modus gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus K. aus Dachau",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Sabine V. aus Saarbrücken",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Laura V. aus Fürth",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schnittbreite gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lukas L. aus Magdeburg",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Kerstin Y. aus Nordhorn",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Christoph Q. aus München",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Anton C. aus Erfurt",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Lisa M. aus Solingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Lohnt sich.",
    "customer_name": "Sandra C. aus Grevenbroich",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schnell gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Luca B. aus Magdeburg",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Katharina N. aus Frankfurt (Oder)",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Valentin X. aus Nettetal",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Tim Z. aus Troisdorf",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Akku gefällt mir gut. Daumen hoch!",
    "customer_name": "Tanja D. aus Wolfenbüttel",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Sabine H. aus Kassel",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnell ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Kevin Z. aus Zwickau",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Moritz M. aus Langenfeld",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schnell gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Yannick D. aus Bergisch Gladbach",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Top.",
    "customer_name": "Tom K. aus Bad Kreuznach",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Julian X. aus Menden",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Turbo-Modus gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Alexander J. aus Rostock",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nicole G. aus Hof",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Christoph Q. aus Langenhagen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Claudia B. aus Oldenburg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Mats R. aus Dessau-Roßlau",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schnell gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Kerstin A. aus Weimar",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Andrea L. aus Detmold",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Lohnt sich.",
    "customer_name": "Christoph E. aus Celle",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Abwaschbar ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Adrian V. aus Mannheim",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Leo C. aus Aurich",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Lisa V. aus Rottenburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Anja N. aus Plauen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Arne D. aus Villingen-Schwenningen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Erik E. aus Bergkamen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Samuel H. aus Gummersbach",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Bastian X. aus Gütersloh",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Matteo B. aus Solingen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Akku gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico E. aus Gronau",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Akku ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Tanja G. aus Iserlohn",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Andrea J. aus Bocholt",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Melanie F. aus Hamburg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Valentin U. aus Siegen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Abwaschbar gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Tobias C. aus Görlitz",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Abwaschbar ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Nadine Q. aus Unna",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Dennis J. aus Baden-Baden",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Bin zufrieden.",
    "customer_name": "Arne J. aus Dülmen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schnell gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul P. aus Herford",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Akku gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Dominik O. aus Erftstadt",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Akku gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Nico Z. aus Esslingen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Mats Z. aus Elmshorn",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Akku gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Erik J. aus Lüneburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Julia Y. aus Osnabrück",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Christoph K. aus Leipzig",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Bastian K. aus Recklinghausen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Top.",
    "customer_name": "Malte Y. aus Bergkamen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schnittbreite gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Noah E. aus Ingolstadt",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Abwaschbar gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Jonas I. aus Ludwigshafen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Samuel X. aus Hof",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Adrian A. aus Chemnitz",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schnell gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Bastian B. aus Bottrop",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Akku ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Samuel T. aus Hilden",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Sarah M. aus Wilhelmshaven",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Abwaschbar gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Laura E. aus Brandenburg an der Havel",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Florian M. aus Lingen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Adrian W. aus Gera",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Turbo-Modus ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Susanne P. aus Heinsberg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schnittbreite gefällt mir gut. Lohnt sich.",
    "customer_name": "Sabine J. aus Aschaffenburg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schnittbreite ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Philipp T. aus Peine",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Abwaschbar gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Monika K. aus Langenfeld",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Philipp D. aus Göppingen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schnell gefällt mir gut. Daumen hoch!",
    "customer_name": "Anton S. aus Aachen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schnell gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Julian F. aus Friedrichshafen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Turbo-Modus gefällt mir gut. Klare 10/10.",
    "customer_name": "Timo F. aus Eschweiler",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Nicole Q. aus Eschweiler",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Luca N. aus Hanau",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Simon T. aus Recklinghausen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Mats K. aus Bergkamen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Max G. aus Hagen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Lenny H. aus Viersen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Robin A. aus Bietigheim-Bissingen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Schnittbreite ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Nico M. aus Gütersloh",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Turbo-Modus gefällt mir gut. Klare 10/10.",
    "customer_name": "Kilian I. aus Lippstadt",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Abwaschbar gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Theo D. aus Kempten",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Robin G. aus Hattingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Abwaschbar gefällt mir gut. Lohnt sich.",
    "customer_name": "Anton D. aus Delmenhorst",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Alles richtig gemacht.",
    "customer_name": "Hannes K. aus Regensburg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Nie mehr ohne.",
    "customer_name": "Max R. aus Viersen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Bastian P. aus Herne",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Andrea D. aus Lingen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Oskar D. aus Regensburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Leon O. aus Melle",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Bin zufrieden.",
    "customer_name": "Susanne X. aus Hameln",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Akku gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Marlon I. aus Minden",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Kerstin I. aus Herford",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Schnell ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Kilian P. aus Osnabrück",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Abwaschbar gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Melanie D. aus Kaiserslautern",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Niklas A. aus Bergheim",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Vincent L. aus Neu-Ulm",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Daumen hoch!",
    "customer_name": "Philipp W. aus Landshut",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schnell gefällt mir gut. Nie mehr ohne.",
    "customer_name": "David A. aus Bruchsal",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Marlon N. aus Leipzig",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Schnell ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Sabine X. aus Nürnberg",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Fabian F. aus Dresden",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Turbo-Modus gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias G. aus Heidenheim",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Turbo-Modus gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Jan J. aus Hürth",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra R. aus Euskirchen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Schnell ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Fabian U. aus Köln",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Turbo-Modus ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Julia C. aus Mannheim",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schnell gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Fabian G. aus Melle",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Akku gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Julia J. aus Heidelberg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Nico W. aus Lüdenscheid",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Akku gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Mats K. aus Menden",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Abwaschbar ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom R. aus Wesel",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Lukas Z. aus Schweinfurt",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Abwaschbar ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Dominik S. aus Neuss",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Samuel W. aus Neumünster",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Fabian T. aus Bielefeld",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Akku gefällt mir gut. Vielen Dank.",
    "customer_name": "Stefanie V. aus Ludwigshafen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Turbo-Modus gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lukas Y. aus Mülheim an der Ruhr",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Abwaschbar ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Marlon B. aus Eisenach",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Christina Q. aus Trier",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Andrea D. aus Potsdam",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Christoph H. aus Lahr",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Bin zufrieden.",
    "customer_name": "Sandra G. aus Cottbus",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Florian J. aus Lünen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Matteo Q. aus Braunschweig",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Elias B. aus Wuppertal",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Laura U. aus Worms",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Lohnt sich.",
    "customer_name": "Dominik G. aus Hameln",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Abwaschbar ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Matteo R. aus Solingen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra T. aus Eisenach",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Akku ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Sandra Q. aus Gronau",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Akku gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Valentin Z. aus Witten",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnell ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Theo E. aus Iserlohn",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Abwaschbar ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Tobias L. aus Gronau",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Tobias U. aus Dachau",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Lenny A. aus Norderstedt",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Nicole W. aus München",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Adrian O. aus Neu-Ulm",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Schnell gefällt mir gut. Vielen Dank.",
    "customer_name": "Birgit T. aus Osnabrück",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Werde dabei bleiben.",
    "customer_name": "Kilian Z. aus Bad Salzuflen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Schnell gefällt mir gut. Top, weiter so.",
    "customer_name": "Melanie X. aus Böblingen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Dennis A. aus Peine",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Akku ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Fabian O. aus Offenbach",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Werde dabei bleiben.",
    "customer_name": "Laura D. aus Schwäbisch Gmünd",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Kann ich nur weiterempfehlen.",
    "customer_name": "Johannes V. aus Düren",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Laura U. aus Minden",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schnittbreite gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Kerstin B. aus Unna",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Dominik V. aus Bergkamen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias P. aus Memmingen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schnell gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Nicole L. aus Leonberg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Bin zufrieden.",
    "customer_name": "Marlon Z. aus Leonberg",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Emil D. aus Bremen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Claudia Q. aus Aachen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Tim W. aus Iserlohn",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnittbreite ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Liam Y. aus Baden-Baden",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schnell gefällt mir gut. Vielen Dank.",
    "customer_name": "Mats F. aus Castrop-Rauxel",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Akku gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Samuel D. aus Jena",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Sehr zu empfehlen.",
    "customer_name": "Fabian J. aus Wesel",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Kann ich nur weiterempfehlen.",
    "customer_name": "Jonas D. aus Oldenburg",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Akku ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Sabine B. aus Passau",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Leon E. aus Pinneberg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Sarah P. aus Siegen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Akku ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Julia F. aus Kassel",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Simon Q. aus Gießen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Turbo-Modus gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias Y. aus Münster",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Hannes Z. aus Wunstorf",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Anja G. aus Bad Homburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Liam Q. aus Frechen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Oskar Y. aus Hildesheim",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Schnell ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Robin B. aus Stuttgart",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Werde dabei bleiben.",
    "customer_name": "Lenny O. aus Alsdorf",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnell ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "David C. aus Dorsten",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Adrian Z. aus Bayreuth",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Jonas F. aus Ingolstadt",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Noah P. aus Fellbach",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Erik P. aus Flensburg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Akku gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Julian V. aus Worms",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Dennis R. aus Ibbenbüren",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Erik A. aus Düren",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Top.",
    "customer_name": "Ben L. aus Osnabrück",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Abwaschbar ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Malte V. aus Leverkusen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Turbo-Modus gefällt mir gut. Vielen Dank.",
    "customer_name": "Sascha U. aus Neumünster",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Jan Y. aus Mainz",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Jannik V. aus Langenhagen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Yannick Z. aus Unna",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Nicole L. aus Detmold",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Samuel Z. aus Heidelberg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sarah K. aus Bergheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Arne D. aus Hattingen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Milan A. aus Gummersbach",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Susanne W. aus Darmstadt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Elias Q. aus Herford",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnell ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Birgit D. aus Offenburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schnittbreite gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Simon A. aus Göppingen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Preis/Leistung past einfach.",
    "customer_name": "Mats Q. aus Paderborn",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Yannick R. aus Wuppertal",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnittbreite ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Maria B. aus Ludwigshafen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schnell gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Felix M. aus Greifswald",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Abwaschbar gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Arne Z. aus Greifswald",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christoph D. aus Langenfeld",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Jonas Z. aus Koblenz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Akku gefällt mir gut. Top, weiter so.",
    "customer_name": "Noah T. aus Norderstedt",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Stefanie K. aus Neuwied",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Andrea K. aus Ravensburg",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Matteo T. aus Bruchsal",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Schnittbreite gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Max F. aus Gronau",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Jannik N. aus Ratingen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Anton H. aus Langenfeld",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Felix G. aus Sankt Augustin",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Simon P. aus Neustadt an der Weinstraße",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Turbo-Modus gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Lukas M. aus Fulda",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Danke!",
    "customer_name": "Dominik K. aus Oberursel",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Nadine L. aus Memmingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Abwaschbar ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Leo G. aus Rostock",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Schnell ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Katharina Y. aus Rostock",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Monika N. aus Dresden",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnittbreite ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Nico D. aus Mainz",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Schnell gefällt mir gut. Lohnt sich.",
    "customer_name": "Marlon K. aus Bad Kreuznach",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Justus B. aus Wolfsburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Schnell gefällt mir gut. Vielen Dank.",
    "customer_name": "Valentin L. aus Bocholt",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Abwaschbar gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra R. aus Mülheim an der Ruhr",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Kilian C. aus Offenburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Schnell ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Fabian W. aus Reutlingen",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schnell gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Monika Z. aus Neumünster",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Theo M. aus Menden",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Akku ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Kilian I. aus Peine",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Yannick A. aus Traunstein",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schnittbreite gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lisa N. aus Bad Salzuflen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Maximilian F. aus Castrop-Rauxel",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Sabine N. aus Dormagen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Akku ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Arne R. aus Aalen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Moritz V. aus Marl",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Petra Z. aus Mannheim",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Tanja A. aus Stuttgart",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Ben A. aus Langenhagen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Justus C. aus Hof",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Sascha M. aus Dachau",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Jannik M. aus Kempten",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Nico R. aus Bielefeld",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Julia M. aus Frankfurt",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Laura S. aus Salzgitter",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Anja F. aus Paderborn",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Malte X. aus Krefeld",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Schnittbreite gefällt mir gut. Klare 10/10.",
    "customer_name": "Sarah L. aus Münster",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Christina P. aus Hannover",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Emil I. aus Wesel",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Abwaschbar ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Susanne M. aus Bad Salzuflen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Akku gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Matteo N. aus Oberhausen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Akku gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Marlon B. aus Ravensburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Super Shop, super Ware.",
    "customer_name": "Nadine L. aus Heinsberg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Schnell ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Max Z. aus Hameln",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Abwaschbar ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Hannes B. aus Ludwigshafen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schnittbreite gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Kilian W. aus Dormagen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Nadine D. aus Fürth",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Abwaschbar ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Yannick S. aus Heinsberg",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Melanie V. aus Garbsen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Erik T. aus Brotterode",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Abwaschbar ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Bastian M. aus Remscheid",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Abwaschbar ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Christina D. aus Weimar",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Turbo-Modus gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Noah D. aus Meerbusch",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Petra Q. aus Esslingen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Abwaschbar ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Fabian Y. aus Lübeck",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Bin rundum glücklich damit.",
    "customer_name": "Henry T. aus Ludwigshafen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Turbo-Modus ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Niklas Y. aus Melle",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Adrian J. aus Lübeck",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Jannik E. aus Herzogenrath",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Jonas Y. aus Böblingen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Sabine N. aus Lünen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Arne T. aus Norderstedt",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Melanie H. aus Weimar",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Akku ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Jonas K. aus Hürth",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Yannick T. aus Langenfeld",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Luis D. aus Gera",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Emil K. aus Neustadt an der Weinstraße",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Adrian M. aus Würzburg",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Schnittbreite ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Anja A. aus Lübeck",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Claudia H. aus Bremen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Turbo-Modus ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Yannick Y. aus Elmshorn",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Vincent Q. aus Hamm",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Klare 10/10.",
    "customer_name": "Birgit Y. aus Dessau-Roßlau",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Valentin W. aus Dessau-Roßlau",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Jonas E. aus Oberursel",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Birgit B. aus Heidelberg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Julian H. aus Rottenburg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Ben F. aus Peine",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Stefanie T. aus Solingen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "David K. aus Lemgo",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnell ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Christina Q. aus Lünen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Nadine B. aus Rastatt",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Danke!",
    "customer_name": "Mats T. aus Duisburg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Elias G. aus Rüsselsheim",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Liam O. aus Herzogenrath",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Vincent M. aus Konstanz",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Sandra V. aus Neuss",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Simon I. aus Rottenburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Ben O. aus Cottbus",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Paul B. aus Elmshorn",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnittbreite ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Emil B. aus Magdeburg",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Danke!",
    "customer_name": "Alexander I. aus Kiel",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Lukas O. aus Chemnitz",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Jonas L. aus Dessau-Roßlau",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Florian Z. aus Düren",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Nadine I. aus München",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnell ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Finn B. aus Langenfeld",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Danke!",
    "customer_name": "Nadine O. aus Hameln",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Leo V. aus Stolberg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sabine J. aus Bochum",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Christina E. aus Hannover",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Christina L. aus Görlitz",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Bin zufrieden.",
    "customer_name": "Leon A. aus Moers",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schnell gefällt mir gut. Lohnt sich.",
    "customer_name": "Julian A. aus Offenbach",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schnittbreite gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Milan G. aus Eisenach",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Marlon O. aus Kerpen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Max S. aus Neumünster",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Abwaschbar ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Katharina F. aus Schwerin",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Hannes H. aus Kassel",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schnell gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Adrian H. aus Dinslaken",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Leon T. aus Lemgo",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Abwaschbar ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Arne G. aus Hamburg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Milan L. aus Bielefeld",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Akku ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Felix L. aus Kleve",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Turbo-Modus ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Luis B. aus Friedrichshafen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Dominik Y. aus Norderstedt",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schnell ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Finn G. aus Düren",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Akku gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Kerstin Q. aus Norderstedt",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Turbo-Modus ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Kevin Q. aus Euskirchen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Leo K. aus Rheda-Wiedenbrück",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Turbo-Modus gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Erik Q. aus Gelsenkirchen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Akku ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Benedikt I. aus Erftstadt",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Abwaschbar ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Elias Z. aus Viersen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Danke!",
    "customer_name": "Matteo F. aus Esslingen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Akku ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Matteo T. aus Münster",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Schnell gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Lisa I. aus Lingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Bin zufrieden.",
    "customer_name": "Emil S. aus Albstadt",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Akku ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Christina V. aus Hattingen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Sarah R. aus Eisenach",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Akku gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Anna O. aus Kaufbeuren",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Vincent J. aus Borken",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Abwaschbar gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Elias Q. aus Frechen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Lohnt sich.",
    "customer_name": "Henry Y. aus Landshut",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Milan D. aus Ahlen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Anton L. aus Gießen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Akku ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Kerstin L. aus Hof",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Akku ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Noah X. aus Freiburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Turbo-Modus gefällt mir gut. Top, weiter so.",
    "customer_name": "Finn T. aus Hagen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Danke!",
    "customer_name": "Sabine A. aus Magdeburg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Abwaschbar gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Melanie J. aus Viersen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schnell gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Moritz X. aus Hennef",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnittbreite ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Maximilian N. aus Gießen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Christoph S. aus Lemgo",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Niklas H. aus Grevenbroich",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Justus L. aus Filderstadt",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Akku gefällt mir gut. Daumen hoch!",
    "customer_name": "Melanie S. aus Kamen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Akku ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna V. aus Duisburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Mats V. aus Leipzig",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Schnell ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Dennis W. aus Solingen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. 5 Sterne von mir.",
    "customer_name": "Lukas P. aus Rostock",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Turbo-Modus ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Johannes L. aus Lemgo",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie I. aus Hamburg",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Theo D. aus Buxtehude",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Akku ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Luis M. aus Peine",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Laura F. aus Ambreg",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Turbo-Modus ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Susanne W. aus Bonn",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Noah B. aus Melle",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Julia A. aus Münster",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Turbo-Modus ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Kevin F. aus Osnabrück",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Niklas V. aus Soest",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Schnittbreite ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Bastian D. aus Bietigheim-Bissingen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julia V. aus Karlsruhe",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Akku gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Katharina D. aus Neustadt an der Weinstraße",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Kauf ich definitiv wieder.",
    "customer_name": "Lenny C. aus Offenbach",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Turbo-Modus ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Lenny P. aus Traunstein",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Top.",
    "customer_name": "Stefanie W. aus Stuttgart",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Jannik T. aus Hürth",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Christoph X. aus Ravensburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schnell ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Luca V. aus Lüdenscheid",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Turbo-Modus gefällt mir gut. Einfach klasse.",
    "customer_name": "Paul F. aus Wunstorf",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Mats R. aus Speyer",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schnell gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Vincent B. aus Elmshorn",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Schnell ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Melanie G. aus Freiburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Schnittbreite ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Sascha F. aus Köln",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schnell ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Andrea A. aus Bad Oeynhausen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Noah A. aus Moers",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Preis/Leistung past einfach.",
    "customer_name": "Tanja W. aus Wesel",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "David F. aus Brotterode",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Schnittbreite ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Lukas V. aus Siegen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Akku ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Lenny B. aus Weinheim",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Paul Q. aus Bruchsal",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Jan W. aus Bocholt",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schnittbreite gefällt mir gut. Daumen hoch!",
    "customer_name": "Katharina L. aus Rheda-Wiedenbrück",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Abwaschbar gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Matteo W. aus Leipzig",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Kevin W. aus Bornheim",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Schnittbreite ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah P. aus Albstadt",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schnell ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Philipp B. aus Dinslaken",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Abwaschbar gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Kevin N. aus Rüsselsheim",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Turbo-Modus ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Tobias Z. aus Gummersbach",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Schnell gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Jonas R. aus Siegen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Abwaschbar ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Niklas P. aus Lüneburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Anton O. aus Görlitz",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Julia F. aus Herford",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Danke!",
    "customer_name": "Jannik N. aus Lemgo",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schnell ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Andrea W. aus Marl",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Werde dabei bleiben.",
    "customer_name": "Moritz A. aus Herten",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Justus Q. aus Braunschweig",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Milan F. aus Offenburg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Abwaschbar ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Monika C. aus Brandenburg an der Havel",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Robin Y. aus Duisburg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Turbo-Modus ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Timo P. aus Braunschweig",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Abwaschbar ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis W. aus Bayreuth",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Schnell ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Alexander H. aus Osnabrück",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Schnell gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Leon X. aus Neustadt an der Weinstraße",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Fabian J. aus Heilbronn",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Danke!",
    "customer_name": "Stefanie N. aus Minden",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schnittbreite ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Claudia M. aus Karlsruhe",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Nie mehr ohne.",
    "customer_name": "Max I. aus Kerpen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Sascha C. aus Regensburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Akku ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Maximilian C. aus Hürth",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Abwaschbar ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Christoph D. aus Kleve",
    "date": "2025-04-01"
  }
];