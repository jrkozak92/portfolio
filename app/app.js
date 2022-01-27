const projects = [{name: 'test',
                  description: 'testing stuff',
                  imageRef: '../images/test-project'}]

$(() => {
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
    $('#closed-nav').on('click', () => {
      $('#open-nav').toggleClass('hide')
    })
    $('ion-icon').on('click', () => {
      $('#open-nav').toggleClass('hide')
    })
  }

})
