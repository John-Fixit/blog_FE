

//sw.js code, this code will be inside public folder
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
      body: e.data.text()
    };
    // const options = {
    //   body: data.body,
    //   icon: data.icon,
    //   badge: data.badge
    // };
  
    event.waitUntil(
    //   self.registration.showNotification(data.title, options)
      self.registration.showNotification("Fixit Blog", options)
    );
  });
  