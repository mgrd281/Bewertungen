import csv
import random
import json
from datetime import datetime, timedelta

# --- CONFIGURATION ---
TARGET_COUNT = 378
START_DATE = datetime(2025, 6, 15) # Hypothetical release date
END_DATE = datetime(2026, 1, 24)

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
    "Ein Meisterwerk.", "Besser als Tsushima.", "Wunderschön.", "Grafik ist unfassbar.",
    "Atsu ist ein toller Charakter.", "Hokkaido sieht traumhaft aus.", "Kampfsystem top.",
    "Jede Sekunde genossen.", "Pflichtkauf.", "10/10.", "Episch.", "Gänsehaut.",
    "Schneller Versand.", "Kam pünktlich an.", "Alles bestens.", "Danke.",
    "Sony liefert wieder ab.", "Pure Kunst.", "Macht süchtig.", "Tolle Story.",
    "Musik ist grandios.", "Atmosphäre pur.", "Der Wolf-Begleiter ist cool.",
    "Läuft super flüssig.", "Keine Bugs.", "Alles ok.", "Gerne wieder."
]

openers = [
    "Ich habe Ghost of Tsushima geliebt, aber Yotei setzt noch einen drauf.",
    "Endlich wieder als Samurai (bzw. Ronin) durch Japan reisen.",
    "Die Landschaft rund um Mount Yotei ist das Schönste, was ich je in einem Spiel gesehen habe.",
    "Atsu als neue Protagonistin bringt frischen Wind in die Story.",
    "Habe das Spiel blind vorbestellt und wurde nicht enttäuscht.",
    "Vom Intro bis zum Ende einfach nur episch.",
    "Die Grafik auf der PS5 ist Referenzklasse.",
    "Das Warten hat sich gelohnt.",
    "Ein würdiger Nachfolger für Ghost of Tsushima.",
    "Lieferung war sehr schnell, konnte am Release-Tag direkt loslegen.",
    "Die Spielwelt fühlt sich lebendiger und wilder an.",
    "Kampfsystem wurde sinnvoll erweitert, besonders die neuen Waffen.",
    "Die Geschichte ist emotional und packend.",
    "Für mich jetzt schon das Spiel des Jahres.",
    "Wer Open-World Spiele mag, muss das hier spielen."
]

middles_gameplay = [
    "Das Katana-Feedback via DualSense ist unglaublich präzise.",
    "Die neuen Schusswaffen fügen sich gut in das Kampfsystem ein.",
    "Schleichen macht mehr Spaß als im Vorgänger.",
    "Die Duelle sind intensiv und fordernd.",
    "Es gibt so viel zu entdecken, ohne dass die Karte überladen wirkt.",
    "Das Reiten durch den Schnee fühlt sich extrem realistisch an.",
    "Die neuen Kampfstile bieten viel Abwechslung.",
    "Man kann jetzt noch mehr mit der Umgebung interagieren.",
    "Die Wolf-Mechanik ist super integriert.",
    "Endlich kann man zwei Katanas gleichzeitig nutzen (Dual Wielding)."
]

middles_visuals = [
    "Das Wetter-System ist der Wahnsinn, besonders die Schneestürme.",
    "Die Beleuchtung bei Sonnenuntergang ist fast fotorealistisch.",
    "Performance-Modus läuft butterweich mit 60 FPS.",
    "Die Gesichter der Charaktere sind extrem detailliert.",
    "Der Wind als Wegweiser ist immer noch ein geniales Feature.",
    "Die Farbenpracht im Herbstlaub ist wunderschön.",
    "Ladezeiten sind dank SSD praktisch nicht vorhanden.",
    "HDR Unterstützung ist hier auf einem neuen Level."
]

closers = [
    "Absolute Kaufempfehlung.", "Ein Meilenstein.", "Danke Sucker Punch.",
    "Wer eine PS5 hat, braucht dieses Spiel.", "Einfach nur WOW.",
    "Habe jede Minute genossen.", "Werde es direkt nochmal spielen.",
    "Top Service vom Shop, schnelle Lieferung.", "5 Sterne, ganz klar.",
    "Nicht zögern, kaufen!", "Das beste PS5 Spiel bisher.",
    "Alles richtig gemacht.", "Ein Traum von einem Spiel.",
    "Bin begeistert.", "Super."
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
        
        if r_type < 0.25:
            parts.append(random.choice(shorts))
            if random.random() < 0.3: parts.append("Danke!")
            
        elif r_type < 0.70:
            parts.append(random.choice(openers))
            context = random.choice([middles_gameplay, middles_visuals])
            parts.append(random.choice(context))
            parts.append(random.choice(closers))
            
        else:
            parts.append(random.choice(openers))
            parts.append(random.choice(middles_gameplay))
            parts.append(random.choice(middles_visuals))
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
    print(f"Generating {TARGET_COUNT} Ghost of Yotei reviews...")
    
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
    
    js_filename = 'reviews_data_ghost.js'
    js_content = f"const REVIEWS_DATA = {json.dumps(reviews, indent=2, ensure_ascii=False)};"
    
    with open(js_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"JS written to {js_filename}")

if __name__ == "__main__":
    main()
