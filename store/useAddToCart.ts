import { useCounter } from "~/Composables/useFetchProduct";
import { useSingelProduct } from "~/Composables/useProduct";

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

    const saveCart = () => {
      localStorage.setItem('Listofcart', JSON.stringify(cartList.value));
  }


   const {data}= await useCounter();


   data.value.products=== cartList.value


   const AddToCart= async(id:any)=>{

    const {data}= await useSingelProduct(id);

  
    cartList.value.push(data.value.product)






   }

    




return { cartList , AddToCart}

})