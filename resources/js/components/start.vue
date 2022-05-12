<template>
    <welcome></welcome>
</template>

<script>
import Welcome from "../views/Welcome";
import Home from "../views/Home";

export default {
    data:()=> ({
        authorized: false,
    }),
    name: "start",
    components: {
        Welcome, Home
    }
}
</script>
