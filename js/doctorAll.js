document.addEventListener('DOMContentLoaded', async function () {
  try {
    const response = await fetch(
      'http://165.22.247.233:5001/api/Doctors/GetAllDoctors'
    )

    if (!response.ok) {
      throw new Error("Serverdan ma'lumot olishda xatolik.")
    }

    const doctors = await response.json()

    console.log(doctors)

    const carousel = document.getElementById('doctorCarousel')

    if (!carousel) {
      console.error('Carousel element topilmadi!')
      return
    }
    ;[]
    doctors.forEach(doctor => {
      const item = document.createElement('div')
      item.className = 'item'

      // Dinamik kartochka HTML
      item.innerHTML += `
        <div class="box" style="background: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); text-align: center; padding: 20px; max-width: 300px; margin: auto;">
          <div class="img-box" style="overflow: hidden; margin-bottom: 15px;">
          <div style="width: 100%; height: auto; object-fit: cover;">
            <img src="${
              doctor.imageUrl
                ? 'http://165.22.247.233:5001' + doctor.imageUrl
                : 'https://via.placeholder.com/200x200?text=No+Image'
            }" alt="${
        doctor.fullName
      }" style="width: 100%; height: auto; object-fit: cover;" />
          </div>
          </div>
          <div class="detail-box">
            <h5 style="font-size: 20px; font-weight: 600; color: #000000; margin: 10px 0;">${
              doctor.fullName
            }</h5>
            <h6 style="color: #00bfa6; font-weight: 500; font-size: 16px; margin-bottom: 15px;">${
              doctor.specialty
            }</h6>
            <div class="social_box" style="display: flex; justify-content: center; gap: 15px; font-size: 18px;">
              <a href="${
                doctor.facebook || '#'
              }" target="_blank" style="color: #000;"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="${
                doctor.twitter || '#'
              }" target="_blank" style="color: #000;"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="${
                doctor.linkedin || '#'
              }" target="_blank" style="color: #000;"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="${
                doctor.instagram || '#'
              }" target="_blank" style="color: #000;"><i class="fa fa-instagram" aria-hidden="true"></i></a>
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
