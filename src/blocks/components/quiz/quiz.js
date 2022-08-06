// const DATA = [
//     {
//         question: "Вопрос 1",
//         answers: [
//             {
//                 id: "1",
//                 value: "Ответ 1",
//                 correct: true,
//             },
//             {
//                 id: "2",
//                 value: "Ответ 2",
//                 correct: false,
//             },
//             {
//                 id: "1",
//                 value: "Ответ 3",
//                 correct: false,
//             }
//         ]
//     },
//     {
//         question: "Вопрос 2",
//         answers: [
//             {
//                 id: "4",
//                 value: "Ответ 1",
//                 correct: false,
//             },
//             {
//                 id: "5",
//                 value: "Ответ 2",
//                 correct: true,
//             }
//         ]
//     }
// ];
//
// const quiz = document.getElementById("quiz"),
//     questions = document.getElementById("questions"),
//     indicator = document.getElementById("indicator"),
//     results = document.getElementById("results"),
//     btnNext = document.getElementById("btn-next"),
//     btnRestart = document.getElementById("btn-restart");
//
// const renderQuestions = (index) => {
//     const renderAnswers = () => DATA[index].answers
//         .map((answer) =>
//             `
//             <li>
//                 <label>
//                   <input class="answer-input " type="radio" name=${index} value=${answer.id}/>
//                   ${answer.value}
//                 </label>
//             </li>
//             `
//         )
//         .join("");
//
//     questions.innerHtml = `
//         <div class="quiz-questions-item">
//   <div class="quiz-questions-item__question">${DATA[index].question}</div>
//   <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
// </div>
//     `;
// };
//
// const renderResults = () => {
// };
//
// const renderIndicator = () => {
// };
//
// quiz.addEventListener("change", (event) => {
//     // логика ответа
// });
//
// quiz.addEventListener("click", (event) => {
//     // вперед или сначала
//     console.log(event);
//
//     if (event.target.classList.contains("button__next")) {
//         console.log("Нажали Далее");
//     }
//
//     if (event.target.classList.contains("button__reset")) {
//         console.log("Сначала");
//     }
// });
//
// renderQuestions(0);