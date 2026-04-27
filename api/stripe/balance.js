const Stripe = require('stripe');

module.exports = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const balance = await stripe.balance.retrieve();
    return res.status(200).json(balance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
