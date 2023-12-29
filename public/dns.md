---
title: dns
date: 2023-11-16 17:10:24
tags:
---
## 加载网页涉及 4 个 DNS 服务器：

- **[DNS 递归器](https://www.cloudflare.com/learning/dns/dns-server-types/)**- 递归器可以被视为图书管理员，他被要求去图书馆的某个地方查找特定的书籍。DNS 递归器是一种服务器，旨在通过 Web 浏览器等应用程序接收来自客户端计算机的查询。通常，递归程序负责发出额外的请求，以满足客户端的 DNS 查询。
- **根名称服务器**-[根服务器](https://www.cloudflare.com/learning/dns/glossary/dns-root-server/)是将人类可读的主机名转换（解析）为 IP 地址的第一步。它可以被认为是图书馆中的索引，指向不同书架 - 通常它用作其他更具体位置的参考。
- **[TLD 名称服务器](https://www.cloudflare.com/learning/dns/dns-server-types/)**- 顶级域服务器 ( [TLD](https://www.cloudflare.com/learning/dns/top-level-domain/) ) 可以被视为图书馆中的特定书架。该名称服务器是搜索特定 IP 地址的下一步，它托管主机名的最后部分（在 example.com 中，TLD 服务器是“com”）。
- **[权威名称服务器](https://www.cloudflare.com/learning/dns/dns-server-types/)**- 这个最终名称服务器可以被认为是书架上的一本字典，其中特定名称可以翻译为其定义。权威域名服务器是域名服务器查询的最后一站。如果权威名称服务器有权访问所请求的记录，它会将所请求主机名的 IP 地址返回给发出初始请求的 DNS 递归者（图书馆员）。
#### DNS 查找的 8 个步骤：

1. 用户在 Web 浏览器中输入“example.com”，查询就会传输到 Internet 并由 DNS 递归解析器接收。
2. 然后解析器查询 DNS 根名称服务器 (.)。
3. 然后，根服务器使用顶级域 (TLD) DNS 服务器（例如 .com 或 .net）的地址响应解析器，该服务器存储其域的信息。搜索 example.com 时，我们的请求指向 .com TLD。
4. 然后解析程序向 .com TLD 发出请求。
5. 然后，TLD 服务器使用域名称服务器的 IP 地址 example.com 进行响应。
6. 最后，递归解析器向域的名称服务器发送查询。
7. 然后 example.com 的 IP 地址从名称服务器返回到解析器。
8. 然后，DNS 解析器使用最初请求的域的 IP 地址响应 Web 浏览器。

一旦 DNS 查找的 8 个步骤返回了 example.com 的 IP 地址，浏览器就可以发出对该网页的请求：

10. 浏览器向 IP 地址发出[HTTP请求。](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)
11. 该 IP 上的服务器返回要在浏览器中呈现的网页（步骤 10）。![完成 DNS 查找和网页查询 - 10 个步骤](https://cf-assets.www.cloudflare.com/slt3lc6tev37/1NzaAqpEFGjqTZPAS02oNv/bf7b3f305d9c35bde5c5b93a519ba6d5/what_is_a_dns_server_dns_lookup.png "完整的DNS查找和网页查询")
在 Chrome 中，您可以通过转至 chrome://net-internals/#dns 查看 DNS 缓存的状态。
操作系统缓存dns
请求isp的缓存