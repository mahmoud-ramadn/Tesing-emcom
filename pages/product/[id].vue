<template lang="pug">
  div(class="min-h-screen")
    div(class="h-12 mb-14 bg-primary")
    div(class="container mx-auto")
      div(class="grid md:grid-cols-5 grid-cols-1 gap-4")
        div(class="md:col-span-4 col-span-1 flex flex-col justify-between md:h-[967px]")
          div(class="md:h-[464px] grid md:grid-cols-5 gap-6 grid-cols-1")
            div(v-if="loading" class="md:col-span-2 col-span-1 px-8 h-[300px] bg-gray-600 rounded-md flex items-center justify-center")
              p Loading...
            div(v-else class="md:col-span-2 col-span-1 h-full gap-2 px-8")
              img(class="w-full" :src="productinfo?.images[0]" alt="product image")
              div(class="w-full h-20 flex justify-between")
                div(class="h-[73px] w-[73px] border-[1px] overflow-hidden")
                  img(class="w-full h-full" :src="productinfo?.images[0]" alt="")
                div(class="h-[73px] w-[73px] border-blue border-[2px]")
                  img(:src="productinfo?.images[1]" alt="")
                div(class="h-[73px] w-[73px] border-[1px]")
                  img(:src="productinfo?.images[2]" alt="")
                div(class="h-[73px] w-[73px] border-[1px] bg-green-400")
                  img(:src="productinfo?.category.image" alt="")
            div(class="md:col-span-3 col-span-1 h-full")
              div(class="flex flex-col justify-between md:h-[134px]")
                h2(class="text-darkblue text-2xl font-semibold") {{ productinfo?.title }}
                div(class="flex items-center gap-4")
                  el-rate(v-model="value1" :clearable="true")
                  span(class="text-primary") 0 reviews
                  button(
                    class="text-blue underline-offset-1 decoration-3 underline decoration-blue"
                  ) Submit a review
                hr(class="bg-[#F6F7F8] h-[2px] my-4 w-full")
                p(class="text-2xl font-medium text-danger flex gap-5 mb-4") {{ productinfo?.price }}
                  span(class="text-2xl text-primary line-through") 128
                div(class="w-[188px] h-[90px] space-y-5 mb-2")
                  h4(class="flex justify-between items-center") Availability:
                    span(class="font-thin text-darkblue text-xs") In stock
                  h4(class="flex justify-between items-center font-bold text-darkblue text-sm") Category:
                    span(class="font-thin text-darkblue text-xs") {{ productinfo?.category.name }}
                  h4(class="flex justify-between items-center") Free shipping
                el-divider
                div(class=' w-full h-20 flex items-center gap-5 ') 
                  h1(class=" w-full text-sm font-bold") Select Color:
                  div(class="w-full flex items-center gap-4")
                    div(class="w-[24px] h-[24px] rounded-full r cursor-pointer p-2"  v-for="(color, index) in CircelsColor" :key="index" :style="{ backgroundColor: color }"
                       :class="{'border-[2px]   border-blue  shadow-md':activeIndex === index,}"
                       @click="setActive(index)")
                el-divider
                div(class="flex justify-between items-center")
                  el-input-number(
                    v-model="num"
                    :min="1"
                    :max="10"
                    @change="handleChange"
                  )
                  div(class="flex items-center gap-8")
                    button(
                      @click="AddToCart(productId)"
                      type="button"
                      class="flex items-center justify-center gap-3 text-sm font-semibold text-[#33A0FF] rounded-sm w-40 h-12 bg-blue/30"
                    )
                      Icon(name="iconoir:cart" class="font-semibold text-lg text-[#33A0FF]") Add To Cart
                    button(
                      type="button"
                      class="text-sm font-semibold text-[#33A0FF] rounded-sm w-12 h-12 bg-blue/30"
                    )
                      Icon(name="weui:like-outlined" class="text-lg text-[#33A0FF] font-semibold")

          div(class="md:h-[472px] flex flex-col px-2 items-end")
            div(class="md:h-20 w-full items-start md:justify-end justify-around gap-x-7 flex")
              el-button(style="width: 230px; height: 46px; background-color: #03a9f4; color: white;")
                Icon(
                  name="ri:facebook-fill"
                  width="36px"
                  height="36px"
                  style="color: #f0f0f0; padding-right: 30px"
                ) Share on Facebook
              el-buttonel-button( class=' flex  items-center justify-center rounded-md ' style="width: 230px; height: 46px; background-color: #03a9f4; color: white;")
                Icon(
                  name="ri:twitter-fill"
                  width="36px"
                  height="36px"
                  style="color: #f0f0f0; padding-right: 30px"
                ) Share on Twitter

            el-tabs(v-model="activeName" class="demo-tabs" @tab-click="handleClick" style="width: 100%; background-color: #fafafb; padding: 20px; border-radius: 10px;")
              el-tab-pane(label="Product Information" name="first")
                p(class="leading-10 text-sm text-darkblue") {{ productinfo?.description }}
              el-tab-pane(label="Reviews" name="second") Config
              el-tab-pane(label="Another tab" name="third") Role
        div(class="md:col-span-1 col-span-1 space-y-2")
          div(class="md:h-[428px]")
            h3(class="text-primary font-medium text-lg") BEST SELLER
            el-carousel(indicator-position="outside")
              el-carousel-item(
                v-for="(item, index) in productinfo?.images"
                :key="index"
                style="height: 372px"
              )
                div(class="border-2 w-full flex flex-col h-full space-y-2 items-center")
                  img(class="h-full object-cover w-full"  :src="item" alt="")
                  h1(class="font-semibold text-darkblue text-sm") {{ productinfo?.title }}
                  el-rate(v-model="value" clearable)
                  small(class="text-danger") $499
                    span(class="line-through text-primary") $599
          div(class="md:h-[408px] flex flex-col justify-between bg-[#C1C8CE] p-4")
            div(class="md:w-[221px] md:h-[151px] flex flex-col justify-between")
              h3(class="text-darkblue font-bold leading-10 text-2xl") GoPro Hero 6
              p(class="font-thin text-xs leading-5 text-darkblue") Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor
              small(class="text-primary leading-10 text-2xl") $299
            img(class="md:h-[176px]" src="/img/cam.svg" alt=" ")
      div(class="w-full")
        h1(class="text-center font-bold text3xl text-darkblue") RELATED PRODUCTS
        div(class="md:w-[1170px] mx-auto md:h-[780px] mt-7 grid md:grid-cols-3 lg:grid-cols-4 gap-8 grid-cols-1")
          div(v-for="(item, index) in RealatedProductsData" :key="index" class="grid col-span-1 md:h-[349px] px-4 rounded-sm pt-[30px] relative space-y-4 pb-[35px] border-[1px]")
            div(class="w-full h-[50%] group absolute left-0 top-1/2 -translate-y-1/2")
              div(class="bg-white/70 w-full h-full group-hover:flex hidden items-center justify-around")
                div(class="w-[40px] h-[40px] rounded-full border-[2px] border-blue flex items-center justify-center")
                  Icon(name="weui:like-outlined" class="text-lg font-bold text-blue")
                button(type="button" @click="AddToCart(item.id)" class="w-[40px] h-[40px] rounded-full cursor-pointer border-[2px] border-blue flex items-center justify-center")
                  Icon(name="iconoir:cart" class="text-lg font-bold text-blue")
            h5(class="w-[40px] h-[21px] flex items-center justify-center bg-dangerlight text-white font-semibold text-xs rounded-md") Hot
            img(class="w-full h-full" :src="item.images[0]" alt="")
            div(class="mx-auto mt-4 w-[129px] h-[85px] flex flex-col justify-between text-center items-center")
              h4(class="text-xs") {{ item.title }}
              div
                span
                  Icon(v-for="n in 3" :key="n" name="ic:baseline-star" width="36px" height="36px" style="color: #ebc101")
                  Icon(v-for="n in 2" :key="n" name="material-symbols-light:star-outline" width="36px" height="36px" class="text-primary")
              small(class="text-danger") $ {{ item.price }}
                span(class="line-through text-primary") $599
</template>

<script setup lang="ts">
import { useSingelProduct } from "~/Composables/useProduct";
import { useCartStore } from "~/store/useAddToCart";
import type { TabsPaneContext } from "element-plus";

const { AddToCart } = useCartStore();
const productId = ref(useRoute().params.id); // Ensure the id is captured correctly.

interface TCategory {
  name: string;
  image: string;
}

interface TProduct {
  description: string;
  title: string;
  price: number;
  images: string[];
  category: TCategory;
}

const loading = ref(false);
const productinfo = ref<TProduct | null>(null);

const { ProductData } = await useSingelProduct(productId as any);
productinfo.value = ProductData.value;

const CircelsColor = ["#006CFF", "#FC3E39", "#171717", "#FFF600"];
const setActive = (index: number) => {
  activeIndex.value = index;
};
const activeIndex = ref<number | null>(0);
const num = ref(1);

const handleChange = (value: number) => {};

const activeName = ref("first");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const RealatedProductsData = ref<TProduct[]>([]);

try {
  const { data } = await useAsyncGql({
    operation: "Realted",
  });
  RealatedProductsData.value = data.value.products;
} catch (error) {
  console.error(error);
}
</script>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-carousel__indicator button {
  background-color: blue;
}

.el-carousel {
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .el-carousel__item h3 {
    line-height: 150px;
    font-size: 1.25rem;
  }
}
</style>
