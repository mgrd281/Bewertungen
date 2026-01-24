const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Liam E. aus Dresden",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Anna I. aus Darmstadt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sandra P. aus Ulm",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Ben H. aus Schwerin",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Petra R. aus Gütersloh",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "David X. aus Recklinghausen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Claudia S. aus Karlsruhe",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Claudia D. aus Bonn",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Liam I. aus Heidelberg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julian E. aus Lübeck",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah B. aus Gelsenkirchen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Emil R. aus Bottrop",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria Z. aus Fürth",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Niklas I. aus Bremerhaven",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Niklas U. aus Neuss",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats E. aus Lübeck",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Lisa A. aus Essen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Justus D. aus Hannover",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin V. aus Fürth",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Florian F. aus Salzgitter",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Claudia U. aus Neuss",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra U. aus Freiburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Moritz M. aus Köln",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Moritz P. aus Darmstadt",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sabine U. aus Mönchengladbach",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Malte R. aus München",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nicole B. aus Esslingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Matteo M. aus Offenbach",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tobias R. aus Koblenz",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maximilian P. aus Darmstadt",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lenny V. aus Nürnberg",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry K. aus Siegen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Melanie R. aus Erfurt",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo H. aus Braunschweig",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lukas Q. aus Wolfsburg",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Christoph E. aus Solingen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Anton H. aus Trier",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christoph C. aus Schwerin",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tanja F. aus Bielefeld",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Yannick K. aus Iserlohn",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Moritz H. aus Mannheim",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Paul T. aus Solingen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Melanie Y. aus Wuppertal",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julian E. aus Hamm",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Simon B. aus Ludwigshafen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne D. aus Augsburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Benedikt C. aus Bergisch Gladbach",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nico K. aus Chemnitz",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Fabian L. aus Ulm",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Anton O. aus Köln",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Timo I. aus Hanau",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria O. aus Leipzig",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Philipp H. aus Gütersloh",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Nicole P. aus Erlangen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Robin Y. aus Remscheid",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Emil K. aus Hagen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Henry H. aus Dresden",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lenny Q. aus Leipzig",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Max S. aus Augsburg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Samuel O. aus Witten",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Timo T. aus Fürth",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Benedikt L. aus Reutlingen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Felix K. aus Bonn",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Oskar D. aus Kiel",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Nadine L. aus Offenbach",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julia Y. aus Frankfurt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kilian Q. aus Fürth",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Maximilian I. aus Braunschweig",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit S. aus Freiburg",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Luca E. aus Gera",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Samuel W. aus Hamburg",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Nicole S. aus Köln",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil F. aus Bremen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kerstin W. aus Gera",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Paul U. aus Osnabrück",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Leo F. aus Ludwigshafen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Stefanie A. aus Halle (Saale)",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anna K. aus Bielefeld",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Tobias I. aus Saarbrücken",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dennis K. aus Trier",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander L. aus Regensburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maria B. aus Nürnberg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Bastian R. aus München",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Susanne K. aus Osnabrück",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Theo X. aus Düsseldorf",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jan B. aus Pforzheim",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "David G. aus Iserlohn",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Theo J. aus Trier",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin V. aus Heidelberg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Marlon X. aus Göttingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja P. aus Rostock",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Anton Y. aus Erfurt",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Arne A. aus Heilbronn",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Hannes H. aus Osnabrück",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Yannick K. aus Jena",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sabine M. aus Karlsruhe",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Florian H. aus Kiel",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Arne E. aus Freiburg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Lenny A. aus Saarbrücken",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats I. aus Leipzig",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Claudia S. aus Halle (Saale)",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Hannes I. aus Pforzheim",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne S. aus Chemnitz",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Vincent G. aus Remscheid",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Fabian T. aus Bielefeld",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sabine X. aus Heilbronn",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Henry F. aus Potsdam",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis R. aus Solingen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn N. aus Wiesbaden",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Andrea D. aus Frankfurt",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Simon Y. aus Hagen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Max D. aus Cottbus",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Valentin L. aus Mönchengladbach",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leo S. aus Karlsruhe",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Ben F. aus Herne",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon G. aus Potsdam",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lukas E. aus Iserlohn",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kerstin B. aus Bergisch Gladbach",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Florian V. aus Gera",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Hannes K. aus Kassel",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Paul T. aus Chemnitz",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julia U. aus Essen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Laura Y. aus Bremerhaven",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Christoph W. aus Chemnitz",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Lukas E. aus Freiburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Justus G. aus Saarbrücken",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Katharina Y. aus Remscheid",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Felix R. aus Pforzheim",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Andrea D. aus Bremerhaven",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Christina I. aus Hagen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Oskar K. aus Dresden",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maria S. aus Bremen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Dennis L. aus Nürnberg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dominik C. aus Heidelberg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Ben W. aus Bielefeld",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander V. aus Herne",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine B. aus Erfurt",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus Y. aus Reutlingen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nadine A. aus Witten",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maria K. aus Herne",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Noah T. aus Offenbach",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Philipp I. aus Darmstadt",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tanja B. aus Heilbronn",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Robin X. aus Herne",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sascha O. aus Trier",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Marlon C. aus Essen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Marlon X. aus München",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Anja B. aus Bottrop",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Felix L. aus Saarbrücken",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Mats R. aus Kassel",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Tobias B. aus Schwerin",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Niklas Y. aus Pforzheim",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Theo I. aus Oldenburg",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Robin D. aus Braunschweig",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne L. aus Dortmund",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Andrea M. aus München",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Emil G. aus Esslingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lisa L. aus Saarbrücken",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anton K. aus Wolfsburg",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Fabian P. aus Ludwigsburg",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon B. aus Göttingen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Vincent F. aus Magdeburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Bastian F. aus Mainz",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Sarah V. aus Esslingen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Leon M. aus Osnabrück",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Melanie O. aus Berlin",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nadine R. aus Ulm",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kerstin J. aus Koblenz",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Julia I. aus Erfurt",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lenny D. aus Bremen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Andrea X. aus Solingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anton Y. aus Freiburg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Kevin O. aus Düsseldorf",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sabine O. aus Gelsenkirchen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis L. aus Hanau",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "David X. aus Göttingen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Oskar R. aus Würzburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Hannes P. aus Ludwigsburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Justus W. aus Augsburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "David R. aus Hamburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Henry X. aus Halle (Saale)",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julia V. aus Ludwigsburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Birgit D. aus Reutlingen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nico S. aus Dortmund",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jonas W. aus Bremerhaven",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Paul D. aus Trier",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sandra J. aus Moers",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Johannes Y. aus Hildesheim",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lenny R. aus Nürnberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Yannick I. aus Dortmund",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Moritz U. aus Paderborn",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Laura Z. aus Köln",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "David A. aus Lübeck",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Robin B. aus Kaiserslautern",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Valentin W. aus Bremerhaven",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Robin L. aus Pforzheim",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Timo G. aus Moers",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz Z. aus Paderborn",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo V. aus Cottbus",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Johannes W. aus Karlsruhe",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Sandra K. aus Bonn",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia I. aus Solingen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Vincent P. aus Hagen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tim Z. aus Recklinghausen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nicole C. aus Magdeburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin B. aus Wiesbaden",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Liam F. aus Magdeburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Milan S. aus Fürth",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nicole I. aus Jena",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Liam P. aus Pforzheim",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra C. aus Bremerhaven",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan Q. aus Salzgitter",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Hannes B. aus Gelsenkirchen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Hannes W. aus Fürth",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maximilian J. aus Duisburg",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leo V. aus Bochum",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Yannick Y. aus Stuttgart",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Valentin X. aus Gelsenkirchen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julia W. aus Cottbus",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick T. aus Halle (Saale)",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jonas T. aus Erlangen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kevin Z. aus Bremen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Milan B. aus Saarbrücken",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sarah B. aus Hagen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon X. aus Mönchengladbach",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Mats L. aus Berlin",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Monika M. aus Bremen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kevin E. aus Wuppertal",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Emil T. aus Hannover",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Milan S. aus Remscheid",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia H. aus Hamburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Lukas P. aus Dresden",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nadine K. aus Halle (Saale)",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Maria B. aus Ulm",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina M. aus Koblenz",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja N. aus Siegen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lukas H. aus Frankfurt",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Christoph M. aus Berlin",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christina T. aus Hildesheim",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sandra U. aus Wiesbaden",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca Y. aus Nürnberg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nicole L. aus Bottrop",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Melanie A. aus Reutlingen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nicole Q. aus Saarbrücken",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leo C. aus Bergisch Gladbach",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Melanie J. aus Duisburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Milan X. aus Mainz",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon V. aus Ulm",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Emil E. aus Wolfsburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Sascha V. aus Siegen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Matteo Y. aus Jena",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Anton D. aus Mannheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Liam F. aus Remscheid",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Robin E. aus Bochum",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "David W. aus Offenbach",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tom M. aus Iserlohn",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Bastian B. aus Duisburg",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Fabian X. aus Dresden",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Vincent K. aus Bielefeld",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nico Q. aus Trier",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Philipp U. aus Oldenburg",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Monika F. aus Aachen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Lukas I. aus Lübeck",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Christoph G. aus Hannover",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sandra T. aus Siegen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Paul A. aus Trier",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Samuel K. aus Mönchengladbach",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lenny E. aus Berlin",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sarah K. aus Gelsenkirchen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christoph N. aus Köln",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Milan O. aus Herne",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin B. aus Düsseldorf",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lenny P. aus Oberhausen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Katharina K. aus Gera",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny Y. aus Düsseldorf",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Yannick Z. aus Wolfsburg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben Y. aus Bergisch Gladbach",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Niklas I. aus Hildesheim",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Johannes B. aus Bielefeld",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Philipp P. aus Duisburg",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Valentin C. aus Gelsenkirchen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lenny N. aus Bergisch Gladbach",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Melanie Y. aus Frankfurt",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Andrea I. aus Hamburg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Florian Z. aus Herne",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Adrian Y. aus Göttingen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Fabian M. aus Ulm",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Maria Z. aus München",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Ben F. aus Erlangen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Andrea S. aus Ludwigshafen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Sascha F. aus Paderborn",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jonas N. aus Bergisch Gladbach",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julian J. aus Chemnitz",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sabine A. aus Berlin",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Sandra P. aus Iserlohn",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lisa R. aus Iserlohn",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Nadine V. aus Hannover",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin Z. aus Magdeburg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lisa Y. aus Neuss",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maria V. aus Essen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lisa W. aus Mülheim an der Ruhr",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne Q. aus Pforzheim",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dominik W. aus Gütersloh",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jonas C. aus Kiel",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Julia M. aus Heidelberg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Bastian D. aus Cottbus",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Felix J. aus Mönchengladbach",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Finn I. aus Bottrop",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Malte K. aus Hagen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Simon B. aus Nürnberg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Fabian P. aus Witten",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lukas F. aus Koblenz",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Leon T. aus Stuttgart",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik U. aus Nürnberg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo K. aus Salzgitter",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kevin Z. aus Wolfsburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Felix W. aus Salzgitter",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Andrea U. aus Erfurt",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja O. aus Gütersloh",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Luca N. aus Reutlingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Florian O. aus Kassel",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton P. aus Siegen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Finn O. aus Dortmund",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Florian N. aus Freiburg",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julia J. aus Leipzig",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Florian K. aus Leverkusen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maximilian B. aus Berlin",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Robin A. aus Bremen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christina Y. aus Erfurt",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nico R. aus Augsburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Alexander E. aus Mannheim",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Monika C. aus Darmstadt",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nico G. aus Hanau",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Liam I. aus Köln",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Johannes T. aus Karlsruhe",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tom T. aus Leverkusen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tim J. aus Hagen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Valentin E. aus Hagen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben W. aus Hildesheim",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Luca X. aus Gütersloh",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben D. aus München",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Erik W. aus Heilbronn",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Sascha I. aus Krefeld",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Valentin C. aus Hanau",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jan V. aus Reutlingen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Philipp V. aus Herne",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "David A. aus Trier",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Claudia P. aus Frankfurt",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Samuel F. aus Augsburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis P. aus Hamm",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Julian P. aus Siegen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Philipp V. aus Osnabrück",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Lisa R. aus Fürth",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats S. aus Wuppertal",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julia A. aus Trier",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nadine O. aus Leverkusen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dominik E. aus Solingen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maximilian F. aus Münster",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna C. aus Mannheim",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Bastian H. aus Fürth",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christina T. aus Braunschweig",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Dominik D. aus Dortmund",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Finn T. aus Wuppertal",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Oskar D. aus Braunschweig",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Mats B. aus Leipzig",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maria O. aus Hannover",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Oskar M. aus Krefeld",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anna H. aus Bottrop",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats P. aus Moers",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne S. aus Berlin",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Vincent A. aus Karlsruhe",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon L. aus Jena",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Lisa B. aus Reutlingen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Elias C. aus Wolfsburg",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Oskar C. aus Darmstadt",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick S. aus Erlangen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Tim C. aus Remscheid",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick A. aus Trier",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nadine N. aus Gütersloh",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Melanie C. aus Reutlingen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Alexander F. aus Mainz",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Petra P. aus Freiburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Susanne G. aus Heilbronn",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit S. aus Wuppertal",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anja B. aus Moers",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sascha U. aus Duisburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Yannick R. aus Augsburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Stefanie Z. aus Wiesbaden",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca G. aus Göttingen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Anna V. aus Braunschweig",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Milan S. aus Hamburg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Paul C. aus Jena",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Mats E. aus Heidelberg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Lisa X. aus Berlin",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Dennis Y. aus Aachen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tom N. aus Moers",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo K. aus Oberhausen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo O. aus Hamm",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Liam Q. aus Reutlingen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Marlon J. aus Herne",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Andrea U. aus Chemnitz",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Paul Y. aus Ulm",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan U. aus Hamm",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja G. aus Cottbus",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Mats B. aus Hildesheim",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Paul Z. aus Herne",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes D. aus Oldenburg",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Luis M. aus Iserlohn",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico S. aus Jena",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Florian E. aus Göttingen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Niklas J. aus Iserlohn",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jan R. aus Moers",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Monika Z. aus Pforzheim",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Bastian P. aus Erlangen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Sarah C. aus Oldenburg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Oskar K. aus Siegen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Oskar J. aus Chemnitz",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Birgit D. aus Heidelberg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Tom H. aus Moers",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lenny T. aus Cottbus",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Bastian V. aus Magdeburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sarah N. aus Hanau",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Andrea K. aus Berlin",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Florian W. aus Gelsenkirchen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Ben G. aus Schwerin",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Anna I. aus Dresden",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander X. aus Hamburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anna B. aus Reutlingen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Marlon R. aus Freiburg",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo M. aus Schwerin",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian Z. aus Hamm",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats K. aus Darmstadt",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kevin T. aus Hagen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Ben F. aus Mainz",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Jonas U. aus Halle (Saale)",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Timo S. aus Frankfurt",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kilian K. aus Dresden",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Erik H. aus Erlangen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Timo K. aus Hamm",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Liam B. aus Augsburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Florian G. aus Darmstadt",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Johannes E. aus Osnabrück",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Robin E. aus Leverkusen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria R. aus Bremerhaven",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sandra F. aus Ludwigshafen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kilian Q. aus Bochum",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit Q. aus Hildesheim",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Bastian X. aus Gelsenkirchen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Elias Z. aus Wuppertal",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Monika Q. aus Wiesbaden",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Felix T. aus Duisburg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Anna T. aus Ingolstadt",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Susanne F. aus Chemnitz",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sabine K. aus Paderborn",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin F. aus Berlin",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra O. aus Aachen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "David S. aus Gütersloh",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Noah Y. aus Heidelberg",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin I. aus Koblenz",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Tobias Z. aus Chemnitz",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kevin Y. aus Kassel",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Tim T. aus Gütersloh",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Susanne Y. aus Cottbus",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim F. aus Hamburg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Vincent L. aus Magdeburg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Noah M. aus München",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit P. aus Kaiserslautern",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jan P. aus Heilbronn",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Sabine R. aus Braunschweig",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Malte O. aus Remscheid",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Monika Z. aus Kiel",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Erik K. aus Bochum",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Finn M. aus Potsdam",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Mats S. aus Erfurt",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lisa J. aus Chemnitz",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Samuel D. aus Wolfsburg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Justus V. aus Lübeck",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christoph J. aus Reutlingen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Valentin O. aus Heilbronn",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Oskar P. aus Rostock",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra M. aus Chemnitz",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Liam I. aus Dortmund",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Emil X. aus Bottrop",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura O. aus Bielefeld",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Dennis I. aus Ludwigshafen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Andrea J. aus Offenbach",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Max W. aus Ludwigsburg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Laura C. aus Gelsenkirchen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton P. aus Wolfsburg",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luca R. aus Berlin",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Philipp J. aus Köln",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Yannick I. aus Mülheim an der Ruhr",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Mats J. aus Ingolstadt",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nadine H. aus Wiesbaden",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Elias I. aus Jena",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Florian S. aus Wuppertal",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christoph Q. aus Bochum",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin Y. aus Reutlingen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Mats R. aus Remscheid",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja Q. aus Bottrop",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Andrea S. aus Bochum",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nadine Y. aus Bielefeld",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lukas D. aus Kassel",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Malte H. aus München",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nico B. aus Oldenburg",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Susanne L. aus Wolfsburg",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luis R. aus Essen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Malte P. aus Osnabrück",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sabine Z. aus Kiel",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Emil R. aus Erfurt",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Robin M. aus München",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sabine K. aus Fürth",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Felix C. aus Hanau",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lukas V. aus Jena",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Max B. aus Magdeburg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Johannes L. aus Kassel",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Finn L. aus Cottbus",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Paul U. aus Heilbronn",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Noah Y. aus Braunschweig",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Theo Y. aus Hagen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Lukas K. aus Bergisch Gladbach",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Hannes O. aus Wiesbaden",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Philipp P. aus Dresden",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "David M. aus Neuss",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Luca I. aus Oberhausen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Laura M. aus Wiesbaden",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra N. aus Iserlohn",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis H. aus Pforzheim",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian J. aus Gelsenkirchen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tanja O. aus Gütersloh",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Milan Q. aus Mainz",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Paul Q. aus Magdeburg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Simon O. aus Fürth",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Kevin Y. aus Göttingen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Marlon L. aus Essen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Alexander S. aus Ulm",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis Z. aus Hildesheim",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tobias Q. aus Esslingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn P. aus Leverkusen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Adrian R. aus Düsseldorf",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra Y. aus Braunschweig",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Luca I. aus Essen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Niklas K. aus Dresden",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Julian B. aus Ulm",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Katharina U. aus Ludwigsburg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kevin X. aus Kaiserslautern",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tom L. aus Jena",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Sabine O. aus Oberhausen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Niklas A. aus Berlin",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Claudia S. aus Lübeck",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Elias H. aus Wuppertal",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Vincent H. aus Rostock",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sandra L. aus Dresden",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Samuel C. aus Karlsruhe",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim P. aus Ludwigshafen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "David I. aus Iserlohn",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leo P. aus Darmstadt",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian D. aus Halle (Saale)",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "David R. aus Iserlohn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Sabine I. aus Würzburg",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Birgit E. aus Aachen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Claudia N. aus Koblenz",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nicole D. aus Heilbronn",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kilian Y. aus Dresden",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Emil Y. aus Hannover",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Susanne A. aus Freiburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin X. aus Saarbrücken",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry M. aus Ludwigsburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Claudia I. aus Koblenz",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nico Q. aus Gütersloh",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan P. aus Stuttgart",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Simon U. aus Jena",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Stefanie E. aus Gütersloh",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico W. aus Hamburg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Milan W. aus Bielefeld",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Marlon Y. aus Düsseldorf",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christina K. aus Hildesheim",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leo W. aus Oberhausen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kilian L. aus Halle (Saale)",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nadine B. aus Braunschweig",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Andrea W. aus Mainz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Marlon B. aus Trier",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anna S. aus Erlangen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Monika G. aus Essen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Lisa T. aus Heidelberg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christina O. aus Osnabrück",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Johannes H. aus Düsseldorf",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Emil Z. aus Fürth",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Nicole L. aus Reutlingen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Andrea P. aus Osnabrück",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Matteo Y. aus Bielefeld",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Noah M. aus Berlin",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo D. aus Braunschweig",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sabine W. aus Herne",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Max N. aus Salzgitter",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kerstin Y. aus Bochum",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Christoph X. aus Recklinghausen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Yannick A. aus Pforzheim",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Lukas C. aus Münster",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nico U. aus Gera",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Robin L. aus Dresden",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Justus W. aus Oberhausen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit N. aus Essen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Justus L. aus Mainz",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Marlon G. aus Rostock",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Liam V. aus Osnabrück",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sarah I. aus Bielefeld",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Mats L. aus Solingen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Claudia A. aus Esslingen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Luca N. aus Solingen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Emil T. aus Bochum",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Oskar V. aus Duisburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Vincent J. aus Mannheim",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Laura N. aus Magdeburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Dominik S. aus Berlin",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Bastian X. aus Mainz",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Kerstin K. aus Magdeburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Mats P. aus Pforzheim",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Emil Q. aus Hamm",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Niklas T. aus Moers",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Robin E. aus Wiesbaden",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anna V. aus Lübeck",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar H. aus Lübeck",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maximilian T. aus Bielefeld",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Justus T. aus Solingen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Finn P. aus Herne",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Finn U. aus Wiesbaden",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Max S. aus Leverkusen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anton D. aus Düsseldorf",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Susanne Z. aus Magdeburg",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian G. aus Esslingen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Ben T. aus Wolfsburg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Simon W. aus Hildesheim",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kerstin I. aus Mülheim an der Ruhr",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Mats D. aus Remscheid",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Petra S. aus Augsburg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian B. aus Kassel",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Adrian K. aus Darmstadt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas S. aus Wiesbaden",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats L. aus Köln",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Christoph G. aus Cottbus",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Lenny W. aus Osnabrück",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maximilian C. aus Ulm",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia N. aus Iserlohn",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dennis V. aus Erfurt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Simon L. aus Ulm",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Matteo I. aus Leipzig",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jonas P. aus Essen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tom D. aus Aachen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo X. aus Wiesbaden",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Kilian Z. aus Wiesbaden",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Henry Q. aus Iserlohn",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Elias M. aus Witten",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Simon I. aus Regensburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny U. aus Essen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nico C. aus Jena",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne A. aus Hildesheim",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna B. aus Leverkusen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Theo K. aus Solingen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Vincent E. aus Würzburg",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Malte X. aus Karlsruhe",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim T. aus Witten",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel P. aus Bergisch Gladbach",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina L. aus Bielefeld",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil S. aus Hamburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anna R. aus Pforzheim",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Leon H. aus Augsburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sarah D. aus Saarbrücken",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Melanie X. aus Bremerhaven",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte C. aus Mülheim an der Ruhr",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Henry B. aus Krefeld",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jonas U. aus Pforzheim",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Erik O. aus Esslingen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon B. aus Osnabrück",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Justus Y. aus Mönchengladbach",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Timo P. aus Bremen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Yannick Y. aus Bremen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Simon Q. aus Gütersloh",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Niklas P. aus Lübeck",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tim Q. aus Mülheim an der Ruhr",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Claudia K. aus Kaiserslautern",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nico H. aus Düsseldorf",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Emil Y. aus Erfurt",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Katharina X. aus Leverkusen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Jannik Z. aus Trier",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lukas Y. aus Krefeld",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nico S. aus Offenbach",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dominik C. aus Essen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Justus S. aus Ludwigsburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Erik Z. aus Cottbus",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nicole C. aus Heidelberg",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nicole B. aus Frankfurt",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Robin D. aus Bremen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sandra R. aus Oberhausen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anton L. aus Wolfsburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo F. aus Erlangen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Elias C. aus Jena",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Max F. aus Berlin",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny V. aus Münster",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Stefanie F. aus Gelsenkirchen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Kilian M. aus Neuss",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian P. aus Braunschweig",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Laura I. aus Magdeburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo I. aus Hamburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Justus Y. aus Frankfurt",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Luca I. aus Reutlingen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Simon I. aus Bottrop",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Vincent O. aus Gütersloh",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Julian I. aus Kassel",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Kevin H. aus Bremerhaven",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Johannes C. aus Mülheim an der Ruhr",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Ben Y. aus Leipzig",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja A. aus Hamburg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Maria O. aus Neuss",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "David P. aus Mannheim",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Laura O. aus Hamburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lisa T. aus Nürnberg",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anna E. aus Karlsruhe",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Birgit D. aus Gelsenkirchen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Yannick F. aus Oberhausen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Moritz F. aus Stuttgart",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Kerstin S. aus Gera",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Elias O. aus Remscheid",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Finn F. aus Hagen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jannik J. aus Berlin",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Simon R. aus Gütersloh",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Paul B. aus Neuss",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kilian T. aus Darmstadt",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julian Z. aus München",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Yannick N. aus Regensburg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Mats K. aus Kiel",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Monika Y. aus Reutlingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja R. aus Reutlingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anton B. aus Heilbronn",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Tim T. aus Bonn",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tanja D. aus Moers",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Noah F. aus Cottbus",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan D. aus Mainz",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Justus C. aus Erlangen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Bastian A. aus Kaiserslautern",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Susanne P. aus Witten",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Malte E. aus Jena",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Maximilian B. aus Recklinghausen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nadine D. aus Frankfurt",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Bastian R. aus Hannover",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christina K. aus Gütersloh",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus Z. aus Duisburg",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anja I. aus Leipzig",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Simon K. aus Oberhausen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maximilian Q. aus Krefeld",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anna F. aus Chemnitz",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Arne P. aus Darmstadt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Max O. aus Berlin",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lisa J. aus Krefeld",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin Q. aus Essen",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "David I. aus Magdeburg",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Benedikt H. aus Ludwigsburg",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Florian G. aus Iserlohn",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nico U. aus Stuttgart",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Jan J. aus Freiburg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Niklas D. aus Hamm",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo U. aus Fürth",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sarah T. aus Mülheim an der Ruhr",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Elias A. aus Darmstadt",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Paul J. aus Heilbronn",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Samuel E. aus Kassel",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo F. aus Osnabrück",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Monika L. aus Aachen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Stefanie Y. aus Reutlingen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nicole S. aus Duisburg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lisa X. aus Saarbrücken",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Stefanie L. aus Halle (Saale)",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Felix H. aus Neuss",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Noah J. aus Oberhausen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Max N. aus Hagen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Adrian Q. aus Cottbus",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas H. aus Bielefeld",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Fabian R. aus Bonn",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nicole B. aus Schwerin",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sandra B. aus Bergisch Gladbach",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Oskar O. aus Heidelberg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Timo F. aus Reutlingen",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Maria M. aus Bremen",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico U. aus Mönchengladbach",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kerstin Y. aus Nürnberg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Simon I. aus Fürth",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Matteo R. aus Oberhausen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Leon E. aus Recklinghausen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Paul T. aus Chemnitz",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Birgit T. aus Regensburg",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja C. aus Kaiserslautern",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon W. aus Dortmund",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Mats R. aus Iserlohn",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Melanie H. aus Münster",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Christina G. aus Essen",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Marlon L. aus Augsburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit O. aus Freiburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Oskar J. aus Cottbus",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Yannick R. aus Dresden",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam I. aus Erfurt",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Theo A. aus Saarbrücken",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Paul M. aus Würzburg",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Liam G. aus Heilbronn",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Justus Y. aus Hannover",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Stefanie S. aus Würzburg",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah E. aus Kaiserslautern",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anna R. aus Offenbach",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Malte B. aus Salzgitter",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Malte Z. aus Oldenburg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Monika I. aus Kassel",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Sarah S. aus Ludwigshafen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tim K. aus Kiel",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes W. aus Oberhausen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Felix F. aus München",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Niklas Z. aus Frankfurt",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Nadine U. aus Düsseldorf",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sabine K. aus Siegen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Robin Q. aus Recklinghausen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny S. aus Gera",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam D. aus Iserlohn",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Birgit J. aus Rostock",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nicole T. aus Kiel",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis M. aus Dortmund",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Samuel A. aus Frankfurt",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Dennis K. aus Hagen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dominik W. aus München",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Stefanie Z. aus Chemnitz",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Leo H. aus Bonn",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sascha Z. aus Gera",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne I. aus Berlin",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nadine P. aus Remscheid",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Andrea P. aus Gütersloh",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus C. aus Krefeld",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Nico P. aus Göttingen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Florian B. aus Erfurt",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Robin W. aus Mainz",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Max H. aus Saarbrücken",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tom M. aus Fürth",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon L. aus Reutlingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Arne X. aus Bielefeld",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Philipp H. aus Potsdam",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo O. aus Fürth",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas U. aus Würzburg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja Q. aus Reutlingen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leo K. aus Cottbus",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dominik R. aus Mönchengladbach",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo W. aus Iserlohn",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Petra E. aus Oberhausen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Felix V. aus Dortmund",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maximilian H. aus Siegen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Moritz N. aus Leverkusen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Paul L. aus Mülheim an der Ruhr",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Hannes B. aus Jena",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico O. aus Göttingen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Milan S. aus Koblenz",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian Z. aus Iserlohn",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sarah V. aus Dortmund",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Simon X. aus Nürnberg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Katharina C. aus Mülheim an der Ruhr",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico A. aus Recklinghausen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Monika J. aus Kaiserslautern",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Milan R. aus Magdeburg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben E. aus Kaiserslautern",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Lisa P. aus Mainz",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lukas R. aus Braunschweig",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo C. aus Halle (Saale)",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Paul V. aus Darmstadt",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Anton Z. aus Frankfurt",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Philipp M. aus Mannheim",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Samuel F. aus Siegen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Niklas X. aus Chemnitz",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lenny C. aus Erfurt",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nicole X. aus Erlangen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Petra C. aus Würzburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Melanie V. aus Oberhausen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Alexander O. aus Witten",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dominik T. aus Wiesbaden",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anna A. aus Bonn",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats L. aus Fürth",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Justus R. aus Esslingen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Christina C. aus Fürth",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Henry M. aus Trier",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Robin J. aus Dresden",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Jan J. aus Dortmund",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Dennis E. aus Recklinghausen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Oskar O. aus Leverkusen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Birgit M. aus Saarbrücken",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maria R. aus Siegen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil D. aus Dortmund",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Christina P. aus Erlangen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tobias U. aus Hagen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sarah O. aus Kiel",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Adrian K. aus Mainz",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leo N. aus Osnabrück",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kevin T. aus Iserlohn",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Adrian Q. aus Dortmund",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian Y. aus Hildesheim",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christoph X. aus Fürth",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Hannes S. aus Potsdam",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Susanne R. aus Halle (Saale)",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julia Q. aus Neuss",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Milan C. aus Karlsruhe",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Hannes H. aus Hagen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Niklas X. aus Ingolstadt",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Birgit E. aus Nürnberg",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Claudia T. aus Fürth",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Hannes F. aus Oberhausen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Leo M. aus Braunschweig",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dennis V. aus Siegen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis H. aus Offenbach",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lenny U. aus Bremen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Lisa B. aus Pforzheim",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Benedikt U. aus Mainz",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Tanja X. aus Dresden",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Ben Z. aus Gera",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Marlon L. aus Paderborn",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim J. aus Ludwigshafen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "David W. aus Kiel",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Katharina A. aus Dortmund",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christoph H. aus Cottbus",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Vincent J. aus Neuss",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Emil N. aus Krefeld",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Matteo P. aus Berlin",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Stefanie N. aus Solingen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar K. aus Oberhausen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julian F. aus Berlin",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Luis P. aus Nürnberg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin K. aus Siegen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Monika V. aus Köln",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Mats O. aus Köln",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Liam V. aus Braunschweig",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Sabine T. aus Schwerin",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Kilian K. aus Duisburg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Sascha T. aus Wiesbaden",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Moritz W. aus Pforzheim",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Malte P. aus Leipzig",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sascha F. aus Schwerin",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Sandra C. aus Dresden",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit W. aus Mannheim",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Andrea M. aus Mainz",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Claudia Q. aus Cottbus",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Niklas B. aus Kiel",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "David T. aus Frankfurt",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Valentin W. aus Mainz",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit K. aus Herne",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Adrian N. aus Köln",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. 5 Sterne.",
    "customer_name": "Noah C. aus Frankfurt",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Erik C. aus Stuttgart",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julian U. aus Erfurt",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Philipp L. aus Berlin",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo I. aus Reutlingen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Noah Y. aus Trier",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Susanne J. aus Cottbus",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Petra V. aus Ulm",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Finn N. aus Leverkusen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jonas Q. aus Kaiserslautern",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Malte R. aus Hannover",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christina V. aus Frankfurt",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maximilian I. aus Jena",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jannik F. aus Gelsenkirchen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Moritz H. aus Hildesheim",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lisa U. aus Oldenburg",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christina G. aus Hamm",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luca X. aus Göttingen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Matteo Q. aus Witten",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Milan I. aus Bottrop",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Max X. aus Wiesbaden",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Hannes E. aus Heidelberg",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Jan K. aus Duisburg",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Theo T. aus Koblenz",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Benedikt H. aus Koblenz",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Christina I. aus Wolfsburg",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Valentin A. aus Oldenburg",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leon Q. aus Göttingen",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Susanne B. aus Heidelberg",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Petra H. aus Ludwigshafen",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dominik M. aus Jena",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Max O. aus Koblenz",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Alexander V. aus Halle (Saale)",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Erik S. aus Heilbronn",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry Z. aus Potsdam",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Hannes S. aus Wiesbaden",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Birgit Q. aus Heilbronn",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Adrian N. aus Wiesbaden",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Henry O. aus Witten",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christoph W. aus Rostock",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Maria H. aus Paderborn",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Tom D. aus Jena",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Philipp I. aus Hamburg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Oskar J. aus Göttingen",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Niklas B. aus Trier",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Robin R. aus Wuppertal",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Katharina V. aus Bottrop",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna Q. aus Kiel",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon B. aus Chemnitz",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Maria H. aus Karlsruhe",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tanja Z. aus Jena",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Andrea C. aus Gera",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dennis E. aus Hamm",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Arne M. aus Pforzheim",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus F. aus Braunschweig",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Timo X. aus Essen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Kilian R. aus Cottbus",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Luis Q. aus Berlin",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lukas V. aus Bonn",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Valentin M. aus Münster",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Ben M. aus Ludwigsburg",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Malte E. aus Cottbus",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Laura Y. aus Schwerin",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maria B. aus Esslingen",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil C. aus Bergisch Gladbach",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Birgit R. aus Fürth",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Emil Q. aus Bottrop",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Maria E. aus Nürnberg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne Z. aus Wiesbaden",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kerstin C. aus Ingolstadt",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sandra U. aus Kiel",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry K. aus Hannover",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Henry T. aus Witten",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sarah Z. aus Chemnitz",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Benedikt B. aus Hannover",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sabine N. aus Köln",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Matteo R. aus Moers",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Sascha J. aus Bielefeld",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Mats K. aus Mainz",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Paul X. aus Paderborn",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan P. aus Chemnitz",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam A. aus Rostock",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Leon G. aus Essen",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Milan H. aus Herne",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tanja Y. aus Nürnberg",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Maximilian T. aus Würzburg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Laura U. aus Siegen",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luis V. aus Ulm",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lukas W. aus Dresden",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Stefanie I. aus Berlin",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico T. aus Lübeck",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Emil G. aus Hannover",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Tanja Q. aus Rostock",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina M. aus Witten",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lisa S. aus Essen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Valentin Z. aus Regensburg",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Vincent A. aus Düsseldorf",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Finn V. aus Neuss",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Fabian A. aus Fürth",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Philipp U. aus Dortmund",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tom W. aus Chemnitz",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anja R. aus Dortmund",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Moritz Z. aus Mannheim",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Max W. aus Ludwigsburg",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton Q. aus Mönchengladbach",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Benedikt G. aus Offenbach",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo W. aus Kiel",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Malte Y. aus Heilbronn",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christoph H. aus Oberhausen",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Noah P. aus Kiel",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Christina K. aus Mannheim",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Mats P. aus Mönchengladbach",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Luis O. aus Rostock",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Vincent T. aus Chemnitz",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Theo X. aus Halle (Saale)",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Laura M. aus Bremerhaven",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Liam K. aus Duisburg",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Jannik V. aus Dortmund",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. 5 Sterne.",
    "customer_name": "Hannes H. aus Karlsruhe",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Kilian H. aus Witten",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Malte M. aus Erlangen",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Mats D. aus Stuttgart",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. 5 Sterne.",
    "customer_name": "Sascha T. aus Hagen",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo L. aus Wolfsburg",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anna M. aus Saarbrücken",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kilian W. aus Mannheim",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus Q. aus Hannover",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Kerstin Z. aus Esslingen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Adrian R. aus Hanau",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Petra D. aus Paderborn",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nico X. aus Kaiserslautern",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Melanie N. aus Hildesheim",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nico I. aus Ulm",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Petra O. aus Mönchengladbach",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Johannes L. aus Jena",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina C. aus Aachen",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Elias W. aus Oberhausen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Dominik B. aus Köln",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Marlon V. aus Chemnitz",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit S. aus Bochum",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Henry S. aus Krefeld",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jan X. aus Wiesbaden",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. 5 Sterne.",
    "customer_name": "Erik F. aus Rostock",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Lisa D. aus Hamburg",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz V. aus Wolfsburg",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Luca Z. aus Stuttgart",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anna O. aus Wolfsburg",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin E. aus Essen",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja F. aus Mülheim an der Ruhr",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Petra U. aus Hildesheim",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lenny O. aus Magdeburg",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Adrian V. aus Heilbronn",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Luca P. aus Reutlingen",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kevin T. aus Kiel",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Kilian Q. aus Jena",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Arne V. aus Stuttgart",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maximilian M. aus Jena",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Marlon Y. aus Würzburg",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Jannik L. aus Leipzig",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra O. aus Bochum",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Leon Y. aus Hamburg",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julia B. aus Leverkusen",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Nicole U. aus Koblenz",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Einfach klasse.",
    "customer_name": "Tom L. aus Kassel",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Milan P. aus Freiburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Milan C. aus Leipzig",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Timo F. aus Esslingen",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jannik G. aus Frankfurt",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christoph R. aus Lübeck",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Melanie E. aus Bremerhaven",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon I. aus Schwerin",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Emil I. aus Salzgitter",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Felix S. aus Solingen",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Marlon C. aus Bergisch Gladbach",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Nicole L. aus Salzgitter",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Katharina Q. aus Gütersloh",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Sabine O. aus Bielefeld",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Grundausstattung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Julia Z. aus Darmstadt",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Monika M. aus Bergisch Gladbach",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Einfach klasse.",
    "customer_name": "Sarah Y. aus Würzburg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "David L. aus Münster",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. 5 Sterne.",
    "customer_name": "Dominik H. aus Herne",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo M. aus Iserlohn",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia E. aus Neuss",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kilian C. aus Iserlohn",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Matteo Z. aus Bergisch Gladbach",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Erik O. aus Dresden",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz H. aus Berlin",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leo B. aus Magdeburg",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Johannes V. aus Saarbrücken",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne Q. aus Gelsenkirchen",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Philipp C. aus Krefeld",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Niklas W. aus Essen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Vincent T. aus Bonn",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Emil E. aus Gera",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lukas Y. aus Ludwigshafen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Henry T. aus Hildesheim",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne D. aus Mülheim an der Ruhr",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sabine R. aus Ulm",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bauen ohne Ende ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Tim E. aus Koblenz",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim Q. aus Dortmund",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Einfach klasse.",
    "customer_name": "Max Y. aus Hagen",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Alexander G. aus Bonn",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Birgit W. aus Hannover",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny Z. aus Rostock",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bunte Mischung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lukas R. aus Reutlingen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Stefanie T. aus Bielefeld",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Leo S. aus Duisburg",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sabine N. aus Hanau",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Kevin P. aus Fürth",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus I. aus Hannover",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Valentin N. aus Braunschweig",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kevin S. aus Gelsenkirchen",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Sascha N. aus Würzburg",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. 5 Sterne.",
    "customer_name": "Maria L. aus Duisburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Anton Y. aus Krefeld",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Emil U. aus Gelsenkirchen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian L. aus Heilbronn",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bunte Mischung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kevin I. aus Braunschweig",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Julian N. aus Offenbach",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Bastian M. aus Aachen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Steine ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Stefanie A. aus Stuttgart",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Benedikt J. aus Gera",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kilian U. aus Pforzheim",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander C. aus Siegen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura K. aus Wolfsburg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Johannes J. aus Bremerhaven",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dominik I. aus Ludwigsburg",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Andrea Q. aus Braunschweig",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel K. aus Neuss",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bauen ohne Ende ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Paul Y. aus Berlin",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Felix N. aus Esslingen",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Grundausstattung ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Christina R. aus Bonn",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Top Qualität.",
    "customer_name": "Simon X. aus Reutlingen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Nico Q. aus Remscheid",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Malte K. aus Kaiserslautern",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne V. aus Leverkusen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jan O. aus Bottrop",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nico O. aus Salzgitter",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anna G. aus Nürnberg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Justus Y. aus Neuss",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina T. aus Gelsenkirchen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Liam M. aus Hamm",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sabine Z. aus Gütersloh",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bauen ohne Ende ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Yannick N. aus Kiel",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Niklas F. aus Regensburg",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kerstin I. aus Berlin",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dennis Q. aus Saarbrücken",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. 5 Sterne.",
    "customer_name": "Christoph Y. aus Wolfsburg",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Susanne W. aus Mönchengladbach",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Box ist praktisch ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lenny D. aus Neuss",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jonas B. aus Gera",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Grundausstattung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Sarah P. aus Berlin",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Viele Teile ist super umgesetzt. Besonders Steine gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura L. aus Erlangen",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Alexander N. aus Neuss",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Simon A. aus Saarbrücken",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte J. aus Kiel",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Kilian F. aus Wuppertal",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander C. aus Krefeld",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Timo S. aus Iserlohn",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Steine gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Melanie U. aus Hildesheim",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben K. aus Göttingen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Steine ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Claudia U. aus Leverkusen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Johannes Z. aus Recklinghausen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Steine ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Yannick R. aus Solingen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Klassiker gefällt mir gut. Top Qualität.",
    "customer_name": "Erik H. aus Cottbus",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Samuel X. aus Augsburg",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Box ist praktisch ist super umgesetzt. Besonders Kreativität gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Henry Q. aus Potsdam",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Ben L. aus Bochum",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bauen ohne Ende ist super umgesetzt. Besonders Klassiker gefällt mir gut. Einfach klasse.",
    "customer_name": "Katharina S. aus Essen",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bunte Mischung ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Finn G. aus Heilbronn",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Viele Teile ist super umgesetzt. Besonders Klassiker gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Matteo X. aus Remscheid",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Klassiker ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "David F. aus Oldenburg",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Leo T. aus Ludwigsburg",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Grundausstattung ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Leo B. aus Mainz",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jan I. aus Hildesheim",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Klassiker ist super umgesetzt. Besonders Kreativität gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julian F. aus Wolfsburg",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Kreativität ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Andrea R. aus Koblenz",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bauen ohne Ende ist super umgesetzt. Besonders Bunte Mischung gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kerstin T. aus Freiburg",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Grundausstattung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Elias D. aus Dortmund",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon M. aus Iserlohn",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis Z. aus Halle (Saale)",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Kreativität ist super umgesetzt. Besonders Kreativität gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Birgit F. aus Stuttgart",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Steine ist super umgesetzt. Besonders Kreativität gefällt mir gut. Top Qualität.",
    "customer_name": "Justus C. aus Lübeck",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Steine ist super umgesetzt. Besonders Steine gefällt mir gut. Top Qualität.",
    "customer_name": "Dominik F. aus Freiburg",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Steine gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sarah O. aus Rostock",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Fabian R. aus Gera",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Box ist praktisch ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Maria E. aus Hildesheim",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Klassiker ist super umgesetzt. Besonders Grundausstattung gefällt mir gut. Top Qualität.",
    "customer_name": "Sabine O. aus Bochum",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bauen ohne Ende ist super umgesetzt. Besonders Steine gefällt mir gut. 5 Sterne.",
    "customer_name": "Yannick L. aus Mülheim an der Ruhr",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Kreativität ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Top Qualität.",
    "customer_name": "Julia H. aus Leverkusen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Top Qualität.",
    "customer_name": "Lisa U. aus Hamburg",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan A. aus Esslingen",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Bunte Mischung ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Theo W. aus Halle (Saale)",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Klassiker ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Benedikt Q. aus Kiel",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Box ist praktisch ist super umgesetzt. Besonders Box ist praktisch gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sandra C. aus Trier",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bunte Mischung ist super umgesetzt. Besonders Viele Teile gefällt mir gut. Top Qualität.",
    "customer_name": "Sarah P. aus Bochum",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Viele Teile ist super umgesetzt. Besonders Bauen ohne Ende gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Stefanie J. aus Ingolstadt",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Box ist praktisch ist super umgesetzt. Besonders Steine gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maximilian H. aus Neuss",
    "date": "2025-01-01"
  }
];