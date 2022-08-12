import * as vue from "vue";

interface ICompositionRefs {

    htmlRef   : vue.Ref<HTMLElement | vue.Component>;
    ponerFoco : any;

}

function compositionRefs() : ICompositionRefs {

    const referencia : vue.Ref<HTMLElement | vue.Component> = vue.ref( null as any );

    function ponerFoco() : void {
        ( referencia.value as HTMLElement ).style.color= "red";
    }

    setTimeout( () => {
        console.info( "info de referencia en el fichero composition-refs", referencia.value );
    }, 2000 );

    return {

        htmlRef   : referencia,
        ponerFoco : ponerFoco,

    };

};

export { compositionRefs };
