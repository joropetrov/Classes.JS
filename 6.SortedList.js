class List {

    constructor() {
        this.nums = [];
    }

    add(num) {
        
            this.nums.push(num);
            this.nums =  this.nums.sort((a, b) => a - b);;
            
    }

    remove(index) {
        if (index >= 0 && index < this.nums.length) {
            this.nums.splice(index, 1);
            
        }
    }

    get(index) {
        if (index >= 0 && index < this.nums.length) {
            return this.nums[index];
        }
    }
   
     get size() {
        return this.nums.length;
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
