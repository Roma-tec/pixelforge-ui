# PixelForge — UI/UX дизайн графического редактора

Лабораторная работа **S2G11 «Проект интерфейса программной системы»**, вариант № 3 «Графический редактор».

Проект представляет собой полный комплект UI/UX-дизайна кроссплатформенного графического редактора: от технического задания и исследования аудитории до готовых макетов, UI-китов, диаграмм и материалов для передачи в разработку.

---

## Что внутри

| Артефакт | Количество / где |
|---|---|
| Экраны интерфейса | **12** (включая все обязательные) в 3 разрешениях |
| Фреймы-макеты (вектор) | 21 SVG + 21 PNG-превью → `design/export/` |
| UI-киты | **3**: светлая тема, тёмная тема, мобильный кит |
| UML Use-Case | 19 прецедентов, 5 акторов → `design/export/PixelForge_Diagrammy.pdf` |
| User Flow | 3 ключевых сценария + **User Flow Map на листе A4** (8 обязательных элементов) |
| Фильтры и эффекты | 120+ (включая пресеты) |
| Иконки | 148, сетка 24 × 24 |
| Design tokens | 96 токенов → `tokens/tokens.json`, `tokens/tokens.css` |
| Документация | 11 разделов отчёта + content / a11y / responsive → `docs/` |
| PDF отчёта | `design/export/PixelForge_Makety.pdf` (19 стр. A4) |

## Обязательные элементы (по методичке)

- ✅ не менее 8 экранов — сделано **12**
- ✅ экран регистрации / авторизации — `S1_Auth_*`
- ✅ главный экран (рабочая область) — `S2_Canvas_Dark`
- ✅ несколько UI-китов, в том числе **тёмная тема** — `UI_Kit_Dark`, `UI_Kit_Light`, мобильный кит
- ✅ UML Use-Case диаграмма
- ✅ User Flow Map на 1 листе A4 с 8 ключевыми элементами
- ✅ PDF (векторный) и репозиторий с историей коммитов

## Состав экранов

| Код | Экран | Файл |
|---|---|---|
| S1 | Регистрация / авторизация | `design/export/svg/S1_Auth_Dark.svg` |
| S0 | Дашборд «Мои проекты» | `S0_Dashboard_Dark.svg` |
| S2 | **Главный экран — рабочая область** | `S2_Canvas_Dark.svg` |
| S3 | Настройки профиля | `S3_Settings.svg` |
| S4 | Работа со слоями | `S4_Layers.svg` |
| S5 | Фильтры и эффекты | `S5_Filters.svg` |
| S6 | Экспорт | `S6_Export.svg` |
| S7 | История действий | `S7_History.svg` |
| S8 | Кисти и палитра | `S8_Brushes.svg` |
| S9 | Мобильная рабочая область | `S9_Mobile_Portrait.svg`, `S9_Mobile_Landscape.svg` |
| S10 | Библиотека шаблонов | `S10_Templates.svg` |
| S11 | Администрирование и служебные состояния | `S11_Admin.svg` |

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

1. **PDF отчёта:** откройте `design/export/PixelForge_Makety.pdf` (макеты) и `design/export/PixelForge_Diagrammy.pdf` (диаграммы).
2. **Быстрый просмотр:** папка `design/export/screens/` — PNG каждого экрана.
3. **Figma:** перетащите SVG-файлы из `design/export/svg/` в файл Figma — они импортируются как векторные слои с редактируемым текстом.
4. **Токены для кода:** подключите `tokens/tokens.css` или импортируйте `tokens/tokens.json`.

## Структура репозитория

```
pixelforge-ui/
├─ docs/                     документация (11 разделов + content/a11y/responsive)
├─ design/export/
│  ├─ PixelForge_Makety.pdf      итоговый PDF с макетами (19 стр. A4)
│  ├─ PixelForge_Diagrammy.pdf   UML Use-Case + User Flow Map A4
│  ├─ svg/                       21 векторный макет
│  └─ screens/                   21 PNG-превью
├─ tokens/                   tokens.json, tokens.css
├─ assets/                   иконки, логотип, иллюстрации, шрифты, lottie
├─ CHANGELOG.md
└─ LICENSE
```

## Технологии и инструменты
Figma (макеты, компоненты, Prototype, Dev Mode) · SVG (векторные исходники) · Chrome headless (экспорт PDF) · Markdown (документация) · Git (история версий).

## Лицензия
Учебный проект. Текст и макеты распространяются по лицензии MIT (см. [LICENSE](LICENSE)).
