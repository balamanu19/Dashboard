document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top function
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // CUSTOMER CHARTS
  if (document.getElementById("customerLeadsChart")) {
    new Chart(document.getElementById("customerLeadsChart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "YTD Leads",
            data: [500, 700, 600, 750, 900],
            borderColor: "#6366f1",
            backgroundColor: "transparent",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    new Chart(document.getElementById("customerMrrChart"), {
      type: "line",
      data: {
        labels: ["Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Segment A",
            data: [100000, 140000, 135000],
            borderColor: "#3b82f6",
            tension: 0.4,
          },
          {
            label: "Segment B",
            data: [120000, 145000, 138000],
            borderColor: "#22c55e",
            tension: 0.4,
          },
          {
            label: "Segment C",
            data: [60000, 95000, 105000],
            borderColor: "#f59e0b",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  // MERCHANT CHARTS
  if (document.getElementById("merchantSalesChart")) {
    new Chart(document.getElementById("merchantSalesChart"), {
      type: "bar",
      data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "Sales",
            data: [100000, 150000, 200000, 220000],
            backgroundColor: "#6366f1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    new Chart(document.getElementById("merchantGrowthChart"), {
      type: "line",
      data: {
        labels: ["Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Segment A",
            data: [125000, 180000, 170000],
            borderColor: "#3b82f6",
            tension: 0.4,
          },
          {
            label: "Segment B",
            data: [140000, 160000, 158000],
            borderColor: "#22c55e",
            tension: 0.4,
          },
          {
            label: "Segment C",
            data: [80000, 90000, 110000],
            borderColor: "#f59e0b",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
});
