<script lang="ts">

    import * as vue from "vue";

    import Bisnieto1 from "./Bisnieto1.vue";

    import { compositionDataMethods } from "./../composition/composition-data-methods";
    import { compositionComputed }    from "./../composition/composition-computed";
    import { hooksComposition }       from "./../composition/composition-hooks";
    import { provideInject }          from "./../composition/composition-provide-inject";

    export default vue.defineComponent( {

        name : "CompositionApiComponent",

        props: {

            tag   : String as vue.PropType<string>,
            prop1 : String as vue.PropType<string>,
            prop2 : String as vue.PropType<string>,

        },

        components : {

            Bisnieto1  : Bisnieto1,

        },

        emit: [ "evento-1" ],

        setup ( props : vue.ComponentCustomProperties, context : vue.SetupContext ) : Record<string, unknown> {

            /* Props */
            console.info( "CompositionApiComponent", "props", props );

            const { tag: _tag, prop1 : _prop1, prop2 : _prop2 } = vue.toRefs( props ) as { tag : vue.Ref<string>, prop1 : vue.Ref<string>, prop2 : vue.Ref<string> };
            console.info( "CompositionApiComponent", "destructuring props", vue.toRefs( props ) );
            console.info( "CompositionApiComponent", "destructuring props", _tag, _prop1, _prop2 );

            const prop1      : vue.Ref<string> = vue.toRef( props, "prop1" as never );
            const noExisting : vue.Ref<string> = vue.toRef( props, "noExisting" as never );
            console.info( "CompositionApiComponent", `Destructuring existing prop ${ prop1.value } and non existing ${ noExisting.value }` );

            /* Context */
            console.info( "CompositionApiComponent", "context", context );
            console.info( "CompositionApiComponent", "context.attrs", context.attrs );
            console.info( "CompositionApiComponent", "context.slots", context.slots );
            console.info( "CompositionApiComponent", "context.emits", context.emit );
            console.info( "CompositionApiComponent", "context.expose", context.expose );

            /* Slots - se utiliza para renderizar manualmente a traves de la funcion render. Aunque se pueden usar para comprobar si el padre ha pasado info en un slot */
            console.info( "CompositionApiComponent", "context.slots.default", ( context.slots.default ) ? "hay slot" : "no hay slot" );
            console.info( "CompositionApiComponent", "context.slots.slot1", ( context.slots.slot1 ) ? "hay slot" : "no hay slot" );
            console.info( "CompositionApiComponent", "context.slots.slot2", ( context.slots.slot2 ) ? "hay slot" : "no hay slot" );

            context.expose( {

                doClick : doClick,

            } );

            function doClick() : void {
                context.emit( "evento-1", 1301 );
            }

            const { dataNoReactivo : noReactivo, dataReactivo : reactivo, objReactivo } : ReturnType<typeof compositionDataMethods> = compositionDataMethods();
            const { computada, changeParaComputada } : ReturnType<typeof compositionComputed> = compositionComputed();

            // hooksComposition();

            const objProvideInject : ReturnType<typeof provideInject> = provideInject();

            return {

                doClick     : doClick,
                noReactivo  : noReactivo,
                reactivo    : reactivo,
                objReactivo : objReactivo,

                computada,
                changeParaComputada,

                fakeData          : objProvideInject.fakeData,
                forCompositionApi : objProvideInject.forCompositionApi,

            };

        },

        created() : void {
            console.info( "CompositionApiComponent hook created", this );
        },

    } );

</script>

<template>

    <div class="component">

        <h2>Composition Api {{ prop1 }}</h2>

        <div>
            <p>Data no reactivo : {{ noReactivo }}</p>
            <p>Data reactivo    : {{ reactivo }}</p>
            <p>Obj reactivo     : {{ objReactivo }}</p>
            <p>Computada        : {{ computada }}</p>
            <p>forCompositionApi  :  {{ forCompositionApi }}</p>
        </div>

        <slot>Slot para padre</slot>
        <slot name="slot1">Slot 1</slot>
        <slot name="slot2">Slot 2</slot>

        <br/>

        <button v-on:click="doClick()">Click</button>
        <button v-on:click="changeParaComputada()">Click para computada</button>

        <br/>
        <Bisnieto1/>

    </div>

</template>
