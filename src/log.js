class Log {

  constructor(log, logAttributes) {
    this.id = log.id
    this.caldate = logAttributes.caldate
    this.totalCarb = logAttributes.totalCarb
    this.totalProtein = logAttributes.totalProtein
    this.totalFat = logAttributes.totalFat
    this.loggedFoods = logAttributes.loggedFoods
  }

  renderLogDate() {
    return `<h3>${this.caldate}</h3>`
  }

  renderLoggedFoods() {
    let loggedFoods = ""
    for (let i = 0; i < this.loggedFoods.length; i++) {
      loggedFoods += `<p> ${this.loggedFoods[i]}</p>`
      console.log(this.loggedFoods[i])
    }
    return loggedFoods
  }

}
