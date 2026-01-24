const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Timo Q. aus Heilbronn",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Bastian G. aus Frankfurt",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Anton I. aus Rostock",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Luis S. aus München",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Vincent F. aus Gelsenkirchen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Jan A. aus Hagen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Associate. Sehr zufrieden.",
    "customer_name": "Ben G. aus Nürnberg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Sascha D. aus Fürth",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Maria O. aus Frankfurt",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Paul J. aus Frankfurt",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Elegant gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Theo G. aus Wiesbaden",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Anna Q. aus Karlsruhe",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Roségold. Jeden Cent wert.",
    "customer_name": "Anna J. aus Hamburg",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Justus F. aus Berlin",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Andrea I. aus Fürth",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Valentin J. aus Freiburg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Christina W. aus Magdeburg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Associate gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Luca A. aus Berlin",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Liam H. aus Lübeck",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Associate. Würde ich wieder kaufen.",
    "customer_name": "Felix E. aus Freiburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "David X. aus München",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Jannik I. aus Hannover",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Roségold gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Nicole J. aus Freiburg",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Dennis E. aus Schwerin",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Stefanie A. aus Hannover",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Christina A. aus Pforzheim",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Fein gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Malte I. aus Bochum",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Christoph F. aus Bochum",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Susanne U. aus Recklinghausen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Jan M. aus Remscheid",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Christina G. aus Solingen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Associate. Sehr zufrieden.",
    "customer_name": "Monika H. aus Bremen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Luca T. aus Rostock",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Kerstin O. aus Saarbrücken",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Christina M. aus Mönchengladbach",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Dennis H. aus Freiburg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Roségold. Sehr zufrieden.",
    "customer_name": "Christoph D. aus Ulm",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Samuel F. aus Solingen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Melanie S. aus Offenbach",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Justus D. aus Hagen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Roségold. Sehr zufrieden.",
    "customer_name": "Noah N. aus Darmstadt",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Samuel H. aus Essen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Luis N. aus Cottbus",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Emil T. aus Jena",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Associate. Würde ich wieder kaufen.",
    "customer_name": "Erik U. aus Oberhausen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Fein gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Valentin W. aus Heidelberg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Philipp P. aus Halle (Saale)",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Elegant gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Dominik J. aus Gera",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Christina I. aus Schwerin",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Maximilian X. aus Bonn",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Kilian R. aus Magdeburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Jan N. aus Osnabrück",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Fein gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Leon L. aus Saarbrücken",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Tanja J. aus Bremerhaven",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Nadine Y. aus Oldenburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Julian W. aus Hildesheim",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Maria A. aus Bielefeld",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Paul K. aus Erlangen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Henry A. aus München",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Tanja L. aus Köln",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Sascha K. aus Aachen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Elias O. aus Stuttgart",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Kevin G. aus Saarbrücken",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Sascha C. aus Bochum",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Julian W. aus Bottrop",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Yannick T. aus Berlin",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Fein gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Julia M. aus Bonn",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Luis J. aus Hamburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Samuel M. aus Leipzig",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Christoph Q. aus Lübeck",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Fein gefällt mir sehr. Das Design ist Roségold. Jeden Cent wert.",
    "customer_name": "Birgit D. aus Gera",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Florian H. aus Münster",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Marlon F. aus Darmstadt",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Kevin K. aus Witten",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Luca J. aus Oldenburg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Moritz Z. aus Jena",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Sabine Z. aus Oberhausen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Nico P. aus Halle (Saale)",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Theo G. aus Reutlingen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Elegant. Ein echter Hingucker.",
    "customer_name": "Benedikt G. aus Münster",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Alexander Z. aus Siegen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Anja G. aus Heidelberg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Christoph I. aus Wuppertal",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Milan K. aus Potsdam",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Theo C. aus Gera",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Tim Y. aus Halle (Saale)",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Anna K. aus Bottrop",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Elegant. Ein echter Hingucker.",
    "customer_name": "Maximilian I. aus Nürnberg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Maximilian N. aus Bremen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Bastian R. aus Siegen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Lisa L. aus Recklinghausen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Samuel K. aus Augsburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Henry F. aus Rostock",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Noah Q. aus Hildesheim",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Associate gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Tim G. aus Göttingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Johannes U. aus Iserlohn",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Ein echter Hingucker.",
    "customer_name": "Jannik S. aus Dresden",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Mats T. aus Berlin",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Henry S. aus Remscheid",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Paul S. aus Düsseldorf",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Elegant. Klare Kaufempfehlung.",
    "customer_name": "Oskar D. aus Wolfsburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Henry W. aus Iserlohn",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Associate. Sehr zufrieden.",
    "customer_name": "Kerstin R. aus Oberhausen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Henry O. aus Dortmund",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Lukas T. aus Reutlingen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Tobias B. aus Würzburg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Theo Y. aus Hamm",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Paul S. aus Hildesheim",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Sandra K. aus Würzburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Christoph F. aus Salzgitter",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Florian Y. aus Hildesheim",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Bastian D. aus Berlin",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Fein. Kann ich empfehlen.",
    "customer_name": "Robin K. aus Bielefeld",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Valentin L. aus Freiburg",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Matteo N. aus Esslingen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Associate. Würde ich wieder kaufen.",
    "customer_name": "David U. aus Düsseldorf",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Oskar Q. aus Gelsenkirchen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Fein. Kann ich empfehlen.",
    "customer_name": "Simon V. aus Bonn",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Adrian S. aus Aachen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Felix I. aus Magdeburg",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Tom N. aus Pforzheim",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Samuel E. aus Ingolstadt",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Andrea Y. aus Hamm",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Julian R. aus Düsseldorf",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Niklas S. aus Erfurt",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Fein gefällt mir sehr. Das Design ist Associate. Würde ich wieder kaufen.",
    "customer_name": "Philipp W. aus Saarbrücken",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Arne D. aus Lübeck",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Vincent G. aus Ingolstadt",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Maria F. aus Hamm",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Ben V. aus Siegen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Julian X. aus Iserlohn",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Elegant gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "David Q. aus Essen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Claudia O. aus Hannover",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Sabine O. aus Pforzheim",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Vincent U. aus Ingolstadt",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Felix Q. aus Cottbus",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Roségold gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Felix E. aus Salzgitter",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Lenny E. aus Mönchengladbach",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Liam O. aus Mainz",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Yannick H. aus Bergisch Gladbach",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Roségold. Sehr zufrieden.",
    "customer_name": "Maximilian H. aus Fürth",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Liam W. aus Braunschweig",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Associate gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Noah H. aus Regensburg",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Niklas J. aus Kassel",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Felix J. aus Kiel",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Tanja U. aus Paderborn",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Monika Z. aus Wuppertal",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Anna Z. aus Kiel",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Tanja R. aus Heilbronn",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Petra W. aus Darmstadt",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Roségold gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Tim T. aus Aachen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Lukas V. aus Düsseldorf",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Leon I. aus Leipzig",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Katharina Z. aus Witten",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Ben N. aus Chemnitz",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Elias H. aus Cottbus",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Hannes A. aus Mönchengladbach",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Yannick Y. aus Hannover",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Mats E. aus Ulm",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Tim S. aus Krefeld",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Anton R. aus Bremen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Sascha D. aus Mönchengladbach",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Malte N. aus Oldenburg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Noah V. aus Regensburg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Christoph A. aus Trier",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Maria V. aus Bielefeld",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Elegant gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Christina Q. aus München",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Henry K. aus Gera",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Felix K. aus Esslingen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Sehr zufrieden.",
    "customer_name": "Samuel P. aus Berlin",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Associate gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Adrian N. aus Berlin",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Anton G. aus Düsseldorf",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Monika I. aus Recklinghausen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Nico W. aus Göttingen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Samuel O. aus Bielefeld",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Tom W. aus Kiel",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Fabian W. aus Köln",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Elegant gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Yannick M. aus Koblenz",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Leo V. aus Heidelberg",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Elegant gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Anton F. aus Oberhausen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Fein gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Monika Z. aus Herne",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Associate gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Nadine U. aus Mannheim",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Tanja J. aus Leipzig",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Andrea Y. aus Mainz",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Henry X. aus Freiburg",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Valentin A. aus Mülheim an der Ruhr",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Kevin X. aus Regensburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Dominik W. aus Kiel",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Oskar A. aus Witten",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Liam U. aus Bremen",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Nadine Y. aus Moers",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Leo U. aus Chemnitz",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Elegant gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Andrea K. aus Oldenburg",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Elegant gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Robin Z. aus Gütersloh",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Finn R. aus Paderborn",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Maximilian R. aus Krefeld",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Sandra M. aus Erlangen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Elegant gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Leo Q. aus Würzburg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Elegant gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Oskar W. aus Koblenz",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Noah O. aus Duisburg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Jonas I. aus Bottrop",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Associate. Würde ich wieder kaufen.",
    "customer_name": "Christina S. aus Erfurt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Elegant. Ein echter Hingucker.",
    "customer_name": "Tanja N. aus Dresden",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Oskar A. aus Kassel",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Noah N. aus Remscheid",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Erik E. aus Witten",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Roségold. Jeden Cent wert.",
    "customer_name": "Kerstin T. aus Herne",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Elegant gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Laura G. aus Bielefeld",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Laura V. aus Saarbrücken",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Julia F. aus Magdeburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Associate gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Julian K. aus Heilbronn",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Jeden Cent wert.",
    "customer_name": "Jannik Y. aus Hildesheim",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Milan Z. aus Cottbus",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Liam Z. aus Essen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Elegant gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Christina C. aus Salzgitter",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Klare Kaufempfehlung.",
    "customer_name": "David N. aus Offenbach",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Lisa F. aus Hildesheim",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Associate gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Dennis A. aus Herne",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Christoph U. aus Lübeck",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Max S. aus Nürnberg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Christina U. aus Würzburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Birgit B. aus Salzgitter",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Luis D. aus Hamm",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Anton U. aus Gütersloh",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Ben P. aus Mönchengladbach",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Sabine Y. aus Hamm",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Sarah T. aus Erfurt",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Kerstin Y. aus Erfurt",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Lenny B. aus Gelsenkirchen",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Fein. Kann ich empfehlen.",
    "customer_name": "Elias Z. aus Bottrop",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Florian J. aus Berlin",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Elias U. aus Moers",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Tom U. aus Bremen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Liam H. aus Osnabrück",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Melanie X. aus Cottbus",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Luis L. aus Halle (Saale)",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Elegant. Passt perfekt.",
    "customer_name": "Claudia S. aus Ludwigshafen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Melanie O. aus Pforzheim",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Justus E. aus Essen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Arne B. aus Hannover",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Melanie O. aus Freiburg",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Niklas G. aus Gera",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Elegant gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Nico R. aus Nürnberg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Christina P. aus Moers",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Associate gefällt mir sehr. Das Design ist Associate. Sehr zufrieden.",
    "customer_name": "Fabian K. aus Bielefeld",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Jonas Z. aus Bergisch Gladbach",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Elias D. aus Cottbus",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Leon T. aus Iserlohn",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Sabine R. aus Gelsenkirchen",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Luca I. aus Koblenz",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Timo J. aus Aachen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Simon H. aus Bochum",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Matteo I. aus Krefeld",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Liam A. aus Pforzheim",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Henry W. aus Hannover",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Roségold gefällt mir sehr. Das Design ist Roségold. Sehr zufrieden.",
    "customer_name": "Simon T. aus Wiesbaden",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Jonas R. aus Lübeck",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Associate. Sehr zufrieden.",
    "customer_name": "Melanie A. aus Neuss",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Associate gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Christoph H. aus Mannheim",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Tanja L. aus Hanau",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Kerstin U. aus Aachen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Johannes D. aus Darmstadt",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Elegant. Sehr zufrieden.",
    "customer_name": "Paul U. aus Wolfsburg",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Liam X. aus Braunschweig",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Christoph C. aus Rostock",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Valentin N. aus Bonn",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Jannik G. aus Esslingen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Fein. Würde ich wieder kaufen.",
    "customer_name": "Luis V. aus Gera",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Bastian I. aus Berlin",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Roségold. Sehr zufrieden.",
    "customer_name": "Lukas B. aus Offenbach",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Leo U. aus Cottbus",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Kerstin Q. aus Hamburg",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Elegant gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Robin J. aus Solingen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Associate. Sehr zufrieden.",
    "customer_name": "Maximilian W. aus Rostock",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Associate gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Alexander Q. aus Düsseldorf",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Arne M. aus Freiburg",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Roségold gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Dominik Y. aus Leverkusen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Bastian F. aus Münster",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Sascha W. aus Trier",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Florian T. aus Krefeld",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Sarah T. aus Dresden",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Erik J. aus Bremerhaven",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Felix H. aus Magdeburg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Matteo H. aus Aachen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Fein gefällt mir sehr. Das Design ist Elegant. Ein echter Hingucker.",
    "customer_name": "Monika I. aus Esslingen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Elegant. Klare Kaufempfehlung.",
    "customer_name": "Tobias Y. aus München",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Mats R. aus Koblenz",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Alexander V. aus Ingolstadt",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Birgit Z. aus Mannheim",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Oskar Q. aus Magdeburg",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Luca Z. aus Regensburg",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Alexander B. aus Solingen",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Associate gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Arne Y. aus Leipzig",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Paul O. aus Dortmund",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Elegant gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "David S. aus München",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Adrian U. aus Hamburg",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Melanie V. aus Paderborn",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Andrea O. aus Fürth",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Kerstin U. aus Bottrop",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Fein. Sehr zufrieden.",
    "customer_name": "Luca W. aus Würzburg",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Kilian N. aus Hamm",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Roségold gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Lenny F. aus Bochum",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Nadine U. aus Augsburg",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Kann ich empfehlen.",
    "customer_name": "Felix H. aus Leipzig",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Arne A. aus Bochum",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Ben W. aus Heidelberg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Associate gefällt mir sehr. Das Design ist Fein. Jeden Cent wert.",
    "customer_name": "Alexander N. aus Siegen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Roségold gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Liam H. aus Dresden",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Florian X. aus Göttingen",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Elegant gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Simon J. aus Reutlingen",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Tobias Z. aus Gelsenkirchen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Elegant. Kann ich empfehlen.",
    "customer_name": "Noah K. aus Bochum",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Christina O. aus Fürth",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Alexander E. aus Gera",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Associate. Würde ich wieder kaufen.",
    "customer_name": "Arne K. aus Wuppertal",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Sascha Z. aus Hagen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Roségold. Jeden Cent wert.",
    "customer_name": "Milan J. aus Hamm",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Kilian W. aus Ludwigsburg",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. Kann ich empfehlen.",
    "customer_name": "Sarah T. aus Mainz",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Roségold. Kann ich empfehlen.",
    "customer_name": "Theo J. aus Krefeld",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Jeden Cent wert.",
    "customer_name": "Nico Q. aus Würzburg",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Maximilian M. aus Berlin",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Roségold gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Luca E. aus Moers",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Adrian N. aus Erlangen",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Passt perfekt.",
    "customer_name": "Dominik S. aus Kaiserslautern",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Roségold gefällt mir sehr. Das Design ist Fein. Kann ich empfehlen.",
    "customer_name": "Henry T. aus Potsdam",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Elegant. 5 Sterne.",
    "customer_name": "Valentin L. aus Moers",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Associate. Passt perfekt.",
    "customer_name": "Jannik E. aus Lübeck",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Alexander E. aus Wolfsburg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Anzug-Uhr gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Alexander T. aus Magdeburg",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Jeden Cent wert.",
    "customer_name": "Mats P. aus Essen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Elegant gefällt mir sehr. Das Design ist Anzug-Uhr. Ein echter Hingucker.",
    "customer_name": "Noah L. aus Remscheid",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Elegant gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Moritz Z. aus Bremerhaven",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Lenny M. aus Stuttgart",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Roségold gefällt mir sehr. Das Design ist Associate. Ein echter Hingucker.",
    "customer_name": "Ben X. aus Saarbrücken",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Dennis E. aus Frankfurt",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Fein. Ein echter Hingucker.",
    "customer_name": "Niklas N. aus Reutlingen",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Würde ich wieder kaufen.",
    "customer_name": "Kevin E. aus Hagen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Anzug-Uhr gefällt mir sehr. Das Design ist Elegant. Jeden Cent wert.",
    "customer_name": "Theo C. aus Saarbrücken",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Anzug-Uhr gefällt mir sehr. Das Design ist Fein. 5 Sterne.",
    "customer_name": "Lisa L. aus Reutlingen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Anzug-Uhr gefällt mir sehr. Das Design ist Roségold. Ein echter Hingucker.",
    "customer_name": "Simon F. aus Ulm",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Roségold. Würde ich wieder kaufen.",
    "customer_name": "Emil S. aus Stuttgart",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Fein gefällt mir sehr. Das Design ist Roségold. Passt perfekt.",
    "customer_name": "Jonas O. aus Köln",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Elegant gefällt mir sehr. Das Design ist Associate. Jeden Cent wert.",
    "customer_name": "Oskar C. aus Heidelberg",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Associate. Kann ich empfehlen.",
    "customer_name": "Lukas I. aus Herne",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Associate. 5 Sterne.",
    "customer_name": "Susanne D. aus Gera",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Niklas K. aus Düsseldorf",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Kerstin M. aus Reutlingen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Fein gefällt mir sehr. Das Design ist Elegant. Ein echter Hingucker.",
    "customer_name": "Yannick V. aus Pforzheim",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Fein gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Ben H. aus Moers",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. 5 Sterne.",
    "customer_name": "Noah U. aus Oberhausen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Associate gefällt mir sehr. Das Design ist Anzug-Uhr. Klare Kaufempfehlung.",
    "customer_name": "Tanja B. aus Wuppertal",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Fein gefällt mir sehr. Das Design ist Roségold. 5 Sterne.",
    "customer_name": "Mats A. aus Iserlohn",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Fein. Passt perfekt.",
    "customer_name": "Christoph O. aus Bottrop",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Associate gefällt mir sehr. Das Design ist Roségold. Klare Kaufempfehlung.",
    "customer_name": "Adrian I. aus Bergisch Gladbach",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Elegant gefällt mir sehr. Das Design ist Elegant. Würde ich wieder kaufen.",
    "customer_name": "Marlon L. aus Fürth",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Fein. Kann ich empfehlen.",
    "customer_name": "Anna M. aus Hamburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Fein gefällt mir sehr. Das Design ist Associate. Klare Kaufempfehlung.",
    "customer_name": "Niklas T. aus Gütersloh",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Roségold gefällt mir sehr. Das Design ist Anzug-Uhr. Sehr zufrieden.",
    "customer_name": "Tom D. aus Gera",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Associate gefällt mir sehr. Das Design ist Fein. Klare Kaufempfehlung.",
    "customer_name": "Lenny N. aus Mönchengladbach",
    "date": "2025-01-01"
  }
];