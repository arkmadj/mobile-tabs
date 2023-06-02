const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // These are the routes to all pages on the app.
      // Check the pages folder
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/mails", component: () => import("pages/MailPage.vue") },
      { path: "/alarms", component: () => import("pages/AlarmPage.vue") },
      { path: "/account", component: () => import("pages/AccountPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
