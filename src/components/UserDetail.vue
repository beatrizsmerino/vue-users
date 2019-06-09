<template>
	<div class="user-detail-data">
		<div class="user-detail-data__group user-detail-data__image">
			<img :src="user.imageLarge" alt="">
		</div>

		<div class="user-detail-data__group user-detail-data__name">
			<p>
				<strong class="user-detail-data__label">Name:</strong> {{user.name.title}} {{user.name.first}} {{user.name.last}}
			</p>
			<p>
				<strong class="user-detail-data__label">Username:</strong> {{user.username}}
			</p>
		</div>

		<div class="user-detail-data__group">
			<p>
				<strong class="user-detail-data__label">Gender:</strong> {{user.gender}}
			</p>
			<p>
				<strong class="user-detail-data__label">Nationality:</strong> {{user.nationality}}
			</p>
		</div>

		<div class="user-detail-data__group user-detail-data__location">
			<p>
				<strong class="user-detail-data__label">State:</strong> {{user.state}}
			</p>
			<p>
				<strong class="user-detail-data__label">City:</strong> {{user.city}}
			</p>
			<p>
				<strong class="user-detail-data__label">Street:</strong> {{user.street}}
			</p>
			<p>
				<strong class="user-detail-data__label">Postcode:</strong> {{user.postcode}}
			</p>
		</div>

		<div class="user-detail-data__group user-detail-data__contact">
			<p>
				<strong class="user-detail-data__label">Email:</strong> {{user.email}}
			</p>
			<p>
				<strong class="user-detail-data__label">Phone:</strong> {{user.phone}}
			</p>
			<p>
				<strong class="user-detail-data__label">Cell:</strong> {{user.cell}}
			</p>
		</div>
		
		<div class="user-detail-data__group">
			<p>
				<strong class="user-detail-data__label">Registered:</strong> {{user.registered}}
			</p>
		</div>
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
.user-detail-data{
	max-width: 800px;
	margin: 0 auto;
	padding: 1rem;
	font-size: 1.5rem;
	background-color: var(--color-silver);

	&__label{
		color: var(--color-brand-1);
	}

	&__group{
		margin: 20px;
	}
}
</style>

