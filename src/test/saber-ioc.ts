import { SaFactory } from '../core/saber-ioc'
import { C } from './example/C'
import { A } from './example/A'
import { D } from './example/D'
import { B } from './example/B'
let container = new SaFactory.Container(C, D, A, B)
container.run()

// let main = container.pull<D>()

// main.test()

// @SaFactory.BootStrap
// class Test {
//   boot() {
//     console.log('test')
//   }
//   main() {
//     console.log('sa')
//   }
// }

export function test_saber_ioc() {}
