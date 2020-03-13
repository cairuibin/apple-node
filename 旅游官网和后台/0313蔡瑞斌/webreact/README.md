#### 1.安包并释放

#### 2.配置反向代理 
    "proxy":"http://localhost:7001"

#### 3.配置antd 按需加载
```js
//找到package.json的babel 增加一个plugins选项
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" 
      }]
    ]
  }
```
#### 4.引入一些公共方法
#### 5.路由表封装
#### 6.hooks





