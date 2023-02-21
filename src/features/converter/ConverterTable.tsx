import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateCurrencies } from './converterSlice';
import ConverterTableInput from './ConverterTableInput';
import { IConverterRow } from './types';

const ConverterTable = ({ curTable }: { curTable: Array<IConverterRow> }) => {
   const dispatch = useAppDispatch()
   const [selectedCells, setSelectedCells] = useState(new Set())
   const handleApply = ({ currency, column, value }: any) => {
      dispatch(updateCurrencies({ currency, column, value }))
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
                  <th>Sale</th>
               </tr>
            </thead>
            <tbody>
               {curTable.map((el: IConverterRow) => {
                  return (
                     <tr key={el.ccy}>
                        <td>{el.ccy}/{el.base_ccy}</td>
                        {!selectedCells.has(`${el.ccy}_userBuy`)
                           ? <td onClick={(e) => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.add(`${el.ccy}_userBuy`)
                                 return set
                              })
                           }}>{el.userBuy || el.buy}</td>
                           : <td><ConverterTableInput initialValue={el.buy} currency={el.ccy} column="userBuy" defaultValue={el.userBuy || el.buy} onApply={handleApply} onCancel={() => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.delete(`${el.ccy}_userBuy`)
                                 return set
                              })
                           }} /></td>}
                        {!selectedCells.has(`${el.ccy}_userSale`)
                           ? <td onClick={(e) => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.add(`${el.ccy}_userSale`)
                                 return set
                              })
                           }}>{el.userSale || el.sale}</td>
                           : <td><ConverterTableInput initialValue={el.sale} currency={el.ccy} column="userSale" defaultValue={el.userSale || el.sale} onApply={handleApply} onCancel={() => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.delete(`${el.ccy}_userSale`)
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