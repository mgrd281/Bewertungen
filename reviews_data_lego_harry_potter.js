const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Danke.",
    "customer_name": "Elias M. aus Erfurt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Große Halle gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Liam B. aus Gütersloh",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Große Halle ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent F. aus Hamm",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Nicole Z. aus Castrop-Rauxel",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Harry Potter ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luca L. aus Dorsten",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Absolute Kaufempfehlung.",
    "customer_name": "Maria P. aus Schweinfurt",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Laura R. aus Gummersbach",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Ben O. aus Duisburg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Magisch ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Stefanie V. aus Stuttgart",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Magisch ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Christina P. aus Stuttgart",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Minifiguren gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Noah G. aus Gütersloh",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Theo S. aus Bad Oeynhausen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Tanja J. aus Elmshorn",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Ben K. aus Gütersloh",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Alles richtig gemacht.",
    "customer_name": "Erik K. aus Frankfurt (Oder)",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Harry Potter ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Bastian G. aus Bergkamen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Yannick X. aus Bielefeld",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Minifiguren gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Lenny P. aus Freiburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Adrian W. aus Bad Homburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Minifiguren gefällt mir gut. Daumen hoch!",
    "customer_name": "Benedikt C. aus Bochum",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Hogwarts ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Justus K. aus Oldenburg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Für Fans gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Tobias M. aus Worms",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Malte D. aus Arnsberg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Paul R. aus Mainz",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sandra H. aus Gera",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Yannick J. aus Rheine",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Große Halle ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Kerstin G. aus Bruchsal",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Petra N. aus Dresden",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Große Halle ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Max D. aus Oranienburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Alexander P. aus Bad Salzuflen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Einfach klasse.",
    "customer_name": "Anton K. aus Bad Kreuznach",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Zauberei ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Liam P. aus Frankfurt (Oder)",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Hogwarts ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Luca Y. aus Kamen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Bastian K. aus Witten",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Tanja E. aus Filderstadt",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Harry Potter ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Timo L. aus Sindelfingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Sarah G. aus Emden",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Elias N. aus Bremerhaven",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Luis O. aus Straubing",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Nadine R. aus Zwickau",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Theo B. aus Bayreuth",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Hogwarts ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Finn W. aus Bonn",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Luis H. aus Leinfelden-Echterdingen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Arne B. aus Karlsruhe",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Christoph A. aus Plauen",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Große Halle ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Florian E. aus Lingen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliertes Schloss ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Simon L. aus Oranienburg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Harry Potter gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Niklas N. aus Herzogenrath",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Max M. aus Detmold",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Mats V. aus Pinneberg",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Nico U. aus Erftstadt",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Stefanie U. aus Eisenach",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Große Halle gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Sabine T. aus Ahlen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Für Fans gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian N. aus Recklinghausen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Daumen hoch!",
    "customer_name": "Max C. aus Lüneburg",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Für Fans ein absolutes Muss.",
    "customer_name": "Kilian X. aus Lüneburg",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Adrian Q. aus Hattingen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Magisch gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Hannes E. aus Mannheim",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Top.",
    "customer_name": "Oskar P. aus Leipzig",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Tom E. aus Bremen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Robin E. aus Heidenheim",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Julian H. aus Trier",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Hogwarts gefällt mir gut. Bin happy.",
    "customer_name": "David A. aus Schwerin",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Bastian S. aus Halle (Saale)",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Hogwarts gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Nico D. aus Oranienburg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Julian C. aus Erkrath",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Hogwarts ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Tim T. aus Dresden",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Monika A. aus Emden",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Nico L. aus Euskirchen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Große Halle ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Liam Z. aus Schweinfurt",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Minifiguren ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Kerstin H. aus Solingen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Petra A. aus Wolfsburg",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Paul V. aus Bad Homburg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Minifiguren ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Matteo E. aus Leinfelden-Echterdingen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Stefanie E. aus Bad Kreuznach",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Liam V. aus Sindelfingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Zauberei ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Emil O. aus Hennef",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Tanja Y. aus Kempten",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Christoph F. aus Hildesheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Detailliertes Schloss ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Christoph I. aus Ulm",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Melanie K. aus Buxtehude",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Maximilian R. aus Leonberg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Magisch gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Luca B. aus Magdeburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Magisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Theo Q. aus Duisburg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Harry Potter ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Liam F. aus Regensburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Arne S. aus Dachau",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Sabine Y. aus Hof",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Minifiguren ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Katharina Y. aus Kassel",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "David G. aus Pulheim",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliertes Schloss ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas P. aus Neuss",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Claudia X. aus Frankfurt (Oder)",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Magisch ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Felix N. aus Nürnberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Daumen hoch!",
    "customer_name": "Henry M. aus Baden-Baden",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Für Fans ein absolutes Muss.",
    "customer_name": "Anton D. aus Dessau-Roßlau",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Malte Q. aus Frankfurt",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. 5 Sterne von mir.",
    "customer_name": "Moritz N. aus Paderborn",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Niklas M. aus Traunstein",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Erik J. aus Kempten",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Leo C. aus Pinneberg",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Harry Potter ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Emil F. aus Hanau",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Luis I. aus Hennef",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Detailliertes Schloss gefällt mir gut. Top, weiter so.",
    "customer_name": "Paul M. aus Kaiserslautern",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Hogwarts ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Kilian J. aus Kaiserslautern",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Leon M. aus Bergkamen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Andrea F. aus Dorsten",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Magisch ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Max E. aus Böblingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Stefanie P. aus Gera",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Hogwarts gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Dennis E. aus Lahr",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Niklas E. aus Remscheid",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Vincent F. aus Heinsberg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Tim J. aus Offenburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Magisch ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Tanja H. aus Wolfenbüttel",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Harry Potter ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole H. aus Albstadt",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Susanne O. aus Lemgo",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Minifiguren gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Katharina X. aus Wesel",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Felix N. aus Wetzlar",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Bin zufrieden.",
    "customer_name": "Emil B. aus Ludwigshafen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Mats X. aus Euskirchen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Anna B. aus Ahlen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Große Halle gefällt mir gut. Danke.",
    "customer_name": "Maria I. aus Speyer",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie A. aus Köln",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Detailliertes Schloss gefällt mir gut. Klare 10/10.",
    "customer_name": "Tanja F. aus Elmshorn",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Top.",
    "customer_name": "Kevin X. aus Erlangen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Luis S. aus Aschaffenburg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Florian B. aus Sankt Augustin",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Bastian D. aus Straubing",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Finn E. aus Cottbus",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Preis-Leistung stimmt hier.",
    "customer_name": "Sarah P. aus Göppingen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Hogwarts ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Sabine I. aus Lingen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Detailliertes Schloss gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Katharina X. aus Meerbusch",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Adrian W. aus Trier",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Johannes H. aus Castrop-Rauxel",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Für Fans ein absolutes Muss.",
    "customer_name": "Melanie H. aus Offenburg",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Detailliertes Schloss gefällt mir gut. Top, weiter so.",
    "customer_name": "Kerstin S. aus Ambreg",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Minifiguren ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Hannes C. aus Düren",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Yannick Q. aus Bocholt",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Fans ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Hannes Z. aus Villingen-Schwenningen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Hogwarts gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah R. aus Filderstadt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Magisch ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Emil P. aus Marl",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Tanja X. aus Alsdorf",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Minifiguren ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Ben X. aus Recklinghausen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julia K. aus Dresden",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Für Fans gefällt mir gut. Einfach klasse.",
    "customer_name": "Hannes V. aus Eisenach",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Minifiguren gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Kilian E. aus Paderborn",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Große Halle gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leon G. aus Lüneburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Vincent X. aus Neumünster",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Ben W. aus Minden",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Alexander P. aus Magdeburg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Sabine Y. aus Wetzlar",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Ein tolles Geschenk.",
    "customer_name": "Sandra G. aus Dinslaken",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Marlon N. aus Gelsenkirchen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Malte J. aus Monheim am Rhein",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Bin rundum zufrieden.",
    "customer_name": "Timo Y. aus Lörrach",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Danke!",
    "customer_name": "Dennis G. aus Mülheim an der Ruhr",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Milan M. aus Oldenburg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "Dennis U. aus Dorsten",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Katharina O. aus Viersen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Anna Y. aus Düsseldorf",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Hogwarts gefällt mir gut. Top, weiter so.",
    "customer_name": "Yannick F. aus Böblingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Birgit W. aus Passau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Harry Potter ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Lisa R. aus Erftstadt",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Arne O. aus Konstanz",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Detailliertes Schloss ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Leo A. aus Augsburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Hogwarts ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Henry C. aus Iserlohn",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Minifiguren gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Elias N. aus Cottbus",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Detailliertes Schloss gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Melanie Y. aus Bocholt",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Kevin C. aus Worms",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Liam I. aus Emden",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Zauberei gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne H. aus Salzgitter",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Große Halle ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Nico I. aus Dinslaken",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Hogwarts ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Kevin X. aus Langenfeld",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Große Halle gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika O. aus Hildesheim",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Top.",
    "customer_name": "Anna D. aus Cottbus",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Harry Potter ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Lenny V. aus Villingen-Schwenningen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Florian Y. aus Essen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Christina B. aus Esslingen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Magisch ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Monika G. aus Heidenheim",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Daumen hoch!",
    "customer_name": "Luis U. aus Bocholt",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Einfach klasse.",
    "customer_name": "Arne M. aus Erlangen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Justus V. aus Gummersbach",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian T. aus Konstanz",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Hogwarts ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Melanie W. aus Hameln",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Danke!",
    "customer_name": "Dominik V. aus Ibbenbüren",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Hannes L. aus Fürth",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie U. aus Salzgitter",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Dominik F. aus Mainz",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Zauberei gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Bastian I. aus Bornheim",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Tobias J. aus Oberhausen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Große Halle ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Birgit W. aus Hannover",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Anton S. aus Kassel",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Harry Potter gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Paul F. aus Göppingen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Valentin R. aus Alsdorf",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Hogwarts ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Alexander O. aus Chemnitz",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Julian A. aus Nordhorn",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Minifiguren gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne H. aus Lüdenscheid",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jan L. aus Reutlingen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Yannick P. aus Ravensburg",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Laura S. aus Flensburg",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Birgit P. aus Erfurt",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Hogwarts ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Fabian D. aus Paderborn",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Zauberei ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Theo G. aus Zwickau",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Magisch ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Anja J. aus Bamberg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Stefanie U. aus Kerpen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Kilian N. aus Soest",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Zauberei ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Julia D. aus Weimar",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Justus M. aus Rostock",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Tom L. aus Witten",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Harry Potter ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Lukas S. aus Nordhorn",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Theo P. aus Böblingen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Detailliertes Schloss gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Jan N. aus Neunkirchen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Leo E. aus Herne",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "David S. aus Siegen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Detailliertes Schloss gefällt mir gut. Top, weiter so.",
    "customer_name": "Emil S. aus Bornheim",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Milan E. aus Peine",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliertes Schloss ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sascha N. aus Rosenheim",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Zauberei gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Arne L. aus Traunstein",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Birgit P. aus Weinheim",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Zauberei ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Paul U. aus Friedrichshafen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nadine H. aus Stuttgart",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Birgit F. aus Detmold",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Für Fans gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Julian V. aus Speyer",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Justus T. aus Wolfenbüttel",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Birgit C. aus Rheine",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Zauberei ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Liam A. aus Greifswald",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Finn U. aus Brotterode",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Maria U. aus Herne",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Hogwarts ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Lukas K. aus Kaufbeuren",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Lenny G. aus Pinneberg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Minifiguren ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Matteo J. aus Bottrop",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Minifiguren ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Bastian G. aus Stralsund",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Daumen hoch!",
    "customer_name": "Alexander P. aus Marl",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Tim T. aus Baden-Baden",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Moritz Q. aus Esslingen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Minifiguren gefällt mir gut. Top, weiter so.",
    "customer_name": "Claudia J. aus Duisburg",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Minifiguren ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Stefanie E. aus Kaiserslautern",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Felix R. aus Schweinfurt",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Große Halle ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Anna O. aus Hildesheim",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Hogwarts gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tanja U. aus Friedrichshafen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Lisa M. aus Saarbrücken",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Stefanie S. aus Memmingen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Lisa O. aus Oldenburg",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julia T. aus Soest",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Kilian B. aus Kleve",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Niklas T. aus Ambreg",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Matteo K. aus Köln",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Max E. aus Göppingen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Einfach klasse.",
    "customer_name": "Claudia Q. aus Minden",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Samuel A. aus Bruchsal",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa Q. aus Frankfurt",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Laura D. aus Stralsund",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Danke!",
    "customer_name": "Bastian I. aus Mainz",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Hogwarts gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Felix H. aus Köln",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Zauberei ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Ben Y. aus Celle",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Magisch ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Anna H. aus Aalen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Tim A. aus Unna",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Jannik R. aus Castrop-Rauxel",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Harry Potter ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Emil Z. aus Hennef",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Detailliertes Schloss ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Sandra Q. aus Lüdenscheid",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Tim R. aus Oberursel",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Magisch gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Jonas C. aus Magdeburg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Detailliertes Schloss gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Melanie V. aus Lüdenscheid",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leon P. aus Viersen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Anna A. aus Köln",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Kerstin G. aus Münster",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Zauberei gefällt mir gut. Top, weiter so.",
    "customer_name": "Luis T. aus Frankfurt",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Große Halle ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Florian D. aus Offenburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Große Halle ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Noah S. aus Koblenz",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Sabine E. aus Fellbach",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Lenny O. aus Wolfenbüttel",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Danke!",
    "customer_name": "Dominik N. aus Siegen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Minifiguren ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Arne C. aus Gladbeck",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Bin zufrieden.",
    "customer_name": "Tanja F. aus München",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Zauberei ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Hannes R. aus Lünen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Minifiguren ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Ben P. aus Jena",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Hogwarts gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Adrian V. aus Garbsen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Ein tolles Geschenk.",
    "customer_name": "Timo Q. aus Heidelberg",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Luis B. aus Osnabrück",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Detailliertes Schloss gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny G. aus Düren",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Laura E. aus Krefeld",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Felix N. aus Leonberg",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Jannik G. aus Fürth",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Magisch gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Leo A. aus Ahlen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliertes Schloss ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Moritz Y. aus Herne",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Harry Potter ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Valentin R. aus Braunschweig",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Zauberei ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Kevin G. aus Düren",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Hogwarts ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Lenny F. aus Detmold",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Harry Potter gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tanja N. aus Offenburg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Zauberei gefällt mir gut. Bin happy.",
    "customer_name": "Niklas E. aus Leinfelden-Echterdingen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Jan F. aus Gera",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich. Danke!",
    "customer_name": "Maximilian Q. aus Iserlohn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Yannick A. aus Nürnberg",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Detailliertes Schloss ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Valentin R. aus Görlitz",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Große Halle ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Marlon B. aus Esslingen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Harry Potter ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Maria G. aus Heidenheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Laura Q. aus Garbsen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Minifiguren gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar V. aus Villingen-Schwenningen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Dennis Y. aus Dachau",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Anja P. aus Schweinfurt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Hogwarts gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Luca T. aus Darmstadt",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Susanne L. aus Sankt Augustin",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Philipp F. aus Flensburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Laura S. aus Hof",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Timo T. aus Wetzlar",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Große Halle ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Dennis Y. aus Mannheim",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Große Halle ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Sarah B. aus Oranienburg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Andrea M. aus Recklinghausen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. 5 Sterne von mir.",
    "customer_name": "Tanja Z. aus Neuwied",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Erik X. aus Greifswald",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Harry Potter ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Hannes R. aus Ibbenbüren",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Detailliertes Schloss ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny G. aus Velbert",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Absolute Kaufempfehlung.",
    "customer_name": "Vincent I. aus Soest",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Harry Potter ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Kerstin V. aus Leverkusen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Susanne Z. aus Castrop-Rauxel",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Danke!",
    "customer_name": "Petra G. aus Kiel",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Tim D. aus Duisburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Top.",
    "customer_name": "Niklas G. aus Aschaffenburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Finn M. aus Frankfurt",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Leon K. aus Ahlen",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Max X. aus Sankt Augustin",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Laura A. aus Lüdenscheid",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Niklas H. aus Filderstadt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliertes Schloss ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Dennis L. aus Darmstadt",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Stefanie Y. aus Bergisch Gladbach",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Stefanie W. aus Weinheim",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Für Fans gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Elias L. aus Bergheim",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliertes Schloss ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika P. aus Rodgau",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Emil J. aus Darmstadt",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliertes Schloss ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp B. aus Gera",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Lenny C. aus Bielefeld",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Top.",
    "customer_name": "Leon S. aus Monheim am Rhein",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Große Halle ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Tom G. aus Bielefeld",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar D. aus Garbsen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Magisch ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian Y. aus Hof",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Detailliertes Schloss gefällt mir gut. Danke.",
    "customer_name": "Christoph P. aus Gera",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Harry Potter gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Malte I. aus Pinneberg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Detailliertes Schloss ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Petra S. aus Mönchengladbach",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Moritz G. aus Elmshorn",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Absolute Kaufempfehlung.",
    "customer_name": "Katharina C. aus Ratingen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine R. aus Göttingen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Hogwarts ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Emil T. aus Dessau-Roßlau",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Hogwarts ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Julian L. aus Wiesbaden",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Zauberei ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Lukas T. aus Melle",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Andrea R. aus Ahlen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Große Halle ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Kerstin H. aus Elmshorn",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Minifiguren gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Timo P. aus Kaufbeuren",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Birgit N. aus Gronau",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Danke.",
    "customer_name": "Kilian D. aus Braunschweig",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Zauberei ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin U. aus Erfurt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Yannick W. aus Unna",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Magisch gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Tom B. aus Köln",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Magisch ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Philipp I. aus Gummersbach",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Milan E. aus Ravensburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Minifiguren gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar K. aus Filderstadt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Hogwarts ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Susanne Y. aus Flensburg",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Große Halle ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Timo A. aus Melle",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Zauberei ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Dominik G. aus Rosenheim",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Große Halle ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra M. aus Braunschweig",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Theo X. aus Marburg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Magisch gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Sarah X. aus Flensburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Für Fans gefällt mir gut. Danke.",
    "customer_name": "Florian W. aus Jena",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Justus T. aus Göttingen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Luca B. aus Ingolstadt",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Benedikt R. aus Speyer",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Harry Potter gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Andrea Q. aus Düsseldorf",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon Q. aus Velbert",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Lukas M. aus Göppingen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Justus E. aus Pforzheim",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Bin happy.",
    "customer_name": "Jonas A. aus Jena",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Harry Potter ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Maria E. aus Traunstein",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Minifiguren ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Samuel T. aus Fellbach",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Hogwarts gefällt mir gut. Danke.",
    "customer_name": "Hannes D. aus Euskirchen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Detailliertes Schloss ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben H. aus Grevenbroich",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Bin zufrieden.",
    "customer_name": "Lukas G. aus Freising",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Harry Potter gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Julian G. aus Kerpen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Oskar Q. aus Albstadt",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Fans ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sabine T. aus Görlitz",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Ein tolles Geschenk.",
    "customer_name": "Lenny C. aus Bergkamen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Minifiguren gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Adrian B. aus Wuppertal",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Minifiguren ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Leon M. aus Krefeld",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Harry Potter gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine V. aus Ludwigshafen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Alexander E. aus Borken",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Harry Potter gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Simon Z. aus Greifswald",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Monika X. aus Ingolstadt",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Magisch ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Justus G. aus Rottenburg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Tom N. aus Stuttgart",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Monika Y. aus Düren",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliertes Schloss ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Sandra L. aus Traunstein",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Nadine P. aus Menden",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Große Halle ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jonas L. aus Worms",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Dominik S. aus Viersen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Minifiguren ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Emil I. aus Traunstein",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Magisch ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Tom I. aus Dachau",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Minifiguren ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Sabine Z. aus Meerbusch",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Für Fans gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Valentin A. aus Worms",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Laura N. aus Baden-Baden",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Julia O. aus Oranienburg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Zauberei ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin J. aus Langenfeld",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Alexander M. aus Langenhagen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Julia Y. aus Leinfelden-Echterdingen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Minifiguren ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Matteo C. aus Magdeburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Julian E. aus Straubing",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Marlon W. aus Darmstadt",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Minifiguren ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Melanie P. aus Potsdam",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Minifiguren gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Niklas X. aus Herford",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Minifiguren ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Ben H. aus Wesel",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Minifiguren ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lenny S. aus Ingolstadt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Lukas M. aus Cottbus",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Für Fans gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Valentin J. aus Salzgitter",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Einfach klasse.",
    "customer_name": "Jannik D. aus Iserlohn",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Große Halle gefällt mir gut. Danke.",
    "customer_name": "Katharina H. aus Gütersloh",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Für Fans gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Birgit A. aus Pforzheim",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Robin V. aus Ulm",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Hogwarts gefällt mir gut. Super Shop.",
    "customer_name": "Maximilian X. aus Magdeburg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Zauberei gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Samuel V. aus München",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Für Fans gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Petra K. aus Grevenbroich",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Minifiguren ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Julia F. aus Bamberg",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Top.",
    "customer_name": "Anton N. aus Gera",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Große Halle ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Sarah J. aus Lippstadt",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Harry Potter ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Nicole N. aus Neu-Ulm",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Anna Z. aus Grevenbroich",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Große Halle ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Ben M. aus Rastatt",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Julian F. aus Rodgau",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Christina J. aus Troisdorf",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Maria R. aus Landshut",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Zauberei gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin P. aus Hof",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Magisch ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian T. aus Landshut",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Nicole C. aus Weimar",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Danke!",
    "customer_name": "Anna C. aus Neunkirchen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Große Halle ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Sascha Q. aus Stralsund",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Zauberei ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Julia Z. aus Stolberg",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Milan E. aus Bergheim",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Große Halle ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Paul I. aus Erftstadt",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Petra G. aus Eschweiler",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Justus E. aus Emden",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico T. aus Dachau",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Harry Potter gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Fabian R. aus Kleve",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Andrea B. aus Koblenz",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Dominik U. aus Bergkamen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Große Halle gefällt mir gut. Danke.",
    "customer_name": "Mats E. aus Ahlen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Hogwarts ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Yannick V. aus Bad Salzuflen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Zauberei ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Tobias Q. aus Heinsberg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Detailliertes Schloss gefällt mir gut. Daumen hoch!",
    "customer_name": "Anton X. aus Menden",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Simon D. aus Braunschweig",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Top.",
    "customer_name": "Leo F. aus Offenbach",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Anton H. aus Norderstedt",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Detailliertes Schloss gefällt mir gut. Klare 10/10.",
    "customer_name": "Lenny M. aus Dormagen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Minifiguren gefällt mir gut. Bin happy.",
    "customer_name": "Timo B. aus Lüdenscheid",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Leo W. aus Göttingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Dennis Y. aus Hürth",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Minifiguren ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Kevin J. aus Ibbenbüren",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Elias B. aus Gronau",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Max B. aus Berlin",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Zauberei gefällt mir gut. Bin happy.",
    "customer_name": "Sascha T. aus Menden",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Magisch gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Maximilian Z. aus Bonn",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Zauberei gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Julian L. aus Sindelfingen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Magisch gefällt mir gut. Einfach klasse.",
    "customer_name": "Dennis Q. aus Bornheim",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Finn I. aus Zwickau",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliertes Schloss ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Felix I. aus Reutlingen",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Danke!",
    "customer_name": "Stefanie I. aus Rosenheim",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Bin zufrieden.",
    "customer_name": "Tom Y. aus Ravensburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliertes Schloss ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Henry C. aus Velbert",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Sascha L. aus Dülmen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Hogwarts gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Luis C. aus Neuwied",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Große Halle ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Milan E. aus Pforzheim",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Bin zufrieden.",
    "customer_name": "Leon K. aus Ratingen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Jannik O. aus Meerbusch",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Zauberei gefällt mir gut. Klare 10/10.",
    "customer_name": "Yannick Y. aus Baden-Baden",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Hogwarts gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Sandra M. aus Lörrach",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Christina H. aus Freiburg",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Jonas V. aus Ratingen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Harry Potter ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit S. aus Hilden",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Yannick Q. aus Erlangen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Melanie Y. aus Bad Salzuflen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Leo A. aus Weimar",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Preis-Leistung stimmt hier.",
    "customer_name": "Max L. aus Chemnitz",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Jan H. aus Hannover",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Große Halle gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam K. aus Herten",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Anja V. aus Göttingen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Minifiguren gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Melanie G. aus Weinheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Sandra Q. aus Kaufbeuren",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Milan U. aus Landshut",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian J. aus Melle",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "David Z. aus Nürnberg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Johannes E. aus Hagen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Große Halle gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Ben U. aus Hameln",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Sarah B. aus Langenhagen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Philipp P. aus Kaiserslautern",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Magisch gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Maximilian B. aus Heidelberg",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Tom I. aus Landshut",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Adrian R. aus Hilden",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Petra O. aus Speyer",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Zauberei ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Emil Z. aus Unna",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Valentin R. aus Baden-Baden",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Harry Potter gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Julian Q. aus Elmshorn",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Bin zufrieden.",
    "customer_name": "Liam W. aus Minden",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Luis K. aus Baden-Baden",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Nicole E. aus Leonberg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Magisch ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Luis J. aus Aachen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Andrea J. aus Waiblingen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Claudia U. aus Düsseldorf",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Katharina N. aus Salzgitter",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Magisch gefällt mir gut. Danke.",
    "customer_name": "Robin M. aus Brotterode",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Minifiguren ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Sascha N. aus Herten",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Harry Potter ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Tobias G. aus Schwerin",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Yannick N. aus Unna",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Andrea X. aus Wetzlar",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Hogwarts gefällt mir gut. Daumen hoch!",
    "customer_name": "Kevin H. aus Dachau",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Harry Potter ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Tim C. aus Sindelfingen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian S. aus Schwerin",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Detailliertes Schloss ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Christina P. aus Bremen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar P. aus Wetzlar",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Hogwarts ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Bastian R. aus Göppingen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Sandra B. aus Hattingen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julian Y. aus Bornheim",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Große Halle gefällt mir gut. Daumen hoch!",
    "customer_name": "Dennis Q. aus Kassel",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Zauberei gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja S. aus Aachen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Minifiguren gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Tanja M. aus Plauen",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Max A. aus Düren",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Erik N. aus Brotterode",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Yannick M. aus Hennef",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Lenny G. aus Landshut",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Philipp U. aus Dessau-Roßlau",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Christina F. aus Lörrach",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Danke!",
    "customer_name": "Mats O. aus Velbert",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Zauberei gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kerstin Y. aus Marburg",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Magisch ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Hannes H. aus Plauen",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Zauberei gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Monika I. aus Nordhorn",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top.",
    "customer_name": "Felix T. aus Chemnitz",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Für Fans gefällt mir gut. Super Shop.",
    "customer_name": "Melanie F. aus Esslingen",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Daumen hoch!",
    "customer_name": "Arne Y. aus Regensburg",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Harry Potter gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Philipp B. aus Münster",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Magisch ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Johannes U. aus Köln",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Klare 10/10.",
    "customer_name": "Samuel A. aus Lörrach",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Detailliertes Schloss gefällt mir gut. Klare 10/10.",
    "customer_name": "Bastian Z. aus Herford",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Arne A. aus Erlangen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Für Fans gefällt mir gut. Klare 10/10.",
    "customer_name": "Felix T. aus Mönchengladbach",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Große Halle gefällt mir gut. Daumen hoch!",
    "customer_name": "Felix H. aus Bremerhaven",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Zauberei gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz Y. aus Kleve",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Milan D. aus Kaufbeuren",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Große Halle ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Tim Q. aus Celle",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Für Fans gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luca T. aus Weinheim",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Hogwarts gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Elias D. aus Kerpen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Zauberei gefällt mir gut. Super Shop.",
    "customer_name": "Sandra T. aus Ibbenbüren",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Luis G. aus Bad Oeynhausen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Henry S. aus Jena",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias J. aus Emden",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Daumen hoch!",
    "customer_name": "Malte T. aus Ibbenbüren",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Theo T. aus Oberhausen",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Harry Potter ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Malte I. aus Heinsberg",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Minifiguren gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Florian S. aus Grevenbroich",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliertes Schloss ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Emil P. aus Erkrath",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Harry Potter ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim D. aus Neustadt an der Weinstraße",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Detailliertes Schloss gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Tom R. aus Saarbrücken",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliertes Schloss ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Luca P. aus Oberursel",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Hogwarts ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Melanie I. aus Chemnitz",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Zauberei ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Ben Q. aus Moers",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliertes Schloss ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Moritz C. aus Kaiserslautern",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Detailliertes Schloss gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias C. aus Gelsenkirchen",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Minifiguren ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Adrian H. aus Schwerin",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christina D. aus Dortmund",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Hogwarts ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Anja Z. aus Wesel",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Detailliertes Schloss ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Jannik B. aus Lünen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Sascha F. aus Göttingen",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Danke!",
    "customer_name": "Lisa L. aus Nordhorn",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Detailliertes Schloss ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Maria C. aus Leverkusen",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Laura M. aus Worms",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Fans ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik U. aus Lüdenscheid",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Sascha L. aus Leonberg",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Fans ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "David W. aus Euskirchen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliertes Schloss ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Sarah O. aus Hamburg",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Jonas I. aus Lippstadt",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Zauberei ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Felix Q. aus Bremerhaven",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Bastian M. aus Ingolstadt",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Bastian F. aus Friedrichshafen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Bin zufrieden.",
    "customer_name": "Tanja L. aus Bad Homburg",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Vielen Dank für den schnellen Service.",
    "customer_name": "Birgit I. aus Sindelfingen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliertes Schloss ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Fabian B. aus Rosenheim",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian J. aus Lüneburg",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan N. aus Detmold",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Danke!",
    "customer_name": "Mats I. aus Cottbus",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Magisch ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Christoph A. aus Lüdenscheid",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Detailliertes Schloss gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kerstin W. aus Marburg",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliertes Schloss ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Julia T. aus Wuppertal",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Birgit A. aus Düsseldorf",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Nadine I. aus Münster",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Zauberei gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Nico E. aus Marburg",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Hogwarts gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Maximilian M. aus Baden-Baden",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Anna G. aus Langenhagen",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Minifiguren ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Andrea Q. aus Ambreg",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Danke!",
    "customer_name": "Matteo O. aus Kaiserslautern",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Einfach klasse.",
    "customer_name": "Kerstin B. aus Buxtehude",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Paul Z. aus Eschweiler",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Harry Potter ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Julian H. aus Fürth",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Bastian J. aus Iserlohn",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Bin zufrieden.",
    "customer_name": "Finn D. aus Schwäbisch Gmünd",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliertes Schloss ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luis M. aus Bruchsal",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt S. aus Wesel",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Minifiguren gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul B. aus Rosenheim",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Magisch ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Theo A. aus Eisenach",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Hogwarts gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Monika T. aus Bornheim",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Henry D. aus Zwickau",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Für Fans gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Maximilian M. aus Lüneburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Große Halle gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra F. aus Lippstadt",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Sarah T. aus Rottenburg",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Erik Q. aus Mönchengladbach",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Minifiguren gefällt mir gut. Bin happy.",
    "customer_name": "Maximilian L. aus Bad Salzuflen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Zauberei gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Kevin O. aus Ulm",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Magisch gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Laura Q. aus Schwerin",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Tim A. aus Hagen",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Harry Potter ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik S. aus Heidelberg",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. 5 Sterne von mir.",
    "customer_name": "Nadine L. aus Aalen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Große Halle ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Melanie H. aus Mainz",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Super Shop.",
    "customer_name": "Laura Y. aus Frankfurt (Oder)",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Julia C. aus Kiel",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Magisch ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "David Y. aus Menden",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Sarah W. aus Sindelfingen",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Bin zufrieden.",
    "customer_name": "Anna W. aus Aachen",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Zauberei ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Johannes K. aus Delmenhorst",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Max F. aus Norderstedt",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Top.",
    "customer_name": "Adrian K. aus Bremerhaven",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Top.",
    "customer_name": "Leo U. aus Duisburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Erik F. aus Offenburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Stefanie S. aus Wolfenbüttel",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Sabine C. aus Potsdam",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Harry Potter ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Paul H. aus Oldenburg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Danke.",
    "customer_name": "Sabine H. aus Rostock",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Felix O. aus Sindelfingen",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Zauberei gefällt mir gut. Top, weiter so.",
    "customer_name": "Anton F. aus Euskirchen",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Theo L. aus Lemgo",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Oskar P. aus Wolfenbüttel",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Liam N. aus Frechen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Große Halle gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Tanja X. aus Magdeburg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Zauberei ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Susanne S. aus Hennef",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Detailliertes Schloss gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Lenny T. aus Recklinghausen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Minifiguren ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anton F. aus Aachen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Detailliertes Schloss gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Matteo W. aus Albstadt",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Große Halle ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "David R. aus Hamburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Sabine D. aus Greifswald",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Malte I. aus Dülmen",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Top.",
    "customer_name": "Justus M. aus Sindelfingen",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Hogwarts ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Niklas Z. aus Karlsruhe",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Minifiguren ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon K. aus Eschweiler",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Zauberei gefällt mir gut. Daumen hoch!",
    "customer_name": "Marlon G. aus Chemnitz",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Große Halle ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Anna O. aus Memmingen",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Lisa L. aus Alsdorf",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Detailliertes Schloss ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Leon S. aus Leverkusen",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Minifiguren ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Arne Z. aus Lörrach",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Paul I. aus Köln",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Zauberei ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Milan A. aus Melle",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Valentin X. aus Emden",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Jonas B. aus Leverkusen",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Hogwarts gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt P. aus Meerbusch",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Adrian R. aus Soest",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Florian Z. aus Bergkamen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Zauberei ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Tom J. aus Kamen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Detailliertes Schloss ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Marlon H. aus Gera",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Harry Potter gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Paul L. aus Regensburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Magisch ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Christina W. aus Wetzlar",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Für Fans gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Finn V. aus Bocholt",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Katharina P. aus Wesel",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Andrea G. aus Speyer",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Danke!",
    "customer_name": "Sarah S. aus Solingen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Bin happy.",
    "customer_name": "Mats N. aus Villingen-Schwenningen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Lisa U. aus Delmenhorst",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Liam W. aus Peine",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Minifiguren gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tom I. aus Kaiserslautern",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Minifiguren gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Nadine Y. aus Fürth",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliertes Schloss ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Noah C. aus Bornheim",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Niklas E. aus Bielefeld",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Anja L. aus Lüdenscheid",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Luis V. aus Straubing",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Tobias V. aus Görlitz",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Danke!",
    "customer_name": "Ben O. aus Köln",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Sandra P. aus Krefeld",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Finn E. aus Mülheim an der Ruhr",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus W. aus Wiesbaden",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Für Fans gefällt mir gut. Daumen hoch!",
    "customer_name": "Anton Q. aus Dessau-Roßlau",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sarah B. aus Trier",
    "date": "2025-01-01"
  }
];