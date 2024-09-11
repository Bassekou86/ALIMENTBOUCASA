<script>

import CasaNavbar from '../components/CasaNavbar.vue';
import CasaFooter from '../components/CasaFooter.vue';

export default {
    components: {
        CasaNavbar,
        CasaFooter,
    },

    props: {
        active: {
            type: String,
        }

    }
};

</script>

<template>
    <div class="wrapper">
        <header class="header-container">
            <CasaNavbar :active="active" />
        </header>
        <div class="pages-container">
            <slot></slot>
        </div>
        <footer class="footer">
            <CasaFooter />
        </footer>
    </div>
</template>

<style>
.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 0;
    margin: 0;
    background-color: #205af92b;
}

/* casaNavbar :active="active" */

header {
    line-height: 0.9;
    max-height: 130vh;
    width: 100%;
}

.header-container {
    position: sticky;
    top: 0;
    z-index: 1000;


}

.pages-container {
    width: 90vw;
    height: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 50px 0px 50px 0px;
    background-color: white;
    border: solid 1px #205af92b;
    position: relative;
    border: 0 solid #205af992;
    border-width: 0 1px 0 1px;
    z-index: 1;
    /* box-shadow: 4px 0 4px -2px #205af992, -4px 0 4px -2px #205af992; */
}

.footer {
    position: relative;
    width: 100%;
}

@media(max-width: 900px) {
    .pages-container {
        width: 90%;

    }
}
</style>