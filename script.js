function toggleMode(){
    const html= document.documentElement
    html.classList.toggle("light") //troca das classes

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains("light")){
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src" , "./assets/avatar-light.png")

    //se tiver ligth mode, adicionar a imagem light
    }else {
        //se tiver sem ligth mode, mantes a imagem normal
        img.setAttribute("src" , "./assets/avatar.png")


    }
}

    




    //outra opção de trocas as classes
    //if(html.classList.contains("light")){
    //    html.classList.remove("light")

    //}else {
    //    html.classList.add("light")
   // }



