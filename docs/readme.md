---
home: true
# heroImage: /hero.png
actionText: 起步 →
actionLink: /components/checklist
footer: MIT Licensed | Copyright © 2018 独孤求败
---

### 快速使用

``` bash
# 安装
npm i -S mp-weui

# 在 App.vue 中全局引入 css 文件
import 'mp-weui/lib/style.css'

# 由于 mpvue component 暂不支持全局注册，暂时只能使用局部注册
import MpRadio from 'mp-weui/packages/radio'

export default {
  components: {
    MpRadio
  }
}
```
