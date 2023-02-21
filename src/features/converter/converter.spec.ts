import counterReducer, {
   ConverterState,
   fetchCurrencies
} from './converterSlice';

describe('counter reducer', () => {
   const initialState: ConverterState = {
      data: [],
      status: 'idle',
      error: '',
   };
   it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState);
   });
   // it('should handle fetchCurrencies', () => {
   //   const actual = counterReducer(initialState, fetchCurrencies());
   //   expect(actual.value).toEqual(4);
   // });
});
