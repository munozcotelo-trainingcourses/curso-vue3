<script lang="ts">

    import * as vue from "vue";

    import { IUserDTO } from "./../dto/IUserDTO.class";

    export default vue.defineComponent( {

        name : "ComponenteP",

        props : {

            text : {
                type     : String as vue.PropType<string>,
                required : true,
            },

            user : {
                type     : Object as vue.PropType<IUserDTO>,
                required : true,
            }

        },

        data() {

            return {

                todojunto : "",

            };

        },

        methods : {

            doLogic() {
                this.todojunto = `${ this.user.name }_${ this.user.surname }_${ this.user.age}_${ Math.random() }`;
            },

        },

        beforeCreate() {
            console.info( "ComponenteP - Before create hook" );
        },

        created : () => {
            console.info( "ComponenteP - Before created" );
        }

    } );

</script>

<template>

    <div>

        <h1>{{ text }}</h1>

        <div>

            <p>Name : {{ user.name }}</p>
            <p>Surname : {{ user.surname }}</p>
            <p>Age : {{ user.age }}</p>

            <p>TodoJunto: {{ todojunto }}</p>

            <button v-on:click="doLogic()">Click aqui</button>

        </div>

    </div>

</template>

