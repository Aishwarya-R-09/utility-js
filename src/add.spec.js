const addFunction = require('./add');
const headFunction = require('./add');
const tailFunction = require('./add');
const minFunction = require('./add');
const maxFunction = require('./add');
const filterFunction = require('./add');

describe('Add', () => {
    
    it('Add two numbers', () => {
        expect(addFunction.add(1,0)).toEqual(1);
    });
    
    it('should return first value of array', ()=>{
        expect(headFunction.head(1,2,3)).toEqual(1);
    })
    it('should return null if the array is empty', ()=>{
        expect(headFunction.head()).toEqual(null);
    })

    it('should return the array elements expect first', ()=>{
        expect(tailFunction.tail(1,2,3,4)).toEqual([2,3,4]);
    })
    it('should return null if the array is empty', ()=>{
        expect(tailFunction.tail()).toEqual(null);
    })

    it('should return the minimum element of an array', ()=>{
        expect(minFunction.min(1,2,3,4)).toEqual(1);
    })

    it('should return the maximum element of an array', ()=>{
        expect(maxFunction.max(1,2,3,4)).toEqual(4);
    })

    it("should return elements greater than the given value", ()=>{
        expect(filterFunction.filter([1,2,3,4], (value) => { return value > 2 })).toEqual([3,4])
    })

       
});
