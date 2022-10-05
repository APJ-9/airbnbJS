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
dataConnection()

function createCard(element) {
    console.log(element)
    const card = document.createElement('div')
    card.classList.add('main-card')
    card.innerHTML =
        `
        <div class="slide-show">
            <div class="image" id="images">
                <img src="${element.img1}">
                <img src="${element.img2}">
                <img src="${element.img3}">
                <img src="${element.img4}">
                <img src="${element.img5}">
                <img src="${element.img6}">
                <img src="${element.img7}">
                <img src="${element.img8}">
                <img src="${element.img9}">
                <img src="${element.img10}">
            </div>
            <div class="btn-containers">
                <button id="left" class="btn"> < </button>
                <button id="right" class="btn"> > </button>
            </div>
            <div class="heart">
                <i class="fa fa-heart-o"></i>
            </div>
        </div>
        <div class="main-card-elements">
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
        </div>
    `
    mainContainer.appendChild(card)
}