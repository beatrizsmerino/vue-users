<template>
	<GoogleMapLoader
		:mapConfig="mapConfig"
		apiKey="AIzaSyBXWWIWi9ERuFzOKpYdMzJC2tOn6YiA4Pk"
		class="user-map">
		<template #default="{ google, map }">
			<GoogleMapMarker :marker="marker" :google="google" :map="map"/>
		</template>
	</GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";

import { mapSettings } from "@/constants/mapSettings";

export default {
	components: {
		GoogleMapLoader,
		GoogleMapMarker
	},
	props: ["user"],
	computed: {
		marker(){
			return {
				position: {
					lat: parseFloat(this.user.latitude),
					lng: parseFloat(this.user.longitude),
				}
			}
		},
		mapCenter() {
			return this.marker.position;
		},
		mapConfig() {
			return {
				...mapSettings,
				center: this.mapCenter
			};
		},
	}
};
</script>


<style lang="scss" scoped>
.user-map {
	height: 400px;
	margin-top: 5rem;
}
</style>
