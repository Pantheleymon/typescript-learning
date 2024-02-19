var isBirthdayData = true;
var ageData = 40;
var userNameData = 'John';
var userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error'
    }
};
var createError = function (msg) {
    throw new Error(msg);
};
function logBrtMsg(_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        return ("Congrats ".concat(userNameData, ", age: ").concat(ageData + 1));
    }
    else {
        return createError(error);
    }
}
logBrtMsg(userData);
var departments = ['dev', 'design', 'marketing'];
var department = departments[0];
var report = departments.filter(function (item) { return item !== 'dev'; })
    .map(function (item) { return "".concat(item, " - done"); });
var first = report[0], second = report[1];
console.log(second);
var nums = [3, 5, 6];
var matrix = [[3, 5, 6], [3, 5, 6]];
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
