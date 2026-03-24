# README 01 — Setup • Structure • Basic UI

---

<details>
<summary><h1> 🧱 Step 1 — Setup Files</h1></summary>

Create these file in to your **project folder**:

```
index.html
style.css
script.js
```

---

Connect them by putting these elements at the top part of **index.html**:

```html
<head>
  <title>Tic Tac Toe</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
```

---

## 🧠 Understand the Code

#### `<link rel="stylesheet" href="style.css">`

* Connects your CSS file to HTML
* Controls how your page looks

---

#### `<script src="script.js" defer></script>`

* Connects JavaScript file
* `defer` = wait until HTML loads first

---

#### `<title>`

* Controls browser tab name

---

#### File Roles

| File | Purpose   |
| ---- | --------- |
| HTML | Structure |
| CSS  | Design    |
| JS   | Logic     |

---

</details>

---

<details>
<summary><h1> 🏗️ Step 2 — HTML Structure</h1></summary>

Then below the section you just made, type these code into your **index.html**:

```html
<body>

  <h1>Tic Tac Toe</h1>

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

</body>
```

---

## 🧠 Understand the Code

#### `<div>`

* A container (box) for grouping elements

---

#### `class="game"`

* Used for styling and JS selection

---

#### `class="cell"`

* Each square of the board

---

#### Why 9 cells?

* Tic Tac Toe = 3 × 3 grid

---

</details>

---

<details>
<summary><h1> 🎨 Step 3 — CSS Grid</h1></summary>

Now go to your **style.css** file and add:

```css
.game {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## 🧠 Understand the Code

#### `display: grid`

* Turns layout into a grid

---

#### `grid-template-columns`

* Creates 3 equal columns

---

#### `gap`

* Adds spacing between cells

---

#### `display: flex`

* Used for centering content

---

#### `align-items`

* Vertical center

---

#### `justify-content`

* Horizontal center

---

</details>

---

<details>
<summary><h1> ⚡ Step 4 — JS Click Test</h1></summary>

Now go to your **script.js** file and add:

```js
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    console.log("Clicked!");
  });
});
```

---

## 🧠 Understand the Code

#### `querySelectorAll`

* Selects all `.cell` elements

---

#### `forEach`

* Loops through each cell

---

#### `addEventListener`

* Waits for user action

---

#### `"click"`

* Event type

---

#### `console.log`

* Prints to console (for testing)

---

</details>
