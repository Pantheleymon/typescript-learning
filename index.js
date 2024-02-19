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
var userDataTuple = [true, 40, 'John'];
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
function createAnimation(id, animationName, timingFunc, duration, iterCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    if (timingFunc === void 0) { timingFunc = 'ease'; }
    // if (elem) {
    // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
    // }
    console.log("".concat(animationName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
}
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
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
