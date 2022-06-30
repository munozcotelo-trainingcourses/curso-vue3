<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "UnComponente",

        beforeCreate() {
            console.info( "UnComponente beforeCreate" );
        },

        created : function () {
            console.info( "UnComponente created" );
        },

    } );

</script>

<template>
    <div>
        Soy un componente
    </div>
</template>

