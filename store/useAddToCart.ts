

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
  const cartList = ref<TProduct[]>([]);

  const saveCart = () => {
    if (process.client) {
      localStorage.setItem('Listofcart', JSON.stringify(cartList.value));
    }
  };

  const loadCart = () => {
    if (process.client) {
      const storedCart = localStorage.getItem('Listofcart');
      if (storedCart) {
        try {
          cartList.value = JSON.parse(storedCart);
          console.log('Cart loaded:', cartList.value);
        } catch (error) {
          console.error('Error parsing stored cart:', error);
        }
      }
    }
  };

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
 
      saveCart();
    return  cartList.value.push(product);
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

  // Load cart on store initialization

    loadCart();

  return { cartList, AddToCart, removeFromCart, saveCart, loadCart };
});

