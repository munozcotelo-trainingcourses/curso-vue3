<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "MonoRootComponent",

        props: {
            tag: String as vue.PropType<string>,
        },

    } );

</script>

<template>

    <div class="component">

        <h2>Mono root</h2>

    </div>

</template>
