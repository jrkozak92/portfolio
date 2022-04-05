const projects = [{name: 'HobbyHelper',
                  description: 'Looking for a new hobby? Look no further!',
                  imageRef: '../images/hobbyhelper.png',
                  path: 'https://shielded-retreat-18321.herokuapp.com/hobbies'},
                  {name: 'Futurama Fan App',
                  description: 'Welcome to the World of Tomorrow! Made by two huge Futurama nerds, featuring a list of characters and episodes pulled from a 3rd party API with full CRUD functionality!',
                  imageRef: '../images/futurama.png',
                  path: 'https://shrouded-cove-05719.herokuapp.com/'},
                  {name:'PetTracker',
                  description:"Track your pet's daily needs, share milestones with others, and crowdsource information on lost pets via Google Maps!",
                  imageRef:'../images/tracker.png',
                  path:'https://stark-beach-27454.herokuapp.com/tracker'},
                  {name: 'Click Battle!',
                  description: 'Can you click faster than the computer? How long can you keep it up?',
                  imageRef: '../images/click-battle.png',
                  path: '../projects/click-battle/index.html'},
                  {name: 'Etch-a-Sketch',
                  description: 'jQuery app that emulates a digital Etch-a-Sketch, complete with Classic trace and Drag to Draw modes. (Probably not mobile friendly)',
                  imageRef: '../images/etch-a-sketch.png',
                  path: '../projects/etch-a-sketch/index.html'},
                  {name:'Flowerbox',
                  description:'Flexbox-intensive Mockup copy of a fake company website.',
                  imageRef:'../images/flowerbox.png',
                  path:'../projects/FlowerBox/index.html'},
                  {name:'Lawnmower',
                  description:'Text-based lawn-mowing themed strategy game built in vanilla JavaScript. (Probably not popup blocker friendly)',
                  imageRef:'../images/lawnmower.png',
                  path:'../projects/lawnmower/index.html'}
                ]
// array of objects of projects to populate onto subpages


const carouselImages = [{path:'../images/buddy&ella.jpeg',
                          description:'Buddy & Ella living the dream'},
                        {path:'../images/buddy-derp.jpeg',
                          description:'Buddy after a long day'},
                        {path:'../images/ella-glamour.jpeg',
                          description:'Ella looking beautiful'},
                        {path:'../images/fpv.mov',
                          description:'FPV drone highlight reel'},
                        {path:'../images/amboise-chateau.jpeg',
                          description:`Château d'Amboise in the Loire Valley of France`}
                        ]
// array of objects to populate carousel contents and info


// wait for DOM to load
$(() => {
  //Loops through Projects array to create cards
  for (let obj of projects) {
    // creates div with relevant info
    let $project = $('<div>')
                  .addClass('project')
                  .attr('id',`project-${projects.indexOf(obj)}`)

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

  //Carousel controller
  //handles index control
  let carouselIndex = 0

  //handles scoping for variable
  let $displayThis = undefined
  //handles scoping for variable
  let $displayDescription = undefined

  //movie or image handler function
  const generateCarouselConent = () => {
    //check if .mov or other
    if ( carouselImages[carouselIndex].path.charAt(carouselImages[carouselIndex].path.length - 1)  === 'v' ) {
        // creates video tag with desired settings is video
        $displayThis = $('<video controls autoplay muted>')
                        .attr('src', carouselImages[carouselIndex].path)

      } else {
        // creates image tag if not video
        $displayThis = $('<img>')
                        .attr('src', carouselImages[carouselIndex].path)
    }

    // handles description regardless of video/image
    $displayDescription = $('<p>')
                          .attr('id','carousel-description')
                          .text(carouselImages[carouselIndex].description)

    // sets ID on content
    $displayThis.attr('id','displayed-carousel-image')

    //clears content container
    $('#carousel-content').empty()

    //adds new contents to content conatiner
    $('#carousel-content').append($displayThis)
    $('#carousel-content').append($displayDescription)
  }
  //initial carousel on load
  generateCarouselConent()

  //carousel changes event listeners
  // previous button and conditional to handle front of array
  $('#left-carousel-button').on('click', () => {
    carouselIndex--
    if (carouselIndex < 0){
      carouselIndex = carouselImages.length - 1
    }
    generateCarouselConent()
  } )

  // next button and conditional to handle end of array
  $('#right-carousel-button').on('click', () => {
    carouselIndex++
    if (carouselIndex >= carouselImages.length){
      carouselIndex = 0
    }
    generateCarouselConent()
  })

})
