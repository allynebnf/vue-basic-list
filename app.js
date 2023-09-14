const app = Vue.createApp({
  //puxar os dados daqui
  data() {
    return {
      friends: [
        {
          id: "allyne",
          name: "Allyne Nascimento",
          phone: "01234 5678 910",
          email: "allyne@localhost.com",
        },
        {
          id: "eduardo",
          name: "José Eduardo",
          phone: "09876 543 221",
          email: "eduardo@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    //aqui está puxando os dados
    return {
      detailsAreVisible: false,
      friend: {
        id: "allyne",
        name: "Allyne Nascimento",
        phone: "01234 5678 910",
        email: "allyne@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
