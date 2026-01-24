const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Funktional gefällt mir sehr. Das Design ist Markant. Sehr zufrieden.",
    "customer_name": "Tobias N. aus Stuttgart",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Ben K. aus Witten",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Florian L. aus Chemnitz",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Anna T. aus Krefeld",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Birgit J. aus Mainz",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Jeden Cent wert.",
    "customer_name": "Jannik P. aus Magdeburg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Finn P. aus Karlsruhe",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Tanja L. aus Heilbronn",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Malte J. aus Halle (Saale)",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Genau gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Moritz M. aus Hamm",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sport-Chrono gefällt mir sehr. Das Design ist Funktional. Passt perfekt.",
    "customer_name": "Lenny B. aus Gelsenkirchen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sport-Chrono gefällt mir sehr. Das Design ist Funktional. Sehr zufrieden.",
    "customer_name": "Sascha B. aus Pforzheim",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Genau gefällt mir sehr. Das Design ist Sport-Chrono. 5 Sterne.",
    "customer_name": "Anja N. aus Gera",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Susanne U. aus Witten",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Tom X. aus Chemnitz",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Genau gefällt mir sehr. Das Design ist Funktional. Kann ich empfehlen.",
    "customer_name": "Sabine G. aus Bonn",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Nicole S. aus Darmstadt",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Genau. Kann ich empfehlen.",
    "customer_name": "Petra K. aus Osnabrück",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Genau gefällt mir sehr. Das Design ist Boss Qualität. Klare Kaufempfehlung.",
    "customer_name": "Arne U. aus Fürth",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Nicole M. aus Hildesheim",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Lisa Y. aus Dresden",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Boss Qualität gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Lenny W. aus Frankfurt",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. 5 Sterne.",
    "customer_name": "Sarah Q. aus Fürth",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Malte R. aus Hagen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Funktional gefällt mir sehr. Das Design ist Genau. Ein echter Hingucker.",
    "customer_name": "Mats Q. aus Gütersloh",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sport-Chrono gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Arne Q. aus Hanau",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Genau gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Simon G. aus Cottbus",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Passt perfekt.",
    "customer_name": "Dominik O. aus Rostock",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Funktional gefällt mir sehr. Das Design ist Genau. Ein echter Hingucker.",
    "customer_name": "Malte L. aus Bremen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Genau gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Anja F. aus Mannheim",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Anja Y. aus Gera",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Genau gefällt mir sehr. Das Design ist Funktional. Kann ich empfehlen.",
    "customer_name": "Laura L. aus Hamm",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Jeden Cent wert.",
    "customer_name": "Andrea W. aus Bielefeld",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Boss Qualität gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Oskar Z. aus Bielefeld",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Funktional gefällt mir sehr. Das Design ist Boss Qualität. 5 Sterne.",
    "customer_name": "Nadine V. aus Bergisch Gladbach",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Markant gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Paul A. aus Bottrop",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Markant gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Katharina J. aus Hildesheim",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Funktional gefällt mir sehr. Das Design ist Markant. Jeden Cent wert.",
    "customer_name": "Vincent U. aus Esslingen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Kann ich empfehlen.",
    "customer_name": "Maximilian D. aus Köln",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Genau gefällt mir sehr. Das Design ist Markant. Jeden Cent wert.",
    "customer_name": "Anna E. aus Regensburg",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Boss Qualität gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Nico M. aus Erfurt",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Florian K. aus Nürnberg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Sandra J. aus Kiel",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Theo F. aus Lübeck",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Markant gefällt mir sehr. Das Design ist Boss Qualität. 5 Sterne.",
    "customer_name": "Justus D. aus Stuttgart",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Anja M. aus Solingen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Markant gefällt mir sehr. Das Design ist Funktional. Würde ich wieder kaufen.",
    "customer_name": "Sascha M. aus Hanau",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Dominik P. aus Nürnberg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Melanie S. aus Köln",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Fabian N. aus Iserlohn",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Markant. Passt perfekt.",
    "customer_name": "Julia M. aus Bergisch Gladbach",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Boss Qualität. Kann ich empfehlen.",
    "customer_name": "Lisa J. aus Pforzheim",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Stefanie B. aus Aachen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Genau gefällt mir sehr. Das Design ist Funktional. 5 Sterne.",
    "customer_name": "Lenny W. aus Fürth",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Melanie P. aus Gelsenkirchen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Markant gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Anja F. aus Offenbach",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Genau gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Theo N. aus Siegen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Markant. Sehr zufrieden.",
    "customer_name": "Maria P. aus Düsseldorf",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Markant gefällt mir sehr. Das Design ist Funktional. Passt perfekt.",
    "customer_name": "Susanne L. aus Gera",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Markant. Jeden Cent wert.",
    "customer_name": "Elias L. aus Kassel",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Funktional gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Simon B. aus Mainz",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Birgit G. aus Bochum",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Boss Qualität gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Anja E. aus München",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Malte T. aus Essen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Dennis Z. aus Gütersloh",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Christina L. aus Ingolstadt",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Genau gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Petra I. aus Potsdam",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Claudia M. aus Koblenz",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sport-Chrono gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Ben N. aus Düsseldorf",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Jannik A. aus Gelsenkirchen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Funktional gefällt mir sehr. Das Design ist Funktional. Passt perfekt.",
    "customer_name": "Julia Q. aus Ulm",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Tobias Z. aus Heidelberg",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Monika X. aus Bielefeld",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Hannes A. aus Gelsenkirchen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Lisa P. aus Regensburg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Markant gefällt mir sehr. Das Design ist Boss Qualität. Kann ich empfehlen.",
    "customer_name": "Paul R. aus Düsseldorf",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Würde ich wieder kaufen.",
    "customer_name": "Lenny I. aus Offenbach",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Boss Qualität gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Kilian P. aus Münster",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Genau gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Marlon F. aus Bottrop",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Maximilian A. aus Iserlohn",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Boss Qualität. Würde ich wieder kaufen.",
    "customer_name": "David Y. aus Wiesbaden",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Genau. Kann ich empfehlen.",
    "customer_name": "Luis D. aus Nürnberg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "David N. aus Darmstadt",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Nico R. aus Oldenburg",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Boss Qualität gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Matteo V. aus Heilbronn",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Genau gefällt mir sehr. Das Design ist Boss Qualität. 5 Sterne.",
    "customer_name": "Anton G. aus Esslingen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Vincent Z. aus Recklinghausen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Anton I. aus Iserlohn",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Markant gefällt mir sehr. Das Design ist Funktional. Jeden Cent wert.",
    "customer_name": "Moritz V. aus Münster",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Vincent O. aus Mainz",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Maximilian Q. aus Hannover",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sport-Chrono gefällt mir sehr. Das Design ist Funktional. 5 Sterne.",
    "customer_name": "Samuel P. aus Ludwigshafen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Jeden Cent wert.",
    "customer_name": "Max X. aus Hildesheim",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Boss Qualität gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Samuel A. aus Halle (Saale)",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Genau gefällt mir sehr. Das Design ist Genau. Ein echter Hingucker.",
    "customer_name": "Milan H. aus Ludwigsburg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Valentin F. aus Regensburg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Florian E. aus Stuttgart",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Genau. Sehr zufrieden.",
    "customer_name": "Kerstin T. aus Bremerhaven",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Genau. Sehr zufrieden.",
    "customer_name": "Philipp L. aus Bremerhaven",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Bastian J. aus Recklinghausen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Anja N. aus Mönchengladbach",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Susanne T. aus Bielefeld",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Würde ich wieder kaufen.",
    "customer_name": "Petra O. aus Darmstadt",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Markant gefällt mir sehr. Das Design ist Genau. Sehr zufrieden.",
    "customer_name": "Finn B. aus Duisburg",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Arne U. aus Offenbach",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Genau gefällt mir sehr. Das Design ist Funktional. Passt perfekt.",
    "customer_name": "Matteo P. aus Göttingen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Maximilian B. aus Cottbus",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Jeden Cent wert.",
    "customer_name": "Adrian N. aus Koblenz",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sport-Chrono gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Bastian J. aus Essen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Erik X. aus Gelsenkirchen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Markant gefällt mir sehr. Das Design ist Funktional. Sehr zufrieden.",
    "customer_name": "Lisa J. aus Leverkusen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Leon H. aus Leipzig",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Boss Qualität gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Milan A. aus Mönchengladbach",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Boss Qualität gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Birgit U. aus Duisburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Markant. Kann ich empfehlen.",
    "customer_name": "Anja C. aus Frankfurt",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Genau gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Max O. aus Augsburg",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Stefanie V. aus Würzburg",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Genau gefällt mir sehr. Das Design ist Genau. Kann ich empfehlen.",
    "customer_name": "Claudia V. aus Remscheid",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. 5 Sterne.",
    "customer_name": "Stefanie Y. aus Mannheim",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sport-Chrono gefällt mir sehr. Das Design ist Markant. Jeden Cent wert.",
    "customer_name": "Luis S. aus Essen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Genau gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Kilian P. aus Regensburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Benedikt X. aus München",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Markant gefällt mir sehr. Das Design ist Markant. Passt perfekt.",
    "customer_name": "Tanja R. aus Karlsruhe",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Genau gefällt mir sehr. Das Design ist Sport-Chrono. Jeden Cent wert.",
    "customer_name": "Benedikt I. aus Karlsruhe",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Tim X. aus Ulm",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Markant gefällt mir sehr. Das Design ist Boss Qualität. Kann ich empfehlen.",
    "customer_name": "Tim Y. aus Augsburg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Markant gefällt mir sehr. Das Design ist Genau. Ein echter Hingucker.",
    "customer_name": "David E. aus Bergisch Gladbach",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sport-Chrono gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Paul Q. aus Saarbrücken",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Adrian R. aus Bremen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Markant gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Jan F. aus Wolfsburg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Genau gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "David G. aus Ludwigshafen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Boss Qualität gefällt mir sehr. Das Design ist Genau. Kann ich empfehlen.",
    "customer_name": "Elias F. aus Kaiserslautern",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Jeden Cent wert.",
    "customer_name": "Philipp P. aus Erlangen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Robin Y. aus Würzburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sport-Chrono gefällt mir sehr. Das Design ist Markant. Passt perfekt.",
    "customer_name": "Marlon A. aus Reutlingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Marlon V. aus Hagen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Justus P. aus Bremen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Genau gefällt mir sehr. Das Design ist Markant. Jeden Cent wert.",
    "customer_name": "Matteo Y. aus Offenbach",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Passt perfekt.",
    "customer_name": "Tobias G. aus Jena",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sport-Chrono gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Fabian P. aus Iserlohn",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Markant gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Dominik I. aus Würzburg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Emil P. aus Erlangen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Passt perfekt.",
    "customer_name": "Marlon K. aus Ludwigsburg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Boss Qualität gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Katharina H. aus Heilbronn",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Genau gefällt mir sehr. Das Design ist Funktional. 5 Sterne.",
    "customer_name": "Lisa L. aus Salzgitter",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Funktional. Klare Kaufempfehlung.",
    "customer_name": "Lenny Y. aus Ludwigsburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Klare Kaufempfehlung.",
    "customer_name": "Finn X. aus Düsseldorf",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Boss Qualität gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Arne M. aus Köln",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Markant. Sehr zufrieden.",
    "customer_name": "Tanja V. aus Iserlohn",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Markant. Kann ich empfehlen.",
    "customer_name": "Christina E. aus Augsburg",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Markant gefällt mir sehr. Das Design ist Genau. Ein echter Hingucker.",
    "customer_name": "Benedikt T. aus Moers",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Klare Kaufempfehlung.",
    "customer_name": "Petra Z. aus Hannover",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Passt perfekt.",
    "customer_name": "Johannes M. aus Erlangen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "David K. aus Gelsenkirchen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Kann ich empfehlen.",
    "customer_name": "Ben M. aus Braunschweig",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Henry W. aus Leverkusen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Funktional. Kann ich empfehlen.",
    "customer_name": "Anja U. aus Frankfurt",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Funktional gefällt mir sehr. Das Design ist Funktional. Jeden Cent wert.",
    "customer_name": "Simon A. aus Ludwigsburg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Genau gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Samuel F. aus Freiburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Markant gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Tobias R. aus Recklinghausen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Würde ich wieder kaufen.",
    "customer_name": "Nicole J. aus Offenbach",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Boss Qualität gefällt mir sehr. Das Design ist Markant. Passt perfekt.",
    "customer_name": "Max J. aus Duisburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. 5 Sterne.",
    "customer_name": "Sascha L. aus Ludwigshafen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Sport-Chrono. 5 Sterne.",
    "customer_name": "Erik X. aus Würzburg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Markant gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Christina B. aus Krefeld",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Würde ich wieder kaufen.",
    "customer_name": "Julia L. aus Magdeburg",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Anja T. aus Wuppertal",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Markant gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Katharina J. aus Krefeld",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Nicole C. aus Aachen",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Markant. Passt perfekt.",
    "customer_name": "Robin G. aus Würzburg",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Genau gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Christoph J. aus Erfurt",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sport-Chrono gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Samuel T. aus Gelsenkirchen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Sarah D. aus Nürnberg",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Sascha M. aus Esslingen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Jeden Cent wert.",
    "customer_name": "Theo S. aus Regensburg",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Lenny R. aus Heidelberg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Funktional. 5 Sterne.",
    "customer_name": "Emil P. aus Paderborn",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Markant gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Timo B. aus Kaiserslautern",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Robin V. aus Rostock",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sport-Chrono gefällt mir sehr. Das Design ist Markant. Sehr zufrieden.",
    "customer_name": "Niklas M. aus Rostock",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Funktional gefällt mir sehr. Das Design ist Genau. Ein echter Hingucker.",
    "customer_name": "Arne Y. aus Siegen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Elias H. aus Bochum",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Genau gefällt mir sehr. Das Design ist Boss Qualität. Passt perfekt.",
    "customer_name": "Bastian U. aus Erlangen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Johannes S. aus Kaiserslautern",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Würde ich wieder kaufen.",
    "customer_name": "Fabian Q. aus Recklinghausen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Johannes J. aus Leverkusen",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Funktional gefällt mir sehr. Das Design ist Boss Qualität. 5 Sterne.",
    "customer_name": "Melanie P. aus Darmstadt",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Sarah Q. aus Dortmund",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Genau gefällt mir sehr. Das Design ist Sport-Chrono. 5 Sterne.",
    "customer_name": "Vincent S. aus Mainz",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Genau gefällt mir sehr. Das Design ist Genau. Würde ich wieder kaufen.",
    "customer_name": "Max C. aus Bremen",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Noah D. aus Wuppertal",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Sehr zufrieden.",
    "customer_name": "Petra P. aus Potsdam",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Tobias M. aus Remscheid",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Johannes K. aus Münster",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Mats S. aus Hanau",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sport-Chrono gefällt mir sehr. Das Design ist Funktional. Kann ich empfehlen.",
    "customer_name": "Matteo Q. aus Kassel",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Funktional. Klare Kaufempfehlung.",
    "customer_name": "Sascha I. aus Ulm",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Kann ich empfehlen.",
    "customer_name": "Leo M. aus Reutlingen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Genau. Sehr zufrieden.",
    "customer_name": "Adrian T. aus Jena",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Funktional. 5 Sterne.",
    "customer_name": "Dominik Q. aus Siegen",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Ein echter Hingucker.",
    "customer_name": "Claudia G. aus Braunschweig",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Boss Qualität. Passt perfekt.",
    "customer_name": "Marlon Q. aus Hamm",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Genau gefällt mir sehr. Das Design ist Genau. Würde ich wieder kaufen.",
    "customer_name": "Moritz I. aus Dortmund",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Genau gefällt mir sehr. Das Design ist Markant. Kann ich empfehlen.",
    "customer_name": "Milan W. aus Hanau",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Funktional. Sehr zufrieden.",
    "customer_name": "Jan C. aus Bochum",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Markant. Sehr zufrieden.",
    "customer_name": "Benedikt O. aus Koblenz",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Nico C. aus Herne",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. 5 Sterne.",
    "customer_name": "Andrea A. aus Dortmund",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Markant gefällt mir sehr. Das Design ist Boss Qualität. Passt perfekt.",
    "customer_name": "Malte Z. aus Erfurt",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Funktional gefällt mir sehr. Das Design ist Funktional. Passt perfekt.",
    "customer_name": "Finn I. aus Aachen",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Nicole H. aus Cottbus",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sport-Chrono gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Julia W. aus Erfurt",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Boss Qualität gefällt mir sehr. Das Design ist Sport-Chrono. Jeden Cent wert.",
    "customer_name": "Niklas K. aus Krefeld",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sport-Chrono gefällt mir sehr. Das Design ist Genau. Kann ich empfehlen.",
    "customer_name": "Leon M. aus Offenbach",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Julia V. aus Esslingen",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sport-Chrono gefällt mir sehr. Das Design ist Genau. Kann ich empfehlen.",
    "customer_name": "Adrian B. aus Bremerhaven",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Genau gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Valentin N. aus Heilbronn",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Boss Qualität gefällt mir sehr. Das Design ist Markant. Passt perfekt.",
    "customer_name": "Nico O. aus Rostock",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Simon Y. aus Erfurt",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Leon G. aus Karlsruhe",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Genau gefällt mir sehr. Das Design ist Markant. Würde ich wieder kaufen.",
    "customer_name": "Max G. aus Bottrop",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Malte D. aus Regensburg",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Markant gefällt mir sehr. Das Design ist Sport-Chrono. Kann ich empfehlen.",
    "customer_name": "Vincent T. aus Frankfurt",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Würde ich wieder kaufen.",
    "customer_name": "Milan B. aus Essen",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Passt perfekt.",
    "customer_name": "Robin A. aus Saarbrücken",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Markant gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Henry O. aus Stuttgart",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Markant. 5 Sterne.",
    "customer_name": "Maria P. aus Bergisch Gladbach",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Klare Kaufempfehlung.",
    "customer_name": "Jonas M. aus Ingolstadt",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. Ein echter Hingucker.",
    "customer_name": "Stefanie W. aus Leipzig",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Klare Kaufempfehlung.",
    "customer_name": "Finn E. aus Oldenburg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Genau. Jeden Cent wert.",
    "customer_name": "Sarah U. aus Ludwigshafen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Funktional gefällt mir sehr. Das Design ist Markant. Würde ich wieder kaufen.",
    "customer_name": "Melanie D. aus Wuppertal",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sport-Chrono gefällt mir sehr. Das Design ist Markant. Klare Kaufempfehlung.",
    "customer_name": "Henry M. aus Freiburg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Markant gefällt mir sehr. Das Design ist Genau. 5 Sterne.",
    "customer_name": "Sandra L. aus Oberhausen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Boss Qualität gefällt mir sehr. Das Design ist Boss Qualität. Kann ich empfehlen.",
    "customer_name": "Valentin F. aus Neuss",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Markant gefällt mir sehr. Das Design ist Boss Qualität. Würde ich wieder kaufen.",
    "customer_name": "Birgit K. aus Hannover",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Funktional gefällt mir sehr. Das Design ist Sport-Chrono. 5 Sterne.",
    "customer_name": "Erik L. aus Augsburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Genau gefällt mir sehr. Das Design ist Genau. Klare Kaufempfehlung.",
    "customer_name": "Jonas A. aus Pforzheim",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Markant gefällt mir sehr. Das Design ist Genau. Würde ich wieder kaufen.",
    "customer_name": "Lukas N. aus Bottrop",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Funktional gefällt mir sehr. Das Design ist Markant. Ein echter Hingucker.",
    "customer_name": "Nicole H. aus Osnabrück",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Markant gefällt mir sehr. Das Design ist Funktional. Ein echter Hingucker.",
    "customer_name": "Anton E. aus Iserlohn",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Elias O. aus Siegen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Funktional gefällt mir sehr. Das Design ist Markant. Sehr zufrieden.",
    "customer_name": "Niklas I. aus Koblenz",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Boss Qualität gefällt mir sehr. Das Design ist Genau. Passt perfekt.",
    "customer_name": "Claudia I. aus Ulm",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Funktional gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Monika W. aus Reutlingen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Funktional gefällt mir sehr. Das Design ist Funktional. Würde ich wieder kaufen.",
    "customer_name": "Sandra H. aus Magdeburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Genau gefällt mir sehr. Das Design ist Boss Qualität. Sehr zufrieden.",
    "customer_name": "Petra H. aus Gelsenkirchen",
    "date": "2025-01-02"
  }
];