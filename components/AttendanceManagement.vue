<template>
    <a-card title="Student Management">
      <a-form layout="inline">
        <a-form-item label="Name">
          <a-input v-model:value="name" placeholder="Enter name" />
        </a-form-item>
        <a-form-item label="Check In">
          <a-time-picker v-model:value="checkInTime" format="HH:mm:ss" />
        </a-form-item>
        <a-form-item label="Check Out">
          <a-time-picker v-model:value="checkOutTime" format="HH:mm:ss" />
        </a-form-item>
        <a-form-item label="Status">
          <a-select v-model:value="status" placeholder="Select status">
            <a-select-option value="Present">Present</a-select-option>
            <a-select-option value="Absent">Absent</a-select-option>
          </a-select>
        </a-form-item>
        <a-button type="primary" @click="addStudent">Add Student</a-button>
      </a-form>
  
      <a-table :columns="columns" :data-source="students" row-key="id">
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'actions'">
            <a-space size="small">
              <a-popconfirm title="Are you sure you want to delete this student?" @confirm="deleteStudent(record)">
                <a-button type="primary" danger size="small">Delete</a-button>
              </a-popconfirm>
            </a-space>
          </template>
          <template v-else>
            {{ record[column.dataIndex] }}
          </template>
        </template>
      </a-table>
    </a-card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useDataStore } from '@/store/useDataStore';
  
  // Form state
  const name = ref('');
  const checkInTime = ref(null);
  const checkOutTime = ref(null);
  const status = ref('Present'); // Pre-select 'Present'
  
  // Data store
  const { students, addStudentData, deleteStudentData } = useDataStore();
  
  // Table columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Check In',
      dataIndex: 'checkInTime',
      key: 'checkInTime',
    },
    {
      title: 'Check Out',
      dataIndex: 'checkOutTime',
      key: 'checkOutTime',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'actions',
    },
  ];
  
  // Add a new student
  const addStudent = () => {
    if (name.value && checkInTime.value && checkOutTime.value && status.value) {
      const newStudent = {
        id: Date.now(),
        name: name.value,
        checkInTime: checkInTime.value.format('HH:mm:ss'),
        checkOutTime: checkOutTime.value.format('HH:mm:ss'),
        status: status.value,
      };
      addStudentData(newStudent);
      resetForm();
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  // Delete a student
  const deleteStudent = (record) => {
    deleteStudentData(record.id);
  };
  
  // Reset form fields
  const resetForm = () => {
    name.value = '';
    checkInTime.value = null;
    checkOutTime.value = null;
    status.value = 'Present'; // Reset to 'Present'
  };
  </script>
  