
const { createApp } = Vue;

createApp({
  data() {
    return {

      showModal: true,
            userName: '',
            selectedAvatar: '',
            avatars: [
                './img/avataaars.png',
                './img/avataaars(1).png',
                './img/avataaars(2).png',
                './img/avataaars(3).png',
                
            ],

      openModalToAdd: false,
      todoText: "", 
      toAddArray: JSON.parse(localStorage.getItem("todos")) || [], 
    };
  },
  mounted() {
    this.loadUserInfo();
},
  methods: {

    selectAvatar(avatar) {
      this.selectedAvatar = avatar;
  },
  saveUserInfo() {
      if (this.userName && this.selectedAvatar) {
          const userInfo = {
              name: this.userName,
              avatar: this.selectedAvatar
          };
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          this.showModal = false;
      } else {
          alert("Per favore, inserisci il nome e seleziona un avatar.");
      }
  },
  loadUserInfo() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
          this.userName = userInfo.name;
          this.selectedAvatar = userInfo.avatar;
          this.showModal = false;
      }
  },

    addItem() {
      if (this.todoText.trim()) {
        this.toAddArray.push({
          txt: this.todoText,
          isBarrato: false,
        });
        this.todoText = ""; 
        this.saveTodos(); 
      }
    },
    toggleBarrato(index) {
      this.toAddArray[index].isBarrato = !this.toAddArray[index].isBarrato;
      this.saveTodos(); // Salva i todo aggiornati nel Local Storage
    },
    removeItem(index) {
      this.toAddArray.splice(index, 1); // Rimuove il todo all'indice specificato
      this.saveTodos(); // Salva i todo aggiornati nel Local Storage
    },
    saveTodos() {
      localStorage.setItem("todos", JSON.stringify(this.toAddArray));
    }
  }
}).mount('#AppTodoList');




