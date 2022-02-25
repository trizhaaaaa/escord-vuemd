<template>
  <v-app>
    
    <v-card width="400" class="mx-auto mt-10">
    <v-card-title>
    <h1 class="display-1">
    Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
        label="Username"
        prepend-icon="mdi-account-circle"/>
        <v-text-field
        v-bind:type="showPassword ? 'text' : 'password'" 
        label="Password"
        prepend-icon="mdi-lock"
        v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        v-on:click:append="showPassword = !showPassword "/>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info">Login</v-btn>
    </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Guide",
  data() {
    return {
      showPassword: false
    };
  },
};
</script>

<style scoped>
</style>
