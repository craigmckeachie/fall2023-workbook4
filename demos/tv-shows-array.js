let shows = ["Breaking Bad","Better Call Saul", "Friends", "Supernatural", "Brooklyn 99", "Modern Family"]

for (let index = 0; index < shows.length; index++) {
    const show = shows[index];
    console.log(show);  
}

for (const show of shows) {
    console.log(show);
}


// for(let count =0; count< shows.length; count++){
//     console.log(shows[count]);
// }


// console.log(shows[0]);
// console.log(shows[1]);
// console.log(shows[2]);
// console.log(shows[3]);
// console.log(shows[4]);