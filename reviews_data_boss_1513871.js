const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Christoph B. aus Bonn",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Hannes Q. aus Schwerin",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Jan P. aus Kiel",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Adrian B. aus Bremerhaven",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Leo A. aus Erlangen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Maria V. aus Gera",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Benedikt D. aus Potsdam",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Tanja S. aus Pforzheim",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Valentin O. aus Recklinghausen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Christina Z. aus Hildesheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Stefanie F. aus Bonn",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Noah F. aus Salzgitter",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Julian Z. aus Mönchengladbach",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Leon J. aus Gelsenkirchen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Lisa Q. aus Mülheim an der Ruhr",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Tobias U. aus Mülheim an der Ruhr",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Laura N. aus Ludwigshafen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Tanja E. aus Nürnberg",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Anton K. aus Mainz",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Erik O. aus Mainz",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Nadine K. aus Heilbronn",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Ben O. aus Iserlohn",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Henry T. aus Offenbach",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Luca N. aus Magdeburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Milan I. aus Ulm",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Alexander O. aus Düsseldorf",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Simon H. aus Heilbronn",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Julia W. aus Halle (Saale)",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Sandra R. aus Lübeck",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Simon V. aus Recklinghausen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Kilian S. aus Krefeld",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Katharina N. aus Kaiserslautern",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Ben N. aus Braunschweig",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Bastian K. aus Krefeld",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Theo G. aus Wuppertal",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Maria Q. aus Essen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Justus X. aus Ingolstadt",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Dominik V. aus München",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Lisa I. aus Freiburg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Christoph Z. aus Hagen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Maria Q. aus Regensburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Jan R. aus Hanau",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Bastian B. aus Salzgitter",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Yannick Y. aus Bergisch Gladbach",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Anton Y. aus Stuttgart",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Tim N. aus Rostock",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Luca F. aus Dresden",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Emil J. aus Fürth",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Katharina X. aus Hamburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Elias V. aus Hagen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Dominik O. aus Düsseldorf",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Noah L. aus Trier",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Oskar P. aus Pforzheim",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Marlon C. aus Hamm",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Kevin Y. aus Ingolstadt",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Max Z. aus Gera",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Luis S. aus Moers",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Ben M. aus Moers",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Niklas I. aus Erlangen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Niklas A. aus Heidelberg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Leon C. aus Gelsenkirchen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Melanie L. aus Rostock",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Jannik X. aus Leipzig",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Birgit Q. aus Halle (Saale)",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Melanie J. aus Berlin",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Luis H. aus Kiel",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Milan R. aus Münster",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Anja P. aus Potsdam",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Yannick S. aus Paderborn",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Julia Z. aus Halle (Saale)",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Kevin K. aus Bremen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Arne P. aus Oberhausen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Nadine C. aus Hildesheim",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Jan B. aus Recklinghausen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Petra W. aus Wuppertal",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Emil I. aus Bottrop",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Tim Z. aus Stuttgart",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Timo L. aus Würzburg",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Tanja A. aus Kassel",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Susanne Z. aus Hildesheim",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Kilian O. aus Hanau",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Simon V. aus Gera",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Christoph C. aus Mülheim an der Ruhr",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Tim K. aus Aachen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Anna N. aus Ludwigsburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Elias J. aus Hildesheim",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Susanne K. aus Rostock",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Christoph H. aus Dortmund",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Erik J. aus Jena",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Henry J. aus Heidelberg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Henry Q. aus Neuss",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Christina V. aus Berlin",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Tim V. aus Regensburg",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Christoph V. aus Kiel",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Matteo M. aus Oldenburg",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Moritz A. aus Berlin",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Valentin S. aus Hanau",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Maria J. aus Düsseldorf",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Leo C. aus Heidelberg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Sabine E. aus Wolfsburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Tobias U. aus Jena",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Christina Q. aus Hannover",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Tim H. aus München",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Benedikt B. aus Hagen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Felix G. aus Würzburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Bastian E. aus Hannover",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Noah J. aus Trier",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Melanie O. aus Aachen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Vincent X. aus Göttingen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Lisa Q. aus Würzburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Ben D. aus Dresden",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Lukas U. aus Witten",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Lenny M. aus Gera",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Milan V. aus Bergisch Gladbach",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "David H. aus Esslingen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Fabian I. aus Wiesbaden",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Florian U. aus Rostock",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Finn W. aus Hagen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Florian A. aus Moers",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Dominik Y. aus Mainz",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Hannes R. aus Trier",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Lenny G. aus Würzburg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Claudia U. aus Bremerhaven",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Andrea B. aus Ingolstadt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Lukas I. aus Gelsenkirchen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Julia M. aus Gütersloh",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Luis I. aus Aachen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Malte X. aus Braunschweig",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Petra L. aus Halle (Saale)",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Benedikt J. aus Bremen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Laura Y. aus Solingen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Elias B. aus Heilbronn",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Malte H. aus Karlsruhe",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Noah A. aus Jena",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Stefanie M. aus Dortmund",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Sabine Y. aus Oldenburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Robin T. aus Bremerhaven",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Philipp H. aus Heilbronn",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Claudia K. aus Kaiserslautern",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Matteo C. aus Wuppertal",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Valentin K. aus Darmstadt",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Stefanie Q. aus Mainz",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Finn Z. aus Göttingen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Petra H. aus Frankfurt",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Matteo P. aus Köln",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Benedikt Y. aus Chemnitz",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Max O. aus Würzburg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Erik C. aus Remscheid",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Monika B. aus Erlangen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Henry W. aus Magdeburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Johannes X. aus Bonn",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Sarah P. aus Hanau",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Leon R. aus Wolfsburg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Yannick Y. aus Bochum",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Jannik D. aus Witten",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Valentin Y. aus Hamm",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Elias C. aus Frankfurt",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Hannes P. aus Chemnitz",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Moritz Z. aus Würzburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Sarah Y. aus Lübeck",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Christoph V. aus Osnabrück",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Benedikt X. aus Witten",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Robin B. aus Erlangen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Luca U. aus Braunschweig",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Dennis J. aus Bergisch Gladbach",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Christoph H. aus Nürnberg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Julia J. aus Freiburg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Valentin Z. aus Fürth",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Luis X. aus Paderborn",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Leo U. aus Frankfurt",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Laura G. aus Leipzig",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Stefanie V. aus Gelsenkirchen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Justus A. aus Halle (Saale)",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Timo K. aus Bergisch Gladbach",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Valentin D. aus Rostock",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Maximilian G. aus Kiel",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "David C. aus Remscheid",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Vincent T. aus Gütersloh",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Kevin A. aus Gelsenkirchen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Noah C. aus Essen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Nico O. aus Hamm",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Kilian Q. aus Salzgitter",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Laura F. aus Essen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Benedikt V. aus Regensburg",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Luca D. aus Iserlohn",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Erik L. aus Saarbrücken",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Marlon G. aus Bremerhaven",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Monika E. aus Dresden",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Melanie W. aus Wuppertal",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Dominik H. aus Recklinghausen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Anton P. aus Kassel",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Felix T. aus Wuppertal",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Johannes E. aus Ludwigsburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Philipp X. aus Aachen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Finn G. aus Jena",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Ben N. aus Mülheim an der Ruhr",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Nadine A. aus Heidelberg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Andrea U. aus Bochum",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Luca E. aus Aachen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Luis O. aus Mannheim",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Julian B. aus Osnabrück",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Malte F. aus Krefeld",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Leo D. aus Gelsenkirchen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Julia H. aus Hannover",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Nicole I. aus Reutlingen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Claudia J. aus Leipzig",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Leo J. aus Bremerhaven",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Lukas G. aus Bochum",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Anton B. aus Mülheim an der Ruhr",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Felix D. aus Dortmund",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Paul F. aus Dortmund",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Lisa P. aus Hanau",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Felix S. aus Leipzig",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Philipp S. aus Essen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Luca D. aus Bonn",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Mats L. aus Hannover",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Leo M. aus Aachen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Julia L. aus Köln",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Julian X. aus Bottrop",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Sabine O. aus Rostock",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Tobias Q. aus Dortmund",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Sarah H. aus Paderborn",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Marlon L. aus Aachen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Christoph T. aus Aachen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Sascha D. aus Halle (Saale)",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Samuel Q. aus Kiel",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Alexander B. aus Halle (Saale)",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Nico M. aus Erlangen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Leon R. aus Bottrop",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Anja L. aus Iserlohn",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Maximilian V. aus Erlangen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Niklas B. aus Halle (Saale)",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Leo Z. aus Braunschweig",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Birgit I. aus Gera",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Samuel V. aus Berlin",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Christina I. aus Göttingen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Emil G. aus Hannover",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Claudia I. aus Gelsenkirchen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Lisa U. aus Oldenburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Lenny I. aus Kassel",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Birgit B. aus Osnabrück",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Johannes U. aus Dresden",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Adrian Y. aus Oberhausen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Dominik X. aus Reutlingen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Lisa C. aus Wolfsburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Fabian Z. aus Bottrop",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Oskar T. aus München",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Theo H. aus Pforzheim",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Florian G. aus Freiburg",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Kevin U. aus Berlin",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Christina F. aus Erlangen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Leo J. aus Augsburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Stefanie R. aus Köln",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Anja B. aus Koblenz",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Noah G. aus Leverkusen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Andrea N. aus Magdeburg",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Liam J. aus Neuss",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Timo R. aus Schwerin",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Anja C. aus Kassel",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Moritz L. aus Bonn",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Malte V. aus Jena",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Liam K. aus Kiel",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Tobias M. aus Berlin",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Valentin L. aus Hamm",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Tanja O. aus Hildesheim",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Emil R. aus Saarbrücken",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Luis T. aus Mülheim an der Ruhr",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Christina Y. aus Leipzig",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Christina N. aus Lübeck",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Kilian G. aus Wuppertal",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Samuel Q. aus Bielefeld",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Dominik I. aus Münster",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Melanie J. aus Moers",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Nadine D. aus Lübeck",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Kevin H. aus Erlangen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Leo C. aus Kaiserslautern",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Kevin J. aus Bremen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Sandra J. aus Jena",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Jonas V. aus Halle (Saale)",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Maximilian F. aus Herne",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Tanja U. aus Herne",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Maria F. aus Cottbus",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Tobias O. aus Solingen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Matteo O. aus Hanau",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Matteo A. aus Saarbrücken",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Tanja W. aus Rostock",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Tobias D. aus Bielefeld",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Tanja R. aus Karlsruhe",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Claudia G. aus Offenbach",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Christoph Z. aus Karlsruhe",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Robin S. aus Gelsenkirchen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Moritz L. aus Göttingen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Benedikt A. aus Recklinghausen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Simon M. aus Hannover",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Ben D. aus Gera",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Mats Y. aus Leverkusen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Fabian U. aus Mannheim",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Niklas D. aus Siegen",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Tobias T. aus Erfurt",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Bastian N. aus Bottrop",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Timo G. aus Ulm",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Mats A. aus Stuttgart",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Lenny N. aus Würzburg",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Lenny I. aus Wuppertal",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Birgit V. aus Mannheim",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Petra W. aus Köln",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Maria C. aus Trier",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Claudia U. aus Wiesbaden",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Jonas R. aus Frankfurt",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Arne S. aus Ulm",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Elias R. aus Dresden",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Andrea Q. aus Hamburg",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Monika F. aus Iserlohn",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Julia F. aus München",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Jan A. aus Bielefeld",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Benedikt D. aus Oldenburg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Ben H. aus Essen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Alexander N. aus Mönchengladbach",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Tim M. aus Magdeburg",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Milan U. aus Oberhausen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Malte T. aus Leverkusen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Fabian T. aus Gelsenkirchen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Christina E. aus Ludwigshafen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Anna M. aus Neuss",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Jonas A. aus Magdeburg",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Felix K. aus Bielefeld",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Jannik Y. aus Heidelberg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Benedikt O. aus Hamm",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Anja E. aus Hildesheim",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Nico R. aus Paderborn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Kerstin C. aus Kassel",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Sascha L. aus Solingen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Lukas B. aus Pforzheim",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Valentin G. aus Rostock",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Lukas S. aus Siegen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Fabian G. aus Kiel",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Max O. aus Karlsruhe",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Samuel L. aus Lübeck",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Sandra R. aus Moers",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Ben R. aus Karlsruhe",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Luis Y. aus Frankfurt",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Jonas T. aus Frankfurt",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Maria O. aus Wiesbaden",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Julia R. aus Darmstadt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Milan H. aus Oberhausen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Matteo G. aus Lübeck",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Kilian Y. aus Osnabrück",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Moritz C. aus Paderborn",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Katharina C. aus Wuppertal",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Benedikt I. aus Heilbronn",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Katharina M. aus Ingolstadt",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Jonas F. aus Wiesbaden",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Birgit P. aus Witten",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "David I. aus Gelsenkirchen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Paul Q. aus Ulm",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Elias J. aus Leverkusen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Sandra P. aus Bochum",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Tobias U. aus Recklinghausen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Max X. aus Gera",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Stefanie Q. aus Karlsruhe",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Lisa V. aus Würzburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Hannes Q. aus Wiesbaden",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Lenny V. aus Erfurt",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Adrian D. aus Karlsruhe",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Lenny K. aus Oberhausen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Niklas M. aus Aachen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Henry P. aus Dortmund",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Jan K. aus Mannheim",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Sascha F. aus Bremen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Kerstin O. aus Leverkusen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Melanie G. aus Leverkusen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Luis B. aus Leverkusen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Sarah T. aus Herne",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Marlon O. aus Krefeld",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Finn K. aus Bottrop",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Nico J. aus Halle (Saale)",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Kevin R. aus Braunschweig",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Monika B. aus Nürnberg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Emil Q. aus Wiesbaden",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Birgit T. aus Recklinghausen",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Sarah J. aus Darmstadt",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Theo O. aus Darmstadt",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Noah R. aus Gelsenkirchen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Mats Q. aus Wolfsburg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Max F. aus Cottbus",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Anton K. aus Schwerin",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Luca M. aus Fürth",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Sarah E. aus Bergisch Gladbach",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Katharina Y. aus Moers",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Tim G. aus Frankfurt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Justus B. aus Rostock",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Paul V. aus Münster",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Anna G. aus Regensburg",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Lisa K. aus Hanau",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Milan Z. aus Halle (Saale)",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Maximilian I. aus Wiesbaden",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Liam R. aus Bielefeld",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Christina N. aus Kaiserslautern",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Luca H. aus Mainz",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Sarah K. aus Bochum",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Malte G. aus Würzburg",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Bastian A. aus Oldenburg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Lukas E. aus Köln",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Philipp L. aus Gütersloh",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Tanja X. aus Münster",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Florian Y. aus Kassel",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Theo F. aus Remscheid",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Finn E. aus Oberhausen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Nicole X. aus Gelsenkirchen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Milan X. aus Bottrop",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Niklas O. aus Dresden",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Malte I. aus Gera",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Vincent F. aus Neuss",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Justus D. aus Bochum",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Matteo T. aus Magdeburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Valentin N. aus Siegen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Hannes U. aus Koblenz",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Arne L. aus Erfurt",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Luca R. aus Düsseldorf",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Tobias K. aus Kassel",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Florian L. aus Wiesbaden",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Leo T. aus Wuppertal",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Maria V. aus Bonn",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Luca W. aus Hamburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Petra X. aus Gera",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Philipp X. aus Augsburg",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Justus O. aus Gelsenkirchen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Mats U. aus Freiburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Christina F. aus Offenbach",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Bastian Q. aus Freiburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Yannick V. aus Ingolstadt",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Melanie Y. aus Iserlohn",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Lisa Q. aus Fürth",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Theo V. aus Bonn",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Timo B. aus Jena",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Dennis T. aus Heilbronn",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Marlon E. aus Köln",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Henry B. aus Stuttgart",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Dominik P. aus Salzgitter",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Jonas M. aus Gütersloh",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Dominik Y. aus Wuppertal",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Noah C. aus Frankfurt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Groß. Jeden Cent wert.",
    "customer_name": "Timo A. aus Paderborn",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Petra P. aus Gelsenkirchen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Milan T. aus Heilbronn",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Malte S. aus Wuppertal",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Sascha P. aus Braunschweig",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Max A. aus Hamm",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Arne T. aus Essen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Sabine Z. aus Ludwigshafen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Nadine O. aus Dresden",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Emil E. aus Düsseldorf",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Lisa Q. aus Mülheim an der Ruhr",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Laura X. aus Aachen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Dominik Y. aus Reutlingen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Tim J. aus Rostock",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Nico L. aus Rostock",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Lukas K. aus Frankfurt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Oskar K. aus Koblenz",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Emil F. aus Magdeburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Julia Q. aus Reutlingen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Johannes M. aus Chemnitz",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Maximilian F. aus Kiel",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Katharina Q. aus Mainz",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Anja T. aus Regensburg",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Tobias U. aus Mainz",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Jonas Q. aus Schwerin",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Timo V. aus Siegen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Leon O. aus Potsdam",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Timo S. aus Trier",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Kevin P. aus Siegen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Moritz H. aus Hannover",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Dennis W. aus Ingolstadt",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Milan Y. aus Offenbach",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Luca B. aus Bonn",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Timo Q. aus Hagen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Johannes Q. aus Hagen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Dennis O. aus Darmstadt",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Erik T. aus Paderborn",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Sascha I. aus Bergisch Gladbach",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Anna L. aus Chemnitz",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Leo O. aus Herne",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Luca A. aus Reutlingen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Sandra L. aus Düsseldorf",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Lukas H. aus Schwerin",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Tanja R. aus Siegen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Arne X. aus Wuppertal",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Luca W. aus Witten",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Florian C. aus Gera",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Niklas O. aus Bonn",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Tanja F. aus Gelsenkirchen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Sandra T. aus Lübeck",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Sabine C. aus Salzgitter",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Felix J. aus Würzburg",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Anja I. aus Schwerin",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Luis C. aus Hagen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Julia Y. aus Bergisch Gladbach",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Jannik E. aus Leipzig",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Milan R. aus Stuttgart",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Laura C. aus Esslingen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Felix R. aus Bochum",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Yannick K. aus Iserlohn",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Maria K. aus Saarbrücken",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Maximilian K. aus Offenbach",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Fabian K. aus Schwerin",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Anna F. aus Erlangen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Monika E. aus Bielefeld",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Nadine P. aus Oberhausen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Finn Z. aus Saarbrücken",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Maximilian Y. aus Dresden",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Leo Y. aus Freiburg",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Hannes W. aus Duisburg",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Niklas Z. aus Siegen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Julia D. aus Cottbus",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Arne L. aus Hildesheim",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Leo V. aus Ludwigsburg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Florian O. aus Wiesbaden",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Kerstin Y. aus Rostock",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Melanie R. aus Bremen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Tanja S. aus Ludwigshafen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Liam J. aus Würzburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Robin O. aus Iserlohn",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Claudia D. aus Hanau",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Milan B. aus Aachen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Anna K. aus Reutlingen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Julia H. aus Kaiserslautern",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Jonas S. aus Osnabrück",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Bastian L. aus Witten",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Claudia Z. aus Lübeck",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Groß gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Milan D. aus Halle (Saale)",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Valentin U. aus Leverkusen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Adrian Z. aus Solingen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Nadine Q. aus Potsdam",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Nadine B. aus Bottrop",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Julian I. aus Osnabrück",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Luca C. aus Paderborn",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Yannick R. aus Darmstadt",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Liam H. aus Ludwigshafen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Malte W. aus Mainz",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Liam Q. aus Wolfsburg",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Liam O. aus Heilbronn",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "David H. aus Kassel",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Philipp S. aus Leipzig",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Lenny A. aus Halle (Saale)",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Christoph P. aus Bonn",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Julia Q. aus Kassel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Hannes N. aus Kassel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Claudia Y. aus Erlangen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Malte Z. aus Neuss",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Finn X. aus Dortmund",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Arne J. aus Witten",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Kann ich empfehlen.",
    "customer_name": "Adrian K. aus Esslingen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Lenny X. aus Braunschweig",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Dennis L. aus Braunschweig",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Sascha O. aus Würzburg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Monika G. aus Pforzheim",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Sabine Z. aus Hamburg",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Tom H. aus Kaiserslautern",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Max S. aus Düsseldorf",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Theo X. aus Dresden",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Johannes E. aus Dresden",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Claudia N. aus Freiburg",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Oskar S. aus Bremerhaven",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Birgit N. aus Gera",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Tim M. aus Wiesbaden",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Justus H. aus Osnabrück",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Präzise. Würde ich wieder kaufen.",
    "customer_name": "Simon X. aus Neuss",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "David L. aus Witten",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Vincent Y. aus Bremen",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Anton X. aus Wiesbaden",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Tobias I. aus Lübeck",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Maria R. aus Bielefeld",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Noah U. aus Lübeck",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Milan K. aus Bielefeld",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Liam E. aus Berlin",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Lenny Y. aus Stuttgart",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Sandra R. aus Nürnberg",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Erik F. aus Trier",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Johannes P. aus Düsseldorf",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Bastian R. aus Hanau",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Florian R. aus Regensburg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Kilian P. aus Hamburg",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Robin H. aus Trier",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Julia Q. aus München",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Noah V. aus Gütersloh",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Justus G. aus Köln",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Christoph X. aus Dresden",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Tobias Y. aus Leipzig",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Lisa R. aus Kaiserslautern",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Kilian Y. aus Hannover",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Leo U. aus Hannover",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Christoph A. aus Gelsenkirchen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Laura O. aus Wiesbaden",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Birgit A. aus Mülheim an der Ruhr",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Dominik Q. aus Wolfsburg",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Lisa H. aus Ludwigsburg",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Florian L. aus Dresden",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Fabian X. aus Stuttgart",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Christina L. aus Krefeld",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Präzise. Klare Kaufempfehlung.",
    "customer_name": "Petra D. aus Kaiserslautern",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Liam H. aus Hamburg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Birgit D. aus Berlin",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Melanie I. aus Pforzheim",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Tobias S. aus Darmstadt",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Theo I. aus Göttingen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Maria Q. aus Karlsruhe",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Ben C. aus Pforzheim",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Tom N. aus Gütersloh",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Dominik I. aus Bonn",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Anja Y. aus Berlin",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Henry A. aus Chemnitz",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Lenny K. aus Neuss",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Leon N. aus Kassel",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Susanne L. aus Frankfurt",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Leon F. aus Braunschweig",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Erik L. aus Ludwigshafen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Nadine S. aus Recklinghausen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Samuel X. aus Freiburg",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Simon D. aus Ingolstadt",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Sarah X. aus Bonn",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Moritz K. aus Bremerhaven",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Lenny F. aus Dresden",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Maria K. aus Oberhausen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Niklas D. aus Hildesheim",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Theo V. aus Hanau",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Dominik E. aus Siegen",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Milan A. aus Recklinghausen",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Justus A. aus Wolfsburg",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Kilian Y. aus Wolfsburg",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Jannik A. aus Freiburg",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Tobias Z. aus Cottbus",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Leo O. aus Schwerin",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Liam B. aus Bremen",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Kilian E. aus Heidelberg",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Robin M. aus Iserlohn",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Lenny N. aus Frankfurt",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Katharina O. aus Göttingen",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Klare Kaufempfehlung.",
    "customer_name": "Christina Y. aus Potsdam",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Präzise gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Marlon X. aus Berlin",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Nico G. aus Solingen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Fabian U. aus Mannheim",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Julia Y. aus Kassel",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Nico B. aus Koblenz",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Würde ich wieder kaufen.",
    "customer_name": "Theo A. aus Bielefeld",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Katharina O. aus Kassel",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Valentin M. aus Oldenburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Hochwertig gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Erik X. aus Karlsruhe",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Robin I. aus Bonn",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Lisa Q. aus Cottbus",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Groß gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Dominik Y. aus Bottrop",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Jannik Z. aus Potsdam",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Lesbar. 5 Sterne.",
    "customer_name": "Anna J. aus Kassel",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Stefanie Q. aus Iserlohn",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Philipp F. aus Nürnberg",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Katharina Z. aus Köln",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Präzise. Passt perfekt.",
    "customer_name": "Birgit K. aus Wiesbaden",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Matteo P. aus Ludwigshafen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Kevin T. aus Lübeck",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Sabine V. aus Trier",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Stefanie L. aus Wuppertal",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Hannes E. aus München",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Lesbar. Sehr zufrieden.",
    "customer_name": "Nicole Y. aus Cottbus",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Luca S. aus Hildesheim",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Ben Q. aus Remscheid",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Sandra F. aus Halle (Saale)",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Niklas O. aus Hamburg",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Luca P. aus Magdeburg",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Alexander I. aus Ulm",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Anja J. aus Oldenburg",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Niklas K. aus Leverkusen",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Adrian M. aus Saarbrücken",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Jan J. aus Bergisch Gladbach",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Jan O. aus Bonn",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Groß gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Anna L. aus Krefeld",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Birgit U. aus Rostock",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Hannes W. aus Moers",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Präzise gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Yannick F. aus Koblenz",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Chronometer gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Tom Z. aus Freiburg",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Matteo O. aus Bremen",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Präzise. Sehr zufrieden.",
    "customer_name": "Andrea J. aus Duisburg",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Lesbar gefällt mir sehr. Das Design ist Groß. Kann ich empfehlen.",
    "customer_name": "Felix J. aus Gera",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Groß gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Jannik T. aus Hanau",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Präzise gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Susanne I. aus Bonn",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Ein echter Hingucker.",
    "customer_name": "Malte A. aus Hamburg",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Groß. 5 Sterne.",
    "customer_name": "Felix H. aus Regensburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Präzise. 5 Sterne.",
    "customer_name": "Maximilian J. aus Würzburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Groß gefällt mir sehr. Das Design ist Lesbar. Jeden Cent wert.",
    "customer_name": "Lisa D. aus Iserlohn",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Lesbar gefällt mir sehr. Das Design ist Hochwertig. 5 Sterne.",
    "customer_name": "Dominik F. aus Leipzig",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Philipp E. aus Augsburg",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Stefanie J. aus Ulm",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Timo N. aus Herne",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Lukas G. aus Jena",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Groß gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Katharina T. aus Mönchengladbach",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Christina D. aus Osnabrück",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Tanja J. aus Würzburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Malte K. aus Würzburg",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Birgit G. aus Göttingen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Hochwertig gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Oskar P. aus Oldenburg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Präzise gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Paul B. aus Saarbrücken",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Groß gefällt mir sehr. Das Design ist Groß. Sehr zufrieden.",
    "customer_name": "Alexander P. aus Herne",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Chronometer. Passt perfekt.",
    "customer_name": "Philipp W. aus Fürth",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Lesbar gefällt mir sehr. Das Design ist Präzise. Ein echter Hingucker.",
    "customer_name": "Susanne Y. aus Krefeld",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Klare Kaufempfehlung.",
    "customer_name": "Malte N. aus Leverkusen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Elias K. aus Lübeck",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Lesbar gefällt mir sehr. Das Design ist Groß. Klare Kaufempfehlung.",
    "customer_name": "Benedikt Y. aus Frankfurt",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Chronometer gefällt mir sehr. Das Design ist Hochwertig. Passt perfekt.",
    "customer_name": "Florian U. aus Remscheid",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Präzise gefällt mir sehr. Das Design ist Chronometer. Sehr zufrieden.",
    "customer_name": "Fabian M. aus Salzgitter",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Chronometer. Ein echter Hingucker.",
    "customer_name": "Max M. aus Gera",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Anton J. aus Gelsenkirchen",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Chronometer. 5 Sterne.",
    "customer_name": "Susanne G. aus Iserlohn",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Kerstin C. aus Chemnitz",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Hochwertig gefällt mir sehr. Das Design ist Groß. Würde ich wieder kaufen.",
    "customer_name": "Kevin U. aus Gera",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Präzise. Jeden Cent wert.",
    "customer_name": "Anna Q. aus Siegen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Präzise gefällt mir sehr. Das Design ist Hochwertig. Klare Kaufempfehlung.",
    "customer_name": "Lisa X. aus Fürth",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Leo C. aus Chemnitz",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Präzise gefällt mir sehr. Das Design ist Hochwertig. Sehr zufrieden.",
    "customer_name": "Stefanie R. aus Chemnitz",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Groß gefällt mir sehr. Das Design ist Chronometer. Jeden Cent wert.",
    "customer_name": "Adrian A. aus Chemnitz",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Lesbar gefällt mir sehr. Das Design ist Hochwertig. Würde ich wieder kaufen.",
    "customer_name": "Fabian L. aus Essen",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Chronometer gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Nicole J. aus Bremen",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Chronometer gefällt mir sehr. Das Design ist Präzise. Kann ich empfehlen.",
    "customer_name": "Noah Z. aus Gelsenkirchen",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Lesbar gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Jannik W. aus Göttingen",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Hochwertig gefällt mir sehr. Das Design ist Groß. Ein echter Hingucker.",
    "customer_name": "Laura C. aus Koblenz",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Präzise gefällt mir sehr. Das Design ist Hochwertig. Jeden Cent wert.",
    "customer_name": "Arne U. aus Ulm",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Chronometer gefällt mir sehr. Das Design ist Lesbar. Kann ich empfehlen.",
    "customer_name": "Johannes G. aus Gütersloh",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Hochwertig gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Florian E. aus Braunschweig",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Chronometer gefällt mir sehr. Das Design ist Chronometer. Kann ich empfehlen.",
    "customer_name": "Petra D. aus Magdeburg",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Groß gefällt mir sehr. Das Design ist Lesbar. Passt perfekt.",
    "customer_name": "Timo V. aus Würzburg",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Tobias C. aus Halle (Saale)",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Würde ich wieder kaufen.",
    "customer_name": "Kevin L. aus Köln",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Hochwertig gefällt mir sehr. Das Design ist Lesbar. Ein echter Hingucker.",
    "customer_name": "Niklas H. aus Rostock",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Lesbar gefällt mir sehr. Das Design ist Groß. Passt perfekt.",
    "customer_name": "Leon M. aus Mannheim",
    "date": "2025-01-01"
  }
];