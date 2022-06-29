<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {
        name : "ComponenteP",

        beforeCreate() {
            console.info( "ComponenteP - Before create hook" );
        },

        created : () => {
            console.info( "ComponenteP - Before created" );
        }

    } );

</script>

<template>
    <div>
        <p>Good bye</p>
    </div>
</template>

