// let nums = "8118"
// nums.split(" ")
// for(let i = 0; i < arr.length; i++){
// console.log(nums);}

// let letter = "World"
// let natija = ""
// for (let i = 1; i <= letter.length; i++) {
//     natija = natija + letter[letter.length -i]
// }
// console.log(natija);


// let nums = 17 
// let k = 0
// for (let i = 0; i <= nums; i++){
//     if (nums % i == 0) {
//         k += 1;
//     }
// }
// if (k == 2){
//     console.log("Tub son");
// }
// else{
//     console.log("Tub emas");
// }


// let text = "Biz bir nechta bollar bilan najot talimda oqiymiz. Bizning guruh juda zor"
// function find(text, b) {
//     let a = ""
//     let splitedText = text.split(" ")
//     for (let i = 0; i < b; i++) {
//          a = a + splitedText[i] + ' '
//     }
//     console.log(a);
// }
// console.log(find(text ,12));


//Last Homework
function all(all){
let like = 0
let dislike = 0
let Like = ("Likes are more than dislikes")
let Dislike = ("Dislikes are more than likes")
let empty = ("Similar")
for (let n = 0; n < all.length; n++) {
    if (all[n] == "like") {
        like += 1;
    }
    if (all[n] == "dislike") {
        dislike += 1;
    }
}
if (like > dislike) {
    return Like
}
else if (dislike > like){
    return Dislike
}
else{
    return empty
}
}
console.log(all(["dislike", "like", "dislike", "like", "dislike"]));
