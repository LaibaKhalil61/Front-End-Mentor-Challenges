// Getting info for the requested IP using IP geolocation API
let ipAddress = "37.111.147.118";
const apiKey = "at_JypDmcANH4NXKqueWggubvk009oog";
let apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
// Creating a map
let lat = 51.505;
let long = -0.09;
var map = L.map('map').setView([lat, long], 13);
var marker = L.marker([lat, long]).addTo(map);
// Creating tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Function to get info and set values and map according to it
const GetInfo = () => {
    const inputField = document.getElementById("input");
    console.log(ipAddress);
    ipAddress = inputField.value;
    console.log(ipAddress);
    apiURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    console.log(apiURL);
    // Making GET request using Fetch API
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            else {
                return response.json();
            }
        }).then(data => {
            console.log(data);
            const ip = document.getElementById("ip");
            ip.innerText = data.ip;
            const isp = document.getElementById("isp");
            if(data.isp.length>0)
            isp.innerText = data.isp;
            else
            isp.innerText = "Unknown";
            const location = document.getElementById("loc");
            location.innerText = data.location.city + "," + data.location.country;
            const time = document.getElementById("time");
            if( data.location.timezone.length>0)
            time.innerText = "UTC" + data.location.timezone;
            else
            time.innerText = "UnKnown"
            // Setting graph coordinates
            lat = data.location.lat;
            long = data.location.lng;
            map.setView([lat, long], 13);
            marker.setLatLng([lat,long]);
        }).catch(error=>{
            console.log("Unable to complete request",error)
            document.querySelector(".error-msg").classList.add("active");
        })
        document.querySelector(".error-msg").classList.remove("active");
}

