var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    
    let res = []
  
    for (let i=0; i<iterable.length; i++) {
      if (iterable[i] !== iterable[i+1]) {
        res.push(iterable[i])     // pay attention to this .push function syntax
      }
    }
    
    return res
  }