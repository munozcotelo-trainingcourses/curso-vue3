<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteP",

        props : {

            text : {
                type     : String as vue.PropType<string>,
                required : true,
            },

        },

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
        <h1>{{ text }}</h1>
    </div>
</template>

