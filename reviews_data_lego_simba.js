const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Niedlich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Simon X. aus Eschweiler",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglicher Kopf gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Emil D. aus Gießen",
    "date": "2026-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan V. aus Kassel",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Beweglicher Kopf gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Noah L. aus Schwäbisch Gmünd",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Samuel F. aus Kamen",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Laura X. aus Tübingen",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Liam U. aus Erkrath",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Sascha E. aus Lahr",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Yannick E. aus Velbert",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Erik F. aus Koblenz",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Valentin F. aus Hilden",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Hannes V. aus Kaiserslautern",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Simba gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tom N. aus Iserlohn",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Sabine B. aus Bottrop",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Simon F. aus Ambreg",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature König der Löwen ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Kilian K. aus Darmstadt",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Beweglicher Kopf gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nico M. aus Menden",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Top.",
    "customer_name": "Petra B. aus Oberhausen",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Anton I. aus Bornheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Maximilian F. aus Pulheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Ben J. aus Minden",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Julia A. aus Pforzheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Danke.",
    "customer_name": "Jonas N. aus Lübeck",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Für Fans ein absolutes Muss.",
    "customer_name": "Philipp R. aus Remscheid",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lukas O. aus Hannover",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Nicole J. aus Brandenburg an der Havel",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Süß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Max O. aus Eschweiler",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Tim S. aus Neumünster",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Disney Magie gefällt mir gut. Danke.",
    "customer_name": "Arne Q. aus Oberursel",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Max O. aus Salzgitter",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Geschenkidee gefällt mir gut. Bin happy.",
    "customer_name": "Emil W. aus Ludwigshafen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Benedikt K. aus Erkrath",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Niedlich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Melanie O. aus Halle (Saale)",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Süß gefällt mir gut. Klare 10/10.",
    "customer_name": "Petra J. aus Tübingen",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Valentin C. aus Hamburg",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Danke.",
    "customer_name": "Christina J. aus Ingolstadt",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Bastian X. aus Bad Kreuznach",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglicher Kopf ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Tanja D. aus Bergkamen",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Beweglicher Kopf gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Kevin Q. aus Hildesheim",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Süß gefällt mir gut. Danke.",
    "customer_name": "Kerstin J. aus Aurich",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Einfach zu bauen gefällt mir gut. Klare 10/10.",
    "customer_name": "Lisa G. aus Oldenburg",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Florian V. aus Erkrath",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Top, weiter so.",
    "customer_name": "Christina Z. aus Neuwied",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix N. aus Rastatt",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Emil M. aus Friedrichshafen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Robin R. aus Filderstadt",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Lenny L. aus Magdeburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Benedikt P. aus Wolfsburg",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Sabine Z. aus Bad Kreuznach",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin rundum zufrieden.",
    "customer_name": "Lenny E. aus Aalen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Beweglicher Kopf gefällt mir gut. Super Shop.",
    "customer_name": "Arne R. aus Rostock",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Fabian F. aus Pinneberg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin rundum zufrieden.",
    "customer_name": "Matteo Q. aus Stralsund",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Jannik S. aus Hennef",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Lisa F. aus Pulheim",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Adrian Z. aus Paderborn",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Laura C. aus Hamm",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Emil G. aus Bergisch Gladbach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Luis S. aus Schwerin",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Jonas I. aus Bremen",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Luis V. aus Bottrop",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Jan P. aus Bielefeld",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Geschenkidee gefällt mir gut. Danke.",
    "customer_name": "Moritz R. aus Potsdam",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Niedlich gefällt mir gut. Super Shop.",
    "customer_name": "Julian U. aus Hattingen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Danke!",
    "customer_name": "Justus R. aus Sankt Augustin",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Beweglicher Kopf gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Anna S. aus Filderstadt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Julian D. aus Stralsund",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Anton X. aus Bergkamen",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Top.",
    "customer_name": "Anna A. aus Hof",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Dennis V. aus Gera",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Samuel F. aus Arnsberg",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Luca G. aus Neuss",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Kilian J. aus Nordhorn",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Danke!",
    "customer_name": "Claudia X. aus Wunstorf",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Susanne Y. aus Minden",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Kevin Z. aus Dinslaken",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Süß gefällt mir gut. Danke.",
    "customer_name": "Sarah X. aus Bad Oeynhausen",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Melanie P. aus Lübeck",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Birgit Z. aus Norderstedt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Dominik U. aus Leinfelden-Echterdingen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Einfach zu bauen gefällt mir gut. Klare 10/10.",
    "customer_name": "Jannik J. aus Leinfelden-Echterdingen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Monika Q. aus Heilbronn",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Jan T. aus Ludwigsburg",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Julian Q. aus Eschweiler",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Beweglicher Kopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Liam V. aus Grevenbroich",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders König der Löwen gefällt mir gut. Top, weiter so.",
    "customer_name": "Leon M. aus Filderstadt",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Moritz L. aus Bad Salzuflen",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders König der Löwen gefällt mir gut. Danke.",
    "customer_name": "Moritz F. aus Wolfenbüttel",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Sabine U. aus Melle",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders König der Löwen gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Ben N. aus Düsseldorf",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Stefanie B. aus Osnabrück",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Noah H. aus Pinneberg",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Leo J. aus Villingen-Schwenningen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Theo O. aus Gera",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Beweglicher Kopf gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Jan T. aus Solingen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Süß gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Stefanie H. aus Ratingen",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anja D. aus Hamm",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Simba gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Sandra F. aus Herzogenrath",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Dominik I. aus Bruchsal",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Christoph W. aus Göttingen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Marlon X. aus Pinneberg",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Süß gefällt mir gut. Klare 10/10.",
    "customer_name": "Felix I. aus Dorsten",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Stefanie U. aus Bad Salzuflen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christoph T. aus Braunschweig",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Niedlich gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Marlon W. aus Freising",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglicher Kopf gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar W. aus Erftstadt",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Stefanie I. aus Bayreuth",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Alles richtig gemacht.",
    "customer_name": "Nicole I. aus Karlsruhe",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin J. aus Ludwigshafen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Paul X. aus Wolfsburg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Kevin V. aus Dachau",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Simba gefällt mir gut. Bin happy.",
    "customer_name": "Kerstin C. aus Mülheim an der Ruhr",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Stefanie F. aus Fulda",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Max B. aus Frankfurt",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Ben D. aus Kerpen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt X. aus Eschweiler",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Sascha S. aus Brandenburg an der Havel",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Mats E. aus Halle (Saale)",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Jan U. aus Friedrichshafen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Sandra H. aus Aachen",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Oskar I. aus Lemgo",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Beweglicher Kopf gefällt mir gut. Danke.",
    "customer_name": "Jan C. aus Ludwigshafen",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Klare 10/10.",
    "customer_name": "Florian M. aus Pforzheim",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Alles richtig gemacht.",
    "customer_name": "Ben F. aus Lübeck",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Bastian T. aus Grevenbroich",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Bastian C. aus Ulm",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Luis K. aus Oldenburg",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Freue mich schon auf das nächste Set.",
    "customer_name": "Ben O. aus Bremerhaven",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders König der Löwen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Kerstin E. aus Waiblingen",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christina T. aus Offenbach",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Super Shop.",
    "customer_name": "Jannik B. aus Aschaffenburg",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Luca E. aus Ratingen",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Simba gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Ben I. aus Osnabrück",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Nadine N. aus Ulm",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Max S. aus Rodgau",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Dominik B. aus Oberursel",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Susanne G. aus Minden",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Christina R. aus Fürth",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Simba gefällt mir gut. Klare 10/10.",
    "customer_name": "Nadine R. aus Langenfeld",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Luis V. aus Weinheim",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Danke!",
    "customer_name": "Jannik V. aus Wunstorf",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Petra K. aus Grevenbroich",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Klare 10/10.",
    "customer_name": "Elias F. aus Eschweiler",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Mats Z. aus Münster",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Disney Magie gefällt mir gut. Super Shop.",
    "customer_name": "Max M. aus München",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Samuel C. aus Gütersloh",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Julia W. aus Berlin",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Valentin O. aus Bremerhaven",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Claudia J. aus Ludwigsburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Erik I. aus Lingen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Luca O. aus Gütersloh",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Simba gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne S. aus Dorsten",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Monika R. aus Recklinghausen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar I. aus Kamen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Paul G. aus Dorsten",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Tobias Z. aus Bergkamen",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Luis U. aus Straubing",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Tanja Q. aus Schwerin",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Beweglicher Kopf gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anna S. aus Kleve",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Ein tolles Geschenk.",
    "customer_name": "Julian Y. aus Bad Kreuznach",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Jan Q. aus Kassel",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Marlon R. aus Rheda-Wiedenbrück",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Andrea P. aus Dülmen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Julia L. aus Bad Salzuflen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Paul A. aus Hannover",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Bastian B. aus Essen",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Niedlich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Timo W. aus Frankfurt",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Anja C. aus Neumünster",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Ben A. aus Lübeck",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Milan T. aus Villingen-Schwenningen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin V. aus Hameln",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lenny M. aus Braunschweig",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Dennis D. aus Rheda-Wiedenbrück",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Simba gefällt mir gut. Bin happy.",
    "customer_name": "Katharina V. aus Viersen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Geschenkidee gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Emil A. aus Darmstadt",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Julian C. aus Oberhausen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Nadine J. aus Reutlingen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine C. aus Leverkusen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Adrian L. aus Erlangen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Süß gefällt mir gut. Top, weiter so.",
    "customer_name": "Julian K. aus Langenfeld",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Felix N. aus Bad Oeynhausen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Bin rundum zufrieden.",
    "customer_name": "Valentin G. aus Gladbeck",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "David X. aus Landshut",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Mats D. aus Bamberg",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Tom V. aus Euskirchen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders König der Löwen gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben M. aus Nordhorn",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Ben N. aus Lünen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Elias Z. aus Waiblingen",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis F. aus Potsdam",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Jannik Z. aus Menden",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Süß gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Moritz F. aus Hamburg",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Einfach zu bauen gefällt mir gut. Bin happy.",
    "customer_name": "Milan Q. aus Borken",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Max N. aus Hanau",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Erik V. aus Dülmen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Dominik R. aus Buxtehude",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Laura B. aus Hürth",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Einfach zu bauen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Tobias K. aus Leverkusen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Katharina R. aus Jena",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Beweglicher Kopf gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Tobias C. aus Leinfelden-Echterdingen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Paul V. aus Konstanz",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Jonas X. aus Dachau",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Lukas F. aus Sindelfingen",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Bin zufrieden.",
    "customer_name": "Tanja I. aus Baden-Baden",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Tim W. aus Delmenhorst",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Katharina P. aus Fürth",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Paul Q. aus Pforzheim",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Disney Magie gefällt mir gut. Top, weiter so.",
    "customer_name": "Monika U. aus Unna",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Daumen hoch!",
    "customer_name": "Sandra Q. aus Kamen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Tanja S. aus Essen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "Emil P. aus Wolfsburg",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Elias C. aus Wiesbaden",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Florian I. aus Potsdam",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Lisa O. aus Rostock",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Nico S. aus Delmenhorst",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Dominik D. aus Viersen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglicher Kopf ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tanja W. aus Marburg",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Bastian Q. aus Rheine",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Marlon T. aus Neu-Ulm",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Fabian T. aus Mainz",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Adrian W. aus Iserlohn",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Einfach zu bauen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sandra A. aus Solingen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Disney Magie gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Lisa B. aus Leipzig",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Bin happy.",
    "customer_name": "Jannik K. aus Karlsruhe",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Niedlich gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Leon P. aus Hattingen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Disney Magie gefällt mir gut. Top, weiter so.",
    "customer_name": "Oskar O. aus Osnabrück",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Andrea Y. aus Frankfurt",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Christoph Y. aus Freising",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Maria C. aus Viersen",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Luca N. aus Herford",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Sarah Z. aus Lahr",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Oskar C. aus Solingen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Petra J. aus Hamm",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Jan X. aus Stralsund",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Lisa J. aus Passau",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Christoph L. aus Osnabrück",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Bin zufrieden.",
    "customer_name": "Fabian B. aus Dessau-Roßlau",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Disney Magie gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Alexander D. aus Göttingen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Yannick G. aus Albstadt",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Florian F. aus Jena",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Simba gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik D. aus Siegen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Niedlich gefällt mir gut. Top, weiter so.",
    "customer_name": "Johannes V. aus Bamberg",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Florian Z. aus Mainz",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leon H. aus Remscheid",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Florian U. aus Rastatt",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Maria U. aus Ahlen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Beweglicher Kopf gefällt mir gut. Danke.",
    "customer_name": "David W. aus Bayreuth",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Danke!",
    "customer_name": "Henry R. aus Aschaffenburg",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Simon G. aus Langenhagen",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Katharina B. aus Herford",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Vielen Dank für den schnellen Service.",
    "customer_name": "Kilian C. aus Pulheim",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Florian H. aus Rheine",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Disney Magie gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Erik O. aus Wesel",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Jannik Y. aus Wuppertal",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Fabian X. aus Erftstadt",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine G. aus Herford",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Marlon O. aus Iserlohn",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Anton D. aus Potsdam",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Birgit L. aus Stuttgart",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Kerstin A. aus Oranienburg",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Danke.",
    "customer_name": "Kevin O. aus Schwerin",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik B. aus Schwäbisch Gmünd",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Stefanie U. aus Gießen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. 5 Sterne von mir.",
    "customer_name": "Noah F. aus Fellbach",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Niklas I. aus Koblenz",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Anton W. aus Filderstadt",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Luca Q. aus Stuttgart",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Anton F. aus Langenhagen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Jannik W. aus Witten",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Stefanie A. aus Leverkusen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Claudia A. aus Langenhagen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Einfach zu bauen gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine Q. aus Osnabrück",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Lenny F. aus Schweinfurt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Melanie N. aus Arnsberg",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Niedlich gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra U. aus Bergisch Gladbach",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Niedlich gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Bastian N. aus Görlitz",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Alles richtig gemacht.",
    "customer_name": "Florian L. aus Hamm",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Erik G. aus Mainz",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "David C. aus Gladbeck",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Milan F. aus Mannheim",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders König der Löwen gefällt mir gut. Bin happy.",
    "customer_name": "Noah W. aus Bad Oeynhausen",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Jonas T. aus Bonn",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich.",
    "customer_name": "Milan U. aus Bremerhaven",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders König der Löwen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Dennis Z. aus Bergheim",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Christina V. aus Görlitz",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Robin Y. aus Konstanz",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Luis B. aus Greifswald",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Yannick Q. aus Passau",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Jan D. aus Villingen-Schwenningen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Matteo L. aus Wunstorf",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Noah M. aus Grevenbroich",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Moritz D. aus Freiburg",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "David F. aus Kempten",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Vincent Q. aus Erkrath",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Erik J. aus Leverkusen",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Susanne C. aus Langenfeld",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Timo R. aus Marl",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Milan O. aus Langenfeld",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Simba gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Oskar Y. aus Erlangen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Danke!",
    "customer_name": "Laura E. aus Göttingen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Absolute Kaufempfehlung.",
    "customer_name": "Jannik D. aus Salzgitter",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Freue mich schon auf das nächste Set.",
    "customer_name": "Paul V. aus Lüdenscheid",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Stefanie F. aus Ulm",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Noah I. aus Schweinfurt",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Laura M. aus Oldenburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Süß gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Julia K. aus Weimar",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Niedlich gefällt mir gut. Top, weiter so.",
    "customer_name": "Nicole J. aus Ravensburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Erik Q. aus Pforzheim",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Süß gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Paul O. aus Heidenheim",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Liam I. aus Stolberg",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Andrea F. aus Worms",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Moritz J. aus Bremerhaven",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Dominik H. aus Wuppertal",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders König der Löwen gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon L. aus Meerbusch",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Daumen hoch!",
    "customer_name": "Jannik G. aus Rodgau",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Vincent E. aus Brandenburg an der Havel",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Petra D. aus Monheim am Rhein",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Christoph T. aus Hannover",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Sarah Z. aus Bad Salzuflen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Valentin V. aus Göttingen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Malte S. aus Gelsenkirchen",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Moritz W. aus Remscheid",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Philipp P. aus Wesel",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Geschenkidee gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Justus V. aus Pforzheim",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Bin zufrieden.",
    "customer_name": "Sascha G. aus Peine",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Justus D. aus Hamburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Sascha D. aus Speyer",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Luca J. aus Sindelfingen",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Top, weiter so.",
    "customer_name": "Bastian X. aus Kaiserslautern",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Christina U. aus Augsburg",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jan N. aus Göttingen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Paul A. aus Bremerhaven",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Einfach klasse.",
    "customer_name": "Erik X. aus Bocholt",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Kerstin X. aus Oberursel",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Bastian F. aus Rastatt",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Geschenkidee gefällt mir gut. Top, weiter so.",
    "customer_name": "Julia U. aus Straubing",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo M. aus Minden",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Arne I. aus Alsdorf",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Top.",
    "customer_name": "Katharina S. aus Wiesbaden",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglicher Kopf gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Fabian R. aus Gütersloh",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Ein tolles Geschenk.",
    "customer_name": "Liam O. aus Ambreg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Simba gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Monika C. aus Wilhelmshaven",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Kerstin A. aus Magdeburg",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Noah P. aus Bad Oeynhausen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Top, weiter so.",
    "customer_name": "Justus K. aus Hanau",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Emil T. aus Peine",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Lenny B. aus Recklinghausen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Lisa N. aus Delmenhorst",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Fabian R. aus Menden",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Einfach zu bauen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Tobias H. aus Solingen",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Elias A. aus Kaiserslautern",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Jonas E. aus Schwerin",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Philipp I. aus Würzburg",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Nadine S. aus Dülmen",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix J. aus Rheine",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats H. aus Borken",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Samuel S. aus Rheine",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Petra M. aus Ludwigshafen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Vincent R. aus Aalen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Jannik K. aus Wuppertal",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Ben K. aus Reutlingen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "Anna H. aus Dessau-Roßlau",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Ein tolles Geschenk.",
    "customer_name": "Anja H. aus Remscheid",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Simba gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Anna Q. aus Wolfsburg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Jonas X. aus Rottenburg",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "David R. aus Aachen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Beweglicher Kopf gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Henry S. aus Neu-Ulm",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Vincent O. aus Mülheim an der Ruhr",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas A. aus Weinheim",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Noah T. aus Aurich",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Tanja Q. aus Passau",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Einfach zu bauen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sandra W. aus Konstanz",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar K. aus Hannover",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Leo J. aus Ingolstadt",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Lenny E. aus Kaiserslautern",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton Q. aus Wesel",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Stefanie F. aus Ludwigsburg",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Benedikt H. aus Hameln",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Disney Magie gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Mats Y. aus Celle",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Nico L. aus Duisburg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Finn J. aus Recklinghausen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Kilian U. aus Ravensburg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Stefanie N. aus Oranienburg",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Justus L. aus Rheda-Wiedenbrück",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Leon E. aus Gütersloh",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leo A. aus Ambreg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Andrea K. aus Gummersbach",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Einfach zu bauen gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne T. aus Bad Salzuflen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Noah Z. aus Gummersbach",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Laura N. aus Speyer",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix S. aus Siegen",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Top.",
    "customer_name": "Robin G. aus Lüneburg",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Bastian M. aus Dülmen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Valentin S. aus Jena",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Hat sich definitiv gelohnt.",
    "customer_name": "Paul J. aus Weimar",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Florian C. aus Hagen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Sandra D. aus Troisdorf",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Niedlich gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Timo E. aus Oberhausen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Benedikt C. aus Aalen",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Disney Magie ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Finn B. aus Zwickau",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Christina K. aus Ravensburg",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Jan O. aus Delmenhorst",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Liam D. aus Hildesheim",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Matteo H. aus Rastatt",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Disney Magie gefällt mir gut. Bin happy.",
    "customer_name": "Benedikt T. aus Fürth",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura X. aus Marburg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Robin O. aus Dessau-Roßlau",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Finn G. aus Bruchsal",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas P. aus Chemnitz",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Luca V. aus Nordhorn",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Justus F. aus Buxtehude",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Anna L. aus Passau",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Samuel X. aus Marburg",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Christina N. aus Neuss",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Danke!",
    "customer_name": "Nadine N. aus Delmenhorst",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders König der Löwen gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Justus X. aus Brotterode",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Süß gefällt mir gut. Super Shop.",
    "customer_name": "Jan W. aus Neuss",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "David E. aus Hannover",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Dominik C. aus Castrop-Rauxel",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Emil D. aus Recklinghausen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Lukas B. aus Rheda-Wiedenbrück",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Lukas C. aus Bochum",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christoph L. aus Bornheim",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Vincent G. aus Remscheid",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Luca E. aus Wetzlar",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Noah Z. aus Osnabrück",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Preis-Leistung stimmt hier.",
    "customer_name": "Sabine S. aus Mainz",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Moritz P. aus Ludwigsburg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Einfach zu bauen gefällt mir gut. Daumen hoch!",
    "customer_name": "Samuel K. aus Krefeld",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Bin rundum zufrieden.",
    "customer_name": "Nadine H. aus Ambreg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anja Y. aus Ravensburg",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian J. aus Bietigheim-Bissingen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Leo K. aus Ibbenbüren",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Maximilian P. aus Bad Homburg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Luis E. aus Bergkamen",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Andrea Z. aus Cottbus",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Paul L. aus Pinneberg",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Adrian I. aus Landshut",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Laura Q. aus Sankt Augustin",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Bin zufrieden.",
    "customer_name": "Claudia V. aus Krefeld",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Philipp R. aus Meerbusch",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Geschenkidee gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Maria O. aus Grevenbroich",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Nico E. aus Bamberg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Niedlich gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Elias M. aus Oberursel",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Vielen Dank für den schnellen Service.",
    "customer_name": "Maximilian E. aus Bergkamen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Disney Magie gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Lenny D. aus Marburg",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Petra C. aus Hagen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Yannick F. aus Langenfeld",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Moritz K. aus Passau",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Niedlich gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Oskar P. aus Ingolstadt",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Fabian B. aus Bad Oeynhausen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lukas F. aus Hamburg",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Leo E. aus Jena",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Andrea B. aus Albstadt",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Samuel U. aus Fulda",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Jan N. aus Kempten",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Elias A. aus Bremerhaven",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sascha Z. aus Langenfeld",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Max K. aus Leonberg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Milan K. aus Rottenburg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Hannes M. aus Bornheim",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Beweglicher Kopf gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Anton Q. aus Lüneburg",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lisa I. aus Witten",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Felix U. aus Brandenburg an der Havel",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Disney Magie gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Noah P. aus Neu-Ulm",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Mats Y. aus Celle",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Süß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Adrian M. aus Bergheim",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Timo K. aus Wunstorf",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Süß gefällt mir gut. Einfach klasse.",
    "customer_name": "Valentin Y. aus Heilbronn",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Danke!",
    "customer_name": "Maximilian A. aus Göttingen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Benedikt H. aus Aurich",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Hannes T. aus Wesel",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Leon P. aus Bad Oeynhausen",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Monika J. aus Hürth",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Kerstin Z. aus Frankfurt",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Jan R. aus Gütersloh",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Anton U. aus Bad Homburg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Danke.",
    "customer_name": "Tanja E. aus Wesel",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Max Z. aus Bad Kreuznach",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Marlon X. aus Rüsselsheim",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine Z. aus Karlsruhe",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Maria K. aus Saarbrücken",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Anna D. aus Böblingen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Ein tolles Geschenk.",
    "customer_name": "Fabian W. aus Filderstadt",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Sarah C. aus Pulheim",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Super Shop.",
    "customer_name": "Sarah J. aus Kerpen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julia L. aus Erkrath",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Geschenkidee gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Noah Y. aus Dormagen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Moritz A. aus Essen",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Monika G. aus Saarbrücken",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Einfach zu bauen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lisa O. aus Böblingen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix L. aus Neuwied",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Elias U. aus Heilbronn",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Geschenkidee gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Julian A. aus Ravensburg",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. 5 Sterne von mir.",
    "customer_name": "Julian M. aus Freising",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Dennis X. aus Villingen-Schwenningen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Christina V. aus Bochum",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Dennis F. aus Dessau-Roßlau",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders König der Löwen gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Julia U. aus Bad Homburg",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Beweglicher Kopf gefällt mir gut. Danke.",
    "customer_name": "Johannes X. aus Lingen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Sandra T. aus Freising",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Laura Q. aus Neuwied",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Oskar Z. aus Elmshorn",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Anna Y. aus Stolberg",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tim S. aus Heidenheim",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Simba gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Adrian Z. aus Duisburg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Sandra Q. aus Kempten",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Geschenkidee gefällt mir gut. Super Shop.",
    "customer_name": "Sascha A. aus Essen",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Oskar N. aus Rodgau",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Einfach zu bauen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Valentin Q. aus Lünen",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Oskar V. aus Dortmund",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Arne Z. aus Frechen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Milan N. aus Göttingen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Arne I. aus Borken",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Simon M. aus Freising",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Danke!",
    "customer_name": "Florian X. aus Offenbach",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Beweglicher Kopf gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Birgit A. aus Herne",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders König der Löwen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Lenny W. aus Herne",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Preis-Leistung stimmt hier.",
    "customer_name": "Jan D. aus Pforzheim",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Top.",
    "customer_name": "Lenny M. aus Ravensburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Bin zufrieden.",
    "customer_name": "Kevin C. aus Rottenburg",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jan T. aus Erkrath",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Matteo N. aus Witten",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Einfach zu bauen ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Julian H. aus Wilhelmshaven",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Tim H. aus Koblenz",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Absolute Kaufempfehlung.",
    "customer_name": "Nicole L. aus Aurich",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Theo I. aus Emden",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Luca H. aus Remscheid",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Malte C. aus Waiblingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Süß gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Tom A. aus Stuttgart",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Tobias T. aus Gronau",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Luis E. aus Göttingen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "David C. aus Gladbeck",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Hannes Y. aus Essen",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Tanja I. aus Salzgitter",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Benedikt H. aus Neunkirchen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders König der Löwen gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Christoph O. aus Neu-Ulm",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Tom F. aus Baden-Baden",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Jan N. aus Bergkamen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Christoph S. aus Frankfurt",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Lukas U. aus Bruchsal",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Süß gefällt mir gut. Klare 10/10.",
    "customer_name": "Matteo Z. aus Zwickau",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Simon A. aus Essen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Hannes Q. aus Regensburg",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Jan K. aus Münster",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Henry Y. aus Bocholt",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Maximilian T. aus Gera",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Niedlich gefällt mir gut. Super Shop.",
    "customer_name": "Tanja P. aus Nordhorn",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Einfach zu bauen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Tanja G. aus Offenburg",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Disney Magie gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "David U. aus Köln",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Marlon W. aus Pforzheim",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Bin zufrieden.",
    "customer_name": "Nicole V. aus Jena",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Niklas Z. aus Stralsund",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Kilian T. aus Remscheid",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Fabian Z. aus Bremen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders König der Löwen gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Sandra L. aus Essen",
    "date": "2025-07-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Disney Magie gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Robin E. aus Langenhagen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Julia B. aus Peine",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Elias O. aus Bruchsal",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Vincent J. aus Rheda-Wiedenbrück",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia G. aus Kleve",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. 5 Sterne von mir.",
    "customer_name": "Jonas O. aus Zwickau",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julian J. aus Regensburg",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix K. aus Bremen",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Tobias B. aus Bad Homburg",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Anja F. aus Karlsruhe",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Einfach zu bauen gefällt mir gut. Bin happy.",
    "customer_name": "Alexander A. aus Kiel",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders König der Löwen gefällt mir gut. Super Shop.",
    "customer_name": "Alexander M. aus Krefeld",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Jannik Z. aus Bad Kreuznach",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Geschenkidee gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Malte R. aus Brotterode",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Preis-Leistung stimmt hier.",
    "customer_name": "Johannes Z. aus Rastatt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Einfach zu bauen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Benedikt J. aus Rüsselsheim",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Kerstin J. aus Darmstadt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Tim J. aus Moers",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Niedlich gefällt mir gut. Daumen hoch!",
    "customer_name": "Birgit Z. aus Salzgitter",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Benedikt R. aus Bamberg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Johannes T. aus Melle",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Matteo I. aus Nürnberg",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Niedlich gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Christoph D. aus Euskirchen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Andrea N. aus Brandenburg an der Havel",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Beweglicher Kopf gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Erik B. aus Oberursel",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Luis J. aus Frechen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Julia C. aus Grevenbroich",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Beweglicher Kopf gefällt mir gut. Super Shop.",
    "customer_name": "Finn D. aus Hamm",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Emil E. aus Delmenhorst",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Beweglicher Kopf gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Benedikt W. aus Dormagen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Sandra T. aus Berlin",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Jan A. aus Pulheim",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin W. aus Esslingen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Niedlich gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Emil Q. aus Speyer",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders König der Löwen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Arne I. aus Berlin",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Tobias Q. aus Gladbeck",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Einfach zu bauen gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Kilian D. aus Ingolstadt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Marlon M. aus Delmenhorst",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Anna V. aus Ingolstadt",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Claudia U. aus Tübingen",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Julian D. aus Darmstadt",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Nicole I. aus Heinsberg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Geschenkidee gefällt mir gut. Danke.",
    "customer_name": "Tanja Z. aus Hamm",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Maria Z. aus Borken",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leon T. aus Frankfurt",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Top.",
    "customer_name": "Mats F. aus Hamburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Niedlich gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Jannik I. aus Darmstadt",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Niedlich gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian H. aus Peine",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Christina E. aus Alsdorf",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Maria S. aus Greifswald",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Süß gefällt mir gut. Top, weiter so.",
    "customer_name": "Hannes P. aus Ravensburg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Vincent X. aus Marburg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Ben B. aus Heinsberg",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Kilian J. aus Rodgau",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Malte P. aus Oldenburg",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Luis Z. aus Stralsund",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Einfach zu bauen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Emil G. aus Heinsberg",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Marlon G. aus Hürth",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Vincent M. aus Köln",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian X. aus Hildesheim",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Daumen hoch!",
    "customer_name": "Sascha S. aus Regensburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Süß gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian K. aus Oldenburg",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura E. aus Rheine",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Henry H. aus Castrop-Rauxel",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Christoph O. aus Frechen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Sascha K. aus Rheda-Wiedenbrück",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. So macht LEGO Spaß.",
    "customer_name": "Malte F. aus Bochum",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Süß gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Julia H. aus Pinneberg",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Leon B. aus Kaufbeuren",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders König der Löwen gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tom M. aus Erkrath",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Einfach zu bauen gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis E. aus Waiblingen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Florian A. aus Monheim am Rhein",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Tom B. aus Koblenz",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Einfach zu bauen gefällt mir gut. Einfach klasse.",
    "customer_name": "Sabine O. aus Moers",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Luis C. aus Marl",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Adrian V. aus Heinsberg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Klare 10/10.",
    "customer_name": "Paul S. aus Greifswald",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Niedlich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Justus S. aus Darmstadt",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Claudia Q. aus Heinsberg",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Lisa X. aus Kaiserslautern",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Florian M. aus Nettetal",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Tanja X. aus Leonberg",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Christina E. aus Tübingen",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Geschenkidee gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Theo O. aus Fürth",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Anja D. aus Dessau-Roßlau",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Robin V. aus Rüsselsheim",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Milan H. aus Filderstadt",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Hannes P. aus Heilbronn",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Lisa N. aus Schwäbisch Gmünd",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Danke!",
    "customer_name": "Julian L. aus Essen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Justus K. aus Mülheim an der Ruhr",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Tobias P. aus Aurich",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Sandra S. aus Waiblingen",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Katharina Q. aus Esslingen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Ben C. aus Bayreuth",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Valentin T. aus Heilbronn",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lisa Q. aus Hof",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Top.",
    "customer_name": "Malte H. aus Bad Homburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Johannes N. aus Brotterode",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders König der Löwen gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie N. aus Oberursel",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Sascha S. aus Bad Kreuznach",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Felix J. aus Bremen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Julian X. aus Sankt Augustin",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature König der Löwen ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Anja A. aus Leonberg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Mats M. aus Duisburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Monika L. aus Rüsselsheim",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Claudia X. aus Monheim am Rhein",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Vielen Dank für den schnellen Service.",
    "customer_name": "Yannick J. aus Flensburg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Robin T. aus Konstanz",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Luis H. aus Lörrach",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Philipp O. aus Oberhausen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Geschenkidee gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura C. aus Karlsruhe",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Daumen hoch!",
    "customer_name": "Tom C. aus Buxtehude",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Katharina W. aus Sankt Augustin",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Matteo T. aus Offenbach",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Danke.",
    "customer_name": "Stefanie Y. aus Kaufbeuren",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Einfach zu bauen gefällt mir gut. Daumen hoch!",
    "customer_name": "Valentin P. aus Weimar",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Max W. aus Garbsen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "David R. aus Gladbeck",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Beweglicher Kopf gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Andrea W. aus Hof",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Freue mich schon auf das nächste Set.",
    "customer_name": "Tobias X. aus Euskirchen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Adrian S. aus Heidenheim",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Philipp Q. aus Solingen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Bin zufrieden.",
    "customer_name": "Henry D. aus Wilhelmshaven",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Liam H. aus Hagen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Kevin I. aus Troisdorf",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Tanja F. aus Neustadt an der Weinstraße",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Ben L. aus Aurich",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Süß gefällt mir gut. Super Shop.",
    "customer_name": "Andrea R. aus Mülheim an der Ruhr",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Felix Y. aus Göppingen",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Jannik B. aus Meerbusch",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "David L. aus Zwickau",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Henry I. aus Leipzig",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Kevin Y. aus Marburg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Lisa F. aus Pinneberg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Disney Magie ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Dennis N. aus Kamen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Philipp O. aus Dortmund",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Süß gefällt mir gut. Top, weiter so.",
    "customer_name": "Benedikt C. aus Friedrichshafen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Sandra G. aus Weimar",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Hannes X. aus Langenhagen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Sandra X. aus Gütersloh",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Kevin N. aus Herten",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Leo B. aus Weinheim",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Alexander H. aus Dorsten",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Malte Z. aus Pulheim",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tobias Z. aus Monheim am Rhein",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Kilian Q. aus Dülmen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Vincent T. aus Hof",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Tobias Q. aus Gummersbach",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Beweglicher Kopf gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Robin B. aus Wilhelmshaven",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Yannick E. aus Hamm",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Beweglicher Kopf gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Jonas U. aus Salzgitter",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Jannik H. aus Erlangen",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Für Fans ein absolutes Muss.",
    "customer_name": "Kilian I. aus Bayreuth",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Mats S. aus Weinheim",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Felix B. aus Magdeburg",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Andrea O. aus Peine",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Süß ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny K. aus Delmenhorst",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Alexander E. aus Villingen-Schwenningen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Einfach zu bauen ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Kevin Y. aus Karlsruhe",
    "date": "2025-05-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Süß gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Finn W. aus Villingen-Schwenningen",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Johannes Q. aus Bornheim",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. So macht LEGO Spaß.",
    "customer_name": "Birgit G. aus Erkrath",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Christoph Z. aus Bocholt",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Geschenkidee gefällt mir gut. Top, weiter so.",
    "customer_name": "Anton U. aus Langenhagen",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Sarah P. aus Eisenach",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Tom A. aus Unna",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Kerstin N. aus Lahr",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Theo U. aus Sankt Augustin",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Vincent A. aus Lüneburg",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Geschenkidee gefällt mir gut. Bin happy.",
    "customer_name": "Johannes B. aus Bremen",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Julian P. aus Bayreuth",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Sabine Q. aus Hamburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Sascha X. aus Regensburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Paul S. aus Esslingen",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Tim Z. aus Lüneburg",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Nico P. aus Monheim am Rhein",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Hannes E. aus Bad Kreuznach",
    "date": "2025-05-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Einfach zu bauen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Super Shop.",
    "customer_name": "Valentin H. aus Lemgo",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Danke.",
    "customer_name": "Alexander U. aus Göttingen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Milan S. aus Garbsen",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Max L. aus Lüneburg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Danke!",
    "customer_name": "Marlon C. aus Oldenburg",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Moritz B. aus Göppingen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Kerstin K. aus Bremen",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Felix K. aus Nordhorn",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sarah O. aus Melle",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Johannes S. aus Erkrath",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Danke!",
    "customer_name": "Florian T. aus Ibbenbüren",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Lenny P. aus Stolberg",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Süß gefällt mir gut. Klare 10/10.",
    "customer_name": "Sascha F. aus Schwäbisch Gmünd",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Geschenkidee gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Birgit E. aus Friedrichshafen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Lenny X. aus Bergisch Gladbach",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Jonas O. aus Detmold",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature König der Löwen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Leon H. aus Wuppertal",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Paul P. aus Offenburg",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Süß ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine E. aus Kamen",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Einfach zu bauen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Leon B. aus Gronau",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Nicole Y. aus Ulm",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Disney Magie gefällt mir gut. Einfach klasse.",
    "customer_name": "Emil E. aus Neuwied",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Justus R. aus Leinfelden-Echterdingen",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Maria N. aus Hameln",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Yannick J. aus Mannheim",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Geschenkidee gefällt mir gut. Bin happy.",
    "customer_name": "Kevin Y. aus Cottbus",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leon R. aus Hattingen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Theo X. aus Gummersbach",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. 5 Sterne von mir.",
    "customer_name": "Tanja T. aus Kempten",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Johannes O. aus Schwerin",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Tom H. aus Troisdorf",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Fabian U. aus Freising",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Kevin E. aus Lörrach",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Samuel S. aus Bornheim",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Simba gefällt mir gut. Einfach klasse.",
    "customer_name": "Anja N. aus Langenhagen",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders König der Löwen gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luca O. aus Siegen",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Max U. aus Heinsberg",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus C. aus Ahlen",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Justus Z. aus Bremerhaven",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Einfach zu bauen gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leon C. aus Leipzig",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin rundum zufrieden.",
    "customer_name": "Johannes I. aus Koblenz",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Kerstin A. aus Ratingen",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Felix V. aus Passau",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature König der Löwen ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Anton V. aus Frankfurt",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Süß ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Monika H. aus Peine",
    "date": "2025-04-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Disney Magie ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Milan E. aus Soest",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Nadine X. aus Castrop-Rauxel",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Alexander N. aus Celle",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Tobias M. aus Neu-Ulm",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Milan Q. aus Neu-Ulm",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Sandra Z. aus Wolfenbüttel",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Niedlich gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Tim I. aus Münster",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Einfach zu bauen gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sandra C. aus Oberhausen",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Finn S. aus Herten",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Niedlich gefällt mir gut. Top, weiter so.",
    "customer_name": "Katharina R. aus Würzburg",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Disney Magie gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Birgit I. aus Bruchsal",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Sabine X. aus Esslingen",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Samuel H. aus Frankfurt (Oder)",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Milan R. aus Heinsberg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Noah Q. aus Monheim am Rhein",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Bin rundum zufrieden.",
    "customer_name": "Yannick A. aus Alsdorf",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Daumen hoch!",
    "customer_name": "Katharina Z. aus Darmstadt",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Simba gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Tom X. aus Offenburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Klare 10/10.",
    "customer_name": "Benedikt C. aus Bochum",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Samuel K. aus Offenbach",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Christoph G. aus Gronau",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Tanja P. aus Hagen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Bastian Y. aus Straubing",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nadine W. aus Garbsen",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Sabine P. aus Witten",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Marlon C. aus Traunstein",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Theo D. aus Kiel",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Tobias T. aus Weimar",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luca Z. aus Saarbrücken",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Simba gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Simon P. aus Regensburg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tanja G. aus Lörrach",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Max L. aus Neuss",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Niedlich gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Kerstin N. aus Ibbenbüren",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Julia R. aus Remscheid",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Valentin S. aus Rodgau",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Kevin P. aus Mülheim an der Ruhr",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Erik Q. aus Straubing",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Beweglicher Kopf gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Emil T. aus Dresden",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Oskar R. aus Arnsberg",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Dominik P. aus Wiesbaden",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "David W. aus Leverkusen",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Danke.",
    "customer_name": "Kevin Y. aus Hildesheim",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders König der Löwen gefällt mir gut. Bin happy.",
    "customer_name": "Stefanie M. aus Eisenach",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top.",
    "customer_name": "Luca P. aus Leonberg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Disney Magie gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Claudia N. aus Osnabrück",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Robin P. aus Kassel",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Simon Z. aus Paderborn",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Max Y. aus Soest",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Elias V. aus Gießen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Niklas T. aus Lörrach",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Niklas Y. aus Fellbach",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Birgit N. aus Unna",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Einfach zu bauen gefällt mir gut. Klare 10/10.",
    "customer_name": "Johannes K. aus Lemgo",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Einfach zu bauen gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Mats L. aus Pinneberg",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Noah R. aus Herford",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Sandra J. aus Bergkamen",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Disney Magie ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Claudia K. aus Neuwied",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Sabine A. aus Leverkusen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Valentin O. aus Pulheim",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Theo O. aus Filderstadt",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Katharina X. aus Stuttgart",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Elias W. aus Tübingen",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Danke.",
    "customer_name": "Dominik B. aus Passau",
    "date": "2025-04-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Christina C. aus Baden-Baden",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglicher Kopf gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Julia C. aus Offenbach",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Top, weiter so.",
    "customer_name": "Julia J. aus Eisenach",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Ben E. aus Erfurt",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Disney Magie gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Kilian U. aus Offenburg",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Luca B. aus Garbsen",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Anja N. aus Bergisch Gladbach",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Niklas T. aus Hennef",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Geschenkidee gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Justus K. aus Langenfeld",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Top.",
    "customer_name": "Hannes N. aus Hanau",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Lukas Z. aus Bremerhaven",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan R. aus Bamberg",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Beweglicher Kopf gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Melanie A. aus Melle",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Kerstin T. aus Bruchsal",
    "date": "2025-03-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Beweglicher Kopf gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Robin Z. aus Kaufbeuren",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Danke!",
    "customer_name": "Robin T. aus Pinneberg",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Moritz C. aus Gütersloh",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Alexander L. aus Freiburg",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Luis R. aus Schweinfurt",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik C. aus Arnsberg",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Simba gefällt mir gut. Danke.",
    "customer_name": "Luis G. aus Lörrach",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Danke!",
    "customer_name": "Bastian R. aus Kaufbeuren",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Bin zufrieden.",
    "customer_name": "Mats U. aus Lüneburg",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Philipp N. aus Cottbus",
    "date": "2025-03-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Disney Magie ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Lukas W. aus Leipzig",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Jannik J. aus Ludwigsburg",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Melanie F. aus Stuttgart",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Noah G. aus Schweinfurt",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Emil I. aus Emden",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Claudia D. aus Gladbeck",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Yannick U. aus Brotterode",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Freue mich schon auf das nächste Set.",
    "customer_name": "Jan C. aus Hamburg",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Beweglicher Kopf gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Luca X. aus Frankfurt (Oder)",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sabine B. aus Frankfurt",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Petra E. aus Hanau",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Timo O. aus Monheim am Rhein",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Süß gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Paul N. aus Heidelberg",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Claudia A. aus Witten",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Noah R. aus Sankt Augustin",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Max D. aus Menden",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Maximilian U. aus Leverkusen",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Sandra N. aus Leipzig",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Leon A. aus Kempten",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Nico C. aus Bayreuth",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nadine Z. aus Halle (Saale)",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Marlon H. aus Albstadt",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Bin zufrieden.",
    "customer_name": "Jan Z. aus Würzburg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Henry E. aus Heidelberg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Niklas S. aus Lübeck",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Valentin C. aus Ravensburg",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Einfach zu bauen gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Luca Q. aus Lüneburg",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Simon O. aus Wunstorf",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "David Z. aus Euskirchen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Daumen hoch!",
    "customer_name": "Kerstin Y. aus Karlsruhe",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Laura C. aus Frechen",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Geschenkidee gefällt mir gut. Einfach klasse.",
    "customer_name": "Claudia H. aus Leipzig",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Anja C. aus Ambreg",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Susanne J. aus Münster",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders König der Löwen gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Henry F. aus Grevenbroich",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Katharina H. aus Greifswald",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Tobias J. aus Zwickau",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Milan H. aus Pulheim",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Marlon R. aus Kassel",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Lisa E. aus Freiburg",
    "date": "2025-03-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Niklas K. aus Hannover",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Malte J. aus Unna",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Niedlich gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Kilian O. aus Aschaffenburg",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Finn U. aus Neu-Ulm",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Liam N. aus Gladbeck",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Freue mich schon auf das nächste Set.",
    "customer_name": "Johannes R. aus Wetzlar",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Klare 10/10.",
    "customer_name": "Tim X. aus Hamburg",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Jan X. aus Witten",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Milan Y. aus Göttingen",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Danke!",
    "customer_name": "Jan U. aus Wunstorf",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Jan B. aus Wolfenbüttel",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Einfach zu bauen gefällt mir gut. Danke.",
    "customer_name": "Malte N. aus Rottenburg",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Noah Z. aus Dresden",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Süß gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Hannes J. aus Krefeld",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Leon S. aus Hameln",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Laura Y. aus Oberursel",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Hannes F. aus Karlsruhe",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Elias M. aus Hamm",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Tim X. aus Konstanz",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Theo T. aus Stralsund",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Maria V. aus Rheda-Wiedenbrück",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Sandra A. aus Krefeld",
    "date": "2025-03-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Finn D. aus Detmold",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Für Fans ein absolutes Muss.",
    "customer_name": "Noah P. aus Bayreuth",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin Q. aus Düsseldorf",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Top.",
    "customer_name": "Christina I. aus Kamen",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Kilian F. aus Berlin",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Melanie L. aus Moers",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin rundum zufrieden.",
    "customer_name": "Nadine Y. aus Esslingen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Arne K. aus Mülheim an der Ruhr",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Niedlich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis Y. aus Norderstedt",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Yannick W. aus Elmshorn",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Johannes U. aus Oberursel",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Süß ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Samuel P. aus Neustadt an der Weinstraße",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung. Top.",
    "customer_name": "Laura P. aus Gummersbach",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Disney Magie ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Theo V. aus Weimar",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Für Fans ein absolutes Muss.",
    "customer_name": "Nadine K. aus Kaufbeuren",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Simba ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Anna Y. aus Meerbusch",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Justus Z. aus Filderstadt",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Jan M. aus Lörrach",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Alexander Z. aus Fulda",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Stefanie N. aus Brotterode",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Julia Y. aus Berlin",
    "date": "2025-02-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders König der Löwen gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Max M. aus Rheda-Wiedenbrück",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Jonas L. aus Monheim am Rhein",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Einfach zu bauen ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Petra S. aus Albstadt",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Geschenkidee gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Claudia F. aus Mönchengladbach",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Bastian P. aus Kempten",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Hannes A. aus Böblingen",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Samuel Q. aus Böblingen",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Monika U. aus Traunstein",
    "date": "2025-02-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Nico S. aus Esslingen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Absolute Kaufempfehlung.",
    "customer_name": "Lukas N. aus Remscheid",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Mats Y. aus Duisburg",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Melanie N. aus Alsdorf",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Claudia A. aus Gütersloh",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Tobias U. aus Kleve",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Leon T. aus Görlitz",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Maria R. aus Neuwied",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Justus E. aus Göppingen",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Simba gefällt mir gut. Bin happy.",
    "customer_name": "Sabine I. aus Rastatt",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Top.",
    "customer_name": "Valentin Z. aus Ambreg",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Süß ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Felix T. aus Gütersloh",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Samuel J. aus Soest",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Marlon Q. aus Arnsberg",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Hannes G. aus Kleve",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Laura X. aus Dormagen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Jannik Q. aus Velbert",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Ein tolles Geschenk.",
    "customer_name": "Dominik D. aus Braunschweig",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Alexander I. aus Nettetal",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis M. aus Zwickau",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Nico R. aus Dresden",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Top.",
    "customer_name": "Maximilian M. aus Krefeld",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Simba gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Niklas S. aus Böblingen",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Top.",
    "customer_name": "Liam G. aus Oranienburg",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Stefanie P. aus Pforzheim",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Niedlich gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Emil L. aus Sindelfingen",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Vielen Dank für den schnellen Service.",
    "customer_name": "Theo P. aus Bad Homburg",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Dominik L. aus Lingen",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Liam L. aus Rodgau",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Anton Z. aus Duisburg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Das Feature Süß ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Julian Q. aus Bonn",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Noah V. aus Ratingen",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Super Shop.",
    "customer_name": "Jan Y. aus Emden",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Marlon G. aus Neu-Ulm",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Monika C. aus Darmstadt",
    "date": "2025-02-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Simba ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Tobias X. aus Heidenheim",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Beweglicher Kopf ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Robin K. aus Wolfenbüttel",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Christina O. aus Moers",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Marlon G. aus Oberursel",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Geschenkidee ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Anton L. aus Berlin",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Katharina C. aus Siegen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Julia D. aus Köln",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Alles richtig gemacht.",
    "customer_name": "Erik D. aus Regensburg",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "David R. aus Hildesheim",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Adrian M. aus Halle (Saale)",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Alexander F. aus Gießen",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Claudia Z. aus Dortmund",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Julian O. aus Baden-Baden",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Beweglicher Kopf ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Kevin L. aus Minden",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Henry N. aus Nettetal",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Benedikt L. aus Heilbronn",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Disney Magie ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Melanie H. aus Kerpen",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Einfach zu bauen ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Melanie F. aus Remscheid",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Disney Magie ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Benedikt Z. aus Borken",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Jannik F. aus Buxtehude",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Jannik U. aus Gießen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Beweglicher Kopf gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Noah P. aus Düsseldorf",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Daumen hoch!",
    "customer_name": "Vincent C. aus Rheine",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anja Q. aus Gladbeck",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Jannik U. aus Langenhagen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Arne H. aus Erkrath",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Süß ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christoph B. aus Kerpen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Anja N. aus Monheim am Rhein",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Einfach zu bauen gefällt mir gut. Daumen hoch!",
    "customer_name": "David D. aus Hameln",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Top.",
    "customer_name": "Max R. aus Moers",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Florian U. aus Bornheim",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sarah N. aus Stuttgart",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Niedlich ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Tim R. aus Buxtehude",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Einfach klasse.",
    "customer_name": "Maria I. aus Speyer",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Niedlich gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Adrian E. aus Wolfenbüttel",
    "date": "2025-01-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Dennis S. aus Hennef",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Milan X. aus Ahlen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Sandra N. aus Hildesheim",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Luca M. aus Brandenburg an der Havel",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Oskar T. aus Worms",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature König der Löwen ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Claudia F. aus Krefeld",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature König der Löwen ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Julia S. aus Dülmen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Beweglicher Kopf ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Bastian J. aus Paderborn",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Claudia Y. aus Rheda-Wiedenbrück",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Tobias K. aus Marl",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Süß ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Noah K. aus Rottenburg",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Lisa P. aus Brandenburg an der Havel",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Christina Z. aus Leverkusen",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Ein tolles Geschenk.",
    "customer_name": "Kevin G. aus Monheim am Rhein",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Leon C. aus Pinneberg",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Das Feature Einfach zu bauen ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Emil G. aus Freising",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Bin zufrieden.",
    "customer_name": "Paul A. aus Norderstedt",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Anna Y. aus Bottrop",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar C. aus Rastatt",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Simba gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Valentin I. aus Konstanz",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Simba gefällt mir gut. Bin happy.",
    "customer_name": "Birgit Y. aus Halle (Saale)",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Yannick I. aus Aurich",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Bin zufrieden.",
    "customer_name": "Bastian R. aus Hilden",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Melanie E. aus Bamberg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo M. aus Offenbach",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Danke!",
    "customer_name": "Matteo O. aus Wuppertal",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature König der Löwen ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Petra X. aus Rheine",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Laura X. aus Schwerin",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Sabine A. aus Kassel",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Danke.",
    "customer_name": "Lenny P. aus Frechen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Beweglicher Kopf gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Andrea B. aus Würzburg",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Sandra I. aus Neuss",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders König der Löwen gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Niklas L. aus Heilbronn",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Samuel K. aus Neuwied",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature König der Löwen ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Monika W. aus Leonberg",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature König der Löwen ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Christina R. aus Weinheim",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Niedlich ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Susanne A. aus Meerbusch",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Disney Magie ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Dennis T. aus Krefeld",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Simba ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Lenny Z. aus Dortmund",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Freue mich schon auf das nächste Set.",
    "customer_name": "Liam F. aus Hannover",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Susanne R. aus Hanau",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Einfach zu bauen gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Anna D. aus Eschweiler",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Tom U. aus Frankfurt (Oder)",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Max E. aus Münster",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Vincent I. aus Traunstein",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Süß ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Emil O. aus Essen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Geschenkidee ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Niklas B. aus Hamm",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Beweglicher Kopf ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "David J. aus Trier",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Disney Magie ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Bastian H. aus Rheine",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Beweglicher Kopf ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Tom N. aus Koblenz",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Simba ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Andrea E. aus Stralsund",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Matteo A. aus Siegen",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Timo D. aus Alsdorf",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Alles richtig gemacht.",
    "customer_name": "Vincent J. aus Frechen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Beweglicher Kopf ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Maria B. aus Rosenheim",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Philipp F. aus Greifswald",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Simba gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Maximilian J. aus Meerbusch",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Beweglicher Kopf gefällt mir gut. Top, weiter so.",
    "customer_name": "Johannes X. aus Fellbach",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Erik N. aus Wolfenbüttel",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Niedlich ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Yannick C. aus Remscheid",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Katharina Q. aus Dülmen",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Emil I. aus Bad Salzuflen",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Top.",
    "customer_name": "Fabian A. aus Plauen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Niedlich ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Andrea C. aus Euskirchen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura A. aus Rodgau",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Geschenkidee ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Florian T. aus Dülmen",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria W. aus Dortmund",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Maximilian I. aus Langenfeld",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. So macht LEGO Spaß.",
    "customer_name": "Dennis K. aus Waiblingen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Niedlich ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Lenny R. aus Velbert",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Süß ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Claudia D. aus Friedrichshafen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Süß ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Anton H. aus Oberhausen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Niedlich ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Anja E. aus Wesel",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Finn O. aus Villingen-Schwenningen",
    "date": "2025-01-01"
  }
];