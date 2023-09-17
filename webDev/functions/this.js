// name
const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

person.fullName();  //Robert herjavec
person.last = "Plant";
person.fullName();  //Robert Plant

// eggLaying
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
      this.eggCount++;
      return 'EGG';
    }
  };