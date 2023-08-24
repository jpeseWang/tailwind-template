"use client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

class PaypalButton extends React.Component {
  render() {
    return (
      <PayPalScriptProvider
        options={{
          "client-id":
            "AXYgyTx4qwXsrrsU542mR7ikxspY9M6EPMx0gj8lo0uO9ExVBQwFgjKs65miZNZ4srIPe1grTKG3DmIu",
          vault: true,
        }}
      >
        <PayPalButtons
          createSubscription={(data, actions) => {
            return actions.subscription.create({
              plan_id: "P-9V436880W3844164TMTTWTDA", // Replace with your sandbox plan ID
            });
          }}
          onApprove={(data, actions) => {
            alert("Subscription successfully approved!");
          }}
        />
      </PayPalScriptProvider>
    );
  }
}

export default PaypalButton;
