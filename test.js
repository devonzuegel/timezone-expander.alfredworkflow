import {tz_expander} from './tz_expander.js'

const tests = [
  ['10:15am PT ET', '7:15am PT / 10:15am ET'],
  ['9AM PT ET', '6am PT / 9am ET'],
  ['9AM / PT / ET', '6am PT / 9am ET'],
  ['9am/ PT /ET', '6am PT / 9am ET'],
  ['9am/PT/ET', '6am PT / 9am ET'],
  ['9am London', '2pm London'],
  ['9am UK', '2pm UK'],
  ['2pm/pt/et', '11am PT / 2pm ET'],
  ['2pm/SF/miami', '11am SF / 2pm Miami'],
]

const results = tests.map(([input, expected]) => {
  const output = tz_expander(input, true)
  if (output == expected) {
    console.log()
    console.log('🟢 Test passed')
  } else {
    console.log()
    console.log('🔴 Test failed:')
    console.log('     input:    ', input)
    console.log('     expected: ', expected)
    console.log('     output:   ', output)
  }
})

console.log()
