# КАК ЗАГРУЗИТЬ ЭТУ ПАПКУ НА GITHUB

Всё уже готово: файлы лежат, **26 коммитов сделаны**. Осталось 4 действия.

---

## Действие 1. Создать репозиторий на GitHub (3 минуты)

1. Откройте **https://github.com** и войдите (или зарегистрируйтесь).
2. Справа сверху — плюсик **`+`** → **New repository**.
3. Заполните:
   - **Repository name:** `pixelforge-ui`
   - **Description:** `UI/UX дизайн графического редактора — лабораторная S2G11, вариант 3`
   - Поставьте галочку **Public** (публичный)
   - **НЕ** ставьте галочки «Add a README file», «Add .gitignore», «Choose a license» — они уже есть у нас
4. Нажмите зелёную кнопку **Create repository**.
5. На открывшейся странице скопируйте ссылку вида
   `https://github.com/ВАШ_ЛОГИН/pixelforge-ui.git`

---

## Действие 2. Прописать ссылку (1 минута)

Самый простой способ — запустите файл **`ЗАГРУЗИТЬ.bat`** в этой папке (двойной клик).
Он спросит ссылку — вставьте её правой кнопкой мыши и нажмите Enter.

### Или вручную:
1. В этой папке зажмите **Shift** и щёлкните правой кнопкой по пустому месту →
   **«Открыть окно PowerShell здесь»** (или «Открыть в терминале»).
2. Выполните (замените ссылку на свою):

```bash
git remote add origin https://github.com/ВАШ_ЛОГИН/pixelforge-ui.git
git branch -M main
git push -u origin main
```

---

## Действие 3. Пароль (если система его попросит)

GitHub **не принимает обычный пароль** от аккаунта. Нужен «токен доступа»:

1. GitHub → ваша аватарка → **Settings**
2. Внизу слева: **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token (classic)**
5. Note: `pixelforge`, Expiration: `30 days`, галочка **`repo`** (обязательно)
6. **Generate token** → **скопируйте** появившуюся строку (она показывается один раз!)
7. При запросе:
   - `Username:` ваш логин на GitHub
   - `Password:` **вставьте токен** (правый клик = вставка; символы не отображаются — это нормально) → Enter

---

## Действие 4. Проверить

Обновите страницу репозитория — там должны быть:
- файлы `README.md`, `docs/`, `design/`, `tokens/`, `assets/`
- **26 коммитов**: надпись «26 Commits» рядом с кнопками

Скопируйте адрес репозитория (он будет в адресной строке) — это и есть ссылка для сдачи.

---

## Если что-то пошло не так

| Ошибка | Что делать |
|---|---|
| `remote origin already exists` | `git remote remove origin` и добавить ссылку заново |
| `Authentication failed` | Используйте токен (Действие 3), а не пароль |
| `src refspec main does not match any` | Выполните `git branch -M main` ещё раз |
| `failed to push some refs` | `git pull --rebase origin main` затем `git push` |
| `repository not found` | Опечатка в ссылке или репозиторий приватный |
| Файлы не появились | Обновите страницу (F5) — GitHub иногда кэширует |

---

## Что уже сделано в этом репозитории

| Артефакт | Где лежит |
|---|---|
| Итоговый PDF с макетами (19 стр. A4) | `design/export/PixelForge_Makety.pdf` |
| PDF с диаграммами | `design/export/PixelForge_Diagrammy.pdf` |
| 21 векторный макет (для Figma) | `design/export/svg/` |
| 21 PNG-превью экранов | `design/export/screens/` |
| 11 разделов отчёта | `docs/01…11-*.md` |
| Дизайн-токены | `tokens/tokens.json`, `tokens/tokens.css` |
| UX-writing, доступность, адаптивность | `docs/content.md`, `docs/a11y.md`, `docs/responsive.md` |
| История изменений | `CHANGELOG.md` |

Количество коммитов: **26**. Экранов: **12** (+ UI-киты и диаграммы). UI-китов: **3** (тёмный, светлый, мобильный).
