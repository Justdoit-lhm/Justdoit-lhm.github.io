/* global hexo */

'use strict';

// hexo-generator-index 在 0 篇文章时一个页面都不生成，/ 会直接 404。
// 空站也渲染首页（首屏 + 关于我 + 时间线）；有文章后 index_generator
// 正常输出 index.html，本生成器返回空数组让位，两者不会同时产出。
hexo.extend.generator.register('home-fallback', locals => {
  if (locals.posts.length > 0) return [];

  return {
    path: 'index.html',
    layout: 'index',
    data: {}
  };
});
