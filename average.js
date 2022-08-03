function find_average(array) {
    var sum = 0;
    if(array.length > 0){
        for(let i = 0; i < array.length; i ++) {
            sum = sum + array[i];
        }
        return (sum/array.length);
    } else {
        return 0;
    }//end else
}//end function

find_average([1, 2, 3 ]);

