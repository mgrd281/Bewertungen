from PIL import Image, ImageDraw, ImageFont
import os

# Ensure assets directory exists
if not os.path.exists("assets"):
    os.makedirs("assets")

# List of missing care product images (filenames from generate_care_products.py)
images_to_generate = [
    {"filename": "oneblade.png", "text": "Philips\nOneBlade"},
    {"filename": "braun_s5.png", "text": "Braun\nSeries 5"},
    {"filename": "fusion5.png", "text": "Gillette\nFusion 5"},
    {"filename": "mach3.png", "text": "Gillette\nMach 3"},
    {"filename": "braun_bt.png", "text": "Braun\nTrimmer"},
    {"filename": "philips_hc.png", "text": "Philips\nHairclipper"},
    {"filename": "hydro5.png", "text": "Wilkinson\nHydro 5"},
    {"filename": "venus.png", "text": "Gillette\nVenus"},
    {"filename": "oralb_pro3.png", "text": "Oral-B\nPro 3"},
    {"filename": "sonicare.png", "text": "Philips\nSonicare"},
    {"filename": "elmex.png", "text": "Elmex\nGelee"},
    {"filename": "meridol.png", "text": "Meridol\nZahnpasta"},
    {"filename": "listerine.png", "text": "Listerine\nCool Mint"},
    {"filename": "nivea_men.png", "text": "NIVEA MEN\nCreme"},
    {"filename": "loreal_energy.png", "text": "L'Oréal\nHydra Energy"},
    {"filename": "alpecin.png", "text": "Alpecin\nCoffein"},
    {"filename": "h_and_s.png", "text": "Head &\nShoulders"},
    {"filename": "dove_men.png", "text": "Dove\nMen+Care"},
    {"filename": "old_spice.png", "text": "Old Spice\nDeo"},
    {"filename": "rexona.png", "text": "Rexona\nMen Deo"},
    {"filename": "sebamed.png", "text": "Sebamed\nWasch"},
    {"filename": "braun_epil.png", "text": "Braun\nSilk-épil"},
    {"filename": "lumea.png", "text": "Philips\nLumea IPL"},
]

def create_placeholder(filename, text):
    path = os.path.join("assets", filename)
    
    # Create a new image with a gradient-like solid background (Dark Blue/Slate)
    width, height = 400, 400
    color = (30, 41, 59) # Dark slate blue, matching the site theme roughly
    img = Image.new('RGB', (width, height), color)
    
    d = ImageDraw.Draw(img)
    
    # Try to load a font, fallback to default if necessary
    try:
        # MacOS system font
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 40)
    except:
        font = ImageFont.load_default()

    # Draw Text Centered
    # Using textbbox to calculate size (newer Pillow versions)
    left, top, right, bottom = d.textbbox((0, 0), text, font=font)
    text_width = right - left
    text_height = bottom - top
    
    x = (width - text_width) / 2
    y = (height - text_height) / 2
    
    d.multiline_text((x, y), text, fill=(248, 250, 252), font=font, align="center")
    
    # Add a border
    d.rectangle([0, 0, width-1, height-1], outline=(148, 163, 184), width=2)

    img.save(path)
    print(f"Generated {path}")

def main():
    print("Generating placeholder images...")
    for item in images_to_generate:
        create_placeholder(item["filename"], item["text"])
    print("Done.")

if __name__ == "__main__":
    main()
