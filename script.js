// task 1 =>
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG (movies){
        return movies.filter(movie=> movie.rating === "PG"  )
    }


}
const movieInstance = new Movie("Casino Royale","Eon Productions","PG13")

// task 2 =>
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;

    }
    set radiusCircle(radius){
        this.radius = radius;
        
    }
    get colorCircle(){
        return this.color;

    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return`"Circle[radius=${this.radius},color=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius; //PI r2
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius
    }

}
const obj4 = new Circle(1.0,"red")
console.log(obj4.radiusCircle); //get radiouscircle
obj4.radiusCircle= 2.2;
console.log(obj4.radiusCircle); //set radiouscircle

console.log(obj4.colorCircle); //get radiouscircle
obj4.colorCircle="blue";
console.log(obj4.colorCircle); //set radiouscircle

console.log(obj4.toString);

console.log(obj4.areaCircle);

console.log(obj4.circumferenceCircle);


// task 3 => Write a "person" class to hold all the details
class Person1{ 
    constructor(name,age,gender,salary=30){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary
    }
  }
const personDetails = new Person1("devi",33,"Female",30)
console.log(`"Person details are":
${personDetails.name}
${personDetails.age}
${personDetails.gender}
${personDetails.salary}
`)


// task 4 => Write a class to calculate the Uber Price
class UberPrice{
    constructor(distance, time){
        this.distance = distance;
        this.time = time;
        this.baseFare = 70;
        this.costPerKm = 5;
        this.costPerMinute = 2;

    }
    calculate(){
        let distanceCost = this.distance * this.costPerKm;
        let timeCost = this.time * this.costPerMinute;
        let totalCost = this.baseFare + distanceCost + timeCost
        return totalCost
    }
}
const object1 = new UberPrice(2,2);
// console.log(object1.calculate());