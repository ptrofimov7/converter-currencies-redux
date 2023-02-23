import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
         <TableContainer sx={{ overflow: 'auto' }}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="center">Currency/Current Base</TableCell>
                     <TableCell align="center">Buy</TableCell>
                     <TableCell align="center">Sale</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {curTable.map((el: IConverterRow) =>
                  (
                     <TableRow
                        key={el.ccy}
                     >
                        <TableCell component="th" scope="row">
                           {el.ccy}/{el.base_ccy}
                        </TableCell>
                        {!selectedCells.has(`${el.ccy}_userBuy`)
                           ? <TableCell align="center" className='editable-cell' onClick={(e) => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.add(`${el.ccy}_userBuy`)
                                 return set
                              })
                           }}>{el.userBuy || el.buy}</TableCell>
                           : <TableCell align="center"><ConverterTableInput initialValue={el.buy} currency={el.ccy} column="userBuy" defaultValue={el.userBuy || el.buy} onApply={handleApply} onCancel={() => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.delete(`${el.ccy}_userBuy`)
                                 return set
                              })
                           }} /></TableCell>}
                        {!selectedCells.has(`${el.ccy}_userSale`)
                           ? <TableCell align="center" className='editable-cell' onClick={(e) => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.add(`${el.ccy}_userSale`)
                                 return set
                              })
                           }}>{el.userSale || el.sale}</TableCell>
                           : <TableCell align="center"><ConverterTableInput initialValue={el.sale} currency={el.ccy} column="userSale" defaultValue={el.userSale || el.sale} onApply={handleApply} onCancel={() => {
                              setSelectedCells((prev) => {
                                 const set = new Set(prev)
                                 set.delete(`${el.ccy}_userSale`)
                                 return set
                              })
                           }} /></TableCell>}
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default ConverterTable;