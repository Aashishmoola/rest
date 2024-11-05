import homePageImgPath from "../images/desert-bg.jpeg"
export {createHomePage}

function changeCssClassDiff(emt) {
    if (emt.classList.length === 2 ) emt.classList.remove(`${emt.classList.item(1)}`)
    emt.classList.add("home")
}

function createHomePage(mainContentEmt) {
    function createHomePageHeader() {
        const headerEmt = document.createElement("div")

        headerEmt.classList.add("contentHeader")
        headerEmt.textContent = "Hi, welcome to my restuarant!"

        mainContentEmt.appendChild(headerEmt)
    }
    
    function createHomePageImg() {
        const imageCtnEmt = document.createElement("div")
        const imageEmt = document.createElement("img")

        imageCtnEmt.classList.add("imageCtn")
        imageEmt.src = homePageImgPath

        imageCtnEmt.appendChild(imageEmt)
        mainContentEmt.appendChild(imageCtnEmt)
    }
    changeCssClassDiff(mainContentEmt)
    createHomePageHeader()
    createHomePageImg()
}
