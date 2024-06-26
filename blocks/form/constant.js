export const fileAttachmentText = 'Attach';
export const dragDropText = 'Drag and Drop To Upload';

export const DEFAULT_THANK_YOU_MESSAGE = 'Thank you for your submission.';

export const defaultErrorMessages = {
  accept: 'The specified file type not supported.',
  maxFileSize: 'File too large. Reduce size and try again.',
  maxItems: 'Specify a number of items equal to or less than $0.',
  minItems: 'Specify a number of items equal to or greater than $0.',
};

let submitBaseUrl = '';

export function setSubmitBaseUrl(url) {
  submitBaseUrl = url;
}

export function getSubmitBaseUrl() {
  return submitBaseUrl;
}

/**
 * Identifies the placeholder path for the current page.
 * @returns {string} placeholder path
 * */
export function getPlaceHolderPath() {
  return window.location.pathname?.split('/')?.slice(0, 3)?.join('/');
}
