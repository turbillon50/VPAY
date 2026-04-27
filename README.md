# V-Pay Stripe Lab

Infraestructura inicial para V-Pay sobre Stripe Connect.

## Objetivo

Crear una base segura para operar:

- Stripe Connect
- Connected Accounts
- Payment Links
- Application Fees
- Balance y reporting
- Dashboard administrativo futuro

## Endpoints iniciales

- GET /health
- GET /stripe/account
- GET /stripe/balance

## Variables necesarias

Usar `.env.example` como referencia.

Nunca subir llaves reales al repositorio.

## Deploy recomendado

- GitHub
- Railway (backend)
- Vercel (frontend futuro)

## Regla

V-Pay no custodia dinero.
Merchant cobra.
V-Pay toma fee de plataforma.
Stripe hace compliance.
