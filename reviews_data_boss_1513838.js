const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Malte W. aus Recklinghausen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Tobias X. aus Dresden",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Noah U. aus Bremerhaven",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Laura B. aus Darmstadt",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Sportlich. Kann ich empfehlen.",
    "customer_name": "Niklas U. aus Cottbus",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Theo Q. aus Osnabrück",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Qualität gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Bastian I. aus Offenbach",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Adrian A. aus Bergisch Gladbach",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Liam Z. aus Erlangen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Edelstahl gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Anna F. aus Frankfurt",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Alexander P. aus Leipzig",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Dennis Z. aus Recklinghausen",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sportlich gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Florian L. aus Esslingen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Birgit P. aus Regensburg",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Jannik I. aus Hamm",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Emil K. aus Aachen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Melanie K. aus Bielefeld",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Nico F. aus Kassel",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Anja B. aus Paderborn",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Henry O. aus München",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Marlon W. aus Hannover",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Lukas Y. aus Moers",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Passt perfekt.",
    "customer_name": "Timo G. aus Münster",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Robust gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Erik H. aus Leipzig",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Maximilian Y. aus Mainz",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Fabian H. aus Hanau",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Justus V. aus Heilbronn",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Florian T. aus Hagen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Samuel R. aus Ulm",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Noah Y. aus Saarbrücken",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Tim C. aus Halle (Saale)",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Jeden Cent wert.",
    "customer_name": "Sabine I. aus Leverkusen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Luca N. aus Koblenz",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Edelstahl. Passt perfekt.",
    "customer_name": "Susanne M. aus Ulm",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Lenny B. aus Heidelberg",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Maria R. aus Bremerhaven",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Alexander F. aus Würzburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Matteo J. aus Ingolstadt",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Passt perfekt.",
    "customer_name": "Stefanie Z. aus Aachen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Alexander O. aus Chemnitz",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Qualität. Würde ich wieder kaufen.",
    "customer_name": "Leon S. aus München",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Kevin Z. aus Schwerin",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Qualität. Würde ich wieder kaufen.",
    "customer_name": "Maximilian S. aus Berlin",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Philipp M. aus Recklinghausen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Moritz X. aus Göttingen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Finn B. aus Bremerhaven",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Nadine Z. aus Bonn",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Robust gefällt mir sehr. Das Design ist Sportlich. Kann ich empfehlen.",
    "customer_name": "Emil F. aus Mainz",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Timo X. aus Bergisch Gladbach",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "Milan U. aus Paderborn",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Kilian B. aus Frankfurt",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. 5 Sterne.",
    "customer_name": "Julian C. aus Hamburg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Petra E. aus Hamburg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Arne J. aus Leipzig",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Moritz Z. aus Kassel",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Matteo B. aus Ulm",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Maximilian G. aus Siegen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "Finn T. aus Iserlohn",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Benedikt P. aus Berlin",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Christina T. aus Cottbus",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Monika Y. aus Ulm",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Matteo I. aus Duisburg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "Jonas L. aus Regensburg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Laura Q. aus Recklinghausen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Robust gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Leo G. aus Saarbrücken",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Milan O. aus Offenbach",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Maria Q. aus Esslingen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Arne F. aus Essen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Luis K. aus Recklinghausen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Passt perfekt.",
    "customer_name": "Alexander Y. aus Mainz",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Fabian F. aus Neuss",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "David I. aus Gütersloh",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Matteo B. aus Düsseldorf",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Robust gefällt mir sehr. Das Design ist Sportlich. Passt perfekt.",
    "customer_name": "Philipp R. aus Pforzheim",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Mein Favorit. Passt perfekt.",
    "customer_name": "Fabian D. aus Witten",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Lukas Q. aus Stuttgart",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Maria A. aus Leverkusen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Sandra F. aus Mülheim an der Ruhr",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Nicole A. aus Lübeck",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Edelstahl. Passt perfekt.",
    "customer_name": "Leo B. aus Moers",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Anton G. aus Heilbronn",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Nico J. aus Jena",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Robin I. aus Würzburg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Adrian T. aus Pforzheim",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Mats D. aus Cottbus",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Mein Favorit gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Nadine S. aus Oldenburg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Tim Z. aus Offenbach",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Christoph B. aus Moers",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Laura M. aus Witten",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Tobias B. aus Kaiserslautern",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Sandra R. aus Göttingen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Katharina B. aus Braunschweig",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Monika M. aus Bremerhaven",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Petra W. aus Düsseldorf",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Lenny S. aus Karlsruhe",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Paul Z. aus Remscheid",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Edelstahl gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Leon V. aus Heilbronn",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Vincent M. aus Mönchengladbach",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Qualität gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Leo W. aus Bremen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Henry U. aus Bielefeld",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Qualität gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Petra H. aus Hamburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Katharina G. aus München",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Tanja D. aus Göttingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Kerstin Q. aus Duisburg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Moritz E. aus Bremen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Erik J. aus Hamm",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Qualität gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Stefanie V. aus Duisburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Timo N. aus Duisburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Max Z. aus Krefeld",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "David C. aus Pforzheim",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Laura A. aus Solingen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Elias L. aus Recklinghausen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Passt perfekt.",
    "customer_name": "Kerstin J. aus Essen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Qualität gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Simon Y. aus Aachen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Leon B. aus Fürth",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Kevin Y. aus Augsburg",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Matteo S. aus Salzgitter",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Sportlich. Passt perfekt.",
    "customer_name": "Timo N. aus Potsdam",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Melanie T. aus Reutlingen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Mein Favorit. Passt perfekt.",
    "customer_name": "Luis O. aus Magdeburg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Sabine V. aus Hamm",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. 5 Sterne.",
    "customer_name": "Jan G. aus Moers",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Qualität gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Robin B. aus Hanau",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Tom H. aus Gelsenkirchen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Jan A. aus Karlsruhe",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Kilian M. aus Erfurt",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Kann ich empfehlen.",
    "customer_name": "Elias U. aus Neuss",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Anton F. aus Pforzheim",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Christoph I. aus Trier",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Malte A. aus Duisburg",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Passt perfekt.",
    "customer_name": "Arne T. aus Salzgitter",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Malte P. aus Ludwigsburg",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Robust gefällt mir sehr. Das Design ist Edelstahl. Passt perfekt.",
    "customer_name": "Liam C. aus Siegen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Nicole H. aus Neuss",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Julian P. aus Lübeck",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Susanne M. aus Ingolstadt",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Qualität. Kann ich empfehlen.",
    "customer_name": "Anton E. aus Mönchengladbach",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Kilian J. aus Oldenburg",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Jeden Cent wert.",
    "customer_name": "Finn X. aus Dortmund",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Elias F. aus Dresden",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sportlich gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Philipp S. aus Dortmund",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Tanja L. aus Neuss",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "Kerstin Z. aus Ludwigshafen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Birgit Q. aus Schwerin",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Kilian C. aus Fürth",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Justus Q. aus Rostock",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Tim J. aus Leverkusen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Dennis X. aus Dresden",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Nicole Z. aus Siegen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Jeden Cent wert.",
    "customer_name": "Sandra Q. aus Duisburg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Qualität. Kann ich empfehlen.",
    "customer_name": "Vincent K. aus Gelsenkirchen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Leo O. aus München",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Kevin Q. aus Münster",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Bastian W. aus Jena",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Paul W. aus Karlsruhe",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Marlon V. aus Kaiserslautern",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Arne G. aus Ulm",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Tanja Y. aus Mainz",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Yannick X. aus Mülheim an der Ruhr",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Robust gefällt mir sehr. Das Design ist Qualität. Kann ich empfehlen.",
    "customer_name": "Hannes A. aus Moers",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Tom B. aus Fürth",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Tanja K. aus Göttingen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Dennis F. aus Frankfurt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Jeden Cent wert.",
    "customer_name": "Melanie V. aus Bottrop",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Edelstahl. Passt perfekt.",
    "customer_name": "Sascha P. aus Leverkusen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Mats F. aus Ingolstadt",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Qualität. Würde ich wieder kaufen.",
    "customer_name": "Valentin T. aus Offenbach",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Anja K. aus Iserlohn",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Milan Q. aus Mönchengladbach",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Dennis B. aus Leipzig",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Moritz N. aus Schwerin",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Petra N. aus Nürnberg",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Robust gefällt mir sehr. Das Design ist Qualität. Würde ich wieder kaufen.",
    "customer_name": "Luis R. aus Krefeld",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Theo D. aus Regensburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Melanie I. aus Osnabrück",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Edelstahl gefällt mir sehr. Das Design ist Qualität. Würde ich wieder kaufen.",
    "customer_name": "Justus F. aus Hagen",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Felix E. aus Schwerin",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Dennis J. aus Siegen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Jannik I. aus Erfurt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Susanne Z. aus Fürth",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Qualität gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Moritz E. aus Potsdam",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "Anna I. aus Mönchengladbach",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Qualität. Würde ich wieder kaufen.",
    "customer_name": "Sabine D. aus Dortmund",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Tobias G. aus Remscheid",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Qualität gefällt mir sehr. Das Design ist Edelstahl. 5 Sterne.",
    "customer_name": "Henry F. aus Neuss",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "Monika W. aus Solingen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Nadine C. aus Gelsenkirchen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Stefanie B. aus Kassel",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Fabian P. aus Münster",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Lisa E. aus Saarbrücken",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "Robin V. aus Bottrop",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Passt perfekt.",
    "customer_name": "Luis Y. aus Oberhausen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Kilian I. aus Dresden",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Mein Favorit. Passt perfekt.",
    "customer_name": "Vincent Z. aus Iserlohn",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "David J. aus Bochum",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Luca V. aus Hagen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Jan B. aus Göttingen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Qualität gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Julian R. aus Aachen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Sascha L. aus Heidelberg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Sarah G. aus Wuppertal",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Simon V. aus Rostock",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Noah N. aus Oldenburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Tobias T. aus Ingolstadt",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Julia F. aus Koblenz",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Mein Favorit gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Niklas R. aus Mainz",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Milan B. aus Paderborn",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Nico W. aus Lübeck",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Florian Y. aus Erfurt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Moritz S. aus Hamburg",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Qualität. Klare Kaufempfehlung.",
    "customer_name": "Felix N. aus Oberhausen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Melanie D. aus Neuss",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sportlich gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Paul Z. aus Moers",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Benedikt J. aus Gera",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Qualität gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "Philipp A. aus Bielefeld",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "Mats K. aus München",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Julian J. aus Iserlohn",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Ben O. aus Mannheim",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Stefanie S. aus Mainz",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Laura R. aus Bielefeld",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Dominik W. aus Koblenz",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Emil S. aus Bochum",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Claudia C. aus Mannheim",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Jonas M. aus Recklinghausen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Theo W. aus Cottbus",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. 5 Sterne.",
    "customer_name": "Melanie F. aus Münster",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Petra C. aus Ingolstadt",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Stefanie H. aus Münster",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Robust gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Kerstin Z. aus Neuss",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Dominik Z. aus Bottrop",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Felix R. aus Köln",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Melanie S. aus Duisburg",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Lenny V. aus Offenbach",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Matteo D. aus Pforzheim",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Sandra W. aus Berlin",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Moritz T. aus Dortmund",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Edelstahl gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "David X. aus Bremen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Qualität gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Max Q. aus Witten",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Yannick I. aus Leipzig",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Monika C. aus Lübeck",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sportlich gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Niklas L. aus Fürth",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Tom F. aus Ulm",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Qualität. Klare Kaufempfehlung.",
    "customer_name": "Kerstin F. aus Münster",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Qualität gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Dennis J. aus Reutlingen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Noah Z. aus Würzburg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Qualität gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Theo K. aus Hannover",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Niklas N. aus Kiel",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Lenny O. aus Rostock",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Luis T. aus Witten",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Tobias J. aus Recklinghausen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Alexander H. aus Ulm",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Edelstahl gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Lisa V. aus Freiburg",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Qualität gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Valentin S. aus Kiel",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Lukas U. aus Wolfsburg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Monika T. aus Hannover",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Passt perfekt.",
    "customer_name": "Lisa P. aus Cottbus",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Klare Kaufempfehlung.",
    "customer_name": "Ben R. aus Köln",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Qualität gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Susanne E. aus Wiesbaden",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Sehr zufrieden.",
    "customer_name": "Sandra H. aus Heilbronn",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Moritz G. aus Stuttgart",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. 5 Sterne.",
    "customer_name": "Lenny C. aus Würzburg",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Justus M. aus Trier",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "Jannik Y. aus Fürth",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Edelstahl gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Anja I. aus Saarbrücken",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Samuel T. aus Dortmund",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Monika H. aus Göttingen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Kevin I. aus Esslingen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "David Q. aus Hildesheim",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Qualität gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Dominik D. aus Frankfurt",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Melanie Z. aus Herne",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Robin M. aus Iserlohn",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Benedikt E. aus Herne",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Lukas Z. aus Ingolstadt",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Tobias D. aus Bottrop",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Tobias Y. aus Augsburg",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Claudia K. aus Fürth",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Edelstahl. 5 Sterne.",
    "customer_name": "Noah K. aus Fürth",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Kann ich empfehlen.",
    "customer_name": "Liam F. aus Dortmund",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Qualität. Passt perfekt.",
    "customer_name": "Moritz P. aus Recklinghausen",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Erik V. aus Essen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Qualität gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Birgit O. aus Neuss",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Robust gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Laura Y. aus Ludwigshafen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Simon T. aus Ingolstadt",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Sportlich gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Luca H. aus Hamm",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Benedikt G. aus Bottrop",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Elias W. aus Paderborn",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Felix W. aus Witten",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Klare Kaufempfehlung.",
    "customer_name": "Jannik Y. aus Offenbach",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Robin D. aus Bielefeld",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Edelstahl gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Philipp Q. aus Göttingen",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Qualität gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Marlon I. aus Siegen",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Kann ich empfehlen.",
    "customer_name": "Lisa U. aus Bochum",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Bastian X. aus Krefeld",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Christoph C. aus Gera",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Christina J. aus Erlangen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Edelstahl. Würde ich wieder kaufen.",
    "customer_name": "Marlon G. aus Nürnberg",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Passt perfekt.",
    "customer_name": "Jannik D. aus Wiesbaden",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Nico R. aus Mönchengladbach",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Kann ich empfehlen.",
    "customer_name": "Philipp U. aus Hanau",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Lukas U. aus Ludwigshafen",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Sehr zufrieden.",
    "customer_name": "Justus K. aus Offenbach",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Sehr zufrieden.",
    "customer_name": "Tom E. aus Frankfurt",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Lisa N. aus Hanau",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Qualität gefällt mir sehr. Das Design ist Robust. Kann ich empfehlen.",
    "customer_name": "Bastian Y. aus Trier",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Robust gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Luca R. aus Herne",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Luca L. aus Gütersloh",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Robust gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Timo C. aus Cottbus",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Sportlich. Kann ich empfehlen.",
    "customer_name": "Yannick N. aus Mönchengladbach",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Finn Q. aus Ulm",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Philipp Q. aus Bremen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Qualität gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Julia O. aus Bremerhaven",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Christoph I. aus Schwerin",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Robust. Jeden Cent wert.",
    "customer_name": "Elias S. aus Karlsruhe",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Nadine X. aus Esslingen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sportlich gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Benedikt H. aus Wiesbaden",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Mein Favorit. Klare Kaufempfehlung.",
    "customer_name": "Lisa K. aus Erlangen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Robust gefällt mir sehr. Das Design ist Edelstahl. Passt perfekt.",
    "customer_name": "Kilian X. aus Erlangen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Laura Y. aus Bielefeld",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Klare Kaufempfehlung.",
    "customer_name": "David I. aus Heilbronn",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Qualität. Kann ich empfehlen.",
    "customer_name": "Mats S. aus Gütersloh",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Sabine B. aus Bergisch Gladbach",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Julia H. aus Oldenburg",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Melanie L. aus Rostock",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Robust gefällt mir sehr. Das Design ist Edelstahl. Sehr zufrieden.",
    "customer_name": "Robin E. aus Oberhausen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Birgit V. aus Heilbronn",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Melanie X. aus Leipzig",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Edelstahl. Jeden Cent wert.",
    "customer_name": "Katharina K. aus Würzburg",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Sportlich gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Lukas D. aus Dresden",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Sportlich gefällt mir sehr. Das Design ist Sportlich. 5 Sterne.",
    "customer_name": "Robin I. aus Ulm",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Qualität gefällt mir sehr. Das Design ist Sportlich. Ein echter Hingucker.",
    "customer_name": "Simon F. aus Recklinghausen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Robust gefällt mir sehr. Das Design ist Robust. Klare Kaufempfehlung.",
    "customer_name": "Moritz A. aus Neuss",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Robust gefällt mir sehr. Das Design ist Mein Favorit. Würde ich wieder kaufen.",
    "customer_name": "Sascha H. aus Wiesbaden",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Klare Kaufempfehlung.",
    "customer_name": "Katharina P. aus Moers",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Leon L. aus Mannheim",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Robust. Ein echter Hingucker.",
    "customer_name": "Jan A. aus Chemnitz",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Qualität. Ein echter Hingucker.",
    "customer_name": "Matteo B. aus Augsburg",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Philipp K. aus Berlin",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Mein Favorit gefällt mir sehr. Das Design ist Qualität. Jeden Cent wert.",
    "customer_name": "Malte F. aus Oldenburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Christoph X. aus Heidelberg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Sportlich gefällt mir sehr. Das Design ist Sportlich. Würde ich wieder kaufen.",
    "customer_name": "Julia W. aus Hildesheim",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Qualität gefällt mir sehr. Das Design ist Edelstahl. Kann ich empfehlen.",
    "customer_name": "Luca O. aus Göttingen",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Mein Favorit gefällt mir sehr. Das Design ist Qualität. 5 Sterne.",
    "customer_name": "Katharina T. aus Oldenburg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Edelstahl gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Paul U. aus Bochum",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Sportlich gefällt mir sehr. Das Design ist Mein Favorit. 5 Sterne.",
    "customer_name": "Kevin F. aus Magdeburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Robust gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Marlon T. aus Ingolstadt",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Sportlich gefällt mir sehr. Das Design ist Robust. 5 Sterne.",
    "customer_name": "Tim T. aus Bonn",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Qualität gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Julian Y. aus Münster",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Sportlich gefällt mir sehr. Das Design ist Robust. Würde ich wieder kaufen.",
    "customer_name": "Finn S. aus Augsburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Mein Favorit gefällt mir sehr. Das Design ist Robust. Passt perfekt.",
    "customer_name": "Stefanie L. aus Ulm",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Mein Favorit gefällt mir sehr. Das Design ist Mein Favorit. Ein echter Hingucker.",
    "customer_name": "Christina H. aus Aachen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Qualität gefällt mir sehr. Das Design ist Robust. Sehr zufrieden.",
    "customer_name": "Elias S. aus Hildesheim",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Edelstahl gefällt mir sehr. Das Design ist Sportlich. Jeden Cent wert.",
    "customer_name": "Tanja T. aus Bremerhaven",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Mein Favorit gefällt mir sehr. Das Design ist Edelstahl. Ein echter Hingucker.",
    "customer_name": "Anton K. aus Duisburg",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Mein Favorit gefällt mir sehr. Das Design ist Sportlich. Klare Kaufempfehlung.",
    "customer_name": "Noah D. aus Berlin",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Edelstahl gefällt mir sehr. Das Design ist Mein Favorit. Jeden Cent wert.",
    "customer_name": "Hannes W. aus Wolfsburg",
    "date": "2025-01-02"
  }
];