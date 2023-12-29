20世纪60年代 美国国防部 
通过标准化协议传递信息
互联网服务提供商（ISP）

http/0.9 (1991) 
第一个有记录的版本 只有get方法 只响应html

http/1.0 (1996) 
图像、视频文件、纯文本或任何其他内容类型。它添加了更多方法（即 POST 和 HEAD）、更改了请求/响应格式、将 HTTP 标头添加到请求和响应中、添加了状态代码来标识响应、引入了字符集支持、多部分类型、授权、缓存、内容编码等都包括在内。
缺点是不能复用连接,由于tcp的慢启动和三次握手,性能低
无持续连接, 无状态

http/1.1 (1999)
[https://datatracker.ietf.org/doc/html/rfc2616]
更多的方法PUT、PATCH、OPTIONS、DELETE
主机标识强制
持久连接(请求头 Connection: close 必须可用)
管道化(统一连接持续发请求,无需等待响应)
缺点: 队头阻塞

SPDY (2009)
http上的转换层
谷歌继续尝试替代协议，以提高网络速度并提高网络安全性，同时减少网页延迟。2009 年，他们宣布了 SPDY。
SPDY 的功能包括多路复用、压缩、优先级、安全性等。据说HTTP/2主要是受到SPDY的启发
2015 年，Google 不想出现两个相互竞争的标准，因此决定将其合并到 HTTP 中，同时诞生了 HTTP/2 并弃用了 SPDY。

http/2 (2015)
低延迟内容传输
1. 二进制
2. 报头压缩
3. 服务器推送
4. 请求优先级
5. 安全(不强制使用tls加密,但是用的人都在加密)

http/3
和http无关,瓶颈在tcp
![HTTP/2 与 HTTP/3 协议栈比较](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_80/w_400/https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/37fc4bc9-65cb-4290-a1ed-6ad39762f18a/protocol-stack-preview.png)

使用quic替代tcp
tcp丢失数据包会引起队头堵塞,使用中是可控制的但是还是影响高级别协议的实现
tcp的实现太多 位于客户端和服务器之间的许多其他设备也有自己的 TCP 代码（示例包括防火墙、负载平衡器、路由器、缓存服务器、代理等）。

HTTP/2 在几个关键领域进行了调整，以使其与 QUIC 兼容。这个调整后的版本最终被命名为 HTTP/3（而不是 HTTP/2-over-QUIC），主要是出于营销原因和清晰度。因此，HTTP/1.1 和 HTTP/2 之间的差异比 HTTP/2 和 HTTP/3 之间的差异要大得多。

这里的关键要点是，我们真正需要的并不是 HTTP/3，而是**“TCP/2”**，并且在此过程中我们“免费”获得了 HTTP/3。我们对 HTTP/3 感到兴奋的主要功能（更快的连接设置、更少的 HoL 阻塞、连接迁移等）实际上都来自 QUIC。

为了防止更新quic的大量成本,quic基于udp开发
quic将tcp的最佳实践和核心功能结合

新功能主要归结于
1. 与tls深度集成
2. 支持多个独立字节流
3. 使用连接id
4. 使用框架

tls 1.3 将握手延迟从两个往返减少到一次往返

tcp层不知道http包丢失的数据,所以会重传整个tcp包,导致多个http重传

HTTP/2 和 HTTP/3 之间的主要区别之一是后者**删除了 HTTP 流逻辑并重用了 QUIC 流**。

tcp无法知道同一设备切换网络, quic使用连接标识符(CID)