async function newsletter(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.getElementById("newsletteremail").value,
      }),
    };
    let res = await fetch("https://api.crypwave.com/api/newsletter-subscription", options);
    res = await res.json();
    if (!res.status) throw new Error();
    document.querySelector("#callBackAlert").classList.remove("danger");
    document.querySelector("#newsletterAlert").classList.remove("d-none");
    document.querySelector("#newsletterAlert").classList.add("success");
    document.querySelector("#newsletterAlert").innerHTML = "Thank you for subscribing to our newsletter.";
    document.getElementById("newsletterform").remove();
  } catch (error) {
    document.querySelector("#callBackAlert").classList.remove("success");
    document.querySelector("#newsletterAlert").classList.remove("d-none");
    document.querySelector("#newsletterAlert").classList.add("danger");
    document.querySelector("#newsletterAlert").innerHTML = "Something went wrong. Please try again later.";
  }
}
async function callBack(e) {
  e.preventDefault();
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.getElementById("callBackEmail").value,
        subject: document.getElementById("callBackFor").value,
      }),
    };
    let res = await fetch("https://api.crypwave.com/api/call-back", options);
    res = await res.json();
    if (!res.status) throw new Error();
    document.querySelector("#callBackAlert").classList.remove("danger");
    document.querySelector("#callBackAlert").classList.remove("d-none");
    document.querySelector("#callBackAlert").classList.add("success");
    document.querySelector("#callBackAlert").innerHTML =
      "We have recieved you submission. Our team will reach out to you.";
    document.getElementById("callBackForm").remove();
  } catch (error) {
    document.querySelector("#callBackAlert").classList.remove("success");
    document.querySelector("#callBackAlert").classList.remove("d-none");
    document.querySelector("#callBackAlert").classList.add("danger");
    document.querySelector("#callBackAlert").innerHTML = "Something went wrong. Please try again later.";
  }
}
