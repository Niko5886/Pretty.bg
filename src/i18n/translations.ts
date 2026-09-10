/**
 * Single source of truth for all user-facing copy.
 *
 * `en` is the reference dictionary; `bg` is typed against it (`Dict`), so the
 * compiler flags any missing or mistyped Bulgarian key. Structural data
 * (prices, images, ratings) stays in `src/data/*`; only translatable text
 * lives here, keyed by the same id used in the data files.
 */

export type Locale = "bg" | "en";

/** Pluralise the English "item(s)" label. */
const enItems = (n: number) => (n === 1 ? "item" : "items");
/** Bulgarian: 1 → артикул, otherwise → артикула. */
const bgItems = (n: number) => (n === 1 ? "артикул" : "артикула");

const en = {
  meta: {
    title: "Pretty.bg — Everything Your Pets Love",
  },

  a11y: {
    skipToContent: "Skip to content",
    languageGroup: "Language",
    switchToBg: "Смени езика на български",
    switchToEn: "Switch language to English",
  },

  nav: {
    home: "Home",
    shop: "Shop",
    delivery: "Delivery and payment",
    brands: "Brands",
    blog: "Blog",
  } as Record<string, string>,

  announcement: {
    freePre: "Free shipping on orders over",
    amount: "€49",
    support: "24/7 vet chat support",
    dismiss: "Dismiss announcement",
  },

  header: {
    home: "Pretty.bg home",
    search: "Search (press / )",
    favorites: (n: number) => `Favorites, ${n} ${enItems(n)}`,
    cart: (n: number) => `Cart, ${n} ${enItems(n)}`,
  },

  account: {
    menu: "Account menu",
    greeting: "Hi there 👋",
    subtitle: "Sign in for a faster checkout",
    signIn: "Sign in",
    myOrders: "My orders",
    wishlist: "Wishlist",
    settings: "Settings",
  },

  hero: {
    line1: ["Everything"],
    line2: ["Your", "Pets", "Love"],
    headingFull: "Everything Your Pets Love",
    mobileSubtitle:
      "Cozy homes, tasty treats and everything your best friend needs.",
    explore: "Explore Products",
    happyCustomers: "Happy Customers",
    bestProducts: "Best Products for Your Pet",
    imageAlt: "Happy pets living their comfiest life with Pretty.bg",
  },

  benefits: {
    aria: "Why shop with Pretty.bg",
    items: [
      { title: "Free & fast delivery", text: "On all orders over €49" },
      { title: "Vet-approved quality", text: "Trusted by 500+ vets" },
      { title: "Easy 30-day returns", text: "Hassle-free refunds" },
      { title: "Secure payment", text: "Encrypted checkout" },
    ],
  },

  categories: {
    eyebrow: "Categories",
    title: "Shop by pet",
    subtitle:
      "Everything for every kind of companion — curated by our in-house pet parents.",
    products: "products",
    names: {
      dogs: "Dogs",
      cats: "Cats",
      "small-pets": "Small Pets",
      toys: "Toys & Accessories",
    } as Record<string, string>,
  },

  bestSellers: {
    eyebrow: "Best sellers",
    title: "Loved by pets & parents",
    subtitle:
      "The most-added-to-cart favourites this month — vet-approved and paw-tested.",
    viewAll: "View all products",
  },

  product: {
    addToCart: "Add to cart",
    addAria: (name: string) => `Add ${name} to cart`,
    save: (name: string) => `Add ${name} to favorites`,
    unsave: (name: string) => `Remove ${name} from favorites`,
    names: {
      "ceramic-bowl": "Premium Ceramic Bowl",
      "grain-free-food": "Grain-Free Dog Food",
      "feather-teaser": "Feather Teaser Toy",
      "walking-set": "Everyday Walking Set",
      "salmon-treats": "Salmon Training Treats",
      "adult-dry-food": "Adult Dry Food 5kg",
      "orthopedic-bed": "Orthopedic Pet Bed",
      "cat-scratcher": "Modern Cat Scratcher",
    } as Record<string, string>,
    badges: {
      bestseller: "Bestseller",
      new: "New",
    } as Record<string, string>,
  },

  story: {
    imageAlt: "A couple with their little dog while travelling",
    eyebrow: "Our promise",
    title: "Everything Your Pets Love",
    body: "Pretty.bg began with one belief: our companions deserve the same care we give ourselves. Every product is chosen by real pet parents and reviewed by vets — so you can shop with confidence and they can live their comfiest, happiest life.",
    points: [
      "Vet-formulated nutrition & safe, non-toxic materials",
      "Ethically sourced and sustainably packaged",
      "Free returns and a happiness guarantee on every order",
    ],
    shopNow: "Shop now",
    ourStory: "Our story",
  },

  why: {
    eyebrow: "Why Pretty.bg",
    title: "Care you can feel good about",
    subtitle:
      "The little things that make a big difference for you and your best friend.",
    items: [
      {
        title: "Vet-approved quality",
        text: "Every item is reviewed by licensed veterinarians before it ever reaches your pet.",
      },
      {
        title: "Sustainable & safe",
        text: "Non-toxic materials and recyclable, plastic-light packaging on everything we ship.",
      },
      {
        title: "Delivered in 24h",
        text: "Fast, fully tracked shipping — most orders arrive the very next day.",
      },
      {
        title: "Always here for you",
        text: "24/7 support and a no-questions happiness guarantee on every purchase.",
      },
    ],
  },

  reviews: {
    eyebrow: "Reviews",
    lovedByPre: "Loved by",
    lovedByPost: "pet parents",
    subtitle:
      "Real words from real customers — and their very good boys and girls.",
    happyCustomers: "happy customers",
    fiveStar: "five-star reviews",
    asSeenIn: "As seen in",
    verified: "Verified buyer",
    items: {
      emma: {
        pet: "Dog mom to Biscuit",
        quote:
          "The orthopedic bed was a game-changer for my senior pup. Fast delivery, gorgeous quality, and Biscuit hasn't left it since.",
      },
      daniel: {
        pet: "Cat dad to Miso",
        quote:
          "Finally a shop that gets it. The grain-free food is vet-approved and my fussy cat actually loves it. Reordering on repeat.",
      },
      sofia: {
        pet: "Bunny mom to Clover",
        quote:
          "Beautiful packaging, non-toxic materials and genuinely helpful 24/7 support. Pretty.bg is now my go-to for everything.",
      },
    } as Record<string, { pet: string; quote: string }>,
  },

  newsletter: {
    eyebrow: "Join the pack",
    title: "Get 10% off your first order",
    subtitle:
      "Sign up for treats, tips and members-only deals. No spam — just the good stuff.",
    emailLabel: "Email address",
    placeholder: "you@example.com",
    subscribe: "Subscribe",
    success: "Thanks! Check your inbox to confirm.",
    privacy: "By subscribing you agree to our privacy policy.",
  },

  cart: {
    title: "Your cart",
    subtotal: (n: number) => `Subtotal (${n} ${enItems(n)})`,
    checkout: "Checkout",
    emptyTitle: "Your cart is empty",
    emptyText: "Add something your pet will love.",
    continue: "Continue shopping",
    awayPre: "You’re",
    awayPost: "away from free shipping",
    unlocked: "You’ve unlocked free shipping! 🎉",
    remove: (name: string) => `Remove ${name}`,
    decrease: (name: string) => `Decrease ${name} quantity`,
    increase: (name: string) => `Increase ${name} quantity`,
  },

  wishlist: {
    title: "Wishlist",
    emptyTitle: "No favourites yet",
    emptyText: "Tap the heart on any product to save it here.",
    browse: "Browse products",
    remove: (name: string) => `Remove ${name} from wishlist`,
    addToCart: "Add to cart",
  },

  search: {
    placeholder: "Search for food, toys, beds…",
    aria: "Search products",
    close: "Close search",
    popular: "Popular:",
    suggestions: ["Dog food", "Cat toys", "Beds", "Treats", "Bowls"],
    noResults: (q: string) => `No results for “${q}”.`,
    add: "Add",
  },

  drawer: {
    close: "Close",
    closePanel: "Close panel",
  },

  mobileMenu: {
    open: "Open menu",
    close: "Close menu",
  },

  sticky: {
    shop: "Shop",
  },

  backToTop: "Back to top",

  footer: {
    tagline:
      "Everything your pets love — vet-approved quality, delivered fast to your door.",
    columns: {
      shop: {
        title: "Shop",
        links: ["Dogs", "Cats", "Small Pets", "Toys & Accessories"],
      },
      about: {
        title: "About",
        links: ["Our story", "Blog", "Careers", "Sustainability"],
      },
      help: {
        title: "Help",
        links: ["Shipping", "Returns", "FAQ", "Contact"],
      },
    },
    email: "Email",
    rights: "© 2026 Pretty.bg. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
  },
};

export type Dict = typeof en;

const bg: Dict = {
  meta: {
    title: "Pretty.bg — Всичко, което любимците ви обичат",
  },

  a11y: {
    skipToContent: "Към съдържанието",
    languageGroup: "Език",
    switchToBg: "Смени езика на български",
    switchToEn: "Switch language to English",
  },

  nav: {
    home: "Начало",
    shop: "Магазин",
    delivery: "Доставка и плащане",
    brands: "Марки",
    blog: "Блог",
  },

  announcement: {
    freePre: "Безплатна доставка за поръчки над",
    amount: "49 €",
    support: "24/7 Ветеринар",
    dismiss: "Затвори съобщението",
  },

  header: {
    home: "Pretty.bg начало",
    search: "Търсене (натисни / )",
    favorites: (n: number) => `Любими, ${n} ${bgItems(n)}`,
    cart: (n: number) => `Количка, ${n} ${bgItems(n)}`,
  },

  account: {
    menu: "Меню на профила",
    greeting: "Здравей 👋",
    subtitle: "Влез за по-бърза поръчка",
    signIn: "Вход",
    myOrders: "Моите поръчки",
    wishlist: "Любими",
    settings: "Настройки",
  },

  hero: {
    line1: ["Всичко,", "което"],
    line2: ["любимците", "обичат"],
    headingFull: "Всичко, което любимците ви обичат",
    mobileSubtitle:
      "Уютни легла, вкусни лакомства и всичко необходимо за най-добрия ви приятел.",
    explore: "Разгледай продуктите",
    happyCustomers: "Доволни клиенти",
    bestProducts: "Най-добрите продукти за вашия любимец",
    imageAlt: "Щастливи любимци, които живеят уютно с Pretty.bg",
  },

  benefits: {
    aria: "Защо да пазарувате от Pretty.bg",
    items: [
      { title: "Безплатна и бърза доставка", text: "За всички поръчки над 49 €" },
      { title: "Одобрено от ветеринари", text: "Доверие от 500+ ветеринари" },
      { title: "Лесно връщане до 30 дни", text: "Връщане без усложнения" },
      { title: "Сигурно плащане", text: "Криптирано плащане" },
    ],
  },

  categories: {
    eyebrow: "Категории",
    title: "Пазарувай за своя любимец",
    subtitle:
      "Най-добавяните в количката този месец — одобрени от ветеринари и тествани от нас.",
    products: "продукта",
    names: {
      dogs: "Кучета",
      cats: "Котки",
      "small-pets": "Малки любимци",
      toys: "Играчки и аксесоари",
    },
  },

  bestSellers: {
    eyebrow: "Хитове",
    title: "Обичани от любимци и стопани",
    subtitle:
      "Най-добавяните в количката този месец — одобрени от ветеринари и тествани с лапички.",
    viewAll: "Виж всички продукти",
  },

  product: {
    addToCart: "В количката",
    addAria: (name: string) => `Добави ${name} в количката`,
    save: (name: string) => `Добави ${name} в любими`,
    unsave: (name: string) => `Премахни ${name} от любими`,
    names: {
      "ceramic-bowl": "Керамична купа Premium",
      "grain-free-food": "Храна за куче без зърно",
      "feather-teaser": "Играчка с перце",
      "walking-set": "Комплект за разходка",
      "salmon-treats": "Лакомства със сьомга",
      "adult-dry-food": "Суха храна за възрастни 5 кг",
      "orthopedic-bed": "Ортопедично легло",
      "cat-scratcher": "Модерна драскалка за котки",
    },
    badges: {
      bestseller: "Хит",
      new: "Ново",
    },
  },

  story: {
    imageAlt: "Двойка със своето кученце по време на пътуване",
    eyebrow: "Нашето обещание",
    title: "Всичко, което любимците ви обичат",
    body: "Pretty.bg започна с едно убеждение: нашите компаньони заслужават същата грижа, която даваме на себе си. Всеки продукт е избран от истински стопани и прегледан от ветеринари — за да пазарувате уверено, а те да живеят своя най-уютен и щастлив живот.",
    points: [
      "Съставена от ветеринари храна и безопасни, нетоксични материали",
      "Етичен произход и устойчиво опаковане",
      "Безплатно връщане и гаранция за удовлетворение при всяка поръчка",
    ],
    shopNow: "Пазарувай сега",
    ourStory: "Нашата история",
  },

  why: {
    eyebrow: "Защо Pretty.bg",
    title: "Грижа, в която можете да сте сигурни",
    subtitle:
      "Малките неща, които правят голяма разлика за вас и вашия най-добър приятел.",
    items: [
      {
        title: "Одобрено от ветеринари",
        text: "Всеки продукт е прегледан от лицензирани ветеринари, преди да стигне до вашия любимец.",
      },
      {
        title: "Устойчиво и безопасно",
        text: "Нетоксични материали и рециклируема, лека опаковка при всичко, което изпращаме.",
      },
      {
        title: "Доставка за 24 часа",
        text: "Бърза и проследима доставка — повечето поръчки пристигат още на следващия ден.",
      },
      {
        title: "Винаги до вас",
        text: "Поддръжка 24/7 и гаранция за удовлетворение без излишни въпроси при всяка покупка.",
      },
    ],
  },

  reviews: {
    eyebrow: "Отзиви",
    lovedByPre: "Обичани от",
    lovedByPost: "стопани",
    subtitle:
      "Истински думи от истински клиенти — и техните прекрасни момчета и момичета.",
    happyCustomers: "доволни клиенти",
    fiveStar: "петзвездни отзива",
    asSeenIn: "Писаха за нас",
    verified: "Потвърдена покупка",
    items: {
      emma: {
        pet: "Стопанка на Biscuit",
        quote:
          "Ортопедичното легло промени всичко за възрастното ми кученце. Бърза доставка, страхотно качество и Biscuit не слиза от него.",
      },
      daniel: {
        pet: "Стопанин на Miso",
        quote:
          "Най-накрая магазин, който разбира. Храната без зърно е одобрена от ветеринари и дори капризната ми котка я обожава. Поръчвам отново и отново.",
      },
      sofia: {
        pet: "Стопанка на зайчето Clover",
        quote:
          "Красива опаковка, нетоксични материали и наистина полезна поддръжка 24/7. Pretty.bg вече е първият ми избор за всичко.",
      },
    },
  },

  newsletter: {
    eyebrow: "Присъедини се към глутницата",
    title: "Вземи 10% отстъпка от първата поръчка",
    subtitle:
      "Абонирай се за лакомства, съвети и оферти само за членове. Без спам — само доброто.",
    emailLabel: "Имейл адрес",
    placeholder: "you@example.com",
    subscribe: "Абонирай се",
    success: "Благодарим! Провери пощата си за потвърждение.",
    privacy: "Абонирайки се, приемаш политиката ни за поверителност.",
  },

  cart: {
    title: "Количка",
    subtotal: (n: number) => `Междинна сума (${n} ${bgItems(n)})`,
    checkout: "Плащане",
    emptyTitle: "Количката е празна",
    emptyText: "Добави нещо, което любимецът ти ще хареса.",
    continue: "Продължи пазаруването",
    awayPre: "Остават ти",
    awayPost: "до безплатна доставка",
    unlocked: "Отключи безплатна доставка! 🎉",
    remove: (name: string) => `Премахни ${name}`,
    decrease: (name: string) => `Намали количеството на ${name}`,
    increase: (name: string) => `Увеличи количеството на ${name}`,
  },

  wishlist: {
    title: "Любими",
    emptyTitle: "Все още няма любими",
    emptyText: "Докосни сърцето на продукт, за да го запазиш тук.",
    browse: "Разгледай продуктите",
    remove: (name: string) => `Премахни ${name} от любими`,
    addToCart: "В количката",
  },

  search: {
    placeholder: "Търси храна, играчки, легла…",
    aria: "Търсене на продукти",
    close: "Затвори търсенето",
    popular: "Популярни:",
    suggestions: ["Кучешка храна", "Играчки за котки", "Легла", "Лакомства", "Купи"],
    noResults: (q: string) => `Няма резултати за „${q}“.`,
    add: "Добави",
  },

  drawer: {
    close: "Затвори",
    closePanel: "Затвори панела",
  },

  mobileMenu: {
    open: "Отвори менюто",
    close: "Затвори менюто",
  },

  sticky: {
    shop: "Магазин",
  },

  backToTop: "Нагоре",

  footer: {
    tagline:
      "Всичко, което любимците ви обичат — качество, одобрено от ветеринари, доставено бързо до вашата врата.",
    columns: {
      shop: {
        title: "Магазин",
        links: ["Кучета", "Котки", "Малки любимци", "Играчки и аксесоари"],
      },
      about: {
        title: "За нас",
        links: ["Нашата история", "Блог", "Кариери", "Устойчивост"],
      },
      help: {
        title: "Помощ",
        links: ["Доставка", "Връщане", "Въпроси", "Контакти"],
      },
    },
    email: "Имейл",
    rights: "© 2026 Pretty.bg. Всички права запазени.",
    privacy: "Поверителност",
    terms: "Условия",
  },
};

export const translations: Record<Locale, Dict> = { en, bg };
