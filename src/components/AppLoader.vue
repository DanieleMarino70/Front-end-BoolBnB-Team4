<script>
export default {
    name: 'AppLoader',
};
</script>

<template>
    <div class="layover">
        <h1> Caricamento in corso </h1>
        <div class="hourglass"></div>
    </div>
</template>

<style lang="scss" scoped>
.layover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    color: white;
}

.hourglass {
    // background: #002265;
    /* Border stuff to make the outline */
    border-top: 20px solid #ffffff;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 20px solid #ffffff;
    border-radius: 10px / 25px;

    /* Sizing to make the hourglass display nicely */
    height: 0px;
    width: 10px;

    /* Uncomment next 2 lines for spin animation */
    animation: spin 1.25s infinite linear;
    margin: 25px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(10deg);
    }

    40% {
        transform: rotate(-20deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>