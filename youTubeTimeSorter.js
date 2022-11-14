//Função para tratar os tempos recebidos em números, trocando : po .
function changeFormatTimeVideos(unprocessedArrayTimeVideos, arrayProcessed){
    var time2 = []
    unprocessedArrayTimeVideos.forEach(time => {
        time2 = time.replace(/:/g,".")
        arrayProcessed.push(time2)
    })
}

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


// changeFormatTimeVideos(numberTestSort, numberTestSortProcessed); 
// // sortLenghtTimeVideos(numberTestSortProcessed);
// // console.log(numberTestSortProcessed); 

// console.log(splitSortJoinTimeVideos(numberTestSortProcessed))





//Scrollar a pagina até o final
//Pegar todos os elementos, colocar no array hora e posição
//<div id="contents">
//  <ytd-playlist-video-renderer>TAG DE CADA CARD DO VÍDEO</ytd-playlist-video-renderer>
//</div>
//ordenar via hora alterando a posição de acordo com a hora em ordenação crescente
//Alterar os elementos na ordem do novo array de posição

export { changeFormatTimeVideos, splitSortJoinTimeVideos }