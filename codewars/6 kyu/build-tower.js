function towerBuilder(nFloors) {
    const tower = []
    for (let i = 0; i < nFloors; i++) {
     // Calculate the number of spaces on each side of the asterisks
      let spaces = ''
      for (let j = 0; j < nFloors - i - 1; j++) {
        spaces += ' '
      }
      
      // Calculate the number of asterisks for the current floor
      let asterisks = ''
      for (let k = 0; k < i * 2 + 1; k++) {
        asterisks += '*'
      }
      
      // Calculate the current floor and add it to the tower array
      const floor = spaces + asterisks + spaces;
      tower.push(floor);
    }
    return tower;
  }