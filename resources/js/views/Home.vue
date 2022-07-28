<template>
    <div class="layui-container">
        <lay-button-container>
            <lay-button type="primary" size="lg" @click="openMsg">button 1</lay-button>
            <lay-button type="primary" size="lg">button 2</lay-button>
        </lay-button-container>
    </div>
</template>

<script>
import { layer } from '@layui/layui-vue'
export default {
    setup() {
        const openMsg = function () {
            layer.msg("普通消息", { time: 1000 })
        }
        return {
            openMsg
        }
    }
}
</script>
