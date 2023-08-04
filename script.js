	class Parent{
    constructor(a){
        // this.a=name,
        this.name=a    
    }
}
// let trainee=new parent("guna","fed")
// console.log(trainee)
	
	class Child extends Parent{
    constructor(batch,b){
        super(batch)

        this.batch=b
            
    }
}
let trainee1=new Child("guna","fed-12")
console.log(trainee1)



//  {
//     class Details_one{
//         constructor(value){
//             this.a=value
//             //object key name = a
//             //object value = value
//         }
//         send(){
//             return "Hello am " + this.a
//         }
//     }

 
//     class Details_two extends Details_one{
//         constructor(value,b){
//             super(value)
//             this.role=b
//         }
//         show(){
//             return this.send() + " and am a " + this.role
//         }
//     }

//     let save=new Details_two("krishna","Front end developer")

//     console.log(save)

    
//     console.log(save.show())
// }

		// var person1={
//                 name:"es6",
//                 a:3,
//                 b:3,
//                 add:function (){
//                  return this.a+this.b
//              }

//              }
//      let d=person1.add();
// console.log(d)

// {
// 	var person={
// 		name:"es6",
// 		a:7,
// 		b:-2
// 	}
	
// 		var person2={
// 			add:function(c){
// 				return this.a+this.b+c
// 			}
// 		}
// 	let a=person2.add.call(person,5);	
// 	console.log(a)
// 	let b=person2.add.apply(person,[2]);	
// 	console.log(b)
// 	let c=person2.add.bind(person,9);	
// 	console.log(c())
// }

	// class use panni new object create

