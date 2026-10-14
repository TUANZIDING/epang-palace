import { chromium } from 'playwright-core'
import { resolve } from 'node:path'
const OUT = resolve('../shots')
const ONLY = process.argv[2]
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
page.on('pageerror', (e) => console.log('PAGE ERROR', e.message))
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 300)) })
await page.goto('file://' + resolve('../index.html'), { waitUntil: 'load', timeout: 120000 })
await page.waitForFunction(() => window.__app?.ready, null, { timeout: 180000 })
await page.evaluate(() => window.__app.skipIntro())
const shot = async (name, js, ms = 3000) => { if (ONLY && !name.startsWith(ONLY)) return; if (js) await page.evaluate(js); await page.waitForTimeout(ms); await page.screenshot({ path: `${OUT}/${name}.png` }); console.log('shot', name) }
console.log(JSON.stringify(await page.evaluate(() => window.__app.info())))
// hero
await shot('20_hero_grand', () => { __app.snap({ explode: 0, cut: 0, labels: 0 }); __app.setHour(16.9); __app.cine(true, 52); __app.setView('heroAxis') }, 3500)
await shot('20b_hero_low', () => { __app.cine(true, 30); __app.setView('hero') }, 3000)
await shot('21_axis_approach', () => { __app.cine(true, 40); __app.setView('axis') }, 3000)
await page.evaluate(() => { __app.cine(false); __app.setHour(10) })
// layers
const steps = [[0, '1_full'], [1, '2_no_tiles'], [2, '3_no_timber'], [4, '4_columns_gone'], [5, '5_walls_gone'], [6, '6_furnishings_gone'], [8, '7_base_only']]
for (const [k, n] of steps) await shot(`19_layers_step${n}`, `__app.setView({ pos: [-260, 150, 140], target: [0, 18, -100] }); __app.peel(${k}); __app.settleLayers()`, 2600)
await shot('19_layers_step8_explode', () => { __app.peel(0); __app.settleLayers(); __app.snap({ explode: 1 }); __app.setView('explode') }, 3000)
await page.evaluate(() => { __app.snap({ explode: 0 }) })
// reassemble animation mid-frame
await shot('19_layers_step9_assembling', () => { __app.setView({ pos: [-260, 150, 140], target: [0, 18, -100] }); __app.assembleAt(1.6); __app.STATE.assembly = 0 }, 2000)
await page.evaluate(() => __app.settleLayers())
// walk/cut/labels smoke
await page.evaluate(() => { __app.setHour(10); __app.setWalk(true) })
await shot('17_decor_throne', () => __app.walkTo(0, -104, 0, 0.08))
await shot('18_decor_bells', () => __app.walkTo(-43.7, -99, 0.42, 0.04))
const w = await page.evaluate(() => { __app.walkTo(0, 150, 0, 0); return __app.simWalk(['KeyW'], 6) })
console.log('walk after 6s from z150:', w)
await page.evaluate(() => __app.setWalk(false))
await shot('22_cut_labels', () => { __app.snap({ cut: 1, labels: 1 }); __app.setView('cut') }, 3000)
console.log('layers on', await page.evaluate(() => __app.LAYERS.map((L) => +L.on).join('')))
await browser.close()
