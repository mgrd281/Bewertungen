const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Rogue One gefällt mir gut. Daumen hoch!",
    "customer_name": "Christoph R. aus Nettetal",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature K-2SO ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Sascha U. aus Hattingen",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Droiden ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Oskar O. aus Passau",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Danke!",
    "customer_name": "Timo A. aus Mönchengladbach",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Droiden gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Vincent J. aus Langenfeld",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Ein tolles Geschenk.",
    "customer_name": "Marlon P. aus Troisdorf",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Max U. aus Trier",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Klare 10/10.",
    "customer_name": "Lukas E. aus Bonn",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Klare 10/10.",
    "customer_name": "Susanne N. aus Gelsenkirchen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Andrea U. aus Passau",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Alexander N. aus Bruchsal",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rogue One ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Katharina X. aus Heinsberg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Samuel A. aus Nordhorn",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "Dominik W. aus Saarbrücken",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature K-2SO ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Johannes N. aus Rastatt",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Jonas Q. aus Bergheim",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Top.",
    "customer_name": "Sascha Q. aus Grevenbroich",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliert ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Luca M. aus Wilhelmshaven",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Lukas P. aus Plauen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Arne T. aus Esslingen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Droiden gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole V. aus Hof",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders K-2SO gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Paul I. aus Arnsberg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Tim L. aus Sankt Augustin",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature K-2SO ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Elias Y. aus Bremerhaven",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Für Fans gefällt mir gut. Daumen hoch!",
    "customer_name": "Yannick R. aus Görlitz",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Stefanie X. aus Memmingen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Rogue One gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Mats X. aus Erkrath",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Star Wars Fan gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Moritz Z. aus Heidenheim",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Ben B. aus Unna",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Droiden ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Luca G. aus Solingen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Fan ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Nico D. aus Leverkusen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Nicole A. aus Meerbusch",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Andrea T. aus Eschweiler",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Luis G. aus Bremerhaven",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Großartig ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Oskar I. aus Darmstadt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Für Fans gefällt mir gut. Top, weiter so.",
    "customer_name": "Kevin S. aus Leipzig",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sammlerstück ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Tim K. aus Schweinfurt",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Theo O. aus Herford",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Rogue One gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin R. aus Brotterode",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Moritz V. aus Sindelfingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sammlerstück ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Sabine O. aus Erfurt",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders K-2SO gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Kevin Y. aus Lemgo",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Danke.",
    "customer_name": "Theo S. aus Mainz",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Kevin S. aus Kiel",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Star Wars Fan gefällt mir gut. Einfach klasse.",
    "customer_name": "Fabian Y. aus Norderstedt",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Großartig ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie P. aus Kerpen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Großartig ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Niklas V. aus Leinfelden-Echterdingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Sammlerstück ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Vincent A. aus Eschweiler",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Erik D. aus Göppingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sammlerstück ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Timo X. aus Leinfelden-Echterdingen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Henry V. aus Landshut",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Detailliert gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Petra Q. aus Bergkamen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Tanja Q. aus Remscheid",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Robin K. aus Köln",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis X. aus Dortmund",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Für Fans gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Kevin M. aus Oberursel",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Lenny P. aus Herten",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Johannes C. aus Erfurt",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Luis X. aus Lübeck",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Bin zufrieden.",
    "customer_name": "Fabian R. aus Garbsen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders K-2SO gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Dennis N. aus Bonn",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Detailliert gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Yannick E. aus Hürth",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Mats H. aus Göttingen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Bin zufrieden.",
    "customer_name": "Felix K. aus Neuwied",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Adrian U. aus Herten",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Droiden ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Dominik L. aus Pforzheim",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Droiden ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "David H. aus Baden-Baden",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas H. aus Neustadt an der Weinstraße",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Sammlerstück gefällt mir gut. Top, weiter so.",
    "customer_name": "Valentin S. aus Schwerin",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Andrea F. aus Lemgo",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico T. aus Essen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature K-2SO ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Leo C. aus Marl",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Niklas K. aus Erftstadt",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Detailliert gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Monika N. aus Remscheid",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature K-2SO ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Lukas H. aus Bielefeld",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Yannick O. aus Heidenheim",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rogue One ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha W. aus Ludwigsburg",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Fan ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura S. aus Monheim am Rhein",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Rogue One gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Maximilian F. aus Nordhorn",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Max N. aus Augsburg",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Justus N. aus Lingen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Sammlerstück ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Dominik M. aus Lüneburg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Ben X. aus Euskirchen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Tim K. aus Esslingen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Birgit P. aus Herne",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Bin zufrieden.",
    "customer_name": "Valentin T. aus Jena",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Droiden ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt N. aus Langenhagen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Droiden gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Noah J. aus Bietigheim-Bissingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Ben I. aus Fellbach",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sabine N. aus Weimar",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Fan ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anja R. aus Leonberg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Fan ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Valentin R. aus Rheda-Wiedenbrück",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Fan ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Valentin V. aus Görlitz",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sammlerstück ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nadine I. aus Lörrach",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Stefanie O. aus Erfurt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Milan G. aus Hattingen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Fan ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Tanja R. aus Cottbus",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Fans ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Felix K. aus Ludwigsburg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Fans ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Laura G. aus Heidenheim",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Tobias I. aus Wetzlar",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Anna H. aus Lörrach",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Felix F. aus Bremerhaven",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Freue mich schon auf das nächste Set.",
    "customer_name": "Vincent P. aus Plauen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature K-2SO ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Anna V. aus Schwerin",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Luis I. aus Hanau",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rogue One ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Tom U. aus Paderborn",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Lenny K. aus Memmingen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Fan ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Liam T. aus Jena",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Detailliert ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha G. aus Neu-Ulm",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. 5 Sterne von mir.",
    "customer_name": "Anja D. aus Landshut",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Julian T. aus Esslingen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Emil S. aus Lüdenscheid",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Großartig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Robin W. aus Bonn",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Star Wars Fan gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Arne Q. aus Düsseldorf",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Droiden gefällt mir gut. Klare 10/10.",
    "customer_name": "Christina U. aus Bad Homburg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sammlerstück ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Maximilian A. aus Peine",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Theo K. aus Essen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Luis R. aus Wetzlar",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Droiden gefällt mir gut. Einfach klasse.",
    "customer_name": "Stefanie U. aus Kiel",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Fan ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Petra C. aus Wetzlar",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Einfach klasse.",
    "customer_name": "Theo R. aus Neumünster",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature K-2SO ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Tobias G. aus Lippstadt",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Niklas C. aus Ludwigshafen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Philipp I. aus Kerpen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Großartig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Andrea E. aus Wolfsburg",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature K-2SO ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Justus W. aus Hannover",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Andrea L. aus Würzburg",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Droiden ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Robin B. aus Weimar",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Max H. aus Aachen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Droiden ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Johannes F. aus Solingen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliert ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Petra J. aus Weimar",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Matteo R. aus Rottenburg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rogue One ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Petra U. aus Nordhorn",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Fan ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Andrea A. aus Böblingen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Sammlerstück ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Sarah O. aus Brandenburg an der Havel",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Detailliert ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Adrian R. aus Menden",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Kevin S. aus Mülheim an der Ruhr",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Adrian P. aus Dülmen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Julian V. aus Göttingen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Sammlerstück ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea D. aus Dortmund",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Sandra X. aus Langenhagen",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sammlerstück ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Anton B. aus Weimar",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Großartig gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Johannes R. aus Worms",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Super Shop.",
    "customer_name": "Noah Y. aus Dachau",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Henry U. aus Gronau",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Großartig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Anna T. aus Villingen-Schwenningen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Droiden gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Claudia V. aus Dorsten",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Anna S. aus Flensburg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Leo U. aus Bonn",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julia O. aus Schwerin",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Katharina Z. aus Lünen",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Droiden ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Luis N. aus Fulda",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Melanie N. aus Langenhagen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Malte U. aus Leonberg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Milan H. aus Oberursel",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rogue One ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Hannes T. aus Norderstedt",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders K-2SO gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Anna F. aus Leonberg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sammlerstück ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan T. aus Bad Homburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Timo O. aus Kiel",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Fan ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Anton E. aus Wiesbaden",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Großartig gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Timo W. aus Osnabrück",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Großartig ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Vincent G. aus Halle (Saale)",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Großartig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Petra R. aus Mönchengladbach",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Finn K. aus Münster",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Sammlerstück gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Melanie B. aus Troisdorf",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Großartig ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Valentin I. aus Wetzlar",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Preis-Leistung stimmt hier.",
    "customer_name": "Noah Y. aus Leipzig",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Timo D. aus Pinneberg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rogue One ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Paul A. aus Hilden",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Rogue One gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tobias K. aus Euskirchen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Top, weiter so.",
    "customer_name": "Stefanie I. aus Potsdam",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Top, weiter so.",
    "customer_name": "Philipp F. aus Fulda",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Detailliert gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Dominik K. aus Freiburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Star Wars Fan gefällt mir gut. Klare 10/10.",
    "customer_name": "Justus J. aus Schweinfurt",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Sammlerstück gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Andrea F. aus Lüneburg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top.",
    "customer_name": "Marlon A. aus Hannover",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Großartig ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Erik S. aus Gera",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Tom A. aus Wolfenbüttel",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature K-2SO ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Jonas Q. aus Ahlen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Rogue One gefällt mir gut. Danke.",
    "customer_name": "Leon U. aus Pforzheim",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Droiden ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Simon O. aus Potsdam",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature K-2SO ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Milan V. aus Trier",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliert ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix P. aus Karlsruhe",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders K-2SO gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Sarah S. aus Rodgau",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders K-2SO gefällt mir gut. Einfach klasse.",
    "customer_name": "Nadine M. aus Ulm",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Anton Y. aus Fürth",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Nicole E. aus Neuwied",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Tom A. aus Bad Oeynhausen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature K-2SO ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Claudia U. aus Solingen",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Kerstin R. aus Heidenheim",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Liam I. aus Lüneburg",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Detailliert ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Petra K. aus Buxtehude",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Fan ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Vincent E. aus Brandenburg an der Havel",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia H. aus Münster",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Nadine Q. aus Neu-Ulm",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Top.",
    "customer_name": "Johannes K. aus Leverkusen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Robin V. aus Villingen-Schwenningen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Elias D. aus Düren",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Bin zufrieden.",
    "customer_name": "Milan D. aus Leverkusen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Samuel L. aus Dessau-Roßlau",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature K-2SO ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Lenny K. aus Wilhelmshaven",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Tom L. aus Velbert",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders K-2SO gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Alexander V. aus Osnabrück",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Dominik T. aus Solingen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Arne D. aus Lingen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Maria X. aus Darmstadt",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Oskar J. aus Pinneberg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Droiden ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Moritz N. aus Dorsten",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Kilian O. aus Lingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Tanja E. aus Hameln",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp W. aus Neu-Ulm",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Droiden ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Alexander M. aus Dortmund",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Fan ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Paul A. aus Ratingen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Top.",
    "customer_name": "Johannes P. aus Jena",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Vielen Dank für den schnellen Service.",
    "customer_name": "Florian I. aus Rheine",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Nicole B. aus Buxtehude",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Florian V. aus Bottrop",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Nicole Y. aus Bad Salzuflen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Dennis T. aus Wesel",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders K-2SO gefällt mir gut. Klare 10/10.",
    "customer_name": "Alexander G. aus Hannover",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Fans ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Alexander X. aus Wuppertal",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sammlerstück ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Erik E. aus Ravensburg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Jonas L. aus Hilden",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Droiden ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar Z. aus Ludwigsburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Robin V. aus Erlangen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sammlerstück ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Marlon U. aus Straubing",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Detailliert gefällt mir gut. Einfach klasse.",
    "customer_name": "Niklas E. aus Villingen-Schwenningen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Droiden gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Jannik V. aus Greifswald",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "Sascha D. aus Hildesheim",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia P. aus Rosenheim",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Bastian G. aus Krefeld",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Großartig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Bastian H. aus Bruchsal",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Sabine I. aus Borken",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Droiden ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Ben U. aus Kempten",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Detailliert gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Birgit B. aus Rostock",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Sabine Y. aus Hof",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Freue mich schon auf das nächste Set.",
    "customer_name": "Mats S. aus Langenhagen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Fans ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Vincent O. aus Pulheim",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Susanne G. aus Oldenburg",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Theo B. aus Viersen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Für Fans gefällt mir gut. Bin happy.",
    "customer_name": "Simon O. aus Neuss",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rogue One ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Jonas H. aus Dülmen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature K-2SO ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Tom F. aus Euskirchen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Großartig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Ben A. aus Mannheim",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Vincent J. aus Esslingen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Milan E. aus Landshut",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Großartig ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Anja X. aus Baden-Baden",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Fabian Z. aus Ahlen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Susanne L. aus Herzogenrath",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Petra M. aus Karlsruhe",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas Q. aus Bornheim",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Großartig ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Robin F. aus Fulda",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Tanja H. aus Villingen-Schwenningen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Sarah L. aus Pulheim",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Jannik M. aus Weimar",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Bin happy.",
    "customer_name": "Dominik G. aus Dinslaken",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Anna V. aus Worms",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Für Fans gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Tom O. aus Erftstadt",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Vincent K. aus Bergheim",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature K-2SO ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sarah S. aus Wilhelmshaven",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Star Wars Fan gefällt mir gut. Super Shop.",
    "customer_name": "Luca G. aus Rheda-Wiedenbrück",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Lenny H. aus Bonn",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rogue One ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Timo C. aus Kleve",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Großartig ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Milan R. aus Rastatt",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature K-2SO ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Claudia W. aus Lippstadt",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Detailliert gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus P. aus Bochum",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Tobias T. aus Garbsen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Top.",
    "customer_name": "Sascha A. aus Freiburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Großartig gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sabine S. aus Frankfurt (Oder)",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bin zufrieden.",
    "customer_name": "Oskar X. aus Neu-Ulm",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Fans ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Elias M. aus Melle",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature K-2SO ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Finn A. aus Mainz",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sammlerstück ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Florian D. aus Schwäbisch Gmünd",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Droiden ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Timo U. aus Lübeck",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Alexander O. aus Bremen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Moritz W. aus Kiel",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sammlerstück ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Susanne A. aus Göttingen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Für Fans ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Christina Y. aus Osnabrück",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rogue One ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Christina D. aus Solingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Fan ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kerstin U. aus Freiburg",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Droiden ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Sandra J. aus Bonn",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature K-2SO ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Laura Z. aus Lüneburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Rogue One gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Maximilian P. aus Gütersloh",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Droiden ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Melanie H. aus Ulm",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Johannes R. aus Troisdorf",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Großartig gefällt mir gut. Top, weiter so.",
    "customer_name": "Kerstin K. aus Elmshorn",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Paul H. aus Lünen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Droiden gefällt mir gut. Klare 10/10.",
    "customer_name": "Henry M. aus Dessau-Roßlau",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Star Wars Fan gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Luis O. aus Kaufbeuren",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Droiden ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Claudia D. aus Witten",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Nico T. aus Alsdorf",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Detailliert gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Erik H. aus Albstadt",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Nico S. aus Eschweiler",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus N. aus Bornheim",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Tom W. aus Hagen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Detailliert gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Monika F. aus Dormagen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Fan ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas V. aus Rodgau",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Malte G. aus Erlangen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Sammlerstück gefällt mir gut. Top, weiter so.",
    "customer_name": "Dominik L. aus Velbert",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Sammlerstück gefällt mir gut. Super Shop.",
    "customer_name": "Max C. aus Norderstedt",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Dennis O. aus Görlitz",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Rogue One gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Fabian W. aus Dachau",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Felix D. aus Passau",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sammlerstück ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Milan Z. aus Waiblingen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Fan ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin P. aus Jena",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Absolute Kaufempfehlung.",
    "customer_name": "Max R. aus Rodgau",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Droiden gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats U. aus Salzgitter",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rogue One ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tanja J. aus Reutlingen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Finn N. aus Remscheid",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders K-2SO gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Monika T. aus Dortmund",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Sammlerstück gefällt mir gut. Bin happy.",
    "customer_name": "David Z. aus Hilden",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Emil M. aus Aachen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Sammlerstück gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Erik Z. aus Fulda",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Anna R. aus Friedrichshafen",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Fan ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Lenny E. aus Herten",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Milan V. aus Frechen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Star Wars Fan gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kerstin L. aus Lünen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Erik T. aus Peine",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Sarah Y. aus Cottbus",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Preis-Leistung stimmt hier.",
    "customer_name": "Julian P. aus Bergheim",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Simon G. aus Dessau-Roßlau",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Leon H. aus Düren",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Fans ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Adrian C. aus Bergheim",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Fan ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anna Z. aus Schwäbisch Gmünd",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Fan ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Malte E. aus Offenburg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Sammlerstück gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Tom D. aus Dachau",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Timo T. aus Wiesbaden",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders K-2SO gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Paul W. aus Hürth",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rogue One ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Jonas K. aus Troisdorf",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Lenny J. aus Dachau",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie L. aus Hattingen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Sandra T. aus Zwickau",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Top.",
    "customer_name": "Dominik T. aus Bamberg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Fan ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Marlon A. aus Memmingen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Star Wars Fan gefällt mir gut. Klare 10/10.",
    "customer_name": "Finn K. aus Bad Homburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Felix K. aus Meerbusch",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Philipp V. aus Lüdenscheid",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Rogue One gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Erik A. aus Monheim am Rhein",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Einfach klasse.",
    "customer_name": "Benedikt I. aus Heilbronn",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature K-2SO ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Melanie U. aus Remscheid",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Vincent B. aus Düsseldorf",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Fan ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Nadine S. aus Moers",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Detailliert ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Justus U. aus Celle",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Fan ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Andrea Q. aus Lörrach",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Alexander P. aus Essen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Julia H. aus Mainz",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Preis-Leistung stimmt hier.",
    "customer_name": "Luca G. aus Jena",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Rogue One gefällt mir gut. Super Shop.",
    "customer_name": "Johannes D. aus Moers",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Bin zufrieden.",
    "customer_name": "Laura R. aus Ingolstadt",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Für Fans gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Leon W. aus Koblenz",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Detailliert gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats A. aus Erfurt",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. 5 Sterne von mir.",
    "customer_name": "Jannik T. aus Dormagen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Fans ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Katharina L. aus Leipzig",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature K-2SO ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa U. aus Marburg",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Super Shop.",
    "customer_name": "Tim I. aus Brandenburg an der Havel",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sammlerstück ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Florian G. aus Ibbenbüren",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Droiden ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Liam V. aus Stralsund",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rogue One ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Felix X. aus Eschweiler",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Matteo T. aus Erftstadt",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Claudia A. aus Wiesbaden",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Großartig gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Andrea L. aus Freising",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Großartig ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Sarah A. aus Aachen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Für Fans gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Nico G. aus Emden",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Florian D. aus Viersen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Droiden ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine Z. aus Düsseldorf",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sammlerstück ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Bastian J. aus Kempten",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Fans ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Julian V. aus Baden-Baden",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Top.",
    "customer_name": "Anton X. aus Schwäbisch Gmünd",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Detailliert ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Sabine N. aus Kiel",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Danke!",
    "customer_name": "Luca W. aus Krefeld",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rogue One ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Robin I. aus Rottenburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Liam N. aus Heilbronn",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Großartig ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Andrea X. aus Zwickau",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Noah Z. aus Ulm",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dominik D. aus Greifswald",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rogue One ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Samuel Y. aus Wolfenbüttel",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Fan ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Justus C. aus Dorsten",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Ben H. aus Heilbronn",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Timo T. aus Rosenheim",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Droiden gefällt mir gut. Daumen hoch!",
    "customer_name": "Emil M. aus München",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Detailliert gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Katharina U. aus Görlitz",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Großartig gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Anja H. aus Darmstadt",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Petra P. aus Worms",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Fan ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Fabian B. aus Lippstadt",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Daumen hoch!",
    "customer_name": "Leon H. aus Erftstadt",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Monika T. aus Bremen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Arne P. aus Siegen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rogue One ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Oskar K. aus Langenfeld",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Fan ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Dominik O. aus Bonn",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature K-2SO ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Vincent I. aus Bad Salzuflen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Hannes F. aus Lüneburg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Star Wars Fan gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Moritz D. aus Rottenburg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Florian D. aus Bonn",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Rogue One gefällt mir gut. Klare 10/10.",
    "customer_name": "Tanja T. aus Kempten",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature K-2SO ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Andrea H. aus Chemnitz",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Detailliert ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tanja K. aus Moers",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Großartig gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Alexander W. aus Herne",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Jan Q. aus Schwerin",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sammlerstück ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Adrian E. aus Neuwied",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "David L. aus Neuss",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Großartig ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Finn C. aus Wolfenbüttel",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Rogue One gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Marlon W. aus Oberhausen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Großartig gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Anja U. aus Elmshorn",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rogue One ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Melanie A. aus Frankfurt",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Detailliert ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Florian D. aus Zwickau",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Detailliert gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Ben M. aus Kleve",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Danke.",
    "customer_name": "Lisa Y. aus Albstadt",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Rogue One gefällt mir gut. Top, weiter so.",
    "customer_name": "Robin E. aus Lüneburg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Fans ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Sabine K. aus Sindelfingen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria G. aus Landshut",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Alexander S. aus Fellbach",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Fan ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Arne O. aus Delmenhorst",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sammlerstück ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Luis O. aus Rostock",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Großartig ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian Q. aus Dinslaken",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Noah U. aus Rostock",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Adrian W. aus Iserlohn",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Für Fans gefällt mir gut. Bin happy.",
    "customer_name": "Kilian I. aus Soest",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Valentin F. aus Rheine",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sammlerstück ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Claudia T. aus Pulheim",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sammlerstück gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika M. aus Delmenhorst",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Großartig ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Nadine K. aus Alsdorf",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Henry O. aus Frankfurt (Oder)",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Droiden gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Henry T. aus Filderstadt",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Milan K. aus Heidelberg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Dennis A. aus Herzogenrath",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Milan C. aus Neunkirchen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Großartig gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Andrea K. aus Garbsen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Ben G. aus Rodgau",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Großartig gefällt mir gut. Top, weiter so.",
    "customer_name": "Anna C. aus Göppingen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sammlerstück ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Johannes L. aus Hennef",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Rogue One gefällt mir gut. Super Shop.",
    "customer_name": "Benedikt Z. aus Gronau",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Großartig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Christoph E. aus Karlsruhe",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Bin rundum zufrieden.",
    "customer_name": "Yannick O. aus Remscheid",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Fan ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Matteo M. aus Velbert",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Star Wars Fan gefällt mir gut. Klare 10/10.",
    "customer_name": "Stefanie W. aus Dülmen",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian P. aus Krefeld",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Großartig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Christoph I. aus Osnabrück",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Droiden gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Alexander S. aus Rheine",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Droiden ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Robin X. aus Bad Salzuflen",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sammlerstück ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Robin O. aus Neustadt an der Weinstraße",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Super Shop.",
    "customer_name": "Finn Q. aus Wolfsburg",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders K-2SO gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Susanne J. aus Potsdam",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Droiden gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Adrian O. aus Passau",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Nicole W. aus Wolfenbüttel",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Marlon V. aus Delmenhorst",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Laura X. aus Bergheim",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders K-2SO gefällt mir gut. Daumen hoch!",
    "customer_name": "Christina F. aus Offenbach",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Detailliert gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Kevin N. aus Sankt Augustin",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Matteo P. aus Gießen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Samuel X. aus Frankfurt (Oder)",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sammlerstück ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Moritz J. aus Meerbusch",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Benedikt F. aus Hanau",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sammlerstück gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Kilian J. aus Lahr",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Hannes R. aus Bremen",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Rogue One gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kerstin V. aus Villingen-Schwenningen",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus R. aus Konstanz",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Droiden gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Tom Z. aus Garbsen",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Detailliert gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kilian U. aus Buxtehude",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Fans ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Birgit X. aus Gelsenkirchen",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Stefanie I. aus Duisburg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rogue One ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra S. aus Mannheim",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Fan ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Dominik H. aus Wuppertal",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Fan ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Robin B. aus Osnabrück",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rogue One ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Yannick J. aus Ingolstadt",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature K-2SO ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Noah W. aus Menden",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Ben M. aus Aschaffenburg",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Vincent C. aus Bornheim",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Top.",
    "customer_name": "Sarah K. aus Nordhorn",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Rogue One ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Sabine R. aus Düren",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Lukas H. aus Lemgo",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Fan ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent S. aus Berlin",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Droiden gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Maximilian J. aus Iserlohn",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sammlerstück ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Adrian T. aus Menden",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luis S. aus Gronau",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Rogue One gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Birgit L. aus Gronau",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature K-2SO ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Sabine K. aus Grevenbroich",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Detailliert ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Marlon U. aus Kleve",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Fans ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Christina P. aus Ulm",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rogue One ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Susanne G. aus Wolfsburg",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Lisa Z. aus Emden",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Lenny G. aus Peine",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sammlerstück ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Milan I. aus Koblenz",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Für Fans gefällt mir gut. Top, weiter so.",
    "customer_name": "Philipp U. aus Dormagen",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Fan ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Hannes R. aus Kamen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Fabian E. aus Böblingen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Droiden gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Sarah M. aus Marl",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Sarah M. aus Rüsselsheim",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Dennis Q. aus Jena",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Großartig gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Anton P. aus Kaiserslautern",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Rogue One gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tobias G. aus Böblingen",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. So macht LEGO Spaß.",
    "customer_name": "Tom B. aus Leipzig",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Droiden ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Niklas L. aus Karlsruhe",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Großartig ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Laura I. aus Neuwied",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Für Fans gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Jonas J. aus Chemnitz",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Tim S. aus Bottrop",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Droiden ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Elias C. aus Speyer",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Droiden ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Justus W. aus Meerbusch",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Noah F. aus Neu-Ulm",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature K-2SO ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Nico B. aus Neumünster",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Felix N. aus Weinheim",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Maria X. aus Monheim am Rhein",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Kilian H. aus Pulheim",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Top.",
    "customer_name": "Vincent M. aus Dortmund",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sammlerstück ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christina Q. aus Marl",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Einfach klasse.",
    "customer_name": "Mats Q. aus Berlin",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rogue One ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Max J. aus Gütersloh",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Bin zufrieden.",
    "customer_name": "Nico T. aus Memmingen",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Droiden ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Matteo D. aus Baden-Baden",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sammlerstück ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Alexander H. aus Pulheim",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Droiden ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Erik R. aus Ravensburg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Großartig ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Milan I. aus Bonn",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature K-2SO ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Tanja D. aus Hilden",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Finn W. aus Bottrop",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Daumen hoch!",
    "customer_name": "Kevin J. aus Mainz",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rogue One ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Benedikt Q. aus Böblingen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Fan ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Malte T. aus Trier",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Absolute Kaufempfehlung.",
    "customer_name": "Johannes B. aus Bergheim",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Samuel U. aus Oranienburg",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Für Fans gefällt mir gut. Einfach klasse.",
    "customer_name": "Vincent L. aus Melle",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Adrian W. aus Bornheim",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Droiden ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Katharina D. aus Wolfsburg",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Großartig gefällt mir gut. Klare 10/10.",
    "customer_name": "Luis Z. aus Lingen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature K-2SO ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Anton G. aus Würzburg",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sammlerstück ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Sascha O. aus Bonn",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Fan ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo A. aus Bergisch Gladbach",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Sammlerstück ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Johannes E. aus Buxtehude",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Droiden ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Niklas K. aus Ulm",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Droiden ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Malte X. aus Dachau",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Fans ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Julia X. aus Reutlingen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Rogue One gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Monika X. aus Bonn",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Top.",
    "customer_name": "Leo I. aus Marburg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Droiden ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Niklas P. aus Ratingen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Anton Q. aus Gera",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Jannik C. aus Baden-Baden",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Fan ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Anja W. aus Menden",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Ein tolles Geschenk.",
    "customer_name": "Monika Z. aus Potsdam",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Droiden gefällt mir gut. Bin happy.",
    "customer_name": "Dominik H. aus Heidelberg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Droiden ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Liam X. aus Gütersloh",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Star Wars Fan gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Milan Z. aus Rüsselsheim",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Bin zufrieden.",
    "customer_name": "Niklas V. aus Velbert",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Fan ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Noah B. aus Bremerhaven",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Dominik R. aus Siegen",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Noah F. aus Dessau-Roßlau",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Theo Q. aus Herten",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Kilian O. aus Bielefeld",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature K-2SO ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Christina Y. aus Freising",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Einfach klasse.",
    "customer_name": "Dominik Z. aus Weimar",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Rogue One gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Jan A. aus Pinneberg",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders K-2SO gefällt mir gut. Daumen hoch!",
    "customer_name": "David C. aus Essen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. 5 Sterne von mir.",
    "customer_name": "Bastian G. aus Bruchsal",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Bin zufrieden.",
    "customer_name": "Philipp I. aus Würzburg",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Droiden ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "David B. aus Gummersbach",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Großartig ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Tobias L. aus Reutlingen",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature K-2SO ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sarah N. aus Stuttgart",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin rundum zufrieden.",
    "customer_name": "Stefanie P. aus Heinsberg",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliert ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Max O. aus Ibbenbüren",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Laura M. aus Bonn",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Detailliert ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Petra X. aus Bad Salzuflen",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders K-2SO gefällt mir gut. Danke.",
    "customer_name": "Tobias S. aus Berlin",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Julia M. aus Kiel",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Star Wars Fan gefällt mir gut. Super Shop.",
    "customer_name": "Ben L. aus Waiblingen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Star Wars Fan gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura H. aus Elmshorn",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Detailliert ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Dennis I. aus Bamberg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rogue One ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp F. aus Krefeld",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Großartig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Leon N. aus Karlsruhe",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Luis K. aus Frechen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Danke!",
    "customer_name": "Kerstin L. aus Braunschweig",
    "date": "2025-01-01"
  }
];