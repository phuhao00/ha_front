<template >
  <el-carousel :interval="5000" arrow="always" >
    <el-carousel-item v-for="item in imgelists" :key="item">
      <img  v-bind:src="item.img" height="414" width="1040"/>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'HomeCarousel',
  data: function () {
    return {
      imgelists: [
        { img: require('../assets/1.jpg') },
        { img: require('../assets/2.jpg') },
        { img: require('../assets/3.jpg') },
        { img: require('../assets/4.jpg') }
      ]
    }
  }
}
</script>

<style scoped>
  carousel_space{
    width: 700rem;
    height: 300rem;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
