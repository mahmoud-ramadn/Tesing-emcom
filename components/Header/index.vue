<template lang="pug">
  div(class="h-10 border-b   fixed left-0 top-0 w-full   bg-secondary  shadow-md z-20 ")
      div(class="md:container w-full px-2 mx-auto h-full flex items-center justify-between")
        div(class="space-x-2 text-sm text-darkblue")
            span En
              Icon(name="iconamoon:arrow-down-2-fill" width="36px" height="36px")
            span USD 
              Icon(name="iconamoon:arrow-down-2-fill" width="36px" height="36px")
        div(class="space-x-3 text-sm flex items-center text-darkblue")
          span
            Icon(name="uil:user" width="36px" height="36px") My profile
          NuxtLink(to="/cart" class="flex items-center gap-x-1")
            Icon(name="icons8:box" width="16px" height="16px") {{ cartList.length }}
            span(class="text-primary") $ {{totalPrice}}
          Icon(
            class="text-primary"
            name="lucide:search"
            width="15px"
            height="15px")
  div(class="md:w-[640px] w-full mx-auto flex my-10 flex-col justify-between items-center h-[90px]")
        img(src='../../public/img/logo.svg')
        ul(class="w-full flex items-center justify-between text-sm px-4")
          li
          NuxtLink(to="/" active-class=" text-blue") Home
          li 
          NuxtLink(to="/productslist") Store
          li 
          NuxtLink(to="/") IPHONE
          li 
          NuxtLink(to="/") IPAD
          li 
          NuxtLink(to="/") MACBOOK
          li 
          NuxtLink(to="/") ACCESORIES
</template>

<script setup lang="ts">
import { useCartStore } from "~/store/useAddToCart";
const { cartList } = useCartStore();
const totalPrice =  computed(() => {
 return cartList.map((item)=>item.price).reduce((ac,prod)=>{return ac+prod},0)

})
</script>

<style scoped></style>
