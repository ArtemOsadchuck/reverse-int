module.exports = function reverse (n) {
    let arr = []
    n = Math.abs(n)
    arr.push(n)
    arr = [...arr].toString().split("")
    arr.reverse()
    return arr.join("")
}
