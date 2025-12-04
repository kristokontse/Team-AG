const pool = require("./database"); //To add posts to database
const posts = [
  { id: 1, text: "My new school" },
  { id: 2, text: "As a reminder to everybody, our discussion time slot is at 14:50" },
  { id: 3, text: "They should build a gym in Delta 🤔" },
  { id: 4, text: "I am very jealous of that guy who got to visit Paris!!! 😞😞😞" },
  { id: 5, text: "I just visited Paris! The Eiffel tower was so cool!" },
  { id: 6, text: "Sunset by the beach 🌅" },
  { id: 7, text: "Coding at 3AM again… 💻☕" },
  { id: 8, text: "Exam season is upon us 😩📚" },
  { id: 9, text: "Merry Christmas everyone! 🎄🎁" },
  { id: 10, text: "Delta hackathon was amazing! Learned so much from others" }
];

async function seed() {
  for (const p of posts) {
    await pool.query(
      "INSERT INTO posttable(body) VALUES ($1)",
      [p.text]
    );
  }

  console.log("Kõik postitused lisatud!");
  process.exit();
}

seed();
