import storageService from "../../services/StorageService";

// A mock function to mimic making an async request for data
const data = [] as any
const API_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
export function fetchMockData() {
   return new Promise<{ data: any }>((resolve) =>
     setTimeout(() => resolve({ data }), 500)
   );
 }

 export async function fetchData() {
   let data=null
   let counter = Number(storageService.get('counter') || '0')
   if (counter === 5) {
      storageService.save('counter', 0)
      throw new Error("Counter reached 5");
   }
   try {
      const response = await fetch(API_URL)
      if (response.ok) {
         data = await response.json()
         counter++
      } else {
         throw new Error('Something went wrong')
      }
   } catch (error) {
      throw new Error('Something went wrong')
   }

   return data
 }