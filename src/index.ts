// In order for the workers runtime to find the class that implements
// our Durable Object namespace, we must export it from the root module.
export { DurableObjectExample } from './DurableObjectExample'

export default {
  async fetch(request, env) {
    let id = env.EXAMPLE_CLASS.idFromName(new URL(request.url).pathname);
    let stub = env.EXAMPLE_CLASS.get(id);
    let response = await stub.fetch(request);
    return response;
  }
}