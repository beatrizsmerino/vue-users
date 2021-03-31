<template>
	<div class="leaflet-map">
		<l-map
			style="height: 100%"
			v-if="showMap"
			:zoom="zoom"
			:center="center"
			:options="mapOptions"
			@update:center="centerUpdate"
			@update:zoom="zoomUpdate"
		>
			<l-tile-layer
				:url="url"
				:attribution="attribution"
			/>
			<l-marker :lat-lng="withPopup">
				<l-popup>
					Current location:
					<p>
						Latitude: {{this.marker.position.lat}}
						<br />
						Longitude: {{this.marker.position.lng}}
					</p>
				</l-popup>
			</l-marker>
		</l-map>
	</div>
</template>

<script>
	import "leaflet/dist/leaflet.css";
	import { latLng, Icon } from "leaflet";
	import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";


	delete Icon.Default.prototype._getIconUrl;
	Icon.Default.mergeOptions({
		iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		iconUrl: require('leaflet/dist/images/marker-icon.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
	});

	export default {
		name: 'LeafletMapLoader',
		props: {
			marker: Object
		},
		components: {
			LMap,
			LTileLayer,
			LMarker,
			LPopup
		},
		data() {
			return {
				url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				center: latLng(this.marker.position.lat, this.marker.position.lng),
				currentCenter: latLng(this.marker.position.lat, this.marker.position.lng),
				withPopup: latLng(this.marker.position.lat, this.marker.position.lng),
				zoom: 3,
				currentZoom: 11.5,
				mapOptions: {
					minZoom: 2,
					maxZoom: 10,
					zoomSnap: 0.5
				},
				showMap: true
			};
		},
		methods: {
			zoomUpdate(zoom) {
				this.currentZoom = zoom;
			},
			centerUpdate(center) {
				this.currentCenter = center;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.leaflet-map {
		width: 100%;
		height: 100%;
	}
</style>
