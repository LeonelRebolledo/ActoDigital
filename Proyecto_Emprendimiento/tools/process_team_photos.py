"""
Genera versiones adaptadas de las fotos del equipo sin usar IA ni retoque facial.

Acciones:
- copia una version cuadrada del original
- genera una version circular PNG con fondo transparente
- mantiene proporciones y expresion original

Uso:
  python tools/process_team_photos.py
"""

from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(r"C:\Proyecto_Emprendimiento")
SOURCE_DIR = ROOT / "ImageFunder"
TARGET_DIR = ROOT / "public" / "assets" / "team"
OUTPUT_SIZE = 1200

FILES = [
    ("Leonel Rebolledo.png", "leonel-rebolledo"),
    ("Naheul Alferdo Silva.png", "alfredo-silva"),
]


def crop_to_square(image: Image.Image) -> Image.Image:
    width, height = image.size
    side = min(width, height)
    left = (width - side) // 2
    top = (height - side) // 2
    return image.crop((left, top, left + side, top + side))


def build_circle_variant(image: Image.Image) -> Image.Image:
    base = image.convert("RGBA")
    mask = Image.new("L", base.size, 0)
    draw = ImageDraw.Draw(mask)
    inset = 6
    draw.ellipse((inset, inset, base.size[0] - inset, base.size[1] - inset), fill=255)
    result = Image.new("RGBA", base.size, (0, 0, 0, 0))
    result.paste(base, (0, 0), mask)
    return result


def export_variants(source_name: str, slug: str) -> None:
    source_path = SOURCE_DIR / source_name
    square_output = TARGET_DIR / f"{slug}.png"
    round_output = TARGET_DIR / f"{slug}-round.png"

    with Image.open(source_path) as image:
        square = crop_to_square(image).resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.LANCZOS).convert("RGBA")
        circle = build_circle_variant(square)

        square.save(square_output, format="PNG")
        circle.save(round_output, format="PNG")


def main() -> None:
    TARGET_DIR.mkdir(parents=True, exist_ok=True)

    for source_name, slug in FILES:
        export_variants(source_name, slug)
        print(f"OK: {slug}")


if __name__ == "__main__":
    main()
