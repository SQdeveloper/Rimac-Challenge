import { expect, test } from 'vitest'
import { calculateAge } from './calculateAge.js'

test('calculate age of user', () => {
    expect(calculateAge('11-05-2020')).toBe(4);
    expect(calculateAge('11-12-2020')).toBe(3);
    expect(calculateAge('11-05-2021')).toBe(3);
})