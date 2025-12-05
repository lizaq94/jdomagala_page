# Plan Migracji na Tailwind CSS

## 📊 Podsumowanie

**Skala trudności:** ŚREDNIA DO WYSOKIEJ (6/10)
**Szacowany czas:** 25-35 godzin
**Data utworzenia:** 2025-12-05

---

## 🚀 PLAN MIGRACJI NA TAILWIND CSS

### **FAZA 1: SETUP I KONFIGURACJA** (2-3h)

#### **Krok 1: Instalacja Tailwind CSS**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Co to da:**
- Zainstaluje Tailwind + zależności
- Utworzy `tailwind.config.js` i `postcss.config.js`

---

#### **Krok 2: Konfiguracja tailwind.config.js**

Stworzenie custom configuration bazując na obecnych zmiennych:

```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          dark: '#0056b3',
          light: '#3395ff',
        },
        background: '#f8f5f9',
        bodyFont: '#0c090d',
      },
      fontFamily: {
        primary: ['var(--fontPrimary)', 'sans-serif'],
        secondary: ['var(--fontSecondary)', 'serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      height: {
        navigation: '118px',
      },
      spacing: {
        // Zachowanie specyficznych spacing values
        '18': '4.5rem',    // 72px
        '22': '5.5rem',    // 88px
        '26': '6.5rem',    // 104px
        '30': '7.5rem',    // 120px
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
```

**Mapping obecnych zmiennych SCSS do Tailwind:**
- `$primaryColor: #007bff` → `bg-primary`, `text-primary`
- `$backgroundColor: #f8f5f9` → `bg-background`
- `$containerMaxWidth: 1200px` → `max-w-container`
- `$navigationMaxHeight: 118px` → `h-navigation`

---

#### **Krok 3: Migracja global styles**

**Obecnie:** `styles/base/global.scss` (55 linii)

**Nowy:** `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables dla czcionek Google Fonts - bez zmian */
:root {
  --fontPrimary: 'Open Sans', sans-serif;
  --fontSecondary: 'Raleway', serif;
}

/* Swiper customization - pozostanie */
@layer base {
  html {
    --swiper-navigation-size: 22px !important;
    --swiper-pagination-color: #007bff;
    --swiper-navigation-color: white;
    --swiper-pagination-bullet-size: 15px;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-inactive-opacity: 0.4;
  }

  body {
    @apply text-bodyFont font-primary bg-white min-h-screen overflow-x-hidden;
    --scroll-behavior: smooth !important;
    scroll-behavior: smooth !important;
    scroll-padding: 50px;
  }

  a {
    @apply text-white no-underline;
  }

  button {
    @apply font-[inherit];
  }
}

/* Custom Swiper buttons */
@layer components {
  .swiper-button-prev,
  .swiper-button-next {
    @apply w-[30px] h-[30px] rounded-full bg-primary;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    @apply text-[15px];
  }
}
```

**Co usuwamy:**
- `_variables.scss` → przeniesione do `tailwind.config.js`
- `_mixins.scss` → zastąpione przez Tailwind utilities
- `_breakpoints.scss` → zastąpione przez Tailwind screens

---

### **FAZA 2: KONWERSJA KOMPONENTÓW PODSTAWOWYCH** (4-6h)

#### **Krok 4: Button Component**

**Priorytet: WYSOKI** (używany wszędzie)

**Przed:** `styles/components/Button.module.scss` (118 linii)

**Po:** Inline Tailwind classes + custom animations

```tsx
// components/Button/Button.tsx
const Button = ({ variant = 'outline', hover = true, ...props }) => {
  const baseClasses = "relative font-primary text-xl font-light leading-tight mr-8 px-4 py-2.5 z-10 uppercase cursor-pointer transition-all duration-300";

  const variantClasses = {
    outline: "border border-white bg-transparent hover:bg-primary hover:text-white",
    filled: "bg-primary text-white border-none hover:bg-primary-dark",
  };

  const hoverBorderClass = hover ? "hover-border-effect" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${hoverBorderClass} active:scale-90`}
      {...props}
    />
  );
};
```

**Custom animation w globals.css:**

```css
@layer components {
  .hover-border-effect {
    @apply relative;
  }

  .hover-border-effect::before,
  .hover-border-effect::after {
    content: '';
    @apply absolute w-0 h-0 transition-all duration-500;
  }

  .hover-border-effect::after {
    @apply top-[-1px] left-[-1px];
  }

  .hover-border-effect::before {
    @apply bottom-[-1px] right-[-1px];
  }

  .hover-border-effect:hover::after,
  .hover-border-effect:hover::before {
    @apply w-full h-full;
  }

  .hover-border-effect:hover::after {
    @apply border-t-2 border-l-2 border-primary;
  }

  .hover-border-effect:hover::before {
    @apply border-b-2 border-r-2 border-primary;
  }
}
```

**Oszczędność:** 118 linii SCSS → ~20 linii TSX + component CSS

---

#### **Krok 5: Input Component**

**Przed:** `styles/components/Input.module.scss`

**Po:**

```tsx
<div className="w-full mb-12 md:mb-[50px]">
  <div className="relative">
    <input
      className={`
        w-full px-4 py-3
        bg-transparent border border-gray-300 rounded
        text-bodyFont font-primary text-base
        transition-all duration-200
        focus:outline-none focus:border-primary
        ${error ? 'border-red-500' : ''}
      `}
      placeholder={label}
    />
    {error && (
      <p className="text-red-500 text-sm mt-2">{error}</p>
    )}
  </div>
</div>
```

---

#### **Krok 6: Heading Component**

**Przed:** `styles/components/Heading.module.scss` (8 linii)

**Po:**

```tsx
<h2 className="w-full mb-[70px] font-secondary text-5xl md:text-6xl leading-tight font-bold text-center uppercase">
  {title} <span className="text-primary">{highlightedText}</span>
</h2>
```

**Mapping:**
- `@include sectionTitle` → `text-5xl md:text-6xl font-secondary font-bold uppercase text-center`
- `span { color: $primaryColor }` → `text-primary`

---

### **FAZA 3: KONWERSJA LAYOUTÓW I NAVIGATION** (4-5h)

#### **Krok 7: Navigation Component**

**Przed:** `styles/components/Navigation.module.scss` (100 linii)

**Po:**

```tsx
<header className={`w-full ${!isHomePage ? 'md:shadow-lg' : ''}`}>
  <nav className={`
    relative flex flex-col w-full max-w-container max-h-navigation
    mx-auto pt-5 md:pt-0 md:pb-2.5 z-10
    font-primary
    ${isHomePage ? 'text-white' : 'text-gray-900'}
  `}>
    {/* Additional info */}
    <div className="hidden md:flex justify-end items-center my-2.5 mx-0 font-light text-xs">
      <span className="mr-5">{email}</span>
      <span className="mr-2.5">{phone}</span>
    </div>

    {/* Logo and buttons */}
    <div className="flex items-center justify-end">
      <div className="relative h-20 w-[270px] z-10 ml-5 md:ml-0 md:mr-auto">
        <Image src={logo} alt="Logo" fill className="object-contain" />
      </div>

      <div className="hidden md:flex">
        {/* Desktop navigation buttons */}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <HamburgerButton />
      </div>
    </div>
  </nav>
</header>
```

**Oszczędność:** 100 linii SCSS → inline Tailwind

---

#### **Krok 8: Footer Component**

Podobne podejście jak Navigation - konwersja inline Tailwind classes.

---

### **FAZA 4: KONWERSJA SEKCJI** (8-10h)

#### **Krok 9: HeroSection**

**Przed:** `styles/sections/HeroSection.module.scss` (66 linii)

**Po:**

```tsx
<section className="relative w-full border border-transparent z-0 text-white">
  <div className="w-full max-w-container mx-auto mt-[130px] mb-[190px]">
    <div className="w-full max-w-3xl flex flex-col items-start px-5 md:px-0">
      <h1 className="w-full mb-[70px] font-secondary text-5xl md:text-6xl leading-tight font-bold text-left uppercase">
        {title}
      </h1>
      <p className="w-4/5 mb-10 text-base md:text-xl font-light leading-7 md:leading-8">
        {description}
      </p>
      <Button variant="outline" hover>{buttonText}</Button>
    </div>
  </div>

  {/* Background image with overlay */}
  <div
    className="absolute top-[-123px] left-[-5px] w-[calc(100vw+5px)] h-[calc(100%+118px)] -z-10 bg-cover"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black/50" />
  </div>
</section>
```

**Mapping:**
- `margin: 130px auto 190px` → `mt-[130px] mb-[190px]`
- `max-width: 780px` → `max-w-3xl`
- `rgba(0, 0, 0, 0.5)` → `bg-black/50`

---

#### **Krok 10: WhyWeSection (WhyWeBlock)**

**Przed:** `styles/sections/WhyWeBlock.module.scss` (71 linii)

**Po:**

```tsx
<div
  className="
    relative flex flex-col justify-center
    w-full min-h-[300px] p-12 mb-0
    text-white bg-cover cursor-pointer
    md:mb-0 md:max-w-[calc(33.333%-20px)] md:rounded-lg
    before:content-[''] before:absolute before:inset-0
    before:bg-black/60 before:z-0 before:md:rounded-lg
    hover:[&_.block-number]:text-primary
  "
  style={{ backgroundImage: `url(${image})` }}
>
  <h3 className="relative z-10 text-3xl font-bold leading-[34.5px] mb-2.5">
    {title}
  </h3>
  <p className="relative z-10 text-base font-light leading-[19px]">
    {description}
  </p>
  <span className="block-number absolute top-5 right-5 font-black text-4xl opacity-80 transition-colors duration-300">
    {number}
  </span>
</div>
```

**Tailwind features użyte:**
- `before:` pseudo-element utilities
- `hover:[&_.block-number]:` nested hover state
- `bg-black/60` opacity notation
- `calc()` arbitrary values: `max-w-[calc(33.333%-20px)]`

---

#### **Krok 11: AboutUsSection**

**Przed:** `styles/sections/AboutUsSection.module.scss` (60 linii)

**Po:**

```tsx
<div className="flex flex-col md:flex-row md:h-[600px] w-full">
  {/* Left side - image */}
  <div className="mb-[-10px] md:mb-0 md:mr-[-30px] md:py-7.5 md:flex-[0_0_50%]">
    <Image
      src={image}
      alt="About us"
      className="relative w-full h-full object-cover z-10"
    />
  </div>

  {/* Right side - content */}
  <div className="
    flex flex-col justify-center items-center
    p-10 md:px-7.5 md:pl-[calc(30px+30px)]
    bg-primary text-white
    md:flex-[0_0_50%]
  ">
    {paragraphs.map((text, i) => (
      <p key={i} className="text-lg font-light leading-5 font-primary mb-5">
        {text}
      </p>
    ))}
  </div>
</div>
```

---

#### **Krok 12: Pozostałe sekcje**

- **ServicesSection (WhatWeDoBlock)** - podobny pattern do WhyWeBlock
- **AchievementSection** - counters + grid layout
- **ProjectsSection** - carousel/grid layout
- **ContactUsSection** - form layout

---

### **FAZA 5: CUSTOM ANIMATIONS I ZŁOŻONE EFEKTY** (3-4h)

#### **Krok 13: Custom Keyframe Animations**

**Button loader animation:**

W `globals.css`:

```css
@layer utilities {
  @keyframes spin-loader {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .animate-spin-loader {
    animation: spin-loader 1s linear infinite;
  }
}
```

Użycie:

```tsx
<span className="inline-block w-7 h-7 border-2 border-white border-b-transparent rounded-full animate-spin-loader" />
```

---

#### **Krok 14: Framer Motion Integration**

Animacje z `framer-motion` pozostają bez zmian:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="..." // Tailwind classes
>
```

---

### **FAZA 6: POZOSTAŁE KOMPONENTY** (4-5h)

#### **Krok 15: Konwersja pozostałych komponentów:**

1. **CarouselSwiper** - głównie Swiper config, mało CSS
2. **FlexBlocks** - prosty layout
3. **Gallery** - grid layout
4. **Slider** - Swiper wrapper
5. **ProjectBlock** - podobny do WhyWeBlock
6. **AnimatedCounter** - animation pozostaje
7. **Form** - layout + validation styles
8. **FormNotification** (Toast) - positioning + animations
9. **PhoneInput** - wrapper dla react-phone-number-input
10. **HamburgerButton** - burger icon animation

**Każdy komponent: ~30-45 min**

---

### **FAZA 7: DYNAMIC PAGES** (2h)

#### **Krok 16: ProjectView & ServiceView**

**Przed:**
- `styles/pages/ProjectView.module.scss`
- `styles/pages/ServiceView.module.scss`

**Po:** Inline Tailwind w:
- `app/project/[slug]/page.tsx`
- `app/service/[slug]/page.tsx`

---

### **FAZA 8: TESTING I OPTIMIZATION** (3-4h)

#### **Krok 17: Comprehensive Testing**

**Checklist:**
- ✅ Desktop (1920px, 1440px, 1280px)
- ✅ Tablet (1024px, 768px)
- ✅ Mobile (640px, 480px, 375px)
- ✅ Wszystkie hover states
- ✅ Wszystkie animacje
- ✅ Swiper functionality
- ✅ Formularze (validation, submission)
- ✅ Navigation (desktop + mobile)
- ✅ Dynamic routes (/project/[slug], /service/[slug])

**Tools:**

```bash
# Dev server
npm run dev

# Build test
npm run build

# Check bundle size
npm run build && npx @next/bundle-analyzer
```

---

#### **Krok 18: Tailwind Optimization**

**Purge configuration już będzie w `tailwind.config.js`:**

```js
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './sections/**/*.{js,ts,jsx,tsx,mdx}',
],
```

---

### **FAZA 9: CLEANUP** (1-2h)

#### **Krok 19: Usunięcie starych plików**

```bash
# Backup przed usunięciem
git commit -m "Backup przed usunięciem SCSS"

# Usuń stare style
rm -rf styles/

# Usuń sass dependency (jeśli nie jest już używany)
npm uninstall sass
```

**Update `next.config.js`:**

```js
// Usuń sekcję sassOptions:
// sassOptions: {
//   includePaths: [path.join(__dirname, 'styles')],
//   prependData: `@import "@styles/base/main.scss";`,
// },
```

**Update `tsconfig.json`:**

```json
// Usuń z paths:
// "@styles/*": ["./styles/*"]
```

---

## 📊 TIMELINE SUMMARY

| Faza | Czas | Zadania |
|------|------|---------|
| **Faza 1** | 2-3h | Setup, config, global styles |
| **Faza 2** | 4-6h | Button, Input, Heading |
| **Faza 3** | 4-5h | Navigation, Footer |
| **Faza 4** | 8-10h | Wszystkie sekcje |
| **Faza 5** | 3-4h | Custom animations |
| **Faza 6** | 4-5h | Pozostałe komponenty |
| **Faza 7** | 2h | Dynamic pages |
| **Faza 8** | 3-4h | Testing |
| **Faza 9** | 1-2h | Cleanup |
| **TOTAL** | **25-35h** | |

---

## 🎯 PRIORITY ORDER

**Jeśli chcesz rozłożyć pracę w czasie:**

### **Week 1: Foundation (8-10h)**
1. ✅ Setup Tailwind
2. ✅ Config + Global styles
3. ✅ Button, Input, Heading
4. ✅ Navigation

### **Week 2: Content Sections (10-12h)**
5. ✅ HeroSection
6. ✅ ServicesSection (WhatWeDoBlock)
7. ✅ WhyWeSection
8. ✅ AboutUsSection
9. ✅ ProjectsSection

### **Week 3: Finish & Polish (7-10h)**
10. ✅ Pozostałe komponenty
11. ✅ Dynamic pages
12. ✅ Custom animations
13. ✅ Testing
14. ✅ Cleanup

---

## ✅ SUCCESS CRITERIA

Migracja będzie ukończona gdy:

- ✅ Wszystkie 29 plików SCSS usunięte
- ✅ Wszystkie komponenty działają identycznie jak przed migracją
- ✅ Bundle size mniejszy lub podobny
- ✅ Wszystkie testy responsywności przechodzą
- ✅ Build sukces bez błędów
- ✅ Lighthouse score nie spadł (lub wzrósł)

---

## 🚨 POTENCJALNE PROBLEMY I ROZWIĄZANIA

### Problem 1: Złożone pseudo-elementy
**Przykład:** Button hover border animation (Button.module.scss:45-84)

**Rozwiązanie:**
- Użyj custom CSS w `@layer components`
- Lub użyj arbitrary values: `before:content-['']`

### Problem 2: Bardzo długie class stringi
**Przykład:** WhyWeBlock z wieloma conditional classes

**Rozwiązanie:**
- Użyj `clsx` lub `classnames` library
- Lub wydziel do styled components w `globals.css`

```tsx
import clsx from 'clsx';

const classes = clsx(
  'base-classes',
  isActive && 'active-classes',
  isHovered && 'hover-classes'
);
```

### Problem 3: Swiper custom styles
**Rozwiązanie:**
- Pozostaw CSS variables w `globals.css`
- Tailwind dla struktury, CSS variables dla Swiper theming

### Problem 4: Dynamic inline styles
**Przykład:** `backgroundImage` w HeroSection

**Rozwiązanie:**
- Pozostaw inline styles dla wartości dynamicznych z CMS
- Tailwind dla wszystkiego innego

---

## 📚 RESOURCES

### Dokumentacja:
- [Tailwind CSS Official Docs](https://tailwindcss.com/docs)
- [Tailwind with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Tailwind Play (testing)](https://play.tailwindcss.com/)

### Tools:
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) - Class sorter
- [clsx](https://www.npmjs.com/package/clsx) - Conditional classes utility

### Migration helpers:
- [Transform Tools](https://transform.tools/css-to-tailwind) - CSS to Tailwind converter
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

## 💡 TIPS & BEST PRACTICES

### 1. Konsekwencja w użyciu utilities
```tsx
// ✅ Dobry przykład
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ❌ Zły przykład (mixing inline styles)
<div className="flex items-center" style={{ padding: '16px' }}>
```

### 2. Grupowanie related utilities
```tsx
// ✅ Dobry przykład - zgrupowane logicznie
<div className="
  flex items-center justify-between
  p-4 rounded-lg
  bg-white shadow-md
  hover:shadow-lg transition-shadow
">

// ❌ Zły przykład - chaotyczne
<div className="flex bg-white p-4 items-center shadow-md rounded-lg justify-between">
```

### 3. Responsive design patterns
```tsx
// ✅ Mobile-first approach
<div className="text-sm md:text-base lg:text-lg xl:text-xl">

// ❌ Desktop-first (trudniejszy maintenance)
<div className="text-xl lg:text-lg md:text-base sm:text-sm">
```

### 4. Reusable component patterns
```tsx
// Dla często używanych kombinacji, stwórz component wrappers
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);
```

### 5. Custom utilities w config
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Dla często używanych wartości
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
};
```

---

## 🎨 STYLE GUIDE PO MIGRACJI

### Kolory
```tsx
// Primary
bg-primary text-primary border-primary

// Background
bg-background

// Text
text-bodyFont

// Semantic (do dodania w config)
text-success text-error text-warning
```

### Spacing Scale
```tsx
// Używaj scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
p-4    // 16px
m-8    // 32px
gap-6  // 24px

// Arbitrary values tylko dla custom wartości
mt-[130px]  // Tylko gdy nie ma w scale
```

### Typography
```tsx
// Heading sizes
text-6xl  // H1: 64px
text-5xl  // H2: 48px
text-4xl  // H3: 36px
text-3xl  // H4: 30px
text-2xl  // H5: 24px
text-xl   // H6: 20px

// Body
text-base // 16px (default)
text-lg   // 18px
text-sm   // 14px
```

### Font Weights
```tsx
font-light    // 300
font-normal   // 400
font-bold     // 700
font-black    // 900
```

---

## 📝 COMMIT STRATEGY

### Recommended git workflow:

```bash
# Przed rozpoczęciem
git checkout -b feature/tailwind-migration
git commit -m "chore: backup before Tailwind migration"

# Po każdej fazie
git commit -m "feat(tailwind): phase 1 - setup and configuration"
git commit -m "feat(tailwind): phase 2 - basic components (Button, Input, Heading)"
git commit -m "feat(tailwind): phase 3 - Navigation and Footer"
git commit -m "feat(tailwind): phase 4 - all sections migrated"
git commit -m "feat(tailwind): phase 5 - custom animations"
git commit -m "feat(tailwind): phase 6 - remaining components"
git commit -m "feat(tailwind): phase 7 - dynamic pages"
git commit -m "test(tailwind): comprehensive testing complete"
git commit -m "chore(tailwind): cleanup - remove old SCSS files"

# Final merge
git checkout main
git merge feature/tailwind-migration
```

---

## 🔄 ROLLBACK PLAN

W przypadku problemów:

```bash
# Jeśli coś pójdzie nie tak, masz backup w git
git checkout main
git branch -D feature/tailwind-migration

# Lub cofnij specific commit
git revert <commit-hash>
```

**Dlatego ważne jest:**
- Commitowanie po każdej fazie
- Testowanie przed merge do main
- Nie usuwać SCSS dopóki wszystko nie działa

---

## ✨ EXPECTED OUTCOMES

Po ukończeniu migracji oczekujemy:

### Performance:
- ⬇️ Bundle size: **-20% do -40%** (dzięki purging)
- ⬆️ Build time: **podobny lub lepszy**
- ⬆️ Development speed: **+30% do +50%** (po nauczeniu się Tailwind)

### Code Quality:
- 📉 Plików: **29 SCSS → 1 globals.css + inline classes**
- 📉 Lines of code: **~2000 linii SCSS → ~500 linii custom CSS**
- 📈 Maintainability: **znacznie lepszy**

### Developer Experience:
- ✅ IntelliSense autocomplete
- ✅ Nie trzeba wymyślać nazw klas
- ✅ Szybsze prototypowanie
- ✅ Łatwiejsze responsive design
- ✅ Spójny design system

---

**Data utworzenia:** 2025-12-05
**Ostatnia aktualizacja:** 2025-12-05
**Status:** Ready to start
