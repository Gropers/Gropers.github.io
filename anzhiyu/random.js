var posts=["2025/12/12/DC-1/","2025/12/09/Gropers-first-blog/","2025/12/13/bp攻击/","2025/12/09/ova靶机/","2025/12/09/hello-world/","2026/03/25/群友靶机--Re/","2026/03/20/群友靶机--reset/","2026/03/29/群友靶机--JNDI/","2026/03/30/群友靶机-HackMe/","2026/03/26/群友靶机-lanSSudoyy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };