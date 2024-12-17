
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
  const Fetcheddata = ref<Tproducts[]>([]); // البيانات التي سيتم جلبها
  const loading = ref<boolean>(true); // تحديد حالة التحميل (افتراضيًا True)

  try {
    // استعلام GraphQL
    const { data, pending } = await useAsyncGql({
      operation: 'GetProducts',
      variables: { limit: 15 },
    });

    // تخزين البيانات في Fetcheddata
    Fetcheddata.value = data.value.products;

    // تغيير حالة التحميل إلى False عند انتهاء الاستعلام
    loading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
    // في حالة حدوث خطأ، لا يزال `loading` False ولكن يمكن أن تضيف حالة Error إذا أردت
    loading.value = false;
  }

  return { Fetcheddata, loading };
};
