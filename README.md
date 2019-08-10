@infoable/cli
=============

A CLI tool for Able API

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@infoable/cli.svg)](https://npmjs.org/package/@infoable/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@infoable/cli.svg)](https://npmjs.org/package/@infoable/cli)
[![License](https://img.shields.io/npm/l/@infoable/cli.svg)](https://github.com/kimdoyeong/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @infoable/cli
$ able COMMAND
running command...
$ able (-v|--version|version)
@infoable/cli/0.0.0 win32-x64 node-v10.15.1
$ able --help [COMMAND]
USAGE
  $ able COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`able hello [FILE]`](#able-hello-file)
* [`able help [COMMAND]`](#able-help-command)

## `able hello [FILE]`

describe the command here

```
USAGE
  $ able hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ able hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/kimdoyeong/cli/blob/v0.0.0/src\commands\hello.ts)_

## `able help [COMMAND]`

display help for able

```
USAGE
  $ able help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src\commands\help.ts)_
<!-- commandsstop -->
