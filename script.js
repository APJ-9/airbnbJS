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
    rightBtn.classList.add('btn')
    rightBtn.innerText = '>'

    const leftBtn = document.createElement('button')
    leftBtn.classList.add('btn')
    leftBtn.innerText = '<'


    rightBtn.addEventListener('click', () => {
        console.log(element.images)
    })

    leftBtn.addEventListener('click', () => {
        console.log(element.name)
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
        div>
    div>
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