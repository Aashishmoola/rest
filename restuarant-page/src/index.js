import "./cssScripts/home-page-styles.css"
import "./cssScripts/template-styles.css"
import "./cssScripts/about-page-styles.css"
import "./cssScripts/menu-page-styles.css"
import { createHomePage } from "./pageLogicScripts/home-page-logic";
import { createAboutPage } from "./pageLogicScripts/about-page-logic";
import { createMenuPage } from "./pageLogicScripts/menu-page-logic";

const mainContentEmt = document.querySelector(".content")

function AddBtnEventListener() {
    const btnsEmts = document.querySelectorAll(".header>.btnCtn>button")

    btnsEmts.forEach((btnEmt) => {
        btnEmt.addEventListener("click", () => {
            clearMainContentEmt()

            const className = btnEmt.getAttribute("class")

            if (className === "homeBtn") createHomePage(mainContentEmt)
            else if (className === "aboutBtn") createAboutPage(mainContentEmt)
            else if (className === "menuBtn") createMenuPage(mainContentEmt)
            else alert("Button click is not validated")

        })
    } )
}

function clearMainContentEmt() {
    mainContentEmt.textContent = ""
}

function onFirstLoad () {
    createHomePage(mainContentEmt)
    AddBtnEventListener()
}

function mainLogic() {
    onFirstLoad()
}



mainLogic()

