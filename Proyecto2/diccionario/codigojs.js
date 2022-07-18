function buscar(){
    nuevaurl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"

        fetch(nuevaurl)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let casos= data.cases
                let muertes = data.deaths
                let ultimo_ind_casos, ultimo_ind_muertes
                ultimo_ind_casos= casos[Object.keys(casos)[Object.keys(casos).length - 1]]
                ultimo_ind_muertes = muertes[Object.keys(muertes)[Object.keys(muertes).length - 1]]
                console.log(ultimo_ind_casos, ultimo_ind_muertes)

                //console.log(ultimo_ind_muertes)
                /*
                for(var c in casos) {     
                  document.write(casos[c],"\n")}*/
        });

        let paisVac, indice, nombre
        fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1")
        .then(response => response.json())
            .then(data => {
                console.log("Holiiii")
                let totalVac = 0;
                let vacunas=[]
                let paises = []
                
                for(var i=0 ; i<data.length ; i++){
                    indice = i
                    nombre = data[i].country
                    totalVac += Object.values(data[i].timeline)[0]
                    

                    let plantilla = `<option value="${i}">${nombre}</options>`

                    document.querySelector('div.input-group > select').innerHTML += plantilla
                }
            });
    /*
    let getTextArea = document.getElementById("texto");
    let contenido1 = getTextArea.value;
    
    
    let arreglo = contenido1.split(" ");
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    let textoph, link, audio1, antonimo, sinonimo;

    for (let x in arreglo){
        let palabra = arreglo[x]
        console.log(typeof(palabra))
        nuevaurl = url.concat(palabra)

        fetch(nuevaurl)
            .then(response => response.json())
            .then(data => {
                textoph = data[0].phonetic
                audio1 = data[0].phonetics[0].audio
                link = data[0].sourceUrls[0]
                sinonimo = data[0].meanings[0].synonyms
                antonimo = data[0].meanings[0].antonyms
                console.log(data[0])


            let plantilla = `<div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><a href="-phonetics- > -sourceUrl-" target="_blank">${palabra}</a></h5>
                    <audio controls>
                      <source src=${audio1} type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                    <p><a href="${link}">${link}</a></p>
                    <h6 class="card-subtitle mb-2 text-muted">-phonetics- > ${textoph}-</h6>
                    <p class="card-text text-primary">-synonyms-</p>
                    <p>${sinonimo}</p>
                    <p class="card-text text-danger">-antonyms-</p>
                    <p>${antonimo}</p>
                </div>
            </div>
        </div>`

        document.querySelector('#respuesta').innerHTML += plantilla
    })
}
*/
}

let cargarDatos = () => {
    let paisVac
    fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1")
    .then(response => response.text())
        .then(data => {
            
        });
}