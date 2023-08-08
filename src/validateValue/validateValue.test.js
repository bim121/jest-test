const validateValue = require('./validateValue')

describe('validateValue', () => {
    test('Коректное значения', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Больше коректного значения', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('Меньше коректного значения', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('Пограничное значение снизу', () => {
        expect(validateValue(0)).toBe(true);
    })
    test('Пограничное значение сверху', () => {
        expect(validateValue(100)).toBe(true);
    })
})