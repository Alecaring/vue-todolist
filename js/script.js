

const { createApp } = Vue

  createApp({
    data() {
      return {
        openModalToAdd: false,
        openModalSearch: false,
      }
    }
  }).mount('#AppTodoList')