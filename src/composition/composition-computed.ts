import * as vue from "vue";

interface ICompositionComputed {

    computada           : vue.ComputedRef<string>;
    changeParaComputada : () => void;

}

function compositionComputed() : ICompositionComputed {

    let dataReactivo : vue.Ref<number> = vue.ref( 3 );

    const computada : vue.ComputedRef<string> = vue.computed( () : string => {
        return `Valor es ${ dataReactivo.value }`;
    } );

    function changeParaComputada() : void {
        dataReactivo.value +=1;
        console.info( "click here" );
    }


    return {

        computada           : computada,
        changeParaComputada : changeParaComputada,

    };

};

export { compositionComputed };

