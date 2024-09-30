<script lang="ts">
	import { page } from '$app/stores';
	
	$: slug = $page.params.slug;

</script>

<section class="container section">
	<h1>Current Slug: {slug}</h1>
</section>
