---
title: Type Challenges Notes - Medium 篇（一）
description: 練習作答 Type Challenges Medium 難度的第一部分
createdDate: 2021/05/11
---

## 前言
接續上一篇 [Type Challenges Notes - Easy 篇](https://deviltea.me/posts/type-challenges) 後，這次繼續來作答 Medium 難度，由於這個難度的題目數量截至目前有 31 題，所以預計會分個三、四篇來撰寫，那就開始吧

## 本文

### Medium 1 ~ XX
#### [Get Return Type](https://github.com/type-challenges/type-challenges/blob/master/questions/2-medium-return-type/README.md)
- 答案：
  ```ts
  type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
  ```
- 筆記：
  建立條件判斷並利用 `infer` 來進行返回型態推斷 `R`，符合條件判斷即返回 `R`，為配合所有 function 型別，定義參數為 `...args: any[]`

#### [Omit](https://github.com/type-challenges/type-challenges/blob/master/questions/3-medium-omit/README.md)
- 答案：
  ```ts
  type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
  ```
- 筆記：
  這邊用到一個沒用過的關鍵字 `as`，可以看一下官方文件的[說明](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)，就我的感受上他比較像是可以將 Mapped Type 中的 key 在指定型態的過程中對型別再次轉換，像是答案中定義 key 的步驟
    1. 先定義 `P` 是 keyof `T`
    2. 再約束 `P` 差集 `K`
  最後 value 為 `T[P]`

#### [Readonly 2](https://github.com/type-challenges/type-challenges/blob/master/questions/8-medium-readonly-2/README.md)
- 答案：
  ```ts
  type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
  } & {
    [P in keyof T as P extends K ? never : P]: T[P];
  }
  ```
- 筆記：
  一開始就先約束 `K extends keyof T`，且可以不提供 `K` 預設為 `keyof T`，接下來切成兩部分，第一部分是挑選成為 readonly 的部分，由於一開始我們就已約束 `K extends keyof T` 於是可以直接寫 `readonly [P in K]: T[P];`，再來就是類似 `Omit` 方法去挑選保持原狀的部分，最後將兩部分 `&` 起來即可

#### [Deep Readonly](https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.md)
- 答案：
  ```ts
  type DeepReadonly<T> = keyof T extends never
    ? T
    : {
      readonly [K in keyof T]: DeepReadonly<T[K]>
    }
  ```
- 筆記：
  沒有錯啦！型別系統也可以有遞迴（汗，這題就是如果是巢狀型別叫要進去讓最後所有包含的屬性皆為 `readonly`，遞迴我們都知道有兩個重點，`自己呼叫自己`、`要有終止條件`，於是我們先決定出終止條件，`keyof T extends never` 判斷是否為有 key 要繼續遞迴下去，剩下就是自己呼叫自己的部分。

#### [Tuple to Union](https://github.com/type-challenges/type-challenges/blob/master/questions/10-medium-tuple-to-union/README.md)
- 答案：
  ```ts
  type TupleToUnion<T extends readonly unknown[]> = T[number]
  ```
- 筆記：
  首先 tuple 應是有序的陣列型態所以先約束 `T extends readonly unknown[]`，所以返回 `T[number]` 即可。

#### [Chainable Options](https://github.com/type-challenges/type-challenges/blob/master/questions/12-medium-chainable-options/README.md)
- 答案：
  ```ts
  type Chainable<T = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & { [P in K]: V }>;
    get(): T;
  }
  ```
- 筆記：
  刷新觀念的一題，再次感嘆型別系統的靈活性！首先讓 `T` 預設為 `{}`，接著重點在於 `option` 此 method 的型別定義，我們定義他的 generic 為 `<K extends string, V>`，讓他去自動推斷參數 key 與 value 的型別，令其返回的型別為 `Chainable<T & { [P in K]: V }>`，就是將目前的 `T` 與剛傳入的 `K`、`V` 組合起來；而 `get` 就是返回目前傳入的 `T`。

#### [Last of Array](https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.md)
- 答案：
  ```ts
  type Last<T extends readonly any[]> = [any, ...T][T['length']]
  ```
- 筆記：
  若型別為 tuple (`readonly any[]`)，則 `Array['length']` 型別就會是具體的數字而不單只是 `number`，這個做法是利用擴展符號做出長度為 `T.length + 1` 的 tuple，再利用上述所說的 length 特性來取出最後的元素型別。

#### [Pop](https://github.com/type-challenges/type-challenges/blob/master/questions/16-medium-pop/README.md)
- 答案：
  ```ts
  type Pop<T extends readonly any[]> = T extends [...infer R, any] ? R : never
  ```
- 筆記：
  這題利用擴展符號配合 `infer` 來推斷出排除最後一個元素後剩下部分 tuple。

#### [Promise.all](https://github.com/type-challenges/type-challenges/blob/master/questions/20-medium-promise-all/README.md)
- 答案：
  ```ts
  declare function PromiseAll<T extends any[]>(values: readonly [...T]):
    Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>
  ```
- 筆記：
  這題卡住了一陣子，最後參考了他人的[解答](https://github.com/type-challenges/type-challenges/issues/211)，仍然是似懂非懂，需要再做更深的理解。

#### [Type Lookup](https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.md)
- 答案：
  ```ts
  type LookUp<U, T extends string> = {
    [K in T]: U extends { type: T } ? U : never
  }[T]
  ```
- 筆記：
  先令 `T` 為 string，使 `T` 可為 Mapped Type 所用，接著定義一個 Mapped Type，`K` 於 `T` 之中，約束 `U` 需繼承 `{ type: T }`，此時已經將 `U` 的聯集分離了，最後再直接以 `[T]` 來返回分離後型別。

## 後記
進入到 Medium 的階段後，難度真的是大幅提升啊（汗，有很多的觀念有待釐清，還有一題日後再來補充。