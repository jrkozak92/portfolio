//Click & Drag Etch-A-Sketch

// let mousedown = false
//
// $(() => {
//   for (let i = 0; i < 5500; i++){
//     let rVal = Math.floor(Math.random()*56)+200
//     const $pixel = $('<div>')
//     .addClass('pixel')
//     .css('background-color',`rgb(${rVal},${rVal},${rVal})`)
//
//     $pixel.on('mousemove', () => {
//       if (mousedown) {
//         $pixel.css('background-color',`rgb(0,0,0)`)
//       }
//     })
//     $('body').append($pixel)
//   }
//
//
//   $('body').on('mousedown', () => {
//     mousedown = true
//   })
//   $('body').on('mouseup', () => {
//     mousedown = false
//   })
// })

// Traditional Etch-A-Sketch style
$(() => {
  for (let i = 0; i < 5500; i++){
    let rVal = Math.floor(Math.random()*56)+200
    const $pixel = $('<div>')
    .addClass('pixel')
    .css('background-color',`rgb(${rVal},${rVal},${rVal})`)

    $pixel.on('mousemove', () => {
      $pixel.css('background-color',`rgb(0,0,0)`)
    })
    $('body').append($pixel)
  }

})
