const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Philipp D. aus Reutlingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Jan Z. aus Nürnberg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Arne K. aus Witten",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Johannes H. aus Leverkusen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Hannes V. aus Kassel",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Stefanie Y. aus Essen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Julia G. aus Gera",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Jan D. aus Wiesbaden",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Noah K. aus Cottbus",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Lenny G. aus Iserlohn",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Milan C. aus Schwerin",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Leon H. aus Bergisch Gladbach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Andrea Q. aus Osnabrück",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Samuel L. aus Düsseldorf",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Jannik T. aus Bochum",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Max L. aus Gütersloh",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Samuel M. aus Ingolstadt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Arne Z. aus Potsdam",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Jannik S. aus Erfurt",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Robin M. aus Magdeburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Marlon E. aus Köln",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Milan K. aus Münster",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Yannick Y. aus Würzburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Maria E. aus Erlangen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Moritz D. aus Trier",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Justus Q. aus Ludwigshafen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Alexander C. aus Hamburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Fabian A. aus Hagen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Blau gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Laura A. aus Köln",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Emil W. aus Iserlohn",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Christina X. aus Dresden",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Stefanie R. aus Mannheim",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Valentin G. aus Mannheim",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Alexander H. aus Stuttgart",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Leo F. aus Bergisch Gladbach",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Liam L. aus Gera",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Jonas R. aus Hildesheim",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Jonas E. aus Mannheim",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Sarah L. aus Ludwigshafen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Nadine X. aus Siegen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Robin M. aus Freiburg",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Fabian O. aus Bottrop",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "Julia X. aus Hamburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Felix E. aus Oberhausen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Maria P. aus Solingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Vincent O. aus Nürnberg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Lukas K. aus Esslingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "Susanne N. aus Bonn",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "Claudia U. aus Heilbronn",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Florian W. aus Koblenz",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Theo O. aus Neuss",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Susanne X. aus Herne",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Dennis J. aus Trier",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Jan Y. aus Bergisch Gladbach",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Tobias B. aus Düsseldorf",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Malte U. aus Gütersloh",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Philipp Y. aus Paderborn",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Simon E. aus Bochum",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Matteo X. aus Iserlohn",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Laura V. aus Leverkusen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Lisa C. aus Braunschweig",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Nicole S. aus Hamburg",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Lukas E. aus Köln",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Sabine D. aus Pforzheim",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Milan I. aus Wiesbaden",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Anton E. aus Leverkusen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Sabine S. aus Esslingen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Fabian E. aus Köln",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Niklas Z. aus Hamm",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "David R. aus Leverkusen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Maximilian P. aus Hannover",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Kerstin G. aus Hagen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Max I. aus Bremerhaven",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Benedikt J. aus Koblenz",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Petra F. aus Ulm",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Florian Y. aus Münster",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Andrea P. aus Gera",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Claudia M. aus Hannover",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Dominik G. aus Oberhausen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Mats O. aus Wuppertal",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Lisa Y. aus Karlsruhe",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Julian C. aus Hanau",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Nadine H. aus Chemnitz",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Susanne Q. aus Salzgitter",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Florian T. aus Magdeburg",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Anja G. aus Bochum",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Adrian M. aus Siegen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Milan J. aus Köln",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Johannes N. aus Oberhausen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Niklas P. aus Mannheim",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Dennis H. aus Fürth",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Hannes C. aus Oldenburg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Sandra B. aus Essen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Anna B. aus Pforzheim",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Jan S. aus Bremerhaven",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Valentin R. aus Frankfurt",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Luis J. aus Hamm",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Dominik T. aus Dresden",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Tobias G. aus Bergisch Gladbach",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Kerstin J. aus Mönchengladbach",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Jannik Y. aus Mainz",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Adrian Y. aus Chemnitz",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Andrea K. aus Koblenz",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Nico P. aus Essen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Maximilian B. aus Düsseldorf",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Nico A. aus Remscheid",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Monika C. aus Ingolstadt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Laura S. aus Bremerhaven",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Ben H. aus Oberhausen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Luca M. aus Remscheid",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Monika U. aus Stuttgart",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Emil L. aus Remscheid",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Justus W. aus Neuss",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Jan V. aus Esslingen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Hannes Z. aus Offenbach",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Julian J. aus Iserlohn",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "Lukas T. aus Erlangen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Claudia B. aus Duisburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Andrea G. aus Hanau",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Valentin Q. aus Reutlingen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Claudia L. aus Hamburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Emil W. aus Schwerin",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Andrea I. aus Wiesbaden",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Robin J. aus Kassel",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Max P. aus Jena",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Leo R. aus Aachen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Felix W. aus Gelsenkirchen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Henry T. aus Frankfurt",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Henry X. aus Würzburg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Henry F. aus Ludwigshafen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Niklas F. aus Magdeburg",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Melanie W. aus Kaiserslautern",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Ben F. aus Münster",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Vincent L. aus Wiesbaden",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Dennis I. aus Neuss",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Elias A. aus Cottbus",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "Oskar M. aus Duisburg",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Lisa I. aus Kiel",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Anja F. aus Karlsruhe",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Laura X. aus Bergisch Gladbach",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Sabine Z. aus Bielefeld",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Kerstin F. aus Essen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Oskar H. aus Gütersloh",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Katharina B. aus Karlsruhe",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Maria L. aus Bremen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Malte W. aus Kiel",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Finn Y. aus Osnabrück",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Birgit Y. aus Wiesbaden",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Julia F. aus Herne",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Hannes X. aus Aachen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "Dennis C. aus Mainz",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Moritz E. aus Heilbronn",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Robin N. aus Koblenz",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Nadine Y. aus Chemnitz",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Samuel D. aus Göttingen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Laura Z. aus Mainz",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Susanne C. aus Bremen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Tom V. aus Siegen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Kevin G. aus Leverkusen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Moritz O. aus Neuss",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Anja G. aus Regensburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Luca A. aus Mannheim",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Emil M. aus Chemnitz",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Tim Y. aus Trier",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Christina T. aus Bielefeld",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Sandra I. aus Heidelberg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Claudia C. aus Ulm",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Noah B. aus Gelsenkirchen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Felix N. aus Solingen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Matteo C. aus Bremerhaven",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Stefanie U. aus Reutlingen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Luis Z. aus Jena",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Mats T. aus Schwerin",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Tobias P. aus Hannover",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Jannik X. aus Recklinghausen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Bastian O. aus Würzburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Lenny Z. aus Erlangen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Noah R. aus Heilbronn",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Nico O. aus Koblenz",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Arne T. aus Fürth",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Jonas I. aus Münster",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Andrea U. aus Berlin",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Sabine T. aus Düsseldorf",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Valentin H. aus Esslingen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Theo B. aus Herne",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Sascha J. aus Dresden",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Kevin K. aus Esslingen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Sascha F. aus Berlin",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Erik U. aus Trier",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Christina R. aus Gütersloh",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Christoph Q. aus Herne",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Felix C. aus Gelsenkirchen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Laura T. aus Wiesbaden",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "David O. aus Hamburg",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Erik E. aus Ludwigshafen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Moritz H. aus Witten",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Tim W. aus Heilbronn",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Luca S. aus Bremerhaven",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Emil Z. aus Salzgitter",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Moritz R. aus Leipzig",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Philipp P. aus Mainz",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Milan Z. aus Pforzheim",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Jan J. aus Kassel",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Erik L. aus Frankfurt",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Ben J. aus Köln",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Vincent L. aus Heilbronn",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Marlon K. aus Rostock",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Arne X. aus Reutlingen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Jonas H. aus Pforzheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Jannik H. aus Chemnitz",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Felix V. aus Wuppertal",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Alexander E. aus Bochum",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Katharina N. aus Ludwigsburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Niklas X. aus Dortmund",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Adrian Q. aus Bonn",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Elias R. aus Halle (Saale)",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Malte B. aus Essen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Malte W. aus Witten",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Dominik R. aus Magdeburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Paul I. aus Osnabrück",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Henry N. aus Gütersloh",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Alexander Z. aus Bielefeld",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Nadine F. aus Krefeld",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Maria C. aus Essen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Leon R. aus München",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "David A. aus Heidelberg",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Hannes E. aus Köln",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Ben X. aus Ulm",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Katharina H. aus Düsseldorf",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Matteo Y. aus Kiel",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Sarah G. aus Bottrop",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Blau gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Max W. aus Bonn",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Finn Y. aus Krefeld",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Luis X. aus Saarbrücken",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Kevin C. aus Oberhausen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "Alexander T. aus Oberhausen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Tim D. aus Bielefeld",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Valentin V. aus Leverkusen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Liam A. aus Aachen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Timo D. aus Bottrop",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Justus J. aus Reutlingen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Stefanie Q. aus Hanau",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Leon C. aus Schwerin",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Yannick H. aus Köln",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Stefanie H. aus Gera",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Sascha L. aus Esslingen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Emil Y. aus Chemnitz",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Tanja D. aus Hannover",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Maria D. aus Bottrop",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Nico P. aus München",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Arne V. aus Leverkusen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Nadine O. aus Heidelberg",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Sandra Y. aus Moers",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Samuel B. aus Saarbrücken",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Susanne G. aus Regensburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Christoph I. aus Heidelberg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Justus Q. aus Wiesbaden",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Tobias B. aus Wuppertal",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Lisa Q. aus Aachen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Jannik Q. aus Rostock",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Susanne W. aus Karlsruhe",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Moritz R. aus Oldenburg",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Melanie A. aus Schwerin",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Christina Y. aus Hannover",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Simon N. aus Regensburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Nico J. aus Hanau",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Monika S. aus Karlsruhe",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Vincent L. aus Recklinghausen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Monika V. aus Chemnitz",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Petra Q. aus Osnabrück",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Lenny O. aus Mainz",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Elias Q. aus Potsdam",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Petra F. aus Braunschweig",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Robin D. aus Regensburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Mats C. aus Leipzig",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "Benedikt U. aus Gera",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Erik Y. aus Esslingen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Birgit K. aus Ludwigshafen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Elias S. aus Hamm",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Sarah D. aus Krefeld",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Luis I. aus Würzburg",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Paul Z. aus Wuppertal",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Tobias A. aus Neuss",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Blau gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Anja B. aus Düsseldorf",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Henry D. aus Wiesbaden",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Christoph S. aus Hamburg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "David O. aus Berlin",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Nico T. aus Bremerhaven",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Simon Q. aus Wuppertal",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Nadine Z. aus Stuttgart",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Stabil gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Elias A. aus Witten",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Julian T. aus Hanau",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Kerstin B. aus Hildesheim",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Melanie X. aus Iserlohn",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Adrian V. aus Dortmund",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Tim Z. aus Dresden",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Liam Z. aus Duisburg",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Fabian U. aus Koblenz",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Kevin J. aus Nürnberg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Stabil gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Finn O. aus Magdeburg",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Jonas F. aus München",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Nadine S. aus Heidelberg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Nico J. aus Esslingen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Tom S. aus Hagen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Moritz M. aus Berlin",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "Alexander G. aus Leipzig",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Malte X. aus Bochum",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Robin D. aus Hannover",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Bastian O. aus Fürth",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Philipp T. aus Berlin",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Tom Z. aus Wuppertal",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Sascha M. aus Regensburg",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Bastian I. aus Dresden",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Anton M. aus Bergisch Gladbach",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Tobias P. aus Pforzheim",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Emil Y. aus Herne",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Susanne V. aus Mönchengladbach",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Julia F. aus Mannheim",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Christoph X. aus Gelsenkirchen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Malte F. aus Paderborn",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Nadine T. aus Hagen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Metallarmband. Jeden Cent wert.",
    "customer_name": "Felix Y. aus Erfurt",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Florian M. aus Ludwigsburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Maximilian B. aus Witten",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Sabine C. aus Kaiserslautern",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Florian A. aus Kassel",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Elias A. aus Wuppertal",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Julia I. aus Bottrop",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Lukas Y. aus Chemnitz",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Alexander G. aus Fürth",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Alexander F. aus Kassel",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Metallarmband gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Elias W. aus Halle (Saale)",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Leon H. aus Braunschweig",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Stefanie A. aus Hamm",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Leon Z. aus Solingen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Liam H. aus Ingolstadt",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Blau gefällt mir sehr. Das Design ist Wasserdicht. 5 Sterne.",
    "customer_name": "Marlon E. aus Duisburg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Erik S. aus Hamm",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Julia P. aus Mönchengladbach",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Ben V. aus Chemnitz",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Blau gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Emil Z. aus Iserlohn",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Niklas D. aus Reutlingen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Nicole S. aus Hildesheim",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Marlon M. aus Ludwigshafen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Sabine Q. aus Freiburg",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Stefanie P. aus Mönchengladbach",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Timo J. aus Herne",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Jannik G. aus Regensburg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Robin R. aus Rostock",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Wasserdicht gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Luis T. aus München",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Susanne V. aus Mönchengladbach",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Dominik R. aus Köln",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Moritz W. aus Düsseldorf",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Luca V. aus Bonn",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Nico C. aus Oldenburg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Yannick I. aus Moers",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Luis U. aus Leverkusen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Wasserdicht gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Anton Y. aus Bielefeld",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Stabil. 5 Sterne.",
    "customer_name": "Jannik E. aus Reutlingen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Wasserdicht. Jeden Cent wert.",
    "customer_name": "Maria J. aus Trier",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Moritz H. aus Dresden",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Max M. aus Witten",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Matteo S. aus Fürth",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Elias G. aus Kassel",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Kevin X. aus Heidelberg",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Andrea O. aus Darmstadt",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Robin A. aus Augsburg",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Anja B. aus Bochum",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Alexander O. aus Pforzheim",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Theo K. aus München",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Anja Y. aus Hildesheim",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Oskar L. aus Schwerin",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Stabil gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Leon H. aus Karlsruhe",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Arne U. aus Hamburg",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Nadine M. aus Wuppertal",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "Milan A. aus Remscheid",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Hannes G. aus Magdeburg",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Vincent A. aus Neuss",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Finn S. aus Würzburg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Birgit L. aus Münster",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Metallarmband gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Elias P. aus Recklinghausen",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Felix V. aus Erlangen",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Melanie X. aus Braunschweig",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Kevin W. aus Kassel",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Jonas Y. aus Reutlingen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Benedikt E. aus Ingolstadt",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Blau gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Timo A. aus Remscheid",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Paul R. aus Recklinghausen",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Toll gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Paul U. aus Düsseldorf",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Stabil gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Christina G. aus Stuttgart",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Kerstin U. aus Stuttgart",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Metallarmband. Passt perfekt.",
    "customer_name": "Sabine M. aus Münster",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Kann ich empfehlen.",
    "customer_name": "Lukas J. aus Wuppertal",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Marlon H. aus Hamburg",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Yannick L. aus Darmstadt",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Toll gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Florian E. aus Augsburg",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Sehr zufrieden.",
    "customer_name": "Katharina P. aus Nürnberg",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Johannes W. aus Witten",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Passt perfekt.",
    "customer_name": "Tom X. aus Salzgitter",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Marlon K. aus Braunschweig",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Sehr zufrieden.",
    "customer_name": "Christoph Q. aus Würzburg",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Niklas N. aus Aachen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Milan H. aus Cottbus",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Johannes V. aus Potsdam",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Noah R. aus Mainz",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Maximilian Q. aus Darmstadt",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "Petra Z. aus Halle (Saale)",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Blau gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Lenny C. aus Osnabrück",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Susanne V. aus Pforzheim",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Nadine W. aus Heidelberg",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Benedikt C. aus Kiel",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Tom V. aus Heilbronn",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Toll. Passt perfekt.",
    "customer_name": "Moritz V. aus Mannheim",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Toll. 5 Sterne.",
    "customer_name": "Florian Y. aus Cottbus",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Tim S. aus Moers",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Julian Z. aus Wolfsburg",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Arne X. aus Saarbrücken",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Blau gefällt mir sehr. Das Design ist Blau. Würde ich wieder kaufen.",
    "customer_name": "Anna P. aus Wolfsburg",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Yannick P. aus Heilbronn",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Wasserdicht gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Theo N. aus Mannheim",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Johannes I. aus Stuttgart",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Toll. Würde ich wieder kaufen.",
    "customer_name": "Adrian L. aus Chemnitz",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Blau. Kann ich empfehlen.",
    "customer_name": "Jannik X. aus Witten",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Tobias U. aus Lübeck",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Toll. Klare Kaufempfehlung.",
    "customer_name": "Leon Z. aus Gütersloh",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Christina W. aus Wiesbaden",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Stabil gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Benedikt G. aus Hannover",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Toll gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Elias N. aus Leverkusen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Katharina Q. aus Freiburg",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Toll. Ein echter Hingucker.",
    "customer_name": "Nicole F. aus Karlsruhe",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Blau gefällt mir sehr. Das Design ist Wasserdicht. Ein echter Hingucker.",
    "customer_name": "Florian H. aus Ludwigshafen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Passt perfekt.",
    "customer_name": "Florian V. aus Hagen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Stabil gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Niklas R. aus Saarbrücken",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Stabil gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Johannes N. aus Halle (Saale)",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Jeden Cent wert.",
    "customer_name": "Christoph K. aus Bielefeld",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Klare Kaufempfehlung.",
    "customer_name": "Luis Q. aus Dresden",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Toll gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Petra F. aus Berlin",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Toll gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Sabine G. aus Leipzig",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Monika I. aus Bottrop",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Blau gefällt mir sehr. Das Design ist Blau. Sehr zufrieden.",
    "customer_name": "Andrea T. aus Düsseldorf",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Wasserdicht gefällt mir sehr. Das Design ist Stabil. Würde ich wieder kaufen.",
    "customer_name": "Maria P. aus Bonn",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Metallarmband gefällt mir sehr. Das Design ist Stabil. Sehr zufrieden.",
    "customer_name": "Philipp X. aus Reutlingen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Toll gefällt mir sehr. Das Design ist Toll. Jeden Cent wert.",
    "customer_name": "Sascha W. aus Ludwigsburg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Metallarmband gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Marlon Q. aus Berlin",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Wasserdicht gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Samuel N. aus Mannheim",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Metallarmband gefällt mir sehr. Das Design ist Blau. Jeden Cent wert.",
    "customer_name": "Dominik X. aus Ingolstadt",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Wasserdicht. Würde ich wieder kaufen.",
    "customer_name": "David L. aus Mülheim an der Ruhr",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Lukas L. aus Hagen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Blau. 5 Sterne.",
    "customer_name": "Samuel V. aus Solingen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Metallarmband gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Yannick T. aus Neuss",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Christina S. aus Siegen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Stabil. Ein echter Hingucker.",
    "customer_name": "Milan H. aus Bielefeld",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Blau gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "Henry Z. aus Esslingen",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Kann ich empfehlen.",
    "customer_name": "Sarah I. aus Witten",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Würde ich wieder kaufen.",
    "customer_name": "Anton S. aus Erlangen",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Blau. Passt perfekt.",
    "customer_name": "Lenny U. aus Paderborn",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Toll gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Laura L. aus Bottrop",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. Ein echter Hingucker.",
    "customer_name": "Ben Y. aus Wolfsburg",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Wasserdicht gefällt mir sehr. Das Design ist Metallarmband. 5 Sterne.",
    "customer_name": "Lisa M. aus Paderborn",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Stabil gefällt mir sehr. Das Design ist Toll. Sehr zufrieden.",
    "customer_name": "Emil S. aus Gera",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Metallarmband gefällt mir sehr. Das Design ist Metallarmband. Klare Kaufempfehlung.",
    "customer_name": "David H. aus Solingen",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Wasserdicht gefällt mir sehr. Das Design ist Blau. Klare Kaufempfehlung.",
    "customer_name": "Liam S. aus Oldenburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Blau gefällt mir sehr. Das Design ist Toll. Kann ich empfehlen.",
    "customer_name": "Sarah Y. aus Recklinghausen",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Stabil gefällt mir sehr. Das Design ist Stabil. Kann ich empfehlen.",
    "customer_name": "Tanja C. aus Ingolstadt",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Toll gefällt mir sehr. Das Design ist Wasserdicht. Klare Kaufempfehlung.",
    "customer_name": "Kerstin R. aus Essen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Toll gefällt mir sehr. Das Design ist Blau. Ein echter Hingucker.",
    "customer_name": "Luis Y. aus Karlsruhe",
    "date": "2025-01-01"
  }
];