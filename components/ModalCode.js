import React from 'react'
import Swal from 'sweetalert2';
import { testService } from '../services/testService';
import Mixim from './Mixim';
import { useRouter } from "next/router";

async function ModalCode(string) {
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
            /*
                        testService.isAccessCode({ test, accesscode }, ({ m, type }) => {
                Mixim(m, type);
                if (type == 'success') {
                    console.log('bien');
                }
            });
            */
        }
    }).then(result => {
        if (result.isConfirmed) {
            localStorage.setItem("code", result.value);
        }
    })
};

export default ModalCode;

