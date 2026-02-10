# VNovel

![](https://raw.githubusercontent.com/opera7133/vnovel/main/images/screenshot.png)

Pixivっぽい小説向けのテーマ。

デモはこちら: https://vnovel.pages.dev

## 機能

- レスポンシブ
- タグ
- ライト/ダークテーマ
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

`themes/vnovel/exampleSite` から `package.json` をコピーして、以下のコマンドを実行します。

```bash
npm install
```

## 使い方

テーマを正常にインストールした後、サイトを構築するにはさらにいくつかの手順が必要です。

### コンフィグを変更

`exampleSite` の `hugo.toml` をHugoサイトのルートにコピーします。必要に応じて内容を変更してください。

### サイトを確認

サイトの動作を確認するには、Hugo のローカルサーバーを実行します。

```bash
hugo server
```

ブラウザのアドレスバーに `localhost:1313` と入力します。

### サイトをビルド

```bash
$ hugo
```

## 貢献

バグや機能追加提案などありましたら、お気軽に [Issue](https://github.com/opera7133/vnovel/issues) または Pull Request を作成してください。

## ライセンス

このテーマは [MIT license](https://github.com/opera7133/vnovel/blob/master/LICENSE) で提供されています。
