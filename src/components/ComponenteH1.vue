<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteH1",

        props : {

            text : {
                type     : String as vue.PropType<string>,
                required : true,
            },

        },

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
        <h1>{{ text }}</h1>
    </div>
</template>

