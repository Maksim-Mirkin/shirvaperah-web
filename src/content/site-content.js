import aboutImage from '@/assets/images/about.jpg';
import bouquet01 from '@/assets/images/bouquet-01.jpg';
import bouquet02 from '@/assets/images/bouquet-02.jpg';
import bouquet03 from '@/assets/images/bouquet-03.jpg';
import bouquet04 from '@/assets/images/bouquet-04.jpg';
import design01 from '@/assets/images/design-01.jpg';
import design02 from '@/assets/images/design-02.jpg';
import design03 from '@/assets/images/design-03.jpg';
import design04 from '@/assets/images/design-04.jpg';
import hero01 from '@/assets/images/hero-01.jpg';
import heroBackground from '@/assets/images/hero-background.jpg';
import hero02 from '@/assets/images/hero-02.jpg';
import hero03 from '@/assets/images/hero-03.jpg';
import hero04 from '@/assets/images/hero-04.jpg';
import hero05 from '@/assets/images/hero-05.jpg';
import logo from '@/assets/images/logo.png';
import table01 from '@/assets/images/table-01.jpg';
import table02 from '@/assets/images/table-02.jpg';
import table03 from '@/assets/images/table-03.jpg';
import table04 from '@/assets/images/table-04.jpg';
import table05 from '@/assets/images/table-05.jpg';
import table06 from '@/assets/images/table-06.jpg';

export const contact = {
  phoneDisplay: '058-4263928',
  phoneHref: 'tel:0584263928',
  whatsappHref: 'https://wa.me/972584263928',
  instagramHref: 'https://instagram.com/shirvaperah',
  instagramDisplay: '@shirvaperah',
  serviceArea: 'טבעון והסביבה (משלוחים זמינים)',
};

export const hero = {
  eyebrow: 'בוטיק פרחים בטבעון',
  title: 'שיר ופרח',
  quote: '״ימי הפרח והאהבה״ — י. רוטבליט',
  description: 'שתי אחיות עם אהבה גדולה לפרחים ולמילה הכתובה שוזרות זרים בהשראת הטבע',
  imageAlt: 'זר פרחים צבעוני בעבודת יד',
  backgroundImage: heroBackground,
  images: [hero01, hero02, hero03, hero04, hero05],
};

export const galleryCategories = [
  {
    id: 'bouquets',
    label: 'זרי פרחים',
    images: [bouquet01, bouquet02, bouquet03, bouquet04],
  },
  {
    id: 'tables',
    label: 'סידורי שולחן',
    images: [table01, table02, table03, table04, table05, table06],
  },
  {
    id: 'floral-designs',
    label: 'עיצובי פרחים',
    images: [design01, design02, design03, design04],
  },
];

export const services = [
  {
    title: 'זרים מעוצבים',
    description: 'זרים ייחודיים המותאמים אישית לכל אירוע. כל פרח נבחר בקפידה כדי ליצור הרמוניה מושלמת',
  },
  {
    title: 'סידורי פרחים לאירועים',
    description: 'עיצוב פרחוני מרהיב לחתונות, בר/בת מצווה, אירועים עסקיים ומסיבות פרטיות',
  },
  {
    title: 'בר/בת מצווה',
    description: 'עיצוב פרחוני מיוחד לחגיגת הבר/בת מצווה, כולל זרים לשולחנות, דוכן קבלת פנים ועיטורי אולם.',
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
