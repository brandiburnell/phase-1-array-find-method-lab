// code your solution here

function superbowlWin(record) {

    // function isWinningYear(element, index, array) {
    //     return (element.result === "W");
    // }

    let ret = record.find(element => element.result === "W");
    if (ret === undefined) {
        return undefined;
    } else {
        return ret.year;
    }

}




