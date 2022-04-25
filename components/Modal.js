import Swal from 'sweetalert2';

function Modal(title,onResult) {
    Swal.fire({
        title: title,
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Access',
        showLoaderOnConfirm: true,
        preConfirm: (accesscode) => {
            return accesscode; 
        }
    }).then(result => {
        if (result.isConfirmed) {
            onResult(result.value)
        }
    })
};

export default Modal;

