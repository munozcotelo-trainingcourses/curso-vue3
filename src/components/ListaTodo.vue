<script lang="ts">

    import * as vue from "vue";

    import { ITodoDTO } from "./../dto/ITodoDTO.class";

    export default vue.defineComponent( {

        name : "ListaTodo",

        props : {

            todos : {
                type     : Array as vue.PropType<ITodoDTO[]>,
                required : true,
            },

        },

        beforeCreate() {
        },

        created : () => {
        }

    } );

</script>

<template>

    <table>

        <thead>

            <tr>

                <th>Id</th>
                <th>Name</th>
                <th>Completed</th>

            </tr>

        </thead>

        <tbody>

            <template v-for="(todo, index) in todos" v-bind:key="index">
            <tr>
                <td>{{ todo.id }}</td>
                <td>{{ todo.name }}</td>
                <td>
                    <span v-if="todo.completed === true">Si (Completado)</span>
                    <span v-else>No (Por completar)</span>
                </td>
            </tr>
            </template>


        </tbody>


    </table>

</template>


