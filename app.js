window.onload = function () {
    show(0)
}

var questions = [{
    id: 1,
    question: "What is the unit of force?",
    answer: "Newton",
    options: [
        "Watt",
        "m/a",
        "Hertz",
        "Newton"
    ]


},
{
    id: 2,
    question: "Who discovered E = mc<sup>2</sup>",
    answer: "Albert Einstien",
    options: [
        "Albert Einstien",
        "Newton",
        "Stephen Hawking",
        "Elon Musk"
    ]

},
{
    id: 3,
    question: "Who is the founder of NASA?",
    answer: "Dwight D. Eisenhower",
    options: [
        "Dwight D. Eisenhower",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the founder of Alibaba?",
    answer: "Jack Ma",
    options: [
        "Dennis Ritchie",
        "Bill Gates",
        "Jack Ma",
        "Lee Byung-chul"
    ]

},
{
    id: 5,
    question: "Who is the founder of Amazon?",
    answer: "Jeff Bezos",
    options: [
        "Jeff Bezos",
        "Jack Ma",
        "Warren Buffet",
        "Bill Gates"
    ]

}
]

var question_count = 0;
function next() {
    question_count++
    if (question_count === 4) {
        var submbtn = "Submit";
        var naxbtn = document.getElementById('xkbtn');
        naxbtn.style.backgroundColor = "black";
        naxbtn.innerHTML = submbtn;
        
    }
    if (question_count === 5){
        location.href = "index2.html";
    }
    show(question_count)
}



function show(e) {
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${questions[e].question} </h1>
    <ul class="list">
                        <li class="option">${questions[e].options[0]}</li>
                        <li class="option">${questions[e].options[1]}</li>
                        <li class="option">${questions[e].options[2]}</li>
                        <li class="option">${questions[e].options[3]}</li>
                    </ul>`
    Active()
}

function Active() {
    let option1 = document.querySelectorAll("li.option")

    for (let i = 0; i < option1.length; i++) {
        option1[i].onclick = function () {
            for (let j = 0; j < option1.length; j++) {
                if (option1[j].classList.contains("active")) {
                    option1[j].classList.remove("active")
                }
            }
            option1[i].classList.add("active")
        }
    }
}


