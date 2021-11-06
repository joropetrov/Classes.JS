class Stringer {

    constructor(innerString, innerLenght) {

        this.innerString = innerString;
        this.innerLenght = Number(innerLenght);
        this.resultStr = '...';
    }

    decrease(num) {
        this.innerLenght -= num;
        if (this.innerLenght < 0) {
            this.innerLenght = 0;
        }
    }

    increase(num) {
        this.innerLenght += num;
    }

    toString() {
        if (this.innerLenght === 0) {
            return "...";
        }
        else if (this.innerString.length > this.innerLenght) {
            this.resultStr = this.innerString.slice(0, this.innerString.length - 2) + '...';
            return this.resultStr;
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test