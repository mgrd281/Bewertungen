import csv
import random
import json
from datetime import datetime, timedelta

# --- DATA BANKS (ARABIC) ---

names = [
    "أحمد", "محمد", "خالد", "سارة", "نور", "علي", "فهد", "عبدالله", "عمر", "يوسف",
    "إبراهيم", "حسين", "حسن", "سعيد", "سلمان", "ماجد", "فيصل", "تركي", "ناصر", "وليد",
    "ياسر", "زياد", "طارق", "سامي", "رائد", "عمار", "محمود", "جمال", "هشام", "مصطفى",
    "أيمن", "سمير", "نبيل", "كريم", "حاتم", "رامي", "باسل", "شادي", "عادل", "مازن",
    "نورة", "ريم", "مها", "منى", "ليلى", "فاطمة", "زينب", "هند", "أمل", "عبير",
    "هدى", "سلوى", "نجلاء", "شيماء", "لمياء", "غادة", "رنا", "داليا", "هبة", "ياسمين"
]

# Topics & Contexts
# 1. Project Management / Professional
# 2. Construction / Engineering
# 3. IT / Tech
# 4. Freelance / Small Business
# 5. General / Stability / Value

openers = [
    "برنامج ممتاز جدًا.",
    "أخيرًا اشتريت النسخة الكاملة.",
    "أداة أساسية لكل مدير مشروع.",
    "سعيد جدًا بهذا الشراء.",
    "كنت أبحث عن نسخة 2016 تحديدًا.",
    "أفضل برنامج لإدارة المشاريع بلا منازع.",
    "تجربة شراء ممتازة.",
    "البرنامج يعمل بكفاءة عالية.",
    "لا غنى عنه في العمل اليومي.",
    "استثمار يستحق كل ريال.",
    "كنت مترددًا في البداية لكن الآن مرتاح.",
    "وصل الكود فورًا بعد الدفع.",
    "الحل الأمثل لتنظيم المهام.",
    "ممتاز للمحترفين.",
    "أنصح به بشدة.",
    "فرق كبير بينه وبين الأدوات المجانية.",
    "نسخة أصلية ومفعلة 100%.",
    "شكرًا على الخدمة السريعة.",
    "البرنامج مستقر جدًا على ويندوز 10.",
    "أفضل ما في الأمر أنه دفع مرة واحدة."
]

middles_construction = [
    "أستخدمه في إدارة موقع البناء والجدول الزمني دقيق جدًا.",
    "يساعدني في تتبع مراحل البناء وموارد المشروع.",
    "مثالي لحساب وتوزيع ساعات العمل للعمال.",
    "لا يمكنني إدارة مشاريع المقاولات بدونه.",
    "المخططات الزمنية (Gantt Charts) واضحة جدًا للعملاء.",
    "سهل عليّ تنظيم جداول التوريد والتسليم.",
    "رائع لتقدير التكاليف وإدارة الميزانية في المشاريع الإنشائية."
]

middles_it = [
    "متوافق تمامًا مع بيئة العمل لدينا.",
    "أستخدمه لتخطيط دورة حياة تطوير البرمجيات (SDLC).",
    "تكامل ممتاز مع أدوات أوفيس الأخرى.",
    "ساعدني في تتبع الـ Sprints والمهام التقنية.",
    "التقارير مفيدة جدًا لعرضها على الإدارة.",
    "نسخة 2016 خفيفة ومستقرة مقارنة بالنسخ الأحدث.",
    "التثبيت كان سهلاً ولم أواجه مشاكل توافق."
]

middles_business = [
    "أفضل بكثير من إكسل في إدارة المهام المعقدة.",
    "ساعد فريقي على البقاء منظمًا والالتزام بالمواعيد.",
    "نظام التقارير يوفر علي ساعات من العمل اليدوي.",
    "شريته للشركة والكل مرتاح معه.",
    "يغني عن الاشتراكات الشهرية المكلفة.",
    "السعر مقابل القيمة ممتاز جداً.",
    "أقدر الآن متابعة تقدم المشروع لحظة بلحظة."
]

middles_general = [
    "التفعيل تم عبر الهاتف/الإنترنت بدون تعقيد.",
    "الكود وصلني فورًا وعمل مباشرة.",
    "أعجبني أنه لا يحتاج لتجديد سنوي.",
    "الواجهة مألوفة وسهلة الاستخدام.",
    "خدمة العملاء ساعدوني في خطوة التثبيت.",
    "كل شيء كما هو موضح في الوصف.",
    "كنت أستخدم نسخة تجريبية، والفرق شاسع.",
    "البرنامج سريع الاستجابة ولا يعلق.",
    "خيار ممتاز لمن يريد الميزات الأساسية بسعر معقول."
]

closers = [
    "أنصح به.",
    "شكرًا لكم.",
    "تجربة 5 نجوم.",
    "سأشتري مرة أخرى.",
    "بالتأكيد يستحق الشراء.",
    "ممتاز.",
    "جبار.",
    "الله يعطيكم العافية.",
    "خدمة رائعة.",
    "لا تتردد في الشراء.",
    "أنصح كل زملائي به.",
    "أفضل صفقة وجدتها.",
    "تقييمي 10/10.",
    "وفر علي الكثير من الوقت.",
    "بالتوفيق.",
    "شكراً على المصداقية.",
    "سعر منافس وخدمة توب."
]

# Short reviews (1-2 sentences)
shorts = [
    "برنامج رائع.", "ممتاز.", "خدمة سريعة وممتازة.", "الكود يعمل 100%.",
    "أفضل برنامج لإدارة المشاريع.", "سعر بطل.", "شكرًا لكم.",
    "تجربة موفقة.", "كل شيء تمام.", "النسخة أصلية.", "وصلني الكود بثواني.",
    "أنصح بالتعامل معهم.", "برنامج ممتاز للمهندسين.", "أداة قوية وعملية.",
    "لا غنى عنه.", "تفعيل فوري.", "خدمة العملاء ممتازة.", "سعر وتفعيل ولا أروع.",
    "شغال زي الحلاوة.", "تمام التمام.", "منتج أصلي.", "تستاهلون ٥ نجوم."
]

def generate_date():
    """Generates a random date between 01.10.2025 and 24.01.2026."""
    start_date = datetime(2025, 10, 1)
    end_date = datetime(2026, 1, 24)
    days_diff = (end_date - start_date).days
    random_days = random.randint(0, days_diff)
    random_date = start_date + timedelta(days=random_days)
    return random_date.strftime("%Y-%m-%d") # Format requested in instructions (CSV friendly)

def generate_rating():
    """4 or 5 stars."""
    return random.choice([4, 5, 5, 5]) # Heavily weighted to 5

def generate_unique_review(existing_reviews):
    """Generates a text guaranteed to be unique within the provided set."""
    attempts = 0
    while True:
        attempts += 1
        r_type = random.random()
        
        parts = []
        
        if r_type < 0.2: # 20% Short
            parts.append(random.choice(shorts))
            
        elif r_type < 0.6: # 40% Medium (Opener + One Context + Closer)
            parts.append(random.choice(openers))
            
            # Pick a context
            context_pool = random.choice([middles_construction, middles_it, middles_business, middles_general])
            parts.append(random.choice(context_pool))
            
            parts.append(random.choice(closers))
            
        else: # 40% Long (Opener + Two Different Contexts + Closer)
             parts.append(random.choice(openers))
             
             # Pick two different contexts or different items from general
             pool1 = random.choice([middles_construction, middles_it, middles_business, middles_general])
             pool2 = random.choice([middles_construction, middles_it, middles_business, middles_general])
             
             m1 = random.choice(pool1)
             m2 = random.choice(pool2)
             
             # Avoid exact dupes in one review
             while m1 == m2:
                 m2 = random.choice(pool2)
                 
             parts.append(m1)
             parts.append(m2)
             parts.append(random.choice(closers))
        
        text = " ".join(parts)
        
        if text not in existing_reviews:
            return text
            
        if attempts > 2000:
             # Fallback if saturation reached (unlikely with this combinatorics)
             return text + " ."

def main():
    TARGET_COUNT = 274
    
    final_data = []
    used_texts = set()
    
    print(f"Generating {TARGET_COUNT} Arabic reviews for Project 2016...")
    
    while len(final_data) < TARGET_COUNT:
        name = random.choice(names)
        review_text = generate_unique_review(used_texts)
        used_texts.add(review_text)
        
        entry = {
            'rating': generate_rating(),
            'title': '',
            'content': review_text,
            'customer_name': name,
            'date': generate_date()
        }
        
        final_data.append(entry)
        
    # Sort by date
    final_data.sort(key=lambda x: x['date'], reverse=True)
    
    # Write CSV
    filename = 'reviews_project2016_ar.csv'
    # UTF-8-SIG for Excel compatibility in Arabic
    with open(filename, 'w', newline='', encoding='utf-8-sig') as f:
        writer = csv.writer(f, delimiter=';')
        writer.writerow(['rating', 'title', 'content', 'customer_name', 'date'])
        for r in final_data:
            writer.writerow([r['rating'], r['title'], r['content'], r['customer_name'], r['date']])
            
    # Write JS for immediate preview if needed
    with open('reviews_data_ar.js', 'w', encoding='utf-8') as f:
        f.write('const REVIEWS_DATA = ')
        json.dump(final_data, f, ensure_ascii=False, indent=2)
        f.write(';')
            
    print(f"Done. Files created: {filename}, reviews_data_ar.js")

if __name__ == "__main__":
    main()
