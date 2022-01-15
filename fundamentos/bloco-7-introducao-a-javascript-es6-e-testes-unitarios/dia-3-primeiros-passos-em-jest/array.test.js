const myRemove = (arr, item) => {
    let newArr = [];
    for(let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

describe('myRemove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3)', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) nao retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 4)).not.toEqual([1, 2, 4]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
    });
});