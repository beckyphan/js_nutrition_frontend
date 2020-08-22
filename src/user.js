class User {

  constructor(user, userAttributes) {
    this.id = user.id
    this.name = userAttributes.name
    this.email = userAttributes.email
    this.password = userAttributes.password
    this.carb_grams = userAttributes.carb_grams
    this.protein_grams = userAttributes.protein_grams
    this.fat_grams = userAttributes.fat_grams

    User.all.push(this)
  }

}

User.all = [];
