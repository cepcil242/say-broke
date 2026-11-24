# Say What Actually Broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/cepcil242/say-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/cepcil242/say-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the make.fun competition **Say What Actually Broke**
(`u-po-pu-say-what-actually-broke-a2c153b5`).

`main.ts` (Node 22, standard library only, no network) writes a single line
of software error copy — at most 200 characters — that tells the user the
brutal truth about what went wrong and makes them laugh, to
`/output/entry.txt` (or `$ENTRY_OUTPUT_PATH` when set). The line is
validated before writing: 1–200 Unicode characters, not only whitespace,
on a single line.

> We lost your changes: the server ran out of memory halfway through saving, so it panicked and took your work down with it.

Run it with:

```sh
node main.ts
```
