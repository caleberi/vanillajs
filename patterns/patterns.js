// revealing module pattern

// (function(){
//     // declear private vars and functions
//     return {
//         // declear public var and functions 
//     }
// })()


const UICtrl = (function(){
    let text = ' Hello world ';
    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    // public
    return{
        callChangeText:function(){
            changeText();
            console.log(text);
        }
    }
})()


// revealing module pattern
const ItemCtrl = (function() {
    // body
    let data = [];
    
    function add(item){
        data.push(item);
        console.log('item added ...');
        console.log(data)
    }
    function get(id){
        return data.find(item=>{
            return item.id === id;
        })
    }

    return {
        add:add,
        get:get
    }
})();


// ItemCtrl.add({id:1,name:'John'});
// ItemCtrl.add({id:2,name:'Mark'});
// console.log(ItemCtrl.get(1));
// console.log(ItemCtrl.get(2));

// UICtrl.callChangeText()



/**
 * Singleton pattern
 * ---- return a single object
 */


 const Singleton =(function() {
     let instance;
     function createInstance(){
         const object =  new Object({name:'brad'});
         return object;
     }

     return {
         getInstance:function(){
             if(!instance){
                 instance = createInstance();
             }
             return instance;
         }
     }
 })();


 const instanceA =  Singleton.getInstance();



 /*
 * Factory pattern
 */


 function MemberFactory(){
     this.createMember = function(name,type){
        let member;
        if (type === 'simple'){
            member =  new SimpleMembership(name);
        }else if(type ==='standard'){
            member = new StandardMembership(name);
        }else if(type === 'Super'){
            member = new SuperMembership(name);
        }

     member.type = type ;

     member.define = function(){
         console.log(`${this.name} ${this.type} : ${this.cost}`);
     }
     }

     
 }


 const SimpleMembership =  function(name){
     this.name = name;
     this.cost = '$5' 
 }


 const StardardMembership =  function(name){
    this.name = name;
    this.cost = '$5' 
}

const SuperMembership =  function(name){
    this.name = name;
    this.cost = '$5' 
}


const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe','simple'))




members.forEach(function(member){
    member.define();
})



/**
 * Observer pattern
 */


function EventObservers(){
    this.observers =  [];

}

EventObservers.prototype = {
    subscribe:function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn}.name`);
    },
    unsubscribe: function (fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
            console.log(`You are now unsubscribed to ${fn.name}`)
        })
    }
    ,
    fire:function(){
        this.observers.forEach((item)=>{
            item.call()
        })
    }

}


const click  =  new  EventObservers();

document.querySelector('.sub-ms').addEventListener('click',function(){click.subscribe(getCurMilliseconds)})
const getCurMilliseconds =  function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}

document.querySelector('.unsub-ms').addEventListener('click',function(){click.unsubscribe(getCurMilliseconds)})

document.querySelector('.fire').addEventListener('click',function(){
    click.fire(); 
})



/**
 * Mediator pattern
 */


 const User = function(){
     this.name =  name;
     this.chatroom = null;
 }


 User.prototype = {
     send:function(message,to){
        this.chatroom.send(message,this,to);
     },
     recieve:function(message,from){
        console.log(`${from.name} to ${this.name} : ${message}`);
     }
 }

 const Chatroom =  function(){
     let users = {};

     return {
         register: function(user){
            users[user.name] = user;
            user.chatroom =  this;
         },
         send:function(message,from,to){
             if(to){
                 to.recieve(message,from)
             }
             else{
                 for(key in users){
                     if(users[key]!==from){
                         users[key].recieve(message,from);
                     }
                 }
             }
         }
     }
 }

 const brad = new User('brad');
 const jeff = new User('jeff');
 const sarah = new User('sarah');

 const chatroom =  new Chatroom();

 chatroom.register(jeff);
 chatroom.register(sarah);
 chatroom.register(brad);