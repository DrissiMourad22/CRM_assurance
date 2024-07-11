export default function handler(req, res) {
    const { email, password } = req.body;
  
    // Remplacez ceci par votre logique d'authentification réelle
    if (email === 'Admin' && password === '123456') {
      res.status(200).json({ user: { email, name: 'Admin' } });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
  