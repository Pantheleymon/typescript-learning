const isBirthdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

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