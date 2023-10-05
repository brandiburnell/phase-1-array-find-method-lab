// code your solution here

function superbowlWin(record) {

    let superBowlWinYear;

    function isWinningYear(element, index, array) {
        return (element.result === "W");
    }

    let ret = record.find(isWinningYear);
    if (ret === undefined) {
        return undefined;
    } else{
        return ret.year;
    }

}


// function superbowlWin(element) {
//     console.log("year", element.year);
//     console.log("result", element.result);

//     if (element.result === "W") {
//         return element.year;
//     } else {
//         return undefined;
//     }
// }



