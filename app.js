
  

  // Navbar Section

  $(document).ready(function () {
    // Data for each section
    const data = {
      "deal-finder": {
        leftMenu: ["Deal Finder"],
        middleContent: {
          "Deal Finder":"Find best deals"
          
        },
        rightImage: "./assets/navbar/n1.jpg",
      },
      furniture: {
        leftMenu: ["Living Room", "Bedroom", "Office Furniture"],
        middleContent: {
          "Living Room": [
            
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            
            
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
          ],
          "Bedroom": [
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
          ],
          "Office Furniture": [
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
          
          ]
        },
        rightImage: "./assets/navbar/n2.jpg"
      
            },
      mattresses: {
        leftMenu: ["King Size", "Queen Size", "Twin Size"],
        middleContent: {
          "King Size":[

            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
          
          ] ,
          "Queen Size":[
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },

          ],
          "Twin Size": [
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            

          ],
        },
        rightImage: "./assets/navbar/n3.jpg",

      },
      dining: {
        leftMenu: ["Dining Tables", "Chairs", "Bar Stools"],
        middleContent: {
          "Dining Tables": [
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
          ],
          "Chairs": [
            {
              title: "Recliners",
              image: "./assets/navbar/n2_5.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
          
            {
              title: "Sectionals",
              image: "./assets/navbar/n2_1.jpg"
            },
            {
              title: "Sofas & Couches",
             image: "./assets/navbar/n2_2.jpg"
            },
            {
              title: "TV Stands",
              image: "./assets/navbar/n2_4.jpg"
            },
          ],
          "Bar Stools": "Modern bar stools for your kitchen counter.",
        },
        rightImage: "./assets/navbar/n4.jpg",

      },
      homeoffice: {
        leftMenu: ["Office Furniture", "Office Decor", "Office Furniture Set", "Sale Office Furniture"],
        middleContent: {
          "Office Furniture": "Stylish and functional furniture to enhance your workspace.",
          "Office Decor": "Decorative items to add a personal touch to your office.",
          "Office Furniture Set": "Complete furniture sets tailored for your office needs.",
          "Sale Office Furniture": "Grab amazing deals on office furniture!"
        },
        rightImage: "./assets/navbar/n6.jpg",
      },
      outdoor: {
        leftMenu: ["Outdoor Sitting", "Outdoor Table", "Outdoor Decor", "Outdoor Sets", "Outdoor Sale"],
        middleContent: {
          "Outdoor Sitting": "Comfortable outdoor seating for your patio or garden.",
          "Outdoor Table": "Durable and elegant tables for your outdoor dining experience.",
          "Outdoor Decor": "Accessories to make your outdoor spaces inviting.",
          "Outdoor Sets": "Complete outdoor furniture sets for effortless style.",
          "Outdoor Sale": "Exciting discounts on outdoor furniture and decor!"
        },
        rightImage: "./assets/navbar/n7.jpg",
      },
      rugs: {
        leftMenu: ["Rugs", "Lighting", "Accessories & Accents", "Bedding", "Sale Decor"],
        middleContent: {
          "Rugs": "Beautiful rugs to enhance the charm of any room.",
          "Lighting": "Stylish lighting solutions for your home.",
          "Accessories & Accents": "Unique accents to personalize your spaces.",
          "Bedding": "Comfortable and luxurious bedding for a perfect night's sleep.",
          "Sale Decor": "Special offers on decor items!"
        },
        rightImage: "./assets/navbar/black friday.jpg",
      },
      baby: {
        leftMenu: ["Nursery", "Kids Bedroom", "Kids Study & Playroom", "Baby & Kids Decor"],
        middleContent: {
          "Nursery": "Adorable and functional furniture for your baby’s room.",
          "Kids Bedroom": "Creative and cozy designs for your child's bedroom.",
          "Kids Study & Playroom": "Study tables and playroom essentials for kids.",
          "Baby & Kids Decor": "Whimsical decor to add charm to kids' spaces."
        },
        rightImage: "./assets/navbar/n7.jpg",
      },
      friday: {
        leftMenu: ["Black Friday Sale", "All Items Sale"],
        middleContent: {
          "Black Friday Sale": "Exclusive Black Friday deals you don’t want to miss!",
          "All Items Sale": "Sitewide discounts on everything you love."
        },
        rightImage: "./assets/navbar/n3.jpg",
      },
      holidays: {
        leftMenu: ["Christmas Shop", "Guest Prep", "Thanksgiving & Fall"],
        middleContent: {
          "Christmas Shop": "Festive decorations and gifts for a memorable Christmas.",
          "Guest Prep": "Essentials to prepare your home for guests.",
          "Thanksgiving & Fall": "Warm and inviting decor for the season."
        },
        rightImage: "./assets/navbar/n2.jpg",
      },
      inspiration: {
        leftMenu: ["Trends & Sale", "Shop by Style", "Stories"],
        middleContent: {
          "Trends & Sale": "Discover the latest home trends and exciting offers.",
          "Shop by Style": "Browse curated collections to match your style.",
          "Stories": "Inspiring stories to spark your creativity."
        },
        rightImage: "./assets/navbar/n4.jpg",
      }
    };
  
    // Show dropdown on hover
  $(".nav-item").hover(
    function () {
      const menuId = $(this).data("menu");
      const dropdownContainer = $(".dropdown-container");
      const selectedNavItem = $(this);
      $(".nav-item").removeClass("active");
      selectedNavItem.addClass("active");
      // Populate dropdown with data
      populateDropdown(menuId);

      // Show the dropdown
      // dropdownContainer.stop().slideDown(500);
    },
    function () {
      // Leave hover effect for navbar item
    }
  );

  const dropdownContainer = $(".dropdown-container");
  $(".navbar, .dropdown-container").mouseleave(function () {
    // Check if cursor is outside both the navbar and dropdown-container
    if (!$(".navbar").is(":hover") && !dropdownContainer.is(":hover")) {
      dropdownContainer.stop().slideUp(); // Hide the dropdown
      $(".nav-item").removeClass("active"); // Remove active class when hiding
    }
  });

  $(".dropdown-container").mouseenter(function () {
    isHoveringDropdown = true; // Mark that the cursor is inside the dropdown container
  });

  // Populate dropdown content
  function populateDropdown(menuId) {
    const menuData = data[menuId];
    if (!menuData) return;

    // Populate Left Menu
    let leftMenuHtml = "<ul>";
    menuData.leftMenu.forEach((item) => {
      leftMenuHtml += `<li data-item="${item}">${item}</li>`;
    });
    leftMenuHtml += "</ul>";
    $(".left-menu").html(leftMenuHtml);

    // Clear and populate Middle Content container
    $(".middle-content").html("");

    // Handle Left Menu Hover
    $(".left-menu li").hover(function () {
      const selectedItem = $(this).data("item");
      const cards = menuData.middleContent[selectedItem];

      if (cards && Array.isArray(cards)) {
        let middleContentHtml = "";
        cards.forEach((card) => {
          middleContentHtml += `
            <div class="card-n">
              <img src="${card.image}" class="card-image" alt="${card.title}" />
              
                <p>${card.title}</p>
             
            </div>`;
        });
        $(".middle-content").html(middleContentHtml);
      }
    });

    // Populate Right Content
    $(".right-content").html(
      `<img src="${menuData.rightImage}" alt="${menuId} Image">`
    );

    // Activate the first item by default
    $(".left-menu li").first().trigger("mouseenter");


    $(".dropdown-container").stop(true, true).slideDown(500);
  }
});

  

  
// navbar phone section
$(document).ready(function () {
  // Load the navbar dynamically
 

  // Open the fullscreen menu when the hamburger icon is clicked
  $(document).on('click', '.menu-icon', function () {
    $('#fullscreen-menu').addClass('active');
    $('#menu-screen').addClass('active');
  });

  // Close the fullscreen menu when the close button is clicked
  $(document).on('click', '.close-button', function () {
    $('#fullscreen-menu').removeClass('active');
    $('#menu-screen, #content-screen').removeClass('active');
  });

  // Navigate to the content screen when a menu item is clicked
  $(document).on('click', '#menu-screen li', function () {
    const contentType = $(this).data('content');
    const title = $(this).text();

    // Update content screen with relevant data
    $('#content-title').text(title);
    $('#content-area').html(`
      <p>Shop By Style</p>
      <ul>
        <li>${contentType} Option 1</li>
        <li>${contentType} Option 2</li>
        <li>${contentType} Option 3</li>
      </ul>
    `);

    // Transition to the content screen
    $('#menu-screen').removeClass('active');
    $('#content-screen').addClass('active');
  });

  // Go back to the menu screen when the back button is clicked
  $(document).on('click', '.back-button', function () {
    $('#content-screen').removeClass('active');
    $('#menu-screen').addClass('active');
  });
});


  // Popular furniture section
  $(document).ready(function () {
   
      // Add image data to the slider dynamically
      const images = [
        { src: "./assets/p1.jpg", name: "All Furniture" },
        { src: "./assets/p2.jpg", name: "Sofas" },
        { src: "./assets/p3.jpg", name: "Sectionals" },
        { src: "./assets/p4.jpg", name: "Beds" },
        { src: "./assets/p5.jpg", name: "Accent Chairs" },
        { src: "./assets/p6.jpg", name: "Dining Tables" },
        { src: "./assets/p7.jpg", name: "Furniture Sets" },
        { src: "./assets/p8.jpg", name: "Recliners" },
        { src: "./assets/p9.jpg", name: "Storage" },
        { src: "./assets/p10.jpg", name: "Lighting" },
        { src: "./assets/p11.jpg", name: "Rugs" },
        { src: "./assets/p12.jpg", name: "Decor" }
      ];

      const slider = $(".popular-slider");

      images.forEach((image) => {
        slider.append(`
          
          <div class="item-card">
          <a href='#' class="link">
          <img src="${image.src}" alt="${image.name}">
            <div class="item-name">${image.name}</div>
          </a>
            
          </div>
        `);
      });
    
  });

 
// Savings section

$(document).ready(function () {
  // Load the savings component
  
    // After the component is loaded, attach the logic
    const scrollContent = $("#savings-content"); // Ensure #savings-content exists in savings.html
    const cardContainer=$("#cards-container")
    const indicatorLine = $("#indicator-line");

    function updateIndicatorLine() {
      const contentWidth = scrollContent[0].scrollWidth; // Total scrollable width
      const visibleWidth = scrollContent[0].clientWidth; // Width of the visible container
      const scrollLeft = scrollContent.scrollLeft(); // Current horizontal scroll position
      const movementRatio = scrollLeft / (contentWidth - visibleWidth);
      const indicatorMaxOffset = $(".scroll-indicator").width() - indicatorLine.width();
      const newOffset = Math.min(Math.max(0, movementRatio * indicatorMaxOffset), indicatorMaxOffset);
      indicatorLine.css("transform", `translateX(${newOffset}px)`);
    }

    scrollContent.on("scroll", updateIndicatorLine);

    // Buttons for scrolling
    $("#scroll-left").click(function () {
      scrollContent.animate({ scrollLeft: "-=300" }, 300, updateIndicatorLine);
    });

    $("#scroll-right").click(function () {
      scrollContent.animate({ scrollLeft: "+=300" }, 300, updateIndicatorLine);
    });

    updateIndicatorLine();

    // Add dynamic cards after loading the savings component
    const cardsData = [
      {
        brand: "Tempur Pedic",
        offer: "$500",
        description: "Save Up To $500 On Select Adjustable...",
        brandImage:"./assets/image (3).jpg",
        imagePath: "./assets/s1.jpg",
         bg:"#65C7CB"
      },
      {
        brand: "Antropologie",
        offer: "40%",
        description: "Up to 40% Off Sofas, Sectionals, & Accent...",
        brandImage:"./assets/image (3).jpg",
        imagePath: "./assets/s2.jpg",
        bg:"#00807A"
      },
      {
        brand: "One Kings Lane",
        offer: "40%",
        description: "Up to 40% Off Sofas, Sectionals, & Accent...",
        imagePath: "./assets/s2.jpg",
        brandImage:"./assets/image (5).jpg",
          bg:"#064E3B"
        
      },
      {
        brand: "Nectar",
        offer: "$800",
        description: "Save Up To $800 On Select Adjustable...",
        brandImage:"./assets/image (3).jpg",
        imagePath: "./assets/s1.jpg",
         bg:"#65C7CB"
      },
      {
        brand: "Arhaus",
        offer: "30%",
        description: "Up to 30% Off Sofas, Sectionals, & Accent...",
        brandImage:"./assets/image (3).jpg",
        imagePath: "./assets/s5.jpg",

        bg:"#84442E"
      },
      {
        brand: "Williams Sono..",
        offer: "30%",
        description: "Up to 30% Off Sofas, Sectionals, & Accent...",
        brandImage:"./assets/image (3).jpg",

        imagePath: "./assets/s7.jpg",
         bg:"#5A5A5A"
        
      },
      {
        brand: "Bed Gear",
        offer: "$500",
        description: "Up to $500 Off Performance Mattresses...",
        brandImage:"./assets/image (2).jpg",
        imagePath: "./assets/s1.jpg",
         bg:"#65C7CB"
      },
    ];

    cardsData.forEach((data) => {
      scrollContent.append(`
        <div class="savings-card" style="background-color:${data.bg} ;">
          <div class="card-content">
            <div class="text-content">

              <span class="brand">
              <img class="brand-image" src="${data.brandImage}" alt="${data.brand}">
              ${data.brand}
              </span>
              <h3>${data.offer}</h3>
              <p>${data.description}</p>
              <button class="visit-btn"> <img class="" src="${'./assets/arrow.png'}" style=" margin-right:4px "></i> Visit Site</button>
            </div>
            <div class="image-content">
              <img src="${data.imagePath}" alt="${data.brand}">
            </div>
          </div>
        </div>
      `);
    });

    // Recalculate the scroll indicator after adding cards
    updateIndicatorLine();
  });







// code for shop new brands section

$(document).ready(function () {
  // Load the shops section

    const scrollContent = $("#shops-content");
    const indicatorLine = $("#indicator-line-s");

    // Update scroll indicator
    function updateIndicatorLine() {
      const contentWidth = scrollContent[0].scrollWidth;
      const visibleWidth = scrollContent[0].clientWidth;
      const scrollLeft = scrollContent.scrollLeft();
      const movementRatio = scrollLeft / (contentWidth - visibleWidth);
      const indicatorMaxOffset = $(".scroll-indicator-s").width() - indicatorLine.width();
      const newOffset = Math.min(Math.max(0, movementRatio * indicatorMaxOffset), indicatorMaxOffset);
      indicatorLine.css("transform", `translateX(${newOffset}px)`);
    }

    scrollContent.on("scroll", updateIndicatorLine);

    // Scroll Buttons
    $("#scroll-left-s").click(function () {
      scrollContent.animate({ scrollLeft: "-=300" }, 300, updateIndicatorLine);
    });

    $("#scroll-right-s").click(function () {
      scrollContent.animate({ scrollLeft: "+=300" }, 300, updateIndicatorLine);
    });

    updateIndicatorLine();

    // Shop Cards Data
    const shopCardsData = [
      {
        brand: "One Kings Lane",
        brandImage:"./assets/kinglane.jpg",
        title: "Margot Grey Turkish Knot Rug",
        availble:"Available to be shipped",
        price: "$3,149.00",
        oldPrice: "",
        imageDefault: "./assets/shop/sh1_1.jpg",
        imageHover: "./assets/shop/sh1_2.jpg",
        colors: [
         
        ],
      },
      {
        brand: "One Kings Lane",
        
        brandImage:"./assets/kinglane.jpg",
        title: "Marth Stewart Logan Chair - Lily Pond Linen...",
        price: "$3,149.98",
        oldPrice: "$4,500.00",
        imageDefault: "./assets/shop/sh2_1.jpg",
        imageHover: "./assets/shop/sh2_2.jpg",
        availble:"Available to be shipped",
        colors: [
        
          { color: "#7E7666", image: "./assets/shop/sh2_1.jpg" },
          { color: "#ABBEBF", image: "./assets/shop/sh2-5.jpg" },
          { color: "#E9DDCA", image: "./assets/shop/sh2_4.jpg" },
          { color: "#CF1020", image: "./assets/shop/sh2-3.jpg" },
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"./assets/kinglane.jpg",
        title: "Leyla Floral Pillow - Olive",
        price: "$3,149.98",
        oldPrice: "$4,500.00",
        imageDefault: "./assets/shop/sh3_1.jpg",
        imageHover: "./assets/shop/sh3_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"./assets/kinglane.jpg",
        title: "Hugo Oak Bed - Walnut - Tulsi Home - Brown",
        price: "$1719.98",
        oldPrice: "$2650.00",
        imageDefault: "./assets/shop/sh4_1.jpg",
        imageHover: "./assets/shop/sh4_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"./assets/kinglane.jpg",
        title: "Sukie 1-Drawer Nightstand - Navy",
        price: "$3,149.98",
        oldPrice: "$4,500.00",
        imageDefault: "./assets/shop/sh5_1.jpg",
        imageHover: "./assets/shop/sh5_2.jpg",
        availble:"Available to be shipped",
        colors: [
         
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"./assets/kinglane.jpg",

        title: "Hourglass Side Table",
        price: "$242.10",
        oldPrice: "$269.00",
        imageDefault: "./assets/shop/sh7_1.jpg",
        imageHover: "./assets/shop/sh7_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"./assets/kinglane.jpg",

        title: "Promenade Chair in Ivory Boucle",
        price: "$242.10",
        oldPrice: "$269.00",
        imageDefault: "./assets/shop/sh8_1.jpg",
        imageHover: "./assets/shop/sh8_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
    ];
    

    // Render Cards
    shopCardsData.forEach((data) => {
      const colorOptions = data.colors
        .map(
          (color) =>
            `<span class="color-option" style="background:${color.color}" data-image="${color.image}"></span>`
        )
        .join("");
    
      const cardHtml = `
        <div class="shop-card">
          <div class="image-container">
            <img src="${data.imageDefault}" class="default-image"  alt="${data.title}">
            <img src="${data.imageHover}" class="hover-image" style="display:none" alt="${data.title}">
          </div>
          <div class="content">

            <span class="brand"><img src="${data.brandImage}" class="brand-image"  alt="${data.title}"> <span> ${data.brand}</span></span>
            <p>${data.title}</p>
            <div class="price">
              <span>${data.price}</span>
              <span class="old-price">${data.oldPrice}</span>
            </div>
            <div class="color-options">
              ${colorOptions}
            </div>
             <p>${data.availble}</p>
          </div>
        </div>
      `;
    
      $("#shops-content").append(cardHtml);
    });
    
    // Add Hover Effects
    $(".shop-card .image-container").hover(
      function () {
        $(this).find(".default-image").css("display", "none");
        $(this).find(".hover-image").css("display", "block");
      },
      function () {
        $(this).find(".default-image").css("display", "block");
        $(this).find(".hover-image").css("display", "none");
      }
    );
    

    // Handle Color Selection
    $(".color-options span").click(function () {
      const selectedImage = $(this).data("image"); // Get the image URL associated with the color
      const card = $(this).closest(".shop-card"); // Get the closest card
      card.find(".default-image").attr("src", selectedImage); // Update the default image with the new image
    });
    

    updateIndicatorLine();
  });

