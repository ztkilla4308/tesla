let homepages = document.querySelectorAll('.homepage-hero')
homepages.forEach((elem) => {
  elem.addEventListener('wheel', (event) => {
    event.preventDefault
    let temp = event.target.id
    let x
    for (let i = 0; i < homepages.length; i++) {
      if (homepages[i].id == temp) {
        if (event.deltaY > 0) {
          if (
            document.getElementById(temp) !=
            document.getElementById('homepage7')
          ) {
            x = homepages[i + 1].id
          } else {
            return 0
          }
        } else {
          if (
            document.getElementById(temp) !=
            document.getElementById('homepage1')
          ) {
            x = homepages[i - 1].id
          } else {
            return 0
          }
        }
      }
    }

    let z = document.getElementById(x)
    const y = z.getBoundingClientRect().top + window.scrollY
    window.scroll({
      top: y,
      behavior: 'smooth',
      duration: 400,
    })
  })
})

function example() {
  console.log('bang')
}
