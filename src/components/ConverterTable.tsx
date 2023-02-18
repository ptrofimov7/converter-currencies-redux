import React, { useState } from 'react';
import ConverterTableInput from './ConverterTableInput';

type IConverterRow = {
   currency: string,
   baseCurrency: string,
   buy: number,
   userBuy: number,
   sell: number,
   userSell: number,
}

type IConverterTable = Array<IConverterRow>
const data = [
   {
      currency: 'USD',
      baseCurrency: 'UAH',
      buy: 100,
      sell: 200,
      userSell: 0,
      userBuy: 0,
   },
   {
      currency: 'EUR',
      baseCurrency: 'UAH',
      buy: 200,
      sell: 300,
      userSell: 0,
      userBuy: 0,
   },
] as IConverterTable

const ConverterTable = () => {
   const [tableData, setTableData] = useState(data)
   const [selectedCells, setSelectedCells] = useState(new Set())
   const handleApply = ({ currency, column, value }: any) => {
      setTableData(tableData.map((el) => {
         if (el.currency === currency) {
            return {
               ...el, [column]: value
            }
         }
         return el
      }))
      const set = new Set(selectedCells)
      set.delete(`${currency}_${column}`)
      setSelectedCells(set)
   }
   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Currency/Current Base</th>
                  <th>Buy</th>
                  <th>Sell</th>
               </tr>
            </thead>
            <tbody>
               {tableData.map((el: IConverterRow) => {
                  return (
                     <tr>
                        <td>{el.currency}/{el.baseCurrency}</td>
                        {!selectedCells.has(`${el.currency}_userBuy`)
                           ? <td onClick={(e) => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.add(`${el.currency}_userBuy`)
                                 return set
                              })
                           }}>{el.userBuy || el.buy}</td>
                           : <td><ConverterTableInput currency={el.currency} column="userBuy" defaultValue={el.userBuy || el.buy} onApply={handleApply} onCancel={() => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.delete(`${el.currency}_userBuy`)
                                 return set
                              })
                           }} /></td>}
                        {!selectedCells.has(`${el.currency}_userSell`)
                           ? <td onClick={(e) => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.add(`${el.currency}_userSell`)
                                 return set
                              })
                           }}>{el.userSell || el.sell}</td>
                           : <td><ConverterTableInput currency={el.currency} column="userSell" defaultValue={el.userSell || el.sell} onApply={handleApply} onCancel={() => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.delete(`${el.currency}_userSell`)
                                 return set
                              })
                           }} /></td>}
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </div>
   );
};

export default ConverterTable;