<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white"
      ><q-tabs>
        <q-route-tab icon="home" to="/" exact />
        <q-route-tab icon="mail" to="/mails" exact />
        <q-route-tab icon="alarm" to="/alarms" exact />
        <q-route-tab icon="person" to="/profile" exact />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
