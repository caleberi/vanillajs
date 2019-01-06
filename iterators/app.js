// iterator 
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < names.length ? 
            {value:names[nextIndex++],done:false}:{done:true}
        }
    }
}

// create array of names
const nameArr = ['jack','jill','john'];
// init iterator and pass in the names array
const name =  nameIterator(nameArr);

console.log(name.next());
console.log(name.next());
console.log(name.next());

// generator use * to indicate a generator
function* names(){
    yield 'jack';
    yield 'jill';
    yield 'john';
}

const h =  names();
console.log(h.next());