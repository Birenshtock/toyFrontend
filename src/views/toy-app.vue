<template>
<h1>Toy Apppppp</h1>
<toy-filter @setFilter="setFilter"/>
<add-toy  @saveToy="saveToy"/>



 <toy-list @removeToy="removeToy" :toys="toys"></toy-list>
</template>

<script>
import { toyService } from '../services/toy-service.js'
import toyList from '../components/toy-list.vue'
import addToy from '../components/add-toy.vue'
import toyFilter from '../components/toy-filter.vue'

export default {
  name: 'toy-app',
  data() {
    return {
    
       filterBy: {
       name:'',
        status: 'all',
       },
    
    }
  },
  computed: {
     toys() {
      return this.$store.getters.toys
    },
    // toysForDisplay(){
    //   const regex = new RegExp(this.filterBy.name, 'i')
   
    
    //    if (!this.filterBy) return this.toys
    
    //     return this.toys.filter((toy) => regex.test(toy.name))
      

    // }
   
  },
  created() {
   
    this.$store.dispatch({ type: 'loadToys',filterBy:this.filterBy })

  },
  methods: {
     setFilter(filterBy) {
                  console.log('llhhhh', filterBy)
      // this.filterBy = filterBy
                  this.$store.dispatch({ type: 'loadToys', filterBy,})

      //  this.$store.commit({ type: 'setFilter', filterBy })
    },
   
     removeToy(toyId) {

            this.$store.dispatch({ type: 'removeToy', toyId, })
                .then((toys) => {
                  console.log('toy removed')
                    // showSuccessMsg('Todo removed ')
                })
                .catch(err => {
                    console.log('toy not removed')
                    // showErrorMsg('Cannot remove todo')
                })
        },
        saveToy(newToy){
            this.$store.dispatch({
                    type: 'saveToy',
                    toy:newToy,
                })
                .then((toys) => {
                  console.log('toy added')
                    // showSuccessMsg('Product saved')
                })
                .catch(err => {
                  console.log('toy not added')
                    // showErrorMsg('Cannot save product')
                })


        }
   
  
  },
  components: {
    toyList,
    toyFilter,
    addToy,
  },
}
</script>
