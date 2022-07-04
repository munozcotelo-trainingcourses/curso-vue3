<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "ComponenteRenderizado",

        props : {
            valor : String as vue.PropType<string>,
        },

    } );

</script>

<template>

    <div>

        <h4>Prueba renderiza componente {{ valor }}</h4>

    </div>

</template>
