<div align="center">
<img height=150 src="https://raw.githubusercontent.com/zsmatrix62/echoo-app/main/src-tauri/icons/128x128.png" />
</div>

<p align="center"><span>A cross-platform desktop application of tools for developers
</span></p>


<div align="center">

[//]: # ([![Download Counts]&#40;https://img.shields.io/github/downloads/naaive/orange/total?style=flat&#41;]&#40;https://github.com/naaive/orange/releases&#41;)

[//]: # ([![Stars Count]&#40;https://img.shields.io/github/stars/naaive/orange?style=flat&#41;]&#40;https://github.com/naaive/orange/stargazers&#41; [![Forks Count]&#40;https://img.shields.io/github/forks/naaive/orange.svg?style=flat&#41;]&#40;https://github.com/naaive/orange/network/members&#41;)

[//]: # ([![Issues Count]&#40;https://img.shields.io/github/issues/naaive/orange.svg?style=flat&#41;]&#40;https://github.com/naaive/orange/issues&#41;)

[//]: # ([![LICENSE]&#40;https://img.shields.io/badge/license-gpl-green?style=flat&#41;]&#40;https://github.com/naaive/orange/blob/master/LICENSE&#41;)

[![Version](https://img.shields.io/github/release/echoo-app/echoo-app.svg?style=flat-square)](https://github.com/zsmatrix62/echoo-app/releases)

[![Windows Support](https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white)](https://github.com/zsmatrix62/echoo-app/releases)
[![macOS Support](https://img.shields.io/badge/MACOS-adb8c5?style=flat&logo=macos&logoColor=white)](https://github.com/zsmatrix62/echoo-app/releases)
[![Linux Support](https://img.shields.io/badge/linux-1793D1?style=flat&logo=linux&logoColor=white)](https://github.com/zsmatrix62/echoo-app/releases)
</div>

## 🌏 Online Web

[Echoo.app](https://echoo.app) provides online version of the same tools **[echoo.app](https://echoo.app)**

## 💻 Offline Client / Download

Client version of [Echoo.app](https://echoo.app) provides full `offline` features, download them from
the [release page](https://github.com/echoo-app/echoo-app/releases).

----

![](docs/img/json-2.png)
![](docs/img/json-1.png)

-----

## 🎉 Features / Todos

Click link to check screenshots

### Formatters

- [x] [JSON Formatter Validator](docs/json-formatter.md)
- [x] [Base64 (Image) encoder and decoder](docs/base64-ende.md)
- [ ] URL encoder and decoder
- [ ] URL Parser
- [ ] JWT Debugger
- [ ] RegExp Tester
- [ ] SQL Formatter
- [ ] Cron Job Parser

### Generators

- [ ] UUID/ULID Generator/Decoder
- [ ] Hash Generator

### Converters

- [ ] Number Base Converter
- [ ] Unix Time Converter
- [ ] JSON <- -> YAML

# 🧑‍💻 Development

## Architecture / Workspace

### /api

gRPC API for both client and [https://echoo.app](https://echoo.app)

### /src-tauri

`tauri` source directory for offline clients

### /web-src

`React` + `Typescript` source for frontend UI

## Build bundle

- MacOS / Linux

```shell
git clone git@github.com:echoo-app/echoo-app.git && \
cd echoo-app && \
make build-bundle
```

- Windows

```bash
git clone https://github.com/echoo-app/echoo-app.git  && \
cd echoo-app  && \
yarn install && cd web-src && yarn build && cd .. && yarn tauri build
```

Check bundle file in `target/release` directory
