<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "TemplateRef",

        created() : void {
            console.info( "TemplateRef", this.$refs );
        },

        methods: {

            doFocus() : void {

                this.$refs.myInputRef.focus();
            },

        },

    } );

</script>

<template>

    <div class="component">

        <h2>TemplateRef</h2>

        <button v-on:click="doFocus">Poner foco</button>
        <input type="text" name="ref-input" value="" ref="myInputRef"/>

    </div>

</template>

