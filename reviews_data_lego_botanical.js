const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Nicole Y. aus Weimar",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Vincent M. aus Gelsenkirchen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Fabian S. aus Troisdorf",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Philipp Z. aus Duisburg",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Wunderschöne Deko gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Sandra J. aus Nordhorn",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Schöner Hingucker gefällt mir gut. Daumen hoch!",
    "customer_name": "Claudia S. aus Rottenburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Jonas R. aus Lüneburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Sieht echt aus gefällt mir gut. Super Shop.",
    "customer_name": "Kilian Q. aus Duisburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias B. aus Hildesheim",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Jonas Z. aus Langenhagen",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Lenny Q. aus Melle",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Kilian A. aus Dinslaken",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tom D. aus Osnabrück",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian X. aus München",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Tobias L. aus Neumünster",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Für Erwachsene gefällt mir gut. Daumen hoch!",
    "customer_name": "Jan Z. aus Dülmen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Lisa H. aus Neuss",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Elias Q. aus Bergheim",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Florian O. aus Pulheim",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Simon N. aus Neu-Ulm",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Jan T. aus Ambreg",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Wunderschöne Deko gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Niklas P. aus Heidelberg",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Pflanzen gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt E. aus Memmingen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Tolle Farben gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Alexander J. aus Nordhorn",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nadine E. aus Borken",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Bin zufrieden.",
    "customer_name": "Maximilian M. aus Göppingen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Maximilian A. aus Dormagen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo B. aus Rodgau",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Sieht echt aus gefällt mir gut. Top, weiter so.",
    "customer_name": "Mats S. aus Rostock",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Max O. aus Minden",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Für Erwachsene gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sabine P. aus Dachau",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Kevin A. aus Berlin",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "David H. aus Waiblingen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Julian Z. aus Erfurt",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Andrea S. aus Remscheid",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. So macht LEGO Spaß.",
    "customer_name": "Nicole U. aus Rheine",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. 5 Sterne von mir.",
    "customer_name": "Theo S. aus Hennef",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Leo O. aus Leonberg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Wunderschöne Deko gefällt mir gut. Danke.",
    "customer_name": "Robin O. aus Baden-Baden",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Erik E. aus Nürnberg",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christina M. aus Bamberg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Luis X. aus Viersen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Sarah C. aus Gladbeck",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Ben L. aus Filderstadt",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Super Shop.",
    "customer_name": "Simon W. aus Krefeld",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Jan R. aus Lemgo",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. 5 Sterne von mir.",
    "customer_name": "Max P. aus Norderstedt",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Luis Z. aus Freising",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Bin zufrieden.",
    "customer_name": "Bastian Y. aus Bielefeld",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lukas W. aus Lingen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Arne O. aus Buxtehude",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Alexander I. aus Waiblingen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Claudia W. aus Gronau",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Julian X. aus Soest",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Niklas L. aus Würzburg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Tolle Farben gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Benedikt O. aus Stolberg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Tobias T. aus Remscheid",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Theo Z. aus Bayreuth",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Luis W. aus Dresden",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Johannes M. aus Worms",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Bin zufrieden.",
    "customer_name": "Milan P. aus Grevenbroich",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Danke!",
    "customer_name": "Yannick D. aus Peine",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Tolle Farben gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Dennis Z. aus Leipzig",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Kevin S. aus Hildesheim",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Valentin N. aus Braunschweig",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Vincent X. aus Hürth",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Sieht echt aus gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Leon J. aus Marl",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kreativ gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine H. aus Görlitz",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Matteo U. aus Aurich",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Niklas I. aus Neumünster",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Christina G. aus Kamen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Lukas Z. aus Hamburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Robin P. aus Herne",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Katharina C. aus Bad Homburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Luca U. aus Ingolstadt",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Vielen Dank für den schnellen Service.",
    "customer_name": "Timo Q. aus Würzburg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Dennis K. aus Erlangen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Schöner Hingucker gefällt mir gut. Bin happy.",
    "customer_name": "Sarah F. aus Ludwigshafen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Für Fans ein absolutes Muss.",
    "customer_name": "Fabian N. aus Köln",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Für Erwachsene gefällt mir gut. Top, weiter so.",
    "customer_name": "Leon Z. aus Offenbach",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Luca E. aus Heidelberg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan F. aus Wolfsburg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Elias D. aus Kerpen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Ben P. aus Bremen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Theo O. aus Ulm",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Nadine C. aus Neustadt an der Weinstraße",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Jan K. aus Hattingen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Noah C. aus Hagen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Noah V. aus Baden-Baden",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Tim W. aus Gütersloh",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Daumen hoch!",
    "customer_name": "Johannes X. aus Bad Kreuznach",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Luca P. aus Rastatt",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Ben U. aus Ravensburg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Sieht echt aus gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Malte M. aus Paderborn",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Pflanzen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Bastian I. aus Hattingen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Florian J. aus Herne",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Tolle Farben gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Tom G. aus Bietigheim-Bissingen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Luca R. aus Kiel",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Claudia H. aus Bremen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Danke!",
    "customer_name": "Tom M. aus Traunstein",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Liam Y. aus Solingen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Alexander B. aus Borken",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Top.",
    "customer_name": "Melanie R. aus Lüneburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Valentin W. aus Buxtehude",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Lenny M. aus Wunstorf",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Fabian Z. aus Osnabrück",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Sascha P. aus Chemnitz",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sieht echt aus gefällt mir gut. Daumen hoch!",
    "customer_name": "Tom P. aus Landshut",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Tobias V. aus Pulheim",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Claudia S. aus Hamm",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Florian S. aus Wuppertal",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Katharina C. aus Böblingen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Anton R. aus Peine",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sieht echt aus gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Sandra Z. aus Hanau",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Sabine E. aus Hamburg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Milan P. aus Darmstadt",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole F. aus Velbert",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Nico I. aus Monheim am Rhein",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Schöner Hingucker gefällt mir gut. Danke.",
    "customer_name": "Erik T. aus Filderstadt",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Bin zufrieden.",
    "customer_name": "Sandra N. aus Troisdorf",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Florian O. aus Waiblingen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Niklas Y. aus Eschweiler",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Sandra U. aus Hennef",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Nicole C. aus Görlitz",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Valentin V. aus Lingen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Anton E. aus Ludwigsburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne B. aus Mönchengladbach",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Hannes C. aus Bremerhaven",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Wunderschöne Deko gefällt mir gut. Super Shop.",
    "customer_name": "Dennis B. aus Köln",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole V. aus Tübingen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Vincent A. aus Dorsten",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Johannes M. aus Kaiserslautern",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Milan Y. aus Lingen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Ein tolles Geschenk.",
    "customer_name": "Samuel B. aus Wuppertal",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Daumen hoch!",
    "customer_name": "Susanne P. aus Hanau",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Tim A. aus Offenburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Emil O. aus Oberhausen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Anton T. aus Solingen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Entspannend gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Claudia R. aus Jena",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Für Erwachsene gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Matteo S. aus Augsburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Monika Q. aus Viersen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Matteo Y. aus Wiesbaden",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Sarah Y. aus München",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Entspannend gefällt mir gut. Super Shop.",
    "customer_name": "Tim U. aus Kamen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Christoph B. aus Plauen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa F. aus Freising",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Vielen Dank für den schnellen Service.",
    "customer_name": "Tanja T. aus Hannover",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Sieht echt aus gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Nicole J. aus Remscheid",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Lenny D. aus Pinneberg",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Felix T. aus Menden",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Hannes F. aus Kassel",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Justus A. aus Herten",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Kreativ gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Fabian Z. aus Rodgau",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Für Erwachsene gefällt mir gut. Super Shop.",
    "customer_name": "Stefanie T. aus Kerpen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Matteo G. aus Darmstadt",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Arne I. aus Langenhagen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Leo K. aus Hameln",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Niklas C. aus Bad Oeynhausen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "David J. aus Ambreg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Benedikt K. aus Rosenheim",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Emil H. aus Lingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Petra A. aus Bamberg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Lisa U. aus Böblingen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Johannes B. aus Lünen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Bin happy.",
    "customer_name": "Mats A. aus Straubing",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik E. aus Kleve",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nadine I. aus Greifswald",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Luis R. aus Zwickau",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Susanne T. aus Kaiserslautern",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Laura T. aus Arnsberg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Preis-Leistung stimmt hier.",
    "customer_name": "Milan E. aus Memmingen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Tobias O. aus Solingen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Tim D. aus Offenbach",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik G. aus Minden",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Leo O. aus Melle",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Kilian T. aus Lemgo",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Andrea T. aus Oldenburg",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Emil A. aus Kerpen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Jonas H. aus Würzburg",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Laura T. aus Marl",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nadine M. aus Heilbronn",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin rundum zufrieden.",
    "customer_name": "Lukas T. aus Schwäbisch Gmünd",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Birgit E. aus Elmshorn",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Top, weiter so.",
    "customer_name": "Julia G. aus Menden",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Ben G. aus Wesel",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Absolute Kaufempfehlung.",
    "customer_name": "Leo L. aus Alsdorf",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Adrian I. aus Gelsenkirchen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Valentin W. aus Dachau",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Farben gefällt mir gut. Top, weiter so.",
    "customer_name": "Tim J. aus Greifswald",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Freue mich schon auf das nächste Set.",
    "customer_name": "David C. aus Freiburg",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Danke.",
    "customer_name": "Emil O. aus Halle (Saale)",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Wunderschöne Deko gefällt mir gut. Top, weiter so.",
    "customer_name": "Sabine L. aus Bocholt",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Julian U. aus Hanau",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Kevin N. aus Marl",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Adrian C. aus Lünen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Entspannend gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Nicole V. aus Arnsberg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Schöner Hingucker gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Lisa S. aus Fulda",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Elias Z. aus Aachen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Sarah U. aus Bergisch Gladbach",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Anton R. aus Marburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Nicole Q. aus Karlsruhe",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Timo I. aus Braunschweig",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Bastian P. aus Arnsberg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anna N. aus Leonberg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Bastian N. aus Schwerin",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Moritz Y. aus Hamm",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Sieht echt aus gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Theo K. aus Straubing",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Noah K. aus Lüdenscheid",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Tanja K. aus Villingen-Schwenningen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Tom X. aus Oranienburg",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sabine U. aus Düsseldorf",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jonas Q. aus Troisdorf",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Monika X. aus Ambreg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Oskar D. aus Herford",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Marlon E. aus Wetzlar",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Tanja R. aus Rodgau",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Birgit D. aus Witten",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Felix H. aus Görlitz",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Sieht echt aus gefällt mir gut. Klare 10/10.",
    "customer_name": "Tobias A. aus Marburg",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Schöner Hingucker gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Christina Z. aus Schweinfurt",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Finn H. aus Herzogenrath",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Wunderschöne Deko gefällt mir gut. Daumen hoch!",
    "customer_name": "Anja O. aus Wuppertal",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Entspannend gefällt mir gut. Klare 10/10.",
    "customer_name": "Christina B. aus Cottbus",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Nadine U. aus Heinsberg",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Nico Q. aus Speyer",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Anja U. aus Hürth",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Petra I. aus Bietigheim-Bissingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Maria G. aus Eschweiler",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Samuel P. aus Kassel",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Luca F. aus Meerbusch",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Einfach klasse.",
    "customer_name": "Andrea J. aus Ratingen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Petra S. aus Emden",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Lukas R. aus Lemgo",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Timo E. aus Krefeld",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Wunderschöne Deko gefällt mir gut. Daumen hoch!",
    "customer_name": "Mats N. aus Ahlen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Erik Q. aus Kaufbeuren",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Wunderschöne Deko gefällt mir gut. Bin happy.",
    "customer_name": "Nicole K. aus Weimar",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Susanne M. aus Paderborn",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Anna U. aus Leonberg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Stefanie D. aus Sindelfingen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Samuel W. aus Herford",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Katharina T. aus Saarbrücken",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Emil E. aus Duisburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Luca H. aus Bergkamen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Theo K. aus Hof",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Alexander V. aus Schwerin",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Wunderschöne Deko gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Max H. aus Erfurt",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Bin zufrieden.",
    "customer_name": "Anna L. aus Bad Oeynhausen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Farben gefällt mir gut. Bin happy.",
    "customer_name": "Max V. aus Friedrichshafen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Henry T. aus Göttingen",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Justus Q. aus Stralsund",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Tanja S. aus Leinfelden-Echterdingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Luis J. aus Wiesbaden",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Johannes O. aus Heidenheim",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Petra T. aus Stolberg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo Z. aus Frankfurt (Oder)",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Paul C. aus Rastatt",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Sascha X. aus Delmenhorst",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Monika T. aus Flensburg",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Max X. aus Bremerhaven",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Entspannend gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Valentin H. aus Recklinghausen",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Jonas Z. aus Wunstorf",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Sabine S. aus Hilden",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Sandra M. aus Dresden",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin rundum zufrieden.",
    "customer_name": "Valentin N. aus Straubing",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pflanzen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Anton U. aus Troisdorf",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Kerstin K. aus Heidenheim",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Moritz X. aus Bad Oeynhausen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Nicole J. aus Frankfurt",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Sieht echt aus gefällt mir gut. Super Shop.",
    "customer_name": "Erik D. aus Kiel",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Birgit U. aus Eschweiler",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Bin happy.",
    "customer_name": "Andrea R. aus Pulheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Arne V. aus Saarbrücken",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Entspannend gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Robin G. aus Gera",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Robin L. aus Ahlen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Lisa U. aus Borken",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Entspannend gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Kilian M. aus Ratingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Emil O. aus Pforzheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Erik K. aus Mannheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Samuel A. aus Iserlohn",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian G. aus Neustadt an der Weinstraße",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Tolle Farben gefällt mir gut. Super Shop.",
    "customer_name": "Tanja R. aus Erlangen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Moritz T. aus Menden",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Bin happy.",
    "customer_name": "Nico W. aus Hof",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Philipp X. aus Regensburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Monika N. aus Fulda",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt Z. aus Ludwigsburg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Vincent W. aus Frankfurt",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo Q. aus Ambreg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Jan O. aus Detmold",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Julia S. aus Lüdenscheid",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Felix G. aus Kaufbeuren",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kreativ gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Samuel L. aus Bornheim",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole U. aus Remscheid",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Susanne R. aus Wolfenbüttel",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Emil X. aus Frechen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Nico L. aus Wuppertal",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Nadine Z. aus Euskirchen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Adrian L. aus Leinfelden-Echterdingen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Top, weiter so.",
    "customer_name": "Birgit I. aus Mönchengladbach",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Ben J. aus Hildesheim",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Für Erwachsene gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Florian P. aus Minden",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Preis-Leistung stimmt hier.",
    "customer_name": "Anna V. aus Melle",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Laura U. aus Borken",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Ben C. aus Leonberg",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Kerstin D. aus Nettetal",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Felix U. aus Lünen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Katharina O. aus Würzburg",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats O. aus Dortmund",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Kevin B. aus Ludwigsburg",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Kreativ gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Ben C. aus Witten",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Christina K. aus Bornheim",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dominik M. aus Flensburg",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julia D. aus Bayreuth",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Luis X. aus Aalen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Kerstin X. aus Wiesbaden",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Jan Y. aus Paderborn",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Fabian C. aus Emden",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Tolle Farben gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Timo Q. aus Grevenbroich",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Bastian S. aus Wiesbaden",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Finn N. aus Lippstadt",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Theo Z. aus Unna",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Daumen hoch!",
    "customer_name": "Hannes B. aus Minden",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra Q. aus Sindelfingen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Hannes K. aus Freising",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Sieht echt aus gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Emil O. aus Landshut",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Elias O. aus Regensburg",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lukas S. aus Erftstadt",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Jonas P. aus Solingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pflanzen gefällt mir gut. Bin happy.",
    "customer_name": "Kerstin Y. aus Neunkirchen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Fabian X. aus Darmstadt",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Simon F. aus Würzburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas X. aus Halle (Saale)",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kevin T. aus Wolfenbüttel",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Pflanzen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian L. aus Oldenburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt Q. aus Heidenheim",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Luis Y. aus Dresden",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Jonas E. aus Bad Oeynhausen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Danke!",
    "customer_name": "Nicole X. aus Aurich",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Lukas J. aus Salzgitter",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico E. aus Nordhorn",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Einfach klasse.",
    "customer_name": "Monika I. aus Dormagen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. So macht LEGO Spaß.",
    "customer_name": "Felix N. aus Ludwigsburg",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Entspannend gefällt mir gut. Klare 10/10.",
    "customer_name": "Katharina E. aus Delmenhorst",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Jan V. aus Borken",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia P. aus Gera",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Lisa M. aus Offenbach",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Laura T. aus Kleve",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Katharina J. aus Kamen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Simon R. aus Oberhausen",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Yannick I. aus Hof",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Justus X. aus Aurich",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Kevin X. aus Unna",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Henry J. aus Schwerin",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Emil Q. aus Euskirchen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Für Fans ein absolutes Muss.",
    "customer_name": "Bastian L. aus Jena",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Niklas B. aus Soest",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Liam T. aus Hof",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Leo G. aus Stolberg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Für Erwachsene gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Anna T. aus Flensburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Erik S. aus Siegen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Schöner Hingucker gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Henry C. aus Kleve",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis I. aus Aalen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "David B. aus Hamburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Vincent W. aus Potsdam",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Daumen hoch!",
    "customer_name": "Laura F. aus Friedrichshafen",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Super Shop.",
    "customer_name": "Stefanie S. aus Hattingen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Sieht echt aus gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias U. aus Bad Kreuznach",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Susanne W. aus Pinneberg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Andrea W. aus Traunstein",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Super Shop.",
    "customer_name": "Erik Q. aus Marburg",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Sieht echt aus gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Kevin Z. aus Konstanz",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "David S. aus Gladbeck",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Moritz F. aus Kamen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pflanzen gefällt mir gut. Super Shop.",
    "customer_name": "Ben A. aus Friedrichshafen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Ben B. aus Speyer",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Alles richtig gemacht.",
    "customer_name": "Florian L. aus Castrop-Rauxel",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Maximilian V. aus Passau",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Schöner Hingucker gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny K. aus Alsdorf",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Birgit O. aus Paderborn",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats C. aus Garbsen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Felix C. aus Bad Oeynhausen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Birgit Y. aus Speyer",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Luca F. aus Koblenz",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Nadine E. aus Erfurt",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Kreativ gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Emil L. aus Oberursel",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christina A. aus Hof",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Simon O. aus Alsdorf",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Moritz J. aus Eisenach",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Liam G. aus Hof",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Tim Z. aus Salzgitter",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Emil W. aus Straubing",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Für Erwachsene gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Dennis Z. aus Stuttgart",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Wunderschöne Deko gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Emil F. aus Bad Oeynhausen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "David T. aus Langenhagen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Christoph S. aus Mülheim an der Ruhr",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Vincent C. aus Neunkirchen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Arne D. aus Schwäbisch Gmünd",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Tolle Farben gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim S. aus Bergisch Gladbach",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Jannik U. aus Dinslaken",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Yannick J. aus Hannover",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Entspannend gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Yannick K. aus Gütersloh",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon T. aus Weinheim",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Stefanie R. aus Sankt Augustin",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Hannes I. aus Freiburg",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Liam L. aus Villingen-Schwenningen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Petra G. aus Salzgitter",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Anja R. aus Mannheim",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Nicole A. aus Greifswald",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Entspannend gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Henry A. aus Hagen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Kreativ gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Kerstin V. aus Lemgo",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Jonas P. aus Brandenburg an der Havel",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Anja R. aus Borken",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Florian P. aus München",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Johannes X. aus Menden",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Milan V. aus Memmingen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Für Erwachsene gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Lukas O. aus Rostock",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Finn G. aus Unna",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Tobias P. aus Flensburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Philipp Y. aus Ravensburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Jonas G. aus Hilden",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Danke!",
    "customer_name": "Sandra Q. aus Duisburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Henry Q. aus Brandenburg an der Havel",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Anton E. aus Oberhausen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Marlon F. aus Ratingen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Für Fans ein absolutes Muss.",
    "customer_name": "Christoph K. aus Neustadt an der Weinstraße",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Pflanzen gefällt mir gut. Danke.",
    "customer_name": "Nadine H. aus Remscheid",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Liam L. aus Stralsund",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Johannes G. aus Kassel",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Leo V. aus Dortmund",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Sieht echt aus gefällt mir gut. Danke.",
    "customer_name": "Anna A. aus Erfurt",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Alexander U. aus Stolberg",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Liam V. aus Darmstadt",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Ben M. aus Herzogenrath",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Julia L. aus Bad Oeynhausen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Oskar I. aus Frechen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Liam L. aus Eisenach",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Niklas E. aus Oberursel",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Milan W. aus Hamm",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Monika W. aus Hamburg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Julia B. aus Landshut",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Marlon Z. aus Dachau",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Pflanzen gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Timo Q. aus Hennef",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Katharina I. aus Offenbach",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Wunderschöne Deko gefällt mir gut. Bin happy.",
    "customer_name": "Simon U. aus Herten",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Jannik X. aus Schweinfurt",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Pflanzen gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Tom J. aus Bergkamen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Ben B. aus Brandenburg an der Havel",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Elias Z. aus Krefeld",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Entspannend gefällt mir gut. Top, weiter so.",
    "customer_name": "Tanja F. aus Bielefeld",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Sieht echt aus gefällt mir gut. Bin happy.",
    "customer_name": "Dennis A. aus Göppingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Monika J. aus Oldenburg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Tanja X. aus Zwickau",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Vincent K. aus Reutlingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Petra U. aus Neuss",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Sabine W. aus Herzogenrath",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Sieht echt aus gefällt mir gut. Daumen hoch!",
    "customer_name": "Ben X. aus Gera",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Julia H. aus Ravensburg",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Theo A. aus Hildesheim",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Malte N. aus Neunkirchen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Emil O. aus Bergheim",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Alexander G. aus Schwerin",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Leon S. aus Delmenhorst",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Theo J. aus Würzburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Einfach klasse.",
    "customer_name": "Matteo D. aus Hilden",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Nico Q. aus Münster",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul V. aus Wesel",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Einfach klasse.",
    "customer_name": "Christina H. aus Göppingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Sarah N. aus Traunstein",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Entspannend gefällt mir gut. Super Shop.",
    "customer_name": "Stefanie O. aus Leonberg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Lukas F. aus Aschaffenburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Lisa I. aus Rodgau",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Benedikt U. aus Emden",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Susanne S. aus Rheda-Wiedenbrück",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Dominik D. aus Viersen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Jannik T. aus Dessau-Roßlau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Bastian N. aus Lingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Samuel A. aus Stuttgart",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin rundum zufrieden.",
    "customer_name": "Nicole Y. aus Dülmen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Pflanzen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Erik Q. aus Heilbronn",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Tobias R. aus Flensburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Tim E. aus Moers",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Erik G. aus Berlin",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Lisa R. aus Chemnitz",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Luis U. aus Aalen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Kilian P. aus Bergheim",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Julian O. aus Wetzlar",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Monika H. aus Karlsruhe",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Niklas N. aus Essen",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine Q. aus Duisburg",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Entspannend gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Sascha A. aus Schweinfurt",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Valentin V. aus Hildesheim",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Jonas S. aus Osnabrück",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Alexander M. aus Frankfurt (Oder)",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Paul J. aus Rottenburg",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Tom W. aus Herne",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Wunderschöne Deko gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Leo J. aus Hamm",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Florian Q. aus Heinsberg",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Sarah B. aus Pinneberg",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Noah G. aus Bruchsal",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Arne H. aus Cottbus",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Julia O. aus Bremerhaven",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Lisa X. aus Buxtehude",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Maximilian P. aus Chemnitz",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Wunderschöne Deko gefällt mir gut. Daumen hoch!",
    "customer_name": "Max K. aus Bielefeld",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Jonas I. aus Stolberg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Pflanzen gefällt mir gut. Bin happy.",
    "customer_name": "Liam K. aus Frankfurt (Oder)",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Sieht echt aus gefällt mir gut. Daumen hoch!",
    "customer_name": "David G. aus Bonn",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Wunderschöne Deko gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Theo R. aus Aalen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin happy.",
    "customer_name": "Justus V. aus Soest",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Sieht echt aus gefällt mir gut. Danke.",
    "customer_name": "Anna F. aus Detmold",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Top.",
    "customer_name": "Dennis R. aus Bad Homburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "David J. aus Weinheim",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Simon M. aus Leipzig",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Tobias R. aus Hamburg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Max J. aus Rodgau",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Theo P. aus Pinneberg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Julian N. aus Pforzheim",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Ein tolles Geschenk.",
    "customer_name": "Birgit N. aus Wiesbaden",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Christoph K. aus Schwerin",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Samuel S. aus Baden-Baden",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Schöner Hingucker gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Moritz C. aus Böblingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Niklas E. aus Elmshorn",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Wunderschöne Deko gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Noah G. aus Dresden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha U. aus Frechen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Valentin A. aus Aalen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Bin rundum zufrieden.",
    "customer_name": "Nadine N. aus Lörrach",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Nicole U. aus Wiesbaden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Christina J. aus Hamburg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Mats L. aus Schweinfurt",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Petra P. aus Hilden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian N. aus Unna",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Monika O. aus Kamen",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Bin zufrieden.",
    "customer_name": "Julia N. aus Bornheim",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Robin B. aus Nürnberg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Pflanzen gefällt mir gut. Daumen hoch!",
    "customer_name": "Leo H. aus Weimar",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Niklas R. aus Emden",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Malte L. aus Straubing",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Timo S. aus Böblingen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Bin happy.",
    "customer_name": "Johannes D. aus Brandenburg an der Havel",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Arne S. aus Delmenhorst",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Ben Z. aus Lüneburg",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Entspannend gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Birgit R. aus Wesel",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Philipp Y. aus Gronau",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Benedikt R. aus Chemnitz",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kilian S. aus Bietigheim-Bissingen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Yannick X. aus Frechen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Kilian E. aus Paderborn",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Maria I. aus Ludwigshafen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Erik H. aus Grevenbroich",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Elias P. aus Worms",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Entspannend gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Tobias G. aus Neu-Ulm",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Lukas R. aus Darmstadt",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Wunderschöne Deko gefällt mir gut. Super Shop.",
    "customer_name": "Julia W. aus Wolfenbüttel",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Susanne X. aus Recklinghausen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Theo F. aus Lingen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Schöner Hingucker gefällt mir gut. Bin happy.",
    "customer_name": "Max S. aus Bottrop",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Freue mich schon auf das nächste Set.",
    "customer_name": "Finn W. aus Neustadt an der Weinstraße",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sarah M. aus Lübeck",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Jannik F. aus Lüneburg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Henry W. aus Gießen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Sascha A. aus Bad Oeynhausen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Justus B. aus Jena",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Yannick I. aus Marburg",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. So macht LEGO Spaß.",
    "customer_name": "Laura D. aus Aschaffenburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Farben gefällt mir gut. Super Shop.",
    "customer_name": "Anton Q. aus Nettetal",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Wunderschöne Deko gefällt mir gut. Danke.",
    "customer_name": "Fabian V. aus Eisenach",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny G. aus Grevenbroich",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Sascha C. aus Alsdorf",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Max J. aus Gronau",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Freue mich schon auf das nächste Set.",
    "customer_name": "Katharina M. aus Ahlen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Jannik B. aus Bergheim",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Kerstin U. aus Monheim am Rhein",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Laura C. aus Waiblingen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis T. aus Lahr",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Monika I. aus Pulheim",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Monika D. aus Bottrop",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Sascha E. aus Borken",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar W. aus Norderstedt",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Yannick X. aus Elmshorn",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Tanja B. aus Unna",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Erik Z. aus Pforzheim",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Bastian T. aus Darmstadt",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Yannick R. aus Sankt Augustin",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Maximilian H. aus Aschaffenburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Sandra V. aus Langenhagen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Susanne M. aus Waiblingen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Maximilian F. aus Pulheim",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Stefanie T. aus Nettetal",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Schöner Hingucker gefällt mir gut. Top, weiter so.",
    "customer_name": "Felix V. aus Osnabrück",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Sandra G. aus Leverkusen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Einfach klasse.",
    "customer_name": "Sarah Q. aus Hildesheim",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Top.",
    "customer_name": "Max V. aus Aalen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Schöner Hingucker gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Monika Q. aus Gummersbach",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas D. aus Greifswald",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Dennis V. aus Kempten",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Adrian D. aus Rüsselsheim",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Hannes E. aus Bad Kreuznach",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julian M. aus Schwäbisch Gmünd",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Marlon J. aus Saarbrücken",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top.",
    "customer_name": "Noah F. aus Oranienburg",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Luis T. aus Kamen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Melanie Y. aus Velbert",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Lisa D. aus Moers",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Florian U. aus Lünen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Schöner Hingucker gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Hannes F. aus Frankfurt",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Maria R. aus Göppingen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Yannick Z. aus Frankfurt",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anna Z. aus Waiblingen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie M. aus Chemnitz",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Sabine E. aus Düren",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Oskar A. aus Ludwigshafen",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Schöner Hingucker gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Monika C. aus Baden-Baden",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Arne R. aus Erkrath",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Maria D. aus Bremerhaven",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Absolute Kaufempfehlung.",
    "customer_name": "Milan E. aus Böblingen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Entspannend gefällt mir gut. Danke.",
    "customer_name": "Adrian G. aus Greifswald",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Tom X. aus Moers",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Schöner Hingucker gefällt mir gut. Einfach klasse.",
    "customer_name": "Hannes E. aus Erfurt",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Tolle Farben gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Luca M. aus Bremen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Schöner Hingucker gefällt mir gut. Bin happy.",
    "customer_name": "Ben F. aus Münster",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Ben C. aus Langenhagen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Paul U. aus Berlin",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Julian B. aus Rosenheim",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo S. aus Göttingen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Monika Y. aus Bremen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Claudia F. aus Wuppertal",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Arne L. aus Landshut",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Henry C. aus Passau",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Theo T. aus Rastatt",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Ein tolles Geschenk.",
    "customer_name": "Justus S. aus Gladbeck",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jannik C. aus Heinsberg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Samuel F. aus Magdeburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Kilian P. aus Dinslaken",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Erik K. aus Frechen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Oskar S. aus Eisenach",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Sarah G. aus Lübeck",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Samuel N. aus Filderstadt",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Finn F. aus Pulheim",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Julian H. aus Langenfeld",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Noah S. aus Wiesbaden",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Bastian G. aus Schwäbisch Gmünd",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Sandra Y. aus Memmingen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Daumen hoch!",
    "customer_name": "Henry R. aus Bad Kreuznach",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Justus R. aus Aachen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Christina V. aus Koblenz",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Adrian C. aus Bielefeld",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Malte D. aus Leverkusen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Top, weiter so.",
    "customer_name": "Malte J. aus Neuss",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Bin happy.",
    "customer_name": "Nicole O. aus Kempten",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Moritz S. aus Eisenach",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Stefanie K. aus Jena",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Vielen Dank für den schnellen Service.",
    "customer_name": "Yannick K. aus Wiesbaden",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Robin X. aus Herne",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Robin T. aus Dorsten",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Florian Z. aus Lüneburg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Jan F. aus Düren",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Jonas D. aus Gummersbach",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Petra F. aus Mannheim",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "David Y. aus Hameln",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Bastian H. aus Bad Homburg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Einfach klasse.",
    "customer_name": "Theo Q. aus Herford",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Sarah W. aus Kamen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Absolute Kaufempfehlung.",
    "customer_name": "Christina Y. aus Lemgo",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Malte B. aus Arnsberg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Fabian F. aus Jena",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Malte M. aus Hildesheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Tobias P. aus Brandenburg an der Havel",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Sabine U. aus Aachen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Katharina G. aus Aurich",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Wunderschöne Deko gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Marlon P. aus Fellbach",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Super Shop.",
    "customer_name": "Justus K. aus Bocholt",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Fabian Y. aus Minden",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin E. aus Bonn",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Noah S. aus Böblingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Wunderschöne Deko gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tobias G. aus Dinslaken",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Wunderschöne Deko gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lenny M. aus Fürth",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Julian J. aus Erftstadt",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Luis L. aus Albstadt",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Melanie R. aus Bruchsal",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Ben Y. aus Remscheid",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Tanja O. aus Dormagen",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Dennis O. aus Stuttgart",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Malte P. aus Kiel",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Schöner Hingucker gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Dominik F. aus Buxtehude",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Pflanzen gefällt mir gut. Klare 10/10.",
    "customer_name": "Luis U. aus Emden",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich.",
    "customer_name": "Kilian N. aus Mönchengladbach",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Katharina A. aus Emden",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo F. aus Castrop-Rauxel",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Absolute Kaufempfehlung.",
    "customer_name": "Sarah S. aus Erfurt",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Anna D. aus Rottenburg",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Maximilian Q. aus Krefeld",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Paul L. aus Bergisch Gladbach",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Schöner Hingucker gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tim P. aus Passau",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Liam E. aus Gladbeck",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik K. aus Kaiserslautern",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Leon T. aus Dorsten",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Top.",
    "customer_name": "Hannes X. aus Zwickau",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Erik G. aus Bayreuth",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Max Y. aus Remscheid",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Tim N. aus Jena",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin happy.",
    "customer_name": "Simon M. aus Bad Oeynhausen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Melanie S. aus Erkrath",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Top.",
    "customer_name": "Dominik Q. aus Bad Salzuflen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Lukas L. aus Ambreg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Sabine C. aus Osnabrück",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Dominik M. aus Elmshorn",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Arne M. aus Meerbusch",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Emil L. aus Hof",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Tanja Y. aus Euskirchen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Florian Y. aus Kaiserslautern",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Johannes M. aus Bad Salzuflen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Claudia R. aus Nettetal",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Für Fans ein absolutes Muss.",
    "customer_name": "Luis F. aus Erkrath",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Moritz E. aus Garbsen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Susanne L. aus Delmenhorst",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Laura A. aus Gladbeck",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Danke!",
    "customer_name": "Petra L. aus Rastatt",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Julia J. aus Rosenheim",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Anja B. aus Ludwigsburg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Noah A. aus Wolfsburg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Daumen hoch!",
    "customer_name": "Luca L. aus Frankfurt",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja W. aus Straubing",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Birgit T. aus Konstanz",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Emil E. aus Stuttgart",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Jan K. aus Leonberg",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Max H. aus Kerpen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Nadine N. aus Karlsruhe",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Für Fans ein absolutes Muss.",
    "customer_name": "Luca Z. aus Norderstedt",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Laura W. aus Potsdam",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Lenny O. aus Rostock",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Nico Z. aus Bad Oeynhausen",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Noah J. aus Sankt Augustin",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Dominik T. aus Erkrath",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Dennis X. aus Unna",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Petra B. aus Dorsten",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Danke.",
    "customer_name": "Leo D. aus Hürth",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Bastian H. aus Herne",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Freue mich schon auf das nächste Set.",
    "customer_name": "Anja E. aus Ulm",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Vincent J. aus Wesel",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Sabine V. aus Esslingen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Anja Y. aus Rostock",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Top.",
    "customer_name": "Maria K. aus Kerpen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Stefanie W. aus Stuttgart",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Yannick Z. aus Minden",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Leon W. aus Frechen",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Alexander M. aus Iserlohn",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Henry K. aus Erftstadt",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Andrea X. aus Freising",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Sabine F. aus Lüneburg",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "David G. aus Rodgau",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Nicole J. aus Hilden",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luca B. aus Wesel",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Tom K. aus Alsdorf",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Birgit D. aus Dormagen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Niklas O. aus Detmold",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Christina O. aus Schwerin",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Emil F. aus Hamm",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia L. aus Pinneberg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Lisa F. aus Hilden",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Entspannend gefällt mir gut. Bin happy.",
    "customer_name": "Moritz T. aus Rodgau",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Adrian Z. aus Lünen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia B. aus Rosenheim",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kevin X. aus Memmingen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Bin zufrieden.",
    "customer_name": "Lenny O. aus Marl",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Pflanzen gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Bastian C. aus Neuss",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Stefanie G. aus Gronau",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Anja R. aus Göttingen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Vincent B. aus Wilhelmshaven",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Stefanie I. aus Flensburg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Luis V. aus Erlangen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Niklas R. aus Freising",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Danke.",
    "customer_name": "Vincent R. aus Bremen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Tolle Farben gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Sabine N. aus Rheine",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Schöner Hingucker gefällt mir gut. Bin happy.",
    "customer_name": "Julia K. aus Wiesbaden",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Top.",
    "customer_name": "Julian E. aus Baden-Baden",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Kreativ gefällt mir gut. Top, weiter so.",
    "customer_name": "Milan A. aus Albstadt",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Lenny V. aus Celle",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Felix J. aus Bergheim",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Marlon C. aus Flensburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik B. aus Hameln",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Elias F. aus Nettetal",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lisa U. aus Mülheim an der Ruhr",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Stefanie H. aus Dinslaken",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Alexander Q. aus Bornheim",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Luca B. aus Wesel",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Christoph W. aus Remscheid",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Sieht echt aus gefällt mir gut. Top, weiter so.",
    "customer_name": "Niklas Z. aus Ibbenbüren",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria Q. aus Rottenburg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Für Erwachsene gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Moritz Z. aus Waiblingen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Sandra J. aus Kassel",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Paul H. aus Krefeld",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Tim N. aus Neu-Ulm",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Marlon X. aus Waiblingen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Christina B. aus Frankfurt",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Pflanzen gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam K. aus Buxtehude",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Fabian X. aus Solingen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nico D. aus Nürnberg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Sascha G. aus Rastatt",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Maximilian J. aus Minden",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Mats K. aus Böblingen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leon K. aus Gelsenkirchen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. So macht LEGO Spaß.",
    "customer_name": "Robin I. aus Detmold",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Sabine O. aus Frechen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Tolle Farben gefällt mir gut. Danke.",
    "customer_name": "Adrian N. aus Hattingen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jonas P. aus Gütersloh",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Alexander Q. aus Potsdam",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Wunderschöne Deko gefällt mir gut. Top, weiter so.",
    "customer_name": "Leo B. aus Reutlingen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Leon U. aus Bergheim",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Valentin I. aus Gummersbach",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Max Y. aus Leipzig",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Paul P. aus Viersen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Melanie Q. aus Lübeck",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Maria T. aus Karlsruhe",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Andrea I. aus Arnsberg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Claudia Q. aus Mainz",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Alexander N. aus Reutlingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Kilian Y. aus Witten",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Jonas I. aus Troisdorf",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis F. aus Nettetal",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Fabian M. aus Bremen",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Luca R. aus Hameln",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Kerstin U. aus Potsdam",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pflanzen gefällt mir gut. Klare 10/10.",
    "customer_name": "Erik F. aus Brandenburg an der Havel",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Melanie H. aus Schwäbisch Gmünd",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Hat sich definitiv gelohnt.",
    "customer_name": "Liam I. aus Marburg",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Kevin C. aus Waiblingen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit C. aus Herzogenrath",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon X. aus Dinslaken",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Timo K. aus Reutlingen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Für Erwachsene gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Sarah F. aus Halle (Saale)",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Jonas M. aus Heilbronn",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Timo Q. aus Baden-Baden",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Maximilian J. aus Wunstorf",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra R. aus Düren",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Für Erwachsene gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Dominik A. aus Langenhagen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Julia B. aus Aalen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Top.",
    "customer_name": "Leo Z. aus Bamberg",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Tolle Farben gefällt mir gut. Super Shop.",
    "customer_name": "Petra Y. aus Bruchsal",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Susanne U. aus Iserlohn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Henry O. aus Koblenz",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Sabine B. aus Herzogenrath",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Lenny A. aus Paderborn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Pflanzen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Jan V. aus Baden-Baden",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Für Erwachsene gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Matteo Z. aus Rosenheim",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Emil T. aus Bamberg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Wunderschöne Deko gefällt mir gut. Danke.",
    "customer_name": "Sarah M. aus Konstanz",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Kilian L. aus Aurich",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Christoph F. aus Paderborn",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Kilian H. aus Bergheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Luca R. aus Reutlingen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Florian R. aus Regensburg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Niklas U. aus Bamberg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Nico F. aus Bornheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny N. aus Stolberg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Laura A. aus Dachau",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Johannes T. aus Dresden",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Julian U. aus Gütersloh",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Samuel N. aus Hilden",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Bastian F. aus Kerpen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Adrian V. aus Gera",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Yannick D. aus Aschaffenburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Birgit Z. aus Görlitz",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Sarah M. aus Lingen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Theo G. aus Sankt Augustin",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Entspannend gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kerstin V. aus Frankfurt",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Top.",
    "customer_name": "Julian V. aus Rosenheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Pflanzen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Milan E. aus Emden",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Johannes E. aus Münster",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Finn M. aus Greifswald",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Leo X. aus Bad Kreuznach",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Lisa G. aus Melle",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Philipp V. aus Celle",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Julia C. aus Memmingen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Christina J. aus Langenfeld",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Adrian J. aus Leipzig",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Christoph T. aus Lübeck",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Kreativ gefällt mir gut. Klare 10/10.",
    "customer_name": "Laura J. aus Gera",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Niklas K. aus Weinheim",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny E. aus Brandenburg an der Havel",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Super Shop.",
    "customer_name": "Johannes Z. aus Erkrath",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Marlon C. aus Neumünster",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Für Erwachsene gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia X. aus Heilbronn",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Anja X. aus Rosenheim",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Julian S. aus Lüdenscheid",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Niklas Y. aus Tübingen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin rundum zufrieden.",
    "customer_name": "Philipp R. aus Melle",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Schöner Hingucker gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Arne C. aus Kempten",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats J. aus Recklinghausen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Bastian C. aus Moers",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Kevin J. aus Zwickau",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Arne J. aus Lübeck",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Henry X. aus Kerpen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Oskar N. aus Bayreuth",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Freue mich schon auf das nächste Set.",
    "customer_name": "Ben K. aus Kaufbeuren",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Schöner Hingucker gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Claudia T. aus Rottenburg",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Danke!",
    "customer_name": "Laura J. aus Weinheim",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Benedikt D. aus Solingen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Nadine B. aus Paderborn",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Sarah O. aus Neunkirchen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Lisa C. aus Rottenburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Milan Q. aus Detmold",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Für Fans ein absolutes Muss.",
    "customer_name": "Monika X. aus Bergkamen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Wunderschöne Deko gefällt mir gut. Super Shop.",
    "customer_name": "Birgit W. aus Plauen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Pflanzen gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Anton Z. aus Langenhagen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Samuel W. aus Halle (Saale)",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lenny D. aus Buxtehude",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Yannick Q. aus Grevenbroich",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Pflanzen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Ben O. aus Buxtehude",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Alexander T. aus Gießen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Finn P. aus Heinsberg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Petra R. aus Neumünster",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Jannik D. aus Lüneburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Wunderschöne Deko gefällt mir gut. Super Shop.",
    "customer_name": "Sabine A. aus Garbsen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Petra W. aus Langenfeld",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Für Erwachsene gefällt mir gut. Daumen hoch!",
    "customer_name": "Tom B. aus Lüneburg",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne M. aus Neustadt an der Weinstraße",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Entspannend gefällt mir gut. Klare 10/10.",
    "customer_name": "Oskar C. aus Soest",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Theo G. aus Oberursel",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Fabian W. aus Berlin",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Julia X. aus Bad Salzuflen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Sarah Y. aus Weimar",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Luca K. aus Kaufbeuren",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Nicole C. aus Neuwied",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Tobias S. aus Nettetal",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon Z. aus Hannover",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Christoph I. aus Hannover",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Tolle Farben gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Tim X. aus Bergheim",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Für Erwachsene gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon F. aus Nettetal",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Anja L. aus Pforzheim",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Schöner Hingucker gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Kevin L. aus Ingolstadt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Ben V. aus Velbert",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "David E. aus Offenburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Andrea A. aus Worms",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Benedikt H. aus Solingen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Entspannend gefällt mir gut. Super Shop.",
    "customer_name": "Luis T. aus Straubing",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Maria C. aus Neunkirchen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Sarah C. aus Hanau",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Lukas A. aus Ludwigsburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Einfach klasse.",
    "customer_name": "Philipp Z. aus Rostock",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Christina K. aus Erftstadt",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Julia C. aus Lemgo",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Kilian I. aus Mannheim",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Simon J. aus Erftstadt",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Für Erwachsene gefällt mir gut. Klare 10/10.",
    "customer_name": "Jan P. aus Potsdam",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Stefanie F. aus Memmingen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Für Erwachsene gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Julia D. aus Neumünster",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Monika A. aus Lippstadt",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia X. aus Krefeld",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Jannik R. aus Neustadt an der Weinstraße",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Maximilian G. aus Reutlingen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Kevin U. aus Göppingen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine X. aus Aurich",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Anna I. aus Ravensburg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Julia Z. aus Hof",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Claudia K. aus Iserlohn",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Samuel B. aus Alsdorf",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Moritz R. aus Lünen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "David A. aus Bergisch Gladbach",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Simon G. aus Schweinfurt",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Für Erwachsene gefällt mir gut. Bin happy.",
    "customer_name": "Ben D. aus Hof",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Erik P. aus Kempten",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Theo P. aus Münster",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Entspannend gefällt mir gut. Daumen hoch!",
    "customer_name": "Leo V. aus Hilden",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Wunderschöne Deko gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Oskar Y. aus Görlitz",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Kreativ gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Robin N. aus Karlsruhe",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Philipp B. aus Schwerin",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Dominik X. aus Rheda-Wiedenbrück",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea M. aus Stolberg",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Henry R. aus Hof",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Anja M. aus Unna",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Entspannend gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Maximilian I. aus Esslingen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Philipp B. aus Ambreg",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Luca R. aus Remscheid",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Anton C. aus Traunstein",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Kerstin P. aus Münster",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Jan H. aus Neuwied",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Schöner Hingucker gefällt mir gut. Bin happy.",
    "customer_name": "Jonas F. aus Darmstadt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Birgit W. aus Hamburg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Finn I. aus Zwickau",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Luca G. aus Filderstadt",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Johannes Z. aus Düren",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Pflanzen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Julia Q. aus Münster",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Entspannend gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Christoph M. aus Krefeld",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Entspannend gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Melanie A. aus Mülheim an der Ruhr",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Petra B. aus Weimar",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Jan C. aus Rheine",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Andrea N. aus Frankfurt",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Susanne C. aus Ravensburg",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian T. aus Herford",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Nico N. aus Tübingen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Anna D. aus Oberhausen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Erik P. aus Rostock",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Farben gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Max X. aus Aalen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Tolle Farben gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Nadine E. aus Dinslaken",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Valentin S. aus Aschaffenburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Luis V. aus Rodgau",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Lukas C. aus Lippstadt",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Niklas F. aus Würzburg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Einfach klasse.",
    "customer_name": "Arne O. aus Berlin",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sieht echt aus gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Luis Q. aus Filderstadt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Tolle Farben gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Maria H. aus Emden",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Pflanzen gefällt mir gut. Top, weiter so.",
    "customer_name": "Sandra I. aus Gelsenkirchen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Anja O. aus Gummersbach",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Matteo L. aus Göttingen",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Andrea O. aus Darmstadt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leon S. aus Hattingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin rundum zufrieden.",
    "customer_name": "Maria W. aus Görlitz",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Für Erwachsene gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton V. aus Dresden",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine V. aus Minden",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Felix T. aus Konstanz",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Bin zufrieden.",
    "customer_name": "Robin L. aus Neustadt an der Weinstraße",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Yannick D. aus Zwickau",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Preis-Leistung stimmt hier.",
    "customer_name": "Simon D. aus Memmingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Maria R. aus Heidenheim",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Für Erwachsene gefällt mir gut. Klare 10/10.",
    "customer_name": "Andrea W. aus Göppingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Lenny T. aus Göppingen",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Top.",
    "customer_name": "Arne T. aus Mainz",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Wunderschöne Deko gefällt mir gut. Einfach klasse.",
    "customer_name": "Jan V. aus Straubing",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Finn L. aus Speyer",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Sieht echt aus gefällt mir gut. Top, weiter so.",
    "customer_name": "Elias O. aus Düsseldorf",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra Y. aus Bonn",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Danke!",
    "customer_name": "Paul N. aus Hof",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Klare 10/10.",
    "customer_name": "Stefanie Y. aus Lübeck",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Pflanzen gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Monika B. aus Euskirchen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Leon Q. aus Lübeck",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Sandra V. aus Gronau",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix T. aus Wunstorf",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Bastian T. aus Marl",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. So macht LEGO Spaß.",
    "customer_name": "Justus V. aus Bad Homburg",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leon I. aus Rosenheim",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Matteo F. aus Mönchengladbach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Schöner Hingucker gefällt mir gut. Super Shop.",
    "customer_name": "Christoph K. aus Gummersbach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar O. aus Lahr",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin happy.",
    "customer_name": "Sarah Z. aus Peine",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Matteo B. aus Pinneberg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Timo Z. aus Flensburg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Sabine W. aus Meerbusch",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Tanja B. aus Bad Salzuflen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Noah K. aus Hagen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Benedikt Z. aus Ibbenbüren",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Vincent P. aus Hamm",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Nico Q. aus Friedrichshafen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Tolle Farben gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Noah W. aus Weinheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Sarah O. aus Erlangen",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Kreativ gefällt mir gut. Bin happy.",
    "customer_name": "Oskar F. aus Tübingen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Fabian A. aus Bruchsal",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Jonas C. aus Celle",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Samuel F. aus Dessau-Roßlau",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Felix S. aus Kerpen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne A. aus Norderstedt",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Henry U. aus Castrop-Rauxel",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Sascha T. aus Landshut",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Für Erwachsene gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jan J. aus Alsdorf",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Theo A. aus Braunschweig",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Valentin I. aus Eschweiler",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Maximilian L. aus Herten",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Leon Q. aus Hagen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Lenny X. aus Bad Kreuznach",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Sieht echt aus gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt Q. aus Wesel",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Maximilian X. aus Cottbus",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin rundum zufrieden.",
    "customer_name": "Nico T. aus Dachau",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Maximilian U. aus Potsdam",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Timo S. aus Augsburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Bastian F. aus Oberursel",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Danke.",
    "customer_name": "Lenny S. aus Erlangen",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Johannes I. aus Flensburg",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Nicole F. aus Baden-Baden",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Tobias A. aus Lippstadt",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika K. aus Schwäbisch Gmünd",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Sieht echt aus gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Fabian M. aus Eisenach",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Katharina S. aus Velbert",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Kerstin B. aus Fulda",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Felix I. aus Bad Oeynhausen",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Dominik I. aus Aurich",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Maria B. aus Kaiserslautern",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Leon J. aus Oberursel",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Entspannend gefällt mir gut. Einfach klasse.",
    "customer_name": "Luca A. aus Hilden",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Claudia O. aus Delmenhorst",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Kevin I. aus Baden-Baden",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Elias T. aus Villingen-Schwenningen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Malte E. aus Brotterode",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Entspannend gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Moritz Z. aus Freising",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Anja X. aus Kleve",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Paul K. aus Oranienburg",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Jan M. aus Recklinghausen",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "David S. aus Rostock",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Sarah H. aus Ingolstadt",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Felix U. aus Ulm",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Niklas P. aus Dinslaken",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Kilian V. aus Aurich",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Luis P. aus Villingen-Schwenningen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Jannik Q. aus Neustadt an der Weinstraße",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Samuel A. aus Kiel",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Tobias R. aus Mülheim an der Ruhr",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Arne X. aus Halle (Saale)",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Anna X. aus Schwäbisch Gmünd",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Katharina H. aus Oldenburg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Tom E. aus Rheda-Wiedenbrück",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Alexander M. aus Herten",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Pflanzen gefällt mir gut. Daumen hoch!",
    "customer_name": "Melanie P. aus Rodgau",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Pflanzen gefällt mir gut. Einfach klasse.",
    "customer_name": "Maria R. aus Böblingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Top.",
    "customer_name": "Henry C. aus Rodgau",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Jannik Y. aus Bamberg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Katharina T. aus Wuppertal",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Super Shop.",
    "customer_name": "Max N. aus Magdeburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Valentin R. aus Villingen-Schwenningen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Petra T. aus Detmold",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Theo Q. aus Tübingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Matteo X. aus Aurich",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Jannik N. aus Trier",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Petra S. aus Troisdorf",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Oskar X. aus Erftstadt",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Dominik N. aus Bad Kreuznach",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Yannick L. aus Bad Oeynhausen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Matteo X. aus Celle",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Erik A. aus Göttingen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Matteo Q. aus Ratingen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra O. aus Herten",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Leon U. aus Mannheim",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Sandra F. aus Mainz",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Vielen Dank für den schnellen Service.",
    "customer_name": "Niklas D. aus Darmstadt",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Entspannend gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent Y. aus Oberhausen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Johannes T. aus Saarbrücken",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Erik D. aus Paderborn",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Kerstin D. aus Erfurt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Wunderschöne Deko gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Anja P. aus Fulda",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp L. aus Freising",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Mats F. aus Pinneberg",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Timo R. aus Lippstadt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Kreativ gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Milan G. aus Nordhorn",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Melanie N. aus Darmstadt",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. So macht LEGO Spaß.",
    "customer_name": "Luis F. aus Siegen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Justus P. aus Kamen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Jonas R. aus Kiel",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Petra W. aus Offenburg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Dennis B. aus Friedrichshafen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Malte D. aus Brandenburg an der Havel",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Bastian X. aus Monheim am Rhein",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Henry R. aus Leverkusen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Monika U. aus Ahlen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Schöner Hingucker gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Anna E. aus Hürth",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Kreativ gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Arne D. aus Nettetal",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Schöner Hingucker gefällt mir gut. Top, weiter so.",
    "customer_name": "Paul R. aus Dessau-Roßlau",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Anja Q. aus Aschaffenburg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Milan B. aus Herne",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Luis M. aus Lörrach",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Jonas Y. aus Wolfenbüttel",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Für Erwachsene gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Stefanie K. aus Nordhorn",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Alexander L. aus Münster",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix K. aus Marl",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Tanja M. aus Frechen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Danke!",
    "customer_name": "Anja E. aus Hattingen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Yannick G. aus Hennef",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Liam U. aus Ratingen",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Emil D. aus Bayreuth",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Emil Q. aus Brotterode",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Stefanie H. aus Dormagen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Benedikt A. aus Bremerhaven",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Leon A. aus Oberhausen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Sieht echt aus gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne H. aus Koblenz",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Sabine F. aus Rheine",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Pflanzen gefällt mir gut. Klare 10/10.",
    "customer_name": "Jannik U. aus Hennef",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Entspannend gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Elias A. aus Emden",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Jonas S. aus Pinneberg",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Danke!",
    "customer_name": "Alexander B. aus Offenburg",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Für Erwachsene gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sabine G. aus Lüneburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Top.",
    "customer_name": "Maximilian R. aus Saarbrücken",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Benedikt N. aus Wolfsburg",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Bin zufrieden.",
    "customer_name": "Stefanie R. aus Lüdenscheid",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Robin U. aus Hattingen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Vincent P. aus Halle (Saale)",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Mats B. aus Bergisch Gladbach",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Tom H. aus Konstanz",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Jannik J. aus Bielefeld",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Sandra L. aus Celle",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Julian D. aus Bad Kreuznach",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Adrian R. aus Fellbach",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Alexander L. aus Ravensburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Theo N. aus Bottrop",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Tolle Farben gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon M. aus Aschaffenburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Absolute Kaufempfehlung.",
    "customer_name": "Mats V. aus Saarbrücken",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Marlon O. aus Lünen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Pflanzen gefällt mir gut. Klare 10/10.",
    "customer_name": "Johannes P. aus Oberursel",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas Q. aus Troisdorf",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Klare 10/10.",
    "customer_name": "Mats J. aus Erkrath",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Kerstin A. aus Ravensburg",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Samuel D. aus Wolfenbüttel",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Für Erwachsene gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Hannes L. aus Aalen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Katharina A. aus Alsdorf",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Claudia U. aus Nettetal",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Monika Z. aus Mannheim",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Entspannend gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lisa M. aus Herford",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Lenny Z. aus Nordhorn",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Niklas Q. aus Remscheid",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Julia X. aus Dresden",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik F. aus Peine",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Petra H. aus Wolfsburg",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Katharina T. aus Rüsselsheim",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Ben T. aus Gelsenkirchen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Super Shop.",
    "customer_name": "Milan O. aus Lübeck",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Liam E. aus Saarbrücken",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Sieht echt aus gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Lukas B. aus Garbsen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Arne E. aus Kerpen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Wunderschöne Deko gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Dennis P. aus Traunstein",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Ein tolles Geschenk.",
    "customer_name": "Lisa P. aus Kaufbeuren",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Entspannend gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Robin P. aus Herzogenrath",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. So macht LEGO Spaß.",
    "customer_name": "Noah F. aus Recklinghausen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Justus P. aus Ravensburg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Emil U. aus Bruchsal",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt A. aus Ravensburg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Max Y. aus Recklinghausen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Matteo M. aus Erlangen",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Simon P. aus Heilbronn",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Claudia H. aus Recklinghausen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Dennis T. aus Hattingen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Tim S. aus Gera",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Kreativ gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent E. aus Magdeburg",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nico T. aus Weimar",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Bin rundum zufrieden.",
    "customer_name": "Sarah M. aus Lüdenscheid",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Dominik U. aus Heilbronn",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Jonas B. aus Peine",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Tolle Farben gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo X. aus Moers",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin rundum zufrieden.",
    "customer_name": "Christoph W. aus Leonberg",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Julia P. aus Heidenheim",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Bastian C. aus Ibbenbüren",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Moritz D. aus Bremen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Tom T. aus Braunschweig",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Benedikt D. aus Langenhagen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Anton I. aus Lüdenscheid",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Klare 10/10.",
    "customer_name": "Lukas A. aus Neustadt an der Weinstraße",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Christoph S. aus Moers",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Robin I. aus Nettetal",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Lukas Z. aus Unna",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Tanja G. aus Bietigheim-Bissingen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Julian M. aus Alsdorf",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Kreativ gefällt mir gut. Klare 10/10.",
    "customer_name": "Malte N. aus Passau",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Vincent B. aus Neu-Ulm",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Schöner Hingucker gefällt mir gut. Top, weiter so.",
    "customer_name": "Leon E. aus Wesel",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Pflanzen gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Andrea J. aus Rheda-Wiedenbrück",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Mats M. aus Wesel",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix Q. aus Göttingen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Lukas G. aus Essen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Maximilian R. aus Rottenburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Andrea A. aus Neu-Ulm",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Philipp O. aus Frechen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Sieht echt aus gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Julian L. aus Hamburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Moritz E. aus Worms",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Für Erwachsene gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Kerstin L. aus Lüneburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Entspannend gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Anna R. aus Fürth",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Absolute Kaufempfehlung.",
    "customer_name": "Max N. aus Lemgo",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Luis W. aus Offenburg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Adrian X. aus Pinneberg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Lenny K. aus Ludwigshafen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Yannick G. aus Reutlingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Anna F. aus Bamberg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Monika P. aus Garbsen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar V. aus Hanau",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine H. aus Lübeck",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Matteo E. aus Gütersloh",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Sabine S. aus Münster",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Andrea C. aus Landshut",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Moritz S. aus Norderstedt",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Danke!",
    "customer_name": "David Q. aus Filderstadt",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Anton T. aus Rheine",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Lukas P. aus Reutlingen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Max T. aus Neunkirchen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Matteo B. aus Jena",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Sarah K. aus Tübingen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian D. aus Bornheim",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Top.",
    "customer_name": "David Y. aus Bonn",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Ein tolles Geschenk.",
    "customer_name": "Bastian G. aus Siegen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Sarah G. aus Lahr",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Tom Z. aus Mainz",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Timo E. aus Dessau-Roßlau",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Emil E. aus Brandenburg an der Havel",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Monika W. aus Memmingen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Luis K. aus Lörrach",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Anton Z. aus Wuppertal",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Super Shop.",
    "customer_name": "Lukas Y. aus Oberhausen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Adrian E. aus Ludwigsburg",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Melanie S. aus Worms",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Leo O. aus Emden",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Sieht echt aus gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leo G. aus Aalen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Dominik C. aus Lemgo",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Maria G. aus Bergheim",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Monika U. aus Castrop-Rauxel",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Entspannend gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Fabian N. aus Köln",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Erik H. aus Peine",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Malte M. aus Siegen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Marlon T. aus Delmenhorst",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Tolle Farben gefällt mir gut. Daumen hoch!",
    "customer_name": "Tanja C. aus Dormagen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin N. aus Wuppertal",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Yannick G. aus Stuttgart",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Anja J. aus Marburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Claudia X. aus Berlin",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Hat sich definitiv gelohnt.",
    "customer_name": "Dennis B. aus Düsseldorf",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Jonas D. aus Görlitz",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Wunderschöne Deko gefällt mir gut. Daumen hoch!",
    "customer_name": "Alexander K. aus Freiburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jan Y. aus Bamberg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Nadine N. aus Lüdenscheid",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Preis-Leistung stimmt hier.",
    "customer_name": "Paul X. aus Wuppertal",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Kerstin J. aus Görlitz",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Melanie P. aus Karlsruhe",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Schöner Hingucker gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Philipp N. aus Marburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Matteo L. aus Magdeburg",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Tanja C. aus Velbert",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Max A. aus Bad Salzuflen",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Hannes L. aus Leverkusen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Bin rundum zufrieden.",
    "customer_name": "Julia K. aus Düsseldorf",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Farben ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian F. aus Bergkamen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Benedikt F. aus Göttingen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Erik P. aus Gera",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Für Erwachsene gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Julian B. aus Friedrichshafen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Kevin H. aus Friedrichshafen",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Lukas F. aus Ibbenbüren",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Sandra V. aus Gummersbach",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Vielen Dank für den schnellen Service.",
    "customer_name": "Sandra J. aus Neunkirchen",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Elias O. aus Bonn",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Timo U. aus Esslingen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Fabian M. aus Rosenheim",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Max N. aus Lippstadt",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Max D. aus Köln",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Pflanzen gefällt mir gut. Daumen hoch!",
    "customer_name": "Hannes E. aus Greifswald",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Marlon C. aus Detmold",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Dominik O. aus Gronau",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Anna F. aus Dortmund",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Schöner Hingucker gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine V. aus Schwäbisch Gmünd",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Andrea Y. aus Saarbrücken",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Lenny Q. aus Karlsruhe",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Tim T. aus Norderstedt",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Anja F. aus Rodgau",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Tom I. aus Jena",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Mats P. aus Frechen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Max F. aus Detmold",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich. Top.",
    "customer_name": "Jan C. aus Oranienburg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Johannes R. aus Kiel",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben X. aus Gronau",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Einfach klasse.",
    "customer_name": "Christoph F. aus Dormagen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leo R. aus Erlangen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Farben gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Noah F. aus Worms",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Pflanzen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Leon D. aus Dormagen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Noah X. aus Rostock",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Finn D. aus Hannover",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Entspannend gefällt mir gut. Klare 10/10.",
    "customer_name": "Kerstin O. aus Gütersloh",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Für Erwachsene gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt J. aus Osnabrück",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Luca V. aus Kerpen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Felix B. aus Heilbronn",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Elias C. aus Frankfurt",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Arne A. aus Ravensburg",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Danke!",
    "customer_name": "Jan A. aus Unna",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Anna R. aus Wolfsburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Christina V. aus Saarbrücken",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Benedikt E. aus Bergheim",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Emil P. aus Fellbach",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Bin zufrieden.",
    "customer_name": "Maria W. aus Hennef",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Maximilian W. aus Kempten",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Lukas Q. aus Bielefeld",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Sabine Y. aus Gießen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Petra X. aus Wesel",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Für Erwachsene gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Dominik F. aus Lüdenscheid",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Marlon I. aus Düsseldorf",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar B. aus Dessau-Roßlau",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Maximilian I. aus Grevenbroich",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Timo L. aus Bonn",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Leon C. aus Hildesheim",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Justus V. aus Hof",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Adrian X. aus Soest",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Kreativ gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Malte E. aus Dresden",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Für Erwachsene gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Stefanie A. aus Aalen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Max E. aus Bad Homburg",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Robin I. aus Augsburg",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Sandra A. aus Solingen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa B. aus Lingen",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Ben D. aus Köln",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Freue mich schon auf das nächste Set.",
    "customer_name": "Christina I. aus Emden",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Claudia Q. aus Freising",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Claudia R. aus Stolberg",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Johannes R. aus Freising",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Florian F. aus Wiesbaden",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Melanie U. aus Potsdam",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Entspannend gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sarah W. aus Berlin",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Wunderschöne Deko gefällt mir gut. Bin happy.",
    "customer_name": "Ben C. aus Sindelfingen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Mats W. aus Gummersbach",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Katharina U. aus Neumünster",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Danke!",
    "customer_name": "Lenny H. aus Erlangen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Emil I. aus Borken",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Vincent F. aus Mainz",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria J. aus Offenbach",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Top.",
    "customer_name": "Maria N. aus Menden",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Felix L. aus Bayreuth",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Bin zufrieden.",
    "customer_name": "Jan N. aus Hennef",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Niklas I. aus Konstanz",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Tim L. aus Ravensburg",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Sieht echt aus gefällt mir gut. Einfach klasse.",
    "customer_name": "Tanja V. aus Melle",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Theo H. aus Gera",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Philipp W. aus Troisdorf",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Daumen hoch!",
    "customer_name": "Anna D. aus Braunschweig",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Emil Y. aus Recklinghausen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Monika Z. aus Reutlingen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo P. aus Bremerhaven",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Stefanie O. aus Leonberg",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Bastian X. aus Lippstadt",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Julian J. aus Bayreuth",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Einfach klasse.",
    "customer_name": "Leo D. aus Rodgau",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Für Erwachsene gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Dominik Y. aus Ulm",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Kreativ gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian F. aus Weinheim",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Für Erwachsene gefällt mir gut. Einfach klasse.",
    "customer_name": "Luis R. aus Potsdam",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Birgit L. aus Leonberg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Hannes U. aus Chemnitz",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Kerstin W. aus Dormagen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Sarah P. aus Velbert",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Robin V. aus Witten",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Robin P. aus Dorsten",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Dennis Y. aus Lahr",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Erik B. aus Aalen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Susanne D. aus Ambreg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Dennis L. aus Offenburg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Kreativ gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Malte M. aus Hamm",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Kreativ gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar H. aus Herne",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Hannes U. aus Viersen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Tanja N. aus Würzburg",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Malte W. aus Kaiserslautern",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Pflanzen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Leo I. aus Rheda-Wiedenbrück",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Max J. aus Weimar",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Für Erwachsene gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Petra L. aus Langenhagen",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Pflanzen gefällt mir gut. Daumen hoch!",
    "customer_name": "Marlon V. aus Sankt Augustin",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine U. aus Heidenheim",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Danke!",
    "customer_name": "Marlon B. aus Kaufbeuren",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Malte P. aus Ravensburg",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Wunderschöne Deko gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Anna Z. aus Norderstedt",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Tim J. aus Offenburg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Julian R. aus Recklinghausen",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Christoph C. aus Gladbeck",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Christina W. aus Leonberg",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christina Y. aus Heidenheim",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Matteo W. aus Villingen-Schwenningen",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Entspannend gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sabine K. aus Herzogenrath",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Dennis V. aus Jena",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Christoph J. aus Bad Kreuznach",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Tobias Y. aus Trier",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Mats B. aus Friedrichshafen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Moritz K. aus Bergheim",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Bin zufrieden.",
    "customer_name": "Elias I. aus Bayreuth",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Für Erwachsene gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Nadine Z. aus Stolberg",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Wunderschöne Deko gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Tobias T. aus Gladbeck",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Milan V. aus Heilbronn",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Wunderschöne Deko gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit X. aus Filderstadt",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Monika U. aus Rastatt",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Bin zufrieden.",
    "customer_name": "Adrian W. aus Grevenbroich",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Tanja H. aus Kaufbeuren",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Absolute Kaufempfehlung.",
    "customer_name": "Lukas X. aus Greifswald",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Dennis C. aus Herzogenrath",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Henry S. aus Wunstorf",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Tolle Farben gefällt mir gut. Top, weiter so.",
    "customer_name": "Robin F. aus Dresden",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Top.",
    "customer_name": "Anna O. aus Hof",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Lenny W. aus Hamm",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Leon H. aus Düren",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Henry Q. aus Münster",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Robin A. aus Kamen",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Dennis K. aus Baden-Baden",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Anna B. aus Düsseldorf",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Bin zufrieden.",
    "customer_name": "Sascha U. aus Erfurt",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Daumen hoch!",
    "customer_name": "Johannes G. aus Gladbeck",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Hat sich definitiv gelohnt.",
    "customer_name": "Jannik B. aus Neuwied",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Sieht echt aus gefällt mir gut. Danke.",
    "customer_name": "Noah R. aus Augsburg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine P. aus Wolfenbüttel",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Für Fans ein absolutes Muss.",
    "customer_name": "Mats C. aus Ulm",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Danke!",
    "customer_name": "Luca X. aus Frankfurt",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Robin J. aus Neuwied",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Justus B. aus Göttingen",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt R. aus Alsdorf",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Melanie O. aus Hattingen",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico B. aus Kaufbeuren",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Schöner Hingucker gefällt mir gut. Daumen hoch!",
    "customer_name": "Robin A. aus Neunkirchen",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Maria Z. aus Witten",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Jonas E. aus Mönchengladbach",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Sarah B. aus Oberursel",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Nicole G. aus Pulheim",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Julian O. aus Stralsund",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Entspannend gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Milan S. aus Fürth",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes V. aus Frankfurt (Oder)",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika F. aus Bamberg",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Tom V. aus Straubing",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Luca P. aus Menden",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Wunderschöne Deko gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian S. aus Frankfurt (Oder)",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Wunderschöne Deko gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Yannick I. aus Rosenheim",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Bastian C. aus Nordhorn",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Marlon X. aus Oberhausen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Benedikt Y. aus Alsdorf",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Andrea Y. aus Siegen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Dominik J. aus Weimar",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Erik F. aus Kleve",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Bastian T. aus Hattingen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Henry L. aus Iserlohn",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Monika C. aus Weimar",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Für Fans ein absolutes Muss.",
    "customer_name": "Sarah D. aus Bocholt",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Danke.",
    "customer_name": "Tim K. aus Mönchengladbach",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Bastian H. aus Bad Homburg",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo L. aus Göttingen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Niklas E. aus Marl",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Lisa D. aus Straubing",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Entspannend gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny R. aus Herne",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Einfach klasse.",
    "customer_name": "Florian Z. aus Lippstadt",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Tobias C. aus Iserlohn",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "David A. aus Hameln",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luis V. aus Bochum",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Sabine H. aus Filderstadt",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Tolle Farben gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Matteo B. aus Leonberg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Arne E. aus Oldenburg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Danke!",
    "customer_name": "Fabian I. aus Bad Salzuflen",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Lisa F. aus Rodgau",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Elias H. aus Hameln",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Fabian M. aus Ravensburg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Timo W. aus Ravensburg",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Susanne C. aus Troisdorf",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Luca H. aus Magdeburg",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Arne X. aus Pulheim",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Tolle Farben gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Birgit Y. aus Langenhagen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Hannes L. aus Heilbronn",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Emil P. aus Neumünster",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Lenny C. aus Wetzlar",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christoph I. aus Celle",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Claudia Y. aus Mainz",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Leon E. aus Essen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton D. aus Neunkirchen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Laura W. aus Oranienburg",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Sandra P. aus Bielefeld",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Für Erwachsene gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Florian T. aus Pforzheim",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Erik F. aus Duisburg",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Tolle Farben gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kevin C. aus Aschaffenburg",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Christoph T. aus Schweinfurt",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Valentin F. aus Baden-Baden",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Simon D. aus Hamm",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Anton N. aus Aachen",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Florian B. aus Neustadt an der Weinstraße",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Valentin K. aus Heinsberg",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Dennis P. aus Hof",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Samuel R. aus Rheda-Wiedenbrück",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Elias C. aus Lippstadt",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul K. aus Peine",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Noah W. aus Neumünster",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Noah I. aus Bad Homburg",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Katharina E. aus Kempten",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Sascha Z. aus Weimar",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Hannes J. aus Kaiserslautern",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Justus W. aus München",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Wunderschöne Deko gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Jannik W. aus Berlin",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Wunderschöne Deko gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent O. aus Rosenheim",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Daumen hoch!",
    "customer_name": "Tom C. aus Ambreg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Stefanie B. aus Heinsberg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Sandra T. aus Hof",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Freue mich schon auf das nächste Set.",
    "customer_name": "Alexander Z. aus Eisenach",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bin zufrieden.",
    "customer_name": "Maximilian B. aus Kerpen",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Luis G. aus Paderborn",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Tom Y. aus Duisburg",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Pflanzen gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Anja V. aus Duisburg",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Paul L. aus Monheim am Rhein",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Tim C. aus Landshut",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Stefanie D. aus Braunschweig",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Jonas J. aus Tübingen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Felix V. aus Gera",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Julian T. aus Bottrop",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Luis T. aus Neustadt an der Weinstraße",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Marlon A. aus Recklinghausen",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Tolle Farben gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Hannes N. aus Leipzig",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Andrea U. aus Krefeld",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Schöner Hingucker ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Nico Q. aus Freiburg",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie B. aus Zwickau",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Laura Y. aus Detmold",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tobias A. aus Flensburg",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Benedikt X. aus Zwickau",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Jan D. aus Hennef",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Dominik L. aus Buxtehude",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Top, weiter so.",
    "customer_name": "Moritz S. aus Fellbach",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Tolle Farben gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Jannik A. aus Duisburg",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Melanie S. aus Koblenz",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Justus C. aus Wesel",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Kreativ gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Nicole O. aus Dachau",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Kerstin D. aus Filderstadt",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. 5 Sterne von mir.",
    "customer_name": "Jan F. aus Menden",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Kreativ gefällt mir gut. Bin happy.",
    "customer_name": "Simon H. aus Rottenburg",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "David W. aus Herford",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Melanie Y. aus Osnabrück",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Tanja A. aus Garbsen",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Sandra T. aus Landshut",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Erik I. aus Erfurt",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Henry U. aus Konstanz",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Tolle Farben gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Leo W. aus Berlin",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Hannes M. aus Wiesbaden",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Lisa P. aus Solingen",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Arne V. aus Münster",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine W. aus Neu-Ulm",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Marlon P. aus Albstadt",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Klare 10/10.",
    "customer_name": "Sascha N. aus Essen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes T. aus Dresden",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sieht echt aus gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Florian I. aus Detmold",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Nico N. aus Unna",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Bastian J. aus Neunkirchen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Anja M. aus Darmstadt",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Wunderschöne Deko gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Timo G. aus Nordhorn",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Sascha L. aus Herne",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lenny R. aus Göppingen",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Sieht echt aus gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Tobias G. aus Herford",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Laura C. aus Ibbenbüren",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Laura U. aus Iserlohn",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Jan B. aus Erkrath",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Pflanzen gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole K. aus Aschaffenburg",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Malte F. aus Solingen",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Fabian J. aus Freiburg",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Arne B. aus Arnsberg",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Timo R. aus Cottbus",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Julia G. aus Dormagen",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kilian I. aus Delmenhorst",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Tolle Farben gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christina O. aus Neuss",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Elias W. aus Landshut",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Emil S. aus Hameln",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Valentin J. aus Bayreuth",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Sieht echt aus gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Paul R. aus Dorsten",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Schöner Hingucker gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar J. aus Unna",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Andrea A. aus Bocholt",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin happy.",
    "customer_name": "Luis H. aus Worms",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Niklas T. aus Bocholt",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Petra L. aus Berlin",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Niklas T. aus München",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Tolle Farben ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Sarah U. aus Passau",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Wunderschöne Deko gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jan V. aus Halle (Saale)",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Fabian M. aus Stolberg",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Sandra X. aus Neustadt an der Weinstraße",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Melanie I. aus Würzburg",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Florian Y. aus Trier",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Yannick V. aus Potsdam",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Schöner Hingucker gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Susanne T. aus Lippstadt",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Anja N. aus Frankfurt (Oder)",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Jan L. aus Sindelfingen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Marlon J. aus Erfurt",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Vincent V. aus Friedrichshafen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lukas M. aus Memmingen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Mats X. aus Esslingen",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Benedikt L. aus Greifswald",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Lisa J. aus Dessau-Roßlau",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "David S. aus Zwickau",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Lenny U. aus Herten",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. 5 Sterne von mir.",
    "customer_name": "Fabian H. aus Koblenz",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Vincent P. aus Lippstadt",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Klare 10/10.",
    "customer_name": "Stefanie D. aus Traunstein",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Lenny A. aus Frechen",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Monika X. aus Wunstorf",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Malte S. aus Lüdenscheid",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Petra H. aus Rosenheim",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Entspannend gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Philipp D. aus Offenbach",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Valentin I. aus Hannover",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Philipp Q. aus Bochum",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Für Erwachsene ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Susanne J. aus Remscheid",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Malte J. aus Hannover",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Maria F. aus Dachau",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Niklas F. aus Greifswald",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Monika G. aus Lünen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Jonas Z. aus Kerpen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Marlon W. aus Paderborn",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Emil Q. aus Bottrop",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Florian H. aus Reutlingen",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Valentin K. aus Wuppertal",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Sieht echt aus gefällt mir gut. Danke.",
    "customer_name": "Emil R. aus Hameln",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Erik N. aus Freiburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Bin happy.",
    "customer_name": "David A. aus Hof",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Laura D. aus Detmold",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christina A. aus Köln",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Adrian I. aus Braunschweig",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Lisa N. aus Kassel",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Bastian N. aus Weimar",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Samuel G. aus Göppingen",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Felix A. aus Schwerin",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Entspannend gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Jan V. aus Bottrop",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin rundum zufrieden.",
    "customer_name": "Susanne V. aus Görlitz",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Luca X. aus Bornheim",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Leo O. aus Fulda",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Für Erwachsene gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Fabian Y. aus Leverkusen",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Alles richtig gemacht.",
    "customer_name": "David C. aus Aalen",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Lisa A. aus Görlitz",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Henry E. aus Eschweiler",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Für Erwachsene gefällt mir gut. Klare 10/10.",
    "customer_name": "Jannik J. aus Sindelfingen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Matteo E. aus Bonn",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Claudia D. aus Duisburg",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Kerstin Q. aus Frechen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sieht echt aus gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim F. aus Rostock",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Sascha G. aus Mannheim",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Vincent S. aus Gießen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Finn D. aus Erfurt",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Tolle Farben gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Erik Q. aus Celle",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Für Erwachsene ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Fabian E. aus Erkrath",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Daumen hoch!",
    "customer_name": "Fabian Q. aus Pinneberg",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Henry V. aus Mannheim",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Einfach klasse.",
    "customer_name": "Andrea C. aus Sankt Augustin",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Leo Y. aus Elmshorn",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Elias L. aus Erkrath",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Wunderschöne Deko ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Max C. aus Freiburg",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sieht echt aus ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Felix F. aus Schwäbisch Gmünd",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Danke!",
    "customer_name": "Timo P. aus Esslingen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Entspannend gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Tobias Z. aus Menden",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Leo P. aus Pforzheim",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Stefanie J. aus Landshut",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Entspannend gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria K. aus Langenfeld",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Super Shop.",
    "customer_name": "Nicole P. aus Fürth",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Sieht echt aus gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kilian R. aus Marl",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Dominik W. aus Koblenz",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Für Erwachsene gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Jan L. aus Brotterode",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Melanie Q. aus Rüsselsheim",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Johannes R. aus Düsseldorf",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Sarah B. aus Göppingen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin rundum zufrieden.",
    "customer_name": "Simon T. aus Ahlen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Yannick D. aus Herford",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin happy.",
    "customer_name": "Theo I. aus Buxtehude",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Susanne L. aus Leinfelden-Echterdingen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Laura O. aus Hagen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Benedikt W. aus Bad Salzuflen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Claudia S. aus Garbsen",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Sieht echt aus gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Lukas R. aus Ulm",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Jonas N. aus Wunstorf",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Stefanie Q. aus Fulda",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sieht echt aus ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Stefanie J. aus Wiesbaden",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Valentin K. aus Duisburg",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Für Erwachsene gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tobias W. aus Wilhelmshaven",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Paul I. aus München",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Absolute Kaufempfehlung.",
    "customer_name": "Bastian C. aus Lippstadt",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja U. aus Remscheid",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Katharina Y. aus Stralsund",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Elias Z. aus Worms",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Nadine X. aus Friedrichshafen",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Tobias R. aus Saarbrücken",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Timo I. aus Oberhausen",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Für Erwachsene ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo E. aus Filderstadt",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Paul R. aus Hürth",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Christina G. aus Lemgo",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Bin rundum zufrieden.",
    "customer_name": "Noah M. aus Karlsruhe",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny N. aus Greifswald",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Emil K. aus Lingen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Maria I. aus Traunstein",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Benedikt H. aus Salzgitter",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Schöner Hingucker ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Milan D. aus Bad Oeynhausen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sieht echt aus ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Alexander X. aus Herzogenrath",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Finn M. aus Wesel",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne V. aus Bielefeld",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Valentin U. aus Herne",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Malte S. aus Traunstein",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Für Erwachsene ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Justus A. aus Erlangen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Tolle Farben ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Alexander C. aus Kerpen",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz I. aus Lemgo",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Nicole O. aus Baden-Baden",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Monika C. aus Freising",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Robin L. aus Soest",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Bin zufrieden.",
    "customer_name": "Christina Z. aus Darmstadt",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Entspannend ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Laura U. aus Offenburg",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sieht echt aus ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Maria I. aus Celle",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Wunderschöne Deko ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Leo K. aus Görlitz",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Alexander B. aus Norderstedt",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Niklas W. aus Lüneburg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Pflanzen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Jannik B. aus Leinfelden-Echterdingen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Nico Q. aus Mülheim an der Ruhr",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Tolle Farben gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Andrea E. aus Monheim am Rhein",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Arne X. aus Lüdenscheid",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Milan J. aus Alsdorf",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Pflanzen gefällt mir gut. Daumen hoch!",
    "customer_name": "Leon B. aus Aachen",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Top.",
    "customer_name": "Tim M. aus Moers",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Entspannend gefällt mir gut. Danke.",
    "customer_name": "Robin S. aus Regensburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Wunderschöne Deko gefällt mir gut. Klare 10/10.",
    "customer_name": "Lenny T. aus Villingen-Schwenningen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Tolle Farben ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Malte J. aus Neuwied",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Monika J. aus Darmstadt",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Benedikt U. aus Bad Kreuznach",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes C. aus Dachau",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Timo B. aus Bayreuth",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Monika Y. aus Bremerhaven",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Tolle Farben ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Jonas I. aus Kleve",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sieht echt aus ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Matteo D. aus Gütersloh",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Bin rundum zufrieden.",
    "customer_name": "Justus U. aus Heilbronn",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Katharina O. aus Hameln",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Hat sich definitiv gelohnt.",
    "customer_name": "Oskar W. aus Bad Homburg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Entspannend ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Ben A. aus Hanau",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Danke!",
    "customer_name": "Finn F. aus Minden",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Matteo R. aus Brotterode",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Luis L. aus Eisenach",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim F. aus Stuttgart",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Super Shop.",
    "customer_name": "Katharina R. aus Delmenhorst",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Daumen hoch!",
    "customer_name": "Moritz S. aus Trier",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Luca E. aus Bochum",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Robin S. aus Karlsruhe",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Andrea B. aus Neu-Ulm",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Danke!",
    "customer_name": "Max B. aus Alsdorf",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Tolle Farben gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Dennis H. aus Berlin",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Schöner Hingucker gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Adrian L. aus Neumünster",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Yannick O. aus Neumünster",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Für Erwachsene ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Marlon R. aus Fürth",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Pflanzen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Max L. aus Bergisch Gladbach",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Nico D. aus Kempten",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Schöner Hingucker gefällt mir gut. Klare 10/10.",
    "customer_name": "Andrea U. aus Leinfelden-Echterdingen",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Bin happy.",
    "customer_name": "Emil D. aus Cottbus",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Sieht echt aus gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Malte J. aus Bamberg",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Ein tolles Geschenk.",
    "customer_name": "David N. aus Dülmen",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Felix E. aus Rastatt",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa M. aus Ratingen",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Justus M. aus Fulda",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Fabian B. aus Bayreuth",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Entspannend ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Liam V. aus Offenburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Ben I. aus Freiburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Kreativ gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Malte K. aus Würzburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Pflanzen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Claudia X. aus Hamm",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Philipp V. aus Görlitz",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Bastian M. aus Iserlohn",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Sieht echt aus gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Nicole Q. aus Norderstedt",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Moritz Q. aus Hanau",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Entspannend gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Milan A. aus Essen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Wunderschöne Deko gefällt mir gut. Klare 10/10.",
    "customer_name": "Sarah U. aus Ingolstadt",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Oskar F. aus Lübeck",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Entspannend ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Mats R. aus Salzgitter",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Wunderschöne Deko ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Tom S. aus Heidelberg",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Niklas G. aus Wolfenbüttel",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Bastian I. aus Monheim am Rhein",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Für Erwachsene ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Stefanie C. aus Dorsten",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Laura X. aus Schwäbisch Gmünd",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Fabian N. aus Plauen",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Für Erwachsene gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Julian D. aus Buxtehude",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Schöner Hingucker gefällt mir gut. Top, weiter so.",
    "customer_name": "Marlon N. aus Krefeld",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Oskar I. aus Gießen",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Schöner Hingucker ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Liam R. aus Moers",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Liam G. aus Garbsen",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Pflanzen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Jonas J. aus Unna",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Pflanzen ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Emil Y. aus Velbert",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Noah P. aus Jena",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Pflanzen gefällt mir gut. Klare 10/10.",
    "customer_name": "Dennis C. aus Flensburg",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Timo E. aus Remscheid",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Wunderschöne Deko gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anton E. aus Lörrach",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Moritz U. aus Albstadt",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Tolle Farben ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Malte K. aus Wunstorf",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Claudia A. aus Reutlingen",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sieht echt aus ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Sabine P. aus Waiblingen",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Benedikt X. aus Oranienburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Wunderschöne Deko gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Monika Z. aus Duisburg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Für Erwachsene ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Melanie H. aus Herzogenrath",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kerstin Q. aus Weimar",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Lenny N. aus Filderstadt",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa U. aus Lahr",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Entspannend gefällt mir gut. Bin happy.",
    "customer_name": "Claudia Q. aus Pforzheim",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Für Fans ein absolutes Muss.",
    "customer_name": "Benedikt M. aus Rastatt",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sieht echt aus ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Milan V. aus Rodgau",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kreativ gefällt mir gut. Danke.",
    "customer_name": "Nico O. aus Düren",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Melanie B. aus Emden",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Pflanzen ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Elias X. aus Gronau",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. So macht LEGO Spaß.",
    "customer_name": "Dennis M. aus Neustadt an der Weinstraße",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Schöner Hingucker ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Tanja I. aus Brotterode",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Wunderschöne Deko ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Maria Y. aus Wolfenbüttel",
    "date": "2025-01-01"
  }
];