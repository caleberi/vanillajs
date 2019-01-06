function Person(firstName,lastName){
    this.firstName =  firstName;
    this.lastName =  lastName;

    this.getFullName =  function(){
        return `This is  ${this.firstName} ${this.lastName}`;
    }

}

Person.prototype.greeting = function(){
    return `Hello,  ${this.firstName} ${this.lastName} `;
}

function Customer(firstName,lastName,membership){
    // this call the Person object and  causes the customer object to inherit it properties
    Person.call(this,firstName,lastName);

    this.membership = membership;
}

Customer.prototype =  Object.create(Person.prototype); // create a Customer prototype from Person prototype object
Customer.prototype.constructor = Customer;

var Customer1 = new Customer('Deborah','Damola','Standard');
console.log(Customer1)

var Home =  Object.create(Person,{
    firstName:{value:'Sola',},
    lastName:{value:'Ladeda'}
})

console.log(Home)


class House{
    constructor(color,address){
        this.color = color;
        this.address = address;        
    }

    getFullAddress(){
        return `Address: ${this.address}`
    }
}

class Community extends House {
    constructor(color,address,location){
        super(color,address);
        this.location = location;
    }
}

var town =  new Community('red','hebron villa ','South');
console.log('====================================')
console.log(town)
console.log('====================================')
/*
Exception: SyntaxError: redeclaration of let House
@Scratchpad/1:1:1
*/
/*
Exception: SyntaxError: redeclaration of let House
@Scratchpad/1:1:1
*/