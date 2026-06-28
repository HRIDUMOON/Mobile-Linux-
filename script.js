// REAL-TIME SYSTEM CLOCK RUNTIME
setInterval(() => {
    const d = new Date();
    document.getElementById('live-timer').innerText = d.toLocaleTimeString() + " NT_SEC";
}, 1000);

// INTERACTIVE DYNAMIC GRAPH & METRIC ENGINE GENERATOR
setInterval(() => {
    // Generates fluctuating matrix numbers for CPU & RAM indicators
    let cpuRandom = Math.floor(Math.random() * (75 - 20) + 20);
    let ramRandom = Math.floor(Math.random() * (88 - 45) + 45);
    
    document.getElementById('cpu-val').innerText = cpuRandom + "%";
    document.getElementById('cpu-fill').style.width = cpuRandom + "%";
    
    document.getElementById('ram-val').innerText = ramRandom + "%";
    document.getElementById('ram-fill').style.width = ramRandom + "%";

    // Randomize Network Bar sizes dynamically 
    document.querySelectorAll('.graph-bar').forEach(bar => {
        bar.style.height = Math.floor(Math.random() * 85 + 15) + "%";
    });
}, 2000);

// CORE INPUT FRAMEWORK EXECUTION LAYER
const termInput = document.getElementById('terminal-input');
const logsArea = document.getElementById('logs-area');
const termBox = document.getElementById('term-box');
const sysFeed = document.getElementById('sys-feed');

termInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let value = this.value.trim();
        this.value = '';
        if(!value) return;

        appendConsoleLog(`>>> ${value}`, '#ffffff');

        let cmdVector = value.split(' ');
        let rootCommand = cmdVector[0].toLowerCase();

        if (rootCommand === 'help') {
            appendConsoleLog(`eDex Core Architecture Commands:\n  clear         - Flush buffer streams\n  js [payload]  - Run live dynamic JavaScript execution layer\n  attack [tool] - Launch simulators (sms, fb, ig)`);
        } 
        else if (rootCommand === 'clear') {
            logsArea.innerHTML = '';
        } 
        else if (rootCommand === 'attack') {
            let selectedTool = cmdVector[1];
            triggerAppSim(selectedTool);
        }
        // DYNAMIC JS CODING PARSER MATRIX
        else if (rootCommand === 'js') {
            let actualJsCode = value.substring(3);
            try {
                let codeResult = eval(actualJsCode);
                appendConsoleLog(`=> RETURN_VALUE: ${codeResult}`, '#38bdf8');
            } catch (err) {
                appendConsoleLog(`CORE_COMPILE_ERROR: ${err.message}`, '#ef4444');
            }
        } 
        else {
            appendConsoleLog(`SYS_ENGINE_ERR: Command structural layout sequence "${rootCommand}" unverified.`, '#ef4444');
        }

        termBox.scrollTop = termBox.scrollHeight;
    }
});

function appendConsoleLog(text, textColor = '#00ffcc') {
    let preElement = document.createElement('p');
    preElement.style.color = textColor;
    preElement.innerText = text;
    logsArea.appendChild(preElement);
}

// SIMULATOR COMPONENT MATRIX (SIDEBAR SELECTOR TRIGGER)
function triggerAppSim(type) {
    if (type === 'sms' || type === 'sms_bomber.sh') {
        sysFeed.innerHTML = `[+] Initiating SMS_BOMBER execution loop...<br>[*] Map parameters synced.<br>[🚀] Burst streams deployed safely inside simulator boundary.`;
        appendConsoleLog(`[+] Sub-system: Deployment package 'sms_bomber.sh' completed runtime checks.`, '#34d399');
    } 
    else if (type === 'fb' || type === 'facebook_audit.py') {
        sysFeed.innerHTML = `[*] Initializing Python security audit matrix...<br>[✓] Target interface token parsed successfully inside system memory sandbox.`;
        appendConsoleLog(`[+] Sub-system: 'facebook_audit.py' monitoring stack instantiated.`, '#38bdf8');
    } 
    else if (type === 'ig' || type === 'ig_recon.node') {
        sysFeed.innerHTML = `[*] Allocating Node.js cluster proxy points...<br>[+] Public scraping vectors parsed without real authorization tokens.`;
        appendConsoleLog(`[+] Sub-system: 'ig_recon.node' OSINT mapping initialized.`, '#e1306c');
    } 
    else {
        sysFeed.innerHTML = `[-] Selected target engine reference not mapped in database module.`;
    }
}

// BIND PHYSICAL KEYBOARD INPUT CLICKS ON THE SCI-FI DISPLAY VIRTUAL BOARD KEYS
document.querySelectorAll('.virtual-keyboard div').forEach(keyBtn => {
    keyBtn.addEventListener('click', function() {
        let pressedKey = this.innerText;
        if(pressedKey === 'SPACEBAR') {
            termInput.value += ' ';
        } else if (pressedKey === 'BACK') {
            termInput.value = termInput.value.slice(0, -1);
        } else if (pressedKey === 'ENTER') {
            // Trigger program compilation enter logic
            let enterEvent = new KeyboardEvent('keydown', {'key': 'Enter'});
            termInput.dispatchEvent(enterEvent);
        } else if (pressedKey !== 'TAB' && pressedKey !== 'CAPS' && pressedKey !== 'SHIFT' && pressedKey !== 'ESC') {
            termInput.value += pressedKey.toLowerCase();
        }
        termInput.focus();
    });
});
            
