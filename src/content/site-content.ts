import aboutImage from '@/assets/images/about.webp';
import bouquet01 from '@/assets/images/bouquet-01.webp';
import bouquet02 from '@/assets/images/bouquet-02.webp';
import bouquet03 from '@/assets/images/bouquet-03.webp';
import bouquet04 from '@/assets/images/bouquet-04.webp';
import design01 from '@/assets/images/design-01.webp';
import design02 from '@/assets/images/design-02.webp';
import design03 from '@/assets/images/design-03.webp';
import design04 from '@/assets/images/design-04.webp';
import hero01 from '@/assets/images/hero-01.webp';
import hero02 from '@/assets/images/hero-02.webp';
import hero03 from '@/assets/images/hero-03.webp';
import hero04 from '@/assets/images/hero-04.webp';
import hero05 from '@/assets/images/hero-05.webp';
import logo from '@/assets/images/logo.webp';
import table01 from '@/assets/images/table-01.webp';
import table02 from '@/assets/images/table-02.webp';
import table03 from '@/assets/images/table-03.webp';
import table04 from '@/assets/images/table-04.webp';
import table05 from '@/assets/images/table-05.webp';
import table06 from '@/assets/images/table-06.webp';

const whatsappMessage = 'היי, הגעתי דרך האתר ואשמח לשמוע פרטים נוספים 🌸';
const whatsappDirectHref = `https://wa.me/972584263928?text=${encodeURIComponent(whatsappMessage)}`;

export const contact = {
  phoneDisplay: '058-4263928',
  phoneHref: 'tel:0584263928',
  whatsappHref: window.location.protocol === 'https:' ? '/whatsapp' : whatsappDirectHref,
  instagramHref: 'https://instagram.com/shirvaperah',
  instagramDisplay: '@shirvaperah',
  serviceArea: 'צפון',
};

export const hero = {
  eyebrow: 'בוטיק פרחים בטבעון',
  title: 'שיר ופרח',
  quote: '״ימי הפרח והאהבה״ — י. רוטבליט',
  description: 'שתי אחיות עם אהבה גדולה לפרחים ולמילה הכתובה שוזרות זרים בהשראת הטבע',
  imageAlt: 'זר פרחים צבעוני בעבודת יד',
  backgroundImage: '/hero-background.webp',
  images: [hero01, hero02, hero03, hero04, hero05],
};

const bridalBouquetImages = [bouquet01, bouquet02, bouquet03, bouquet04];
const generalGalleryImages = [hero01, hero02, hero03, hero04, hero05];
const tableArrangementImages = [table01, table02, table03, table04, table05, table06];
const floralDesignImages = [design01, design02, design03, design04];

export const galleryCategories = [
  {
    id: 'all',
    label: 'הכל',
    images: [...bridalBouquetImages, ...generalGalleryImages, ...tableArrangementImages, ...floralDesignImages],
  },
  {
    id: 'bridal-bouquets',
    label: 'זרי כלה',
    images: bridalBouquetImages,
  },
  {
    id: 'tables',
    label: 'סידורי שולחן',
    images: tableArrangementImages,
  },
  {
    id: 'floral-designs',
    label: 'עיצובי פרחים',
    images: floralDesignImages,
  },
];

export const services = [
  {
    title: 'סידורי פרחים לאירועים',
    description: 'עיצוב פרחוני מרהיב לחתונות, בר/בת מצווה, אירועים עסקיים ומסיבות פרטיות',
  },
  {
    title: 'חתונות',
    description: 'עיצוב פרחוני לחתונות באווירה טבעית וססגונית, מהחופה ועד סידורי השולחן והפרטים הקטנים.',
  },
  {
    title: 'סדנאות שזירה',
    description: 'סדנאות שזירה לקבוצות קטנות, היכרות עם עולם הפרחים, לימוד שזירה ויציאה עם זר אישי הביתה.',
  },
];

export const about = {
  image: aboutImage,
  imageAlt: 'שירה שוזרת פרחים',
  paragraphs: [
    'שיר ופרח הוא עסק משפחתי של שתי אחיות, שנולד מתוך אהבה לפרחים ולמילה הכתובה.',
    'לאחר מסע נפרד בעולמות של יצירה בחרנו לשלב כוחות וליצור מרחב שמחבר בין יופיו של הפרח לעומקה של השירה.',
    'אנחנו יוצרות זרי פרחים, עיצובים ומפגשים, ומלוות רגעים משמעותיים בחיים מתוך רגישות, הקשבה ודיוק. כל זר נוצר בעבודת יד ובמחשבה על האדם והסיפור שמאחוריו.',
    'נשמח להיות חלק מאירועי חיים קטנים וגדולים, מיום ההולדת ועד לחתונה.',
  ],
};

export { logo };
