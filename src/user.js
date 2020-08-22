const usersPath = "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav')

  nav.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit button clicked")
  })

})
