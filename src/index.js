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
}
