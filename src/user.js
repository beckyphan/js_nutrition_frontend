const usersPath = "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav')

  nav.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit button clicked")
    let valuesCollected = e.srcElement.length

    let inputsCollected = []

    for (let i = 0; i < valuesCollected - 1; i++) {
      inputsCollected.push(e.srcElement[i].value)
    }

    console.log(inputsCollected)
  })

})
