// for loop to print even# between 1 to 10
// i = 2 means to start at 2
// i <= means the loop will stop at 10
// i += 2 means the loop will add 2 numbers each time
// output: 2, 4, 6, 8, 10
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// count down from 100 to 0 in a increment of 10
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// output: 10, 100, 1000
for (let i = 10; i <= 1000; i *= 10) {
    console.log(i);
}

// nested-for-loop
const seatingChart = [
    ['Hello', 'Hi', 'Hey'],
    ['Apple', 'Fruit', 'Veggie'],
    ['Puppy', 'Cat', 'Donkey'],
]

// if using for-loop
for (let i=0, i<= seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i+1}`)
    for (let j=0; j<row.length; j++) {
        console.log(row[j])
    }
}

// if using for-of
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}
