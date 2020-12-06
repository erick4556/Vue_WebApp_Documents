<template>
  <div>
    <v-list-item ripple>
      <v-btn @click="deleteDocument" text icon color="red lighten-2">
        <v-icon>delete_forever</v-icon>
      </v-btn>
      <v-btn text icon color="green lighten-2">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-list-item-content>
        <v-list-item-title class="text--primary">{{
          item.nombre
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.expira }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{
          expirationDate(item.expira)
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>{{ item.id }}</v-list-item-action-text>
        <v-icon v-if="!expired(item.expira)" color="green lighten-1"
          >done_outline</v-icon
        >
        <v-icon v-else color="red lighten-1">warning</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-divider :key="`divider-${item.id}`"></v-divider>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Item",
  components: {},
  props: ["item", "items"],
  methods: {
    deleteDocument() {
      let id = this.item.id;
      try {
        this.$store.commit("showLoading", "Cargando item");
        this.$store.commit("deleteDoc", { id });
      } catch (error) {
        console.error(error);
      } finally {
        this.$store.commit("hideLoading");
      }
    },
    expired(date) {
      return Date.parse(date) <= Date.now() ? true : false;
    },
    expirationDate(date) {
      let endDate = moment(date);
      const startDate = moment(Date.now());
      const years = endDate.diff(startDate, "year"); //Tomo el año de startDate
      startDate.add(years, "year"); //Sumo los años
      const months = endDate.diff(startDate, "months");
      startDate.add(months, "months"); //Sumo los meses
      const days = endDate.diff(startDate, "days");
      startDate.add(days, "days"); //Sumo los días
      const rs = years + " años " + months + " meses " + days + " días";
      return this.expired(date)
        ? "Expiró hace " + rs.replace(/-/g, "")
        : "Faltan : " + rs;
    },
  },
};
</script>

<style lang="stylus"></style>