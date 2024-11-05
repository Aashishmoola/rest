export {createAboutPage}

function camelToTitle (camelCase) {
    let finalResult
    // Add space before capitalised letter
    const result = camelCase.replace(/([A-Z])/g, " $1").trim()
    // Capitalises first letter in word
    if (result[0].toUpperCase() === result[0]) finalResult = result
    else finalResult = result[0].toUpperCase() + result.slice(1)

    return finalResult
}

function changeCssClassDiff(emt) {
    if (emt.classList.length === 2 ) emt.classList.remove(`${emt.classList.item(1)}`)
    emt.classList.add("about")
}

const infoObj = {
    address: "583 Orchard Road/#B1-24 THE FORUM/238884,Singapore",
    phoneNumber: "+65 6238 6315",
    openingHours: "11a.m. to 10p.m. (Weekdays)/11a.m. to 12p.m. (Weekends and public holidays)",
    parkingInfo: "Paid parking within THE FORUM shopping mall",
    socialMedia: "Follow us on Instagram at ElHefeMex for exiting updates",
}


function createInfoGrid (mainContentEmt, infoObj) {
    const infoCtnEmt = document.createElement("div")
    infoCtnEmt.classList.add("infoCtn")

    const infoKeyArr = Object.keys(infoObj)
    const infoValArr = Object.values(infoObj)
    const dispInfoValArr = []

    infoValArr.forEach((val) => {
        if(!val.includes("/")) dispInfoValArr.push(val) 
        else {
            const seperateValArr = val.split("/")
            seperateValArr.forEach((val) => {dispInfoValArr.push(val)})
        }
    })

    infoKeyArr.forEach((key) => {
        const infoKeyEmt = document.createElement("div")
        infoKeyEmt.classList.add(`${key}`, "infoKey")
        
        const headerKey = camelToTitle(key)
        infoKeyEmt.textContent = headerKey + ":"
        
        infoCtnEmt.appendChild(infoKeyEmt)
    })

    dispInfoValArr.forEach((val) => {
        const infoValEmt = document.createElement("div")
        infoValEmt.classList.add("infoVal")
        
        infoValEmt.textContent = val

        infoCtnEmt.appendChild(infoValEmt)
    })

    mainContentEmt.appendChild(infoCtnEmt)
}

function createAboutPage (mainContentEmt) {
    changeCssClassDiff(mainContentEmt)
    createInfoGrid(mainContentEmt, infoObj)
}
