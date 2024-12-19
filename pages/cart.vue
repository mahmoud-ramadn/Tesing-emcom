<template lang="pug" >
  div(class="min-h-screen")
    div(class="h-12 mb-14 bg-primary")
    div(class="container mx-auto mt-[100px]")
      div(class="md:w-[1170px] mx-auto overflow-x-auto")
        el-table(
          :data="cartList"
          class="bg-purple-600 text-white"
          style="width: 100%")
          el-table-column(prop="imge" label="PRODUCT" width="610")
            template( #default="{ row }")
              div( class="flex justify-between items-center")
                button(
                  type="button"
                  @click="removeFromCart(row.id)"
                  class="w-6 h-6 cursor-pointer rounded-full bg-[#FF6875]/20 flex justify-center items-center")
                  Icon(
                    name="iwwa:delete"
                    width="8px"
                    height="8px"
                    style="color: #ff4252")
                img(
                  class="h-[130px] w-[130px] object-cover"
                  :src="row.images[0]"
                  alt="Product Image")
                p( class="text-base font-semibold leading-7 text-darkblue") {{ row.title }}
          el-table-column( prop="name" label="PRICE" width="140")
            template( #default="{ row }")
              span {{ row.price }}
           

          
          el-table-column( prop="address" label="QTY")
            template( #default="{ row }")
              div( class="w-full")
                el-input-number(
                  v-model="num"
                  :min="1"
                  :max="11"
                  @change="handleChange"
                  class="w-full")

          
          el-table-column( prop="address" label="UNIT PRICE" width="149")
            template( #default="{ row }")
              span {{ row.price }}
        div( class="mt-28 md:mb-[161px] flex items-start justify-between")
          div( class="relative md:w-[360px] w-full rounded-md overflow-hidden")
            div(
              class="absolute right-0 top-0 text-white bg-blue w-[120px] h-[60px] flex items-center justify-center")
              span Redeem
         
            input(
              type="text"
              placeholder="Voucher code"
              class="pl-5 w-full h-[60px] border-[2px] focus:outline-none")
            
    

          div( class="w-[370px] h-[316px] flex flex-col justify-between")
            h2( class="flex justify-between items-center text-base font-normal") Subtotal 
              span ${{ totalPrice }}
            
            h2( class="flex justify-between items-center text-base font-normal") Shipping free 
              span $ {{ totalPrice - 20 }}

            h2( class="flex justify-between items-center text-base") Coupon 
              span No 
         
            el-divider

            h2(
              class="flex justify-between items-center text-3xl font-semibold") TOTAL 
              span(class="font-semibold text-3xl") $118
        
            button(
              class="h-[60px] bg-blue rounded-md text-white text-base font-semibold") check out
           
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/useAddToCart";

const num = ref(1);
const handleChange = (value: number) => {};

const { cartList, removeFromCart } = useCartStore();

const totalPrice = computed(() => {
  return cartList
    .map((item) => item.price)
    .reduce((acc, product) => {
      return acc + product;
    }, 0);
});
</script>

<style scoped>
::v-deep .el-table th {
  height: 58px;
}

::v-deep .el-table td {
  height: 172px;
}

/* Make the table scrollable horizontally */
.el-table {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}

.el-table__body-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.el-table__body {
  display: block;
}

/* Make images responsive */
.el-table-column .el-table__cell img {
  width: 100%;
  height: auto;
}

/* Adjust for small screens */
@media (max-width: 768px) {
  .el-table {
    padding: 0 10px;
  }

  .el-table__body-wrapper {
    overflow-x: auto;
  }

  .el-input-number {
    width: 100% !important; /* Force the input number to take full width */
  }
}
</style>
