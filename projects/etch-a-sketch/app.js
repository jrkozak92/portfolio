//Click & Drag Etch-A-Sketch

let mousedown = true


$(() => {
  for (let i = 0; i < 5500; i++){
    let rVal = Math.floor(Math.random()*56)+200
    const $pixel = $('<div>')
    .addClass('pixel')
    .css('background-color',`rgb(${rVal},${rVal},${rVal})`)

    $('#dragVsClassic').on('change', () => {
      if ($('#dragVsClassic').is(':checked')){
        //Drag & Drop
        mousedown = false
        $('body').on('mousedown', () => {
          mousedown = true
        })
        $('body').on('mouseup', () => {
          mousedown = false
        })
      } else {
    // Traditional Etch-A-Sketch style
        $('body').off()
        mousedown = true;
      }
    })

    $pixel.on('mousemove', () => {
      if (mousedown) {
        $pixel.css('background-color',`rgb(0,0,0)`)
      }
    })
    $('body').append($pixel)
  }


})
