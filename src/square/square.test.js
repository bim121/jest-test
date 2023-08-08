const square= require('./square')

describe('square', () => {
    let mockValue;

    beforeEach(() => {
        //Сделать перед каждым
    })

    beforeAll(() => {
        //Сделать перед всеми
    })

    test('Коректное значения', () => {
        const spyMath = jest.spyOn(Math, 'pow')
        square(1);
        expect(spyMath).toBeCalledTimes(0);
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    })

    afterEach(() => {
        //Сделать после каждого
    })

    afterAll(() => {
        //Сделать после всех
    })
    
})