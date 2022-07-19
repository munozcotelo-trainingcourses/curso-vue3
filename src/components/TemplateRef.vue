<script lang="ts">

    import * as vue from "vue";

    import TemplateRefHijo1 from "./TemplateRefHijo1.vue";
    import TemplateRefHijo2 from "./TemplateRefHijo2.vue";

    export default vue.defineComponent( {

        name : "TemplateRef",

        components : {

            TemplateRefHijo1 : TemplateRefHijo1,
            TemplateRefHijo2 : TemplateRefHijo2,

        },

        created() : void {
            console.info( "TemplateRef", this.$refs );
        },

        methods: {

            doFocus() : void {

                this.$refs.myInputRef.focus();
                console.info( "Hijo1", this.$refs.miHijo1 );
                console.info( "Hijo2", this.$refs.miHijo2 );
                this.$refs.miHijo1.doClick();
                this.$refs.miHijo2.doClick();

            },

        },

    } );

</script>

<template>

    <div class="component">

        <h2>TemplateRef</h2>

        <button v-on:click="doFocus">Poner foco</button>
        <input type="text" name="ref-input" value="" ref="myInputRef"/>

        <div>
            <p>Por consola se pueden ver los hijos tras pulsar en el boton "Poner Foco"</p>
            <TemplateRefHijo1 ref="miHijo1" />
            <TemplateRefHijo2 ref="miHijo2"/>
        </div>

    </div>

</template>

