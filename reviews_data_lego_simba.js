const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. 5 Sterne.",
    "customer_name": "Julia K. aus Mülheim an der Ruhr",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sarah Z. aus Offenbach",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon X. aus Wolfsburg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Leon Q. aus Kassel",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nicole C. aus Kaiserslautern",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry Q. aus Dortmund",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Sascha Q. aus Duisburg",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Leo L. aus Regensburg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Simba ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nadine V. aus Hannover",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tobias Q. aus Dresden",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sascha N. aus Hildesheim",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Stefanie D. aus Leipzig",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Milan R. aus Nürnberg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "David N. aus Münster",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Simon S. aus Hildesheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Fabian B. aus Düsseldorf",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Luis B. aus Reutlingen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Julian S. aus Mülheim an der Ruhr",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico U. aus Wiesbaden",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Süß ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Malte Q. aus Bergisch Gladbach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Bastian W. aus Bremerhaven",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Katharina S. aus Bremerhaven",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kilian W. aus Bremerhaven",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Erik E. aus Nürnberg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra W. aus Hamburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nadine O. aus Braunschweig",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luis K. aus Oldenburg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Ben F. aus Leverkusen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Elias G. aus Offenbach",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Top Qualität.",
    "customer_name": "Tobias E. aus Mülheim an der Ruhr",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Christoph U. aus Braunschweig",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus J. aus München",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Vincent X. aus Witten",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Erik W. aus Mannheim",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Hannes T. aus Ulm",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tanja S. aus Berlin",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin U. aus Kiel",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Valentin U. aus Wuppertal",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian K. aus Salzgitter",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maximilian R. aus Iserlohn",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Adrian L. aus Osnabrück",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Adrian K. aus Siegen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Vincent U. aus Bielefeld",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Süß ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Noah Z. aus Bremerhaven",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Samuel B. aus Ingolstadt",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Liam F. aus Ludwigshafen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kilian V. aus Herne",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Geschenkidee ist super umgesetzt. Besonders Süß gefällt mir gut. 5 Sterne.",
    "customer_name": "Noah I. aus Fürth",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Melanie S. aus Braunschweig",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Top Qualität.",
    "customer_name": "Sascha W. aus Moers",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jannik L. aus Münster",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Birgit A. aus Bielefeld",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Disney Magie ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Johannes M. aus Siegen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sandra Y. aus Ingolstadt",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Lukas O. aus Salzgitter",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Tim J. aus Erlangen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Oskar W. aus Hanau",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Justus X. aus Saarbrücken",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Robin Y. aus Bremerhaven",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Johannes I. aus Witten",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Noah C. aus Augsburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Jonas B. aus Karlsruhe",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Niedlich gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tobias S. aus Leverkusen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Stefanie K. aus Saarbrücken",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Beweglicher Kopf ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Fabian A. aus Jena",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Erik S. aus Bremen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Niedlich ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Susanne B. aus Hanau",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Erik W. aus Moers",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Kerstin X. aus Dresden",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Timo D. aus Wuppertal",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Süß ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Birgit N. aus Saarbrücken",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kilian Z. aus Bremerhaven",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja O. aus Wiesbaden",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Top Qualität.",
    "customer_name": "Hannes Z. aus Wuppertal",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Finn P. aus Chemnitz",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. 5 Sterne.",
    "customer_name": "Finn H. aus Oldenburg",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Benedikt C. aus Paderborn",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julian T. aus Ludwigshafen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Lukas Z. aus Esslingen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Valentin F. aus Magdeburg",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Yannick X. aus Erfurt",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tim V. aus Salzgitter",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja G. aus Bremen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit X. aus Hagen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Kevin W. aus Hanau",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anton P. aus Düsseldorf",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Yannick Y. aus Moers",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Beweglicher Kopf ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel L. aus Solingen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Claudia Y. aus Erlangen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jonas C. aus Bremen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Arne E. aus Mannheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lukas G. aus Koblenz",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus Z. aus Kaiserslautern",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Simba gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Julia C. aus Essen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Monika N. aus Wolfsburg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Anja E. aus Wuppertal",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Florian X. aus Fürth",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Leon R. aus Chemnitz",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders Niedlich gefällt mir gut. Top Qualität.",
    "customer_name": "Mats H. aus Siegen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Tobias L. aus Ulm",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Johannes T. aus Halle (Saale)",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nadine Q. aus Dresden",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Dennis X. aus Oldenburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Süß ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Arne V. aus Münster",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Henry J. aus Düsseldorf",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tanja M. aus Halle (Saale)",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Benedikt Y. aus Siegen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Simba ist super umgesetzt. Besonders Simba gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sandra W. aus Krefeld",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Vincent J. aus Jena",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kilian Y. aus Göttingen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leo N. aus Gütersloh",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Simba gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik K. aus Gelsenkirchen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja K. aus Würzburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte L. aus Ulm",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Robin R. aus Göttingen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Niedlich ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anton Q. aus Salzgitter",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Top Qualität.",
    "customer_name": "Kilian U. aus Hanau",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Timo P. aus Freiburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Justus I. aus Erfurt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jannik Z. aus Darmstadt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anna U. aus Leipzig",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis B. aus München",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kilian G. aus Frankfurt",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nico E. aus Würzburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Süß ist super umgesetzt. Besonders Niedlich gefällt mir gut. Top Qualität.",
    "customer_name": "Johannes Y. aus Bochum",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil E. aus Salzgitter",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. 5 Sterne.",
    "customer_name": "Kilian C. aus Ulm",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Nico J. aus Kiel",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Petra K. aus Gelsenkirchen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Beweglicher Kopf ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Philipp Q. aus Solingen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Niedlich ist super umgesetzt. Besonders Niedlich gefällt mir gut. Top Qualität.",
    "customer_name": "Maximilian I. aus Würzburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "David Y. aus Dortmund",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Disney Magie ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Katharina N. aus Bergisch Gladbach",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Henry I. aus Braunschweig",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Anton V. aus Saarbrücken",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Liam M. aus Osnabrück",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nicole R. aus Braunschweig",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Süß ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Leon Z. aus Heilbronn",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Henry Z. aus Nürnberg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Elias F. aus Kaiserslautern",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Felix A. aus Gelsenkirchen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Nicole N. aus Rostock",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Oskar Z. aus Solingen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Nicole O. aus Wuppertal",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Simba gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kerstin U. aus Offenbach",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nico C. aus Gelsenkirchen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. 5 Sterne.",
    "customer_name": "Lukas R. aus Wiesbaden",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Johannes F. aus Neuss",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. 5 Sterne.",
    "customer_name": "Laura X. aus Nürnberg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anna Y. aus Ludwigsburg",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Niedlich ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Justus G. aus Kaiserslautern",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Maximilian F. aus Gelsenkirchen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Simba ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Simon T. aus Kassel",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Vincent X. aus Wolfsburg",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Disney Magie ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Finn Q. aus Salzgitter",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julian N. aus Karlsruhe",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Süß ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon S. aus Ludwigshafen",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders König der Löwen gefällt mir gut. 5 Sterne.",
    "customer_name": "Paul V. aus Hagen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tim Z. aus Kassel",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Moritz E. aus Pforzheim",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Disney Magie gefällt mir gut. 5 Sterne.",
    "customer_name": "Johannes M. aus Saarbrücken",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Kevin T. aus Freiburg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Theo O. aus Wuppertal",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Einfach zu bauen ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Claudia Z. aus Regensburg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne O. aus Wuppertal",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Sandra B. aus Mülheim an der Ruhr",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar G. aus Bonn",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben F. aus Münster",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Petra I. aus Salzgitter",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Christina E. aus Bochum",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Erik T. aus Heidelberg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Robin J. aus Münster",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Simba gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan Y. aus Ludwigshafen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja A. aus Fürth",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kevin S. aus Braunschweig",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit U. aus Würzburg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Einfach klasse.",
    "customer_name": "Vincent L. aus Paderborn",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Ben R. aus Ludwigshafen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna Q. aus Aachen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina C. aus Dresden",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon D. aus Moers",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Emil F. aus Esslingen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Susanne Q. aus Hagen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Dennis Y. aus Cottbus",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders Simba gefällt mir gut. 5 Sterne.",
    "customer_name": "Kerstin Z. aus Bielefeld",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. 5 Sterne.",
    "customer_name": "Marlon W. aus Herne",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Adrian L. aus Hamm",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Christina D. aus Jena",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian Q. aus Düsseldorf",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christina C. aus Stuttgart",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Stefanie B. aus Bremen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Finn T. aus Bergisch Gladbach",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sabine H. aus Offenbach",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Noah B. aus Potsdam",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. 5 Sterne.",
    "customer_name": "Lisa L. aus Mülheim an der Ruhr",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Henry P. aus Bielefeld",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Dominik Y. aus Kaiserslautern",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sabine B. aus Jena",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Simon B. aus Halle (Saale)",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Yannick S. aus Hagen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Erik Q. aus Reutlingen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Milan L. aus Moers",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Mats J. aus Wiesbaden",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo C. aus Braunschweig",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Andrea F. aus Münster",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Johannes L. aus Pforzheim",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Beweglicher Kopf ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Marlon D. aus Gelsenkirchen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Melanie V. aus Dortmund",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Leo L. aus Oldenburg",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Andrea V. aus Bremen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura T. aus Siegen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lukas N. aus Stuttgart",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian F. aus Bonn",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tobias W. aus Witten",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Milan G. aus Duisburg",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Disney Magie ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus J. aus Nürnberg",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Simon R. aus Darmstadt",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Niedlich ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Niklas H. aus Osnabrück",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Theo Z. aus Recklinghausen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maria L. aus Ingolstadt",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. König der Löwen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne J. aus Osnabrück",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Liam W. aus Rostock",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne O. aus Lübeck",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Alexander B. aus Mönchengladbach",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Philipp G. aus Hanau",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Simba ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Timo T. aus Köln",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Julian G. aus Recklinghausen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kerstin X. aus Magdeburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maximilian V. aus Erfurt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tobias E. aus Mainz",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Timo O. aus Moers",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Top Qualität.",
    "customer_name": "Alexander A. aus Krefeld",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Lenny Z. aus Regensburg",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sabine H. aus Kassel",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kerstin K. aus Reutlingen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan M. aus Bremerhaven",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Benedikt L. aus Gelsenkirchen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil T. aus Berlin",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Tim B. aus Würzburg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dennis N. aus Gütersloh",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Emil Y. aus Bonn",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nadine W. aus Hamm",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra P. aus Bottrop",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anja V. aus Koblenz",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Süß ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon P. aus Ulm",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Simba gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nico E. aus Rostock",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Vincent Q. aus Oberhausen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leo H. aus Göttingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Hannes U. aus Münster",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Theo F. aus Wuppertal",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Süß ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Mats W. aus Iserlohn",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Noah B. aus Münster",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Theo F. aus Heidelberg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Marlon E. aus Osnabrück",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dominik R. aus Remscheid",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Süß ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Andrea Y. aus Gütersloh",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Top Qualität.",
    "customer_name": "Tim M. aus Bottrop",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. 5 Sterne.",
    "customer_name": "Dominik P. aus Krefeld",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Florian U. aus Würzburg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Disney Magie ist super umgesetzt. Besonders Simba gefällt mir gut. Einfach klasse.",
    "customer_name": "Anna A. aus Freiburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Süß ist super umgesetzt. Besonders Simba gefällt mir gut. Einfach klasse.",
    "customer_name": "Dominik F. aus Augsburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Lenny T. aus Freiburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Justus B. aus Jena",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Luca Q. aus Ulm",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Lenny I. aus Kaiserslautern",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nicole Z. aus Jena",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Milan A. aus Hamm",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Oskar R. aus Neuss",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Süß ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Moritz N. aus Potsdam",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Matteo Z. aus Mannheim",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Disney Magie ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Max W. aus Siegen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jan S. aus Karlsruhe",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "David H. aus Kassel",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Max W. aus Kaiserslautern",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luca D. aus Saarbrücken",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Johannes S. aus Kassel",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kilian M. aus Duisburg",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Philipp U. aus Esslingen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Marlon W. aus Münster",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Mats V. aus Köln",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Simba ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia U. aus Gelsenkirchen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anja X. aus Fürth",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Adrian G. aus Herne",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Theo J. aus Salzgitter",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Moritz N. aus Pforzheim",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon S. aus Saarbrücken",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. 5 Sterne.",
    "customer_name": "Samuel R. aus Neuss",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Julian U. aus Erlangen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Jannik W. aus Witten",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Jannik B. aus Mannheim",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Erik A. aus Heilbronn",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Luis R. aus Fürth",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Dominik K. aus Freiburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. König der Löwen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Justus R. aus Bottrop",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Birgit R. aus Hagen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Niedlich ist super umgesetzt. Besonders Niedlich gefällt mir gut. Top Qualität.",
    "customer_name": "Leo X. aus Darmstadt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Dominik T. aus Erfurt",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jonas V. aus Krefeld",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Süß ist super umgesetzt. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis C. aus Wolfsburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. 5 Sterne.",
    "customer_name": "Moritz Y. aus Hannover",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Andrea J. aus Schwerin",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sandra O. aus Cottbus",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Max N. aus Moers",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Justus X. aus Koblenz",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Petra P. aus Ludwigshafen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! König der Löwen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Nico H. aus Mülheim an der Ruhr",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Lisa A. aus Remscheid",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Fabian X. aus Oldenburg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Andrea D. aus Bremen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Valentin T. aus Oberhausen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Top Qualität.",
    "customer_name": "Maria Q. aus Salzgitter",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sabine P. aus Krefeld",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Paul E. aus Schwerin",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Timo F. aus Jena",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders Simba gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Anton M. aus Hannover",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia Q. aus Regensburg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Hannes T. aus Augsburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik W. aus Leverkusen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Beweglicher Kopf ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Moritz L. aus Mönchengladbach",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas H. aus Hagen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Marlon V. aus Frankfurt",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo S. aus Recklinghausen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Philipp I. aus Bonn",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "David X. aus Trier",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. 5 Sterne.",
    "customer_name": "Anna G. aus Oldenburg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Florian S. aus Regensburg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Johannes M. aus Gütersloh",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Benedikt T. aus Aachen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Lukas X. aus Neuss",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Disney Magie ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Top Qualität.",
    "customer_name": "Anja Z. aus Halle (Saale)",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Justus R. aus Osnabrück",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Leon X. aus Ludwigsburg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. König der Löwen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia W. aus Gelsenkirchen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. König der Löwen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Maria P. aus Münster",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. König der Löwen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Valentin C. aus Ulm",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Paul C. aus Magdeburg",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Andrea G. aus Potsdam",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dominik V. aus Krefeld",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Simba gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Ben D. aus Nürnberg",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Süß ist super umgesetzt. Besonders Simba gefällt mir gut. 5 Sterne.",
    "customer_name": "Kerstin F. aus Karlsruhe",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kilian J. aus Frankfurt",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anja V. aus Bremerhaven",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Erik Q. aus Würzburg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christina R. aus Gelsenkirchen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kevin J. aus Chemnitz",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Niedlich gefällt mir gut. Top Qualität.",
    "customer_name": "Oskar K. aus Mülheim an der Ruhr",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Beweglicher Kopf ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Timo F. aus Ulm",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Timo R. aus Karlsruhe",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Julia S. aus Heilbronn",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Stefanie K. aus Kaiserslautern",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Disney Magie ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Luca N. aus Mainz",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christoph Q. aus Krefeld",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon C. aus Chemnitz",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Monika W. aus Hamm",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben M. aus Hannover",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Florian V. aus Bremerhaven",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Nico E. aus Oberhausen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Finn O. aus Darmstadt",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Christoph U. aus Wiesbaden",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Lukas F. aus Paderborn",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Erik U. aus Hamm",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Disney Magie ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Nadine S. aus Bottrop",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Stefanie R. aus Düsseldorf",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Fabian M. aus Ludwigsburg",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Sarah X. aus Bochum",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Christina C. aus Essen",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Simba ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Matteo Z. aus Kiel",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maria T. aus Würzburg",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Christina F. aus Remscheid",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian V. aus Siegen",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Kerstin X. aus Esslingen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Melanie Y. aus Gera",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Geschenkidee ist super umgesetzt. Besonders Süß gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Noah S. aus Trier",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Kerstin X. aus Esslingen",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Jonas J. aus Heidelberg",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Disney Magie ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn L. aus Hannover",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Niklas A. aus Münster",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. 5 Sterne.",
    "customer_name": "Tom T. aus Kaiserslautern",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Paul B. aus Braunschweig",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Birgit Y. aus Kaiserslautern",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dennis Z. aus Augsburg",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Noah F. aus Kaiserslautern",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Yannick Z. aus Osnabrück",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis F. aus Iserlohn",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Stefanie D. aus Mannheim",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders Niedlich gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tom A. aus Oberhausen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Einfach zu bauen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Malte F. aus Reutlingen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Luis J. aus Stuttgart",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Jonas X. aus Jena",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Beweglicher Kopf ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Timo N. aus Kaiserslautern",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Arne Z. aus Herne",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Dominik P. aus Magdeburg",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon T. aus Münster",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Benedikt P. aus Braunschweig",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Susanne D. aus Bergisch Gladbach",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Andrea F. aus Dortmund",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Disney Magie ist super umgesetzt. Besonders Simba gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sandra L. aus Göttingen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Leon P. aus Würzburg",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Adrian K. aus Dortmund",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Beweglicher Kopf ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Oskar A. aus Moers",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Robin I. aus Frankfurt",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Beweglicher Kopf ist super umgesetzt. Besonders Niedlich gefällt mir gut. 5 Sterne.",
    "customer_name": "Matteo D. aus Salzgitter",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. 5 Sterne.",
    "customer_name": "Niklas D. aus Herne",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Katharina B. aus Schwerin",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Süß ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine R. aus Esslingen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Simba ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Luis M. aus Freiburg",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maximilian E. aus Paderborn",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Geschenkidee ist super umgesetzt. Besonders Simba gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dominik M. aus Halle (Saale)",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Adrian K. aus Lübeck",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Simon L. aus Saarbrücken",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne.",
    "customer_name": "Maximilian H. aus Herne",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sandra G. aus Köln",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Disney Magie ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Paul E. aus Kassel",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Einfach zu bauen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Paul W. aus Nürnberg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Moritz Q. aus Offenbach",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Süß ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Christina L. aus Remscheid",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Geschenkidee ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Kerstin X. aus Ludwigshafen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Geschenkidee ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Jannik O. aus Regensburg",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Simba ist super umgesetzt. Besonders Niedlich gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tobias A. aus Esslingen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Luis H. aus Bremen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Jannik J. aus Gelsenkirchen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tom Y. aus Iserlohn",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Beweglicher Kopf ist super umgesetzt. Besonders Süß gefällt mir gut. Top Qualität.",
    "customer_name": "Kerstin S. aus Wiesbaden",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Finn E. aus Kaiserslautern",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Süß ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Einfach klasse.",
    "customer_name": "Tanja P. aus Leverkusen",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Niedlich ist super umgesetzt. Besonders Niedlich gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Julia Z. aus Bochum",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders Simba gefällt mir gut. 5 Sterne.",
    "customer_name": "Jannik V. aus Herne",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Nico C. aus Hannover",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "David I. aus Kiel",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Simba ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne.",
    "customer_name": "Niklas X. aus Recklinghausen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Justus T. aus Reutlingen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Disney Magie ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Top Qualität.",
    "customer_name": "Katharina Y. aus Cottbus",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Süß ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Theo R. aus Witten",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Luis P. aus Gera",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Beweglicher Kopf ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dennis H. aus Hagen",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Simba ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Emil J. aus Saarbrücken",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Disney Magie ist super umgesetzt. Besonders Süß gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Leon F. aus Witten",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Beweglicher Kopf ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Susanne N. aus Witten",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Niedlich ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Yannick D. aus Cottbus",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Süß ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Dennis W. aus Fürth",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Einfach zu bauen ist super umgesetzt. Besonders Simba gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Henry H. aus Ulm",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. König der Löwen ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Top Qualität.",
    "customer_name": "Felix A. aus Kiel",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Geschenkidee ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Top Qualität.",
    "customer_name": "Julia H. aus Ludwigsburg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Niedlich ist super umgesetzt. Besonders Disney Magie gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Dominik I. aus Heidelberg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. König der Löwen ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Milan K. aus Hannover",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Niedlich ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Ben M. aus Gera",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Einfach zu bauen ist super umgesetzt. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Birgit K. aus Wiesbaden",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Disney Magie ist super umgesetzt. Besonders Simba gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine X. aus Düsseldorf",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Einfach zu bauen ist super umgesetzt. Besonders König der Löwen gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nico K. aus Magdeburg",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Geschenkidee ist super umgesetzt. Besonders Beweglicher Kopf gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maximilian T. aus Krefeld",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Luis E. aus Kiel",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Geschenkidee ist super umgesetzt. Besonders Süß gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Hannes N. aus Wuppertal",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Simba ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Niklas G. aus Mönchengladbach",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Simba ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Samuel U. aus Berlin",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Süß ist super umgesetzt. Besonders Einfach zu bauen gefällt mir gut. Top Qualität.",
    "customer_name": "Malte W. aus Stuttgart",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. König der Löwen ist super umgesetzt. Besonders Geschenkidee gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Philipp D. aus Oberhausen",
    "date": "2025-01-01"
  }
];