# Tic Tac Toe
## #2 — Game Logic • Turns

---

<details>
<summary><h1> 🔁 Step 1 — Track Player</h1></summary>

Now go to your **script.js** and add:

```js
let currentPlayer = "X";
```

---

## 🧠 Understand the Code

#### `let`

* Variable that can change

---

#### `currentPlayer`

* Stores whose turn it is

---

</details>

---

<details>
<summary><h1> ✍️ Step 2 — Place Moves</h1></summary>

Update your click event in **script.js**:

```js
if (cell.textContent !== "") return;

cell.textContent = currentPlayer;
```

---

## 🧠 Understand the Code

#### `textContent`

* Text inside a cell

---

#### `if (...) return`

* Stops code early (guard clause)

---

#### Why important?

* Prevents overwriting moves

---

</details>

---

<details>
<summary><h1> 🔁 Step 3 — Switch Player</h1></summary>

Add this below your move logic:

```js
currentPlayer = currentPlayer === "X" ? "O" : "X";
```

---

## 🧠 Understand the Code

#### Ternary Operator

* Short if/else

---

#### Logic

* If X → switch to O
* If O → switch to X

---

</details>

---

<details>
<summary><h1> 🧠 Step 4 — Board Array</h1></summary>

Add this at the top of your **script.js**:

```js
let board = ["", "", "", "", "", "", "", "", ""];
```

---

Then update your click logic:

```js
board[index] = currentPlayer;
```

---

## 🧠 Understand the Code

#### Array

* Stores game data

---

#### Why needed?

* Easier to check winner

---

#### UI vs Data

* UI = what user sees
* Array = actual game logic

---

</details>
