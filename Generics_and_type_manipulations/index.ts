function processingData<T, S>(data: T, options: S): string {
    switch (typeof data) {
        case "string":
            return `${data}, speed: ${options}`;
        case "number":
            return `${data.toFixed()}, speed: ${options}`
        default:
            return "Mot valid"
    }
}

let res1 = processingData(1, "fast");
let res2 = processingData("1", "slow");

const res3 = processingData<number, string>(10, "slow");

function processing<T>(data: T): T {
    return data;
}

interface DataSaver {
    processing: typeof processing;
}

// interface DataSaver {
//     processing: <T>(data: T) => T
// }

const saver: DataSaver = {
    // processing(data) {
    //     return data;
    // }
    processing: <T>(data: T) => {
        return data
    }

    // processing: processing
}



interface ProcessingFn {
    <T>(data: T): T;
}

let newFunc: ProcessingFn = processing;



interface User<ParentsData extends ParentsOfUser> {
    login: string,
    age: number,
    parents: ParentsData;
}

const user: User<{mother: string, father: string, married: boolean}> = {
    login: 'str',
    age: 54,
    parents: {mother: 'Anna', father: 'Sam', married: true},
};





interface ParentsOfUser {
    mother: string;
    father: string;
}

interface User2{
    login: string,
    age: number,
    parents: ParentsOfUser;
}

const user2: User2 = {
    login: 'str',
    age: 54,
    parents: {mother: 'Anna', father: 'Sam'},
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const datata: OneOrMany<number[]> = [5];





const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req: ${amount}`);
    return amount;
}

depositMoney(500)
depositMoney('500');


const depositMoney2 = (amount: number | string): number | string => {
    console.log(`req: ${amount}`);
    return amount;
}

depositMoney2(500)
depositMoney2('500');