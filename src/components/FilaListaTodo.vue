<script lang="ts">

    import * as vue from "vue";

    import { ITodoDTO } from "./../dto/ITodoDTO.class";

    export default vue.defineComponent( {

        name : "FilaListaTodo",

        props : {

            todo : {
                type     : Object as vue.PropType<ITodoDTO>,
                required : true,
            },

        },

        computed : {

            completed() : string {

                return ( this.todo.completed === true ) ? "Si (completado)" : "No (por completar)";

            },

        },

        methods : {

            toDelete() : void {
                console.info( "A borrar el elemento ", this.todo );
            },
            toComplete() : void {
                console.info( "A completar el elemento ", this.todo );
            }

        },

        // beforeCreate() {
        // },

        // created : () => {
        // }

    } );

</script>

<template>

    <tr>

        <td>{{ todo.id }}</td>
        <td>{{ todo.name }}</td>
        <td>{{ completed }}</td>

        <td><button v-on:click="toComplete">complete</button></td>
        <td><button v-on:click="toDelete">delete</button></td>

    </tr>

</template>
