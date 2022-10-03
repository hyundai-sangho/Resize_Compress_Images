// 이미지 가로 사이즈 800으로 세팅
const WIDTH = 800

let input = document.getElementById('input')

input.addEventListener('change', (event) => {
  let image_file = event.target.files[0]
  let reader = new FileReader()
  reader.readAsDataURL(image_file)

  reader.onload = (event) => {
    let image_url = event.target.result
    let image = document.createElement('img')
    image.src = image_url

    image.onload = (e) => {
      let canvas = document.createElement('canvas')
      let ratio = WIDTH / e.target.width
      canvas.width = WIDTH
      canvas.height = e.target.height * ratio

      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, canvas.width, canvas.height)

      let new_image_url = context.canvas.toDataURL('image/jpeg', 90)
      let new_image = document.createElement('img')

      new_image.src = new_image_url
      document.getElementById('wrapper').appendChild(new_image)
    }
    // document.getElementById('wrapper').appendChild(image)
  }
})
