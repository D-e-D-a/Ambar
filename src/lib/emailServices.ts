'use server';

import axios from 'axios';

export async function sendEmail(message: string) {
  let result = await axios.post(
    'https://emailservice.starko.me/api',
    {
      email: 'jovandedeic703@gmail.com',
      subject: 'Kontakt forma vebsajt',
      text: message,
      html: '',
      bcc: '',
    },
    {
      headers: {
        'simple-email-service-token': '11634e8e-8d68-11ee-b9d1-0242ac120002',
      },
    },
  );

  result = result.data;
  return result;
}
