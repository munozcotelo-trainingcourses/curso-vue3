import * as vue from "vue";

interface ICompositionDataMethods {

    dataNoReactivo : number;
    dataReactivo   : vue.Ref<number>;
    objReactivo    : Record<string, number>;

}

function compositionDataMethods() : ICompositionDataMethods {

    let dataNoReactivo : number = 3;

    /* tipo primitivo reactivo */
    let dataReactivo : vue.Ref<number> = vue.ref( 9 );

    /* objeto reactivo */
    let objReactivo : Record<string, number> = vue.reactive<Record<string, number>>( {

        key1 : 1,
        key2 : 2,

    } );

    setTimeout( () => {

        dataNoReactivo += 1000;
        dataReactivo.value += 1000;
        objReactivo.key1 += 1000;

    }, 2000 );

    return {

        dataNoReactivo : dataNoReactivo,
        dataReactivo   : dataReactivo,
        objReactivo    : objReactivo,

    };

};

export { compositionDataMethods };
