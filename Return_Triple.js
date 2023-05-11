// A JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

function TripleSum(Int1, Int2) {
    
    if (Int1 == Int2) {

        return (3 * (Int1 + Int2));
    } 

    else {

        return (Int1 + Int2);

    }
}

console.log(TripleSum(10, 10))