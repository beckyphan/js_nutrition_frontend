const allFoods = []

class Food {

  constructor(food, foodAttributes) {
    this.id = food.id
    this.name = foodAttributes.name
    this.quantity = foodAttributes.quantity
    this.unit = foodAttributes.unit
    this.carb = foodAttributes.carb
    this.protein = foodAttributes.protein
    this.fat = foodAttributes.fat

    allFoods.push(this)
  }

  renderFoodCard(location) {
    location.innerHTML += `
      <span class="food id-${this.id}">
      <b>${this.name} | ${this.quantity} ${this.unit} </b>
      </br>
      Carbs: ${this.carb} | Protein: ${this.protein} | Fat: ${this.fat}
      </span>
      </br></br>
    `
  }

}
