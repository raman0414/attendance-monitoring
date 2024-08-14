<template>
  <a-layout style="min-height: 100vh; margin: 0;">
    <!-- Sidebar -->
    <a-layout-sider collapsible style="position: fixed; top: 0; bottom: 0; left: 0; height: 100vh; z-index: 1; overflow: auto;">
      <!-- Profile Section -->
      <div style="padding-top: 50px; padding-bottom: 10px; background: #001529; color: white; text-align: center;">
        <a-avatar :size= "100" style="margin-bottom: 8px; background: grey;">
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <h1>John Doe</h1>
      </div>

      <!-- Menu -->
      <a-menu theme="dark" mode="inline" :default-selected-keys="['dashboard']">
        <a-menu-item key="dashboard" @click="navigateTo('/dashboard')">
          <span>
            <ProjectOutlined />
            <span>Dashboard</span>
          </span>
        </a-menu-item>
        <a-menu-item key="attendance" @click="navigateTo('/attendance')">
          <span>
            <ClockCircleOutlined />
            <span>Attendance</span>
          </span>
        </a-menu-item>
        <a-menu-item key="profile" @click="navigateTo('/profile')">
          <span>
            <UserOutlined />
            <span>Profile</span>
          </span>
        </a-menu-item>
        <a-menu-item key="logout" @click="navigateTo('/login')">
          <span>
            <LogoutOutlined />
            <span>Logout</span>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <!-- Main Layout -->
    <a-layout style="margin-left: 190px; padding: 0;"> <!-- Adjust margin-left to match sidebar width -->
      <a-layout-header style="background: #001529; color: white; padding: 0 24px; text-align: left;">
        <h1 style="color: white; margin: 0;">Attendance Monitoring System</h1>
      </a-layout-header>

      <a-layout-content style="margin: 24px 16px; padding: 24px; background: #fff;">
        <NuxtPage />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ClockCircleOutlined, LogoutOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons-vue'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
a-layout-sider {
  /* Ensure that the sider does not scroll with the content */
  overflow: auto;
}

a-layout-header {
  border-radius: 0; /* Remove border-radius if not needed */
  background: #001529;
  color: white;
}

.avatar-section {
  padding: 16px;
  background: #001529;
  color: white;
  text-align: center;
}
</style>
