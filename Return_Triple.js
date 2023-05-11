// A JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

function TripleSum(Int1, Int2) {
    
    if (Int1 == Int2) {

        console.log (3 * (Int1 + Int2));
    } 

    else {

        console.log (Int1 + Int2);

    }
}

TripleSum(5, 5);