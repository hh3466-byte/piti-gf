// Auto-generated 500+ Gluten-Free Supermarket shopping database for Piti (צליאק וללא גלוטן)
export interface SiboShopping500Item {
  id: string;
  category: 'meat_fish' | 'veggies_fruits' | 'dairy_oils' | 'grains_starches' | 'sauces' | 'spices' | 'sweets' | 'drinks' | 'pantry_baking' | 'custom';
  name: string;
  safeBrand?: string;
  warningNote?: string;
  unit?: string;
}

export const SIBO_CATEGORIES = [
  {
    "id": "grains_starches",
    "label": "לחמים, פסטות וקמחים ללא גלוטן (Schär, בר-אל, תמי)",
    "icon": "🍞",
    "row": 1
  },
  {
    "id": "sweets",
    "label": "חטיפים, עוגיות וממתקים GF (במבה, אוראו GF, ופלים)",
    "icon": "🍫",
    "row": 1
  },
  {
    "id": "sauces",
    "label": "רטבים, ממרחים וסויה GF (קיקומן תכלת, קטשופ, מיונז)",
    "icon": "🥫",
    "row": 1
  },
  {
    "id": "spices",
    "label": "תבלינים, אבקות מרק ותערובות ללא גלוטן",
    "icon": "🧂",
    "row": 1
  },
  {
    "id": "veggies_fruits",
    "label": "ירקות ופירות טריים (100% טבעי ובטוח)",
    "icon": "🥦",
    "row": 2
  },
  {
    "id": "meat_fish",
    "label": "בשר, עופות, דגים ונקניקים מאושרים GF (טירת צבי, יחיעם)",
    "icon": "🥩",
    "row": 2
  },
  {
    "id": "dairy_oils",
    "label": "מוצרי חלב, גבינות לפיצה, חמאה וביצים",
    "icon": "🧀",
    "row": 2
  },
  {
    "id": "drinks",
    "label": "משקאות, שוקו, חלבים ובירה ללא גלוטן",
    "icon": "☕",
    "row": 2
  },
  {
    "id": "pantry_baking",
    "label": "מוצרי מזווה, אגוזים ואפייה ללא גלוטן",
    "icon": "🥣",
    "row": 2
  }
] as const;

export const SIBO_SHOPPING_500_ITEMS: SiboShopping500Item[] = [
  {
    "id": "gf_shop_1",
    "category": "grains_starches",
    "name": "לחם פרוס קלאסי ללא גלוטן (לבן / כפרי)",
    "safeBrand": "בר-אל / Schär Maestro Classic / גרין לייט",
    "warningNote": "לוודא תו תקן עד 20 PPM",
    "unit": "כיכר"
  },
  {
    "id": "gf_shop_2",
    "category": "grains_starches",
    "name": "לחמניות המבורגר ללא גלוטן (שלישייה/רביעייה)",
    "safeBrand": "גרין לייט / Schär Hamburger Buns / בר-אל",
    "warningNote": "רכות ומושלמות לחימום קל בטוסטר",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_3",
    "category": "grains_starches",
    "name": "לחמניות אצבע לנקניקייה ללא גלוטן",
    "safeBrand": "בר-אל / גרין לייט",
    "warningNote": "ללא גלוטן מאושר",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_4",
    "category": "grains_starches",
    "name": "פיתות כוסמת / טף ללא גלוטן",
    "safeBrand": "גרין לייט פיתות / בר-אל",
    "warningNote": "נפתחות לכיס מושלם ללא קריעה",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_5",
    "category": "grains_starches",
    "name": "פיתות מיני ביס ללא גלוטן",
    "safeBrand": "בר-אל מיני פיתה",
    "warningNote": "לכריכים מהירים",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_6",
    "category": "grains_starches",
    "name": "לאפות דקות מגולגלות ללא גלוטן",
    "safeBrand": "בר-אל לאפה / גרין לייט",
    "warningNote": "לשווארמה וטוסטים",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_7",
    "category": "grains_starches",
    "name": "בגט צרפתי ללא גלוטן לאפייה קלה",
    "safeBrand": "Schär Baguette GF",
    "warningNote": "קראנצ׳י מבחוץ ורך מבפנים",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_8",
    "category": "grains_starches",
    "name": "טורטיות תירס 100% ללא גלוטן",
    "safeBrand": "Old El Paso 100% Corn / La Costeña",
    "warningNote": "לוודא: תירס ומים בלבד (ללא קמח חיטה)",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_9",
    "category": "grains_starches",
    "name": "דפי אורז עגולים וייטנאמיים (100% אורז ומים)",
    "safeBrand": "Bich Chi / Taste of Asia",
    "warningNote": "0% גלוטן לטורטיות מהירות",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_10",
    "category": "grains_starches",
    "name": "לחם מחמצת אורז וכוסמת ללא גלוטן",
    "safeBrand": "גרין לייט מחמצת",
    "warningNote": "ללא סוכר מוסף",
    "unit": "כיכר"
  },
  {
    "id": "gf_shop_11",
    "category": "grains_starches",
    "name": "חלות שבת מתוקות ללא גלוטן (אישיות)",
    "safeBrand": "בר-אל חלות שבת / גרין לייט",
    "warningNote": "לברכת המוציא (אם מבוסס שיבולת שועל GF)",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_12",
    "category": "grains_starches",
    "name": "לחמניות גבינה ברזילאיות (פאן דה קז׳ו)",
    "safeBrand": "גרין לייט / הכנה מטפיוקה",
    "warningNote": "קראנצ׳יות במיוחד",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_13",
    "category": "grains_starches",
    "name": "בסיס מוכן לפיצה ללא גלוטן",
    "safeBrand": "Schär Pizza Crust / בר-אל",
    "warningNote": "מוכן לרוטב ותוספות לאפייה מהירה",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_14",
    "category": "grains_starches",
    "name": "קרקרים מלוחים פריכים ללא גלוטן",
    "safeBrand": "Schär Saltí Crackers",
    "warningNote": "נשנוש פריך עם גבינות",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_15",
    "category": "grains_starches",
    "name": "מקלות מלוחים / גריסיני ללא גלוטן",
    "safeBrand": "Schär Grissini",
    "warningNote": "קראנצ׳י לצד מטבלים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_16",
    "category": "grains_starches",
    "name": "בייגלה שמיניות קלאסי ללא גלוטן",
    "safeBrand": "אסם ללא גלוטן / שופרסל גרין",
    "warningNote": "פריך ומלוח",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_17",
    "category": "grains_starches",
    "name": "בייגלה שטוחים מצופים שומשום ללא גלוטן",
    "safeBrand": "אסם שטוחים GF",
    "warningNote": "נשנוש מעולה",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_18",
    "category": "grains_starches",
    "name": "טוסטעים קראנצ׳יים ללא גלוטן",
    "safeBrand": "Schär Crispbread / פריכיות דקות B&D",
    "warningNote": "בסיס לכל ממרח",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_19",
    "category": "grains_starches",
    "name": "פסטה פוסילי / פנה ללא גלוטן (תירס ואורז)",
    "safeBrand": "Barilla Gluten Free / Rummo GF / שופרסל גרין",
    "warningNote": "איכות אל-דנטה שאינה מתפרקת בבישול",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_20",
    "category": "grains_starches",
    "name": "פסטה ספגטי ללא גלוטן",
    "safeBrand": "Barilla Spaghetti GF / Rummo GF",
    "warningNote": "מושלם לבולונז ולקרבונרה",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_21",
    "category": "grains_starches",
    "name": "אטריות אורז דקות (ורמיצ׳לי / Rice Vermicelli)",
    "safeBrand": "Mama / Taste of Asia",
    "warningNote": "למרקים ולמוקפצים",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_22",
    "category": "grains_starches",
    "name": "אטריות אורז רחבות לפד תאי (Rice Stick)",
    "safeBrand": "Taste of Asia / Farmer",
    "warningNote": "להשרות במים רותחים",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_23",
    "category": "grains_starches",
    "name": "אטריות כוסמת 100% סובה (ללא חיטה כלל)",
    "safeBrand": "Clearspring 100% Buckwheat Soba",
    "warningNote": "לוודא: 100% כוסמת ללא קמח חיטה מוסף!",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_24",
    "category": "grains_starches",
    "name": "קמח רב-תכליתי לאפייה ללא גלוטן",
    "safeBrand": "קמח תמי כתום / כרגיל לכל מטרה / Schär Mix It",
    "warningNote": "תחליף 1:1 מדויק לקמח רגיל בעוגות ומאפים",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_25",
    "category": "grains_starches",
    "name": "קמח שמרים ללא גלוטן (לפיצות ולחמים)",
    "safeBrand": "קמח תמי כחול / כרגיל שמרים",
    "warningNote": "תפיחה מושלמת ללחמים ומאפי שמרים",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_26",
    "category": "grains_starches",
    "name": "קמח שקדים טהור 100% שקדים מולבנים דק",
    "safeBrand": "שקדיה / שופרסל גרין",
    "warningNote": "לעוגיות פריכות, פנקייק ושניצל",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_27",
    "category": "grains_starches",
    "name": "קמח טפיוקה טהור (עמילן מניוק)",
    "safeBrand": "תבואות / מזרח ומערב",
    "warningNote": "מעניק גמישות מדהימה למאפים ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_28",
    "category": "grains_starches",
    "name": "קמח אורז לבן דק ללא גלוטן",
    "safeBrand": "סוגת ללא גלוטן / קמח תמי",
    "warningNote": "מעולה להסמכה ולציפוי קריספי",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_29",
    "category": "grains_starches",
    "name": "קמח תירס דק לפולנטה ולחם תירס",
    "safeBrand": "Polenta Valsugana / תבואות",
    "warningNote": "זהוב וטעים",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_30",
    "category": "grains_starches",
    "name": "פירורי פנקו ללא גלוטן על בסיס אורז",
    "safeBrand": "B&D פנקו ללא גלוטן / אורגנטופ GF",
    "warningNote": "לשניצל הכי קראנצ׳י שיש!",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_31",
    "category": "grains_starches",
    "name": "פירורי לחם מוזהבים ללא גלוטן",
    "safeBrand": "בר-אל / גרין לייט פירורי לחם",
    "warningNote": "לציפוי קציצות ושניצלים",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_32",
    "category": "grains_starches",
    "name": "אורז בסמטי הודי ארוך קלאסי",
    "safeBrand": "Tilda Pure Basmati / סוגת כחול",
    "warningNote": "100% טבעי ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_33",
    "category": "grains_starches",
    "name": "אורז יסמין תאילנדי ריחני",
    "safeBrand": "Royal Umbrella / סוגת",
    "warningNote": "אורז רך וריחני",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_34",
    "category": "grains_starches",
    "name": "קינואה לבנה מלכותית / אדומה",
    "safeBrand": "שופרסל גרין / הרדוף",
    "warningNote": "עשירה בחלבון מלא וברזל",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_35",
    "category": "grains_starches",
    "name": "כוסמת ירוקה בהירה / חומה",
    "safeBrand": "תבואות / שופרסל גרין",
    "warningNote": "טבעי ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_36",
    "category": "grains_starches",
    "name": "פתיתים ללא גלוטן על בסיס אורז ותירס",
    "safeBrand": "משובח פתיתים GF / בר-אל פתיתים",
    "warningNote": "נוסטלגיה ישראלית 100% ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_37",
    "category": "grains_starches",
    "name": "שקדי מרק ללא גלוטן",
    "safeBrand": "אסם שקדי מרק ללא גלוטן / משובח GF",
    "warningNote": "פריכים ומושלמים למרק עוף חם",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_38",
    "category": "grains_starches",
    "name": "קוסקוס מהיר ללא גלוטן על בסיס תירס",
    "safeBrand": "Tipiak Couscous GF / בר-אל",
    "warningNote": "להכנה ב-5 דקות במים רותחים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_39",
    "category": "sweets",
    "name": "במבה אסם קלאסית (חטיף בוטנים)",
    "safeBrand": "אסם במבה מקורית",
    "warningNote": "חטיף ישראלי הדגל — 100% ללא גלוטן!",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_40",
    "category": "sweets",
    "name": "במבה במילוי קרם נוגט / חלבה / במבה אדומה",
    "safeBrand": "אסם במבה ממולאת",
    "warningNote": "לוודא כיתוב ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_41",
    "category": "sweets",
    "name": "תפוצ׳יפס קלאסי במלח (חטיף תפוחי אדמה)",
    "safeBrand": "עלית תפוצ׳יפס קלאסי / פרינגלס GF",
    "warningNote": "לוודא: תפוחי אדמה, שמן ומלח (0% גלוטן)",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_42",
    "category": "sweets",
    "name": "דוריטוס נאצ׳ו / חמוץ חריף ללא גלוטן",
    "safeBrand": "שטראוס עלית דוריטוס",
    "warningNote": "חטיף תירס קראנצ׳י",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_43",
    "category": "sweets",
    "name": "אפרופו חטיף תירס פריך",
    "safeBrand": "אסם אפרופו",
    "warningNote": "0% גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_44",
    "category": "sweets",
    "name": "ופלים שוקולד ללא גלוטן",
    "safeBrand": "Schär Wafers Chocolate / לואקר Loacker GF",
    "warningNote": "ופלים פריכים וטעימים כמו ופלים רגילים",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_45",
    "category": "sweets",
    "name": "עוגיות שוקולד צ׳יפס ללא גלוטן",
    "safeBrand": "Schär Chocolate Chip Cookies / עלית GF",
    "warningNote": "עוגיות נימוחות עם נטיפי שוקולד",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_46",
    "category": "sweets",
    "name": "עוגיות אוראו סטייל ללא גלוטן (כריות שחורות עם קרם וניל)",
    "safeBrand": "Oreo Gluten Free / Schär Black & White",
    "warningNote": "הטעם האותנטי של אוראו 100% GF!",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_47",
    "category": "sweets",
    "name": "שוקולד פרה עלית חלב / מריר / עם סוכריות קופצות",
    "safeBrand": "עלית שוקולד פרה (לוודא סימון \"ללא גלוטן\")",
    "warningNote": "זהירות: לבדוק שעל האריזה יש סימון ללא גלוטן!",
    "unit": "חפיסה"
  },
  {
    "id": "gf_shop_48",
    "category": "sweets",
    "name": "שוקולד מריר איכותי פרימיום 85% / 70%",
    "safeBrand": "Lindt Excellence 85% / Vivani GF",
    "warningNote": "ללא גלוטן",
    "unit": "חפיסה"
  },
  {
    "id": "gf_shop_49",
    "category": "sweets",
    "name": "חטיף שוקולד קינדר בואנו ללא גלוטן",
    "safeBrand": "Schär Melto (גרסת קינדר בואנו ללא גלוטן)",
    "warningNote": "אגוזי לוז וקרם שוקולד מושלם",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_50",
    "category": "sweets",
    "name": "חטיף שוקולד טוויקס סטייל ללא גלוטן",
    "safeBrand": "Schär Chocolix (ביסקוויט, קרמל ושוקולד)",
    "warningNote": "מעדן שוקולדי פריך",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_51",
    "category": "sweets",
    "name": "ממרח שוקולד השחר העולה ללא גלוטן",
    "safeBrand": "השחר העולה",
    "warningNote": "0% גלוטן למריחה על לחם GF",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_52",
    "category": "sweets",
    "name": "ממרח נוטלה Nutella מקורי",
    "safeBrand": "Ferrero Nutella",
    "warningNote": "נוטלה מקורית היא ללא גלוטן (בדיקת תווית)",
    "unit": "צנצנת"
  },
  {
    "id": "gf_shop_53",
    "category": "sweets",
    "name": "סוכריות גומי הרטבו וסוכריות פירות",
    "safeBrand": "Trolli GF / Maoam / ממתקי עלית GF",
    "warningNote": "לוודא סימון ללא גלוטן ללא זיהום משני",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_54",
    "category": "sweets",
    "name": "פופקורן למיקרוגל במלח / בחמאה",
    "safeBrand": "הוטפופ Hotpop / שופרסל",
    "warningNote": "100% גרגירי תירס ללא גלוטן",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_55",
    "category": "sweets",
    "name": "קרמבו ללא גלוטן בעונה (חורף)",
    "safeBrand": "ריאו / מילקי / גרין לייט קרמבו",
    "warningNote": "ביסקוויט מיוחד ללא גלוטן וקצפת",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_56",
    "category": "sweets",
    "name": "ארטיקים וגלידות מגנום / פריגת",
    "safeBrand": "שטראוס מגנום (הטעמים המסומנים GF) / שלגוני פריגת",
    "warningNote": "זהירות: להימנע מטילים וגלידות עם עוגיות רגילות!",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_57",
    "category": "sauces",
    "name": "רוטב סויה ללא גלוטן (Tamari GF)",
    "safeBrand": "San-J Gluten Free Tamari / קיקומן ללא גלוטן (פקק תכלת)",
    "warningNote": "זהירות חמורה: סויה רגילה מכילה חיטה וגלוטן!",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_58",
    "category": "sauces",
    "name": "קטשופ היינץ קלאסי (Heinz 100% GF)",
    "safeBrand": "Heinz Tomato Ketchup",
    "warningNote": "ללא גלוטן וללא חומרים משמרים",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_59",
    "category": "sauces",
    "name": "רוטב מיונז הולנדי קלאסי",
    "safeBrand": "Hellmann's Real Mayo",
    "warningNote": "100% ללא גלוטן",
    "unit": "צנצנת"
  },
  {
    "id": "gf_shop_60",
    "category": "sauces",
    "name": "חרדל דיז׳ון חלק / גרגירים",
    "safeBrand": "Maille Dijon Originale",
    "warningNote": "100% ללא גלוטן",
    "unit": "צנצנת"
  },
  {
    "id": "gf_shop_61",
    "category": "sauces",
    "name": "רוטב צ׳ילי מתוק ללא גלוטן",
    "safeBrand": "Thai Kitchen / שופרסל ללא גלוטן",
    "warningNote": "רוטב צ׳ילי תאילנדי בטוח",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_62",
    "category": "sauces",
    "name": "רוטב אלף האיים ללא גלוטן",
    "safeBrand": "אסם / היינץ אלף האיים GF",
    "warningNote": "לבדוק תווית ללא גלוטן",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_63",
    "category": "sauces",
    "name": "רוטב שום ורוטב ויניגרט לסלט",
    "safeBrand": "אסם רטבים מסומנים GF / הכנה משמן זית",
    "warningNote": "לוודא סימון ללא גלוטן",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_64",
    "category": "sauces",
    "name": "רוטב טריאקי ללא גלוטן",
    "safeBrand": "San-J Gluten Free Teriyaki / קיקומן GF",
    "warningNote": "זהירות: טריאקי רגיל מלא בחיטה!",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_65",
    "category": "sauces",
    "name": "רוטב ברביקיו מעושן ללא גלוטן",
    "safeBrand": "Sweet Baby Ray's Gluten Free BBQ / Heinz BBQ",
    "warningNote": "לבדוק תווית Gluten Free",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_66",
    "category": "sauces",
    "name": "רוטב עגבניות פסאטה איטלקי 100% עגבניות",
    "safeBrand": "Mutti Passata / Cirio",
    "warningNote": "עגבניות טהורות ללא תוספות",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_67",
    "category": "sauces",
    "name": "רוטב פסטו בזיליקום איטלקי",
    "safeBrand": "Barilla Pesto Genovese (לבדוק סימון GF) / Filippo Berio",
    "warningNote": "עשיר בפרמזן וצנוברים",
    "unit": "צנצנת"
  },
  {
    "id": "gf_shop_68",
    "category": "sauces",
    "name": "טחינה גולמית טהורה 100% שומשום",
    "safeBrand": "אל ארז / הר ברכה / היונה",
    "warningNote": "100% שומשום טבעי",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_69",
    "category": "sauces",
    "name": "חומוס מוכן איכותי ללא גלוטן",
    "safeBrand": "אחלה / צבר / חומוס ביתי",
    "warningNote": "לוודא שאין עמילנים מעובדים חשודים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_70",
    "category": "spices",
    "name": "מלח ים אטלנטי גס / דק",
    "safeBrand": "מלח הארץ / לה באלן",
    "warningNote": "100% טבעי",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_71",
    "category": "spices",
    "name": "פלפל שחור גרוס טהור 100%",
    "safeBrand": "תבליני טעם וריח / מימון",
    "warningNote": "100% פלפל ללא תוספי קמחים",
    "unit": "צנצנת"
  },
  {
    "id": "gf_shop_72",
    "category": "spices",
    "name": "פפריקה מתוקה בשמן / מעושנת",
    "safeBrand": "תבליני טעם וריח / מימון",
    "warningNote": "לוודא 100% טהור ללא עמילן מונע התגבשות",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_73",
    "category": "spices",
    "name": "כמון מזרחי טחון טהור",
    "safeBrand": "תבליני מימון / טעם וריח",
    "warningNote": "טהור",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_74",
    "category": "spices",
    "name": "כורכום טהור 100%",
    "safeBrand": "תבליני טעם וריח",
    "warningNote": "טהור ללא צבעים וקמחים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_75",
    "category": "spices",
    "name": "אבקת שום טהורה 100%",
    "safeBrand": "תבליני מימון",
    "warningNote": "שום מיובש טהור",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_76",
    "category": "spices",
    "name": "אבקת בצל טהורה 100%",
    "safeBrand": "תבליני מימון",
    "warningNote": "בצל מיובש טהור",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_77",
    "category": "spices",
    "name": "אורגנו וזעתר ללא גלוטן",
    "safeBrand": "תבליני פרג / מימון",
    "warningNote": "לוודא תערובת נקייה מקמחים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_78",
    "category": "spices",
    "name": "תבלין לשווארמה ולפרגית ללא גלוטן",
    "safeBrand": "תבליני טעם וריח (מסומן GF)",
    "warningNote": "תערובת תבלינים עשירה",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_79",
    "category": "spices",
    "name": "אבקת מרק עוף ללא מונוסודיום וללא גלוטן",
    "safeBrand": "אסם ללא גלוטן / קנור GF",
    "warningNote": "זהירות: אבקת מרק רגילה מכילה קמח חיטה!",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_80",
    "category": "meat_fish",
    "name": "חזה עוף טרי / שניצל פרוס דק",
    "safeBrand": "טרי מהקצב / עוף טוב / שופרסל",
    "warningNote": "100% בשר טרי טהור ללא גלוטן",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_81",
    "category": "meat_fish",
    "name": "כרעיים ושוקי עוף טריים",
    "safeBrand": "עוף טוב / משק ארצי",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_82",
    "category": "meat_fish",
    "name": "פרגיות עוף נקיות לשיפודים ולמחבת",
    "safeBrand": "טרי מהקצב",
    "warningNote": "נקי ללא מרינדות תעשייתיות",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_83",
    "category": "meat_fish",
    "name": "בשר בקר טחון טרי",
    "safeBrand": "טרי מהקצב",
    "warningNote": "לטחון בשר טרי בלבד לקציצות ולהמבורגר",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_84",
    "category": "meat_fish",
    "name": "סטייק אנטרקוט / סינטה בקר טרי",
    "safeBrand": "קצב מובחר",
    "warningNote": "איכות מסעדות",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_85",
    "category": "meat_fish",
    "name": "פילה סלמון נורבגי טרי",
    "safeBrand": "דגת הארץ / שופרסל דגים",
    "warningNote": "עשיר באומגה 3",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_86",
    "category": "meat_fish",
    "name": "פילה דניס / לברק טרי",
    "safeBrand": "דגת הארץ",
    "warningNote": "דג ים לבן ורך",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_87",
    "category": "meat_fish",
    "name": "טונה בשמן זית / במים",
    "safeBrand": "ריו מרה Rio Mare / פילטונה",
    "warningNote": "טונה, שמן ומלח (0% גלוטן)",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_88",
    "category": "meat_fish",
    "name": "נקניקיות עוף / בקר ללא גלוטן",
    "safeBrand": "טירת צבי 100% טבעי GF / יחיעם ללא גלוטן",
    "warningNote": "אזהרה קריטית: נקניקיות רגילות מכילות קמח וגלוטן! לקנות רק מסומן GF!",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_89",
    "category": "meat_fish",
    "name": "פסטרמה הודו / כתף בקר ללא גלוטן",
    "safeBrand": "טירת צבי 100% טבעי / יחיעם GF",
    "warningNote": "לוודא סימון \"ללא גלוטן\"",
    "unit": "אריזה"
  },
  {
    "id": "gf_shop_90",
    "category": "meat_fish",
    "name": "קבב וקציצות בקר מוכנות ללא גלוטן",
    "safeBrand": "טבעול GF / מעדני בשר מסומנים GF",
    "warningNote": "לבדוק תווית ללא גלוטן",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_91",
    "category": "meat_fish",
    "name": "שניצל עוף קפוא מוכן ללא גלוטן",
    "safeBrand": "עוף טוב שניצל ללא גלוטן / מאמא עוף GF",
    "warningNote": "שניצל מוכן מהיר בתנור ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_92",
    "category": "dairy_oils",
    "name": "ביצי חופש טריות (L / XL)",
    "safeBrand": "גליקסמן / שופרסל",
    "warningNote": "100% טבעי",
    "unit": "תבנית"
  },
  {
    "id": "gf_shop_93",
    "category": "dairy_oils",
    "name": "חלב תנובה / טרה 3% / 1%",
    "safeBrand": "תנובה / טרה",
    "warningNote": "0% גלוטן טבעי",
    "unit": "קרטון"
  },
  {
    "id": "gf_shop_94",
    "category": "dairy_oils",
    "name": "גבינה צהובה עמק / נעם פרוסה",
    "safeBrand": "תנובה / טרה",
    "warningNote": "ללא גלוטן",
    "unit": "אריזה"
  },
  {
    "id": "gf_shop_95",
    "category": "dairy_oils",
    "name": "גבינת מוצרלה מגוררת לפיצה",
    "safeBrand": "גד / תנובה Collection",
    "warningNote": "נמסה מעולה מעל פיצה ללא גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_96",
    "category": "dairy_oils",
    "name": "גבינה לבנה 5% / 9% / קוטג׳",
    "safeBrand": "תנובה / שטראוס / טרה",
    "warningNote": "לכריכים ומאפים",
    "unit": "גביע"
  },
  {
    "id": "gf_shop_97",
    "category": "dairy_oils",
    "name": "גבינת שמנת נפוליאון / פילדלפיה",
    "safeBrand": "תנובה / Philadelphia",
    "warningNote": "עשירה למריחה",
    "unit": "גביע"
  },
  {
    "id": "gf_shop_98",
    "category": "dairy_oils",
    "name": "גבינת פטה / בולגרית פיראוס",
    "safeBrand": "תנובה פיראוס",
    "warningNote": "לסלט יווני ולמאפים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_99",
    "category": "dairy_oils",
    "name": "גבינת חלומי לטיגון וצריבה",
    "safeBrand": "פיראוס חלומי",
    "warningNote": "נצרבת קראנצ׳ית במחבת",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_100",
    "category": "dairy_oils",
    "name": "גבינת פרמזן רג׳יאנו איטלקית מגוררת",
    "safeBrand": "Zanetti Grated Parmesan",
    "warningNote": "100% גבינה ללא גלוטן",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_101",
    "category": "dairy_oils",
    "name": "חמאה טהורה הולנדית / צרפתית",
    "safeBrand": "Lurpak / תנובה / President",
    "warningNote": "שומן טהור לבישול ואפייה",
    "unit": "חבילה"
  },
  {
    "id": "gf_shop_102",
    "category": "dairy_oils",
    "name": "שמנת מתוקה 38% להקצפה ובישול",
    "safeBrand": "השף הלבן / יטבתה",
    "warningNote": "לרטבי פסטה מוקרמים וקינוחים",
    "unit": "קרטון"
  },
  {
    "id": "gf_shop_103",
    "category": "dairy_oils",
    "name": "שוקו יטבתה / מילקשייק",
    "safeBrand": "יטבתה",
    "warningNote": "משקה שוקו מפנק ללא גלוטן",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_104",
    "category": "dairy_oils",
    "name": "מעדני יוגורט דנונה / מולר / מילקי",
    "safeBrand": "שטראוס מילקי / דנונה",
    "warningNote": "זהירות: להימנע מיוגורטים עם תוספות פצפוצים וגרנולה רגילה!",
    "unit": "רביעייה"
  },
  {
    "id": "gf_shop_105",
    "category": "veggies_fruits",
    "name": "מלפפונים ישראליים פריכים",
    "safeBrand": "טרי מהשוק",
    "warningNote": "100% טבעי ללא גלוטן",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_106",
    "category": "veggies_fruits",
    "name": "עגבניות אדומות מוצקות / שרי מתוקות",
    "safeBrand": "שוק טרי",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_107",
    "category": "veggies_fruits",
    "name": "חסה רומיין / ערבית פריכה",
    "safeBrand": "חסלט / שוק",
    "warningNote": "טבעי",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_108",
    "category": "veggies_fruits",
    "name": "תפוחי אדמה אדומים ולבנים",
    "safeBrand": "דוד משה",
    "warningNote": "אידיאלי לפירה, צ׳יפס ואפייה",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_109",
    "category": "veggies_fruits",
    "name": "בצל יבש אדום ולבן + שום טרי",
    "safeBrand": "שוק טרי",
    "warningNote": "בצליאק הכל מותר חופשי!",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_110",
    "category": "veggies_fruits",
    "name": "גזרים כתומים טריים ומתוקים",
    "safeBrand": "שוק טרי",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_111",
    "category": "veggies_fruits",
    "name": "קישואים וזוקיני ירוקים",
    "safeBrand": "שוק טרי",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_112",
    "category": "veggies_fruits",
    "name": "פלפלים אדומים מתוקים (גמבה)",
    "safeBrand": "שוק טרי",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_113",
    "category": "veggies_fruits",
    "name": "אבוקדו בשל ורך",
    "safeBrand": "גרנות / משק",
    "warningNote": "טבעי",
    "unit": "רשת"
  },
  {
    "id": "gf_shop_114",
    "category": "veggies_fruits",
    "name": "תפוחי עץ חרמון / גרני סמית",
    "safeBrand": "שוק פירות",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_115",
    "category": "veggies_fruits",
    "name": "בננות צהובות מתוקות",
    "safeBrand": "שוק טרי",
    "warningNote": "טבעי",
    "unit": "ק\"ג"
  },
  {
    "id": "gf_shop_116",
    "category": "veggies_fruits",
    "name": "תות שדה טרי עסיסי",
    "safeBrand": "משק תותים",
    "warningNote": "טבעי",
    "unit": "מארז"
  },
  {
    "id": "gf_shop_117",
    "category": "veggies_fruits",
    "name": "עשבי תיבול טריים (פטרוזיליה, שמיר, כוסברה, בזיליקום)",
    "safeBrand": "חסלט",
    "warningNote": "טרי",
    "unit": "צרור"
  },
  {
    "id": "gf_shop_118",
    "category": "drinks",
    "name": "חלב שקדים / שיבולת שועל ללא גלוטן",
    "safeBrand": "Alpro Gluten Free / Oatly GF",
    "warningNote": "זהירות: לוודא שעל חלב שיבולת שועל כתוב \"ללא גלוטן\"!",
    "unit": "קרטון"
  },
  {
    "id": "gf_shop_119",
    "category": "drinks",
    "name": "חלב סויה / אורז / קוקוס לשתייה",
    "safeBrand": "Alpro / Isola Bio",
    "warningNote": "0% גלוטן",
    "unit": "קרטון"
  },
  {
    "id": "gf_shop_120",
    "category": "drinks",
    "name": "קוקה קולה / פפסי / זירו קלאסי",
    "safeBrand": "Coca Cola / Pepsi",
    "warningNote": "משקאות קלים סטנדרטיים הם ללא גלוטן",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_121",
    "category": "drinks",
    "name": "סודה מוגזת טבעית בטעמים",
    "safeBrand": "San Pellegrino / Schweppes",
    "warningNote": "טבעי",
    "unit": "שישייה"
  },
  {
    "id": "gf_shop_122",
    "category": "drinks",
    "name": "בירה ללא גלוטן (Gluten Free Beer)",
    "safeBrand": "Estrella Damm Daura GF / San Miguel GF",
    "warningNote": "אזהרה קריטית: בירה רגילה מלאה בגלוטן! לשתות אך ורק בירה מסומנת GF!",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_123",
    "category": "drinks",
    "name": "יין אדום / לבן יבש ומתוק",
    "safeBrand": "יקבי רמת הגולן / כרמל",
    "warningNote": "יין ענבים טבעי הוא ללא גלוטן",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_124",
    "category": "drinks",
    "name": "קפה שחור / קפסולות אספרסו 100% ערביקה",
    "safeBrand": "Nespresso / Lavazza / עלית",
    "warningNote": "קפה טהור ללא גלוטן",
    "unit": "שרוול"
  },
  {
    "id": "gf_shop_125",
    "category": "drinks",
    "name": "שוקו מאבקת קקאו טהורה וחלב",
    "safeBrand": "עלית קקאו / שופרסל",
    "warningNote": "0% גלוטן",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_126",
    "category": "pantry_baking",
    "name": "אגוזי מלך / פקאן / שקדים טבעיים",
    "safeBrand": "שקדיה / שופרסל גרין",
    "warningNote": "אגוזים טבעיים לא קלויים (ללא קמחים)",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_127",
    "category": "pantry_baking",
    "name": "גרעיני חמנייה ודלעת טבעיים",
    "safeBrand": "תבואות",
    "warningNote": "0% גלוטן",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_128",
    "category": "pantry_baking",
    "name": "אבקת אפייה ללא גלוטן",
    "safeBrand": "Doves Farm Gluten Free / B&D",
    "warningNote": "להתפחת עוגות ומאפים",
    "unit": "קופסה"
  },
  {
    "id": "gf_shop_129",
    "category": "pantry_baking",
    "name": "סודה לשתייה טהורה 100%",
    "safeBrand": "תבואות",
    "warningNote": "לטהור",
    "unit": "שקית"
  },
  {
    "id": "gf_shop_130",
    "category": "pantry_baking",
    "name": "תמצית וניל טהורה 100%",
    "safeBrand": "Nielsen-Massey GF",
    "warningNote": "ללא גלוטן",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_131",
    "category": "pantry_baking",
    "name": "סירופ מייפל טהור 100%",
    "safeBrand": "Maple Joe",
    "warningNote": "טבעי",
    "unit": "בקבוק"
  },
  {
    "id": "gf_shop_132",
    "category": "pantry_baking",
    "name": "זיתי קלמטה וירוקים במלח ושמן",
    "safeBrand": "בית השיטה / אנשי הזית",
    "warningNote": "טבעי",
    "unit": "צנצנת"
  },
  {
    "id": "gf_shop_133",
    "category": "pantry_baking",
    "name": "מלפפונים חמוצים במלח / בחומץ",
    "safeBrand": "בית השיטה / בני דרום",
    "warningNote": "לבדוק תווית ללא גלוטן",
    "unit": "פחית"
  }
];
