<template>
    <div>
        <button @click="increment()">+</button>
        {{ count }}
    </div>
</template>

<script>
export default {
    name: "count-down",
    computed: {
        count() {
            return this.$store.state.count.count
        }
    },
    methods: {
        increment() {
            this.$store.dispatch("count/increment")
        }
    }
}
</script>