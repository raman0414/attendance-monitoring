<template>
    <a-layout>
    <a-layout-content style="padding: 24px;">
        <a-row gutter="16">
          <a-col :span="8">
            <a-card title="Total Attendance" bordered={false}>
              <p>{{ totalAttendance }}</p>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Present Today" bordered={false}>
              <p>{{ presentToday }}</p>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Absent Today" bordered={false}>
              <p>{{ absentToday }}</p>
            </a-card>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
</template>
<script setup>
  const totalAttendance = ref(50);
  const presentToday = ref(45);
  const absentToday = ref(5);
</script>

<style>
   .a-layout{
        background-color: aqua;

    }
</style>