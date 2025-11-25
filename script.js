let terms = [];
let currentIndex = 0;
let score = 0;

async function loadTerms() {
  const res = await fetch("terms.json");
  terms = await res.json();
  showQuestion();
}

function showQuestion() {
  const term = terms[currentIndex].term;
  const correctDef = terms[currentIndex].definition;

  // Pick 3 random wrong definitions
  let options = [correctDef];
  while (options.length < 4) {
    let randomDef = terms[Math.floor(Math.random() * terms.length)].definition;
    if (!options.includes(randomDef)) options.push(randomDef);
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  document.getElementById("question").innerText = `What is "${term}"?`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, correctDef);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! Correct answer: " + correct);
  }
  document.getElementById("score").innerText = `Score: ${score}/${currentIndex+1}`;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < terms.length) {
    showQuestion();
  } else {
    alert("Quiz finished! Final score: " + score + "/" + terms.length);
  }
});

loadTerms();
