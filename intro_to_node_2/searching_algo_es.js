function linearSearch(arr,x){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===x)
        {
            return i;
        }
    }
    return NaN;
}
export default function binarySearch(arr,x)
{

}
// This is how we expose the details to the outer world
export{
    linearSearch
}
// This is Named export of ES6 moduling