const mainContainer = document.getElementById('main-section-container')
console.log(mainContainer)

function dataConnection() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.json')

    xhr.onload = function () {
        if (this.status == 200) {
            const cards = JSON.parse(this.responseText)
            console.log(cards)
            console.log(cards.card)
            const card = cards.card
            card.forEach(element => {
                // console.log(element)
                createCard(element)
            })
        }
    }
    xhr.send()
}


function createCard(element) {

    const allImages = element.images

    const card = document.createElement('div')
    card.classList.add('main-card')

    const slideShowContainer = document.createElement('div')
    slideShowContainer.classList.add('slide-show')

    const slideShow = document.createElement('div')
    slideShow.classList.add('images')

    const rightBtn = document.createElement('button')
    rightBtn.classList.add('rightbtn')
    rightBtn.innerText = '>'

    const leftBtn = document.createElement('button')
    leftBtn.classList.add('leftbtn')
    leftBtn.innerText = '<'

    let index = 0

    window.addEventListener('resize', () => {
        index = 0
        slideShow.style.transform = `translateX(${-index * slideShow.offsetWidth}px)`

    })

    leftBtn.addEventListener('click', () => {
        index--
        if (index > 0) {
            slideShow.style.transform = `translateX(${-index * slideShow.offsetWidth}px)`
        } else {
            index = 0
            slideShow.style.transform = `translateX(${-index * slideShow.offsetWidth}px)`
        }
        // console.log(index)
    })

    rightBtn.addEventListener('click', () => {
        index++
        if (index < allImages.length) {

            slideShow.style.transform = `translateX(${-index * slideShow.offsetWidth}px)`
        } else {
            index = allImages.length - 1
        }
        // console.log(index)
    })

    slideShowContainer.addEventListener('mouseenter', () => {
        // if (index === 0) {
        leftBtn.style.display = 'block'
        rightBtn.style.display = 'block'
        // } 
        // leftBtn.style.display = 'block'

    })
    slideShowContainer.addEventListener('mouseleave', () => {
        leftBtn.style.display = 'none'
        rightBtn.style.display = 'none'
    })


    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.innerHTML =
        `
        <i class="fa fa-heart-o"></i>
    `

    const cardDetails = document.createElement('div')
    cardDetails.classList.add('main-card-elements')
    cardDetails.innerHTML = `
    <div class="name-and-rating">
        <h3>${element.name}</h3>
        <p><i class="fa fa-star"></i>&nbsp;${element.rating}</p>
    </div>
    <div class="other-details">
        <p>${element.address} </p>
        <p>${element.date}</p>
        <div class="amount">
            <h3>&#8377;${element.price}</h3>
            <span>&nbsp;${element.day}
        </div>
    </div>
    `

    card.appendChild(slideShowContainer)
    slideShowContainer.append(heart)
    slideShowContainer.appendChild(leftBtn)
    slideShowContainer.appendChild(rightBtn)
    slideShowContainer.appendChild(slideShow)
    allImages.forEach(images => {
        const img = document.createElement('img')
        img.setAttribute('src', images)
        slideShow.appendChild(img)
    })

    slideShowContainer.appendChild(cardDetails)

    mainContainer.appendChild(card)

}


dataConnection()