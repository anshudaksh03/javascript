// single tern object 
//const inderUser = new object() // value empty hogi

const tinderUser = {}
tinderUser.id = "123asd"
tinderUser.name = "Anshu"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularuser = {
email: "anshu@gmail.com",
fullname: {
    userfullname: {
        firstname: "Anshu",
        lstname: "kumar"
    }
}
}

//console.log(regularuser.fullname.userfullname) // out { firstname: 'Anshu', lstname: 'kumar' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// three way to print this obj

//const obj3 = {obj1 , obj2}// out { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({}, obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1,...obj2}// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // sprit type
//console.log(obj3) 


const user = [
    {
        id:1,
        email: "anshu936876@gmail.com"
    },
    {
        id:1,
        email: "anshu936876@gmail.com"
    },
    {
        id:1,
        email: "anshu936876@gmail.com"
    },
    {
        id:1,
        email: "anshu936876@gmail.com"
    }
]

user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // ab yes array mai aye ga [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // yea rahi value //[ '123asd', 'Anshu', false ]
// console.log(Object.entries(tinderUser)) // arrays ka andar array - [ [ 'id', '123asd' ], [ 'name', 'Anshu' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // yea batat hai hai ke yea property hamara hai ya nahi  hogi ti true otherwise false out True
// console.log(tinderUser.hasOwnProperty('IsLogged'))// False


                     // object destruchring in js 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "Anshu"
}
//course.courseinstructor // depend on you kro ya nahi yea
//const {courseinstructor} = course

//destructure method 

const {courseinstructor:instructor} = course // agar name bada lag raha hai to change kr do like iss courseinstructor sa iss mai instructor
//console.log(courseinstructor)
console.log(instructor)


//api type
// {"tinderUseid:"= "123asd"
// "tinderUsername:" = "Anshu"
// "tinderUserisLoggedIn:" = false}

[
    {},
    {},
    {}
]


//  json formator for api - https://jsonformatter.org/

//famous api - https://randomuser.me/api