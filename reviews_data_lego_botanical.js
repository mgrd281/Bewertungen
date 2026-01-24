const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Philipp O. aus Cottbus",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Ben D. aus Ludwigshafen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Kevin C. aus Moers",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dominik K. aus Ludwigshafen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Leo O. aus Düsseldorf",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sarah W. aus Erfurt",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Nicole U. aus Bergisch Gladbach",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nico E. aus Kassel",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Monika P. aus Salzgitter",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Melanie E. aus Stuttgart",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Robin U. aus Saarbrücken",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Ben F. aus Ulm",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin P. aus Fürth",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Jan I. aus Hanau",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Robin F. aus Osnabrück",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sascha P. aus Münster",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Hannes X. aus Bremerhaven",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Monika S. aus Potsdam",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tim K. aus Augsburg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan U. aus Fürth",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Katharina M. aus Berlin",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Samuel J. aus Berlin",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Sascha H. aus Siegen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte I. aus Halle (Saale)",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Birgit F. aus Dresden",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Monika U. aus Dresden",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Tom D. aus Ulm",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tobias B. aus Oberhausen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kilian C. aus Ulm",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kerstin Y. aus Würzburg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Adrian Q. aus Mannheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz U. aus Dortmund",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Melanie J. aus Hamm",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Dominik N. aus Karlsruhe",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Tom R. aus Augsburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Claudia R. aus Gütersloh",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian C. aus Lübeck",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Max S. aus Wuppertal",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Simon J. aus Oberhausen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas M. aus Heilbronn",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anja Z. aus Remscheid",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Moritz X. aus Koblenz",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nicole U. aus Düsseldorf",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Luca J. aus Münster",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Liam T. aus Iserlohn",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Julian W. aus Koblenz",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Petra T. aus Krefeld",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne C. aus Ludwigsburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo P. aus Frankfurt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Nicole V. aus Halle (Saale)",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Mats A. aus Hildesheim",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Tanja D. aus Mannheim",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christoph D. aus Esslingen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam O. aus Salzgitter",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Milan J. aus Regensburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Dennis X. aus Leverkusen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Henry Y. aus Salzgitter",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Matteo O. aus Magdeburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Melanie G. aus Iserlohn",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Samuel O. aus Gera",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kilian M. aus Neuss",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Moritz D. aus Magdeburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Julian Y. aus Salzgitter",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Felix Y. aus Hildesheim",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan C. aus Reutlingen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Niklas Q. aus Düsseldorf",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja L. aus Ingolstadt",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Monika D. aus Kaiserslautern",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico B. aus Mönchengladbach",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Adrian P. aus Berlin",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Benedikt K. aus Bochum",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sabine A. aus Recklinghausen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Niklas C. aus Ingolstadt",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Susanne U. aus Düsseldorf",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Monika I. aus Leverkusen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tobias R. aus Bergisch Gladbach",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon Z. aus Leipzig",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Simon G. aus Hamm",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Felix M. aus Hannover",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Kerstin T. aus Bielefeld",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Top Qualität.",
    "customer_name": "Timo Y. aus Bremerhaven",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Philipp E. aus Hamm",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Elias P. aus Regensburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Noah X. aus Erfurt",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Moritz U. aus Darmstadt",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Top Qualität.",
    "customer_name": "Matteo H. aus Trier",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Top Qualität.",
    "customer_name": "Andrea W. aus Fürth",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Samuel A. aus Bochum",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Tim U. aus Oberhausen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Leo J. aus Neuss",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dennis B. aus Hildesheim",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tom H. aus Ludwigshafen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Johannes S. aus Erlangen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Benedikt L. aus Dortmund",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Theo N. aus Karlsruhe",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Katharina S. aus Heilbronn",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon R. aus Moers",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leon W. aus Magdeburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Leo U. aus Neuss",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tanja Q. aus Bochum",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Emil K. aus Bielefeld",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Benedikt Q. aus Iserlohn",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Julian Z. aus Bremerhaven",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dennis A. aus Duisburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Benedikt O. aus München",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Niklas L. aus Karlsruhe",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Hannes N. aus Solingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian A. aus Münster",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus W. aus Magdeburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Birgit J. aus Mannheim",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Claudia S. aus Chemnitz",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julian N. aus Salzgitter",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sabine T. aus Oberhausen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Liam V. aus Halle (Saale)",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Elias P. aus Trier",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Leo Z. aus Dresden",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick D. aus Reutlingen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Ben I. aus Erfurt",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Adrian Y. aus Ulm",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Justus Y. aus Hamm",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Hannes T. aus Gera",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Leon D. aus Mülheim an der Ruhr",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Maximilian G. aus Hagen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Milan N. aus Bremen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Emil Y. aus Fürth",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Dennis J. aus Kiel",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Benedikt H. aus Cottbus",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn G. aus Braunschweig",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Erik G. aus Bremen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anna K. aus Darmstadt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tim Z. aus Bremen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Justus P. aus Gera",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Yannick O. aus Kiel",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Yannick T. aus Kiel",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Luca Q. aus Chemnitz",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Stefanie G. aus Halle (Saale)",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Henry E. aus Heidelberg",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Ben S. aus Bremerhaven",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca Z. aus Neuss",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leo K. aus Aachen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Lisa Z. aus Gera",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Jan I. aus Magdeburg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Niklas J. aus Kassel",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats I. aus Recklinghausen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Kevin P. aus Frankfurt",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Florian F. aus Ingolstadt",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo U. aus Jena",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lukas O. aus Cottbus",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit R. aus Regensburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander R. aus Cottbus",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Nicole V. aus Offenbach",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Arne O. aus Münster",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nico K. aus Fürth",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dominik M. aus Göttingen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz F. aus Berlin",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sascha S. aus Kassel",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Max R. aus Frankfurt",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Erik J. aus Salzgitter",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Birgit C. aus Berlin",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Felix M. aus Gelsenkirchen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Fabian W. aus Hildesheim",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Samuel D. aus Bonn",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Luca W. aus Wolfsburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Luca C. aus Ludwigshafen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julia Z. aus Potsdam",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim M. aus Krefeld",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "David V. aus Jena",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Monika K. aus Gütersloh",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick R. aus Cottbus",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Julia O. aus Wuppertal",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats K. aus Bonn",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julian J. aus Schwerin",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Florian B. aus Koblenz",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kevin Q. aus Kassel",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Sabine V. aus Siegen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Fabian E. aus Darmstadt",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dominik A. aus Lübeck",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nico A. aus Pforzheim",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leo L. aus Halle (Saale)",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anja X. aus Iserlohn",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jonas P. aus Aachen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nicole P. aus Rostock",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Philipp F. aus Hanau",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Bastian Z. aus Chemnitz",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Julia M. aus Ludwigsburg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nadine L. aus Moers",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes W. aus Witten",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maximilian L. aus Moers",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "David Z. aus Erfurt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jan V. aus Wolfsburg",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel S. aus Gera",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jannik L. aus Siegen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Erik S. aus Essen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne Q. aus Köln",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Malte V. aus Stuttgart",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luca E. aus München",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Simon R. aus Bochum",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne L. aus Hamburg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin Y. aus Hildesheim",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Stefanie O. aus Oberhausen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo N. aus Bottrop",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra R. aus Schwerin",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Yannick K. aus Krefeld",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Benedikt A. aus Gera",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz T. aus Münster",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Monika X. aus Hanau",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maximilian D. aus Krefeld",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Finn O. aus Trier",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Ben P. aus Frankfurt",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sascha S. aus Leverkusen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Johannes U. aus Dortmund",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja K. aus Potsdam",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Finn K. aus Magdeburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander A. aus Dresden",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo Y. aus Nürnberg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Benedikt O. aus Fürth",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja E. aus Chemnitz",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Mats P. aus Offenbach",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Arne F. aus Wiesbaden",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Elias P. aus Braunschweig",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Vincent Y. aus Recklinghausen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Luis N. aus Mülheim an der Ruhr",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Milan S. aus Reutlingen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lukas O. aus Kassel",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Leo W. aus Aachen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julia X. aus Würzburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Moritz D. aus Hannover",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Luca Y. aus Dortmund",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil J. aus Nürnberg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Kerstin S. aus Dresden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jan W. aus Gütersloh",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Kevin U. aus Osnabrück",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis Q. aus Hannover",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julian G. aus Ulm",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christoph K. aus Dortmund",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Luca L. aus Duisburg",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sandra J. aus Bremen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Simon V. aus Ludwigshafen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Luis C. aus Rostock",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tobias H. aus Pforzheim",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anton O. aus Kaiserslautern",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Bastian X. aus Hagen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo J. aus Recklinghausen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Tom C. aus Frankfurt",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia U. aus Saarbrücken",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maximilian C. aus Bergisch Gladbach",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tim D. aus Ludwigshafen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tobias S. aus Hannover",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Oskar F. aus Neuss",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lenny O. aus Koblenz",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kilian X. aus Essen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Nicole A. aus Rostock",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christina W. aus Karlsruhe",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Alexander L. aus Dresden",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Susanne L. aus Köln",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Vincent C. aus Halle (Saale)",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Arne L. aus Frankfurt",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Dennis R. aus Oberhausen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Luca S. aus Mainz",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kerstin C. aus Aachen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura F. aus Berlin",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sascha H. aus Witten",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick K. aus Rostock",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Timo M. aus Chemnitz",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Malte I. aus Iserlohn",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Tobias Y. aus Salzgitter",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Justus H. aus Göttingen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Christoph Y. aus Düsseldorf",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne Z. aus Ludwigshafen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Mats L. aus Esslingen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo M. aus Heilbronn",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton J. aus Magdeburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Simon X. aus Rostock",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Felix P. aus Potsdam",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Elias B. aus Berlin",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Ben A. aus Chemnitz",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tom Y. aus Braunschweig",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes T. aus Ulm",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil D. aus Bonn",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Hannes T. aus Neuss",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Petra G. aus Wolfsburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Florian E. aus Stuttgart",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julia M. aus Herne",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maria Z. aus Düsseldorf",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis M. aus Hamm",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Noah Z. aus Lübeck",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Christina Q. aus Köln",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn P. aus Stuttgart",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nico Q. aus Solingen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Birgit I. aus Heidelberg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Ben V. aus Krefeld",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte V. aus Erlangen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Robin I. aus Jena",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Dominik V. aus Bielefeld",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Justus G. aus Oberhausen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Ben N. aus Gelsenkirchen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lisa Q. aus Paderborn",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Adrian C. aus Nürnberg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "David Z. aus Gera",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Leon W. aus Wolfsburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria W. aus Würzburg",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jonas V. aus Ludwigshafen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Top Qualität.",
    "customer_name": "Bastian E. aus Leipzig",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Fabian R. aus Siegen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lenny S. aus Osnabrück",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Emil S. aus Halle (Saale)",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Bastian E. aus Frankfurt",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nico L. aus Koblenz",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Melanie C. aus Solingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Fabian O. aus Hamburg",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Noah C. aus Erfurt",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Christoph V. aus Essen",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Samuel S. aus Mannheim",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maximilian H. aus Salzgitter",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Julia Y. aus Aachen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Yannick I. aus Jena",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Philipp D. aus Heilbronn",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian Q. aus Karlsruhe",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon J. aus Kassel",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Monika X. aus Münster",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Fabian A. aus Hannover",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Paul B. aus Kaiserslautern",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Nadine T. aus Recklinghausen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Bastian H. aus Hagen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Monika Q. aus Würzburg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Erik K. aus Chemnitz",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Philipp U. aus Hildesheim",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tim Z. aus Göttingen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dennis U. aus Chemnitz",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kilian I. aus Solingen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Laura G. aus Köln",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Melanie W. aus Duisburg",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Birgit S. aus Iserlohn",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Maria X. aus Würzburg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Johannes G. aus Magdeburg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Bastian X. aus Mönchengladbach",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar F. aus Paderborn",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Valentin F. aus Bremen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Hannes E. aus Schwerin",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julian R. aus Bonn",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Katharina O. aus Kaiserslautern",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Emil N. aus Augsburg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Henry E. aus Magdeburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jonas Y. aus Saarbrücken",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Simon W. aus Reutlingen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Claudia J. aus Essen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Liam N. aus Köln",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico V. aus Jena",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne G. aus Hamburg",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jannik T. aus Essen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Adrian A. aus Hanau",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lenny V. aus Ulm",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Valentin Q. aus Siegen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Philipp G. aus Iserlohn",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Susanne O. aus Osnabrück",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Malte S. aus Mülheim an der Ruhr",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Leon W. aus Mülheim an der Ruhr",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Max S. aus Dresden",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Birgit C. aus Berlin",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kevin L. aus Bremen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Anton O. aus Bochum",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Laura T. aus Neuss",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Valentin Z. aus Schwerin",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton P. aus Hanau",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Yannick A. aus Pforzheim",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christina Z. aus Reutlingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo T. aus Oberhausen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sabine D. aus Hagen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte B. aus Wolfsburg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo M. aus Koblenz",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra R. aus Karlsruhe",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Marlon B. aus Wiesbaden",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lenny D. aus Leverkusen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Melanie E. aus Bremerhaven",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lisa F. aus Hannover",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Adrian Q. aus Moers",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Florian J. aus Ludwigsburg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Dennis K. aus Ludwigsburg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit N. aus Leipzig",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Felix F. aus Köln",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Sandra X. aus Bielefeld",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nico L. aus Mainz",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra N. aus Darmstadt",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Finn J. aus Saarbrücken",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Anton Q. aus Leverkusen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Claudia G. aus Rostock",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Finn T. aus München",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Leo L. aus Gelsenkirchen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Marlon U. aus Halle (Saale)",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dennis I. aus Offenbach",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lisa J. aus Schwerin",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Matteo Y. aus Solingen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Paul D. aus Kassel",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julia M. aus Ulm",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Johannes P. aus Erfurt",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Julian P. aus Würzburg",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo J. aus Hannover",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan P. aus Göttingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Theo R. aus Schwerin",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Katharina I. aus Bergisch Gladbach",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Yannick X. aus Reutlingen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Petra V. aus Göttingen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry T. aus Hanau",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin L. aus Halle (Saale)",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Petra A. aus Dortmund",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Hannes S. aus Paderborn",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jannik N. aus Halle (Saale)",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Dennis U. aus Aachen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Noah W. aus Pforzheim",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Jan S. aus Hannover",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sascha C. aus Kassel",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin K. aus Köln",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tim W. aus Karlsruhe",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas C. aus Paderborn",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anja U. aus Hannover",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Florian Q. aus Ulm",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian P. aus Würzburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julia M. aus Münster",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Julia G. aus Aachen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Finn J. aus Ludwigsburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Tanja S. aus Offenbach",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus J. aus Hamburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Sandra I. aus Düsseldorf",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Jonas M. aus Würzburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne Y. aus Oldenburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Arne L. aus Gütersloh",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Yannick C. aus Halle (Saale)",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus V. aus Kaiserslautern",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Malte D. aus Krefeld",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kilian T. aus Essen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Maximilian F. aus Recklinghausen",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Liam K. aus Bergisch Gladbach",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo J. aus Stuttgart",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julia W. aus Krefeld",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Fabian W. aus Oldenburg",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil D. aus Nürnberg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Theo L. aus Saarbrücken",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Andrea Q. aus Braunschweig",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leo P. aus Fürth",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja E. aus Göttingen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne L. aus Gütersloh",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Anton H. aus Saarbrücken",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Yannick X. aus Nürnberg",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Nadine F. aus Osnabrück",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "David M. aus Dresden",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Felix F. aus Freiburg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Lenny F. aus München",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Robin H. aus Heidelberg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Leo Y. aus Freiburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia X. aus Osnabrück",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Adrian E. aus Neuss",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Milan I. aus Oberhausen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Henry P. aus Bonn",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon U. aus Halle (Saale)",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Maximilian L. aus Krefeld",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "David F. aus Freiburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo J. aus Bielefeld",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Fabian H. aus Rostock",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Andrea Z. aus Hildesheim",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Anna O. aus Paderborn",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Adrian K. aus Bremen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca W. aus Remscheid",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Benedikt H. aus Göttingen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik B. aus Dresden",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Justus N. aus Chemnitz",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Yannick M. aus Gera",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Niklas D. aus Wuppertal",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Birgit Q. aus Mülheim an der Ruhr",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Jonas Q. aus Jena",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Marlon U. aus Hamm",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leon J. aus Neuss",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lukas F. aus Saarbrücken",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel A. aus Düsseldorf",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Katharina R. aus Mülheim an der Ruhr",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nadine A. aus Esslingen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Mats Y. aus Münster",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Arne C. aus Hamm",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Oskar D. aus Rostock",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jonas I. aus Lübeck",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Julian R. aus München",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna S. aus Mülheim an der Ruhr",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah B. aus Münster",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sandra Q. aus Chemnitz",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dennis A. aus Siegen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Benedikt X. aus Ingolstadt",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tobias C. aus Bielefeld",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Simon E. aus Augsburg",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Erik D. aus Cottbus",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Liam W. aus Jena",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Hannes T. aus Münster",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Simon S. aus Freiburg",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tom R. aus Potsdam",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Matteo O. aus Hagen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin O. aus Erfurt",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Max R. aus Osnabrück",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Hannes M. aus Paderborn",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra K. aus Stuttgart",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Tim U. aus Göttingen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Oskar P. aus Bremerhaven",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne B. aus Pforzheim",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Finn Y. aus Hanau",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Elias G. aus Krefeld",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja R. aus Münster",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Malte Z. aus Berlin",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Luis F. aus Ingolstadt",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Vincent T. aus Hagen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Melanie N. aus Freiburg",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Dominik G. aus Kaiserslautern",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Emil W. aus Hamburg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Hannes G. aus Nürnberg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Anton N. aus Bonn",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Florian S. aus Ludwigsburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Tobias X. aus Bremerhaven",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Claudia O. aus Erfurt",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Valentin V. aus Göttingen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Johannes R. aus München",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nicole Q. aus Rostock",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jan H. aus Mönchengladbach",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Luca W. aus Osnabrück",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo P. aus Paderborn",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Mats S. aus Leipzig",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Maximilian O. aus Düsseldorf",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Maximilian A. aus Nürnberg",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Katharina N. aus Hagen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sandra H. aus Cottbus",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sandra N. aus Nürnberg",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil C. aus Leverkusen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Elias O. aus Ulm",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Theo P. aus Rostock",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra C. aus Wolfsburg",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Liam J. aus Essen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tim E. aus Wuppertal",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jan B. aus Essen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Yannick G. aus Potsdam",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tanja R. aus Köln",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Fabian G. aus Bielefeld",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luca W. aus Aachen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Sarah P. aus Gütersloh",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Katharina B. aus Fürth",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jonas E. aus Heidelberg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Robin G. aus Hamm",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Tim B. aus Hannover",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Emil P. aus Neuss",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maria Q. aus Hamm",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Henry P. aus Neuss",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Ben H. aus Heidelberg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Adrian T. aus Freiburg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jonas T. aus Essen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Stefanie Z. aus Duisburg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tom G. aus Remscheid",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Luis W. aus Pforzheim",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Oskar N. aus Wuppertal",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Susanne Z. aus Cottbus",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Elias I. aus Wiesbaden",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leo C. aus Hannover",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Claudia E. aus Remscheid",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine U. aus Hildesheim",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Laura R. aus Ludwigshafen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jan T. aus Esslingen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julia Z. aus Kaiserslautern",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Simon B. aus Trier",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Valentin B. aus Kiel",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Hannes F. aus Darmstadt",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Finn P. aus Hamburg",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Sascha J. aus Mönchengladbach",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Erik E. aus Witten",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny W. aus Chemnitz",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam E. aus Würzburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Benedikt J. aus Ludwigsburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Paul D. aus Moers",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Fabian S. aus Osnabrück",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Katharina Y. aus Aachen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz K. aus Augsburg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Alexander S. aus Trier",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Luca Y. aus Ulm",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Arne S. aus Berlin",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Arne V. aus Düsseldorf",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tim U. aus Köln",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Robin M. aus Wolfsburg",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jonas A. aus Augsburg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Theo V. aus Heidelberg",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja U. aus Magdeburg",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar J. aus Bremen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes Y. aus Hannover",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Claudia Z. aus Herne",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Erik G. aus Heidelberg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Max G. aus Leipzig",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Luis B. aus Jena",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Ben U. aus Iserlohn",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Kevin P. aus Hildesheim",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Sascha M. aus Schwerin",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Anja J. aus Reutlingen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine Z. aus Hagen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Lenny T. aus Kaiserslautern",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Theo J. aus Nürnberg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Petra Q. aus Cottbus",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Susanne I. aus Jena",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Bastian M. aus Essen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Paul P. aus Hagen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jonas Q. aus Witten",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Christoph M. aus Bremen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne F. aus Ludwigshafen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine R. aus Münster",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Valentin D. aus Ingolstadt",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Malte Z. aus Düsseldorf",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca O. aus Wolfsburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sabine S. aus Essen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton N. aus Göttingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn V. aus Hamm",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Theo W. aus Ludwigshafen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Max C. aus Dresden",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Kilian K. aus Leverkusen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Laura S. aus Nürnberg",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Claudia R. aus Recklinghausen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Claudia Z. aus Lübeck",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Philipp G. aus Esslingen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Florian I. aus Hildesheim",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kerstin W. aus Bonn",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Malte U. aus Salzgitter",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Felix P. aus Leipzig",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Noah M. aus Salzgitter",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Max U. aus Pforzheim",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo A. aus Saarbrücken",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Tim G. aus Augsburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Milan V. aus Hildesheim",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia B. aus Koblenz",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Henry B. aus Köln",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian K. aus Moers",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia Z. aus Wolfsburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julia D. aus Mülheim an der Ruhr",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kerstin R. aus Paderborn",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Claudia M. aus Fürth",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Elias Y. aus Dresden",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maria Z. aus Heilbronn",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leon F. aus Karlsruhe",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "David K. aus Moers",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Hannes P. aus Solingen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "David K. aus Ulm",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Milan N. aus Ludwigsburg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Alexander P. aus Iserlohn",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Noah M. aus Neuss",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Emil M. aus Magdeburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Bastian B. aus Kiel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Mats Q. aus Würzburg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura J. aus Gütersloh",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lukas K. aus Nürnberg",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan B. aus Wuppertal",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Milan U. aus Berlin",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christoph E. aus Duisburg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sarah Y. aus Augsburg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Petra H. aus Stuttgart",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry Z. aus Rostock",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sandra J. aus Bonn",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Max C. aus Remscheid",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Maximilian Y. aus Hamm",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Katharina F. aus Bremen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Julia X. aus Saarbrücken",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Nicole J. aus Wiesbaden",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Liam V. aus Erfurt",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Andrea H. aus Mainz",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Finn Y. aus Siegen",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kerstin U. aus Wuppertal",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel C. aus Mainz",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sandra A. aus Fürth",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats Z. aus Oberhausen",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Mats H. aus Mannheim",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Alexander G. aus Hamm",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Marlon E. aus Bottrop",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Katharina L. aus Kassel",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nicole C. aus Wuppertal",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kilian C. aus Freiburg",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik L. aus Potsdam",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Felix K. aus Jena",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Felix H. aus Braunschweig",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sarah S. aus Mannheim",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Erik M. aus Ulm",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Philipp Y. aus Nürnberg",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Maria R. aus Hanau",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Oskar M. aus Bochum",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Kevin P. aus Neuss",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne.",
    "customer_name": "Jannik D. aus Oldenburg",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Julia P. aus Ludwigsburg",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Benedikt R. aus Wolfsburg",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo U. aus Ludwigsburg",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Für Erwachsene ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tom T. aus Stuttgart",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Alexander G. aus Ludwigsburg",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Jannik U. aus Salzgitter",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nadine Q. aus Bielefeld",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sascha I. aus Gelsenkirchen",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Erik G. aus Mülheim an der Ruhr",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Max D. aus Mönchengladbach",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julia D. aus Köln",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Jonas F. aus Münster",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Laura U. aus Stuttgart",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kilian R. aus Mannheim",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Luis P. aus Solingen",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Laura O. aus Wolfsburg",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Valentin V. aus Gera",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Top Qualität.",
    "customer_name": "Sabine U. aus Göttingen",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne.",
    "customer_name": "Leon L. aus Reutlingen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Tanja T. aus Bergisch Gladbach",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander L. aus Bremen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Benedikt W. aus Saarbrücken",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jonas L. aus Darmstadt",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Elias J. aus Leipzig",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Susanne B. aus Wolfsburg",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christina P. aus Heilbronn",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Tolle Farben ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis Z. aus Recklinghausen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz N. aus Duisburg",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Elias Z. aus Dresden",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Niklas Q. aus Dortmund",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Max F. aus Herne",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jannik T. aus Koblenz",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Philipp E. aus Hamburg",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Elias O. aus Schwerin",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christina L. aus Ludwigsburg",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Moritz Q. aus Oberhausen",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Mats X. aus Düsseldorf",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kevin G. aus Osnabrück",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leon M. aus Bremen",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo F. aus Wolfsburg",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Fabian K. aus Bremen",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Susanne P. aus Leipzig",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Top Qualität.",
    "customer_name": "Johannes T. aus Bottrop",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Alexander U. aus Solingen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Alexander W. aus Würzburg",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Bastian I. aus Jena",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Julian Z. aus Ludwigshafen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anja Q. aus Gütersloh",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Laura K. aus Osnabrück",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tobias D. aus Ludwigsburg",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "David Y. aus Essen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Pflanzen ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Top Qualität.",
    "customer_name": "Alexander R. aus Rostock",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats O. aus Potsdam",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Hannes V. aus Frankfurt",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Arne Q. aus Moers",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Melanie I. aus Fürth",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Entspannend ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander L. aus Darmstadt",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam D. aus Bremerhaven",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja Q. aus Potsdam",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Claudia G. aus Potsdam",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nadine T. aus Karlsruhe",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Petra X. aus Heilbronn",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit E. aus Düsseldorf",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Timo E. aus Braunschweig",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Robin F. aus Potsdam",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis Z. aus Wiesbaden",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Anna W. aus Ingolstadt",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Bastian H. aus Oldenburg",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Sarah A. aus Iserlohn",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kilian L. aus Fürth",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian U. aus Mönchengladbach",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis I. aus Heidelberg",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin Y. aus Hannover",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julian R. aus Kassel",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christoph F. aus Paderborn",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis A. aus Leverkusen",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Arne S. aus Hamburg",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Luis P. aus Oberhausen",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Entspannend gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Felix O. aus Osnabrück",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Entspannend ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Hannes G. aus Kiel",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Johannes C. aus Mannheim",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Top Qualität.",
    "customer_name": "Susanne D. aus Pforzheim",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Sabine R. aus Schwerin",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Lukas V. aus Esslingen",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Ben I. aus Mainz",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sabine K. aus Leipzig",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne.",
    "customer_name": "Nadine U. aus Bonn",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Lukas C. aus Bielefeld",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Benedikt F. aus Ludwigshafen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Adrian A. aus Bielefeld",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. 5 Sterne.",
    "customer_name": "Christoph C. aus Ludwigsburg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Birgit V. aus Regensburg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Lukas G. aus Saarbrücken",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon G. aus Potsdam",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico D. aus Nürnberg",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Für Erwachsene ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anja Q. aus Kiel",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Entspannend ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Stefanie Z. aus Hamburg",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Benedikt X. aus Frankfurt",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativ ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Ben X. aus Bonn",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Tolle Farben ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christoph A. aus Aachen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Malte M. aus Salzgitter",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nico D. aus Chemnitz",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Luca V. aus Karlsruhe",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Birgit B. aus Siegen",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Florian Z. aus Trier",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jan Q. aus Leverkusen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Tolle Farben ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nico S. aus Oldenburg",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "David J. aus Kaiserslautern",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Bastian P. aus Lübeck",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. 5 Sterne.",
    "customer_name": "Samuel M. aus Berlin",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Felix B. aus Hamburg",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Benedikt S. aus Recklinghausen",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Claudia P. aus Offenbach",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Ben M. aus Krefeld",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Pflanzen ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Matteo Y. aus Paderborn",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Milan S. aus Düsseldorf",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Paul R. aus Wuppertal",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Kreativ gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leon N. aus Berlin",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jannik U. aus Chemnitz",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Nicole N. aus Mannheim",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Top Qualität.",
    "customer_name": "Matteo G. aus Bonn",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Philipp F. aus Paderborn",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Sieht echt aus ist super umgesetzt. Besonders Für Erwachsene gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja W. aus Lübeck",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Tolle Farben ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian F. aus Wuppertal",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Für Erwachsene ist super umgesetzt. Besonders Entspannend gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sascha W. aus Magdeburg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Für Erwachsene ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julian Q. aus Kaiserslautern",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nicole M. aus Neuss",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kilian L. aus Remscheid",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Stefanie M. aus Neuss",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Schöner Hingucker ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam O. aus Rostock",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Luca S. aus Braunschweig",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick Z. aus Karlsruhe",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Pflanzen ist super umgesetzt. Besonders Kreativ gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Claudia V. aus Bottrop",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Sieht echt aus ist super umgesetzt. Besonders Kreativ gefällt mir gut. 5 Sterne.",
    "customer_name": "Jannik R. aus Göttingen",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Bastian Z. aus Magdeburg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Sandra U. aus Bielefeld",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativ ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo E. aus Leipzig",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Für Erwachsene ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Kevin B. aus Iserlohn",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Birgit B. aus Gera",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativ ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Top Qualität.",
    "customer_name": "Felix S. aus Pforzheim",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Paul H. aus Mainz",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Schöner Hingucker ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina J. aus Mannheim",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Wunderschöne Deko ist super umgesetzt. Besonders Pflanzen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sascha B. aus Darmstadt",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Wunderschöne Deko ist super umgesetzt. Besonders Sieht echt aus gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Marlon M. aus Witten",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativ ist super umgesetzt. Besonders Kreativ gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Oskar S. aus Köln",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Tolle Farben ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Top Qualität.",
    "customer_name": "Christina H. aus Göttingen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Sieht echt aus ist super umgesetzt. Besonders Entspannend gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Monika B. aus Braunschweig",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. 5 Sterne.",
    "customer_name": "Noah C. aus Siegen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Alexander W. aus Wiesbaden",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Pflanzen ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon A. aus Krefeld",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Wunderschöne Deko ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja C. aus Neuss",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Sieht echt aus ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca S. aus Kiel",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Wunderschöne Deko ist super umgesetzt. Besonders Entspannend gefällt mir gut. Top Qualität.",
    "customer_name": "Arne Q. aus München",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Pflanzen ist super umgesetzt. Besonders Schöner Hingucker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan U. aus Bochum",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Schöner Hingucker ist super umgesetzt. Besonders Entspannend gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lukas E. aus Bochum",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativ ist super umgesetzt. Besonders Entspannend gefällt mir gut. 5 Sterne.",
    "customer_name": "Maria H. aus Hanau",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativ ist super umgesetzt. Besonders Wunderschöne Deko gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Milan C. aus Recklinghausen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Entspannend ist super umgesetzt. Besonders Tolle Farben gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Alexander G. aus Leverkusen",
    "date": "2025-01-01"
  }
];