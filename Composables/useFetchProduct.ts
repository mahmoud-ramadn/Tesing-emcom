
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

export const useCounter = async () => {
  const Fetcheddata = ref<Tproducts[]>([]); 
  const loading = ref<boolean>(true);  

  try {
    
    const { data, pending } = await useAsyncGql({
      operation: 'GetProducts',
      variables: { limit: 15 },
    });

    
    Fetcheddata.value = data.value.products;

    loading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
    loading.value = false;
  }

  return { Fetcheddata, loading };
};
