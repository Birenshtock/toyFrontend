


<template>
   <section class="add-toy-container" >
       <h1>Add Toy </h1>
        <form @submit.prevent="addToy">
            <input type="text"
            placeholder="Toy name"
            v-model="toyToAdd.name">
            
            <input type="text"
            placeholder="Toy price"
            v-model="toyToAdd.price">

             <select @change="setLabel" v-model="labelValue">
         <option value="all">Select label</option>
      <option v-for="(opt, idx) in labels" :value="opt" :key="idx">
        {{ opt }}
      </option>
       </select>


           
            <button>Save</button>
        </form>
    </section>

</template>

<script>
import { toyService } from '../services/toy-service.js'


export default {
    data() {
        return {
             toyToAdd: toyService.getEmptyToy(),
              labels: ['On wheels', 'Box game', 'Art','Baby','Doll','Puzzle','Outdoor'],
              labelValue: ""
        }

    },
  
  computed: {
    // setLabel(){
    //     return this.toyToAdd.labels.push(this.labelValue)
    // }
    
  },
  methods: {
    addToy(){
        const newToy ={...this.toyToAdd}
         this.$emit('saveToy',newToy)
        console.log('gggg',newToy)
    },
    setLabel(){
        return this.toyToAdd.labels.push(this.labelValue)
    }
   
  },
   created() {
    
    },
}
</script>
