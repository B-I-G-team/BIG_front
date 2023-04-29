import { RcFile } from 'antd/es/upload';

export const uploadFile = (file: File, presigned: string) => {
  return new Promise<any>((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', presigned, true);
    xhr.setRequestHeader('Content-Type', file.type);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(true);
      }
    };
    xhr.send(file);
  });
};

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
