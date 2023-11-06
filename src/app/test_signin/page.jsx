// server-component.js
import { cookies } from 'next/headers';
import TestSignin from './pa';

const signinServerSide = async (req, res) => {

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);

    const email = body.email;
    const password = body.password;

    try {
      const response = await axios_instance.post(login_url, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Save the token in a cookie
        const cookie_data = JSON.stringify({
          login: true,
          jwt: response.data.access_token,
        });

        // Set the cookie
        cookies().set("ovasite_user", cookie_data);

        return response.data.access_token;
      }
    
    } catch (error) {
      console.log(error);
    }
    res.status(200).end();
  }
    return <main>
      <TestSignin/>
    </main>
}

export default signinServerSide