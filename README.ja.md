# VNovel

![](https://raw.githubusercontent.com/opera7133/vnovel/main/images/screenshot.png)

Pixivっぽい小説向けのテーマ。

デモはこちら: https://vnovel.pages.dev

## 機能

- レスポンシブ
- タグ
- ライト/ダークテーマ
- 変更可能な書体/背景色
- ルビ表示（`{漢字|かんじ}`）
- 改ページ（`[newpage]`）
- Google Analytics
- Giscus
- RSSフィード
- 多言語 (en/ja)
- [Lighthouse 100/100](https://pagespeed.web.dev/analysis/https-vnovel-pages-dev/jryvdmr9ob?form_factor=mobile)

## テーマの追加

### 方法 1

あなたのHugoサイトのあるフォルダで以下のコマンドを実行します。

```bash
git clone https://github.com/opera7133/vnovel themes/vnovel
```

アップデートするときは:

```bash
cd themes/vnovel
git pull
```

### 方法 2

あなたのHugoサイトのあるフォルダで以下のコマンドを実行します。

```bash
git submodule add https://github.com/opera7133/vnovel.git themes/vnovel
```

アップデートするときは:

```bash
git submodule update --remote --merge
```

### 依存関係の追加

[Node.js](https://nodejs.org/)が必要ですので、予めインストールしてください。

`themes/vnovel/exampleSite` から `package.json` をHugoサイトのルートにコピーして、そこで以下のコマンドを実行します。

```bash
npm install
```

## 使い方

テーマを正常にインストールした後、サイトを構築するにはさらにいくつかの手順が必要です。

### コンフィグを変更

`exampleSite` の `hugo.toml` をHugoサイトのルートにコピーします。必要に応じて内容を変更してください。

<details>

<summary>日本語で説明を見たい方用</summary>

```toml
# サイトのURL
baseURL = "https://vnovel.pages.dev"
# サイトタイトル
title = "VNovel"
# サイトの制作者
author = ""
# 言語（日本語なら"ja"）
languageCode = "en"
DefaultContentLanguage = "en"
# ショートコード（markdownで楽にHTMLを使うためのもの）
enableInlineShortcodes = true
# テーマ
theme = "vnovel"
# robots.txt（検索エンジンクローラー用）
enableRobotsTXT = true
# HTMLをmarkdownで使ったときに警告を表示しない
ignoreLogs = ['warning-goldmark-raw-html']

# 日本語, 中国語, 韓国語を使用する場合はコメントアウトを外す
#hasCJKLanguage = true

[taxonomies]
  tag = "tags"
  author = "authors"

[services]
  [services.googleAnalytics]
  # Google Analyticsを使う場合
  #id = "G-1234567890"

  [services.disqus]
  # Disqus コメント
  #shortname = "your-disqus-shortname"

[params]
# 1ページに表示する投稿の件数
paginator_pages = "6"

# サイトロゴ
#logo = ""

  [params.homepage_meta_tags]
  # SNS等でリンクを貼ったときに見えるプレビュー用
  meta_description = "Pixiv-like theme for novels."
  meta_og_title = "VNovel"
  meta_og_type = "website"
  meta_og_url = "https://vnovel.pages.dev"
  meta_og_image = "https://vnovel.pages.dev/img/thumbnail.png"
  meta_og_description = "Pixiv-like theme for novels."
  meta_twitter_card = "summary_large_image"
  meta_twitter_site = "@username"
  meta_twitter_creator = "@username"

  [params.giscus]
  # Giscus コメント
  # https://giscus.app/ja の導入方法を参照してください
  #repo = "your-repo"
  #repo_id = "your-repo-id"
  #category = "Announcements"
  #category_id = "your-category-id"
  #mapping = "pathname"
  #strict = "0"
  #reactions_enabled = "1"
  #emit_metadata = "0"
  #input_position = "bottom"
  #theme = "preferred_color_scheme"
  #lang = "en"
  #loading = "lazy"

# ヘッダー（モバイルはサイド）メニューのリンク
[menu]
  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 1
  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 2

# ここから下は特に変更する必要がありません
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      # HTMLタグをmarkdown内で使えるようにする
      unsafe = true

# TailwindCSSビルド用
[build]
  [build.buildStats]
    enable = true
  [[build.cachebusters]]
    source = 'assets/notwatching/hugo_stats\.json'
    target = 'css'
  [[build.cachebusters]]
    source = '(postcss|tailwind)\.config\.js'
    target = 'css'
[module]
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.mounts]]
    disableWatch = true
    source = 'hugo_stats.json'
    target = 'assets/notwatching/hugo_stats.json'

```

</details>

### サイトを確認

サイトの動作を確認するには、Hugo のローカルサーバーを実行します。

```bash
hugo server
```

ブラウザのアドレスバーに `localhost:1313` と入力します。

### サイトをビルド

```bash
hugo
```

## 貢献

バグや機能追加提案などありましたら、お気軽に [Issue](https://github.com/opera7133/vnovel/issues) または Pull Request を作成してください。

## ライセンス

このテーマは [MIT license](https://github.com/opera7133/vnovel/blob/master/LICENSE) で提供されています。
