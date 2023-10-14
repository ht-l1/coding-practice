// if using promise
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

// if using async await
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violent', 1000)
    return "ALL DONE!"
}

// then you can say:
// rainbow().then(() => console.log("END OF RAINBOW"))

// or just use the async below
async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}

printRainbow();