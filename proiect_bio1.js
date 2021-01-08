(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Ce este mitoza ?",
      answers: {
        a: "Mitoza este o etapa a ciclului celular ",
        b: "Un organ din corpul uman",
        c: "O etapa a Interfazei"
      },
      correctAnswer: "a"
    },
    {
      question: "Cate faze are ?",
      answers: {
        a: "5",
        b: "8",
        c: "6"
      },
      correctAnswer: "a"
    },
    {
      question: "Selectati un rol al mitozei",
      answers: {
        a: "Pentru a impiedica raspandirea virusilor in organism",
        b: "Dublarea cantității de ADN",
        c: "Asigură creșterea și dezvoltarea unui organism",
        d: "sinteza de proteine"
      },
      correctAnswer: "c"
    },
        {
      question: "Selectati un rol al mitozei",
      answers: {
        a: "Asigură repararea țesuturilor afectate",
        b: "Sinteza de ARN",
        c: "Sinteza de ADN și dublarea cantității de ADN",
        d: "Asigura o nota mare la acest proiect(nu este acesta raspunsul corect)"
      },
      correctAnswer: "d"
    },
        {
      question: "Selectati un rol al mitozei",
      answers: {
        a: "Asigură continuitatea reprezentanților unei specii",
        b: "Ma ajuta sa programez mai bine",
        c: "Ajuta la indepartarea bacteriilor din corp",
        d: "Transmite hrana la organe"
      },
      correctAnswer: "a"
    },
    {
      question: "Selectati 3 faze ale mitozei ;)",
      answers: {
        a: "Anafaza,  Profaza, Citochineza",
        b: "Citokineza, Telofaza, Metafaza",
        c: "Anafaza,  Profaza",
        d: "Anafaza,  Profaza, Metafaza"
      },
      correctAnswer: "d"
    },
    {
      question: "Selecteaza a cata faza este telofaza si un fenomen al acesteia",
      answers: {
        a: "Este a 4a faza si are fenomenul : gruparea la polii opuși ai celulei a seturilor omoloage de cromozomi",
        b: "Este a 3a faza si are fenomenul : dezorganizarea fusului de diviziune",
        c: "Este a 3a faza si are fenomenul : clivarea longitudinală a centromerului fiecărui cromozom",
        d: "Este a 5a faza si are fenomenul : a membranei nucleare și reorganizarea nucleolilor"
      },
      correctAnswer: "a"
    },
        {
      question: "Selecteaza a cata faza este telofaza si un fenomen al acesteia",
      answers: {
        a: "Este a 4a faza si are fenomenul : gruparea la polii opuși ai celulei a seturilor omoloage de cromozomi",
        b: "Este a 3a faza si are fenomenul : dezorganizarea fusului de diviziune",
        c: "Este a 3a faza si are fenomenul : clivarea longitudinală a centromerului fiecărui cromozom",
        d: "Este a 5a faza si are fenomenul : a membranei nucleare și reorganizarea nucleolilor"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();