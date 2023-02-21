
type IConverterRow = {
   ccy: string,
   base_ccy: string,
   buy: number,
   userBuy: number,
   sale: number,
   userSale: number,
}

type IConverterTable = Array<IConverterRow>

type ICurrencySide = {
   value: number,
   currency: string
}

type ICurrencies = Array<{ value: string }>

export {
   type IConverterRow,
   type IConverterTable,
   type ICurrencySide,
   type ICurrencies,
}