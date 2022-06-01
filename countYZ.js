function countYZ(str){
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    
    if (str.charAt(i) == 'y' || str.charAt(i) == 'z')
    //using a regex to check if the following letter is not a character(letter)
      if (!(/[a-z]/).test(str.charAt(i + 1)))
        count++;
      else if (i == str.length - 1)
        count++;
    }
  }
  return count;
}
