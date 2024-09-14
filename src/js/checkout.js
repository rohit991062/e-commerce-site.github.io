document.addEventListener('DOMContentLoaded', function () {
    const shippingStep = document.getElementById('shipping-step');
    const paymentStep = document.getElementById('payment-step');
    const reviewStep = document.getElementById('review-step');
  
    const nextToPayment = document.getElementById('next-to-payment');
    const nextToReview = document.getElementById('next-to-review');
    const placeOrder = document.getElementById('place-order');
  
    // Initial active step
    shippingStep.classList.add('active');
  
    // Go to payment step
    nextToPayment.addEventListener('click', function () {
      shippingStep.classList.remove('active');
      paymentStep.classList.add('active');
      updateProgressBar(1);
    });
  
    // Go to review step
    nextToReview.addEventListener('click', function () {
      paymentStep.classList.remove('active');
      reviewStep.classList.add('active');
      updateProgressBar(2);
    });
  
    // Place order button
    placeOrder.addEventListener('click', function () {
      alert("Order placed successfully!");
      // You can redirect or do more actions here
    });
  
    // Update progress bar
    function updateProgressBar(stepIndex) {
      const steps = document.querySelectorAll('.step');
      steps.forEach((step, index) => {
        if (index <= stepIndex) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    }
  });
  