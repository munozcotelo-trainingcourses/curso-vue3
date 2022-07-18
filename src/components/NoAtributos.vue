<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "NoAtributos",

        inheritAttrs : false,

        props: {
            tag: String as vue.PropType<string>,
        },

    } );

</script>

<template>

    <div class="component">

        <h2>No quiero herencia de atributos</h2>

    </div>

</template>

