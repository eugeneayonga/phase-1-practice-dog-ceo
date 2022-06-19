console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


// Challenge 1
fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.message.forEach(img => {
            const imgElement = document.createElement('img')
            imgElement.src = img
            document.body.appendChild(imgElement)
        })
    })
    .catch(error => console.log(error))


// Challenge 2
fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const breedList = document.createElement('ul')
        document.body.appendChild(breedList)
        for (let breed in data.message) {
            const breedElement = document.createElement('li')
            breedElement.innerText = breed
            breedList.appendChild(breedElement)
        }
    })
    .catch(error => console.log(error))


// Challenge 3
const breedList = document.querySelector('ul')
breedList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'cyan'
    } else {
        return false
    }
})


// Challenge 4
const dropdown = document.querySelector('select')
dropdown.addEventListener('change', (event) => {
    const selected = event.target.value
    const breeds = document.querySelectorAll('li')
    breeds.forEach(breed => {
        if (breed.innerText[0] === selected) {
            breed.style.display = 'block'
        } else {
            breed.style.display = 'none'
        }
    })
})

