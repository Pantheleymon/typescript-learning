const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error'
    }
}

const createError = (msg: string) => {
    throw new Error(msg);
}

function logBrtMsg ({
    isBirthdayData,
    userNameData,
    ageData,
    messages: {error}
}: {
    isBirthdayData: boolean,
    userNameData: string,
    ageData: number,
    messages: {error: string}
}): string {
    if (isBirthdayData) {
        return (`Congrats ${userNameData}, age: ${ageData + 1}`)
    } else {
        return createError(error);
    }
}

logBrtMsg(userData);

const departments: string[] = ['dev', 'design', 'marketing'];

const department = departments[0];

const report = departments.filter((item: string) => item !== 'dev')
                            .map((item: string) => `${item} - done`);

const [first, second] = report;

console.log(second);

const nums: number[] = [3, 5, 6];
const matrix: number[][] = [[3, 5, 6], [3, 5, 6]];

// function logBrtMsg (isBirthday: boolean, userName: string, age: number): void {
//     if (isBirthday) {
//         console.log(`Congrats ${userName}, age: ${age + 1}`)
//     } else {
//         return createError("Error");
//     }
// }

// logBrtMsg(isBirthdayData, userNameData, ageData);
// let salary: number;
// salary = 5000;

// const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
// const userObj: {
//     isBirthdayData: boolean,
//     userNameData: string, 
//     ageData: number
// } = JSON.parse(userData);

// const logBrtMsg2 = (isBirthday: boolean, userName: string, age: number): string => {
//     if (isBirthday) {
//         return `Congrats ${userName}, age: ${age + 1}`;
//     } else {
//         return 'Error';
//     }
// }

// logBrtMsg2(isBirthdayData, userNameData, ageData);