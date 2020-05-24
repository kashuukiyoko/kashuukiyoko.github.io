(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{341:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"👀-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👀-前言"}},[t._v("#")]),t._v(" 👀 前言")]),t._v(" "),s("p",[t._v("Github："),s("a",{attrs:{href:"https://github.com/Drew233/Artitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("详细教程参考：")]),t._v(" "),s("ul",[s("li",[t._v("cungudafa："),s("a",{attrs:{href:"https://cungudafa.top/post/96c.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo（butterfly）添加说说页面（Artitalk可在线发布）"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Uncle_drew: "),s("a",{attrs:{href:"https://cndrew.cn/2020/04/10/hexo-shuoshuo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("为你的hexo博客添加动态的（可直接发布说说的）说说页面"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("视频教程：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV1jf4y1m7LK#reply2862116366",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk更新说明以及教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV16T4y1u7Yp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk--基于leancloud实现的可实时发布说说/微语的js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV16A411b7UF",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo-shuoshuo bilibili"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("因为项目初期版本更新较为频繁，所以教程仅作参考，请仔细阅读使用文档，以此为准。")]),t._v(" "),s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("实时发布")]),t._v(" "),s("li",[t._v("支持markdown语法")]),t._v(" "),s("li",[t._v("支持剪切板图片直接上传，支持点击上传图片")]),t._v(" "),s("li",[t._v("方便引用")])]),t._v(" "),s("h2",{attrs:{id:"🚀-开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🚀-开始使用"}},[t._v("#")]),t._v(" 🚀 开始使用")]),t._v(" "),s("h3",{attrs:{id:"🌈-leancloud的相关准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌈-leancloud的相关准备"}},[t._v("#")]),t._v(" 🌈 leancloud的相关准备")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🌍 使用国际版的leancloud")]),t._v(" "),s("p",[t._v("因为leancloud的国内节点需要接入备案域名作为安全域名。明显违背了适用性强的理念。所以本文档只针对国际版的leancloud进行说明。如果你有其他需要，可以根据自己的需要修改js。")])]),t._v(" "),s("ol",[s("li",[t._v("前往"),s("a",{attrs:{href:"https://leancloud.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leancloud国际版"),s("OutboundLink")],1),t._v("，注册账号。")]),t._v(" "),s("li",[t._v("注册完成之后根据leancloud的提示绑定手机号和邮箱。")]),t._v(" "),s("li",[t._v("绑定完成之后点击"),s("code",[t._v("创建应用")]),t._v("，应用名称随意，接着在"),s("code",[t._v("结构化数据")]),t._v("中创建"),s("code",[t._v("class")]),t._v("，命名为"),s("code",[t._v("shuoshuo")]),t._v("。")]),t._v(" "),s("li",[t._v("在你新建的应用中找到"),s("code",[t._v("结构化数据")]),t._v("下的"),s("code",[t._v("用户")]),t._v("。点击"),s("code",[t._v("添加用户")]),t._v("，输入想用的用户名及密码。")]),t._v(" "),s("li",[t._v("回到"),s("code",[t._v("结构化数据")]),t._v("中，点击"),s("code",[t._v("class")]),t._v("下的"),s("code",[t._v("shuoshuo")]),t._v("。找到权限，在"),s("code",[t._v("Class 访问权限")]),t._v("中将"),s("code",[t._v("add_fields")]),t._v("以及"),s("code",[t._v("create")]),t._v("权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将"),s("code",[t._v("delete")]),t._v("和"),s("code",[t._v("update")]),t._v("也设置为跟它们一样的权限。")]),t._v(" "),s("li",[t._v("在最菜单栏中找到设置->应用keys，记下来"),s("code",[t._v("AppID")]),t._v("和"),s("code",[t._v("AppKey")]),t._v("，一会会用。")]),t._v(" "),s("li",[t._v("最后将"),s("code",[t._v("_User")]),t._v("中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("❗ 关于设置权限的这几步")]),t._v(" "),s("p",[t._v("这几步一定要设置好，才可以保证不被“闲人”破解发布说说的验证")])]),t._v(" "),s("h3",{attrs:{id:"🌼-html片段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌼-html片段"}},[t._v("#")]),t._v(" 🌼 HTML片段")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("🐷 一个不足")]),t._v(" "),s("p",[t._v("由于leancloud的限制，本功能暂时无法跟valine在同一个页面使用。若想使用本功能，请在页面中关闭valine。\n关于评论的功能，以后慢慢实现解决办法")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果你加载本js后出现一直是加载页面的情况，请检查你的主题是否会对其中内容进行渲染（F12查看即可）。\n如果是因为渲染导致的问题，请在"),s("code",[t._v("<script>")]),t._v("标签外面使用"),s("code",[t._v("{% raw %}")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% raw %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" per"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endraw %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"🎅-配置项的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🎅-配置项的说明"}},[t._v("#")]),t._v(" 🎅 配置项的说明")]),t._v(" "),s("p",[t._v("必要性为False的配置项可以不添加")]),t._v(" "),s("center",[s("table",[s("thead",[s("tr",[s("th",[t._v("变量名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("必要性")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("img")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说旁边显示的头像")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("appID")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Leancloud中的应用ID")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("appKEY")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Leancloud中的应用KEY")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("per")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("每页显示说说的数量")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Leancloud中设置的用户名")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("在编辑说说的输入框中的占位符")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（空）')])]),t._v(" "),s("tr",[s("td",[t._v("placeholder2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("输入密码的输入框的占位符")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('"请输入密码"')])]),t._v(" "),s("tr",[s("td",[t._v("placeholder3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("输入头像url的输入框的占位符")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（默认头像）')])]),t._v(" "),s("tr",[s("td",[t._v("lazy")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启加载动画（1：开启  0：关闭）")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("1（默认开启）")])]),t._v(" "),s("tr",[s("td",[t._v("bgimg")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说输入框背景图片（需为图片格式）")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（空）')])]),t._v(" "),s("tr",[s("td",[t._v("color1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说背景颜色1&按钮颜色1")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('"RGBA(255, 125, 73, 0.75)"')])]),t._v(" "),s("tr",[s("td",[t._v("color2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说背景颜色2&按钮颜色2")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('"#9BCD9B"')])]),t._v(" "),s("tr",[s("td",[t._v("color3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说字体颜色1")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（空）')])])])]),t._v(" "),s("p",[t._v("在头像url中输入图片链接会在本次发布的说说中覆盖默认头像")]),t._v(" "),s("p",[t._v("color配置项原则上支持RGB和十六进制代表的颜色")])]),t._v(" "),s("h3",{attrs:{id:"🔨-测试使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-测试使用"}},[t._v("#")]),t._v(" 🔨 测试使用")]),t._v(" "),s("p",[t._v("如果上面的配置没有问题，打开你的页面，点击页面右下角的"),s("code",[t._v("Powered by Artitalk")]),t._v("上方的✍️即可显示输入框，然后在身份验证的输入框中填入Leancloud设置的用户密码。点两次"),s("code",[t._v("发布")]),t._v(",即可成功发布说说。（如果你的博客使用了Pjax，会出现一些小问题，暂时无法解决")]),t._v(" "),s("h3",{attrs:{id:"🔨-说说内容的修改与删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-说说内容的修改与删除"}},[t._v("#")]),t._v(" 🔨 说说内容的修改与删除")]),t._v(" "),s("p",[t._v("在leancloud中找到自己添加的名为"),s("code",[t._v("shuoshuo")]),t._v("的class，在里面的"),s("code",[t._v("content")]),t._v("中编辑即可。")]),t._v(" "),s("h2",{attrs:{id:"🕸-使用cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🕸-使用cdn"}},[t._v("#")]),t._v(" 🕸 使用cdn")]),t._v(" "),s("h3",{attrs:{id:"🥇-推荐使用-unpkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🥇-推荐使用-unpkg"}},[t._v("#")]),t._v(" 🥇 推荐使用 unpkg")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('//默认获取最新\n<script type="text/javascript" src="https://unpkg.com/artitalk"><\/script>\n')])])]),s("h3",{attrs:{id:"🥉-jsdelivr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🥉-jsdelivr"}},[t._v("#")]),t._v(" 🥉 jsdelivr")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//推荐指定版本号为最新版本，目前最新为1.1.15 推荐使用最新以防止出现已知bug\nhttps://cdn.jsdelivr.net/gh/drew233/artitalk/source/版本号/artitalk.js\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);