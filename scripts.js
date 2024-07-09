let words = [];
  
  function addWord() {
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;
    if (word && definition) {
      words.push({ word, definition });
      document.getElementById('word').value = '';
      document.getElementById('definition').value = '';
      updateWordList();
    }
  }
  
  function updateWordList() {
    const wordList = document.getElementById('words');
    wordList.innerHTML = '';
    words.forEach((entry, index) => {
      const li = document.createElement('li');
      li.textContent = `${entry.word}: ${entry.definition}`;
      wordList.appendChild(li);
    });
  }
  
  function startQuiz() {
    if (words.length === 0) {
      alert('Please add some words first!');
      return;
    }
  
    document.querySelector('.word-list').style.display = 'none';
  
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
  
    const question = document.createElement('div');
    question.innerHTML = `<h3 class="question-text">What is the definition of "${randomWord.word}"?</h3>`;
    quizContainer.appendChild(question);
  
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'quiz-answer';
    quizContainer.appendChild(input);
  
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.onclick = () => {
      const answer = document.getElementById('quiz-answer').value;
      if (answer.trim().toLowerCase() === randomWord.definition.trim().toLowerCase()) {
        alert('Correct!');
      } else {
        alert(`Incorrect! The correct answer is: ${randomWord.definition}`);
      }
      
      document.querySelector('.word-list').style.display = 'block';
      startQuiz();
    };
    quizContainer.appendChild(button);
  }