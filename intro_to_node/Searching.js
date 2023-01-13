function linearSearch(arr,x){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===x)
        {
            return i;
        }
    }
    return NaN;
}
function binarySearch(arr,x)
{

}
// This is how we expose the details to the outer world
module.exports={
    linear: linearSearch,
    binary: binarySearch
}