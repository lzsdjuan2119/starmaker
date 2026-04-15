document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('ndaModal');
    const btnClose = document.getElementById('closeModal');
    const btnAccept = document.getElementById('acceptNDA');

    // Control de clics en tarjetas
    document.querySelectorAll('.btn-action').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            const visibility = card.getAttribute('data-visibility');

            if (visibility === 'private') {
                modal.style.display = 'flex';
            } else {
                alert('Redirigiendo al detalle del proyecto...');
            }
        });
    });

    // Cerrar modal
    btnClose.onclick = () => modal.style.display = 'none';

    // Aceptar NDA y "Desbloquear"
    btnAccept.onclick = () => {
        modal.style.display = 'none';
        alert('NDA Aceptado. Acceso concedido al proyecto de START MAKERS.');
        // Aquí podrías usar AJAX para guardar que el usuario aceptó el contrato
    };
});