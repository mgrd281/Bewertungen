const REVIEWS_DATA = [
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. Keine Probleme bei der Installation. Gerne wieder.",
    "customer_name": "Frank K. aus Göppingen",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft stabil.",
    "customer_name": "Birgit Q. aus Flensburg",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Lohnt sich wirklich.",
    "customer_name": "Monika L. aus Schwabach",
    "date": "2026-01-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Aktivierung über Telefon war nicht nötig, ging online. Gerne wieder.",
    "customer_name": "Patrick E. aus Lörrach",
    "date": "2026-01-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "nachdem ich lange gesucht habe, bin ich hier fündig geworden. vielen dank für den tollen service.",
    "customer_name": "Christian N. aus Bietigheim-Bissingen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Nichts auszusetzen.",
    "customer_name": "Kevin J. aus Radolfzell",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Bitte weiter so.",
    "customer_name": "Frank F. aus Frechen",
    "date": "2026-01-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Alles bestens, danke",
    "customer_name": "Fabian N. aus Baden-Baden",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Viel besser als die teuren Box-Versionen. Spart euch das Geld für die teure Version.",
    "customer_name": "Fabian T. aus Unterschleißheim",
    "date": "2026-01-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Abwicklung!",
    "customer_name": "Nadine H. aus Marl",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Keine versteckten Kosten. Key wurde sofort akzeptiert. So macht Einkaufen Spaß.",
    "customer_name": "Laura I. aus Oberkirch",
    "date": "2026-01-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Vielen Dank für den tollen Service.",
    "customer_name": "Torsten W. aus Nördlingen",
    "date": "2026-01-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Alles original, keine Fake-Lizenz. Klare Empfehlung.",
    "customer_name": "Heike F. aus Buchholz",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Nichts auszusetzen",
    "customer_name": "Kevin T. aus Kaiserslautern",
    "date": "2026-01-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "war eine empfehlung von einem freund. nichts auszusetzen.",
    "customer_name": "Stefan R. aus Groß-Gerau",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Habe es auf einem alten Lenovo installiert. 5 Sterne von mir.",
    "customer_name": "Sven D. aus Herzogenaurach",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Habe direkt noch einen Key für meine Frau gekauft. Perfekter Deal.",
    "customer_name": "Daniela A. aus Fellbach",
    "date": "2026-01-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Keine versteckten Kosten. Bin happy.",
    "customer_name": "Petra U. aus Pulheim",
    "date": "2026-01-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Aktivierung über Telefon war nicht nötig, ging online. Super Shop.",
    "customer_name": "Christina X. aus Grevenbroich",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Alles original, keine Fake-Lizenz. Klare Empfehlung.",
    "customer_name": "Sarah B. aus Langenfeld",
    "date": "2026-01-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Vielen Dank.",
    "customer_name": "Philipp P. aus Kempten",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Bin happy.",
    "customer_name": "Nadine T. aus Leverkusen",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Super Shop.",
    "customer_name": "Christian N. aus Schwäbisch Hall",
    "date": "2026-01-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "habe den key bestellt und sofort erhalten. habe direkt noch einen key für meine frau gekauft. daumen hoch!",
    "customer_name": "Sven T. aus Lörrach",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sofortiger Mail-Versand.",
    "customer_name": "Silke L. aus Lindau",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Keine Probleme bei der Installation. Einfach top.",
    "customer_name": "Florian W. aus Wetzlar",
    "date": "2026-01-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Habe direkt noch einen Key für meine Frau gekauft. Einfach Key eingeben und fertig. Nichts auszusetzen.",
    "customer_name": "Frank J. aus Sonthofen",
    "date": "2026-01-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Alles original, keine Fake-Lizenz. Alles bestens, danke.",
    "customer_name": "Jessica Q. aus Nidderau",
    "date": "2026-01-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Einfach top.",
    "customer_name": "Sarah O. aus Bruchsal",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Super Shop.",
    "customer_name": "Jonas J. aus Donaueschingen",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Keine Probleme bei der Installation. Perfekter Deal.",
    "customer_name": "Melanie W. aus Ottobrunn",
    "date": "2026-01-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Keine Probleme bei der Installation. Klare Empfehlung.",
    "customer_name": "Katharina S. aus Rheinbach",
    "date": "2026-01-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Alles original, keine Fake-Lizenz. Werde wieder hier kaufen.",
    "customer_name": "Monika M. aus Kerpen",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Daumen hoch!",
    "customer_name": "Dennis O. aus Schopfheim",
    "date": "2026-01-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. 5 Sterne von mir.",
    "customer_name": "Claudia R. aus Herscheid",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Nichts auszusetzen.",
    "customer_name": "Sophie A. aus Homburg",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Bin happy.",
    "customer_name": "Jessica S. aus Bad Oeynhausen",
    "date": "2026-01-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "habe den key bestellt und sofort erhalten. absolute kaufempfehlung.",
    "customer_name": "Klaus S. aus Willich",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Man muss kein Abo abschließen, das war mir wichtig. Gerne wieder.",
    "customer_name": "Tanja W. aus Potsdam",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Spart euch das Geld für die teure Version.",
    "customer_name": "Patrick L. aus Rheine",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Danke!",
    "customer_name": "Andrea Q. aus Tuttlingen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Bin voll zufrieden.",
    "customer_name": "Kevin C. aus Kamen",
    "date": "2026-01-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. So macht Einkaufen Spaß.",
    "customer_name": "Frank Q. aus Kempten",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Spart euch das Geld für die teure Version",
    "customer_name": "Katja M. aus Paderborn",
    "date": "2026-01-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Klare Empfehlung.",
    "customer_name": "Petra C. aus Wiesloch",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder.",
    "customer_name": "Ursula Y. aus Schalksmühle",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Aktivierung über Telefon war nicht nötig, ging online. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Perfekter Deal.",
    "customer_name": "Michael I. aus Greifswald",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden! Code eingegeben und Windows war aktiviert. Absolute Kaufempfehlung.",
    "customer_name": "Heike V. aus Dülmen",
    "date": "2026-01-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Bitte weiter so.",
    "customer_name": "Stefanie Y. aus Freiberg",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Genau so muss das sein. Support hat mir bei einer Frage schnell geholfen. Bitte weiter so.",
    "customer_name": "Anna O. aus Bonn",
    "date": "2025-12-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Code eingegeben und Windows war aktiviert. Danke!",
    "customer_name": "Uwe H. aus Frechen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles bestens.",
    "customer_name": "Manuela H. aus Schwabach",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Einfach Key eingeben und fertig. Absolute Kaufempfehlung.",
    "customer_name": "Dominik V. aus Wangen",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "endlich weg von windows 7! die e-mail landete im spam-ordner, aber ich hab sie gefunden. gerne wieder.",
    "customer_name": "Wolfgang P. aus Rastatt",
    "date": "2025-12-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Perfekter Deal.",
    "customer_name": "Stefan A. aus Konstanz",
    "date": "2025-12-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Man muss kein Abo abschließen, das war mir wichtig. Einfach top.",
    "customer_name": "Markus N. aus Ahaus",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Die ISO Datei kann man ja einfach bei MS laden. Spart euch das Geld für die teure Version.",
    "customer_name": "Silke S. aus Breisach",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. Einfach Key eingeben und fertig. Nichts auszusetzen.",
    "customer_name": "Michael K. aus Remscheid",
    "date": "2025-12-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "ganz ehrlich: besser geht's nicht. so macht einkaufen spaß.",
    "customer_name": "Christian U. aus Sinsheim",
    "date": "2025-12-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Daumen hoch!",
    "customer_name": "Nadine P. aus Halle (Saale)",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Support hat mir bei einer Frage schnell geholfen. Alles bestens, danke.",
    "customer_name": "Christina Y. aus Bensheim",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Keine Probleme bei der Installation. Lohnt sich wirklich.",
    "customer_name": "Petra Z. aus Rheinfelden",
    "date": "2025-12-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Hatte erst Probleme, aber lag an meiner Internetverbindung. Spart euch das Geld für die teure Version.",
    "customer_name": "Petra I. aus Taunusstein",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar! Man muss kein Abo abschließen, das war mir wichtig. Absolute Kaufempfehlung.",
    "customer_name": "Frank C. aus Moers",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht! Genau so muss das sein. Lohnt sich wirklich.",
    "customer_name": "Lena W. aus Unterschleißheim",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Die ISO Datei kann man ja einfach bei MS laden. Super Shop.",
    "customer_name": "Thomas X. aus Bingen",
    "date": "2025-12-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Lohnt sich wirklich.",
    "customer_name": "Sandra A. aus Plettenberg",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Lohnt sich wirklich.",
    "customer_name": "Michael D. aus Remscheid",
    "date": "2025-12-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Tip top.",
    "customer_name": "Anja P. aus Tübingen",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "installation hat sofort geklappt. gerne wieder.",
    "customer_name": "Gabriele U. aus Weiden",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Klare Empfehlung.",
    "customer_name": "Matthias L. aus Ansbach",
    "date": "2025-12-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Läuft jetzt seit einer Woche stabil. Danke!",
    "customer_name": "Michael L. aus Dachau",
    "date": "2025-12-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Alles original, keine Fake-Lizenz. Aktivierung über Telefon war nicht nötig, ging online. Lohnt sich wirklich.",
    "customer_name": "Sabine O. aus Weinheim",
    "date": "2025-12-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Funktioniert.",
    "customer_name": "Max F. aus Elsdorf",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. So macht Einkaufen Spaß.",
    "customer_name": "Niklas I. aus Rastatt",
    "date": "2025-12-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam sofort.",
    "customer_name": "Christina D. aus Deggendorf",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Das System läuft sehr flüssig. Installation per USB-Stick war kinderleicht. Lohnt sich wirklich.",
    "customer_name": "Monika E. aus Andernach",
    "date": "2025-12-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Installation per USB-Stick war kinderleicht. Die ISO Datei kann man ja einfach bei MS laden. Absolute Kaufempfehlung.",
    "customer_name": "Jonas L. aus Delmenhorst",
    "date": "2025-12-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. 5 Sterne von mir.",
    "customer_name": "Sarah S. aus Remscheid",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach! Lohnt sich wirklich.",
    "customer_name": "Bettina E. aus Lübeck",
    "date": "2025-12-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Spart euch das Geld für die teure Version.",
    "customer_name": "Johannes H. aus Viersen",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Keine versteckten Kosten. Support hat mir bei einer Frage schnell geholfen. Klare Empfehlung.",
    "customer_name": "Jan Z. aus Paderborn",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "schneller geht es wirklich nicht. so macht einkaufen spaß.",
    "customer_name": "Ralf Q. aus Nürnberg",
    "date": "2025-12-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Genau so muss das sein. Danke!",
    "customer_name": "Angelika N. aus Wermelskirchen",
    "date": "2025-12-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Daumen hoch!",
    "customer_name": "Ursula T. aus Buchholz",
    "date": "2025-12-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Der Kundenservice ist sehr freundlich. Gerne wieder.",
    "customer_name": "Jessica L. aus Neuss",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "nachdem ich lange gesucht habe, bin ich hier fündig geworden. so macht einkaufen spaß.",
    "customer_name": "Dominik Z. aus Rheda-Wiedenbrück",
    "date": "2025-12-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "die aktivierung funktionierte tadellos. so macht einkaufen spaß.",
    "customer_name": "Sabine T. aus Saarbrücken",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Installation per USB-Stick war kinderleicht. Key wurde sofort akzeptiert. Spart euch das Geld für die teure Version.",
    "customer_name": "Andreas B. aus Stutensee",
    "date": "2025-12-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Läuft jetzt seit einer Woche stabil. Installation per USB-Stick war kinderleicht. Bitte weiter so.",
    "customer_name": "Jan Q. aus Sankt Augustin",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Spitze.",
    "customer_name": "Florian K. aus Ahlen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Support hat mir bei einer Frage schnell geholfen. Bin voll zufrieden.",
    "customer_name": "Lena E. aus Erlangen",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Anleitung war auch dabei und verständlich. Werde wieder hier kaufen.",
    "customer_name": "Jan N. aus Rösrath",
    "date": "2025-12-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Code funktioniert.",
    "customer_name": "Martina I. aus Bornheim",
    "date": "2025-12-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Läuft jetzt seit einer Woche stabil. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Bin happy.",
    "customer_name": "Dominik T. aus Korschenbroich",
    "date": "2025-12-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Klare Empfehlung.",
    "customer_name": "Peter J. aus Kaufbeuren",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sofortiger Mail-Versand",
    "customer_name": "Laura A. aus Heilbronn",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft! Die ISO Datei kann man ja einfach bei MS laden. Perfekter Deal.",
    "customer_name": "Melanie E. aus Detmold",
    "date": "2025-12-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Einfach top",
    "customer_name": "Martin P. aus Gera",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Problemlos.",
    "customer_name": "Jan B. aus Rodgau",
    "date": "2025-12-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Rechner ist jetzt viel schneller als vorher. Bitte weiter so.",
    "customer_name": "Tim T. aus Neusäß",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Vielen Dank für den tollen Service.",
    "customer_name": "Michael Q. aus Friedberg",
    "date": "2025-12-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Klare Empfehlung.",
    "customer_name": "Dominik Y. aus Haan",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Anleitung war auch dabei und verständlich. Spart euch das Geld für die teure Version.",
    "customer_name": "Lea R. aus Heidelberg",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht! Installation per USB-Stick war kinderleicht. Das System läuft sehr flüssig. Klare Empfehlung",
    "customer_name": "David E. aus Bad Nauheim",
    "date": "2025-12-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Klare Empfehlung.",
    "customer_name": "Bernd T. aus Lüneburg",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Die ISO Datei kann man ja einfach bei MS laden. Läuft jetzt seit einer Woche stabil. Perfekter Deal.",
    "customer_name": "Alexander P. aus Leimen",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Preis.",
    "customer_name": "Torsten Y. aus Bad Vilbel",
    "date": "2025-11-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Christian Y. aus Minden",
    "date": "2025-11-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Hatte erst Probleme, aber lag an meiner Internetverbindung. Bin voll zufrieden.",
    "customer_name": "Gabriele R. aus Ratingen",
    "date": "2025-11-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Habe es auf einem alten Lenovo installiert. Kann ich uneingeschränkt weiterempfehlen",
    "customer_name": "Angelika W. aus Hamm",
    "date": "2025-11-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Bitte weiter so.",
    "customer_name": "Thomas L. aus Worms",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Das System läuft sehr flüssig. Spart euch das Geld für die teure Version.",
    "customer_name": "Stefan S. aus Garbsen",
    "date": "2025-11-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Key wurde sofort akzeptiert. Daumen hoch!",
    "customer_name": "Dominik N. aus Wermelskirchen",
    "date": "2025-11-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Danke!",
    "customer_name": "Tom J. aus Leverkusen",
    "date": "2025-11-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Bin voll zufrieden.",
    "customer_name": "Petra X. aus Weiterstadt",
    "date": "2025-11-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Anleitung war auch dabei und verständlich. 5 Sterne von mir.",
    "customer_name": "Klaus E. aus Lauf an der Pegnitz",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf! Der Download von Microsoft ging flott. Klare Empfehlung.",
    "customer_name": "Jessica G. aus Sindelfingen",
    "date": "2025-11-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Das System läuft sehr flüssig. Klare Empfehlung.",
    "customer_name": "David W. aus Lingen",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr gut.",
    "customer_name": "Patrick S. aus Meckenheim",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert! Danke!",
    "customer_name": "Sophie Q. aus Freising",
    "date": "2025-11-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Bin happy.",
    "customer_name": "Ursula M. aus Heidenheim",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Habe direkt noch einen Key für meine Frau gekauft. Lohnt sich wirklich.",
    "customer_name": "Sebastian P. aus Wesel",
    "date": "2025-11-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "schneller geht es wirklich nicht. super shop.",
    "customer_name": "Angelika Z. aus Ahlen",
    "date": "2025-11-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderbar",
    "customer_name": "Martin I. aus Bretten",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Gerne wieder.",
    "customer_name": "Florian Q. aus Fürth",
    "date": "2025-11-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Viel besser als die teuren Box-Versionen. Alles bestens, danke",
    "customer_name": "Claudia T. aus Zweibrücken",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Einfach top.",
    "customer_name": "Manuela D. aus Fürstenfeldbruck",
    "date": "2025-11-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. 5 Sterne von mir.",
    "customer_name": "Martina H. aus Rottweil",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Rechner ist jetzt viel schneller als vorher. Werde wieder hier kaufen.",
    "customer_name": "Wolfgang T. aus Köln",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Habe es auf einem alten Lenovo installiert. Alles bestens, danke.",
    "customer_name": "Tanja T. aus Rosenheim",
    "date": "2025-11-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Der Kundenservice ist sehr freundlich. Spart euch das Geld für die teure Version.",
    "customer_name": "Max A. aus Ottobrunn",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Genial.",
    "customer_name": "Tanja H. aus Weiterstadt",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Support hat mir bei einer Frage schnell geholfen. Bitte weiter so.",
    "customer_name": "Anja R. aus Bergheim",
    "date": "2025-11-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann ich empfehlen.",
    "customer_name": "Heike Y. aus Melle",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. Viel besser als die teuren Box-Versionen. Perfekter Deal.",
    "customer_name": "Stefanie D. aus Hürth",
    "date": "2025-11-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. 5 Sterne von mir.",
    "customer_name": "Dirk A. aus Traunstein",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "schneller geht es wirklich nicht. vielen dank für den tollen service.",
    "customer_name": "Max H. aus Siegburg",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft. 5 Sterne von mir.",
    "customer_name": "Nadine D. aus Aachen",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Code eingegeben und Windows war aktiviert. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Klaus M. aus Kleve",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Keine versteckten Kosten. Lohnt sich wirklich.",
    "customer_name": "Gabriele C. aus Flörsheim",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Keine Probleme bei der Installation. Nichts auszusetzen",
    "customer_name": "Lea E. aus Offenburg",
    "date": "2025-11-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hat sofort funktioniert.",
    "customer_name": "Gabriele N. aus Müllheim",
    "date": "2025-11-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Bitte weiter so.",
    "customer_name": "Manuela T. aus Witten",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Gerne wieder.",
    "customer_name": "Andreas Q. aus Velbert",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Lohnt sich wirklich.",
    "customer_name": "Lena Z. aus Pulheim",
    "date": "2025-11-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Läuft jetzt seit einer Woche stabil. Bitte weiter so",
    "customer_name": "Birgit Y. aus Nordenham",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Die ISO Datei kann man ja einfach bei MS laden. Bin voll zufrieden",
    "customer_name": "Claudia Y. aus Stralsund",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Lohnt sich wirklich.",
    "customer_name": "Sven K. aus Bad Vilbel",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. 5 Sterne von mir.",
    "customer_name": "Daniel H. aus Leinfelden-Echterdingen",
    "date": "2025-11-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Daumen hoch!",
    "customer_name": "Sebastian P. aus Wülfrath",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wunderbar.",
    "customer_name": "Uwe B. aus Wiehl",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. 5 Sterne von mir.",
    "customer_name": "Jürgen A. aus Idstein",
    "date": "2025-11-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Keine Probleme bei der Installation. Lohnt sich wirklich.",
    "customer_name": "Leon B. aus Weinheim",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "die aktivierung funktionierte tadellos. die iso datei kann man ja einfach bei ms laden. vielen dank für den tollen service.",
    "customer_name": "Nadine U. aus Straubing",
    "date": "2025-11-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Key wurde sofort akzeptiert. Vielen Dank für den tollen Service.",
    "customer_name": "Tim Q. aus Dingolfing",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Daumen hoch!",
    "customer_name": "Nicole J. aus Landshut",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Bin voll zufrieden.",
    "customer_name": "Torsten P. aus Deggendorf",
    "date": "2025-11-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hat alles geklappt.",
    "customer_name": "Daniela J. aus Wittlich",
    "date": "2025-11-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Spart euch das Geld für die teure Version.",
    "customer_name": "Felix V. aus Lingen",
    "date": "2025-10-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Key wurde sofort akzeptiert. Habe direkt noch einen Key für meine Frau gekauft. Klare Empfehlung.",
    "customer_name": "Dominik S. aus Straubing",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Keine versteckten Kosten. Lohnt sich wirklich.",
    "customer_name": "Torsten A. aus Rüsselsheim",
    "date": "2025-10-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schnell und einfach.",
    "customer_name": "Johannes P. aus Sinsheim",
    "date": "2025-10-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Werde wieder hier kaufen.",
    "customer_name": "Daniela S. aus Bonn",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "wollte eigentlich im laden kaufen, aber hier ist es viel billiger. daumen hoch!",
    "customer_name": "Vanessa A. aus Hürth",
    "date": "2025-10-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Super Shop.",
    "customer_name": "Jürgen V. aus Rommerskirchen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Die ISO Datei kann man ja einfach bei MS laden. Daumen hoch!",
    "customer_name": "Martin D. aus Trier",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. 5 Sterne von mir.",
    "customer_name": "Felix I. aus Erlangen",
    "date": "2025-10-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "war eine empfehlung von einem freund. support hat mir bei einer frage schnell geholfen. keine probleme bei der installation. lohnt sich wirklich.",
    "customer_name": "Melanie P. aus Neuss",
    "date": "2025-10-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "perfekt.",
    "customer_name": "Wolfgang U. aus Bretten",
    "date": "2025-10-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Anleitung war auch dabei und verständlich. Werde wieder hier kaufen.",
    "customer_name": "Angelika D. aus Geilenkirchen",
    "date": "2025-10-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. 5 Sterne von mir.",
    "customer_name": "Sebastian X. aus Cham",
    "date": "2025-10-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Absolute Kaufempfehlung.",
    "customer_name": "Max R. aus Nördlingen",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Einfach top.",
    "customer_name": "Tanja K. aus Köln",
    "date": "2025-10-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Habe es auf einem alten Lenovo installiert. Hatte erst Probleme, aber lag an meiner Internetverbindung. Werde wieder hier kaufen.",
    "customer_name": "Maria F. aus Passau",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Man muss kein Abo abschließen, das war mir wichtig. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Jürgen A. aus Idstein",
    "date": "2025-10-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Habe direkt noch einen Key für meine Frau gekauft. Klare Empfehlung.",
    "customer_name": "Birgit R. aus Neunkirchen",
    "date": "2025-10-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Alles original, keine Fake-Lizenz. Perfekter Deal.",
    "customer_name": "Felix F. aus Germering",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Code eingegeben und Windows war aktiviert. Nichts auszusetzen.",
    "customer_name": "Leon I. aus Plauen",
    "date": "2025-10-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Daumen hoch!",
    "customer_name": "Kerstin S. aus Radebeul",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Abwicklung.",
    "customer_name": "Melanie I. aus Germersheim",
    "date": "2025-10-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft! Das System läuft sehr flüssig. Bin voll zufrieden.",
    "customer_name": "Fabian M. aus Plettenberg",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Der Download von Microsoft ging flott. Einfach top.",
    "customer_name": "Patrick N. aus Nettetal",
    "date": "2025-10-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Installation per USB-Stick war kinderleicht. Absolute Kaufempfehlung.",
    "customer_name": "Daniel T. aus Esslingen",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Einfach Key eingeben und fertig. Alles bestens, danke.",
    "customer_name": "Daniela Z. aus Bruchköbel",
    "date": "2025-10-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Genau so muss das sein. Installation per USB-Stick war kinderleicht. Daumen hoch!",
    "customer_name": "Jessica C. aus Hilden",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Key wurde sofort akzeptiert. Perfekter Deal.",
    "customer_name": "Angelika A. aus Balingen",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Gerne wieder.",
    "customer_name": "Leon H. aus Ambreg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Werde wieder hier kaufen.",
    "customer_name": "Lea A. aus Plettenberg",
    "date": "2025-10-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "habe den key bestellt und sofort erhalten. der download von microsoft ging flott. kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Heike O. aus Waltrop",
    "date": "2025-10-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Klasse.",
    "customer_name": "Andreas P. aus St. Ingbert",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Absolute Kaufempfehlung.",
    "customer_name": "Susanne G. aus Wipperfürth",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Gerne wieder",
    "customer_name": "Nicole X. aus Iserlohn",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Support hat mir bei einer Frage schnell geholfen. Die ISO Datei kann man ja einfach bei MS laden. Bin happy.",
    "customer_name": "Tom A. aus Kerpen",
    "date": "2025-10-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "bin sehr zufrieden mit dem kauf. lohnt sich wirklich.",
    "customer_name": "Jessica D. aus Günzburg",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Bitte weiter so.",
    "customer_name": "Matthias I. aus Lemgo",
    "date": "2025-10-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "mein alter laptop brauchte dringend ein upgrade. läuft jetzt seit einer woche stabil. vielen dank für den tollen service.",
    "customer_name": "Florian C. aus Cottbus",
    "date": "2025-10-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "installation hat sofort geklappt. habe es auf einem alten lenovo installiert. 5 sterne von mir.",
    "customer_name": "Nicole B. aus Langen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Hat alles geklappt",
    "customer_name": "Sebastian U. aus Lünen",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Bitte weiter so.",
    "customer_name": "Christina J. aus Landau",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben! Spart euch das Geld für die teure Version.",
    "customer_name": "Tanja X. aus Erfurt",
    "date": "2025-10-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Gerne wieder.",
    "customer_name": "Gabriele K. aus Herzogenaurach",
    "date": "2025-10-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Habe es auf einem alten Lenovo installiert. Habe direkt noch einen Key für meine Frau gekauft. Alles bestens, danke.",
    "customer_name": "Tim Q. aus Haltern am See",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Installation per USB-Stick war kinderleicht. Super Shop.",
    "customer_name": "Bernd F. aus Wolfsburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf! Danke!",
    "customer_name": "Tom W. aus Aschaffenburg",
    "date": "2025-10-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Perfekter Deal.",
    "customer_name": "Dirk L. aus Ettlingen",
    "date": "2025-10-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "nachdem ich lange gesucht habe, bin ich hier fündig geworden. keine versteckten kosten. absolute kaufempfehlung.",
    "customer_name": "Peter Y. aus Ellwangen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Der Kundenservice ist sehr freundlich. Aktivierung über Telefon war nicht nötig, ging online. 5 Sterne von mir.",
    "customer_name": "Thomas O. aus Bergheim",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Absolute Kaufempfehlung.",
    "customer_name": "Maria T. aus Andernach",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Anleitung war auch dabei und verständlich. Bin happy.",
    "customer_name": "Sarah L. aus Ostfildern",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Hatte erst Probleme, aber lag an meiner Internetverbindung. Einfach top.",
    "customer_name": "Leon K. aus Göppingen",
    "date": "2025-10-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "habe schon mehrmals hier gekauft. danke!",
    "customer_name": "Ralf E. aus Regensburg",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Der Kundenservice ist sehr freundlich. Gerne wieder.",
    "customer_name": "Lena T. aus Schwabach",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. So macht Einkaufen Spaß.",
    "customer_name": "Nadine V. aus Greifswald",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Einfach top.",
    "customer_name": "Sarah B. aus Worms",
    "date": "2025-10-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis! Der Kundenservice ist sehr freundlich. Klare Empfehlung.",
    "customer_name": "Niklas O. aus Schalksmühle",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. So macht Einkaufen Spaß.",
    "customer_name": "Sven B. aus Bonn",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Aktivierung ging fix.",
    "customer_name": "Max M. aus Kaufbeuren",
    "date": "2025-10-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Bin voll zufrieden.",
    "customer_name": "Nadine K. aus Korschenbroich",
    "date": "2025-09-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Viel besser als die teuren Box-Versionen. Gerne wieder.",
    "customer_name": "Katharina O. aus Korschenbroich",
    "date": "2025-09-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Danke!",
    "customer_name": "Lena D. aus Hagen",
    "date": "2025-09-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. 5 Sterne von mir.",
    "customer_name": "Sven S. aus Maintal",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Einfach top.",
    "customer_name": "Sabine B. aus Nordenham",
    "date": "2025-09-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "habe den key bestellt und sofort erhalten. läuft jetzt seit einer woche stabil. klare empfehlung.",
    "customer_name": "Andreas Q. aus Rheinfelden",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Service!",
    "customer_name": "Laura V. aus Erfurt",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr seriös.",
    "customer_name": "Lukas C. aus Stralsund",
    "date": "2025-09-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Keine Probleme bei der Installation. Support hat mir bei einer Frage schnell geholfen. Perfekter Deal.",
    "customer_name": "Fabian M. aus Puchheim",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Keine versteckten Kosten. So macht Einkaufen Spaß.",
    "customer_name": "Nicole H. aus Oer-Erkenschwick",
    "date": "2025-09-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles super.",
    "customer_name": "Stefanie G. aus Darmstadt",
    "date": "2025-09-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Werde wieder hier kaufen.",
    "customer_name": "Melanie Y. aus Hof",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Genial!",
    "customer_name": "Manuela Q. aus Wiesbaden",
    "date": "2025-09-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Läuft jetzt seit einer Woche stabil. Support hat mir bei einer Frage schnell geholfen. Gerne wieder.",
    "customer_name": "Johannes N. aus Halle (Saale)",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Daumen hoch!",
    "customer_name": "Bernd B. aus Wolfenbüttel",
    "date": "2025-09-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "ganz ehrlich: besser geht's nicht. rechner ist jetzt viel schneller als vorher. daumen hoch!",
    "customer_name": "Christina A. aus Frechen",
    "date": "2025-09-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin zufrieden.",
    "customer_name": "Ralf F. aus Amberg",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! 5 Sterne von mir.",
    "customer_name": "Tobias B. aus Lingen",
    "date": "2025-09-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sofort erhalten.",
    "customer_name": "Silke X. aus Kleve",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "super schnelle zusendung des keys. einfach key eingeben und fertig. hatte zweifel ob der key legal ist, aber alles scheint ok. einfach top.",
    "customer_name": "Patrick B. aus Deggendorf",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Super Shop",
    "customer_name": "Angelika J. aus Hürth",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos! Bin happy.",
    "customer_name": "Sven J. aus Dreieich",
    "date": "2025-09-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Preis!",
    "customer_name": "Claudia S. aus Bietigheim-Bissingen",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Bin voll zufrieden.",
    "customer_name": "Daniela U. aus Rottenburg",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Vielen Dank für den tollen Service.",
    "customer_name": "Susanne Z. aus Zweibrücken",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Absolute Kaufempfehlung.",
    "customer_name": "Angelika R. aus Erfurt",
    "date": "2025-09-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "war erst skeptisch bei dem günstigen preis. absolute kaufempfehlung.",
    "customer_name": "Alexander C. aus Pirmasens",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Einfach top.",
    "customer_name": "Peter B. aus Geilenkirchen",
    "date": "2025-09-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Super Shop.",
    "customer_name": "Niklas Y. aus Bad Homburg",
    "date": "2025-09-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Vielen Dank für den tollen Service.",
    "customer_name": "Stefan I. aus Worms",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Spart euch das Geld für die teure Version.",
    "customer_name": "Kerstin N. aus Schwandorf",
    "date": "2025-09-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super Service.",
    "customer_name": "Dominik E. aus Plettenberg",
    "date": "2025-09-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Die ISO Datei kann man ja einfach bei MS laden. Keine Probleme bei der Installation. Spart euch das Geld für die teure Version.",
    "customer_name": "Dominik F. aus Schweinfurt",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Habe es auf einem alten Lenovo installiert. Alles original, keine Fake-Lizenz. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Christina K. aus Kelkheim",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Bitte weiter so.",
    "customer_name": "Angelika N. aus Langenhagen",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Daumen hoch!",
    "customer_name": "Christina G. aus Oberkirch",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Viel besser als die teuren Box-Versionen. Bin voll zufrieden.",
    "customer_name": "Stefan K. aus Albstadt",
    "date": "2025-09-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "preis ist unschlagbar. upgrade von home auf pro war nicht nötig, home reicht völlig. absolute kaufempfehlung.",
    "customer_name": "Stefan L. aus Bergkamen",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Gerne wieder.",
    "customer_name": "Lisa M. aus Biberach",
    "date": "2025-09-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Viel besser als die teuren Box-Versionen. Bitte weiter so.",
    "customer_name": "Johannes U. aus Bedburg",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Die ISO Datei kann man ja einfach bei MS laden. Bitte weiter so.",
    "customer_name": "Heike H. aus Tübingen",
    "date": "2025-09-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Support hat mir bei einer Frage schnell geholfen. 5 Sterne von mir.",
    "customer_name": "Tom T. aus Oberhausen",
    "date": "2025-09-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nix zu meckern.",
    "customer_name": "Sophie E. aus Marburg",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Spart euch das Geld für die teure Version.",
    "customer_name": "Jan U. aus Gaggenau",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Der Kundenservice ist sehr freundlich. Bin voll zufrieden.",
    "customer_name": "Christian W. aus Mainz",
    "date": "2025-09-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Der Download von Microsoft ging flott. Das System läuft sehr flüssig. Klare Empfehlung.",
    "customer_name": "Uwe U. aus Euskirchen",
    "date": "2025-08-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. 5 Sterne von mir.",
    "customer_name": "Martina I. aus Weiterstadt",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Vielen Dank für den tollen Service.",
    "customer_name": "Katharina Q. aus Köln",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Der Download von Microsoft ging flott. Absolute Kaufempfehlung.",
    "customer_name": "Monika F. aus Leipzig",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden! Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Lena P. aus Seevetal",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Werde wieder hier kaufen.",
    "customer_name": "Jan A. aus Müllheim",
    "date": "2025-08-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Danke!",
    "customer_name": "Gabriele M. aus Viernheim",
    "date": "2025-08-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Daumen hoch!",
    "customer_name": "Lisa C. aus Hilden",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Code eingegeben und Windows war aktiviert. Werde wieder hier kaufen.",
    "customer_name": "Uwe T. aus Weinstadt",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. 5 Sterne von mir.",
    "customer_name": "Torsten Z. aus Sindelfingen",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Danke!",
    "customer_name": "Silke G. aus Radebeul",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Genau so muss das sein. Perfekter Deal.",
    "customer_name": "Jonas Y. aus Siegburg",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Danke!",
    "customer_name": "Frank A. aus Freising",
    "date": "2025-08-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Einfach top.",
    "customer_name": "Katja V. aus Überlingen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Installation per USB-Stick war kinderleicht. So macht Einkaufen Spaß.",
    "customer_name": "Daniel S. aus Dormagen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Werde wieder hier kaufen.",
    "customer_name": "Tom O. aus Viersen",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Einfach Key eingeben und fertig. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Daumen hoch!",
    "customer_name": "Marcel S. aus Gummersbach",
    "date": "2025-08-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Bin voll zufrieden.",
    "customer_name": "Vanessa U. aus Haltern am See",
    "date": "2025-08-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Alles bestens, danke.",
    "customer_name": "Angelika I. aus Radolfzell",
    "date": "2025-08-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft. Installation per USB-Stick war kinderleicht. Gerne wieder.",
    "customer_name": "Stefan Z. aus Kaufbeuren",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "super schnelle zusendung des keys. keine probleme bei der installation. bin voll zufrieden.",
    "customer_name": "Daniel M. aus Unterschleißheim",
    "date": "2025-08-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Danke!",
    "customer_name": "Ursula L. aus Mühlheim",
    "date": "2025-08-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Läuft jetzt seit einer Woche stabil. Nichts auszusetzen.",
    "customer_name": "Jessica F. aus Bayreuth",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Einfach top.",
    "customer_name": "Frank G. aus Tübingen",
    "date": "2025-08-16"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis/Leistung top.",
    "customer_name": "Martina G. aus Ottobrunn",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Absolute Kaufempfehlung.",
    "customer_name": "Niklas N. aus Bad Kissingen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Spart euch das Geld für die teure Version.",
    "customer_name": "Sophie H. aus Mayen",
    "date": "2025-08-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Alles bestens, danke.",
    "customer_name": "Frank G. aus Brotterode",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Der Download von Microsoft ging flott. Viel besser als die teuren Box-Versionen. Einfach top.",
    "customer_name": "Johannes I. aus Koblenz",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Code eingegeben und Windows war aktiviert. Super Shop.",
    "customer_name": "Alexander O. aus Geislingen",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "die aktivierung funktionierte tadellos. klare empfehlung.",
    "customer_name": "Lea G. aus Lampertheim",
    "date": "2025-08-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Spart euch das Geld für die teure Version.",
    "customer_name": "Daniel V. aus Breisach",
    "date": "2025-08-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "war eine empfehlung von einem freund. lohnt sich wirklich.",
    "customer_name": "Stefanie O. aus Nürtingen",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Bitte weiter so.",
    "customer_name": "Max P. aus Fürth",
    "date": "2025-08-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "bin sehr zufrieden mit dem kauf. absolute kaufempfehlung.",
    "customer_name": "Uwe W. aus Görlitz",
    "date": "2025-08-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Habe es auf einem alten Lenovo installiert. Bin happy",
    "customer_name": "Tom H. aus Germering",
    "date": "2025-08-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Die ISO Datei kann man ja einfach bei MS laden. Bitte weiter so.",
    "customer_name": "Maria Y. aus Eschborn",
    "date": "2025-08-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Anleitung war auch dabei und verständlich. Alles bestens, danke.",
    "customer_name": "Julia I. aus Ansbach",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "schneller geht es wirklich nicht! habe direkt noch einen key für meine frau gekauft. 5 sterne von mir.",
    "customer_name": "Matthias P. aus Frechen",
    "date": "2025-08-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "preis ist unschlagbar. keine versteckten kosten. klare empfehlung.",
    "customer_name": "Uwe L. aus Stolberg",
    "date": "2025-08-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Der Kundenservice ist sehr freundlich. Vielen Dank für den tollen Service.",
    "customer_name": "Jan V. aus Rheinfelden",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Habe direkt noch einen Key für meine Frau gekauft. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Andrea A. aus Mühlacker",
    "date": "2025-08-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt",
    "customer_name": "Birgit C. aus Korschenbroich",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "brauchte schnell eine windows lizenz für meinen neuen pc. daumen hoch!",
    "customer_name": "Susanne R. aus Bühl",
    "date": "2025-08-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Rechner ist jetzt viel schneller als vorher. Aktivierung über Telefon war nicht nötig, ging online. Perfekter Deal.",
    "customer_name": "Peter V. aus Eschborn",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Aktivierung über Telefon war nicht nötig, ging online. Klare Empfehlung.",
    "customer_name": "Jan T. aus Monheim",
    "date": "2025-08-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Super Shop.",
    "customer_name": "Birgit A. aus Marl",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Keine versteckten Kosten. 5 Sterne von mir.",
    "customer_name": "Sven E. aus Erkrath",
    "date": "2025-08-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Anleitung war auch dabei und verständlich. Viel besser als die teuren Box-Versionen. Perfekter Deal.",
    "customer_name": "Peter P. aus Böblingen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Key wurde sofort akzeptiert. 5 Sterne von mir",
    "customer_name": "Torsten X. aus Gelsenkirchen",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Viel besser als die teuren Box-Versionen. Bitte weiter so.",
    "customer_name": "Lena E. aus Andernach",
    "date": "2025-07-31"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Viel besser als die teuren Box-Versionen. Key wurde sofort akzeptiert. Perfekter Deal.",
    "customer_name": "Laura B. aus Bruchsal",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Keine versteckten Kosten. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Petra U. aus Donauwörth",
    "date": "2025-07-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Läuft jetzt seit einer Woche stabil. Danke!",
    "customer_name": "Markus O. aus Arnsberg",
    "date": "2025-07-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "passt!",
    "customer_name": "Christian G. aus Alfter",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Installation per USB-Stick war kinderleicht. So macht Einkaufen Spaß.",
    "customer_name": "Julia L. aus Idstein",
    "date": "2025-07-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Guter Kauf.",
    "customer_name": "Jessica R. aus Langen",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Bin voll zufrieden.",
    "customer_name": "Nadine X. aus Fellbach",
    "date": "2025-07-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Bin voll zufrieden.",
    "customer_name": "Jonas C. aus Emmendingen",
    "date": "2025-07-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles wie beschrieben.",
    "customer_name": "Julia W. aus Hamm",
    "date": "2025-07-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Einfach Key eingeben und fertig. Spart euch das Geld für die teure Version.",
    "customer_name": "Fabian Y. aus Friedrichshafen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Lohnt sich wirklich.",
    "customer_name": "Sarah P. aus Ludwigshafen",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "war erst skeptisch bei dem günstigen preis. einfach top.",
    "customer_name": "Claudia K. aus Dessau-Roßlau",
    "date": "2025-07-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Bin happy.",
    "customer_name": "Jan W. aus Radolfzell",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Rechner ist jetzt viel schneller als vorher. 5 Sterne von mir.",
    "customer_name": "Christian S. aus Seligenstadt",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Daumen hoch!",
    "customer_name": "Nadine F. aus Wuppertal",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Läuft jetzt seit einer Woche stabil. Bitte weiter so.",
    "customer_name": "Gabriele R. aus Soest",
    "date": "2025-07-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top!",
    "customer_name": "Sebastian P. aus Koblenz",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Lohnt sich wirklich.",
    "customer_name": "Laura P. aus Halle (Saale)",
    "date": "2025-07-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Lohnt sich wirklich.",
    "customer_name": "Heike G. aus Speyer",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Endlich weg von Windows 7! Der Download von Microsoft ging flott. 5 Sterne von mir.",
    "customer_name": "Nadine T. aus Dreieich",
    "date": "2025-07-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Klare Empfehlung.",
    "customer_name": "Sophie X. aus Eschweiler",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Habe direkt noch einen Key für meine Frau gekauft. Keine versteckten Kosten. Spart euch das Geld für die teure Version.",
    "customer_name": "Klaus Q. aus Brotterode",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Nichts auszusetzen.",
    "customer_name": "Christian I. aus Haan",
    "date": "2025-07-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Daumen hoch!",
    "customer_name": "Silke V. aus Lüdenscheid",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Keine Probleme bei der Installation. Spart euch das Geld für die teure Version.",
    "customer_name": "Daniel R. aus Waldkirch",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Das System läuft sehr flüssig. Vielen Dank für den tollen Service.",
    "customer_name": "Max R. aus Wunstorf",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys! 5 Sterne von mir.",
    "customer_name": "Katharina X. aus Pinneberg",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Werde wieder hier kaufen.",
    "customer_name": "Nadine K. aus Frankfurt",
    "date": "2025-07-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. So macht Einkaufen Spaß.",
    "customer_name": "Peter C. aus Mühlheim",
    "date": "2025-07-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Bin sehr zufrieden mit dem Kauf. Die ISO Datei kann man ja einfach bei MS laden. Spart euch das Geld für die teure Version.",
    "customer_name": "Sabine Y. aus Krefeld",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Der Kaufvorgang war unkompliziert. Werde wieder hier kaufen.",
    "customer_name": "Alexander O. aus Regensburg",
    "date": "2025-07-14"
  },
  {
    "rating": 5,
    "title": "",
    "content": "alles lief reibungslos ab. 5 sterne von mir.",
    "customer_name": "Stefanie G. aus Wuppertal",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Code eingegeben und Windows war aktiviert. Rechner ist jetzt viel schneller als vorher. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Andreas V. aus Düren",
    "date": "2025-07-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Habe es auf einem alten Lenovo installiert. Werde wieder hier kaufen.",
    "customer_name": "Monika Z. aus Speyer",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Nichts auszusetzen.",
    "customer_name": "Lea Q. aus Bitburg",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Genau so muss das sein. Hatte Zweifel ob der Key legal ist, aber alles scheint ok. Lohnt sich wirklich.",
    "customer_name": "Bettina S. aus Eisenach",
    "date": "2025-07-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sofort da.",
    "customer_name": "Peter I. aus Elsdorf",
    "date": "2025-07-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Daumen hoch!",
    "customer_name": "Melanie E. aus Dorsten",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Aktivierung funktionierte tadellos. Installation per USB-Stick war kinderleicht. Super Shop.",
    "customer_name": "Kevin E. aus München",
    "date": "2025-07-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. So macht Einkaufen Spaß.",
    "customer_name": "Michael Y. aus Herne",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden. Bin happy.",
    "customer_name": "Alexander V. aus Ravensburg",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Support hat mir bei einer Frage schnell geholfen. Gerne wieder.",
    "customer_name": "Dirk T. aus Radebeul",
    "date": "2025-07-08"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Bitte weiter so.",
    "customer_name": "Alexander Y. aus Jüchen",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Genau so muss das sein. Daumen hoch!",
    "customer_name": "Martina H. aus Mönchengladbach",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Code eingegeben und Windows war aktiviert. Vielen Dank für den tollen Service.",
    "customer_name": "Andreas L. aus Bad Waldsee",
    "date": "2025-07-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Daumen hoch!",
    "customer_name": "Jonas D. aus Wangen",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. Daumen hoch!",
    "customer_name": "Stefan W. aus Zwickau",
    "date": "2025-07-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Absolute Kaufempfehlung.",
    "customer_name": "Manuela Y. aus Ingolstadt",
    "date": "2025-07-04"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Das System läuft sehr flüssig. Perfekter Deal.",
    "customer_name": "Sebastian S. aus Pirmasens",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Werde wieder hier kaufen.",
    "customer_name": "Stefan Z. aus Bornheim",
    "date": "2025-07-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Vielen Dank für den tollen Service.",
    "customer_name": "Leon Q. aus Rosenheim",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Gerne wieder.",
    "customer_name": "Angelika V. aus Baden-Baden",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Man muss kein Abo abschließen, das war mir wichtig. Alles bestens, danke.",
    "customer_name": "Gabriele C. aus Ingolstadt",
    "date": "2025-07-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "installation hat sofort geklappt. nichts auszusetzen.",
    "customer_name": "Lea F. aus Jüchen",
    "date": "2025-06-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Spart euch das Geld für die teure Version.",
    "customer_name": "Thomas S. aus Gummersbach",
    "date": "2025-06-29"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Anleitung war auch dabei und verständlich. So macht Einkaufen Spaß.",
    "customer_name": "Heike P. aus Friedberg",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Top Verkäufer.",
    "customer_name": "Jan A. aus Memmingen",
    "date": "2025-06-28"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Perfekt.",
    "customer_name": "Leon J. aus Lörrach",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. Klare Empfehlung.",
    "customer_name": "Jan C. aus Bad Mergentheim",
    "date": "2025-06-27"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Keine versteckten Kosten. Danke!",
    "customer_name": "Niklas R. aus Radebeul",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Keine versteckten Kosten. Vielen Dank für den tollen Service.",
    "customer_name": "Stefanie J. aus Haar",
    "date": "2025-06-26"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Erstklassiger Service. Einfach top.",
    "customer_name": "Monika U. aus Kürten",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Danke!",
    "customer_name": "Tom X. aus Recklinghausen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Daumen hoch!",
    "customer_name": "Florian Y. aus Leichlingen",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach! Einfach top.",
    "customer_name": "Philipp C. aus Würzburg",
    "date": "2025-06-25"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Bin happy.",
    "customer_name": "Sarah Y. aus Pulheim",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Spart euch das Geld für die teure Version.",
    "customer_name": "Peter P. aus Radolfzell",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ich bin absolut begeistert. Perfekter Deal.",
    "customer_name": "Melanie M. aus Reutlingen",
    "date": "2025-06-24"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft. Gerne wieder.",
    "customer_name": "Andrea O. aus Müllheim",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe den Key bestellt und sofort erhalten. Keine versteckten Kosten. Rechner ist jetzt viel schneller als vorher. Danke!",
    "customer_name": "Torsten X. aus Pulheim",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Installation hat sofort geklappt. Alles bestens, danke.",
    "customer_name": "Jan E. aus Stuttgart",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger. Rechner ist jetzt viel schneller als vorher. Keine Probleme bei der Installation. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Uwe Q. aus Lüneburg",
    "date": "2025-06-23"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft. Code eingegeben und Windows war aktiviert. Alles bestens, danke.",
    "customer_name": "Christian A. aus Kerpen",
    "date": "2025-06-22"
  },
  {
    "rating": 5,
    "title": "",
    "content": "schneller geht es wirklich nicht. spart euch das geld für die teure version.",
    "customer_name": "Lukas X. aus Ulm",
    "date": "2025-06-21"
  },
  {
    "rating": 5,
    "title": "",
    "content": "alles gut gelaufen.",
    "customer_name": "Melanie B. aus Königswinter",
    "date": "2025-06-20"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Alles bestens, danke.",
    "customer_name": "Stefan M. aus Lörrach",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Gerne wieder mal.",
    "customer_name": "Andreas B. aus Olching",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Nichts auszusetzen.",
    "customer_name": "Patrick J. aus Ravensburg",
    "date": "2025-06-19"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Klare Empfehlung.",
    "customer_name": "Thomas H. aus Brühl",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft. Upgrade von Home auf Pro war nicht nötig, Home reicht völlig. Bitte weiter so.",
    "customer_name": "Sandra Q. aus Andernach",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "sofort erhalten.",
    "customer_name": "Sophie X. aus Eichstätt",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Habe es auf einem alten Lenovo installiert. Man muss kein Abo abschließen, das war mir wichtig. Nichts auszusetzen.",
    "customer_name": "Sabine M. aus Offenburg",
    "date": "2025-06-18"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Super schnelle Zusendung des Keys. Man muss kein Abo abschließen, das war mir wichtig. Keine versteckten Kosten. Bin voll zufrieden.",
    "customer_name": "Claudia K. aus Alfter",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Brauchte schnell eine Windows Lizenz für meinen neuen PC. Nichts auszusetzen",
    "customer_name": "Christian T. aus Limburg",
    "date": "2025-06-17"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Nichts auszusetzen.",
    "customer_name": "Dirk M. aus Gummersbach",
    "date": "2025-06-15"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Kann den Shop nur loben. Lohnt sich wirklich.",
    "customer_name": "Daniela G. aus Hameln",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Genau so muss das sein. Danke!",
    "customer_name": "Sabine S. aus Leipzig",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Nachdem ich lange gesucht habe, bin ich hier fündig geworden. Das System läuft sehr flüssig. Der Download von Microsoft ging flott. Gerne wieder.",
    "customer_name": "Nadine Z. aus Bornheim",
    "date": "2025-06-13"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Ganz ehrlich: Besser geht's nicht. Kann ich uneingeschränkt weiterempfehlen",
    "customer_name": "Martina Y. aus Solingen",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Ursula O. aus Rheinfelden",
    "date": "2025-06-12"
  },
  {
    "rating": 5,
    "title": "",
    "content": "alles super.",
    "customer_name": "Lea E. aus Recklinghausen",
    "date": "2025-06-11"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War erst skeptisch bei dem günstigen Preis. Einfach Key eingeben und fertig. Key wurde sofort akzeptiert. Bin happy.",
    "customer_name": "Sarah D. aus Bielefeld",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Key kam innerhalb weniger Minuten per E-Mail. Das System läuft sehr flüssig. Nichts auszusetzen.",
    "customer_name": "Ursula X. aus Berlin",
    "date": "2025-06-10"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Empfehlenswert.",
    "customer_name": "Sarah W. aus Traunreut",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Habe es auf einem alten Lenovo installiert. Werde wieder hier kaufen.",
    "customer_name": "Niklas S. aus Bedburg",
    "date": "2025-06-09"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. So macht Einkaufen Spaß.",
    "customer_name": "Sandra X. aus Wolfsburg",
    "date": "2025-06-07"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Läuft jetzt seit einer Woche stabil. Key wurde sofort akzeptiert. Kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Dennis C. aus Erftstadt",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Schneller geht es wirklich nicht. Läuft jetzt seit einer Woche stabil. Code eingegeben und Windows war aktiviert. Gerne wieder.",
    "customer_name": "Andreas S. aus Emden",
    "date": "2025-06-06"
  },
  {
    "rating": 5,
    "title": "",
    "content": "bin sehr zufrieden mit dem kauf. kann ich uneingeschränkt weiterempfehlen.",
    "customer_name": "Anna K. aus Hanau",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Bin voll zufrieden",
    "customer_name": "Christina C. aus Völklingen",
    "date": "2025-06-05"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles genau wie beschrieben. Hatte erst Probleme, aber lag an meiner Internetverbindung. Vielen Dank für den tollen Service.",
    "customer_name": "Bernd L. aus Böblingen",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Läuft stabil!",
    "customer_name": "Dirk T. aus Eichstätt",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe Windows 10 für meinen Sohn gekauft. Das System läuft sehr flüssig. Danke!",
    "customer_name": "Wolfgang A. aus Wolfsburg",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Habe schon mehrmals hier gekauft! Support hat mir bei einer Frage schnell geholfen. So macht Einkaufen Spaß.",
    "customer_name": "Bettina M. aus Speyer",
    "date": "2025-06-03"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Danke!",
    "customer_name": "Sebastian E. aus Beckum",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Sehr seriös!",
    "customer_name": "Anja U. aus Wiesbaden",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Alles lief reibungslos ab. Installation per USB-Stick war kinderleicht. Nichts auszusetzen.",
    "customer_name": "Silke N. aus Greifswald",
    "date": "2025-06-02"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Keine Probleme.",
    "customer_name": "Uwe Z. aus Warendorf",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "habe schon mehrmals hier gekauft. key wurde sofort akzeptiert. daumen hoch!",
    "customer_name": "Sandra D. aus Neusäß",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "installation hat sofort geklappt. keine versteckten kosten. lohnt sich wirklich.",
    "customer_name": "Dominik O. aus Langen",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Die Bestellung war super einfach. Man muss kein Abo abschließen, das war mir wichtig. Alles bestens, danke.",
    "customer_name": "Felix O. aus Baden-Baden",
    "date": "2025-06-01"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Mein alter Laptop brauchte dringend ein Upgrade. Code eingegeben und Windows war aktiviert. Werde wieder hier kaufen.",
    "customer_name": "Tobias E. aus Deggendorf",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "War eine Empfehlung von einem Freund. Daumen hoch!",
    "customer_name": "Katharina N. aus Oberhausen",
    "date": "2025-05-30"
  },
  {
    "rating": 5,
    "title": "",
    "content": "Preis ist unschlagbar. Gerne wieder.",
    "customer_name": "Tanja Y. aus Melle",
    "date": "2025-05-29"
  }
];