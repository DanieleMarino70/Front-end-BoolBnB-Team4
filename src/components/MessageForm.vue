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
        email: "",
        name: "",
        surname: "",
        message: "",
      },
    };
  },

  methods: {
    sendMessage() {
      const message = {
        apartment_id: this.apartment_id,
        email: this.userMessage.email,
        name: this.userMessage.name,
        surname: this.userMessage.surname,
        message: this.userMessage.message,
      };

      axios
        .post(
          `http://127.0.0.1:8000/api/apartments/${message.apartment_id}/messages`,
          message
        )
        .then((response) => {
          this.userMessage.email = "";
          this.userMessage.name = "";
          this.userMessage.surname = "";
          this.userMessage.message = "";
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <form @submit.prevent="sendMessage">
    <div>
      <div class="my-4">
        <h5 class="text-center fw-bold color-primary">
          Do you want to know more?
        </h5>
      </div>

      <div>
        <label for="email">Email</label>
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
        <label for="name">Name</label>
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
        <label for="surname">Surname</label>
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
        <label for="text">Message</label>
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
    <div>
      <button type="submit">Contact host</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
