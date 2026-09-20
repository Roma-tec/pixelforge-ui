# PixelForge — UI/UX дизайн графического редактора

Лабораторная работа **S2G11 «Проект интерфейса программной системы»**, вариант № 3 «Графический редактор».

Проект представляет собой полный комплект UI/UX-дизайна кроссплатформенного графического редактора: от технического задания и исследования аудитории до готовых макетов, UI-китов, диаграмм и материалов для передачи в разработку.

---

## Что внутри

| Артефакт | Количество / где |
|---|---|
| Экраны интерфейса | **12** (включая все обязательные) в 3 разрешениях |
| Фреймы-макеты (вектор) | **32 SVG + 32 PNG-превью** (каждый экран в светлой и тёмной темах) → `design/export/` |
| **Интерактивный прототип** | **`prototype/index.html`** — 18 экранов, 103 кликабельные зоны, 5 сценариев |
| UI-киты | **3**: светлая тема, тёмная тема, мобильный кит |
| UML Use-Case | 19 прецедентов, 5 акторов → `design/export/PixelForge_Diagrammy.pdf` |
| User Flow | 3 ключевых сценария + **User Flow Map на листе A4** (8 обязательных элементов) |
| Фильтры и эффекты | 120+ (включая пресеты) |
| Иконки | 148, сетка 24 × 24 |
| Design tokens | 96 токенов → `tokens/tokens.json`, `tokens/tokens.css` |
| Документация | 11 разделов отчёта + content / a11y / responsive → `docs/` |
| PDF отчёта | `design/export/PixelForge_Makety.pdf` (30 стр. A4) |

## Обязательные элементы (по методичке)

- ✅ не менее 8 экранов — сделано **12**
- ✅ экран регистрации / авторизации — `S1_Auth_Dark` / `S1_Auth_Light`
- ✅ главный экран (рабочая область) — `S2_Canvas_Dark` / `S2_Canvas_Light`
- ✅ несколько UI-китов, в том числе **тёмная тема** — `UI_Kit_Dark`, `UI_Kit_Light`, мобильный кит
- ✅ UML Use-Case диаграмма
- ✅ User Flow Map на 1 листе A4 с 8 ключевыми элементами
- ✅ **интерактивный прототип** (`prototype/index.html`): переходы, сценарии, переключение тем
- ✅ **светлая и тёмная темы для всех 12 экранов**
- ✅ PDF (векторный) и репозиторий с историей коммитов

## Состав экранов

Каждый экран существует в двух темах: `*_Dark.svg` и `*_Light.svg`.

| Код | Экран | Файл (тёмная / светлая) |
|---|---|---|
| S1 | Регистрация / авторизация | `S1_Auth_Dark` / `S1_Auth_Light` |
| S0 | Дашборд «Мои проекты» | `S0_Dashboard_Dark` / `S0_Dashboard_Light` |
| S2 | **Главный экран — рабочая область** | `S2_Canvas_Dark` / `S2_Canvas_Light` |
| S3 | Настройки профиля | `S3_Settings_Dark` / `S3_Settings_Light` |
| S4 | Работа со слоями | `S4_Layers_Dark` / `S4_Layers_Light` |
| S5 | Фильтры и эффекты | `S5_Filters_Dark` / `S5_Filters_Light` |
| S6 | Экспорт | `S6_Export_Dark` / `S6_Export_Light` |
| S7 | История действий | `S7_History_Dark` / `S7_History_Light` |
| S8 | Кисти и палитра | `S8_Brushes_Dark` / `S8_Brushes_Light` |
| S9 | Мобильная рабочая область | `S9_Mobile_Portrait_*`, `S9_Mobile_Landscape_*` |
| S10 | Библиотека шаблонов | `S10_Templates_Dark` / `S10_Templates_Light` |
| S11 | Администрирование | `S11_Admin_Dark` / `S11_Admin_Light` |

Все файлы — в `design/export/svg/`, растровые превью — в `design/export/screens/`.

## Интерактивный прототип

Файл **`prototype/index.html`** — самодостаточный (всё внутри одного файла, интернет не нужен).
Достаточно открыть его двойным щелчком в любом браузере.

**Что умеет:**
- 18 экранов прототипа (12 интерфейсных в двух темах + UI-кит, moodboard, диаграммы);
- **103 кликабельные зоны** — переходы между экранами, как в настоящем приложении;
- **5 сценариев** по шагам: создание проекта, применение фильтра, работа со слоями, экспорт, мобильный сценарий;
- **переключение светлой и тёмной темы** — прямо во время просмотра (кнопка «Тема» или клавиша `T`);
- кнопка **«Зоны»** (`H`) — показывает все кликабельные области, удобно для защиты работы;
- горячие клавиши: `←` `→` — экраны, `Esc` — назад, `T` — тема, `H` — зоны.

> Если репозиторий опубликован через GitHub Pages, прототип открывается по адресу
> `https://<логин>.github.io/pixelforge-ui/prototype/`

## Документация

| Раздел | Файл |
|---|---|
| 1. Техническое задание (роли, уровни доступа) | [docs/01-tech-spec.md](docs/01-tech-spec.md) |
| 2. Исследование (ЦА, конкуренты) | [docs/02-research.md](docs/02-research.md) |
| 3. Пользовательские сценарии + UML Use-Case | [docs/03-user-scenarios.md](docs/03-user-scenarios.md) |
| 4. Информационная архитектура и User Flow | [docs/04-ia-userflow.md](docs/04-ia-userflow.md) |
| 5. Прототипирование | [docs/05-prototyping.md](docs/05-prototyping.md) |
| 6. Стилистика, moodboard, UI-киты | [docs/06-style-moodboard.md](docs/06-style-moodboard.md) |
| 7. Описание экранов | [docs/07-screens.md](docs/07-screens.md) |
| 8. Анимация интерфейса | [docs/08-motion.md](docs/08-motion.md) |
| 9. Передача в разработку | [docs/09-handoff.md](docs/09-handoff.md) |
| 10. Отчёт и сдача | [docs/10-report-and-delivery.md](docs/10-report-and-delivery.md) |
| 11. Приложения | [docs/11-appendix.md](docs/11-appendix.md) |
| UX-writing | [docs/content.md](docs/content.md) |
| Доступность (WCAG AA) | [docs/a11y.md](docs/a11y.md) |
| Адаптивность | [docs/responsive.md](docs/responsive.md) |

## Дизайн-токены

```css
:root {
  --accent-500: #6C4CF1;   /* основной акцент */
  --bg-1: #F7F7FA;         /* фон приложения (светлая) */
  --text-1: #0F0F14;       /* основной текст */
  --radius-md: 8px;
  --space-4: 16px;
  --dur-base: 240ms;
}
[data-theme='dark'] {
  --bg-1: #121218;         /* фон приложения (тёмная) */
  --bg-2: #1B1B23;
  --text-1: #F2F2F7;
  --accent-500: #8A73F5;
}
```

Полный набор: [`tokens/tokens.json`](tokens/tokens.json), [`tokens/tokens.css`](tokens/tokens.css).

## Палитра

| Токен | HEX | Назначение |
|---|---|---|
| accent/500 | `#6C4CF1` | активный инструмент, главное действие |
| accent/secondary | `#F14CA6` | смарт-гайды, бейдж PRO |
| accent/tertiary | `#2BD9C3` | третичный акцент |
| bg/dark-1 | `#121218` | фон приложения, тёмная тема |
| bg/dark-2 | `#1B1B23` | панели, холст |
| text/dark-1 | `#F2F2F7` | основной текст в тёмной теме |
| success / warning / error / info | `#16A34A` / `#D97706` / `#DC2626` / `#2563EB` | семантика |

## Как открыть

1. **Интерактивный прототип:** откройте `prototype/index.html` в браузере (двойной щелчок).
2. **PDF отчёта:** откройте `design/export/PixelForge_Makety.pdf` (макеты) и `design/export/PixelForge_Diagrammy.pdf` (диаграммы).
3. **Быстрый просмотр:** папка `design/export/screens/` — PNG каждого экрана (тёмная и светлая темы).
4. **Figma:** перетащите SVG-файлы из `design/export/svg/` в файл Figma — они импортируются как векторные слои с редактируемым текстом.
5. **Токены для кода:** подключите `tokens/tokens.css` или импортируйте `tokens/tokens.json`.

## Структура репозитория

```
pixelforge-ui/
├─ prototype/index.html          интерактивный прототип (всё в одном файле)
├─ docs/                     документация (11 разделов + content/a11y/responsive)
├─ design/export/
│  ├─ PixelForge_Makety.pdf      итоговый PDF с макетами (30 стр. A4)
│  ├─ PixelForge_Diagrammy.pdf   UML Use-Case + User Flow Map A4
│  ├─ svg/                       32 векторных макета (светлая + тёмная темы)
│  └─ screens/                   32 PNG-превью
├─ tokens/                   tokens.json, tokens.css
├─ assets/                   иконки, логотип, иллюстрации, шрифты, lottie
├─ CHANGELOG.md
└─ LICENSE
```

## Технологии и инструменты
Figma (макеты, компоненты, Prototype, Dev Mode) · SVG (векторные исходники) · Chrome headless (экспорт PDF) · Markdown (документация) · Git (история версий).

## Лицензия
Учебный проект. Текст и макеты распространяются по лицензии MIT (см. [LICENSE](LICENSE)).
