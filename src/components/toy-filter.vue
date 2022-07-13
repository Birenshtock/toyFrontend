<template>
<section class="filter-container">
        <label> Search a toy: </label>

        <input  type="text" @input="setFilter" placeholder="Search by toy name...." v-model="filterBy.name">


        <select @change="setFilter" v-model="filterBy.status">
         <option value="all">Select status</option>
      <option v-for="(opt, idx) in stockOptions" :value="opt" :key="idx">
        {{ opt }}
      </option>
        </select>
       
    </section>
  
</template>

<script>


export default {
    data() {
        return {
            filterBy: {
                 name: '',
                 status: 'all',
                //  byLabel: [],
                //  bySort: '',
            },
            stockOptions: ['In stock', 'Out of stock'],
        }
    },
    
  props: {
   
  },
  components: {
   
  },
  methods: {
    setFilter() {
        //  this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
         this.$emit('setFilter', (this.filterBy))
        }
  },
}
</script>
