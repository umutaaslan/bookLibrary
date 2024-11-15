const addBookButton = document.querySelector(".book-appender");
const bookAppenderModal = document.querySelector(".book-appender-modal");
const form = document.querySelector(".book-appender-form");
const title = form.elements["title"];
const author = form.elements["author"];
const page = form.elements["page"];
const isRead = form.elements["isRead"];
const itemContainer = document.querySelector(".item-container");


const library = [];

function Book(title, author, page, isRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
}

function addBookToLibrary(book){
    library.push(book);
}

addBookButton.addEventListener("click", ()=>{
    bookAppenderModal.showModal();
    console.log(library)
})

let i = 0;
form.addEventListener("submit", e=>{
    addBookToLibrary(new Book(title.value, author.value, page.value, isRead.checked));
    e.preventDefault();
    bookAppenderModal.close();

    //DOM manipulation
    let newDiv = document.createElement("div");
    let newP1 = document.createElement("div");
    let newP2 = document.createElement("button");
    let newP3 = document.createElement("button");
    newP1.classList.add("title-author-pageP");
    newP2.classList.add("isReadButton");
    newP3.classList.add("removeButton");
    newP1.innerText = `${title.value}, written by ${author.value}, ${page.value} page`;
    newP2.innerText = (isRead.checked == true) ? "Read" : "Not read yet";
    newP3.innerText = "Remove";
    itemContainer.appendChild(newDiv);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newP3);
    addListenerToRemoveButton(newP3);
    addListenerToisReadButton(newP2);
    newDiv.setAttribute("data-index", i);
    i++;
})

function addListenerToRemoveButton(button) {
    button.addEventListener("click", ()=>{
        button.parentNode.remove();
    })

}

function addListenerToisReadButton(button){
    button.addEventListener("click", ()=>{
        let bookIndex = button.parentNode.getAttribute("data-index");
        console.log(bookIndex)
        if(button.innerText == "Read") {
            library[bookIndex].isRead = false;
            button.innerText = "Not read yet";
        }
        else {
            library[bookIndex].isRead = true;
            button.innerText = "Read";
        }
        button.setAttribute("listener", true);
        console.log("yeyey")
    })
}





document.addEventListener("keydown", e => {
    if(e.code === "ArrowUp") console.log(library);
})