// determining variables

const signupModal = document.querySelector(".signup-form-wrapper")

const loginModal = document.querySelector(".login-form-wrapper")

const signupX = document.querySelector(".signup-x")
const loginX = document.querySelector(".login-x")

const signupBtn = document.querySelector(".signup-btn")
const loginBtn = document.querySelector(".login-btn")

signupBtn.addEventListener("click", () => {
    signupModal.classList.add('display')
})

loginBtn.addEventListener("click", () => {
    loginModal.classList.add('display')
})

