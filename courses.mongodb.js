use("codingwala");
db.createCollection("courses")



// db.courses.insertMany([
//     {
//         "Name": "frontend",
//         "price": "1000",
//         "duration": "2 months",
//         "author": "dinesh"
//     },
//     {
//         "Name": "web design",
//         "price": "1200",
//         "duration": "1.5 months",
//         "author": "alex"
//     },
//     {
//         "Name": "JavaScript Basics",
//         "price": "800",
//         "duration": "1 month",
//         "author": "sara"
//     },
//     {
//         "Name": "CSS Styling",
//         "price": "900",
//         "duration": "1.5 months",
//         "author": "john"
//     },
//     {
//         "Name": "React Development",
//         "price": "1500",
//         "duration": "3 months",
//         "author": "emily"
//     },
//     {
//         "Name": "HTML5 Fundamentals",
//         "price": "700",
//         "duration": "1 month",
//         "author": "peter"
//     },
//     {
//         "Name": "Angular Basics",
//         "price": "1100",
//         "duration": "2 months",
//         "author": "lisa"
//     },
//     {
//         "Name": "Vue.js Mastery",
//         "price": "1300",
//         "duration": "2.5 months",
//         "author": "kevin"
//     },
//     {
//         "Name": "Responsive Web Design",
//         "price": "950",
//         "duration": "1.8 months",
//         "author": "megan"
//     },
//     {
//         "Name": "Frontend Frameworks",
//         "price": "1800",
//         "duration": "3.5 months",
//         "author": "david"
//     }
// ]
// )
console.log(`success.`);

let a=db.courses.find( {price: 1000 })
let resultArray = cursor.toArray();
console.log(resultArray);
