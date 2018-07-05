<template lang="pug">
  .home-page
    div 首页
    .checkbox-area
      el-checkbox-group(v-for="v in allList", :key="v.id", v-model="checkList", @change="checkChangeHandle")
        el-checkbox(v-for="item in v.list" :key="item.label", :label="item.value") {{item.label}}
    .img-list
      .item(v-for="(item, index) in imgList", :label="item", @click="showImgPreview(index)")
        img(:src="item")
    el-button(type="success", @click="showImgPreview(0)") 查看
    ImgPreview(:imgData="imgData", :imgIndex="imgIndex", :isInfinite="false")
</template>

<script>
  import ImgPreview from 'components/preview/imgPreview'
  export default {
    name: 'HomePage',
    components: {
      ImgPreview
    },
    data () {
      return {
        checkList: [],
        imgData: {
          showImg: false,
          urlList: []
        },
        imgIndex: 0,
        allList: [
          {
            id: 0,
            list: [
              {label: '页面a', value: 'a'},
              {label: '页面b', value: 'b'},
              {label: '页面c', value: 'c'},
              {label: '页面d', value: 'd'}
            ]
          },
          {
            id: 1,
            list: [
              {label: '页面e', value: 'e'},
              {label: '页面f', value: 'f'},
              {label: '页面g', value: 'g'},
              {label: '页面h', value: 'h'}
            ]
          },
          {
            id: 2,
            list: [
              {label: '页面i', value: 'i'},
              {label: '页面j', value: 'j'},
              {label: '页面k', value: 'k'},
              {label: '页面l', value: 'l'}
            ]
          }
        ],
        imgList: [
          // require('assets/images/001.jpg'),
          // require('assets/images/002.jpg'),
          // require('assets/images/003.jpg'),
          // require('assets/images/004.jpg'),
          require('assets/images/005.jpg')
        ]
      }
    },
    methods: {
      checkChangeHandle () {
        console.log(this.checkList)
      },
      showImgPreview (index) {
        let urlList = this.imgList.map(i => {
          return {url: i}
        })
        this.imgData = {
          showImg: true,
          urlList: urlList
        }
        this.imgIndex = index
      }
    }
  }
</script>

<style lang="stylus">
  .checkbox-area
    width 600px
    border 1px solid #dedede
    padding 20px
    display flex
    justify-content space-around
    .el-checkbox-group
      // display flex
      .el-checkbox
        display block
        margin 5px 0 0 0
  .img-list
    .item
      width 100px
      height 100px
      img
        display inline-block
        width 100%
        height 100%
</style>
