/* 
const square = function (x){
    return x * x
}
*/

/*
const square = (x) => {
    return x * x
}
*/

//const square = (x) => x * x

//console.log(square(3))

/*
const event = {
    name: "Birthday Party",
    printGuessList: function(){
        console.log('Guest list for ' + this.name)
    }
}
*/

// Don't have access to this
/*
const event = {
    name: "Birthday Party",
    printGuessList: () => console.log('Guest list for ' + this.name)
    
}
*/

// When you want this use Function
// When you don't want this use Arrow Function
const event = {
    name: "Birthday Party",
    guessList: ["Ben", "Ling", "Lucy"],
    printGuessList(){
        console.log('Guest list for ' + this.name)

        this.guessList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuessList();