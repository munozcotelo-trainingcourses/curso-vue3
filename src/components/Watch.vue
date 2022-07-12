<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "Watch",

        data() {

            return {

                operacion : "",
                resultado : 0,
                msg       : "",

            };

        },

        watch : {

            operacion( newOperacion: string, oldOperacion : string ) : void {

                // console.info( newOperacion, oldOperacion );

                switch( newOperacion ) {
                    case "sumar":
                    case "restar":
                        this.processOperation( newOperacion );
                        break;
                };
            },

        },

        methods : {

            processOperation( operation : string ) : void {

                this.msg = "Estoy pensando";

               setTimeout( () => {

                   const dato1 : number = Math.random() * 100;
                   const dato2 : number = Math.random() * 100;

                   if ( operation === "sumar" ) {
                       this.resultado = dato1 + dato2;
                   } else {
                       this.resultado = dato1 - dato2;
                   }

                   this.msg = "";

               }, 1500 );


            },

        },


    } );

</script>

<template>

    <div>

        <div>

            <input name="operacion" type="text" v-model="operacion"/>
            <br/>
            <p><strong>{{ msg }}</strong></p>
            <p>resultado : {{ resultado }}</p>

        </div>

    </div>

</template>

