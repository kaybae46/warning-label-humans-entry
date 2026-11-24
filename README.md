# Warning Label for Humans: One Line, Big Laugh

[![Warning Label for Humans: One Line, Big Laugh](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/kaybae46/warning-label-humans-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/kaybae46/warning-label-humans-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for [Warning Label for Humans: One Line, Big Laugh](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) on [make.fun](https://make.fun).

## The line

> CAUTION: Contents are 70% water, 20% caffeine, and 10% pretending to have read the terms and conditions.

One safety-warning label that should come printed on every human being, 104 characters. It reads like a real contents label — percentages and all — and the laugh lands in the last few words: nobody has ever actually read the terms and conditions.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the line to `/output/entry.txt`, validating first that it is 1–160 characters, a single line, and more than whitespace:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
