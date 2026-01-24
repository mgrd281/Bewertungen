const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Statement gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Nicole D. aus Nürnberg",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Justus P. aus Chemnitz",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "David G. aus München",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Klare Kaufempfehlung.",
    "customer_name": "Emil C. aus Offenbach",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxuriös gefällt mir sehr. Das Design ist Statement. Passt perfekt.",
    "customer_name": "Maximilian U. aus Wolfsburg",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Gold gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Philipp Z. aus Hanau",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Timo N. aus Bottrop",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Statement gefällt mir sehr. Das Design ist Glänzt schön. Ein echter Hingucker.",
    "customer_name": "Mats B. aus Wiesbaden",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Jannik X. aus Heidelberg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Kerstin O. aus Kaiserslautern",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Auffällig gefällt mir sehr. Das Design ist Auffällig. Jeden Cent wert.",
    "customer_name": "Moritz K. aus Dortmund",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Gold. Sehr zufrieden.",
    "customer_name": "Dominik Z. aus Freiburg",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Anja H. aus Kaiserslautern",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Statement. Sehr zufrieden.",
    "customer_name": "Timo F. aus Bielefeld",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Arne R. aus Darmstadt",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Johannes K. aus Paderborn",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Auffällig gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Andrea W. aus Hildesheim",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "David C. aus Siegen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxuriös gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Jan D. aus Siegen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Valentin I. aus Leipzig",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Johannes J. aus Mülheim an der Ruhr",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Jeden Cent wert.",
    "customer_name": "Valentin B. aus Koblenz",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Jeden Cent wert.",
    "customer_name": "Leon T. aus Gera",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Sehr zufrieden.",
    "customer_name": "Petra V. aus Chemnitz",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Glänzt schön. Jeden Cent wert.",
    "customer_name": "Paul Z. aus Hannover",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Bastian O. aus Essen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. 5 Sterne.",
    "customer_name": "Sabine R. aus Heilbronn",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Auffällig gefällt mir sehr. Das Design ist Gold. 5 Sterne.",
    "customer_name": "Birgit A. aus Hamburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Julian S. aus Ingolstadt",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Christina B. aus Erfurt",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Statement. Würde ich wieder kaufen.",
    "customer_name": "Sarah C. aus Cottbus",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Timo E. aus Würzburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Jeden Cent wert.",
    "customer_name": "Valentin Z. aus Chemnitz",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Auffällig gefällt mir sehr. Das Design ist Statement. Würde ich wieder kaufen.",
    "customer_name": "Nicole D. aus Lübeck",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Philipp B. aus Erlangen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Gold gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Moritz W. aus Mannheim",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Gold gefällt mir sehr. Das Design ist Glänzt schön. Jeden Cent wert.",
    "customer_name": "Jan C. aus Cottbus",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Statement gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Nicole G. aus Erlangen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Tobias O. aus Reutlingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Luxuriös. Würde ich wieder kaufen.",
    "customer_name": "Johannes F. aus Leipzig",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Statement gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Julia Z. aus Frankfurt",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Niklas F. aus Bottrop",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Auffällig gefällt mir sehr. Das Design ist Gold. Kann ich empfehlen.",
    "customer_name": "Finn Z. aus Erfurt",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Auffällig. 5 Sterne.",
    "customer_name": "Valentin L. aus Mönchengladbach",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Gold. 5 Sterne.",
    "customer_name": "Nico A. aus Kiel",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Glänzt schön. Sehr zufrieden.",
    "customer_name": "Nico Q. aus Erfurt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Statement gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Moritz B. aus Wuppertal",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Theo T. aus Heilbronn",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Statement. Passt perfekt.",
    "customer_name": "Liam V. aus Bielefeld",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Würde ich wieder kaufen.",
    "customer_name": "Jan E. aus Solingen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Gold gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Hannes V. aus Dortmund",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Statement. Jeden Cent wert.",
    "customer_name": "Sandra I. aus Krefeld",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Auffällig gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Leon K. aus Nürnberg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Luxuriös. Jeden Cent wert.",
    "customer_name": "Valentin J. aus Heidelberg",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Auffällig gefällt mir sehr. Das Design ist Gold. Kann ich empfehlen.",
    "customer_name": "Yannick B. aus Halle (Saale)",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxuriös gefällt mir sehr. Das Design ist Gold. Klare Kaufempfehlung.",
    "customer_name": "Nadine H. aus Osnabrück",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Anja L. aus Ulm",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Nadine B. aus Bergisch Gladbach",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Felix V. aus Dresden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Lisa M. aus Braunschweig",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Glänzt schön. Ein echter Hingucker.",
    "customer_name": "Emil B. aus Potsdam",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxuriös gefällt mir sehr. Das Design ist Statement. Kann ich empfehlen.",
    "customer_name": "Tobias J. aus Remscheid",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Statement gefällt mir sehr. Das Design ist Gold. Sehr zufrieden.",
    "customer_name": "Paul R. aus Cottbus",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Statement. Passt perfekt.",
    "customer_name": "Simon W. aus Gera",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Gold gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Fabian A. aus Stuttgart",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Alexander P. aus Hannover",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Würde ich wieder kaufen.",
    "customer_name": "Anna E. aus Oldenburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Nico H. aus Offenbach",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Auffällig gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Lisa B. aus Mönchengladbach",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Tobias R. aus Augsburg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Auffällig gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Maximilian P. aus Krefeld",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Fabian W. aus Frankfurt",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Sabine R. aus Duisburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Christoph T. aus Iserlohn",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Nicole Q. aus Bremerhaven",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Sehr zufrieden.",
    "customer_name": "Julian K. aus Leverkusen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Monika B. aus Wolfsburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Emil W. aus Kiel",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Matteo C. aus Essen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxuriös gefällt mir sehr. Das Design ist Gold. Jeden Cent wert.",
    "customer_name": "Kevin N. aus Dresden",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Dennis D. aus Düsseldorf",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Gold gefällt mir sehr. Das Design ist Auffällig. Klare Kaufempfehlung.",
    "customer_name": "Kerstin T. aus Nürnberg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Glänzt schön gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Erik F. aus Chemnitz",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Fabian F. aus Hannover",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Ben N. aus Aachen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "David I. aus Remscheid",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Statement gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Christina A. aus Kiel",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Kerstin Z. aus Berlin",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Luxuriös gefällt mir sehr. Das Design ist Gold. Jeden Cent wert.",
    "customer_name": "Yannick E. aus Heilbronn",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Statement gefällt mir sehr. Das Design ist Auffällig. Klare Kaufempfehlung.",
    "customer_name": "Finn G. aus Solingen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Tanja P. aus Würzburg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Gold gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Noah I. aus Erlangen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxuriös gefällt mir sehr. Das Design ist Auffällig. 5 Sterne.",
    "customer_name": "Nico Z. aus Kaiserslautern",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Leon N. aus Neuss",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Ein echter Hingucker.",
    "customer_name": "Monika D. aus Magdeburg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Auffällig gefällt mir sehr. Das Design ist Statement. Würde ich wieder kaufen.",
    "customer_name": "Anna U. aus Paderborn",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Statement. Würde ich wieder kaufen.",
    "customer_name": "Oskar F. aus Ingolstadt",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Malte Z. aus Saarbrücken",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Mats V. aus Essen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Gold. Sehr zufrieden.",
    "customer_name": "Milan T. aus Wolfsburg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Kilian S. aus Solingen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Erik U. aus Mönchengladbach",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Auffällig gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Matteo Z. aus Chemnitz",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Gold gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Paul T. aus Erlangen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Gold gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Tom S. aus Cottbus",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Julian W. aus Cottbus",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. 5 Sterne.",
    "customer_name": "Malte Y. aus Erfurt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Gold gefällt mir sehr. Das Design ist Statement. Jeden Cent wert.",
    "customer_name": "Christoph J. aus Bottrop",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Statement gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Tobias D. aus Ulm",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Jonas S. aus Rostock",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Julia K. aus Rostock",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Gold gefällt mir sehr. Das Design ist Glänzt schön. Ein echter Hingucker.",
    "customer_name": "Maximilian S. aus Karlsruhe",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Klare Kaufempfehlung.",
    "customer_name": "Julia Y. aus Augsburg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Jonas G. aus Gütersloh",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Gold gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Hannes Q. aus Bochum",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Jeden Cent wert.",
    "customer_name": "Maximilian I. aus Fürth",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Auffällig. Passt perfekt.",
    "customer_name": "Matteo G. aus Mainz",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Stefanie C. aus Kassel",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Gold gefällt mir sehr. Das Design ist Statement. Klare Kaufempfehlung.",
    "customer_name": "Christoph E. aus Pforzheim",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Statement. Klare Kaufempfehlung.",
    "customer_name": "Philipp T. aus Wolfsburg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Henry H. aus Gütersloh",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Leon K. aus Bremen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Oskar H. aus Braunschweig",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Jonas Z. aus Kassel",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Passt perfekt.",
    "customer_name": "Tanja E. aus Mainz",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Statement. Kann ich empfehlen.",
    "customer_name": "Matteo C. aus Magdeburg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Christoph J. aus Erfurt",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Gold gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Sandra Q. aus Karlsruhe",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Glänzt schön gefällt mir sehr. Das Design ist Gold. Klare Kaufempfehlung.",
    "customer_name": "Florian Z. aus Göttingen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Adrian F. aus Augsburg",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Ein echter Hingucker.",
    "customer_name": "Monika L. aus Kiel",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Kilian A. aus Neuss",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Emil U. aus Hamm",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Noah I. aus Gelsenkirchen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Auffällig. 5 Sterne.",
    "customer_name": "Oskar X. aus Regensburg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Statement gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Kerstin G. aus Erlangen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Maximilian I. aus Oldenburg",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Statement gefällt mir sehr. Das Design ist Luxuriös. Klare Kaufempfehlung.",
    "customer_name": "Adrian J. aus Gelsenkirchen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Gold. Jeden Cent wert.",
    "customer_name": "David F. aus Salzgitter",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Gold gefällt mir sehr. Das Design ist Glänzt schön. 5 Sterne.",
    "customer_name": "Kevin X. aus Solingen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxuriös gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Marlon R. aus Duisburg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Sehr zufrieden.",
    "customer_name": "Tom P. aus Fürth",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Auffällig gefällt mir sehr. Das Design ist Gold. Klare Kaufempfehlung.",
    "customer_name": "Kilian Q. aus Hamburg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Samuel V. aus Gelsenkirchen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Statement gefällt mir sehr. Das Design ist Luxuriös. Ein echter Hingucker.",
    "customer_name": "Matteo Z. aus Köln",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Moritz Q. aus Erlangen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Florian Q. aus Kassel",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Statement. Würde ich wieder kaufen.",
    "customer_name": "Arne E. aus Bielefeld",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Klare Kaufempfehlung.",
    "customer_name": "Lenny Q. aus Hagen",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Gold gefällt mir sehr. Das Design ist Auffällig. Klare Kaufempfehlung.",
    "customer_name": "Samuel I. aus Solingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Gold gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Bastian Q. aus Heilbronn",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Robin S. aus Pforzheim",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Stefanie T. aus Kaiserslautern",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Gold. Kann ich empfehlen.",
    "customer_name": "Susanne Y. aus München",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Jeden Cent wert.",
    "customer_name": "Sarah A. aus Gütersloh",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Statement gefällt mir sehr. Das Design ist Gold. Jeden Cent wert.",
    "customer_name": "Monika X. aus Remscheid",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Luxuriös. Sehr zufrieden.",
    "customer_name": "Simon T. aus Berlin",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Luxuriös gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Dominik N. aus Erfurt",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Maximilian Q. aus Ingolstadt",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Statement. Kann ich empfehlen.",
    "customer_name": "Sabine L. aus Düsseldorf",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Christoph M. aus Ingolstadt",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Julia D. aus Reutlingen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Glänzt schön gefällt mir sehr. Das Design ist Statement. Würde ich wieder kaufen.",
    "customer_name": "Malte B. aus Schwerin",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Statement gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Anton Q. aus Gelsenkirchen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Matteo S. aus Freiburg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Alexander O. aus Ingolstadt",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Fabian M. aus Berlin",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Glänzt schön gefällt mir sehr. Das Design ist Gold. 5 Sterne.",
    "customer_name": "Tanja Z. aus Wolfsburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Würde ich wieder kaufen.",
    "customer_name": "Anja W. aus Cottbus",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Sehr zufrieden.",
    "customer_name": "Tobias U. aus Cottbus",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Luxuriös gefällt mir sehr. Das Design ist Gold. Jeden Cent wert.",
    "customer_name": "Niklas N. aus Halle (Saale)",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Jan M. aus Gütersloh",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Tobias S. aus Ulm",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Statement gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Maria N. aus Iserlohn",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. 5 Sterne.",
    "customer_name": "Maria N. aus Kassel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Auffällig gefällt mir sehr. Das Design ist Gold. Passt perfekt.",
    "customer_name": "Justus Q. aus Düsseldorf",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Statement gefällt mir sehr. Das Design ist Auffällig. Passt perfekt.",
    "customer_name": "Nadine V. aus Gütersloh",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Glänzt schön gefällt mir sehr. Das Design ist Glänzt schön. Jeden Cent wert.",
    "customer_name": "Bastian C. aus Koblenz",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Gold gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Christina Z. aus Leverkusen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Ein echter Hingucker.",
    "customer_name": "Anton O. aus Pforzheim",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Katharina O. aus Iserlohn",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Melanie L. aus Nürnberg",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Dominik C. aus Mönchengladbach",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Milan N. aus Bottrop",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Statement. Klare Kaufempfehlung.",
    "customer_name": "Anna R. aus Gelsenkirchen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Gold gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Vincent C. aus Aachen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Julian T. aus Duisburg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Statement gefällt mir sehr. Das Design ist Statement. Klare Kaufempfehlung.",
    "customer_name": "Julia G. aus Mülheim an der Ruhr",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Auffällig. Ein echter Hingucker.",
    "customer_name": "Hannes E. aus Bonn",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxuriös gefällt mir sehr. Das Design ist Statement. Kann ich empfehlen.",
    "customer_name": "Paul R. aus Lübeck",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Gold gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Philipp E. aus Braunschweig",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Gold gefällt mir sehr. Das Design ist Gold. Würde ich wieder kaufen.",
    "customer_name": "Erik S. aus Herne",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Gold gefällt mir sehr. Das Design ist Luxuriös. Jeden Cent wert.",
    "customer_name": "Tanja X. aus Düsseldorf",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Luxuriös. Sehr zufrieden.",
    "customer_name": "Nico W. aus Ludwigsburg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Sabine Q. aus Gera",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Robin N. aus Essen",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Henry N. aus Herne",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Melanie K. aus Pforzheim",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Gold gefällt mir sehr. Das Design ist Glänzt schön. Sehr zufrieden.",
    "customer_name": "Claudia K. aus Osnabrück",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Luxuriös gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Theo O. aus Hagen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Glänzt schön. Kann ich empfehlen.",
    "customer_name": "Lisa D. aus Hannover",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Glänzt schön gefällt mir sehr. Das Design ist Gold. 5 Sterne.",
    "customer_name": "Niklas K. aus Göttingen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxuriös gefällt mir sehr. Das Design ist Gold. Ein echter Hingucker.",
    "customer_name": "Theo C. aus Pforzheim",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Auffällig gefällt mir sehr. Das Design ist Luxuriös. Ein echter Hingucker.",
    "customer_name": "Dominik R. aus Solingen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Statement. Klare Kaufempfehlung.",
    "customer_name": "Julia T. aus Berlin",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Tobias T. aus Iserlohn",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Gold gefällt mir sehr. Das Design ist Luxuriös. Jeden Cent wert.",
    "customer_name": "Felix D. aus Dortmund",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Kann ich empfehlen.",
    "customer_name": "Christoph D. aus Paderborn",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Statement gefällt mir sehr. Das Design ist Luxuriös. Sehr zufrieden.",
    "customer_name": "David H. aus Heidelberg",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Auffällig gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Kilian Z. aus Bremerhaven",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Glänzt schön gefällt mir sehr. Das Design ist Statement. Jeden Cent wert.",
    "customer_name": "Claudia C. aus Wiesbaden",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Statement gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Paul F. aus Pforzheim",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Luxuriös. Würde ich wieder kaufen.",
    "customer_name": "Finn M. aus Bremen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Klare Kaufempfehlung.",
    "customer_name": "Andrea I. aus Braunschweig",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Statement. 5 Sterne.",
    "customer_name": "Nico L. aus Erfurt",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Gold gefällt mir sehr. Das Design ist Statement. Klare Kaufempfehlung.",
    "customer_name": "Ben V. aus Leverkusen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Sandra C. aus Wiesbaden",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. 5 Sterne.",
    "customer_name": "Tom C. aus Koblenz",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxuriös gefällt mir sehr. Das Design ist Statement. Kann ich empfehlen.",
    "customer_name": "Dominik T. aus Ludwigsburg",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Gold gefällt mir sehr. Das Design ist Glänzt schön. Würde ich wieder kaufen.",
    "customer_name": "Stefanie E. aus Hamm",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Glänzt schön. 5 Sterne.",
    "customer_name": "Theo P. aus Mönchengladbach",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Jeden Cent wert.",
    "customer_name": "Luca A. aus Potsdam",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Gold. Kann ich empfehlen.",
    "customer_name": "Kerstin R. aus Solingen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Edle Verpackung. Statement gefällt mir sehr. Das Design ist Auffällig. 5 Sterne.",
    "customer_name": "Petra N. aus Stuttgart",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Glänzt schön gefällt mir sehr. Das Design ist Auffällig. Sehr zufrieden.",
    "customer_name": "Florian F. aus München",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Glänzt schön gefällt mir sehr. Das Design ist Statement. Kann ich empfehlen.",
    "customer_name": "Niklas L. aus Duisburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Glänzt schön. Passt perfekt.",
    "customer_name": "Mats V. aus Darmstadt",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Glänzt schön gefällt mir sehr. Das Design ist Statement. Jeden Cent wert.",
    "customer_name": "Jan L. aus Bremen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Qualität von Boss. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Sehr zufrieden.",
    "customer_name": "Henry K. aus Bielefeld",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Luxuriös. Kann ich empfehlen.",
    "customer_name": "Luca L. aus Witten",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Gold gefällt mir sehr. Das Design ist Auffällig. Jeden Cent wert.",
    "customer_name": "Mats R. aus Augsburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Jeden Cent wert.",
    "customer_name": "Timo W. aus Hanau",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Valentin K. aus Kassel",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Statement gefällt mir sehr. Das Design ist Auffällig. Klare Kaufempfehlung.",
    "customer_name": "Matteo J. aus Halle (Saale)",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Klare Kaufempfehlung.",
    "customer_name": "Nadine W. aus Würzburg",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Lange gesucht, endlich gefunden. Luxuriös gefällt mir sehr. Das Design ist Luxuriös. Klare Kaufempfehlung.",
    "customer_name": "Luca L. aus Jena",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Glänzt schön gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Valentin D. aus Siegen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Gold gefällt mir sehr. Das Design ist Statement. Ein echter Hingucker.",
    "customer_name": "Maria F. aus Bielefeld",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Arne S. aus Heidelberg",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Gold. Kann ich empfehlen.",
    "customer_name": "Tobias S. aus Münster",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Trage sie jeden Tag. Auffällig gefällt mir sehr. Das Design ist Luxuriös. 5 Sterne.",
    "customer_name": "Theo W. aus Berlin",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe mir diese Uhr gegönnt. Luxuriös gefällt mir sehr. Das Design ist Auffällig. Würde ich wieder kaufen.",
    "customer_name": "Leo O. aus Koblenz",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein tolles Geschenk. Gold gefällt mir sehr. Das Design ist Gold. Klare Kaufempfehlung.",
    "customer_name": "Simon G. aus Siegen",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht in echt noch besser aus. Gold gefällt mir sehr. Das Design ist Luxuriös. Passt perfekt.",
    "customer_name": "Lenny L. aus Göttingen",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller Versand von Karinex. Glänzt schön gefällt mir sehr. Das Design ist Gold. Klare Kaufempfehlung.",
    "customer_name": "Monika Y. aus Kiel",
    "date": "2025-01-03"
  }
];