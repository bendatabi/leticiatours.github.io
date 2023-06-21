function validarFormulario() {
  var nombreInput = document.getElementsByName("name")[0];
  var nombre = nombreInput.value;

  var telefonoInput = document.getElementsByName("phone")[0];
  var telefono = telefonoInput.value;

  var regexNombre = /^[A-Za-z\s]+$/;
  var regexTelefono = /^\d+$/;

  if (!regexNombre.test(nombre)) {
    alert("Por favor, ingresa un nombre válido sin números.");
    nombreInput.focus();
    return false;
  }

  if (!regexTelefono.test(telefono)) {
    alert("Por favor, ingresa solo números en el campo de teléfono.");
    telefonoInput.focus();
    return false;
  }

  return true;
}







let temperaturaValor = document.getElementById("temperatura-valor")
let temperaturaDescripcion = document.getElementById("temperatura-descripcion")
let ubicacion = document.getElementById("ubicacion")
let iconoAnimado = document.getElementById("icono-animado")
let humedad = document.getElementById("humedad")

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Leticia,co&lang=es&APPID=71d60b46ef1b4e4b2d233f3449c2218b';

 

fetch(url)
    .then( response => {return response.json()})
    .then( data =>{
        console.log(data.main.temp)
        let temp = Math.round(data.main.temp) - '273'
        temperaturaValor.textContent = `${temp} ºC`
        console.log(data.weather[0].description)

        let desc = data.weather[0].description
        temperaturaDescripcion.textContent = desc.toUpperCase()

        ubicacion.textContent = data.name

        humedad.textContent = `${data.main.humidity} %`

        //console.log(data.weather[0].icon)
        //    let iconCode = data.weather[0].icon
        //    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`
        //    console.log(urlIcon)
        
        //para iconos dinámicos
        console.log(data.weather[0].main)
        switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconoAnimado.src='animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconoAnimado.src='animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Rain':
              iconoAnimado.src='animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconoAnimado.src='animated/snowy-6.svg'
                console.log('NIEVE');
              break;                        
            case 'Clear':
                iconoAnimado.src='animated/day.svg'
                console.log('LIMPIO');
              break;
            case 'Atmosphere':
              iconoAnimado.src='animated/weather.svg'
                console.log('ATMOSFERA');
                break;  
            case 'Clouds':
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('NUBES');
                break;  
            default:
              iconoAnimado.src='animated/cloudy-day-1.svg'
              console.log('por defecto');
          }

    })
    .catch( error =>{
        console.log(error)
    })



    window.addEventListener("scroll", function() {
      var backToTopBtn = document.getElementById("backToTopBtn");
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    
    document.getElementById("backToTopBtn").addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    