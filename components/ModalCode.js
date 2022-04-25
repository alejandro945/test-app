import React from 'react'
import Swal from 'sweetalert2';

const ModalCode = (string) => {
    Swal.fire({
        title: string,
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
    })
};

export default ModalCode;

