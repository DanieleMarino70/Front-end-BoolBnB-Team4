<script>
import axios from "axios";

export default {
  name: "MessageForm",

  props: {
    apartment_id: Number,
  },

  data() {
    return {
      userMessage: {
        name: "",
        surname: "",
        email: "",
        message: "",
      },
      success: false,
    };
  },

  methods: {
    fetchUserData() {
      axios
        .get("http://127.0.0.1:8000/api/user") // Aggiungi l'endpoint corretto per ottenere i dati dell'utente
        .then((response) => {
          if (response.data.name) {
            this.userMessage.name = response.data.name;
          }

          if (response.data.surname) {
            this.userMessage.surname = response.data.surname;
          }

          this.userMessage.email = response.data.email;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sendMessage() {
      this.success = false;
      const message = {
        apartment_id: this.apartment_id,
        name: this.userMessage.name,
        surname: this.userMessage.surname,
        email: this.userMessage.email,
        message: this.userMessage.message,
      };

      axios
        .post(
          `http://127.0.0.1:8000/api/apartments/${message.apartment_id}/messages`,
          message
        )
        .then((response) => {
          this.userMessage.name = "";
          this.userMessage.surname = "";
          this.userMessage.email = "";
          this.userMessage.message = "";
          this.success = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.fetchUserData();
  },
};
</script>

<template>
  <div v-if="success" class="alert alert-success">
    Messaggio inviato con successo
  </div>
  <form @submit.prevent="sendMessage">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <div>
      <div class="my-4">
        <h5 class="text-center fw-bold color-primary neon-text">
          DO YOU WANT TO KNOW MORE ABOUT THIS APARTMENT?
        </h5>
      </div>

      <div>
        <label for="name"
          ><i class="fa-solid fa-file-signature"></i> Name</label
        >
        <input
          type="text"
          id="name"
          v-model="userMessage.name"
          class="form-control"
          minlength="2"
          maxlength="60"
          required
        />
      </div>
      <div class="mb-2">
        <label for="surname"
          ><i class="fa-solid fa-file-signature"></i> Surname</label
        >
        <input
          type="text"
          id="surname"
          v-model="userMessage.surname"
          class="form-control"
          minlength="3"
          maxlength="60"
          required
        />
      </div>

      <div>
        <label for="email"><i class="fa-solid fa-envelope"></i> Email</label>
        <input
          type="email"
          id="email"
          v-model="userMessage.email"
          class="form-control"
          minlength="5"
          maxlength="255"
          required
        />
      </div>

      <div>
        <label for="text"><i class="fa-solid fa-message"></i> Message</label>
        <textarea
          type="text"
          id="text"
          v-model="userMessage.message"
          class="form-control"
          minlength="4"
          maxlength="65535"
          required
        ></textarea>
      </div>
    </div>
    <div class="text-center">
      <button type="submit">Contact host</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
button {
  text-decoration: none;
  display: inline-block;
  color: #e4baa0;
  font-size: 24px;
  border: 2px solid white;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
  transition: 0.5s;
  background-color: #faeee7;
}
button:hover {
  background-color: white;
  transform: scale(1.04);
}

.neon-text {
  color: black;

  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}
</style>
