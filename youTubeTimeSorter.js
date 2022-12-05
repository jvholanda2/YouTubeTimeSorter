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

export { changeFormatTimeVideos, splitSortJoinTimeVideos }