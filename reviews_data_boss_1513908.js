const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Felix I. aus Heilbronn",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Felix W. aus Regensburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Emil S. aus Bochum",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Malte Z. aus Gelsenkirchen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Liam X. aus Dresden",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Oskar R. aus Krefeld",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Justus I. aus Salzgitter",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Dominik F. aus Gütersloh",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Christoph T. aus Wiesbaden",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Nicole B. aus Augsburg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Matteo J. aus Leipzig",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Anja E. aus Erlangen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Tobias W. aus Recklinghausen",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Claudia L. aus Leverkusen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Jan W. aus Oldenburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Theo F. aus Mannheim",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "David C. aus Pforzheim",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Anja X. aus Köln",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Jannik R. aus Kassel",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Nadine X. aus Ingolstadt",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Finn F. aus Lübeck",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Noah R. aus Witten",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Adrian P. aus Leverkusen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Valentin Y. aus Chemnitz",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Ben H. aus Heilbronn",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Mats D. aus Ludwigshafen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Benedikt Z. aus Berlin",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Jonas L. aus Hannover",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Anton Y. aus Neuss",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Leon P. aus Reutlingen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Max E. aus Hagen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Tanja H. aus Mannheim",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Tom D. aus Salzgitter",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Mats U. aus Düsseldorf",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Luis Q. aus Kaiserslautern",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Lisa S. aus Erlangen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Jannik T. aus Braunschweig",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Dominik M. aus Halle (Saale)",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Julia F. aus Iserlohn",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Paul C. aus Dortmund",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Tom R. aus Bergisch Gladbach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Andrea A. aus Bottrop",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Adrian S. aus Reutlingen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Monika W. aus Mönchengladbach",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Anton F. aus Kassel",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Jannik W. aus Regensburg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Niklas K. aus Hildesheim",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Bastian C. aus Krefeld",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Jannik W. aus Halle (Saale)",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Anton B. aus Regensburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Noah V. aus Hagen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Nadine O. aus Würzburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Jonas N. aus Düsseldorf",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Paul K. aus Solingen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Malte Q. aus Hannover",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Robin V. aus Jena",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Jonas Z. aus Remscheid",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Max A. aus Leverkusen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Oskar U. aus Wolfsburg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Matteo U. aus Ulm",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Fabian P. aus Darmstadt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Christina C. aus Erfurt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Adrian X. aus Salzgitter",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Petra A. aus Siegen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Sascha R. aus Augsburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Christina J. aus Lübeck",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Anton W. aus Kassel",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Nico L. aus Witten",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Anja I. aus Dresden",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Christoph T. aus Magdeburg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Max G. aus Ingolstadt",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Lisa M. aus Hanau",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Timo Z. aus Bochum",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Bastian Y. aus Erlangen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Dennis O. aus Wuppertal",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Tom O. aus Erlangen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Julian S. aus Reutlingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Julia G. aus Mönchengladbach",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Melanie K. aus Solingen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Niklas K. aus Berlin",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Anton K. aus Fürth",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Marlon O. aus Rostock",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Timo I. aus Herne",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Maria L. aus Mannheim",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Emil M. aus Nürnberg",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Florian E. aus Würzburg",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Anton E. aus Wuppertal",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Felix X. aus Ulm",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Dominik B. aus Frankfurt",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Tom M. aus Iserlohn",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Justus S. aus Chemnitz",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Timo M. aus Mönchengladbach",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Mats K. aus Stuttgart",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Liam P. aus Hanau",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Katharina G. aus Solingen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Justus A. aus Krefeld",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Leon Q. aus Karlsruhe",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Melanie I. aus Ludwigshafen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Leon C. aus Leverkusen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Jannik S. aus Augsburg",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Luis N. aus Krefeld",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Philipp J. aus Rostock",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Leon D. aus Gera",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Sascha F. aus Oldenburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Henry O. aus Wiesbaden",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Paul Q. aus Braunschweig",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Noah V. aus Solingen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Melanie F. aus Solingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Nicole W. aus Ludwigsburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Moritz F. aus Ingolstadt",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Tim M. aus Mainz",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Simon W. aus Nürnberg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Jannik F. aus Augsburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Dennis E. aus Koblenz",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Sabine L. aus Ludwigshafen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Susanne N. aus Erlangen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Sarah E. aus Mülheim an der Ruhr",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Valentin Q. aus Essen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Kevin W. aus Mülheim an der Ruhr",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Lenny Y. aus Paderborn",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Stefanie H. aus Bergisch Gladbach",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Timo V. aus Augsburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Johannes D. aus Iserlohn",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Anja P. aus Braunschweig",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Sascha X. aus Osnabrück",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Jonas V. aus Leverkusen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Maria D. aus Hildesheim",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Erik Z. aus Wolfsburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Felix N. aus Braunschweig",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Dennis T. aus Göttingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Anja X. aus Aachen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Christina W. aus Osnabrück",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Bastian W. aus Gera",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Laura K. aus Wuppertal",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Nicole Y. aus Bremerhaven",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Christina U. aus Leverkusen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Niklas O. aus Mainz",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Jan Z. aus Mainz",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Tom M. aus Gera",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Ben C. aus Herne",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Christoph X. aus Jena",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Lisa U. aus Remscheid",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Sascha G. aus Münster",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Lisa F. aus Köln",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Matteo J. aus Iserlohn",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Julia O. aus Wuppertal",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Matteo L. aus Wuppertal",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Felix O. aus Chemnitz",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Nicole Z. aus Regensburg",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Erik Q. aus Fürth",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Nadine J. aus Mannheim",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Nadine E. aus Ingolstadt",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Henry Z. aus Heidelberg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Henry U. aus Düsseldorf",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Lisa K. aus Hannover",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Jonas V. aus Bochum",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Susanne G. aus Oberhausen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Luca K. aus Halle (Saale)",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Philipp S. aus Erfurt",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Marlon H. aus Münster",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Kevin Z. aus Magdeburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Kilian J. aus Kaiserslautern",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Henry V. aus Erlangen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Tim T. aus Herne",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Yannick M. aus Fürth",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Timo I. aus Dresden",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Dominik Q. aus Bergisch Gladbach",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Lisa R. aus Remscheid",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Andrea U. aus Oberhausen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Malte S. aus Frankfurt",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Timo H. aus Salzgitter",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Theo K. aus Saarbrücken",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Moritz V. aus Heilbronn",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Paul N. aus Remscheid",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Anton J. aus Bielefeld",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Theo W. aus Mülheim an der Ruhr",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Tom P. aus Dresden",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Claudia X. aus Ludwigsburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Katharina V. aus Wolfsburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Liam H. aus Wuppertal",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Christoph M. aus Solingen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Julia A. aus Trier",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Marlon E. aus Heidelberg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Leon C. aus Bremerhaven",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Jonas I. aus Fürth",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Claudia H. aus Aachen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Niklas W. aus Offenbach",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Luca C. aus Mannheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Julian E. aus Hamburg",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Luis F. aus Dresden",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Liam U. aus Salzgitter",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Henry Z. aus Dresden",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Dominik U. aus Münster",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Vincent T. aus Jena",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Valentin L. aus Hanau",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Christina D. aus Bremen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Susanne Z. aus Frankfurt",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Christina V. aus Gelsenkirchen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Paul J. aus Berlin",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Samuel I. aus Iserlohn",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Adrian G. aus Düsseldorf",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Sabine O. aus Hanau",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Katharina V. aus Hamburg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Nico J. aus Bochum",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Florian B. aus Mainz",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Marlon Y. aus Bonn",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Dominik X. aus Mannheim",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Alexander R. aus Wuppertal",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Jannik P. aus Leverkusen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Claudia G. aus Gelsenkirchen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Julian I. aus Offenbach",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Adrian I. aus Wolfsburg",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Timo W. aus Gera",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Henry O. aus Iserlohn",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Liam N. aus Mülheim an der Ruhr",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Maria W. aus Solingen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Julia I. aus Würzburg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Marlon Y. aus Dresden",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Tom K. aus Osnabrück",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Monika R. aus Esslingen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Valentin Q. aus Gera",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Justus C. aus Aachen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Erik Y. aus Wiesbaden",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Jan S. aus Erfurt",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Katharina U. aus Kiel",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Liam N. aus Aachen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Felix I. aus Darmstadt",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Christina I. aus Ludwigshafen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Maximilian K. aus Heidelberg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Arne Y. aus Essen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Tanja M. aus Chemnitz",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Justus I. aus Darmstadt",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Noah S. aus Augsburg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Tanja R. aus Freiburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Sascha A. aus Bremen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Kilian A. aus Oberhausen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Sascha T. aus Offenbach",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Vincent U. aus Erlangen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Ben L. aus Augsburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "David N. aus Frankfurt",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Jonas D. aus Mannheim",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Jonas E. aus Braunschweig",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Fabian U. aus Herne",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Marlon T. aus Wiesbaden",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Emil Q. aus Oldenburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Valentin N. aus Solingen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Justus Q. aus Düsseldorf",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Alexander N. aus Leverkusen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Timo X. aus Oldenburg",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Jan V. aus Münster",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Johannes I. aus Braunschweig",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Noah J. aus Hildesheim",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Luca S. aus Berlin",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Christoph P. aus Leverkusen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Kilian A. aus Hanau",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Erik D. aus Fürth",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Anja Q. aus Wolfsburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Kilian T. aus Chemnitz",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Birgit C. aus Kiel",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Nico Y. aus Augsburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Benedikt L. aus Augsburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Simon F. aus Berlin",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Tobias N. aus Jena",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Florian A. aus Osnabrück",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Emil F. aus Nürnberg",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Tobias H. aus Freiburg",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Maximilian W. aus Gelsenkirchen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Moritz L. aus Bottrop",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Ben W. aus Mülheim an der Ruhr",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Sascha F. aus Fürth",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Birgit Z. aus Würzburg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Bastian Z. aus Recklinghausen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Maximilian V. aus Hamburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Max S. aus Reutlingen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Mats B. aus Fürth",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Maximilian E. aus Jena",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Lenny Y. aus Hildesheim",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Susanne Q. aus Würzburg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Simon H. aus Trier",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Melanie O. aus Berlin",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Birgit W. aus Hamm",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Luca E. aus Ludwigshafen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Christina W. aus Witten",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Emil K. aus Recklinghausen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Lisa D. aus Iserlohn",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Nicole O. aus Regensburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Samuel F. aus Hanau",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Sarah W. aus Bremen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Theo M. aus Mainz",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Felix G. aus Halle (Saale)",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Valentin K. aus Bielefeld",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Adrian Q. aus Wuppertal",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Milan S. aus Bremerhaven",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Justus V. aus Siegen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Dennis Q. aus Duisburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Malte J. aus Bergisch Gladbach",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Lisa A. aus Hamm",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Tobias Q. aus Halle (Saale)",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Marlon Z. aus Dresden",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Niklas A. aus Koblenz",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Andrea Y. aus Bonn",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Matteo H. aus Oldenburg",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Luis N. aus Mannheim",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Sarah V. aus Ludwigsburg",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Anja Z. aus Ludwigshafen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Noah O. aus Magdeburg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Robin B. aus Oberhausen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Anja R. aus Recklinghausen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Malte I. aus Bremerhaven",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Nico B. aus Rostock",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Julian G. aus Münster",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Hannes R. aus Heilbronn",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Mats R. aus Regensburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Samuel D. aus Witten",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Niklas W. aus Bergisch Gladbach",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Matteo L. aus Bremen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Petra E. aus Erlangen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Erik A. aus Freiburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Tim M. aus Solingen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Petra D. aus Remscheid",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Christina Z. aus Duisburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "David T. aus Bottrop",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Max H. aus Moers",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Christina I. aus Paderborn",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Kerstin F. aus Ludwigshafen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Arne O. aus Erlangen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Justus B. aus Hanau",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Leon S. aus Kassel",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Dennis L. aus Kassel",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Oskar E. aus Mannheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Kerstin T. aus Remscheid",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Claudia U. aus Wuppertal",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Julia N. aus Heilbronn",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "David Q. aus Hamm",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Arne E. aus Jena",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Lukas N. aus Koblenz",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Kevin H. aus Bielefeld",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Paul O. aus Regensburg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Lukas P. aus Gelsenkirchen",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Jannik S. aus Magdeburg",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Luca C. aus Iserlohn",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Claudia W. aus Hamburg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Petra R. aus Göttingen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Bastian E. aus Pforzheim",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Hannes X. aus Augsburg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Dennis K. aus Düsseldorf",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Robin D. aus Bochum",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Dominik K. aus Lübeck",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Felix L. aus Erfurt",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Hannes P. aus Schwerin",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Claudia G. aus Erfurt",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Laura C. aus Magdeburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Moritz Z. aus Köln",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Nico N. aus Wiesbaden",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Mats M. aus Hildesheim",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Kerstin E. aus Mönchengladbach",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Jonas F. aus Trier",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Tanja W. aus Hannover",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Christina Z. aus Ingolstadt",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Florian U. aus Siegen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Nadine B. aus Solingen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Stefanie J. aus Ludwigshafen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Niklas U. aus Mainz",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Maximilian H. aus Neuss",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Adrian L. aus Ulm",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Nicole E. aus Bottrop",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Lisa U. aus Siegen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Kilian F. aus Recklinghausen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Fabian Z. aus Siegen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Marlon G. aus Aachen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Susanne F. aus Göttingen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Philipp B. aus Remscheid",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Paul C. aus Neuss",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Melanie H. aus Siegen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Nicole K. aus Chemnitz",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "David S. aus Frankfurt",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Sabine J. aus Salzgitter",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Maria Z. aus Essen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Luca G. aus Ludwigsburg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Nadine Y. aus Mainz",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Timo D. aus Essen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Noah H. aus Potsdam",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Anton J. aus Frankfurt",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Justus A. aus Neuss",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Noah P. aus Karlsruhe",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Valentin D. aus Schwerin",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Nadine W. aus Frankfurt",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Sarah G. aus Witten",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Tim A. aus Aachen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Lenny P. aus Düsseldorf",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "David G. aus Bielefeld",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Luca N. aus Wiesbaden",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Robin P. aus Ingolstadt",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Jannik V. aus Erfurt",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Nico K. aus Dortmund",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Adrian E. aus Augsburg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Leon V. aus Schwerin",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Dennis K. aus Mönchengladbach",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Paul I. aus Pforzheim",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Lukas J. aus Hanau",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Valentin F. aus Ludwigsburg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Kevin Z. aus Solingen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Tim O. aus Offenbach",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Noah U. aus Rostock",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Arne Q. aus Mainz",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Niklas O. aus Chemnitz",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Finn V. aus Dortmund",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Sarah H. aus Hannover",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Paul I. aus Augsburg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Alexander A. aus Wiesbaden",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Maximilian C. aus Hamburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Dennis Z. aus Krefeld",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Sabine P. aus Mannheim",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Paul D. aus Potsdam",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Stefanie H. aus Siegen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Sarah R. aus Chemnitz",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Melanie U. aus Oberhausen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Luis V. aus Nürnberg",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Dennis J. aus Mannheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Susanne X. aus Remscheid",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Erik M. aus Braunschweig",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Henry B. aus Mannheim",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Samuel O. aus Köln",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Felix S. aus Krefeld",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Melanie O. aus Mönchengladbach",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Leon V. aus Augsburg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Milan L. aus Heidelberg",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Tom Z. aus Rostock",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Andrea Z. aus Wuppertal",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Sarah Q. aus Erfurt",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Susanne R. aus Herne",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Kerstin G. aus Reutlingen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Benedikt L. aus Leverkusen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Jannik O. aus Berlin",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Felix G. aus Kassel",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Arne S. aus Hamm",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Julia U. aus Nürnberg",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Felix N. aus Pforzheim",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Max R. aus Solingen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Jan Z. aus Salzgitter",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Samuel S. aus Oberhausen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Niklas A. aus Reutlingen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Elias G. aus Leverkusen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Henry C. aus Kaiserslautern",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Anton T. aus Esslingen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "David T. aus Ludwigsburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Robin W. aus Leipzig",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Kerstin Z. aus Braunschweig",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Sascha K. aus Mannheim",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Tobias O. aus Leverkusen",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Anna Z. aus Salzgitter",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Benedikt N. aus München",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Kilian L. aus Mönchengladbach",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Emil K. aus Würzburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Alexander P. aus Schwerin",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Justus B. aus Kiel",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Fabian X. aus Offenbach",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Monika A. aus Frankfurt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Elias O. aus Wolfsburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Tom X. aus Bielefeld",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Tim F. aus Hildesheim",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Leon W. aus Witten",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Sandra Z. aus Erfurt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Maria V. aus Ludwigshafen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Samuel B. aus Iserlohn",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Sascha W. aus Oberhausen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Bastian G. aus Siegen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Jonas K. aus Esslingen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Marlon Q. aus Magdeburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Matteo H. aus Köln",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Sascha A. aus Dortmund",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Leo A. aus Düsseldorf",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Fabian Q. aus Münster",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "David Y. aus Reutlingen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Melanie F. aus Witten",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Tom P. aus Jena",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Dominik K. aus Leipzig",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Elias S. aus Hildesheim",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Katharina N. aus Kiel",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Anna U. aus Wolfsburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Timo H. aus Krefeld",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Katharina A. aus Herne",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Maria D. aus Nürnberg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Sarah K. aus Erlangen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Kevin B. aus Ludwigshafen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Moritz L. aus Erfurt",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Jonas Y. aus Wuppertal",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Adrian A. aus Kaiserslautern",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Kerstin U. aus Herne",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Ben Y. aus Hamm",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Christoph X. aus Schwerin",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Sandra D. aus Mainz",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Julia U. aus Leverkusen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Benedikt N. aus Krefeld",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Nadine Q. aus Mönchengladbach",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Anton X. aus Regensburg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Tom U. aus Bremerhaven",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Robin D. aus Hannover",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Dominik Z. aus Herne",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Stefanie O. aus Halle (Saale)",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Florian P. aus Braunschweig",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Theo N. aus Salzgitter",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Vincent N. aus Lübeck",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Ben P. aus Osnabrück",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Stefanie B. aus Iserlohn",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Tobias J. aus Witten",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Jan U. aus Krefeld",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Dennis G. aus Hagen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Susanne U. aus Recklinghausen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Birgit C. aus Leipzig",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Johannes Q. aus Oldenburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Theo M. aus Bottrop",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Paul E. aus Witten",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Monika T. aus Pforzheim",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Kevin N. aus Hanau",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Stefanie P. aus Siegen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Maximilian L. aus Bremerhaven",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Lukas D. aus Erfurt",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Valentin H. aus Duisburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "David X. aus Remscheid",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Claudia E. aus Witten",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Anja H. aus Hagen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Birgit N. aus Fürth",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Matteo K. aus Oldenburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Leo P. aus Schwerin",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Justus V. aus Oberhausen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Sascha F. aus Berlin",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Sabine X. aus Ludwigshafen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Tom V. aus Hannover",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Samuel Y. aus Nürnberg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Luca D. aus Karlsruhe",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Claudia L. aus Kiel",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Maria E. aus Ludwigshafen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Timo N. aus Würzburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Marlon A. aus Rostock",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Adrian Y. aus Augsburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Jonas J. aus Augsburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Arne O. aus Wiesbaden",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Anna F. aus Ingolstadt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Alexander X. aus Erfurt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Oskar R. aus Bremerhaven",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Valentin V. aus Iserlohn",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Christoph D. aus Erfurt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Kilian O. aus Heilbronn",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Liam F. aus Trier",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Arne Y. aus Ingolstadt",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Henry R. aus Kiel",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Moritz K. aus Neuss",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Maximilian H. aus Berlin",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Birgit N. aus Ludwigshafen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Leo Y. aus Würzburg",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Jannik N. aus Halle (Saale)",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Adrian C. aus Hildesheim",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Petra L. aus Lübeck",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Julia A. aus Trier",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Henry A. aus Berlin",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Christina Q. aus Saarbrücken",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Tom C. aus Hamburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Sarah H. aus Augsburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Arne X. aus Stuttgart",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Kilian X. aus Gera",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Samuel O. aus Hamm",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Alexander S. aus Gütersloh",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Anja M. aus Halle (Saale)",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Melanie F. aus Braunschweig",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Lukas I. aus Gelsenkirchen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Kerstin E. aus Magdeburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Yannick W. aus Münster",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Sandra J. aus Freiburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Dominik K. aus Oldenburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Elias J. aus Hagen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Matteo N. aus Köln",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Luis H. aus Gera",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Monika H. aus Heidelberg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Oskar T. aus Dortmund",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Leo B. aus Wiesbaden",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Finn U. aus Schwerin",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Sascha K. aus Trier",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Samuel H. aus Bochum",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Theo A. aus Duisburg",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Jan O. aus Kiel",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Arne D. aus Aachen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Maximilian S. aus Darmstadt",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Kevin Y. aus Berlin",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Lisa O. aus Potsdam",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Noah V. aus Offenbach",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Katharina A. aus Hagen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Justus X. aus Düsseldorf",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Lukas X. aus Frankfurt",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Tim M. aus Solingen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Malte O. aus Ludwigsburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Andrea J. aus Dresden",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Tom L. aus Jena",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Robin M. aus Ingolstadt",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Anton H. aus Offenbach",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Laura W. aus Fürth",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Benedikt W. aus Köln",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Erik D. aus Bergisch Gladbach",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Anton L. aus Moers",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Leo A. aus Osnabrück",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Anna F. aus Heidelberg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Anton P. aus Münster",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Theo O. aus Osnabrück",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Lenny Q. aus Hannover",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Maximilian B. aus Offenbach",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Oskar J. aus Duisburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "David J. aus Magdeburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Katharina M. aus Aachen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Jan H. aus Recklinghausen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Maria D. aus Hanau",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Luis S. aus Bielefeld",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Alexander J. aus Herne",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Philipp V. aus Hamburg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Nico D. aus Ulm",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Vincent L. aus Bottrop",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Henry R. aus Gera",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Timo Z. aus München",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Tim Y. aus Darmstadt",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Sarah X. aus Frankfurt",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Kevin V. aus Bonn",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Anna N. aus Heilbronn",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Leon Z. aus Köln",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Arne M. aus Heidelberg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Maximilian S. aus Oldenburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Theo A. aus Düsseldorf",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Laura B. aus Hildesheim",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Philipp R. aus Saarbrücken",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Nicole J. aus Solingen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Katharina Y. aus Augsburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Elias V. aus Hildesheim",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Andrea L. aus Mannheim",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Dennis R. aus Gelsenkirchen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Max K. aus Bergisch Gladbach",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Bastian U. aus Offenbach",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Kilian R. aus Iserlohn",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Valentin O. aus Gera",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Luca V. aus Kiel",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Florian T. aus Wolfsburg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Maria D. aus Gelsenkirchen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Milan Z. aus Ludwigshafen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Anna W. aus Wuppertal",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Emil V. aus Pforzheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Stefanie P. aus Rostock",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Katharina V. aus Stuttgart",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Julia O. aus Frankfurt",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Sabine F. aus Heidelberg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Sascha Z. aus Dortmund",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Christina N. aus Gera",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Jan K. aus Gütersloh",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Sascha M. aus Salzgitter",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Niklas I. aus Kassel",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Birgit W. aus Düsseldorf",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Nico S. aus Duisburg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Samuel D. aus Herne",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Arne Z. aus Jena",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Christina C. aus Dortmund",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Moritz T. aus Erlangen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Dennis D. aus Erfurt",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Dennis B. aus Mannheim",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Florian E. aus Solingen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Oskar F. aus Düsseldorf",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Robin D. aus Düsseldorf",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Jannik J. aus Herne",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Alexander J. aus Oberhausen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Melanie R. aus Lübeck",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Nico W. aus Lübeck",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Vincent A. aus Augsburg",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Valentin F. aus Köln",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Arne X. aus Freiburg",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Ben F. aus Jena",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Laura N. aus Potsdam",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "David H. aus Koblenz",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Birgit L. aus Gera",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Stefanie R. aus Wiesbaden",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Maria E. aus Krefeld",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Laura U. aus Gelsenkirchen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Julian J. aus Kiel",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Sandra V. aus Ingolstadt",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Finn Y. aus Münster",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Malte R. aus Kaiserslautern",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Maria B. aus München",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Henry L. aus Köln",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Stefanie K. aus Würzburg",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Emil U. aus Braunschweig",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Oskar Y. aus Lübeck",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Florian W. aus Nürnberg",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Julian G. aus Oldenburg",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Lenny E. aus Mönchengladbach",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Henry V. aus Herne",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Leo Q. aus Heidelberg",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Matteo E. aus Cottbus",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Sarah B. aus Bielefeld",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Christina V. aus Magdeburg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Ben L. aus Neuss",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Simon Z. aus Wuppertal",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Malte D. aus Wolfsburg",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Milan A. aus Bielefeld",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Theo Q. aus Esslingen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Arne Z. aus Offenbach",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Florian C. aus Koblenz",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Elias L. aus Siegen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Maria D. aus Saarbrücken",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Matteo R. aus Leverkusen",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Andrea I. aus Erlangen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Christoph F. aus Gelsenkirchen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Lisa A. aus Gelsenkirchen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Alexander U. aus Mönchengladbach",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Oskar F. aus Remscheid",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Johannes X. aus Frankfurt",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Jonas O. aus Heidelberg",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Kerstin N. aus Bottrop",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Nadine L. aus Hanau",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Christoph S. aus Duisburg",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Dominik W. aus Mönchengladbach",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Monika Q. aus Solingen",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Justus Z. aus Iserlohn",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Mats C. aus Gera",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Dominik U. aus Hannover",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Katharina P. aus Gelsenkirchen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Oskar S. aus Wiesbaden",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Liam Y. aus Koblenz",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Alexander J. aus Gera",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Anja L. aus Solingen",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Jannik U. aus Moers",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Simon B. aus Saarbrücken",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Florian N. aus Salzgitter",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "David P. aus Pforzheim",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Kilian J. aus Würzburg",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Kevin C. aus Hagen",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Florian F. aus Hamburg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Yannick G. aus Magdeburg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Petra X. aus Lübeck",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Andrea J. aus Duisburg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Henry T. aus Regensburg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Katharina D. aus Witten",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Melanie L. aus Berlin",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Max I. aus Regensburg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Schwer. Würde ich wieder kaufen.",
    "customer_name": "Noah V. aus Göttingen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Lenny E. aus Erfurt",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Adrian U. aus Offenbach",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Timo T. aus Wuppertal",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Yannick A. aus Ludwigshafen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Valentin E. aus Stuttgart",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Niklas U. aus Chemnitz",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Tim O. aus Pforzheim",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Yannick U. aus Potsdam",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Oskar P. aus Frankfurt",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Christoph I. aus Berlin",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Anna D. aus Moers",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Finn Q. aus Dortmund",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Sascha C. aus Moers",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Paul Z. aus Cottbus",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Noah P. aus Augsburg",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Nico D. aus Mainz",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Sandra W. aus Herne",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Jannik Q. aus Augsburg",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Männlich. Klare Kaufempfehlung.",
    "customer_name": "Laura O. aus Aachen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Nico Y. aus Recklinghausen",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Luxus. Ein echter Hingucker.",
    "customer_name": "Florian Z. aus Trier",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Sascha S. aus Dresden",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Leon J. aus Oldenburg",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Niklas X. aus Freiburg",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxus gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Fabian S. aus Hannover",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Henry D. aus Leverkusen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Liam L. aus Münster",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Nadine G. aus Frankfurt",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Christoph O. aus Gelsenkirchen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Andrea G. aus Mönchengladbach",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Theo S. aus Lübeck",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Julian Y. aus Moers",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Malte S. aus Wiesbaden",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Schwer. Sehr zufrieden.",
    "customer_name": "Milan G. aus Hamm",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Lisa S. aus Trier",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Christina W. aus Recklinghausen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Schwer gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Hannes E. aus Hamm",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Luxus. 5 Sterne.",
    "customer_name": "Lukas J. aus Pforzheim",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Anton E. aus Iserlohn",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Petra Z. aus Hamburg",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Adrian Z. aus Lübeck",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Top Design. Passt perfekt.",
    "customer_name": "Paul E. aus Reutlingen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Julia E. aus Bergisch Gladbach",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Susanne E. aus Offenbach",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Maximilian R. aus Neuss",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Milan V. aus Paderborn",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Johannes R. aus Regensburg",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Maria M. aus Krefeld",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Kerstin I. aus Mönchengladbach",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Felix P. aus Iserlohn",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Birgit Z. aus Hannover",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Top Design gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Valentin O. aus Aachen",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Petra U. aus Dortmund",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Milan J. aus Lübeck",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Anja A. aus Stuttgart",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Sascha D. aus Kiel",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Anja G. aus Jena",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Justus D. aus Bielefeld",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Adrian U. aus Wuppertal",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Claudia V. aus Esslingen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Anja S. aus Regensburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Arne S. aus Chemnitz",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Florian Z. aus Remscheid",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Jonas F. aus Solingen",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Kevin L. aus Iserlohn",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Benedikt C. aus Salzgitter",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Marlon X. aus Bergisch Gladbach",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Andrea F. aus Schwerin",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Männlich. Würde ich wieder kaufen.",
    "customer_name": "Andrea T. aus Chemnitz",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Schwer gefällt mir sehr. Das Design ist Top Design. Kann ich empfehlen.",
    "customer_name": "Milan D. aus Mülheim an der Ruhr",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxus gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Niklas D. aus Schwerin",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Theo R. aus Mannheim",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Samuel Y. aus Bonn",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Kilian G. aus Dortmund",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Melanie M. aus Ludwigshafen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Adrian K. aus Augsburg",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Klare Kaufempfehlung.",
    "customer_name": "Philipp K. aus Leverkusen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Sehr zufrieden.",
    "customer_name": "Tim W. aus Braunschweig",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Valentin S. aus Gera",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxus gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Simon L. aus Wiesbaden",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Yannick K. aus Wuppertal",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Schwer. 5 Sterne.",
    "customer_name": "Lenny E. aus Bonn",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Susanne D. aus Freiburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Top Design gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Philipp T. aus Solingen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Marlon L. aus Salzgitter",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Susanne N. aus Heidelberg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Sarah D. aus Mülheim an der Ruhr",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Männlich gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "Felix X. aus Esslingen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Top Design gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Julia E. aus Wuppertal",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Matteo G. aus Oldenburg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Birgit D. aus Heidelberg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Kevin B. aus Krefeld",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Kilian R. aus Kiel",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxus gefällt mir sehr. Das Design ist Top Design. Jeden Cent wert.",
    "customer_name": "Tanja H. aus Esslingen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Schwer. Ein echter Hingucker.",
    "customer_name": "Fabian K. aus Wolfsburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Justus M. aus Duisburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Jeden Cent wert.",
    "customer_name": "Noah F. aus Kiel",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Justus V. aus Leipzig",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Top Design gefällt mir sehr. Das Design ist Top Design. 5 Sterne.",
    "customer_name": "Benedikt G. aus Nürnberg",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Bastian Y. aus Leipzig",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Männlich gefällt mir sehr. Das Design ist Top Design. Klare Kaufempfehlung.",
    "customer_name": "Philipp Y. aus Bottrop",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Männlich gefällt mir sehr. Das Design ist Schwer. Kann ich empfehlen.",
    "customer_name": "Sascha S. aus Mönchengladbach",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxus gefällt mir sehr. Das Design ist Luxus. Klare Kaufempfehlung.",
    "customer_name": "Jannik D. aus Schwerin",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Schwer gefällt mir sehr. Das Design ist Männlich. 5 Sterne.",
    "customer_name": "Erik D. aus Neuss",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Sarah C. aus Duisburg",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Schwer. Passt perfekt.",
    "customer_name": "Lukas H. aus Iserlohn",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Sehr zufrieden.",
    "customer_name": "Moritz G. aus Augsburg",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Jeden Cent wert.",
    "customer_name": "Oskar K. aus Düsseldorf",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Top Design gefällt mir sehr. Das Design ist Männlich. Sehr zufrieden.",
    "customer_name": "Birgit F. aus Kaiserslautern",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Admiral Serie. 5 Sterne.",
    "customer_name": "Lukas L. aus Magdeburg",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Männlich gefällt mir sehr. Das Design ist Luxus. Passt perfekt.",
    "customer_name": "Monika O. aus Wolfsburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Admiral Serie gefällt mir sehr. Das Design ist Schwer. Klare Kaufempfehlung.",
    "customer_name": "Dennis V. aus Gelsenkirchen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Schwer gefällt mir sehr. Das Design ist Top Design. Würde ich wieder kaufen.",
    "customer_name": "Philipp N. aus Dresden",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Monika V. aus Essen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Ein echter Hingucker.",
    "customer_name": "Alexander T. aus Hamburg",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Schwer gefällt mir sehr. Das Design ist Männlich. Kann ich empfehlen.",
    "customer_name": "Matteo P. aus Wiesbaden",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Top Design. Ein echter Hingucker.",
    "customer_name": "Johannes J. aus Heilbronn",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Kann ich empfehlen.",
    "customer_name": "Yannick O. aus Nürnberg",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Top Design gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Kerstin N. aus Schwerin",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Admiral Serie gefällt mir sehr. Das Design ist Luxus. Kann ich empfehlen.",
    "customer_name": "Adrian T. aus Erfurt",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Schwer gefällt mir sehr. Das Design ist Top Design. Sehr zufrieden.",
    "customer_name": "Matteo Z. aus Lübeck",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Admiral Serie gefällt mir sehr. Das Design ist Männlich. Ein echter Hingucker.",
    "customer_name": "Mats H. aus Krefeld",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Top Design gefällt mir sehr. Das Design ist Männlich. Passt perfekt.",
    "customer_name": "David Y. aus Wiesbaden",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Simon K. aus Siegen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Würde ich wieder kaufen.",
    "customer_name": "Vincent C. aus Osnabrück",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Männlich gefällt mir sehr. Das Design ist Admiral Serie. Jeden Cent wert.",
    "customer_name": "Sarah W. aus Regensburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxus gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Justus C. aus Bonn",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Top Design gefällt mir sehr. Das Design ist Schwer. Jeden Cent wert.",
    "customer_name": "Claudia K. aus Mainz",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top Design gefällt mir sehr. Das Design ist Luxus. Würde ich wieder kaufen.",
    "customer_name": "Paul U. aus Frankfurt",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Schwer gefällt mir sehr. Das Design ist Admiral Serie. Passt perfekt.",
    "customer_name": "Tom M. aus Reutlingen",
    "date": "2025-01-01"
  }
];