let imageIndex = 0
let imageMax = 5
let images = ["pictures/cow.jpg", "pictures/pig.jpg", "pictures/chicken.jpg", "pictures/lamb.jpg", "pictures/horse.jpg"]

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
