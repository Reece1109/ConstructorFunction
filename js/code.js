//Constructor Fucntion
function Details(firstName,surname, email) {
    this.firstName = firstName;
    this.surname = surname;
    this.email = email;
}
let person1 = new Details('Reece', 'Simon', 'reecesimon84@gmail.com');
Details.prototype.display = ()=>{
    console.log('Hello There');
    console.table (person1)
    person1.display();
}
