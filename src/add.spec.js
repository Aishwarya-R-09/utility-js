const addFunction = require('./add');
const headFunction = require('./add');
const tailFunction = require('./add');

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
    
    
});
