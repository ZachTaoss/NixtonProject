
let load = function(event){
    Nixton.style.transform = "rotate(360deg)"
}
Nixton.addEventListener("load", load)





let alertNumber = 0;
let move = function(event){
    if(alertNumber < 1){
        alert(`Why`)
        alertNumber++
    }else if(alertNumber < 2){
        alert(`Are you sure`)
        alertNumber++
    }else if(alertNumber < 3){
        alert(`I dont think you understand the imporantce of this job`)
        alertNumber++
    }else{
        alert(`You know what fine`)
        McGovernDiv.removeEventListener("mousemove",move)
    }
}
McGovernDiv.addEventListener("mousemove",move)




let clickNumber = 0;
let McGovernClick = function(event){
    if(clickNumber < 5){
        alert(`Great! Your vote has been tossed in the void try again`)
        clickNumber++

    }else if(clickNumber < 10){
        alert(`Seriously? Your still trying just vote for Nixton`)
        clickNumber++
    }else if(clickNumber < 11){
        alert(`I'm not mad, Just very disappointed`)
        clickNumber++
    }else{
        alert(`Your Voting rights has been revoked`)
        McGovernDiv.removeEventListener(`click`,McGovernClick)
        McGovernDiv.style.cursor = "not-allowed"
    }
}
McGovernDiv.addEventListener(`click`,McGovernClick)






let ejected = function(event){
    for(i=0; i<9; i++){
        let memePicture = document.createElement("img")
        memePicture.src = "../Media/AmoungUs.png"
        memePicture.className = "memePic"
        Body.appendChild(memePicture)
    }
}




let NixtonClick = 0;
NixtonDiv.addEventListener("click", ejected)
let NixtonClickE = function(event){
    if(NixtonClick < 1){
        alert(`Great choice now you can play with the star`)
        NixtonDiv.removeEventListener("click",ejected)
        NixtonClick++
    }else{
        let HCoord = event.clientX
        let VCoord = event.clientY
        star.style.left = HCoord + `px`
        star.style.top = VCoord + `px`
    }
}
NixtonDiv.addEventListener("click",NixtonClickE);




let NixtonHover = function(event){
    NixtonDiv.style.backgroundColor = "white"
    NixtonLabel.style.color = "red"
}
let NixtonNonHover = function(event){
    NixtonDiv.style.backgroundColor = "red"
    NixtonLabel.style.color = "white"
    NixtonDiv.textcontent = ""
}
NixtonDiv.addEventListener("mouseover",NixtonHover)
NixtonDiv.addEventListener("mouseleave",NixtonNonHover)





let NixtonRightClick = function(event){
    let textcontent = document.createElement("p")
    NixtonDiv.appendChild(textcontent)
    textcontent.textContent = "Is there more you need to know???"
}
NixtonDiv.addEventListener("contextmenu",NixtonRightClick)