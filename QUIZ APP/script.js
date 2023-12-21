const questions = [{
    question: 'which is largest Animal in the World ?',
    answer:[
        {Text:'shark', correct:true},
        {Text:'Elephant', correct:false},
        {Text:'Dog', correct:false},
        {Text:'Donkey', correct:false},
    ]
},
{
    question: 'Which country is largest in Area?',
    answer:[
        {Text:'India', correct:false},
        {Text:'Russia', correct:true},
        {Text:'Bhutan', correct:false},
        {Text:'Nepal', correct:false},
    ]  
},
{
    question: 'Which is smallest continent in World?',
    answer:[
        {Text:'Australia', correct:true},
        {Text:'Asia', correct:false},
        {Text:'Africa', correct:false},
        {Text:'Europe', correct:false},
    ]  
},
{
    question: 'Html full form',
    answer:[
        {Text:'Hyper text makeup language', correct:false},
        {Text:'hypo markup language', correct:false},
        {Text:'Hygiene markup language', correct:false},
        {Text:'Hyper text markup language', correct:true},] 
}

]

const questionElement = document.querySelector('.questions')
const answerbtn = document.getElementById('quizbtn')
const nextbutton = document.getElementById('nextbtn')
let remarks = document.getElementsByClassName('remark')


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextbutton.innerHTML = 'Next'
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.Text;
        button.classList.add('btn');
        answerbtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectanswer)
    })
     
}

function resetState(){
    nextbutton.style.display = 'none';
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === 'true';
    if(iscorrect){
        selectedbtn.classList.add('correct');
        score++;
    }else{
        selectedbtn.classList.add('incorrect');
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
        nextbutton.style.display = 'block';   
     

} 
function showscore(){
    resetState();
    questionElement.innerHTML = `your score ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = 'play Again'
    nextbutton.style.display = 'block';
    
    
    
 

       
    }
    



function handlenexbtn(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions.length){
        showQuestion()
      }else{
        showscore();
      }
};
nextbutton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handlenexbtn();
    }else{
       startQuiz(); 
    }
})

  

startQuiz();
  