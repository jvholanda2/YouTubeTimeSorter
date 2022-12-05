import { changeFormatTimeVideos, splitSortJoinTimeVideos } from './youTubeTimeSorter.js'
    

let videoCard = document.querySelectorAll('.style-scope.ytd-playlist-video-list-renderer')
let videoTime = document.querySelectorAll('.style-scope.ytd-thumbnail span');



let test = []
let test2 = []

let unprocessedArrayTimeVideos = []

function getTimeVideos(arrayTagTimeVideos, arrayTimeVideos) {
    arrayTagTimeVideos.forEach(time => {
        let time2 = null
        time2 = time.innerText
        arrayTimeVideos.push(time2)
    })
}


function scrollToBottom () {
    window.scrollTo(0, document.body.scrollHeight);
}

//função para chamar o scroll, até quando o vetor videoCard, tiver a quantidade de elementos igual aos videos salvos

scrollToBottom()
console.log(videoCard)
getTimeVideos(videoTime, test)
console.log(test)
changeFormatTimeVideos(test, test2)
console.log(test2)

let arrayTimeVideosSorted = splitSortJoinTimeVideos(test2)
console.log(arrayTimeVideosSorted)




arrayTimeVideosSorted.forEach((card)=>{
    var print1 = Array.from(videoCard).filter(itemCard => {
        let formated = card.replaceAll(".",":")
        return itemCard.innerText == formated
    } )
    

})

// let arrayEmpty = []
// console.log(arrayEmpty)


let newDiv = document.createElement("div");
let currentDiv = document.getElementById("contents");
currentDiv.appendChild(newDiv)
newDiv.classList.add('fake-hidden');

videoCard.forEach((card)=>{
    newDiv.appendChild(card)
})

//console.log(videoCard)
 


// arrayTimeVideosSorted.forEach((timeVideo)=>{
//     videoCard.forEach((card)=>{
//         if (card.innerText = timeVideo) {
//             currentDiv.appendChild(card)
//         }
//     })
// })

//console.log(videoCard[1])



for(let i=0; i < arrayTimeVideosSorted.length; i++) {
    console.log(arrayTimeVideosSorted[i]+"fora")
    for(let j=0; j < videoCard.length; j++){
        console.log(arrayTimeVideosSorted[i]+"dentro")
        if( videoCard[j].innerText == arrayTimeVideosSorted[i] )
        currentDiv.append(videoCard[j])
    }
}



//criar uma div temporaria, oculta, para armazenar os cards, (o video print)





//document.body.onload = addElement;


//limpar o container atual dos cards
//baseado no "print", dar um appendChild ou apendeNode no container, 
//arrayTimeVideosSorted já vai ta ordenado, vou percorrer o arrayTimeVideosSorted no for each, buscar o video com a duração tal, 
//e o video vai estar armazenado no print, depois vou add no content a print dentro do contents

