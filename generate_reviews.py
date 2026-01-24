import csv
import random
import json
from datetime import datetime, timedelta

# --- DATA BANKS ---

first_names_male = [
    "Thomas", "Michael", "Andreas", "Stefan", "Markus", "Christian", "Daniel", "Martin",
    "Alexander", "David", "Tobias", "Patrick", "Jan", "Sebastian", "Matthias", "Peter",
    "Johannes", "Florian", "Klaus", "Jürgen", "Bernd", "Uwe", "Sven", "Frank", "Dirk",
    "Torsten", "Ralf", "Wolfgang", "Max", "Lukas", "Philipp", "Felix", "Tim", "Tom",
    "Jonas", "Leon", "Niklas", "Kevin", "Dennis", "Fabian", "Marcel", "Dominik"
]

first_names_female = [
    "Julia", "Sarah", "Anna", "Lisa", "Laura", "Sandra", "Christina", "Melanie",
    "Nicole", "Nadine", "Sabine", "Stefanie", "Andrea", "Katharina", "Maria",
    "Monika", "Petra", "Tanja", "Anja", "Claudia", "Susanne", "Birgit", "Kerstin",
    "Heike", "Katja", "Bettina", "Martina", "Sophie", "Lena", "Lea", "Vanessa",
    "Jessica", "Daniela", "Manuela", "Silke", "Angelika", "Gabriele", "Ursula"
]

surnames = [
    "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker",
    "Schulz", "Hoffmann", "Schäfer", "Koch", "Bauer", "Richter", "Klein", "Wolf",
    "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun", "Krüger", "Hofmann",
    "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
    "Schmid", "Niemeyer", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Mayer",
    "Huber", "Kaiser", "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß",
    "Jung", "Hahn", "Keller", "Vogel", "Frank", "Berger", "Roth"
]

# Simple standalone phrases (Short reviews)
# Simple standalone phrases (Short reviews)
short_reviews_pool = [
    "Alles super.", "Top!", "Guter Kauf.", "Sofort da.", "Hat alles geklappt.",
    "Bin zufrieden.", "Gerne wieder.", "Alles ok.", "Windows läuft.", "Einfach und gut.",
    "Passt.", "Sehr gut.", "Funktioniert.", "Klasse.", "Perfekt.", "Danke!",
    "Alles bestens.", "Kann ich empfehlen.", "Guter Preis.", "Key kam sofort.", "Problemlos.",
    "Sofort erhalten.", "Tip top.", "Läuft stabil.", "Nix zu meckern.", "Preis/Leistung top.",
    "Super schnelle Abwicklung.", "Sofortiger Mail-Versand.", "Code funktioniert.", "Keine Probleme.",
    "Alles wie beschrieben.", "Sehr seriös.", "Empfehlenswert.", "Gerne wieder mal.", "Genial.",
    "Hat sofort funktioniert.", "Aktivierung ging fix.", "Key kam per Mail.", "Alles gut gelaufen.",
    "Top Verkäufer.", "Wunderbar.", "Spitze.", "Vielen Dank.", "Super Service.", "Schnell und einfach."
]

# Modular Components for Medium/Long Reviews

openers = [
    "Habe den Key bestellt und sofort erhalten.",
    "War erst skeptisch bei dem günstigen Preis.",
    "Mein alter Laptop brauchte dringend ein Upgrade.",
    "Nachdem ich lange gesucht habe, bin ich hier fündig geworden.",
    "Brauchte schnell eine Windows Lizenz für meinen neuen PC.",
    "Die Bestellung war super einfach.",
    "Der Kaufvorgang war unkompliziert.",
    "Endlich weg von Windows 7!",
    "Habe Windows 10 für meinen Sohn gekauft.",
    "Key kam innerhalb weniger Minuten per E-Mail.",
    "Preis ist unschlagbar.",
    "Wollte eigentlich im Laden kaufen, aber hier ist es viel billiger.",
    "Schneller geht es wirklich nicht.",
    "Erstklassiger Service.",
    "Kann den Shop nur loben.",
    "Alles lief reibungslos ab.",
    "Ich bin absolut begeistert.",
    "Installation hat sofort geklappt.",
    "War eine Empfehlung von einem Freund.",
    "Ganz ehrlich: Besser geht's nicht.",
    "Bin sehr zufrieden mit dem Kauf.",
    "Alles genau wie beschrieben.",
    "Super schnelle Zusendung des Keys.",
    "Die Aktivierung funktionierte tadellos.",
    "Habe schon mehrmals hier gekauft."
]

middles = [
    "Der Download von Microsoft ging flott.",
    "Man muss kein Abo abschließen, das war mir wichtig.",
    "Hatte erst Probleme, aber lag an meiner Internetverbindung.",
    "Die E-Mail landete im Spam-Ordner, aber ich hab sie gefunden.",
    "Code eingegeben und Windows war aktiviert.",
    "Installation per USB-Stick war kinderleicht.",
    "Läuft jetzt seit einer Woche stabil.",
    "Keine versteckten Kosten.",
    "Support hat mir bei einer Frage schnell geholfen.",
    "Upgrade von Home auf Pro war nicht nötig, Home reicht völlig.",
    "Rechner ist jetzt viel schneller als vorher.",
    "Habe es auf einem alten Lenovo installiert.",
    "Viel besser als die teuren Box-Versionen.",
    "Anleitung war auch dabei und verständlich.",
    "Habe direkt noch einen Key für meine Frau gekauft.",
    "Die ISO Datei kann man ja einfach bei MS laden.",
    "Key wurde sofort akzeptiert.",
    "Genau so muss das sein.",
    "Hatte Zweifel ob der Key legal ist, aber alles scheint ok.",
    "Aktivierung über Telefon war nicht nötig, ging online.",
    "Der Kundenservice ist sehr freundlich.",
    "Einfach Key eingeben und fertig.",
    "Keine Probleme bei der Installation.",
    "Das System läuft sehr flüssig.",
    "Alles original, keine Fake-Lizenz."
]

closers = [
    "Werde wieder hier kaufen.",
    "Kann ich uneingeschränkt weiterempfehlen.",
    "Vielen Dank für den tollen Service.",
    "So macht Einkaufen Spaß.",
    "Daumen hoch!",
    "Gerne wieder.",
    "5 Sterne von mir.",
    "Absolute Kaufempfehlung.",
    "Bitte weiter so.",
    "Danke!",
    "Einfach top.",
    "Lohnt sich wirklich.",
    "Bin happy.",
    "Perfekter Deal.",
    "Spart euch das Geld für die teure Version.",
    "Klare Empfehlung.",
    "Alles bestens, danke.",
    "Super Shop.",
    "Bin voll zufrieden.",
    "Nichts auszusetzen."
]

# --- HELPER FUNCTIONS ---

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

def generate_customer_name():
    if random.choice([True, False]):
        first = random.choice(first_names_male)
    else:
        first = random.choice(first_names_female)
    
    last_init = random.choice(last_initials)
    city = random.choice(cities)
    return f"{first} {last_init}. aus {city}"

def generate_date():
    """Generates a random date within the last 8 months."""
    end_date = datetime.now()
    start_date = end_date - timedelta(days=240)
    random_days = random.randint(0, 240)
    random_date = start_date + timedelta(days=random_days)
    return random_date.strftime("%Y-%m-%d")

def apply_imperfections(text):
    """Adds human imperfections like typos or lowercasing."""
    if random.random() < 0.1: # 10% chance of all lowercase
        text = text.lower()
    
    if random.random() < 0.05: # 5% remove final punctuation
        if text.endswith('.'):
            text = text[:-1]
            
    if random.random() < 0.05: # 5% replace . with !
        text = text.replace('.', '!', 1)
        
    return text

def generate_rating():
    """Force all ratings to be 5 stars."""
    return 5

def generate_review_text(existing_reviews):
    """Generates a unique review text with varied structure."""
    
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        
        if r_type < 0.25: 
            # TYPE 1: Short & Simple (from pool)
            text = random.choice(short_reviews_pool)
            
        elif r_type < 0.60:
            # TYPE 2: Medium (Opener + Closer)
            text = f"{random.choice(openers)} {random.choice(closers)}"
            
        elif r_type < 0.90:
            # TYPE 3: Standard (Opener + Middle + Closer)
            text = f"{random.choice(openers)} {random.choice(middles)} {random.choice(closers)}"
            
        else:
            # TYPE 4: Detailed (Opener + Middle + Middle + Closer)
            # Ensure middles are different
            m1 = random.choice(middles)
            m2 = random.choice(middles)
            while m1 == m2:
                m2 = random.choice(middles)
            text = f"{random.choice(openers)} {m1} {m2} {random.choice(closers)}"
        
        text = apply_imperfections(text)
        
        # Uniqueness Check
        if text not in existing_reviews:
            return text
            
        # Safety break if we loop too long (shouldn't happen with this pool size)
        if attempts > 1000:
            text = text + " (Punkt)" # Trivial modification to ensure uniqueness
            return text

# --- MAIN SCRIPT ---

def main():
    TARGET_COUNT = 428
    
    final_reviews = []
    used_names = set()
    used_review_texts = set()
    
    print(f"Generating {TARGET_COUNT} unique high-quality reviews...")
    
    while len(final_reviews) < TARGET_COUNT:
        name = generate_customer_name() # No uniqueness check needed for this format as collision is unlikely/acceptable
        text = generate_review_text(used_review_texts)
        
        # Add to sets to guarantee uniqueness
        used_review_texts.add(text)
        
        entry = {
            'rating': generate_rating(),
            'title': '', # Empty as requested
            'content': text,
            'customer_name': name,
            'date': generate_date()
        }
        
        final_reviews.append(entry)
        
    # Sort by date descending (optional, looks nicer)
    final_reviews.sort(key=lambda x: x['date'], reverse=True)
    
    # 1. Write CSV
    with open('reviews.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f, delimiter=';')
        writer.writerow(['rating', 'title', 'content', 'customer_name', 'date'])
        for r in final_reviews:
            writer.writerow([r['rating'], r['title'], r['content'], r['customer_name'], r['date']])
            
    # 2. Write JSON for Webpage (Embedded)
    with open('reviews_data.js', 'w', encoding='utf-8') as f:
        f.write('const REVIEWS_DATA = ')
        json.dump(final_reviews, f, ensure_ascii=False, indent=2)
        f.write(';')
        
    print(f"Success! Generated {len(final_reviews)} unique reviews.")
    print("- Saved to 'reviews.csv'")
    print("- Saved to 'reviews_data.js'")

if __name__ == "__main__":
    main()
