chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'copy') { navigator.clipboard.writeText(msg.text); resp({success: true}); } });
