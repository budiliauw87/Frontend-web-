/**
 * ---------------------------------
 * Simple function for bookshelf    |
 * ---------------------------------
 * Created by Budiliauw87           |
 * Email budiliauw87@gmail.com      |
 * Final submission dicoding :)     |
 * ---------------------------------
 */
(() => {

    //list book
    let listBooks = [];
    let queryKeyword = '';
    
    //function show list books 
    function showListBook() {
       
        //show list books
        const listCompleted = document.querySelector("#completeBookshelfList"),
            listUnCompleted = document.querySelector("#incompleteBookshelfList");
        listCompleted.innerHTML = "";
        listUnCompleted.innerHTML = "";
        let tempListBooks;
        if(queryKeyword!=''){
            tempListBooks = listBooks.filter(book => book.title.toLowerCase().includes(queryKeyword.toLowerCase()) );
        }else{
            tempListBooks = listBooks;
        }

        for (book of tempListBooks) {
            if (book.isComplete) {
                listCompleted.appendChild(createHtmlArticle(book));
            } else {
                listUnCompleted.appendChild(createHtmlArticle(book));
            }

        }
    }

    /**
     * Create Html Article
     * @returns html :
    <article class="book_item">
        <h3>Book Title</h3>
        <p>Penulis: John Doe</p>
        <p>Tahun: 2002</p>
        <div class="action">
            <button class="green">Selesai dibaca</button>
            <button class="red">Hapus buku</button>
        </div>
    </article>
     */
    function createHtmlArticle(book) {
        const textToogleButton = book.isComplete ? 'Belum selesai di Baca' : 'Selesai dibaca',
            textDeleteButton = 'Hapus buku',
            articleEl = document.createElement("article"),
            headingEl = document.createElement("h3"),
            authorEl = document.createElement("p"),
            yearEl = document.createElement("p"),
            actionEl = document.createElement("div"),
            buttonToggle = document.createElement("button"),
            buttonDelete = document.createElement("button");
        buttonToggle.id = book.id;
        buttonDelete.id = book.id;

        articleEl.classList.add("book_item");
        headingEl.innerText = book.title;
        authorEl.innerText = "Penulis : " + book.author;
        yearEl.innerText = "Tahun : " + book.year;
        actionEl.classList.add("action");

        buttonToggle.classList.add("green");
        buttonDelete.classList.add("red");
        buttonToggle.innerText = textToogleButton;
        buttonDelete.innerText = textDeleteButton;

        // append all element html
        actionEl.appendChild(buttonToggle);
        actionEl.appendChild(buttonDelete);

        articleEl.appendChild(headingEl);
        articleEl.appendChild(authorEl);
        articleEl.appendChild(yearEl);
        articleEl.appendChild(actionEl);

        //add listener to button 
        buttonDelete.addEventListener('click', deleteBook);
        buttonToggle.addEventListener('click', updateBook);

        return articleEl;
    }


    //function added book
    function addBook(e) {
        e.preventDefault();
        let bookTitle = document.querySelector("#inputBookTitle").value,
            bookAuthor = document.querySelector("#inputBookAuthor").value,
            bookYear = document.querySelector("#inputBookYear").value,
            isCompleted = document.querySelector("#inputBookIsComplete").checked;
        //create object book
        const objBook = {
            id: +new Date,
            title: bookTitle,
            author: bookAuthor,
            year: bookYear,
            isComplete: isCompleted
        }

        //push to array
        listBooks.push(objBook);
        document.dispatchEvent(new Event("listChange"))
    }

    //function delete book
    function deleteBook(el) {
        const id = el.target.id;
        const indexBookList = listBooks.findIndex(book => book.id == id);
        listBooks.splice(indexBookList, 1);
        document.dispatchEvent(new Event("listChange"))
    }

    //function uppdate book
    function updateBook(el) {
        const id = el.target.id;
        const indexBookList = listBooks.findIndex(book => book.id == id);
        const statusCompleted = listBooks[indexBookList].isComplete !== true;
        listBooks[indexBookList] =  {...listBooks[indexBookList], isComplete : statusCompleted};
        //console.log("update working :" + indexBookList);
        document.dispatchEvent(new Event("listChange"))
    }

    //even function list changed 
    function listChanged(){
        console.log("book changed");
        //save to localstorage
        localStorage.setItem("books", JSON.stringify(listBooks));
        showListBook()
    }

    //function search book
    function searchBook(e){
        e.preventDefault();
        queryKeyword = document.querySelector("#searchBookTitle").value;
        showListBook();
    }


    window.addEventListener("load", (() => {
        // add listener functions event
        document.querySelector("#inputBook").addEventListener("submit", addBook);
        document.querySelector("#searchBook").addEventListener("submit", searchBook);
        document.addEventListener("listChange", listChanged);

        listBooks = JSON.parse(localStorage.getItem("books")) || [];
        showListBook();
    }))


})();