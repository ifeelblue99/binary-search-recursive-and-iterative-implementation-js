/*
    binary search recursive and iterative implementation
*/

const dataArray = [1, 2, 4, 5, 6, 8, 10 ,11 ,12 ,15 ,16 ,17, 18 ,19 ,20]

// recursive 
function binarySearchRecursive(arr, target, start, end){
    
    if(start>end) return false

    let middleIndex = Math.floor((arr.length-1)/2)
    
    if(arr[middleIndex]===target) return true


    if (arr[middleIndex]>target) {
        return binarySearch(arr, target, start, middleIndex-1)        
    }else{
        return binarySearch(arr, target, middleIndex+1, end)        
    }
}

// driver code
//console.log(binarySearch(dataArray, 18))

const dataArray = [1, 2, 4, 5, 6, 8, 10 ,11 ,12 ,15 ,16 ,17, 18 ,19 ,20]

function binarySearchIterative(arr, target){
 
    let start = 0
    let end = arr.length-1
    
    while (end>=start) {
        let middleIndex = Math.round((end-start)/2) + start
        if(arr[middleIndex]===target){
            return `found at index: ${middleIndex}`
        }
        else if (arr[middleIndex]<target) {
            start = middleIndex+1     
        }else if(arr[middleIndex]>target){
            end = middleIndex-1
        }   
    }
    return "no valid data exists"
}
// driver code
console.log(binarySearchIterative(dataArray, 20))
