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
  export const  useSingelProduct= async (id:string)=>{
    const ProductData=ref<Tproducts|null>(null)
     try {
        const {data}= await useAsyncGql({
            operation:'getProduct',
            variables:{id:id}
        })
        ProductData.value=data.value.product;
     } catch (error) {
        console.log(error);
        
     }

     return {ProductData}
  }