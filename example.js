/*
    binary search recursive and iterative implementation
*/

const dataArray = [1, 2, 4, 5, 6, 8, 10 ,11 ,12 ,15 ,16 ,17, 18 ,19 ,20]

// recursive 
function binarySearchRecursive(arr, target, start = 0, end = arr.length-1){
    if(start>end) return false

    const middleIndex = Math.floor((end-start)/2) + start
    
    if(arr[middleIndex]===target) return middleIndex

    else if (arr[middleIndex]>target) {
        return binarySearchRecursive(arr, target, start, middleIndex-1)        
    }else{
        return binarySearchRecursive(arr, target, middleIndex+1, end)        
    }
}
// driver code
console.log("target found at.",binarySearchRecursive(dataArray, 15))

function binarySearchIterative(arr, target){
    let start = 0
    let end = arr.length-1
    
    while (end>=start) {
        let middleIndex = Math.floor((end-start)/2) + start
        if(arr[middleIndex]===target){
            return `found at index: ${middleIndex}`
        }
        else if (arr[middleIndex]<target) {
            start = middleIndex+1     
        }else{
            end = middleIndex-1
        }   
    }
    return "no valid data exists"
}
// driver code
console.log(binarySearchIterative(dataArray, 15))
