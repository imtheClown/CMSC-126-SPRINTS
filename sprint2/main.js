//assault rifles
const ak47 = { name: "AK-47", damage: 33, firerate: 55, accuracy: 67, mobility: 74, range: 58, control: 44, source: "css/assault/ak.jpg" }
const m4 = { name: "M4", damage: 24, firerate: 68, accuracy: 59, mobility: 81, range: 58, control: 54, source: "css/assault/m4.jpg" }
const icr1 = { name: "ICR-1", damage: 30, firerate: 60, accuracy: 69, mobility: 82, range: 54, control: 61, source: "css/assault/icr.jpg" }
const asval = { name: "AS-VAL", damage: 28, firerate: 80, accuracy: 44, mobility: 83, range: 50, control: 47, source: "css/assault/asval.jpg" }
const kilo141 = { name: "Kilo 141", damage: 29, firerate: 68, accuracy: 57, mobility: 79, range: 54, control: 55, source: "css/assault/kilo.jpg" }
    //snipers
const koshka = { name: "Koshka", damage: 90, firerate: 27, accuracy: 62, mobility: 34, range: 62, control: 40, source: "css/sniper/koshka.jpg" }
const svd = { name: "SVD", damage: 80, firerate: 34, accuracy: 59, mobility: 42, range: 92, control: 40, source: "css/sniper/svd.jpg" }
const dlq = { name: "DL Q33", damage: 90, firerate: 28, accuracy: 59, mobility: 32, range: 99, control: 32, source: "css/sniper/dlq.jpg" }
const m21 = { name: "M21 EBR", damage: 91, firerate: 37, accuracy: 59, mobility: 43, range: 90, control: 40, source: "css/sniper/m21.jpg" }
const locus = { name: "Locus", damage: 95, firerate: 28, accuracy: 59, mobility: 35, range: 95, control: 34, source: "css/sniper/locus.jpg" }
    //lmg
const pkm = { name: "PKM", damage: 32, firerate: 63, accuracy: 64, mobility: 31, range: 58, control: 49, source: "css/lmg/pkm.jpg" }
const hades = { name: "Hades", damage: 29, firerate: 65, accuracy: 57, mobility: 58, range: 53, control: 60, source: "css/lmg/hades.jpg" }
const holger = { name: "Holger 26", damage: 31, firerate: 71, accuracy: 53, mobility: 59, range: 60, control: 59, source: "css/lmg/holger.jpg" }
const chopper = { name: "Chopper", damage: 25, firerate: 75, accuracy: 46, mobility: 53, range: 46, control: 50, source: "css/lmg/chopper.jpg" }
const rpd = { name: "RPD", damage: 31, firerate: 66, accuracy: 61, mobility: 52, range: 60, control: 47, source: "css/lmg/rpd.jpg" }
    //smg

const mac10 = { name: "MAC-10", damage: 24, firerate: 120, accuracy: 31, mobility: 107, range: 44, control: 26, source: "css/smg/mac10.jpg" }
const ppsh41 = { name: "PPSh-41", damage: 23, firerate: 82, accuracy: 42, mobility: 88, range: 46, control: 43, source: "css/smg/ppsh.jpg" }
const cbr4 = { name: "CBR4", damage: 24, firerate: 81, accuracy: 43, mobility: 94, range: 47, control: 42, source: "css/smg/cbr.jpg" }
const mx9 = { name: "MX9", damage: 25, firerate: 86, accuracy: 45, mobility: 95, range: 41, control: 40, source: "css/smg/mx9.jpg" }
const qxr = { name: "QXR", damage: 22, firerate: 87, accuracy: 57, mobility: 101, range: 47, control: 40, source: "css/smg/qxr.jpg" }


//shotgun
const jak12 = { name: "Jak-12", damage: "17 x 12", firerate: 42, accuracy: 49, mobility: 75, range: 33, control: 42, source: "css/shotgun/jak.jpg" }
const r90 = { name: "R9-0", damage: "17 x 12", firerate: 34, accuracy: 49, mobility: 86, range: 38, control: 42, source: "css/shotgun/r9.jpg" }
const echo = { name: "Echo", damage: "21 x 8", firerate: 35, accuracy: 49, mobility: 82, range: 36, control: 42, source: "css/shotgun/echo.jpg" }
const krm262 = { name: "KRM 262", damage: "36 x 8", firerate: 28, accuracy: 51, mobility: 73, range: 39, control: 42, source: "css/shotgun/krm.jpg" }
const striker = { name: "Striker", damage: "17 x 8", firerate: 38, accuracy: 49, mobility: 73, range: 34, control: 42, source: "css/shotgun/striker.jpg" }

//marksman
const kiloBoltAction = { name: "Kilo Bolt Action", damage: 85, firerate: 28, accuracy: 59, mobility: 40, range: 90, control: 34, source: "css/marksman/kilobolt.jpg" }
const sks = { name: "SKS", damage: 60, firerate: 43, accuracy: 82, mobility: 46, range: 62, control: 57, source: "css/marksman/sks.jpg" }
const spr = { name: "SP-R 208", damage: 72, firerate: 27, accuracy: 63, mobility: 40, range: 56, control: 34, source: "css/marksman/spr.jpg" }
const mk2 = { name: "MK2", damage: 80, firerate: 28, accuracy: 54, mobility: 43, range: 74, control: 36, source: "css/marksman/mk2.jpg" }
    //pistol
const mw11 = { name: "MW11", damage: 35, firerate: 44, accuracy: 62, mobility: 96, range: 50, control: 41, source: "css/pistol/mw11.jpg" }
const gs50 = { name: ".50 GS", damage: 70, firerate: 33, accuracy: 88, mobility: 87, range: 50, control: 68, source: "css/pistol/gs50.jpg" }
const renetti = { name: "Renetti", damage: 28, firerate: 46, accuracy: 64, mobility: 107, range: 42, control: 42, source: "css/pistol/renneti.jpg" }

//attachments
//muzzles
const owcls = { name: "OWC Light Suprressor", damage: 0, firerate: 0, accuracy: 0, mobility: 0, range: 0, control: 0, description: "silence" }
const ts = { name: "Tactical Suppressor", damage: 0, firerate: 0, accuracy: 0, mobility: -.05, range: 0, control: 0, description: "silence" }
const ms = { name: "Monolithic Suprressor", damage: 0, firerate: 0, accuracy: -.07, mobility: -.07, range: .25, control: 0, description: "silence" }
    //barrels
const mip = { name: "MIP Light Barrel(short)", damage: 0, firerate: 0, accuracy: -.4, mobility: .26, range: 0, control: -.6, description: "" }
const owc = { name: "OWC Marksman", damage: 0, firerate: 0, accuracy: 0, mobility: .056, range: .25, control: .219, description: "" }

//scope
const rds = { name: "Red Dot Sight 1", damage: 0, firerate: 0, accuracy: 0, mobility: 0, range: 0, control: 0, description: "zoom" }
const crd = { name: "Classic Red Dot Sight", damage: 0, firerate: 0, accuracy: 0, mobility: -.05, range: 0, control: 0, description: "zoom" }
const rd2 = { name: "Red Dot Sight 2", damage: 0, firerate: 0, accuracy: 0, mobility: 0, range: 0, control: 0, description: "zoom" }

//stock
const nostock = { name: "No Stock", damage: 0, firerate: 0, accuracy: -.056, mobility: .25, range: 0, control: -.16, description: "" }
const ykm = { name: "YKM Combat Stock", damage: 0, firerate: 0, accuracy: -.04, mobility: .14, range: 0, control: -.148, description: "" }
const owss = { name: "OWC Skeleton Stock", damage: 0, firerate: 0, accuracy: -.032, mobility: .23, range: 0, control: -.036, description: "" }

//rear grip
const sgt = { name: "Stippled Grip Tape", damage: 0, firerate: 0, accuracy: -.12, mobility: .20, range: 0, control: -.064, description: "" }
const ggt = { name: "Granulated Grip Tape", damage: 0, firerate: 0, accuracy: .116, mobility: -.04, range: 0, control: 0, description: "" }
const rgt = { name: "OWC Skeleton Stock", damage: 0, firerate: 0, accuracy: -.092, mobility: 0, range: 0, control: .132, description: "" }

//magazine
const ema = { name: "Extended Mag A", damage: 0, firerate: 0, accuracy: 0, mobility: -.06, range: 0, control: 0, description: " + 10 Magazine size" }
const emb = { name: "Extended Mag B", damage: 0, firerate: 0, accuracy: 0, mobility: -.165, range: 0, control: 0, description: " + 20 Magazine size" }

//underbarrel
const sf = { name: "Strike Foregrip", damage: 0, firerate: 0, accuracy: .044, mobility: -.16, range: 0, control: .076, description: "" }
const mf = { name: "Merc ForeGrip", damage: 0, firerate: 0, accuracy: .112, mobility: -.20, range: 0, control: .069, description: "" }
const of = { name: "Operator Foregrip", damage: 0, firerate: 0, accuracy: -.08, mobility: 0, range: 0, control: .139, description: "" }
    //laser
const rtc = { name: "MIP Laser 1mW", damage: 0, firerate: 0, accuracy: .18, mobility: 0, range: 0, control: 0, description: "" }
const mipl = { name: "MIP Laser 5mW", damage: 0, firerate: 0, accuracy: .17, mobility: .25, range: 0, control: 0, description: "Visible Laser Sights" }
const owcl = { name: "OWC Laser-Tactical", damage: 0, firerate: 0, accuracy: .092, mobility: .8, range: 0, control: 0, description: "Visible Laser Sights" }
    //perk
const fmj = { name: "FMJ", damage: 0, firerate: 0, accuracy: 0, mobility: 0, range: 0, control: 0, description: "Bullet Penetration" }
const soh = { name: "Sleight of Hand", damage: 0, firerate: 0, accuracy: 0, mobility: .15, range: 0, control: 0, description: "Visible Laser Sights" }
const wd = { name: "Wounding", damage: 0, firerate: 0, accuracy: 0, mobility: 0, range: 0, control: 0, description: "Wound Infliction Effect" }



//names of DOM
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const gunName = document.getElementById('gunName')
const damage = document.getElementById('damage')
const firerate = document.getElementById('firerate')
const accuracy = document.getElementById('accuracy')
const mobility = document.getElementById('mobility')
const range = document.getElementById('range')
const control = document.getElementById('control')
const imageSource = document.getElementById('image')


//attachments
const muzzle = document.getElementById('muzzle')
const barrel = document.getElementById('barrel')
const scope = document.getElementById('scope')
const stock = document.getElementById('stock')
const laser = document.getElementById('laser')
const perk = document.getElementById('perk')
const foregrip = document.getElementById('fore-grip')
const mag = document.getElementById('magazine')
const reargrip = document.getElementById('rear-grip')






//list of guns
const assault = [ak47, m4, icr1, asval, kilo141]
const sniper = [koshka, svd, dlq, m21, locus]
const lmg = [pkm, hades, holger, chopper, rpd]
const smg = [mac10, ppsh41, mx9, qxr, cbr4]
const shotgun = [striker, echo, krm262, jak12, r90]
const marksman = [kiloBoltAction, sks, spr, mk2]
const pistol = [renetti, gs50, mw11]
    //whats new
const whatsNew = [koshka]

//list of attachments
const muzzles = [owcls, ts, ms]
const barrels = [owc, mip]
const scopes = [rds, crd, rd2]
const stocks = [nostock, ykm, owss]
const rearGrips = [sgt, ggt, rgt]
const underbarrels = [sf, mf, of]
const lasers = [rtc, mipl, owcl]
const perks = [fmj, soh, wd]
const mags = [ema, emb]

//indexes
let count = 0

const navlinks = document.querySelectorAll('[data-cell]')

//necessities
var currentGuns = whatsNew
var currentBarrel = []
var currentScope = []
var currentStock = []
var currentMuzzle = []
var currentPerk = []
var currentLaser = []
var currentMag = []
var currentForegrip = []
var currentReargrip = []
var numberAttachments = 0


var pseudoObject = { name: "", damage: 0, firerate: 0, accuracy: 0, mobility: 0, range: 0, control: 0 }

start()


//actual functions
function start() {
    gunName.addEventListener('change', change)
    next.addEventListener("click", function() { nextDisplay() })
    prev.addEventListener("click", function() { prevDisplay() })
    navlinks.forEach(links => {
        links.addEventListener("click", changeGuns)
    })
    barrel.addEventListener('change', getBarrel)
    scope.addEventListener('change', getScope)
    stock.addEventListener('change', getStock)
    muzzle.addEventListener('change', getMuzzle)
    perk.addEventListener('change', getPerk)
    laser.addEventListener('change', getLaser)
    foregrip.addEventListener('change', getForegrip)
    mag.addEventListener('change', getMag)
    reargrip.addEventListener('change', getReargrip)

    attacher()
    gunNameGenerator(currentGuns)
    statEditor()
}

function statWithAttachments() {
    damage.innerHTML = pseudoObject.damage
    firerate.innerHTML = pseudoObject.firerate
    accuracy.innerHTML = pseudoObject.accuracy
    mobility.innerHTML = pseudoObject.mobility
    range.innerHTML = pseudoObject.range
    control.innerHTML = pseudoObject.control
}

function addValues(attachmentHere) {
    pseudoObject.damage += Math.floor((pseudoObject.damage * attachmentHere.damage) / 2)
    pseudoObject.firerate += Math.floor((pseudoObject.firerate * attachmentHere.firerate) / 2)
    pseudoObject.accuracy += Math.floor((pseudoObject.accuracy * attachmentHere.accuracy) / 2)
    pseudoObject.mobility += Math.floor((pseudoObject.mobility * attachmentHere.mobility) / 2)
    pseudoObject.range += Math.floor((pseudoObject.range * attachmentHere.range) / 2)
    pseudoObject.control += Math.floor((pseudoObject.control * attachmentHere.control) / 2)
    statWithAttachments()

}

function deductValues(attachmentHere) {
    pseudoObject.damage -= Math.floor((pseudoObject.damage * attachmentHere.damage) / 2)
    pseudoObject.firerate -= Math.floor((pseudoObject.firerate * attachmentHere.firerate) / 2)
    pseudoObject.accuracy -= Math.floor((pseudoObject.accuracy * attachmentHere.accuracy) / 2)
    pseudoObject.mobility -= Math.floor((pseudoObject.mobility * attachmentHere.mobility) / 2)
    pseudoObject.range -= Math.floor((pseudoObject.range * attachmentHere.range) / 2)
    pseudoObject.control -= Math.floor((pseudoObject.control * attachmentHere.control) / 2)
    statWithAttachments()
}

function getBarrel(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentBarrel.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentBarrel.push(barrels[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(barrels[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            laser.selectedIndex = 0
        }
    }

}

function getScope(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentScope.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentScope.push(scopes[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(scopes[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            scope.selectedIndex = 0
        }
    }

}

function getStock(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentStock.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentStock.push(stocks[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(stocks[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            stock.selectedIndex = 0
        }
    }

}

function getPerk(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        const value = currentPerk.pop()
        console.log(value.name)
        if (numberAttachments == 0) {
            numberAttachments = numberAttachments - 1
        }
    } else {
        currentPerk.push(perks[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(perks[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            perk.selectedIndex = 0
        }
    }

}

function getMuzzle(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentMuzzle.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentMuzzle.push(muzzles[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(muzzles[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            muzzle.selectedIndex = 0
        }
    }

}

function getForegrip(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentForegrip.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentForegrip.push(underbarrels[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(underbarrels[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            foregrip.selectedIndex = 0
        }
    }

}

function getMag(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentMag.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentMag.push(mags[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(mags[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            mag.selectedIndex = 0
        }
    }

}

function getReargrip(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentReargrip.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentReargrip.push(barrels[currentChoice.selectedIndex])
        console.log("added")
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(rearGrips[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            reargrip.selectedIndex = 0
        }
    }

}

function getLaser(e) {
    const currentChoice = e.target
    if (currentChoice.selectedIndex == 0) {
        if (numberAttachments != 0) {
            const value = currentLaser.pop()
            numberAttachments = numberAttachments - 1
            deductValues(value)
        }
    } else {
        currentLaser.push(lasers[currentChoice.selectedIndex])
        if (numberAttachments < 5) {
            numberAttachments = numberAttachments + 1
            addValues(lasers[currentChoice.selectedIndex])
        } else {
            alert("Maximum numbers of attachments reached")
            laser.selectedIndex = 0
        }
    }

}

function reset() {
    barrel.selectedIndex = 0
    scope.selectedIndex = 0
    stock.selectedIndex = 0
    perk.selectedIndex = 0
    muzzle.selectedIndex = 0
    laser.selectedIndex = 0
    mag.selectedIndex = 0
    foregrip.selectedIndex = 0
    reargrip.selectedIndex = 0

}

//creates option tags relative with the number of attachments
function attacher() {
    addAttachments("", barrel)
    addAttachments("", scope)
    addAttachments("", stock)
    addAttachments("", muzzle)
    addAttachments("", perk)
    addAttachments("", laser)
    addAttachments("", foregrip)
    addAttachments("", mag)
    addAttachments("", reargrip)
    barrels.forEach(element => {
        addAttachments(element.name, barrel)
    })
    scopes.forEach(element => {
        addAttachments(element.name, scope)
    })
    stocks.forEach(element => {
        addAttachments(element.name, stock)
    })
    muzzles.forEach(element => {
        addAttachments(element.name, muzzle)
    })
    perks.forEach(element => {
        addAttachments(element.name, perk)
    })
    lasers.forEach(element => {
        addAttachments(element.name, laser)
    })
    underbarrels.forEach(element => {
        addAttachments(element.name, foregrip)
    })
    mags.forEach(element => {
        addAttachments(element.name, mag)
    })
    rearGrips.forEach(element => {
        addAttachments(element.name, reargrip)
    })

}


function addAttachments(name, whereToAttach) {
    const newElement = document.createElement('option')
    newElement.innerHTML = name
    whereToAttach.appendChild(newElement)

}


//changes the gun category
function changeGuns(e) {
    const current = e.target
    const navName = current.textContent
    console.log(current.textContent)
    remover()
    if (navName == "assault rifle") {
        currentGuns = assault
    }
    if (navName == "smg") {
        currentGuns = smg
    }
    if (navName == "lmg") {
        currentGuns = lmg
    }
    if (navName == "sniper") {
        currentGuns = sniper
    }
    if (navName == "shotgun") {
        currentGuns = shotgun
    }
    if (navName == "marksman") {
        currentGuns = marksman
    }
    if (navName == "pistol") {
        currentGuns = pistol
    }
    if (navName == "home") {
        currentGuns = whatsNew
    }
    document.getElementById('currentpage').innerHTML = navName
    gunNameGenerator(currentGuns)
    reset()
    numberAttachments = 0
    count = 0
    statEditor()
}
//removes the options in the select tag
function remover() {
    for (var i = 0; i < currentGuns.length; i++) {
        gunName.remove(0)
    }
}

//for the sub menu
function statEditor() {
    damage.innerHTML = currentGuns[count].damage
    firerate.innerHTML = currentGuns[count].firerate
    accuracy.innerHTML = currentGuns[count].accuracy
    mobility.innerHTML = currentGuns[count].mobility
    range.innerHTML = currentGuns[count].range
    control.innerHTML = currentGuns[count].control
    document.getElementById('image').setAttribute("src", currentGuns[count].source)
    pseudoObject = currentGuns[count]

}

//changes the gun using the select tag
function change(e) {
    const current = e.target
    count = current.selectedIndex
    statEditor()
    count = count + 1

}

//creates new option tags and appends them to the select tag
function gunNameGenerator(currentList) {
    currentList.forEach(element => {
        const newElement = document.createElement('option')
        newElement.innerHTML = element.name
        gunName.appendChild(newElement)

    });
}

//displays the next item of the current gun
function nextDisplay() {
    count = count + 1
    if (count == currentGuns.length) {
        count = 0
    }
    reset()
    gunName.selectedIndex = count
    pseudoObject = currentGuns[count]
    reset()
    statEditor()
}
//displays the previous item of the current gun
function prevDisplay() {
    if (count == 0) {
        count = currentGuns.length
    }
    count = count - 1
    statEditor()
    pseudoObject = currentGuns[count]
    reset()
    statEditor()
    gunName.selectedIndex = count


}