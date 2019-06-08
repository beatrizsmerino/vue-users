<template>
	<div class="user-detail">
		<p>{{user.gender}}</p>
		<p>{{user.name.title}} {{user.name.first}} {{user.name.last}}</p>
		<p>{{user.id}}</p>
		<p>{{user.username}}</p>
		<p>{{user.street}}</p>
		<p>{{user.city}}</p>
		<p>{{user.state}}</p>
		<p>{{user.postcode}}</p>
		<p>{{user.latitude}}</p>
		<p>{{user.longitude}}</p>
		<p>{{user.email}}</p>
		<p>{{user.registered}}</p>
		<p>{{user.phone}}</p>
		<p>{{user.cell}}</p>
		<p>{{user.image}}</p>
		<p>{{user.nationality}}</p>
	</div>
</template>



<script>
export default {
	props: ["user"],
	data() {
		return {};
	}
};
</script>



<style lang="scss">
</style>

