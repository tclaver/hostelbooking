// script.js

const hostelData = {
  theresa: {
    name: "St. Theresa's Hostel",
    price: "GH₵ 12,000",
    location: "Ayeduase",
    description: "A comfortable and affordable hostel located in Ayeduase. Perfect for students looking for a convenient place to stay.",
    image: "image/theresa.jpg"
  },
  jecado: {
    name: "Jecado Hostel",
    price: "GH₵ 5,490",
    location: "KSB Gate, Ayeduase",
    description: "A modern hostel with all the amenities you need. Located near KSB Gate, Ayeduase.",
    image: "image/jecado.jpeg"
  }
  // Add more hostel data as needed
};

function showHostelDetails(hostelId) {
  const hostel = hostelData[hostelId];
  const modal = document.getElementById("hostelModal");
  const detailsDiv = document.getElementById("hostelDetails");

  detailsDiv.innerHTML = `
    <h2>${hostel.name}</h2>
    <img src="${hostel.image}" alt="${hostel.name}" style="width:100%">
    <p><strong>Price:</strong> ${hostel.price}</p>
    <p><strong>Location:</strong> ${hostel.location}</p>
    <p>${hostel.description}</p>
  `;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("hostelModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("hostelModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Trial JS
/* script.js */

let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel__images img');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
    });
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});

// Trial JS