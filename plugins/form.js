import { Form } from 'form-backend-validation'

export default (context, inject) => {
  inject('form', (fields = {}) => new Form(fields, { http: context.$axios }))
}
