<template>
	<div id="app">
		<myHeader></myHeader>
		<div id="my_content">
			<myMenu></myMenu>
			<div id="right">
				<div id="mycontent">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myHeader from '@/components/head/header';
	import myMenu from '@/components/left/menu';

	export default {
		name: 'App',
		components: {
			myHeader,
			myMenu
		}
	}
</script>

