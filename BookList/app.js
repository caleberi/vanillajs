// variables
let $ = document;

// Book Constructor 
function Book(title,author,isbn){
    this.title =  title;
    this.author =  author;
    this.isbn =  isbn;


}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){
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

// clear Fields
UI.prototype.clearFields = function(){
    $.getElementById('title').value = '';
    $.getElementById('author').value = '';
    $.getElementById('isbn').value = '';
}

// Show Alert
UI.prototype.showAlert = function(message,className){
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

// delete book
UI.prototype.deleteBook = function(target){
    if(target.className == 'delete'){
        target.parentElement.parentElement.remove();
    }
}

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

    // Show alert
    ui.showAlert('Book Removed','success')

    e.preventDefault()
})