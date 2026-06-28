// TOP LEVEL LIVE SYSTEM CLOCK INTERACTION
function updateSystemTime() {
    const time = new Date();
    const options = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true };
    document.getElementById('system-clock').innerText = time.toLocaleString('en-US', options);
}
setInterval(updateSystemTime, 1000);
updateSystemTime();

// RUN TIME SYSTEM CONTEXTS
function openApp(id) {
    const appWindow = document.getElementById(id);
    appWindow.style.display = 'flex';
    
    // Manage Side panel execution dots
    document.getElementById(`dot-${id}`).classList.add('active-dot');
    focusWindow(appWindow);
}

function closeApp(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById(`dot-${id}`).classList.remove('active-dot');
}

function focusWindow(element) {
    document.querySelectorAll('.linux-window').forEach(win => {
        win.classList.remove('window-focused');
        win.style.zIndex = "10";
    });
    element.classList.add('window-focused');
    element.style.zIndex = "100";
}

// WINDOW DRAG AND DROP ENGINE (GNOME DESKTOP ARCHITECTURE)
function makeDraggable(windowEl) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    // Trigger window focus logic on interaction mouse down
    windowEl.addEventListener('mousedown', () => focusWindow(windowEl));
    
    windowEl.querySelector('.window-topbar').onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        windowEl.style.top = (windowEl.offsetTop - pos2) + "px";
        windowEl.style.left = (windowEl.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Global invocation to attach click focusing mechanics
document.querySelectorAll('.linux-window').forEach(win => makeDraggable(win));

// CORE TERMINAL HANDLING & JS EVAL ENGINE
const rawInput = document.getElementById('terminal-raw-input');
const screenLogs = document.getElementById('terminal-screen');
const scrollBox = document.getElementById('term-scroll-box');

rawInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let value = this.value.trim();
        this.value = '';
        if(!value) return;

        appendLogLine(`root@monster-on-top:~# ${value}`, '#ffffff');

        // Command Orchestration logic
        let argVector = value.split(' ');
        let primaryCmd = argVector[0].toLowerCase();

        if (primaryCmd === 'help') {
            appendLogLine(`System Commands Blueprint:\n  clear          - Wipe console buffer\n  js [payload]   - Direct dynamic JS scripting interface\n  launch [app]   - Call components (bomber-app, fb-app, ig-app)`);
        } 
        else if (primaryCmd === 'clear') {
            screenLogs.innerHTML = '';
        } 
        else if (primaryCmd === 'launch') {
            let targetApp = argVector[1];
            if(document.getElementById(targetApp)) {
                openApp(targetApp);
                appendLogLine(`[+] Instantiating standalone UI block: ${targetApp}`, '#34d399');
            } else {
                appendLogLine(`[-] Module target blueprint package "${targetApp}" structural layout mismatch.`, '#f87171');
            }
        } 
        // ADVANCED FEATURE: DYNAMIC COMPILER RUNTIME EXECUTOR
        else if (primaryCmd === 'js') {
            let targetJsCode = value.substring(3);
            try {
                let compilationOutput = eval(targetJsCode);
                appendLogLine(`=> ${compilationOutput}`, '#38bdf8');
            } catch (runtimeError) {
                appendLogLine(`Runtime Compilation Error: ${runtimeError.message}`, '#f87171');
            }
        } 
        else {
            appendLogLine(`bash: command sequence not identified: "${primaryCmd}". Use "help" framework.`, '#f87171');
        }
        
        scrollBox.scrollTop = scrollBox.scrollHeight;
    }
});

function appendLogLine(text, color = '#64748b') {
    let pNode = document.createElement('p');
    pNode.style.color = color;
    pNode.innerText = text;
    screenLogs.appendChild(pNode);
}

// APP SIMULATION SYSTEMS (SMS / FB / INSTAGRAM METRIC PACKS)
function executeBomberSimulation() {
    let target = document.getElementById('bomber-target').value;
    let counts = document.getElementById('bomber-count').value || 100;
    let consoleBox = document.getElementById('bomber-console');
    if(!target) return alert('Target missing.');
    
    consoleBox.innerHTML = `[✓] Generating multi-threaded buffer pipelines...`;
    setTimeout(() => consoleBox.innerHTML += `<br>[+] Target mapping completed at standard proxy nodes.`, 600);
    setTimeout(() => consoleBox.innerHTML += `<br>[🚀] Loop running: Simulated packets injected into context boundary (${counts} updates processed).`, 1300);
}

function executeFbSimulation() {
    let link = document.getElementById('fb-target').value;
    let consoleBox = document.getElementById('fb-console');
    if(!link) return alert('Profile indicator parameter required.');
    
    consoleBox.innerHTML = `[*] Attaching framework debuggers onto nodes...`;
    setTimeout(() => consoleBox.innerHTML += `<br>[✓] System security sequence simulated. No access boundaries violated.`, 1000);
}

function executeIgSimulation() {
    let handle = document.getElementById('ig-target').value;
    let consoleBox = document.getElementById('ig-logs');
    if(!handle) return alert('Handle index unprovided.');
    
    consoleBox.innerHTML = `[*] Requesting internal schema maps for ${handle}...`;
    setTimeout(() => consoleBox.innerHTML += `<br>[✓] JSON metadata simulation retrieved successfully. Target array loaded.`, 900);
}

function toggleSystemLogs() {
    alert("System Context: Core platform build base running v1.0.4. All desktop elements virtualized safely.");
}
