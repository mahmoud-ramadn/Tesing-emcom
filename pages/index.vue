<template lang="pug">
    div(class="relative h-[652px] w-full flex justify-center items-center bg-gradient-to-l from-[#FF4858] to-[#8F65FF]")
      div(class="w-full h-full flex justify-center items-center overflow-hidden")
        el-carousel(
          class="w-full h-full"
          height="100%"
          indicator-position="outside")
          el-carousel-item
            div(
              class="md:w-[1066px] mx-auto h-full flex items-center md:flex-row flex-col justify-between px-8 pt-2")
              div(
                class="md:w-[330px] h-[250px] text-white flex flex-col justify-between items-start")
                h2(class="text-4xl font-bold") iPhone X
                p(class="text-sm leading-5")
                  | Lorem Ipsum is simply dummy text of the printing and
                  | typesetting industry. Lorem Ipsum has been the industry's
                  | standard dummy.
                button(class="font-bold text-sm underline-offset-4 decoration-[4px] underline") MORE
              img(class="h-full" src="/img/hero.svg" alt="Slide 1")
          el-carousel-item
            div(
              class="md:w-[1066px] mx-auto h-full flex items-center justify-between md:flex-row flex-col px-8 pt-2")
              div(
                class="md:w-[330px] h-[250px] text-white flex flex-col justify-between items-start")
                h2(class="text-4xl font-bold") iPhone X
                p(class="text-sm leading-5") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                button(class="font-bold text-sm underline-offset-4 decoration-[4px] underline") MORE
              img(
                class="h-full"
                src="../public/img/newTwo.svg"
                alt="Slide 1")
          el-carousel-item
            div(
              class="md:w-[1066px] mx-auto h-full flex items-center md:flex-row flex-col justify-between px-8 pt-2")
              div(
                class="md:w-[330px] h-[250px] text-white flex flex-col justify-between items-start")
                h2(class="text-4xl font-bold") iPhone X
                p(class="text-sm leading-5") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                button(class="font-bold text-sm underline-offset-4 decoration-[4px] underline") MORE
              img(
                class="h-full"
                src="/img/newThree.svg"
                alt="Slide 1")
      div(
        class="md:w-[1119px] hidden absolute top-[600px] mx-auto h-[332px] md:grid md:grid-cols-3 grid-cols-1")
        div(
          class="md:col-span-1 h-full relative flex justify-end items-end bg-dangerlight")
          div(
            class="absolute w-[200px] left-8 top-8 flex flex-col justify-between text-white self-center h-2/3")
          
            h1(class="font-bold text-2xl") iphone x
            p(class="text-sm font-thin leading-7")
              | Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              | Asperiores
            h3(class="font-medium text-2xl") $399
          img(src="/img/phoneOne.svg")
        div(
          class="col-span-1 h-full relative flex justify-end items-end bg-white")
          div(class="absolute w-full p-4 flex justify-between")
            h2(class="text-xl font-bold text-darkblue") Oculus Ri
            span(class="text-sm font-thin text-gray-300") $349      
          img(src="/img/two.jpg")
  
        div(
          class="col-span-1 h-full relative flex justify-end items-end bg-primary")
          div(
            class="absolute w-[200px] left-8 top-8 flex flex-col justify-between text-white self-center h-2/3")
            h1(class="font-bold text-2xl") GoPro Hero 6
            p(class="text-sm font-thin leading-7") 
              | Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              | Asperiores
            h3(class="font-medium text-2xl") $299
          img(src="/img/three.png")
      
    //- <!-- Best Seller -->
    div(
      class="md:w-[1170px] mx-auto flex flex-col items-center text-center md:mt-[330px] mt-[88px]")
    
      div(
        class="md:w-[470px] flex flex-col justify-between items-center space-y-24")
      
        h1(class="text-3xl text-darkblue font-bold") BEST SELLER
        ul(
          class="md:w-full w-[300px] flex mt-7 justify-between items-center text-sm font-semibold")
          li(class="list-none")
            a(
              class="underline underline-offset-4 text-blue"
              style="text-decoration-thickness:2px;") All
          li(class="list-none")
            a Iphone
          li(class="list-none")
            a Ipad
          li(class="list-none")
            a Ipod
          li(class="list-none")
            a Accessories
        h1(v-if="loading") loading pleae wati...{{ loading }}

        div(
          class="md:w-[1170px] w-full mt-7 grid md:grid-cols-3 lg:grid-cols-4 gap-8 grid-cols-1")
          div(
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible-once="{opacity: 1,x: 0, transition:{ duration: 2000, type: 'ease' }}"
            :delay="0"
            v-for="(product, index) in visibleProducts"
            :key="index"
            class="col-span-1 md:h-[500px] flex flex-col justify-between space-y-5 items-center p-4 rounded-sm pt-[30px] relative pb-[35px] border-[1px]")
            div(
              class="w-full h-[50%] group absolute left-0 top-1/2 -translate-y-1/2")
              div(
                class="bg-white/70 w-full h-full group-hover:flex hidden items-center justify-around")
              
                div(
                  class="w-[40px] h-[40px] rounded-full border-[2px] border-blue flex items-center justify-center")
                  Icon(
                    name="weui:like-outlined"
                    class="text-lg font-bold text-blue")

                button(
                  type="button"
                  @click="AddToCart(product.id)"
                  class="w-[40px] h-[40px] rounded-full cursor-pointer border-[2px] border-blue flex items-center justify-center")
                  Icon(
                    name="iconoir:cart"
                    class="text-lg font-bold text-blue")
            h5(
              class="w-[40px] h-[21px] self-start flex items-center justify-center bg-dangerlight text-white font-semibold text-xs rounded-md") Hot
        
            img(class="w-full h-full" :src="product.images[0]" alt="")

            NuxtLink(
              :to="`product/${product.id}`"
              class="mx-auto mt-4 w-[129px] h-[85px] flex flex-col justify-between text-center items-center")
              h4(class="text-xs") {{ product.title }}
              div
                span
                  Icon(
                    v-for="n in 3"
                    :key="n"
                    name="ic:baseline-star"
                    width="36px"
                    height="36px"
                    style="color: #ebc101")
                  Icon(
                    v-for="n in 2"
                    :key="n"
                    name="material-symbols-light:star-outline"
                    width="36px"
                    height="36px"
                    class="text-primary")
              small(class="text-danger") $ {{ product.price }}
                span(class="line-through text-primary") $599
        button(
          :disabled="locked"
          type="button"
          @click="toggleLoadMore"
          class="text-blue font-bold decoration-3 underline-offset-4 text-sm underline")
          | {{ loadMoreButtonText }}
      
    div(
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visible-once="{ opacity: 1, x: 0,transition: { duration: 2000, type: 'ease' }}"
      :delay="0"
      class="mt-[151px] overflow-hidden w-full bg-blue md:h-[600px]")
    
      div(
        class="md:w-[1124px] flex flex-wrap mx-auto items-center justify-between")
      
        div(
          class="md:w-[391px] h-[269px] items-start text-white flex flex-col justify-between px-4")
          h3(class="font-medium text-[66px]") iPhone 6 Plus
          p(class="font-thin text-2xl")
           | Performance and design. Taken right to the edge.
          button(
            class="font-bold decoration-3 underline-offset-4 mt-[89px] text-sm underline") SHOP NOW
        div(class="h-full")
          img(class="md:w-[553px] h-full" src="/img/banner.svg" alt="")
    div(
      class="container px-4 mx-auto flex flex-col items-center justify-between mt-24")
    
      div(
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible-once="{opacity: 1,x: 0,transition: { duration: 2000, type: 'ease' },}"
        :delay="0"
        class="md:w-[1170px] md:h-[249px] grid md:grid-cols-3 grid-cols-1 gap-20")
      
        div(
          v-for="(item, index) in whyUsData"
          :key="index"
          class="col-span-1 h-full text-center")
          Icon(:name="`${item.icon}`" class="w-[50px] h-[50px] bg-dangertwo")
          h4(class="pt-7 pb-6 font-semibold text-2xl") {{ item.titel }}
          p(class="text-sm leading-6") {{ item.des }}

      div(
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :visible-once="{opacity: 1,x: 0,transition: { duration: 2000, type: 'ease' },}"
        :delay="0"
        class="md:w-[1163px] mt-28 md:h-[265px] md:mb-[140px] mb-[500px] text-center")
      
        h1(class="font-semibold text-3xl text-darkblue") LATEST NEWS

        div(
          class="w-full h-[166px] grid md:grid-cols-3 mt-[69px] gap-9 grid-cols-1")
        
          div(class="col-span-1 h-full flex items-center gap-5")
            img( src="/img/newOne.svg" alt="")
          div( class="w-[200px] h-[120px] text-start")
              small( class="text-primary font-bold") 01 Jan, 2015
              h4( class="text-darkblue font-bold text-lg")
                | Typesetting industry
              p(class="text-darkblue/85 text-sm font-thin")
                | Lorem Ipsum is simply dummy text of the printing and typesetting
                | industry.

          div(class="col-span-1 h-full flex items-center gap-5")
            img(src="/img/newTwo.svg" alt="")
            div(class="w-[200px] h-[120px] text-start")
              small(class="text-primary font-bold") 01 Jan, 2015
              h4(class="text-darkblue font-bold text-lg")
                | Typesetting industry
              p(class="text-darkblue/85 text-sm font-thin")
                | Lorem Ipsum is simply dummy text of the printing and typesetting
                | industry.
          div( class="col-span-1 h-full flex items-center gap-5")
            img( src="/img/newThree.svg" alt="") 
            div( class="w-[200px] h-[120px] text-start")
              small( class="text-primary font-bold") 01 Jan, 2015
              h4( class="text-darkblue font-bold text-lg")
                | Typesetting industry
              p(class="text-darkblue/85 text-sm font-thin")
                | Lorem Ipsum is simply dummy text of the printing and typesetting
                | industry.

      div(
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :visible-once="{opacity: 1,x: 0,transition: { duration: 2000, type: 'ease' },}"
        :delay="0"
        class="md:w-[1163px] md:h-[265px] mx-auto md:mb-[130px] mb-[500px] text-center")
        h1( class="font-semibold text-3xl text-darkblue") FEATURED PRODUCTS
        div(
          class="w-full h-[166px] grid md:grid-cols-3 mt-[69px] gap-9 grid-cols-1")
          div( class="col-span-1 h-full flex items-center gap-5")
            img( src="/img/featuredProducts/one.svg" alt="")
            div( class="w-[200px] h-[120px] text-start")
              small( class="text-primary font-bold") H-Squared tvTray
              p
                Icon(
                  v-for="n in 3"
                  :key="n"
                  name="ic:baseline-star"
                  width="36px"
                  height="36px"
                  style="color: #ebc101")
              small(class="text-danger") $499 
                span(class="line-through text-primary") $599
          div( class="col-span-1 h-full flex items-center gap-5")
            img( src="../public/img/featuredProducts/two.svg" alt="")
            div( class="w-[200px] h-[120px] text-start")
              small( class="text-primary font-bold")
                | Beats Solo 2 On Ear Headphones - Black
              p
                Icon(
                  v-for="n in 3"
                  :key="n"
                  name="ic:baseline-star"
                  width="36px"
                  height="36px"
                  style="color: #ebc101")
              small(class="text-danger")
                | $499 
                span(class="line-through text-primary") $599
          div(class="col-span-1 h-full flex items-center gap-5")
            img(src="../public/img/featuredProducts/three.svg" alt="")
            div(class="w-[200px] h-[120px] text-start")
              small( class="text-primary font-bold") Netatmo Rain Gauge
              p
                Icon(
                  v-for="n in 3"
                  :key="n"
                  name="ic:baseline-star"
                  width="36px"
                  height="36px"
                  style="color: #ebc101")
              small(class="text-danger")
                | $499 
      div(class="relative md:w-[600px] w-full")
        div(
          class="absolute right-0 top-0 text-white bg-blue w-[120px] h-[60px] flex items-center justify-center")
          | spansearch
        input(
          type="text"
          placeholder="Search query..."
          class="pl-5 w-full h-[60px] border-[2px] focus:outline-none")
     
</template>

<script setup lang="ts">
import { useCounter } from "~/Composables/useFetchProduct";
import { useCartStore } from "~/store/useAddToCart";

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
const CurrentDisplayedProduct = ref(8);

const { AddToCart } = useCartStore();

const ProductsData = ref<Tproducts[]>([]);
const { Fetcheddata, loading } = await useCounter();
ProductsData.value = Fetcheddata.value;
let locked = ref(false);
const totalProducts = ref<number>(15);

const toggleLoadMore = () => {
  if (CurrentDisplayedProduct.value === totalProducts.value) {
    CurrentDisplayedProduct.value = 8;
  } else {
    CurrentDisplayedProduct.value += 4;
  }
};

const visibleProducts = computed(() => {
  return ProductsData.value.slice(0, CurrentDisplayedProduct.value);
});

const loadMoreButtonText = computed(() => {
  if (CurrentDisplayedProduct.value === totalProducts.value) {
    return "SHOW LESS";
  } else if (CurrentDisplayedProduct.value >= totalProducts.value) {
    locked.value = true;
    return "No  more data";
  } else {
    return "LOAD MORE";
  }
});

const whyUsData = [
  {
    icon: "material-symbols:delivery-truck-speed-outline-rounded",
    titel: "FREE SHIPPING",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: "hugeicons:transaction",
    titel: "100% REFUND",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: "fluent:person-support-20-regular",
    titel: "FREE SHIPPING",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];
</script>

<style scoped>
.setimg {
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/phoneOne.svg");
}
product-link {
  transition: transform 0.3s ease-in-out;
}
.product-1 {
  background-color: lightyellow;
}
.product-2 {
  background-color: lightblue;
}

.carousel-item {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  display: flex;
  align-items: center;
  margin: 0;
  text-align: center;
  height: 100%;
}

.el-carousel__item {
  padding: 0 !important; /* Remove any padding */
  margin: 0 !important; /* Remove any margin */
  box-sizing: border-box; /* Ensure box model consistency */
}
</style>
