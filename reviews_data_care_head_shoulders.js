const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tim R. aus Offenbach",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Erik B. aus Wolfsburg",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Große Flasche gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Andrea X. aus Hamm",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Sabine Z. aus Unna",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Daumen hoch!",
    "customer_name": "Anton H. aus Esslingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Malte G. aus Iserlohn",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Absolute Kaufempfehlung.",
    "customer_name": "Johannes T. aus Delmenhorst",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Hannes W. aus Aachen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Anton W. aus Neumünster",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Birgit S. aus Langenfeld",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "David Y. aus Oberhausen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Lukas E. aus Bergheim",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Julia D. aus Bamberg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Kerstin Q. aus Heidenheim",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Theo N. aus Freising",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Benedikt K. aus Bamberg",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Anton R. aus Landshut",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schuppenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Valentin Q. aus Pforzheim",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Bastian A. aus Rüsselsheim",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Andrea V. aus Grevenbroich",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Luis O. aus Moers",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Luis N. aus Wuppertal",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Maria Q. aus Stolberg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Andrea I. aus Marl",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Birgit E. aus Freising",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Lohnt sich.",
    "customer_name": "Sandra V. aus Euskirchen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Tanja E. aus Mannheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian Z. aus Borken",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Kevin N. aus Essen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Maximilian R. aus Bremen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Johannes E. aus Langenfeld",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Noah V. aus Flensburg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Jannik A. aus Lippstadt",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sauber gefällt mir gut. Lohnt sich.",
    "customer_name": "Julia Y. aus Kaiserslautern",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Christoph K. aus Regensburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Anna O. aus Rottenburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja Q. aus Kleve",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Philipp I. aus Leonberg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Danke!",
    "customer_name": "Lisa S. aus Ulm",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Johannes V. aus Kassel",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Henry N. aus Emden",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Bin rundum glücklich damit.",
    "customer_name": "Kerstin T. aus Kaiserslautern",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Florian L. aus Bietigheim-Bissingen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Hannes G. aus Bamberg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Kevin U. aus Oranienburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Schuppenfrei gefällt mir gut. Vielen Dank.",
    "customer_name": "Samuel S. aus Detmold",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Duft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Leo B. aus Kerpen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Julia O. aus Kleve",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Jonas D. aus Hamm",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Katharina L. aus Freising",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Samuel P. aus Salzgitter",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Maximilian Q. aus Göttingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schuppenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Samuel B. aus Bad Salzuflen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Valentin X. aus Celle",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Matteo K. aus Hameln",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Klare 10/10.",
    "customer_name": "Leo L. aus Stolberg",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lenny A. aus Herford",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Nadine E. aus Celle",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Sabine F. aus Herford",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Katharina M. aus Dinslaken",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Christoph Z. aus Bad Oeynhausen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Fabian F. aus Ravensburg",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Klassiker gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Mats F. aus Herzogenrath",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Bastian H. aus Neu-Ulm",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Leon H. aus Gummersbach",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Marlon C. aus Bergkamen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Max C. aus Aalen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Große Flasche gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nicole Q. aus Koblenz",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Moritz G. aus Lüneburg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Absolute Kaufempfehlung.",
    "customer_name": "Paul X. aus Fürth",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Dominik P. aus Herford",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sauber gefällt mir gut. Top, weiter so.",
    "customer_name": "Lisa F. aus Sankt Augustin",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Matteo C. aus Bergisch Gladbach",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Samuel H. aus Wilhelmshaven",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Jan N. aus Weimar",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Florian I. aus Norderstedt",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Felix U. aus Velbert",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Laura J. aus Cottbus",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Luca L. aus Weinheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Vincent A. aus Bocholt",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Marlon L. aus Osnabrück",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Nadine A. aus Alsdorf",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Jannik K. aus Lüneburg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Duft gefällt mir gut. Vielen Dank.",
    "customer_name": "Emil Q. aus Bruchsal",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Daumen hoch!",
    "customer_name": "Vincent Y. aus Trier",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schuppenfrei gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Milan V. aus Koblenz",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Ben C. aus Melle",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Luis S. aus Ibbenbüren",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Lisa Y. aus Reutlingen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Klassiker gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Laura Q. aus Herne",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Große Flasche gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus W. aus Traunstein",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Justus Z. aus Worms",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Tim B. aus Pinneberg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Sascha A. aus Berlin",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Melanie N. aus Dorsten",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Jan J. aus Düsseldorf",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Danke!",
    "customer_name": "Ben A. aus Marl",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Anna V. aus Hildesheim",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Jan J. aus Langenfeld",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Tanja H. aus Mainz",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sauber gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Jan Z. aus Stuttgart",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Stefanie W. aus Kaiserslautern",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Große Flasche gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sandra E. aus Ahlen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauber gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik S. aus Kassel",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Finn W. aus Esslingen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Paul C. aus Ingolstadt",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Nadine R. aus Wilhelmshaven",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Duft gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Maximilian Q. aus Dresden",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Paul T. aus Osnabrück",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauber gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Alexander Z. aus Göppingen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Mats Q. aus Ravensburg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Klassiker gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Sarah H. aus Bielefeld",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Tanja B. aus Neuwied",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Fabian G. aus Fürth",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Moritz I. aus Flensburg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Philipp R. aus Aschaffenburg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Alexander C. aus Oldenburg",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Duft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Yannick W. aus Kaiserslautern",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Max Q. aus Lippstadt",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Anna N. aus Herne",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Fabian K. aus Greifswald",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Lisa Z. aus Troisdorf",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Klassiker gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Philipp F. aus Troisdorf",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Malte N. aus Brandenburg an der Havel",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Julian L. aus Trier",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. Vielen Dank.",
    "customer_name": "Luis R. aus Frechen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Tom W. aus Mainz",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Christoph Y. aus Alsdorf",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Hannes P. aus Erftstadt",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sauber gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Malte L. aus Ulm",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Nico R. aus Bocholt",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Milan O. aus Ludwigshafen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Ben P. aus Chemnitz",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Daumen hoch!",
    "customer_name": "Hannes D. aus Dorsten",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "Max O. aus Leipzig",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Luca L. aus Wetzlar",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Philipp K. aus Schweinfurt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Samuel A. aus Eschweiler",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sauber gefällt mir gut. Daumen hoch!",
    "customer_name": "Adrian N. aus Fellbach",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Christina S. aus Troisdorf",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Robin U. aus Ingolstadt",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Jonas E. aus Kleve",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Maria R. aus Kaiserslautern",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Ben A. aus Alsdorf",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Hannes A. aus Rottenburg",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Top.",
    "customer_name": "Paul G. aus Brotterode",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Kann ich nur weiterempfehlen.",
    "customer_name": "Adrian U. aus Nürnberg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Luis J. aus Garbsen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Stefanie F. aus Dinslaken",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Kevin S. aus Hildesheim",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Große Flasche gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Sabine L. aus Mannheim",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Nico R. aus Köln",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Anton X. aus Magdeburg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Robin A. aus Leinfelden-Echterdingen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Sabine Y. aus Remscheid",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Florian O. aus Koblenz",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Lohnt sich.",
    "customer_name": "David I. aus Freiburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Duft gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis C. aus Bietigheim-Bissingen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Hannes U. aus Norderstedt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Paul C. aus Mannheim",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Duft gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Ben L. aus Offenbach",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut.",
    "customer_name": "Benedikt L. aus Herten",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Melanie E. aus Kempten",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Katharina Q. aus Dülmen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Christoph Y. aus Hennef",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Lukas N. aus Brandenburg an der Havel",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Tanja P. aus Offenburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schuppenfrei gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Sabine S. aus Lörrach",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Henry F. aus Wetzlar",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Johannes B. aus Rheine",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Yannick B. aus Rottenburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Besser geht es nicht.",
    "customer_name": "Fabian J. aus Sankt Augustin",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Tanja W. aus Delmenhorst",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Tim E. aus Rheine",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Sascha N. aus Castrop-Rauxel",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Anton M. aus Mönchengladbach",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Benedikt C. aus Kerpen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Bastian S. aus Marl",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Sauber gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo C. aus Garbsen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Top.",
    "customer_name": "Birgit G. aus Worms",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauber gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo Y. aus Langenfeld",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Absolute Kaufempfehlung.",
    "customer_name": "Vincent A. aus Wetzlar",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauber gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Emil N. aus Iserlohn",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Schuppenfrei gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Max A. aus Bonn",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Kerstin U. aus Düren",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Julian V. aus Pulheim",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Anna X. aus Chemnitz",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Matteo Y. aus Hameln",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Julian I. aus Hagen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Monika A. aus Frankfurt",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Luis Q. aus Kamen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Robin Z. aus Herten",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Yannick C. aus Hamburg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Anton Z. aus Salzgitter",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Anna O. aus Düsseldorf",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Yannick Z. aus Wesel",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Johannes C. aus Grevenbroich",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Kerstin X. aus Memmingen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Felix K. aus Rostock",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Sascha E. aus Monheim am Rhein",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Leon R. aus Bad Oeynhausen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Finn S. aus Lüneburg",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Sarah N. aus Eschweiler",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Jan I. aus Ulm",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Kann ich nur weiterempfehlen.",
    "customer_name": "Vincent L. aus Bocholt",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Finn W. aus Heidenheim",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Sandra R. aus Heilbronn",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schuppenfrei gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Niklas X. aus Ambreg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Petra M. aus Eisenach",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Luca K. aus Hildesheim",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Bin zufrieden.",
    "customer_name": "David A. aus Lübeck",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Malte E. aus Ludwigsburg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Hannes S. aus Dresden",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Alles richtig gemacht.",
    "customer_name": "Liam T. aus Gelsenkirchen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. Klare 10/10.",
    "customer_name": "Tanja C. aus Schwerin",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Anna O. aus Herne",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauber gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Nadine X. aus Albstadt",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Leon Q. aus Bayreuth",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Vincent W. aus Neuwied",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Elias Q. aus Osnabrück",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Kauf ich definitiv wieder.",
    "customer_name": "Johannes L. aus Neu-Ulm",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Absolute Kaufempfehlung.",
    "customer_name": "Andrea N. aus Gladbeck",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Nie mehr ohne.",
    "customer_name": "Lukas H. aus Rheine",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Niklas V. aus Solingen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Erik V. aus Filderstadt",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Luca U. aus Wilhelmshaven",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Marlon V. aus Hanau",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Luis W. aus Freising",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Johannes G. aus Oberursel",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Klassiker gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Marlon G. aus Herzogenrath",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauber gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Dennis U. aus Koblenz",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Moritz M. aus Leipzig",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Danke!",
    "customer_name": "Simon J. aus Flensburg",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Matteo X. aus Bornheim",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Ben Q. aus Euskirchen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schuppenfrei gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Robin T. aus Baden-Baden",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Julia A. aus Moers",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Marlon Y. aus Heilbronn",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Werde dabei bleiben.",
    "customer_name": "Timo L. aus Hanau",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Nico O. aus Heinsberg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Theo I. aus Jena",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Kevin W. aus Hamm",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Marlon W. aus Gronau",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Timo F. aus Kaiserslautern",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Jan B. aus Nürnberg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Kevin T. aus Herzogenrath",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Kevin A. aus Kaufbeuren",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Duft gefällt mir gut. Daumen hoch!",
    "customer_name": "Fabian W. aus Bornheim",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Schuppenfrei gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Kilian H. aus Wolfsburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Noah K. aus Köln",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Sascha R. aus Wunstorf",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Bin zufrieden.",
    "customer_name": "Julia I. aus München",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Luis B. aus Meerbusch",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Hannes S. aus Oberhausen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Paul K. aus Unna",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Valentin J. aus Regensburg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Robin N. aus Bietigheim-Bissingen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Stefanie Z. aus Oberhausen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Niklas S. aus Langenfeld",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Julian W. aus Osnabrück",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Klassiker gefällt mir gut. Daumen hoch!",
    "customer_name": "Robin J. aus Essen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Petra V. aus Essen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Hannes F. aus Bocholt",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Samuel L. aus Bielefeld",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Sabine V. aus Emden",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Klassiker gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Felix C. aus Rastatt",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Schuppenfrei gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Katharina V. aus Siegen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Lukas R. aus Memmingen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Vincent L. aus Mannheim",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Kauf ich definitiv wieder.",
    "customer_name": "Lisa R. aus Rüsselsheim",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sauber gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Tanja M. aus Bayreuth",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Katharina X. aus Troisdorf",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Tim A. aus Traunstein",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Duft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Birgit A. aus Rodgau",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Melanie G. aus Berlin",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna L. aus Göttingen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Oskar G. aus Villingen-Schwenningen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Anja U. aus Memmingen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Anja K. aus Bad Salzuflen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Robin Q. aus Passau",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Julia U. aus Zwickau",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Elias W. aus Erftstadt",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Jonas B. aus Lahr",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Klassiker gefällt mir gut. Lohnt sich.",
    "customer_name": "Liam M. aus Karlsruhe",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Sandra L. aus Passau",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Christina E. aus Neuwied",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Hannes P. aus Delmenhorst",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Werde dabei bleiben.",
    "customer_name": "Sascha U. aus Mannheim",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Große Flasche gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Philipp F. aus Brandenburg an der Havel",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Alexander K. aus Frechen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Daumen hoch!",
    "customer_name": "Lenny K. aus Passau",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Johannes V. aus Stuttgart",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Lenny O. aus Erkrath",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Finn N. aus Salzgitter",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Jan N. aus Zwickau",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schuppenfrei gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa B. aus Kiel",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Julian Q. aus Rastatt",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Anja W. aus Oberursel",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Petra J. aus Gelsenkirchen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Klassiker gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Stefanie F. aus Reutlingen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Julian E. aus Herne",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Nicole D. aus Bad Kreuznach",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Arne M. aus Bergisch Gladbach",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Tanja Q. aus Kerpen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Henry I. aus Rosenheim",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Melanie D. aus Buxtehude",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Samuel S. aus Hof",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus N. aus Böblingen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Anna J. aus Bornheim",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Laura J. aus Frechen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Lenny S. aus Stolberg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia B. aus Lüneburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Daumen hoch!",
    "customer_name": "Kilian Q. aus Aalen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Große Flasche gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Valentin H. aus Koblenz",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Besser geht es nicht.",
    "customer_name": "Philipp W. aus Mannheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Große Flasche gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Florian K. aus Oberhausen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Valentin C. aus Lippstadt",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Johannes Q. aus Ahlen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauber gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Lenny F. aus Bornheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Lisa I. aus Konstanz",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Liam E. aus Bocholt",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Kauf ich definitiv wieder.",
    "customer_name": "Lenny H. aus Tübingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Anton F. aus Nordhorn",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom Z. aus Ambreg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Kilian Z. aus Arnsberg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Julian M. aus Wiesbaden",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Liam X. aus Neuss",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schuppenfrei gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Adrian J. aus Villingen-Schwenningen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Sandra G. aus Salzgitter",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Marlon X. aus Salzgitter",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Katharina R. aus Mülheim an der Ruhr",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Bin zufrieden.",
    "customer_name": "Julian O. aus Delmenhorst",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Justus M. aus Filderstadt",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra Q. aus Weimar",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Florian C. aus Fürth",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Dennis X. aus Hürth",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Noah V. aus Kassel",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Henry I. aus Mainz",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Jonas N. aus Celle",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Florian H. aus Wesel",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Lenny T. aus Weinheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Tanja Q. aus Fellbach",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Christoph K. aus Troisdorf",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Arne E. aus Herzogenrath",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Adrian V. aus Bergheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Top, weiter so.",
    "customer_name": "Timo J. aus Görlitz",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. 5 Sterne von mir.",
    "customer_name": "Christina F. aus Tübingen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Johannes W. aus Villingen-Schwenningen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Timo U. aus Stolberg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Jannik C. aus Paderborn",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea V. aus Wuppertal",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah Z. aus Bad Salzuflen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schuppenfrei gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra Q. aus Weinheim",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Andrea F. aus Neustadt an der Weinstraße",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Luca W. aus Alsdorf",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Susanne H. aus Kleve",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Klassiker gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Emil E. aus Lüneburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Duft gefällt mir gut. Klare 10/10.",
    "customer_name": "Finn K. aus Rheda-Wiedenbrück",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Max L. aus Bayreuth",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Finn Q. aus Wunstorf",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Absolute Kaufempfehlung.",
    "customer_name": "Paul W. aus Arnsberg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Nicole V. aus Albstadt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Lisa P. aus Nürnberg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Alexander W. aus Hildesheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Tanja O. aus Regensburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Große Flasche gefällt mir gut. Top, weiter so.",
    "customer_name": "Dennis U. aus Ingolstadt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Yannick S. aus Neuwied",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Top.",
    "customer_name": "Oskar P. aus Herten",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Finn U. aus Cottbus",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Theo V. aus Heinsberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Lukas P. aus Wesel",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Theo T. aus Aalen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Jonas U. aus Mainz",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Kerstin C. aus Wuppertal",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Dennis V. aus Pforzheim",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Anna I. aus Offenburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Noah Y. aus Berlin",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Tom U. aus Lingen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Tobias K. aus Essen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Marlon L. aus Moers",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Justus H. aus Neumünster",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Birgit D. aus Würzburg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Schuppenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Moritz Z. aus Lippstadt",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie D. aus Neumünster",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Duft gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Adrian R. aus Potsdam",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Max P. aus Wetzlar",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra W. aus Bayreuth",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Paul R. aus Neuss",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Sascha I. aus Rodgau",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Schuppenfrei gefällt mir gut. Lohnt sich.",
    "customer_name": "Kerstin G. aus Erftstadt",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Sehr zu empfehlen.",
    "customer_name": "Robin M. aus Gladbeck",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Klassiker gefällt mir gut. Daumen hoch!",
    "customer_name": "Mats L. aus Kerpen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Claudia M. aus Gladbeck",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Erik G. aus Unna",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Super Shop, super Ware.",
    "customer_name": "Petra Z. aus Iserlohn",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Ben D. aus Schweinfurt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Anton B. aus Dülmen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Duft gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Susanne P. aus Rüsselsheim",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Julian E. aus Salzgitter",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Claudia C. aus Leipzig",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Schuppenfrei gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Timo S. aus Remscheid",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Anna P. aus Saarbrücken",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Große Flasche gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Milan M. aus Bremerhaven",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Simon Y. aus Hanau",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Anja Z. aus Lünen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Duft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Petra F. aus Heilbronn",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Malte I. aus Oldenburg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Duft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sarah V. aus Dresden",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Klassiker gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Marlon N. aus Düsseldorf",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Nicole D. aus Wilhelmshaven",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Lukas F. aus Bad Salzuflen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Samuel X. aus München",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Lisa P. aus Gelsenkirchen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja G. aus Würzburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Lukas W. aus Buxtehude",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. Einfach klasse.",
    "customer_name": "Anton C. aus Leonberg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Nicole B. aus Aschaffenburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Große Flasche gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Sarah F. aus Schwäbisch Gmünd",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Lohnt sich.",
    "customer_name": "Bastian H. aus Erfurt",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "David J. aus Menden",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Duft gefällt mir gut. Daumen hoch!",
    "customer_name": "Nico X. aus Offenbach",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Schuppenfrei gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Emil O. aus Köln",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Lenny I. aus Lörrach",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Oskar K. aus Duisburg",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Finn R. aus Göppingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Nadine T. aus Braunschweig",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Marlon J. aus Esslingen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Kann ich nur weiterempfehlen.",
    "customer_name": "Katharina T. aus Osnabrück",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Theo A. aus Sankt Augustin",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Große Flasche gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian A. aus Lippstadt",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Luis Y. aus Essen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Malte M. aus Berlin",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Julian O. aus Oberursel",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Claudia W. aus Hanau",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Max A. aus Herford",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Fabian Y. aus Aachen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schuppenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Sascha Q. aus Weinheim",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Paul V. aus Herten",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sauber gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Florian O. aus Offenbach",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Maria D. aus Aurich",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Klassiker gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Christina F. aus Ratingen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah S. aus Bielefeld",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Luis A. aus Hannover",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Maximilian V. aus Konstanz",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Duft gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sandra F. aus Dessau-Roßlau",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Oskar O. aus Rostock",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Alexander K. aus Hagen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm.",
    "customer_name": "Jannik H. aus Schweinfurt",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Timo T. aus Frankfurt",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Melanie N. aus Lahr",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Dennis L. aus Hilden",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Matteo M. aus Bielefeld",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Top, weiter so.",
    "customer_name": "Alexander M. aus Wilhelmshaven",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Henry M. aus Bergheim",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Große Flasche gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Liam J. aus Siegen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Vincent G. aus Friedrichshafen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Timo J. aus Castrop-Rauxel",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Tanja Y. aus Kleve",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luca A. aus Potsdam",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "David O. aus Düren",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Nie mehr ohne.",
    "customer_name": "Malte W. aus Bremerhaven",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Benedikt U. aus Bielefeld",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Verarbeitung wirkt sehr stabil und langlebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia I. aus Detmold",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Hannes N. aus Eschweiler",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Nie mehr ohne.",
    "customer_name": "Monika X. aus Kleve",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Kilian C. aus Worms",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Arne L. aus Zwickau",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Klassiker gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Jan D. aus Unna",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schuppenfrei gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sandra K. aus Witten",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Tanja I. aus Aurich",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Große Flasche gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Paul Z. aus Hanau",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Lisa T. aus Neuss",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Philipp T. aus Ambreg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Sandra X. aus Lünen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Niklas X. aus Böblingen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut.",
    "customer_name": "Samuel H. aus Hamm",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit.",
    "customer_name": "Benedikt U. aus Iserlohn",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Oskar G. aus Melle",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Stefanie E. aus Oberhausen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Große Flasche gefällt mir gut. Vielen Dank.",
    "customer_name": "Kevin D. aus Bad Homburg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Theo K. aus Traunstein",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Große Flasche gefällt mir gut. Lohnt sich.",
    "customer_name": "Birgit L. aus Alsdorf",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. 5 Sterne von mir.",
    "customer_name": "Andrea R. aus Arnsberg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Tanja A. aus Gronau",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Sauber gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Hannes O. aus Lahr",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Lukas S. aus Monheim am Rhein",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Sandra X. aus Straubing",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Matteo H. aus Lemgo",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Duft gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Theo U. aus Schwäbisch Gmünd",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Melanie H. aus Gera",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauber gefällt mir gut. Top, weiter so.",
    "customer_name": "Valentin R. aus Kaufbeuren",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Werde dabei bleiben.",
    "customer_name": "Anna G. aus Celle",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Duft gefällt mir gut. Top, weiter so.",
    "customer_name": "Julian P. aus Memmingen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Elias K. aus Kerpen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "David L. aus Hennef",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Mats H. aus Pulheim",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Max T. aus Wunstorf",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Klassiker gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam R. aus Eschweiler",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Klassiker gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Fabian P. aus Magdeburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Jan L. aus Herten",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Tom U. aus Melle",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Hannes H. aus Buxtehude",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Theo R. aus Bamberg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Einfach klasse.",
    "customer_name": "Finn L. aus Nürnberg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Klassiker gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Alexander D. aus Bad Homburg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Finn B. aus Regensburg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Monika Q. aus Landshut",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Adrian O. aus Bremerhaven",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Ben A. aus Ingolstadt",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Alexander S. aus Bad Oeynhausen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Kilian Q. aus Monheim am Rhein",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Preis/Leistung past einfach.",
    "customer_name": "Katharina L. aus Solingen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Jannik L. aus Fulda",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Noah U. aus Cottbus",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Jannik U. aus Bonn",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "David T. aus Rüsselsheim",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Matteo P. aus Castrop-Rauxel",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Klassiker gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Marlon Z. aus Dessau-Roßlau",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Felix W. aus Frankfurt (Oder)",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Erik N. aus Velbert",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Arne V. aus Wunstorf",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Emil N. aus Rosenheim",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lenny H. aus Ambreg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Jan O. aus Heilbronn",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Robin X. aus Aalen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Einfach klasse.",
    "customer_name": "Tim H. aus Brotterode",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Susanne X. aus Ingolstadt",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Anna O. aus Alsdorf",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Klassiker gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Emil M. aus Hennef",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lenny C. aus Lünen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Erik W. aus Wolfsburg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Top.",
    "customer_name": "Stefanie C. aus Ludwigsburg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Finn S. aus Bruchsal",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Nico J. aus Bielefeld",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Nadine F. aus Kempten",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Marlon L. aus Offenburg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Noah L. aus Bamberg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Jannik M. aus Langenhagen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Philipp W. aus Stuttgart",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Matteo H. aus Sankt Augustin",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nadine I. aus Soest",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Maximilian C. aus Euskirchen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Tobias G. aus Erftstadt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Tobias H. aus Schweinfurt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Sauber gefällt mir gut. Klare 10/10.",
    "customer_name": "Alexander A. aus Siegen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Dominik R. aus Pforzheim",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Klassiker gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Luis K. aus Gronau",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Luis K. aus Koblenz",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Alles richtig gemacht.",
    "customer_name": "Simon T. aus Kleve",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schuppenfrei gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Mats P. aus Neu-Ulm",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Anna R. aus Remscheid",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Kauf ich definitiv wieder.",
    "customer_name": "Sabine D. aus Mönchengladbach",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Tanja P. aus Pulheim",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Justus I. aus Ravensburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Bin rundum glücklich damit.",
    "customer_name": "Stefanie Z. aus Plauen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Super Shop, super Ware.",
    "customer_name": "Monika P. aus Neuwied",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Bin rundum glücklich damit.",
    "customer_name": "Tim L. aus Peine",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Lukas R. aus Recklinghausen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Paul A. aus Frankfurt",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Liam M. aus Marburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Johannes W. aus Dinslaken",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik S. aus Herzogenrath",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Petra P. aus Rostock",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Anna M. aus Neumünster",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Werde dabei bleiben.",
    "customer_name": "Moritz N. aus Ulm",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Luis N. aus Aachen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Yannick Q. aus Freising",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Maria F. aus Augsburg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Preis/Leistung past einfach.",
    "customer_name": "Birgit X. aus Schweinfurt",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "David F. aus Wetzlar",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Kevin I. aus Hameln",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Milan H. aus Pinneberg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Monika H. aus Stolberg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. Top, weiter so.",
    "customer_name": "Kevin N. aus Elmshorn",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Andrea Y. aus Witten",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Maria P. aus Düsseldorf",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Alexander B. aus Rüsselsheim",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Theo T. aus Bocholt",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Kerstin R. aus Schwerin",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Matteo K. aus Viersen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Moritz G. aus Freiburg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Top.",
    "customer_name": "Tobias P. aus Langenhagen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Top, weiter so.",
    "customer_name": "Matteo A. aus Neuss",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Sarah X. aus Bocholt",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Erik Q. aus Ulm",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Milan L. aus Mülheim an der Ruhr",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Susanne E. aus Delmenhorst",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Melanie D. aus Bruchsal",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Susanne X. aus Neuwied",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Johannes O. aus Esslingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Maria G. aus Aalen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Oskar N. aus Fellbach",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Leon U. aus Remscheid",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Alexander F. aus Chemnitz",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo W. aus Hannover",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Oskar F. aus Hamm",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schuppenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Vincent L. aus Speyer",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Fabian Q. aus Landshut",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Erik M. aus Sankt Augustin",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Birgit B. aus Fürth",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Top.",
    "customer_name": "Lukas Q. aus Neustadt an der Weinstraße",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Yannick O. aus Kleve",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Felix W. aus Lahr",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Bastian Q. aus Grevenbroich",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "David F. aus Cottbus",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Laura Q. aus Herten",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Preis/Leistung past einfach.",
    "customer_name": "Tom Y. aus Hof",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Vincent H. aus Kaiserslautern",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Andrea Q. aus Marl",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Tim Z. aus Remscheid",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Liam Y. aus Bergheim",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Dominik S. aus Bad Oeynhausen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Samuel K. aus Magdeburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Kauf ich definitiv wieder.",
    "customer_name": "Susanne D. aus Mönchengladbach",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Daumen hoch!",
    "customer_name": "Marlon I. aus Ludwigsburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Matteo N. aus Berlin",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Paul Y. aus Kleve",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Leo B. aus Friedrichshafen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Dennis L. aus Offenbach",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Birgit V. aus Cottbus",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Laura I. aus Dessau-Roßlau",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Luis V. aus Görlitz",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Klassiker gefällt mir gut. Top, weiter so.",
    "customer_name": "Kilian U. aus Baden-Baden",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Alexander V. aus Bocholt",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Jan T. aus Leinfelden-Echterdingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Luca E. aus Dresden",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Sabine H. aus Bonn",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Sarah S. aus Herten",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Anna S. aus Rüsselsheim",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Valentin C. aus Oberhausen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Tim A. aus Witten",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Maximilian T. aus Düsseldorf",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Große Flasche gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Oskar P. aus Kerpen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Duft gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Lukas L. aus Hattingen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Stefanie D. aus Speyer",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Elias U. aus Pulheim",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Bastian D. aus Ingolstadt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Große Flasche gefällt mir gut. Lohnt sich.",
    "customer_name": "Melanie C. aus Bottrop",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Emil F. aus Heidenheim",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Tobias R. aus Pulheim",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Duft gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Petra T. aus Heidelberg",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Arne O. aus Mönchengladbach",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Christina X. aus Neustadt an der Weinstraße",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Sehr zu empfehlen.",
    "customer_name": "Robin L. aus Bergkamen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Kevin G. aus Herford",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Große Flasche gefällt mir gut. Daumen hoch!",
    "customer_name": "Noah H. aus Herford",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Sabine C. aus Tübingen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Felix S. aus Arnsberg",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Erik V. aus Regensburg",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Anna U. aus Passau",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Yannick B. aus Münster",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Henry M. aus Ludwigsburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Oskar P. aus Flensburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Anton M. aus Aalen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schuppenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "David C. aus Dinslaken",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Elias Q. aus Schwerin",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Justus D. aus Hildesheim",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Besser geht es nicht.",
    "customer_name": "Monika M. aus Hildesheim",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Moritz V. aus Ulm",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Jan C. aus Salzgitter",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Preis/Leistung past einfach.",
    "customer_name": "Liam U. aus Wetzlar",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Christina O. aus Frankfurt (Oder)",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Hannes T. aus Stolberg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schuppenfrei gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Alexander Z. aus Bamberg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Top.",
    "customer_name": "Sandra B. aus Frankfurt (Oder)",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Besser geht es nicht.",
    "customer_name": "Anna O. aus Kiel",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Christoph J. aus Gummersbach",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Super Shop, super Ware.",
    "customer_name": "Sarah S. aus Paderborn",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico R. aus Castrop-Rauxel",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Samuel M. aus Bamberg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Nadine K. aus Moers",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Niklas I. aus Ingolstadt",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Monika A. aus Gelsenkirchen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. Top, weiter so.",
    "customer_name": "Ben H. aus Bietigheim-Bissingen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Christoph I. aus Neunkirchen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Valentin I. aus Solingen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange.",
    "customer_name": "Katharina Z. aus Potsdam",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Mats Z. aus Worms",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Favorit. Danke!",
    "customer_name": "Dennis A. aus Emden",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Lohnt sich.",
    "customer_name": "Robin P. aus Bad Homburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Johannes R. aus Ulm",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Maria Q. aus Baden-Baden",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Preis/Leistung past einfach.",
    "customer_name": "Valentin F. aus Langenhagen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Philipp H. aus Oberursel",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Absolute Kaufempfehlung.",
    "customer_name": "Luis C. aus Peine",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schuppenfrei gefällt mir gut. Vielen Dank.",
    "customer_name": "Petra C. aus Dülmen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Besser geht es nicht.",
    "customer_name": "Luca T. aus Paderborn",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Melanie B. aus Halle (Saale)",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Klare 10/10.",
    "customer_name": "Lukas F. aus Herford",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Einfach klasse.",
    "customer_name": "Milan X. aus Braunschweig",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Luca C. aus Wuppertal",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Duft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Anja G. aus Villingen-Schwenningen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Max Q. aus Hürth",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Einfach klasse.",
    "customer_name": "Claudia X. aus Heidenheim",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Große Flasche gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Erik W. aus Dülmen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Jannik N. aus Gießen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Felix B. aus Recklinghausen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Lisa V. aus Göppingen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "Timo K. aus Sindelfingen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Tanja F. aus Schweinfurt",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Julia G. aus Stuttgart",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Tobias U. aus Viersen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Kevin V. aus Mülheim an der Ruhr",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico V. aus Brotterode",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauber gefällt mir gut. Lohnt sich.",
    "customer_name": "Jan G. aus Pforzheim",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Klassiker gefällt mir gut. Vielen Dank.",
    "customer_name": "Anna V. aus Plauen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Christina T. aus Landshut",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schuppenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Susanne I. aus Emden",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Anton O. aus Wiesbaden",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Melanie P. aus Fulda",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Malte R. aus Lörrach",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Kauf ich definitiv wieder.",
    "customer_name": "Julian O. aus Krefeld",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Lenny W. aus Stuttgart",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schuppenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Philipp Q. aus Ingolstadt",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Fabian N. aus Lüdenscheid",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Nicole M. aus Dülmen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Erik Y. aus Straubing",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Paul H. aus Lörrach",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Ben C. aus Bocholt",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sauber gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Katharina B. aus Lippstadt",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Tobias H. aus Celle",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Nicole N. aus Rüsselsheim",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Oskar H. aus Göttingen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Samuel W. aus Lüdenscheid",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Valentin U. aus Esslingen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Jannik F. aus Rosenheim",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Alexander A. aus Wiesbaden",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Birgit J. aus Magdeburg",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Duft gefällt mir gut. Klare 10/10.",
    "customer_name": "Susanne D. aus Leipzig",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Dennis Q. aus Nettetal",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Julia P. aus Kaiserslautern",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Einfach klasse.",
    "customer_name": "Monika H. aus Lippstadt",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Kilian P. aus Magdeburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia K. aus Halle (Saale)",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Dominik X. aus Neuss",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Theo L. aus Neuwied",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Melanie W. aus Duisburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Julian C. aus Troisdorf",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Emil V. aus Dorsten",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Sehr zu empfehlen.",
    "customer_name": "Felix J. aus Peine",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Milan C. aus Heinsberg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Nico Y. aus Bonn",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Malte M. aus Langenhagen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Nie mehr ohne.",
    "customer_name": "Bastian Z. aus Bottrop",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Simon W. aus Aschaffenburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Klassiker gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Monika S. aus Flensburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Mats O. aus Castrop-Rauxel",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Anton T. aus Kaufbeuren",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Florian W. aus Flensburg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Philipp O. aus Delmenhorst",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Laura T. aus Bielefeld",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Lenny G. aus Potsdam",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Nicole A. aus Pforzheim",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Klassiker gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Lukas N. aus Bad Oeynhausen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Christoph E. aus Bergkamen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Timo R. aus München",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Niklas N. aus Paderborn",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Robin Y. aus Eisenach",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Anton V. aus Brandenburg an der Havel",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Absolute Kaufempfehlung.",
    "customer_name": "Anja S. aus Hanau",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Große Flasche gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Adrian K. aus Dorsten",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Nico A. aus Erftstadt",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Jonas M. aus Marl",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Super Shop, super Ware.",
    "customer_name": "Robin Z. aus Brandenburg an der Havel",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Klassiker gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Adrian I. aus Hürth",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Felix K. aus Rottenburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Milan Q. aus Kempten",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Laura Z. aus Bremerhaven",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Laura B. aus Euskirchen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Milan U. aus Bergkamen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Sascha P. aus Villingen-Schwenningen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Niklas P. aus Reutlingen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Lisa S. aus Castrop-Rauxel",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Alles richtig gemacht.",
    "customer_name": "Jan H. aus Grevenbroich",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Duft gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Bastian R. aus Cottbus",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Monika L. aus Konstanz",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Kevin C. aus Bruchsal",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Liam E. aus Peine",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Kevin P. aus Emden",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Klassiker gefällt mir gut. Klare 10/10.",
    "customer_name": "Nicole X. aus Lünen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Christina B. aus Mönchengladbach",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Klassiker gefällt mir gut. Vielen Dank.",
    "customer_name": "Vincent E. aus Ratingen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Tom Y. aus Oldenburg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Ben G. aus Neunkirchen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Samuel D. aus Bielefeld",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Preis/Leistung past einfach.",
    "customer_name": "Hannes W. aus Rosenheim",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Preis/Leistung past einfach.",
    "customer_name": "Noah Q. aus Unna",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Dominik B. aus Mülheim an der Ruhr",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Große Flasche gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Julia P. aus Düren",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Melanie O. aus Weimar",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Melanie U. aus Neuwied",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Claudia K. aus Sankt Augustin",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sauber gefällt mir gut. Daumen hoch!",
    "customer_name": "Luca U. aus Hagen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Kerstin N. aus Neunkirchen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll.",
    "customer_name": "Anja G. aus Heilbronn",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Top.",
    "customer_name": "Fabian E. aus Rastatt",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Dennis D. aus Nettetal",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Susanne Q. aus Paderborn",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Duft gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Luis K. aus Fürth",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. Werde dabei bleiben.",
    "customer_name": "Timo L. aus Dinslaken",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Kauf ich definitiv wieder.",
    "customer_name": "Nico Z. aus Speyer",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Arne A. aus Rastatt",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Anna E. aus Memmingen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Florian X. aus Ingolstadt",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Johannes L. aus Langenhagen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Sascha T. aus Pulheim",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Simon G. aus Bremerhaven",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Justus C. aus Duisburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Tanja Z. aus Meerbusch",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Elias Q. aus Neuwied",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Anna G. aus Bergkamen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Schuppenfrei gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia J. aus Stolberg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Laura U. aus Bietigheim-Bissingen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Bin zufrieden.",
    "customer_name": "Christoph U. aus Göppingen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Noah Y. aus Frechen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Johannes C. aus Freiburg",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Jonas H. aus Kassel",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Nie mehr ohne.",
    "customer_name": "Kevin N. aus Leipzig",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Leo G. aus Bremerhaven",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Adrian A. aus Kleve",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Tim T. aus Mainz",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Melanie D. aus Salzgitter",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Elias Y. aus Worms",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Top, weiter so.",
    "customer_name": "Hannes B. aus Detmold",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Sarah E. aus Jena",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Danke!",
    "customer_name": "Vincent C. aus Lippstadt",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Kilian V. aus Siegen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Klassiker gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Arne W. aus Ludwigshafen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo O. aus Magdeburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Preis/Leistung past einfach.",
    "customer_name": "Sascha U. aus Offenbach",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Bin rundum glücklich damit.",
    "customer_name": "Sabine M. aus Rodgau",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "Lisa W. aus Recklinghausen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Nie mehr ohne.",
    "customer_name": "Oskar K. aus Langenhagen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Kevin D. aus Elmshorn",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Adrian P. aus Dresden",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Arne B. aus Ingolstadt",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Schuppenfrei gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Nadine I. aus Mönchengladbach",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Finn A. aus Ibbenbüren",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Matteo Y. aus Heidelberg",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Arne K. aus Fulda",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Danke!",
    "customer_name": "Niklas K. aus Ratingen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Vincent A. aus Viersen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Robin A. aus Konstanz",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Aufladen geht super schnell. Daumen hoch!",
    "customer_name": "Julia I. aus Memmingen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Johannes S. aus Bocholt",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Große Flasche gefällt mir gut. Daumen hoch!",
    "customer_name": "Erik A. aus Rottenburg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Christoph X. aus Neustadt an der Weinstraße",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Duft gefällt mir gut. Daumen hoch!",
    "customer_name": "Kerstin N. aus Neumünster",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Ben Z. aus Arnsberg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Matteo N. aus Filderstadt",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Danke!",
    "customer_name": "Christoph W. aus Euskirchen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Klassiker gefällt mir gut. Top, weiter so.",
    "customer_name": "Julian Q. aus Dortmund",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Jonas K. aus Hattingen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Alles richtig gemacht.",
    "customer_name": "Moritz R. aus Darmstadt",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Schuppenfrei gefällt mir gut. Lohnt sich.",
    "customer_name": "Milan O. aus Gelsenkirchen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super. Bin zufrieden.",
    "customer_name": "Nicole X. aus Mülheim an der Ruhr",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Fabian G. aus Oranienburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Bin zufrieden.",
    "customer_name": "Hannes J. aus Mannheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Fabian M. aus Bad Oeynhausen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schuppenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Julia F. aus Bad Salzuflen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Anton S. aus Neuwied",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Klare 10/10.",
    "customer_name": "Luis X. aus Pforzheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Bin rundum glücklich damit.",
    "customer_name": "Jannik G. aus Ahlen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Jannik R. aus Detmold",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Johannes X. aus Siegen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Jonas R. aus Buxtehude",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir.",
    "customer_name": "Ben Y. aus Bayreuth",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Große Flasche gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Florian F. aus Unna",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Johannes F. aus Karlsruhe",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Valentin B. aus Hildesheim",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Liam V. aus Grevenbroich",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Alles richtig gemacht.",
    "customer_name": "Christina I. aus Neunkirchen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Sascha A. aus Albstadt",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen.",
    "customer_name": "Oskar P. aus Paderborn",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Bin rundum glücklich damit.",
    "customer_name": "Vincent N. aus Neu-Ulm",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauber gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Noah E. aus Bocholt",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Matteo W. aus Ulm",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Besser geht es nicht.",
    "customer_name": "Maximilian X. aus Kerpen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Lenny S. aus Dülmen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Fabian F. aus Dormagen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Werde dabei bleiben.",
    "customer_name": "Mats B. aus Tübingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Dominik C. aus Peine",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Sauber gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin S. aus Frankfurt (Oder)",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Bastian M. aus Troisdorf",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Petra T. aus Norderstedt",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Klassiker gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Milan T. aus Hannover",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Yannick O. aus Erkrath",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Petra P. aus Gütersloh",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Paul G. aus Flensburg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Claudia V. aus Pforzheim",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Klassiker gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Julia N. aus Eisenach",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Stefanie X. aus Wolfenbüttel",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Liam J. aus Grevenbroich",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Paul C. aus Waiblingen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Luis L. aus Hamm",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super.",
    "customer_name": "Claudia H. aus Frankfurt",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Tanja S. aus Neuwied",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Schuppenfrei gefällt mir gut. Top, weiter so.",
    "customer_name": "Malte G. aus Herten",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Julia N. aus Nettetal",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Große Flasche gefällt mir gut. Vielen Dank.",
    "customer_name": "Christina R. aus Minden",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Yannick D. aus Aachen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Luis V. aus Flensburg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Andrea W. aus Bottrop",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Tom V. aus Aschaffenburg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Jan G. aus Borken",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Maximilian I. aus Koblenz",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sauber gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico D. aus Gelsenkirchen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian O. aus Schwerin",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Elias R. aus Kamen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Julia R. aus Ahlen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Lukas U. aus Nürnberg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Klassiker gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Elias U. aus Witten",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Susanne U. aus Menden",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Marlon N. aus Dinslaken",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Benedikt T. aus Aschaffenburg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Super Shop, super Ware.",
    "customer_name": "Christoph L. aus Böblingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Kilian X. aus Nürnberg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Jan G. aus Unna",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Alexander L. aus Bad Kreuznach",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Laura P. aus Bremen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Klassiker gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sandra F. aus Oberhausen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Tom V. aus Düsseldorf",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Kerstin R. aus Leonberg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Jonas L. aus Görlitz",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Emil N. aus Kerpen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Sauber gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Andrea M. aus Hattingen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Adrian Y. aus Oberursel",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schuppenfrei gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah I. aus Koblenz",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Birgit X. aus Würzburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Duft gefällt mir gut. Top, weiter so.",
    "customer_name": "Fabian R. aus Heidenheim",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Top.",
    "customer_name": "Samuel D. aus Magdeburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Ben N. aus Stralsund",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Tanja O. aus Remscheid",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Vielen Dank.",
    "customer_name": "David J. aus Dinslaken",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Paul U. aus Lörrach",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Leo R. aus Heinsberg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Bastian Z. aus Mainz",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Noah Y. aus Neuss",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Theo Z. aus Münster",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Kerstin Q. aus Rostock",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Oskar T. aus Lippstadt",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Matteo T. aus Pinneberg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Nico J. aus Frankfurt (Oder)",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Florian Z. aus Heinsberg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Petra X. aus Gronau",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Lenny T. aus Dresden",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt. Danke!",
    "customer_name": "Maria K. aus Darmstadt",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon U. aus Konstanz",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Klassiker gefällt mir gut. Top, weiter so.",
    "customer_name": "Jannik O. aus Worms",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Fabian O. aus Fellbach",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Kilian U. aus Lünen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Henry U. aus Hennef",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Milan F. aus Minden",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Julia W. aus Dülmen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Mats A. aus Weimar",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Werde dabei bleiben.",
    "customer_name": "Nico R. aus Castrop-Rauxel",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauber gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Paul M. aus Düsseldorf",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Klassiker gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Matteo M. aus Dachau",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Kilian I. aus Lünen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Justus I. aus Fulda",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Sabine G. aus Bochum",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Luca R. aus Neunkirchen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Hannes F. aus Hanau",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Luca R. aus Dinslaken",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Erik H. aus Stralsund",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Tanja G. aus Heilbronn",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Duft gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lenny K. aus Salzgitter",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Katharina P. aus Bergisch Gladbach",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Birgit Q. aus Offenbach",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Vincent C. aus Bad Kreuznach",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Nie mehr ohne.",
    "customer_name": "Tom B. aus Ravensburg",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dennis X. aus Düren",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Einfach klasse.",
    "customer_name": "Anton J. aus Friedrichshafen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Kevin I. aus Ahlen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Julian R. aus Arnsberg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Niklas E. aus Rheine",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Noah J. aus Pulheim",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Lohnt sich.",
    "customer_name": "Tobias J. aus Gütersloh",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Christoph O. aus Soest",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Max V. aus München",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Niklas D. aus Borken",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Tobias W. aus Viersen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Robin U. aus Bornheim",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Kilian E. aus Erkrath",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Leon J. aus Jena",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Duft gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Katharina F. aus Marl",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Lukas O. aus Görlitz",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Klassiker gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Claudia S. aus Hennef",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Susanne G. aus Lippstadt",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Ben M. aus Melle",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Maximilian V. aus Karlsruhe",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Bastian W. aus Kassel",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Nicole Y. aus Wetzlar",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Sascha N. aus Wesel",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Noah U. aus Hildesheim",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Benedikt P. aus Ludwigshafen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Kann ich nur weiterempfehlen.",
    "customer_name": "Sarah T. aus Chemnitz",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Melanie I. aus Heidenheim",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut.",
    "customer_name": "Marlon U. aus Oldenburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Nico W. aus Dessau-Roßlau",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "David Z. aus Heidenheim",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Kilian T. aus Kaufbeuren",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Klare 10/10.",
    "customer_name": "Nadine O. aus Iserlohn",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Anja N. aus Bremen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Kilian G. aus Stuttgart",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Maria P. aus Rheine",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Florian T. aus Mannheim",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Emil Y. aus Menden",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Adrian J. aus Menden",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Anton N. aus Lüneburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Maximilian J. aus Gera",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Yannick I. aus Dresden",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Klassiker gefällt mir gut. Vielen Dank.",
    "customer_name": "Yannick Z. aus Lüdenscheid",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Top, weiter so.",
    "customer_name": "Nicole X. aus Velbert",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Sascha N. aus Bruchsal",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja X. aus Offenbach",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Emil O. aus Böblingen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schuppenfrei gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Dominik E. aus Oldenburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Arne P. aus Zwickau",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Marlon Y. aus Menden",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Maria W. aus Bad Oeynhausen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "David D. aus Aachen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Dominik K. aus Heinsberg",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Leo N. aus Lünen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Erik E. aus Solingen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Reinigung ist kinderleicht unter Wasser. Besser geht es nicht.",
    "customer_name": "Dominik F. aus Herne",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Sarah R. aus Stolberg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Leon P. aus Aachen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauber gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Max C. aus Augsburg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Daumen hoch!",
    "customer_name": "Melanie N. aus Potsdam",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Maximilian L. aus Friedrichshafen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Paul N. aus Passau",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Sandra H. aus Gummersbach",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Vincent X. aus Neumünster",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Samuel Y. aus Bayreuth",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Philipp A. aus Regensburg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dominik C. aus Bad Oeynhausen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Christina E. aus Aurich",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Claudia N. aus Jena",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Theo S. aus Mainz",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Luis W. aus Neuwied",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Sauber gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Tobias O. aus Gummersbach",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Werde ich wieder kaufen. Bin zufrieden.",
    "customer_name": "Florian S. aus Filderstadt",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Anna I. aus Norderstedt",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Absolute Kaufempfehlung.",
    "customer_name": "Max Q. aus Göppingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina O. aus Kempten",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Oskar X. aus Plauen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Große Flasche gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Max Y. aus Osnabrück",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Lohnt sich.",
    "customer_name": "Sandra Q. aus Landshut",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sauber gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Finn J. aus Memmingen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Kilian P. aus Leonberg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Maria N. aus Eisenach",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Vielen Dank.",
    "customer_name": "Lukas L. aus Langenhagen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. 5 Sterne von mir.",
    "customer_name": "Timo A. aus Augsburg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sauber gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Theo X. aus Wetzlar",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Bin zufrieden.",
    "customer_name": "Maximilian T. aus Dessau-Roßlau",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Birgit W. aus Siegen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Leo K. aus Viersen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Klassiker gefällt mir gut. Lohnt sich.",
    "customer_name": "Petra N. aus Ulm",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Alles richtig gemacht.",
    "customer_name": "Tanja P. aus Ravensburg",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Hannes D. aus Bremen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Sehr zu empfehlen.",
    "customer_name": "Liam H. aus Gera",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Theo K. aus Lemgo",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Große Flasche gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Johannes P. aus Gronau",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Moritz N. aus Unna",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Klassiker gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Dominik C. aus Berlin",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Klassiker gefällt mir gut. Lohnt sich.",
    "customer_name": "Dominik J. aus Zwickau",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Moritz Y. aus Rosenheim",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Hannes X. aus Neumünster",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Danke!",
    "customer_name": "Matteo N. aus Fellbach",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Niklas L. aus Ibbenbüren",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Felix R. aus Heidelberg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Lisa F. aus Lingen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Nico N. aus Kassel",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Anton F. aus Castrop-Rauxel",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Lukas H. aus Krefeld",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Yannick V. aus Bergkamen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Justus H. aus Herzogenrath",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Große Flasche gefällt mir gut. Klare 10/10.",
    "customer_name": "Philipp A. aus Frankfurt",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Tim X. aus Siegen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Nicole D. aus Memmingen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Julia S. aus Bornheim",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Besser geht es nicht.",
    "customer_name": "Robin J. aus Bad Kreuznach",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Max W. aus Ludwigshafen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Werde dabei bleiben.",
    "customer_name": "Sabine W. aus Hanau",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Kevin F. aus Stuttgart",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Christina H. aus Erkrath",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Lohnt sich.",
    "customer_name": "Luis E. aus Kaufbeuren",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Sascha J. aus Bochum",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Kauf ich definitiv wieder.",
    "customer_name": "Johannes Z. aus Bruchsal",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Johannes Z. aus Bruchsal",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Lisa Q. aus Alsdorf",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Justus M. aus Hameln",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Monika R. aus Hilden",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Johannes W. aus Oldenburg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Julian W. aus Baden-Baden",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Jan M. aus Hürth",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Tobias A. aus Trier",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Sehr zu empfehlen.",
    "customer_name": "Fabian B. aus Langenfeld",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Henry S. aus Neustadt an der Weinstraße",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Yannick A. aus Pinneberg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Justus T. aus Freiburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Laura O. aus Oberhausen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sascha Q. aus Aachen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Einfach klasse.",
    "customer_name": "Finn V. aus Solingen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Anja D. aus Frankfurt (Oder)",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Einfach klasse.",
    "customer_name": "Malte A. aus Pforzheim",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Sauber gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Luis N. aus Waiblingen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schuppenfrei gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Sandra Z. aus Bergkamen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Susanne J. aus Bamberg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Niklas M. aus Herford",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tim R. aus Chemnitz",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Lenny O. aus Bremen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Susanne X. aus Hamburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sauber gefällt mir gut. Klare 10/10.",
    "customer_name": "Tanja M. aus Recklinghausen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Sascha C. aus Jena",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Erik J. aus Wuppertal",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Liam E. aus Neustadt an der Weinstraße",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Sarah T. aus Melle",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra W. aus Elmshorn",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Philipp P. aus Bonn",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Dominik H. aus Aachen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Laura Q. aus Dortmund",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Vincent I. aus Wunstorf",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Absolute Kaufempfehlung.",
    "customer_name": "Jan V. aus Hameln",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sauber gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "David Q. aus Essen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Monika B. aus Witten",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Erik E. aus Nettetal",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Sandra G. aus Heidelberg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Timo R. aus Filderstadt",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "Tobias R. aus Bremerhaven",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Oskar H. aus Villingen-Schwenningen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Luca O. aus Bad Homburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Sehr zu empfehlen.",
    "customer_name": "Elias N. aus Wilhelmshaven",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Samuel T. aus Eisenach",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Luca T. aus Fürth",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Kevin B. aus Pulheim",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität. Bin zufrieden.",
    "customer_name": "Max Y. aus Wiesbaden",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Malte S. aus Friedrichshafen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Klassiker gefällt mir gut. Klare 10/10.",
    "customer_name": "Sandra J. aus Buxtehude",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Maximilian W. aus Buxtehude",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Claudia B. aus Monheim am Rhein",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Arne Y. aus Bad Oeynhausen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Klassiker gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Sarah L. aus Schwerin",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Valentin R. aus Wesel",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Kann ich nur weiterempfehlen.",
    "customer_name": "Ben X. aus Baden-Baden",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Große Flasche gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Lukas Y. aus Kleve",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Dennis C. aus Duisburg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Melanie K. aus Offenbach",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Moritz E. aus Berlin",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Finn T. aus Hattingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Melanie I. aus Ingolstadt",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Top, weiter so.",
    "customer_name": "Bastian I. aus Wolfenbüttel",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Laura T. aus Peine",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Christoph T. aus Neustadt an der Weinstraße",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Kann ich nur weiterempfehlen.",
    "customer_name": "Katharina O. aus Ravensburg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Marlon Q. aus Bottrop",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Kilian X. aus Remscheid",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kauf ich definitiv wieder.",
    "customer_name": "Samuel F. aus Frechen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Sarah M. aus Würzburg",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Felix W. aus Hagen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Große Flasche gefällt mir gut. Klare 10/10.",
    "customer_name": "Dennis K. aus Bielefeld",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Andrea L. aus Memmingen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Kevin M. aus Braunschweig",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Henry H. aus Gütersloh",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Kann ich nur weiterempfehlen.",
    "customer_name": "Sandra Q. aus Rastatt",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Nicole X. aus Erkrath",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Florian S. aus Bergkamen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Sarah N. aus Lübeck",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Nico R. aus Straubing",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Mats J. aus Celle",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Kerstin W. aus Lüdenscheid",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Nicole Z. aus Memmingen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Bin rundum glücklich damit.",
    "customer_name": "Philipp T. aus Osnabrück",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Anja F. aus Essen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Super Shop, super Ware.",
    "customer_name": "Jannik L. aus Langenfeld",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Duft gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Dennis J. aus Offenbach",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Bin rundum glücklich damit.",
    "customer_name": "Simon A. aus Bornheim",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Claudia J. aus Memmingen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Marlon Q. aus Köln",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Sarah U. aus Bamberg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden. Bin zufrieden.",
    "customer_name": "Anton Z. aus Straubing",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Werde dabei bleiben.",
    "customer_name": "Tanja R. aus Rosenheim",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Oskar V. aus Bamberg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Felix G. aus Heidelberg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Klassiker gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Johannes K. aus Ludwigsburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Alles richtig gemacht.",
    "customer_name": "Sandra C. aus Wolfsburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Timo K. aus Düren",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Emil Z. aus Wetzlar",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Maximilian V. aus Tübingen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Vielen Dank.",
    "customer_name": "Finn J. aus Reutlingen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Petra S. aus Kaiserslautern",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Haare fühlen sich kräftiger und gesünder an. Lohnt sich.",
    "customer_name": "Ben X. aus Essen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schuppenfrei gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Maria R. aus Ulm",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Katharina Z. aus Passau",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Melanie D. aus Alsdorf",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Birgit I. aus Köln",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Jonas T. aus Göttingen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Schuppenfrei gefällt mir gut. Top, weiter so.",
    "customer_name": "Julia S. aus Weinheim",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Tim N. aus Stuttgart",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Felix S. aus Offenbach",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Christoph C. aus Wunstorf",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Monika A. aus Wuppertal",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Laura N. aus Frechen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Florian H. aus Ratingen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Maria A. aus Saarbrücken",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Timo O. aus Peine",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Leon B. aus Kerpen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Daumen hoch!",
    "customer_name": "Monika T. aus Velbert",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Samuel Q. aus Mülheim an der Ruhr",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Andrea N. aus Rodgau",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Dominik C. aus Rostock",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Florian T. aus Bornheim",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Maximilian H. aus Moers",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Tom H. aus Oberursel",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Sascha A. aus Brotterode",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Melanie M. aus Kaiserslautern",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Nie mehr ohne.",
    "customer_name": "Marlon I. aus Heidelberg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Lisa L. aus Bad Kreuznach",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Lenny R. aus Ludwigshafen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Klassiker gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "David C. aus Emden",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Sabine V. aus Trier",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Schuppenfrei gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Marlon B. aus Ludwigshafen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Philipp O. aus Heidenheim",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Dominik B. aus Kassel",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Sarah L. aus Wilhelmshaven",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Vielen Dank.",
    "customer_name": "Florian N. aus Rottenburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Adrian K. aus Alsdorf",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Julian B. aus Straubing",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "Ben S. aus Darmstadt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Top, weiter so.",
    "customer_name": "Sabine Y. aus Erkrath",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Vincent D. aus Bonn",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Julia O. aus Fürth",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig.",
    "customer_name": "Moritz E. aus Oberursel",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Nicole B. aus Hürth",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Maximilian U. aus Schwerin",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Anna V. aus Neuss",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Schuppenfrei gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo A. aus Lörrach",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Duft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Tanja E. aus Kerpen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sauber gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Maria N. aus Villingen-Schwenningen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Henry F. aus Bad Homburg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Petra J. aus Moers",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Schuppenfrei gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Valentin Y. aus Plauen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Produkt.",
    "customer_name": "Milan H. aus Nettetal",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Aufladen geht super schnell. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Max S. aus Brandenburg an der Havel",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Katharina C. aus Regensburg",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Benedikt Y. aus Bruchsal",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Fabian Q. aus Gummersbach",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Moritz X. aus Kerpen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Paul P. aus Ulm",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Duft hält lange an, ist aber nicht penetrant. Super Shop, super Ware.",
    "customer_name": "Jonas K. aus Bamberg",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Besser geht es nicht.",
    "customer_name": "Lukas G. aus Dachau",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Duft gefällt mir gut. Top, weiter so.",
    "customer_name": "Sabine I. aus Kassel",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Leon J. aus Hamburg",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Johannes E. aus Dülmen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Julia P. aus Plauen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Christina A. aus Stralsund",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Besser geht es nicht.",
    "customer_name": "Hannes Z. aus Ahlen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Moritz A. aus Filderstadt",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Schuppenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Philipp S. aus Erftstadt",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Christina R. aus Flensburg",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Philipp V. aus Bottrop",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Sascha S. aus Bamberg",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Sauber gefällt mir gut. Top, weiter so.",
    "customer_name": "Tanja O. aus Friedrichshafen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "David H. aus Waiblingen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Marlon D. aus Rüsselsheim",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Claudia T. aus Kempten",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Bastian P. aus Cottbus",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Sauber gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz M. aus Speyer",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Aufladen geht super schnell. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Julian N. aus Ulm",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Bin rundum glücklich damit.",
    "customer_name": "Max L. aus Rheda-Wiedenbrück",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schuppenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Sascha D. aus Neuss",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Robin Q. aus Troisdorf",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Klare 10/10.",
    "customer_name": "Petra I. aus Dresden",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Henry Y. aus Baden-Baden",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Qualität.",
    "customer_name": "Noah C. aus Sankt Augustin",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Kevin X. aus Neuwied",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Besser geht es nicht.",
    "customer_name": "Samuel V. aus Passau",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Preis/Leistung past einfach.",
    "customer_name": "Sascha S. aus Bocholt",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Klassiker gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Lukas V. aus Moers",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Adrian T. aus Regensburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Emil U. aus Bornheim",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Lenny K. aus Würzburg",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Leon S. aus Göttingen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Tim S. aus Dinslaken",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul L. aus Marburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Laura B. aus Cottbus",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Tim Q. aus Detmold",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauber gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Christoph H. aus Hannover",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Matteo H. aus Friedrichshafen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Kevin M. aus Wiesbaden",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Werde dabei bleiben.",
    "customer_name": "Samuel A. aus Eschweiler",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Emil M. aus Hilden",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schuppenfrei gefällt mir gut. Daumen hoch!",
    "customer_name": "Emil Y. aus Albstadt",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Jonas F. aus Dachau",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Henry D. aus Buxtehude",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Justus D. aus Dinslaken",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Top, weiter so.",
    "customer_name": "Sabine T. aus Bad Salzuflen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Sauber gefällt mir gut. Lohnt sich.",
    "customer_name": "Christina N. aus Frankfurt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Vincent K. aus Dachau",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Niklas F. aus Sankt Augustin",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Vincent U. aus Köln",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Leo U. aus Melle",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Große Flasche gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Christina X. aus Mainz",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Liam L. aus Wiesbaden",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Reinigung ist kinderleicht unter Wasser. Einfach klasse.",
    "customer_name": "Maria O. aus Hamm",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Vincent S. aus Celle",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Maximilian Z. aus Iserlohn",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Timo J. aus Hattingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Valentin B. aus Aachen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Maximilian B. aus Erfurt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "David F. aus Hameln",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Niklas F. aus Lippstadt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Haut fühlt sich danach sehr weich und gepflegt an. Werde dabei bleiben.",
    "customer_name": "Anton U. aus Gelsenkirchen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Claudia V. aus Neustadt an der Weinstraße",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Super Shop, super Ware.",
    "customer_name": "Arne E. aus Potsdam",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Stefanie R. aus Mönchengladbach",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Ben Q. aus Pforzheim",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Claudia W. aus Salzgitter",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Finn E. aus Wuppertal",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Sandra O. aus Braunschweig",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Kein Brennen oder Rötungen nach der Anwendung. Vielen Dank.",
    "customer_name": "Maria P. aus Hamburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Nico L. aus Salzgitter",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Klassiker gefällt mir gut. Daumen hoch!",
    "customer_name": "Arne P. aus Hameln",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Tanja Q. aus Lünen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Haare fühlen sich kräftiger und gesünder an. Sehr zu empfehlen.",
    "customer_name": "Andrea B. aus Lahr",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Mats I. aus Weinheim",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Milan R. aus Grevenbroich",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Melanie I. aus Kamen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Nadine D. aus Mülheim an der Ruhr",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Tobias K. aus Görlitz",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Oskar W. aus Krefeld",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Theo L. aus Erkrath",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Leon S. aus Friedrichshafen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Finn V. aus Remscheid",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Liam G. aus Brotterode",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke.",
    "customer_name": "Christina E. aus Cottbus",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Susanne U. aus Gummersbach",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Preis/Leistung past einfach.",
    "customer_name": "Nadine V. aus Berlin",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Preis/Leistung past einfach.",
    "customer_name": "Alexander V. aus Nettetal",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Melanie B. aus Heidenheim",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Simon R. aus Waiblingen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Kilian N. aus Bergheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Melanie F. aus Dülmen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Susanne I. aus Lingen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Luis Y. aus Eschweiler",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Timo Q. aus Jena",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Große Flasche gefällt mir gut. Top, weiter so.",
    "customer_name": "Luis L. aus Dortmund",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Besser geht es nicht.",
    "customer_name": "Monika H. aus Langenhagen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Lenny K. aus Bruchsal",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Leon L. aus Dessau-Roßlau",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Super Shop, super Ware.",
    "customer_name": "Felix D. aus Waiblingen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Florian Z. aus Erkrath",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Klassiker gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Niklas L. aus Saarbrücken",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Laura M. aus Bergisch Gladbach",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Jonas G. aus Lörrach",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Jannik V. aus Mannheim",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Große Flasche gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Theo H. aus Kempten",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Lenny N. aus Alsdorf",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Kein Brennen oder Rötungen nach der Anwendung. Klare 10/10.",
    "customer_name": "Anton E. aus Bornheim",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Klassiker gefällt mir gut. Klare 10/10.",
    "customer_name": "Timo H. aus Lüneburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Einfach klasse.",
    "customer_name": "Kerstin U. aus Leonberg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Monika Q. aus Dachau",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Schuppenfrei gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Stefanie V. aus Ludwigsburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Katharina U. aus Freising",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Besser geht es nicht.",
    "customer_name": "Florian M. aus Viersen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Noah W. aus Monheim am Rhein",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Christina A. aus Bietigheim-Bissingen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Kauf ich definitiv wieder.",
    "customer_name": "David W. aus Ambreg",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Birgit Q. aus Stuttgart",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Besonders Schuppenfrei gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Kerstin K. aus Hamm",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Lisa L. aus Bornheim",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Jonas O. aus Leonberg",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "David D. aus Hof",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Kevin H. aus Bad Kreuznach",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Sehr zu empfehlen.",
    "customer_name": "Max I. aus Villingen-Schwenningen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Yannick S. aus Dormagen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Johannes C. aus Dessau-Roßlau",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Theo B. aus Mainz",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Johannes W. aus Traunstein",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Laura B. aus Friedrichshafen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Moritz Q. aus Ambreg",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Tobias Y. aus Villingen-Schwenningen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Katharina K. aus Bergheim",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Große Flasche gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Arne W. aus Wolfenbüttel",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Luis B. aus Rosenheim",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Melanie E. aus Greifswald",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "David T. aus Filderstadt",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Hannes X. aus Eisenach",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Leo K. aus Stuttgart",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Paul T. aus Mannheim",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Kerstin Q. aus Villingen-Schwenningen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Simon P. aus Hürth",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Stefanie T. aus Kaiserslautern",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik G. aus Fellbach",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Schuppenfrei gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Noah T. aus Euskirchen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Besser geht es nicht.",
    "customer_name": "Bastian G. aus Erlangen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Sabine B. aus Leverkusen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Klare 10/10.",
    "customer_name": "Jannik J. aus Ludwigsburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Nie mehr ohne.",
    "customer_name": "Melanie O. aus Mainz",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Anja X. aus Freising",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gefällt mir. Danke!",
    "customer_name": "Anja P. aus Meerbusch",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Duft gefällt mir gut. Klare 10/10.",
    "customer_name": "Benedikt Q. aus Potsdam",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Luis C. aus Viersen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Anna G. aus Siegen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Niklas Q. aus Bocholt",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Tim E. aus Witten",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Noah C. aus München",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Sauber gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Julia J. aus Bruchsal",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Lenny A. aus Düsseldorf",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Valentin E. aus Würzburg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Meine Haut hat sich deutlich verbessert. Sehr zu empfehlen.",
    "customer_name": "Luis R. aus Ratingen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Preis/Leistung past einfach.",
    "customer_name": "Sabine D. aus Düsseldorf",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Auch unter der Dusche problemlos nutzbar. Besser geht es nicht.",
    "customer_name": "Vincent V. aus Ambreg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Große Flasche gefällt mir gut. Lohnt sich.",
    "customer_name": "Matteo I. aus Stolberg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Niklas C. aus Essen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Kauf ich definitiv wieder.",
    "customer_name": "Tobias D. aus Garbsen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Maria V. aus Gießen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Bin rundum glücklich damit.",
    "customer_name": "Vincent A. aus Gießen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Justus Q. aus Rüsselsheim",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Bastian K. aus Kassel",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Laura P. aus Castrop-Rauxel",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Dennis Y. aus Villingen-Schwenningen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Moritz K. aus Konstanz",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Stefanie V. aus Wetzlar",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Robin I. aus Pforzheim",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Benedikt Q. aus Gronau",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Anna O. aus Darmstadt",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Hannes W. aus Gütersloh",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Felix C. aus Braunschweig",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Mats C. aus Saarbrücken",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Fabian V. aus Marburg",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Benedikt O. aus Düren",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Anton D. aus Borken",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Schuppenfrei gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Moritz Q. aus Heilbronn",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Claudia J. aus Köln",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Claudia S. aus Paderborn",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Daumen hoch!",
    "customer_name": "Oskar I. aus Elmshorn",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Vielen Dank.",
    "customer_name": "Sarah E. aus Freiburg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Besser geht es nicht.",
    "customer_name": "Henry T. aus Leipzig",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Werde dabei bleiben.",
    "customer_name": "Andrea C. aus Münster",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Lässt sich präzise einstellen für verschiedene Längen. Sehr zu empfehlen.",
    "customer_name": "Felix H. aus Aurich",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Kauf ich definitiv wieder.",
    "customer_name": "Maximilian V. aus Albstadt",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Schuppenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Matteo J. aus Kleve",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Vielen Dank.",
    "customer_name": "Niklas C. aus Aurich",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Klingen sind extrem scharf und gründlich. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lukas A. aus Borken",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar Z. aus Mannheim",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Liam G. aus Kleve",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Florian C. aus Ahlen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Duft gefällt mir gut. Lohnt sich.",
    "customer_name": "Tanja E. aus Nürnberg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Werde dabei bleiben.",
    "customer_name": "Bastian W. aus Ingolstadt",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Schuppenfrei gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Stefanie L. aus Pinneberg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sauber gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Laura F. aus Frankfurt (Oder)",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Tobias S. aus Schwäbisch Gmünd",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Anja K. aus Bietigheim-Bissingen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Dominik K. aus Rheda-Wiedenbrück",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Klassiker gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Andrea U. aus Wesel",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Haut fühlt sich danach sehr weich und gepflegt an. Top, weiter so.",
    "customer_name": "Marlon Q. aus Görlitz",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Maximilian Q. aus Heinsberg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Jonas I. aus Pforzheim",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Tom X. aus Villingen-Schwenningen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. 5 Sterne von mir.",
    "customer_name": "Jonas O. aus Leonberg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Henry I. aus Weimar",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Nie mehr ohne.",
    "customer_name": "Sascha B. aus Hattingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Klare 10/10.",
    "customer_name": "Felix C. aus Ludwigshafen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Vincent X. aus Landshut",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Klassiker gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Jan I. aus Moers",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Christoph Z. aus Koblenz",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Susanne X. aus Regensburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes A. aus Ambreg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Luca V. aus Hennef",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Tanja A. aus Bonn",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Julian E. aus Duisburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Sascha Z. aus Wolfenbüttel",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Aufladen geht super schnell. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Werde dabei bleiben.",
    "customer_name": "Florian L. aus Bremen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Alexander I. aus Baden-Baden",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tom R. aus Berlin",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Paul S. aus Osnabrück",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Niklas N. aus Böblingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Lisa D. aus Aschaffenburg",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Schäumt gut auf und ist sehr ergiebig. Alles richtig gemacht.",
    "customer_name": "Kevin J. aus Kerpen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Christina M. aus Wesel",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Auch unter der Dusche problemlos nutzbar. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Sascha A. aus Bergheim",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Duft gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Christoph L. aus Chemnitz",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Elias G. aus Gummersbach",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Justus N. aus Ahlen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Laura E. aus Heidenheim",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Oskar F. aus Neustadt an der Weinstraße",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Bastian H. aus Schwäbisch Gmünd",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Klassiker gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Susanne W. aus Dinslaken",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Preis/Leistung past einfach.",
    "customer_name": "David U. aus Stralsund",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Klassiker gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Leo U. aus Flensburg",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Birgit B. aus Dortmund",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Leon W. aus Dresden",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Lukas T. aus Kamen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Daumen hoch!",
    "customer_name": "Jan C. aus Neu-Ulm",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Lohnt sich.",
    "customer_name": "Felix E. aus Rodgau",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Sabine K. aus Osnabrück",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Angenehm. Danke!",
    "customer_name": "Laura U. aus Erkrath",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Oskar P. aus Dachau",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Klassiker gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Hannes F. aus Aachen",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. 5 Sterne von mir.",
    "customer_name": "Jonas Y. aus Aurich",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Haut fühlt sich danach sehr weich und gepflegt an. Bin rundum glücklich damit.",
    "customer_name": "Theo V. aus Villingen-Schwenningen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Duft gefällt mir gut. Lohnt sich.",
    "customer_name": "Emil E. aus Frankfurt (Oder)",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Lässt sich präzise einstellen für verschiedene Längen. Nie mehr ohne.",
    "customer_name": "Alexander D. aus Rastatt",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Robin N. aus Schwerin",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Preis/Leistung past einfach.",
    "customer_name": "Nadine M. aus Langenfeld",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Dominik V. aus Nettetal",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Dennis H. aus Eisenach",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Duft gefällt mir gut. Einfach klasse.",
    "customer_name": "Elias O. aus Erfurt",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Anja Y. aus Speyer",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Anna Q. aus Leipzig",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Luis X. aus Wilhelmshaven",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Klassiker gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Paul O. aus Chemnitz",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Werde dabei bleiben.",
    "customer_name": "Lenny F. aus Fellbach",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Vielen Dank.",
    "customer_name": "Sabine N. aus Eisenach",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Daumen hoch!",
    "customer_name": "Alexander Z. aus Ravensburg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Lohnt sich.",
    "customer_name": "Jonas Y. aus Bayreuth",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Kauf ich definitiv wieder.",
    "customer_name": "Bastian C. aus Wuppertal",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Susanne Q. aus Gummersbach",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Top.",
    "customer_name": "Sascha M. aus Gummersbach",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht was es soll. Bin zufrieden.",
    "customer_name": "Moritz S. aus Ambreg",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Justus H. aus Lörrach",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Sarah S. aus Chemnitz",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Preis/Leistung past einfach.",
    "customer_name": "Anton I. aus Erlangen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Sascha F. aus Remscheid",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Laura D. aus Moers",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Duft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Yannick S. aus Heinsberg",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Werde dabei bleiben.",
    "customer_name": "Matteo J. aus Dresden",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Zieht schnell ein und fettet nicht. Super Shop, super Ware.",
    "customer_name": "Emil R. aus Marburg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Klassiker gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Christina L. aus Jena",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Anja I. aus Erkrath",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Adrian F. aus Ratingen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Alles richtig gemacht.",
    "customer_name": "Birgit I. aus Peine",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Tom B. aus Dormagen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis E. aus Stolberg",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Reinigt sehr gründlich, man fühlt sich wie neu. Absolute Kaufempfehlung.",
    "customer_name": "Theo S. aus Marburg",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Finn Q. aus Dessau-Roßlau",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Dennis P. aus Hamm",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Bin zufrieden.",
    "customer_name": "Johannes V. aus Gelsenkirchen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Motor ist sehr leise, was ich angenehm finde. Nie mehr ohne.",
    "customer_name": "Oskar P. aus Weimar",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Sauber gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Monika Q. aus Emden",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Marlon R. aus Lüneburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Danke!",
    "customer_name": "Monika L. aus Hürth",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Duft gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Niklas C. aus Görlitz",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Jonas P. aus Ingolstadt",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Große Flasche gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Fabian Q. aus Gera",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico A. aus Borken",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Sabine R. aus Paderborn",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Bin rundum glücklich damit.",
    "customer_name": "Luis O. aus Weimar",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Kauf ich definitiv wieder.",
    "customer_name": "Elias P. aus Recklinghausen",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Schuppenfrei gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Leon Q. aus Arnsberg",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Emil G. aus Lörrach",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Julia F. aus Dormagen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Klassiker gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Laura E. aus Oldenburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Tobias E. aus Münster",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Lohnt sich.",
    "customer_name": "Jannik A. aus Nettetal",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Akku hält wirklich ewig, musste noch nicht laden. Klare 10/10.",
    "customer_name": "Christina G. aus Friedrichshafen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Jonas L. aus Oberursel",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Sauber gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Maximilian I. aus Langenfeld",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Große Flasche gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Kevin R. aus Sindelfingen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Bin zufrieden.",
    "customer_name": "Laura U. aus Trier",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Jannik F. aus Fellbach",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kauf ich definitiv wieder.",
    "customer_name": "Anja S. aus Mülheim an der Ruhr",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Bin rundum glücklich damit.",
    "customer_name": "Noah S. aus Bad Salzuflen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Simon F. aus Soest",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Paul T. aus Nordhorn",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Moritz L. aus Bergisch Gladbach",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Sehr zu empfehlen.",
    "customer_name": "Anna K. aus Stuttgart",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Daumen hoch!",
    "customer_name": "Adrian B. aus Bremerhaven",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Luis P. aus Essen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Einfach klasse.",
    "customer_name": "Nadine W. aus Bottrop",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Duft gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Hannes W. aus Nordhorn",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Super Shop, super Ware.",
    "customer_name": "Leo B. aus Neuwied",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Klare 10/10.",
    "customer_name": "Anna N. aus Görlitz",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Julia D. aus Villingen-Schwenningen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Sascha X. aus Bergisch Gladbach",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Verarbeitung wirkt sehr stabil und langlebig. Sehr zu empfehlen.",
    "customer_name": "Tim I. aus Erfurt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Bin rundum glücklich damit.",
    "customer_name": "Tanja J. aus Saarbrücken",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Schuppenfrei gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Timo Q. aus Wunstorf",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Einfach klasse.",
    "customer_name": "Leon D. aus Dinslaken",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sauber gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis O. aus Celle",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Katharina L. aus Worms",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Julia V. aus Sindelfingen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Preis/Leistung past einfach.",
    "customer_name": "Felix C. aus Lemgo",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Daumen hoch!",
    "customer_name": "Matteo C. aus Bergheim",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Klare 10/10.",
    "customer_name": "Sandra W. aus Ahlen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis O. aus Buxtehude",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Hinterlässt ein frisches Gefühl. Lohnt sich.",
    "customer_name": "Theo S. aus Bayreuth",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Oskar X. aus Waiblingen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Alles richtig gemacht.",
    "customer_name": "Susanne K. aus Norderstedt",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Timo D. aus Pinneberg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Besser geht es nicht.",
    "customer_name": "Johannes M. aus Koblenz",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Milan O. aus Frankfurt (Oder)",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Matteo V. aus Frechen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Petra Q. aus Gelsenkirchen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Maximilian Z. aus Euskirchen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah S. aus Meerbusch",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Kevin H. aus Delmenhorst",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Klassiker gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Lisa W. aus Ludwigshafen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Daumen hoch!",
    "customer_name": "Sarah P. aus Bremen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Jan K. aus Koblenz",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Sauber gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Oskar U. aus Karlsruhe",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Absolute Kaufempfehlung.",
    "customer_name": "Yannick K. aus Kaiserslautern",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Theo M. aus Esslingen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Max E. aus Ulm",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Jonas N. aus Münster",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Arne K. aus Frechen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Nie mehr ohne.",
    "customer_name": "Anna X. aus Düren",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Klare 10/10.",
    "customer_name": "Lenny Y. aus Unna",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Große Flasche gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Emil K. aus Kerpen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Alles richtig gemacht.",
    "customer_name": "Mats Y. aus Speyer",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Luis C. aus Erftstadt",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Erik P. aus Langenhagen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Laura H. aus Paderborn",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Vielen Dank.",
    "customer_name": "Kevin Z. aus Osnabrück",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Daumen hoch!",
    "customer_name": "Malte U. aus Hof",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Liegt sehr gut in der Hand und ist nicht zu schwer. Kauf ich definitiv wieder.",
    "customer_name": "Sabine L. aus Neumünster",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Milan N. aus Leinfelden-Echterdingen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Tanja X. aus Kaiserslautern",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Samuel Z. aus Mannheim",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Sabine D. aus Ravensburg",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Kann ich nur weiterempfehlen.",
    "customer_name": "Adrian O. aus Weinheim",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Aufladen geht super schnell. Kann ich nur weiterempfehlen.",
    "customer_name": "Elias V. aus Mönchengladbach",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Alles richtig gemacht.",
    "customer_name": "Paul C. aus Hürth",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Hinterlässt ein frisches Gefühl. Absolute Kaufempfehlung.",
    "customer_name": "Kilian R. aus Zwickau",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Nie mehr ohne.",
    "customer_name": "Jannik O. aus Witten",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Dennis N. aus Dortmund",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Adrian U. aus Salzgitter",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Sehr zu empfehlen.",
    "customer_name": "Tom A. aus Göppingen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Jannik U. aus Wesel",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jonas G. aus Nettetal",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Auch unter der Dusche problemlos nutzbar. Absolute Kaufempfehlung.",
    "customer_name": "Finn K. aus Hof",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Das Zubehör ist umfangreich und nützlich. Alles richtig gemacht.",
    "customer_name": "Leon I. aus Oldenburg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Top, weiter so.",
    "customer_name": "Johannes Z. aus Eschweiler",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Bin rundum glücklich damit.",
    "customer_name": "Tom A. aus Gummersbach",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Milan K. aus Oberursel",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Jannik M. aus Herten",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut. Bin zufrieden.",
    "customer_name": "Nicole M. aus Hamm",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Sauber gefällt mir gut. Sehr zu empfehlen.",
    "customer_name": "Henry R. aus Kleve",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Klassiker gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Bastian K. aus Fürth",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Ben I. aus Hattingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Super Shop, super Ware.",
    "customer_name": "Max A. aus Elmshorn",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Liegt sehr gut in der Hand und ist nicht zu schwer. Kann ich nur weiterempfehlen.",
    "customer_name": "Matteo S. aus Darmstadt",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Julia L. aus Schweinfurt",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Christoph G. aus Hennef",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Christina G. aus Herten",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Danke!",
    "customer_name": "David I. aus Regensburg",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Duft gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Luca Y. aus Stolberg",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Lukas V. aus Wunstorf",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Christoph N. aus Kleve",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Kein Brennen oder Rötungen nach der Anwendung. Super Shop, super Ware.",
    "customer_name": "Vincent S. aus Dachau",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Nadine K. aus Dülmen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Sauber gefällt mir gut. Klare 10/10.",
    "customer_name": "Jonas P. aus Salzgitter",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Auch unter der Dusche problemlos nutzbar. Preis/Leistung past einfach.",
    "customer_name": "Jannik Y. aus Reutlingen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Tim U. aus Gießen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Paul F. aus Osnabrück",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Katharina A. aus Delmenhorst",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Fabian D. aus Ambreg",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Einfach klasse.",
    "customer_name": "Fabian D. aus Meerbusch",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Die Klingen sind extrem scharf und gründlich. Preis/Leistung past einfach.",
    "customer_name": "Susanne J. aus Münster",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Alles richtig gemacht.",
    "customer_name": "Lukas J. aus Duisburg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Tanja N. aus Kerpen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Duft gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Nadine U. aus Freising",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Top.",
    "customer_name": "Benedikt S. aus Hilden",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. 5 Sterne von mir.",
    "customer_name": "Tim X. aus Bergisch Gladbach",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Auch unter der Dusche problemlos nutzbar. Absolute Kaufempfehlung.",
    "customer_name": "Kilian H. aus Chemnitz",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Duft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Matteo H. aus Detmold",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Kilian D. aus Worms",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Adrian Z. aus Kaufbeuren",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Alles richtig gemacht.",
    "customer_name": "Yannick D. aus Herford",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Vielen Dank.",
    "customer_name": "Melanie T. aus Villingen-Schwenningen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Klassiker gefällt mir gut. Daumen hoch!",
    "customer_name": "Hannes B. aus Bottrop",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Nico J. aus Hanau",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Lässt sich präzise einstellen für verschiedene Längen. Einfach klasse.",
    "customer_name": "Luca D. aus Pforzheim",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Leon K. aus Albstadt",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Dennis Z. aus Straubing",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Anja X. aus Freiburg",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Dennis G. aus Trier",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Emil P. aus Nordhorn",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Einfach klasse.",
    "customer_name": "Luca U. aus Greifswald",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Klingen sind extrem scharf und gründlich. Besser geht es nicht.",
    "customer_name": "Sarah K. aus Ulm",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Einfach klasse.",
    "customer_name": "Kilian C. aus Oberhausen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Auch unter der Dusche problemlos nutzbar. Kann ich nur weiterempfehlen.",
    "customer_name": "Sabine L. aus Rodgau",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Verarbeitung wirkt sehr stabil und langlebig. Super Shop, super Ware.",
    "customer_name": "Nadine R. aus Aschaffenburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Das Zubehör ist umfangreich und nützlich. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Jannik O. aus Kamen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Nie mehr ohne.",
    "customer_name": "Nicole A. aus Wolfenbüttel",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Motor ist sehr leise, was ich angenehm finde. Werde dabei bleiben.",
    "customer_name": "Jannik L. aus Witten",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Auch unter der Dusche problemlos nutzbar. Werde dabei bleiben.",
    "customer_name": "Lenny E. aus Aschaffenburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Simon J. aus Rodgau",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Daumen hoch!",
    "customer_name": "Tom O. aus Konstanz",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Lohnt sich.",
    "customer_name": "Petra A. aus Elmshorn",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Fabian W. aus Magdeburg",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Alles richtig gemacht.",
    "customer_name": "Emil N. aus Pinneberg",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Kevin H. aus Brotterode",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Bin rundum glücklich damit.",
    "customer_name": "Hannes B. aus Trier",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Top, weiter so.",
    "customer_name": "Sarah U. aus Hamm",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Dennis T. aus Minden",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Große Flasche gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Stefanie J. aus Bruchsal",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Henry N. aus Bad Salzuflen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Duft gefällt mir gut. Besser geht es nicht.",
    "customer_name": "Leo I. aus Hamm",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Daumen hoch!",
    "customer_name": "Tanja R. aus Bayreuth",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Besonders Schuppenfrei gefällt mir gut. Klare 10/10.",
    "customer_name": "Simon J. aus Bergkamen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Besonders Schuppenfrei gefällt mir gut. Bin rundum glücklich damit.",
    "customer_name": "Liam M. aus Göttingen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Mats R. aus Herne",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Lohnt sich.",
    "customer_name": "Erik J. aus Rheda-Wiedenbrück",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Auch unter der Dusche problemlos nutzbar. Daumen hoch!",
    "customer_name": "Marlon S. aus Neuwied",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. Kann ich nur weiterempfehlen.",
    "customer_name": "Luis W. aus Brandenburg an der Havel",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. 5 Sterne von mir.",
    "customer_name": "Max H. aus Heinsberg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Duft gefällt mir gut. Daumen hoch!",
    "customer_name": "Luis C. aus Bornheim",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luca U. aus Lahr",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Meine Haut hat sich deutlich verbessert. Preis/Leistung past einfach.",
    "customer_name": "Bastian T. aus Herford",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Besonders Große Flasche gefällt mir gut. Vielen Dank.",
    "customer_name": "Lenny A. aus Dülmen",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Sauber gefällt mir gut. Vielen Dank.",
    "customer_name": "Maximilian Q. aus Ambreg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Sehr zu empfehlen.",
    "customer_name": "Christina I. aus Passau",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Monika P. aus Kassel",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Große Flasche gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sarah J. aus Plauen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Marlon T. aus Kaufbeuren",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Nie mehr ohne.",
    "customer_name": "Malte Z. aus Pforzheim",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Duft gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Sascha U. aus Rostock",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Meine Haut hat sich deutlich verbessert. 5 Sterne von mir.",
    "customer_name": "Kilian O. aus Lübeck",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Kann ich nur weiterempfehlen.",
    "customer_name": "Henry U. aus Brotterode",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Vielen Dank.",
    "customer_name": "Kerstin G. aus Detmold",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Liegt sehr gut in der Hand und ist nicht zu schwer. Klare 10/10.",
    "customer_name": "Finn F. aus Bad Oeynhausen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Noah C. aus Plauen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Daumen hoch!",
    "customer_name": "Anja H. aus Kleve",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Besser geht es nicht.",
    "customer_name": "Katharina M. aus Potsdam",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Kilian R. aus Heidenheim",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Hinterlässt ein frisches Gefühl. Kann ich nur weiterempfehlen.",
    "customer_name": "Fabian S. aus Bayreuth",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke. Danke!",
    "customer_name": "Max V. aus Jena",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Verarbeitung wirkt sehr stabil und langlebig. Klare 10/10.",
    "customer_name": "Claudia P. aus Dormagen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauber gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Noah X. aus Trier",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Kann ich nur weiterempfehlen.",
    "customer_name": "Jan V. aus Freising",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Paul P. aus Stralsund",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Hinterlässt ein frisches Gefühl. Sehr zu empfehlen.",
    "customer_name": "Milan F. aus Marl",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Sehr zu empfehlen.",
    "customer_name": "Maria Q. aus Krefeld",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Motor ist sehr leise, was ich angenehm finde. Bin rundum glücklich damit.",
    "customer_name": "David G. aus Fulda",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Petra A. aus Ravensburg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Meine Haut hat sich deutlich verbessert. Besser geht es nicht.",
    "customer_name": "Fabian O. aus Pforzheim",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. 5 Sterne von mir.",
    "customer_name": "Paul O. aus Reutlingen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Vielen Dank.",
    "customer_name": "Mats D. aus Peine",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Preis/Leistung past einfach.",
    "customer_name": "Tom K. aus Straubing",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Super Shop, super Ware.",
    "customer_name": "Luis F. aus Erlangen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Das Zubehör ist umfangreich und nützlich. Das Feature Sauber ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Super Shop, super Ware.",
    "customer_name": "Tom D. aus Nettetal",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Jonas M. aus Neuwied",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Top, weiter so.",
    "customer_name": "Tanja C. aus Marl",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. 5 Sterne von mir.",
    "customer_name": "Elias T. aus Hof",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Duft gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Samuel C. aus Brandenburg an der Havel",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Preis/Leistung past einfach.",
    "customer_name": "Susanne C. aus Hof",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Anton H. aus Stolberg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Tanja I. aus Speyer",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Petra W. aus Hamburg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Liegt sehr gut in der Hand und ist nicht zu schwer. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie U. aus Mainz",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. 5 Sterne von mir.",
    "customer_name": "Lisa N. aus Hildesheim",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Alles richtig gemacht.",
    "customer_name": "Adrian L. aus Meerbusch",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Luis K. aus Oldenburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Lohnt sich.",
    "customer_name": "Bastian V. aus Rostock",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Bin rundum glücklich damit.",
    "customer_name": "Lisa L. aus Erlangen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Kann ich nur weiterempfehlen.",
    "customer_name": "Birgit H. aus Oberhausen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Meine Haut hat sich deutlich verbessert. Klare 10/10.",
    "customer_name": "Simon U. aus Gütersloh",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Aufladen geht super schnell. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. 5 Sterne von mir.",
    "customer_name": "David G. aus Dresden",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Sauber gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Luca H. aus Kaufbeuren",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Kein Brennen oder Rötungen nach der Anwendung. Kann ich nur weiterempfehlen.",
    "customer_name": "Philipp H. aus Gronau",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Aufladen geht super schnell. Das Feature Sauber ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Bin rundum glücklich damit.",
    "customer_name": "Henry O. aus Lippstadt",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Kann ich nur weiterempfehlen.",
    "customer_name": "Anton J. aus Göttingen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Bastian D. aus Oberursel",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Duft gefällt mir gut. Vielen Dank.",
    "customer_name": "Kerstin Y. aus Eschweiler",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Alles richtig gemacht.",
    "customer_name": "Birgit N. aus Leonberg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sanft zur Haut. Top.",
    "customer_name": "Benedikt R. aus Minden",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Reinigung ist kinderleicht unter Wasser. Das Feature Schuppenfrei ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Arne H. aus Schwerin",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Lisa M. aus Lüneburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Luis C. aus Lörrach",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Bin rundum glücklich damit.",
    "customer_name": "Bastian X. aus Bad Homburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Bin rundum glücklich damit.",
    "customer_name": "Theo V. aus Leinfelden-Echterdingen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Die Klingen sind extrem scharf und gründlich. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. 5 Sterne von mir.",
    "customer_name": "Dominik L. aus Hamburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht gut. Bin zufrieden.",
    "customer_name": "Felix L. aus Dinslaken",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Besonders Große Flasche gefällt mir gut. Daumen hoch!",
    "customer_name": "Laura N. aus Bocholt",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Besonders Sauber gefällt mir gut. Daumen hoch!",
    "customer_name": "Sabine X. aus Ravensburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Besonders Sauber gefällt mir gut. Klare 10/10.",
    "customer_name": "Birgit L. aus Zwickau",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Vielen Dank.",
    "customer_name": "Claudia A. aus Greifswald",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Besonders Schuppenfrei gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dennis W. aus Neustadt an der Weinstraße",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. 5 Sterne von mir.",
    "customer_name": "Nicole J. aus Karlsruhe",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Jannik K. aus München",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Vielen Dank.",
    "customer_name": "Tom D. aus Ulm",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Duft hält lange an, ist aber nicht penetrant. Absolute Kaufempfehlung.",
    "customer_name": "Sabine W. aus Göttingen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Das Zubehör ist umfangreich und nützlich. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Kauf ich definitiv wieder.",
    "customer_name": "Emil U. aus Rosenheim",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kauf ich definitiv wieder.",
    "customer_name": "Liam D. aus Lahr",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Andrea X. aus Lüdenscheid",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Reinigung ist kinderleicht unter Wasser. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Besser geht es nicht.",
    "customer_name": "Anna A. aus Neustadt an der Weinstraße",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Sauber gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Monika H. aus Mönchengladbach",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Reinigt sehr gründlich, man fühlt sich wie neu. Top, weiter so.",
    "customer_name": "Johannes O. aus Recklinghausen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Verarbeitung wirkt sehr stabil und langlebig. Das Feature Schuppenfrei ist klasse. Haare fühlen sich kräftiger und gesünder an. Kauf ich definitiv wieder.",
    "customer_name": "Andrea Z. aus Nettetal",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Laura X. aus Witten",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar W. aus Sindelfingen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Aufladen geht super schnell. Das Feature Duft ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Bastian K. aus Neuss",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Sehr zu empfehlen.",
    "customer_name": "Luis E. aus Weinheim",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Nicole K. aus Bergkamen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Haare fühlen sich kräftiger und gesünder an. Werde dabei bleiben.",
    "customer_name": "Luis H. aus Bad Homburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Haut fühlt sich danach sehr weich und gepflegt an. Einfach klasse.",
    "customer_name": "Jonas F. aus Würzburg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Klassiker gefällt mir gut. Werde dabei bleiben.",
    "customer_name": "Florian Z. aus Fulda",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sauber gefällt mir gut. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Jannik Q. aus Garbsen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Besonders Klassiker gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Birgit K. aus Göppingen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Akku hält wirklich ewig, musste noch nicht laden. Super Shop, super Ware.",
    "customer_name": "Tom B. aus Schwerin",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Meine Haut hat sich deutlich verbessert. Einfach klasse.",
    "customer_name": "Kerstin G. aus Gummersbach",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Besonders Große Flasche gefällt mir gut. Lohnt sich.",
    "customer_name": "Monika K. aus Halle (Saale)",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Auch unter der Dusche problemlos nutzbar. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Nico T. aus Aachen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Alles richtig gemacht.",
    "customer_name": "Theo V. aus Bergkamen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Maximilian A. aus Langenhagen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Maximilian G. aus Hilden",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Duft gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Nadine M. aus Bad Homburg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Nie mehr ohne.",
    "customer_name": "Valentin R. aus Dülmen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Die Verarbeitung wirkt sehr stabil und langlebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Bastian O. aus Pinneberg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Bin rundum glücklich damit.",
    "customer_name": "Jannik S. aus Frankfurt (Oder)",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Kilian A. aus Berlin",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Besonders Schuppenfrei gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Matteo K. aus Oranienburg",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Die Reinigung ist kinderleicht unter Wasser. Super Shop, super Ware.",
    "customer_name": "Yannick O. aus Neustadt an der Weinstraße",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Duft gefällt mir gut. Kauf ich definitiv wieder.",
    "customer_name": "Nico O. aus Ratingen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Große Flasche gefällt mir gut. Daumen hoch!",
    "customer_name": "Sabine W. aus Iserlohn",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Meine Haut hat sich deutlich verbessert. Werde dabei bleiben.",
    "customer_name": "Leo N. aus Halle (Saale)",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Lenny C. aus Lingen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Lohnt sich.",
    "customer_name": "Birgit H. aus Alsdorf",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Besonders Sauber gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Sabine I. aus Schwäbisch Gmünd",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Super Shop, super Ware.",
    "customer_name": "Maria J. aus Fulda",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Haare fühlen sich kräftiger und gesünder an. Top, weiter so.",
    "customer_name": "Kerstin A. aus Chemnitz",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Besonders Duft gefällt mir gut. Preis/Leistung past einfach.",
    "customer_name": "Erik H. aus Weinheim",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Klassiker ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Top, weiter so.",
    "customer_name": "Katharina X. aus Dachau",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Lässt sich präzise einstellen für verschiedene Längen. Klare 10/10.",
    "customer_name": "Fabian Z. aus Castrop-Rauxel",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Besonders Sauber gefällt mir gut. Kann ich nur weiterempfehlen.",
    "customer_name": "Julia A. aus Velbert",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Klare 10/10.",
    "customer_name": "Henry T. aus Lippstadt",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Lohnt sich.",
    "customer_name": "Nico A. aus Zwickau",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Bastian D. aus Hamm",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Vielen Dank.",
    "customer_name": "Kilian J. aus Heidelberg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Benutze das Produkt jetzt seit einer Woche und bin begeistert. Die Klingen sind extrem scharf und gründlich. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Petra H. aus Jena",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Julian Q. aus Hürth",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Reinigt sehr gründlich, man fühlt sich wie neu. Kann ich nur weiterempfehlen.",
    "customer_name": "Bastian W. aus Eschweiler",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Aufladen geht super schnell. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. 5 Sterne von mir.",
    "customer_name": "Valentin D. aus Kempten",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Meine Haut hat sich deutlich verbessert. Top, weiter so.",
    "customer_name": "Leon Z. aus Stuttgart",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Auch unter der Dusche problemlos nutzbar. Das Feature Große Flasche ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Arne H. aus Memmingen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Kann ich nur weiterempfehlen.",
    "customer_name": "Justus W. aus Wolfsburg",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Das Zubehör ist umfangreich und nützlich. Das Feature Große Flasche ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Super Shop, super Ware.",
    "customer_name": "Kerstin C. aus Neuwied",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Preis/Leistung past einfach.",
    "customer_name": "Dominik U. aus Moers",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneidet gut. Danke!",
    "customer_name": "Moritz C. aus Alsdorf",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Besonders Klassiker gefällt mir gut. Klare 10/10.",
    "customer_name": "Sarah Q. aus Kaiserslautern",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Der Akku hält wirklich ewig, musste noch nicht laden. Vielen Dank.",
    "customer_name": "Ben T. aus Herzogenrath",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Andrea R. aus Wunstorf",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar J. aus Solingen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Die Verarbeitung wirkt sehr stabil und langlebig. Vielen Dank.",
    "customer_name": "Henry W. aus Wesel",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Der Akku hält wirklich ewig, musste noch nicht laden. Nie mehr ohne.",
    "customer_name": "Anton K. aus Wolfenbüttel",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Duft ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Oskar E. aus Dormagen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Florian T. aus Marburg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Motor ist sehr leise, was ich angenehm finde. Vielen Dank.",
    "customer_name": "Nicole C. aus Offenbach",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Das Zubehör ist umfangreich und nützlich. Vielen Dank.",
    "customer_name": "Johannes Y. aus Soest",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Alternative zu den teuren Marken. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Meine Haut hat sich deutlich verbessert. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Yannick H. aus Weinheim",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Klassiker ist klasse. Schäumt gut auf und ist sehr ergiebig. 5 Sterne von mir.",
    "customer_name": "Alexander D. aus Neumünster",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Absolute Kaufempfehlung.",
    "customer_name": "Tim K. aus Hamm",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Auch unter der Dusche problemlos nutzbar. Preis/Leistung past einfach.",
    "customer_name": "Nicole A. aus Albstadt",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Reinigt sehr gründlich, man fühlt sich wie neu. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Arne H. aus Magdeburg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Duft gefällt mir gut. Super Shop, super Ware.",
    "customer_name": "Luis O. aus Albstadt",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch, aber das Ergebnis überzeugt. Besonders Duft gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Marlon Z. aus Friedrichshafen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Die Reinigung ist kinderleicht unter Wasser. Top, weiter so.",
    "customer_name": "Mats E. aus Frechen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Duft ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kann ich nur weiterempfehlen.",
    "customer_name": "Timo T. aus Schweinfurt",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Mann ist sehr zufrieden damit. Aufladen geht super schnell. Das Feature Klassiker ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Dominik B. aus München",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hält lange. Danke!",
    "customer_name": "Yannick W. aus Friedrichshafen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Duft gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dominik K. aus Gummersbach",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Besonders Klassiker gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Anna S. aus Hagen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Besonders Große Flasche gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander G. aus Böblingen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Aufladen geht super schnell. Das Feature Große Flasche ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Einfach klasse.",
    "customer_name": "Nicole J. aus Koblenz",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Die Reinigung ist kinderleicht unter Wasser. Bin rundum glücklich damit.",
    "customer_name": "Lenny O. aus Berlin",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Anton X. aus Jena",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Das Zubehör ist umfangreich und nützlich. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Klare 10/10.",
    "customer_name": "Nadine S. aus Paderborn",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis unschlagbar. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Große Flasche ist klasse. Haare fühlen sich kräftiger und gesünder an. Einfach klasse.",
    "customer_name": "Finn C. aus Filderstadt",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Akku hält wirklich ewig, musste noch nicht laden. Lohnt sich.",
    "customer_name": "Erik M. aus Mannheim",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich ein Produkt, das hält was es verspricht. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Klassiker ist klasse. Meine Haut hat sich deutlich verbessert. Lohnt sich.",
    "customer_name": "Laura I. aus Bad Oeynhausen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Zieht schnell ein und fettet nicht. Top, weiter so.",
    "customer_name": "Jonas Q. aus Osnabrück",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Aufladen geht super schnell. Das Feature Schuppenfrei ist klasse. Der Duft hält lange an, ist aber nicht penetrant. Einfach klasse.",
    "customer_name": "Max W. aus Paderborn",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Zieht schnell ein und fettet nicht. Sehr zu empfehlen.",
    "customer_name": "Julia B. aus Hattingen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe lange nach so etwas gesucht und endlich gefunden. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Laura J. aus Köln",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität ist wie erwartet sehr hoch. Das Zubehör ist umfangreich und nützlich. Top, weiter so.",
    "customer_name": "Justus A. aus Brandenburg an der Havel",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr ergiebig. Top.",
    "customer_name": "Theo E. aus Bottrop",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Hinterlässt ein frisches Gefühl. Top, weiter so.",
    "customer_name": "Finn S. aus Ulm",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Schuppenfrei ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Preis/Leistung past einfach.",
    "customer_name": "Petra J. aus Bamberg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Auch unter der Dusche problemlos nutzbar. Das Feature Duft ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Maria Q. aus Koblenz",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wurde mir von einem Freund empfohlen. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Nie mehr ohne.",
    "customer_name": "Benedikt V. aus Wolfsburg",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk für meinen Partner. Die Reinigung ist kinderleicht unter Wasser. Sehr zu empfehlen.",
    "customer_name": "Liam D. aus Hamm",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super. Der Motor ist sehr leise, was ich angenehm finde. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Nie mehr ohne.",
    "customer_name": "Samuel Q. aus Wesel",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Riecht sehr angenehm und nicht zu aufdringlich. Die Haut fühlt sich danach sehr weich und gepflegt an. Ihr habt einen neuen Stammkunden.",
    "customer_name": "Philipp T. aus Hagen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Die Reinigung ist kinderleicht unter Wasser. Das Feature Klassiker ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Absolute Kaufempfehlung.",
    "customer_name": "Nico U. aus Herne",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Die Klingen sind extrem scharf und gründlich. Das Feature Klassiker ist klasse. Zieht schnell ein und fettet nicht. Preis/Leistung past einfach.",
    "customer_name": "Bastian N. aus Aalen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nutze es täglich und möchte es nicht mehr missen. Lässt sich präzise einstellen für verschiedene Längen. Werde dabei bleiben.",
    "customer_name": "Milan M. aus Wuppertal",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Sauber ist klasse. Spendet viel Feuchtigkeit, gerade jetzt im Winter. Kauf ich definitiv wieder.",
    "customer_name": "Lukas S. aus Heidenheim",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung ging super schnell, war am nächsten Tag da. Lässt sich präzise einstellen für verschiedene Längen. Das Feature Große Flasche ist klasse. Kein Brennen oder Rötungen nach der Anwendung. Besser geht es nicht.",
    "customer_name": "Erik Z. aus Neustadt an der Weinstraße",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Der Motor ist sehr leise, was ich angenehm finde. Werde dabei bleiben.",
    "customer_name": "Leon K. aus Ibbenbüren",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das ist jetzt schon meine zweite Bestellung. Besonders Duft gefällt mir gut. Nie mehr ohne.",
    "customer_name": "Christoph Q. aus Trier",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Die Reinigung ist kinderleicht unter Wasser. Das Feature Sauber ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Sabine T. aus Ratingen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es im Angebot gekauft und bin positiv überrascht. Auch unter der Dusche problemlos nutzbar. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Kauf ich definitiv wieder.",
    "customer_name": "Milan M. aus Oranienburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Große Flasche ist klasse. Die Haut fühlt sich danach sehr weich und gepflegt an. Absolute Kaufempfehlung.",
    "customer_name": "Samuel W. aus Freiburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich keine Hautirritationen mehr. Liegt sehr gut in der Hand und ist nicht zu schwer. Das Feature Sauber ist klasse. Schäumt gut auf und ist sehr ergiebig. Absolute Kaufempfehlung.",
    "customer_name": "Johannes X. aus Mainz",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die guten Bewertungen nur bestätigen. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Schäumt gut auf und ist sehr ergiebig. Werde dabei bleiben.",
    "customer_name": "Florian L. aus Nürnberg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Verpackung war sehr gut und sicher. Hinterlässt ein frisches Gefühl. Nie mehr ohne.",
    "customer_name": "Johannes V. aus Mannheim",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Fühlt sich sehr hochwertig an. Der Akku hält wirklich ewig, musste noch nicht laden. Das Feature Schuppenfrei ist klasse. Hinterlässt ein frisches Gefühl. Daumen hoch!",
    "customer_name": "Jonas R. aus Minden",
    "date": "2025-04-01"
  }
];