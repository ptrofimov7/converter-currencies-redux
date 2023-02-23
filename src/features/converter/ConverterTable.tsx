import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateCurrencies } from './converterSlice';
import ConverterTableEditCell from './ConverterTableEditCell';
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

   const handleSetEditableCell = (currency: string, column: string) => {
      setSelectedCells((prev) => {
         const set = new Set(prev)
         set.add(`${currency}_${column}`)
         return set
      })
   }

   const handleUnsetEditableCell = (currency: string, column: string) => {
      setSelectedCells((prev) => {
         const set = new Set(prev)
         set.delete(`${currency}_${column}`)
         return set
      })
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
                           ? <TableCell align="center" className='editable-cell'>
                              <ConverterTableEditCell
                                 currency={el.ccy}
                                 column="userBuy"
                                 onClick={handleSetEditableCell}
                              >
                                 {el.userBuy || el.buy}
                              </ConverterTableEditCell>

                           </TableCell>
                           : <TableCell align="center">
                              <ConverterTableInput
                                 initialValue={el.buy}
                                 currency={el.ccy}
                                 column="userBuy"
                                 defaultValue={el.userBuy || el.buy}
                                 onApply={handleApply}
                                 onCancel={() => {
                                    handleUnsetEditableCell(el.ccy, 'userBuy')
                                 }} />
                           </TableCell>}
                        {!selectedCells.has(`${el.ccy}_userSale`)
                           ? <TableCell align="center" className='editable-cell'>
                              <ConverterTableEditCell
                                 currency={el.ccy}
                                 column="userSale"
                                 onClick={handleSetEditableCell}
                              >
                                 {el.userSale || el.sale}
                              </ConverterTableEditCell>
                           </TableCell>
                           : <TableCell align="center">
                              <ConverterTableInput
                                 initialValue={el.sale}
                                 currency={el.ccy}
                                 column="userSale"
                                 defaultValue={el.userSale || el.sale}
                                 onApply={handleApply}
                                 onCancel={() => {
                                    handleUnsetEditableCell(el.ccy, 'userSale')
                                 }} />
                           </TableCell>
                        }
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
};

export default ConverterTable;