<script setup lang="ts" generic="T">
	defineProps<{ value: T }>()
</script>	

<template>
	<div>Hello from generic component {{ value }}</div>
</template>
