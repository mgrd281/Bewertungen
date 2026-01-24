import csv
import random
import json
from datetime import datetime, timedelta

# --- CONFIGURATION ---
TARGET_COUNT = 4297
START_DATE = datetime(2026, 9, 25) # Future release date
END_DATE = datetime(2026, 12, 24)

# --- DATA BANKS ---

# --- DATA BANKS ---

first_names = [
    "Lukas", "Paul", "Jonas", "Felix", "Leon", "Finn", "Noah", "Elias", "Luis", "Ben",
    "Luca", "Milan", "Henry", "Maximilian", "Theo", "Matteo", "Oskar", "Emil", "Liam",
    "Anton", "Julian", "David", "Philipp", "Alexander", "Jannik", "Niklas", "Tom", "Jan",
    "Tim", "Moritz", "Fabian", "Simon", "Samuel", "Tobias", "Florian", "Johannes",
    "Max", "Hannes", "Erik", "Marlon", "Kevin", "Dennis", "Justus", "Leo", "Mats",
    "Benedikt", "Christoph", "Dominik", "Kilian", "Lenny", "Malte", "Nico", "Robin",
    "Sascha", "Timo", "Valentin", "Vincent", "Yannick", "Adrian", "Arne", "Bastian",
    "Julia", "Sarah", "Anna", "Lisa", "Laura", "Sandra", "Christina", "Melanie",
    "Nicole", "Nadine", "Sabine", "Stefanie", "Andrea", "Katharina", "Maria",
    "Monika", "Petra", "Tanja", "Anja", "Claudia", "Susanne", "Birgit", "Kerstin"
]

last_initials = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

cities = [
    "Berlin", "Hamburg", "München", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen",
    "Bremen", "Dresden", "Hannover", "Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster",
    "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen",
    "Halle (Saale)", "Magdeburg", "Freiburg", "Krefeld", "Mainz", "Lübeck", "Erfurt", "Oberhausen", "Rostock", "Kassel",
    "Hagen", "Potsdam", "Saarbrücken", "Hamm", "Ludwigshafen", "Mülheim an der Ruhr", "Oldenburg", "Osnabrück", "Leverkusen", "Solingen",
    "Darmstadt", "Heidelberg", "Herne", "Neuss", "Regensburg", "Paderborn", "Ingolstadt", "Offenbach", "Fürth", "Würzburg",
    "Heilbronn", "Ulm", "Pforzheim", "Wolfsburg", "Göttingen", "Bottrop", "Reutlingen", "Koblenz", "Bremerhaven", "Recklinghausen",
    "Bergisch Gladbach", "Erlangen", "Jena", "Remscheid", "Trier", "Salzgitter", "Moers", "Siegen", "Hildesheim", "Cottbus",
    "Gütersloh", "Kaiserslautern", "Witten", "Hanau", "Schwerin", "Ludwigsburg", "Esslingen", "Gera", "Iserlohn", "Tübingen",
    "Düren", "Flensburg", "Zwickau", "Gießen", "Ratingen", "Lünen", "Villingen-Schwenningen", "Konstanz", "Marl", "Worms",
    "Velbert", "Minden", "Dessau-Roßlau", "Neumünster", "Norderstedt", "Delmenhorst", "Bamberg", "Viersen", "Marburg", "Rheine",
    "Wilhelmshaven", "Lüneburg", "Gladbeck", "Troisdorf", "Bayreuth", "Dorsten", "Detmold", "Arnsberg", "Landshut", "Castrop-Rauxel",
    "Lüdenscheid", "Brandenburg an der Havel", "Bocholt", "Aschaffenburg", "Celle", "Kempten", "Fulda", "Aalen", "Lippstadt", "Dinslaken",
    "Kerpen", "Herford", "Rüsselsheim", "Weimar", "Sindelfingen", "Neuwied", "Plauen", "Dormagen", "Grevenbroich", "Rosenheim",
    "Herten", "Bergheim", "Schwäbisch Gmünd", "Friedrichshafen", "Garbsen", "Wesel", "Hürth", "Offenburg", "Stralsund", "Greifswald",
    "Langenfeld", "Neu-Ulm", "Unna", "Euskirchen", "Göppingen", "Frankfurt (Oder)", "Hameln", "Eschweiler", "Stolberg", "Meerbusch",
    "Görlitz", "Sankt Augustin", "Hilden", "Waiblingen", "Baden-Baden", "Lingen", "Langenhagen", "Hattingen", "Bad Homburg", "Bad Salzuflen",
    "Pulheim", "Nordhorn", "Schweinfurt", "Neustadt an der Weinstraße", "Wetzlar", "Passau", "Menden", "Ahlen", "Frechen", "Kleve",
    "Wolfenbüttel", "Ibbenbüren", "Bad Kreuznach", "Gummersbach", "Ravensburg", "Speyer", "Böblingen", "Peine", "Emden", "Elmshorn",
    "Erftstadt", "Rastatt", "Heidenheim", "Lörrach", "Leonberg", "Bergkamen", "Bad Oeynhausen", "Freising", "Brotterode", "Straubing",
    "Soest", "Dachau", "Bornheim", "Hennef", "Alsdorf", "Lahr", "Rheda-Wiedenbrück", "Melle", "Dülmen", "Gronau",
    "Oberursel", "Herzogenrath", "Filderstadt", "Fellbach", "Buxtehude", "Hof", "Traunstein", "Weinheim", "Neunkirchen", "Kaufbeuren",
    "Memmingen", "Albstadt", "Rodgau", "Bruchsal", "Oranienburg", "Leinfelden-Echterdingen", "Bietigheim-Bissingen", "Kamen", "Erkrath", "Pinneberg",
    "Eisenach", "Rottenburg", "Borken", "Nettetal", "Ambreg", "Heinsberg", "Lemgo", "Monheim am Rhein", "Aurich", "Wunstorf",
    "Falkensee", "Langen", "Königswinter", "Sinsheim", "Lauf", "Siegburg", "Hückelhoven", "Nordenham", "Springe", "Verden",
    "Halberstadt", "Bautzen", "Schwandorf", "Germering", "Stendal", "Buchholz", "Ansbach", "Laatzen", "Haar", "Löhne",
    "Freiberg", "Deggendorf", "Schwabach", "Eberswalde", "Ettlingen", "Ostfildern", "Beckum", "Hemersen", "Coesfeld", "Warendorf",
    "Radebeul", "Völklingen", "Bad Vilbel", "Ahaus", "Seevetal", "Waltrop", "Nürtingen", "Haltern am See", "Kehl", "Oer-Erkenschwick",
    "Korschenbroich", "Schorndorf", "Ditzingen", "Stutensee", "Bünde", "Kamp-Lintfort", "Gaggenau", "Vreden", "Rheinberg", "Wegberg",
    "Backnang", "Balingen", "Espelkamp", "Tuttlingen", "Crailsheim", "Singen", "Biberach", "Winnenden", "Rheinfelden", "Waldshut-Tiengen",
    "Emmendingen", "Radolfzell", "Geislingen", "Leimen", "Weinstadt", "Wiesloch", "Bretten", "Eppingen", "Bad Mergentheim", "Schwäbisch Hall",
    "Wangen", "Ellwangen", "Mühlacker", "Achern", "Bühl", "Rottweil", "Horb", "Donaueschingen", "Schramberg", "Nagold",
    "Calw", "Freudenstadt", "Metzingen", "Tübingen", "Bad Waldsee", "Leutkirch", "Überlingen", "Tettnang", "Bad Säckingen", "Lörrach",
    "Weil am Rhein", "Schopfheim", "Müllheim", "Breisach", "Waldkirch", "Lahr", "Kehl", "Achern", "Oberkirch", "Baden-Baden",
    "Rastatt", "Gaggenau", "Bühl", "Ettlingen", "Rheinstetten", "Bruchsal", "Bretten", "Stutensee", "Waghäusel", "Sinsheim",
    "Weinheim", "Viernheim", "Lampertheim", "Bensheim", "Heppenheim", "Pfungstadt", "Griesheim", "Weiterstadt", "Groß-Gerau", "Rüsselsheim",
    "Mörfelden-Walldorf", "Langen", "Dreieich", "Neu-Isenburg", "Dietzenbach", "Rodgau", "Rödermark", "Seligenstadt", "Obertshausen", "Mühlheim",
    "Hanau", "Maintal", "Bruchköbel", "Nidderau", "Bad Vilbel", "Karben", "Friedberg", "Bad Nauheim", "Butzbach", "Gießen",
    "Wetzlar", "Marburg", "Limburg", "Idstein", "Taunusstein", "Hofheim", "Kelkheim", "Bad Soden", "Eschborn", "Oberursel",
    "Bad Homburg", "Friedrichsdorf", "Kronberg", "Königstein", "Hattersheim", "Flörsheim", "Hochheim", "Wiesbaden", "Mainz", "Ingelheim",
    "Bingen", "Bad Kreuznach", "Alzey", "Worms", "Frankenthal", "Ludwigshafen", "Speyer", "Neustadt", "Landau", "Germersheim",
    "Pirmasens", "Zweibrücken", "Homburg", "Neunkirchen", "St. Ingbert", "Saarbrücken", "Völklingen", "Saarlouis", "Merzig", "Trier",
    "Wittlich", "Bitburg", "Mayen", "Andernach", "Koblenz", "Neuwied", "Bad Honnef", "Königswinter", "Sankt Augustin", "Troisdorf",
    "Niederkassel", "Bonn", "Bornheim", "Alfter", "Meckenheim", "Rheinbach", "Euskirchen", "Erftstadt", "Hürth", "Brühl",
    "Wesseling", "Frechen", "Pulheim", "Bergheim", "Kerpen", "Bedburg", "Elsdorf", "Düren", "Jülich", "Eschweiler",
    "Stolberg", "Aachen", "Würselen", "Herzogenrath", "Alsdorf", "Baesweiler", "Geilenkirchen", "Heinsberg", "Erkelenz", "Hückelhoven",
    "Wegberg", "Mönchengladbach", "Viersen", "Willich", "Nettetal", "Kempen", "Grefrath", "Tönisvorst", "Krefeld", "Meerbusch",
    "Kaarst", "Neuss", "Dormagen", "Grevenbroich", "Korschenbroich", "Jüchen", "Rommerskirchen", "Monheim", "Langenfeld", "Hilden",
    "Haan", "Erkrath", "Mettmann", "Ratingen", "Heiligenhaus", "Velbert", "Wülfrath", "Solingen", "Remscheid", "Wermelskirchen",
    "Leichlingen", "Burscheid", "Leverkusen", "Odenthal", "Bergisch Gladbach", "Rösrath", "Overath", "Kürten", "Wipperfürth", "Lindlar",
    "Engelskirchen", "Gummersbach", "Wiehl", "Nümbrecht", "Waldbröl", "Morsbach", "Reichshof", "Bergneustadt", "Marienheide", "Meinerzhagen",
    "Kierspe", "Halver", "Lüdenscheid", "Schalksmühle", "Nachrodt-Wiblingwerde", "Altena", "Werdohl", "Plettenberg", "Herscheid", "Hagen",
    "Amberg", "Ansbach", "Aschaffenburg", "Augsburg", "Bamberg", "Bayreuth", "Coburg", "Erlangen", "Fürth", "Hof",
    "Ingolstadt", "Kaufbeuren", "Kempten", "Landshut", "Memmingen", "München", "Nürnberg", "Passau", "Regensburg", "Rosenheim",
    "Schwabach", "Schweinfurt", "Straubing", "Weiden", "Würzburg", "Aichach", "Altötting", "Bad Kissingen", "Bad Reichenhall", "Bad Tölz",
    "Cham", "Dachau", "Deggendorf", "Dingolfing", "Donauwörth", "Eichstätt", "Erding", "Forchheim", "Freising", "Friedberg",
    "Fürstenfeldbruck", "Garmisch-Partenkirchen", "Germering", "Günzburg", "Haar", "Herzogenaurach", "Karlsfeld", "Kelheim", "Kitzingen", "Kulmbach",
    "Landsberg am Lech", "Lauf an der Pegnitz", "Lichtenfels", "Lindau", "Marktredwitz", "Neuburg an der Donau", "Neumarkt in der Oberpfalz", "Neusäß", "Nördlingen", "Olching",
    "Ottobrunn", "Pfaffenhofen an der Ilm", "Puchheim", "Roth", "Schwandorf", "Senden", "Sonthofen", "Starnberg", "Traunreut", "Traunstein",
    "Unterhaching", "Unterschleißheim", "Vaterstetten", "Waldkraiburg", "Weilheim in Oberbayern", "Weißenburg in Bayern", "Zirndorf"
]

shorts = [
    "Das beste FC aller Zeiten.", "HyperMotion X ist der Wahnsinn.", "Grafik auf der PS5 Pro unschlagbar.", 
    "Endlich perfekt.", "Besser als FC 25.", "Gameplay flüssig wie nie.", "Rush 2.0 Modus ist genial.", "Top.",
    "Schnelle Lieferung.", "Vorbestellung hat sich gelohnt.", "5 Sterne.", "Referenzklasse.", "Macht Laune.",
    "Karriere macht endlich wieder Sinn.", "Ultimate Team suchterzeugend.", "KI-Update ist spürbar.", "Super.",
    "Endlich da!", "Bin begeistert.", "Schneller Download.", "Code kam sofort.", "Läuft stabil.",
    "Besser geht Fußball nicht.", "Klare Empfehlung.", "Spielt sich extrem realistisch.",
    "Taktik-KI ist schlau.", "Mein Sohn flippt aus.", "Alles wie versprochen.", "Preis wert.",
    "Ein Traum.", "Pflichtkauf für Fans.", "FC 26 rasiert.", "Physik-Engine next level.",
    "Realismus pur.", "Macht einfach Spaß.", "Soundkulisse Stadion.", "Atmosphäre 10/10.",
    "Haptic Feedback perfekt.", "Ladezeiten existieren nicht.", "Top Service.",
    "Kam pünktlich.", "Versand zackig.", "Key funktionierte direkt.", "Alles okay.", "Danke."
]

openers = [
    "Habe das Spiel direkt zum Release bekommen.",
    "Als FIFA-Veteran bin ich von FC 26 positiv überrascht.",
    "Die Grafik auf der PS5 ist nochmal ein Sprung zu FC 25.",
    "Endlich ist es da! FC 26 setzt neue Maßstäbe.",
    "War erst skeptisch, aber die neuen Features überzeugen.",
    "Für mich die absolute Fußball-Referenz.",
    "Das Gameplay hat sich massiv weiterentwickelt.",
    "Der neue Story-Modus ist filmreif inszeniert.",
    "Habe es für meinen Neffen gekauft, er liebt es.",
    "Key kam sofort per Mail, konnte direkt den Pre-Load starten.",
    "Grafisch das schönste Sportspiel aktuell.",
    "Die KI-Trainer sind jetzt wirklich eine Herausforderung.",
    "Karrieremodus hat genau die Features bekommen, die wir wollten.",
    "Ultimate Team ist fair gestaltet dieses Jahr.",
    "Läuft mit 120 FPS auf kompatiblen TVs, ein Traum.",
    "Die Stadion-Atmosphäre ist beängstigend realistisch.",
    "Ballphysik fühlt sich schwerer und echter an.",
    "Ein Muss für jeden, der Fußball liebt.",
    "Habe den Kauf keine Sekunde bereut.",
    "Alles bestens, sofortige Aktivierung im PSN Store."
]

middles_tech = [
    "HyperMotion X sorgt für Bewegungen, die man so noch nie gesehen hat.",
    "Die neuen Wettereffekte beeinflussen das Gameplay spürbar.",
    "Raytracing auch während des Spiels, sieht unfassbar aus.",
    "Die K.I. lernt vom eigenen Spielstil, das ist gruselig gut.",
    "Endlich Crossplay in allen Modi ohne Einschränkungen.",
    "Die neuen Kommentatoren bringen frischen Wind rein.",
    "Ladezeiten gibt es eigentlich gar nicht mehr.",
    "Die PS5 Controller Features werden perfekt genutzt.",
    "Server laufen am Launch-Tag überraschend stabil.",
    "Die Gesichter der Spieler sind fotorealistisch."
]

middles_gameplay = [
    "Das Passspiel ist viel freier und kreativer.",
    "Dribbling fühlt sich direkt an, man hat volle Kontrolle.",
    "Die Torhüter haben komplett neue Animationen.",
    "Verteidigen ist endlich Taktik und nicht nur Glück.",
    "Die neuen 'Signature Moves' der Stars erkennt man sofort.",
    "Freistöße und Ecken wurden komplett überarbeitet.",
    "Der Schiri pfeift endlich nachvollziehbar.",
    "Die Physik bei Zusammenstößen ist Hollywood-reif.",
    "Taktische Fouls werden jetzt realistisch bestraft.",
    "Das Spieltempo ist perfekt, nicht zu schnell."
]

closers = [
    "Kann ich jedem empfehlen.", "Klare 5 Sterne.", "Spiel des Jahres.",
    "Macht einfach Bock.", "Der neue König auf dem Platz.",
    "Danke für den schnellen Service.", "EA hat geliefert.",
    "Wer Fußball mag, braucht FC 26.", "Absolute Kaufempfehlung.",
    "Top Preis-Leistung.", "Gerne wieder.", "Daumen hoch!",
    "Für PS5 Besitzer ein Pflichtkauf.", "Suchtgefahr!",
    "Bin rundum zufrieden.", "Super Spiel, super Shop.", "Ganz klare Empfehlung.",
    "Einfach klasse.", "So muss Next-Gen aussehen.", "Danke!"
]

def generate_date(start_date, end_date):
    days_diff = (end_date - start_date).days
    random_days = random.randint(0, days_diff)
    generate_time = start_date + timedelta(days=random_days)
    return generate_time.strftime("%Y-%m-%d")

def generate_rating():
    return 5

def generate_review_text(existing_reviews):
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        parts = []
        
        if r_type < 0.20:
            parts.append(random.choice(shorts))
            if random.random() < 0.3: 
                parts.append(random.choice(["Danke!", "Top.", "Bin zufrieden."]))
                
        elif r_type < 0.70:
            parts.append(random.choice(openers))
            context = random.choice([middles_gameplay, middles_tech])
            parts.append(random.choice(context))
            parts.append(random.choice(closers))
            
        else:
            parts.append(random.choice(openers))
            c1 = random.choice(middles_gameplay)
            c2 = random.choice(middles_tech)
            parts.append(random.choice([c1, c2]))
            parts.append(random.choice(closers))
        
        text = " ".join(parts)
        text = text.replace("  ", " ")
        
        if text not in existing_reviews:
            return text
        
        if attempts > 500:
            return text + " ."

def generate_customer_name():
    first = random.choice(first_names)
    last_init = random.choice(last_initials)
    city = random.choice(cities)
    return f"{first} {last_init}. aus {city}"

def main():
    print(f"Generating {TARGET_COUNT} FC 26 reviews...")
    
    reviews = []
    used_texts = set()
    
    for _ in range(TARGET_COUNT):
        text = generate_review_text(used_texts)
        used_texts.add(text)
        
        name = generate_customer_name()
        
        review = {
            "rating": generate_rating(),
            "title": "",
            "content": text,
            "customer_name": name,
            "date": generate_date(START_DATE, END_DATE)
        }
        reviews.append(review)
        
    reviews.sort(key=lambda x: x['date'], reverse=True)
    
    js_filename = 'reviews_data_fc26.js'
    js_content = f"const REVIEWS_DATA = {json.dumps(reviews, indent=2, ensure_ascii=False)};"
    
    with open(js_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"JS written to {js_filename}")

if __name__ == "__main__":
    main()
