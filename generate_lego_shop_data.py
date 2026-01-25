import json
import random
from datetime import datetime, timedelta
import os

# --- SHARED DATA ---
# (Using the same successful names/cities from FC26 for consistency)
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
    "Eisenach", "Rottenburg", "Borken", "Nettetal", "Ambreg", "Heinsberg", "Lemgo", "Monheim am Rhein", "Aurich", "Wunstorf"
]

def generate_customer_name():
    first = random.choice(first_names)
    last_init = random.choice(last_initials)
    city = random.choice(cities)
    return f"{first} {last_init}. aus {city}"

def generate_date(start_date, end_date):
    days_diff = (end_date - start_date).days
    random_days = random.randint(0, days_diff)
    generate_time = start_date + timedelta(days=random_days)
    return generate_time.strftime("%Y-%m-%d")

# --- REVIEW TEXT COMPONENTS (LEGO THEMED) ---

shorts = [
    "Tolles Set.", "Super Qualität.", "Wie immer top.", "Klare Empfehlung.",
    "Schnelle Lieferung.", "Macht Spaß.", "Sehr schön.", "Alles bestens.",
    "Kind ist glücklich.", "Perfekt.", "Gerne wieder.", "5 Sterne.",
    "Gutes Preis-Leistungs-Verhältnis.", "Klasse.", "Gute Verpackung.",
    "Alles vollständig.", "Spaß beim Bauen.", "Sieht gut aus.", "Top.",
    "Bin begeistert.", "Wunderschönes Modell.", "Empfehlenswert.", "Schnell gebaut.",
    "LEGO halt.", "Gewohnte Qualität.", "Einfach super.", "Meine Empfehlung.",
    "Alles okay.", "Passt perfekt.", "Sehr zufrieden."
]

openers = [
    "Habe das Set für meinen Sohn gekauft, er ist begeistert.",
    "Endlich habe ich mir dieses Set gegönnt.",
    "Als Geschenk für den Neffen besorgt, kam super an.",
    "Die Lieferung war sehr schnell, alles gut verpackt.",
    "Ich bin schon lange LEGO Fan und wurde nicht enttäuscht.",
    "Der Aufbau hat mir sehr viel Freude bereitet.",
    "Ein wirklich gelungenes Set von LEGO.",
    "Habe es zusammen mit meiner Tochter aufgebaut.",
    "Für den Preis bekommt man hier echt viel geboten.",
    "Das Set sieht in echt noch besser aus als auf den Bildern.",
    "War erst skeptisch wegen dem Preis, aber es lohnt sich.",
    "Mein Enkel hat sich riesig darüber gefreut.",
    "Perfekt für einen verregneten Nachmittag.",
    "Die Qualität der Steine ist wie gewohnt hervorragend.",
    "Ein Muss für jeden Sammler.",
    "Habe es direkt nach Erscheinen bestellt.",
    "Das Paket kam pünktlich zum Geburtstag an.",
    "Eines der besten Sets, die ich in letzter Zeit gebaut habe.",
    "Kann die negativen Bewertungen nicht verstehen.",
    "Einfach klasse, was LEGO da wieder gemacht hat."
]

middles_build = [
    "Die Anleitung war sehr verständlich und einfach zu folgen.",
    "Es haben keine Teile gefehlt, was sehr wichtig ist.",
    "Der Bauprozess war abwechslungsreich und nie langweilig.",
    "Es gibt viele clevere Bautechniken zu entdecken.",
    "Die Klemmkraft der Steine ist perfekt.",
    "Auch für jüngere Kinder gut zu bewältigen.",
    "Man braucht schon etwas Geduld, aber das Ergebnis lohnt sich.",
    "Die Aufkleber waren okay, aber Prints wären schöner gewesen.",
    "Die Sortierung der Tüten macht den Aufbau sehr angenehm.",
    "Ein paar Ersatzteile waren auch dabei, sehr gut."
]

middles_fun = [
    "Fertig aufgebaut sieht es im Regal einfach toll aus.",
    "Es gibt viele bewegliche Teile und Funktionen.",
    "Mein Kind spielt seit Tagen nur noch damit.",
    "Es ist sehr stabil, man kann gut damit spielen.",
    "Die Details sind wirklich liebevoll gestaltet.",
    "Passt perfekt in meine Sammlung.",
    "Ein echter Hingucker in der Vitrine.",
    "Die Minifiguren sind besonders schön bedruckt.",
    "Es lässt sich auch super mit anderen Sets kombinieren.",
    "Der Spielwert ist hier wirklich hoch."
]

closers = [
    "Würde ich jederzeit wieder kaufen.",
    "Kann ich uneingeschränkt empfehlen.",
    "Daumen hoch!",
    "Für Fans ein absolutes Muss.",
    "Preis-Leistung stimmt hier.",
    "Ein tolles Geschenk.",
    "Bin rundum zufrieden.",
    "Hat sich definitiv gelohnt.",
    "Vielen Dank für den schnellen Service.",
    "Freue mich schon auf das nächste Set.",
    "Absolute Kaufempfehlung.",
    "5 Sterne von mir.",
    "Top, weiter so.",
    "Einfach klasse.",
    "Danke.",
    "Super Shop.",
    "Alles richtig gemacht.",
    "Bin happy.",
    "So macht LEGO Spaß.",
    "Klare 10/10."
]

def generate_review_text(keywords, used_texts):
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        parts = []
        
        # Strategy inspired by fc26.py logic
        if r_type < 0.20:
            # Short review
            parts.append(random.choice(shorts))
            if random.random() < 0.3:
                parts.append(random.choice(["Danke!", "Top.", "Bin zufrieden."]))
        
        elif r_type < 0.60:
            # Standard review
            parts.append(random.choice(openers))
            
            # Inject product specific keywords naturally if possible, or standard middles
            if random.random() < 0.4 and keywords:
                k = random.choice(keywords)
                parts.append(f"Besonders {k} gefällt mir gut.")
            else:
                context = random.choice([middles_build, middles_fun])
                parts.append(random.choice(context))
            
            parts.append(random.choice(closers))
            
        else:
            # Long review
            parts.append(random.choice(openers))
            parts.append(random.choice(middles_build))
            if keywords: 
                k = random.choice(keywords)
                parts.append(f"Das Feature {k} ist klasse.")
            parts.append(random.choice(middles_fun))
            parts.append(random.choice(closers))
        
        text = " ".join(parts)
        text = text.replace("  ", " ") # Cleanup double spaces
        
        if text not in used_texts:
            return text
        
        if attempts > 500:
            # Fallback for uniqueness if saturated
            return text + " ."

# --- PRODUCT CONFIGURATION ---
products = [
    {
        "id": "lego_monster_jam",
        "name": "LEGO Technic Monster Jam Dragon (42149)",
        "count": 1250,
        "price": "19,99 €",
        "category": "Technic",
        "image": "assets/lego_monster_jam_dragon.png",
        "keywords": ["Monster Truck", "Rückziehmotor", "Dragon Design", "Robust", "Cooles Geschenk", "Kreativ", "Toller Bauspaß", "Stabil"]
    },
    {
        "id": "lego_botanical",
        "name": "LEGO Icons Botanical Collection (10329)",
        "count": 1850,
        "price": "49,99 €",
        "category": "Icons",
        "image": "assets/lego_botanical_collection.png",
        "keywords": ["Wunderschöne Deko", "Pflanzen", "Sieht echt aus", "Entspannend", "Tolle Farben", "Für Erwachsene", "Schöner Hingucker", "Kreativ"]
    },
    {
        "id": "lego_creator_horse",
        "name": "LEGO Creator Prächtiges Ross (31166)",
        "count": 890,
        "price": "29,99 €",
        "category": "Creator 3-in-1",
        "image": "assets/lego_creator_horse.png",
        "keywords": ["Pferd", "3-in-1 Set", "Tolle Tiere", "Beweglich", "Kreativ", "Meine Tochter ist begeistert", "Schönes Design", "Preis-Leistung"]
    },
    {
        "id": "lego_star_wars_k2so",
        "name": "LEGO Star Wars Sicherheitsdroide K-2SO (75434)",
        "count": 1420,
        "price": "99,99 €",
        "category": "Star Wars",
        "image": "assets/lego_star_wars_k2so.png",
        "keywords": ["K-2SO", "Rogue One", "Droiden", "Detailliert", "Sammlerstück", "Für Fans", "Star Wars Fan", "Großartig"]
    },
    {
        "id": "lego_technic_jesko",
        "name": "LEGO Technic Koenigsegg Jesko Absolut (42173)",
        "count": 1150,
        "price": "52,99 €",
        "category": "Technic",
        "image": "assets/lego_technic_koenigsegg.png",
        "keywords": ["Hypercar", "Schnell", "Koenigsegg", "Grau", "Motor", "Technik-Funktionen", "V8 Motor", "Rennwagen"]
    },
    {
        "id": "lego_star_wars_mtt",
        "name": "LEGO Star Wars MTT (75435)",
        "count": 1680,
        "price": "149,99 €",
        "category": "Star Wars",
        "image": "assets/lego_star_wars_mtt.png",
        "keywords": ["MTT", "Separatisten", "Kampfdroiden", "Großes Set", "Spielspaß", "Nostalgie", "Truppentransporter", "Viele Figuren"]
    },
    {
        "id": "lego_speed_champions",
        "name": "LEGO Speed Champions Lamborghini (77238)",
        "count": 940,
        "price": "44,99 €",
        "category": "Speed Champions",
        "image": "assets/lego_speed_champions_lambo.png",
        "keywords": ["Lamborghini", "Rennautos", "Zwei Autos", "Detailreich", "Schnell gebaut", "Sammlung", "Huracán", "Revuelto"]
    },
    {
        "id": "lego_harry_potter",
        "name": "LEGO Harry Potter Schloss Hogwarts (76454)",
        "count": 1350,
        "price": "169,99 €",
        "category": "Harry Potter",
        "image": "assets/lego_harry_potter_hogwarts.png",
        "keywords": ["Hogwarts", "Zauberei", "Große Halle", "Minifiguren", "Magisch", "Für Fans", "Detailliertes Schloss", "Harry Potter"]
    },
    {
        "id": "lego_creator_panda",
        "name": "LEGO Creator 3-in-1 Pandafamilie (31165)",
        "count": 920,
        "price": "34,99 €",
        "category": "Creator 3-in-1",
        "image": "assets/lego_creator_panda.png",
        "keywords": ["Panda", "Süß", "Bambus", "3 Modelle", "Tiere", "Kinder lieben es", "Beweglich", "Natur"]
    },
    {
        "id": "lego_city_bulldozer",
        "name": "LEGO City Gelber Bulldozer (60466)",
        "count": 850,
        "price": "24,99 €",
        "category": "City",
        "image": "assets/lego_city_bulldozer.png",
        "keywords": ["Baustelle", "Bulldozer", "Ketten", "Baustellenfahrzeug", "Robustes Spielzeug", "Toll für Kinder", "City Welt", "Gelb"]
    },
    {
        "id": "lego_classic_box",
        "name": "LEGO Classic Große Bausteine-Box (10698)",
        "count": 2100,
        "price": "39,99 €",
        "category": "Classic",
        "image": "assets/lego_classic_box.png",
        "keywords": ["Steine", "Kreativität", "Viele Teile", "Bauen ohne Ende", "Klassiker", "Bunte Mischung", "Grundausstattung", "Box ist praktisch"]
    },
    {
        "id": "lego_jedi_bob",
        "name": "LEGO Star Wars Jedi Bobs Sternjäger (75388)",
        "count": 1050,
        "price": "39,99 €",
        "category": "Star Wars",
        "image": "assets/lego_star_wars_jedi_bob.png",
        "keywords": ["Jedi Bob", "Kultfigur", "Sternjäger", "Lustig", "Besonderes Set", "Raumschiff", "Cooles Design", "Star Wars Legende"]
    },
    {
        "id": "lego_simba",
        "name": "LEGO Disney Simba, das Löwenjunge (43243)",
        "count": 1100,
        "price": "19,99 €",
        "category": "Disney",
        "image": "assets/lego_disney_simba.png",
        "keywords": ["Simba", "König der Löwen", "Süß", "Beweglicher Kopf", "Disney Magie", "Geschenkidee", "Niedlich", "Einfach zu bauen"]
    }
]

def create_product_page(prod):
    # Enhanced HTML Template with SVGs and proper structure matching FC26
    html_template = f"""<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{prod['name']} - Bewertungen</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="product-section">
                <h1>{prod['name']}</h1>
                <div class="rating-summary">
                    <div class="stars" id="averageStars">★★★★★</div>
                    <span class="review-count" id="reviewCount">({prod['count']} Bewertungen)</span>
                    
                    <div class="action-buttons">
                        <button onclick="downloadCSV()" class="download-btn" title="Download CSV">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            CSV
                        </button>
                        <button onclick="downloadExcel()" class="download-btn excel-btn" title="Download Excel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            Excel
                        </button>
                        <button onclick="downloadNumbers()" class="download-btn numbers-btn"
                            title="Download Numbers (Mac)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="9" y1="3" x2="9" y2="21"></line>
                            </svg>
                            Numbers
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div class="table-wrapper">
                <table id="reviews-table" class="excel-table">
                    <thead>
                        <tr>
                            <th class="col-number">#</th>
                            <th class="col-rating">Bewertung</th>
                            <th class="col-title">Titel</th>
                            <th class="col-content">
                                Bewertungstext
                                <button onclick="copyColumn('content')" class="copy-btn" title="Alle Inhalte kopieren">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                </button>
                            </th>
                            <th class="col-name">
                                Name
                                <button onclick="copyColumn('customer_name')" class="copy-btn"
                                    title="Alle Namen kopieren">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                </button>
                            </th>
                            <th class="col-date">
                                Datum
                                <button onclick="copyColumn('date')" class="copy-btn" title="Alle Daten kopieren">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody id="reviews-tbody">
                        <!-- Reviews will be loaded here -->
                    </tbody>
                </table>
            </div>
        </main>
    </div>

    <!-- SheetJS Library for Excel Export -->
    <script src="https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js"></script>
    <script src="reviews_data_{prod['id']}.js"></script>
    <script src="script.js"></script>
</body>

</html>"""
    
    with open(f"{prod['id']}.html", "w", encoding="utf-8") as f:
        f.write(html_template)
    print(f"Created page: {prod['id']}.html")

def main():
    print("Starting bulk generation for LEGO products...")
    
    start_date = datetime(2025, 1, 1)
    end_date = datetime(2026, 1, 24)
    
    count_files = 0
    
    for prod in products:
        print(f"Processing {prod['name']} ({prod['count']} reviews)...")
        
        reviews = []
        used_texts = set()
        
        for _ in range(prod['count']):
            text = generate_review_text(prod['keywords'], used_texts)
            used_texts.add(text)
            
            name = generate_customer_name()
            
            reviews.append({
                "rating": 5,
                "title": "",
                "content": text,
                "customer_name": name,
                "date": generate_date(start_date, end_date)
            })
            
        # Sort by date descending
        reviews.sort(key=lambda x: x['date'], reverse=True)
        
        js_filename = f"reviews_data_{prod['id']}.js"
        js_content = f"const REVIEWS_DATA = {json.dumps(reviews, indent=2, ensure_ascii=False)};"
        
        with open(js_filename, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        create_product_page(prod)
        count_files += 2
        
    print(f"All done! Generated {count_files} files.")

if __name__ == "__main__":
    main()
