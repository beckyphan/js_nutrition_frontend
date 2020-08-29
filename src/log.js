class Log {

  constructor(log, logAttributes) {
    this.id = log.id
    this.caldate = logAttributes.caldate
    this.totalCarb = logAttributes.nutrition_totals[0]
    this.totalProtein = logAttributes.nutrition_totals[1]
    this.totalFat = logAttributes.nutrition_totals[2]
    this.loggedFoods = logAttributes.loggedFoods
  }

  renderLogDate() {
    return `<h3 class="caldate ${this.id}">${this.caldate}</h3>`
  }

  renderLoggedFoods() {
    let loggedFoods = ""
    for (let i = 0; i < this.loggedFoods.length; i++) {
      loggedFoods += `<p> ${this.loggedFoods[i]}</p>`
    }
    return loggedFoods
  }

}
