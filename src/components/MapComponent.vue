<script>
import { onMounted } from "vue";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

export default {
  data() {
    return {};
  },

  props: {
    lat: String,
    lon: String,
  },
  setup(props) {
    onMounted(() => {
      const map = tt.map({
        key: "RRPZC1QxF3OriyrpAx5Cbd2ap0dpAhAk",
        container: "map",
        center: [props.lon, props.lat],
      });

      const marker = new tt.Marker()
        .setLngLat([props.lon, props.lat])
        .addTo(map);
      const bounds = new tt.LngLatBounds(
        marker.getLngLat(),
        marker.getLngLat()
      );
      map.fitBounds(bounds, { padding: 100, maxZoom: 15 }); // Adjust padding and maxZoom values as per your requirement
    });
  },
};
</script>

<template>
  <div id="map"></div>
  <ul class="liststyle">
    <li>
      
    </li>
    <li>
      
    </li>
  </ul>
</template>

<style>
#map {
  width: 100%;
  height: 400px;
}

.liststyle{
  list-style: none;
}
</style>
