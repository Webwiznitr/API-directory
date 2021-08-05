window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let iconcode
    let iconurl
    


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=b63b7edcb5598e3d9b7bdfdecf2600c3
            `;

            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                const{temp} = data.main;
                temperatureDegree.textContent = data.main.temp;
                temperatureDescription.textContent = data.weather[0].description;
                locationTimezone.textContent = data.name;
                iconcode = data.weather[0].icon;
                iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                document.getElementById("wicon").src = iconurl
                console.log(document.getElementById("wicon").src)
                
                





            });
        });
    }
    

});