import json
import random
from datetime import datetime, timedelta
import os

# --- SHARED DATA ---
first_names = [
    "Lukas", "Paul", "Jonas", "Felix", "Leon", "Finn", "Noah", "Elias", "Luis", "Ben", "Luca", "Milan", "Henry", "Maximilian", "Theo", "Matteo", "Oskar", "Emil", "Liam", "Anton", "Julian", "David", "Philipp", "Alexander", "Jannik", "Niklas", "Tom", "Jan", "Tim", "Moritz", "Fabian", "Simon", "Samuel", "Tobias", "Florian", "Johannes", "Max", "Hannes", "Erik", "Marlon", "Kevin", "Dennis", "Justus", "Leo", "Mats", "Benedikt", "Christoph", "Dominik", "Kilian", "Lenny", "Malte", "Nico", "Robin", "Sascha", "Timo", "Valentin", "Vincent", "Yannick", "Adrian", "Arne", "Bastian", "Julia", "Sarah", "Anna", "Lisa", "Laura", "Sandra", "Christina", "Melanie", "Nicole", "Nadine", "Sabine", "Stefanie", "Andrea", "Katharina", "Maria", "Monika", "Petra", "Tanja", "Anja", "Claudia", "Susanne", "Birgit", "Kerstin"
]
last_initials = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
cities = [
    "Berlin", "Hamburg", "München", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hannover", "Nürnberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen", "Halle (Saale)", "Magdeburg", "Freiburg", "Krefeld", "Mainz", "Lübeck", "Erfurt", "Oberhausen", "Rostock", "Kassel", "Hagen", "Potsdam", "Saarbrücken", "Hamm", "Ludwigshafen", "Mülheim an der Ruhr", "Oldenburg", "Osnabrück", "Leverkusen", "Solingen", "Darmstadt", "Heidelberg", "Herne", "Neuss", "Regensburg", "Paderborn", "Ingolstadt", "Offenbach", "Fürth", "Würzburg", "Heilbronn", "Ulm", "Pforzheim", "Wolfsburg", "Göttingen", "Bottrop", "Reutlingen", "Koblenz", "Bremerhaven", "Recklinghausen", "Bergisch Gladbach", "Erlangen", "Jena", "Remscheid", "Trier", "Salzgitter", "Moers", "Siegen", "Hildesheim", "Cottbus", "Gütersloh", "Kaiserslautern", "Witten", "Hanau", "Schwerin", "Ludwigsburg", "Esslingen", "Gera", "Iserlohn"
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

# --- PRODUCT CONFIGURATION ---
products = [
    {
        "id": "lego_monster_jam",
        "name": "LEGO Technic Monster Jam Dragon (42149)",
        "count": 234,
        "price": "19,99 €",
        "category": "Technic",
        "image": "assets/lego_monster_jam_dragon.png",
        "keywords": ["Monster Truck", "Rückziehmotor", "Dragon Design", "Robust", "Cooles Geschenk", "Mein Sohn liebt es", "Toller Bauspaß", "Stabil"]
    },
    {
        "id": "lego_botanical",
        "name": "LEGO Icons Botanical Collection (10329)",
        "count": 839,
        "price": "49,99 €",
        "category": "Icons",
        "image": "assets/lego_botanical_collection.png",
        "keywords": ["Wunderschöne Deko", "Pflanzen", "Sieht echt aus", "Entspannend", "Tolle Farben", "Für Erwachsene", "Schöner Hingucker", "Kreativ"]
    },
    {
        "id": "lego_creator_horse",
        "name": "LEGO Creator Prächtiges Ross (31166)",
        "count": 156,
        "price": "29,99 €",
        "category": "Creator 3-in-1",
        "image": "assets/lego_creator_horse.png",
        "keywords": ["Pferd", "3-in-1 Set", "Tolle Tiere", "Beweglich", "Kreativ", "Meine Tochter ist begeistert", "Schönes Design", "Gutes Preis-Leistungs-Verhältnis"]
    },
    {
        "id": "lego_star_wars_k2so",
        "name": "LEGO Star Wars Sicherheitsdroide K-2SO (75434)",
        "count": 567,
        "price": "99,99 €",
        "category": "Star Wars",
        "image": "assets/lego_star_wars_k2so.png",
        "keywords": ["K-2SO", "Rogue One", "Droiden", "Detailliert", "Sammlerstück", "Muss man haben", "Star Wars Fan", "Großartig"]
    },
    {
        "id": "lego_technic_jesko",
        "name": "LEGO Technic Koenigsegg Jesko Absolut (42173)",
        "count": 412,
        "price": "52,99 €",
        "category": "Technic",
        "image": "assets/lego_technic_koenigsegg.png",
        "keywords": ["Hypercar", "Schnell", "Koenigsegg", "Grau", "Motor", "Technik-Funktionen", "V8 Motor", "Rennwagen"]
    },
    {
        "id": "lego_star_wars_mtt",
        "name": "LEGO Star Wars MTT (75435)",
        "count": 923,
        "price": "149,99 €",
        "category": "Star Wars",
        "image": "assets/lego_star_wars_mtt.png", # Placeholder if missing
        "keywords": ["MTT", "Separatisten", "Kampfdroiden", "Großes Set", "Spielspaß", "Nostalgie", "Truppentransporter", "Viele Figuren"]
    },
    {
        "id": "lego_speed_champions",
        "name": "LEGO Speed Champions Lamborghini (77238)",
        "count": 345,
        "price": "44,99 €",
        "category": "Speed Champions",
        "image": "assets/lego_speed_champions_lambo.png", # Placeholder if missing
        "keywords": ["Lamborghini", "Rennautos", "Zwei Autos", "Detailreich", "Schnell gebaut", "Sammlung erweitert", "Huracán", "Revuelto"]
    },
    {
        "id": "lego_harry_potter",
        "name": "LEGO Harry Potter Schloss Hogwarts (76454)",
        "count": 678,
        "price": "169,99 €",
        "category": "Harry Potter",
        "image": "assets/lego_harry_potter_hogwarts.png", # Placeholder if missing
        "keywords": ["Hogwarts", "Zauberei", "Große Halle", "Minifiguren", "Magisch", "Für Fans", "Detailliertes Schloss", "Harry Potter"]
    },
    {
        "id": "lego_creator_panda",
        "name": "LEGO Creator 3-in-1 Pandafamilie (31165)",
        "count": 215,
        "price": "34,99 €",
        "category": "Creator 3-in-1",
        "image": "assets/lego_creator_panda.png", # Placeholder if missing
        "keywords": ["Panda", "Süß", "Bambus", "3 Modelle", "Tiere", "Kinder lieben es", "Beweglich", "Natur"]
    },
    {
        "id": "lego_city_bulldozer",
        "name": "LEGO City Gelber Bulldozer (60466)",
        "count": 189,
        "price": "24,99 €",
        "category": "City",
        "image": "assets/lego_city_bulldozer.png", # Placeholder if missing
        "keywords": ["Baustelle", "Bulldozer", "Ketten", "Baustellenfahrzeug", "Robustes Spielzeug", "Toll für Kinder", "City Welt", "Gelb"]
    },
    {
        "id": "lego_classic_box",
        "name": "LEGO Classic Große Bausteine-Box (10698)",
        "count": 1245,
        "price": "39,99 €",
        "category": "Classic",
        "image": "assets/lego_classic_box.png", # Placeholder if missing
        "keywords": ["Steine", "Kreativität", "Viele Teile", "Bauen ohne Ende", "Klassiker", "Bunte Mischung", "Grundausstattung", "Box ist praktisch"]
    },
    {
        "id": "lego_jedi_bob",
        "name": "LEGO Star Wars Jedi Bobs Sternjäger (75388)",
        "count": 398,
        "price": "39,99 €",
        "category": "Star Wars",
        "image": "assets/lego_star_wars_jedi_bob.png", # Placeholder
        "keywords": ["Jedi Bob", "Kultfigur", "Sternjäger", "Lustig", "Besonderes Set", "Raumschiff", "Cooles Design", "Star Wars Legende"]
    },
    {
        "id": "lego_simba",
        "name": "LEGO Disney Simba, das Löwenjunge (43243)",
        "count": 456,
        "price": "19,99 €",
        "category": "Disney",
        "image": "assets/lego_disney_simba.png", # Placeholder
        "keywords": ["Simba", "König der Löwen", "Süß", "Beweglicher Kopf", "Disney Magie", "Geschenkidee", "Niedlich", "Einfach zu bauen"]
    }
]

# --- TEXT GENERATION ---
openers = ["Habe das Set für meinen Sohn gekauft.", "Endlich aufgebaut!", "Als Geschenk besorgt.", "Musste ich einfach haben.", "Tolles Set.", "LEGO enttäuscht nie.", "War ein Spontankauf.", "Lange drauf gewartet.", "Schnelle Lieferung wie immer."]
closers = ["Klare Kaufempfehlung.", "Würde ich wieder kaufen.", "5 Sterne.", "Einfach klasse.", "Super Preis-Leistung.", "Macht sich gut im Regal.", "Der Aufbau hat Spaß gemacht.", "Top Qualität.", "Sehr zufrieden."]

def generate_review_text(keywords, used_texts):
    attempts = 0
    while True:
        attempts += 1
        k1 = random.choice(keywords)
        k2 = random.choice(keywords)
        opener = random.choice(openers)
        closer = random.choice(closers)
        
        text = f"{opener} {k1} ist super umgesetzt. Besonders {k2} gefällt mir gut. {closer}"
        
        if text not in used_texts:
            return text
        if attempts > 200: return text + "."

def create_product_page(prod):
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
                        <button onclick="downloadCSV()" class="download-btn">CSV</button>
                        <button onclick="downloadExcel()" class="download-btn excel-btn">Excel</button>
                        <button onclick="downloadNumbers()" class="download-btn numbers-btn">Numbers</button>
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
                            <th class="col-content">Bewertungstext <button onclick="copyColumn('content')" class="copy-btn">📋</button></th>
                            <th class="col-name">Name <button onclick="copyColumn('customer_name')" class="copy-btn">📋</button></th>
                            <th class="col-date">Datum <button onclick="copyColumn('date')" class="copy-btn">📋</button></th>
                        </tr>
                    </thead>
                    <tbody id="reviews-tbody"></tbody>
                </table>
            </div>
        </main>
    </div>
    <script src="https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/xlsx.full.min.js"></script>
    <script src="reviews_data_{prod['id']}.js"></script>
    <script src="script.js"></script>
</body>
</html>"""
    
    with open(f"{prod['id']}.html", "w", encoding="utf-8") as f:
        f.write(html_template)

def main():
    print("Starting bulk generation for 13 LEGO products...")
    
    # 1. Generate Data & Pages
    for prod in products:
        print(f"Processing {prod['name']}...")
        
        reviews = []
        used_texts = set()
        start = datetime(2025, 1, 1)
        end = datetime(2026, 1, 24)
        
        for _ in range(prod['count']):
            text = generate_review_text(prod['keywords'], used_texts)
            used_texts.add(text)
            name = generate_customer_name()
            
            reviews.append({
                "rating": 5,
                "title": "",
                "content": text,
                "customer_name": name,
                "date": generate_date(start, end)
            })
            
        reviews.sort(key=lambda x: x['date'], reverse=True)
        
        js_content = f"const REVIEWS_DATA = {json.dumps(reviews, indent=2, ensure_ascii=False)};"
        with open(f"reviews_data_{prod['id']}.js", "w", encoding="utf-8") as f:
            f.write(js_content)
            
        create_product_page(prod)
        
    print("All data and pages generated.")

if __name__ == "__main__":
    main()
