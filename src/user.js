class User {

  constructor(user, userAttributes) {
    this.id = user.id
    this.name = userAttributes.name
    this.email = userAttributes.email
    this.carb_grams = userAttributes.carb_grams
    this.protein_grams = userAttributes.protein_grams
    this.fat_grams = userAttributes.fat_grams
  }

  renderUser() {
    return `
      <h3>Welcome, ${this.name}! </h3>
      <div class="nutritionTargets">
        <span>Carbs: ${this.carb_grams} grams</span>
        <span>Protein: ${this.protein_grams} grams</span>
        <span>Fat: ${this.fat_grams}</span>
      </div>
    `
  }

}

User.all = [];
