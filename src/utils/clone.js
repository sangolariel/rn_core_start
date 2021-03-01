export function cloneObject(_object) {
    return Object.assign({}, _object)
}

export function cloneArray(_array) {
    const array = []
    _array.forEach(item => {
        array.push(cloneObject(item))
    })
    return array
}

export function clone(_object) {
    const string = JSON.stringify(_object)
    return JSON.parse(string)
}
