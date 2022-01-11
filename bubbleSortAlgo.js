//runs through the arr and looks at two adjacent values at a time
//swaps the two adjacent values if the greater one comes first
//loops through the array many times until there is a perfect
//run with no swaps
// check two nums, then check if swap is needed, then move to next two numbers
function bubbleSort(arr){
    var swapped = true;
    while(swapped){
        // if a swap has happened
        swapped = false;
        for(var i = 0; i < arr.length; i++){
            console.log(`${arr[i]}, ${arr[i+1]}`);
            if(arr[i] > arr[i +1]){
                swapped = true;

                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }

    }
    return arr;
}


let arr = [5,4,2,6,8,14,1,3];
console.log(arr);
console.log(bubbleSort(arr));