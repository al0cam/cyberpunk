class Store {
    count = $state(0);
    increment() {
        this.count++;
        console.log(this.count);
    }
    decrement() {
        this.count--;
        console.log(this.count);
    }
}

export const store = new Store();