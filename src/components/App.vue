<script lang="ts">

    import * as vue from "vue";

    // import UnComponente from "./UnComponente.vue";
    import Renderizado from "./Renderizado.vue";

    export default vue.defineComponent( {
        name : "App",

        components : {

            // UnComponente : UnComponente,
            // AComponente  : UnComponente,
            Renderizado  : Renderizado,
        },

        data() : Record<string, unknown> {

            return {

                // contador : 0,
                clicks : 0,

            };

        },

        computed : {

            booleano() : boolean {
                return ( this.clicks % 2 === 0 );
            },

        },

        created() : void {

            // console.info( "App created, data: ", this.$data  );
            //
            // setInterval( () => {
            //     this.contador +=1;
            // }, 2000 );

        },

        methods : {

            userClick() : void {
                this.clicks +=1;
            },

        },

    } );

</script>

<template>

    <div>

        <p>Hello from App</p>

        <!-- <p>Mis propios datos: contador = {{ contador }}</p> -->

        <p>Clicks del usuario: {{ clicks }}<button v-on:click="userClick()"> Haz click</button></p>

        <!-- <UnComponente aText="Soy un texto" v-bind:aNumber="5"/> -->
        <!-- <AComponente aText="Soy otro texto" v-bind:aNumber="50"></AComponente> -->

        <Renderizado v-bind:verdadero=booleano />

    </div>

</template>
