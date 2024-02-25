import inquirer from 'inquirer'

const {prompt} = inquirer

import fs from 'fs/promises'
import {join} from 'path'
import {gunzip} from "zlib";

const cwd = process.cwd()

const langList = ['en', 'zh']

const template = `---
title: '%t'
date: %d
description: ''
lang: '%l'
---

# %t

`

async function getOrder(folderName) {
    // get folder list
    const fileList = await fs.readdir(join(cwd, `./content/${folderName}`))
    // if folder not exist, return '01'
    if (fileList.length === 0) {
        return '01'
    } else {
        // get max order and increase 1
        const orderList = fileList.map(v => {
            const orderStr = v.split('.')[0] || `00`
            return parseInt(orderStr, 10)
        })
        const resNumber = Math.max(...orderList) + 1;
        return resNumber.toString().padStart(2, '0')
    }
}

async function createFile(props) {
    const {folderName, fileName, fileTitle, lang} = props
    try {
        const order = await getOrder('blog')
        const folderPath = join(cwd, `./content/${folderName}`)
        // if not exist, create folder
        const isFolderExist = await fs
            .readdir(folderPath)
            .then(() => true)
            .catch(() => false)
        if (!isFolderExist) {
            await fs.mkdir(folderPath)
        }

        const filePath = join(cwd, `./content/${folderName}/${order}.${fileName}.md`)
        const isExist = await fs
            .readFile(filePath)
            .then(() => true)
            .catch(() => false)
        if (!isExist) {
            const writeTemplate =
                template
                    .replace(/%t/g, fileTitle)
                    .replace(/%l/g, lang)
                    .replace(/%d/g, new Date().toISOString())
            await fs.writeFile(filePath, writeTemplate, 'utf-8')
        }
    } catch (error) {
        console.log('createFile field:', error)
    }
}

function main() {
    prompt([
            {
                type: 'input',
                name: 'folderName',
                message: 'please input folder name,default is blog',
                default: 'blog',
                askAnswered: true,
            },
            {
                type: 'input',
                name: 'fileName',
                message: 'please input file name,default is `new order + . + new Date().getTime() + .md`',
                default: `${new Date().getTime()}`,
                askAnswered: true,
            },
            {
                type: 'input',
                name: 'fileTitle',
                message: 'please input file title,default is `new Date().getTime()`',
                default: `${new Date().getTime()}`,
                askAnswered: true,
            },
            {
                type: 'checkbox',
                name: 'lang',
                message: 'please select language',
                choices: langList,
                default: 'en',
                askAnswered: true,
            }
        ], []
    )
        .then(async (res) => {
            await createFile(res)
        })
        .catch((error) => {
            console.error(error)
        })
}

main()
