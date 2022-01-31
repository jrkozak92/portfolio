const projects = [{name: 'Click Battle!',
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

    $project.on('click', () => {
      //modal creation and population
      let $modalDiv = $('<div>').attr('id','modal-div')
      let $modal = $('<iframe>').attr('src', obj.path)
                                .attr('title', obj.name)
                                .addClass('modal-frame')
      $modalDiv.append($modal)
      $modalDiv.on('click', () => {
        $modalDiv.remove()
      })
      $('body').append($modalDiv)
    })


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

  //Carousel controller
  let carouselIndex = 0
  let $displayThis = undefined
  let $displayDescription = undefined
  //movie or image
  const generateCarouselConent = () => {
    if ( carouselImages[carouselIndex].path.charAt(carouselImages[carouselIndex].path.length - 1)  === 'v' ) {
        $displayThis = $('<video controls autoplay muted>')
                        .attr('src', carouselImages[carouselIndex].path)

      } else {
        $displayThis = $('<img>')
                        .attr('src', carouselImages[carouselIndex].path)
    }

    $displayDescription = $('<p>')
                          .attr('id','carousel-description')
                          .text(carouselImages[carouselIndex].description)

    $displayThis.attr('id','displayed-carousel-image')

    $('#carousel-content').empty()
    $('#carousel-content').append($displayThis)
    $('#carousel-content').append($displayDescription)
  }
  //initial carousel on load
  generateCarouselConent()
  //carousel changes event listeners
  $('#left-carousel-button').on('click', () => {
    carouselIndex--
    if (carouselIndex < 0){
      carouselIndex = carouselImages.length - 1
    }
    generateCarouselConent()
  } )
  $('#right-carousel-button').on('click', () => {
    carouselIndex++
    if (carouselIndex >= carouselImages.length){
      carouselIndex = 0
    }
    generateCarouselConent()
  })

})
