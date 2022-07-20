<script lang="ts">

    import * as vue from "vue";

    export default vue.defineComponent( {

        name : "TeleportComponent",

        data() : Record<string, unknown> {

            return {

                disableTeleport  : true,
                teleportPosition : "teleport-test-B",

            };

        },

        computed : {

            realTeleportPosition() : string {
                return `#${this.teleportPosition}`;
            },

        },

    } );

</script>

<template>

    <div class="component">

        <p>El target <strong>debe existir para cuando se renderiza</strong></p>

        <teleport to="#teleport-test">
            Hola soy un teleport
        </teleport>

        <teleport to="body">
            <div>
                Hola soy un teleport en el body
            </div>
        </teleport>

        <teleport to="body" v-bind:disabled="!disableTeleport">
            <div>
                Hola soy un teleport en el target o en el componente (en target?? {{ disableTeleport }} )
            </div>
        </teleport>

        <teleport v-bind:to="realTeleportPosition">
        <!-- <teleport v-bind:to="teleportPosition"> -->
            <div>
                Hola soy un teleport <strong>que se mueve</strong>. Estoy en {{ teleportPosition }}
            </div>
        </teleport>

        <br/>
        <label for="disableTeleport">Transportar al target??? </label>
        <input name="disableTeleport" type="checkbox" v-model="disableTeleport"/>

        <br/>
        <label for="disableTeleport">Target del teleport {{ realTeleportPosition }} </label>
        <input name="teleportPosition" type="radio" v-model="teleportPosition" v-bind:value="'teleport-test-A'"/>A
        <input name="teleportPosition" type="radio" v-model="teleportPosition" v-bind:value="'teleport-test-B'"/>B

    </div>

</template>
