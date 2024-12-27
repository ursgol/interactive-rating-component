const submitBtn = document.getElementById("submit-btn");
const rateBtn = document.getElementsByTagName("li");
let rating = 0;

for (let rate of rateBtn) {
  rate.addEventListener("click", function () {
    rating = rate.textContent;
  });
}

submitBtn.addEventListener("click", function () {
  render();
});
const img = "./images/illustration-thank-you.svg";
function render() {
  const main = document.getElementById("main");
  main.innerHTML = `
  <div class="thank-you">
    <img class="thank-you-img" src=${img} alt="thank-you" />
    <p class="rate-p">You selected ${rating} out of 5. </p>
    <h1>Thank you!</h1>
        <p class="appreciate-p">We appreciate you taking 
    the time to give a rating.
    If you ever need more support, 
    don’t hesitate to get in touch!</p>
</div>`;
}
