import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate cartItems
    if (!body.cartItems || !Array.isArray(body.cartItems)) {
      throw new Error('Invalid cartItems: Ensure it is an array.');
    }

    // Stripe session creation
    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1QUALJ2Lsl8mGGPHGdpEotxQ' },
    
      ],
      line_items: body.cartItems.map((item) => {
        const img = item.image[0].asset._ref;
        const newImage = img
          .replace('image-', 'https://cdn.sanity.io/images/56vllltl/production/')
          .replace('-webp', '.webp');

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/canceled`,
    };

    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json({ url: session.url }, { status: 303 });
  } catch (err) {
    console.error('Stripe Checkout Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
