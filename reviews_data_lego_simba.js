const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Danke!",
    "customer_name": "Tom M. aus Buxtehude",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Bin zufrieden.",
    "customer_name": "Theo D. aus Jena",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Daumen hoch!",
    "customer_name": "Leon P. aus Witten",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Finn J. aus Gera",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Simba gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Tim A. aus Hamm",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Johannes H. aus Gütersloh",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Lisa A. aus Witten",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Anna J. aus Erfurt",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Susanne I. aus Menden",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Einfach zu bauen gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Tanja P. aus Minden",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kilian E. aus Dortmund",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Oskar M. aus Mannheim",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Anna D. aus Neunkirchen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Absolute Kaufempfehlung.",
    "customer_name": "Max A. aus Herford",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Benedikt O. aus Weimar",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha P. aus Mülheim an der Ruhr",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon E. aus Mainz",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Alexander G. aus Düren",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Malte W. aus Herford",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Johannes T. aus Frechen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Philipp S. aus Frankfurt (Oder)",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Nicole P. aus Dorsten",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders König der Löwen gefällt mir gut. Super Shop.",
    "customer_name": "Felix F. aus Düsseldorf",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Florian T. aus Elmshorn",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny Q. aus Münster",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Sandra P. aus Monheim am Rhein",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Valentin Y. aus Bad Salzuflen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Beweglicher Kopf gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Arne X. aus Soest",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Alexander D. aus Lünen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes Z. aus Straubing",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Vincent V. aus Bremen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Vincent L. aus Osnabrück",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Simon E. aus München",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Arne H. aus Dresden",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Christoph G. aus Halle (Saale)",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Andrea Z. aus Witten",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Anton J. aus Aschaffenburg",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Bin zufrieden.",
    "customer_name": "Paul D. aus Marburg",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Anna U. aus Herten",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Danke!",
    "customer_name": "Finn L. aus Aachen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Moritz I. aus Gütersloh",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Marlon P. aus Herford",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Robin I. aus Braunschweig",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Super Shop.",
    "customer_name": "Luis G. aus Traunstein",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Lukas Q. aus Brotterode",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Geschenkidee gefällt mir gut. Top, weiter so.",
    "customer_name": "Maximilian R. aus Monheim am Rhein",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Arne Z. aus Offenbach",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Simba gefällt mir gut. Super Shop.",
    "customer_name": "Stefanie Y. aus Gronau",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Luis K. aus Brandenburg an der Havel",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Elias Q. aus Mönchengladbach",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Petra S. aus Bergisch Gladbach",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar Z. aus Emden",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "David M. aus Wesel",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Danke!",
    "customer_name": "Lenny W. aus Regensburg",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Einfach zu bauen gefällt mir gut. Bin happy.",
    "customer_name": "Kevin W. aus Dresden",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Niedlich gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sabine C. aus Offenbach",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Kerstin W. aus Reutlingen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt D. aus Leverkusen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Philipp M. aus Böblingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Anna Z. aus Essen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lisa O. aus München",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders König der Löwen gefällt mir gut. Top, weiter so.",
    "customer_name": "Tanja C. aus Frechen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Erik T. aus Kaiserslautern",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Anja T. aus Soest",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Moritz P. aus Fellbach",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Sabine H. aus Memmingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Sandra R. aus Wuppertal",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sabine W. aus Offenbach",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Hat sich definitiv gelohnt.",
    "customer_name": "Fabian F. aus Bremerhaven",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Disney Magie gefällt mir gut. Top, weiter so.",
    "customer_name": "Henry V. aus Köln",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Bin happy.",
    "customer_name": "Maximilian J. aus Jena",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Petra L. aus Erfurt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Melanie P. aus Halle (Saale)",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Geschenkidee gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "David N. aus Chemnitz",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Beweglicher Kopf gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Elias F. aus Mainz",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders König der Löwen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Ben L. aus Bornheim",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Benedikt Q. aus Soest",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Süß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Timo D. aus Offenburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Jannik G. aus Chemnitz",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Maximilian A. aus Ravensburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Simba gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Dennis E. aus Gelsenkirchen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Matteo Q. aus Magdeburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Justus W. aus Hanau",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Claudia Z. aus Siegen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders König der Löwen gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix V. aus Freising",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Claudia D. aus Eisenach",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Julian T. aus Leinfelden-Echterdingen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Tom F. aus Herzogenrath",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Sarah W. aus Gelsenkirchen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders König der Löwen gefällt mir gut. Bin happy.",
    "customer_name": "Monika C. aus Wuppertal",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Bin zufrieden.",
    "customer_name": "Vincent Y. aus Dinslaken",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Liam Q. aus Nordhorn",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Mats C. aus Villingen-Schwenningen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Einfach zu bauen gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Kerstin Z. aus Kiel",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Malte R. aus Castrop-Rauxel",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Max D. aus Moers",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix G. aus Ludwigshafen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Christina W. aus Castrop-Rauxel",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Andrea Z. aus Neu-Ulm",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Laura K. aus Waiblingen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Fabian G. aus Osnabrück",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Felix Z. aus Monheim am Rhein",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Nicole O. aus Herne",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Jonas N. aus Garbsen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Benedikt J. aus Würzburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Dennis R. aus Bayreuth",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Simba gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Adrian A. aus Heidelberg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Tom T. aus Gera",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Einfach zu bauen gefällt mir gut. Danke.",
    "customer_name": "Tom J. aus Hamm",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Disney Magie gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Elias R. aus Rodgau",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Kilian C. aus Zwickau",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Bastian W. aus Remscheid",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Max L. aus Heidenheim",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. 5 Sterne von mir.",
    "customer_name": "Mats O. aus Lüdenscheid",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Philipp I. aus Hattingen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Birgit L. aus Mainz",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Johannes K. aus Neuwied",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Nicole U. aus Bonn",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Christoph T. aus Rheine",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Andrea X. aus Ambreg",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "David F. aus Greifswald",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Disney Magie ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Maximilian I. aus Hürth",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Top, weiter so.",
    "customer_name": "Tanja X. aus Traunstein",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Finn D. aus Buxtehude",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Super Shop.",
    "customer_name": "Kerstin Y. aus Witten",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Dennis S. aus Nettetal",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Sascha V. aus Flensburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Simba gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Nico Z. aus Herten",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich. Top.",
    "customer_name": "Oskar T. aus Recklinghausen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa J. aus Rostock",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Samuel R. aus Würzburg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Laura R. aus Lippstadt",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Lenny W. aus Rheda-Wiedenbrück",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Julian K. aus Bad Homburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lenny I. aus Duisburg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Milan I. aus Stralsund",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders König der Löwen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Philipp Q. aus Offenburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin happy.",
    "customer_name": "Luis Q. aus Bergisch Gladbach",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Bin zufrieden.",
    "customer_name": "Tanja I. aus Erfurt",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Kilian V. aus Neu-Ulm",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Simba gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dominik Q. aus Alsdorf",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Daumen hoch!",
    "customer_name": "Tim N. aus Gütersloh",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Beweglicher Kopf gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Petra A. aus Lingen",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Malte O. aus Zwickau",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Benedikt T. aus Moers",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "David I. aus Siegen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Arne Q. aus Konstanz",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar E. aus Siegen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Anton C. aus Erkrath",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Max Z. aus Münster",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin I. aus Dachau",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Noah O. aus Greifswald",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Timo X. aus Berlin",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Nadine W. aus Lünen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Nico M. aus München",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Beweglicher Kopf gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Justus F. aus Kempten",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Paul U. aus Karlsruhe",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Liam B. aus Baden-Baden",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Christoph V. aus Baden-Baden",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Justus A. aus Norderstedt",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt T. aus Oranienburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny I. aus Arnsberg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Justus V. aus Marl",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Top.",
    "customer_name": "Tanja Y. aus Aachen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Maria B. aus Lahr",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Simba gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Alexander M. aus Traunstein",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Luis Y. aus Delmenhorst",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Süß gefällt mir gut. Daumen hoch!",
    "customer_name": "Julian F. aus Unna",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Melanie K. aus Hannover",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Top.",
    "customer_name": "Moritz W. aus Aschaffenburg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Julian C. aus Düren",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Emil Z. aus Brandenburg an der Havel",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Nico W. aus Kamen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Klare 10/10.",
    "customer_name": "Anna C. aus Lörrach",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Nadine Z. aus Kaufbeuren",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders König der Löwen gefällt mir gut. Daumen hoch!",
    "customer_name": "Kevin Q. aus Bergkamen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Liam E. aus Potsdam",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Christina V. aus Monheim am Rhein",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Laura B. aus Dessau-Roßlau",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Süß ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Felix Z. aus Lübeck",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Niedlich gefällt mir gut. Klare 10/10.",
    "customer_name": "Lisa F. aus Freising",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Marlon H. aus Rheine",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Klare 10/10.",
    "customer_name": "Christina P. aus Münster",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Benedikt O. aus Lingen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Noah Z. aus Wolfenbüttel",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Luis A. aus Osnabrück",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Top.",
    "customer_name": "Monika D. aus Gummersbach",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Theo T. aus Detmold",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Maximilian U. aus Freiburg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Alexander R. aus Iserlohn",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Anton V. aus Aachen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Lenny Q. aus Bremerhaven",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Bin rundum zufrieden.",
    "customer_name": "Marlon K. aus Mainz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Andrea N. aus Wuppertal",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Nicole H. aus Hameln",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Süß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sandra K. aus Chemnitz",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Max O. aus Mainz",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Geschenkidee gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luca Y. aus Bergisch Gladbach",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Ein tolles Geschenk.",
    "customer_name": "Mats U. aus Arnsberg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Bin rundum zufrieden.",
    "customer_name": "Christoph B. aus Hagen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Claudia X. aus Hagen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Nadine U. aus Leonberg",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Super Shop.",
    "customer_name": "Jannik T. aus Schweinfurt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats R. aus Aalen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Finn Q. aus Marburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Oskar O. aus Ibbenbüren",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Jan D. aus Rottenburg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Lukas F. aus Recklinghausen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Noah Q. aus Rheda-Wiedenbrück",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Niedlich gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Henry L. aus Gronau",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich.",
    "customer_name": "Leon K. aus Mönchengladbach",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Melanie U. aus Offenbach",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Marlon C. aus Pinneberg",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Disney Magie gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lisa U. aus Baden-Baden",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Bin zufrieden.",
    "customer_name": "Max Q. aus Siegen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Luca M. aus Herne",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Maximilian I. aus Reutlingen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Ben N. aus Oberursel",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Klare 10/10.",
    "customer_name": "Timo J. aus Recklinghausen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Nico V. aus Lübeck",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Liam S. aus Oberursel",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Jannik Y. aus Wuppertal",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Max M. aus Villingen-Schwenningen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Katharina D. aus Stuttgart",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Justus G. aus Hattingen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Vincent Q. aus Bonn",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Stefanie G. aus Kempten",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Max K. aus Augsburg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Susanne Q. aus Lübeck",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Max U. aus Leinfelden-Echterdingen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Tanja H. aus Albstadt",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Marlon F. aus Neustadt an der Weinstraße",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Elias U. aus Münster",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Jan H. aus Velbert",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Niedlich gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Anna D. aus Kiel",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Alles richtig gemacht.",
    "customer_name": "Sascha Y. aus Castrop-Rauxel",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes H. aus Bremerhaven",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Lenny N. aus Viersen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Simba gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Milan R. aus Gütersloh",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Sarah B. aus Bottrop",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Valentin C. aus Cottbus",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Noah V. aus Gütersloh",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tom L. aus Mönchengladbach",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Milan B. aus Lingen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Simon C. aus Köln",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Luca U. aus Bergisch Gladbach",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Hannes S. aus Offenbach",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Sascha P. aus Bad Salzuflen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Emil C. aus Lünen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Vielen Dank für den schnellen Service.",
    "customer_name": "Niklas O. aus Schweinfurt",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Bastian K. aus Bergheim",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Für Fans ein absolutes Muss.",
    "customer_name": "Susanne H. aus Lörrach",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Beweglicher Kopf gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kilian N. aus Tübingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Henry I. aus Bergheim",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Liam Y. aus Langenhagen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Oskar G. aus Leonberg",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Emil L. aus Magdeburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Kilian G. aus Moers",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Jannik I. aus Meerbusch",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Marlon T. aus Pinneberg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Luis L. aus Frechen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Emil R. aus Troisdorf",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Bin zufrieden.",
    "customer_name": "Jannik G. aus Buxtehude",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Finn D. aus Siegen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Tom T. aus Dormagen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Disney Magie gefällt mir gut. Danke.",
    "customer_name": "Tim X. aus Koblenz",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Luca X. aus Schwerin",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Top.",
    "customer_name": "Andrea E. aus Böblingen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Simon U. aus Hürth",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Niklas E. aus Oberursel",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Kilian P. aus Worms",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. So macht LEGO Spaß.",
    "customer_name": "Finn U. aus Aurich",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Simba gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Jonas Y. aus Meerbusch",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Danke!",
    "customer_name": "Henry V. aus Gummersbach",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Einfach zu bauen gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Marlon B. aus Bremen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Anna Q. aus Herzogenrath",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Top.",
    "customer_name": "Leon Z. aus Lörrach",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Top.",
    "customer_name": "Sascha A. aus Aschaffenburg",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Disney Magie gefällt mir gut. Super Shop.",
    "customer_name": "Tom X. aus Solingen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Oskar Y. aus Menden",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Niklas L. aus Dormagen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Tanja E. aus Remscheid",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Tim K. aus Stolberg",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Adrian M. aus Bielefeld",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Sarah J. aus Chemnitz",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Lukas H. aus Hamburg",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Sascha S. aus Rosenheim",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "David J. aus Menden",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Samuel N. aus Flensburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Ein tolles Geschenk.",
    "customer_name": "Tobias Z. aus Euskirchen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Stefanie N. aus Wuppertal",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Max A. aus Troisdorf",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Liam G. aus Erftstadt",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin happy.",
    "customer_name": "Tim K. aus Peine",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Geschenkidee gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Dominik K. aus Göttingen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Susanne S. aus Bocholt",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Ben R. aus Emden",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Nico H. aus Dachau",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tanja A. aus Bad Kreuznach",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Bin zufrieden.",
    "customer_name": "Theo K. aus Düsseldorf",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Adrian W. aus Melle",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Julian M. aus Kerpen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Fabian T. aus Duisburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia X. aus Berlin",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Fabian J. aus Darmstadt",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Lenny S. aus Wetzlar",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis K. aus Marburg",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Geschenkidee gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Emil X. aus Nettetal",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Hat sich definitiv gelohnt.",
    "customer_name": "Lisa B. aus Meerbusch",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Matteo B. aus Mannheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Niedlich gefällt mir gut. Danke.",
    "customer_name": "Birgit O. aus Hamburg",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Nicole M. aus Bergisch Gladbach",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Disney Magie gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Laura E. aus Hanau",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Nico R. aus Wilhelmshaven",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Sabine P. aus Offenbach",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Milan N. aus Detmold",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Andrea B. aus Siegen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Vincent O. aus Kerpen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Melanie F. aus Stolberg",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Kilian P. aus Erftstadt",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Ben O. aus Bergheim",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Elias N. aus Frankfurt (Oder)",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Max V. aus Berlin",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Tom Z. aus Mülheim an der Ruhr",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Liam V. aus Delmenhorst",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Timo D. aus Gütersloh",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Vincent I. aus Rostock",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Finn R. aus Ambreg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Birgit Z. aus Bad Oeynhausen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Oskar A. aus Hilden",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anja K. aus Baden-Baden",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Jan Y. aus Wilhelmshaven",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian J. aus Bergisch Gladbach",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Disney Magie gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas G. aus Lüdenscheid",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Geschenkidee gefällt mir gut. Klare 10/10.",
    "customer_name": "Elias O. aus Bielefeld",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Johannes X. aus Wolfsburg",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Stefanie N. aus Waiblingen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Noah D. aus Plauen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Tobias F. aus Offenbach",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Birgit F. aus Erlangen",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Liam T. aus Meerbusch",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglicher Kopf gefällt mir gut. Bin happy.",
    "customer_name": "Benedikt C. aus Kiel",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Süß gefällt mir gut. Top, weiter so.",
    "customer_name": "Benedikt P. aus Borken",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Henry F. aus Ratingen",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Preis-Leistung stimmt hier.",
    "customer_name": "Luis W. aus Landshut",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Leon K. aus Offenburg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Beweglicher Kopf gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Elias A. aus Frankfurt (Oder)",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Oskar C. aus Garbsen",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Geschenkidee gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Leo C. aus Ahlen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Jannik A. aus Herzogenrath",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Einfach zu bauen gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Erik Q. aus Bochum",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Emil G. aus Trier",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Beweglicher Kopf gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Susanne G. aus Bremen",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent E. aus Brandenburg an der Havel",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Danke!",
    "customer_name": "Erik H. aus Gera",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Anja Q. aus Castrop-Rauxel",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Mats R. aus Melle",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Johannes L. aus Göppingen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Kerstin T. aus Lüdenscheid",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dominik N. aus Wesel",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Claudia S. aus Nettetal",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Nico R. aus Kaiserslautern",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Erik Q. aus Passau",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jannik L. aus Zwickau",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Sascha M. aus Fulda",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Anton M. aus Kleve",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Einfach zu bauen gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Felix P. aus Neunkirchen",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Liam N. aus Alsdorf",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Marlon U. aus Mainz",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Luca Y. aus Kaufbeuren",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Einfach zu bauen gefällt mir gut. Super Shop.",
    "customer_name": "Kilian F. aus Gießen",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Milan K. aus Braunschweig",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Maximilian I. aus Kerpen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Geschenkidee gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Kilian D. aus Esslingen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Bin zufrieden.",
    "customer_name": "Tanja E. aus Neunkirchen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Ein tolles Geschenk.",
    "customer_name": "Julian U. aus Bremen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Felix E. aus Kleve",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Henry E. aus Reutlingen",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Nicole V. aus Sindelfingen",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole C. aus Heidelberg",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Luis A. aus Nordhorn",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Süß gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Adrian Q. aus Aachen",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Maximilian K. aus Münster",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Alexander D. aus Wiesbaden",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leo F. aus Krefeld",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Erik D. aus Dresden",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Niedlich gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis W. aus Lemgo",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Emil M. aus Wolfenbüttel",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Nico H. aus Leverkusen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Tobias P. aus Greifswald",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Arne A. aus Bremerhaven",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton B. aus Langenfeld",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Nico D. aus Erftstadt",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders König der Löwen gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Matteo F. aus Rosenheim",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha I. aus Halle (Saale)",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan X. aus Schweinfurt",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Theo F. aus Freising",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Yannick R. aus Bad Kreuznach",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Samuel A. aus Erkrath",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Absolute Kaufempfehlung.",
    "customer_name": "Valentin Y. aus Dormagen",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Jannik X. aus Neunkirchen",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Matteo A. aus Fulda",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Niklas K. aus Siegen",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Arne X. aus Wesel",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Lukas E. aus Dorsten",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Simba gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Marlon L. aus Dessau-Roßlau",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Dominik K. aus Bergkamen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Christina N. aus Rottenburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Niedlich gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sascha A. aus Bergheim",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Theo O. aus Weimar",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Geschenkidee gefällt mir gut. Top, weiter so.",
    "customer_name": "Philipp B. aus Lünen",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Christina E. aus Baden-Baden",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Christina I. aus Castrop-Rauxel",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Petra Z. aus Wetzlar",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Süß gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Dominik B. aus Kiel",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Valentin S. aus Schwäbisch Gmünd",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Disney Magie gefällt mir gut. Super Shop.",
    "customer_name": "Sabine K. aus Lünen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Danke!",
    "customer_name": "Sarah P. aus Wuppertal",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Absolute Kaufempfehlung.",
    "customer_name": "Liam W. aus Bad Kreuznach",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Leo P. aus Detmold",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Alexander Y. aus Osnabrück",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Valentin K. aus Lüdenscheid",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Marlon O. aus Bergisch Gladbach",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Süß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian P. aus Dresden",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jannik C. aus Herten",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Hat sich definitiv gelohnt.",
    "customer_name": "Luis U. aus Erkrath",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Yannick F. aus Herzogenrath",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Simba gefällt mir gut. Klare 10/10.",
    "customer_name": "Johannes E. aus Hameln",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Danke!",
    "customer_name": "Sabine V. aus Aalen",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Birgit M. aus Düsseldorf",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Süß gefällt mir gut. Klare 10/10.",
    "customer_name": "Jonas W. aus Traunstein",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Top, weiter so.",
    "customer_name": "Nadine Q. aus Sankt Augustin",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Jonas Q. aus Nürnberg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Theo C. aus Erkrath",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Noah V. aus Dinslaken",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Valentin I. aus Gießen",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Bin zufrieden.",
    "customer_name": "Samuel D. aus Lüdenscheid",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Ben R. aus Bonn",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Timo V. aus Celle",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Monika L. aus Augsburg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Sabine R. aus Trier",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Stefanie F. aus Garbsen",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Petra L. aus Lüdenscheid",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Beweglicher Kopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Lenny W. aus Düsseldorf",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Adrian U. aus Iserlohn",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bin zufrieden.",
    "customer_name": "Benedikt W. aus Stolberg",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Disney Magie gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Tim K. aus Heilbronn",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Anna N. aus Norderstedt",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Einfach zu bauen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Andrea X. aus Remscheid",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Danke.",
    "customer_name": "Felix L. aus Rosenheim",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Malte C. aus Fellbach",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Luca O. aus Düsseldorf",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian L. aus Monheim am Rhein",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leo K. aus Bonn",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Noah A. aus Reutlingen",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Emil B. aus Bornheim",
    "date": "2025-01-02"
  }
];