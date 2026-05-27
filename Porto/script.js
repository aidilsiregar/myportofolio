// Cegah form submit default
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop reload halaman
    
    // Tampilkan pesan sukses (sementara)
    alert('Pesan berhasil dikirim! (Simulasi)');
    
    // Reset form
    this.reset();
    
    // Tetap di section contact
    window.location.href = '#contact';
});