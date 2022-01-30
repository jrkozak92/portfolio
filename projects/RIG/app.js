const $randDiv = $('<div>')
.text('Add random image')
.addClass('random-image')
.attr('id','addBtn')

const $inputDiv = $('<div>')
const $inputLink = $('<input>')
                    .attr('type','text')
                    .attr('id','link')

const $inputSubmit = $('<input>')
                    .attr('type','submit')
                    .attr('id','submit')
                    .val('Add Image')
                    .on('click', () => {
                      if ($inputLink.val() !== ''){
                        images.push($inputLink.val())
                        $inputLink.val('')
                      }
                    })

const images = [
  'https://emoji.slack-edge.com/T0351JZQ0/bender-neat/15482fe571ad6aae.gif',
  'https://emoji.slack-edge.com/T0351JZQ0/aww_yeah/3cdfe6ea166380fe.gif',
  'https://emoji.slack-edge.com/T0351JZQ0/persian_cat_meme/721dbee042cf8ed7.jpg',
  'https://emoji.slack-edge.com/T0351JZQ0/yoyo_scared/03cec698ccef4ae8.gif',
  'https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f44d-1f3fc.png',
  'https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f440.png'
]
const count = 0

const addImage = () => {
  const randIndex = Math.floor(Math.random()*(images.length))
  const $randImg = $('<img>')
  .addClass('random-image')
  .attr('src', images[randIndex])
  .on('click', () => {
    $randImg.remove()
  })


  $('body').append($randImg)
}

$(() => {
  $('body').css('display','flex')
  $('body').css('flex-direction','row')
  $('body').css('flex-wrap','wrap')
  $('body').css('justify-content','center')
  $inputDiv.css('display','block')
  $inputDiv.append($inputLink)
  $inputDiv.append($inputSubmit)
  $('body').append($inputDiv)
  $('body').append($randDiv)

  $randDiv.on('click', addImage)


})
