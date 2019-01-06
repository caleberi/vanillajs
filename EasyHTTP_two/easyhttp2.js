class EasyHttp{
  // make an http get request
  get(url){
    return new Promise(
      (resolve,reject)=>{
        fetch(url)
        .then(res=> res.json)
        .then(data=>resolve(data))
        .catch(err=> reject(err))
      }
    )
   
  }
  // make an http post request
  post(url,data){
    return new Promise(
      (resolve,reject)=>{
        fetch(url,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res=> res.json)
        .then(data=>resolve(data))
        .catch(err=> reject(err))
      }
    )
   
  }

  // make an http put request
  put(url,data){
    return new Promise(
      (resolve,reject)=>{
        fetch(url,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res=> res.json)
        .then(data=>resolve(data))
        .catch(err=> reject(err))
      }
    )
   
  }

  // make a delete request
  put(url){
    return new Promise(
      (resolve,reject)=>{
        fetch(url,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then(res=> res.json)
        .then(data=>resolve('Resource deleted'))
        .catch(err=> reject(err))
      }
    )
   
  }
}