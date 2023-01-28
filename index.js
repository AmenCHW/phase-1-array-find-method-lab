// code your solution here


superbowlWin = (array) => {
    const winner = array.find( array => array.result === "W" );
    return winner ? winner.year : undefined;
  }
