# 🥞 Token UIkit

[![Version](https://img.shields.io/npm/v/@DecentralizedLotto/uikit)](https://www.npmjs.com/package/@DecentralizedLotto/uikit) [![Size](https://img.shields.io/bundlephobia/min/@DecentralizedLotto/uikit)](https://www.npmjs.com/package/@DecentralizedLotto/uikit)

Token UIkit is a set of React components and hooks used to build pages on Token's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @DecentralizedLotto/uikit`

**\*Note**: In case you want to use the older version of the Token UIkit, you should install @DecentralizedLotto-libs/uikit, instead, but we recommend using the latest version of the UIkit.\*

## Setup

### Theme

Before using Token UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@DecentralizedLotto/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@DecentralizedLotto/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://DecentralizedLotto.github.io/token-uikit/)
