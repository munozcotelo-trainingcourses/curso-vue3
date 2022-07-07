<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "Eventos",

        props : {
        },

        data() : Record<string, unknown>{

            return {
                contador : 0 as number,
            };

        },

        computed : {
        },

        watch : {
        },

        methods : {

            sumar( event : Event ) : void {

                console.info( "evento", event );
                this.contador++;

            },

            sumarN( n : number ) : void {

                this.contador += n;

            },

            sumarN_Evento( n : number, event: Event ) : void {

                console.info( "Evento", event );
                this.contador += n;

            },

        },

        beforeCreate() : void {
        },

        created  () : void {
        },

    } );

</script>

<template>

    <div>

        <h2>Eventos</h2>
        <div>

            <button v-on:click="contador++">Sumar 1 (en linea)</button>
            <br/>
            <button v-on:click="sumar">Sumar 1 (metodo)</button>

            <hr/>
            <button v-on:click="sumarN( 20 )">Sumar N (N=20)</button>

            <hr/>
            <button v-on:click="sumarN_Evento( 20, $event )">Sumar N (N=20) con evento</button>
            <br/>
            <button v-on:click="( event ) => sumarN_Evento( 20, event )">Sumar N (N=20) con evento Bis</button>

        </div>


        <div>
            <p>Contador: {{ contador }}</p>
        </div>

    </div>

</template>

