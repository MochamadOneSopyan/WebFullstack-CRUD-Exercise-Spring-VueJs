import Home from "./pages/Home.vue";
import AddForm from "./pages/AddForm.vue"
import Update from "./pages/Update.vue";

export default [
  
  {
    path: "/",
    component: Home,
  },
  {
    path : "/add",
    component: AddForm,
  },
  {
    path: "/update/:id",
    component : Update,
},
];