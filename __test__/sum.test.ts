
import { sum } from "../src/utils";

describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 1 + 1 to equal 2', () => {
        expect(sum(1, 2)).toBe(2);
    });

    test('adds 1 + 3 to equal 4', () => {
        expect(sum(1, 2)).toBe(4);
    });
});
