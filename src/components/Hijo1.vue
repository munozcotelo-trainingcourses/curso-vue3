<script lang="ts">

    import * as vue from "vue";

    import Nieto1 from "./Nieto1.vue";

    export default vue.defineComponent( {

        name : "Hijo1",

        components : {

            Nieto1 : Nieto1,

        },

        data() : Record<string, unknown> {

            return {
                var_estado : 100,
                obj_estado : {
                    a      : 100,
                },
            };

        },

        provide() : Record<string, unknown> {

            return {
                hardcodedString     : "string hardcoded",
                var_estado          : this.var_estado,
                var_estado_reactivo : vue.computed( () => this.var_estado ),
                obj_estado          : this.obj_estado,
                metodo              :  () => {
                    // this.var_estado += 100;
                    this.var_estado++;
                    this.obj_estado.a +=1;
                },
            };

        },

        methods : {
            doClick() : void {
                this.var_estado++;
                this.obj_estado.a +=1;
            },
        },

    } );

</script>

<template>

    <div>

        <h2>Hijo1</h2>
        <!-- <button v-on:click="doClick">incremento {{ var_estado }} - {{ obj_estado.a }}</button> -->
        <ul>
            <li>{{ var_estado }}</li>
            <li>{{ obj_estado }}</li>
        </ul>
        <hr/>
        <Nieto1/>

    </div>

</template>
