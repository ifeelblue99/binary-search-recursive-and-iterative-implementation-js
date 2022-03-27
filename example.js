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

// iterative 
function binarySearchIterative(arr, target){
 
    let start = 0
    let end = arr.length-1
    
    while (start<end) {
        let middleIndex = Math.floor((start+end)/2)
        if(arr[middleIndex]===target){
            return `found at index: ${middleIndex}`
        }
        else if (arr[middleIndex]>target) {
            end = middleIndex-1     
        }else{
            start = middleIndex+1
        }   
    }
    return "no valid data found"
}

// driver code
console.log(binarySearchIterative(dataArray, 22))

