<template>
    <a-row justify="center" align="middle" style="height: 100vh">
      <a-col :span="8">
        <a-card title="Login">
          <a-form>
            <a-form-item label="Username">
              <a-input placeholder="Enter your username" />
            </a-form-item>
            <a-form-item label="Password">
              <a-input type="password" placeholder="Enter your password" />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" block @click="login">Login</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </template>
  
  <script setup>
  definePageMeta({
  layout: false
})
  const login = () => {
    window.location.href = '/dashboard';
  };
</script>

