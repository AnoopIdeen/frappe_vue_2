<template>
  <div>
    {{ count }}
    <button class="btn" v-on:click="count++">Click count +</button>
    <button class="btn" v-on:click="count--">Click count —</button>
    <div>
      <v-row> <v-col>Name </v-col><v-col>jjj </v-col></v-row>
      <v-row> <v-col>Name </v-col><v-col>jjj </v-col></v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0,
    };
  },
};
</script>
