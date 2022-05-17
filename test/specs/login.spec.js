const HomeScreen = require("../screens/home.screen")
const LoginScreen = require("../screens/login.screen")
const myStoreScreen = require("../screens/myStore.screen")

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () =>{
       await HomeScreen.goToLogin()
       await LoginScreen.setStoreAddress(urlLoja)
       await LoginScreen.continue()
       await LoginScreen.continueWithStoreCredentials()
       await LoginScreen.login(usuario, senha)
       await LoginScreen.goToTwoFactorAuth()
       await LoginScreen.twoFactorLogin(senha)

       expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
       });

    })

