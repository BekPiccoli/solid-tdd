import { SignUpController } from './signup'

describe('Sign upcontroller ', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController() // SUT: System Under Test

    const HttpRequest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handleSignup(HttpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
