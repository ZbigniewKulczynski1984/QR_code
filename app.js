const imgBox = document.getElementById('imgBox')
const qrImage = document.getElementById('qrImage')
const qrText = document.getElementById('qrText')
const btn = document.querySelector('button')

function showQR() {qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
imgBox.classList.add('show-img')} 


function generateQR() {
    if(qrText.value.length > 0 ) {
        showQR()
    } else {
        qrText.classList.add('error')
        setTimeout(() => {
            qrText.classList.remove('error')
        },1000)
    }
    
}

btn.addEventListener('click', generateQR)

qrText.addEventListener('keypress', function(event)  {
    if(event.key === 'Enter') {
        event.preventDefault()
        showQR()
    }
})

