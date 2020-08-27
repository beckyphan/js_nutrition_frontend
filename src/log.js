class Log {

  constructor(log, logAttributes, logRelationships) {
    this.id = log.id
    this.caldate = logAttributes.caldate
    this._loggedFoodsArray = logRelationships.data
    this._logFoodsIds = []
    for (let i = 0; i < this._loggedFoodsArray.length; i++) {
      this._logFoodsIds.push(this._loggedFoodsArray[i].id)
    }
    this.logCarb = []
    this.logProtein = []
    this.logFat = []
  }

  addNutrientsToLog(carb, protein, fat) {
    this.logCarb.push(carb)
    this.logProtein.push(protein)
    this.logFat.push(fat)
  }

  totalCarb() {
    let total = 0;
    for (element of this.logCarb) {
      total += element
    }
    return total
  }

  totalProtein() {
    let total = 0;
    for (element of this.logProtein) {
      total += element
    }
    return total
  }

  totalFat() {
    let total = 0;
    for (element of this.logFat) {
      total += element
    }
    return total
  }

  renderLogDate() {
    return `<h3>${this.caldate}</h3>`
  }

  renderLoggedFoods() {
    let loggedFoods = ""
    for (let i = 0; i < this._logFoodsIds.length; i++) {
      fetchFoodLogProperties(this._logFoodsIds[i])
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
