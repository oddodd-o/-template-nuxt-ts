
export function UseCounter(initialValue = 0) {
    const count = ref(initialValue)

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    return {
        count,
        increment,
        decrement
    }
}