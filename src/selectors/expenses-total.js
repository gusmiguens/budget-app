export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((acc, cur) => {
            return acc + cur
        },0)
}
