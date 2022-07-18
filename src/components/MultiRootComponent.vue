<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "MultiRootComponent",

        props: {
            tag: String as vue.PropType<string>,
        },

    } );

</script>

<template>

    <div class="component">

        <h2>Multi root nodo 1</h2>

    </div>

    <div class="component">

        <h2>Multi root nodo 1</h2>

    </div>

</template>
