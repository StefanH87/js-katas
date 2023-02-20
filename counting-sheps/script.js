let array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let countOfSheeps = 0;

  for (let index = 0; index < arrayOfSheep.length; index++) {
    if (arrayOfSheep[index] === true) {
      countOfSheeps++;
    }
  }
  return countOfSheeps;
}

/* andere schreibweise   
    
    
    function countSheeps(arrayOfSheep) {
        // TODO May the force be with you
        let countOfSheeps = 0;
        
        for (let index = 0; index < arrayOfSheep.length; index++){
         
          if (arrayOfSheep[index]) countOfSheeps += 1
          
       }
         return  countOfSheeps;
        
      }


      //oder

      
      function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}*/
