<script lang="ts">

    import * as vue from "vue";

    import Bisnieto1 from "./Bisnieto1.vue";

    export default vue.defineComponent( {

        name : "Nieto1",

        components : {

            Bisnieto1 : Bisnieto1,

        },

        data() : Record<string, unknown> {
            return {

                flagA    : true,
                flagB    : false,
                flagC    : true,
                objClass : {
                    claseA : true,
                    claseB : false,
                },

            };

        },

        inject:  [ "var_estado_reactivo", "obj_estado" ],

        provide() : Record<string, unknown> {

            return {
                hardcodedString: "string hardcoded from nieto",
            };

        },

    } );

</script>

<template>

    <div>

        <h2 class="static_class" v-bind:class="{ claseA: flagA, claseB : flagB, 'hola-mundo' : flagC }">Nieto1</h2>
        <h2 class="static_class" v-bind:class=objClass>Nieto1</h2>
        <ul>
            <li>{{ var_estado_reactivo }}</li>
            <li>{{ obj_estado }}</li>
        </ul>
        <hr/>
        <Bisnieto1/>

    </div>

</template>
