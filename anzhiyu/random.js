var posts=["2025/12/09/hello-world/","2026/03/30/DC-1/","2025/12/13/bp攻击/","2025/12/09/ova靶机/","2026/03/30/reset/","2025/12/09/Gropers-first-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };