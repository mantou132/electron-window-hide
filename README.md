## Electron BrowserWindow Unexpected trigger blur event

### Reproduce Step

1. `npm i`
2. `npx electron .`
3. Multiple clicks tray
4. view terminal log

### Actual
```
fade-out
blur
fade-in
fade-out
blur
fade-in
fade-out
blur
fade-in
blur // !!! Not meeting expectations
fade-in
blur // !!! Not meeting expectations
...
```

### env
- MacOS 10.14.5
- Node.js v12.3.1
