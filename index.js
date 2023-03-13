const emailReceiver = 'kucinggemoy@gmail.com'

function submitForm() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phonenumber = document.getElementById('input-number').value
    let subject = document.getElementById('select-subject').value
    let message = document.getElementById('input-message').value

    if (name == '') {
        alert('Nama kamu harus diisi!')
    }

    if (email == '') {
        alert('Email kamu harus diisi!')
    }

    if (phonenumber == '') {
        alert('Nomor handphone kamu harus diisi!')
    }

    if (subject == '') {
        alert('Subject kamu harus diisi!')
    }

    if (message == '') {
        alert('Message kamu harus diisi!')
    }

    console.log(name)
    console.log(email)
    console.log(phonenumber)
    console.log(subject)
    console.log(message)

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}. ${message}`
    a.click()

    let dataObject = { name, email, phonenumber, subject, message }

    console.log(dataObject)
}