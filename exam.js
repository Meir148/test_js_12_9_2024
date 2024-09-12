
function Mission1(numbers){

    const even = numbers.filter((num) => num % 2 === 0);
 return even
}
// console.log(Mission1([8, 19, 5, 6, 14, 9, 13]));



function Mission2(wordList){
const words = wordList.filter((word) => word.length == 4);
return words
}

// console.log(Mission2(['meir', 'elit', 'exuberant', 'destruction', 'present']));


function Mission3(arrays){

    const merge3 = arrays.flat(1);
    return merge3;
}

// console.log(Mission3([
//     ["hi"],
//     ["how"],
//     ["are"],
//     ["you"],
//     ["$18"],
//     ["$22"],
//     ["$10"]
//   ]))



function Mission4(num) {
    if (num.length === 1) {
        return 1;
    }
    
    let down = true;
    let up = true;
    
    for (let i = 0; i < num.length - 1; i++) {
        if (num[i] < num[i + 1]) {
            up = false;
        } else if (num[i] > num[i + 1]) {
            down = false;
        }
    }
    
    if (down) {
        return 1;
    } else if (up) {
        return 2;
    } else {
        return 0;
    }
}



// console.log(Mission4([1, 2, 3,4,2,5]));   
// console.log(Mission4([3,2,1]));    
// console.log(Mission4([-3, -2, -1])); 



module.export = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
}

//without 5 and 6