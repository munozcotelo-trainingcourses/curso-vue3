<script lang="ts">

    import * as vue from "vue";

    import UnComponente from "./UnComponente.vue";

    export default vue.defineComponent( {
        name : "App",

        components : {

            UnComponente : UnComponente,
            AComponente  : UnComponente,
        },

        data() : Record<string, unknown> {

            return {
                contador : 0,
                clicks   : 0,
                miTexto  : "",
            };

        },

        created() : void {

            console.info( "App created, data: ", this.$data  );

            setInterval( () => {

                this.contador +=1;
                this.miTexto = "Adios mundo cruel " + Math.random();

            }, 2000 );

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

        <p>Mis propios datos: contador = {{ contador }}</p>

        <p>Clicks del usuario: {{ clicks }}<button v-on:click="userClick()">Haz click</button></p>

        <UnComponente aText="Soy un texto" v-bind:aNumber="5"/>

        <AComponente v-bind:aText="miTexto" v-bind:aNumber="50"></AComponente>

    </div>

</template>
