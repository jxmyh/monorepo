<template>
  <div>home1</div>
  <img src="../../../assets/arrow@2x.png" alt="">
  <img src="../../assets/pic_3@2x.png" alt="">
  <text-hello></text-hello>
  <text-b></text-b>
  <text-j></text-j>
  <text-a></text-a>
  <text-t />
  <h3>
    Counter: {{ count }}
    <a @click='inc()' style='margin-right:10px'>+</a>
    <a @click='dec()'>-</a>
  </h3>
  <van-button type="primary" @click.prevent="handlerToList">默认按钮</van-button>
</template>
<!-- 在src/components中的组件可自动引入，无需再次自动引入(不支持src/components/**的组件) 其它目录的组件，请手动引入  -->
<!-- monorepo方式的包，请在packages目录下开发，详细目录，请见帮助 -->
<script setup lang="ts">
import dayjs from 'dayjs'
import { add } from '@monorepo-cdd/cddsdk'



const mouse = reactive(useMouse())

const obj = {
  a: {
    b: 1
  }
}

console.log(add(1, 3))
const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
// const a = _.cloneDeep(count.value);
// console.log(a)
const now = dayjs()
console.log(now.format('DD/MM/YYYY'))

console.log(obj?.a?.b)

const b = ref(1)

const handlerToList = () => {
  window.location.href = 'list.html'
}


</script>
<!-- 此项style已经在main.ts中引入默认为index.scss -->
<!-- <style lang="scss" scoped></style> -->
