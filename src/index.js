const usersPath = "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
  const loginOrRegisterButton = document.getElementById("loginOrRegisterButton")

  loginOrRegisterButton.addEventListener("click", (e) => {
    e.preventDefault()
    showRegisterOrLogin()
  })

})

function showRegisterOrLogin() {
  const nav = document.querySelector('nav')
  nav.innerHTML = `
    <button id="loginButton">Log In</button>
    <button id="registerButton">Register</button>
    `

  const loginButton = document.querySelector('#loginButton')
  const registerButton = document.querySelector('#registerButton')

  loginButton.addEventListener("click", (e) => {
    showLoginForm()
  })
}

function showLoginForm() {
  console.log("showLoginForm")
  const nav = document.querySelector('nav')

  nav.innerHTML = `
    <div id="login">
      <form class="login-form">
        <input type="text" name="email" value="" placeholder="email" class="input-text"/>
        <input type="text" name="password" value="" placeholder="password" class="input-text"/>
        <input type="submit" name="submit" value="Submit" class="submit" />
      </form>
    </div>
    `
}
