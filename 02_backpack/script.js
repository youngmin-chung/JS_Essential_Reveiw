/**
 * Create a Backpack object, populate some HTML to display its properties.
 */

// Single line comment

/* Multi-line comment
See! this line is also commented out! */

/** function updateBackpack()
 * Outputs HTML
 * @param {string} update
 */

/*
  TIPS!
  1. Write your JavaScript from top to bottom because that's how the browser will read it.
  2. About Comments, they are used to leave literal comments for yourself and other humans 
      to explain what's going on.
  3. In JavaScript, spacing is purely for the human user.
  4. Semicolon, This is purely editor preference.
  5. Single/Double quotes are developer preference. 
 */

const updateBackpack = (update) => {
  let main = document.querySelector('main') // main is an element
  main.innerHTML = markup(backpack)
  console.info(update)
}

const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus
    updateBackpack(`Lid status changed.`)
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft
    this.strapLength.right = lengthRight
    updateBackpack(`Strap lengths updated.`)
  },
}

const markup = (backpack) => {
  return `
  <div>
	<h3>${backpack.name}</h3>
	<ul>
	  <li>Volume: ${backpack.volume}</li>
	  <li>Color: ${backpack.color}</li>
	  <li>Number of pockets: ${backpack.pocketNum}</li>
	  <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
	  <li>Top lid: ${backpack.lidOpen ? 'Open' : 'Closed'}</li>
	</ul>
  </div>
`
}

const main = document.createElement('main')
main.innerHTML = markup(backpack)
document.body.appendChild(main)
