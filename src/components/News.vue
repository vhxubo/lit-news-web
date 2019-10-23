<template>
  <div class="scroll-list-wrap">
    <!-- <cube-scroll ref="scroll" :data="items" :options="options"> -->
    <ul class="news-wrapper">
      <li v-for="(news,key) in items" :key="key" class="new-item">
        <div class="new-content" @click="golink(news.link)">
          <p class="title">{{news.title}}</p>
          <span class="more" v-if="selectedLabel==='new'">
            {{news.type}}
            {{news.date}}
          </span>
          <span class="more" v-else>
            {{news.subtype}}
            {{news.date}}
          </span>
        </div>
      </li>
    </ul>
    <!-- </cube-scroll> -->
  </div>
</template>

<script>
export default {
  props: {
    selectedLabel: String,
    items: Array
  },
  methods: {
    golink: function(link) {
      window.open(link);
    }
  },
  data() {
    return {
      options: {
        scrollbar: {
          fade: true
        }
      }
    };
  }
};
</script>

<style>
.scroll-list-wrap {
  height: 100%;
}

.new-item {
  padding: 10px 15px;
  font-size: 15px;
  border-bottom: 0.8px solid #eaecef;
}

.title {
  /* padding-bottom: 3px; */
  line-height: 24px;
}

.more {
  color: gray;
  font-size: 13px;
}
</style>