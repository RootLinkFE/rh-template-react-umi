---
title: 内存管理器
sidemenu: false
---

# MemoryManager

内存管理器

### API

| 参数          | 说明                  | 类型                                        | 默认值  |
| ------------- | --------------------- | ------------------------------------------- | ------- |
| disabled      | 是否禁用              | `boolean`                                   | `false` |
| size          | 内存大小（单位：bit） | `number`                                    | `64`    |
| appendRecord  | 要添加存储的内存记录  | [`AppendMemoryRecord`](#appendmemoryrecord) | -       |
| storedRecords | 已存储的内存记录      | [`MemoryRecord`](#memoryrecord)`[]`         | -       |
| onChange      | 内存记录改变回调      | [`MemoryRecord`](#memoryrecord)`[] => void` | -       |

### AppendMemoryRecord

| 参数   | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| label  | 标识     | `string` | -      |
| length | 内存长度 | `number` | -      |

### MemoryRecord

| 参数     | 说明                | 类型     | 默认值 |
| -------- | ------------------- | -------- | ------ |
| label    | 标识                | `string` | -      |
| startBit | 起始位              | `number` | -      |
| length   | 内存长度(单位：bit) | `number` | -      |

## Demo

<code src="./Demo.tsx">
