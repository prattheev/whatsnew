# whatsnew
Shows 'What's new' at all installed package

[![NPM Version](https://img.shields.io/npm/v/whatsnew.svg)](https://www.npmjs.org/package/whatsnew)
[![Dependency Status](https://david-dm.org/prattheev/whatsnew.svg)](https://david-dm.org/prattheev/whatsnew/) 
[![devDependency Status](https://david-dm.org/prattheev/whatsnew/dev-status.svg)](https://david-dm.org/prattheev/whatsnew/#info=devDependencies)  

## Install
```
npm install -g whatsnew
```

## Usage
Trigger the `whatsnew` command as a postinstall webhook to your project's `package.json` file.

## Example
`package.json`
```
"scripts": {
    "postinstall": "show-changelog"
}
```
`Output`

![Output](demo/sample.png)

## [License](/LICENSE.md)
Copyright (c) 2017 Pratheev <pratheev@email.com>  
This software is licensed under MIT.  

[<img src="https://img.shields.io/badge/License-MIT License-brightgreen.svg" />](/LICENSE.md#mit "Massachusetts Institute of Technology (MIT)")
