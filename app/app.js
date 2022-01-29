const bestProjects = [{name: 'test',
                  description: 'testing stuff',
                  imageRef: './images/test-project.png',
                  path: './projects/#'}]






$(() => {
  //Loops through Projects array to create cards
  for (let obj of bestProjects) {
    let $project = $('<a>')
                  .addClass('project')
                  .attr('id',`project-${bestProjects.indexOf(obj)}`)
                  .attr('href', obj.path)

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
