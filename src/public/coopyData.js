export const objArrDeepCopy = (source, extendObj) => {
    var sourceCopy = source instanceof Array ? [] : {};
    for (var item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? objArrDeepCopy(source[item], extendObj) : source[item];
        if (typeof extendObj === 'object' && !(sourceCopy instanceof Array)) {
            for (var param in extendObj) {
                sourceCopy[param] = extendObj[param];
            }
        }
    }
    return sourceCopy;
}