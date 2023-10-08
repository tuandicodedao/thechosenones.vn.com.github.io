// script.js
document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname;
  var homeLink = document.querySelector("#home-link");
  var productsLink = document.querySelector("#products-link");
  var aboutLink = document.querySelector("#about-link");
  var contactLink = document.querySelector("#contact-link");
  var content = document.querySelector("#content");

  // Lấy tất cả các nút "Mua ngay"
  var buyButtons = document.querySelectorAll(".buy-button");

  // Lặp qua từng nút và thêm sự kiện "click" cho chúng
  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Đây là nơi bạn có thể thực hiện hành động khi nút "Mua ngay" được nhấp,
      // ví dụ: thêm sản phẩm vào giỏ hàng, chuyển hướng đến trang thanh toán, vv.
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });
  });

  // Xác định trang hiện tại và thêm lớp "active" cho mục thanh điều hướng tương ứng
  if (currentPath === "/") {
    homeLink.classList.add("active");
    loadHomePage(); // Tải nội dung trang chủ
  } else if (currentPath === "/products.html") {
    productsLink.classList.add("active");
    loadProductsPage(); // Tải nội dung trang sản phẩm
  } else if (currentPath === "/about.html") {
    aboutLink.classList.add("active");
    loadAboutPage(); // Tải nội dung trang giới thiệu
  } else if (currentPath === "/contact.html") {
    contactLink.classList.add("active");
    loadContactPage(); // Tải nội dung trang liên hệ
  }

  // Hàm tải nội dung trang chủ
  function loadHomePage() {
    content.innerHTML = `
      <section class="home">
        <h2>Trang chủ</h2>
        <p>Chào mừng bạn đến với trang web bán hoa!</p>
      </section>
    `;
  }

  // Hàm tải nội dung trang sản phẩm
  function loadProductsPage() {
    content.innerHTML = `
      <section class="products">
        <h2>Sản phẩm</h2>
        <p>Danh sách các sản phẩm hoa sẽ được hiển thị ở đây.</p>
      </section>
    `;
  }

  // Hàm tải nội dung trang giới thiệu
  function loadAboutPage() {
    content.innerHTML = `
      <section class="about">
        <h2>Giới thiệu</h2>
        <p>Chúng tôi là cửa hàng hoa chuyên cung cấp các loại hoa tươi.</p>
      </section>
    `;
  }

  // Hàm tải nội dung trang liên hệ
  function loadContactPage() {
    content.innerHTML = `
      <section class="contact">
        <h2>Liên hệ</h2>
        <p>Thông tin liên hệ của chúng tôi sẽ được hiển thị ở đây.</p>
      </section>
    `;
  }
  var searchForm = document.querySelector("#search-form");
  var searchInput = document.querySelector("#search-input");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn mặc định của biểu mẫu

    var searchTerm = searchInput.value.trim(); // Lấy nội dung tìm kiếm và loại bỏ khoảng trắng đầu và cuối
    if (searchTerm !== "") {
      // Kiểm tra xem nội dung tìm kiếm có khác rỗng không
      // Đây là nơi bạn có thể thực hiện tìm kiếm hoặc xử lý tìm kiếm theo cách bạn muốn
      alert("Đã tìm kiếm: " + searchTerm);
    }
  });

  const productItems = document.querySelectorAll('.product-items li');

  productItems.forEach((item) => {
    const productImage = item.querySelector('img');
    const promotionLabel = item.querySelector('.promotion-label');
    
    // Add a click event listener to each product item
    item.addEventListener('click', () => {
      const imageUrl = productImage.getAttribute('src');
      const lightbox = document.querySelector('.lightbox');
      const lightboxImage = lightbox.querySelector('img');
      const lightboxPromotionLabel = lightbox.querySelector('.promotion-label');

      // Set the image source and promotion label in the lightbox
      lightboxImage.setAttribute('src', imageUrl);
      lightboxPromotionLabel.textContent = promotionLabel.textContent;

      // Show the lightbox
      lightbox.classList.add('show');
    });
  });

  // Close the lightbox when clicking outside of it
  const lightbox = document.querySelector('.lightbox');
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove('show');
    }
  });

  
  
  productItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('enlarged');
    });
  });

// Mã JavaScript cho trang Đăng nhập (login.html)
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Thực hiện kiểm tra tên đăng nhập và mật khẩu ở đây (có thể dùng Firebase Authentication hoặc API của bạn)

    // Nếu đăng nhập thành công, chuyển hướng về trang chính (index.html)
    window.location.href = "index.html";
  });
});

// Mã JavaScript cho trang Giỏ hàng (cart.html)
document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.querySelectorAll(".cart-item");
  const removeButtons = document.querySelectorAll(".remove-button");
  const checkoutButton = document.querySelector(".checkout-button");

  // Xử lý sự kiện khi nhấn nút "Xóa" trên mỗi mục trong giỏ hàng
  removeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Xóa mục khỏi giỏ hàng (có thể dùng API của bạn để lưu trữ giỏ hàng)
      const item = button.parentElement;
      item.remove();
    });
  });

  // Xử lý sự kiện khi nhấn nút "Thanh toán"
  checkoutButton.addEventListener("click", function () {
    // Chuyển hướng đến trang thanh toán hoặc xử lý thanh toán ở đây (tuỳ vào nhu cầu của bạn)
    window.location.href = "checkout.html";
  });
});

  // Hàm kiểm tra đăng nhập
function login(username, password) {
  // Thực hiện kiểm tra tên đăng nhập và mật khẩu ở đây (có thể dùng Firebase Authentication hoặc API của bạn)
  // Trả về true nếu đăng nhập thành công, ngược lại trả về false
  return true; // Đăng nhập thành công (để mục đích demo)
}

// Hàm xử lý khi người dùng nhấn nút "Đăng nhập" trên trang Đăng nhập
function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if (login(username, password)) {
    // Nếu đăng nhập thành công, chuyển hướng đến trang chính (index.html)
    window.location.href = "index.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
  }
}

// Hàm xử lý khi người dùng nhấn nút "Xóa" trên trang Giỏ hàng
function handleRemoveItem(item) {
  // Xóa mục khỏi giỏ hàng (có thể dùng API của bạn để lưu trữ giỏ hàng)
  item.remove();
}

// Hàm xử lý khi người dùng nhấn nút "Thanh toán" trên trang Giỏ hàng
function handleCheckout() {
  // Chuyển hướng đến trang thanh toán hoặc xử lý thanh toán ở đây (tuỳ vào nhu cầu của bạn)
  window.location.href = "checkout.html";
}

// Đăng ký các sự kiện cho trang Đăng nhập
document.getElementById("login-button").addEventListener("click", handleLogin);

// Đăng ký các sự kiện cho trang Giỏ hàng
const removeButtons = document.querySelectorAll(".remove-button");
const checkoutButton = document.getElementById("checkout-button");

removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleRemoveItem(button.parentElement);
  });
});

checkoutButton.addEventListener("click", handleCheckout);

});
