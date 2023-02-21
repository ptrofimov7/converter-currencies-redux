
export default function getCalculatedChange(currencyData: any, { currencyGet, value, currencyChange }: any) {

   let result = 0

   // currencies - empty
   if (!currencyGet || !currencyChange) {
      throw new Error('Currency should be filled')
   }

   if (!value) {
      return result
   }

   if (currencyChange === currencyGet) {
      return value
   }

   // currencies in one row
   let row = currencyData.find((el: any) => (el.ccy === currencyGet && el.base_ccy === currencyChange))
   if (row) {
      const sale = row.userSale || row.sale
      return Math.round(100 * sale * value) / 100
   }

   row = currencyData.find((el: any) => (el.ccy === currencyChange && el.base_ccy === currencyGet))
   if (row) {
      const buy = row.userBuy || row.buy
      return Math.round(100 * value / buy) / 100
   }

   // currencyGet in cur table, but currencyChange not in row
   const stack = [] as any
   const elements = currencyData.filter((el: any) => (el.base_ccy === currencyChange || el.ccy === currencyChange))
   elements.forEach((el: any) => {
      stack.push(el)
   });

   let temp = []
   let processed = new Set()
   while (stack.length !== 0) {
      const row = stack.pop()
      const key = `${row.ccy}_${row.base_ccy}`
      if (processed.has(key)) {
         continue
      }
      processed.add(key)
      temp.push(row)
      if (row.ccy === currencyGet || row.base_ccy === currencyGet) {
         break;
      }
      if (row.ccy === currencyChange) {
         const elements = currencyData.filter((el: any) => (el.ccy === row.base_ccy || el.base_ccy === row.base_ccy))
         let count = 0
         elements.forEach((el: any) => {
            const key = `${el.ccy}_${el.base_ccy}`
            if (!processed.has(key)) {
               stack.push(el)
               count++
            }

         });
         if (count === 0) {
            temp = []
         }
      } else {
         const elements = currencyData.filter((el: any) => (el.base_ccy === row.ccy || el.ccy === row.ccy))
         let count = 0
         elements.forEach((el: any) => {
            const key = `${el.ccy}_${el.base_ccy}`
            if (!processed.has(key)) {
               stack.push(el)
               count++
            }
         });
         if (count === 0) {
            temp = []
         }
      }

   }

   result = value
   temp.forEach(t => {
      const isCurGet = t.ccy === currencyGet
      const buy = t.userBuy || t.buy
      const sale = t.userSale || t.sale
      if (isCurGet) {
         result = result * sale
         return
      }

      const isBaseCurGet = t.base_ccy === currencyGet
      if (isBaseCurGet) {
         result = result / buy
         return
      }

      const isCurChange = t.ccy === currencyChange
      if (isCurChange) {
         result = result / buy
         return
      }

      const isBaseCurChange = t.base_ccy === currencyChange
      if (isBaseCurChange) {
         result = result * sale
         return
      }

   })

   return Math.round(100 * result) / 100

}