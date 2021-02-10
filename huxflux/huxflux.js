
/**
 * @returns {Number[]} list of seven integers
 */
function huxflux() {

    const Number = []
   
    while(Number.length<7){
  
      do{  //the do while loop will fill the Number array with random integers. 
        var occuring = false  
        var random = Math.floor(Math.random() * 35) + 1
        Number.forEach(number=>{  //loops through the array and compares the random integer with all the integers that are in the array
          if(number===random) occuring = true  
        })  
      }while(occuring)  //as long as the variable occurring is true, the do while loop will iterate and keep rendering random numbers
  
      Number.push(random)  //when a random number has passed the test and proven to be unique, it will be pushed into the array
  
    }
  
    return Number
}

export {
    huxflux
}