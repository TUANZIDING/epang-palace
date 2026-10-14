// 无头截图：node tools/shots.mjs  →  ../shots/*.png
import { chromium } from 'playwright-core'
import { resolve } from 'node:path'
const page_url = 'file://' + resolve('../index.html')
const OUT = resolve('../shots')
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] })
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } })
const errs = []
page.on('pageerror', (e) => { errs.push(e.message); console.log('PAGE ERROR', e.message) })
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 400)) })
await page.goto(page_url, { waitUntil: 'load', timeout: 120000 })
await page.waitForFunction(() => window.__app?.ready, null, { timeout: 120000 })
await page.evaluate(() => document.fonts.ready)
await page.evaluate(() => window.__app.skipIntro())
const wait = (ms) => page.waitForTimeout(ms)
const shot = async (name, js, ms = 2500) => { if (js) await page.evaluate(js); await wait(ms); await page.screenshot({ path: `${OUT}/${name}.png` }); console.log('shot', name) }
console.log(JSON.stringify(await page.evaluate(() => window.__app.info())))
await shot('01_overview', () => { __app.setView('overview') }, 4000)
await shot('02_birdseye', () => { __app.setView('birdseye') })
await shot('03_front', () => { __app.setView('front') })
await shot('04_hall', () => { __app.setView('hall') })
await shot('05_eave_wadang_dougong', () => { __app.setView('eave') })
await shot('06_labels', () => { __app.setView('overview'); __app.snap({ labels: 1 }) }, 3000)
await shot('07_explode', () => { __app.setView('explode'); __app.snap({ labels: 0, explode: 1 }) }, 3000)
await shot('08_cutaway_labels', () => { __app.setView('cut'); __app.snap({ explode: 0, cut: 1, labels: 1 }) }, 3000)
await shot('09_dusk', () => { __app.snap({ cut: 0, labels: 0 }); __app.setView('hall'); __app.setHour(17.4) }, 3000)
await page.evaluate(() => { __app.setHour(10); __app.setWalk(true) })
await shot('10_walk_ramp_base', null, 2500)
// 固定步长实走：从坡道脚下按 W（Shift）北行 → 登坡道上台基（地面碰撞）
const r1 = await page.evaluate(() => { const a = __app.pos; const b = __app.simWalk(['KeyW'], 9, true); return [a, b] })
console.log('RAMP walk  start', r1[0], '→ after 9 s', r1[1], '(expect y = 12 on terrace)')
await shot('11_walk_up_ramp_on_terrace', () => { __app.WALK.pitch = 0.04 }, 2500)
// 继续北行穿殿庭，上踏道（y 应到 17），到殿门
const r2 = await page.evaluate(() => { __app.walkTo(-1.5, 120, 0, 0.02); return __app.simWalk(['KeyW'], 30, true) })
console.log('COURT→STAIRS→DOOR walk end', r2, '(expect y = 17, stopped/inside hall)')
await shot('12_walk_court_view_hall', () => { __app.walkTo(-1.5, -15, 0, 0.1) }, 2500)
await shot('13_walk_hall_entrance', () => { __app.walkTo(-1.5, -70, 0, 0.06) }, 2500)
await shot('14_walk_interior_throne', () => { __app.walkTo(0, -98, 0, 0.06) }, 2500)
await shot('15_walk_interior_murals', () => { __app.walkTo(-60, -110, Math.PI * 0.62, 0.02) }, 2500)
await shot('16_walk_lamps_screens', () => { __app.walkTo(6, -120, 0.3, -0.06) }, 2500)
// 墙体碰撞：殿内向北墙直走 10 s，应停在北墙内侧（z ≈ -131.5）
const r3 = await page.evaluate(() => { __app.walkTo(-40, -110, 0, 0); return __app.simWalk(['KeyW'], 10, true) })
console.log('WALL test end', r3, '(north wall inner face z ≈ -131.55)')
// 台缘：从台上向西走出台基边缘会掉落到地面（重力）
const r4 = await page.evaluate(() => { __app.walkTo(-600, 100, Math.PI / 2, 0); return __app.simWalk(['KeyW'], 6, true) })
console.log('EDGE test end', r4, '(blocked by west wall, y = 12)')
console.log('errors', errs.length)
await browser.close()
