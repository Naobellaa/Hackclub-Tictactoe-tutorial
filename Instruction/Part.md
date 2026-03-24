# README 01 — Setup • Structure • Basic UI

**Goal for today:**
By the end of this, your Tic Tac Toe project will:

✅ Have HTML, CSS, JS connected
✅ Display a 3x3 board
✅ Be clickable
✅ Ready for logic

---

# Vocabulary (New Today)

* **DOM** — Structure of the webpage
* **Grid** — Layout system
* **Selector** — Used to grab elements

---

<details>
<summary><h1> 🧱 Step 1 — Setup Files</h1></summary>

Create these file in your **project folder**:

```id="a1"
index.html
style.css
script.js
```

---

Connect them in `index.html`:

```html id="a2"
<head>
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
```

---

## 🧠 Understand the Code

### `<link rel="stylesheet" href="style.css">`

* This connects your **CSS file**
* It tells the browser:
  👉 “Use this file to style my page”

---

### `<script src="script.js" defer></script>`

* This connects your **JavaScript file**
* `defer` means:
  👉 “Wait until HTML loads first, then run JS”

Why important?

* Prevents errors when JS tries to access elements that don’t exist yet

---

### `<title>`

* Sets the name of your tab in the browser

---

### File Roles

| File | Purpose   |
| ---- | --------- |
| HTML | Structure |
| CSS  | Design    |
| JS   | Logic     |

Think of it like:

* HTML = skeleton
* CSS = clothes
* JS = brain

</details>

---

<details>
<summary><h1> 🏗️ Step 2 — HTML Structure</h1></summary>

```html id="a3"
<div class="game">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>

  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>

  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
```

---

## 🧠 Understand the Code

### `<div>`

* A container (box) for grouping elements

---

### `class="game"`

* A label used for:

  * CSS styling
  * JavaScript selection

---

### `class="cell"`

* Each `.cell` = one square in the board

---

### Why 9 cells?

* Tic Tac Toe = 3 × 3 grid = 9 squares

---

### Mental Model

```
[ cell ][ cell ][ cell ]
[ cell ][ cell ][ cell ]
[ cell ][ cell ][ cell ]
```

</details>

---

<details>
<summary><h1> 🎨 Step 3 — CSS Grid</h1></summary>

```css id="a4"
.game {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
}
```

---

## 🧠 Understand the Code

### `display: grid`

* Turns the container into a grid system

---

### `grid-template-columns: repeat(3, 100px)`

* Creates 3 columns
* Each column = 100px wide

---

### `gap: 5px`

* Space between cells

---

### `.cell`

```css
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

* Centers X and O inside each box

---

### Flexbox (Quick Idea)

* `align-items` → vertical center
* `justify-content` → horizontal center

</details>

---

<details>
<summary><h1> ⚡ Step 4 — JS Click Test</h1></summary>

```js id="a5"
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    console.log("Clicked!");
  });
});
```

---

## 🧠 Understand the Code

### `document.querySelectorAll(".cell")`

* Finds ALL elements with class `.cell`
* Returns a list (NodeList)

---

### `forEach`

* Loops through each cell

---

### `addEventListener("click", ...)`

* Listens for user clicks

---

### Arrow Function `() => {}`

* A shorter way to write a function

---

### `console.log`

* Prints message in developer console
* Used for debugging

---

## 🧠 Big Idea

This is **event-driven programming**:

👉 “When user clicks → do something”

</details>

---

# 🎉 Checkpoint

You now understand:

* Structure (HTML)
* Styling (CSS)
* Interaction (JS)
