<template>
    <div class="notFound">
        <h3>404:- Page not found! 😥🤧</h3>
    </div>
</template>

<script setup>

</script>

<style scoped>
.notFound {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        width: 80%;
        height: 80%;
        padding: 2rem;
        background-color: var(--color-set-2);
        display: flex;
        text-align: center;
        justify-content: center;
        border-radius: .5rem;
    }
}
</style>