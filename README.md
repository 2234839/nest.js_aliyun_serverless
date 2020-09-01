# nest.js 部署到阿里云的样例

[测试地址](http://nestjsserverless.example.shenzilong.cn/)

思路：https://zhuanlan.zhihu.com/p/155618260

## 升级到 nest.js v7 的注意事项

tsconfig.json 中的 `"esModuleInterop": true,` 需要保留的，不然从 express 中无法得到默认导出
