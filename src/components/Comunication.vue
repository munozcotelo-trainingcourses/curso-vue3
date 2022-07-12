<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "Comunication",

        props : {

            sumando : {

                type     : Number as vue.PropType<number>,
                required : false,
                default  : 1,

            },

        },

        emit : [ "evento_sumado" ],

        data() : Record<string, unknown>{

            return {
                contador : 0 as number,
            };

        },

        // computed : {
        // },

        // watch : {
        // },

        methods : {

            doSuma() : number {

                this.contador += this.sumando;

                return this.contador;

            },

            sumar( event : Event ) : void {

                this.contador += this.sumando;
                this.$emit( "evento_sumado", this.contador );

            },

        },

        // beforeCreate() : void {
        // },

        // created  () : void {
        // },

    } );

</script>

<template>

    <div>

        <h2>Eventos</h2>
        <div>

            <h3>Comunicacion por eventos <em>nativos</em></h3>
            <button v-on:click="sumar">Sumar (evento en codigo)</button>
            <br/>
            <button v-on:click="$emit( 'evento_sumado', doSuma() )">Sumar (evento en plantilla)</button>

        </div>

        <p>Contador : {{ contador }}</p>



    </div>

</template>


