document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch(
      'http://165.22.247.233:5001/api/Doctors/GetAllDoctors'
    )

    if (!response.ok) {
      throw new Error("Serverdan ma'lumot olishda xatolik.")
    }

    const doctors = await response.json()
    console.log('Doktorlar:', doctors) // Tekshiruv uchun

    const carousel = document.getElementById('doctorCarousel')

    if (!carousel) {
      console.error('Carousel element topilmadi!')
      return
    }

    doctors.forEach(doctor => {
      const item = document.createElement('div')
      item.className = 'item'

      // Dinamik HTML yaratish
      item.innerHTML = `
        <div class="box">
          <div class="img-box">
            <img src="${
              "http://165.22.247.233:5001" + doctor.imageUrl ||
              'https://via.placeholder.com/200x200?text=No+Image'
            }" alt="${doctor.fullName}" />
          </div>
          <div class="detail-box">
            <h5>${doctor.fullName}</h5>
            <h6>${doctor.specialty}</h6>
            <div class="social_box">
              <a href="${
                doctor.facebook || '#'
              }" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="${
                doctor.twitter || '#'
              }" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="${
                doctor.linkedin || '#'
              }" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="${
                doctor.instagram || '#'
              }" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      `

      carousel.appendChild(item)
    })

    // Owl Carousel'ni ishga tushirish
    $('.team_carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      items: 3,
      autoplay: true,
      autoplayTimeout: 3000
    })
  } catch (error) {
    console.error("Doktorlar ro'yxatini yuklashda xatolik:", error)
  }
})
