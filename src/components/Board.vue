
<template>
    <div class="row">
        <div class="col">
            <BoardDeck />
        </div>
    </div>
</template>

<script>
// Code here will be called once.

import BoardDeck from '@/components/Board/Deck';

export default {
    setup() {
        // Will be called on instance creation.
    },

    components: {
        BoardDeck,
    },
};
</script>

<style scoped>

@media (min-width: 1024px) {

}
</style>
