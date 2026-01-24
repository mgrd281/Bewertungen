import json
import random
from datetime import datetime, timedelta
import os

# --- SHARED DATA ---
first_names = [
    "Thomas", "Michael", "Andreas", "Stefan", "Markus", "Christian", "Daniel", "Martin", "Alexander", "David", 
    "Tobias", "Patrick", "Jan", "Sebastian", "Matthias", "Peter", "Johannes", "Florian", "Klaus", "Jürgen", 
    "Bernd", "Uwe", "Sven", "Frank", "Julia", "Sarah", "Anna", "Lisa", "Laura", "Sandra", "Christina", 
    "Melanie", "Nicole", "Nadine", "Sabine", "Stefanie", "Andrea", "Katharina", "Maria", "Monika", 
    "Birgit", "Petra", "Kerstin", "Susanne", "Anja", "Silke", "Manuela", "Martina", "Heike", "Katja",
    "Lukas", "Paul", "Jonas", "Felix", "Leon", "Finn", "Noah", "Elias", "Luis", "Ben", "Luca", "Milan", "Henry", "Maximilian", "Theo", "Matteo", "Oskar", "Emil", "Liam", "Anton", "Julian", "David", "Philipp", "Alexander", "Jannik", "Niklas", "Tom", "Jan", "Tim", "Moritz", "Fabian", "Simon", "Samuel", "Tobias", "Florian", "Johannes", "Max", "Hannes", "Erik", "Marlon", "Kevin", "Dennis", "Justus", "Leo", "Mats", "Benedikt", "Christoph", "Dominik", "Kilian", "Lenny", "Malte", "Nico", "Robin", "Sascha", "Timo", "Valentin", "Vincent", "Yannick", "Adrian", "Arne", "Bastian"
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
    {"id": "boss_1513340", "name": "Hugo Boss Herrenuhr 1513340", "price": "149,00 €", "keywords": ["Elegant", "Gold-Blau", "Klassiker", "Tolle Uhr", "Hingucker"]},
    {"id": "boss_1513838", "name": "Boss Chronograph 1513838", "price": "299,00 €", "keywords": ["Edelstahl", "Sportlich", "Robust", "Mein Favorit", "Qualität"]},
    {"id": "boss_1513907", "name": "Boss Chronograph 1513907", "price": "329,00 €", "keywords": ["Modern", "Schwarz", "Business", "Stilvoll", "Perfektes Geschenk"]},
    {"id": "boss_1513757", "name": "Boss Chronograph 1513757", "price": "279,00 €", "keywords": ["Silber", "Zeitlos", "Passt immer", "Sehr schick", "Gute Verarbeitung"]},
    {"id": "boss_bracelet", "name": "Elegantes Boss Lederarmband", "price": "59,00 €", "keywords": ["Leder", "Accessoire", "Passt zur Uhr", "Weich", "Edel"]},
    {"id": "boss_1513908", "name": "Boss Chronograph 1513908", "price": "349,00 €", "keywords": ["Admiral Serie", "Luxus", "Schwer", "Männlich", "Top Design"]},
    {"id": "boss_1513905", "name": "BOSS Admiral 1513905", "price": "319,00 €", "keywords": ["Admiral", "Chronograph", "Taucher-Look", "Massiv", "Glänzend"]},
    {"id": "boss_1513885", "name": "Hugo Boss Uhr 1513885 Grau", "price": "189,00 €", "keywords": ["Grau", "Minimalistisch", "Leicht", "Alltagsuhr", "Bequem"]},
    {"id": "boss_1513811", "name": "BOSS Chronograph ASSOCIATE 1513811", "price": "249,00 €", "keywords": ["Associate", "Roségold", "Elegant", "Anzug-Uhr", "Fein"]},
    {"id": "boss_1513848", "name": "Boss Chronograph 1513848", "price": "229,00 €", "keywords": ["Blaues Zifferblatt", "Lederarmband", "Klassisch", "Schön", "Geschenk"]},
    {"id": "boss_1513868", "name": "Boss Chronograph 1513868", "price": "269,00 €", "keywords": ["Sport-Chrono", "Funktional", "Genau", "Markant", "Boss Qualität"]},
    {"id": "boss_1513758", "name": "Boss Chronograph 1513758", "price": "289,00 €", "keywords": ["Blau", "Metallarmband", "Wasserdicht", "Stabil", "Toll"]},
    {"id": "boss_1513720", "name": "Boss Chronograph 1513720", "price": "259,00 €", "keywords": ["Gold", "Auffällig", "Statement", "Luxuriös", "Glänzt schön"]},
    {"id": "boss_1513712", "name": "Boss Chronograph 1513712", "price": "239,00 €", "keywords": ["Schwarz-Gold", "Modisch", "Trend", "Jung", "Super Preis"]},
    {"id": "boss_1513871", "name": "Boss Chronograph 1513871", "price": "299,00 €", "keywords": ["Groß", "Lesbar", "Chronometer", "Präzise", "Hochwertig"]},
    {"id": "boss_1513930", "name": "Boss GLOBETROTTER 1513930", "price": "379,00 €", "keywords": ["Globetrotter", "Weltzeit", "Reiseuhr", "Technisch", "Besonders"]},
    {"id": "boss_1513755", "name": "Boss Chronograph HERO 1513755", "price": "309,00 €", "keywords": ["Hero", "Silber-Blau", "Maskulin", "Stark", "Bestseller"]}
]

# --- TEXT BLOCKS ---
shorts = [
    "Wunderschöne Uhr.", "Top Qualität.", "Alles perfekt.", "Schnelle Lieferung.", "Sehr elegant.",
    "Besser als erwartet.", "Jeden Cent wert.", "Klasse Design.", "Absolut zufrieden.", "Typisch Boss.",
    "Einfach edel.", "Toller Hingucker.", "Preis-Leistung stimmt.", "Gerne wieder.", "Hervorragend.",
    "Massiv und wertig.", "Passt perfekt.", "Schneller Versand.", "Super verpackt.", "5 Sterne!"
]

openers = [
    "Habe mir diese Uhr als Belohnung gekauft.", "Ein wirklich tolles Stück.", "Die Uhr sieht am Handgelenk fantastisch aus.",
    "War ein Geschenk für meinen Mann, er ist begeistert.", "Die Lieferung war extrem schnell und sicher verpackt.",
    "Ich bin von der Verarbeitung absolut überzeugt.", "Diese Boss Uhr ist ein echter Klassiker.",
    "Habe lange überlegt und mich dann für dieses Modell entschieden.", "Die Optik ist einfach unschlagbar.",
    "Schon beim Auspacken merkt man die Qualität.", "Eine sehr stilvolle Uhr für jeden Anlass.",
    "Die Details am Zifferblatt sind hervorragend gearbeitet.", "Das Armband trägt sich sehr angenehm.",
    "Endlich eine Uhr, die sowohl sportlich als auch elegant ist.", "Boss enttäuscht einfach nie.",
    "Die Farbkombination ist in Natura noch schöner als auf den Bildern.", "Ich trage sie jetzt seit einer Woche und liebe sie.",
    "Die Ganggenauigkeit ist bisher tadellos.", "Ein massives Gehäuse, das trotzdem nicht zu schwer wirkt.",
    "Perfekte Ergänzung zu meinem Business-Outfit."
]

middles_aesthetics = [
    "Das Design ist zeitlos und passt zu fast allem.", "Besonders das Zifferblatt reflektiert das Licht wunderschön.",
    "Die Verarbeitung der Kanten und des Gehäuses ist makellos.", "Die Indizes sind sauber gesetzt und gut lesbar.",
    "Ein echtes Statement-Piece, auf das ich schon oft angesprochen wurde.", "Die Kombination aus Materialien wirkt sehr hochwertig.",
    "Das Logo ist dezent aber präsent integriert.", "Die Zeiger bewegen sich sehr präzise.",
    "Man sieht sofort, dass es sich um ein Markenprodukt handelt.", "Die Schließe am Armband wirkt sehr stabil und sicher."
]

middles_usage = [
    "Das Einstellen der Uhrzeit und des Datums war kinderleicht.", "Die Chronographen-Funktionen arbeiten einwandfrei.",
    "Auch nach längerem Tragen spürt man sie kaum am Arm.", "Die Wasserdichtigkeit ist für den Alltag mehr als ausreichend.",
    "Das Glas scheint sehr robust gegen Kratzer zu sein.", "Die Leuchtzeiger sind im Dunkeln gut erkennbar.",
    "Man kann die Uhr sowohl im Büro als auch in der Freizeit tragen.", "Das Kürzen des Metallarmbands ging problemlos.",
    "Sie hält die Zeit extrem genau, keine spürbare Abweichung.", "Die Bedienung der Drücker fühlt sich wertig an."
]

closers = [
    "Ich kann diese Uhr absolut weiterempfehlen.", "Klare Kaufempfehlung für alle Boss-Fans.",
    "Würde sie jederzeit wieder kaufen.", "Ein tolles Preis-Leistungs-Verhältnis.",
    "Bin rundum zufrieden mit diesem Kauf.", "Verdiente 5 Sterne für dieses Prachtstück.",
    "Wer eine schicke Markenuhr sucht, ist hier richtig.", "Danke an Karinex für den tollen Service.",
    "Ich werde sicher noch weitere Modelle bestellen.", "Ein Must-have in jeder Uhrensammlung."
]

def generate_review_text(keywords, used_texts):
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        parts = []
        
        if r_type < 0.2: # Short
            parts.append(random.choice(shorts))
            if random.random() < 0.3:
                parts.append(random.choice(closers))
        elif r_type < 0.6: # Medium
            parts.append(random.choice(openers))
            parts.append(f"Das Modell wirkt sehr {random.choice(keywords).lower()}.")
            parts.append(random.choice(middles_aesthetics + middles_usage))
            parts.append(random.choice(closers))
        else: # Long
            parts.append(random.choice(openers))
            parts.append(random.choice(middles_aesthetics))
            parts.append(f"Besonders die Eigenschaft {random.choice(keywords)} hat mich überzeugt.")
            parts.append(random.choice(middles_usage))
            if random.random() < 0.5:
                parts.append(f"Insgesamt ein {random.choice(keywords)}es Produkt.")
            parts.append(random.choice(closers))
            
        text = " ".join(parts).replace("  ", " ")
        if text not in used_texts:
            return text
        if attempts > 500: return text + " ."

def create_product_page(prod):
    # Same template as before but with potential enhancements
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
    print("Starting ADVANCED bulk generation for 17 BOSS products...")
    
    # Generate Data & Pages
    for prod in products:
        prod['count'] = random.randint(300, 850) # Higher counts for more realism
        print(f"Processing {prod['name']} with {prod['count']} reviews...")
        
        reviews = []
        used_texts = set()
        # Dates within last 12 months from today (2026-01-24)
        start = datetime(2025, 1, 24)
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
        
    print("All BOSS data and pages regenerated with V2 script.")

if __name__ == "__main__":
    main()
