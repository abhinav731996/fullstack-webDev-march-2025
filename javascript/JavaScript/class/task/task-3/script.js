// // Task-1



// const userProfile = {
//   id: 1,
//   name: "Abhinav Sharma",
//   email: "abhinav@example.com",
//   skills: ["HTML", "CSS", "JavaScript"],
//   isActive: true,

//   getUserInfo() {
//     return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Skills: ${this.skills.join(
//       ", "
//     )}, Active: ${this.isActive}`;
//   },

//   addSkill(skill) {
//     this.skills.push(skill);
//     return `${skill} added successfully.`;
//   },

//   deactivate() {
//     this.isActive = false;
//     return "User has been deactivated.";
//   }
// };

// console.log(userProfile.getUserInfo());
// console.log(userProfile.addSkill("React"));
// console.log(userProfile.deactivate());
// console.log(userProfile.getUserInfo());

// class name {
//   constructor(parameters) {
    
//   }
// }



// Task-2

class product {
  constructor(id, name, price, quantity){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice(){
    return this.price * this.quantity;
  }

  updateQuantity(qty){
    this.quantity = qty;
  }

  getProductDetails(){
    return "Id: " + this.id + ", Name: " + this.name + ", Price: " + this.price + ", Quantity: " + this.quantity;
  }
}

let item1 = new product(1, "Novel", 50, 2);

console.log(item1.getProductDetails());
console.log("Total price =" , item1.getTotalPrice());

item1.updateQuantity(5);
console.log("Updated Quantity:-");
console.log(item1.getProductDetails());
console.log("Total price =" , item1.getTotalPrice());

