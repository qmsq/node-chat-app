const expect = require('expect');

const {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non string values', () => {
        var str = true;
        expect(isRealString(str)).toBe(false);
    });

    it('should reject string with only space', () => {
        var str='                             ';
        expect(isRealString(str)).toBe(false);
    })

    it('should allow string with non-space characters', () => {
        var str= ' dfjfkf    ';
        expect(isRealString(str)).toBe(true);
    })
});
    