    let sparatResutat = []
    fetch("https://randomuser.me/api/",{
        headers:{
        }
        }).then(response => response.json())
        .then(resultat =>{
           console.log(resultat.results)
            //console.log(resultat.results[0].picture.large)
            document.querySelector("#validationCustom01").setAttribute("value",resultat.results[0].name.first)
            document.querySelector("#validationCustom02").setAttribute("value", resultat.results[0].name.last)
            document.querySelector("#validationCustomemail").setAttribute("value", resultat.results[0].email)
            document.querySelector("#validationCustom03").setAttribute("value", resultat.results[0].location.city)
            document.querySelector("#validationCustom04").setAttribute("value", resultat.results[0].location.state)
            document.querySelector("#validationCustom05").setAttribute("value", resultat.results[0].location.postcode)
            document.querySelector("#validationCustom06").setAttribute("value", resultat.results[0].phone)
            document.querySelector("#validationCustom07").setAttribute("value", resultat.results[0].location.country)


            document.querySelector("#image-profil").setAttribute("src", resultat.results[0].picture.large)
            sparatResutat.push(resultat)

        }) 
        document.querySelector("#refreshbtn").addEventListener("click", () => {
            window.location.reload()
        })
        
      /*    document.querySelector("#sendbtn").addEventListener("click", () => {
            console.log("#sendbtn")
                for(let i = 0; i<sparatResutat.length; i++){

                   // let divinfo = document.querySelector(".divinfo")
                    let ul = document.querySelector('.ul')
                    let li = document.createElement("li")
                    li.textContent = sparatResutat[i].results[0].name.first 
                    li.textContent = sparatResutat[i].results[0].name.last
                    ul.appendChild(li)
                        //console.log(divinfo.textContent = sparatResutat[i].results[0].name.first)
                    //divinfo.appendChild(span)

                }

        })  */

       

        // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
   