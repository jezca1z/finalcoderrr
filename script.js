
/* =================================
   LAST COLOR
   STORY + QUIZ SYSTEM
================================= */


/* =================================
   1. STORY CONTENT
================================= */

const storyPages = [

  {
    chapter: "CHAPTER 01 — BEFORE THE LAST COLOR",
    image: "pics/transparent/charpter1.png",
    title: "ก่อนสีสุดท้ายจะจางหาย",
    paragraphs: [
      "เช้าวันหนึ่ง คุณตื่นขึ้นมาพบว่าสีรอบตัวเริ่มซีดจาง",
      "มีข่าวว่าก่อนแสงสุดท้ายจะลับขอบฟ้า สีทั้งหมดอาจสลายหายไป",
      "คุณหันไปเห็นแมวตัวโปรดนั่งรออยู่ เพื่อนร่วมทางตัวจิ๋วที่อยู่เคียงข้างกันทุกวัน",
      "ทันใดนั้น คุณก็นึกถึงสิ่งที่อยากทำมาตลอด แต่ยังไม่ได้เริ่มเสียที"
    ]
  },

  {
    chapter: "CHAPTER 02 — OUR LITTLE JOURNEY",
    image: "pics/transparent/charpter2.png",
    title: "ออกเดินทางไปด้วยกัน",
    paragraphs: [
      "คุณตัดสินใจออกเดินทาง ทำสิ่งที่ใจเรียกร้องก่อนสีจะเลือนหายไป",
      "อาจเป็นการไปเห็นทะเลสักครั้ง ลองทำสิ่งใหม่ หรือกลับไปหาสถานที่ที่คิดถึง",
      "แมวของคุณเดินเคียงข้าง ไม่ว่าจุดหมายจะใกล้หรือไกล",
      "ทุกก้าวที่ได้ใช้ร่วมกัน ทำให้โลกที่กำลังซีดจางกลับมามีความหมาย"
    ]
  },

  {
    chapter: "CHAPTER 03 — BEFORE DAWN",
    image: "pics/transparent/charpter3.png",
    title: "สิ่งที่อยากทำ ก่อนทุกสีจะหายไป",
    paragraphs: [
      "ระหว่างทาง คุณรู้ว่าสีสุดท้ายอาจอยู่ในช่วงเวลาที่ได้ใช้กับสิ่งที่รัก",
      "แมวของคุณเดินเคียงข้าง ก่อนเงยหน้าถามว่า...",
      "“ก่อนสีสุดท้ายจะหายไป เจ้าอยากทำอะไรที่สุด?”",
      "ตอบคำถาม แล้วออกเดินทางตามหาสีนั้นไปด้วยกัน"
    ]
  }

];

let storyIndex = 0;


/* =================================
   2. QUIZ QUESTIONS
================================= */

const questions = [

  {
    intro: "แมวของคุณ: เฮ้! ตื่นหรือยัง ไปทำสิ่งที่อยากทำกันเถอะ",
    question: "ถ้าพรุ่งนี้ตื่นมาแล้วโลกไม่มีสี คุณอยากทำอะไรเป็นอย่างแรก?",
    answers: [
      { text: "ออกไปเดินเล่นในที่ที่ไม่เคยไป", type: "FREE" },
      { text: "ตามหาคนที่ทำให้เรายิ้มได้", type: "HAPPY" },
      { text: "กลับไปดูสถานที่ที่เคยมีความทรงจำ", type: "MEMORY" },
      { text: "นั่งเงียบ ๆ และมองโลกที่เปลี่ยนไป", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: วันนี้จะพาเราไปเติมพลังที่ไหนดีนะ?",
    question: "ในวันที่รู้สึกแย่ อะไรคือสิ่งที่ช่วยให้คุณรู้สึกดีขึ้น?",
    answers: [
      { text: "การได้ออกไปพบสิ่งใหม่ ๆ", type: "FREE" },
      { text: "เสียงหัวเราะและรอยยิ้มของคนรอบตัว", type: "HAPPY" },
      { text: "การเปิดดูรูปภาพเก่า ๆ", type: "MEMORY" },
      { text: "การได้อยู่คนเดียวในมุมโปรด", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: มีไทม์แมชชีนด้วยนะ แต่เลือกได้วันเดียว!",
    question: "ถ้าสามารถย้อนเวลากลับไปได้หนึ่งวัน คุณจะเลือกวันไหน?",
    answers: [
      { text: "วันที่กล้าทำสิ่งที่ไม่เคยทำ", type: "FREE" },
      { text: "วันที่หัวเราะจนลืมทุกอย่าง", type: "HAPPY" },
      { text: "วันที่ได้อยู่กับคนสำคัญ", type: "MEMORY" },
      { text: "วันที่ไม่มีเรื่องให้ต้องกังวล", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: เตรียมเป้พร้อมหรือยัง?",
    question: "หากต้องเดินทางไปยังที่ที่ไม่รู้จัก คุณอยากให้ใครไปด้วย?",
    answers: [
      { text: "ไปคนเดียวก็สนุกดีนะ", type: "FREE" },
      { text: "เพื่อนที่พร้อมหัวเราะไปด้วยกัน", type: "HAPPY" },
      { text: "คนที่รู้จักเรามาเป็นเวลานาน", type: "MEMORY" },
      { text: "ใครสักคนที่อยู่ด้วยแล้วสบายใจ", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: ก่อนสีจะหายไป อะไรสำคัญกับคุณที่สุดนะ?",
    question: "ถ้าเลือกเก็บสิ่งสำคัญไว้ได้หนึ่งอย่าง คุณจะเลือกอะไร?",
    answers: [
      { text: "โอกาสที่จะได้ใช้ชีวิตอย่างอิสระ", type: "FREE" },
      { text: "ความสุขของคนที่เรารัก", type: "HAPPY" },
      { text: "ความทรงจำที่ไม่อยากลืม", type: "MEMORY" },
      { text: "ความสงบในจิตใจของตัวเอง", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: ขอถามเรื่องของกิน... เอ๊ย เรื่องเล็ก ๆ หน่อย!",
    question: "สิ่งเล็ก ๆ แบบไหนที่ทำให้วันธรรมดาของคุณพิเศษขึ้น?",
    answers: [
      { text: "การได้ทำอะไรตามใจตัวเอง", type: "FREE" },
      { text: "การได้กินของอร่อยกับคนสนิท", type: "HAPPY" },
      { text: "การได้เห็นสิ่งที่ทำให้นึกถึงอดีต", type: "MEMORY" },
      { text: "การได้นอนพักโดยไม่มีอะไรต้องคิด", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: ส่งข้อความข้ามเวลาได้หนึ่งข้อความนะ!",
    question: "ถ้าส่งข้อความกลับไปหาตัวเองในอดีตได้ คุณอยากบอกอะไร?",
    answers: [
      { text: "ออกไปใช้ชีวิต อย่ากลัวที่จะลอง", type: "FREE" },
      { text: "อย่าลืมมีความสุขกับสิ่งรอบตัว", type: "HAPPY" },
      { text: "ขอบคุณที่ผ่านเรื่องราวเหล่านั้นมาได้", type: "MEMORY" },
      { text: "ไม่เป็นไรนะ ค่อย ๆ เติบโตไปก็ได้", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: เหลือสีเดียวจริง ๆ นะ คิดดี ๆ ล่ะ!",
    question: "ถ้าโลกเหลือสีเดียว อยากให้สีนั้นแทนอะไร?",
    answers: [
      { text: "เสรีภาพและการเริ่มต้นใหม่", type: "FREE" },
      { text: "ความรักและเสียงหัวเราะ", type: "HAPPY" },
      { text: "เรื่องราวที่ไม่อยากให้หายไป", type: "MEMORY" },
      { text: "ความสบายใจและความสงบ", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: ตอนจบอยากให้คนจำคุณแบบไหนนะ?",
    question: "เมื่อมองย้อนกลับไป คุณอยากเห็นตัวเองเป็นคนแบบไหน?",
    answers: [
      { text: "คนที่กล้าออกไปตามหาความฝัน", type: "FREE" },
      { text: "คนที่มอบความสุขให้คนอื่นเสมอ", type: "HAPPY" },
      { text: "คนที่ไม่ลืมเรื่องราวสำคัญ", type: "MEMORY" },
      { text: "คนที่เรียนรู้ที่จะรักตัวเอง", type: "CALM" }
    ]
  },

  {
    intro: "แมวของคุณ: ถึงปลายทางแล้ว ขอถามข้อสุดท้ายนะ!",
    question: "ก่อนสีสุดท้ายจะหายไป คุณอยากเก็บความรู้สึกไหนไว้ในใจ?",
    answers: [
      { text: "ความกล้าที่จะใช้ชีวิตในแบบของตัวเอง", type: "FREE" },
      { text: "ความสุขที่เคยได้รับและแบ่งปันให้คนอื่น", type: "HAPPY" },
      { text: "ทุกความทรงจำที่ทำให้เราเป็นเรา", type: "MEMORY" },
      { text: "ความสงบที่ทำให้รู้ว่าเราไม่เป็นไร", type: "CALM" }
    ]
  }

];


/* =================================
   3. RESULT CONTENT
================================= */

const results = {

  FREE: {
    title: "FREE",
    subtitle: "สีแห่งอิสรภาพ",

    description:
      "คุณคือคนที่ยังคงมองหาหนทางของตัวเอง แม้จะเคยหลงทางหรือไม่รู้ว่าชีวิตจะไปทางไหน แต่ลึก ๆ แล้วคุณยังอยากออกไปพบโลกใบใหม่",

    message:
      "“อย่ากลัวที่จะหลงทาง เพราะบางครั้งการเดินผิดทาง ก็ทำให้เราได้พบสิ่งที่ไม่เคยรู้จัก”",

    color: "#C5C5C5"
  },

  HAPPY: {
    title: "HAPPY",
    subtitle: "สีแห่งความสุข",

    description:
      "คุณคือคนที่ยังคงมองเห็นความสุข แม้ในวันที่โลกดูหม่นหมอง คุณอาจไม่ได้ต้องการอะไรยิ่งใหญ่ เพียงแค่มีรอยยิ้มและช่วงเวลาดี ๆ ก็ทำให้หัวใจกลับมามีสีสันได้",

    message:
      "“อย่าลืมนะว่าความสุขเล็ก ๆ ก็มีค่ามากกว่าที่คิด”",

    color: "#E8D28C"
  },

  MEMORY: {
    title: "MEMORY",
    subtitle: "สีแห่งความทรงจำ",

    description:
      "คุณคือคนที่มีเรื่องราวมากมายอยู่ในใจ คุณให้ความสำคัญกับผู้คนและช่วงเวลาที่ผ่านเข้ามา เพราะแม้บางสิ่งจะย้อนกลับไปไม่ได้ แต่มันก็ยังคงมีความหมายเสมอ",

    message:
      "“แม้วันเวลาจะผ่านไป แต่บางความทรงจำก็ยังมีสีสันอยู่เสมอ”",

    color: "#B9C9E8"
  },

  CALM: {
    title: "CALM",
    subtitle: "สีแห่งความสงบ",

    description:
      "คุณคือคนที่กำลังเรียนรู้ที่จะอยู่กับตัวเอง ไม่จำเป็นต้องรีบเติบโตหรือวิ่งตามใคร คุณเพียงต้องการพื้นที่เล็ก ๆ ที่ทำให้หัวใจได้พักและรู้สึกปลอดภัย",

    message:
      "“ไม่จำเป็นต้องสดใสตลอดเวลาก็ได้ แค่ยังไม่ทิ้งตัวเองก็พอ”",

    color: "#BFD3C3"
  }

};


/* =================================
   4. VARIABLES
================================= */

let currentQuestion = 0;

let selectedAnswer = null;

let scores = {
  FREE: 0,
  HAPPY: 0,
  MEMORY: 0,
  CALM: 0
};


/* =================================
   5. SCREEN CONTROL
================================= */

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

}


/* =================================
   6. STORY CONTROL
================================= */

function startStory() {

  storyIndex = 0;

  showPage("story");

  renderStory();

}


function renderStory() {

  const story = storyPages[storyIndex];

  document.querySelector("#story .chapter-label").textContent = story.chapter;
  document.getElementById("storyImage").src = story.image;

  const storyText = document.getElementById("storyText");

  storyText.innerHTML = "";

  const heading = document.createElement("h2");

  heading.textContent = story.title;

  storyText.appendChild(heading);

  story.paragraphs.forEach(text => {

    const paragraph = document.createElement("p");

    paragraph.textContent = text;

    storyText.appendChild(paragraph);

  });

  document.getElementById("storyCounter").textContent =
    `${String(storyIndex + 1).padStart(2, "0")} / 03`;

  const button = document.querySelector("#story .text-button");

  button.innerHTML =
    storyIndex === storyPages.length - 1
      ? 'LET’S FIND YOUR COLOR <span>→</span>'
      : 'CONTINUE <span>→</span>';

}


function nextStory() {

  storyIndex++;

  if (storyIndex < storyPages.length) {

    renderStory();

  } else {

    startQuiz();

  }

}


/* =================================
   7. START QUIZ
================================= */

function startQuiz() {

  currentQuestion = 0;

  selectedAnswer = null;

  scores = {
    FREE: 0,
    HAPPY: 0,
    MEMORY: 0,
    CALM: 0
  };

  showPage("quiz");

  renderQuestion();

}


/* =================================
   8. RENDER QUESTION
================================= */

function renderQuestion() {

  const question = questions[currentQuestion];

  selectedAnswer = null;

  document.getElementById("questionImage").src =
    `pics/transparent/Artboard ${currentQuestion + 1}.png`;

  document.getElementById("questionCount").textContent =
    `${String(currentQuestion + 1).padStart(2, "0")} / 10`;

  document.getElementById("questionProgress").textContent =
    `${String(currentQuestion + 1).padStart(2, "0")} / 10`;

  document.getElementById("questionIntro").textContent =
    question.intro;

  document.getElementById("questionText").textContent =
    question.question;

  const answerList = document.getElementById("answerList");

  answerList.innerHTML = "";

  question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer-button";

    button.textContent =
      `${String.fromCharCode(65 + index)}. ${answer.text}`;

    button.addEventListener("click", () => {

      selectAnswer(index);

    });

    answerList.appendChild(button);

  });

}


/* =================================
   9. SELECT ANSWER
================================= */

function selectAnswer(index) {

  selectedAnswer = index;

  const buttons = document.querySelectorAll(".answer-button");

  buttons.forEach((button, buttonIndex) => {

    button.classList.toggle(
      "selected",
      buttonIndex === index
    );

  });

  // รอเล็กน้อยให้เห็นคำตอบที่เลือก
  setTimeout(() => {

    nextQuestion();

  }, 350);

}


/* =================================
   10. NEXT QUESTION
================================= */

function nextQuestion() {

  if (selectedAnswer === null) return;

  const answer = questions[currentQuestion].answers[selectedAnswer];

  scores[answer.type]++;

  currentQuestion++;

  if (currentQuestion < questions.length) {

    renderQuestion();

  } else {

    showResult();

  }

}


/* =================================
   11. CALCULATE RESULT
================================= */

function showResult() {

  const maxScore = Math.max(...Object.values(scores));

  const winners = Object.keys(scores).filter(type => {
    return scores[type] === maxScore;
  });

  // กรณีคะแนนเท่ากัน ใช้คำตอบข้อสุดท้ายช่วยตัดสิน
  let winner = winners[0];

  if (winners.length > 1) {

    const lastAnswer =
      questions[questions.length - 1].answers[
        selectedAnswer
      ];

    if (winners.includes(lastAnswer.type)) {
      winner = lastAnswer.type;
    } else {
      winner = winners[0];
    }

  }

  const result = results[winner];

  document.getElementById("resultTitle").textContent =
    result.title;

  document.getElementById("resultTitle").style.color =
    result.color;

  document.getElementById("resultSubtitle").textContent =
    result.subtitle;

  document.getElementById("resultSubtitle").style.color =
    result.color;

  document.getElementById("resultDescription").textContent =
    result.description;

  document.getElementById("resultMessage").textContent =
    result.message;

  showPage("ending");

}


/* =================================
   12. RESTART
================================= */

function restartStory() {

  storyIndex = 0;

  currentQuestion = 0;

  selectedAnswer = null;

  scores = {
    FREE: 0,
    HAPPY: 0,
    MEMORY: 0,
    CALM: 0
  };

  showPage("intro");

}


/* =================================
   13. INITIALIZE
================================= */

document.addEventListener("DOMContentLoaded", () => {

  showPage("intro");

});
