# Отчёт и порядок сдачи

> Структура PDF, структура репозитория, план коммитов, чек-лист сдачи.
>
> Лабораторная работа S2G11, вариант № 3 «Графический редактор».

---

## 10.1. Структура итогового PDF

| Часть | Содержание | Формат | Источник |
|---|---|---|---|
| Титульный лист | Название работы, вариант, ФИО, группа, преподаватель, год | Фрейм `PDF/00_Cover` 2480×3508 | Figma |
| Часть I. Аналитика | Разделы 1–2 отчёта | Текст | Настоящий документ |
| Часть II. Проектирование | Разделы 3–5 + UML + User Flow Map | Текст + диаграммы | Документ + Figma |
| Часть III. Дизайн | Разделы 6–8 + мокапы экранов | Текст + макеты | Figma (вектор) |
| Часть IV. Передача | Раздел 9 + приложения | Текст + JSON | Документ + репозиторий |
| Приложения | UI-киты, все 12 экранов, лист User Flow Map A4, карта UI-инвентаря | Фреймы | Figma |

**Настройки экспорта PDF из Figma:**
1. Формат: PDF, цвет: sRGB, масштаб: 1×, галочка `Include layer names in PDF` — выкл, `Outline text` — **вкл** (чтобы не потерять шрифты).
2. Каждый экран — отдельная страница в правильном порядке (S1 → S0 → S2 → S3 → S4 → S5 → S6 → S7 → S8 → S9 → S10 → S11 → UI-киты → User Flow Map A4 → Use-Case).
3. Текстовый отчёт — в отдельном PDF/документе или в конце того же файла; вставить фреймами из раздела «PDF/Doc pages».
4. Размер страниц: A4 вертикальный (2480×3508) для всего, кроме экранов desktop (можно вставить горизонтально на A4 landscape 3508×2480).
5. Проверить: текст остался текстом (выделяется), контуры — кривые, размер < 50 МБ.

## 10.2. Структура репозитория GitHub

```
pixelforge-ui/
├─ README.md
├─ CHANGELOG.md
├─ LICENSE
├─ .gitignore
├─ docs/
│  ├─ 01-tech-spec.md          # ТЗ (раздел 1)
│  ├─ 02-research.md           # Исследование (раздел 2)
│  ├─ 03-user-scenarios.md     # Сценарии + Use-Case (раздел 3)
│  ├─ 04-ia-userflow.md        # IA, User Flow, User Flow Map (раздел 4)
│  ├─ 05-wireframes.md         # Черновой прототип (раздел 5)
│  ├─ 06-style-moodboard.md    # Стилистика (раздел 6)
│  ├─ 07-screens.md            # Описание экранов (раздел 7)
│  ├─ 08-motion.md             # Анимации (раздел 8)
│  ├─ 09-handoff.md            # Материалы для разработчиков (раздел 9)
│  ├─ content.md               # UX-writing
│  ├─ a11y.md                  # Доступность
│  └─ responsive.md            # Адаптивность
├─ design/
│  ├─ export/
│  │  ├─ pixelforge-ui.pdf     # Итоговый PDF
│  │  ├─ user-flow-map-a4.pdf  # Карта A4
│  │  ├─ use-case.pdf          # UML Use-Case
│  │  └─ screens/              # PNG-превью каждого экрана
│  └─ source/                  # Ссылка на Figma + резервные .fig
├─ assets/
│  ├─ icons/  logo/  illustrations/  sprites/  fonts/  lottie/  placeholder/
├─ tokens/
│  ├─ tokens.json  tokens.css  tailwind.tokens.js
└─ .github/
   └─ PULL_REQUEST_TEMPLATE.md
```

**Пример README.md (готовый текст):**

```markdown
# PixelForge — UI/UX дизайн графического редактора

Лабораторная работа S2G11 «Проект интерфейса программной системы», вариант № 3.

## Состав
- 12 экранов в трёх разрешениях (desktop / tablet / mobile)
- 3 UI-кита: светлая тема, тёмная тема, мобильный кит
- UML Use-Case диаграмма, User Flow × 3, User Flow Map (A4)
- Интерактивный прототип Figma + спецификация анимаций

## Ссылки
- Figma: <ссылка>
- Прототип: <ссылка>
- PDF отчёта: `design/export/pixelforge-ui.pdf`

## Структура репозитория
(см. список выше)

## Как открыть
1. Скачать `design/export/pixelforge-ui.pdf`
2. Или открыть Figma-ссылку и перейти на страницу `Screens`
```

## 10.3. План коммитов (история должна быть поэтапной)

| № | Хеш-сообщение коммита | Что добавлено |
|---|---|---|
| 1 | `chore: init repo, README and structure` | Каркас репозитория, README, .gitignore, LICENSE |
| 2 | `docs: add technical specification (tech task)` | `docs/01-tech-spec.md` |
| 3 | `docs: add competitor & audience research` | `docs/02-research.md` |
| 4 | `docs: add user scenarios and UML use-case diagram` | `docs/03-user-scenarios.md` + `design/export/use-case.pdf` |
| 5 | `docs: add information architecture and user flows` | `docs/04-ia-userflow.md` + `design/export/user-flow-map-a4.pdf` |
| 6 | `design: add low-fi wireframes for 12 screens` | Превью `design/export/screens/wireframes-*` |
| 7 | `design: add moodboard and color palette` | `docs/06-style-moodboard.md` + превью moodboard |
| 8 | `design: add UI kit (light theme)` | `assets/` + превью UI-кита |
| 9 | `design: add UI kit (dark theme) and theme tokens` | Тёмный кит |
| 10 | `design: add UI kit (mobile)` | Мобильный кит |
| 11 | `design: add hi-fi screen S1 (auth) desktop/tablet/mobile` | Превью S1 |
| 12 | `design: add hi-fi screen S0 (dashboard)` | Превью S0 |
| 13 | `design: add hi-fi screen S2 (canvas workspace)` | Превью S2 |
| 14 | `design: add hi-fi screens S3 (settings) and S4 (layers)` | Превью S3, S4 |
| 15 | `design: add hi-fi screens S5 (filters) and S6 (export)` | Превью S5, S6 |
| 16 | `design: add hi-fi screens S7 (history) and S8 (brushes)` | Превью S7, S8 |
| 17 | `design: add hi-fi screens S9 (mobile) and S10 (templates)` | Превью S9, S10 |
| 18 | `design: add states & admin panel S11` | Превью S11 |
| 19 | `docs: add animation specification` | `docs/08-motion.md` + Lottie |
| 20 | `feat: add design tokens (json/css)` | `tokens/` |
| 21 | `assets: add icons (148 svg) and logo variants` | `assets/icons`, `assets/logo` |
| 22 | `assets: add illustrations, sprites and icon font` | `assets/illustrations`, `assets/icofont` |
| 23 | `docs: add developer handoff and Zeplin/Figma Dev Mode guide` | `docs/09-handoff.md` |
| 24 | `docs: add accessibility and responsive specs` | `docs/a11y.md`, `docs/responsive.md` |
| 25 | `design: export final PDF report` | `design/export/pixelforge-ui.pdf` |
| 26 | `chore: release design v1.0.0` | Тег `design-v1.0.0`, CHANGELOG |

## 10.4. Чек-лист сдачи (проверить перед защитой)

| ✔ | Требование | Где |
|---|---|---|
| ☐ | Не менее 8 экранов — есть 12 | Figma `Screens` |
| ☐ | Экран регистрации/авторизации — S1 | Figma |
| ☐ | Главный экран (рабочая область) — S2 | Figma |
| ☐ | Несколько UI-китов, в т.ч. тёмная тема — есть 3 | Figma `UI-Kit-*` |
| ☐ | UML Use-Case диаграмма | Раздел 3.3, PDF |
| ☐ | User Flow Map на 1 листе A4 + 8 элементов | Раздел 4.3, `user-flow-map-a4.pdf` |
| ☐ | 3 User Flow для ключевых сценариев | Раздел 4.2 |
| ☐ | ТЗ с разделами 1–4, роли, уровни доступа | Раздел 1 |
| ☐ | Анализ 5 конкурентов + ЦА | Раздел 2 |
| ☐ | Черновой и финальный прототипы | Разделы 5.1, 5.2 |
| ☐ | Анимации описаны и реализованы в Prototype | Раздел 8 |
| ☐ | Адаптивность desktop/tablet/mobile показана | Раздел 7 (в каждом экране) |
| ☐ | Тёмная тема обоснована и отрисована | Разделы 6.6, UI-кит |
| ☐ | PDF векторный, текст выделяется | `design/export/pixelforge-ui.pdf` |
| ☐ | PDF < 50 МБ, шрифты в кривых или внедрены | Проверить Acrobat |
| ☐ | Репозиторий GitHub публичный, 20+ осмысленных коммитов | GitHub |
| ☐ | README со ссылками на Figma и прототип | GitHub |
| ☐ | Design tokens выгружены (JSON/CSS) | `tokens/` |
| ☐ | Материалы для разработчиков готовы (иконки, спрайты, шрифты) | `assets/` |
| ☐ | Правила именования слоёв и компонентов соблюдены | Figma |
| ☐ | Контраст WCAG AA проверен (плагин Stark) | Figma |

## 10.5. Структура защиты (5–7 минут)

1. **30 с — проблема и цель.** «Профессиональные редакторы отпугивают новичков, простые не хватает профи. Цель — совместить».
2. **60 с — исследование.** 5 конкурентов, 3 персоны, 6 болевых точек → 8 проектных решений.
3. **60 с — сценарии и структура.** 12 сценариев, UML Use-Case, User Flow Map на A4.
4. **150 с — демонстрация.** Прототип: вход → создание холста → фильтр → слои → экспорт; переключение светлой/тёмной темы; мобильная версия.
5. **60 с — дизайн-система.** Токены, UI-киты, тёмная тема, адаптивность, доступность.
6. **30 с — передача в разработку.** Токены, ассеты, Zeplin/Dev Mode.
7. **30 с — итог.** 12 экранов, 3 UI-кита, 120+ фильтров, 148 иконок, токены; планы: плагины, скриптование, совместное редактирование.

---
