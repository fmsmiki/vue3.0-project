<template>
  <div id="app">
		<router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html,body {
	width: 100%;
	height: 100%;	
	background: #FFFFFF;
}
.moon {
	filter: invert(1) hue-rotate(180deg);			
}
#app {
  width: 100%;
  height: 100%;
}
</style>
