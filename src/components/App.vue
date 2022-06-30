<script lang="ts">

    import * as vue from "vue";

    import UnComponente from "./UnComponente.vue";

    export default vue.defineComponent( {
        name : "App",

        components : {

            UnComponente : UnComponente,
            AComponente  : UnComponente,
        },

    } );

</script>

<template>

    <div>
        <p>Hello from App</p>

        <UnComponente aText="Soy un texto" aNumber="5"/>
        <AComponente aText="Soy otro texto" aNumber="50"></AComponente>

    </div>

</template>
