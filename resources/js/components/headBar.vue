<template>
<div>
    <div class="header header-fixed header-logo-center">
        <router-link :to="{name: 'home2'}" class="header-title">HomeNet</router-link>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-arrow-left"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-4"><i class="fas fa-lightbulb"></i></a>
    </div>
</div>
</template>

<script>
export default {
    name: "headBar",

    mounted() {
        console.log('Component headBar mounted')
    }
}
</script>

<style scoped>

</style>
