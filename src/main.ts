import * as vue from "vue";

// import App from "./components/App.vue";
import App from "./components/App.vue";

import { amgarciaDirective } from "./directives/amgarcia-directive";
import { myPlugin }          from "./plugins/myPlugin";

// console.info( myPlugin );

// const vm : vue.App = vue.createApp(App);

/* Si necesitamos pasar parametros/propiedades al componente */
const vm : vue.App = vue.createApp( {

    name : "CreateAppComponent",

    render : () => {
        return vue.h( App, {

            title : "Training Vue3",

        } );
    },

} );

/* Directiva inyectada globalmente */
// vm.directive( "amgarcia", amgarciaDirective );

/* Mixin global */
// vm.mixin( {
//
//     created() : void {
//         console.info( "Hook created en un mixin global", this.$options.name );
//     },
//
// } );

/* Avoid warning message. The message indicates set this config to not show it */
vm.config.unwrapInjectedRef = true;

// vm.use( myPlugin, "hola" );

vm.mount( "#bootstrap" );
