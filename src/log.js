class Log {

  constructor(log, logAttributes, logRelationships) {
    this.id = log.id
    this.caldate = logAttributes.caldate
    this.loggedFoodsArray = logRelationships.data
  }

  renderLogDate() {
    return `<h3>${this.caldate}</h3>`
  }

  renderLoggedFoods() {
    let loggedFoods = ""
    for (let i = 0; i < this.loggedFoodsArray.length; i++) {
      // fetch loggedFood Item from Foods Table to display
      loggedFoods += `<div class='foodItem'>${this.loggedFoodsArray[i]}</div>`
    }

    return loggedFoods
  }

}
