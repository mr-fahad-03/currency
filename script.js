function Fetch_API() {
  const amount = document.getElementById("amount").value;

  const fromCurrency = document.getElementById("fromCurrency").value;

  const toCurrency = document.getElementById("toCurrency").value;

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const apiKey = "5b2d829a7325c5ca9378b734";

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      const rate = data.conversion_rates[toCurrency];

      const convertedAmount = (amount * rate).toFixed(2);

      document.getElementById(
        "result"
      ).textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    })

    .catch((error) => {
      alert("Failed to convert currency. Please try again later.");
    });
}
