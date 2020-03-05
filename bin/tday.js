#!/usr/bin/env node
'use strict'

const fs = require('fs')
const date = new Date()
const currYear = date.getFullYear()
const currMonth = date.getMonth() + 1
const currDay = date.getDate()
const toString = (num) => num > 9 ? String(num) : '0' + String(num)
const args = process.argv.slice(2)
const prefixDate = currYear + '-' + toString(currMonth) + '-' + toString(currDay) + '-'

if(!args.length) return

const fileName = prefixDate + args[0]

fs.writeFile(fileName, '', (err) => {
  if(err) {
    console.error(err)
    return
  }
  console.log(fileName + ' created!')
})
