<template lang="pug">
  el-dialog.video-preview-dialog(:visible.sync="videoData.showVideo", title="预览视频", append-to-body, width="840px", top="4%")
    iframe(v-if="videoData.showVideo", :src="videoData.url", frameborder=0)
    span(slot="footer", class="dialog-footer")
      el-button(type="primary", size="small", @click="videoData.showVideo = false") 关 闭
</template>
<script>
  export default {
    name: 'VideoPreview',
    data () {
      return {
      }
    },
    props: {
      videoData: {
        type: Object
      }
    },
    methods: {
    }
  }
</script>
<style lang="stylus">
  .video-preview-dialog
    iframe
      width 800px
      height 450px
      video
        width 100%
</style>
