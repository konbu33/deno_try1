// execute: deno run --allow-net="0.0.0.0" server.ts

import { serve } from "https://deno.land/std@0.89.0/http/server.ts"

const s = serve( { port: 8000 })
console.log('http://localhost:8000/')

for await ( const req of s ) {
	req.respond({ body: "hello world\n"})
}
