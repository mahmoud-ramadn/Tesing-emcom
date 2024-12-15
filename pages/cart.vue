<template>
  <div class="min-h-screen">
    <div class="h-12 mb-14 bg-primary"></div>
    <div class="container mx-auto mt-[100px]">
      <div class="md:w-[1170px] mx-auto overflow-x-auto">
        <el-table
          :data="tableData"
          class="bg-purple-600 text-white"
          style="width: 100%"
        >
          <!-- Product Column -->
          <el-table-column prop="imge" label="PRODUCT" width="610">
            <template #default="{ row }">
              <div class="flex justify-between items-center">
                <div
                  class="w-6 h-6 cursor-pointer rounded-full bg-[#FF6875]/20 flex justify-center items-center"
                >
                  <Icon
                    name="iwwa:delete"
                    width="8px"
                    height="8px"
                    style="color: #ff4252"
                  />
                </div>
                <img
                  class="h-[130px] w-[130px] object-cover"
                  :src="row.imge"
                  alt="Product Image"
                />
                <p class="text-base font-semibold leading-7 text-darkblue">
                  {{ row.titel }}
                </p>
              </div>
            </template>
          </el-table-column>

          <!-- Price Column -->
          <el-table-column prop="name" label="PRICE" width="140">
            <template #default="{ row }">
              <span>{{ row.price }}</span>
            </template>
          </el-table-column>

          <!-- Quantity Column (Adjusted for Full Width on Small Screens) -->
          <el-table-column prop="address" label="QTY">
            <template #default="{ row }">
              <div class="w-full">
                <el-input-number
                  v-model="num"
                  :min="1"
                  :max="11"
                  @change="handleChange"
                  class="w-full"
                />
              </div>
            </template>
          </el-table-column>

          <!-- Unit Price Column -->
          <el-table-column prop="address" label="UNIT PRICE" width="149">
            <template #default="{ row }">
              <span>{{ row.unitprice }}</span>
            </template>
          </el-table-column>
        </el-table>

        <div class="mt-28 md:mb-[161px] flex items-start justify-between">
          <div class="relative md:w-[360px] w-full rounded-md overflow-hidden">
            <div
              class="absolute right-0 top-0 text-white bg-blue w-[120px] h-[60px] flex items-center justify-center"
            >
              <span>Redeem</span>
            </div>
            <input
              type="text"
              placeholder="Voucher code"
              class="pl-5 w-full h-[60px] border-[2px] focus:outline-none"
            />
          </div>

          <div class="w-[370px] h-[316px] bg-green-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const num = ref(1);
const handleChange = (value: number) => {
};

const tableData = [
  {
    imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    titel: "Philips Hue 7W BR30 Connected Downlight Lamp",
    price: "$998",
    unitprice: "$499",
  },
  {
    imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    titel: "Philips Hue 7W BR30 Connected Downlight Lamp",
    price: "$998",
    unitprice: "$499",
  },
  {
    imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    titel: "Philips Hue 7W BR30 Connected Downlight Lamp",
    price: "$998",
    unitprice: "$499",
  },
  {
    imge: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    titel: "Philips Hue 7W BR30 Connected Downlight Lamp",
    price: "$998",
    unitprice: "$499",
  },
];
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
