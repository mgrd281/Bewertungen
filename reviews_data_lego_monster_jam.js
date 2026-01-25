const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Max E. aus Frankfurt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Luca U. aus Frankfurt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Elias M. aus Schweinfurt",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Laura C. aus Hannover",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Dragon Design gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin V. aus Rüsselsheim",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Dennis K. aus Greifswald",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Cooles Geschenk gefällt mir gut. Bin happy.",
    "customer_name": "Elias F. aus Elmshorn",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Stabil gefällt mir gut. Daumen hoch!",
    "customer_name": "Kerstin W. aus Fulda",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Lisa I. aus Ulm",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne A. aus Arnsberg",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Robin X. aus Göppingen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Benedikt A. aus Dülmen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Monster Truck gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Christina J. aus Langenfeld",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon B. aus Reutlingen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bin zufrieden.",
    "customer_name": "Dennis V. aus Dessau-Roßlau",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Alexander Q. aus Waiblingen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Petra V. aus Herford",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Noah U. aus Pforzheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Malte N. aus Ulm",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja I. aus Rastatt",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Arne U. aus Rüsselsheim",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Anton B. aus Bocholt",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Vielen Dank für den schnellen Service.",
    "customer_name": "Kevin U. aus Marl",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Stabil ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Monika K. aus Erftstadt",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Kerstin Z. aus Hamburg",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Lukas J. aus Bad Kreuznach",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Theo X. aus Bietigheim-Bissingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Leon J. aus Memmingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Susanne M. aus Straubing",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Anton A. aus Lemgo",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Christoph I. aus Bremerhaven",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Valentin I. aus Erfurt",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Lukas P. aus Leverkusen",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Lenny B. aus Hilden",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Monster Truck gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tom H. aus Dinslaken",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Emil F. aus Aurich",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Monika V. aus Düren",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Tobias K. aus Kaiserslautern",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Top.",
    "customer_name": "Nico Y. aus Solingen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Tim T. aus Grevenbroich",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra A. aus Berlin",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Cooles Geschenk gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis W. aus Peine",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Paul K. aus Velbert",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Tom Y. aus Dessau-Roßlau",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Jannik J. aus Kempten",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Für Fans ein absolutes Muss.",
    "customer_name": "Kilian X. aus Rodgau",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Adrian L. aus Dortmund",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Arne E. aus Wiesbaden",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Toller Bauspaß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Melanie B. aus Frankfurt",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Rückziehmotor gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Theo D. aus Delmenhorst",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Matteo J. aus Neumünster",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Nadine P. aus Bayreuth",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Luis B. aus Heinsberg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Kilian I. aus Villingen-Schwenningen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Vielen Dank für den schnellen Service.",
    "customer_name": "Matteo X. aus Hennef",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny Q. aus Mainz",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Marlon V. aus Herne",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sarah F. aus Koblenz",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Maximilian Y. aus Pinneberg",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Tom G. aus Witten",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Samuel C. aus Ahlen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Valentin F. aus Bielefeld",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Vincent O. aus Salzgitter",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Bin rundum zufrieden.",
    "customer_name": "Marlon C. aus Bornheim",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar N. aus Hof",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Cooles Geschenk gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Samuel F. aus Gladbeck",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Stefanie M. aus Meerbusch",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Yannick G. aus Pforzheim",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Valentin I. aus Bielefeld",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Susanne S. aus Stolberg",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Sabine J. aus Halle (Saale)",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Adrian W. aus Villingen-Schwenningen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Milan H. aus Moers",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Rückziehmotor gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Jan K. aus Fulda",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Danke!",
    "customer_name": "Theo E. aus Lippstadt",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik B. aus Aalen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Danke!",
    "customer_name": "Melanie G. aus Oldenburg",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Johannes N. aus Hagen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Niklas Z. aus Lingen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo M. aus Gummersbach",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Yannick S. aus Hennef",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Anja E. aus Görlitz",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Bin happy.",
    "customer_name": "Simon Q. aus Ratingen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Theo H. aus Bergkamen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Robust gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Lenny B. aus Würzburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Vincent I. aus Cottbus",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Emil E. aus Chemnitz",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Stefanie U. aus Würzburg",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Stabil ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Luis M. aus Troisdorf",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Monika V. aus Saarbrücken",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Matteo U. aus Hamm",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Danke!",
    "customer_name": "Max D. aus Detmold",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "David V. aus Bocholt",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon L. aus Brandenburg an der Havel",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Monster Truck gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Anna Z. aus Gera",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Johannes D. aus Regensburg",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Danke!",
    "customer_name": "Valentin R. aus Kaufbeuren",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Danke!",
    "customer_name": "Justus W. aus Köln",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Vincent A. aus Frankfurt",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Jannik H. aus Dresden",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Daumen hoch!",
    "customer_name": "Yannick Y. aus Esslingen",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Tanja G. aus Hamm",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Dominik F. aus Herten",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "David D. aus Freiburg",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Rückziehmotor gefällt mir gut. Bin happy.",
    "customer_name": "Sascha K. aus Pforzheim",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Samuel X. aus Troisdorf",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Philipp Y. aus Pinneberg",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "David K. aus Aurich",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Absolute Kaufempfehlung.",
    "customer_name": "Valentin Y. aus Berlin",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Samuel M. aus Erkrath",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Jan B. aus Ludwigsburg",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Dragon Design gefällt mir gut. Daumen hoch!",
    "customer_name": "Tim I. aus Wesel",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Christoph F. aus Friedrichshafen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Philipp I. aus Essen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Finn I. aus Lippstadt",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Sabine I. aus Mönchengladbach",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Toller Bauspaß gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "David Y. aus Aschaffenburg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tanja N. aus Würzburg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Kilian U. aus Herzogenrath",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Dragon Design gefällt mir gut. Bin happy.",
    "customer_name": "Christoph J. aus Freiburg",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Top, weiter so.",
    "customer_name": "Lenny X. aus Moers",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Monster Truck gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Benedikt I. aus Göppingen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Katharina E. aus Würzburg",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Paul I. aus Lünen",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Top.",
    "customer_name": "Henry R. aus Stolberg",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Emil I. aus Bremerhaven",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Top.",
    "customer_name": "Anja W. aus Erftstadt",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Max Q. aus Bielefeld",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Julia C. aus Lahr",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Hat sich definitiv gelohnt.",
    "customer_name": "Fabian D. aus Unna",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Timo Y. aus Alsdorf",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Petra J. aus Arnsberg",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Niklas S. aus Cottbus",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Julian D. aus Kaiserslautern",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Rückziehmotor gefällt mir gut. Bin happy.",
    "customer_name": "Matteo S. aus Halle (Saale)",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Einfach klasse.",
    "customer_name": "Milan K. aus Augsburg",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Cooles Geschenk gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Susanne E. aus Delmenhorst",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Benedikt I. aus Gütersloh",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Christina D. aus Mannheim",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Erik V. aus Gießen",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Kilian Q. aus Menden",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Fabian I. aus Bottrop",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Felix R. aus Melle",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luis J. aus Brandenburg an der Havel",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Rückziehmotor gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Simon P. aus Krefeld",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Moritz I. aus Bergheim",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Monika M. aus Ahlen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Tobias H. aus Dormagen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Valentin J. aus Gronau",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Marlon E. aus Krefeld",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Tom P. aus Potsdam",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Petra P. aus Alsdorf",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Andrea O. aus Hamm",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Alles richtig gemacht.",
    "customer_name": "Henry Q. aus Essen",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Bin zufrieden.",
    "customer_name": "Arne H. aus Wolfenbüttel",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Tim A. aus Ibbenbüren",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Christina T. aus Kiel",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Toller Bauspaß gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra Z. aus Passau",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Dragon Design gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Luca V. aus Freising",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Anna P. aus Wilhelmshaven",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Rückziehmotor gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Erik K. aus Bergisch Gladbach",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Yannick U. aus Leverkusen",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Hannes E. aus Offenbach",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Sandra E. aus Stralsund",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Emil M. aus Wesel",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Leo S. aus Kerpen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Anja Z. aus Wolfenbüttel",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine N. aus Heilbronn",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Bin zufrieden.",
    "customer_name": "Simon P. aus Solingen",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Ein tolles Geschenk.",
    "customer_name": "Melanie S. aus Braunschweig",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Monster Truck gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Erik S. aus Neustadt an der Weinstraße",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Florian T. aus Bergkamen",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Stabil ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Henry Y. aus Euskirchen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Jonas C. aus Kamen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Stabil ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nico W. aus Passau",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jannik B. aus Hürth",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Bin happy.",
    "customer_name": "Finn T. aus Grevenbroich",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Jan H. aus Pulheim",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jonas H. aus Hameln",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Leon S. aus Gelsenkirchen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Toller Bauspaß gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Sandra K. aus Rastatt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julia J. aus Ratingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Christina C. aus Göttingen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Maximilian V. aus Rastatt",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Lukas R. aus Halle (Saale)",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Valentin F. aus Arnsberg",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Timo H. aus Dinslaken",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Monika W. aus Bruchsal",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Alles richtig gemacht.",
    "customer_name": "David M. aus Dormagen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Monster Truck ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Johannes Z. aus Böblingen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Toller Bauspaß ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Melanie L. aus Hilden",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nicole C. aus Greifswald",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Bastian Z. aus Neuss",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Marlon G. aus Stolberg",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Samuel R. aus Bocholt",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. 5 Sterne von mir.",
    "customer_name": "Oskar Z. aus Kempten",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Lisa Y. aus Düsseldorf",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Samuel W. aus Paderborn",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Dennis F. aus Wunstorf",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Niklas R. aus Heilbronn",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Sascha B. aus Traunstein",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Stabil gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Tom R. aus Troisdorf",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Monster Truck gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Florian Z. aus Sindelfingen",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Matteo V. aus Gladbeck",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Philipp W. aus Bamberg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Dragon Design gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Julian S. aus Hennef",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Top, weiter so.",
    "customer_name": "Timo N. aus Ludwigsburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Toller Bauspaß gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Johannes S. aus Marl",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Justus A. aus Ravensburg",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Absolute Kaufempfehlung.",
    "customer_name": "Elias Q. aus Sankt Augustin",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Petra F. aus Delmenhorst",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Anton E. aus Sindelfingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Für Fans ein absolutes Muss.",
    "customer_name": "Kerstin J. aus Dresden",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Robust gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Erik H. aus Dinslaken",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Arne D. aus Gütersloh",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Jan J. aus Lahr",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rückziehmotor ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "David F. aus Mönchengladbach",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Lenny N. aus Zwickau",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Dragon Design gefällt mir gut. Klare 10/10.",
    "customer_name": "Vincent R. aus Flensburg",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Bin happy.",
    "customer_name": "Julian E. aus Oldenburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lisa J. aus Wilhelmshaven",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Lukas D. aus Böblingen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "David Y. aus Sankt Augustin",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Anna H. aus Berlin",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Monster Truck gefällt mir gut. Einfach klasse.",
    "customer_name": "Elias G. aus Weimar",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Cooles Geschenk gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt R. aus Oldenburg",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Sarah J. aus Ahlen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Anna D. aus Regensburg",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Liam T. aus Landshut",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Dominik C. aus Neustadt an der Weinstraße",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Tim V. aus Peine",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Sarah H. aus Brandenburg an der Havel",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Birgit C. aus Magdeburg",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Katharina Y. aus Gelsenkirchen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Cooles Geschenk gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Justus M. aus Herten",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Sascha Y. aus Hamm",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Luis B. aus Neumünster",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Max D. aus Duisburg",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Theo P. aus Zwickau",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Oskar D. aus Mülheim an der Ruhr",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Monika P. aus Menden",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Für Fans ein absolutes Muss.",
    "customer_name": "Alexander D. aus Witten",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nicole D. aus Lüneburg",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Simon O. aus Lingen",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Cooles Geschenk gefällt mir gut. Daumen hoch!",
    "customer_name": "Liam O. aus Delmenhorst",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Toller Bauspaß ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea N. aus Schwerin",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Petra G. aus Witten",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Justus M. aus Peine",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Rückziehmotor gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Anton J. aus Sankt Augustin",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Toller Bauspaß gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Niklas R. aus Bielefeld",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Robust ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julia K. aus Kassel",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Dragon Design gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tobias Q. aus Peine",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Hannes J. aus Neunkirchen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Anton W. aus Stralsund",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Christoph E. aus Göttingen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Cooles Geschenk gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Nicole X. aus Bonn",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Kevin K. aus Rheine",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Rückziehmotor ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Finn N. aus Gronau",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Stabil ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Noah B. aus Leonberg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Vincent I. aus Gronau",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Maximilian W. aus Worms",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Leon Z. aus Flensburg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben B. aus Wetzlar",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Timo I. aus Bochum",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. 5 Sterne von mir.",
    "customer_name": "Nicole F. aus Lüdenscheid",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Monster Truck gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Emil H. aus Rüsselsheim",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Stabil ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Niklas M. aus Koblenz",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Bin happy.",
    "customer_name": "Laura I. aus Rosenheim",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Monika W. aus Lüdenscheid",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Robust gefällt mir gut. Klare 10/10.",
    "customer_name": "Matteo E. aus Magdeburg",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Melanie V. aus Weinheim",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Monster Truck gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kevin I. aus Hürth",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Birgit U. aus Bonn",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Tobias A. aus Weinheim",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Samuel U. aus Kamen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Timo C. aus Köln",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Birgit S. aus Plauen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Florian H. aus Paderborn",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Vincent K. aus Bad Homburg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Robust gefällt mir gut. Top, weiter so.",
    "customer_name": "Jonas B. aus Mönchengladbach",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Jonas G. aus Grevenbroich",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Petra H. aus Schwerin",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Stabil ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Paul T. aus Schwäbisch Gmünd",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Andrea G. aus Lüdenscheid",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Bin zufrieden.",
    "customer_name": "Jonas M. aus Weinheim",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Kevin O. aus Friedrichshafen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Toller Bauspaß gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico U. aus Jena",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Toller Bauspaß gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sandra V. aus Dorsten",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Toller Bauspaß gefällt mir gut. Bin happy.",
    "customer_name": "Lenny U. aus Stolberg",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia D. aus Greifswald",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Toller Bauspaß gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lenny J. aus Dormagen",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Valentin Y. aus Hamburg",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Monster Truck gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Jan R. aus Wolfsburg",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "David P. aus Düren",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Cooles Geschenk gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Christoph F. aus Göppingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Rückziehmotor gefällt mir gut. Daumen hoch!",
    "customer_name": "Susanne Q. aus Neumünster",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Stabil ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia S. aus Offenburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Monika W. aus Chemnitz",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Stabil gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin Z. aus Heinsberg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Dragon Design gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Hannes I. aus Lünen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Max V. aus Göppingen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Leo P. aus Oldenburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Absolute Kaufempfehlung.",
    "customer_name": "Moritz D. aus Ingolstadt",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian G. aus Detmold",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Cooles Geschenk gefällt mir gut. Bin happy.",
    "customer_name": "Luis M. aus Göttingen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Stabil gefällt mir gut. Daumen hoch!",
    "customer_name": "Robin I. aus Erkrath",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Johannes R. aus Ludwigsburg",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Philipp F. aus Schweinfurt",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Finn S. aus Flensburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Max W. aus Wolfenbüttel",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Julian L. aus Herten",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Susanne B. aus Dessau-Roßlau",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Robust gefällt mir gut. Danke.",
    "customer_name": "Dominik D. aus Freising",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Julia S. aus Waiblingen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Petra J. aus Offenbach",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Leon T. aus Esslingen",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Arne D. aus Krefeld",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sandra U. aus Schwerin",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anton U. aus Dachau",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Milan H. aus Karlsruhe",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Toller Bauspaß gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Sascha M. aus Leinfelden-Echterdingen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Monster Truck gefällt mir gut. Klare 10/10.",
    "customer_name": "Petra Y. aus Halle (Saale)",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Rückziehmotor gefällt mir gut. Bin happy.",
    "customer_name": "Noah F. aus Unna",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Elias T. aus Arnsberg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine U. aus Tübingen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Robin C. aus Rodgau",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas O. aus Erlangen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Dragon Design gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander J. aus Grevenbroich",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Jannik P. aus Neustadt an der Weinstraße",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Dennis Y. aus Trier",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Florian Z. aus Erfurt",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Claudia J. aus Speyer",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tom Y. aus Zwickau",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Rückziehmotor gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Nico Q. aus Troisdorf",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Fabian U. aus Waiblingen",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Sarah F. aus Kiel",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Hannes K. aus Frechen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Nicole O. aus Hürth",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Milan A. aus Bochum",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Philipp J. aus Menden",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Lenny K. aus Bergheim",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Monster Truck gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Maximilian C. aus Mönchengladbach",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Danke!",
    "customer_name": "Johannes D. aus Wunstorf",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Toller Bauspaß ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Jannik T. aus Delmenhorst",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Robust gefällt mir gut. Top, weiter so.",
    "customer_name": "Max T. aus Duisburg",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Theo A. aus Wunstorf",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Tobias S. aus Hattingen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Bastian M. aus Lingen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Erik Q. aus Göppingen",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Danke!",
    "customer_name": "Christoph R. aus Hildesheim",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Noah P. aus Lübeck",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Stabil gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Sabine X. aus Dessau-Roßlau",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Erik N. aus Herzogenrath",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Toller Bauspaß gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Lenny F. aus Mülheim an der Ruhr",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Justus W. aus Stolberg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Dragon Design gefällt mir gut. Einfach klasse.",
    "customer_name": "Tim A. aus Rheda-Wiedenbrück",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Arne L. aus Heidelberg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Nico G. aus Bamberg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Julia G. aus Lippstadt",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Rückziehmotor gefällt mir gut. Bin happy.",
    "customer_name": "Leo Y. aus Bergkamen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Claudia E. aus Offenburg",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Toller Bauspaß gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian O. aus Cottbus",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Timo B. aus Rheine",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "Monika D. aus Rüsselsheim",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Stabil ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Tom M. aus Kempten",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Stabil ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Luis J. aus Dülmen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Luis L. aus Worms",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Vincent J. aus Wunstorf",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Noah D. aus München",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Ein tolles Geschenk.",
    "customer_name": "Noah A. aus Witten",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Robust gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Monika J. aus Nordhorn",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Benedikt G. aus Oberursel",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Milan Z. aus Karlsruhe",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Rückziehmotor ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Anja A. aus Melle",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Yannick Q. aus Offenbach",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Vielen Dank für den schnellen Service.",
    "customer_name": "Johannes Y. aus Salzgitter",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Lenny O. aus Ibbenbüren",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Florian C. aus Rüsselsheim",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats V. aus Düsseldorf",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Marlon F. aus Düren",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Bin zufrieden.",
    "customer_name": "Kilian S. aus Trier",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Petra Q. aus Lemgo",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Jonas W. aus Norderstedt",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Cooles Geschenk gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Melanie F. aus Wolfsburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Anton Y. aus Hürth",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Milan T. aus Dorsten",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anton R. aus Dorsten",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Robust gefällt mir gut. Einfach klasse.",
    "customer_name": "Milan E. aus Iserlohn",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Kilian F. aus Villingen-Schwenningen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Rückziehmotor gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Hannes P. aus Freiburg",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Vielen Dank für den schnellen Service.",
    "customer_name": "Tanja B. aus Fellbach",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Toller Bauspaß gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Vincent N. aus Bayreuth",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Dragon Design gefällt mir gut. Danke.",
    "customer_name": "Claudia F. aus Langenhagen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "David M. aus Eschweiler",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Dominik G. aus Emden",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Robust gefällt mir gut. Klare 10/10.",
    "customer_name": "Elias J. aus Tübingen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Danke.",
    "customer_name": "Sandra U. aus Halle (Saale)",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian B. aus Herzogenrath",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Danke!",
    "customer_name": "Adrian K. aus Neuss",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Katharina X. aus Fulda",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Benedikt G. aus Herne",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Anton S. aus Eschweiler",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Stefanie H. aus Hof",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Matteo X. aus Heidenheim",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian P. aus Menden",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Kilian G. aus Wesel",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Rückziehmotor gefällt mir gut. Daumen hoch!",
    "customer_name": "Benedikt G. aus Oldenburg",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Robust gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus N. aus Neu-Ulm",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Susanne P. aus Langenhagen",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Lenny U. aus Straubing",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Hat sich definitiv gelohnt.",
    "customer_name": "Anton X. aus Potsdam",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Philipp E. aus Troisdorf",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Stabil ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Oskar G. aus Herford",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Danke.",
    "customer_name": "Felix E. aus Göttingen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Cooles Geschenk gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa O. aus Remscheid",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Top.",
    "customer_name": "Matteo S. aus Freiburg",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Oskar C. aus Detmold",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Für Fans ein absolutes Muss.",
    "customer_name": "Christoph P. aus Remscheid",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Felix G. aus Lahr",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Julian Q. aus Tübingen",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Monster Truck gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Timo U. aus Hamm",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Petra K. aus Fellbach",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Monster Truck gefällt mir gut. Daumen hoch!",
    "customer_name": "Felix C. aus Soest",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Bastian K. aus Marburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Super Shop.",
    "customer_name": "Anton U. aus Wolfsburg",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Stabil ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Yannick P. aus Elmshorn",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Dominik D. aus München",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim O. aus Gronau",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Toller Bauspaß gefällt mir gut. Top, weiter so.",
    "customer_name": "Mats K. aus Leonberg",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Andrea V. aus Traunstein",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Stabil gefällt mir gut. Einfach klasse.",
    "customer_name": "Jannik Q. aus Dorsten",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Monster Truck gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lenny Y. aus Wolfsburg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Dragon Design gefällt mir gut. Top, weiter so.",
    "customer_name": "Max T. aus Straubing",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Yannick W. aus Hilden",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Milan Y. aus Rheda-Wiedenbrück",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Malte U. aus Fulda",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Erik V. aus Bad Salzuflen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Christina Q. aus Bielefeld",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Top.",
    "customer_name": "Elias U. aus Pulheim",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Laura O. aus Mülheim an der Ruhr",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Kerstin F. aus Kassel",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Robust gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Nicole J. aus Trier",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Dominik S. aus Bergheim",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Johannes W. aus Ratingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Julian W. aus Freising",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Robust gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Tim P. aus Witten",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Einfach klasse.",
    "customer_name": "Anton X. aus Villingen-Schwenningen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Max O. aus Oldenburg",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Cooles Geschenk gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Christina P. aus Rheda-Wiedenbrück",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Philipp C. aus Neuwied",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Robin B. aus Troisdorf",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Tanja Y. aus Schweinfurt",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Elias U. aus Rheda-Wiedenbrück",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Hannes W. aus Weimar",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Anja N. aus Jena",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Lenny H. aus Düsseldorf",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Nicole N. aus Eschweiler",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Matteo C. aus Elmshorn",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Dragon Design gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Birgit Z. aus Gera",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Nico V. aus Neumünster",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Tom L. aus Bergheim",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Julia I. aus Garbsen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Danke.",
    "customer_name": "Fabian Z. aus Paderborn",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Monster Truck gefällt mir gut. Bin happy.",
    "customer_name": "Stefanie Q. aus Bottrop",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Mats K. aus Fürth",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Malte Q. aus Rheda-Wiedenbrück",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Samuel L. aus Bruchsal",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Malte P. aus Lippstadt",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "David B. aus Lünen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Lisa I. aus Wunstorf",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Andrea U. aus Buxtehude",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Lukas C. aus Eisenach",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Henry O. aus Bietigheim-Bissingen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Robust gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Mats F. aus Recklinghausen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tom F. aus Sankt Augustin",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Paul Y. aus Straubing",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Henry W. aus Nordhorn",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Henry X. aus Pforzheim",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Petra R. aus Kiel",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Sarah H. aus Köln",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Robust gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tanja V. aus Buxtehude",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Florian W. aus Marl",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Rückziehmotor gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Kilian R. aus Oldenburg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Birgit E. aus Viersen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim S. aus Dortmund",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Stabil ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Jannik U. aus Herford",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Marlon N. aus Mülheim an der Ruhr",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Mats W. aus Detmold",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Robust ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Dominik V. aus Böblingen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Tim X. aus Mönchengladbach",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Elias O. aus Schwerin",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul T. aus Rodgau",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Malte H. aus Ravensburg",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Monika D. aus Rostock",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Ben R. aus Nettetal",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Sarah S. aus Tübingen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Lenny E. aus Karlsruhe",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Katharina T. aus Erlangen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Toller Bauspaß gefällt mir gut. Daumen hoch!",
    "customer_name": "Sandra X. aus Ibbenbüren",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Top, weiter so.",
    "customer_name": "Johannes B. aus Gütersloh",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Birgit O. aus Hanau",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian Z. aus Bielefeld",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Stabil ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Sabine E. aus Dresden",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kreativ gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo Y. aus Neuwied",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Hat sich definitiv gelohnt.",
    "customer_name": "Milan C. aus Celle",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Julia P. aus Schweinfurt",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Stabil ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Sascha Q. aus Düsseldorf",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Samuel L. aus Brandenburg an der Havel",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Florian P. aus Ratingen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Nadine Z. aus Mülheim an der Ruhr",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Christina F. aus Bottrop",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Bin zufrieden.",
    "customer_name": "Paul Z. aus Mönchengladbach",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Dennis U. aus Rheine",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Top, weiter so.",
    "customer_name": "Julia D. aus Baden-Baden",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Cooles Geschenk gefällt mir gut. Daumen hoch!",
    "customer_name": "Bastian O. aus Straubing",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Fabian W. aus Troisdorf",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Valentin Q. aus Stolberg",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Stabil ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "David Q. aus Hamm",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "David G. aus Leverkusen",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Theo E. aus Bornheim",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Kreativ gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Yannick J. aus Minden",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Kevin G. aus Grevenbroich",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Top.",
    "customer_name": "Nico B. aus Neuss",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Elias Q. aus Ibbenbüren",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit W. aus Leipzig",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Anja W. aus Greifswald",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Stabil gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lisa W. aus Bad Kreuznach",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Toller Bauspaß gefällt mir gut. Einfach klasse.",
    "customer_name": "Robin Y. aus Krefeld",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Max H. aus Garbsen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Julian O. aus Heilbronn",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Justus I. aus Nordhorn",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Kilian W. aus Friedrichshafen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kreativ gefällt mir gut. Super Shop.",
    "customer_name": "Nadine N. aus Essen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Nico H. aus Chemnitz",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Adrian X. aus Wetzlar",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Sandra X. aus Oberhausen",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Robust gefällt mir gut. Top, weiter so.",
    "customer_name": "Niklas M. aus Göttingen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Anja A. aus Lahr",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Liam R. aus Leverkusen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Jannik Q. aus Dortmund",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie U. aus Marl",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Lukas B. aus Friedrichshafen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Monika I. aus Arnsberg",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar Q. aus Augsburg",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Vielen Dank für den schnellen Service.",
    "customer_name": "Leon H. aus Frechen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis F. aus Aachen",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Petra Z. aus Saarbrücken",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Monster Truck gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Luis Q. aus Minden",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Yannick J. aus Bonn",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Christoph E. aus Kaufbeuren",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Stabil ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Dominik N. aus Witten",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rückziehmotor ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Felix S. aus Melle",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Lenny H. aus Unna",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Sabine R. aus Oldenburg",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Toller Bauspaß gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Felix U. aus Kassel",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Katharina I. aus Dorsten",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Robust gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kevin X. aus Bremen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Elias F. aus Göppingen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon B. aus Bergkamen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Johannes G. aus Wilhelmshaven",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Jan C. aus Göppingen",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Julian I. aus Neuwied",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julian Y. aus Sindelfingen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Anna Z. aus Arnsberg",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Für Fans ein absolutes Muss.",
    "customer_name": "Susanne B. aus Bielefeld",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Tim I. aus Wilhelmshaven",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Einfach klasse.",
    "customer_name": "Luca L. aus Brandenburg an der Havel",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Stabil ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Max U. aus Bochum",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Noah P. aus Heinsberg",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Finn X. aus Darmstadt",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tobias W. aus Peine",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Top.",
    "customer_name": "Sabine B. aus Mainz",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Sascha Z. aus Recklinghausen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Robust ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Kevin I. aus Rottenburg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Danke!",
    "customer_name": "Oskar L. aus Böblingen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Monster Truck gefällt mir gut. Einfach klasse.",
    "customer_name": "Kilian Z. aus Neuss",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Benedikt E. aus Darmstadt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Luis P. aus Oranienburg",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Sabine U. aus Ingolstadt",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Anna U. aus Dormagen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Tobias R. aus Cottbus",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Robin V. aus Rosenheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Cooles Geschenk gefällt mir gut. Klare 10/10.",
    "customer_name": "Vincent D. aus Ludwigshafen",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Kerstin S. aus Eisenach",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Dragon Design gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Benedikt F. aus Kaiserslautern",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Leon Y. aus Hattingen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Simon G. aus Greifswald",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Simon A. aus Velbert",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Melanie E. aus Görlitz",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Marlon A. aus Jena",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Daumen hoch!",
    "customer_name": "Hannes W. aus Rottenburg",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Preis-Leistung stimmt hier.",
    "customer_name": "Robin M. aus Monheim am Rhein",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Maria M. aus Dortmund",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Monika K. aus Erlangen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Bastian A. aus Pinneberg",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Felix C. aus Kerpen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Rückziehmotor gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Ben Y. aus Leverkusen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Julia K. aus Straubing",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "David Y. aus Osnabrück",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Matteo U. aus Hürth",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Justus M. aus Euskirchen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Lisa S. aus Rottenburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Vincent P. aus Arnsberg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Valentin P. aus Neunkirchen",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton X. aus Hof",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Tom Z. aus Kamen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Yannick E. aus Wunstorf",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Luis G. aus Delmenhorst",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "David B. aus Herford",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Fabian U. aus Aalen",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Kilian G. aus Pinneberg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Hannes B. aus Weimar",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Dragon Design gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats G. aus Dessau-Roßlau",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Robust gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Christoph T. aus Gladbeck",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Jonas E. aus Offenburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Luis G. aus Weinheim",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kreativ gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Julia Q. aus Paderborn",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Tim G. aus Bayreuth",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Stabil ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Florian E. aus Aschaffenburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Stabil ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Samuel I. aus Bremerhaven",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lisa V. aus Bottrop",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Elias P. aus Nürnberg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Bastian K. aus Freising",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Lukas C. aus Nettetal",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "David I. aus Düsseldorf",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Noah G. aus Heinsberg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Katharina D. aus Reutlingen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis F. aus Hamburg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Jan B. aus Wolfsburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin rundum zufrieden.",
    "customer_name": "Melanie H. aus Gera",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Stabil gefällt mir gut. Bin happy.",
    "customer_name": "Maria G. aus Freiburg",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dominik N. aus Bad Salzuflen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Johannes U. aus Görlitz",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Robin S. aus Flensburg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Moritz G. aus Siegen",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Danke!",
    "customer_name": "Anton T. aus Rheine",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Monster Truck gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kerstin S. aus Celle",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Malte I. aus Schwerin",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Robust gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Matteo Y. aus Hameln",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Anja T. aus Bietigheim-Bissingen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Robin F. aus Freising",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sascha H. aus Bayreuth",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Stabil ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Moritz G. aus Rheda-Wiedenbrück",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Stabil ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Valentin F. aus Bocholt",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Anna X. aus Speyer",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Kreativ gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Tim R. aus Sankt Augustin",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Maria V. aus Gummersbach",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Absolute Kaufempfehlung.",
    "customer_name": "Leo X. aus Lübeck",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Super Shop.",
    "customer_name": "Elias Q. aus Plauen",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kreativ gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Anna D. aus Rüsselsheim",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Timo Z. aus Dormagen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Cooles Geschenk gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Laura S. aus Hameln",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Matteo N. aus Kamen",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Benedikt B. aus Lübeck",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Simon O. aus Salzgitter",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Theo Y. aus Lüdenscheid",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Finn Q. aus Stuttgart",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Jonas P. aus Bruchsal",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Tim X. aus Viersen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Adrian G. aus Pinneberg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Alles richtig gemacht.",
    "customer_name": "Noah K. aus Pulheim",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Tanja L. aus Ulm",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Justus P. aus Stuttgart",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Birgit I. aus Paderborn",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Robust gefällt mir gut. Top, weiter so.",
    "customer_name": "Fabian R. aus Halle (Saale)",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Johannes X. aus Gießen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Toller Bauspaß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Finn Z. aus Bamberg",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Sarah K. aus Duisburg",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Jannik I. aus Ludwigsburg",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Nico Z. aus Bonn",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Super Shop.",
    "customer_name": "Nico C. aus Kerpen",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Luca O. aus Flensburg",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Hat sich definitiv gelohnt.",
    "customer_name": "Kilian K. aus Weimar",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Rückziehmotor ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Mats B. aus Leonberg",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Rückziehmotor gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Oskar K. aus Nordhorn",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Sascha Q. aus Magdeburg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Niklas U. aus Heidelberg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Monika T. aus Weinheim",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Birgit S. aus Bruchsal",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Tim X. aus Brandenburg an der Havel",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Finn U. aus Cottbus",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Adrian A. aus Leonberg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "David I. aus Lörrach",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Ein tolles Geschenk.",
    "customer_name": "Theo I. aus Fürth",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Samuel W. aus Kassel",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Lenny C. aus Lemgo",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Anton L. aus Bergheim",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Jan D. aus Hamm",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Finn F. aus Bergisch Gladbach",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Danke!",
    "customer_name": "Julian A. aus Hamburg",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Julian T. aus Oberhausen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar D. aus Dinslaken",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Jonas G. aus Neu-Ulm",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Dragon Design gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Monika Y. aus Bruchsal",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Niklas C. aus Göppingen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Florian L. aus Esslingen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Toller Bauspaß gefällt mir gut. Bin happy.",
    "customer_name": "Jonas D. aus Oberhausen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christoph A. aus Filderstadt",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Cooles Geschenk gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik G. aus Salzgitter",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Monster Truck gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Luca C. aus Zwickau",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Erik T. aus Hürth",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Max J. aus Mönchengladbach",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Timo F. aus Rastatt",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Anna X. aus Leinfelden-Echterdingen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Stabil gefällt mir gut. Top, weiter so.",
    "customer_name": "Julian G. aus Landshut",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Bin zufrieden.",
    "customer_name": "Jan Q. aus Bornheim",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Valentin B. aus Brotterode",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Stabil gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Paul P. aus Minden",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Bin zufrieden.",
    "customer_name": "Monika R. aus Wiesbaden",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Vincent D. aus Würzburg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Daumen hoch!",
    "customer_name": "Lukas D. aus Berlin",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Leon O. aus Hameln",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Bin zufrieden.",
    "customer_name": "Moritz E. aus Meerbusch",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin E. aus Arnsberg",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Andrea O. aus Leverkusen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Rückziehmotor gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Mats D. aus Stralsund",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Henry G. aus Ravensburg",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Christina D. aus Monheim am Rhein",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Kevin R. aus Witten",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Super Shop.",
    "customer_name": "Kerstin F. aus Leipzig",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kreativ gefällt mir gut. Danke.",
    "customer_name": "Milan O. aus Garbsen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Bin zufrieden.",
    "customer_name": "Andrea X. aus Rodgau",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Stabil gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Lenny Q. aus Gütersloh",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Monika D. aus Erfurt",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Tanja S. aus Hilden",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Anton O. aus Wilhelmshaven",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Emil T. aus Chemnitz",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Leon B. aus Böblingen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Max C. aus Bergisch Gladbach",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Philipp R. aus Eschweiler",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Bin rundum zufrieden.",
    "customer_name": "Bastian R. aus Remscheid",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Stabil ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Christoph U. aus Ravensburg",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Erik S. aus Emden",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Finn K. aus Friedrichshafen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Robust gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Christina G. aus Schweinfurt",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Oskar D. aus Kamen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Yannick A. aus Bayreuth",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Katharina Y. aus Melle",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Dennis Z. aus Aachen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Cooles Geschenk gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Valentin U. aus Hamburg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Sabine F. aus Marburg",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Timo W. aus Straubing",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Robust ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Finn A. aus Neu-Ulm",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tobias U. aus Kerpen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lenny J. aus Zwickau",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Dragon Design ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Theo P. aus Sankt Augustin",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julian O. aus Hanau",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Anna T. aus Landshut",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Robust gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Liam L. aus Erftstadt",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Sarah S. aus Wetzlar",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Leon V. aus Baden-Baden",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Max B. aus Aschaffenburg",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Kevin U. aus Bergheim",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Christina N. aus Villingen-Schwenningen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Maximilian O. aus Erlangen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Tim P. aus Wilhelmshaven",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Liam T. aus Braunschweig",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Felix O. aus Dachau",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Bastian H. aus Nürnberg",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Stefanie V. aus Kassel",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Robin W. aus Herten",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Andrea T. aus Lüdenscheid",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Dragon Design gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Theo P. aus Bietigheim-Bissingen",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Danke!",
    "customer_name": "Sascha Q. aus Oranienburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Danke!",
    "customer_name": "Tanja Z. aus Wiesbaden",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Jan D. aus Garbsen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Katharina K. aus Albstadt",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Robust ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Leo L. aus Bad Homburg",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne Q. aus Rheine",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Jannik U. aus Neumünster",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Felix W. aus Detmold",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "David J. aus Bielefeld",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christina P. aus Greifswald",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Theo E. aus Wiesbaden",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas G. aus Minden",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Freue mich schon auf das nächste Set.",
    "customer_name": "Henry N. aus Siegen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Luca G. aus Fulda",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Vincent J. aus Unna",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Preis-Leistung stimmt hier.",
    "customer_name": "Benedikt Y. aus Baden-Baden",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Tom E. aus Herten",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Dragon Design gefällt mir gut. Klare 10/10.",
    "customer_name": "Luis H. aus Kamen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Bin zufrieden.",
    "customer_name": "Matteo S. aus Mülheim an der Ruhr",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Kreativ gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Max W. aus Mönchengladbach",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Stabil gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Fabian H. aus Krefeld",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Robust ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Maximilian Z. aus Kassel",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Maria A. aus Dortmund",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tobias C. aus Lüdenscheid",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Stabil gefällt mir gut. Einfach klasse.",
    "customer_name": "Christina N. aus Lippstadt",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Erik W. aus Wunstorf",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Oskar T. aus Ahlen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Luca D. aus Weinheim",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Jannik K. aus Gelsenkirchen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Monster Truck gefällt mir gut. Danke.",
    "customer_name": "Noah K. aus Norderstedt",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Maria M. aus Pulheim",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Justus I. aus Jena",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Jan X. aus Albstadt",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Timo V. aus Peine",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Bastian C. aus Offenbach",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Dragon Design gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Finn Z. aus Remscheid",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Stabil gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Florian L. aus Wilhelmshaven",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Jonas L. aus Gronau",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Tobias Y. aus Düsseldorf",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Toller Bauspaß gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Sandra L. aus Pinneberg",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Timo U. aus Wesel",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Toller Bauspaß gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Christoph V. aus Pulheim",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Top, weiter so.",
    "customer_name": "Erik K. aus Lüdenscheid",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Stabil gefällt mir gut. Daumen hoch!",
    "customer_name": "Luis D. aus Braunschweig",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. 5 Sterne von mir.",
    "customer_name": "Tobias I. aus Lörrach",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. So macht LEGO Spaß.",
    "customer_name": "Anja U. aus Paderborn",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Danke!",
    "customer_name": "Nico H. aus Aalen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Rückziehmotor gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anna I. aus Saarbrücken",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Ein tolles Geschenk.",
    "customer_name": "Simon Q. aus Neustadt an der Weinstraße",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Dominik J. aus Osnabrück",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik X. aus Oberhausen",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine E. aus Nettetal",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Toller Bauspaß gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Lenny A. aus Nettetal",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Stefanie Q. aus Gummersbach",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Emil J. aus Troisdorf",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Tanja H. aus Neunkirchen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Einfach klasse.",
    "customer_name": "Mats P. aus Grevenbroich",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Leon Y. aus Fellbach",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Dennis C. aus Leonberg",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Timo I. aus Peine",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Stefanie F. aus Rüsselsheim",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Milan U. aus Gummersbach",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Milan U. aus Landshut",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Monster Truck gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "David O. aus Gütersloh",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Robust gefällt mir gut. Einfach klasse.",
    "customer_name": "Alexander K. aus Saarbrücken",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian D. aus Lahr",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Milan D. aus Bottrop",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Ein tolles Geschenk.",
    "customer_name": "Luca Z. aus Marl",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Toller Bauspaß ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Simon C. aus Oldenburg",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Jannik L. aus Langenfeld",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Laura P. aus Offenbach",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Petra K. aus Dülmen",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Anton G. aus Wolfenbüttel",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Laura C. aus Dortmund",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Maximilian R. aus Düsseldorf",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Stabil ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Milan N. aus Oberursel",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Henry Y. aus Essen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Birgit M. aus München",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Dragon Design gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lenny F. aus Eschweiler",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Tim R. aus Halle (Saale)",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Robust gefällt mir gut. Super Shop.",
    "customer_name": "Melanie Q. aus Hamm",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Klare 10/10.",
    "customer_name": "Yannick G. aus Bad Homburg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Stefanie E. aus Heidelberg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Luca Z. aus Rüsselsheim",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Robust gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Milan O. aus Pforzheim",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Florian E. aus Dorsten",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Dragon Design gefällt mir gut. Danke.",
    "customer_name": "Paul K. aus Oranienburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Top.",
    "customer_name": "Andrea O. aus Schwerin",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Tom V. aus Offenburg",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix B. aus Ratingen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Rückziehmotor gefällt mir gut. Super Shop.",
    "customer_name": "Alexander E. aus Minden",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Kerstin Y. aus Buxtehude",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Stefanie T. aus Schwäbisch Gmünd",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Bastian R. aus Celle",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Anton Y. aus Emden",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Dragon Design gefällt mir gut. Daumen hoch!",
    "customer_name": "Lenny Z. aus Neumünster",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Robust gefällt mir gut. Super Shop.",
    "customer_name": "Claudia G. aus Duisburg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Moritz N. aus Dülmen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Lenny L. aus Gelsenkirchen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Justus B. aus Erftstadt",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Henry V. aus Offenburg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Rückziehmotor gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nico P. aus Lörrach",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Dragon Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Benedikt L. aus Kempten",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Nadine I. aus Stralsund",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Julian K. aus Kempten",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Vincent J. aus Grevenbroich",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Julian O. aus Magdeburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Fabian J. aus Wolfsburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Preis-Leistung stimmt hier.",
    "customer_name": "Laura G. aus Bornheim",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Kevin C. aus Weimar",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Laura V. aus Duisburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Henry U. aus Gelsenkirchen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Susanne H. aus Gelsenkirchen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Bin zufrieden.",
    "customer_name": "Johannes J. aus Waiblingen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Anton Q. aus Elmshorn",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Stabil gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Susanne C. aus Trier",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Leon Q. aus Straubing",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Jonas G. aus Salzgitter",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Nico G. aus Ravensburg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Stabil ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Florian F. aus Dessau-Roßlau",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Christina K. aus Gelsenkirchen",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Danke!",
    "customer_name": "Niklas T. aus Stolberg",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Kilian I. aus München",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Stabil ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Maximilian Q. aus Brotterode",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Erik B. aus Esslingen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Toller Bauspaß gefällt mir gut. Einfach klasse.",
    "customer_name": "Julian E. aus Rostock",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Einfach klasse.",
    "customer_name": "Ben T. aus Oberhausen",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Stabil gefällt mir gut. Klare 10/10.",
    "customer_name": "Simon B. aus Frankfurt (Oder)",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Cooles Geschenk gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luis P. aus Erkrath",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rückziehmotor ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Florian D. aus Stralsund",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Kilian V. aus Ahlen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Florian I. aus Pinneberg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Monika P. aus Salzgitter",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Toller Bauspaß gefällt mir gut. Einfach klasse.",
    "customer_name": "Kerstin C. aus Frankfurt (Oder)",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Katharina Y. aus Offenbach",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Oskar Q. aus Stuttgart",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Paul P. aus Speyer",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Monster Truck gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Kilian K. aus Neumünster",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Rückziehmotor gefällt mir gut. Daumen hoch!",
    "customer_name": "Hannes C. aus Bad Homburg",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Maria E. aus Langenhagen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Lenny W. aus Bad Oeynhausen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Felix B. aus Eschweiler",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Alexander P. aus Unna",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "David V. aus Ibbenbüren",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Katharina X. aus Saarbrücken",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Ein tolles Geschenk.",
    "customer_name": "Noah W. aus Flensburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Jonas A. aus Duisburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Noah N. aus Darmstadt",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Dragon Design gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Laura G. aus Gladbeck",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Henry Q. aus Speyer",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Justus I. aus Frankfurt",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Yannick W. aus Marl",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Valentin R. aus Weinheim",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Arne B. aus Augsburg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Marlon Z. aus Hannover",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Dennis W. aus Pforzheim",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Cooles Geschenk gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil Z. aus Wiesbaden",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Danke!",
    "customer_name": "Anna K. aus Soest",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Rückziehmotor gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Lisa Q. aus Wetzlar",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Julian X. aus Neuss",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole W. aus Duisburg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Robin B. aus Alsdorf",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Anja V. aus Bamberg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Stabil gefällt mir gut. Super Shop.",
    "customer_name": "Tim D. aus Peine",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Lenny M. aus Hürth",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Noah C. aus Buxtehude",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Paul J. aus Ibbenbüren",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis I. aus Hildesheim",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Susanne G. aus Bruchsal",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Leon A. aus Viersen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Anna L. aus Zwickau",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Noah I. aus Hilden",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich.",
    "customer_name": "Dennis F. aus Braunschweig",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Kreativ gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Justus U. aus Leipzig",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Elias N. aus Rüsselsheim",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Dragon Design gefällt mir gut. Danke.",
    "customer_name": "Emil H. aus Flensburg",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Nicole N. aus Kassel",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Julian M. aus Krefeld",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Toller Bauspaß ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Anja V. aus Neu-Ulm",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Kreativ gefällt mir gut. Super Shop.",
    "customer_name": "Robin R. aus Bochum",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Bastian A. aus Jena",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Nadine O. aus Bremerhaven",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Melanie A. aus Rüsselsheim",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Alles richtig gemacht.",
    "customer_name": "Tim X. aus Bietigheim-Bissingen",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Emil Q. aus Düsseldorf",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Nico S. aus Heidelberg",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Kerstin F. aus Bielefeld",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Malte P. aus Fulda",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Theo I. aus Freising",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Cooles Geschenk gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Philipp R. aus Erftstadt",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Ein tolles Geschenk.",
    "customer_name": "Elias A. aus Trier",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Dragon Design gefällt mir gut. Super Shop.",
    "customer_name": "Justus H. aus Fürth",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Bastian V. aus Detmold",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Maria I. aus Erlangen",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Monster Truck ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Kilian S. aus Schwerin",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Kreativ gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Andrea B. aus Leverkusen",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Finn N. aus Bayreuth",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Rückziehmotor gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Andrea O. aus Reutlingen",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Stabil ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Fabian X. aus Buxtehude",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Nico P. aus Grevenbroich",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Timo S. aus Celle",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Nico R. aus Nürnberg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Sabine J. aus Dinslaken",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Tanja S. aus Wunstorf",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Für Fans ein absolutes Muss.",
    "customer_name": "Marlon Y. aus Mannheim",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. 5 Sterne von mir.",
    "customer_name": "Christina G. aus Dessau-Roßlau",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Kilian L. aus Alsdorf",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Emil V. aus Nettetal",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Monster Truck gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Alexander U. aus Speyer",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Cooles Geschenk gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Jannik K. aus Rostock",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Stefanie F. aus Garbsen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Johannes R. aus Wunstorf",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julian H. aus Lingen",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne S. aus Langenfeld",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Cooles Geschenk gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Laura N. aus Augsburg",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Noah N. aus Schwerin",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Lisa H. aus Karlsruhe",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Laura T. aus Passau",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Ben O. aus Garbsen",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Christina E. aus Aurich",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Moritz Q. aus Lübeck",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Noah O. aus Brotterode",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Stabil ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Bastian E. aus Paderborn",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Toller Bauspaß gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Katharina I. aus Offenbach",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Stabil gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Vincent J. aus Leipzig",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Jonas M. aus Filderstadt",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Bin zufrieden.",
    "customer_name": "Fabian A. aus Moers",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Bin happy.",
    "customer_name": "Fabian X. aus Rheine",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian Q. aus Meerbusch",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Liam C. aus Frankfurt",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Elias Z. aus Dachau",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Stabil ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "David V. aus Sindelfingen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Bin zufrieden.",
    "customer_name": "Petra E. aus Norderstedt",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Birgit V. aus Erfurt",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rückziehmotor ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Anton W. aus Rostock",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Simon B. aus Offenburg",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Jonas N. aus Kiel",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Toller Bauspaß ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Emil F. aus Dormagen",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Geschenk ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Mats D. aus Bergheim",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Noah M. aus Krefeld",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Bin zufrieden.",
    "customer_name": "Paul U. aus Cottbus",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Katharina J. aus Witten",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Stabil ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Sandra S. aus Kleve",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Robin W. aus Berlin",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Toller Bauspaß gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Jan X. aus Solingen",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Tim E. aus Memmingen",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Benedikt A. aus Berlin",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Noah R. aus Aachen",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Danke!",
    "customer_name": "Julian K. aus Halle (Saale)",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lisa K. aus Delmenhorst",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Sabine R. aus Stolberg",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Stabil gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Matteo F. aus Koblenz",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Robust ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Monika V. aus Kempten",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Sandra H. aus Hilden",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Stefanie A. aus Stolberg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Stabil gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Luis G. aus Flensburg",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Bastian J. aus Marl",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Monster Truck gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie A. aus Lüdenscheid",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Katharina D. aus Fürth",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Klare 10/10.",
    "customer_name": "Fabian T. aus Witten",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Monster Truck ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Anja N. aus Pinneberg",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Alexander W. aus Esslingen",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Dragon Design gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Valentin A. aus Gummersbach",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Monster Truck gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Sarah E. aus Soest",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Monster Truck gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Florian O. aus Soest",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Cooles Geschenk gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Henry F. aus Dessau-Roßlau",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Leon K. aus Hamm",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Monika E. aus Kempten",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Melanie Y. aus Memmingen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Kreativ gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christoph L. aus Lemgo",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Toller Bauspaß gefällt mir gut. Top, weiter so.",
    "customer_name": "Stefanie N. aus Bielefeld",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Toller Bauspaß gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Melanie M. aus Augsburg",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Laura S. aus Neumünster",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Erik M. aus Kaufbeuren",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Claudia A. aus Memmingen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Top.",
    "customer_name": "Nico U. aus Kleve",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Valentin U. aus Passau",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Toller Bauspaß gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Christina U. aus Gelsenkirchen",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika H. aus Hagen",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Anton S. aus Hannover",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Preis-Leistung stimmt hier.",
    "customer_name": "Bastian I. aus Moers",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Stefanie V. aus Pulheim",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia M. aus Traunstein",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Stabil gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kerstin D. aus Hildesheim",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Fabian S. aus Freiburg",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian U. aus Frankfurt",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Dragon Design gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura Y. aus Borken",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Stabil gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Melanie A. aus Mülheim an der Ruhr",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Maximilian A. aus Regensburg",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Dennis K. aus Dessau-Roßlau",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Lenny U. aus Melle",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Timo S. aus Gladbeck",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Absolute Kaufempfehlung.",
    "customer_name": "Samuel E. aus Mönchengladbach",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Malte U. aus Hennef",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Tim X. aus Sankt Augustin",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Danke.",
    "customer_name": "Ben K. aus Stralsund",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo H. aus Herzogenrath",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Samuel V. aus Stuttgart",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Preis-Leistung stimmt hier.",
    "customer_name": "Julian L. aus Dessau-Roßlau",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Claudia U. aus Hamburg",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Moritz Q. aus Troisdorf",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Bastian N. aus Offenburg",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Bastian W. aus Bad Kreuznach",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Sabine U. aus Salzgitter",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny W. aus Wolfsburg",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Liam M. aus Saarbrücken",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Robust ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Felix E. aus Dinslaken",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Florian X. aus Fellbach",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Max B. aus Weinheim",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Bin zufrieden.",
    "customer_name": "Adrian X. aus Kleve",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Henry U. aus Kaiserslautern",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Cooles Geschenk gefällt mir gut. Klare 10/10.",
    "customer_name": "Johannes D. aus Kleve",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Freue mich schon auf das nächste Set.",
    "customer_name": "Erik K. aus Bamberg",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Niklas M. aus Essen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Emil W. aus Villingen-Schwenningen",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Lukas O. aus Wunstorf",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Kreativ gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kerstin H. aus Wesel",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Anja A. aus Wilhelmshaven",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Kreativ gefällt mir gut. Danke.",
    "customer_name": "Benedikt O. aus Chemnitz",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Max W. aus Worms",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Niklas X. aus Osnabrück",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Für Fans ein absolutes Muss.",
    "customer_name": "Florian S. aus Villingen-Schwenningen",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Robust ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Arne L. aus Lahr",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Robust ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Tanja J. aus Offenburg",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Theo F. aus Bielefeld",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Philipp J. aus Gelsenkirchen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Robin F. aus Brandenburg an der Havel",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Rückziehmotor gefällt mir gut. Bin happy.",
    "customer_name": "Elias N. aus Heinsberg",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Elias S. aus Karlsruhe",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin happy.",
    "customer_name": "Dominik P. aus Ravensburg",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Sabine O. aus Neuwied",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Toller Bauspaß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Lenny R. aus Reutlingen",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Robust gefällt mir gut. Top, weiter so.",
    "customer_name": "Maria Q. aus Baden-Baden",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Monster Truck ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Luis X. aus Detmold",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Jannik Y. aus Wiesbaden",
    "date": "2025-02-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Lisa P. aus Bruchsal",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Toller Bauspaß ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Justus M. aus Gronau",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Stabil gefällt mir gut. Super Shop.",
    "customer_name": "Sascha P. aus Detmold",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Alexander P. aus Monheim am Rhein",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Top.",
    "customer_name": "Valentin W. aus Freising",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Sabine T. aus Hennef",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Bastian B. aus Esslingen",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Monster Truck ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Philipp M. aus Melle",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Tobias Q. aus Stuttgart",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Oskar V. aus Sindelfingen",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Johannes O. aus Emden",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Marlon P. aus Görlitz",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Monster Truck gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Liam J. aus Jena",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Henry I. aus Rottenburg",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Yannick D. aus Meerbusch",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Leon O. aus Leinfelden-Echterdingen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Lisa L. aus Kaufbeuren",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Adrian O. aus Jena",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Philipp S. aus Trier",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Erik T. aus Erfurt",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Christina G. aus Erftstadt",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Nicole X. aus Konstanz",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Felix M. aus Siegen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Stabil ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Sandra I. aus Bremerhaven",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Erik M. aus Dülmen",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Fabian R. aus Hennef",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Christoph R. aus Hennef",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Hannes G. aus Wiesbaden",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Rückziehmotor ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Anna L. aus Regensburg",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Kerstin D. aus Aurich",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Kilian A. aus Oberursel",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Kreativ gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luis E. aus Grevenbroich",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Emil L. aus Herten",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Dragon Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Justus H. aus Leipzig",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Benedikt M. aus Neumünster",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Toller Bauspaß gefällt mir gut. Top, weiter so.",
    "customer_name": "Kerstin C. aus Gütersloh",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Tobias X. aus Kleve",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kreativ ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Elias W. aus Hamm",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Tanja F. aus Gera",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Rückziehmotor ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Malte B. aus Neu-Ulm",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Sascha H. aus Worms",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Monster Truck ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Julia B. aus Böblingen",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Hannes S. aus Plauen",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kreativ ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Vincent O. aus Bornheim",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Kevin S. aus Menden",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Cooles Geschenk gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Birgit S. aus Soest",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Valentin N. aus Hagen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Mats D. aus Fürth",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Robust ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Sascha Q. aus Memmingen",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Dragon Design gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Lukas I. aus Gummersbach",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Robust gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lenny W. aus Tübingen",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Lenny D. aus Düsseldorf",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Toller Bauspaß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Theo S. aus Kerpen",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Kerstin S. aus Karlsruhe",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Claudia E. aus Rheine",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Geschenk ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Sarah Y. aus Viersen",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Robust gefällt mir gut. Super Shop.",
    "customer_name": "Lisa O. aus Marl",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Dragon Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Mats T. aus Bad Salzuflen",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Marlon O. aus Dinslaken",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Dragon Design gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lenny M. aus Nettetal",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kreativ gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Timo T. aus Ulm",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anna G. aus Tübingen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Rückziehmotor ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Noah A. aus Görlitz",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Alexander U. aus Nettetal",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Rückziehmotor ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Theo E. aus Minden",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Top.",
    "customer_name": "Hannes K. aus Hennef",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Rückziehmotor gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Paul H. aus Lünen",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia Q. aus Halle (Saale)",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Hat sich definitiv gelohnt.",
    "customer_name": "Petra G. aus Villingen-Schwenningen",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Maximilian C. aus Hamburg",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kreativ gefällt mir gut. Klare 10/10.",
    "customer_name": "Anna C. aus Gelsenkirchen",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top.",
    "customer_name": "Tanja Q. aus Lüneburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Lenny M. aus Detmold",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Monster Truck gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo B. aus Gießen",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Geschenk ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Laura J. aus Rodgau",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Dragon Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Moritz D. aus Ingolstadt",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Robust gefällt mir gut. Bin happy.",
    "customer_name": "Oskar Y. aus Gelsenkirchen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Lenny Q. aus Schweinfurt",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Vincent T. aus Chemnitz",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Sabine W. aus Remscheid",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Moritz H. aus Recklinghausen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Anja Q. aus Ahlen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Top.",
    "customer_name": "Julia T. aus Menden",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Adrian P. aus Frankfurt",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Fabian K. aus Kassel",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Rückziehmotor gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Moritz U. aus Wuppertal",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Yannick H. aus Bamberg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Cooles Geschenk gefällt mir gut. Top, weiter so.",
    "customer_name": "Sandra V. aus Monheim am Rhein",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Andrea L. aus Ahlen",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Adrian W. aus Oldenburg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Robust ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "David G. aus Eisenach",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Robust ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Emil E. aus Wunstorf",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Toller Bauspaß gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Julian B. aus Wunstorf",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Simon C. aus Lahr",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Samuel E. aus Ludwigsburg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Bin happy.",
    "customer_name": "Niklas N. aus Oranienburg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kreativ ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Valentin S. aus Erftstadt",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kreativ ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Moritz Z. aus Heidenheim",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Rückziehmotor ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Tobias U. aus Wilhelmshaven",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Tom Y. aus Aachen",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Anna A. aus Weinheim",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "Hannes M. aus Gera",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny G. aus Traunstein",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Monster Truck gefällt mir gut. Top, weiter so.",
    "customer_name": "Sandra I. aus Bad Homburg",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Fabian M. aus Delmenhorst",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Henry A. aus Dorsten",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Robust ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Anja D. aus Dorsten",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Das Feature Stabil ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Adrian O. aus Kamen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Florian W. aus Eisenach",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Stabil ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Melanie E. aus Kamen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Cooles Geschenk gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Kilian Q. aus Norderstedt",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon Y. aus Peine",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Tim U. aus Ludwigsburg",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Dragon Design ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luca B. aus Herne",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Alexander H. aus Viersen",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Kevin C. aus Esslingen",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Freue mich schon auf das nächste Set.",
    "customer_name": "Henry N. aus Frankfurt (Oder)",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Julia C. aus Kaiserslautern",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Robust ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Matteo J. aus Iserlohn",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. So macht LEGO Spaß.",
    "customer_name": "Jan D. aus Bietigheim-Bissingen",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Toller Bauspaß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Max R. aus Freising",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Rückziehmotor gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Julian N. aus Erkrath",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Robust gefällt mir gut. Klare 10/10.",
    "customer_name": "Susanne F. aus Memmingen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Monster Truck gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Jan K. aus Potsdam",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Tobias D. aus Fulda",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Geschenk ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Maria A. aus Mülheim an der Ruhr",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Toller Bauspaß gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Milan H. aus Marburg",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Monster Truck gefällt mir gut. Top, weiter so.",
    "customer_name": "Lenny Q. aus Menden",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Kevin U. aus Hattingen",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Theo I. aus Leverkusen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Kevin R. aus Nürnberg",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Nadine D. aus Celle",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anja D. aus Erkrath",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Tom H. aus Münster",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Robust ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Liam M. aus Arnsberg",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Vielen Dank für den schnellen Service.",
    "customer_name": "Milan E. aus Ahlen",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Geschenk ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Sascha F. aus Schweinfurt",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Geschenk ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Philipp O. aus Gladbeck",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Ein tolles Geschenk.",
    "customer_name": "Moritz P. aus Kaiserslautern",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Fabian B. aus Langenfeld",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Rückziehmotor gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Elias E. aus Plauen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Stabil ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Sandra O. aus Rodgau",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Stabil gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Anna J. aus Bad Salzuflen",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Rückziehmotor ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Christina S. aus Saarbrücken",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Toller Bauspaß ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Sarah F. aus Dresden",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Robust ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Laura L. aus Magdeburg",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Dragon Design gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Katharina O. aus Ratingen",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Fabian Y. aus Lünen",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Sascha Y. aus Rüsselsheim",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Monster Truck ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Jannik Z. aus Bergisch Gladbach",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Dragon Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Ein tolles Geschenk.",
    "customer_name": "Theo K. aus Eschweiler",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Dragon Design gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Petra V. aus Göttingen",
    "date": "2025-01-01"
  }
];