const arr = [1,2,3,4,5];
const target = 3;


function fn(arr,target){
    if(arr.length == 0){
        return 0;
    }
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.ceil((right + left) / 2);
    while(left < right){
        if(arr[middle] === target){
            return middle;
        }
        if(arr[middle] > target){
            right = middle - 1;
            middle = Math.ceil((right + left) / 2);
        }
        if(arr[middle] < target){
            left = middle + 1;
            middle = Math.ceil((right + left) / 2);
        }
    }
    if(right === left){
        return left;
    }
}


const result = fn(arr,target)
console.log(result)