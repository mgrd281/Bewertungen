import csv
import random
import json
from datetime import datetime, timedelta

# --- CONFIGURATION ---
TARGET_COUNT = 3239
START_DATE = datetime(2025, 9, 27) # Release date approx
END_DATE = datetime(2026, 1, 24)

# --- DATA BANKS (GAMER PROFILES) ---

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
    # Added simpler towns to reach count
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
    "Bestes Fußballspiel.", "Grafik ist der Hammer.", "Endlich wieder zocken.", "Macht süchtig.",
    "Besser als FIFA 24.", "Gameplay fühlt sich gut an.", "Rush Modus ist genial.", "Top.",
    "Schnelle Lieferung.", "Alles bestens.", "5 Sterne.", "Geiles Game.", "Macht Laune.",
    "Karriere macht Bock.", "Ultimate Team rockt.", "Grafik-Update lohnt sich.", "Super.",
    "Endlich da!", "Bin begeistert.", "Schneller Versand.", "CD kam heil an.", "Läuft flüssig auf PS5.",
    "Habe es vorbestellt, keine Reue.", "Klare Empfehlung.", "Spielt sich realistischer.",
    "Taktik-Optionen sind super.", "Mein Sohn ist happy.", "Alles wie beschrieben.", "Guter Preis.",
    "Der Hammer!", "Pflichtkauf.", "Upgrade lohnt.", "FC 25 > FIFA.", "Gute Physik.",
    "Realistisch.", "Macht einfach Spaß.", "Soundkulisse top.", "Stadion-Atmo mega.",
    "Controller-Feedback gut genutzt.", "Ladezeiten auf PS5 quasi null.", "Top Zustand.",
    "Kam pünktlich.", "Versand ging fix.", "Original verpackt.", "Alles okay.", "Danke."
]

openers = [
    "Habe das Spiel vorbestellt und pünktlich erhalten.",
    "Als langjähriger FIFA-Fan musste ich FC 25 haben.",
    "Die Grafik auf der PS5 ist ein echter Sprung nach vorne.",
    "Endlich ist es da! Habe direkt das ganze Wochenende gezockt.",
    "War erst skeptisch wegen dem Namen, aber es ist top.",
    "Für mich das beste Fußballspiel seit Jahren.",
    "Das Gameplay hat sich spürbar verbessert.",
    "Der neue Rush-Modus macht unfassbar viel Spaß.",
    "Habe es für meinen Sohn gekauft, er liebt es.",
    "Die Lieferung war super schnell, Spiel war am nächsten Tag da.",
    "Grafisch eine Wucht, besonders die Spielergesichter.",
    "Die taktischen Möglichkeiten sind viel tiefer als früher.",
    "Karrieremodus hat endlich sinnvolle Updates bekommen.",
    "Ultimate Team macht wie immer süchtig, aber die Neuerungen gefallen mir.",
    "Läuft butterweich mit 60 FPS auf der PS5.",
    "Die Atmosphäre in den Stadien ist Gänsehaut pur.",
    "Ballphysik fühlt sich realistischer an als im Vorgänger.",
    "Ein Muss für jeden Fußballfan.",
    "Habe den Kauf keine Sekunde bereut.",
    "Alles bestens, Spiel kam originalverpackt an."
]

middles_gameplay = [
    "Die Pässe kommen präziser und die Laufwege der KI sind schlauer.",
    "Hypermotion V sorgt für extrem realistische Animationen.",
    "Das Tempo wurde etwas rausgenommen, was dem Realismus gut tut.",
    "Awe-Sim-Taktiken geben einem viel mehr Kontrolle über das Match.",
    "Die Torhüter sind endlich mal eine Herausforderung.",
    "Verteidigen fühlt sich belohnender an als früher.",
    "Die neuen PlayStyles+ machen die Stars wirklich einzigartig.",
    "Dribbling ist griffig, aber nicht mehr so overpowered.",
    "Endlich fallen nicht mehr nur Ping-Pong-Tore.",
    "Die Kollisionsabfrage ist deutlich besser geworden.",
    "Man merkt das Upgrade der Engine in jeder Bewegung.",
    "Fühlt sich einfach 'echter' an als der Vorgänger."
]

middles_modes = [
    "Der 5-gegen-5 Rush Modus ist perfekt für schnelle Runden zwischendurch.",
    "Im Karrieremodus kann man jetzt endlich Icons managen, sehr cool.",
    "Die Jugendakademie wurde sinnvoll erweitert.",
    "Pro Clubs mit Crossplay ist ein Gamechanger für unsere Truppe.",
    "Ultimate Team Evolutions sind motivierend ohne Ende.",
    "Endlich kann man Frauen und Männer im UT mischen, bringt Vielfalt.",
    "Der Manager-Modus ist taktisch viel anspruchsvoller.",
    "Saison-Aufgaben sind fair und motivieren zum Dranbleiben.",
    "Der Story-Fokus in der Spielerkarriere gefällt mir.",
    "Online-Verbindung war bisher immer stabil.",
    "Weekend League ist stressig wie immer, aber lohnt sich."
]

middles_tech = [
    "Auf meinem 4K TV sieht der Rasen fast echt aus.",
    "Die Ladezeiten dank der PS5 SSD sind praktisch nicht existent.",
    "DualSense Features werden gut genutzt, man spürt die Zweikämpfe.",
    "Sounddesign ist wuchtig, die Fangesänge kommen super rüber.",
    "Keine Framedrops, alles läuft extrem flüssig.",
    "Die Menüs sind schneller und übersichtlicher geworden.",
    "Raytracing bei den Wiederholungen sieht fantastisch aus.",
    "Installation ging fix, Update war auch schnell geladen.",
    "Die Lichteffekte bei Abendspielen sind der Wahnsinn.",
    "Technisch sauber, hatte bisher keine Bugs oder Abstürze."
]

closers = [
    "Kann ich jedem empfehlen.", "Klare 5 Sterne.", "Bestes Sportspiel des Jahres.",
    "Macht einfach Bock.", "Werde ich noch hunderte Stunden spielen.",
    "Danke für die schnelle Lieferung.", "Alles richtig gemacht EA.",
    "Wer Fußball mag, braucht dieses Spiel.", "Absolute Kaufempfehlung.",
    "Top Preis-Leistung hier im Shop.", "Gerne wieder.", "Daumen hoch!",
    "Für PS5 Besitzer ein Pflichtkauf.", "Endlich wieder Nächte durchzocken.",
    "Bin rundum zufrieden.", "Super Spiel, super Service.", "Ganz klare Empfehlung.",
    "Einfach klasse.", "So muss Next-Gen aussehen.", "Danke!"
]

def generate_date(start_date, end_date):
    days_diff = (end_date - start_date).days
    random_days = random.randint(0, days_diff)
    generate_time = start_date + timedelta(days=random_days)
    return generate_time.strftime("%Y-%m-%d")

def generate_rating():
    # Always 5 stars
    return 5

def generate_review_text(existing_reviews):
    """Generates a text guaranteed to be unique within existing_reviews set."""
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        parts = []
        
        # 20% Short, 50% Medium, 30% Long
        if r_type < 0.20:
            parts.append(random.choice(shorts))
            if random.random() < 0.3: 
                parts.append(random.choice(["Danke!", "Top.", "Bin zufrieden."]))
                
        elif r_type < 0.70: # Medium
            parts.append(random.choice(openers))
            context = random.choice([middles_gameplay, middles_modes, middles_tech])
            parts.append(random.choice(context))
            parts.append(random.choice(closers))
            
        else: # Long
            parts.append(random.choice(openers))
            contexts = [middles_gameplay, middles_modes, middles_tech]
            c1 = random.choice(contexts)
            c2 = random.choice(contexts)
            while c1 == c2:
                c2 = random.choice(contexts)
            
            parts.append(random.choice(c1))
            parts.append(random.choice(c2))
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
    print(f"Generating {TARGET_COUNT} FC 25 reviews...")
    
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
        
    # Sort by date descending
    reviews.sort(key=lambda x: x['date'], reverse=True)
    
    # Write JS
    js_filename = 'reviews_data_fc25.js'
    js_content = f"const REVIEWS_DATA = {json.dumps(reviews, indent=2, ensure_ascii=False)};"
    
    with open(js_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"JS written to {js_filename}")

if __name__ == "__main__":
    main()
