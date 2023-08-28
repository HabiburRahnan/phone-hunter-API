const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  //   console.log(phones);
  //   step 1
  const phoneContainer = document.getElementById("phone-container");

  //   clear phone container cards before adding new cards

  phoneContainer.textContent = "";

  const showAllContainer = document.getElementById("show-all-container");

  if (phones.length > 12 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  //   display only first 12 phone
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    console.log(phone);
    // 2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-5 bg-slate-200 shadow-xl`;
    // 3. inner HTML
    phoneCard.innerHTML = `
    <figure>
    <img
      src="${phone.image}"
      alt="Phone" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>There are many variations of passages of available, but the majority have suffered</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Show Now</button>
    </div>
   </div>
    `;
    // 4. appendChild
    phoneContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

// handle search button

const handleSearch = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-felid").value;
  console.log(searchField);
  loadPhone(searchField, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// handle show
const handleShowAll = () => {
  handleSearch(true);
};
// loadPhone();
