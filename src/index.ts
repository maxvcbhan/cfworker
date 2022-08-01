/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
	async fetch(
		request: Request,
		env: any,
		ctx: ExecutionContext
	): Promise<Response> {
		const body = await request.json()
		await env.pm25.put(`pm25-${(new Date()).getTime()}.json`, JSON.stringify(body), {
			httpMetadata: request.headers,
		});
		console.log(JSON.stringify( body))
		return new Response("Ok");
	},
};
