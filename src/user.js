let currentUserId = 0;
let userTargets = []

class User {

  constructor(user, userAttributes) {
    this.id = user.id
    this.name = userAttributes.name
    this.email = userAttributes.email
    this.carbGrams = userAttributes.carb_grams
    this.proteinGrams = userAttributes.protein_grams
    this.fatGrams = userAttributes.fat_grams

    userTargets.push(this.carbGrams)
    userTargets.push(this.proteinGrams)
    userTargets.push(this.fatGrams)
  }

  renderUser() {
    return `
      <h3>Welcome, ${this.name}! </h3>
      <div class="nutritionTargets">
        <span>Carbs: ${this.carbGrams} grams</span>
        <span>Protein: ${this.proteinGrams} grams</span>
        <span>Fat: ${this.fatGrams} grams</span>
      </div>
    `
  }

}
