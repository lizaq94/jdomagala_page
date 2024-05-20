export const getEmailHTMLTemplate = (name: string, email: string, phone: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      .template_wrapper {
        width: 100%;
        max-width: 700px;
        margin: 100px auto;
      }

      .template_heading {
        text-align: center;
      }

      .template_message_wrapper {
        border: 1px solid lightgray;
        padding: 30px 20px;
      }
      .template_item {
        padding: 10px 0;
      }
      .template_name {
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="template_wrapper">
      <h1 class="template_heading">
        Masz nową wiadomość ze strony <span>jdomagal.pl</span>
      </h1>
      <div class="template_message_wrapper">
        <div class="template_item">
          <span class="template_name">Imię i nazwisko:</span>
          <span class="template_value">${name}</span>
        </div>
        <div class="template_item">
          <span class="template_name">Adres email:</span>
          <span class="template_value">${email}</span>
        </div>
        <div class="template_item">
          <span class="template_name">Numer telefonu:</span>
          <span class="template_value">${phone}</span>
        </div>
        <div class="template_item">
          <span class="template_name">Treść wiadomości:</span>
          <span class="template_value">${message}</span>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export const getEmailTextTemplate = (name: string, email: string, phone: string, message: string) => `
    Masz nową wiadomość ze strony jdomagal.pl \n\n
    Imie i nazwisk: ${name} 
    Adres email:  ${email} 
    Numer telefonu: ${phone}
    Treść wiadomości: ${message} 
`;
