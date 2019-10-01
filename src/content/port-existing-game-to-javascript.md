---
layout: post
title: "Port your existing game to JavaScript"
author: Satvik Jagannath
tags: ["JavaScript","Web"]
image: img/games.jpg
date: "2019-10-02T01:42:37.121Z"
draft: false
---

If you are a native game developer using a game engine or otherwise and if you already have your code in C++  and you are interested in how you can port your games over to the Web, you should learn more about our [Emscripten](http://kripken.github.io/emscripten-site/index.html) tool - this is an LLVM to JavaScript compiler, which takes LLVM bytecode (e.g. generated from C/C++ using Clang, or from another language) and compiles that into [asm.js](https://developer.mozilla.org/en-US/docs/Games/Tools/asm.js), which can be run on the Web.


To get started, see:

[About Emscripten](http://kripken.github.io/emscripten-site/docs/introducing_emscripten/about_emscripten.html) for an introduction including high-level details.
[Download and Install](http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html) for installing the toolchain.
[Emscripten Tutorial](http://kripken.github.io/emscripten-site/docs/getting_started/Tutorial.html) for a tutorial to teach you how to get started.

The above article details were mainly fetched from [Mozilla Games](https://developer.mozilla.org/en-US/docs/Games) page. More information about Web Games will be published in the upcoming articles.