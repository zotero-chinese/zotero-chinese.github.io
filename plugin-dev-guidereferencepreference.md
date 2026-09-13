---
url: /plugin-dev-guidereferencepreference.md
---

# Zotero 首选项

Preference 是 Zotero 插件的一种持久化设置能力。与其他代码运行环境相同，变量在 Zotero 重启后会被重置，因此对于用户的设置等需要持久存储的变量，通过 Preference 来存取。

Preference 存储于 [Zotero 配置文件目录](https://www.zotero.org/support/kb/profile_directory) 下的 `prefs.js`。除特殊情况，请勿引导用户修改该文件。

💡 注意：Preference 的值有长度限制，请勿设置太长的字符串。

## 默认设置

在插件根目录新建 `prefs.js`，并填入如下示例的内容，可以初始化的 Preference 的键和值。键为字符串，值为布尔、数字或字符串其一。

```javascript
pref("extensions.zotero.Knowledge4Zotero.syncNoteIds", "");
pref("extensions.zotero.Knowledge4Zotero.syncPeriod", 10000);
pref("extensions.zotero.Knowledge4Zotero.autoAnnotation", false);
```

::: warning

请注意，该文件中每一行的 pref 请勿换行。换行可能导致失效，并不会有明显的错误提示，可能导致新用户的默认配置为空。

:::

## 首选项窗格

### 注册首选项窗格

Zotero 现在包含一个用于注册首选项窗格的内置接口。在插件的 `startup` 中：

```js
Zotero.PreferencePanes.register({
  pluginID: "make-it-red@zotero.org",
  src: "prefs.xhtml",
  scripts: ["prefs.js"],
  stylesheets: ["prefs.css"],
});
```

更多设置项请参考源码：[preferencePanes.js](https://github.com/zotero/zotero/blob/main/chrome/content/zotero/xpcom/preferencePanes.js#L123)。

窗格的 `src` 应指向包含 XUL/XHTML 片段的文件。片段不能有 `<!DOCTYPE` 。默认命名空间是 XUL，HTML 标签可在 `html:` 下访问。一个简单的窗格可能如下所示：

```xml
<vbox onload="MakeItRed_Preferences.init()">
	<groupbox>
		<label><html:h2>Colors</html:h2></label>
		<!-- [...] -->
	</groupbox>
</vbox>
```

要使用 Fluent 进行本地化，请在 XUL `<linkset>` 中包含一个或多个 HTML `<link>` 元素：

```xml
<linkset>
	<html:link rel="localization" href="make-it-red.ftl"/>
</linkset>
```

首选项窗格文本的本地化详情请参考：[本地化](./localization.md)。

::: warning 设置命名空间以避免冲突

请注意，首选项窗格中的所有 `class` 、`id` 和 `data-l10n-id` 都应命名空间以避免插件之间发生冲突。

:::

### 绑定首选项

通过将标签的 `preference` 属性设置为首选项的键，即可绑定首选项，例如：

```xml
<html:input type="text" preference="extensions.zotero.makeItRed.color"/>
```

## 增删改查设置项

源码位置：[chrome\content\Zotero\xpcom\prefs.js](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/prefs.js)

```typescript
declare namespace Zotero {
  interface Prefs {
    /**
     * Retrieve a preference
     */
    get(pref: string, global?: boolean): boolean | string | number | undefined;

    /**
     * Set a preference
     */
    set(pref: string, value: boolean | string | number, global?: boolean): any;

    clear(pref: string, global?: boolean): void;
  }
}
```

### Zotero.Prefs.get

读取名称为 `pref` 的 Preference。

`pref` 为 Preference 的键，`global` 为是否是全局命名域，默认否。

注意，对于 `extensions.zotero.addonRef.key`，在页面绑定以及设置编辑器中，Preference 的键名为 `extensions.zotero.addonRef.key`，而在 API 中调用时只需要 `addonRef.key`，否则则需要启用全局命名域。

例：首选项键 `extensions.zotero.formatmetadata.abbr` 的值为 `true`。

```typescript
Zotero.Prefs.get("pdfpreview.enable"); // true
Zotero.Prefs.get("extensions.zotero.formatmetadata.abbr"); // undefined
Zotero.Prefs.get("extensions.zotero.formatmetadata.abbr", true); // true
Zotero.Prefs.get("formatmetadata.abbr", true); // undefined
```

### Zotero.Prefs.set

设置名称为 `pref` 的 Preference 为 `value`。

`pref` 为 Preference 的键，`value` 为 Preference 的值，`global` 为是否是全局命名域，默认否。

例：首选项键 `extensions.zotero.pdfpreview.enable` 的当前值为 `true`，需要将其修改为 `false`。

```typescript
Zotero.Prefs.set("pdfpreview.enable", false);
Zotero.Prefs.get("pdfpreview.enable"); // false
```

### Zotero.Prefs.clear

::: info Todo
:::

### 辅助函数

在插件模板中，提供了一个简便的工具函数，来见避免我们每次都要输入 `Zotero.Prefs.`:

```ts
// src/utils/prefs.ts
import { config } from "../../package.json";

/**
 * Get preference value.
 * Wrapper of `Zotero.Prefs.get`.
 * @param key
 */
export function getPref(key: string) {
  return Zotero.Prefs.get(`${config.prefsPrefix}.${key}`, true);
}

/**
 * Set preference value.
 * Wrapper of `Zotero.Prefs.set`.
 * @param key
 * @param value
 */
export function setPref(key: string, value: string | number | boolean) {
  return Zotero.Prefs.set(`${config.prefsPrefix}.${key}`, value, true);
}

/**
 * Clear preference value.
 * Wrapper of `Zotero.Prefs.clear`.
 * @param key
 */
export function clearPref(key: string) {
  return Zotero.Prefs.clear(`${config.prefsPrefix}.${key}`, true);
}
```

有了工具函数，我们就可以通过 `getPref("enable")` 来简写 `Zotero.Prefs.get("pdfpreview.enable");`。

## 参考资料

* [Zotero 7 for developers](https://www.zotero.org/support/dev/zotero_7_for_developers)
* [Zotero types](https://github.com/windingwind/zotero-types/blob/master/types/xpcom/prefs.d.ts)
