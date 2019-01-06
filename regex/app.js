let re;
// literal characters
re = /hello/i;

// metacharacter symbol
re = /^h/i ; // must start with
re = /d$/i ; // must end with
re = /world/; 
re =  /^Hello$/; // starts and end with
re = /h.llo/ ; // matches any ONE character
re = /h*llo/ ; // matches any  character 0 or more times
re = /gre?a?y/ ; // optional character
re =  /gre?a?y\?/i;

//Bracket - [] character sets
re = /gr[ae]y/i; // must be any of the character in the bracket
re =  /[^GF]ray/i; // match anything execpt a G or F
re =  /^[GF]ray/i; // match start with  a G or F
re =  /[A-Z]ray/; // match any uppercase
re =  /[a-z]ray/; // match any lowercase
re = /[A-Za-z]ray/i ; // matches any letter
re =  /[0-9]/; // match any digit

// braces{} --> Quantifiers
re = /Hel{2}o/i; // must occur exactly {n} amount of time
re = /Hel{2,}o/i; // must occur at least {n} amount of time

re = /Hel{2,4}o/i; // must occur at leastly n times and at most m times :{n,m} amount of time

// parenthesis () - grouping
re = /([0-9]x)l{3}/


// shorthand character classes
re = /\w/; // word character - alphanumeric or _{underscore}
re = /\w+/; // one or  more word
re = /\W/; // non-word character 
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non digit
re = /\s/; // match whitespace/tab character
re = /\S/; // match non-whitespace/tab character
re = /Hell\b/ ;  // word boundary

// Assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y


const str = '20xlll3xlll',
    result = re.exec(str);

console.log(result);

function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    }
    else{
        console.log(`${str} does  not match  ${re.source}`)
    }
}

reTest(re,str);