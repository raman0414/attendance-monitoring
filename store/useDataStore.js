import { ref } from 'vue';

// Initial student data
const students = ref([
  { id: 1, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 2, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 3, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 4, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 5, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 6, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 7, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 8, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 9, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 10, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 11, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 12, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 13, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 14, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
  { id: 15, name: 'John Doe', checkInTime: '08:00', checkOutTime: '16:00', status: 'Present' },
  { id: 16, name: 'Jane Smith', checkInTime: '09:00', checkOutTime: '17:00', status: 'Absent' },
]);

export const useDataStore = () => {
  const addStudentData = (student) => {
    students.value.push(student);
  };

  const deleteStudentData = (id) => {
    students.value = students.value.filter((student) => student.id !== id);
  };

  const editStudentData = (student) => {
    const index = students.value.findIndex((s) => s.id === student.id);
    if (index !== -1) {
      students.value[index] = student;
    }
  };

  return {
    students,
    addStudentData,
    deleteStudentData,
    editStudentData,
  };
};
