// variable
let $ = document,
    url = 'customer.json';
    urls = 'customers.json';
$.getElementById('button1').addEventListener('click',loadCustomer);
$.getElementById('button2').addEventListener('click',loadCustomers);


function loadCustomer(){
    const xhr =  new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload= function(){
        if(this.status === 200){
            // console.log(this.responseText);
            const user=  JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID:${user.id}</li>
                    <li>Name:${user.name}</li>
                    <li>Company:${user.company}</li>
                    <li>Phone:${user.phone}</li>
                </ul>
            `

            $.getElementById('customer').innerHTML = output; 
        }
    };

    xhr.send()
}

function loadCustomers(){
    const xhr =  new XMLHttpRequest();
    xhr.open('GET',urls,true);
    xhr.onload= function(){
        if(this.status === 200){
            // console.log(this.responseText);
            const users=  JSON.parse(this.responseText);
            // console.log(users);
            
            let output = '';
            users.forEach(user => {
                    output += `
                    <ul>
                        <li>ID:${user.id}</li>
                        <li>Name:${user.name}</li>
                        <li>Company:${user.company}</li>
                        <li>Phone:${user.phone}</li>
                    </ul>
                `; 

                return output;
            });

            $.getElementById('customers').innerHTML = output; 
        }
    };

    xhr.send()
}