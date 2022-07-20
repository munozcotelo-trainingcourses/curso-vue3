import * as vue from "vue";

const amgarciaMixin : vue.ComponentOptionsMixin = {

    data() : Record<string, unknown> {

        return {

            message    : "hello desde mixin" as string,
            conflicted : "estoy en el mixin" as string,

        };

    },

    computed : {

        mycomputed () : string {
            return this.message + "_computed_in_mixin";
        },

        conflictedComputed () : string {
            return Math.random() + "_computed_in_mixin";
        },

    },

    methods : {

        sayHello () : void {
            console.info( "Hello from the mixin" );
        },

        sayGoodMoring : () => {
            console.info( "Good morning from the mixin" );
        },

    },

    created () : void {

        console.info( "Created del mixin - data.message", this.message );
        console.info( "Created del mixin - data.conflicted", this.conflicted );

    },

};

export { amgarciaMixin };
