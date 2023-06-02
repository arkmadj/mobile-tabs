<template>
  <!-- I updated the page layout to have only footer
  You can find more info here https://quasar.dev/layout-builder -->
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <!-- Added the tabs to the footer
      I connected the tabs to vue router so the page changes
      as the tabs change
      You can find more info herehttps://quasar.dev/vue-components/tabs -->
      <q-tabs>
        <!-- All tabs navigates to a path on the vue route
        Check the route.js file to see all routes -->
        <q-route-tab icon="home" to="/" exact />
        <q-route-tab icon="mail" to="/mails" exact />
        <q-route-tab icon="alarm" to="/alarms" exact />
        <q-route-tab icon="person" to="/account" exact />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
