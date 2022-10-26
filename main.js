// JavaScript source code
//methods
function greeting() {
    window.alert("Good morning!")
    document.getElementById("greeting").innerHTML = "Oh incase I don't see ya"
    console.log("Good afternoon, good evening and good night")
}
function changeText() {
    let para = document.getElementById("new-para")
    if (para) {
        para.remove()
    } else {
        para = document.createElement("p")
        para.id = "new-para"
        let textNode = document.createTextNode(`with ${actor.getFullName()} as ${characters[0]}`)
        para.appendChild(textNode)
        document.getElementById("title-container").appendChild(para)
    }
}
//variables
var title = "The Truman Show"
let director = "Peter Weir"
const releaseYear = 1998

//arrays and objects
const characters = []
characters.push("Truman Burbank")
characters[0] = "Truman Burbank"
//do the same thing
const actor = {}
//like JSON, though keys dont need to be in "" and we can put in methods
actor.firstName = "Jim"
actor.lastName = "Carrey"
actor.getFullName = function () {
    return this.firstName + " " + this.lastName
}
//this, allows us to access actor as it was put in.
const actress = {
    firstName: "Laura",
    lastName: "Linney",
    getFullName() {
        return this.firstName + " " + this.lastName
    }
}
console.log(actor.getFullName())