function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const lanceCost = 8 * 50;
    if(ticketSale <= 0){
        return "Invalid Number"
    }
    else{
        return ((ticketSale * ticketPrice) - (500 + lanceCost))
    }
}

function checkName(name){
    if(typeof(name) === 'string'){
        const lowerString = name.toLowerCase();
        let stringLastWorld = lowerString.charAt(lowerString.length - 1);
        if(stringLastWorld === 'a' || stringLastWorld === 'y' || stringLastWorld === 'i' || stringLastWorld === 'e' || stringLastWorld === 'o' || stringLastWorld === 'u' || stringLastWorld === 'w'){

            return "Good Name"
        }
        else{

            return "Bad Name"
        }    
    }
    else{
        return "invalid";
    }
}

function deleteInvalids(array){
    let newArray = [];
    if(Array.isArray(array) === true){
       for(let i = 0; i < array.length; i++ ){
        if(typeof(array[i]) === 'number' && !isNaN(array[i])){  
            newArray.push(array[i])
        }
       }
       return newArray;
    }
    else{
        return "Invalid Array"
    }
}

function password(obj){
    let keys = Object.keys(obj);
    for(let i = 0; i <= 2; i++){
        if(keys[0] !== 'name' || keys[1] !== 'birthYear' || keys[2] !== 'siteName'){
            return 'invalid'
        }
        else if(obj.birthYear < 1000 || obj.birthYear > 9999){
            return 'invalid';
        }
        else{
            const webName = (obj.siteName).charAt(0);
            const firstWebName = webName.toUpperCase()
            const remainingLetter = (obj.siteName).slice(1);
            const totalWorld = firstWebName + remainingLetter;
            const smallLetter = (obj.name).toLowerCase();
            const totalAge = obj.birthYear;
            return totalWorld + "#" + smallLetter + '@' + totalAge;
        }
        
    }
    
 }

function monthlySavings(arr , livingCost){
    if(Array.isArray(arr) !== true || typeof(livingCost) !== 'number'){
        return "invalid input"
    }
    else if(Array.isArray(arr) === true || typeof(livingCost) === 'number'){
        let total = 0;
        let tax;
        let totalSave;
        for(let i = 0; i < arr.length; i++){
            total = total + arr[i];
            if(arr[i] >= 3000){
                tax = (arr[i] * 20 / 100);
                totalSave = total - (tax + livingCost);
                if(totalSave >= 0){
                    return totalSave;
                }
                else{
                    return 'earn more'
                }
            }  
        } 
        return total - livingCost;    
    }
}
