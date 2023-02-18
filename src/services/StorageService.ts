
class StorageService {

   storage = localStorage

   save(key: string, value: any) {
      this.storage.setItem(key, JSON.stringify(value))
   }
   get(key: string) {
      let value=''
      try {
         value = JSON.parse(this.storage.getItem(key) || '')
      } catch (error) {
         console.error(error)
      }
      return value
   }

}

const storageService = new StorageService()

export default storageService