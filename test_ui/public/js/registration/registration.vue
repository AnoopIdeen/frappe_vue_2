<template>
  <div>
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
        v-model="email"
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
        v-model="password"
      />

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        id="psw-repeat"
        required
        v-model="re_password"
      />
      <hr />
      <p>
        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
      </p>

      <button type="button" class="registerbtn" @click="save_data">
        Register
      </button>
    </div>

    <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>

    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in user_data" :key="d.name">
            <th scope="row">{{ d.name }}</th>
            <td>{{ d.email }}</td>
            <td>
              <button type="button" class="btn btn-primary" @click="edit(d)">
                edit
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-danger" @click="dlt(d)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      re_password: "",
      user_data: [],
    };
  },

  created() {
    this.get_data();
  },
  methods: {
    get_data() {
      frappe.call({
        method:
          "test_ui.test_ui.page.registartion_form.registration_form.get_all",

        callback: (r) => {
          console.log("result", r);
          this.user_data = r.message;
        },
      });
    },
    edit(d) {
      this.email = d.email;
      this.password = d.password;
    },
    dlt() {},
    save_data() {
      let d = { email: this.email, password: this.password };
      frappe.call({
        method:
          "test_ui.test_ui.page.registartion_form.registration_form.save_user",
        args: {
          data: d,
        },
        callback: (r) => {
          console.log("result", r);
          this.get_data();
        },
      });
    },
  },
};
</script>
