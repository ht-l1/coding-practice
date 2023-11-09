// Write a function to convert a name into initials. 

function abbrevName(name){
  let words = name.split(' ');
  let initials = words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase();
  return initials;
}
