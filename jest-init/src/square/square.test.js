const square = require('./square');

describe('square', () => {
    let mockValue;
    // Вызывается перед каждым тестом
    beforeEach(() => {
        // например добавить в базу данных
    })
    // Вызывается один раз перед всеми тестами
    beforeAll(()=>{

    })
    test('Корректное значени', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })

    test('Корректное значени', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    afterEach(() => {
        // например  удалить из базы данных
        jest.clearAllMocks()
    })
    afterAll(() => {

    })
})