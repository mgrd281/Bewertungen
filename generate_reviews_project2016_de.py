import csv
import random
import json
from datetime import datetime, timedelta

# --- CONFIGURATION ---
TARGET_COUNT = 274
START_DATE = datetime(2025, 10, 1)
END_DATE = datetime(2026, 1, 24)

# --- DATA BANKS ---

first_names = [
    "Thomas", "Michael", "Andreas", "Stefan", "Markus", "Christian", "Daniel", "Martin", "Alexander", "David", 
    "Tobias", "Patrick", "Jan", "Sebastian", "Matthias", "Peter", "Johannes", "Florian", "Klaus", "Jürgen", 
    "Bernd", "Uwe", "Sven", "Frank", "Julia", "Sarah", "Anna", "Lisa", "Laura", "Sandra", "Christina", 
    "Melanie", "Nicole", "Nadine", "Sabine", "Stefanie", "Andrea", "Katharina", "Maria", "Monika", 
    "Birgit", "Petra", "Kerstin", "Susanne", "Anja", "Silke", "Manuela", "Martina", "Heike", "Katja",
    "Ute", "Carola", "Gabi", "Renate", "Helga", "Ingrid", "Ursula", "Gabriele", "Bettina", "Barbara",
    "Angelika", "Christa", "Karin", "Brigitte", "Elisabeth", "Hannelore", "Elke", "Doris", "Marion",
    "Dieter", "Hans", "Wolfgang", "Rainer", "Werner", "Gerd", "Joachim", "Torsten", "Ralf", "Oliver",
    "Jörg", "Mario", "Timo", "Dennis", "Marco", "Fabian", "Philipp", "Lukas", "Paul", "Maximilian",
    "Tim", "Felix", "Niklas", "Simon", "Julian", "Leon", "Jonas", "Fritz", "Karl", "Heinz"
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
    "Top Programm.", "Alles bestens.", "Schnelle Mail.", "Key funktioniert 100%.",
    "Bestes PM Tool.", "Guter Preis.", "Danke!", "Sehr zufrieden.", "Gern wieder.", "Klare Empfehlung.",
    "Erfolgreicher Kauf.", "Alles ok.", "Originalware.", "Blitzschneller Mail-Versand.", "Super.",
    "Sehr zu empfehlen.", "Perfekt für Ingenieure.", "Mächtiges Tool.", "Endlich Ordnung.",
    "Unverzichtbar.", "Sofortige Aktivierung.", "Support ist klasse.", "Preis/Leistung top.",
    "Läuft wie geschmiert.", "Alles top.", "Echte Lizenz.", "Verdiente 5 Sterne.", "Klasse Software.",
    "Bin begeistert.", "Funktioniert tadellos.", "Keine Probleme.", "Schnell und einfach.",
    "Gutes Geschäft.", "Seriöser Anbieter.", "Top Software.", "Wie beschrieben.", "Sehr gut.",
    "Alles super.", "Kann nicht klagen.", "Immer wieder.", "Läuft stabil.", "Guter Service.",
    "Key kam sofort.", "Installation easy.", "Projekt läuft.", "Alles prima.", "Top Deal.",
    "5 Sterne.", "Super Preis.", "Geht doch!", "Voll zufrieden.", "Top Key.", "Einfach gut."
]

openers = [
    "Hervorragendes Programm.", "Endlich die Vollversion gekauft.", "Ein Muss für jeden Projektmanager.",
    "Bin sehr zufrieden mit dem Kauf.", "Habe gezielt nach der 2016er Version gesucht.",
    "Das beste Tool für Projektmanagement.", "Super Kaufabwicklung.", "Software läuft sehr stabil.",
    "Unverzichtbar für meine tägliche Arbeit.", "Jeden Cent wert.", "War erst skeptisch, aber bin voll überzeugt.",
    "Key kam sofort an.", "Die perfekte Lösung für Aufgabenplanung.", "Top für Profis.",
    "Kann ich nur empfehlen.", "Großer Unterschied zu kostenlosen Tools.", "Originale Lizenz, sofort aktiviert.",
    "Danke für den schnellen Service.", "Läuft einwandfrei auf Windows 10.", "Das Beste ist: Einmalzahlung, kein Abo.",
    "Ich nutze Project schon seit Jahren.", "Habe lange nach dieser Version gesucht.",
    "Für mich die beste Project -Version.", "Endlich keine Abo-Kosten mehr.", "Bin begeistert von der Stabilität.",
    "Der Kauf hat sich gelohnt.", "Ein wichtiges Werkzeug im Büro.", "Die Lizenz funktioniert einwandfrei.",
    "Guter Ersatz für mein altes Programm.", "Installation war überraschend einfach.", "Der Code kam binnen Minuten.",
    "Habe es für ein neues Großprojekt angeschafft.", "Funktioniert wie erwartet.", "Alles so, wie es sein soll.",
    "Ein solides Stück Software.", "Echte Kaufempfehlung von mir.", "Besser als die neuen Cloud-Versionen.",
    "Sehr professionelles Tool.", "Genau das, was ich brauchte.", "Schnelle und saubere Abwicklung."
]

middles_construction = [
    "Nutze es für die Bauleitung und der Zeitplan ist extrem präzise.",
    "Hilft mir sehr bei der Ressourcenplanung auf der Baustelle.",
    "Ideal, um Arbeitsstunden und Material zu kalkulieren.",
    "Ohne Project könnte ich meine Bauprojekte nicht managen.",
    "Die Gantt-Diagramme sind super übersichtlich für Kunden.",
    "Erleichtert die Koordination von Lieferterminen enorm.",
    "Klasse für die Kostenkontrolle bei großen Bauvorhaben.",
    "Planung von Gewerken läuft damit viel strukturierter.",
    "Kritische Pfade lassen sich sofort erkennen.",
    "Die Fortschrittsverfolgung ist für Baustellen essentiell.",
    "Behalte damit den Überblick über alle Subunternehmer.",
    "Verzögerungen lassen sich schnell neu durchrechnen.",
    "Perfekt für unsere Architekturbüro-Projekte.",
    "Materialfluss und Personalplanung sind jetzt im Griff.",
    "Die Meilensteine sind klar definiert und sichtbar.",
    "Unverzichtbar für die Bauphasenplanung.",
    "Erstelle damit Wochenpläne für die Poliere.",
    "Die Berichte sind wichtig für die Bauherrenbesprechung."
]

middles_it = [
    "Passt perfekt in unsere IT-Infrastruktur.",
    "Nutze es für die Planung unserer Software-Releases.",
    "Super Integration mit anderen Office-Produkten.",
    "Hilft beim Tracking von Sprints und Meilensteinen.",
    "Die Reports sind Gold wert für Meetings mit der Geschäftsführung.",
    "Die 2016er Version ist schön schlank und schnell.",
    "Installation war in 5 Minuten erledigt.",
    "Verwende es für Migrationsprojekte, läuft stabil.",
    "Ressourcenzuordnung bei Entwicklern ist damit einfach.",
    "Gute Übersicht über alle laufenden IT-Tickets und Projekte.",
    "Kompatibilität mit älteren Dateien ist gegeben.",
    "Keine Cloud-Zwang, das ist für unsere Security wichtig.",
    "Planung von Server-Wartungen klappt hervorragend.",
    "Agile Methoden lassen sich gut abbilden.",
    "Schnittstellen zu SharePoint funktionieren.",
    "Ideal für die Planung großer Rollouts.",
    "Netzwerkpläne sind schnell erstellt und übersichtlich.",
    "Bug-Tracking Integration ist indirekt gut machbar."
]

middles_business = [
    "Viel besser als Excel für komplexe Aufgaben.",
    "Mein Team ist viel organisierter seit wir es nutzen.",
    "Spart mir Stunden an manueller Arbeit jede Woche.",
    "Habe es für die Firma gekauft, alle sind zufrieden.",
    "Endlich weg von den teuren monatlichen Abos.",
    "Preis-Leistung ist hier unschlagbar.",
    "Ich kann den Projektfortschritt jetzt jederzeit genau sehen.",
    "Budgetplanung ist damit viel genauer als früher.",
    "Die Timeline-Ansicht ist super für Präsentationen.",
    "Wir nutzen es für Eventplanung, klappt super.",
    "Strategische Planung ist damit viel einfacher.",
    "Personalressourcen werden effizienter eingesetzt.",
    "Die Einarbeitungszeit war kurz, da Office-Look.",
    "Exportfunktionen nach Excel sind sehr hilfreich.",
    "Wir managen damit unsere Marketing-Kampagnen.",
    "Übersichtliche Darstellung von Abhängigkeiten.",
    "Kollaboration im Team hat sich verbessert.",
    "Fristen werden jetzt zuverlässiger eingehalten."
]

middles_general = [
    "Aktivierung ging problemlos online/telefonisch.",
    "Code war sofort da und funktionierte direkt.",
    "Finde es super, dass man es nicht jedes Jahr neu kaufen muss.",
    "Die Oberfläche ist vertraut und man findet sich schnell zurecht.",
    "Support hat mir kurz bei der Installation geholfen, top.",
    "Alles genau wie beschrieben.",
    "Hatte vorher eine Testversion, die Vollversion lohnt sich.",
    "Reagiert schnell und stürzt nicht ab.",
    "Gute Wahl für alle, die professionelle Funktionen brauchen.",
    "Download direkt von MS, das schafft Vertrauen.",
    "Keine Probleme mit der Lizenzierung bisher.",
    "Läuft auch auf meinem etwas älteren Laptop flüssig.",
    "Verkäufer hat schnell auf meine Frage reagiert.",
    "Rechnung wurde korrekt ausgestellt.",
    "Habe es einem Kollegen empfohlen, der auch zufrieden ist.",
    "Einmal kaufen, ewig nutzen - so muss das sein.",
    "Die Features sind für den Preis unglaublich.",
    "Bin froh, diese Version noch gefunden zu haben.",
    "Installation war selbsterklärend.",
    "Key kam per Mail, keine Wartezeit."
]

closers = [
    "Klare Kaufempfehlung.", "Vielen Dank.", "5 Sterne.", "Würde ich wieder kaufen.",
    "Lohnt sich absolut.", "Ausgezeichnet.", "Top Produkt.", "Weiter so.", "Super Service.",
    "Nicht zögern, kaufen.", "Habe es schon Kollegen empfohlen.", "Bester Deal im Netz.",
    "10 von 10 Punkten.", "Hat mir viel Stress erspart.", "Alles bestens.", "Seriöser Shop.",
    "Guter Preis, gute Leistung.", "Gerne wieder.", "Danke an den Support.", "Ein zufriedener Kunde.",
    "Kann ich nur raten.", "Daumen hoch.", "Perfekt.", "Jederzeit wieder.", "Einfach klasse.",
    "Kaufempfehlung!", "Bin wunschlos glücklich.", "So macht Arbeit Spaß.", "Danke!",
    "Ein echtes Profi-Tool.", "Gut investiertes Geld.", "Bin sehr happy.", "Alles richtig gemacht.",
    "Keine Beanstandungen.", "Top!", "Sehr gut."
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
        
        # 15% Short, 45% Medium, 40% Long
        if r_type < 0.15:
            parts.append(random.choice(shorts))
            if random.random() < 0.3: # Add a thank you sometimes
                parts.append(random.choice(["Danke!", "Top.", "Bin zufrieden."]))
                
        elif r_type < 0.60: # Medium (3-5 sentences approx)
            parts.append(random.choice(openers))
            # Pick a context
            context = random.choice([middles_construction, middles_it, middles_business, middles_general])
            parts.append(random.choice(context))
            # Maybe another middle
            if random.random() < 0.5:
                parts.append(random.choice(middles_general))
            parts.append(random.choice(closers))
            
        else: # Long (5+ sentences)
            parts.append(random.choice(openers))
            # Pick two distinct contexts
            contexts = [middles_construction, middles_it, middles_business, middles_general]
            c1 = random.choice(contexts)
            c2 = random.choice(contexts)
            
            parts.append(random.choice(c1))
            parts.append(random.choice(c2))
            parts.append(random.choice(middles_general)) # Add general statement
            
            # Maybe add one more specific detail
            if random.random() < 0.4:
                 parts.append(random.choice(c1))
                 
            parts.append(random.choice(closers))
        
        text = " ".join(parts)
        
        # Basic cleanup: double spaces
        text = text.replace("  ", " ")
        
        if text not in existing_reviews:
            return text
        
        # Fallback if we loop too long (unlikely with this many combos)
        if attempts > 500:
            return text + " ."

def generate_customer_name():
    first = random.choice(first_names)
    last_init = random.choice(last_initials)
    city = random.choice(cities)
    return f"{first} {last_init}. aus {city}"

def main():
    print(f"Generating {TARGET_COUNT} reviews...")
    
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
    
    # 1. Write CSV
    csv_filename = 'reviews_project2016_de.csv'
    with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f, delimiter=';')
        writer.writerow(['rating', 'title', 'content', 'customer_name', 'date'])
        for r in reviews:
            writer.writerow([r['rating'], r['title'], r['content'], r['customer_name'], r['date']])
            
    print(f"CSV written to {csv_filename}")
    
    # 2. Write JS
    js_filename = 'reviews_data_project2016.js'
    js_content = f"const REVIEWS_DATA = {json.dumps(reviews, indent=2, ensure_ascii=False)};"
    
    with open(js_filename, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"JS written to {js_filename}")

if __name__ == "__main__":
    main()
