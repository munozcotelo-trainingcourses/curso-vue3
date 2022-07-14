<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "SlotComponent",

        props : {
        },

        data() : Record<string, unknown>{

            return {
                name : "",
            };

        },

        computed : {
        },

        watch : {
        },

        methods : {
        },

        beforeCreate() : void {
        },

        created  () : void {
        },

    } );

</script>

<template>

    <div class="slot-component">

        <h2>Slot</h2>

        <div>
            <h3>Este es el contenido del componente</h3>
        </div>

        <div>
            <h3>Este es el contenido del padre</h3>
            <slot>
                <h4>Si el padre no dice nada puedo poner un contenido por defecto</h4>
            </slot>
        </div>

        <div>
            <h3>Para mas de un slot, hay que dar nombre</h3>
            <slot name="footer">
                <h4>Footer por defecto para el padre</h4>
            </slot>
        </div>

    </div>

</template>


