// variables
let $ = document;

class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author; 
        this.isbn =  isbn;

    }
}

class UI{
    addBookToList(book){
        const list  =  $.getElementById('book-list');
        // Create tr element
        const row = $.createElement('tr');
        // insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
    
        // append to the list
        list.appendChild(row);
    }
    showAlert(message,className){
        // Create div
        const div =  $.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // add text
        div.appendChild($.createTextNode(message));
        // get Parent 
        const container =  $.querySelector('.container');
        const form =  $.querySelector('#book-form');
        container.insertBefore(div,form);
        // setTimeout
        setTimeout(function(){
            $.querySelector('.alert').remove();
        },1000)
    }
    deleteBook(target){
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        $.getElementById('title').value = '';
        $.getElementById('author').value = '';
        $.getElementById('isbn').value = '';
    }
}


// Local Storage Class
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') == null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){

        const books = Store.getBooks();

        books.forEach(function(){
            const ui = new UI();

            // Add book to UI
            ui.addBookToList(book);


        })
        
    }

    static addBook(book){
        const books =  Store.getBooks();
        
        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));

    }

    static removeBook(isbn){
        const books =  Store.getBooks();
        books.forEach(function(){
            if(book.isbn === isbn){
                books.splice(index,1)
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }


}

// dom-load event
$.addEventListener('DOMContentLoaded',Store.displayBooks())

// event listeners
$.getElementById('book-form').addEventListener('submit',function(e){
    const title =  $.getElementById('title').value,
          author =  $.getElementById('author').value,
          isbn = $.getElementById('isbn').value;
    
    // create a book instance
    const book =  new Book(title,author,isbn);
    // create UI instance
    const ui =  new UI();
    // validate 
    if(title === ''||author === '' || isbn === ''){
        // error alert
        ui.showAlert('Please fill in all fields','error')
    }else{
        // success alert
        ui.showAlert('Book was added ','success')
        // add book to list
        ui.addBookToList(book);

        // add to localstorage
        Store.addBook(book);

        // clear UI fields
        ui.clearFields();

    }
    
    
    e.preventDefault()
})

// event listener for delete
$.getElementById('book-list').addEventListener('click',function(e){
    // Instantiate UI
    const ui =  new UI();

    ui.deleteBook(e.target);

    // delete book
    Store.removeBook(e.target.parentElement.previousElementSibling)

    // Show alert
    ui.showAlert('Book Removed','success')

    e.preventDefault()
})