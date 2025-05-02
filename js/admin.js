document
  .getElementById('saveDoctor')
  .addEventListener('click', async function () {
    const form = document.getElementById('doctorForm')
    const formData = new FormData(form)

    try {
      const response = await fetch(
        'http://165.22.247.233:5001/api/Doctors/CreateDoctor',
        {
          method: 'POST',
          body: formData
        }
      )

      if (!response.ok) {
        throw new Error('Doctor qo‘shishda xatolik yuz berdi.')
      }

      const result = await response.text() // yoki response.json() agar JSON qaytsa
      console.log('Success:', result)

      alert('Doctor muvaffaqiyatli qo‘shildi!')
      form.reset()
      const modal = bootstrap.Modal.getInstance(
        document.getElementById('exampleModal')
      )
      modal.hide()
    } catch (error) {
      console.error('Xatolik:', error)
      alert('Maʼlumotlarni yuborishda xatolik yuz berdi.')
    }
  })
