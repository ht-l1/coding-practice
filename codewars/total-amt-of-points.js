function points(games) {
  let point = 0;
  for (let game of games) {
//      array destructuring and the map function to extract the scores of our team and the opponent from the match string.
    let [x,y] = game.split(":").map(Number);
    if (x > y) {
      point += 3;
    } else if (x === y) {
      point += 1;
    }
  }
  return point;
}
