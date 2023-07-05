const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        question.classList.toggle("show-text")
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove("show-text")
            }
        });
    });
});


// ==================================traversing the dom
// const questionEl = document.querySelector(".question");
// const questions = document.querySelectorAll(".question");
// const questionTitle = document.querySelector(".question-title");
// const questionBtn = document.querySelector(".question-btn");
// const questionTxt = document.querySelector(".question-text");
// const plusSpan = document.querySelector(".plus-icon");
// const minusSpan = document.querySelector(".minus-icon");
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let x = e.currentTarget.parentElement.parentElement;
//     x.classList.toggle("show-text");
//   });
// });