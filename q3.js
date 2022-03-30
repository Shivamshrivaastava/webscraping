// let studentRecords=[
//     {name: "Abhishek", id:123,marks:98},
//     {name: "Udai", id:101,marks:90},
//     {name: "Himanshu", id:200,marks:96},
//     {name: "Mrinal", id:115,marks:75},
// ];
// let value =studentRecords.map(function(student){
//     return student.name.toUpperCase();
// })
// let n = studentRecords.filter(function(student){
//     return student.marks>=50&&student.id>120
// })
// console.log(value)
// console.log(n);

var newReleases=[
    {
        id:1,
        title:"Die Hard",
        rating:9,
    },
    {
        id : 2,
        title : " Bad Boys"
        rating:7,
    },
    {
        id :3,
        title: "The chamber",
        rating : 10,
    },

],
let n = newReleases.filter(function(movie){
    return movie.rating>8;
}).map(function(movie){
    return movie.title
})

console.log(names)