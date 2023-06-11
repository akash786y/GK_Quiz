
const questions=[
    {
        question:"What is the largest animal in the world?",
        answers: [
            {text:"Girrafe", correct:false},
            {text:"Elephant", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Human", correct:false}
        ]
    },

    {
        question:"What is the largest country in the world?",
        answers: [
            {text:"Australia", correct:false},
            {text:"Egypt", correct:false},
            {text:"India", correct:false},
            {text:"Russia", correct:true}
        ]
    },

    {
        question:"What is the smallest country in the world?",
        answers: [
            {text:"France", correct:false},
            {text:"Vatican City", correct:true},
            {text:"Japan", correct:false},
            {text:"Cuba", correct:false}
        ]
    },

    {
        question:"What is the biggest religion in the world?",
        answers: [
            {text:"Christianity", correct:false},
            {text:"Judaism", correct:false},
            {text:"Islam", correct:true},
            {text:"Hinduism", correct:false}
        ]
    }
]


const questionElement=document.getElementById("question");
const ans_btn=document.getElementById("btn");
const next_btn=document.getElementById("next");


 
let currentQuestionIndex;
let score;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    next_btn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+') '+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        console.log("hello therer");
        button.classList.add("answer");
        ans_btn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        resetState();
        questionElement.innerHTML=`You have scoed ${score} out of ${questions.length}`;
        next_btn.innerHTML=`Play again!!`;
    }
}

next_btn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    // else if(currentQuestionIndex == questions.length){
    //     resetState();
    //     questionElement.innerHTML=`You have scoed ${score} out of ${questions.length}`;
    //     next_btn.innerHTML=`Play again!!`;
    // }
    else{
        startQuiz();
    }
})

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(ans_btn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    next_btn.style.display="block";
}

function resetState(){
    ans_btn.style.display="null";
    while(ans_btn.firstChild){
        ans_btn.removeChild(ans_btn.firstChild);
    }
}
   

startQuiz();