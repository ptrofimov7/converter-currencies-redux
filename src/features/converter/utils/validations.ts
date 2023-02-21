
export function isUserValueValid(value: number, defaultValue: number) {
   if (!defaultValue || (100 * Math.abs(value - defaultValue))/defaultValue > 10) {
      return false
   }
   return true
}