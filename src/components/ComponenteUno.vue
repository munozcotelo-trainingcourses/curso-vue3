<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteUno",

        created() : void {
            console.info( "ComponentUno created" );
        },

        data() : Record<string, unknown> {

            return {
                contador : 0,
            };

        },

        methods : {

            userClick() : void {
                this.contador +=1;
            },

        },

    } );

</script>

<template>

    <div>

        <h2>ComponentUno {{ contador }}</h2>
        <button v-on:click="userClick">Incremento contador</button>

    </div>

</template>
