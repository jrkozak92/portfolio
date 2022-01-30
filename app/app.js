const bestProjects = [{name: 'Click Battle!',
                      description: 'Can you click faster than the computer? How long can you keep it up?',
                      imageRef: './images/click-battle.png',
                      path: './projects/click-battle/index.html'},
                      {name: 'Etch-a-Sketch',
                      description: 'jQuery app that emulates a digital Etch-a-Sketch, complete with Classic trace and Drag to Draw modes.',
                      imageRef: './images/etch-a-sketch.png',
                      path: './projects/etch-a-sketch/index.html'},
                      {name:'Flowerbox',
                      description:'Flexbox-intensive Mockup copy of a fake company website',
                      imageRef:'./images/flowerbox.png',
                      path:'./projects/FlowerBox/index.html'}
                    ]

$(() => {
  //Loops through Projects array to create cards
  for (let obj of bestProjects) {
    let $project = $('<a>')
                  .addClass('project')
                  .attr('id',`project-${bestProjects.indexOf(obj)}`)
                  .attr('href', obj.path)
                  .attr('target','_blank')

    let $image = $('<img>')
                .attr('src', obj.imageRef)
                .addClass('project-thumbnail')

    let $title = $('<h6>')
                .text(obj.name)
                .addClass('project-title')

    let $description = $('<p>')
                      .text(obj.description)
                      .addClass('project-description')

    $project.append($image)
    $project.append($title)
    $project.append($description)
    $('#project-container').append($project)
  }
    //Nav controller
    $('#closed-nav').on('click', () => {
      $('#open-nav').slideToggle()
    })
    $('ion-icon').eq(0).on('click', () => {
      $('#open-nav').slideToggle()
    })
    let firstLoad = undefined;
    if ( $(window).attr('innerWidth') >= 820 && !firstLoad){
      $('#open-nav').css('display','flex')
    } else {
      $('#open-nav').css('display','none')
    }
    firstLoad = false;
    $(window).resize(() => {
      if ( $(window).attr('innerWidth') >= 820 ){
        $('#open-nav').css('display','flex')
      } else {
        $('#open-nav').css('display','none')
      }
    })

})
