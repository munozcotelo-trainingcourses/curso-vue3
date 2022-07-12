<script lang="ts">

    import * as vue from "vue";

    import ComponenteH1 from "./ComponenteH1.vue";
    import ComponenteP  from "./ComponenteP.vue";
    import Watch        from "./Watch.vue";

    import { IUserDTO } from "./../dto/IUserDTO.class";

    export default vue.defineComponent( {

        name       : "App",
        components : {

            ComponenteH1 : ComponenteH1,
            ComponenteP  : ComponenteP,
            Watch        : Watch,
        },

        data() {

            return {
                userOne : { name : "Pepito", surname : "Perez", age : 20, } as IUserDTO,
            };

        },

    } );

</script>

<template>

    <div>

        <!-- <ComponenteH1 text="Hello world (prop)!!" /> -->
        <!-- <ComponenteP text="Good bye (prop)" v-bind:user=userOne> </ComponenteP> -->

        <Watch />

    </div>

</template>
