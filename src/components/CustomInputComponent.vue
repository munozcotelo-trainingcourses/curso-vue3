<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name  : "CustomInputComponent",

        props : {

            modelValue   : {

                required : true,
                type     : String,

            },

        },

        data () : Record<string, unknown> {

            return {

                password   : "",
                repassword : "",

            };

        },

        emits : [ "update:modelValue"  ],

        computed : {
        },

        created () : void {

            this.password = this.modelValue;
        },

        mounted () : void {
        },

        methods : {

            checkPassword () : void {

                if ( this.password === this.repassword ) {
                    this.$emit( "update:modelValue", this.password );
                }

            },

        },

    } );

</script>

<template>

    <div>

        <p>Dato de entrada : {{ modelValue }}</p>

        <label for="password">Password: </label>
        <input type="text" name="password" v-model="password" v-on:keyup="checkPassword" />
        <span>{{ password }}</span>
        <br/>
        <label for="repassword">Re-Password: </label>
        <input type="text" name="repassword" v-model="repassword" v-on:keyup="checkPassword" />
        <span>{{ repassword }}</span>
        <br/>

        <div v-if="password===repassword">
            TODO OK
        </div>
        <div v-else>
            Password y repassword no son iguales
        </div>

    </div>

</template>
