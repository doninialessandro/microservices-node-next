This is a ticketing application to buy tickets based on micorservices built with Node, NATS as event bus and Next UI bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> :warning: **This is a learning project**, some best practices are out of scope
> and the focus is on micorservices architecture.

## Installation

1. Ensure you have Kubernetes installed: [https://kubernetes.io](https://kubernetes.io)
2. Ensure you have Skaffold installed: [https://skaffold.dev](https://skaffold.dev)
3. Ensure you have NGINX Ingress Controller up and running: [https://kubernetes.github.io/ingress-nginx/deploy](https://kubernetes.github.io/ingress-nginx/deploy)
4. Add the following new entry in your host file: **127.0.0.1 ticketing.dev**
(you can find the host file at *etc/hosts* for MacOS or Linux and *C:\Windows\System32\Dirvers\etc\hosts* for Windows)

## Run with Kubernetes (development)

```bash
npm run generate-jwt-secret
npm run start-app
```
The service will be available at [https://ticketing.dev](https://ticketing.dev/)
> :warning: **Your connection is not private**, if you find this message
> click inside the window and write **thisisunsafe**.