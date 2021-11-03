class Rat {

    constructor(name) {
        this.rats = [];
        this.name = name;
    }

    unite(rat){
        if (typeof rat !== 'Rat') {
            return;
        }
        this.rats.push(rat);
    }

    getRats(){
    return this.rats;    
    } 

    toString(){
        console.log(this.name);
        if (this.rats.length !== 0) {
            this.rats.forEach(singleRat => {
                console.log('##' + singleRat.name);
            });
        }
    }
}

class Rat2 {
    rats = [];
    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name + this.rats.map(rat => `\n##${rat.name}`).join("");
    }

    unite(maybeRat) {
        if (maybeRat instanceof Rat) {
            this.rats.push(maybeRat);

        }
    }

    getRats() {
        return [...this.rats];
    }
}




