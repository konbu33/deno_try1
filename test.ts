// exeute: deno test test.ts

// Deno.test("Hello World", () => {
// 	const x = 1 + 4
// 	console.log('Test Start!!!')

// 	if ( x !== 3) { 
// 		console.log('Test Failure!!!')
// 		throw Error("x should be equal 3")
// 	} else {
// 		console.log('Test Success!!!')
// 	}
// 	console.log('Test End!!!')
// })

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

Deno.test("assert", () => {
	const x = 1 + 2;
	assertEquals(x, 3);
})
