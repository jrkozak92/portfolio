const bestProjects = [{name: 'HobbyHelper',
                      description: 'Looking for a new hobby? Look no further! This PERN stack app utilizes Redux and ReactRouter with TypeScript, and is deployed via Heroku.',
                      imageRef: './images/hobbyhelper.png',
                      path: 'https://shielded-retreat-18321.herokuapp.com/hobbies'},
                      {name: 'Futurama Fan App',
                      description: 'Welcome to the World of Tomorrow! Made by two huge Futurama nerds, featuring a list of characters and episodes pulled from a 3rd party API with full CRUD functionality! Built on the MERN stack with basic User Authentication and Google Maps integration.',
                      imageRef: './images/futurama.png',
                      path: 'https://shrouded-cove-05719.herokuapp.com/'},
                      {name:'PetTracker',
                      description:"Track your pet's daily needs, share milestones with others, and crowdsource information on lost pets via Google Maps!",
                      imageRef:'./images/tracker.png',
                      path:'https://stark-beach-27454.herokuapp.com/tracker'}
                    ]
// array of objects of projects to populate onto homepage

// wait for DOM to load
$(() => {
  //Loops through bestProjects array to create project cards
  for (let obj of bestProjects) {
    // creates div with relevant info
    let $project = $('<div>')
                  .addClass('project')
                  .attr('id',`project-${bestProjects.indexOf(obj)}`)

    // creates image
    let $image = $('<img>')
                .attr('src', obj.imageRef)
                .addClass('project-thumbnail')

    // creates title
    let $title = $('<h6>')
                .text(obj.name)
                .addClass('project-title')

    // creates description p
    let $description = $('<p>')
                      .text(obj.description)
                      .addClass('project-description')

    // adds all content to project card in order
    $project.append($image)
    $project.append($title)
    $project.append($description)

    // adds click listener to generate project modal
    $project.on('click', () => {
      //modal creation and population
      let $modalDiv = $('<div>').attr('id','modal-div')
      let $modal = $('<iframe>').attr('src', obj.path)
                                .attr('title', obj.name)
                                .addClass('modal-frame')

      // adds iframe to fullscreen div
      $modalDiv.append($modal)

      // adds listener to close modal on click outside of iframe
      $modalDiv.on('click', () => {
        $modalDiv.remove()
      })

      // adds modal to page
      $('body').append($modalDiv)
    })

    // adds project cards to generic container
    $('#project-container').append($project)
  }
    //Nav controller
    //opens menu on click
    $('#closed-nav').on('click', () => {
      $('#open-nav').slideToggle()
    })
    //opens menu on click to handle z-index
    $('ion-icon').eq(0).on('click', () => {
      $('#open-nav').slideToggle()
    })
    // tells following conditional it's first load
    let firstLoad = undefined;
    //sets nav style based on screen size and load status
    if ( $(window).attr('innerWidth') >= 820 && !firstLoad){
      $('#open-nav').css('display','flex')
    } else {
      $('#open-nav').css('display','none')
    }
    //tells above conditional when it's called after initial load
    firstLoad = false;

    // tells nav how to handle screen resizes
    $(window).resize(() => {
      if ( $(window).attr('innerWidth') >= 820 ){
        $('#open-nav').css('display','flex')
      } else {
        $('#open-nav').css('display','none')
      }
    })

    //Shadowcycle animation controller
    //applies class containing animation to element
    $('#welcome').on('mouseenter', () => {
      $('#welcome').addClass('shadowcycle')
    })
    //removes class at end of animation cycle instead of immediately on mouseleave
    $('#welcome').on('mouseleave', () => {
      $('.shadowcycle').on('animationiteration', () => {
        $('#welcome').removeClass('shadowcycle').off('animationiteration')
      })
    })
})
