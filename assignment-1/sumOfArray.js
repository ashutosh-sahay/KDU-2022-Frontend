function sumOfArray(arr){
    try{
        let sum =arr[0];
        for(let i = 1; i<arr.length;i++){
            sum+=arr[i];
        }
        return sum;
    }
    catch(e){
        return "Error - Wrong Input";
    }
}
module.exports = sumOfArray