<script lang="ts">

    import * as vue from "vue";

    import UnComponente from "./UnComponente.vue";

    export default vue.defineComponent( {
        name : "App",

        components : {

            UnComponente : UnComponente,
            AComponente  : UnComponente,
        },

        data() {

            return {
                contador : 0,
            };

        },

        created() {

            console.info( "App created, data: ", this.$data  );

            setInterval( () => {
                this.contador +=1;
            }, 2000 );

        }

    } );

</script>

<template>

    <div>

        <p>Hello from App</p>

        <p>Mis propios datos: contador = {{ contador }}</p>

        <UnComponente aText="Soy un texto" aNumber="5"/>
        <AComponente aText="Soy otro texto" aNumber="50"></AComponente>

    </div>

</template>
