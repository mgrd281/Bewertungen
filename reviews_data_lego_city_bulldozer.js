const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustelle ist super umgesetzt. Besonders Baustelle gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Jan G. aus Berlin",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Nico T. aus Gelsenkirchen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bulldozer ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "Erik O. aus Hamburg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Ketten ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Jan Q. aus Bottrop",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Baustelle gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christoph Z. aus Wiesbaden",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Stefanie S. aus Mainz",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Ketten ist super umgesetzt. Besonders Baustelle gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Justus P. aus Kassel",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bulldozer ist super umgesetzt. Besonders City Welt gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Kevin L. aus Bielefeld",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. City Welt ist super umgesetzt. Besonders Gelb gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Maria I. aus Darmstadt",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustellenfahrzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Vincent V. aus Herne",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Baustelle ist super umgesetzt. Besonders Gelb gefällt mir gut. Einfach klasse.",
    "customer_name": "Moritz T. aus Lübeck",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja U. aus Hanau",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. City Welt ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne X. aus Dresden",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Ketten ist super umgesetzt. Besonders Gelb gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sandra U. aus Nürnberg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Robustes Spielzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. 5 Sterne.",
    "customer_name": "Valentin X. aus Essen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Ketten ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Emil Y. aus Ingolstadt",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Robustes Spielzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Claudia D. aus Berlin",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Ketten gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Florian V. aus Braunschweig",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Baustellenfahrzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. 5 Sterne.",
    "customer_name": "David U. aus Leipzig",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. City Welt ist super umgesetzt. Besonders Baustelle gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Benedikt Y. aus Ulm",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Robustes Spielzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Adrian Y. aus Aachen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Liam E. aus Ulm",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. City Welt ist super umgesetzt. Besonders City Welt gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Noah U. aus Würzburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Gelb ist super umgesetzt. Besonders Ketten gefällt mir gut. 5 Sterne.",
    "customer_name": "Valentin A. aus Schwerin",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Robustes Spielzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Philipp D. aus Heidelberg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Ketten ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Moritz O. aus Koblenz",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Gelb ist super umgesetzt. Besonders Gelb gefällt mir gut. 5 Sterne.",
    "customer_name": "Andrea B. aus Recklinghausen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bulldozer ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Top Qualität.",
    "customer_name": "Finn F. aus Cottbus",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Toll für Kinder ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Monika Y. aus Salzgitter",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Toll für Kinder ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tom L. aus Moers",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Robustes Spielzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Mats F. aus Mannheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Baustelle ist super umgesetzt. Besonders Gelb gefällt mir gut. 5 Sterne.",
    "customer_name": "Erik Z. aus Bochum",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Baustellenfahrzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. 5 Sterne.",
    "customer_name": "David V. aus Hagen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Bulldozer ist super umgesetzt. Besonders Ketten gefällt mir gut. Top Qualität.",
    "customer_name": "Nadine I. aus Moers",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Ketten ist super umgesetzt. Besonders Baustelle gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Arne X. aus Fürth",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Toll für Kinder ist super umgesetzt. Besonders Ketten gefällt mir gut. Einfach klasse.",
    "customer_name": "Benedikt I. aus Aachen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Ketten ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Elias M. aus Jena",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Baustellenfahrzeug ist super umgesetzt. Besonders Baustelle gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon M. aus Cottbus",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. City Welt ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Top Qualität.",
    "customer_name": "Theo S. aus Bremerhaven",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Baustellenfahrzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Valentin X. aus Fürth",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. City Welt ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Leon I. aus Darmstadt",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Bulldozer ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Sandra Y. aus Augsburg",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Ketten ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Ben O. aus Essen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Jan C. aus Iserlohn",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Toll für Kinder ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Top Qualität.",
    "customer_name": "Luca F. aus Heidelberg",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. City Welt ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Valentin C. aus Jena",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. 5 Sterne.",
    "customer_name": "Niklas A. aus Bergisch Gladbach",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Gelb ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "Lisa J. aus Heidelberg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Robustes Spielzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Andrea N. aus Ulm",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustellenfahrzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Yannick H. aus Leverkusen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Toll für Kinder ist super umgesetzt. Besonders Baustelle gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Max W. aus Darmstadt",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Ketten ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tanja F. aus Siegen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Robustes Spielzeug ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jonas G. aus Salzgitter",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Toll für Kinder ist super umgesetzt. Besonders Gelb gefällt mir gut. Einfach klasse.",
    "customer_name": "Lisa C. aus Cottbus",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. City Welt ist super umgesetzt. Besonders City Welt gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Moritz D. aus Neuss",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. City Welt ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Dominik I. aus Iserlohn",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Baustellenfahrzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. 5 Sterne.",
    "customer_name": "Christoph A. aus Würzburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Baustellenfahrzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "Kerstin O. aus München",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Gelb ist super umgesetzt. Besonders Baustelle gefällt mir gut. Einfach klasse.",
    "customer_name": "Christina B. aus Bielefeld",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Claudia S. aus Esslingen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Toll für Kinder ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Moritz T. aus Darmstadt",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Toll für Kinder ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Tim J. aus Mülheim an der Ruhr",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Baustelle ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Sascha X. aus Münster",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Gelb ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Claudia Y. aus Heilbronn",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Gelb ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon O. aus Kassel",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Baustellenfahrzeug ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo W. aus Bremerhaven",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Toll für Kinder ist super umgesetzt. Besonders Ketten gefällt mir gut. 5 Sterne.",
    "customer_name": "Erik F. aus Halle (Saale)",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Ketten ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Sarah J. aus Kiel",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Gelb ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Lukas F. aus Siegen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Baustellenfahrzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tim Z. aus Gelsenkirchen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustelle ist super umgesetzt. Besonders City Welt gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Bastian Y. aus Düsseldorf",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. City Welt ist super umgesetzt. Besonders Gelb gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Justus K. aus Kiel",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Toll für Kinder ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Vincent B. aus Bochum",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Baustelle ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Niklas T. aus Mülheim an der Ruhr",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Toll für Kinder ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Paul A. aus Gera",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Toll für Kinder ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anton R. aus Herne",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. City Welt ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Christina O. aus Bremerhaven",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Sehr zufrieden.",
    "customer_name": "David E. aus Jena",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Gelb ist super umgesetzt. Besonders Ketten gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo T. aus Remscheid",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Yannick I. aus Reutlingen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Baustelle ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Top Qualität.",
    "customer_name": "Oskar S. aus Witten",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! City Welt ist super umgesetzt. Besonders Ketten gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Yannick X. aus Erlangen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bulldozer ist super umgesetzt. Besonders Baustelle gefällt mir gut. Top Qualität.",
    "customer_name": "Jonas H. aus Köln",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. City Welt ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Sarah W. aus Regensburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Gelb ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Top Qualität.",
    "customer_name": "Kerstin V. aus Düsseldorf",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Robustes Spielzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Nadine K. aus Berlin",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Toll für Kinder ist super umgesetzt. Besonders Baustelle gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Claudia B. aus Paderborn",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sandra L. aus Esslingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bulldozer ist super umgesetzt. Besonders Gelb gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria S. aus Hagen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Alexander W. aus Braunschweig",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. City Welt ist super umgesetzt. Besonders Baustelle gefällt mir gut. Top Qualität.",
    "customer_name": "Theo H. aus Saarbrücken",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Robustes Spielzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Robin N. aus Mönchengladbach",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Baustelle gefällt mir gut. 5 Sterne.",
    "customer_name": "Theo C. aus Leipzig",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Baustellenfahrzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Malte L. aus Frankfurt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Anna R. aus Reutlingen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. City Welt ist super umgesetzt. Besonders Ketten gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo G. aus Cottbus",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Baustellenfahrzeug ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Top Qualität.",
    "customer_name": "Dennis M. aus Wuppertal",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. City Welt ist super umgesetzt. Besonders Baustelle gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nadine M. aus München",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Baustellenfahrzeug ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Einfach klasse.",
    "customer_name": "Timo Z. aus Wolfsburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. City Welt ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Robin P. aus Frankfurt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. City Welt ist super umgesetzt. Besonders Gelb gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Emil Z. aus Offenbach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Baustellenfahrzeug ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Top Qualität.",
    "customer_name": "Matteo Z. aus Freiburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. City Welt ist super umgesetzt. Besonders Ketten gefällt mir gut. Einfach klasse.",
    "customer_name": "Leon S. aus Mannheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Baustelle ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats D. aus Cottbus",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Ketten ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Claudia R. aus Hanau",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Baustellenfahrzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "David M. aus Wolfsburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Kerstin C. aus Würzburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. City Welt ist super umgesetzt. Besonders Baustelle gefällt mir gut. 5 Sterne.",
    "customer_name": "Kerstin U. aus Bremerhaven",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Toll für Kinder ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Top Qualität.",
    "customer_name": "Petra G. aus Bremen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Susanne R. aus Erfurt",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Oskar J. aus Recklinghausen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! City Welt ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Simon U. aus Münster",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Robustes Spielzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Monika I. aus Hamburg",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bulldozer ist super umgesetzt. Besonders Baustelle gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Vincent X. aus Frankfurt",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Ketten ist super umgesetzt. Besonders Ketten gefällt mir gut. 5 Sterne.",
    "customer_name": "Kevin N. aus Darmstadt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Baustellenfahrzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Malte B. aus Krefeld",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Baustelle ist super umgesetzt. Besonders Baustelle gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Felix P. aus Fürth",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Toll für Kinder ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Dennis F. aus Wiesbaden",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. City Welt ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Top Qualität.",
    "customer_name": "Birgit E. aus Bonn",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. City Welt ist super umgesetzt. Besonders Gelb gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Katharina Y. aus Kiel",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Robustes Spielzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Oskar H. aus Essen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Ketten ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lisa L. aus Erfurt",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Robustes Spielzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Einfach klasse.",
    "customer_name": "Niklas X. aus Gera",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Toll für Kinder ist super umgesetzt. Besonders Gelb gefällt mir gut. 5 Sterne.",
    "customer_name": "Alexander V. aus Leipzig",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Toll für Kinder ist super umgesetzt. Besonders Ketten gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Timo X. aus Aachen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Gelb ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Anja I. aus Reutlingen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Baustellenfahrzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Susanne M. aus Mannheim",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Robustes Spielzeug ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Kilian T. aus Kassel",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Ketten ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nicole W. aus Dresden",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Jan R. aus Leipzig",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Ketten ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Sandra P. aus Hanau",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Gelb ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. 5 Sterne.",
    "customer_name": "Paul G. aus Fürth",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Toll für Kinder ist super umgesetzt. Besonders Ketten gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Arne Y. aus Braunschweig",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Gelb ist super umgesetzt. Besonders City Welt gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Monika J. aus Ludwigsburg",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Bulldozer ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Maria Q. aus Mönchengladbach",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Gelb ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "Samuel F. aus Iserlohn",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Baustellenfahrzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Kerstin Y. aus Hildesheim",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "David M. aus Mannheim",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. City Welt ist super umgesetzt. Besonders Ketten gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Tobias H. aus Recklinghausen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Baustelle gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Noah G. aus Karlsruhe",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Ketten ist super umgesetzt. Besonders City Welt gefällt mir gut. Einfach klasse.",
    "customer_name": "Henry W. aus Hamm",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Simon I. aus Leverkusen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. City Welt ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Top Qualität.",
    "customer_name": "Tom K. aus Trier",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Robustes Spielzeug ist super umgesetzt. Besonders Baustelle gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Alexander V. aus Hamm",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Ketten ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Jonas B. aus Salzgitter",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Bulldozer ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Julian W. aus Recklinghausen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Baustellenfahrzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. 5 Sterne.",
    "customer_name": "Timo Q. aus Oberhausen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Robustes Spielzeug ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Nicole I. aus Pforzheim",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustellenfahrzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Philipp V. aus Ludwigshafen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Toll für Kinder ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "David E. aus Heidelberg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Birgit S. aus Mannheim",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Baustelle ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Anja G. aus Remscheid",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Robustes Spielzeug ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander H. aus Offenbach",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Gelb ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Henry T. aus Bielefeld",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Laura A. aus Oberhausen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Ketten ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "Emil T. aus Paderborn",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Moritz C. aus Chemnitz",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Baustelle ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Top Qualität.",
    "customer_name": "Marlon Z. aus Potsdam",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "David X. aus Fürth",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Sarah V. aus Remscheid",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Baustelle ist super umgesetzt. Besonders Gelb gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Melanie P. aus Essen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Christina G. aus Gütersloh",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Baustelle ist super umgesetzt. Besonders Gelb gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Petra B. aus Offenbach",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Robustes Spielzeug ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Jannik P. aus Solingen",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Baustellenfahrzeug ist super umgesetzt. Besonders Baustelle gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Lenny I. aus Koblenz",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Gelb ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Elias G. aus Herne",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. City Welt ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Adrian N. aus Wiesbaden",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. City Welt ist super umgesetzt. Besonders Bulldozer gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Tim H. aus Trier",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Baustelle ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Adrian F. aus Pforzheim",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Ketten ist super umgesetzt. Besonders Bulldozer gefällt mir gut. 5 Sterne.",
    "customer_name": "Sascha W. aus Osnabrück",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Baustellenfahrzeug ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Macht sich gut im Regal.",
    "customer_name": "Christoph Y. aus Osnabrück",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Robustes Spielzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. 5 Sterne.",
    "customer_name": "Milan T. aus Frankfurt",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Bulldozer ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Tanja D. aus Chemnitz",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Toll für Kinder ist super umgesetzt. Besonders Ketten gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Finn T. aus Göttingen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Gelb ist super umgesetzt. Besonders Ketten gefällt mir gut. Einfach klasse.",
    "customer_name": "Kilian Z. aus Hannover",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Baustelle ist super umgesetzt. Besonders Gelb gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Tim X. aus Darmstadt",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. Ketten ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Samuel C. aus Herne",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. Ketten ist super umgesetzt. Besonders Baustelle gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Marlon F. aus Bergisch Gladbach",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Musste ich einfach haben. City Welt ist super umgesetzt. Besonders City Welt gefällt mir gut. Top Qualität.",
    "customer_name": "Leo C. aus Mülheim an der Ruhr",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Robustes Spielzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Super Preis-Leistung.",
    "customer_name": "Anna J. aus Duisburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange drauf gewartet. City Welt ist super umgesetzt. Besonders Baustellenfahrzeug gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Justus R. aus Oldenburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustellenfahrzeug ist super umgesetzt. Besonders City Welt gefällt mir gut. 5 Sterne.",
    "customer_name": "Tobias U. aus Frankfurt",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO enttäuscht nie. Bulldozer ist super umgesetzt. Besonders Toll für Kinder gefällt mir gut. Klare Kaufempfehlung.",
    "customer_name": "Monika A. aus Herne",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Toll für Kinder ist super umgesetzt. Besonders Ketten gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Mats Z. aus Iserlohn",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk besorgt. Bulldozer ist super umgesetzt. Besonders Robustes Spielzeug gefällt mir gut. Top Qualität.",
    "customer_name": "David N. aus Ulm",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft. Gelb ist super umgesetzt. Besonders City Welt gefällt mir gut. Würde ich wieder kaufen.",
    "customer_name": "Yannick A. aus Bottrop",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung wie immer. Baustellenfahrzeug ist super umgesetzt. Besonders Ketten gefällt mir gut. Sehr zufrieden.",
    "customer_name": "Liam F. aus Regensburg",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War ein Spontankauf. Baustellenfahrzeug ist super umgesetzt. Besonders Gelb gefällt mir gut. Der Aufbau hat Spaß gemacht.",
    "customer_name": "Maria Y. aus Mannheim",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich aufgebaut! Baustelle ist super umgesetzt. Besonders Gelb gefällt mir gut. Top Qualität.",
    "customer_name": "Anna L. aus Ludwigshafen",
    "date": "2025-01-06"
  }
];