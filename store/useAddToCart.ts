import { defineStore } from 'pinia';
import { ref, onMounted, computed } from 'vue';

interface TCategory {
  name: string;
  image: string;
}

interface TProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
}

export const useCartStore = defineStore('cart', () => {
  const cartList = ref<TProduct[]>(JSON.parse(localStorage.getItem('Listofcart') || '[]'));

  const saveCart = () => {
    localStorage.setItem('Listofcart', JSON.stringify(cartList.value));
}


  const AddToCart = async (id: string) => {
    const exists = cartList.value.some((item) => item.id === id);
    
    if (exists) {
      console.log('Product already in the cart, skipping add');
      return;
    }
  
    try {
      const { data } = await useAsyncGql({
        operation: 'getProduct',
        variables: { id: id },
      });

      const product = data.value.product as TProduct;
      console.log('Adding product to cart:', product);
      cartList.value.push(product);
      saveCart();
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const removeFromCart = (id: string) => {
    const index = cartList.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      cartList.value.splice(index, 1);
      saveCart();
    }
  };
  return { cartList, AddToCart, removeFromCart  };
});
