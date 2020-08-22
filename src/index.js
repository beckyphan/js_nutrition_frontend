const usersPath = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav')
  const loginOrRegisterButton = document.getElementById("loginOrRegisterButton")

  loginOrRegisterButton.addEventListener("click", (e) => {
    showRegisterOrLogin()
  })

  function listenForLogin() {
      loginButton.addEventListener("click", (e) => {
      showLoginForm()
    })
  }

 function listenForRegister() {
      registerButton.addEventListener("click", (e) => {
      showRegisterForm()
    })
  }


  function showRegisterOrLogin() {
    nav.innerHTML = `
      <button id="loginButton">Log In</button>
      <button id="registerButton">Register</button>
      `

    const loginButton = document.querySelector('#loginButton')
    const registerButton = document.querySelector('#registerButton')

    listenForLogin()
    listenForRegister()

  }

  function showLoginForm() {
    nav.innerHTML = `
      <div id="login">
      <h2>Login</h2>
        <form class="login-form">
          <input type="text" name="email" value="" placeholder="email" class="input-text" required="required"/>
          <input type="password" name="password" value="" placeholder="password" class="input-text" required="required"/>
          <input type="submit" name="submit" value="Submit" class="submit" />
        </form>
      </div>
      <div>
        <h3>or... <button id="registerButton">Register</button></h3>
      </div>
      `
    listenForRegister()
  }

  function showRegisterForm() {
    nav.innerHTML = `
      <div id="register">
        <h2>Register New User</h2>
        <form class="login-form">
          <label for="[user]name">Name:</label>
          <input type="text" name="[user]name" value="" placeholder="name" class="input-text" required="required"/>
          <label for="[user]email">E-mail:</label>
          <input type="text" name="[user]email" value="" placeholder="email" class="input-text" required="required"/>
          </br>

          <label for="[user]carb_grams">Daily Carbs (g) Target:</label>
          <input type="text" name="[user]carb_grams" value="" placeholder="300" class="input-text" required="required"/></br>

          <label for="[user]protein_grams">Daily Protein (g) Target:</label>
          <input type="text" name="[user]protein_grams" value="" placeholder="50" class="input-text" required="required"/></br>

          <label for="[user]fat_grams">Daily Fat (g) Target:</label>
          <input type="text" name="[user]fat_grams" value="" placeholder="60" class="input-text" required="required"/></br>

          <label for="[user]password">Password:</label>
          <input type="password" name="[user]password" value="" placeholder="password" class="input-text" required="required"/>
          </br>

          <input type="submit" name="submit" value="Submit" class="submit" />
        </form>
      </div>
      <div>
        <h3>or... <button id="loginButton">Log In</button></h3>
      </div>
      `
    listenForLogin()
  }

  nav.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit button clicked")
    let valuesCollected = e.srcElement.length

    let inputsCollected = []

    for (let i = 0; i < valuesCollected - 1; i++) {
      inputsCollected.push(e.srcElement[i].value)
    }

    // function loginUser(email, password) {
    //   const bodyData = {user: {email, password} }
    //
    //   let configObj = {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(bodyData)
    //   }
    //
    //   console.log(bodyData)
    //
    //   fetch(usersPath, configObj)
    //   .then(resp => {return resp.json()})
    //   .then(json => {console.log("fetchedUser")})
    // }

    function registerUser() {

    }

    if (inputsCollected < 3) {
      // loginUser(inputsCollected[0], inputsCollected[1])
      console.log("Welcome Existing User")
    } else {
      console.log("Welcome New User")
    }

  })
})
