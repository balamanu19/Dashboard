// Historical Trends Line Chart
const ctxHistory = document.getElementById("historyChart").getContext("2d");
new Chart(ctxHistory, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "TrustScore",
        data: [40, 50, 55, 70, 68, 75, 80],
        borderColor: "#1E88E5",
        backgroundColor: "#1E88E5",
        tension: 0.4,
        fill: false,
      },
      {
        label: "EngagementScore",
        data: [30, 35, 33, 45, 47, 55, 60],
        borderColor: "#FB8C00",
        backgroundColor: "#FB8C00",
        tension: 0.4,
        fill: false,
      },
      {
        label: "ComplianceScore",
        data: [20, 25, 28, 30, 35, 40, 45],
        borderColor: "#43A047",
        backgroundColor: "#43A047",
        tension: 0.4,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const pageSelect = document.getElementById("pageSelect");
  pageSelect.addEventListener("change", function () {
    const selectedPage = this.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  });
});
// Get all sections
const sections = [
  {
    id: "top-cards",
    keywords: [
      "trustscore",
      "loyaltytier",
      "transactionvolume",
      "engagementscore",
    ],
  },
  {
    id: "trends-leaderboard",
    keywords: ["historical trends", "leaderboard", "chart", "table"],
  },
  {
    id: "recommendations-benchmarks",
    keywords: ["recommendations", "benchmark", "merchant"],
  },
];

const searchInput = document.getElementById("searchInput");

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const searchableItems = document.querySelectorAll("[data-keywords]");

  if (!query) {
    // Show all elements
    searchableItems.forEach((el) => {
      el.style.display = el.classList.contains("card") ? "flex" : "block";
    });
    return;
  }

  searchableItems.forEach((el) => {
    const keywords = el.dataset.keywords.toLowerCase();
    if (keywords.includes(query)) {
      el.style.display = el.classList.contains("card") ? "flex" : "block";
    } else {
      el.style.display = "none";
    }
  });
}

// Optional: search on Enter key
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") performSearch();
});
