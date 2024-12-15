<template>
  <div class="w-full px-7">
    <div class="h-12 bg-primary"></div>
    <!-- banner  -->

    <div class="container mx-auto mt-14">
      <div
        class="md:w-[1170px] mx-auto grid md:grid-cols-6 grid-cols-1 gap-8 justify-center h-full"
      >
        <div class="md:col-span-2 col-span-1 flex flex-col gap-8">
          <div
            class="w-full flex flex-col gap-7 h-[371px] rounded-sm px-5 py-4 bg-[#E5E5E5]"
          >
            <h4 class="text-darkblue font-semibold text-lg">ACCESORIES</h4>

            <div class="w-full space-y-[20px] h-[269px] overflow-y-scroll">
              <div v-for="(item, index) in AccesoriseBtn" :key="index">
                <button
                  class="w-full flex justify-between group hover:text-blue items-center text-darkblue font-semibold"
                >
                  {{ item.titel }}
                  <span class="text-secondary group-hover:text-blue">{{
                    item.num
                  }}</span>
                </button>
              </div>
            </div>
          </div>

          <div
            class="w-full h-[141px] text-darkblue flex flex-col justify-between font-semibold bg-[#E5E5E5] p-5"
          >
            <h3 class="text-lg">PRICES</h3>
            <div>
              <p class="w-full flex text-sm justify-between items-center">
                Ranger: <span class="font-thin">${{ value }}</span>
              </p>
              <div class="slider-demo-block">
                <el-slider v-model="value" range show-stops :max="10" />
              </div>
            </div>
          </div>

          <div
            class="w-full h-[123px] text-darkblue font-semibold p-5 flex flex-col items-start gap-4"
          >
            <h3 class="text-lg">COLOR</h3>

            <div class="w-full flex items-center gap-4">
              <div
                v-for="(color, index) in CircelsColor"
                :key="index"
                class="w-[24px] h-[24px] rounded-full r cursor-pointer p-2"
                :style="{ backgroundColor: color }"
                :class="{
                  'border-[2px]   border-blue  shadow-md':
                    activeIndex === index,
                }"
                @click="setActive(index)"
              ></div>
            </div>
          </div>

          <div
            class="w-full flex flex-col gap-7 h-[245px] rounded-sm px-5 py-4 bg-[#E5E5E5]"
          >
            <h4 class="text-darkblue font-semibold text-lg">BRAND</h4>

            <div class="w-full space-y-[20px] h-[269px] overflow-y-scroll">
              <div v-for="(item, index) in AccesoriseBtn" :key="index">
                <button
                  class="w-full flex justify-between group hover:text-blue items-center text-darkblue font-semibold"
                >
                  {{ item.titel }}
                  <span class="text-secondary group-hover:text-blue">{{
                    item.num
                  }}</span>
                </button>
              </div>
            </div>
          </div>

          <button class="h-14 text-darkblue bg-[#E5E5E5] rounded">MORE</button>
        </div>

        <div class="h-full md:col-span-4 col-span-1">
          <div class="w-full md:h-[340px] bg-blue rounded-sm p-14 setImg">
            <div
              class="h-[188px] flex flex-col justify-between items-start w-[280px] text-white"
            >
              <h1 class="text-4xl font-thin">iPhone 8</h1>
              <p class="text-base">
                Performance and design. Taken right to the edge.
              </p>
              <button
                class="font-bold decoration-3 underline-offset-4 text-sm underline"
              >
                SHOP NOW
              </button>
            </div>
          </div>

          <div
            class="w-full my-7 h-14 text-sm font-thin bg-[#F6F7F8] flex md:justify-between p-5 items-center"
          >
            <div class="flex items-center gap-5">
              <span>13 Items</span>
              <div class="flex items-center gap-3">
                <span> Sort By </span>
                <el-dropdown split-button style="background-color: transparent">
                  name
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
              <div class="flex items-center gap-3">
                <span> show </span>
                <el-dropdown split-button style="background-color: transparent">
                  12
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item> 1</el-dropdown-item>
                      <el-dropdown-item>2</el-dropdown-item>
                      <el-dropdown-item> 3</el-dropdown-item>
                      <el-dropdown-item>4</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>

            <div class="space-x-3">
              <Icon name="subway:box-1" style="color: #4e4d4b" />
              <Icon
                name="heroicons:bars-4-16-solid"
                width="36px"
                height="36px"
                style="color: #4e4d4b"
              />
            </div>
          </div>

          <!-- products list -->
          <div
            v-for="(product, index) in paginatedProducts"
            :key="index"
            class="md:h-[328px] flex  md:flex-row flex-col  my-4  md:items-start    items-center gap-7"
          >
            <div
              class="md:w-[270px] md:h-[270px] border-[1px] overflow-hidden shadow-sm rounded-sm"
            >
              <img
                class="w-full h-full object-cover"
                :src="product.images[0]"
                alt=""
              />
            </div>

            <div class="md:w-[570px] md:h-[300px]">
              <div class="flex flex-col justify-between md:h-[134px]">
                <h2 class="text-darkblue text-2xl font-semibold">
                  {{ product.title }}
                </h2>
                <div class="flex items-center gap-4">
                  <el-rate v-model="value2" clearable />
                  <span class="text-primary">0 reviews</span>
                  <button
                    class="text-blue underline-offset-1 decoration-3 underline decoration-blue"
                  >
                    Submit a review
                  </button>
                </div>
                <hr class="bg-[#F6F7F8] h-[2px] my-4 w-full" />
                <p class="text-2xl font-medium text-danger flex gap-5">
                  {{ product.price }}
                  <span class="text-2xl text-primary line-through">$597</span>
                </p>
              </div>
              <div class="md:h-[141px] flex flex-col justify-between">
                <p class="text-sm leading-6 font-thin">
                  {{ product.description }}
                </p>
                <div class="flex items-center gap-8">
                  <button
                    type="button"
                    class="flex items-center justify-center gap-3 text-sm font-semibold text-[#33A0FF] rounded-sm w-40 h-12 bg-blue/30"
                  >
                    <Icon
                      name="iconoir:cart"
                      class="font-semibold text-lg text-[#33A0FF]"
                    />
                    Add To Cart
                  </button>
                  <button
                    type="button"
                    class="text-sm font-semibold text-[#33A0FF] rounded-sm w-12 h-12 bg-blue/30"
                  >
                    <Icon
                      name="weui:like-outlined"
                      class="text-lg text-[#33A0FF] font-semibold"
                    />
                  </button>
                </div>
              </div>
            </div>


          </div>

          <el-pagination
           style="  margin-top: 72px; margin-bottom: 90px; "
            background
            layout="pager"
            :page-size="itemsPerPage"
            :current-page="currentPage"
            :total="ProductsData.length"
            @current-change="handlePageChange"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '~/Composables/useFetchProduct';

const value = ref([10.99, 2.99]);

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

const CircelsColor = ["#006CFF", "#FC3E39", "#171717", "#FFF600"];
const activeIndex = ref<number | null>(0);
const setActive = (index: number) => {
  activeIndex.value = index;
};

const AccesoriseBtn = [
  {
    titel: "Apple Car",
    num: "12",
  },
  {
    titel: "Air port & wireless",
    num: "12",
  },
  {
    titel: "Cables & Docks",
    num: "12",
  },
  {
    titel: "Cases & Films",
    num: "12",
  },
  {
    titel: "Charging Devices",
    num: "12",
  },
  {
    titel: "Connected home",
    num: "12",
  },
  {
    titel: "Headphones",
    num: "12",
  },
];

const selectedCity = ref("");

// Function to handle city selection
const selectCity = (cityName: string) => {
  selectedCity.value = cityName;
};

// const ProductsData = [
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
//   {
//     title: "Beats Solo2 On Ear Headphones - Black",
//     imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     price: "$499",
//     discout: "$599",
//     desc: "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
//   },
// ];

const value2 = ref(3);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);

const ProductsData = ref<Tproducts[]>([]);

const itemsPerPage = 6; // Number of items per page
const currentPage = ref(1);
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return ProductsData.value.slice(start, end);
});

 const {Fetcheddata}= await useCounter();

ProductsData.value = Fetcheddata.value;

const handlePageChange = (page: number) => {
  currentPage.value = page;
};

</script>

<style scoped>
.setImg {
  background-repeat: no-repeat;
  background-position: right;
  background-image: url("../public/img/featuredProducts/banner.svg");
}

.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

::v-deep(.el-pagination.is-background .el-pager .is-active) {
  background-color: #22262A !important;
  color: white !important;
  border-radius: 4px;
}
</style>
