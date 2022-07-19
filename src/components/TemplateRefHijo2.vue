<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "TemplateRefHijo2",

        data() : Record<string, unknown> {

            return {

                miDato: 100 as number,
                otroDato: 10 as number,

            };

        },

        expose : [ "miDato", "doClick" ],

        methods: {

            doClick() : void {

                this.miDato++;
            },

        },

    } );

</script>

<template>

    <div class="component">

        <h2>TemplateRef Hijo2</h2>

        <p>Mi dato {{ miDato }}</p>
        <button v-on:click="doClick">Click</button>

    </div>

</template>



