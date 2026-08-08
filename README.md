# 🧮 Node.js Math Utilities – CommonJS

A beginner-friendly **Node.js project** created to practice the **CommonJS module system**. The project separates basic mathematical operations into a reusable module and uses Node.js core modules to save calculation results to a text file.

This is my **first Node.js project using CommonJS**.

---

## ✨ Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 📦 Custom module using `module.exports`
* 📥 Import functions using `require()`
* 📁 Create file paths using Node.js `path` module
* 📝 Write calculation results to a text file using the `fs` module

---

## 🛠️ Technologies Used

* **Node.js**
* **JavaScript**
* **CommonJS Modules**
* Node.js `path` module
* Node.js `fs` module

---

## 📂 Project Structure

```text
nodejs-commonjs-calculator/
│
├── mathUtils.js
├── app.js
├── logs/
│   └── calculation.txt
└── README.md
```

---

## 📄 `mathUtils.js`

The `mathUtils.js` file contains the mathematical functions.

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
```

The functions are exported using:

```javascript
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
```

This allows other files to use these functions.

---

## 📄 `app.js`

The main file imports the functions using CommonJS `require()`.

```javascript
const { add } = require("./mathUtils");
const { subtract } = require("./mathUtils");
const { multiply } = require("./mathUtils");
const { divide } = require("./mathUtils");

const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "logs", "calculation.txt");

const result1 = add(44, 67);
const result2 = subtract(44, 67);
const result3 = multiply(12, 9);
const result4 = divide(120, 34);

fs.writeFileSync(
  filePath,
  `Results: ${result1}\n ${result2}\n ${result3}\n ${result4}`
);
```

---

## 📚 What I Learned

This project helped me understand some of the fundamentals of Node.js.

### 📦 CommonJS Modules

CommonJS allows us to split our code into different files and reuse functionality.

**Exporting:**

```javascript
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
```

**Importing:**

```javascript
const { add } = require("./mathUtils");
```

---

### 🛣️ `path` Module

Node.js provides the built-in `path` module for working with file and directory paths.

```javascript
const path = require("path");

const filePath = path.join(
  __dirname,
  "logs",
  "calculation.txt"
);
```

`path.join()` safely combines the different parts of the path.

---

### 📁 `fs` Module

The built-in `fs` (**File System**) module allows Node.js applications to work with files.

In this project, I used:

```javascript
fs.writeFileSync()
```

to write the calculation results into `calculation.txt`.

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/CodeWithPurnendra/First-Node.js-Program.git
```

### 2. Navigate into the project

```bash
cd first-program
```

### 3. Run the program

```bash
node app.js
```

### 4. Check the output

After running the program, the calculation results will be written to:

```text
logs/calculation.txt
```

---

## 📄 Example Output

The `calculation.txt` file will contain results similar to:

```text
Results: 111
 -23
 108
 3.5294117647058822
```

---

## 🧠 Concepts Practiced

* Node.js basics
* CommonJS modules
* `require()`
* `module.exports`
* Destructuring imports
* Creating reusable functions
* Node.js core modules
* `path.join()`
* `__dirname`
* File system operations
* `fs.writeFileSync()`
* Writing data to files

---

## 🚀 Future Improvements

I plan to improve this project by adding:

* 🔢 User input for calculations
* 🧮 More mathematical operations
* ⚠️ Division-by-zero handling
* 📝 Append multiple calculations to the log
* 📅 Add timestamps to calculation logs
* 🧹 Separate calculation history from application logic
* 🔄 Build a command-line calculator

---

## 🎯 Learning Journey

This project is part of my journey of learning **Backend Development with Node.js**.

It is my first project using the **CommonJS module system**, and it helped me understand how Node.js files can communicate with each other using modules.

---

## 👨‍💻 Author

**Purnendra Kumar**

Learning **Node.js, Backend Development, and JavaScript** one project at a time. 🚀

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub!
