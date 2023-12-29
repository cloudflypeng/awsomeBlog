代码片段光速配置

第一步

在根目录创建.vscode文件夹

第二步

创建.code-snippets后缀的文件

第三步

写一个对象

```javascript
{
  	"补全打印": {
		"scope": "javascript,typescript",// 语言
		"prefix": "pconsole", // 简写名字
      // 补全的文本$控制光标
		"body": [
			"console.log('$1');",
			"$2"
		],
      // 描述,补全的时候会显示
		"description": "Log output to console"
	},
}
```

