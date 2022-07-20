    <script lang="ts">

    import * as vue from "vue";

    import { amgarciaMixin } from "./../mixins/amgarcia-mixin";
    import { otroMixin }     from "./../mixins/otro-mixin";

    export default vue.defineComponent( {

        name: "MixinComponent",

        mixins : [ otroMixin, amgarciaMixin ],
        // mixins : [ amgarciaMixin, otroMixin ],

        data () : Record<string, unknown> {

            return {

                ownproperty : 25 as number,
                conflicted  : "estoy en el componente" as string,

            };

        },

        computed : {

            owncomputed () : string {

                return this.ownproperty + "_computed_in_component";
            },

            conflictedComputed () : string {

                return Math.random() + "_computed_in_component";
            },

        },

        methods : {

            sayHello () : void {
                console.info( "Hello from the component" );
            },

            sayBye : () => {
                console.info( "Bye bye from the component" );
            },

        },

        created () : void {

            console.info( "Created del componente - data.ownproperty", this.ownproperty );
            console.info( "Created del componente - data.message", this.message );
            console.info( "Created del componente - data.conflicted", this.conflicted );

        },

        mounted () : void {

            this.sayHello();
            this.sayGoodMoring();
            this.sayBye();

        },

    } );

</script>

<template>

    <div class="component">
        <h1>Mixins Component</h1>

        <h2>Data</h2>
        <ul>
            <li>data.ownproperty, no hay conflicto, es el del componente: {{ ownproperty }}</li>
            <li>data.message, no hay conflicto, es el del mixin: {{ message }}</li>
            <li>data.conflicted, hay conflicto, prevalece el componente: {{ conflicted }}</li>
        </ul>

        <h2>Methods</h2>
        <p>Por consola</p>

        <h2>Computed</h2>
        <ul>
            <li>computed.owncomputed, no hay conflicto, es el del componente: {{ owncomputed }}</li>
            <li>computed.mycomputed, no hay conflicto, es el del mixin: {{ mycomputed }}</li>
            <li>computed.conflictedComputed, hay conflicto, prevalece el componente: {{ conflictedComputed }}</li>
        </ul>

    </div>

</template>
