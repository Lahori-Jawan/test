// Nuxt exaple: https://nuxtjs.org/guide/development-tools#end-to-end-testing
import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '../')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

// Example of testing only generated html
test('Rendering HTML', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<h1 class="tag">Hello world!</h1>'))
  t.true(html.includes('<p class="m-b-10"><span class="red">My Name:</span><b> Henry Smith </b></p>'))
  t.true(html.includes('<p class="age m-b-10"><span class="red">Age:</span><strong> 10yr</strong></p>'))
  t.true(html.includes('<p class="city m-b-10"><span class="red">My City:</span><strong> London</strong></p>'))
  t.true(html.includes('<p class="school m-b-10"><span class="red">School:</span><strong> St mary school</strong></p>'))

})
// Example of testing via DOM checking
test('Rendering HTML using CSS selctor', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const element = window.document.querySelector('.tag')
  const age = window.document.querySelector('.age')
  const city = window.document.querySelector('.city')
  t.not(element, null)
  t.not(age, null)
  t.not(city, null)
  t.is(element.textContent, 'Hello world!')
  t.is(age.textContent, 'Age: 10yr')
  t.is(city.textContent, 'My City: London')

})
test('Breakfast testing with css applied', async t => {
  const windows = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const ele = windows.document.querySelector('ul >li ')
  t.not(ele, null)
  t.is(ele.className, 'list-item')
  t.is(windows.getComputedStyle(ele).color, 'rgb(74, 74, 74)')
  // t.is(windows.getComputedStyle(ele).color, 'green')
})

// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close()
})
