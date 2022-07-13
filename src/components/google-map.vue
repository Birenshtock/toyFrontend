<template>
  <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="13"
      map-type-id="terrain"
      style="width: 500px; height: 300px" >

       <GMapCluster>
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                :draggable="true" @click="center = m.position" />
        </GMapCluster>

  </GMapMap>


</template>

<script >
export default {
  name: 'google-map',
   data() {
        return {
            center: { lat: 32.088179, lng: 34.790144 },
            markers: [
                {
                    position: {
                        lat: 32.088179, lng: 34.790144
                    },
                },
                {
                    position: {
                        lat: 32.066278, lng: 34.830301
                    },
                },
                {
                    position: {
                        lat: 32.093869, lng: 34.882401
                    },
                }
                , // Along list of clusters
            ]
        }
    }
}
</script>