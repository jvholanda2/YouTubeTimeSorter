//Função para tratar os tempos recebidos em números, trocando : por .
function changeFormatTimeVideos(unprocessedArrayTimeVideos, arrayProcessed){
    var time2 = []
    unprocessedArrayTimeVideos.forEach(time => {
        time2 = time.replace(/:/g,".")
        arrayProcessed.push(time2)
    })
}

//Função para tratar os tempos recebidos em números, trocando . por :
function changeToCorrectFormatTimeVideos(unprocessedArrayTimeVideos, arrayProcessed){
    var time2 = []
    unprocessedArrayTimeVideos.forEach(time => {
        time2 = time.replaceAll(".",":")
        arrayProcessed.push(time2)
    })
}

//Função para ordenar em ordem crescente 
function sortLenghtTimeVideos(arrayLenghtVideos) {
   return arrayLenghtVideos.sort(function(a,b) { return parseFloat(a) - parseFloat(b) } );
}

//Função para separar os tempos em 2 arrays, ordena-los e depois junta-los
function splitSortJoinTimeVideos(arrayLenghtVideos) {
    let arrayLenghtVideosTwo = arrayLenghtVideos.filter(time => time.length < 6)
    let arrayLenghtVideosThree = arrayLenghtVideos.filter(time => time.length > 6)

    sortLenghtTimeVideos(arrayLenghtVideosTwo)
    sortLenghtTimeVideos(arrayLenghtVideosThree)

    let arraySortedTimeVideosProv = arrayLenghtVideosTwo.concat(arrayLenghtVideosThree)
    let arraySortedTimeVideos = []
    changeToCorrectFormatTimeVideos(arraySortedTimeVideosProv, arraySortedTimeVideos)     
    return arraySortedTimeVideos
}

//Função para rolar a página até o final
function scrollToBottom () {
    window.scrollTo(0, 1000000000);
}



let numberOfVideos = document.querySelectorAll('.byline-item.style-scope.ytd-playlist-byline-renderer .style-scope.yt-formatted-string')[0].innerText
let videoCard = document.querySelectorAll('ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer')
let videoTime = document.querySelectorAll('span#text.style-scope.ytd-thumbnail-overlay-time-status-renderer');
console.log(videoCard.length)
console.log(videoTime.length)
console.log(numberOfVideos)

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

let newDiv = document.createElement("div");
let currentDiv = document.getElementById("contents");
currentDiv.appendChild(newDiv)
newDiv.classList.add('fake-hidden');



videoCard.forEach((card)=>{
    newDiv.appendChild(card)
})

let continuations = document.getElementById('continuations')
let videoCard2 = document.querySelectorAll('ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer')


for(let i=0; i < arrayTimeVideosSorted.length; i++) {
    console.log(arrayTimeVideosSorted[i]+"fora")
    for(let j=0; j < videoCard2.length; j++){
        if(videoCard2[j].innerText.indexOf(arrayTimeVideosSorted[i]) == 0){
            currentDiv.append(videoCard2[j])
        }
    }
}