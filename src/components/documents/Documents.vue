<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <Message />
          <Docs />
          <v-progress-linear
            :active="loading.state2"
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Message from "./Message";
import Docs from "./Docs";
export default {
  name: "Documents",
  components: {
    Message,
    Docs,
  },
  dat: () => {
    return {
      new: {
        id: -1,
        name: "New Document",
        expira: "",
        alerta1y: true,
        alerta6m: true,
        alerta3m: true,
        alerta1m: true,
      },
      items: [],
    };
  },
  mounted() {
    try {
      // this.$store.commit("showLoading", "Cargando...");
      this.$store.commit("setItems"); //Nombre de la mutación
    } catch (err) {
      console.log(err);
    } /* finally {
      this.$store.commit("hideLoading");
    } */
  },
  computed: {
    allItems() {
      return this.$store.state.items;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style  scoped>
</style>