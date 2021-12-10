This is a bug reproducer for Stimulus & Symfony Stimulus bridge in v3.

The problem is, JS controllers work great while simple TS controllers just don't.

To reproduce the issue:

```bash
git clone https://github.com/jmsche/stimulus-bridge-reproducer.git
cd stimulus-bridge-reproducer
yarn install && yarn run dev
```

Then open `js-controller.html` and `ts-controller.html` files in your browser to see a working console.log()
call in your console for the JS controller, and a TypeError for the TS controller.

The error looks like this in Firefox console:

```
Uncaught (in promise) TypeError: class constructors must be invoked with 'new'
    default_1 app.js:2240
    extended stimulus.js:1210
    Context stimulus.js:1051
    fetchContextForScope stimulus.js:1272
    connectContextForScope stimulus.js:1258
    scopeConnected stimulus.js:1575
    elementMatchedValue stimulus.js:1495
    tokenMatched stimulus.js:793
    tokenMatched stimulus.js:726
    node_modules app.js:781
    tokensMatched stimulus.js:720
    elementMatchedAttribute stimulus.js:709
    elementMatched stimulus.js:487
    addElement stimulus.js:435
    refresh stimulus.js:356
    start stimulus.js:326
    start stimulus.js:463
    start stimulus.js:691
    start stimulus.js:774
    start stimulus.js:1473
    start stimulus.js:1543
    start stimulus.js:1627
    start stimulus.js:1620
    startStimulusApp index.js:33
    js bootstrap.js:4
```
