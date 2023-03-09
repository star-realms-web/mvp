
<template>
    <div class="row">
        <div class="col-8">
            <div class="row">
                <div class="col">
                    <PlayerZone />
                </div>

            </div>
            <div class="row">
                <div class="col">
                    <PlayerZone />
                </div>

            </div>

        </div>
        <div class="col-4">

            <div class="row">
                <div class="col">
                    <CommonZone />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Code here will be called once.


import CommonZone from '@/components/Board/CommonZone';
import PlayerZone from '@/components/Board/PlayerZone';

export default {
    setup() {
        // Will be called on instance creation.
    },

    components: {
        CommonZone, PlayerZone
    },
};
</script>

<style scoped>

@media (min-width: 1024px) {

}
</style>
