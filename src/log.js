class Log {

  constructor(log, logAttributes, logRelationships) {
    this.id = log.id
    this.caldate = logAttributes.caldate
    this.loggedFoodsArray = logRelationships.data
    this.logFoodsIds = []
    for (let i = 0; i < this.loggedFoodsArray.length; i++) {
      this.logFoodsIds.push(this.loggedFoodsArray[i].id)
    }
  }

  renderLogDate() {
    return `<h3>${this.caldate}</h3>`
  }

  renderLoggedFoods() {
    let loggedFoods = ""
    for (let i = 0; i < this.logFoodsIds.length; i++) {
      fetchFoodLogProperties(this.logFoodsIds[i])
    }

    return loggedFoods
  }

}

function fetchFoodLogProperties(i) {
  // fetch foodLog by id = i
  // which will return food_id and quantity
  // display quantity and search through allFoods to find foodName
  // calculate foodProperties based on quantity
}
