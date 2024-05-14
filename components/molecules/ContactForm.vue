<template>
  <div class="contact-form">
    <Form class="contact-form__content" :form="form" @submit="send">
      <div class="contact-form__content-person">
        <ion-icon name="person-outline"></ion-icon>
        <Field name="user_name" placeholder="Descreva seu nome" />
      </div>

      <div class="contact-form__content-email">
        <ion-icon name="at-outline"></ion-icon>
        <Field name="user_email" placeholder="Digite seu e-mail" class="email" />
      </div>

      <div class="contact-form__content-message">
        <ion-icon name="mail-outline"></ion-icon>
        <Field name="message" as="textarea" placeholder="Digite sua mensagem" class="email"> </Field>
      </div>

      <div class="contact-form__content-button">
        <Button type="submit" :disabled="form.loading"> Enviar </Button>
      </div>
    </Form>

  </div>
</template>

<script setup lang="ts">
import 'bumi-components-new/dist/style.css'
import { Form, Field, darpi } from '@cataline.io/darpi'
import { Button } from 'bumi-components-new'
import emailjs from 'emailjs-com'

const form = darpi.newForm({
  user_name: darpi.string().required(),
  user_email: darpi.string().email().required(),
  message: darpi.string().required()
})

async function send() {
  try {
    form.loading = true
    emailjs.sendForm('service_ulhfl18', 'template_a82tfts', 'form', 'Mkc5ZSQ-f1CjFdf3i')

    alert('Mensagem enviada, obrigado pelo contato!')
    form.reset()

  } catch (error) {
    alert('Falha no envio:' + error)
  } finally {
    form.loading = false
  }
}

</script>

<style scoped lang="scss">
.contact-form {
  background: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);

  .contact-form__content {
    padding: 2rem;

    .contact-form__content-person {
      display: grid;
      grid-template-columns: max-content 1fr;
      justify-content: left;
      align-items: center;
      gap: 2rem;
    }

    .contact-form__content-email {
      display: grid;
      grid-template-columns: max-content 1fr;
      justify-content: left;
      align-items: center;
      gap: 2rem;
    }

    .contact-form__content-message {
      display: grid;
      grid-template-columns: max-content 1fr;
      justify-content: left;
      align-items: center;
      gap: 2rem;

    }

    .contact-form__content-button {
      display: grid;
      justify-content: end;

      .button {
        background: var(--color-purple);
        border: none;
      }
    }
  }

}
</style>