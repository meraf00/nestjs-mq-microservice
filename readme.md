```
cd producer
npm i
npm run start:dev
```

```
cd consumer
npm i
npm run start:dev
```

http://localhost:3000/docs

- [request](consumer\src\approve\approve.service.ts) is defined and injectable

- event listeners should be registered as microservice along with their queues ([here](consumer\src\main.ts))

- inject [ClientModule](consumer\src\approve\approve.module.ts) with queue name and then we can emit events to registered clients through [ClientProxy](consumer\src\approve\approve.controller.ts)

- they don't need to be on the same module [Also here event can be emitted from producer to consumer approve or workflow](producer\src\app.module.ts)
