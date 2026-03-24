# Tic Tac Toe
##  #3 - Win • Lose • Restart

---

<details>
<summary><h1> 🧠 Step 1 — Win Patterns</h1></summary>

Add this to your **script.js**:

```js
const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];
```

---

## 🧠 Understand the Code

#### Each array

* Represents a winning line

---

#### Numbers

* Match board positions

---

</details>

---

<details>
<summary><h1> 🏆 Step 2 — Check Winner</h1></summary>

Add this function:

```js
function checkWinner() {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;

    if (board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
```

---

## 🧠 Understand the Code

#### `for...of`

* Loops through patterns

---

#### `[a,b,c]`

* Destructuring array

---

#### Logic

* All 3 must match

---

</details>

---

<details>
<summary><h1> 🛑 Step 3 — Game Over</h1></summary>

Add this:

```js
let gameOver = false;
```

Then inside click:

```js
if (gameOver) return;
```

---

## 🧠 Understand the Code

#### Guard Clause

* Stops extra moves

---

#### Why needed?

* Prevents bugs

---

</details>

---

<details>
<summary><h1> 🗣️ Step 4 — Message System</h1></summary>

Add to **index.html**:

```html
<div class="message hidden"></div>
<div class="button" onclick="resetGame()">Restart</div>
```

---

Add to **script.js**:

```js
function showMessage(text){
  message.textContent = text;
}
```

---

## 🧠 Understand the Code

#### Function

* Reusable block

---

#### Parameter

* Input value (`text`)

---

</details>

---

<details>
<summary><h1> 🔄 Step 5 — Reset</h1></summary>

Add this function:

```js
function resetGame(){
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  gameOver = false;
}
```

---

## 🧠 Understand the Code

#### Reset State

* Clears game data

---

#### Why important?

* Prevents broken game

---

</details>
