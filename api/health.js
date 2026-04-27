const Stripe = require('stripe');

module.exports = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const account = await stripe.accounts.retrieve();

    return res.status(200).json({
      status: 'ok',
      platform: account.business_profile?.name || account.settings?.branding?.display_name || 'V-Pay',
      account_id: account.id
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
