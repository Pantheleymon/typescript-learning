class UserClass<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== 'string') {
            return `${this.name}`;
        } else {
            return `${this.name} ${surname}`
        }
    }
}

const ivan = new UserClass('Ivan', 30);

const alex = new UserClass<string, number>('Alex', 54);

class AdminUser<T> extends UserClass<string, number> {
    rules: T;
}