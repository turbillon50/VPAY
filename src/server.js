require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.get('/health', async (req, res) => {
  try {
    const account = await stripe.accounts.retrieve();
    return res.json({
      status: 'ok',
      platform: account.business_profile?.name || account.settings?.branding?.display_name || 'V-Pay',
      account_id: account.id
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/stripe/account', async (req, res) => {
  try {
    const account = await stripe.accounts.retrieve();
    return res.json(account);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get('/stripe/balance', async (req, res) => {
  try {
    const balance = await stripe.balance.retrieve();
    return res.json(balance);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`V-Pay running on port ${process.env.PORT || 3000}`);
});
