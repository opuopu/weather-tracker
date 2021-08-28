
 const field = document.getElementById("input-field")
const city =() =>{
    const field = document.getElementById("input-field")
   fieldInt = field.value
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${field.value}&appid=eef5ff9b9b101fc3916dcf124ebee0f6`
field.value = ""


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
    div.innerHTML = ` <h3 class = "text-center fs-1 mt-5"> ${data.main.temp}</h3>
    <h5 class = "text-center mt-2">${data.name} <span class= "fs-6"> (${data.sys.country})</span> </h5>
    <P class= "text-center"> Max-temp:${data.main.temp_max}; Min-temp:${data.main.temp_min}</P>
  `
  const error = document.getElementById("error")
error.style.display = "none"
parent.appendChild(div)
 
}


    
 
























// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}