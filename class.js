class Human{
    numberofeyes = 2
    hair = 'black'
    gender = 'male'

    // static property of Class Human
    static numberoflegs = 2

    cry(){
        console.log('I am crying')
    }

    displayself(){
        console.log(this)
    }

    displayhair(){
        console.log(this.hair)
        this.displayself()
    }

    static accessstatic(){
        console.log(Human.numberoflegs)
    }
}
const human =  new Human()

// updating our class property
human.hair = 'Pink'

// display instant property of the class
console.log(human)

// Display Human Class
console.log(Human)

console.log(Human.numberoflegs)

// human.cry()
human.displayself()

// access instance method within class with line 16
human.displayhair()

// access static  properties of class
Human.accessstatic()