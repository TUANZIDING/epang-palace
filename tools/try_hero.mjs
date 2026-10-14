import { chromium } from 'playwright-core'
import { resolve } from 'node:path'
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message))
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 400)) })
await page.goto('file://' + resolve('../index.html'), { waitUntil: 'load', timeout: 120000 })
await page.waitForFunction(() => window.__app?.ready, null, { timeout: 180000 })
await page.evaluate(() => window.__app.skipIntro())
const C = JSON.parse(process.argv[2])
for (const [name, js, ms] of C) { await page.evaluate(js); await page.waitForTimeout(ms ?? 3500); const t0 = Date.now(); await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))); console.log(name, 'frame ms ~', (Date.now() - t0) / 2); await page.screenshot({ path: `/tmp/${name}.png` }) }
await browser.close()
