<template>
    <header>
        <section>
            <div class="col1">
                <router-link to="dashboard">
                    <h3>Vue Social App</h3>
                </router-link>
                <ul class="inline">
                    <li>
                        <router-link to="dashboard">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link to="settings">Settings</router-link>
                    </li>
                    <li><a @click="logout">logout</a></li>
                </ul>
            </div>
        </section>
    </header>
</template>

<script>
    import * as firebase from '../firebaseConfig.js'
    export default {
        methods: {
            logout() {
                firebase.auth.signOut().then(() => {
                    this.$store.dispatch('clearData')
                    this.$router.push('/login')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>