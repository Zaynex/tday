#!/usr/bin/env node
'use strict'

const exec = require('child_process').exec
const date = new Date()
const currYear = date.getFullYear()
const currMonth = date.getMonth() + 1
const currDay = date.getDate()
const toString = (num) => num > 9 ? String(num) : '0' + String(num)
const args = process.argv.slice(2)
const prefixDate = currYear + '-' + toString(currMonth) + '-' + toString(currDay) + '-'

if(!args.length) return

const fileName = prefixDate + args[0]
exec('touch ' + fileName, (err, stdout, stderr) => {
  if(err) {
    console.error(err)
    return
  }
  console.log(fileName + ' created!')
  stdout && console.log(stdout)
  stderr && console.error(stderr)
})
