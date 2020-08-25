const usersPath = "http://localhost:3000/api/v1/users"
const loginPath = "http://localhost:3000/api/v1/login"

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav')
  const userProf = document.querySelector('#userInfo')
  const loginOrRegisterButton = document.getElementById("loginOrRegisterButton")
  const currentLogDiv = document.querySelector('.current-log')

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
      <span>
        <h2>Login</h2>
        <form class="login-form">
          <input type="text" name="email" value="" placeholder="email" class="input-text" required="required"/>
          <input type="password" name="password" value="" placeholder="password" class="input-text" required="required"/>
          <input type="submit" name="submit" value="Submit" class="submit" />
        </form>
      </span>
      <span>
        <h3>or... <button id="registerButton">Register</button></h3>
      </span>
      </div>
      `
    listenForRegister()
  }

  function showRegisterForm() {
    nav.innerHTML = `
      <div id="register">
        <span>
          <h2>Register as New User</h2>
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
        </span>
        <span>
          <h3>or... <button id="loginButton">Log In</button></h3>
        </span>
      </div>
      `
    listenForLogin()
  }

  nav.addEventListener("submit", (e) => {
    e.preventDefault()
    let valuesCollected = e.srcElement.length

    let inputsCollected = []

    for (let i = 0; i < valuesCollected - 1; i++) {
      inputsCollected.push(e.srcElement[i].value)
    }


    if (inputsCollected.length < 3) {
      loginUser(inputsCollected[0], inputsCollected[1])
    } else {
      registerUser(inputsCollected[0], inputsCollected[1], inputsCollected[2], inputsCollected[3], inputsCollected[4], inputsCollected[5])
    }

    function loginUser(email, password) {
      const bodyData = {user: {email, password} }

      let configObj = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
      }

      fetch(loginPath, configObj)
      .then(resp => resp.json())
      .then(userObj => {
        displayUserProfile(userObj)
      })
    }

    function registerUser(name, email, carb_grams, protein_grams, fat_grams, password) {
      const bodyData = {user: {name, email, carb_grams, protein_grams, fat_grams, password} }

      let configObj = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
      }

      fetch(usersPath, configObj)
      .then(resp => resp.json())
      .then(userObj => {
        displayUserProfile(userObj)
      })
    }

    function displayUserProfile(userObj) {
      const userData = userObj.user.data
      let user = new User(userData,userData.attributes)
      currentUserId = user.id

      displayLogoutButton()

      userProf.innerHTML = user.renderUser()
    }

    function displayLogoutButton() {
      nav.innerHTML = `
        <span>
          <input type="button" id="logout" value="Log Out" onClick="document.location.reload(true)">
        </span>
        `
      const logOut = document.querySelector('#logout')

      displayNewLogButton(logOut)
    }



  })

  function displayNewLogButton(logOut) {
    currentLogDiv.innerHTML += `
      <span>
        <button id='newLog'>New Log</button>
      </span>
    `

    const newLogButton = document.querySelector('#newLog')

    newLogButton.addEventListener("click", (e) => {
      displayNewLogForm()
    })
  }

  function displayNewLogForm() {
    const logDivFirstSpan = currentLogDiv.querySelector('span')
    logDivFirstSpan.innerHTML = `
      <form class="log-form">
        <label for="[log]caldate">Date:</label>
        <input type="date" name="[log]caldate" value="" class="input-text" required="required"/></br>
        <input type="submit" name="submit" value="Submit" class="submit" />
      </form>
    `

    logDivFirstSpan.addEventListener("submit", (e) => {
      e.preventDefault()
      let caldate = e.srcElement[0].value
      const newLogData = {log: {caldate}}
      const logPath = `http://localhost:3000/api/v1/users/${currentUserId}/logs`

      let configObj = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newLogData)
      }

      fetch(logPath, configObj)
      .then(resp => resp.json())
      .then(logObj => {
        // displayUserLog(logObj)
      })
    })
  }

  function displayUserLog(logObj) {
      // data:
      // attributes: {caldate: "2020-08-24"}
      // id: "1"
      // relationships:
      // log_foods:
      // data: Array(0)
    // replace logDivFirstSpan.innerHTML to display the new log within a span/container
    // display button to add foods
    // display foods container on the side, with add food to log button
    // clicking on any food from food-span will add the food to the log span
    // clicking on any food from food-span will also use fetch to post new food-log to update associations
  }

})
