<script lang="ts">

    import * as vue from "vue";

    import ComponenteRenderizado from "./ComponenteRenderizado.vue";

    export default vue.defineComponent( {

        name : "Renderizado",

        components : {

            ComponenteRenderizado  : ComponenteRenderizado,
        },

        props : {

            verdadero : {

                type     : Boolean as vue.PropType<boolean>,
                required : true,

            },

        },

        data() : Record<string, unknown>{

            return {

                rawHtml  : "<span style=\"color : red\">This should be red.</span>" as string,
                contador : 0 as number,

                unArray : [ "a", "hola", "x" ] as string[],

                unObjeto : { a : "training", b : "gta", c : "ngcs" } as Record<string, string>,

            };

        },

        computed : {
        },

        watch : {
        },

        methods : {

            doClick() : void {
                this.contador +=1;
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

        <h2>Componente Renderizado</h2>

        <div>
            <h3>Se muestra si "verdadero" es true</h3>
            <p v-if="verdadero === true">Me muestro</p>
        </div>

        <div>
            <h3>Contenido html</h3>
            <p>MAL  : {{ rawHtml }}</p>
            <p v-html=rawHtml></p>
        </div>

        <div>
            <h3>Condicional</h3>
            <p>Contador : {{ contador }} => <button v-on:click="doClick()">Haz click</button></p>
            <p v-if="contador === 0">Cuando contador es 0</p>
            <p v-else-if="contador === 1">Cuando contador es 1</p>
            <p v-else>Cuando no es 0 ni 1</p>
        </div>

        <div>
            <h3>Bucle sobre un array</h3>
            <p v-for="item in unArray">
                {{ item }}
            </p>
        </div>

        <div>
            <h3>Bucle sobre un array. Mejor con indice</h3>
            <p v-for="( item, index ) in unArray" v-bind:key="index">
                {{ item }} ( {{ index }} )
            </p>
        </div>

        <div>
            <h3>Bucle sobre un objeto. Mejor con indice</h3>
            <p v-for="( value, key ) in unObjeto" v-bind:key="key">
                {{ key }} : {{ value }}
            </p>
        </div>

        <div>
            <h3>Uso de <strong>template</strong></h3>
            <ul>
            <template v-for="( value, key ) in unObjeto" v-bind:key="key">
                <li>{{ key }} : {{ value }}</li>
            </template>
            </ul>
        </div>

        <div>
            <h3>Bucle actuando sobre un componente</h3>
            <ComponenteRenderizado v-for="( value, key ) in unObjeto" v-bind:key="key" v-bind:valor=value />
        </div>

    </div>

</template>
