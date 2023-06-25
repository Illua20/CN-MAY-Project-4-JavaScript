// var cars = [
//     'Ayla',
//     'Agya',
//     'Calya',
//     'Sigra',
//     'Innova'
// ]

// var motorbike = [
//     'Beat','Nmax', 'Vario', 'Sigra', 'CBR'
// ]

// var numbers = [
//     1,
//     2,
//     3
// ]

// console.log('Nama Mobil', cars)
// document.writeln(cars)
// console.log(numbers)

// //Concat
// var groupVehicle = motorbike.concat(cars)
// console.log(groupVehicle)

// //join
// console.log('join data cars:', cars.join('-'))

// // pop - remove last value of an array
// console.log('pop data cars', cars.pop())

// // Shift - remove first value (Index #0) of an array
// console.log('shift data cars', cars.shift())

// // Push - add a value to the last index of an array
// console.log('push data cars', cars.push('Kijang'))

// // Length - counts how many data in an array
// console.log('Banyaknya data mobil:', cars.length)

// // To return the value of an index in an array
// console.log('Data pada Index ke 2', cars[2])

// // Loop
// for(i = 0 ; i < cars.length; i += 1){
//     document.write(cars[i] +'<br>')
// }

// console.log(cars)

// var cars2 = ['BMW','Volvo','Mini'];
// var x;
// for(x of cars2){
//     document.write(x+ '<br>');
// }

// var string1 = "";
// var object1 = {
//     number1: 1,
//     number2: 2,
//     number3: 3,
// }

// for(var property1 in object1){
//     string1 += object1[property1];
// }

// document.write(string1);

// // // Perhitungan
// // var number1 = prompt('number1');
// // var number2 = prompt('number2');
// // var result = number1*number2;
// // Prompt - Memunculkan box untuk diisi
// // alert('Hasil Perkalian: '+ result)

// // Conditional Statement
// // var score=70
// // if(score>70){
// //     alert('Hasil Memuaskan')}
// //     else{
// //         alert('Belajar Lagi')
// //     }
// // var score=prompt('Score');
// // if(score>70){
// //     alert('Hasil Memuaskan')}
// //     else{
// //         alert('Belajar Lagi')
// //     }
// var rank = 45
// if((rank >=80) && (rank<=100)){
//     console.log('Sangat Memuaskan')
// }else if((rank >=50) && (rank<80)){
//     console.log('Memuaskan')
// }else if((rank >=30) && (rank<50)){
//     console.log('Cukup')
// }else{
//     console.log('Belajar Lagi')
// }

// var nilai = false
// var kehadiran = true
// var sikap = false

// var rapor = nilai || kehadiran || sikap
// console.log(rapor)

// var fruits = [
//     'Banana',
//     'Apple',
//     'Mango',
//     'Grape',
//     'Lychee',
//     'Orange'
// ]

// for(i=0 ; i < fruits.length; i += 1){
//     document.write('<div class="box">'+ fruits[i] + '</div>')
// }

// const fruitsBox = document.getElementsByClassName("box2")
// fruitsBox[0].innerHTML=fruits;

// document.getElementById("box2").innerHTML=fruits;

// // Declaration
// function logger(nama, usia){
//     console.log(nama, usia)
// }

// logger('Agus', 55)

// // Expression
// const checkage = function(lahir){
//     const year = new Date().getFullYear()
//         const result = year - lahir
//         return 'Usia Saat Ini: ' + result
// }

// const dwi = checkage(1987)
// console.log(dwi)

// //ARROW Function

// const checkage2 = (lahir) =>{
//     const year = new Date().getFullYear()
//         const result = year - lahir
//         return 'Usia Saat Ini: ' + result
// }
// console.log(checkage2(1987))

// BMI Calculator
const bmiMan = (berat, tinggi) => {
    const bmiManResult = berat/(tinggi^2)
    let resultindicator
    // console.log('Check',bmiManResult) 
    if(bmiManResult<17){
        resultindicator = 'Sangat Kurus'
    }else if(bmiManResult >=17 && bmiManResult <= 18.4){
        resultindicator = 'Kurus'
    }else if(bmiManResult >=18.5 && bmiManResult <= 25){
        resultindicator = 'Ideal'
    }else if(bmiManResult >=25.1 && bmiManResult <= 27){
        resultindicator = 'Gemuk'
    }else {resultindicator = 'Overweight'}
    return resultindicator
}
console.log(bmiMan(55,1.85))

// const now = new Date()
// const year = new Date().getFullYear()
// console.log(year)

function formvalidation(){
let input = document.forms ['myForm']['femail'].value
if(input == ""){
    alert ("Error: Email belum ada")
    return false
}
}