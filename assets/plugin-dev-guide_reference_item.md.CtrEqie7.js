import{ai as n,x as h,aE as l,L as i,aa as a,v as p}from"./chunks/framework.DNV5qdj1.js";const F=JSON.parse('{"title":"Zotero 条目","description":"","frontmatter":{},"headers":[],"relativePath":"plugin-dev-guide/reference/item.md","filePath":"wiki/plugin-dev-guide/reference/item.md"}'),k={name:"plugin-dev-guide/reference/item.md"};function r(d,s,E,o,g,c){const t=a("NolebaseGitContributors"),e=a("NolebaseGitChangelog");return p(),h("div",null,[s[0]||(s[0]=l(`<h1 id="zotero-条目" tabindex="-1">Zotero 条目 <a class="header-anchor" href="#zotero-条目" aria-label="Permalink to &quot;Zotero 条目&quot;">​</a></h1><p>Item（条目）是 Zotero 中的基础数据元素。条目根据类型又可分为普通条目 (regular item)，附件 (attachment item)，笔记 (note item) 和注释 (annotation item)。Zotero 中，小到一个 PDF 附件中的一条高亮，大到一个集合（collection），都可以抽象为一个条目（Item）。</p><p>大多数插件的最终目的就是修改这些条目，例如，添加标签，修改信息，等等。</p><h2 id="创建条目" tabindex="-1">创建条目 <a class="header-anchor" href="#创建条目" aria-label="Permalink to &quot;创建条目&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zotero.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(itemType);</span></span></code></pre></div><h2 id="获取条目" tabindex="-1">获取条目 <a class="header-anchor" href="#获取条目" aria-label="Permalink to &quot;获取条目&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zotero.Items.get: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ids</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZoteroItem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZoteroItem[];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zotero.Items.getByLibraryAndKeyAsync: (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  libraryID: Number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  itemKey: String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZoteroItem</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">declare</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZoteroPane.getSelectedItems: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZoteroItem[];</span></span></code></pre></div><p>通过 <code>Zotero.Items.get</code> / <code>getByLibraryAndKeyAsync</code> 来从 ID 获取条目； 通过 <code>ZoteroPane.getSelectedItems</code> 获取当前选中的条目。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZoteroPane.itemsView.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).ref;</span></span></code></pre></div><h2 id="修改条目" tabindex="-1">修改条目 <a class="header-anchor" href="#修改条目" aria-label="Permalink to &quot;修改条目&quot;">​</a></h2><p>对条目内容进行修改后，请使用 <code>item.save</code> / <code>item.saveTx()</code>来保存。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zotero.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;computerProgram&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Zotero.ItemTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;note&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h2 id="pdf-批注" tabindex="-1">PDF 批注 <a class="header-anchor" href="#pdf-批注" aria-label="Permalink to &quot;PDF 批注&quot;">​</a></h2><blockquote><p>Zotero 中的批注也是 Item 类型！</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Zotero.Items.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isAnnotation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span></code></pre></div><p>注释的属性：</p><ul><li>annotationText：高亮注释的内容</li><li>parentItem：获得 pdf 条目</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> annotations</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Zotero.Items.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reader.itemID).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAnnotations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">navigate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ annotationKey: annotations[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].key });</span></span></code></pre></div><h2 id="从对话框选择条目" tabindex="-1">从对话框选择条目 <a class="header-anchor" href="#从对话框选择条目" aria-label="Permalink to &quot;从对话框选择条目&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { dataIn: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dataOut: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, deferred: Zotero.Promise.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;chrome://zotero/content/selectItemsDialog.xhtml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;chrome,dialog=no,centerscreen,resizable=yes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  io</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">io.deferred.promise.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(io));</span></span></code></pre></div>`,20)),i(t),i(e)])}const u=n(k,[["render",r]]);export{F as __pageData,u as default};