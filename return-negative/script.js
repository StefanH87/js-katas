/*In this simple assignment you are given a number and have to 
make it negative. 
But maybe the number is already negative?*/

function makeNegative(num) {
  if (num === 0) {
    return 0;
  } else {
    return -Math.abs(num);
  }
}

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

/*
  //---in kurzz
  const makeNegative = (num) => -Math.abs(num)
  //-----in kurz
  function makeNegative(num) {
    return num > 0 ? -num : num;
  }
  */
