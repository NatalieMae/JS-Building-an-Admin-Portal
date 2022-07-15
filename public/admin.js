async function main() {

let response = await fetch('http://localhost:3001/updateBook')

let updatedBook = await response.json();
books.forEach(renderBook)
}

function renderBook(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let addQuantity = document.createElement('input')
    addQuantity.value = book.addQuantity

    let saveBtn = document.createElement.apply('button')
    saveBtn.textContent = 'Save'    

    saveBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                addQuanitity: addQuantity.value
            })
        })
    })

    li.append(addQuantity, saveBtn)

    root.append(li)
}

main();
