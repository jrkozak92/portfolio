const projects = [{name: 'test',
                  description: 'testing stuff',
                  imageRef: '../images/test-project'}]

$(() => {
  for (let obj of projects) {
    let project = $('<div>')
                  .addClass('project')
                  .attr('id',`project-${indexOf(obj)}`)
    $('body').append(project)
  }

})
