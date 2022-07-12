<script lang="ts">

    import * as vue from "vue";

    import FilaListaTodo from "./FilaListaTodo.vue";

    import { ITodoDTO } from "./../dto/ITodoDTO.class";

    export default vue.defineComponent( {

        name : "ListaTodo",

        props : {

            todos : {
                type     : Array as vue.PropType<ITodoDTO[]>,
                required : true,
            },

        },

        components : {

            FilaListaTodo : FilaListaTodo,

        },

        emit : [ "todo_complete", "todo_delete" ],

        methods : {

            toDelete( id : number ) : void {
                console.info( "ListaTodo, todo_delete", id );
                this.$emit( "todo_delete", id );
            },

            toComplete( id : number ) : void {
                console.info( "ListaTodo, todo_complete", id );
                this.$emit( "todo_complete", id );
            },

        },

        // beforeCreate() {
        // },

        // created : () => {
        // }

    } );

</script>

<template>

    <table>

        <thead>

            <tr>

                <th>Id</th>
                <th>Name</th>
                <th>Completed</th>
                <th>Complete</th>
                <th>Delete</th>

            </tr>

        </thead>

        <tbody>

            <FilaListaTodo v-for="(todo, index) in todos" v-bind:key="index" v-bind:todo="todo" v-on:todo_complete="toComplete"  v-on:todo_delete="toDelete" />

            <!-- <template v-for="(todo, index) in todos" v-bind:key="index"> -->
            <!-- <tr> -->
            <!--     <td>{{ todo.id }}</td> -->
            <!--     <td>{{ todo.name }}</td> -->
            <!--     <td> -->
            <!--         <span v-if="todo.completed === true">Si (Completado)</span> -->
            <!--         <span v-else>No (Por completar)</span> -->
            <!--     </td> -->
            <!-- </tr> -->
            <!-- </template> -->


        </tbody>


    </table>

</template>


