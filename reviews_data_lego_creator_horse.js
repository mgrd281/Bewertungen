const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Daumen hoch!",
    "customer_name": "Samuel T. aus Erlangen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Julia I. aus Esslingen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders 3-in-1 Set gefällt mir gut. Super Shop.",
    "customer_name": "Stefanie Y. aus Regensburg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Tiere ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Nicole W. aus Troisdorf",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Claudia X. aus Kamen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Preis-Leistung gefällt mir gut. Super Shop.",
    "customer_name": "Tobias F. aus Frankfurt (Oder)",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Noah H. aus Celle",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Beweglich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Andrea E. aus Bad Oeynhausen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Super Shop.",
    "customer_name": "Benedikt E. aus Krefeld",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Pferd gefällt mir gut. Bin happy.",
    "customer_name": "Emil J. aus Schwerin",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Bastian O. aus Heinsberg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sascha X. aus Koblenz",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Leo Z. aus Kassel",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Meine Tochter ist begeistert gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leo R. aus Kerpen",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Beweglich gefällt mir gut. Danke.",
    "customer_name": "Ben M. aus Leinfelden-Echterdingen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Moritz I. aus Witten",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Maria U. aus Düsseldorf",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Stefanie O. aus Hamm",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Leo S. aus Hamburg",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Meine Tochter ist begeistert ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Nadine S. aus Hanau",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Sandra S. aus Neustadt an der Weinstraße",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Hannes D. aus Magdeburg",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea S. aus Brandenburg an der Havel",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Samuel Y. aus Ravensburg",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Kreativ gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Sandra H. aus Neu-Ulm",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Tim K. aus Würzburg",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Meine Tochter ist begeistert gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Kerstin W. aus Esslingen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Birgit U. aus Herten",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Valentin B. aus Pforzheim",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Bin rundum zufrieden.",
    "customer_name": "Max K. aus Hof",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Erik B. aus Kaufbeuren",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Meine Tochter ist begeistert ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Anja V. aus Lingen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Preis-Leistung gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Jannik J. aus Dresden",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Anja M. aus Aalen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Laura B. aus Lörrach",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Maximilian O. aus Fürth",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Meine Tochter ist begeistert gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Justus V. aus Hamm",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha M. aus Detmold",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Yannick E. aus Dinslaken",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Simon P. aus Reutlingen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Preis-Leistung gefällt mir gut. Daumen hoch!",
    "customer_name": "Nico N. aus Köln",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Tiere ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Nadine M. aus Neunkirchen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Finn R. aus Wilhelmshaven",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Kerstin H. aus Frankfurt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Timo Y. aus Kaufbeuren",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Niklas X. aus Freiburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Robin X. aus Traunstein",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Robin B. aus Rostock",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Nadine A. aus Langenhagen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luis L. aus Lüdenscheid",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Schönes Design gefällt mir gut. Super Shop.",
    "customer_name": "Kevin J. aus Gummersbach",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Beweglich gefällt mir gut. Daumen hoch!",
    "customer_name": "Hannes W. aus Mülheim an der Ruhr",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Mats U. aus Landshut",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Noah C. aus Ingolstadt",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Danke!",
    "customer_name": "Bastian J. aus Baden-Baden",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Paul B. aus Zwickau",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Valentin F. aus Albstadt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Bin zufrieden.",
    "customer_name": "Vincent K. aus Flensburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Danke.",
    "customer_name": "Anja O. aus Dresden",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Marlon M. aus Köln",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Monika M. aus Langenfeld",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Beweglich gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Noah J. aus Hilden",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders 3-in-1 Set gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nicole U. aus Filderstadt",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Beweglich gefällt mir gut. Bin happy.",
    "customer_name": "Finn Q. aus Witten",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Lenny T. aus Leonberg",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Erik R. aus Kassel",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Alles richtig gemacht.",
    "customer_name": "Maximilian E. aus Ingolstadt",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Danke.",
    "customer_name": "Timo D. aus Wesel",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Elias W. aus Sindelfingen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Top.",
    "customer_name": "Milan L. aus Bergkamen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Leo C. aus Herne",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Schönes Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Lenny L. aus Fellbach",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Marlon C. aus Bergisch Gladbach",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Meine Tochter ist begeistert ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Malte T. aus Eschweiler",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Pferd gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian O. aus Rüsselsheim",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schönes Design ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Moritz R. aus Wolfsburg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christoph T. aus Mülheim an der Ruhr",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Kreativ gefällt mir gut. Super Shop.",
    "customer_name": "Julian F. aus Lünen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Nicole S. aus Unna",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Pferd gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Ben D. aus Lünen",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schönes Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Nicole H. aus Sankt Augustin",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Andrea S. aus Neuss",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Malte W. aus Meerbusch",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature 3-in-1 Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Robin O. aus Landshut",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Stefanie B. aus Reutlingen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Kreativ gefällt mir gut. Klare 10/10.",
    "customer_name": "Sandra D. aus Ambreg",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. So macht LEGO Spaß.",
    "customer_name": "Philipp S. aus Moers",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Nico J. aus Frankfurt (Oder)",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Melanie Z. aus Oldenburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico Q. aus Gronau",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Sarah Z. aus Recklinghausen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Oskar D. aus Buxtehude",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Kevin B. aus Göttingen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Preis-Leistung gefällt mir gut. Bin happy.",
    "customer_name": "Lisa D. aus Hannover",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Luis A. aus Lippstadt",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Luca O. aus Freising",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders 3-in-1 Set gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Hannes E. aus Paderborn",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Bin zufrieden.",
    "customer_name": "Tom O. aus Marl",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Anna X. aus Dülmen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders 3-in-1 Set gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Petra K. aus Kiel",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Robin K. aus Wunstorf",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. So macht LEGO Spaß.",
    "customer_name": "Christoph M. aus Viersen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Petra R. aus Frankfurt (Oder)",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Tolle Tiere gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Jannik H. aus Wilhelmshaven",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Tolle Tiere gefällt mir gut. Super Shop.",
    "customer_name": "Henry F. aus Neuwied",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Luca A. aus Wiesbaden",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Beweglich gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea V. aus Memmingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Dominik S. aus Jena",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Leon S. aus Potsdam",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Stefanie T. aus Ambreg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Pferd gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Niklas R. aus Marl",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Beweglich gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Maria K. aus Wuppertal",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Anton M. aus Celle",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Sascha F. aus Bad Salzuflen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Emil Q. aus Mülheim an der Ruhr",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Pferd gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik K. aus Aalen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Petra O. aus Hilden",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Oskar V. aus Gera",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Tiere ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Katharina K. aus Hannover",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Anton G. aus Stuttgart",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Adrian A. aus Salzgitter",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Danke!",
    "customer_name": "Julia N. aus Flensburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Niklas R. aus Landshut",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Preis-Leistung ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Sarah O. aus Regensburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Anna R. aus Filderstadt",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Leon M. aus Ibbenbüren",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Birgit S. aus Bergisch Gladbach",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Noah F. aus Kaufbeuren",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Nadine C. aus Buxtehude",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Malte K. aus Rüsselsheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas G. aus Heidelberg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Liam Z. aus Hamburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Schönes Design gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Susanne B. aus Bottrop",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Finn Y. aus Essen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Sarah H. aus Darmstadt",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Julian D. aus Gera",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders 3-in-1 Set gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Kerstin M. aus Bremerhaven",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Daumen hoch!",
    "customer_name": "Robin E. aus Darmstadt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Leo A. aus Detmold",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Petra H. aus Kleve",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja X. aus Konstanz",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Nicole X. aus Hennef",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Ben E. aus Fellbach",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Meine Tochter ist begeistert ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Theo N. aus Salzgitter",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Lenny S. aus Schwäbisch Gmünd",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Philipp L. aus Alsdorf",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Mats O. aus Pforzheim",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Theo J. aus Heilbronn",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Meine Tochter ist begeistert ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Christoph G. aus Lüdenscheid",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Tiere ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Kerstin G. aus Remscheid",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Max D. aus Pinneberg",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders 3-in-1 Set gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Claudia M. aus Kassel",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders 3-in-1 Set gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Mats C. aus Borken",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Jonas A. aus Hamburg",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Meine Tochter ist begeistert ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Timo W. aus Bad Kreuznach",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Monika C. aus Lippstadt",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Erik T. aus Kiel",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Anton I. aus Rosenheim",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Hannes V. aus Neu-Ulm",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Schönes Design gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Milan E. aus Stralsund",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Kerstin B. aus Leipzig",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Noah O. aus Herne",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Vincent A. aus Lörrach",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Dennis Y. aus Sankt Augustin",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Christoph U. aus Ambreg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar I. aus Jena",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Maximilian B. aus Gelsenkirchen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Max Z. aus Darmstadt",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Meine Tochter ist begeistert ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Tobias R. aus Kleve",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Luca R. aus Traunstein",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Meine Tochter ist begeistert ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Lukas W. aus Eschweiler",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Tolle Tiere gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Malte J. aus Meerbusch",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Monika M. aus Bergisch Gladbach",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Pferd gefällt mir gut. Daumen hoch!",
    "customer_name": "Paul W. aus Dormagen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Pferd gefällt mir gut. Super Shop.",
    "customer_name": "Sascha I. aus Baden-Baden",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Christina B. aus Fürth",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Meine Tochter ist begeistert gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Katharina B. aus Bad Homburg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Justus M. aus Berlin",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Top.",
    "customer_name": "Timo O. aus Osnabrück",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Preis-Leistung gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Valentin J. aus Albstadt",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Schönes Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Luca U. aus Oldenburg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Melanie E. aus Frechen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders 3-in-1 Set gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent T. aus Böblingen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Jannik L. aus Bochum",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Kreativ gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Jonas C. aus Erfurt",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Liam Y. aus Hennef",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Klare 10/10.",
    "customer_name": "Tim Q. aus Frankfurt",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Tanja H. aus Stuttgart",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Schönes Design gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Theo M. aus Filderstadt",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Jannik L. aus Waiblingen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anna A. aus Lemgo",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Laura O. aus Oberhausen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Meine Tochter ist begeistert gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Lisa S. aus Neu-Ulm",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Meine Tochter ist begeistert gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Hannes F. aus Stuttgart",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julian Z. aus Waiblingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Laura M. aus Duisburg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Maximilian I. aus Dormagen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schönes Design ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "David H. aus Villingen-Schwenningen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Sandra K. aus Dinslaken",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Kerstin M. aus Frankfurt",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature 3-in-1 Set ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Arne N. aus Offenbach",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Nicole K. aus Gießen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Claudia Y. aus Bad Homburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Christoph Y. aus Schwerin",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Max S. aus Peine",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders 3-in-1 Set gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Felix Q. aus Ibbenbüren",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Leo E. aus Kerpen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Anna D. aus Oberhausen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Simon X. aus Frechen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats J. aus Wiesbaden",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Florian P. aus Detmold",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Benedikt L. aus Kempten",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Yannick U. aus Mönchengladbach",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Anton Q. aus Gelsenkirchen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Paul P. aus Marl",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Top.",
    "customer_name": "Emil T. aus Baden-Baden",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Maximilian A. aus Böblingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Paul X. aus Leinfelden-Echterdingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Sarah O. aus Hannover",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Claudia G. aus Erfurt",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas G. aus Kaiserslautern",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Top, weiter so.",
    "customer_name": "Marlon D. aus Villingen-Schwenningen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Hannes R. aus Peine",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Florian I. aus Lingen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Dennis Q. aus Koblenz",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Andrea S. aus Neuwied",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Florian I. aus Dinslaken",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Oskar I. aus Offenburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Ben M. aus Wunstorf",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature 3-in-1 Set ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Max G. aus Böblingen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nadine T. aus Velbert",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Preis-Leistung gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar U. aus Mönchengladbach",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Emil S. aus Kiel",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Christoph D. aus Bad Homburg",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Hannes I. aus Norderstedt",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Schönes Design gefällt mir gut. Danke.",
    "customer_name": "Henry Z. aus Hürth",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Preis-Leistung gefällt mir gut. Danke.",
    "customer_name": "Noah Y. aus Böblingen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Robin L. aus Krefeld",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Kevin K. aus Bayreuth",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Tobias A. aus Lünen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Fabian I. aus Meerbusch",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Bin rundum zufrieden.",
    "customer_name": "Laura K. aus Meerbusch",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglich ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Moritz U. aus Oldenburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Meine Tochter ist begeistert gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Monika O. aus Lüneburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Pferd gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Malte P. aus Halle (Saale)",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Paul K. aus Hannover",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Jonas R. aus Worms",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Oskar P. aus Brandenburg an der Havel",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt P. aus Dülmen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Julia E. aus Pinneberg",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Kreativ gefällt mir gut. Bin happy.",
    "customer_name": "Nadine Z. aus Oberursel",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Matteo L. aus Peine",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Tolle Tiere gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Laura P. aus Herford",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Kreativ gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Fabian L. aus Sindelfingen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Leon A. aus Neumünster",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Vielen Dank für den schnellen Service.",
    "customer_name": "Petra M. aus Langenfeld",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Sabine N. aus Marburg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Tiere ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Jan J. aus Görlitz",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Yannick J. aus Aalen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Jannik N. aus Erlangen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Marlon I. aus Leverkusen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglich ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Felix S. aus Oberursel",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Katharina U. aus Filderstadt",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Erik U. aus Oberhausen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Julia K. aus Bremen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Milan F. aus Freising",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Jonas T. aus Lüdenscheid",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Paul W. aus Straubing",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Klare 10/10.",
    "customer_name": "Elias T. aus Schwäbisch Gmünd",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Andrea N. aus Dortmund",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Johannes B. aus Koblenz",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. 5 Sterne von mir.",
    "customer_name": "Tanja V. aus Passau",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Anna S. aus Delmenhorst",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Pferd gefällt mir gut. Daumen hoch!",
    "customer_name": "Benedikt V. aus Castrop-Rauxel",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Max T. aus Kaiserslautern",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Lukas W. aus Kempten",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Robin E. aus Bremen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Kilian Q. aus Witten",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Jonas T. aus Lingen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Kreativ gefällt mir gut. Bin happy.",
    "customer_name": "Laura E. aus Wilhelmshaven",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja I. aus Kerpen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Jannik V. aus Bad Oeynhausen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Preis-Leistung stimmt hier.",
    "customer_name": "Tanja M. aus Potsdam",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Preis-Leistung ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Tanja A. aus Mülheim an der Ruhr",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Finn Y. aus Oberhausen",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Pferd gefällt mir gut. Einfach klasse.",
    "customer_name": "Ben C. aus Herzogenrath",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Andrea X. aus Herford",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Mats R. aus Kempten",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Finn P. aus Fulda",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Einfach klasse.",
    "customer_name": "Johannes T. aus Herne",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Milan W. aus Plauen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Preis-Leistung ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Erik P. aus Bruchsal",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Ben P. aus Bad Oeynhausen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Schönes Design gefällt mir gut. Daumen hoch!",
    "customer_name": "Maximilian Q. aus Fulda",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglich ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Yannick G. aus Hameln",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Moritz M. aus Euskirchen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Top, weiter so.",
    "customer_name": "Florian Z. aus Freising",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Nadine P. aus Düsseldorf",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Preis-Leistung stimmt hier.",
    "customer_name": "Christoph B. aus Lörrach",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Paul A. aus Bonn",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Tolle Tiere gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Petra W. aus Stolberg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Noah C. aus Tübingen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Top, weiter so.",
    "customer_name": "Florian Q. aus Kamen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sascha M. aus Kassel",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Timo T. aus Passau",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Tolle Tiere gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Timo T. aus Hagen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Justus D. aus Jena",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Meine Tochter ist begeistert gefällt mir gut. Danke.",
    "customer_name": "Christoph M. aus Lippstadt",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Tim Q. aus Hattingen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Marlon S. aus Bocholt",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Preis-Leistung ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Matteo D. aus Gütersloh",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Preis-Leistung gefällt mir gut. Daumen hoch!",
    "customer_name": "Yannick V. aus Wetzlar",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Oskar K. aus Rodgau",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Timo B. aus Mainz",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Dominik G. aus Görlitz",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Meine Tochter ist begeistert gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Samuel N. aus Norderstedt",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Christoph T. aus Lahr",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Tiere ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats N. aus Kaufbeuren",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Schönes Design gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Jonas I. aus Villingen-Schwenningen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglich ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Birgit I. aus Rosenheim",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Milan L. aus Borken",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Marlon O. aus Celle",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Tolle Tiere gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Benedikt X. aus Hagen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Preis-Leistung ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "David Y. aus Gelsenkirchen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Schönes Design ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Katharina K. aus Osnabrück",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Matteo V. aus Sankt Augustin",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Bin rundum zufrieden.",
    "customer_name": "Susanne P. aus Bergheim",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Beweglich gefällt mir gut. Super Shop.",
    "customer_name": "Lisa X. aus Heidelberg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sabine T. aus Borken",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Preis-Leistung gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sandra L. aus Herne",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Maximilian K. aus Leipzig",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pferd ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Nico W. aus Offenburg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Malte Y. aus Ingolstadt",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Kreativ gefällt mir gut. Klare 10/10.",
    "customer_name": "Lisa O. aus Ludwigshafen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Meine Tochter ist begeistert gefällt mir gut. Bin happy.",
    "customer_name": "Alexander T. aus Tübingen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Preis-Leistung gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Arne V. aus Bremen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Monika E. aus Lüdenscheid",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglich gefällt mir gut. Danke.",
    "customer_name": "Luis M. aus Karlsruhe",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Claudia U. aus Lörrach",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Schönes Design gefällt mir gut. Super Shop.",
    "customer_name": "Anja H. aus Lünen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Julian S. aus Bremerhaven",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo X. aus Hagen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Daumen hoch!",
    "customer_name": "Luca K. aus Nettetal",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Leo M. aus Neuss",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Daumen hoch!",
    "customer_name": "Laura Q. aus Neunkirchen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Max U. aus Bergisch Gladbach",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Beweglich gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Fabian Q. aus Trier",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Absolute Kaufempfehlung.",
    "customer_name": "Justus Y. aus Minden",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders 3-in-1 Set gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Yannick Z. aus Lippstadt",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Schönes Design gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Benedikt O. aus München",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pferd ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leo L. aus Brotterode",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Lisa H. aus Leipzig",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin rundum zufrieden.",
    "customer_name": "Johannes S. aus Gronau",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Maria B. aus Erfurt",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Hat sich definitiv gelohnt.",
    "customer_name": "Leon L. aus Kassel",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Preis-Leistung gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Philipp T. aus Lingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Oskar X. aus Waiblingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Andrea S. aus Potsdam",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Vielen Dank für den schnellen Service.",
    "customer_name": "Claudia Z. aus Solingen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Melanie J. aus Emden",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Petra K. aus Ludwigshafen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Finn R. aus Fulda",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Robin Y. aus Darmstadt",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Vincent K. aus Bruchsal",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Samuel G. aus Wuppertal",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Leo I. aus Karlsruhe",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Preis-Leistung ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian O. aus Jena",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Tolle Tiere gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Vincent T. aus Osnabrück",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Sarah R. aus Detmold",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Tanja K. aus Brandenburg an der Havel",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin rundum zufrieden.",
    "customer_name": "Milan U. aus Dortmund",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats K. aus Alsdorf",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature 3-in-1 Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Anna Z. aus Bielefeld",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Kerstin N. aus Freiburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Johannes Y. aus Kaiserslautern",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "David I. aus Troisdorf",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Theo W. aus Bamberg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Meine Tochter ist begeistert gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Birgit L. aus Kiel",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Top.",
    "customer_name": "Christina P. aus Tübingen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Fabian E. aus Hanau",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Preis-Leistung ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Kilian K. aus Bayreuth",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Bin zufrieden.",
    "customer_name": "Stefanie P. aus Gummersbach",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Nicole W. aus Bayreuth",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Andrea L. aus Erkrath",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Adrian S. aus Wesel",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Mats Z. aus Kerpen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nicole R. aus Euskirchen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Pferd ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Lukas W. aus Erkrath",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Christina N. aus Celle",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Julia F. aus Ratingen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Nico Y. aus Weimar",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Philipp O. aus Heilbronn",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders 3-in-1 Set gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah C. aus Meerbusch",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Ein tolles Geschenk.",
    "customer_name": "Kilian X. aus Lemgo",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Jannik H. aus Bergkamen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Bin zufrieden.",
    "customer_name": "Tom P. aus Flensburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Julian T. aus Göttingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Oskar I. aus Minden",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar W. aus Straubing",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Super Shop.",
    "customer_name": "Sandra L. aus Frechen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Tolle Tiere gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Philipp I. aus Bottrop",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Pferd gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Hannes N. aus Würzburg",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Tim W. aus Erfurt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Elias J. aus Düsseldorf",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pferd gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Matteo Z. aus Mannheim",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature 3-in-1 Set ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "David D. aus Rheda-Wiedenbrück",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Bastian C. aus Hürth",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Oskar C. aus Dessau-Roßlau",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Theo B. aus Neu-Ulm",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Matteo E. aus Elmshorn",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Beweglich gefällt mir gut. Bin happy.",
    "customer_name": "Finn O. aus Bremerhaven",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Max V. aus Augsburg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Milan V. aus Berlin",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Kerstin K. aus Kamen",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Johannes D. aus Stuttgart",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Adrian L. aus Frankfurt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Arne T. aus Leonberg",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Top, weiter so.",
    "customer_name": "Lukas W. aus Bergheim",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Pferd gefällt mir gut. Top, weiter so.",
    "customer_name": "Arne X. aus Celle",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Preis-Leistung ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias R. aus Nettetal",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Maximilian J. aus Fürth",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Niklas H. aus Minden",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Für Fans ein absolutes Muss.",
    "customer_name": "Matteo Q. aus Bietigheim-Bissingen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Laura I. aus Düren",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Bin happy.",
    "customer_name": "Mats W. aus Lemgo",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Valentin P. aus Herford",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Meine Tochter ist begeistert gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Florian T. aus Heilbronn",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Finn C. aus Hilden",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Laura V. aus Regensburg",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Liam K. aus Konstanz",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Vincent G. aus Dresden",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kilian S. aus Potsdam",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Schönes Design gefällt mir gut. Top, weiter so.",
    "customer_name": "Sascha L. aus Lünen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Katharina C. aus Freiburg",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Liam H. aus Salzgitter",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Leon R. aus Münster",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Maria L. aus Hildesheim",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes D. aus Kerpen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Super Shop.",
    "customer_name": "Benedikt F. aus Bocholt",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Robin C. aus Leverkusen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp Q. aus Münster",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Nico A. aus Lippstadt",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Lukas K. aus Elmshorn",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt H. aus Traunstein",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kreativ gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar Z. aus Würzburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Benedikt D. aus Fellbach",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Simon C. aus Bad Homburg",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Birgit Y. aus Leonberg",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia K. aus Magdeburg",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Sascha X. aus Erfurt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Tiere ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Matteo E. aus Rostock",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Vielen Dank für den schnellen Service.",
    "customer_name": "Christina B. aus Detmold",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature 3-in-1 Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine R. aus Dortmund",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Preis-Leistung gefällt mir gut. Klare 10/10.",
    "customer_name": "Paul D. aus Braunschweig",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leo V. aus Bad Kreuznach",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Tiere ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "David U. aus Duisburg",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Birgit Y. aus Kaufbeuren",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Felix C. aus Ulm",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Meine Tochter ist begeistert gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Dominik Y. aus Celle",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Luis N. aus Erkrath",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Preis-Leistung stimmt hier.",
    "customer_name": "Lisa S. aus Gelsenkirchen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Christina F. aus Pinneberg",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Tolle Tiere gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Anja F. aus Zwickau",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Matteo N. aus Bergisch Gladbach",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Maria S. aus Ludwigsburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul E. aus Stolberg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Danke!",
    "customer_name": "Tanja W. aus Emden",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Pferd gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Fabian I. aus Heidenheim",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Sascha R. aus Garbsen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Alles richtig gemacht.",
    "customer_name": "Jannik M. aus Filderstadt",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Schönes Design gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Emil Q. aus Dinslaken",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Pferd gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kilian E. aus Kerpen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Timo E. aus Bocholt",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Kreativ gefällt mir gut. Daumen hoch!",
    "customer_name": "Yannick U. aus Dresden",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Laura L. aus Fellbach",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Preis-Leistung gefällt mir gut. Top, weiter so.",
    "customer_name": "Tim S. aus Aschaffenburg",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian I. aus Bochum",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Pferd gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Lukas Y. aus Langenhagen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Tim B. aus Neuss",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Moritz O. aus Paderborn",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Christina K. aus Schwäbisch Gmünd",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders 3-in-1 Set gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Bastian X. aus Bayreuth",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Kilian C. aus Esslingen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature 3-in-1 Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Lisa K. aus Ludwigshafen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Meine Tochter ist begeistert ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Leon Z. aus Eschweiler",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Susanne W. aus Remscheid",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Danke!",
    "customer_name": "Jannik M. aus Leinfelden-Echterdingen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders 3-in-1 Set gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Oskar A. aus Langenhagen",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Sandra M. aus Duisburg",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schönes Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Maria A. aus Elmshorn",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Theo D. aus Bayreuth",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Für Fans ein absolutes Muss.",
    "customer_name": "Fabian Y. aus Braunschweig",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Marlon I. aus Bocholt",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Milan H. aus Düsseldorf",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Meine Tochter ist begeistert ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Petra C. aus Wilhelmshaven",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Moritz P. aus Nordhorn",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Jannik H. aus Ambreg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Simon B. aus Stolberg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Christina J. aus Kassel",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Bin happy.",
    "customer_name": "Sandra J. aus Sindelfingen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Meine Tochter ist begeistert gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julian B. aus Gießen",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Finn D. aus Marl",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Milan J. aus Celle",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Dominik B. aus Krefeld",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Bastian S. aus Herford",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Fabian Z. aus Tübingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Kreativ gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton C. aus Hamm",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders 3-in-1 Set gefällt mir gut. Danke.",
    "customer_name": "Niklas V. aus Würzburg",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schönes Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Katharina Z. aus Heinsberg",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Maximilian Y. aus Lüdenscheid",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Leon V. aus Bad Salzuflen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglich ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Tobias Y. aus Rüsselsheim",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Danke!",
    "customer_name": "Elias Q. aus Neumünster",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon C. aus Monheim am Rhein",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Luca O. aus Bietigheim-Bissingen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Sabine A. aus Rosenheim",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Jannik M. aus Kaiserslautern",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. So macht LEGO Spaß.",
    "customer_name": "Benedikt P. aus Bad Oeynhausen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Luis U. aus Hildesheim",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Preis-Leistung gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Jan W. aus Erfurt",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Lenny F. aus Stralsund",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Malte D. aus Chemnitz",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Tobias B. aus Mülheim an der Ruhr",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Super Shop.",
    "customer_name": "Valentin Y. aus Bergheim",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anna Y. aus Elmshorn",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Schönes Design gefällt mir gut. Daumen hoch!",
    "customer_name": "Tanja O. aus Lüdenscheid",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Samuel E. aus Detmold",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Lenny N. aus Erftstadt",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Alexander C. aus Traunstein",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature 3-in-1 Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Petra A. aus Leverkusen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Ben V. aus Bocholt",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Milan C. aus Berlin",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Susanne E. aus Bottrop",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Jonas X. aus Pulheim",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders 3-in-1 Set gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas X. aus Kassel",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Milan P. aus Bad Oeynhausen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Samuel H. aus Bremen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Florian S. aus Esslingen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Tanja D. aus Unna",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Christina A. aus Regensburg",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Felix J. aus Erlangen",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Nicole T. aus Hamm",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Tiere ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Leon Q. aus Speyer",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Monika O. aus Stolberg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Andrea T. aus Grevenbroich",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schönes Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Niklas A. aus Chemnitz",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Monika U. aus Hameln",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Adrian C. aus Bocholt",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Justus Q. aus Heidelberg",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Meine Tochter ist begeistert gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp B. aus Witten",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Tolle Tiere gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Leon V. aus Melle",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kevin I. aus Delmenhorst",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Finn X. aus Ibbenbüren",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Tolle Tiere gefällt mir gut. Danke.",
    "customer_name": "Oskar O. aus Bamberg",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine M. aus Hanau",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa T. aus Bad Kreuznach",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Schönes Design gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Lisa S. aus Paderborn",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Katharina A. aus Bonn",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Schönes Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Claudia G. aus Aurich",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Andrea Y. aus Erkrath",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schönes Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Finn F. aus Wuppertal",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Laura M. aus Göppingen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Preis-Leistung gefällt mir gut. Bin happy.",
    "customer_name": "Sarah P. aus Pforzheim",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Adrian M. aus Ulm",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Sascha R. aus Melle",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Arne G. aus Wuppertal",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Sascha Q. aus Bad Salzuflen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Kerstin H. aus Hamburg",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Paul W. aus Ratingen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Pferd gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt S. aus Elmshorn",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Nadine H. aus Offenburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Moritz E. aus Siegen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Meine Tochter ist begeistert gefällt mir gut. Klare 10/10.",
    "customer_name": "Adrian G. aus Pinneberg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature 3-in-1 Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats N. aus Lingen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Pferd gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Julia U. aus Stuttgart",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Meine Tochter ist begeistert gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sascha P. aus Bad Oeynhausen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Jannik T. aus Freiburg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Tiere ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Felix V. aus Lemgo",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Maximilian M. aus Leipzig",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Top.",
    "customer_name": "Liam O. aus Nettetal",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nadine M. aus Görlitz",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Leo O. aus Nürnberg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders 3-in-1 Set gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lukas H. aus Marburg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Pferd gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Sascha N. aus Bad Salzuflen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Maria W. aus Krefeld",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt B. aus Castrop-Rauxel",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders 3-in-1 Set gefällt mir gut. Bin happy.",
    "customer_name": "Liam R. aus Neu-Ulm",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Tolle Tiere gefällt mir gut. Bin happy.",
    "customer_name": "Melanie F. aus Rheine",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Melanie K. aus Soest",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Jannik J. aus Landshut",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Tanja F. aus Wilhelmshaven",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Tom H. aus Heidenheim",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Adrian U. aus Lübeck",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Mats R. aus Krefeld",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anton S. aus Filderstadt",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo X. aus Dachau",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Preis-Leistung ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tim G. aus Lahr",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Leo J. aus Leipzig",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Preis-Leistung ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Tanja D. aus Ambreg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Pferd gefällt mir gut. Danke.",
    "customer_name": "Valentin N. aus Freising",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Andrea Q. aus München",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Tiere ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Luis M. aus Rottenburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schönes Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Yannick K. aus Koblenz",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Bastian V. aus Heilbronn",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Tobias W. aus Schwäbisch Gmünd",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Meine Tochter ist begeistert ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Justus N. aus Rostock",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Bin zufrieden.",
    "customer_name": "Claudia X. aus Magdeburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Pferd gefällt mir gut. Super Shop.",
    "customer_name": "David H. aus Erkrath",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Max J. aus Herford",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sascha B. aus Aurich",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Hat sich definitiv gelohnt.",
    "customer_name": "Oskar D. aus Bielefeld",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Beweglich gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Anja V. aus Wilhelmshaven",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Bin happy.",
    "customer_name": "Arne T. aus Pforzheim",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Moritz W. aus Dinslaken",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Ben K. aus Celle",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Lenny C. aus Leipzig",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Vincent O. aus Bietigheim-Bissingen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature 3-in-1 Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Jan V. aus Remscheid",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Valentin X. aus Hattingen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Hannes P. aus Salzgitter",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Tolle Tiere gefällt mir gut. Klare 10/10.",
    "customer_name": "Luca V. aus Kaufbeuren",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Timo G. aus Traunstein",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Preis-Leistung gefällt mir gut. Bin happy.",
    "customer_name": "Luis Y. aus Bad Salzuflen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pferd gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Felix Q. aus Rosenheim",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Lisa E. aus Rosenheim",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Preis-Leistung gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Monika F. aus Bayreuth",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Tanja L. aus Kaiserslautern",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Vincent S. aus Aalen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Absolute Kaufempfehlung.",
    "customer_name": "Birgit K. aus Hameln",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Meine Tochter ist begeistert gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Katharina B. aus Herten",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Christina M. aus Ulm",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Katharina Y. aus Kassel",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Erik A. aus Plauen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Meine Tochter ist begeistert gefällt mir gut. Super Shop.",
    "customer_name": "Hannes T. aus Villingen-Schwenningen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Ben N. aus Gelsenkirchen",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Justus R. aus Kassel",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul O. aus Hilden",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Kreativ gefällt mir gut. Daumen hoch!",
    "customer_name": "Erik E. aus Bonn",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben D. aus Bremerhaven",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Valentin J. aus Euskirchen",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Oskar V. aus Görlitz",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Kerstin Y. aus Neustadt an der Weinstraße",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Vielen Dank für den schnellen Service.",
    "customer_name": "Susanne G. aus Mainz",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Tiere ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sascha I. aus Memmingen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Vincent M. aus Ludwigshafen",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Leo X. aus Iserlohn",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Marlon X. aus Langenfeld",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Preis-Leistung gefällt mir gut. Super Shop.",
    "customer_name": "Monika N. aus Sankt Augustin",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Marlon F. aus Castrop-Rauxel",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Sandra P. aus Rosenheim",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Max W. aus Oberhausen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Sandra S. aus Borken",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Danke!",
    "customer_name": "Luis Q. aus Hattingen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Anja L. aus Erlangen",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Top.",
    "customer_name": "Laura Q. aus Bergheim",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Petra U. aus Rheine",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Dominik X. aus Augsburg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich.",
    "customer_name": "Kevin B. aus Villingen-Schwenningen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Tobias O. aus Dachau",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Sascha Y. aus Hof",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Theo N. aus Bottrop",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Sandra S. aus Heilbronn",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Einfach klasse.",
    "customer_name": "Julian Z. aus Dormagen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin rundum zufrieden.",
    "customer_name": "Lenny Q. aus Grevenbroich",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Preis-Leistung ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Andrea G. aus Koblenz",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Anton E. aus Ratingen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Pferd ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Hannes C. aus Ibbenbüren",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Andrea L. aus Elmshorn",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin happy.",
    "customer_name": "Johannes P. aus Wolfsburg",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Anna D. aus Hennef",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Christoph X. aus Rheda-Wiedenbrück",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Einfach klasse.",
    "customer_name": "Felix E. aus Worms",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Preis-Leistung gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Yannick B. aus Wilhelmshaven",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Susanne Z. aus Esslingen",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus Y. aus Marl",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Dennis W. aus Oberhausen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Jonas Z. aus Remscheid",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Preis-Leistung ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Justus I. aus Leinfelden-Echterdingen",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Laura T. aus Langenfeld",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Benedikt R. aus Garbsen",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Bastian H. aus Essen",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Valentin V. aus Bottrop",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Maximilian O. aus Dortmund",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Einfach klasse.",
    "customer_name": "Birgit K. aus Stralsund",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Laura W. aus Rottenburg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Meine Tochter ist begeistert gefällt mir gut. Bin happy.",
    "customer_name": "Florian R. aus Bietigheim-Bissingen",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Benedikt F. aus Nordhorn",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Bin zufrieden.",
    "customer_name": "Maximilian I. aus Aschaffenburg",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Kreativ gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Stefanie Q. aus Detmold",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Preis-Leistung ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Max U. aus Mönchengladbach",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Bastian C. aus Soest",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature 3-in-1 Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Milan V. aus Alsdorf",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Fabian D. aus Unna",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Pferd gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Christina G. aus Konstanz",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Top.",
    "customer_name": "Tom H. aus Wuppertal",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Schönes Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Theo N. aus Bochum",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Tolle Tiere gefällt mir gut. Einfach klasse.",
    "customer_name": "Felix M. aus Berlin",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Tiere ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Luis B. aus Bad Salzuflen",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Tiere ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Theo Q. aus Oberursel",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Leon A. aus Kaufbeuren",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis W. aus Gronau",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christina Y. aus Meerbusch",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Paul G. aus Velbert",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Tiere gefällt mir gut. Bin happy.",
    "customer_name": "Valentin N. aus Herten",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Nico Z. aus Reutlingen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Preis-Leistung ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Maria I. aus Lörrach",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Yannick F. aus Hameln",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Meine Tochter ist begeistert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Kevin X. aus Bielefeld",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Anna A. aus Kaufbeuren",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Top.",
    "customer_name": "Benedikt V. aus Herten",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Preis-Leistung gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon E. aus Lahr",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Matteo A. aus Unna",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Tiere ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Tom S. aus Freiburg",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Oskar Y. aus Herford",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Meine Tochter ist begeistert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Philipp U. aus Remscheid",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Leo X. aus Dorsten",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Preis-Leistung gefällt mir gut. Daumen hoch!",
    "customer_name": "Leo P. aus Hildesheim",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pferd ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Maximilian M. aus Detmold",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pferd ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Kevin D. aus Weimar",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Pferd gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Bastian F. aus Bonn",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Lukas Q. aus Melle",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Preis-Leistung ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Susanne L. aus Wilhelmshaven",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Tolle Tiere gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Lisa F. aus Berlin",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders 3-in-1 Set gefällt mir gut. Daumen hoch!",
    "customer_name": "Moritz V. aus Stralsund",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature 3-in-1 Set ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Kerstin J. aus Flensburg",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Erik V. aus Freiburg",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Milan R. aus Koblenz",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature 3-in-1 Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Simon R. aus Bergkamen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Timo W. aus Gladbeck",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Paul X. aus Potsdam",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Preis-Leistung ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Elias H. aus Albstadt",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Sascha V. aus Wuppertal",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Dennis T. aus Brotterode",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Preis-Leistung ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Julia G. aus Ingolstadt",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Hannes M. aus Hannover",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Elias W. aus Oldenburg",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. 5 Sterne von mir.",
    "customer_name": "Paul X. aus Meerbusch",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Arne C. aus Dortmund",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Bin zufrieden.",
    "customer_name": "Theo M. aus Duisburg",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Anton D. aus Ratingen",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Philipp U. aus Oberursel",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Elias R. aus Aurich",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Katharina C. aus Dormagen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Kilian L. aus Hattingen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Claudia P. aus Kassel",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Marlon S. aus Heidelberg",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Bastian V. aus Herne",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Meine Tochter ist begeistert gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Andrea R. aus Dortmund",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Maria C. aus Eschweiler",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schönes Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Leon W. aus Emden",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Ben S. aus Leipzig",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie J. aus Freising",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pferd ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kevin A. aus Plauen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Kerstin C. aus Gummersbach",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Lenny Z. aus Delmenhorst",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Stefanie Y. aus Erlangen",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Pferd gefällt mir gut. Super Shop.",
    "customer_name": "Sarah Q. aus Darmstadt",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Valentin D. aus Erfurt",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Paul Z. aus Iserlohn",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Meine Tochter ist begeistert gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan K. aus Marburg",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Niklas Q. aus Unna",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Tolle Tiere gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar A. aus Chemnitz",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schönes Design ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "David T. aus Kleve",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Petra A. aus Soest",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Monika H. aus Siegen",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Bin zufrieden.",
    "customer_name": "Fabian R. aus Lahr",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit V. aus Bruchsal",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Klare 10/10.",
    "customer_name": "Sascha P. aus Rheine",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Luca G. aus Rosenheim",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature 3-in-1 Set ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Hannes B. aus Rottenburg",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Sandra Z. aus Kaufbeuren",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pferd ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Malte M. aus Delmenhorst",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. So macht LEGO Spaß.",
    "customer_name": "Niklas S. aus Heinsberg",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luis R. aus Langenhagen",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Beweglich gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Kerstin W. aus Dessau-Roßlau",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Kreativ gefällt mir gut. Daumen hoch!",
    "customer_name": "Lenny Y. aus Fellbach",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Elias D. aus Magdeburg",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders 3-in-1 Set gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin U. aus Fulda",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Luca Q. aus Oldenburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anja W. aus Mainz",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Preis-Leistung gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Lukas S. aus Rosenheim",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglich ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Petra P. aus Celle",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Kilian T. aus Wuppertal",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Felix I. aus Minden",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Tobias G. aus Offenburg",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Anja X. aus Fellbach",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schönes Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Monika N. aus Rosenheim",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schönes Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Kevin R. aus Traunstein",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Petra I. aus Emden",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Nico F. aus Bremen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Adrian X. aus Melle",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Jannik U. aus Hilden",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Klare 10/10.",
    "customer_name": "Erik J. aus Lünen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik O. aus Rodgau",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Beweglich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Leo H. aus Ratingen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Arne Q. aus Garbsen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Preis-Leistung ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine R. aus Fellbach",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine L. aus Herford",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sabine D. aus Kassel",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Tiere ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Kilian G. aus Hamburg",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Meine Tochter ist begeistert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Jannik D. aus Recklinghausen",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Justus F. aus Ratingen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Valentin L. aus Bottrop",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Valentin C. aus Konstanz",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pferd ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Hannes Z. aus Potsdam",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Christina N. aus Weimar",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Meine Tochter ist begeistert gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Henry K. aus Düsseldorf",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglich ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Kilian U. aus Grevenbroich",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Dominik S. aus Hanau",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias S. aus Cottbus",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Preis-Leistung ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Valentin W. aus Stolberg",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Tim S. aus Pinneberg",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Niklas T. aus Bad Kreuznach",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Meine Tochter ist begeistert ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Claudia J. aus Freising",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Preis-Leistung ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Julia Z. aus Trier",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Schönes Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Robin A. aus Krefeld",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pferd ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Birgit W. aus Bielefeld",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Preis-Leistung ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lenny B. aus Kaiserslautern",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Dennis J. aus Herzogenrath",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders 3-in-1 Set gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Christoph U. aus Regensburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schönes Design ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Robin K. aus Neumünster",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Vielen Dank für den schnellen Service.",
    "customer_name": "Adrian Q. aus Wesel",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Jannik I. aus Kaiserslautern",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Christina V. aus Kaufbeuren",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Marlon Y. aus Rüsselsheim",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Oskar X. aus Ratingen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Alexander V. aus Ludwigshafen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt C. aus Bergkamen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Max O. aus Offenburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Preis-Leistung ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Tim Y. aus Fürth",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian V. aus Leverkusen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Meine Tochter ist begeistert gefällt mir gut. Daumen hoch!",
    "customer_name": "Justus N. aus Reutlingen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Anna A. aus Aurich",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schönes Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Marlon Y. aus Wolfenbüttel",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Dominik X. aus Schwäbisch Gmünd",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Tiere ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Robin E. aus Waiblingen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglich ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Jan T. aus Ibbenbüren",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Lukas C. aus Erlangen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Dominik D. aus Pinneberg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Sandra I. aus Delmenhorst",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature 3-in-1 Set ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Maximilian T. aus Speyer",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Max U. aus Hürth",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Kevin S. aus Minden",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Schönes Design gefällt mir gut. Daumen hoch!",
    "customer_name": "Jannik N. aus Esslingen",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pferd ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Leo T. aus Lemgo",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Fabian D. aus Neunkirchen",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Moritz X. aus Landshut",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Hannes L. aus Minden",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Meine Tochter ist begeistert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Yannick C. aus Pforzheim",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Bin zufrieden.",
    "customer_name": "Anton D. aus Stolberg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich. Bin zufrieden.",
    "customer_name": "Birgit E. aus Saarbrücken",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Absolute Kaufempfehlung.",
    "customer_name": "Valentin F. aus Konstanz",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Preis-Leistung gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christina I. aus Kassel",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Preis-Leistung ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Bastian Y. aus Borken",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Danke.",
    "customer_name": "Maria N. aus Eschweiler",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Maria A. aus Bergisch Gladbach",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Pferd gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sarah R. aus Neustadt an der Weinstraße",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Justus A. aus Hattingen",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Maria Q. aus Friedrichshafen",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pferd ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Mats G. aus Soest",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Beweglich gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Finn O. aus Hameln",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Tom V. aus Herten",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Luca M. aus Freising",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Schönes Design gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Simon K. aus Kamen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Luca W. aus Offenbach",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Tiere ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Anna N. aus Görlitz",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Tom X. aus Hamburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Yannick U. aus Leinfelden-Echterdingen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Tolle Tiere gefällt mir gut. Klare 10/10.",
    "customer_name": "Simon P. aus Rostock",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schönes Design ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Julia X. aus Ludwigsburg",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglich ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Fabian D. aus Heilbronn",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Tiere gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine V. aus Lübeck",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature 3-in-1 Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Sarah Y. aus Villingen-Schwenningen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Preis-Leistung gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Julia W. aus Weimar",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pferd ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Paul Q. aus Remscheid",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Vincent I. aus Albstadt",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Meine Tochter ist begeistert gefällt mir gut. Super Shop.",
    "customer_name": "Laura D. aus Lahr",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Hannes F. aus Bonn",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Dominik Z. aus Memmingen",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Tolle Tiere gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Jannik H. aus Mönchengladbach",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julia Z. aus Bayreuth",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schönes Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Yannick Z. aus Ibbenbüren",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Nico U. aus Albstadt",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Erik E. aus Lörrach",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Beweglich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sarah I. aus Oldenburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dominik U. aus Bocholt",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Julia F. aus Lüneburg",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature 3-in-1 Set ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Kerstin C. aus Bad Oeynhausen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Meine Tochter ist begeistert ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Justus O. aus Herford",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Meine Tochter ist begeistert ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Dennis F. aus Reutlingen",
    "date": "2025-01-01"
  }
];