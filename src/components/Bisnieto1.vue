<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "Bisnieto1",

        inject:  [ "hardcodedString", "var_estado", "var_estado_reactivo", "obj_estado", "metodo" ],

        created() : void {
            console.info( "var_estado", this.var_estado );
            // setTimeout( () => {
            //     console.info( "dos segundo" );
            //     Reflect.apply( this.metodo, null, [] );
            // }, 2000 );
        },

        methods : {
            doClick() : void {
                Reflect.apply( this.metodo, null, [] );
            },
        },

    } );

</script>

<template>

    <div>

        <h2>Bisnieto1</h2>

        <ul>
            <li>{{ hardcodedString }}</li>
            <li>{{ var_estado }}</li>
            <li>{{ var_estado_reactivo }}</li>
            <li>{{ obj_estado }}</li>
            <li>{{ metodo }}</li>
        </ul>
        <button v-on:click="doClick">incremento {{ var_estado_reactivo }} - {{ obj_estado.a }}</button>

    </div>

</template>
