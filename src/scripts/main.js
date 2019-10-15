console.log('knock knock knock...')
console.log('no one is here stop knocking...')

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }
    //changed this to a let
    let HTMLRepresentation = `<h1>The Mod Squad</h1>`
    
    ModSquad.members.forEach(member => {
        //took out the const
         HTMLRepresentation += `<div>${member}</div>`
    })
    // don't forget to add the DOM class
    //moved the document.... inside the bracket to move in scope
    document.querySelector(".show-info").innerHTML = HTMLRepresentation
}
