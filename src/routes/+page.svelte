<script>
	import { page } from '$app/stores';

	$: searchParams = $page.url.searchParams;

	$: myParam = searchParams.get('test');
</script>

<h1>Search Params: {myParam}</h1>
