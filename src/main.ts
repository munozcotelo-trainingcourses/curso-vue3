import * as vue from "vue";

// import App from "./components/App.vue";
import App from "./components/App.vue";

import { amgarciaDirective } from "./directives/amgarcia-directive";

// const vm : vue.App = vue.createApp(App);

/* Si necesitamos pasar parametros/propiedades al componente */
const vm : vue.App = vue.createApp( {

    render : () => {
        return vue.h( App, {

            title : "Training Vue3",

        } );
    },

} );

/* Directiva inyectada globalmente */
// vm.directive( "amgarcia", amgarciaDirective );

/* Avoid warning message. The message indicates set this config to not show it */
vm.config.unwrapInjectedRef = true;

vm.mount( "#bootstrap" );
