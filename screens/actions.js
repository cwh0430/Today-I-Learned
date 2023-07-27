const createBtn = document.querySelector(".share-btn");
createBtn.addEventListener("click", function () {
  const form = document.querySelector(".create-fact");
  if (form.classList.contains("hide")) {
    form.classList.remove("hide");
    createBtn.textContent = "close";
  } else {
    form.classList.add("hide");
    createBtn.textContent = "Share a fact";
  }
});

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// function getList(dataArr) {
//   dataArr.map((fact) => {
//     console.log(fact.text);
//   });
// }

//const facts = document.querySelector(".facts");
//facts.innerHTML = "";

// function getList(dataArr) {
//   const data = dataArr.map(
//     (fact) =>
//       `<li class="fact-container">
//         <p>${fact.text}
//             <span><a href="${fact.source}">(Source)</a></span>
//         </p>
//             <span class="tag" style="background-color:${
//               CATEGORIES.find((color) => color.name === fact.category).color
//             }">${fact.category}</span>

//         <div class="vote-btns">
//             <button>👍 ${fact.votesInteresting}</button>
//             <button>🤯 ${fact.votesMindblowing}</button>
//             <button>⛔️ ${fact.votesFalse}</button>
//         </div>
//     </li>`
//   );

//   return data;
// }

// const factList = getList(initialFacts);
// const html = factList.join("");
// facts.insertAdjacentHTML("afterbegin", html);

const fact = document.querySelector(".facts");
fact.innerHTML = "";
getList();

async function getList() {
  const res = await fetch(
    "https://fxrxzxkhvkhtvhxdqmxq.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cnh6eGtodmtodHZoeGRxbXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0MzkyODIsImV4cCI6MTk4OTAxNTI4Mn0.MjX3tGzlsRsYberOf97Ih1-nnMZozQHhAr8TVoDwCqw",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cnh6eGtodmtodHZoeGRxbXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0MzkyODIsImV4cCI6MTk4OTAxNTI4Mn0.MjX3tGzlsRsYberOf97Ih1-nnMZozQHhAr8TVoDwCqw",
      },
    }
  );

  const factsdata = await res.json();
  console.log(factsdata);

  getAll(factsdata);
}

function getAll(factsdata) {
  const factList = factsdata.map(
    (facts) =>
      `<li class="fact-container">
                 <p>${facts.text}
                     <span><a href="${facts.source}">(Source)</a></span>
                 </p>
                     <span class="tag" style="background-color:${
                       CATEGORIES.find((color) => color.name === facts.category)
                         .color
                     }">${facts.category}</span>
        
                 <div class="vote-btns">
                     <button>👍 ${facts.votesInteresting}</button>
                     <button>🤯 ${facts.votesMindblowing}</button>
                     <button>⛔️ ${facts.votesFalse}</button>
                 </div>
             </li>`
  );

  const html = factList.join("");

  fact.insertAdjacentHTML("afterbegin", html);
}
