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

        computed : {

            aTextReversed () {

                return this.aText.split( "" ).reverse().join( "" );

            },

        },

        beforeCreate() {
            console.info( "UnComponente beforeCreate" );
        },

        created : function () {

            console.info( "UnComponente created"  );
            console.info( "UnComponente created props", this.$props,  );
            console.info( "UnComponente created aText", this.aText,  );

        },

    } );

</script>

<template>

    <div>

        Soy un componente
        <p>Propiedad aText: {{ aText }}</p>
        <p>Propiedad aNumber: {{ aNumber }}</p>

        <p> La propiedad aText <strong>al reves</strong>: {{ aTextReversed }}</p>

    </div>

</template>
