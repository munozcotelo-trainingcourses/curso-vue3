import * as vue from "vue";

interface ICompositionRefs {

    htmlRef : vue.Ref<HTMLElement | vue.Component>;

}

function compositionRefs() : ICompositionRefs {

    const referencia : vue.Ref<HTMLElement | vue.Component> = vue.ref( null as any );

    return {

        htmlRef : referencia,

    };

};

export { compositionRefs };
