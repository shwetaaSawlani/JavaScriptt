class user{
    #password;
    constructor(password){
        this.password = password;
    }
   

    set password(value) {
    if (typeof value !== "string") {
      throw new Error("Password must be a string.");
    }
    if (value.length < 8) {
      throw new Error("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(value)) {
      throw new Error("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(value)) {
      throw new Error("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(value)) {
      throw new Error("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*]/.test(value)) {
      throw new Error("Password must contain at least one special character (!@#$%^&*).");
    }

    this.#password = value;
  }

  verifyPassword(input) {
    return this.#password === input;
  }

}

const user1 = new user("Password1!");
console.log(user1.verifyPassword("Wrong1!"));    
console.log(user1.verifyPassword("Password1!"));  
