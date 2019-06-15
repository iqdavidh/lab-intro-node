class SortedList {
    constructor() {
        this.lista = [];
    }

    get length() {
        return this.lista.length;
    }

    add(item) {
        this.lista.push(item);

        this.lista = this.lista
            .sort((a, b) => {
                    if (a === b) {
                        return 0;
                    }

                    if (a < b) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            );
    }

    get(pos) {

        if (pos > this.lista.length) {
            return 'OutOfBounds';
        }
        return this.lista[pos];
    }

    max() {
        if (this.lista.length === 0) {
            throw new Error("EmptySortedList");
        }

        return this.lista[this.lista.length - 1];
    }

    min() {
        if (this.lista.length === 0) {
            return 0;
        }

        return this.lista[0];
    }

    average() {
        if (this.lista.length === 0) {
            throw new Error("EmptySortedList");
        }

        let suma= this.lista.reduce(item)
    }

    sum() {
    }
};

module.exports = SortedList;
