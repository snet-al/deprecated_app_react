import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SwalReact = withReactContent(Swal);

export default SwalReact;

export function confirmationPopup(message, options) {
  return SwalReact.fire({
    title: 'Are you sure?',
    text: message,
    type: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    reverseButtons: true,
    buttonsStyling: false,
    customClass: {
      confirmButton: 'm-1 btn btn-lg btn-primary',
      cancelButton: 'm-1 btn btn-lg btn-secondary',
    },
    ...options,
  });
}

export function flashSuccess(message, options) {
  return SwalReact.fire({
    type: 'success',
    title: 'SUCCESS',
    text: message,
    confirmButtonText: 'Close',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'm-1 btn btn-lg btn-primary',
    },
    timer: 1500,
    ...options,
  });
}

export function flashError(message, options) {
  return Swal.fire({
    type: 'error',
    title: 'ERROR',
    text: message,
    confirmButtonText: 'Close',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'm-1 btn btn-lg btn-primary',
    },
    ...options,
  });
}

export function flashWarning(message, options) {
  return Swal.fire({
    type: 'warning',
    title: 'WARNING',
    text: message,
    confirmButtonText: 'I understand',
    showConfirmButton: false,
    timer: 1500,
    ...options,
  });
}
