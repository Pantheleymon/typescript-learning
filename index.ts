const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

let salary: number;
salary = 5000;

const userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
const userObj: {
    isBirthdayData: boolean,
    userNameData: string, 
    ageData: number
} = JSON.parse(userData);

function logBrtMsg (isBirthday: boolean, userName: string, age: number): void {
    if (isBirthday) {
        console.log(`Congrats ${userName}, age: ${age + 1}`)
    }
}

const logBrtMsg2 = (isBirthday: boolean, userName: string, age: number): string => {
    if (isBirthday) {
        return `Congrats ${userName}, age: ${age + 1}`;
    } else {
        return 'Error';
    }
}

logBrtMsg(isBirthdayData, userNameData, ageData);
logBrtMsg2(isBirthdayData, userNameData, ageData);