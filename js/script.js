


const ButtonMenu = document.getElementById('button-menu');
const navbar = document.getElementById('navbar-item');
const stick = document.querySelectorAll('.Stick')
ButtonMenu.addEventListener('click', function(){
    stick.forEach(f => {
        f.classList.toggle('active');
    })
    navbar.classList.toggle('slide');
})

// const logo = document.querySelector('.logo-client').cloneNode(true);
// document.querySelector('.container-client-content').appendChild(logo)

//login button//
document.querySelector('.Login-Button').addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
    
});
document.querySelector('.button-secondary').addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
})
// document.getElementById('Login').addEventListener('click', function() {
//     window.location.href = 'https://quickcert.alphabetincubator.id/login';
// })
const buttonsecondLogin = document.getElementById('Login');
buttonsecondLogin.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
})
// HUBUNGI KAMI//
// const ButtonHub = document.querySelector('.hubungi-kami');
// const  modalitem = document.querySelector('#modal-content');
// const kontak = document.querySelector('#contact');

// ButtonHub.onclick = (e) => {
//     modalitem.style.display = 'flex';
//     e.preventDefault();
// }
// kontak.onclick = (e) => {
//     modalitem.style.display = 'flex';
//     e.preventDefault();
// }
// //close modal button
// document.querySelector('.button-close').onclick = function(e){
//     modalitem.style.display = 'none';
//     e.preventDefault();
// }
// document.querySelector('.modal-close').onclick = function(e){
//     modalitem.style.display = 'none';
//     e.preventDefault();
// }
document.addEventListener("DOMContentLoaded", () => {
    // Cek apakah tombol "Hubungi Kami" ada
    const hubungiKamiButton = document.querySelector('.hubungi-kami');
    const modal = document.getElementById('modal-content');
    const closeModal = document.querySelector('.modal-close');
    const closeButton = document.querySelector('.button-close');
  
    if (hubungiKamiButton && modal && closeModal && closeButton) {
      // Event Listener untuk membuka modal
      hubungiKamiButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
      });
  
      // Event Listener untuk menutup modal
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
});
  
//animation scrool//
ScrollReveal({ 
    reset: false,
    distance: '200px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home',{ origin: 'left' });
ScrollReveal().reveal('.home-container-side',{ origin: 'left' });
// ScrollReveal().reveal('.container-deskription',{ origin: 'left' });
// ScrollReveal().reveal('.blog-content',{ origin: 'right' });

//scroll behavior//
const navlinks = document.querySelectorAll('.nav-links');

navlinks.forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault();


        const targetID = this.getAttribute('href');
        const targetSections = document.querySelector(targetID);

       targetSections.scrollIntoView({
        behavior:'smooth'
       });
    })
})


function addNewUser() {
    // Ambil elemen dengan ID
    const userCountElement = document.getElementById("user-count");
    const certificateCountElement = document.getElementById("certificate-count");
    const fileSizeElement = document.getElementById("file-size");

    // Ambil angka saat ini (tanpa tanda +)
    let userCount = parseInt(userCountElement.textContent.replace('+', ''));
    let certificateCount = parseInt(certificateCountElement.textContent.replace('+', ''));
    let fileSize = parseFloat(fileSizeElement.innerHTML.replace(' MB+', ''));

    // Tambah pengguna baru (misal 1 pengguna)
    userCount += 1;
    certificateCount += 1;  // Misalkan setiap pengguna menghasilkan 1 sertifikat
    fileSize += 0.5;  // Misalkan setiap sertifikat menambah ukuran file sebesar 0.5 MB

    // Update teks di elemen
    userCountElement.textContent = userCount + '+';
    certificateCountElement.textContent = certificateCount + '+';
    fileSizeElement.innerHTML = fileSize.toFixed(2) + ' MB+';
  }

  // Simulasi penambahan pengguna baru setiap 5 detik
//   setInterval(addNewUser, 2000);

//   let text = '{ "employees" : [' +
//   '{ "firstName":"John" , "lastName":"Doe" },' +
//   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

  

//   const obj = JSON.parse(text);

//   console.log(obj.employees[2].firstName + ' '+ obj.employees[2].lastName);

