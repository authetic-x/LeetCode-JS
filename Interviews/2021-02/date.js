function timestamp2date(timestamp) {
  const date = new Date(timestamp)
  return date.toJSON().substr(0, 19).replace(/T/, ' ').replace(/-/g, '.')
}

console.log(timestamp2date(new Date()))