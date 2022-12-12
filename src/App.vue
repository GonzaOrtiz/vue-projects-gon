<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="d-flex" id="wrapper">

    <!-- Sidebar-->
    <div class="  bg back-second-color" id="sidebar-wrapper">
      <div class="sidebar-heading  bg backcolor textcolor">Gonza Ortiz</div>
      <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item back-second-color textcolor p-3" href="#!"><i
            class="bi bi-cast">&nbsp; &nbsp;</i> Shortcuts</a>
        <a class="list-group-item list-group-item-action list-group-item back-second-color textcolor p-3" href="#!"><i
            class="bi bi-file-check">&nbsp; &nbsp;</i> Overview</a>
        <a class="list-group-item list-group-item-action list-group-item back-second-color textcolor p-3" href="#!"><i
            class="bi bi-chat-square-dots">&nbsp; &nbsp;</i> Events</a>
        <a class="list-group-item list-group-item-action list-group-item back-second-color textcolor p-3" href="#!"><i
            class="bi bi-clipboard-fill">&nbsp; &nbsp;</i> Profile</a>
            <RouterLink class="list-group-item list-group-item-action list-group-item 
        back-second-color textcolor p-3" to="/subjects"> <i class="bi bi-cloud-upload">&nbsp; &nbsp;</i> Subjects
        </RouterLink>
            <RouterLink class="list-group-item list-group-item-action list-group-item 
        back-second-color textcolor p-3" to="/notes"> <i class="bi bi-file-earmark-font">&nbsp; &nbsp;</i> Notas
        </RouterLink>
      </div>
    </div>


    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav class="navbar navbar-expand-lg navbar-dark bg backcolor ">
        <div class="container-fluid">
          <button class="btn btn-white back-second-color" id="sidebarToggle"><i
              class="bi bi-arrow-left-right textcolor"></i></button>
          <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#!">Action</a>
                  <a class="dropdown-item" href="#!">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#!">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Page content-->
      <RouterView />

    </div>
  </div>




  <footer class="bg- backcolor  text-center text-lg-start">
  <div class="text-center p-3 textcolor" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Gonza Ortiz
    <a class="text textcolor">vue-projects</a>
  </div>
  <!-- Copyright -->
</footer>

</template>

<style scoped>
.backcolor {
  background-color: rgb(5, 40, 72);
  font-family: arial;
}

.back-second-color {
  background-color: rgb(14, 130, 189);
  font-family: arial;
}


.textcolor {
  color: white;
  font-family: arial;
}
</style>