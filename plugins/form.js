import { Form } from 'form-backend-validation'

export default (context, inject) => {
  const form = (fields = {}) => new Form(fields, { http: context.$axios })

  // Inject $form(fields) in Vue, context and store.
  inject('form', form)
}
