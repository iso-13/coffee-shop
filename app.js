// preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
})

// menu button
const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('nav')

menuBtn.addEventListener('click', function() {
    navBar.classList.toggle('show-nav')
})

// play and pause video
const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')
const spanBtn = document.querySelector('.span-btn')
const video = document.querySelector('.video-container')

pauseBtn.addEventListener('click', function() {
    spanBtn.classList.add('slide')
    video.pause();
})

playBtn.addEventListener('click', function() {
    spanBtn.classList.remove('slide')
    video.play();
})

// display images 

const openBtns = document.querySelectorAll('.work-icon')
const closeBtn = document.querySelector('.close-btn')
const imageDisplayed = document.querySelector('.image-overlay-container')
const showImage = document.querySelector('.image-overlay')

openBtns.forEach(function(openBtn) {
    openBtn.addEventListener('click', function(e) {
        e.preventDefault()
         imageDisplayed.classList.add('show-overlay')
        let id = e.currentTarget.previousSibling.previousSibling.dataset.id;
         showImage.innerHTML = `<img src="./work-${id}.jpeg" class="work-image" alt="" data-id="${id}">`
        
    })
})

closeBtn.addEventListener('click', function() {
    imageDisplayed.classList.remove('show-overlay')
})

// free drinks 

const signupBtn = document.querySelector('.sign-up')
const winnersList = document.querySelector('.winners-list')
const firstName = document.getElementById('name')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const alert = document.querySelector('.alert')

signupBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if (firstName.value && lastName.value && email.value) {
        const person = document.createElement('div')
        let name = firstName.value
        let seconedName = lastName.value
        let random = getRandomNumber()
    person.classList.add('winner')
    person.innerHTML = `<img src="./person-${random}.jpeg" class="person-image" alt="">
    <h4>${name}</h4>
    <h4>${seconedName}</h4>`

    winnersList.appendChild(person)

    displayAlert('customer added to the list', 'success')

    setDefault()

    }

    else { 

        displayAlert('some form values empty', 'danger')
    }

})

function setDefault () {
    firstName.value = ''
    lastName.value = ''
    email.value = ''
}

function displayAlert (text, action) {
    alert.textContent = text
    alert.classList.add(action)

    setTimeout(function() {
        alert.textContent = ''
        alert.classList.remove(action)
    }, 1500)
}

function getRandomNumber() {
    const newArray =[0,1,2,3,4,5]
    return Math.floor(Math.random() * newArray.length -1 )
}

