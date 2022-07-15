import{_ as s,r as l,o as a,c as t,a as n,b as d,d as e,e as o}from"./app.2222b4ef.js";const r={},u=n("h2",{id:"\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),e(" \u7B80\u4ECB")],-1),c=n("p",null,"\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u662F\u4E00\u79CD\u53EF\u5185\u5D4C\u4E8E\u6D4F\u89C8\u5668\uFF0C\u53EF\u76F4\u63A5\u5728\u7F51\u9875\u4E0A\u5BF9\u6587\u5B57\u5185\u5BB9\u8FDB\u884C\u7F16\u8F91\u7684\u6280\u672F\uFF0C\u65B9\u4FBF\u90A3\u4E9B\u4E0D\u592A\u61C2 HTML \u7528\u6237\u4F7F\u7528\u3002",-1),v={href:"https://www.npmjs.com/package/vue-quill-editor",target:"_blank",rel:"noopener noreferrer"},m=e("\u5B98\u65B9\u6587\u6863"),p=o(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-quill-editor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ol><li><p>\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165\u5E76\u6302\u8F7D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;quill/dist/quill.core.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;quill/dist/quill.snow.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;quill/dist/quill.bubble.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> quillEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-quill-editor&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    quillEditor<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;!-- Two-way Data-Binding --&gt;
  &lt;quill-editor
    ref=&quot;myQuillEditor&quot;
    v-model=&quot;content&quot;
    :options=&quot;editorOption&quot;
    @blur=&quot;onEditorBlur($event)&quot;
    @focus=&quot;onEditorFocus($event)&quot;
    @ready=&quot;onEditorReady($event)&quot;
  /&gt;

  &lt;!-- Or manually control the data synchronization --&gt;
  &lt;quill-editor
    :content=&quot;content&quot;
    :options=&quot;editorOption&quot;
    @change=&quot;onEditorChange($event)&quot;
  /&gt;
&lt;/template&gt;

&lt;script&gt;
  // You can also register Quill modules in the component
  import Quill from &#39;quill&#39;
  import someModule from &#39;../yourModulePath/someQuillModule.js&#39;
  Quill.register(&#39;modules/someModule&#39;, someModule)

  export default {
    data () {
      return {
        content: &#39;&lt;h2&gt;I am Example&lt;/h2&gt;&#39;,
        editorOption: {
          // Some Quill options...
        }
      }
    },
    methods: {
      onEditorBlur(quill) {
        console.log(&#39;editor blur!&#39;, quill)
      },
      onEditorFocus(quill) {
        console.log(&#39;editor focus!&#39;, quill)
      },
      onEditorReady(quill) {
        console.log(&#39;editor ready!&#39;, quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log(&#39;editor change!&#39;, quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log(&#39;this is current quill instance object&#39;, this.editor)
    }
  }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4);function b(h,q){const i=l("ExternalLinkIcon");return a(),t("div",null,[u,c,n("p",null,[n("a",v,[m,d(i)])]),p])}var g=s(r,[["render",b],["__file","\u5BCC\u6587\u672C\u7F16\u8F91\u5668.html.vue"]]);export{g as default};
