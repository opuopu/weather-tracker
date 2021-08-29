
 const field = document.getElementById("input-field")
const city =() =>{
    const field = document.getElementById("input-field")
   fieldInt = field.value
   field.value = ""
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${field.value}&appid=eef5ff9b9b101fc3916dcf124ebee0f6`



  fetch(url)
  .then( res => res.json())
  .then(data =>  loadWeather(data))
  if(fieldInt == 0){
    alert("error")
  }
}

const loadWeather = (data) =>{
   if(data.cod == "404"){
    const error = document.getElementById("error")
     error.innerText ="Please enter valid city name"
     
   }
  
   console.log(data);
   const parent = document.getElementById('parent')
   parent.innerHTML = ""
  
    const div  = document.createElement("div")
     const temp = data.main.temp
     const cel = temp-273
     const celcius = cel.toFixed(2)
    
    div.innerHTML = ` <h3 class = "text-center fs-2 mt-5"> ${celcius} <span class = "fs-1">C</span></h3>
    <h5 class = "text-center mt-2">${data.name} <span class= "fs-6"> (${data.sys.country})</span> </h5>
    <P class= "text-center">${data.weather[0].description}</P>
  `
  const error = document.getElementById("error")
error.style.display = "none"
parent.appendChild(div)
 
}


    
 
























// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}