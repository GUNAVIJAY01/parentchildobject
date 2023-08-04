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