import breakfastBurritosPath from "../images/menu-breakfast-burritos.jpeg"
import churrosPath from "../images/menu-churros.jpeg"
import margaritaPath from "../images/menu-margarita.jpeg"
import nachosPath from "../images/menu-nachos.jpg"
import tacosPath from "../images/menu-tacos.jpeg"
export {createMenuPage}

function changeCssClassDiff(emt) {
    if (emt.classList.length === 2 ) emt.classList.remove(`${emt.classList.item(1)}`)
    emt.classList.add("menu")
}

const menuItems = [
    {
        itemName: "Tacos",
        description: "Enjoy freshly made tacos, containing ground beef, cheese, tomato salsa and guacomole",
        imgSrcPath: tacosPath,
        isVegan: false,
    },
    {
        itemName: "Churros",
        description: "Savour crunchy churros, deep-fried batter, with sweet homemade chocolte sauce",
        imgSrcPath: churrosPath,
        isVegan: false, 
    },
    {
        itemName: "Margarita",
        description: "Enjoy sour margaritas with a boozy hint",
        imgSrcPath: margaritaPath,
        isVegan: true,
    },
    {
        itemName: "Nachos",
        description: "Relish our cheesy nachos, served with refried beans, sour cream, guacomole and tomato salsa",
        imgSrcPath: nachosPath,
        isVegan: false,
    },
    {
        itemName: "BreakfastBurritos",
        description: "Feast on our loaded breakfast burritos containing cheese, bacon, scrambled eggs and spicy salsa",
        imgSrcPath: breakfastBurritosPath,
        isVegan: false,
    },

]

function createMenuGridItems(mainContentEmt){
    const menuItemsCtn = document.createElement("div")
    menuItemsCtn.classList.add("menuItems")

    menuItems.forEach((item) => {
        const itemCtnEmt = document.createElement("div")
        const itemNameEmt = document.createElement("div")
        const itemDescEmt = document.createElement("div")
        const itemVeganStatusEmt = document.createElement("div")
        const itemImgEmt = document.createElement("img")

        itemCtnEmt.classList.add("item", `${item.itemName}`)
        itemNameEmt.classList.add("itemName")
        itemDescEmt.classList.add("itemDesc")
        itemVeganStatusEmt.classList.add("itemVeganStatus")
        itemImgEmt.classList.add("itemImg")

        itemNameEmt.textContent = item.itemName
        itemDescEmt.textContent = item.description
        itemVeganStatusEmt.textContent = (item.isVegan) ? "Vegan" : "Not Vegan"
        itemImgEmt.src = item.imgSrcPath
        itemImgEmt.alt = `${item.itemName} image is not loaded`


        itemCtnEmt.appendChild(itemNameEmt)
        itemCtnEmt.appendChild(itemImgEmt)
        itemCtnEmt.appendChild(itemDescEmt)
        itemCtnEmt.appendChild(itemVeganStatusEmt)

        menuItemsCtn.appendChild(itemCtnEmt)
    })
    mainContentEmt.appendChild(menuItemsCtn)
}

function createMenuGridHeader(mainContentEmt) {
    const menuItemsHeader = document.createElement("div")
    menuItemsHeader.classList.add("menuHeader")
    menuItemsHeader.textContent = "menu items"
    mainContentEmt.prepend(menuItemsHeader)
}

function createMenuPage(mainContentEmt) {
    
    changeCssClassDiff(mainContentEmt)
    createMenuGridHeader(mainContentEmt)
    createMenuGridItems(mainContentEmt)
}

