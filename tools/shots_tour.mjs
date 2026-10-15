// 入殿与周围宫室：node tools/shots_tour.mjs → ../shots/22_*.png …
import { chromium } from 'playwright-core'
import { resolve } from 'node:path'
const OUT = resolve('../shots')
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
const errs = []
page.on('pageerror', (e) => { errs.push(e.message); console.log('PAGE ERROR', e.message) })
await page.goto('file://' + resolve('../index.html'), { waitUntil: 'load', timeout: 180000 })
await page.waitForFunction(() => window.__app?.ready, null, { timeout: 180000 })
await page.evaluate(() => { __app.skipIntro(); __app.setHour(9.5) })
const shot = async (name, js) => {
  if (js) await page.evaluate(js)
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/${name}.png`, timeout: 180000 })
  console.log('shot', name)
}
await page.evaluate(() => { __app.setWalk(true); __app.walkTo(0, -70, 0, 0) })
console.log('door walk', await page.evaluate(() => __app.simWalk(['KeyW'], 5, true)))
await page.evaluate(() => __app.setWalk(false, true))
await shot('27_surroundings_hero', () => { __app.cine(true, 32); __app.setView('hero') })
await shot('22_tour_court', () => { __app.cine(false); __app.setTour(0, 0) })
await shot('23_tour_door', () => __app.setTour(1, 0))
await shot('24_tour_center', () => __app.setTour(2, 0))
await shot('25_tour_west', () => __app.setTour(3, 0))
await shot('26_tour_gallery', () => __app.setTour(5, 0))
console.log('errors', errs.length)
await browser.close()
