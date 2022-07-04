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

        data() : Record<string, unknown>{

            return {

                variable1 : "variable1 is a text",
                variable2 : 25,

            };

        },

        computed : {

            aTextReversed () : string {

                return this.aText.split( "" ).reverse().join( "" );

            },

            fullVariable : {

                get() : string {
                    return `${ this.variable1 }#${ this.variable2 }`;
                },

                set( fullVariable : string ) : void {

                    const parts : string[] = fullVariable.split( "#" );

                    this.variable1 = parts[ 0 ];
                    this.variable2 = parseInt( parts[ 1 ] );

                }

            },

        },

        beforeCreate() : void {
            console.info( "UnComponente beforeCreate" );
        },

        // created : function () {
        created  () : void {

            console.info( "UnComponente created"  );
            console.info( "UnComponente created props", this.$props,  );
            console.info( "UnComponente created aText", this.aText,  );

            setTimeout( () => {
                this.fullVariable = "hola mundo#456";
            }, 2000 );

        },

    } );

</script>

<template>

    <div>

        Soy un componente
        <p>Propiedad aText: {{ aText }}</p>
        <p>Propiedad aNumber: {{ aNumber }}</p>

        <p> La propiedad aText <strong>al reves</strong>: {{ aTextReversed }}</p>

        <div>
            <p>variable1 : {{ variable1 }}</p>
            <p>variable2 : {{ variable2 }}</p>
            <p>Variable computada <strong>con get y set</strong>: {{ fullVariable }}</p>
        </div>

    </div>

</template>
