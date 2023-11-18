const quarterOf = (month) => {
  if (month < 1 || month > 12) {
    throw new Error("Month must be between 1 and 12")
  }
  
  const quarter = Math.floor((month - 1) / 3) +1 ;
  return quarter;
}
