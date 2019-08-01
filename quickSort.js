function quickSort (arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pindex = Math.floor(arr.length / 2)
    let val = arr.splice(pindex, 1)[0]
    let left = []
    let right = []
    arr.forEach(e => {
        e > val ? right.push(e) : left.push(e)
    })
    return quickSort(left).concat([val], quickSort(right))
}