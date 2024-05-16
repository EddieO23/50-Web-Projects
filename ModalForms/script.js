// determining variables

const signupModal = document.querySelector(".signup-form-wrapper")

const loginModal = document.querySelector(".login-form-wrapper")

const signupX = document.querySelector(".signup-x")
const loginX = document.querySelector(".login-x")

const signupBtn = document.querySelector(".signup-btn")
const loginBtn = document.querySelector(".login-btn")

const formContainter = document.querySelector(".form-container")



signupBtn.addEventListener("click", () => {
    signupModal.classList.add('display')
    formContainter.classList.add('disable')
})

loginBtn.addEventListener("click", () => {
    loginModal.classList.add('display')
    formContainter.classList.add('disable')

})

signupX.addEventListener("click", () => {
    signupModal.classList.remove('display')
    formContainter.classList.remove('disable')

})

loginX.addEventListener("click", () => {
    loginModal.classList.remove('display')
    formContainter.classList.remove('disable')

})

