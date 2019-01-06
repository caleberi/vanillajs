// user
const http =  new easyHTTP();

// get posts
// http.get|('https://jsonplaceholder.typicode.com/posts',
//     function(err,res){
//         if(err){
//             throw Error(err)
//         }else{
//             console.log(res);
//         }
//     }
// )

// create data
const data =  {
    title:'Custom Post',
    body:'This is a custom post'
}

// create post
http.post('https://jsonplaceholder.typicode.com/posts',data,function (err,post) {
    if(err){
        console.log(err);
    }else{
        console.log(post);
        
    }
})

// put/update post
http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
    if(err){
        console.log(err);
    }else{
        console.log(post); 
    }
})
// delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(post); 
    }
})