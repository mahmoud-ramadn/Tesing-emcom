<template lang="pug">
  div(class="w-full mt-[141px] h-[551px]")
    div(class="md:w-[1171px] md:h-[489px] mx-auto flex justify-between flex-col items-start gap-3 px-8")
      div(class="w-full grid md:grid-cols-3 grid-cols-1 md:h-[165px] my-6")
        div(class="col-span-1 flex gap-5 flex-col")
          h1(class="text-4xl font-bold text-primary") Bouncer
          p(class="text-xs font-normal leading-5")
            | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Since the 1500s, when an unknown printer.
        div(class="col-span-1 flex gap-5 flex-col")
          h1(class="text-darkblue font-semibold text-lg") Follow Us
          p(class="text-xs font-normal leading-5")
            | Since the 1500s, when an unknown printer took a galley of type and scrambled.
          div(class="space-x-3")
            Icon(name="basil:facebook-solid" class="text-sm")
            Icon(name="logos:twitter" class="text-sm")
        div(class="col-span-1 flex gap-5 flex-col")
          h1(class="text-darkblue font-semibold text-lg") Contact Us
          p(class="text-xs font-normal leading-5")
            | My Company, 4578 Marmora Road, Glasgow D04 89GR. Call us now: 0123-456-789. Email: support@whatever.com
      div(class="w-full grid md:grid-cols-6 grid-cols-1 my-6 md:h-[167px]")
        div(v-for="(section, index) in sections" :key="index" class="col-span-1")
          h2(class="text-lg font-semibold leading-7 text-darkblue") {{ section.title }}
          h3(v-for="(link, idx) in section.links" :key="idx" class="text-sm font-thin text-darkblue/85") {{ link }}
      div(class="w-full h-full flex justify-end")
        div(class="flex items-center gap-5")
          img(src="/public/img/footeImg/Western-union.svg" alt="Western Union")
          img(src="/public/img/footeImg/Group 19.svg" alt="Group 19")
          img(src="/public/img/footeImg/Paypal.svg" alt="Paypal")
          Icon(name="logos:visaelectron" width="256" height="128")
  </template>
  
  <script setup>
  const sections = [
    {
      title: "Information",
      links: ["About Us", "Privacy Policy", "Terms & Conditions"],
    },
    {
      title: "Services",
      links: ["Shipping Policy", "Return Policy", "Support"],
    },
    {
      title: "Contact",
      links: ["FAQs", "Track Order"],
    },
    {
      title: "Contact",
      links: ["FAQs", "Track Order"],
    },
    {
      title: "Contact",
      links: ["FAQs", "Track Order"],
    },
    {
      title: "Contact",
      links: ["FAQs", "Track Order"],
    },
  ];
  </script>
  
  <style scoped>
  /* أضف أي تنسيق هنا */
  </style>
  