import { isUserValueValid } from "./validations"


describe('Check validity editable value at table', () => {

it('user value < default over 10% should be wrong', () => {
   expect(isUserValueValid(100, 40)).toBe(false)
})

it('user value > default over 10% should be wrong', () => {
   expect(isUserValueValid(40, 45)).toBe(false)
})


it('user value < default less 10% should be right', () => {
   expect(isUserValueValid(40, 42)).toBe(true)
})

it('user value > default less 10% should be right', () => {
   expect(isUserValueValid(43, 40)).toBe(true)
})

})