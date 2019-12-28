<template>
    <div class="section">
        <div class="container">
            <div v-if="loaded">
                <div v-if="orderDetails.id">
                    <h2>Your order is complete!</h2>
                </div>
                <p v-else>Something went wrong please go back to our <router-link to="/shop">shop</router-link>.</p>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '~/components/CartItem';

export default {
    computed: {
        loaded() {
            return this.$store.state.localStorage.status
        },
        orderDetails() {
            return this.$store.state.order
        }
    }
}
</script>