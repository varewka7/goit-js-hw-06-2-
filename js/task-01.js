
const items = document.querySelectorAll('li.item')
console.log(`Number of categories: ${items.length}`)

items.forEach(item => {
    const title = item.querySelector('h2')
    console.log(`Category: ${title.textContent}`)

    const element = item.querySelectorAll('li')
    console.log(`Elements: ${element.length}`)
})