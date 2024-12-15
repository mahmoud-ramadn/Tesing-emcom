
interface TCategory {
    name: string;
    image: string;
  }
  

interface Tproducts {
    id: string;
    title: string;
    price: number;
    description: string;
    category: TCategory;
    images: string[];
  }




export const useCartStore = defineStore('cart', () => {

    const cartList = ref<Tproducts[]>(JSON.parse(localStorage.getItem('Listofcart') || '[]'));



})