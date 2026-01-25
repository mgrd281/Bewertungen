const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Mats U. aus Oberhausen",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kultfigur gefällt mir gut. Bin happy.",
    "customer_name": "Leo I. aus Brandenburg an der Havel",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Lustig gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Katharina X. aus Minden",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Katharina E. aus Ahlen",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Christina G. aus Lüdenscheid",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Jonas M. aus Osnabrück",
    "date": "2026-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Christoph Q. aus Delmenhorst",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Star Wars Legende gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Katharina C. aus Ahlen",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Melanie Q. aus Braunschweig",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Preis-Leistung stimmt hier.",
    "customer_name": "Anton X. aus Albstadt",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Kultfigur gefällt mir gut. Danke.",
    "customer_name": "Theo T. aus Magdeburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne B. aus Emden",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Monika E. aus Troisdorf",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Design ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Kevin D. aus Landshut",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Top.",
    "customer_name": "Philipp K. aus Salzgitter",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Jedi Bob ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine B. aus Wolfsburg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Theo A. aus Heinsberg",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein echter Hingucker in der Vitrine. Daumen hoch!",
    "customer_name": "Dennis Z. aus Landshut",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Valentin W. aus Hof",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Alexander K. aus Osnabrück",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Philipp K. aus Herford",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Raumschiff gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Elias S. aus Konstanz",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Bastian V. aus Leipzig",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Daumen hoch!",
    "customer_name": "Lenny E. aus Düsseldorf",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Top.",
    "customer_name": "Johannes R. aus Ratingen",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Jedi Bob gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Luis E. aus Zwickau",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Petra X. aus Pulheim",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Julia K. aus Ingolstadt",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Kerstin X. aus Kaufbeuren",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Sarah G. aus Esslingen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Tanja J. aus Oberursel",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Leo G. aus Aschaffenburg",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Emil S. aus Leinfelden-Echterdingen",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Top, weiter so.",
    "customer_name": "Petra T. aus Lüdenscheid",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Lukas V. aus Brandenburg an der Havel",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Lustig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Stefanie B. aus Rheda-Wiedenbrück",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Katharina J. aus Regensburg",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Nicole M. aus Heilbronn",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Finn D. aus Gelsenkirchen",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Milan C. aus Kassel",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Alles richtig gemacht.",
    "customer_name": "Oskar S. aus Duisburg",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Lustig gefällt mir gut. Klare 10/10.",
    "customer_name": "Kilian L. aus Marburg",
    "date": "2026-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kultfigur ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Mats C. aus Peine",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kilian S. aus Gießen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Raumschiff gefällt mir gut. Daumen hoch!",
    "customer_name": "Jonas U. aus Lippstadt",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Felix M. aus Erkrath",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Kultfigur gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Alexander F. aus Heidelberg",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Jan V. aus Gronau",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Einfach klasse.",
    "customer_name": "Maria I. aus Grevenbroich",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Tobias J. aus Langenfeld",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Tanja L. aus Erfurt",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Lustig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Maria C. aus Gladbeck",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Legende ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Katharina Y. aus Emden",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Sternjäger ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Moritz A. aus Jena",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Paul L. aus Bonn",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Jannik K. aus Rodgau",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Lustig gefällt mir gut. Klare 10/10.",
    "customer_name": "Lenny V. aus Bad Kreuznach",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Adrian J. aus Moers",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Monika P. aus Fürth",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Fabian V. aus Brandenburg an der Havel",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Lisa T. aus Eisenach",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Nadine E. aus Lippstadt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Cooles Design gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Petra U. aus Hameln",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Alexander H. aus Kamen",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Jan L. aus Bochum",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Milan R. aus Plauen",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Ein tolles Geschenk.",
    "customer_name": "Henry N. aus Wolfenbüttel",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis S. aus Erkrath",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Malte X. aus Mülheim an der Ruhr",
    "date": "2025-12-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Dennis T. aus Augsburg",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Super Shop.",
    "customer_name": "Justus R. aus Stralsund",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Besonderes Set gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent J. aus Neuss",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Legende ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny D. aus Hanau",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Niklas H. aus Eschweiler",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Felix W. aus Kaiserslautern",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Jedi Bob gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Sarah D. aus Wunstorf",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Sternjäger gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Matteo F. aus Augsburg",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Leon B. aus Aurich",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Danke!",
    "customer_name": "Valentin V. aus Hameln",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Arne O. aus Plauen",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Sternjäger gefällt mir gut. Klare 10/10.",
    "customer_name": "Birgit C. aus Hof",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Adrian M. aus Bergheim",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. So macht LEGO Spaß.",
    "customer_name": "Kevin A. aus Witten",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Besonderes Set gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Petra S. aus Bocholt",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Star Wars Legende gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Christina I. aus Witten",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Liam D. aus Peine",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Tanja D. aus Worms",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kultfigur ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Sascha B. aus Kleve",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Daumen hoch!",
    "customer_name": "Adrian F. aus Potsdam",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Maximilian S. aus Frechen",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Lustig ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny G. aus Bielefeld",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anton Y. aus Hameln",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Anja T. aus Solingen",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Fabian V. aus Bergkamen",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Raumschiff gefällt mir gut. Klare 10/10.",
    "customer_name": "Monika S. aus Bocholt",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Jedi Bob gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Leo Q. aus Bruchsal",
    "date": "2025-12-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Star Wars Legende gefällt mir gut. Danke.",
    "customer_name": "Tobias V. aus Brandenburg an der Havel",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Dominik X. aus Brandenburg an der Havel",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Danke.",
    "customer_name": "Justus I. aus Düsseldorf",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Lustig gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Anton U. aus Garbsen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Tim O. aus Böblingen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Arne Y. aus Emden",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Christoph K. aus Rostock",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Für Fans ein absolutes Muss.",
    "customer_name": "Dennis M. aus Dülmen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Milan R. aus Monheim am Rhein",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Einfach klasse.",
    "customer_name": "Julian V. aus Straubing",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Malte Z. aus Kaiserslautern",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Sternjäger gefällt mir gut. Bin happy.",
    "customer_name": "Finn B. aus Kassel",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Vincent M. aus Memmingen",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Nicole Y. aus Bad Homburg",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Raumschiff gefällt mir gut. Bin happy.",
    "customer_name": "Christoph G. aus Peine",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Felix W. aus Melle",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Lisa Z. aus Bamberg",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Lustig gefällt mir gut. Danke.",
    "customer_name": "Jan T. aus Bamberg",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Petra T. aus Brotterode",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Top.",
    "customer_name": "Kerstin V. aus Nordhorn",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Hannes J. aus Konstanz",
    "date": "2025-12-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Tom A. aus Emden",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Theo J. aus Peine",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Klare 10/10.",
    "customer_name": "Felix H. aus Kempten",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Dennis R. aus Wolfenbüttel",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Nadine A. aus Bielefeld",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Christoph R. aus Gera",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Legende ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Paul W. aus Gummersbach",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. So macht LEGO Spaß.",
    "customer_name": "Erik O. aus Marburg",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jonas V. aus Meerbusch",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Jedi Bob gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Stefanie I. aus Marl",
    "date": "2025-12-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Niklas D. aus Neu-Ulm",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Bin zufrieden.",
    "customer_name": "Johannes Y. aus Fulda",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Leon N. aus Jena",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Anna G. aus Pforzheim",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Super Shop.",
    "customer_name": "Petra T. aus Offenbach",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Tim E. aus Braunschweig",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Timo W. aus Velbert",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Kevin Y. aus Stolberg",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Cooles Design gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Bastian H. aus Erfurt",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Jedi Bob gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Max F. aus Rheine",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Vincent U. aus Gronau",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Philipp Z. aus Duisburg",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Susanne H. aus Hennef",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kultfigur gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Finn K. aus Lünen",
    "date": "2025-11-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Lisa U. aus Erkrath",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Kultfigur gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Mats C. aus Oldenburg",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Nadine Y. aus Minden",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Top.",
    "customer_name": "Luca O. aus Dortmund",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. 5 Sterne von mir.",
    "customer_name": "Sabine I. aus Frechen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Oskar Q. aus Gießen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Star Wars Legende gefällt mir gut. Danke.",
    "customer_name": "Lenny K. aus Cottbus",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Star Wars Legende gefällt mir gut. Einfach klasse.",
    "customer_name": "Max D. aus Salzgitter",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luis Z. aus Hennef",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Emil B. aus Braunschweig",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Noah A. aus Sindelfingen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Hat sich definitiv gelohnt.",
    "customer_name": "Malte V. aus Freising",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja M. aus Heidenheim",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Ein echter Hingucker in der Vitrine. Bin happy.",
    "customer_name": "Birgit E. aus Wetzlar",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Star Wars Legende gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Milan W. aus Grevenbroich",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben W. aus Gütersloh",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Raumschiff ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Nicole V. aus Siegen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Susanne O. aus Frechen",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Sabine E. aus Kempten",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set. Danke!",
    "customer_name": "Justus Z. aus Halle (Saale)",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Klare 10/10.",
    "customer_name": "Kilian J. aus Minden",
    "date": "2025-11-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Lustig ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nicole V. aus Neu-Ulm",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Freue mich schon auf das nächste Set.",
    "customer_name": "Christoph J. aus Düren",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Lustig ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Justus T. aus Saarbrücken",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Mats S. aus Neunkirchen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Samuel L. aus Dachau",
    "date": "2025-11-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Petra A. aus Ahlen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Niklas L. aus Gütersloh",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Star Wars Legende gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Ben L. aus Oberhausen",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Design ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Paul E. aus Hof",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Florian N. aus Stralsund",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Lisa S. aus Grevenbroich",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Sandra C. aus Kaufbeuren",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Tobias D. aus Görlitz",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Freue mich schon auf das nächste Set.",
    "customer_name": "Vincent C. aus Leipzig",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Melanie Y. aus Fulda",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Star Wars Legende gefällt mir gut. Top, weiter so.",
    "customer_name": "Tom P. aus Eschweiler",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik M. aus Herne",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Robin R. aus Bochum",
    "date": "2025-11-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Bin zufrieden.",
    "customer_name": "Bastian S. aus Magdeburg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Alles richtig gemacht.",
    "customer_name": "Julia G. aus Bayreuth",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Timo W. aus Ludwigsburg",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Bin happy.",
    "customer_name": "Leon C. aus Kempten",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Das Feature Raumschiff ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Sabine L. aus Recklinghausen",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Jonas T. aus Bergheim",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Yannick O. aus Nordhorn",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Andrea Z. aus Dresden",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Julia O. aus Gronau",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Bin zufrieden.",
    "customer_name": "Liam F. aus Leverkusen",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Milan J. aus Remscheid",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Top.",
    "customer_name": "Lukas I. aus Aurich",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Fabian U. aus Neu-Ulm",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tim X. aus Aachen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Raumschiff gefällt mir gut. Einfach klasse.",
    "customer_name": "Sandra A. aus Langenfeld",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Hannes P. aus Bad Salzuflen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Maximilian O. aus Mülheim an der Ruhr",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Vielen Dank für den schnellen Service.",
    "customer_name": "Elias B. aus Borken",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Fabian J. aus Recklinghausen",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Legende ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Sandra U. aus Düsseldorf",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Moritz S. aus Hagen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Danke.",
    "customer_name": "Tanja P. aus Neumünster",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Star Wars Legende gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Malte I. aus Frechen",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Felix Y. aus Buxtehude",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Alles richtig gemacht.",
    "customer_name": "Christina N. aus Straubing",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Julia U. aus Göttingen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Klemmkraft der Steine ist perfekt. Absolute Kaufempfehlung.",
    "customer_name": "Julia E. aus Dresden",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Jedi Bob gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Matteo B. aus Traunstein",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Sascha F. aus Leverkusen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Kerstin T. aus Lemgo",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Sternjäger gefällt mir gut. Daumen hoch!",
    "customer_name": "Felix P. aus Dessau-Roßlau",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit S. aus Gelsenkirchen",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Luca U. aus Bad Homburg",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Star Wars Legende gefällt mir gut. Einfach klasse.",
    "customer_name": "Lukas B. aus Castrop-Rauxel",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt S. aus Frankfurt (Oder)",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Raumschiff gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Tim A. aus Siegen",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Henry F. aus Ratingen",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sternjäger ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Erik A. aus Pforzheim",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Cooles Design gefällt mir gut. Super Shop.",
    "customer_name": "Niklas D. aus Bergisch Gladbach",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Vielen Dank für den schnellen Service.",
    "customer_name": "Nico M. aus Dorsten",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Jonas C. aus Minden",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Maximilian Q. aus Halle (Saale)",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Danke!",
    "customer_name": "Timo L. aus Wiesbaden",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Kultfigur gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sabine G. aus Chemnitz",
    "date": "2025-11-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Theo L. aus Neustadt an der Weinstraße",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Lukas L. aus Siegen",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Noah K. aus Herne",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Lukas X. aus Kleve",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Elias G. aus Düsseldorf",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Vincent S. aus Chemnitz",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Tom D. aus Delmenhorst",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Vincent Z. aus Baden-Baden",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Jedi Bob gefällt mir gut. Daumen hoch!",
    "customer_name": "Anja I. aus Bocholt",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Julian I. aus Hameln",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Lukas L. aus Augsburg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Daumen hoch!",
    "customer_name": "Leon A. aus Leonberg",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Luca J. aus Münster",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Star Wars Legende gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sarah S. aus Bremen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Melanie R. aus Bad Salzuflen",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Lustig ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jan B. aus Herten",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. 5 Sterne von mir.",
    "customer_name": "Jannik V. aus Hannover",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kultfigur ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Adrian K. aus Bamberg",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Besonderes Set gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Niklas Q. aus Bocholt",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Vincent X. aus Siegen",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Sternjäger gefällt mir gut. Danke.",
    "customer_name": "Justus A. aus Dachau",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Niklas B. aus Neustadt an der Weinstraße",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo Z. aus Frankfurt",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Moritz L. aus Eisenach",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Bauprozess war abwechslungsreich und nie langweilig. Klare 10/10.",
    "customer_name": "Monika G. aus Grevenbroich",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Jannik E. aus Troisdorf",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Lustig ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Tobias Z. aus Erfurt",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sabine T. aus Waiblingen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Danke!",
    "customer_name": "Kilian S. aus Wolfenbüttel",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Kevin Z. aus Hennef",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Niklas G. aus Kaufbeuren",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Passt perfekt in meine Sammlung. Bin happy.",
    "customer_name": "Arne M. aus Aalen",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Lustig gefällt mir gut. Danke.",
    "customer_name": "Dennis B. aus Bottrop",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Marlon R. aus Brotterode",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Tom B. aus Sindelfingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar Y. aus Rottenburg",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Moritz P. aus Wilhelmshaven",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell.",
    "customer_name": "Hannes T. aus Leonberg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Passt perfekt in meine Sammlung. Hat sich definitiv gelohnt.",
    "customer_name": "Sabine Z. aus Heidelberg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Lukas B. aus Lüdenscheid",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Finn D. aus Ahlen",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Star Wars Legende gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Fabian G. aus Ambreg",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Star Wars Legende gefällt mir gut. Super Shop.",
    "customer_name": "Felix P. aus Neuss",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Super Shop.",
    "customer_name": "Paul T. aus Offenburg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Fabian L. aus Heinsberg",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Vincent W. aus Nettetal",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Kultfigur gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny M. aus Sankt Augustin",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Tim R. aus Paderborn",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Lustig gefällt mir gut. Super Shop.",
    "customer_name": "Liam F. aus Halle (Saale)",
    "date": "2025-10-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Star Wars Legende gefällt mir gut. Daumen hoch!",
    "customer_name": "Julian V. aus Velbert",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Leon D. aus Potsdam",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Jedi Bob gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Finn R. aus Freiburg",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Für Fans ein absolutes Muss.",
    "customer_name": "Anna W. aus Baden-Baden",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Nadine I. aus Herten",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Oskar K. aus Brotterode",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Erik H. aus Albstadt",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Jannik Y. aus Ludwigshafen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Finn K. aus Lörrach",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Nicole A. aus Emden",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Niklas S. aus Bad Homburg",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Star Wars Legende gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Timo C. aus Traunstein",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Noah M. aus Nordhorn",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Sandra A. aus Bochum",
    "date": "2025-10-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Star Wars Legende gefällt mir gut. Daumen hoch!",
    "customer_name": "Timo C. aus Greifswald",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Bin zufrieden.",
    "customer_name": "Marlon C. aus Wolfenbüttel",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top.",
    "customer_name": "Melanie A. aus Kleve",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Star Wars Legende gefällt mir gut. Klare 10/10.",
    "customer_name": "Arne U. aus Freising",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Moritz K. aus Ludwigsburg",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top. Danke!",
    "customer_name": "Tim U. aus Straubing",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Anna S. aus Hagen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Nicole J. aus Nürnberg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Leon S. aus Weinheim",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Top, weiter so.",
    "customer_name": "Finn X. aus Melle",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Sarah N. aus Regensburg",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Benedikt G. aus Frankfurt (Oder)",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Petra B. aus Pulheim",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Luis K. aus Bayreuth",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Ein tolles Geschenk.",
    "customer_name": "Johannes B. aus Schweinfurt",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Bin happy.",
    "customer_name": "Kerstin U. aus Rüsselsheim",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Niklas U. aus Fellbach",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Nico Y. aus Rheine",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Danke.",
    "customer_name": "Milan D. aus Rostock",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Petra Q. aus Albstadt",
    "date": "2025-10-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Paul V. aus Rastatt",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Super Shop.",
    "customer_name": "Lukas K. aus Gießen",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Oskar B. aus Ravensburg",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Henry F. aus Braunschweig",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Design ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Monika Y. aus Neuss",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Für Fans ein absolutes Muss.",
    "customer_name": "Leon E. aus Kerpen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Star Wars Legende gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anna C. aus Aalen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Nico J. aus Hilden",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Klare 10/10.",
    "customer_name": "Fabian J. aus Siegen",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Paul D. aus Garbsen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Der Spielwert ist hier wirklich hoch. Bin happy.",
    "customer_name": "Sandra H. aus Wesel",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Lenny O. aus Erfurt",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Preis-Leistung stimmt hier.",
    "customer_name": "Malte G. aus Iserlohn",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Ben X. aus Elmshorn",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Bin happy.",
    "customer_name": "Tobias W. aus Frechen",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Sternjäger gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Arne W. aus Kaiserslautern",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik Q. aus Baden-Baden",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Claudia G. aus Velbert",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Klemmkraft der Steine ist perfekt. Das Feature Jedi Bob ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Tobias X. aus Hamm",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Anja R. aus Kaiserslautern",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Sternjäger gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria M. aus Waiblingen",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Theo F. aus Hildesheim",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Leo K. aus Brandenburg an der Havel",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Jan W. aus Kamen",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Paul C. aus Hamburg",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Laura H. aus Monheim am Rhein",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Nicole F. aus Meerbusch",
    "date": "2025-09-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Simon N. aus Düsseldorf",
    "date": "2025-09-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kultfigur ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Arne J. aus Hagen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Vincent Q. aus Schwäbisch Gmünd",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Timo S. aus Dorsten",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich. Bin zufrieden.",
    "customer_name": "Tobias L. aus Villingen-Schwenningen",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Sternjäger gefällt mir gut. Bin happy.",
    "customer_name": "Elias M. aus Ratingen",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Besonderes Set gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Alexander N. aus Gütersloh",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Jedi Bob gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Kilian I. aus Offenbach",
    "date": "2025-09-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Timo F. aus Aurich",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Noah K. aus Lünen",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Ben X. aus Offenbach",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Simon N. aus Karlsruhe",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Bastian M. aus Münster",
    "date": "2025-09-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Bin zufrieden.",
    "customer_name": "Monika X. aus Offenbach",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Hat sich definitiv gelohnt.",
    "customer_name": "Alexander M. aus Schwerin",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Hat sich definitiv gelohnt.",
    "customer_name": "Anna N. aus Frankfurt",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Leo H. aus Neu-Ulm",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Bastian F. aus Alsdorf",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Malte A. aus Lüdenscheid",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Kultfigur gefällt mir gut. Daumen hoch!",
    "customer_name": "Nico B. aus Celle",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Kultfigur gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Leon V. aus Fellbach",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Vincent T. aus Hannover",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Design ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Lenny N. aus Weimar",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Star Wars Legende gefällt mir gut. Top, weiter so.",
    "customer_name": "Finn W. aus Marburg",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Star Wars Legende gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Milan Q. aus Rottenburg",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Jedi Bob ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Tanja S. aus Frankfurt (Oder)",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Design ist klasse. Passt perfekt in meine Sammlung. Top, weiter so.",
    "customer_name": "Yannick Y. aus Nordhorn",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Preis-Leistung stimmt hier.",
    "customer_name": "Hannes F. aus Bietigheim-Bissingen",
    "date": "2025-09-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß. Top.",
    "customer_name": "Kilian S. aus Dormagen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung.",
    "customer_name": "Anton A. aus Esslingen",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Philipp O. aus Ambreg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Lustig gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Kilian B. aus Weinheim",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Noah Q. aus Albstadt",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Design ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Matteo F. aus Mülheim an der Ruhr",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Max G. aus Rheda-Wiedenbrück",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Andrea J. aus Ahlen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Monika Y. aus Böblingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Jedi Bob gefällt mir gut. Daumen hoch!",
    "customer_name": "Finn Z. aus Lübeck",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Nicole U. aus Pforzheim",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Kultfigur ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Kevin P. aus Lingen",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Klemmkraft der Steine ist perfekt. Alles richtig gemacht.",
    "customer_name": "Emil V. aus Bremerhaven",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Paul C. aus Lahr",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Danke!",
    "customer_name": "Samuel Y. aus Wuppertal",
    "date": "2025-09-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Danke!",
    "customer_name": "Fabian U. aus Leverkusen",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Klemmkraft der Steine ist perfekt. Danke.",
    "customer_name": "Yannick E. aus Weinheim",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Sascha W. aus Grevenbroich",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Arne O. aus Freising",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Lisa H. aus Erfurt",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Sternjäger gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon K. aus Gera",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Besonderes Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Anja O. aus Traunstein",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Cooles Design gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kerstin B. aus Fulda",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Andrea W. aus Lingen",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Jonas O. aus Herzogenrath",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit U. aus Kerpen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Laura S. aus Tübingen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Katharina U. aus Neumünster",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Cooles Design gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria X. aus Darmstadt",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Hannes X. aus Heidenheim",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Petra K. aus Peine",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kultfigur ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Dennis E. aus Ratingen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Leo U. aus München",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kultfigur ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Bastian C. aus Buxtehude",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Katharina L. aus Gummersbach",
    "date": "2025-09-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kultfigur ist klasse. Die Minifiguren sind besonders schön bedruckt. Top, weiter so.",
    "customer_name": "Bastian J. aus Berlin",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Lustig gefällt mir gut. Daumen hoch!",
    "customer_name": "Monika E. aus Solingen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Johannes Y. aus Berlin",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Tom G. aus Solingen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Jedi Bob ist klasse. Die Minifiguren sind besonders schön bedruckt. Hat sich definitiv gelohnt.",
    "customer_name": "Lenny J. aus Solingen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Sternjäger gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Timo Z. aus Lüneburg",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert.",
    "customer_name": "Anton E. aus Iserlohn",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Besonderes Set gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Julian Q. aus Essen",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Design ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Erik E. aus Castrop-Rauxel",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Bin rundum zufrieden.",
    "customer_name": "Lisa Y. aus München",
    "date": "2025-09-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Absolute Kaufempfehlung.",
    "customer_name": "Luca I. aus Wilhelmshaven",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Mein Kind spielt seit Tagen nur noch damit. Bin rundum zufrieden.",
    "customer_name": "Mats D. aus Dresden",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Arne Q. aus Wolfenbüttel",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Bauprozess war abwechslungsreich und nie langweilig. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix Z. aus Nürnberg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es gibt viele clevere Bautechniken zu entdecken. Klare 10/10.",
    "customer_name": "Henry S. aus Hof",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Nadine E. aus Wolfsburg",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Nadine Y. aus Hanau",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Niklas W. aus Bayreuth",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Felix D. aus Leinfelden-Echterdingen",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung. Bin zufrieden.",
    "customer_name": "Sarah P. aus Gummersbach",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Raumschiff gefällt mir gut. Einfach klasse.",
    "customer_name": "Kerstin C. aus Zwickau",
    "date": "2025-08-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Super Shop.",
    "customer_name": "Laura G. aus Lingen",
    "date": "2025-08-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Bin zufrieden.",
    "customer_name": "Kevin O. aus Lörrach",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Luis E. aus Wolfsburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Bin rundum zufrieden.",
    "customer_name": "Bastian X. aus Aschaffenburg",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Besonderes Set gefällt mir gut. Bin happy.",
    "customer_name": "Jonas H. aus Cottbus",
    "date": "2025-08-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Für Fans ein absolutes Muss.",
    "customer_name": "Henry I. aus Viersen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Design ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Tobias D. aus Kleve",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Cooles Design gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Simon Z. aus Alsdorf",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Star Wars Legende gefällt mir gut. Daumen hoch!",
    "customer_name": "Melanie Q. aus Augsburg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Felix H. aus Freising",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen.",
    "customer_name": "Ben R. aus Offenbach",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Klare 10/10.",
    "customer_name": "Florian Y. aus Lübeck",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Cooles Design gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Tom M. aus Duisburg",
    "date": "2025-08-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Robin B. aus Wiesbaden",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spaß beim Bauen. Danke!",
    "customer_name": "Alexander G. aus Schweinfurt",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Besonderes Set gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Nicole G. aus Erlangen",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Besonderes Set gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Vincent L. aus Frankfurt",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Kilian V. aus Kamen",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Julia K. aus Aurich",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Raumschiff gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Melanie H. aus Herne",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Hat sich definitiv gelohnt.",
    "customer_name": "Birgit T. aus Nürnberg",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Jedi Bob ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Tim A. aus Gießen",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Julian J. aus Ulm",
    "date": "2025-08-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Paul W. aus Fellbach",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Klare 10/10.",
    "customer_name": "Julian N. aus Hürth",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Legende ist klasse. Der Spielwert ist hier wirklich hoch. Klare 10/10.",
    "customer_name": "Leon V. aus Castrop-Rauxel",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kultfigur ist klasse. Die Details sind wirklich liebevoll gestaltet. So macht LEGO Spaß.",
    "customer_name": "Julian H. aus Ludwigshafen",
    "date": "2025-08-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Freue mich schon auf das nächste Set.",
    "customer_name": "Julian K. aus Halle (Saale)",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Lustig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Timo D. aus Cottbus",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine A. aus Ludwigsburg",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Justus S. aus Göppingen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Besonderes Set ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Leo C. aus Dinslaken",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Raumschiff gefällt mir gut. Top, weiter so.",
    "customer_name": "David L. aus Essen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Details sind wirklich liebevoll gestaltet. Bin rundum zufrieden.",
    "customer_name": "Moritz Q. aus Fellbach",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Top.",
    "customer_name": "Christoph T. aus Rüsselsheim",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Lustig gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Philipp W. aus Heidenheim",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Freue mich schon auf das nächste Set.",
    "customer_name": "Maria Q. aus Schweinfurt",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Benedikt A. aus Worms",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Tobias R. aus Braunschweig",
    "date": "2025-08-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Besonderes Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Felix D. aus Essen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität.",
    "customer_name": "Yannick A. aus Elmshorn",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Jannik B. aus Essen",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. 5 Sterne von mir.",
    "customer_name": "Anja R. aus Pinneberg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Star Wars Legende gefällt mir gut. Top, weiter so.",
    "customer_name": "Adrian M. aus Heidelberg",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Lisa Q. aus Karlsruhe",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "Dennis Z. aus Lünen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Mein Kind spielt seit Tagen nur noch damit. Preis-Leistung stimmt hier.",
    "customer_name": "David L. aus Garbsen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Freue mich schon auf das nächste Set.",
    "customer_name": "Benedikt G. aus Gießen",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Bastian N. aus Lörrach",
    "date": "2025-08-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt.",
    "customer_name": "Yannick S. aus Hürth",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Lukas I. aus Esslingen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Fabian X. aus Hanau",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kultfigur ist klasse. Passt perfekt in meine Sammlung. 5 Sterne von mir.",
    "customer_name": "Florian O. aus Mülheim an der Ruhr",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Preis-Leistung stimmt hier.",
    "customer_name": "Adrian V. aus Weimar",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Besonderes Set gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Simon U. aus Aalen",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität. Bin zufrieden.",
    "customer_name": "Kevin M. aus Menden",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sternjäger ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Milan Q. aus Mönchengladbach",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Besonderes Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Alexander A. aus Kempten",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es ist sehr stabil, man kann gut damit spielen. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea W. aus Albstadt",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Monika A. aus Castrop-Rauxel",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin rundum zufrieden.",
    "customer_name": "Leon S. aus Böblingen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay.",
    "customer_name": "Tanja E. aus Viersen",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Kultfigur gefällt mir gut. Daumen hoch!",
    "customer_name": "Kevin Z. aus Brandenburg an der Havel",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Sortierung der Tüten macht den Aufbau sehr angenehm. So macht LEGO Spaß.",
    "customer_name": "Noah X. aus Witten",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kevin J. aus Herne",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Susanne K. aus Pulheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Sternjäger gefällt mir gut. Einfach klasse.",
    "customer_name": "Leo S. aus Monheim am Rhein",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Birgit C. aus Buxtehude",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Raumschiff gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Tim K. aus Memmingen",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Finn Y. aus Gummersbach",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Bin zufrieden.",
    "customer_name": "Kevin R. aus Gronau",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Anja Y. aus Düsseldorf",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Malte J. aus Hilden",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Nico F. aus Frechen",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Claudia Q. aus Hildesheim",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Paul H. aus Lübeck",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Ben R. aus Hildesheim",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Absolute Kaufempfehlung.",
    "customer_name": "Hannes F. aus München",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Tim D. aus Jena",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Es gibt viele bewegliche Teile und Funktionen. Absolute Kaufempfehlung.",
    "customer_name": "Timo H. aus Wunstorf",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Jedi Bob gefällt mir gut. Einfach klasse.",
    "customer_name": "Florian C. aus Nordhorn",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Einfach klasse.",
    "customer_name": "Mats U. aus Pforzheim",
    "date": "2025-07-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus.",
    "customer_name": "Sabine W. aus Ludwigshafen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Ein tolles Geschenk.",
    "customer_name": "Felix L. aus Oranienburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Fabian G. aus Hamburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Legende ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Sascha O. aus Norderstedt",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Mats G. aus Bad Homburg",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Einfach klasse.",
    "customer_name": "Johannes A. aus Landshut",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. So macht LEGO Spaß.",
    "customer_name": "Leon Y. aus Landshut",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Susanne Q. aus Bergkamen",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Es gibt viele bewegliche Teile und Funktionen. Klare 10/10.",
    "customer_name": "Maria Y. aus Mannheim",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Yannick X. aus Göppingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Maximilian S. aus Passau",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Kultfigur gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Elias L. aus Waiblingen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Claudia E. aus Bocholt",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Lenny Q. aus Bad Oeynhausen",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Fabian I. aus Rosenheim",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Star Wars Legende gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Mats M. aus Neustadt an der Weinstraße",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kultfigur ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Claudia C. aus Erftstadt",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Cooles Design gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Nicole I. aus Celle",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Dominik W. aus Saarbrücken",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Monika E. aus Osnabrück",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "David F. aus Bremerhaven",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Hat sich definitiv gelohnt.",
    "customer_name": "Mats S. aus Melle",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. 5 Sterne von mir.",
    "customer_name": "Julian E. aus Monheim am Rhein",
    "date": "2025-07-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Cooles Design ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin happy.",
    "customer_name": "Katharina A. aus Marburg",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Sascha X. aus Saarbrücken",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Bin zufrieden.",
    "customer_name": "Vincent Y. aus Elmshorn",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Liam R. aus Bornheim",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Theo F. aus Karlsruhe",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Emil H. aus Kerpen",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Fabian O. aus Rheda-Wiedenbrück",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Tanja I. aus Bamberg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Besonderes Set gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt R. aus Memmingen",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Top, weiter so.",
    "customer_name": "Felix N. aus Marl",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Nicole R. aus Wetzlar",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Lustig gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Fabian F. aus Dachau",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sternjäger ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Luis G. aus Lüdenscheid",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Lustig gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Justus L. aus Hamm",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Top, weiter so.",
    "customer_name": "Julian Q. aus Freising",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Johannes G. aus Greifswald",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Valentin G. aus Pforzheim",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Sternjäger gefällt mir gut. Klare 10/10.",
    "customer_name": "Matteo X. aus Siegen",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Melanie M. aus Dorsten",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Noah T. aus Zwickau",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Lisa P. aus Remscheid",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Milan Z. aus Nordhorn",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Raumschiff gefällt mir gut. Klare 10/10.",
    "customer_name": "Milan P. aus Gronau",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Leon G. aus Potsdam",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Der Spielwert ist hier wirklich hoch. Danke.",
    "customer_name": "Elias A. aus Erkrath",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Arne D. aus Rheda-Wiedenbrück",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Kerstin N. aus Frankfurt",
    "date": "2025-07-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Alles richtig gemacht.",
    "customer_name": "Henry K. aus Essen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Milan J. aus Kerpen",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Maria X. aus Hannover",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Nico R. aus Dorsten",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Lenny Q. aus Soest",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Raumschiff gefällt mir gut. Einfach klasse.",
    "customer_name": "Susanne S. aus Neustadt an der Weinstraße",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Moritz A. aus Göttingen",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Besonderes Set gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Julia Y. aus Ambreg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden.",
    "customer_name": "Jonas L. aus Waiblingen",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Jedi Bob gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Melanie I. aus Wetzlar",
    "date": "2025-07-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Star Wars Legende gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Christoph R. aus Dachau",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Super Shop.",
    "customer_name": "Samuel V. aus Gladbeck",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Milan G. aus Fulda",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut. Bin zufrieden.",
    "customer_name": "Birgit Z. aus Rosenheim",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Yannick V. aus Ahlen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Top, weiter so.",
    "customer_name": "Nicole H. aus Greifswald",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Dennis N. aus Kiel",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Klare 10/10.",
    "customer_name": "Ben V. aus Bayreuth",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Auch für jüngere Kinder gut zu bewältigen. Danke.",
    "customer_name": "Sabine F. aus Wunstorf",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Der Spielwert ist hier wirklich hoch. Super Shop.",
    "customer_name": "Tom S. aus Darmstadt",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Felix V. aus Langenfeld",
    "date": "2025-07-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Auch für jüngere Kinder gut zu bewältigen. Einfach klasse.",
    "customer_name": "Samuel O. aus Flensburg",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Details sind wirklich liebevoll gestaltet. Daumen hoch!",
    "customer_name": "Dennis D. aus Ibbenbüren",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar W. aus Grevenbroich",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Tobias C. aus Herzogenrath",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Arne L. aus Lüdenscheid",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Leon L. aus Würzburg",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Cooles Design gefällt mir gut. Top, weiter so.",
    "customer_name": "Claudia L. aus Mülheim an der Ruhr",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Melanie V. aus Brandenburg an der Havel",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Paul R. aus Gronau",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Legende ist klasse. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Lenny S. aus Eisenach",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Tanja P. aus Kiel",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Anja K. aus Bergheim",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Sabine T. aus Sindelfingen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Besonderes Set gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Tanja U. aus Elmshorn",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Besonderes Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton N. aus Esslingen",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Super Shop.",
    "customer_name": "Nicole T. aus Erfurt",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Jedi Bob gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Erik L. aus Albstadt",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Tom L. aus Friedrichshafen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es ist sehr stabil, man kann gut damit spielen. Alles richtig gemacht.",
    "customer_name": "Christoph M. aus Eisenach",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Sternjäger gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Malte M. aus Erlangen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Cooles Design gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Moritz F. aus Gießen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Cooles Design gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Benedikt Q. aus Bad Salzuflen",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Top, weiter so.",
    "customer_name": "Jannik X. aus Lemgo",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Laura Q. aus Bergheim",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tolles Set.",
    "customer_name": "Hannes W. aus Köln",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Jonas K. aus Hamburg",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Fabian V. aus Gummersbach",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig. Top.",
    "customer_name": "Katharina F. aus Frechen",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Jedi Bob gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Christina M. aus Potsdam",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Fabian M. aus Heidenheim",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Vielen Dank für den schnellen Service.",
    "customer_name": "Samuel C. aus Rostock",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Henry D. aus Norderstedt",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Leon R. aus Salzgitter",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Cooles Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Felix J. aus Rüsselsheim",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Lustig ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "David F. aus Melle",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Andrea F. aus Heidelberg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Alles richtig gemacht.",
    "customer_name": "Milan B. aus Traunstein",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Sternjäger gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Maria W. aus Greifswald",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Besonderes Set gefällt mir gut. Daumen hoch!",
    "customer_name": "Tim Z. aus Norderstedt",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Sarah K. aus Göppingen",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Birgit V. aus Baden-Baden",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Jedi Bob gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul M. aus Langenfeld",
    "date": "2025-06-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Kilian Z. aus Bremen",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein echter Hingucker in der Vitrine. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Paul X. aus Schwerin",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Cooles Design ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Petra T. aus Hanau",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderschönes Modell. Top.",
    "customer_name": "Henry Z. aus Troisdorf",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Valentin Q. aus Traunstein",
    "date": "2025-06-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Top, weiter so.",
    "customer_name": "Julian M. aus Soest",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sascha K. aus Delmenhorst",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Christina N. aus Hameln",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Cooles Design gefällt mir gut. Klare 10/10.",
    "customer_name": "Melanie S. aus Heilbronn",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Niklas E. aus Dessau-Roßlau",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Design ist klasse. Der Spielwert ist hier wirklich hoch. 5 Sterne von mir.",
    "customer_name": "Alexander L. aus Dorsten",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Elias Q. aus Lörrach",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin rundum zufrieden.",
    "customer_name": "Birgit W. aus Neumünster",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Mats P. aus Erlangen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Tom G. aus Flensburg",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Jedi Bob gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Luca O. aus Frechen",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Bin rundum zufrieden.",
    "customer_name": "Fabian P. aus Ingolstadt",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Alexander T. aus Kleve",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Klare 10/10.",
    "customer_name": "Emil F. aus Remscheid",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Cooles Design gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Paul R. aus Elmshorn",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. Absolute Kaufempfehlung.",
    "customer_name": "Dennis N. aus Eschweiler",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Design ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Claudia A. aus Rheda-Wiedenbrück",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Anja U. aus Hameln",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr zufrieden. Bin zufrieden.",
    "customer_name": "Julia K. aus Fulda",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Felix A. aus Grevenbroich",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Hannes O. aus Ludwigshafen",
    "date": "2025-06-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Fabian A. aus Gelsenkirchen",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Für Fans ein absolutes Muss.",
    "customer_name": "Erik B. aus Castrop-Rauxel",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Einfach klasse.",
    "customer_name": "Petra Y. aus Stralsund",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Cooles Design gefällt mir gut. Klare 10/10.",
    "customer_name": "Noah V. aus Leonberg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Stefanie X. aus Erftstadt",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Jannik W. aus Leonberg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Alexander M. aus Herne",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Mats Y. aus Oberursel",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Valentin G. aus Münster",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Dominik U. aus Bad Homburg",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Danke!",
    "customer_name": "Laura W. aus Marl",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Preis-Leistung stimmt hier.",
    "customer_name": "Leo G. aus Recklinghausen",
    "date": "2025-06-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Hat sich definitiv gelohnt.",
    "customer_name": "Tanja I. aus Neu-Ulm",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Jedi Bob ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Leon K. aus Rostock",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Super Shop.",
    "customer_name": "Sabine R. aus Dorsten",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Für Fans ein absolutes Muss.",
    "customer_name": "Leon Q. aus Rheine",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Niklas T. aus Rheda-Wiedenbrück",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Danke.",
    "customer_name": "Christoph H. aus Hamm",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Besonderes Set ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Hannes P. aus Menden",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Kultfigur ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Niklas R. aus Grevenbroich",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Ein echter Hingucker in der Vitrine. Ein tolles Geschenk.",
    "customer_name": "Jonas K. aus Alsdorf",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Top, weiter so.",
    "customer_name": "Sarah I. aus Bielefeld",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Sabine I. aus Dresden",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Claudia P. aus Gera",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne. Danke!",
    "customer_name": "Nicole K. aus Rheine",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein echter Hingucker in der Vitrine. Alles richtig gemacht.",
    "customer_name": "Claudia T. aus Ingolstadt",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Preis-Leistung stimmt hier.",
    "customer_name": "Florian R. aus Siegen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Klemmkraft der Steine ist perfekt. Das Feature Sternjäger ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Sandra K. aus Hagen",
    "date": "2025-05-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Raumschiff gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Laura Y. aus Gladbeck",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Die Minifiguren sind besonders schön bedruckt. Super Shop.",
    "customer_name": "Dennis L. aus Leipzig",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Vincent P. aus Ibbenbüren",
    "date": "2025-05-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Besonderes Set gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Julian G. aus Iserlohn",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Lustig ist klasse. Die Minifiguren sind besonders schön bedruckt. Ein tolles Geschenk.",
    "customer_name": "Monika O. aus Plauen",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. So macht LEGO Spaß.",
    "customer_name": "Finn Y. aus Hennef",
    "date": "2025-05-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Sternjäger gefällt mir gut. Danke.",
    "customer_name": "Florian Z. aus Bamberg",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Passt perfekt in meine Sammlung. So macht LEGO Spaß.",
    "customer_name": "Anton P. aus Düren",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Jedi Bob ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Klare 10/10.",
    "customer_name": "Elias G. aus Delmenhorst",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Bin happy.",
    "customer_name": "Dominik R. aus Rastatt",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Lustig ist klasse. Die Details sind wirklich liebevoll gestaltet. Hat sich definitiv gelohnt.",
    "customer_name": "Jannik F. aus Aachen",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Sternjäger gefällt mir gut. Danke.",
    "customer_name": "Christina T. aus Krefeld",
    "date": "2025-05-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wie immer top.",
    "customer_name": "Julia D. aus Friedrichshafen",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kind ist glücklich.",
    "customer_name": "Kevin Q. aus Jena",
    "date": "2025-05-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Für Fans ein absolutes Muss.",
    "customer_name": "Niklas E. aus Lünen",
    "date": "2025-05-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Moritz A. aus Kleve",
    "date": "2025-05-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Lustig gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Susanne K. aus Lingen",
    "date": "2025-05-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Meine Empfehlung.",
    "customer_name": "Nico U. aus Rosenheim",
    "date": "2025-05-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sternjäger ist klasse. Der Spielwert ist hier wirklich hoch. Preis-Leistung stimmt hier.",
    "customer_name": "Monika V. aus Marl",
    "date": "2025-05-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Raumschiff gefällt mir gut. Klare 10/10.",
    "customer_name": "Robin U. aus Aalen",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Nicole K. aus Heinsberg",
    "date": "2025-05-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens. Top.",
    "customer_name": "Theo C. aus Lemgo",
    "date": "2025-05-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Sternjäger gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Florian K. aus Fulda",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "Laura U. aus Stuttgart",
    "date": "2025-05-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Milan S. aus Sankt Augustin",
    "date": "2025-05-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Christina O. aus Neuwied",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Jedi Bob gefällt mir gut. Danke.",
    "customer_name": "Claudia W. aus Hameln",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Stefanie I. aus Regensburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Emil H. aus Wolfsburg",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Matteo T. aus Düren",
    "date": "2025-05-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Claudia Y. aus Elmshorn",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Raumschiff gefällt mir gut. Daumen hoch!",
    "customer_name": "Fabian T. aus Kaiserslautern",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Bastian F. aus Traunstein",
    "date": "2025-05-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es lässt sich auch super mit anderen Sets kombinieren. 5 Sterne von mir.",
    "customer_name": "Dominik V. aus Gera",
    "date": "2025-05-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse. Top.",
    "customer_name": "Sabine E. aus Melle",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Besonderes Set ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Tim X. aus Landshut",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Fertig aufgebaut sieht es im Regal einfach toll aus. 5 Sterne von mir.",
    "customer_name": "Tom X. aus Hildesheim",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Cooles Design gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luis Q. aus Neu-Ulm",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Besonders Star Wars Legende gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik R. aus Marburg",
    "date": "2025-05-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Bastian A. aus Bietigheim-Bissingen",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Theo V. aus Braunschweig",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Der Bauprozess war abwechslungsreich und nie langweilig. Super Shop.",
    "customer_name": "Robin Z. aus Herten",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Besonders Raumschiff gefällt mir gut. Super Shop.",
    "customer_name": "Alexander A. aus Ulm",
    "date": "2025-05-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Kultfigur ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Andrea X. aus Mönchengladbach",
    "date": "2025-05-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Sarah X. aus Kleve",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Sandra F. aus Emden",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Anleitung war sehr verständlich und einfach zu folgen. Einfach klasse.",
    "customer_name": "Julian O. aus Bergisch Gladbach",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Top, weiter so.",
    "customer_name": "Noah J. aus Schwäbisch Gmünd",
    "date": "2025-05-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Alles richtig gemacht.",
    "customer_name": "Johannes B. aus Langenhagen",
    "date": "2025-05-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Maria H. aus Rosenheim",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kultfigur ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Luca U. aus Gladbeck",
    "date": "2025-05-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Für Fans ein absolutes Muss.",
    "customer_name": "Leon F. aus Speyer",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Raumschiff ist klasse. Die Details sind wirklich liebevoll gestaltet. Top, weiter so.",
    "customer_name": "Timo W. aus Osnabrück",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Anna O. aus Melle",
    "date": "2025-05-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Kultfigur gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Lukas U. aus Tübingen",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Kultfigur gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Lenny G. aus Osnabrück",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Stefanie Z. aus Heidelberg",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Katharina A. aus Gladbeck",
    "date": "2025-05-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Lenny Z. aus Langenhagen",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Einfach klasse.",
    "customer_name": "Petra S. aus Hennef",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Bin rundum zufrieden.",
    "customer_name": "Leon V. aus Stolberg",
    "date": "2025-05-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Felix E. aus Aschaffenburg",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Jannik C. aus Eisenach",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Auch für jüngere Kinder gut zu bewältigen. Absolute Kaufempfehlung.",
    "customer_name": "Theo N. aus Gummersbach",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Absolute Kaufempfehlung.",
    "customer_name": "Christina J. aus Marl",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Jedi Bob gefällt mir gut. Daumen hoch!",
    "customer_name": "Ben S. aus Gera",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Mein Kind spielt seit Tagen nur noch damit. Klare 10/10.",
    "customer_name": "Leon W. aus Stuttgart",
    "date": "2025-05-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Qualität.",
    "customer_name": "Petra A. aus Bruchsal",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Bin happy.",
    "customer_name": "Stefanie N. aus Krefeld",
    "date": "2025-05-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es lässt sich auch super mit anderen Sets kombinieren. Absolute Kaufempfehlung.",
    "customer_name": "Tim W. aus Heidenheim",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Anna Y. aus Nettetal",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Anton C. aus Halle (Saale)",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Mats B. aus Mönchengladbach",
    "date": "2025-04-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Auch für jüngere Kinder gut zu bewältigen. Das Feature Raumschiff ist klasse. Die Minifiguren sind besonders schön bedruckt. Einfach klasse.",
    "customer_name": "Dominik H. aus Eschweiler",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Raumschiff ist klasse. Der Spielwert ist hier wirklich hoch. Daumen hoch!",
    "customer_name": "Malte V. aus Brandenburg an der Havel",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Jedi Bob ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Andrea M. aus Kaiserslautern",
    "date": "2025-04-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Mein Kind spielt seit Tagen nur noch damit. Daumen hoch!",
    "customer_name": "Jannik U. aus Wilhelmshaven",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Daumen hoch!",
    "customer_name": "Emil A. aus Rastatt",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Der Bauprozess war abwechslungsreich und nie langweilig. Hat sich definitiv gelohnt.",
    "customer_name": "Stefanie Q. aus Frankfurt",
    "date": "2025-04-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Elias S. aus Rottenburg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Der Bauprozess war abwechslungsreich und nie langweilig. Bin rundum zufrieden.",
    "customer_name": "Tobias V. aus Troisdorf",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Cooles Design gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Lenny U. aus Lahr",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Lenny Y. aus Kassel",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Besonders Star Wars Legende gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Arne Y. aus Nürnberg",
    "date": "2025-04-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Raumschiff gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Felix F. aus Detmold",
    "date": "2025-04-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kultfigur ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Henry N. aus Fulda",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Bastian R. aus Weimar",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Lukas X. aus Wesel",
    "date": "2025-04-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Theo Z. aus Hameln",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis.",
    "customer_name": "David U. aus Alsdorf",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Claudia L. aus Hildesheim",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Besonderes Set gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Birgit N. aus Gera",
    "date": "2025-04-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Lustig gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Matteo B. aus Delmenhorst",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Besonderes Set gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Julian Y. aus Bad Salzuflen",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Tobias J. aus Augsburg",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Petra S. aus Ingolstadt",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Absolute Kaufempfehlung.",
    "customer_name": "Max D. aus Gronau",
    "date": "2025-04-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Raumschiff gefällt mir gut. Top, weiter so.",
    "customer_name": "Julia M. aus Ravensburg",
    "date": "2025-04-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung. Bin zufrieden.",
    "customer_name": "Anja R. aus Herzogenrath",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Vielen Dank für den schnellen Service.",
    "customer_name": "Marlon T. aus München",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Bin happy.",
    "customer_name": "Matteo M. aus Aurich",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Top, weiter so.",
    "customer_name": "Yannick Q. aus Brotterode",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Jedi Bob ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Melanie J. aus Bielefeld",
    "date": "2025-04-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Jedi Bob ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Lenny E. aus Friedrichshafen",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Jedi Bob gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Henry F. aus Dinslaken",
    "date": "2025-04-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Details sind wirklich liebevoll gestaltet. Vielen Dank für den schnellen Service.",
    "customer_name": "Oskar R. aus Oberursel",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele bewegliche Teile und Funktionen. Daumen hoch!",
    "customer_name": "Florian Y. aus Schwerin",
    "date": "2025-04-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Sternjäger ist klasse. Die Details sind wirklich liebevoll gestaltet. Absolute Kaufempfehlung.",
    "customer_name": "Simon C. aus Schwäbisch Gmünd",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Simon H. aus Heinsberg",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Lustig gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis T. aus Jena",
    "date": "2025-04-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Passt perfekt in meine Sammlung. Einfach klasse.",
    "customer_name": "Liam J. aus Tübingen",
    "date": "2025-04-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Star Wars Legende gefällt mir gut. Bin happy.",
    "customer_name": "Kilian K. aus Viersen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Sternjäger gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Theo W. aus Bergkamen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Bin zufrieden.",
    "customer_name": "Tom B. aus Weinheim",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Benedikt D. aus Bad Salzuflen",
    "date": "2025-04-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Legende ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Valentin P. aus Saarbrücken",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Auch für jüngere Kinder gut zu bewältigen. 5 Sterne von mir.",
    "customer_name": "Henry M. aus Bad Homburg",
    "date": "2025-04-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Legende ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Vincent N. aus Brotterode",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Cooles Design gefällt mir gut. Einfach klasse.",
    "customer_name": "Stefanie V. aus Lörrach",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Kultfigur ist klasse. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Melanie K. aus Wilhelmshaven",
    "date": "2025-04-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Sternjäger gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Ben S. aus Speyer",
    "date": "2025-04-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Arne W. aus Frankfurt (Oder)",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Dennis X. aus Reutlingen",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Auch für jüngere Kinder gut zu bewältigen. Das Feature Cooles Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Birgit Y. aus Krefeld",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Besonderes Set gefällt mir gut. Klare 10/10.",
    "customer_name": "Stefanie J. aus Krefeld",
    "date": "2025-04-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Cooles Design ist klasse. Es gibt viele bewegliche Teile und Funktionen. Alles richtig gemacht.",
    "customer_name": "Mats V. aus Bielefeld",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klare Empfehlung.",
    "customer_name": "Dominik C. aus Bruchsal",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Sternjäger ist klasse. Die Minifiguren sind besonders schön bedruckt. Bin rundum zufrieden.",
    "customer_name": "Dominik W. aus Wiesbaden",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Bin happy.",
    "customer_name": "Luis C. aus Hamburg",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kultfigur gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Vincent Q. aus Emden",
    "date": "2025-04-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Besonders Kultfigur gefällt mir gut. Daumen hoch!",
    "customer_name": "Petra Y. aus Waiblingen",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Top, weiter so.",
    "customer_name": "Leon X. aus Bochum",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Leon M. aus Rheine",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Bin happy.",
    "customer_name": "Oskar K. aus Mannheim",
    "date": "2025-04-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Jedi Bob gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Christina R. aus Bergheim",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Liam D. aus Ingolstadt",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus Y. aus Worms",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Top, weiter so.",
    "customer_name": "Elias S. aus Göppingen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Kultfigur gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Sascha H. aus Elmshorn",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Raumschiff gefällt mir gut. Top, weiter so.",
    "customer_name": "Simon H. aus Leverkusen",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Sandra A. aus Dessau-Roßlau",
    "date": "2025-04-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Besonderes Set gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Malte X. aus Elmshorn",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Mein Kind spielt seit Tagen nur noch damit. Freue mich schon auf das nächste Set.",
    "customer_name": "Noah H. aus Bayreuth",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Raumschiff gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Simon G. aus Wesel",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Moritz P. aus Stralsund",
    "date": "2025-04-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Paul N. aus Kassel",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Es gibt viele clevere Bautechniken zu entdecken. 5 Sterne von mir.",
    "customer_name": "Elias A. aus Waiblingen",
    "date": "2025-04-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt.",
    "customer_name": "Theo S. aus Düsseldorf",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Der Bauprozess war abwechslungsreich und nie langweilig. Preis-Leistung stimmt hier.",
    "customer_name": "Oskar P. aus Halle (Saale)",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Kultfigur gefällt mir gut. Super Shop.",
    "customer_name": "Kilian X. aus Marburg",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Kultfigur ist klasse. Es ist sehr stabil, man kann gut damit spielen. Absolute Kaufempfehlung.",
    "customer_name": "Petra G. aus Karlsruhe",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Für Fans ein absolutes Muss.",
    "customer_name": "Adrian C. aus Aurich",
    "date": "2025-04-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Klare 10/10.",
    "customer_name": "Luis P. aus Eschweiler",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Raumschiff gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Justus A. aus Rheda-Wiedenbrück",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Lustig gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Birgit I. aus Bad Salzuflen",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Die Minifiguren sind besonders schön bedruckt. Freue mich schon auf das nächste Set.",
    "customer_name": "Anton V. aus Mannheim",
    "date": "2025-04-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Moritz L. aus Oberursel",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Jan J. aus Ibbenbüren",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Jedi Bob gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Milan A. aus Cottbus",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Raumschiff ist klasse. Die Details sind wirklich liebevoll gestaltet. Einfach klasse.",
    "customer_name": "Elias D. aus Witten",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es lässt sich auch super mit anderen Sets kombinieren. Freue mich schon auf das nächste Set.",
    "customer_name": "Max D. aus Aurich",
    "date": "2025-04-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Für Fans ein absolutes Muss.",
    "customer_name": "Sascha N. aus Dresden",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Matteo H. aus Paderborn",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Cooles Design gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin R. aus Wolfenbüttel",
    "date": "2025-04-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Spielwert ist hier wirklich hoch. Hat sich definitiv gelohnt.",
    "customer_name": "Moritz Z. aus Bad Kreuznach",
    "date": "2025-03-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Kultfigur gefällt mir gut. Danke.",
    "customer_name": "Tim J. aus Lemgo",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Dennis F. aus Leipzig",
    "date": "2025-03-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Sternjäger gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Mats I. aus Esslingen",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Emil M. aus Bochum",
    "date": "2025-03-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Es gibt viele clevere Bautechniken zu entdecken. Einfach klasse.",
    "customer_name": "Niklas S. aus Bocholt",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Jedi Bob ist klasse. Die Minifiguren sind besonders schön bedruckt. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Tom S. aus Iserlohn",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Kultfigur gefällt mir gut. Top, weiter so.",
    "customer_name": "Sarah J. aus Iserlohn",
    "date": "2025-03-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnelle Lieferung.",
    "customer_name": "Hannes Q. aus Gütersloh",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön. Bin zufrieden.",
    "customer_name": "Robin E. aus Aachen",
    "date": "2025-03-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Hat sich definitiv gelohnt.",
    "customer_name": "Tobias O. aus Oberursel",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Raumschiff gefällt mir gut. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Sascha G. aus Ambreg",
    "date": "2025-03-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Die Minifiguren sind besonders schön bedruckt. Vielen Dank für den schnellen Service.",
    "customer_name": "Anna D. aus Witten",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Vielen Dank für den schnellen Service.",
    "customer_name": "Erik N. aus Leipzig",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Auch für jüngere Kinder gut zu bewältigen. Das Feature Lustig ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Hat sich definitiv gelohnt.",
    "customer_name": "Lenny T. aus Baden-Baden",
    "date": "2025-03-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Besonderes Set ist klasse. Mein Kind spielt seit Tagen nur noch damit. Bin happy.",
    "customer_name": "Lukas P. aus Pulheim",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Leo G. aus Krefeld",
    "date": "2025-03-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin begeistert. Top.",
    "customer_name": "Stefanie X. aus Remscheid",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Tobias L. aus München",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Star Wars Legende ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Samuel U. aus Rheine",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Luca D. aus Bad Oeynhausen",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Adrian J. aus Marl",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Danke!",
    "customer_name": "Andrea E. aus Hagen",
    "date": "2025-03-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Kultfigur gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Theo E. aus Hildesheim",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Marlon M. aus Ibbenbüren",
    "date": "2025-03-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Besonderes Set gefällt mir gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas H. aus Flensburg",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Jedi Bob gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "Andrea G. aus Schweinfurt",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Anleitung war sehr verständlich und einfach zu folgen. Ein tolles Geschenk.",
    "customer_name": "Christoph I. aus Augsburg",
    "date": "2025-03-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Vielen Dank für den schnellen Service.",
    "customer_name": "Moritz C. aus Dessau-Roßlau",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Fabian G. aus Tübingen",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Florian P. aus Chemnitz",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Vielen Dank für den schnellen Service.",
    "customer_name": "Bastian P. aus Halle (Saale)",
    "date": "2025-03-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Sternjäger ist klasse. Die Minifiguren sind besonders schön bedruckt. Daumen hoch!",
    "customer_name": "Benedikt A. aus Greifswald",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Freue mich schon auf das nächste Set.",
    "customer_name": "Niklas Y. aus Plauen",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele bewegliche Teile und Funktionen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Kilian W. aus Oberhausen",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Passt perfekt. Top.",
    "customer_name": "Petra M. aus Greifswald",
    "date": "2025-03-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Milan I. aus Göppingen",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Daumen hoch!",
    "customer_name": "Finn Y. aus Buxtehude",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Besonders Jedi Bob gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Simon N. aus Viersen",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Cooles Design ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kilian Q. aus Alsdorf",
    "date": "2025-03-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es haben keine Teile gefehlt, was sehr wichtig ist. Bin happy.",
    "customer_name": "Nico C. aus Troisdorf",
    "date": "2025-03-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Dominik E. aus Passau",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Henry J. aus Garbsen",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Bin rundum zufrieden.",
    "customer_name": "David H. aus Kaiserslautern",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Besonders Sternjäger gefällt mir gut. Bin happy.",
    "customer_name": "Marlon C. aus Wuppertal",
    "date": "2025-03-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Sandra L. aus Bruchsal",
    "date": "2025-03-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Maria O. aus Ingolstadt",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Besonderes Set ist klasse. Passt perfekt in meine Sammlung. Klare 10/10.",
    "customer_name": "Andrea D. aus Sankt Augustin",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Cooles Design gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Dennis Y. aus Wunstorf",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Mein Kind spielt seit Tagen nur noch damit. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Jannik Q. aus Greifswald",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Minifiguren sind besonders schön bedruckt. Für Fans ein absolutes Muss.",
    "customer_name": "Lisa I. aus Chemnitz",
    "date": "2025-03-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super.",
    "customer_name": "Mats G. aus Rheda-Wiedenbrück",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sternjäger ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Arne U. aus Bayreuth",
    "date": "2025-03-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Freue mich schon auf das nächste Set.",
    "customer_name": "Valentin G. aus Koblenz",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Auch für jüngere Kinder gut zu bewältigen. Das Feature Jedi Bob ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp B. aus Münster",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Kultfigur gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Liam U. aus Wetzlar",
    "date": "2025-03-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder. Danke!",
    "customer_name": "Justus L. aus Celle",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Star Wars Legende ist klasse. Mein Kind spielt seit Tagen nur noch damit. Ein tolles Geschenk.",
    "customer_name": "Emil G. aus Reutlingen",
    "date": "2025-03-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Sarah F. aus Hattingen",
    "date": "2025-03-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Julia D. aus Dormagen",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Top.",
    "customer_name": "Felix N. aus Heilbronn",
    "date": "2025-03-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Hat sich definitiv gelohnt.",
    "customer_name": "Ben L. aus Bietigheim-Bissingen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Besonderes Set gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Justus Z. aus Gießen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Lustig ist klasse. Die Details sind wirklich liebevoll gestaltet. Preis-Leistung stimmt hier.",
    "customer_name": "Sabine A. aus Ahlen",
    "date": "2025-03-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Sternjäger ist klasse. Es ist sehr stabil, man kann gut damit spielen. Top, weiter so.",
    "customer_name": "Robin S. aus Duisburg",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Besonderes Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Anna T. aus Göttingen",
    "date": "2025-03-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. Bin rundum zufrieden.",
    "customer_name": "Jannik O. aus Hamburg",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top. Danke!",
    "customer_name": "Nicole A. aus Pforzheim",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Einfach klasse.",
    "customer_name": "Melanie L. aus Landshut",
    "date": "2025-03-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Danke.",
    "customer_name": "Benedikt C. aus Norderstedt",
    "date": "2025-03-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Besonders Cooles Design gefällt mir gut. Für Fans ein absolutes Muss.",
    "customer_name": "Maria N. aus Erkrath",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Anleitung war sehr verständlich und einfach zu folgen. So macht LEGO Spaß.",
    "customer_name": "Christoph H. aus Oranienburg",
    "date": "2025-02-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles vollständig.",
    "customer_name": "Jan M. aus Bad Oeynhausen",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Lustig gefällt mir gut. Hat sich definitiv gelohnt.",
    "customer_name": "David W. aus Mülheim an der Ruhr",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Jedi Bob gefällt mir gut. Bin rundum zufrieden.",
    "customer_name": "Kerstin Q. aus Norderstedt",
    "date": "2025-02-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Christina G. aus Lünen",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Ein tolles Geschenk.",
    "customer_name": "Hannes U. aus Ulm",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Details sind wirklich liebevoll gestaltet. Danke.",
    "customer_name": "Sascha E. aus Bergisch Gladbach",
    "date": "2025-02-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Emil S. aus Erlangen",
    "date": "2025-02-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Lustig gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Marlon Q. aus Rodgau",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Sternjäger gefällt mir gut. So macht LEGO Spaß.",
    "customer_name": "Anja K. aus Schwäbisch Gmünd",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Lustig gefällt mir gut. Daumen hoch!",
    "customer_name": "Fabian Q. aus Iserlohn",
    "date": "2025-02-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert. Danke!",
    "customer_name": "Dennis G. aus Rodgau",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Nico C. aus Osnabrück",
    "date": "2025-02-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Luis H. aus Freising",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. Super Shop.",
    "customer_name": "Julian L. aus Wesel",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Alles richtig gemacht.",
    "customer_name": "Max S. aus Lübeck",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es ist sehr stabil, man kann gut damit spielen. Klare 10/10.",
    "customer_name": "Anja O. aus Pinneberg",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Minifiguren sind besonders schön bedruckt. 5 Sterne von mir.",
    "customer_name": "Monika H. aus Dessau-Roßlau",
    "date": "2025-02-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gute Verpackung. Top.",
    "customer_name": "Leo S. aus Nordhorn",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Besonders Cooles Design gefällt mir gut. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Arne Q. aus Unna",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Bauprozess war abwechslungsreich und nie langweilig. Alles richtig gemacht.",
    "customer_name": "Max Q. aus Koblenz",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Super Shop.",
    "customer_name": "Finn Z. aus Langenhagen",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Super Shop.",
    "customer_name": "Anton Y. aus Neumünster",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Kerstin E. aus Nordhorn",
    "date": "2025-02-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Bin zufrieden.",
    "customer_name": "Malte J. aus Kassel",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Maximilian M. aus Lingen",
    "date": "2025-02-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Freue mich schon auf das nächste Set.",
    "customer_name": "Felix Q. aus Stuttgart",
    "date": "2025-02-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Es haben keine Teile gefehlt, was sehr wichtig ist. Freue mich schon auf das nächste Set.",
    "customer_name": "Matteo W. aus Brandenburg an der Havel",
    "date": "2025-02-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Birgit P. aus Memmingen",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Es gibt viele bewegliche Teile und Funktionen. Danke.",
    "customer_name": "Julia E. aus Delmenhorst",
    "date": "2025-02-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr schön.",
    "customer_name": "Nicole E. aus Rheine",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Felix N. aus Sankt Augustin",
    "date": "2025-02-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Sternjäger ist klasse. Mein Kind spielt seit Tagen nur noch damit. So macht LEGO Spaß.",
    "customer_name": "Claudia O. aus Bergkamen",
    "date": "2025-02-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Einfach klasse.",
    "customer_name": "Adrian E. aus Augsburg",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Besonderes Set ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Daumen hoch!",
    "customer_name": "Paul I. aus Bremerhaven",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Absolute Kaufempfehlung.",
    "customer_name": "Anja U. aus Weimar",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Raumschiff ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Danke.",
    "customer_name": "Leo T. aus Dachau",
    "date": "2025-02-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Top, weiter so.",
    "customer_name": "Andrea I. aus Buxtehude",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Bin happy.",
    "customer_name": "Matteo G. aus Pinneberg",
    "date": "2025-02-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Passt perfekt in meine Sammlung. Danke.",
    "customer_name": "Julian P. aus Hürth",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Nico D. aus Zwickau",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Auch für jüngere Kinder gut zu bewältigen. Vielen Dank für den schnellen Service.",
    "customer_name": "Tim J. aus Bonn",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Star Wars Legende gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Tim U. aus Langenfeld",
    "date": "2025-02-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Besonders Star Wars Legende gefällt mir gut. Daumen hoch!",
    "customer_name": "Vincent O. aus Neu-Ulm",
    "date": "2025-02-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Maximilian B. aus Leverkusen",
    "date": "2025-02-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Star Wars Legende gefällt mir gut. Klare 10/10.",
    "customer_name": "David I. aus Wuppertal",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Klemmkraft der Steine ist perfekt. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Absolute Kaufempfehlung.",
    "customer_name": "Andrea E. aus Kaiserslautern",
    "date": "2025-02-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Bin rundum zufrieden.",
    "customer_name": "Johannes E. aus Lüneburg",
    "date": "2025-02-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Der Spielwert ist hier wirklich hoch. Vielen Dank für den schnellen Service.",
    "customer_name": "Christina H. aus Straubing",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Kevin E. aus Rüsselsheim",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Für Fans ein absolutes Muss.",
    "customer_name": "Leon Q. aus Albstadt",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Passt perfekt in meine Sammlung. Freue mich schon auf das nächste Set.",
    "customer_name": "Sabine A. aus Bielefeld",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Jedi Bob ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Daumen hoch!",
    "customer_name": "Leon Q. aus Kempten",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Klemmkraft der Steine ist perfekt. Das Feature Cooles Design ist klasse. Es ist sehr stabil, man kann gut damit spielen. 5 Sterne von mir.",
    "customer_name": "Anja T. aus Krefeld",
    "date": "2025-02-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Star Wars Legende ist klasse. Ein echter Hingucker in der Vitrine. Top, weiter so.",
    "customer_name": "Julia E. aus Bremen",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Andrea D. aus Norderstedt",
    "date": "2025-02-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kultfigur ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. So macht LEGO Spaß.",
    "customer_name": "Justus T. aus Alsdorf",
    "date": "2025-02-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gewohnte Qualität. Bin zufrieden.",
    "customer_name": "Anton Q. aus Lippstadt",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Mein Kind spielt seit Tagen nur noch damit. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Dennis I. aus Peine",
    "date": "2025-01-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Es ist sehr stabil, man kann gut damit spielen. Danke.",
    "customer_name": "Lisa L. aus Magdeburg",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Raumschiff gefällt mir gut. Ein tolles Geschenk.",
    "customer_name": "Simon A. aus Plauen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Passt perfekt in meine Sammlung. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Kerstin M. aus Gießen",
    "date": "2025-01-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Bauprozess war abwechslungsreich und nie langweilig. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Maximilian K. aus Lahr",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Star Wars Legende ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. So macht LEGO Spaß.",
    "customer_name": "Ben X. aus Koblenz",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Lustig gefällt mir gut. Alles richtig gemacht.",
    "customer_name": "Luis T. aus Schwäbisch Gmünd",
    "date": "2025-01-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Besonderes Set ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Super Shop.",
    "customer_name": "Jan N. aus Speyer",
    "date": "2025-01-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Besonderes Set ist klasse. Es ist sehr stabil, man kann gut damit spielen. Freue mich schon auf das nächste Set.",
    "customer_name": "Alexander F. aus Melle",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Der Spielwert ist hier wirklich hoch. Absolute Kaufempfehlung.",
    "customer_name": "Niklas U. aus Ludwigshafen",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Auch für jüngere Kinder gut zu bewältigen. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Melanie W. aus Friedrichshafen",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Elias R. aus Würzburg",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele clevere Bautechniken zu entdecken. Hat sich definitiv gelohnt.",
    "customer_name": "Nico E. aus Kempten",
    "date": "2025-01-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Fertig aufgebaut sieht es im Regal einfach toll aus. Alles richtig gemacht.",
    "customer_name": "Jannik G. aus Kiel",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Besonders Cooles Design gefällt mir gut. Daumen hoch!",
    "customer_name": "Dominik U. aus Minden",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Oskar F. aus Solingen",
    "date": "2025-01-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Ein tolles Geschenk.",
    "customer_name": "Birgit F. aus Speyer",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Design ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Maria B. aus Bornheim",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es lässt sich auch super mit anderen Sets kombinieren. Einfach klasse.",
    "customer_name": "Tom G. aus Soest",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Es ist sehr stabil, man kann gut damit spielen. Bin happy.",
    "customer_name": "Florian A. aus Neumünster",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Eines der besten Sets, die ich in letzter Zeit gebaut habe. Die Details sind wirklich liebevoll gestaltet. Freue mich schon auf das nächste Set.",
    "customer_name": "Katharina Z. aus Heidenheim",
    "date": "2025-01-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Jedi Bob ist klasse. Es ist sehr stabil, man kann gut damit spielen. So macht LEGO Spaß.",
    "customer_name": "Jonas P. aus Rostock",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Der Bauprozess war abwechslungsreich und nie langweilig. Absolute Kaufempfehlung.",
    "customer_name": "Marlon C. aus Herford",
    "date": "2025-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Besonderes Set ist klasse. Die Minifiguren sind besonders schön bedruckt. Klare 10/10.",
    "customer_name": "Samuel M. aus Fulda",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach super. Danke!",
    "customer_name": "Tobias B. aus Neustadt an der Weinstraße",
    "date": "2025-01-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Besonders Cooles Design gefällt mir gut. Klare 10/10.",
    "customer_name": "Henry G. aus Kempten",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Kultfigur ist klasse. Es ist sehr stabil, man kann gut damit spielen. Für Fans ein absolutes Muss.",
    "customer_name": "Tanja L. aus Aschaffenburg",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Das Feature Cooles Design ist klasse. Die Details sind wirklich liebevoll gestaltet. Kann ich uneingeschränkt empfehlen.",
    "customer_name": "Claudia J. aus Brandenburg an der Havel",
    "date": "2025-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es haben keine Teile gefehlt, was sehr wichtig ist. So macht LEGO Spaß.",
    "customer_name": "Hannes C. aus Menden",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Der Bauprozess war abwechslungsreich und nie langweilig. Bin rundum zufrieden.",
    "customer_name": "Dominik I. aus Heidelberg",
    "date": "2025-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "5 Sterne.",
    "customer_name": "Susanne T. aus Regensburg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell gebaut.",
    "customer_name": "Henry W. aus Ulm",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Es haben keine Teile gefehlt, was sehr wichtig ist. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Stefanie P. aus Pinneberg",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Bin happy.",
    "customer_name": "Samuel X. aus Salzgitter",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Benedikt M. aus Aalen",
    "date": "2025-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt. Danke!",
    "customer_name": "Henry R. aus Neuss",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Lieferung war sehr schnell, alles gut verpackt. Die Klemmkraft der Steine ist perfekt. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Ein tolles Geschenk.",
    "customer_name": "Justus P. aus Bad Oeynhausen",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sieht gut aus. Bin zufrieden.",
    "customer_name": "Kilian Q. aus Bad Homburg",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Es gibt viele bewegliche Teile und Funktionen. 5 Sterne von mir.",
    "customer_name": "Sascha K. aus Hildesheim",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Besonders Lustig gefällt mir gut. Top, weiter so.",
    "customer_name": "Max V. aus Soest",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Klemmkraft der Steine ist perfekt. Das Feature Jedi Bob ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Matteo V. aus Bad Kreuznach",
    "date": "2025-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Danke.",
    "customer_name": "Marlon R. aus Mainz",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Es gibt viele bewegliche Teile und Funktionen. Einfach klasse.",
    "customer_name": "Timo J. aus Göttingen",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Anleitung war sehr verständlich und einfach zu folgen. Top, weiter so.",
    "customer_name": "Malte X. aus Rodgau",
    "date": "2025-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Ein tolles Geschenk.",
    "customer_name": "Jan U. aus Sindelfingen",
    "date": "2025-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles okay. Danke!",
    "customer_name": "Milan Z. aus Lippstadt",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Star Wars Legende ist klasse. Es lässt sich auch super mit anderen Sets kombinieren. Preis-Leistung stimmt hier.",
    "customer_name": "Philipp F. aus Dortmund",
    "date": "2025-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Besonders Raumschiff gefällt mir gut. Danke.",
    "customer_name": "Nicole J. aus Aalen",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Lustig ist klasse. Der Spielwert ist hier wirklich hoch. So macht LEGO Spaß.",
    "customer_name": "Bastian V. aus Melle",
    "date": "2025-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein Muss für jeden Sammler. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Klare 10/10.",
    "customer_name": "Luis Z. aus Neuss",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Cooles Design ist klasse. Fertig aufgebaut sieht es im Regal einfach toll aus. Super Shop.",
    "customer_name": "Katharina O. aus Oranienburg",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Maximilian S. aus Chemnitz",
    "date": "2025-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Besonders Star Wars Legende gefällt mir gut. Bin happy.",
    "customer_name": "Paul G. aus Ahlen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Besonders Cooles Design gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Lisa B. aus Pinneberg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Kultfigur ist klasse. Mein Kind spielt seit Tagen nur noch damit. Danke.",
    "customer_name": "Florian V. aus Augsburg",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Auch für jüngere Kinder gut zu bewältigen. Das Feature Lustig ist klasse. Passt perfekt in meine Sammlung. Für Fans ein absolutes Muss.",
    "customer_name": "Sascha L. aus Friedrichshafen",
    "date": "2025-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Die Anleitung war sehr verständlich und einfach zu folgen. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Für Fans ein absolutes Muss.",
    "customer_name": "Monika C. aus Rostock",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gutes Preis-Leistungs-Verhältnis. Bin zufrieden.",
    "customer_name": "Florian B. aus Lörrach",
    "date": "2025-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Auch für jüngere Kinder gut zu bewältigen. Das Feature Kultfigur ist klasse. Die Details sind wirklich liebevoll gestaltet. Klare 10/10.",
    "customer_name": "Kilian F. aus Ahlen",
    "date": "2025-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Es haben keine Teile gefehlt, was sehr wichtig ist. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Ein tolles Geschenk.",
    "customer_name": "Ben U. aus Lingen",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Ein echter Hingucker in der Vitrine. So macht LEGO Spaß.",
    "customer_name": "Stefanie A. aus Heidelberg",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Paket kam pünktlich zum Geburtstag an. Ein paar Ersatzteile waren auch dabei, sehr gut. Ein tolles Geschenk.",
    "customer_name": "Robin D. aus Celle",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es zusammen mit meiner Tochter aufgebaut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. 5 Sterne von mir.",
    "customer_name": "Malte T. aus Buxtehude",
    "date": "2025-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Die Details sind wirklich liebevoll gestaltet. Super Shop.",
    "customer_name": "Nico J. aus Offenburg",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Details sind wirklich liebevoll gestaltet. Würde ich jederzeit wieder kaufen.",
    "customer_name": "Henry L. aus Dülmen",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Besonders Kultfigur gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Florian W. aus Mönchengladbach",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Ein paar Ersatzteile waren auch dabei, sehr gut. Freue mich schon auf das nächste Set.",
    "customer_name": "Erik U. aus Hürth",
    "date": "2025-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Lustig ist klasse. Ein echter Hingucker in der Vitrine. Vielen Dank für den schnellen Service.",
    "customer_name": "Maximilian M. aus Bergkamen",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Macht Spaß.",
    "customer_name": "Lenny Z. aus Baden-Baden",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Cooles Design gefällt mir gut. Vielen Dank für den schnellen Service.",
    "customer_name": "Theo R. aus Meerbusch",
    "date": "2025-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Für den Preis bekommt man hier echt viel geboten. Die Klemmkraft der Steine ist perfekt. Absolute Kaufempfehlung.",
    "customer_name": "Lenny E. aus Elmshorn",
    "date": "2025-01-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch wegen dem Preis, aber es lohnt sich. Der Spielwert ist hier wirklich hoch. Für Fans ein absolutes Muss.",
    "customer_name": "Kevin E. aus Lünen",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Besonders Lustig gefällt mir gut. Klare 10/10.",
    "customer_name": "Timo P. aus Tübingen",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Der Bauprozess war abwechslungsreich und nie langweilig. Preis-Leistung stimmt hier.",
    "customer_name": "Julian C. aus Solingen",
    "date": "2025-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein Enkel hat sich riesig darüber gefreut. Ein paar Ersatzteile waren auch dabei, sehr gut. Das Feature Jedi Bob ist klasse. Der Spielwert ist hier wirklich hoch. Einfach klasse.",
    "customer_name": "Julia F. aus Garbsen",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Aufbau hat mir sehr viel Freude bereitet. Die Klemmkraft der Steine ist perfekt. Das Feature Kultfigur ist klasse. Die Minifiguren sind besonders schön bedruckt. Preis-Leistung stimmt hier.",
    "customer_name": "Anna C. aus Wuppertal",
    "date": "2025-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ein wirklich gelungenes Set von LEGO. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Raumschiff ist klasse. Ein echter Hingucker in der Vitrine. Preis-Leistung stimmt hier.",
    "customer_name": "Kerstin S. aus Hattingen",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe es direkt nach Erscheinen bestellt. Die Sortierung der Tüten macht den Aufbau sehr angenehm. Hat sich definitiv gelohnt.",
    "customer_name": "Henry P. aus Leonberg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "LEGO halt. Top.",
    "customer_name": "Anton K. aus Moers",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Die Aufkleber waren okay, aber Prints wären schöner gewesen. Das Feature Star Wars Legende ist klasse. Passt perfekt in meine Sammlung. Alles richtig gemacht.",
    "customer_name": "Sascha P. aus Freising",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Jedi Bob ist klasse. Passt perfekt in meine Sammlung. Daumen hoch!",
    "customer_name": "Yannick Q. aus Leonberg",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich habe ich mir dieses Set gegönnt. Besonders Sternjäger gefällt mir gut. 5 Sterne von mir.",
    "customer_name": "Moritz Y. aus Münster",
    "date": "2025-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Als Geschenk für den Neffen besorgt, kam super an. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Lustig ist klasse. Es gibt viele bewegliche Teile und Funktionen. So macht LEGO Spaß.",
    "customer_name": "Tanja F. aus Jena",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Einfach klasse, was LEGO da wieder gemacht hat. Besonders Star Wars Legende gefällt mir gut. Preis-Leistung stimmt hier.",
    "customer_name": "Vincent Y. aus Wilhelmshaven",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe das Set für meinen Sohn gekauft, er ist begeistert. Es gibt viele clevere Bautechniken zu entdecken. Das Feature Kultfigur ist klasse. Die Details sind wirklich liebevoll gestaltet. Ein tolles Geschenk.",
    "customer_name": "Maria Q. aus Münster",
    "date": "2025-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Das Set sieht in echt noch besser aus als auf den Bildern. Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich. Das Feature Star Wars Legende ist klasse. Es ist sehr stabil, man kann gut damit spielen. Preis-Leistung stimmt hier.",
    "customer_name": "Elias S. aus Dachau",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Qualität der Steine ist wie gewohnt hervorragend. Es haben keine Teile gefehlt, was sehr wichtig ist. Vielen Dank für den schnellen Service.",
    "customer_name": "Simon X. aus Hilden",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Auch für jüngere Kinder gut zu bewältigen. Das Feature Sternjäger ist klasse. Ein echter Hingucker in der Vitrine. Danke.",
    "customer_name": "Malte P. aus Recklinghausen",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann die negativen Bewertungen nicht verstehen. Besonders Jedi Bob gefällt mir gut. Absolute Kaufempfehlung.",
    "customer_name": "Sascha Y. aus Mannheim",
    "date": "2025-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt für einen verregneten Nachmittag. Die Klemmkraft der Steine ist perfekt. Das Feature Raumschiff ist klasse. Es gibt viele bewegliche Teile und Funktionen. Vielen Dank für den schnellen Service.",
    "customer_name": "Johannes N. aus Gladbeck",
    "date": "2025-01-01"
  }
];