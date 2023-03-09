
<template>
    <div class="container game-screen">
        <div class="row">
            <div class="col">
                <Board />
            </div>
        </div>
    </div>
</template>

<script>
import Board from '@/components/Board';

export default {
    components: {
        Board,
    },
};
</script>

<style scoped>
.game-screen {
    max-width: 100%;
}

@media (min-width: 1024px) {

}
</style>
