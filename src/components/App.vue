<script lang="ts">

    import * as vue from "vue";

    // import UnComponente  from "./UnComponente.vue";
    // import Renderizado   from "./Renderizado.vue";
    // import Eventos       from "./Eventos.vue";
    // import Comunication  from "./Comunication.vue";
    import SlotComponent from "./SlotComponent.vue";

    export default vue.defineComponent( {
        name : "App",

        props : {

            numero : Number as vue.PropType<number>,
        },

        components : {

            // UnComponente  : UnComponente,
            // AComponente   : UnComponente,
            // Renderizado   : Renderizado,
            // Eventos       : Eventos,
            // Comunication  : Comunication,
            SlotComponent : SlotComponent,

        },

        data() : Record<string, unknown> {

            return {

                // contador : 0,
                clicks      : 0,
                titulo      : 0,
                atributo    : "id",
                suma        : 0,

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

            setInterval( () => {
                this.titulo +=1;
            }, 1000 );


        },

        methods : {

            userClick() : void {
                this.clicks +=1;
            },

            changeAtributo() : void {
                this.atributo = ( this.atributo === "id" ) ? "class" : "id"
            },

            updateSuma( data : number ) : void {
                console.info( "this", this );
                this.suma = data;
            },

        },

    } );

</script>

<template>

    <div>

        <p>Hello from App</p>

        <!-- <p>Mis propios datos: contador = {{ contador }}</p> -->

        <!-- <p v-bind:[atributo]="`element-${ titulo }`"> -->
        <!--     Clicks del usuario: {{ clicks }} -->
        <!--     <strong><span v-bind:title="`titulo-${ titulo }`">coloca el raton encima para ver el title. Quita y pon para ver que cambia</span></strong> -->
        <!--     <button v-on:click="userClick()"> Haz click</button> -->
        <!-- </p> -->
        <!-- <p> -->
        <!--     El atributo del parrafo anterior es {{ atributo }} <strong>Mira en el inspector de elemento para comprobar el cambio</strong> -->
        <!--     <br/> -->
        <!--     <button v-on:click="changeAtributo()">Click para cambiar el atributo</button> -->
        <!-- </p> -->

        <!-- <p>Clicks del usuario: {{ clicks }}<button v-on:click="userClick()"> Haz click</button></p> -->

        <!-- <UnComponente aText="Soy un texto" v-bind:aNumber="5"/> -->
        <!-- <AComponente aText="Soy otro texto" v-bind:aNumber="50"></AComponente> -->

        <!-- <Renderizado v-bind:verdadero=booleano /> -->

        <!-- <Eventos /> -->

        <p>Suma : {{ suma }}</p>

        <!-- <Comunication v-bind:sumando="2" v-on:evento_sumado="updateSuma" v-bind:callback="updateSuma" /> -->

        <SlotComponent></SlotComponent>

        <SlotComponent>
            <p>Soy el papa y meto mi contenido
            <button v-on:click="updateSuma( 17)">Dale que soy yo</button></p>
        </SlotComponent>

        <SlotComponent>
            <p>Soy el papa y meto mi contenido</p>
            <template v-slot:footer="pipe"><p>Soy papa y este es mi footer <strong>{{ pipe }}</strong></p></template>
        </SlotComponent>

    </div>

</template>
