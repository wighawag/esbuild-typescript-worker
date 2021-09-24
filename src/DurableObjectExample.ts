export class DurableObjectExample {
    constructor(state, env) {
    }

    async fetch(request) {
        return new Response('Hello World');
    }

}