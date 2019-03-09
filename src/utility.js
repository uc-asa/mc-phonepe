const utils = {}

// Shuflle the array
utils.shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Get the params while passing throw navigation
utils.getParams = (navigation, fullData = false) => {
    if ( typeof navigation == 'object' && typeof navigation.state == 'object') {
        return fullData ? navigation.state : navigation.state.params;
    }
};

  export default utils;