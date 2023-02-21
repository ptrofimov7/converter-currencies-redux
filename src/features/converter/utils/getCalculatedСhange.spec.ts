
import { curTable } from '../data';
import getCalculatedСhange from './getCalculatedСhange';

 describe('calculate exchange', () => {

   it('Get=USD, Change=, Val=0', () => {
      expect(() => getCalculatedСhange(curTable, {currencyGet: 'UAH', currencyChange: '', value: 1000})).toThrow(Error);
    });

    it('Get=, Change=UAH, Val=0', () => {
      expect(() => getCalculatedСhange(curTable, {currencyGet: '', currencyChange: 'UAH', value: 1000})).toThrow(Error);
    });

   it('Get=USD, Change=UAH, Val=0', () => {
      expect(getCalculatedСhange(curTable, {currencyGet: 'UAH', currencyChange: 'USD', value: 0})).toEqual(0);
    });

   it('Get=USD, Change=UAH, Val=1000', () => {
     expect(getCalculatedСhange(curTable, {currencyGet: 'UAH', currencyChange: 'USD', value: 1000})).toEqual(25.51);
   });

   it('Get=UAH, Change=USD, Val=1000', () => {
      expect(getCalculatedСhange(curTable, {currencyGet: 'USD', currencyChange: 'UAH', value: 1000})).toEqual(39700);
    });

    it('Get=USD, Change=EUR, Val=1000', () => {
      expect(getCalculatedСhange(curTable, {currencyGet: 'USD', currencyChange: 'EUR', value: 1000})).toEqual(970.66);
    });

    it('Get=EUR, Change=USD, Val=1000', () => {
      expect(getCalculatedСhange(curTable, {currencyGet: 'EUR', currencyChange: 'USD', value: 1000})).toEqual(1068.88);
    });

    it('Get=BTC, Change=UAH, Val=10000000', () => {
      expect(getCalculatedСhange(curTable, {currencyGet: 'BTC', currencyChange: 'UAH', value: 10000000})).toEqual(4644900000000);
    });

    it('Get=UAH, Change=BTC, Val=1', () => {
      expect(getCalculatedСhange(curTable, {currencyGet: 'UAH', currencyChange: 'BTC', value: 1})).toEqual(0);
    });
 });
