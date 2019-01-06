const http = new EasyHttp();
// get Users
// http.get(`data.json`)
//   .then(data=> console.log(data))
//   .catch(err=> console.log(err))


// data
const data = {
  name:'John Doe',
  username:'johndoe',
  email:'jdoe@gmail.com'
}
// post User

http.get(`data.json`,data)
  .then(data=> console.log(data))
  .catch(err=> console.log(err))

// update/put user
http.get(`data.json`,data)
  .then(data=> console.log(data))
  .catch(err=> console.log(err))


// delete user
http.get(`data.json`)
  .then(data=> console.log(data))
  .catch(err=> console.log(err))