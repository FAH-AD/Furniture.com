$(document).ready(function () {
    // Load the savings component
    
      // After the component is loaded, attach the logic
      const scrollContent = $("#top-content"); // Ensure #savings-content exists in savings.html
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
      const images = [
          { src: "./assets/furniture/large (9).jpg", name: "Sofas & Sectionals" },
          { src: "./assets/furniture/large (10).jpg", name: "Beds & Headboards" },
          { src: "./assets/furniture/large (1).jpg", name: "Tables & Desks" },
          { src: "./assets/furniture/large (2).jpg", name: "Chairs" },
          { src: "./assets/furniture/large (3).jpg", name: "Storage" },
          { src: "./assets/furniture/large (4).jpg", name: "Outdoor Tables" },
          { src: "./assets/furniture/large (5).jpg", name: "Outdoor Seating" },
          { src: "./assets/furniture/large (6).jpg", name: "Mattress & Box Springs" },
          { src: "./assets/furniture/large (7).jpg", name: "Benches & Barstools" },
          { src: "./assets/furniture/large (8).jpg", name: "Kidsbeds & Headboards" },
         
        ];
  
      images.forEach((image) => {
        scrollContent.append(`
         <div class="item-card">
            <a href='#' class="link">
            <img src="${image.src}" alt="${image.name}">
              <div class="item-name">${image.name}</div>
            </a>
              
            </div>
        `);
      });
  
      // Recalculate the scroll indicator after adding cards
      updateIndicatorLine();
    });