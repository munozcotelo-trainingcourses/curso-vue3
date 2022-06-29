<script lang="ts">

    import * as vue from "vue";

    import ComponenteH1 from "./ComponenteH1.vue";
    import ComponenteP  from "./ComponenteP.vue";

    export default vue.defineComponent( {

        name       : "App",
        components : {

            ComponenteH1 : ComponenteH1,
            ComponenteP  : ComponenteP,
        },

    } );

</script>

<template>

    <div>

        <ComponenteH1/>
        <ComponenteP/>

    </div>

</template>
