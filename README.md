# React-Atomic-App

## ディレクトリ構成

* ディレクトリ構成は以下の様なイメージ
    * `ui`は以下のようなイメージ
        * `components`: 画面で用いる共通部品
            * 各部品ごとにディレクトリを掘る
        * `layout`: 画面レイアウトを組む際に用いるコンポーネントを実装する
        * `contents`: 実際の画面のレイアウトを組む

```
src
├─routes                    // 画面遷移設定
│
├─stores                    // Redux周り(未定)
│
└─ui                        // UI周り構築
    ├─components            // 共通UI部品
    │  ├─[XXXForms]
    │  │  ├─atoms           // 構成する要素の粒度によって
    │  │  ├─molecules       // Atoms ~ Organismsに分割する
    │  │  └─organisms
    ├─contents              // 各画面の実装
    │  ├─[XXX]              // 各画面用に各階層ごとに実装する
    │  │  ├─organisms
    │  │  ├─templates
    │  │  └─XXXPage
    │  └─[YYY]
    │      └─molecules
    └─layouts               // 共通レイアウト構成用コンポーネント
        ├─[XXXRow]
        ├─[YYYGrid]
        └─[ZZZColum]
```

## 子コンポーネント受け取るコンポーネントの実装

* `PropsWithChildren`を用いることで子コンポーネントを受け取るコンポーネントを実装することができる

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

* 以下のように用いると`XXXElement`の`rops.children`に`Hoge`が渡る
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