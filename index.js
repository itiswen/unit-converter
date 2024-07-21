/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthConverter = document.getElementById("length-converter")
let volumeConverter = document.getElementById("volume-converter")
let massConverter = document.getElementById("mass-converter")
const inputNum = inputEl.textContent

convertBtn.addEventListener ("click", function generateUnit() {
    lengthConverter.textContent = 
    `${inputEl.value} meters = ${ Number(inputEl.value*3.281).toFixed(3) } feet  
    | ${inputEl.value} feet = ${ Number(inputEl.value/3.281).toFixed(3) } meters`
    
    volumeConverter.textContent = 
    `${inputEl.value} liters = ${ Number(inputEl.value*0.264).toFixed(3) } gallon  
    | ${inputEl.value} gallon = ${ Number(inputEl.value/0.264).toFixed(3) } liters`
    
    massConverter.textContent = 
    `${inputEl.value} kilograms = ${ Number(inputEl.value*2.204).toFixed(3) } pounds  
    | ${inputEl.value} pounds = ${ Number(inputEl.value/2.204).toFixed(3) } kilograms`
})