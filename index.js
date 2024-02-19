var isBirthdayData = true;
var ageData = 40;
var userNameData = 'John';
var salary;
salary = 5000;
var userData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
var userObj = JSON.parse(userData);
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName, ", age: ").concat(age + 1));
    }
}
var logBrtMsg2 = function (isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, ", age: ").concat(age + 1);
    }
    else {
        return 'Error';
    }
};
logBrtMsg(isBirthdayData, userNameData, ageData);
logBrtMsg2(isBirthdayData, userNameData, ageData);
