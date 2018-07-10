<template lang="pug">
  el-dialog.show-img-dialog(:visible.sync="imgData.showImg", top="0%", fullscreen, append-to-body)
    el-carousel(height="100%", :initial-index="imgIndex", ref="carousel", :autoplay="false", :arrow="'always'", 
    :indicator-position="'none'", :class="{ 'hide-left': hideLeft, 'hide-right': hideRight }" @change="changeHandle")
      el-carousel-item(v-for="item in imgData.urlList", :key="item.url")
        img(:src="item.url")
</template>
<script>
  export default {
    name: 'ImgPreview',
    data () {
      return {
        hideLeft: false,
        hideRight: false
      }
    },
    props: {
      // 图片数据
      imgData: {
        type: Object
      },
      // 图片索引
      imgIndex: {
        type: Number,
        default: 0
      },
      // 是否无限滚动, 默认无限滚动
      isInfinite: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
    },
    watch: {
      imgIndex (val) {
        // 监听imgIndex的值，如果已初始化了carousel且carousel的activeIndex与imgIndex不相等才执行重新对carousel赋值活动索引
        if (this.$refs['carousel'] && this.$refs['carousel'].activeIndex !== val) {
          this.$refs.carousel.setActiveItem(val)
        }
      },
      imgData () {
        this.showArrowMethod(0)
      }
    },
    methods: {
      // 切换图片
      changeHandle (index) {
        if (!this.isInfinite) {
          this.showArrowMethod(index)
        }
      },
      // 显示左右箭头方法
      showArrowMethod (index) {
        if (index === 0) {
          this.hideLeft = true
        } else {
          this.hideLeft = false
        }
        if (index === this.imgData.urlList.length - 1) {
          this.hideRight = true
        } else {
          this.hideRight = false
        }
      }
    }
  }
</script>
<style lang="stylus">
  .show-img-dialog
    .el-dialog
      background transparent
      .el-dialog__header
        padding 0
        height 0
        .el-dialog__headerbtn
          background-color: rgba(31,45,61,.11);
          border-radius 50%
          z-index 100
          .el-dialog__close
            font-size 50px
            color #fff
      .el-dialog__body
        height 100%
        .el-carousel
          height 100%
          .el-carousel__item
            display flex
            justify-content center
            align-items center
          .el-carousel__arrow
            width 80px
            height 80px
            font-size 50px
          img
            max-width: 80%
            max-height: 100%
          &.hide-left
            .el-carousel__arrow--left
              display none
          &.hide-right
            .el-carousel__arrow--right
              display none
</style>
