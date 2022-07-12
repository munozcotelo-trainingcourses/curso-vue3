<script lang="ts">

    import * as vue from "vue";

    import ComponenteH1 from "./ComponenteH1.vue";
    import ComponenteP  from "./ComponenteP.vue";
    import ListaTodo    from "./ListaTodo.vue";

    import { IUserDTO } from "./../dto/IUserDTO.class";
    import { ITodoDTO } from "./../dto/ITodoDTO.class";

    const todosList : ITodoDTO[] = [

        { id : 1, name : "Aprender Vue", completed : false, },
        { id : 2, name : "Leer mas", completed : false, },
        { id : 3, name : "Hacer mas deporte", completed : false, },
        { id : 4, name : "Viajar a China", completed : false, },

    ];

    export default vue.defineComponent( {

        name       : "App",
        components : {

            ComponenteH1 : ComponenteH1,
            ComponenteP  : ComponenteP,
            ListaTodo    : ListaTodo,
        },

        data() {

            return {

                // userOne : { name : "Pepito", surname : "Perez", age : 20, } as IUserDTO,
                todos : todosList,
            };

        },

        methods : {

            toDelete( id : number ) : void {

                console.info( "App, toDelete", id );
                this.todos = this.todos.filter( ( todo : ITodoDTO ) => {
                   return todo.id !== id
                } );

            },

            toComplete( id : number ) : void {

                console.info( "App, toComplete", id );
                this.todos.find( ( todo : ITodoDTO ) => {
                   return todo.id === id
                } ).completed = true;

            },

        },

    } );

</script>

<template>

    <div>

        <!-- <ComponenteH1 text="Hello world (prop)!!" /> -->
        <!-- <ComponenteP text="Good bye (prop)" v-bind:user=userOne> </ComponenteP> -->

        <ComponenteH1 text="Aplicacion de Todos" />

        <ListaTodo v-bind:todos="todos" v-on:todo_complete="toComplete"  v-on:todo_delete="toDelete" />

    </div>

</template>
