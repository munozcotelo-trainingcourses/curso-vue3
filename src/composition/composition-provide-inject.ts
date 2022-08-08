import * as vue from "vue";

const trace : ( ( from : string ) => void  ) = ( from : string) : void => {
    console.info( `\t===> ${ from } from compositionAPI` );
};

function provideInject() : Record<string, unknown> {

    const forCompositionApi : string = vue.inject( "forCompositionApi", "default value" );
    const fakeData          : string = vue.inject( "fake", "default value" );

    let hardcodedString : vue.Ref<string> = vue.ref( "hardcoded string from composition-provide-inject" );

    let valor             : vue.Ref<number> = vue.ref( 0 );
    let varEstadoReactivo : vue.ComputedRef<number> = vue.computed( () : number  => {
        return valor.value + 1;
    });

    let varEstadoNoReactivo : number = 100;

    let objProperty : Record<string, any> = vue.reactive<Record<string, any>>( {
        a : 2,
    } );

    vue.provide( "hardcodedString"     , hardcodedString );
    vue.provide( "var_estado_reactivo" , varEstadoReactivo);
    vue.provide( "var_estado"          , varEstadoNoReactivo);
    vue.provide( "obj_estado"          , objProperty);

    setInterval( () => {

        // hardcodedString.value = "hardcoded string from composition-provide-inject - " + Math.random();
        // varEstadoNoReactivo +=1;
        // // console.info( varEstadoNoReactivo );

    }, 1000 );

    function doClick() : void {

        hardcodedString.value = "hardcoded string from composition-provide-inject - " + Math.random();
        valor.value +=1;
        objProperty.a +=1;

    }

    vue.provide( "metodo", doClick);

    return {

        forCompositionApi : forCompositionApi,
        fakeData          : fakeData,

    };

};

export { provideInject };
