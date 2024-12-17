<script setup lang="ts">
import { useCounter } from '~/Composables/useFetchProduct';



const  { Fetcheddata}=  await useCounter();


console.log(Fetcheddata.value);


</script>

<template >
 
</template>
