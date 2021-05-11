---
title: Type Challenges Notes - Easy 篇
description: 練習作答 Type Challenges 的一些筆記，Easy 難度的部分
createdDate: 2021/05/10
---

## 前言
這是一篇關於 [Type Challenges](https://tsch.js.org/) 作答時的一些筆記，「Type Challenges」 是什麼呢？有鑒於 TS 在前端世界裡越來越盛行，似乎已成為熱門必備技能，而 TS 中的型別系統也是日益完備與強大，除了基本的使用 type / interface 已經讓我嗅到了不足的味道，是時候來腳踏實地的練習運用 TS 型別系統了！

## 本文
在 Type Challenges 該 Repo 中的 README 中就有提供一份由難易度分類的[清單](https://github.com/type-challenges/type-challenges/blob/master/README.md#challenges)可供挑戰，並且作答時會有建立好的 TS Playground 使用，也有 github issues 中的其他參與者答案可以參考學習，可謂是非常貼心！

### Easy
#### [Pick](https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md)
- 答案：
  ```ts
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  }
  ```
- 筆記：
  首先約束 `K` 須為 `T` 的 key，接著定義 Mapped Type 令 key `P` 在 `K` 之中且 value 為 `T[P]`

#### [Readonly](https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md)
- 答案：
  ```ts
  type MyReadonly<T> = {
    readonly [K in keyof T]: T[K];
  }
  ```
- 筆記：
  定義 Mapped Type，先加上 readonly，令 key `K` 為 keyof `T`，value 為 `T[K]`
    
#### [Tuple to Object](https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md)
- 答案：
  ```ts
  type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
  }
  ```
- 筆記：
  由於 `T` 為唯讀的陣列因此可推斷為 TS 中的 tuple，這就代表 `T[number]` 是可以推斷對應的值，所以令 Mapped Type 的 key 為 `K` 並存在於 `T[number]` 之中，且令 value 為 `K`

#### [First of Array](https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md)
- 答案：
  ```ts
  type First<T extends any[]> = T[number] extends never
    ? never
    : T[0]
  ```
- 筆記：
  先約束若 `T[number]` 為 never，即陣列為空應返回 `never`，否則返回 `T[0]`

#### [Length of Tuple](https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md)
- 答案：
  ```ts
  type Length<T extends readonly any[]> = T['length']
  ```
- 筆記：
  讓 `T` 限制為唯讀 `any[]`，讓型別推斷可推斷出 `T['lemgth']`

#### [Exclude](https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.md)
- 答案：
  ```ts
  type MyExclude<T, U> = T extends U ? never : T
  ```
- 筆記：
  若 `T` 包含於 `U`，返回 `never` 否則返回 `T`

#### [Awaited](https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.md)
- 答案：
  ```ts
  type Awaited<P> = P extends Promise<infer T>
    ? T
    : never
  ```
- 筆記：
    使用 [infer](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types) 在條件式保持推斷，在這題用來判斷型別是否繼承 `Promise` 並推斷 `Promise<T>` 的 `T` 應該為什麽型別

#### [If](https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md)
- 答案：
  ```ts
  type If<C extends boolean, T, F> = C extends true ? T : F
  ```
- 筆記：
  先約束 `C` 為 `boolean` 及非 `true` 則 `false`，後面就簡單了，`C` 為 `true` 返回 `T`，反之為 `F`

#### [Concat](https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md)
- 答案：
  ```ts
  type Concat<T extends any[], U extends any[]> = [...T, ...U]
  ```
- 筆記：
  約束 `T`、`U` 為 array / tuple，就可以使用概念接近擴展符號的方法去串起 `T`、`U` 所有型別

#### [Includes](https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md)
- 答案：
  ```ts
  type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
  ```
- 筆記：
  `T` 被約束為 `readonly any[]` (tuple)，利用此點可進行 `U extends T[number]` 條件推斷

## 後記
在這篇先整理跟作答完 `Easy` 難度的所有題目，對於原本只會使用基礎型別的我來說算是滿不錯的暖身練習，也算是基本的摸了摸 `Mapped Type`、`Conditional Type` 等等的知識，截至為止也做了一部分的 `Medium` 難度的題目，難度一下就提了上來（汗，不過也讓我刷新眼界，TS 的型別系統真的很酷 :D