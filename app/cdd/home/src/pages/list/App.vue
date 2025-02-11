<template>
  <div>home1</div>
  <text-hello></text-hello>
  <text-j></text-j>
  <text-t />
  <h3>
    Counter: {{ count }}
    <a @click='inc()' style='margin-right:10px'>+</a>
    <a @click='dec()'>-</a>
  </h3>
  <van-button type="primary" @click.prevent="handlerBackHome">默认按钮</van-button>
</template>

<script setup lang="ts">
// import TextJ from './components/TextJ.jsx'
// import TextT from './components/TextT.tsx'
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
const a = _.cloneDeep(count.value);
console.log(a)
const now = dayjs()
console.log(now.format('DD/MM/YYYY'))

console.log(obj?.a?.b)

const b = ref(1)


const handlerBackHome = () => {
  window.location.href = 'home.html'
}

</script>

<style lang="scss" scoped></style>
