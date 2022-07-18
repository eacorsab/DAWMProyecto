nuevaurl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
urlPaises = "https://raw.githubusercontent.com/M-Media-Group/country-json/master/src/countries-master.json"
urlVacunas = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1"

let a2022=[]

let pais =[]
let dosis =[]
let maximos = {}
let minimos = {}

let cargarRankings = () =>{
        var cod = document.getElementById("slct").value  
        //5 paises con mas vacunas aplicadas
        if(cod=='1'){
            fetch(urlVacunas)
            .then(response => response.json())
            .then(data => {
                let Vac
                for(let p in data){
                    Vac = Object.values(data[p].timeline)[0]
                    pais.push(data[p].country)
                    dosis.push(Vac)

                }
                
                var maxi = dosis.indexOf(Math.max.apply(null,dosis));
                maximos [pais[maxi]] = Math.max.apply(null,dosis);
                pais.splice(maxi,1)
                dosis.splice(maxi,1)

                while (Object.keys(maximos).length<5){
                    maxi = dosis.indexOf(Math.max.apply(null,dosis));
                    maximos [pais[maxi]] = Math.max.apply(null,dosis);
                    pais.splice(maxi,1)
                    dosis.splice(maxi,1)
                }   

            let  listaMaximos = Object.keys(maximos) 
            
            new Chart(document.getElementById("bubble-chart"), {
                type: 'bubble',
                data: {
                labels: "Africa",
                datasets: [
                    {
                    label: [listaMaximos[0]],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [{
                        y: maximos[listaMaximos[0]],
                        x: 1409,
                        r: 20
                    }]
                    }, {
                    label: [listaMaximos[1]],
                    backgroundColor: "rgba(60,186,159,0.2)",
                    borderColor: "rgba(60,186,159,1)",
                    data: [{
                        y: maximos[listaMaximos[1]],
                        x: 1339,
                        r: 10
                    }]
                    }, {
                    label: [listaMaximos[2]],
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderColor: "#000",
                    data: [{
                        y: maximos[listaMaximos[2]],
                        x: 599,
                        r: 15
                    }]
                    }, {
                    label: [listaMaximos[3]],
                    backgroundColor: "rgba(193,46,12,0.2)",
                    borderColor: "rgba(193,46,12,1)",
                    data: [{
                        y: maximos[listaMaximos[3]],
                        x: 209,
                        r: 15
                    }]
                    },{
                        label: [listaMaximos[4]],
                        backgroundColor: "rgba(193,46,12,0.2)",
                        borderColor: "rgba(120,46,12,1)",
                        data: [{
                        y: maximos[listaMaximos[3]],
                        x: 263,
                        r: 15
                        }]
                    }
                ]
                },
                options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }, scales: {
                    yAxes: [{ 
                    scaleLabel: {
                        display: true,
                        labelString: "Dosis aplicadas"
                    }
                    }],
                    xAxes: [{ 
                    scaleLabel: {
                        display: true,
                        labelString: "Población del país en millones"
                    }
                    }]
                }
                }

            });
     } )

        }
        
        //5 paises con MENOS dosis de vacunas aplicadas
        if(cod=='2'){
            fetch(urlVacunas)
            .then(response => response.json())
            .then(data => {
                let Vac
                for(let p in data){
                    Vac = Object.values(data[p].timeline)[0]
                    pais.push(data[p].country)
                    dosis.push(Vac)

                }
                
                var mini = dosis.indexOf(Math.min.apply(null,dosis));
                minimos [pais[mini]] = Math.min.apply(null,dosis);
                pais.splice(mini,1)
                dosis.splice(mini,1)

                while (Object.keys(minimos).length<5){
                    mini = dosis.indexOf(Math.min.apply(null,dosis));
                    minimos [pais[mini]] = Math.min.apply(null,dosis);
                    pais.splice(mini,1)
                    dosis.splice(mini,1)
                }  
            let   listaMinimos = Object.keys(minimos)
            
            new Chart(document.getElementById("bubble-chart"), {
                type: 'bubble',
                data: {
                labels: "Africa",
                datasets: [
                    {
                    label: [listaMinimos[0]],
                    backgroundColor: "rgba(255,221,50,0.2)",
                    borderColor: "rgba(255,221,50,1)",
                    data: [{
                        y: minimos[listaMinimos[0]],
                        x: 50,
                        r: 15
                    }]
                    }, {
                    label: [listaMinimos[1]],
                    backgroundColor: "rgba(60,186,159,0.2)",
                    borderColor: "rgba(60,186,159,1)",
                    data: [{
                        y: minimos[listaMinimos[1]],
                        x: 1300,
                        r: 10
                    }]
                    }, {
                    label: [listaMinimos[2]],
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderColor: "#000",
                    data: [{
                        y: minimos[listaMinimos[2]],
                        x: 1618,
                        r: 15
                    }]
                    }, {
                    label: [listaMinimos[3]],
                    backgroundColor: "rgba(193,46,12,0.2)",
                    borderColor: "rgba(193,46,12,1)",
                    data: [{
                        y: minimos[listaMinimos[3]],
                        x: 2840,
                        r: 15
                    }]
                    },{
                        label: [listaMinimos[4]],
                        backgroundColor: "rgba(193,46,12,0.2)",
                        borderColor: "rgba(120,46,12,1)",
                        data: [{
                        y: minimos[listaMinimos[3]],
                        x: 5177,
                        r: 15
                        }]
                    }
                ]
                },
                options: {
                title: {
                    display: true,
                    text: 'Predicted world population'
                }, scales: {
                    yAxes: [{ 
                    scaleLabel: {
                        display: true,
                        labelString: "Dosis aplicadas"
                    }
                    }],
                    xAxes: [{ 
                    scaleLabel: {
                        display: true,
                        labelString: "Poblacion del país"
                    }
                    }]
                }
                }

            });
     } )
        }


}


     


/*
function ShowSelected()
     {
     var cod = document.getElementById("slct").value;
     alert(cod);
     if (cod == '2'){
        console.log("Num 2 op")
        
        });
    }

    
     }
*/


fetch(nuevaurl)
    .then(response => response.json())
    .then(data => {
        let casos= data.cases
        let muertes = data.deaths
        let ultimo_ind_casos, ultimo_ind_muertes
        let a2020 = casos["12/31/20"]
        let m2020 = muertes["12/31/20"]
        let a2021 = casos["12/31/21"]
        let m2021 = muertes["12/31/21"]
        let a2022 = casos["7/12/21"]
        let m2022 = muertes["7/12/21"]
        ultimo_ind_casos= casos[Object.keys(casos)[Object.keys(casos).length - 1]]
        ultimo_ind_muertes = muertes[Object.keys(muertes)[Object.keys(muertes).length - 1]]

        let plantilla1=`<h4>${ultimo_ind_casos}</h4>`
        document.querySelector('.casoss').innerHTML += plantilla1

        let plantilla2=`<h4>${ultimo_ind_muertes}</h4>`
        document.querySelector('.deathss').innerHTML += plantilla2

        let plantillaAnio2020 = `<p class="text-dark text-sm font-weight-bold mb-0">Casos registrados: ${a2020}</p>
                                <p class="text-dark text-sm font-weight-bold mb-0">Decesos registrados: ${m2020}</p>`
        document.querySelector('.datos1').innerHTML += plantillaAnio2020

        let plantillaAnio2021 = `<p class="text-dark text-sm font-weight-bold mb-0">Casos registrados: ${a2021-a2020}</p>
                                <p class="text-dark text-sm font-weight-bold mb-0">Decesos registrados: ${m2021-m2020}</p>`
        document.querySelector('.datos2').innerHTML += plantillaAnio2021

        let plantillaAnio2022 = `<p class="text-dark text-sm font-weight-bold mb-0">Casos registrados: ${a2021-a2022}</p>
                                <p class="text-dark text-sm font-weight-bold mb-0">Decesos registrados: ${m2021-m2022}</p>`
        document.querySelector('.datos3').innerHTML += plantillaAnio2022



        //Grafico line chart

        new Chart(document.getElementById("bar-chart-grouped"), {
            type: 'bar',
            data: {
            
              labels: ["2020", "2021", "2022"],
              
              datasets: [
                {
                  label: "Casos",
                  backgroundColor: "#ffebcd",
                  data: [83.7,204.9,100.8]
                }, {
                  label: "Muertes",
                  backgroundColor: "#8e5ea2",
                  data: [1.8,3.55,1.39]
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Covid-19 en el mundo: Casos y muertes (Por millón)'
              }
            }
            
        });
})


let paisVac, indice, nombre
        fetch(urlVacunas)
        .then(response => response.json())
            .then(data => {
                let totalVac = 0;
                let vacunas=[]
                let paises = []
                
                for(var i=0 ; i<data.length ; i++){
                    indice = i
                    nombre = data[i].country
                    totalVac += Object.values(data[i].timeline)[0]
                     let plantillaSearch = `<option value="${nombre}">${nombre}</options>`

                    document.querySelector('div.input-group > select').innerHTML += plantillaSearch
                }

                let plantilla3=`<h4>${totalVac}</h4>`
                 document.querySelector('.vacss').innerHTML += plantilla3

                 
            });

            
                    

let cargarDatos = () => {
    
            const selectElement = document.querySelector('div.input-group > select')
            selectElement.addEventListener('change', (event) => {
                document.querySelector('#namep').innerHTML = ""
                document.querySelector('#dosis').innerHTML = ""
                let select = document.querySelector('div.input-group > select')
                let id1 = select.value

                fetch(urlVacunas)
                    .then(response => response.json())
                    .then(data => {
                        let nombrePais, cantVac
                        
                        for(let p in data){
                            if (id1 == data[p].country){
                                cantVac = Object.values(data[p].timeline)[0]
                                let ingresarDatos1 = `${id1}`
                                document.querySelector('#namep').innerHTML += ingresarDatos1

                                let datosVac = `${cantVac}`
                                document.querySelector('#dosis').innerHTML += datosVac
                            }
                            
                    //Object.values(data[0].timeline)
                }
                
                    })
                    
                
                fetch(urlPaises)
                    .then(response => response.json())
                    .then(data => {
                        let poblacion, continente
                        for(let d in data){
                            if (id1 == data[d].country){
                                continente = data[d].continent
                                poblacion = data[d].population

                                let ingresarDatos2 = `<p class="text-secondary font-weight-bold text-xs mt-1 mb-0" >Continente: ${continente}
                                <br>Población: ${poblacion}</p>`
                                document.querySelector('#namep').innerHTML += ingresarDatos2

                            }
                        }
                    })

                })
        }

        window.addEventListener('DOMContentLoaded', (event) => {
            cargarDatos()
        });