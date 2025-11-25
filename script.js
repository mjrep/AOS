let questions = [];
let currentIndex = 0;
let score = 0;

async function loadQuestions() {
  try {
    const res = await fetch("terms.json");
    questions = await res.json();
    showQuestion();
  } catch (error) {
    console.error("Failed to load questions:", error);
    document.getElementById("question").innerText = "Error loading quiz data.";
  }
}

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, q.answer[0], q.explanation);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct, explanation) {
  if (selected === correct) {
    score++;
    alert("✅ Correct!\n\n" + explanation);
  } else {
    alert("❌ Incorrect.\n\n" + explanation);
  }
  document.getElementById("score").innerText = `Score: ${score}/${currentIndex + 1}`;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz complete!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").innerText = `Final Score: ${score}/${questions.length}`;
  }
});

loadQuestions();
