fetch("https://api.unsplash.com/photos/random/?client_id=wRlR01L1gsK3o42WxgQkGurDZQRUYUoRwZMe8xhKbIo",{
})
.then(response => response.json())
.then(result => {
    console.log(result.urls.regular)
    document.querySelector(".img-fluid").setAttribute("src",result.urls.regular)
    })

    document.querySelector("#img-view").addEventListener("click",() => {
        window.location.reload()
       
       console.log( document.querySelector("#img-view").download = result.urls.regular)
        
      })


/* for(l = 0; i < 6; i++){
    fetch("https://api.unsplash.com/photos/random/?client_id=wRlR01L1gsK3o42WxgQkGurDZQRUYUoRwZMe8xhKbIo",{
    
}).then(response => response.json())
.then(result => {
console.log(result.urls.regular)
document.querySelector(".img-fluid" + i).setAttribute("src",result.urls.regular)
document.querySelector("#img-fluid1" + i).setAttribute("src",result.urls.regular)
document.querySelector("#img-fluid2" + i).setAttribute("src",result.urls.regular)
document.querySelector("#img-fluid3" + i).setAttribute("src",result.urls.regular)
document.querySelector("#img-fluid4" + i).setAttribute("src",result.urls.regular)
document.querySelector("#img-fluid5" + i).setAttribute("src",result.urls.regular) 
})
} */
