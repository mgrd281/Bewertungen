import json
import random
from datetime import datetime, timedelta
import os

# --- SHARED DATA ---
# Using the standard names/cities list
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

# --- REVIEW TEXT COMPONENTS (CARE/GROOMING THEMED) ---

shorts = [
    "Sehr gut.", "Top Produkt.", "Bin zufrieden.", "Klare Empfehlung.",
    "Schnelle Lieferung.", "Macht was es soll.", "Angenehm.", "Alles bestens.",
    "Gutes Preis-Leistungs-Verhältnis.", "Klasse.", "Gute Qualität.",
    "Riecht gut.", "Schneidet gut.", "Sanft zur Haut.", "Mein Favorit.",
    "Werde ich wieder kaufen.", "Perfekt.", "Sehr ergiebig.", "Hält lange.",
    "5 Sterne.", "Danke.", "Super.", "Gefällt mir.", "Alles okay."
]

openers = [
    "Benutze das Produkt jetzt seit einer Woche und bin begeistert.",
    "Habe lange nach so etwas gesucht und endlich gefunden.",
    "Die Lieferung ging super schnell, war am nächsten Tag da.",
    "Ich habe empfindliche Haut, aber dieses Produkt vertrage ich super.",
    "Wurde mir von einem Freund empfohlen.",
    "Das ist jetzt schon meine zweite Bestellung.",
    "Endlich ein Produkt, das hält was es verspricht.",
    "War erst skeptisch, aber das Ergebnis überzeugt.",
    "Mein Mann ist sehr zufrieden damit.",
    "Nutze es täglich und möchte es nicht mehr missen.",
    "Für den Preis unschlagbar.",
    "Die Verpackung war sehr gut und sicher.",
    "Habe es im Angebot gekauft und bin positiv überrascht.",
    "Ein tolles Geschenk für meinen Partner.",
    "Die Qualität ist wie erwartet sehr hoch.",
    "Kann die guten Bewertungen nur bestätigen.",
    "Riecht sehr angenehm und nicht zu aufdringlich.",
    "Fühlt sich sehr hochwertig an.",
    "Endlich keine Hautirritationen mehr.",
    "Super Alternative zu den teuren Marken."
]

middles_tech = [
    "Der Akku hält wirklich ewig, musste noch nicht laden.",
    "Die Klingen sind extrem scharf und gründlich.",
    "Liegt sehr gut in der Hand und ist nicht zu schwer.",
    "Die Reinigung ist kinderleicht unter Wasser.",
    "Der Motor ist sehr leise, was ich angenehm finde.",
    "Lässt sich präzise einstellen für verschiedene Längen.",
    "Aufladen geht super schnell.",
    "Das Zubehör ist umfangreich und nützlich.",
    "Auch unter der Dusche problemlos nutzbar.",
    "Die Verarbeitung wirkt sehr stabil und langlebig."
]

middles_effect = [
    "Die Haut fühlt sich danach sehr weich und gepflegt an.",
    "Der Duft hält lange an, ist aber nicht penetrant.",
    "Schäumt gut auf und ist sehr ergiebig.",
    "Zieht schnell ein und fettet nicht.",
    "Meine Haut hat sich deutlich verbessert.",
    "Hinterlässt ein frisches Gefühl.",
    "Kein Brennen oder Rötungen nach der Anwendung.",
    "Haare fühlen sich kräftiger und gesünder an.",
    "Reinigt sehr gründlich, man fühlt sich wie neu.",
    "Spendet viel Feuchtigkeit, gerade jetzt im Winter."
]

closers = [
    "Werde dabei bleiben.",
    "Kann ich nur weiterempfehlen.",
    "Daumen hoch!",
    "Kauf ich definitiv wieder.",
    "Ihr habt einen neuen Stammkunden.",
    "Preis/Leistung past einfach.",
    "Bin rundum glücklich damit.",
    "Vielen Dank.",
    "Absolute Kaufempfehlung.",
    "5 Sterne von mir.",
    "Top, weiter so.",
    "Einfach klasse.",
    "Lohnt sich.",
    "Super Shop, super Ware.",
    "Alles richtig gemacht.",
    "Nie mehr ohne.",
    "Klare 10/10.",
    "Besser geht es nicht.",
    "Sehr zu empfehlen."
]

def generate_review_text(keywords, used_texts):
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        parts = []
        
        if r_type < 0.20:
            parts.append(random.choice(shorts))
            if random.random() < 0.3:
                parts.append(random.choice(["Danke!", "Top.", "Bin zufrieden."]))
        
        elif r_type < 0.60:
            parts.append(random.choice(openers))
            if random.random() < 0.4 and keywords:
                k = random.choice(keywords)
                parts.append(f"Besonders {k} gefällt mir gut.")
            else:
                context = random.choice([middles_tech, middles_effect])
                parts.append(random.choice(context))
            parts.append(random.choice(closers))
            
        else:
            parts.append(random.choice(openers))
            parts.append(random.choice(middles_tech))
            if keywords: 
                k = random.choice(keywords)
                parts.append(f"Das Feature {k} ist klasse.")
            parts.append(random.choice(middles_effect))
            parts.append(random.choice(closers))
        
        text = " ".join(parts)
        text = text.replace("  ", " ")
        
        if text not in used_texts:
            return text
        
        if attempts > 500:
            return text + " ."

# --- PRODUCT CONFIGURATION (23 PRODUCTS) ---
products = [
    # Shavers & Trimmers
    {"id": "care_oneblade", "name": "Philips OneBlade Face + Body (QP2630/30)", "count": 1450, "price": "44,99 €", "category": "Rasierer", "keywords": ["OneBlade", "Klinge", "Body-Aufsatz", "Hautschutz", "Akku"], "image": "assets/oneblade.png"},
    {"id": "care_braun_s5", "name": "Braun Series 5 Elektrorasierer (50-B1200s)", "count": 890, "price": "79,99 €", "category": "Rasierer", "keywords": ["Gründlichkeit", "EasyClean", "Nassrasur", "Aufsatz", "Li-Ion"], "image": "assets/braun_s5.png"},
    {"id": "care_gillette_fusion", "name": "Gillette Fusion5 Rasierklingen (8 Stück)", "count": 3200, "price": "24,99 €", "category": "Klingen", "keywords": ["Scharf", "Gleitstreifen", "Präzisionstrimmer", "Haltbarkeit", "Sanft"], "image": "assets/fusion5.png"},
    {"id": "care_mach3", "name": "Gillette Mach3 Rasierer + 2 Klingen", "count": 2100, "price": "9,99 €", "category": "Rasierer", "keywords": ["Klassiker", "3 Klingen", "Griff", "Sanft", "Preiswert"], "image": "assets/mach3.png"},
    {"id": "care_trimmer_bt3221", "name": "Braun Barttrimmer BT3221", "count": 650, "price": "29,99 €", "category": "Trimmer", "keywords": ["Präzisionsrad", "Längeneinstellung", "Scharf", "Akku", "Handlich"], "image": "assets/braun_bt.png"},
    {"id": "care_philips_hc5630", "name": "Philips Hairclipper Series 5000 (HC5630/15)", "count": 540, "price": "39,99 €", "category": "Haarschneider", "keywords": ["Turbo-Modus", "Schnittbreite", "Akku", "Abwaschbar", "Schnell"], "image": "assets/philips_hc.png"},
    {"id": "care_wilkinson_hydro", "name": "Wilkinson Sword Hydro 5 Skin Protection", "count": 820, "price": "12,99 €", "category": "Rasierer", "keywords": ["Gel-Reservoir", "Hautschutz", "5 Klingen", "Sanft", "Kippkopf"], "image": "assets/hydro5.png"},
    {"id": "care_venus_smooth", "name": "Gillette Venus Extra Smooth Damenrasierer", "count": 980, "price": "14,99 €", "category": "Damenrasierer", "keywords": ["Glatt", "5 Klingen", "Beweglich", "Handstück", "Sanft"], "image": "assets/venus.png"},
    
    # Dental Care
    {"id": "care_oralb_pro3", "name": "Oral-B Pro 3 3000 Elektrische Zahnbürste", "count": 1850, "price": "49,99 €", "category": "Zahnpflege", "keywords": ["Andruckkontrolle", "Putzgefühl", "Akku", "Timer", "Sauber"], "image": "assets/oralb_pro3.png"},
    {"id": "care_sonicare_4300", "name": "Philips Sonicare ProtectiveClean 4300", "count": 1600, "price": "59,99 €", "category": "Zahnpflege", "keywords": ["Schalltechnologie", "Drucksensor", "Zähne glatt", "Akku", "Weiß"], "image": "assets/sonicare.png"},
    {"id": "care_elmex_gelee", "name": "Elmex Gelee (25g)", "count": 450, "price": "8,99 €", "category": "Zahnpflege", "keywords": ["Kariesschutz", "Fluorid", "Wöchentlich", "Zahnarzt", "Wirksam"], "image": "assets/elmex.png"},
    {"id": "care_meridol", "name": "Meridol Zahnpasta Doppelpack", "count": 780, "price": "6,99 €", "category": "Zahnpflege", "keywords": ["Zahnfleisch", "Balsam", "Mild", "Schutz", "Pflege"], "image": "assets/meridol.png"},
    {"id": "care_listerine", "name": "Listerine Cool Mint Mundspülung (600ml)", "count": 920, "price": "4,49 €", "category": "Zahnpflege", "keywords": ["Frische", "Scharf", "Sauberkeit", "Atem", "Täglich"], "image": "assets/listerine.png"},

    # Skin & Hair Care
    {"id": "care_nivea_men", "name": "NIVEA MEN Creme (150ml Dose)", "count": 2400, "price": "3,49 €", "category": "Pflege", "keywords": ["Duft", "Feuchtigkeit", "Nicht fettend", "Klassiker", "Nach Rasur"], "image": "assets/nivea_men.png"},
    {"id": "care_loreal_energy", "name": "L'Oréal Men Expert Hydra Energy Feuchtigkeitspflege", "count": 1100, "price": "6,99 €", "category": "Pflege", "keywords": ["Wachmacher", "Frisch", "Zieht ein", "Vitamin C", "Morgens"], "image": "assets/loreal_energy.png"},
    {"id": "care_alpecin_c1", "name": "Alpecin Coffein-Shampoo C1 (250ml)", "count": 1350, "price": "5,49 €", "category": "Haarpflege", "keywords": ["Haarausfall", "Starkes Haar", "Kribbeln", "Wachstum", "Duft"], "image": "assets/alpecin.png"},
    {"id": "care_head_shoulders", "name": "Head & Shoulders Classic Clean (500ml)", "count": 1900, "price": "4,99 €", "category": "Haarpflege", "keywords": ["Schuppenfrei", "Duft", "Große Flasche", "Klassiker", "Sauber"], "image": "assets/h_and_s.png"},
    {"id": "care_dove_men", "name": "Dove Men+Care Pflegedusche Clean Comfort", "count": 870, "price": "2,49 €", "category": "Dusche", "keywords": ["Frische", "Hautgefühl", "Feuchtigkeit", "Angenehm", "Täglich"], "image": "assets/dove_men.png"},
    {"id": "care_old_spice", "name": "Old Spice Original Deodorant Stick", "count": 600, "price": "3,29 €", "category": "Deo", "keywords": ["Männerduft", "Hält lange", "Kein Alu", "Klassiker", "Frisch"], "image": "assets/old_spice.png"},
    {"id": "care_rexona_men", "name": "Rexona Men MotionSense Deo Spray", "count": 720, "price": "2,29 €", "category": "Deo", "keywords": ["Schutz", "Sport", "Bewegung", "Trocken", "Hält"], "image": "assets/rexona.png"},
    {"id": "care_sebamed", "name": "Sebamed Flüssig Wasch-Emulsion (400ml)", "count": 550, "price": "4,99 €", "category": "Pflege", "keywords": ["pH-Wert", "Empfindlich", "Seifenfrei", "Hautschutz", "Mild"], "image": "assets/sebamed.png"},
    {"id": "care_braun_epil9", "name": "Braun Silk-épil 9 Epilierer", "count": 480, "price": "99,99 €", "category": "Epilierer", "keywords": ["Gründlich", "Schmerzarm", "Licht", "Aufsätze", "Glatt"], "image": "assets/braun_epil.png"},
    {"id": "care_lumea", "name": "Philips Lumea IPL Haarentfernungsgerät", "count": 340, "price": "349,00 €", "category": "IPL", "keywords": ["Dauerhaft", "Lichtimpuls", "Einfach", "Ergebnis", "Zuhause"], "image": "assets/lumea.png"}
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
    print("Starting bulk generation for Care products...")
    
    start_date = datetime(2025, 4, 1)
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
