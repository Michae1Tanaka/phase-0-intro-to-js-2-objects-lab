const employee = {
    name : "John",
    streetAddress : "777 Seven Street"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newKey = {...employee};
    newKey[key] = value;
    return newKey
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}