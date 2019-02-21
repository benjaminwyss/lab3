let imageIndex = 0
let imageMax = 5
let images = ["cow.jpg", "pig.jpg", "chicken.jpg", "lamb.jpg", "horse.jpg"]

function previous()
{
  if (imageIndex == 0)
  {
    imageIndex = imageMax - 1
  }
  else
  {
    imageIndex--
  }
  let picture = document.getElementById('image')
  picture.src = images[imageIndex]
}
function next()
{
  if (imageIndex == (imageMax - 1))
  {
    imageIndex = 0
  }
  else
  {
    imageIndex++
  }
  let picture = document.getElementById('image')
  picture.src = images[imageIndex]
}
