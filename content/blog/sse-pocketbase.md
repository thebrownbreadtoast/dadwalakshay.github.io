title: SSE with Pocketbase: An on-disk realtime RDBMS
date: 2023-02-04
slug: sse-pocketbase
author: Akshay Dadwal
summary: A pocket friendly solution which provides realtime updates out-of-the-box.
category: tech
tags: pocketbase, sse, websockets, rdbms, python, fastapi
status: published

## Introduction
Building an application which needs realtime Databaes updates or certain events that
happens in the Backend, can be a complex job.

For example, a Stock market ticker dashboard which needs to serve thousands of concurrent
connections or a client app which awaits acknowledgement from Payment gateway.

Such problem statements which requires 1-way communication from Backend servers
to Client application, can be solved with Websockets and SSE(Server Sent Events).

Websockets have become a defacto solution for realtime connections, but for the
problem statements we discussed earlier it would be an overkill. Hence, we would
be discussing SSE and see how **Pocketbase** comes into play.

--------------------------------------------------------------------------------
## What are Server Sent Events?
![SSE architecture diagram](sse_pocketbase.drawio.png "SSE Architecture Diagram")
