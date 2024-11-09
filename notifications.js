
function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        console.log("Permission granted previously. Showing notification...");
        // const notification = new Notification("Already granted!");
        setTimeout(() => {
            const notification = new Notification("Delayed Notification", {
              body: "This is a test notification with a delay.",
            });
          }, 1000); // 1-second delay
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
            console.log(`Notification permission: ${permission}`);
            if (permission === "granted") {
                console.log("Creating notification...");
                const notification = new Notification("Granted!");
            }
        });
    } else {
        console.log("Permission denied or blocked.");
    }
}

