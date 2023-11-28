function filter_list(l) {
    let result = []
    // Return a new array with the strings filtered out4
      for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
          result.push(l[i]);
        }
      }
    return result
  }
