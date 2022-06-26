# React-Atomic-App

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [React-Atomic-App](#react-atomic-app)
  - [実行方法](#実行方法)
  - [Atomic Designとは(工事中)](#atomic-designとは工事中)
  - [ディレクトリ構成](#ディレクトリ構成)
  - [Reduxについて(記載するかも)](#reduxについて記載するかも)
  - [子コンポーネント受け取るコンポーネントの実装](#子コンポーネント受け取るコンポーネントの実装)

<!-- /code_chunk_output -->

## 実行方法

```shell
cd atomic_app
yarn start
```

## Atomic Designとは(工事中)

## ディレクトリ構成

- ディレクトリ構成は以下の様なイメージ
  - `ui`は以下のようなイメージ
    - `components`: 画面で用いる共通部品
    - `layout`: 画面レイアウトを組む際に用いるコンポーネントを実装する
    - `contents`: 実際の画面のレイアウトを組む
      - 各部品ごとにディレクトリを掘る

```txt
src
├─interface                 // 型定義
│
├─routes                    // 画面遷移設定
│
├─stores                    // Redux周り(未定)
│
└─ui                        // UI周り構築
    ├─components            // 共通UI部品
    │  ├─[XXXForms]         // 実装するコンポーネント名でディレクトリを掘る
    │  │  ├─atom            // 構成する要素の粒度によって
    │  │  ├─molecule        // Atoms ~ Organismsに分割する
    │  │  └─organism 
    │  └─XXXForms.tsx       // 掘ったディレクトリ直下にimportするコンポーネントを実装する
    │
    ├─contents              // 各画面の実装
    │  ├─Login              // 各画面用に各階層ごとに実装する
    │  │  ├─organism
    │  │  ├─template
    │  │  └─Login.tsx
    │  └─[YYY]
    │      ├─molecule
    │      └─YYY.tsx
    └─layouts               // 共通レイアウト構成用コンポーネント
        ├─[XXXRow]
        │ └─XXXRow.tsx
        ├─[YYYGrid]
        │ └─YYYGrid.tsx
        └─[ZZZColum]
          └─ZZZColum.tsx
```

## Reduxについて(記載するかも)

## 子コンポーネント受け取るコンポーネントの実装

- `PropsWithChildren`を用いることで子コンポーネントを受け取るコンポーネントを実装することができる

```tsx
const XXXElement: React.FC<React.PropsWithChildren<T>> = (props) => {
    return (
        <XXXElement>
            { props.children }
        </XXXElement>
    )
}
export default XXXElement;
```

- 以下のように用いると`XXXElement`の`rops.children`に`Hoge`が渡る

```tsx
const XXXPage: React.FC = () => {
    return (
        <XXXElement>
            Hoge
        </XXXElement>
    )
}
export default XXXElement;
```
