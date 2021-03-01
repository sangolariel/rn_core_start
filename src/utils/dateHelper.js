export function convertDate(_date) {
    let result = _date.split(' ')[0]
    const arr = result.split('-')
    result = arr.toString()
    arr.reverse()
    return arr.toString().replace(',', '/')
}
