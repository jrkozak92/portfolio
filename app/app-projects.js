const projects = [{name: 'test',
                  description: 'testing stuff',
                  imageRef: '../images/test-project.png'},
                  {name: 'test',
                  description: 'testing stuff',
                  imageRef: '../images/test-project.png'},
                  {name: 'test',
                  description: 'testing stuff',
                  imageRef: '../images/test-project.png'}
                ]






$(() => {
  //Loops through Projects array to create cards
  for (let obj of projects) {
    let $project = $('<div>')
                  .addClass('project')
                  .attr('id',`project-${projects.indexOf(obj)}`)

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
  $('ion-icon').on('click', () => {
    $('#open-nav').slideToggle()
  })
  $(window).resize(() => {
    if ( $(window).attr('innerWidth') >= 820 ){
      $('#open-nav').css('display','flex')
    } else {
      $('#open-nav').css('display','none')
    }
  })
})
