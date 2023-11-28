function createCounter(start) {
    return function() {
      return start++;
    }
  }