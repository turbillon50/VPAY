export default function handler(req, res) {
  res.status(200).json({
    name: 'V-Pay Stripe Lab',
    status: 'ready',
    endpoints: [
      '/api/health',
      '/api/stripe/account',
      '/api/stripe/balance'
    ]
  });
}
