(function solve() {

    let id = 0;

    class Extensible {
        constructor() {
            Extensible.prototype.id = Extensible.prototype.id === undefined ? 0 : Number(Extensible.prototype.instances) + 1;
            this.id = Extensible.prototype.id;
        }
        extend(template) {

            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Extensible.prototype[prop] = template[prop]
                } else {
                    this[prop] = template[prop];
                }
            }
        }

    }
    return Extensible;
})()