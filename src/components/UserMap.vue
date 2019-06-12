<template>
	<div>
		{{user.latitude}}
		<br>
		{{user.longitude}}
		<br>
		<GoogleMapLoader :mapConfig="mapConfig" apiKey class="user-map">
			<template slot-scope="{ google, map }">
				<GoogleMapMarker
					v-for="marker in markers"
					:key="marker.id"
					:marker="marker"
					:google="google"
					:map="map"
				/>
			</template>
		</GoogleMapLoader>
	</div>
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
	data() {
		return {
			markers: [
				{
					id: "a",
					position: {
						lat: 3,
						lng: 101
					}
				}
			]
		};
	},

	computed: {
		mapConfig() {
			return {
				...mapSettings,
				center: this.mapCenter
			};
		},
		mapCenter() {
			return this.markers[0].position;
		}
	},
};
</script>


<style lang="scss" scoped>
.user-map {
	height: 400px;
	margin-top: 5rem;
}
</style>
