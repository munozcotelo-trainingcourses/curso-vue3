<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {
        name : "ComponenteH1",

        beforeCreate() {
            console.info( "ComponenteH1 - Before create hook" );
        },

        created : () => {
            console.info( "ComponenteH1 - Before created" );
        }

} );

</script>

<template>
    <div>
        <h1>Hello world!!</h1>
    </div>
</template>

