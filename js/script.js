document.querySelector("#BUSCAR").addEventListener('click', pegarDados);
document.querySelector("#BUSCAR").addEventListener('click', resetarP);
let nomeP = "";

function resetarP(event){
    nomeP = "";
}
function pegarDados(event) {
    event.preventDefault();
    const infoDiv = document.getElementById('info');
    
    let piloto = document.querySelector('#PILOTO').value;
    let url = `https://api.openf1.org/v1/drivers?driver_number=${piloto}&session_key=9158`;
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (Array.isArray(dados) && dados.length > 0) {
                let pilotoDados = dados[0];
                
                let showingAlert = false;
                const title = document.title;
                nomeP = pilotoDados.full_name;
                
                const changeTitle = setInterval(() => {
                    document.title = showingAlert ? title : nomeP;

                    

                    showingAlert = !showingAlert;
                }, 1200);
                

                document.title = pilotoDados.full_name;
                document.querySelector('.numeroPiloto').textContent = pilotoDados.driver_number;
                document.querySelector('.nome').textContent = pilotoDados.full_name; 
                document.querySelector('.equipe').textContent = pilotoDados.team_name;
                document.querySelector('.sigla').textContent = pilotoDados.name_acronym;
                infoDiv.classList.remove('invisivel');
                if (pilotoDados.full_name == 'Liam LAWSON'){
                    document.querySelector('.imagem').src = 'https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiJmMW1hbmFnZXIvMjAyMi9kcml2ZXJzL2hlYWRzaG90cy9mMS9sYXcucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MDB9fX0=';
                }else{
                    document.querySelector('.imagem').src = pilotoDados.headshot_url;
                }
                switch(pilotoDados.country_code){
                    case 'NED':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/nl.png';
                        document.querySelector('.pais').textContent = 'HOLANDA';
                        break;
                    case 'USA':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/us.png';
                        document.querySelector('.pais').textContent = 'ESTADOS UNIDOS';
                        break;
                    case 'GBR':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/gb.png';
                        document.querySelector('.pais').textContent = 'REINO UNIDO';
                        break;
                    case 'FRA':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/fr.png';
                        document.querySelector('.pais').textContent = 'FRANÇA';
                        break;
                    case 'MEX':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/mx.png';
                        document.querySelector('.pais').textContent = 'MÉXICO';
                        break;
                    case 'ESP':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/es.png';
                        document.querySelector('.pais').textContent = 'ESPANHA';
                        break;
                    case 'MON':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/mc.png';
                        document.querySelector('.pais').textContent = 'MÔNACO';
                        break;
                    case 'CAN':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/ca.png';
                        document.querySelector('.pais').textContent = 'CANADÁ';
                        break;
                    case 'DEN':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/dk.png';
                        document.querySelector('.pais').textContent = 'DINAMARCA';
                        break;
                    case 'JPN':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/jp.png';
                        document.querySelector('.pais').textContent = 'JAPÃO';
                        break;
                    case 'THA':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/th.png';
                        document.querySelector('.pais').textContent = 'THAILÂNDIA';
                        break;
                    case 'CHN':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/cn.png';
                        document.querySelector('.pais').textContent = 'CHINA';
                        break;
                    case 'GER':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/de.png';
                        document.querySelector('.pais').textContent = 'ALEMANHA';
                        break;
                    case 'NZL':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/nz.png';
                        document.querySelector('.pais').textContent = 'NOVA ZELÂNDIA';
                        break;
                    case 'FIN':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/fi.png';
                        document.querySelector('.pais').textContent = 'FINLÂNDIA';
                        break;
                    case 'AUS':
                        document.querySelector('.bandeira').src = 'https://flagcdn.com/h60/au.png';
                        document.querySelector('.pais').textContent = 'AUSTRÁLIA';
                        break;
                    default:
                        document.querySelector('.bandeira').alt = 'n achei :(';
                        document.querySelector('.pais').textContent = 'n sei :(';

                }
                switch(pilotoDados.team_name){
                    case 'Red Bull Racing':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/redBull.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/redBull.png';
                        break;
                    case 'Williams':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/williams.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/williams.png';
                        break;
                    case 'McLaren':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/mcLaren.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/mcLaren.png';
                        break;
                    case 'Alpine':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/alpine.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/alpine.png';
                        break;
                    case 'Aston Martin':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/astonMartin.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/astonMartin.png';
                        break;
                    case 'Ferrari':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/ferrari.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/ferrari.png';
                        break;
                    case 'Haas F1 Team':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/haas.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/haas.png';
                        break;
                    case 'AlphaTauri':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/rb.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/alphaTauri.png';
                        break;
                    case 'Alfa Romeo':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/sauber.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/sauber.png';
                        break;
                    case 'Mercedes':
                        document.querySelector('.equipeimg').src = '../GridCentral/img/equipes/mercedes.jpg';
                        document.querySelector('.carro').src = '../GridCentral/img/carros/mercedes.png';
                        break;
                    default:
                        document.querySelector('.equipeimg').src = 'n achei :(';
                        document.querySelector('.carro').alt = 'n achei :(';

                }
               
                    

                
            } else {
                alert('PILOTO não encontrado!');
            }
            
        })
        .catch(error => {
            console.error('Erro ao buscar o Piloto:', error);
        });
}

