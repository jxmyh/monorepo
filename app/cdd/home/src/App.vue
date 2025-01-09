<template>
  <div>home1</div>
  <text-hello></text-hello>
  <h3>
      Counter: {{count}}
      <a @click='inc()' style='margin-right:10px'>+</a>
      <a @click='dec()'>-</a>
    </h3>
  <van-button type="primary">默认按钮</van-button>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { add } from '@monorepo-cdd/cddsdk'



const mouse = reactive(useMouse()) 

const obj = {
  a: {
    b:1
  }
}

console.log(add(1, 3))
const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
const a = _.cloneDeep(count.value);
console.log(a)
const now = dayjs()
console.log(now.format('DD/MM/YYYY'))

console.log(obj?.a?.b)

const b = ref(1)


</script>

<style lang="scss" scoped>

</style>
