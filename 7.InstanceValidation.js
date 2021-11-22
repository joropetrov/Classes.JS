class CheckingAccount{

    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(clientId){
        const regex1 = /^[0-9]{6}$/gm;
        clientId = clientId.match(regex1) == undefined?  undefined : clientId;
        if (clientId === undefined) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = clientId;
    }

    get clientId(){
        return this._clientId;
    }

    set email(email){
        let emailPatern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;
        if(!emailPatern.test(email)){
            throw new TypeError("Invalid e-mail")
        }
          return this._email=email;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        this.#nameChecker(firstName,'First');
        this._firstName = firstName;
    }

    get firstName(){
        return this_.firstName;
    }
    
    set lastName(lastName){
        this.#nameChecker(lastName,'Last');
        this._lastName = lastName;
    }

    get lastName(){
        return this_.lastName;
    }

    #nameChecker(name, instanceName) {

        if(!(name.length >= 3 && name.length <= 20)){
            throw new TypeError(`${instanceName} name must be between 3 and 20 characters long`);
        }
        
        const regex = /^[a-zA-Z]{3,20}$/gm;
        name = name.match(regex) == undefined?  undefined : name;
       
        if (name == undefined) {
            throw new TypeError(`${instanceName} name must contain only Latin characters`);
        }
      }
    
}

let acc = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Draganov');