


<template>
   <h1>dashboard page</h1>
   <chart-inventory/>
   <chart-price/>
</template>
<script>
import chartInventory from '../components/chart-inventory.vue'
import chartPrice from '../components/chart-price.vue'



export default {
    data() {
        return {
            
        }

    },
  
  computed: {
   
  },
  methods: {
    
  },
   created() {
    
    },
    components: {
   chartInventory,
   chartPrice,
  },
}
</script>


