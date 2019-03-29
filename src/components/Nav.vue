<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light  fixed-top ">
    <router-link to="home" >HA</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="HelloWorld" class="nav-link">HelloWorld</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 search_form">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div  class="avatar-container right-menu-item el-dropdown">
      <div  class="avatar-wrapper el-dropdown-selfdefine " aria-haspopup="list" aria-controls="dropdown-menu-3991" role="button" tabindex="0">
        <a>
          <img  class="head_logo"  src="../assets/headLogo.jpg" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
  .nav_bg_color{
    background-color: #90abff;
  }
  .head_logo{
    height: 3rem;
    width: 3rem;
  }
  .search_form{
    margin-right: 2rem;
  }
</style>
