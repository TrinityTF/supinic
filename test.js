const execute = async function () {
    const cmd = await command.execute(...arguments)
    if (!cmd.success) {
        let acc = ``
        for (const argument of arguments) acc += argument + ` `
        throw Error(`$${acc}\u{2022} ${cmd.reason ?? cmd.reply}`)
    }
    return cmd.reply
}

// Random picker
const randomTest = async () => {
    const options = ["test1", "test2", "test3"]
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

// Example usage
angeln = async () => {
    const result = await randomTest()
    console.log("Randomly picked:", result)
    return result
}