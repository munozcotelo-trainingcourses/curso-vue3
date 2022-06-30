<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "UnComponente",

        props : {

            aText : {

                type     : String as vue.PropType<string>,
                required : true,

            },

            aNumber : Number as vue.PropType<number>,

            },

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
        <p>Propiedad aText: {{ aText }}</p>
        <p>Propiedad aNumber: {{ aNumber }}</p>

    </div>

</template>
