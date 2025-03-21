document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const typeFilter = document.getElementById("type-filter");
    const seasonFilter = document.getElementById("season-filter");
    const yearFilter = document.getElementById("year-filter");
    const platformFilter = document.getElementById("platform-filter");
    const animeList = document.getElementById("anime-list");
    const animeCards = document.querySelectorAll(".anime-list-card");

    function filterAnime() {
        const searchText = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value;
        const selectedSeason = seasonFilter.value;
        const selectedYear = yearFilter.value;
        const selectedPlatform = platformFilter.value;

        animeCards.forEach(card => {
            const name = card.getAttribute("data-name").toLowerCase();
            const type = card.getAttribute("data-type");
            const season = card.getAttribute("data-season");
            const year = card.getAttribute("data-year");
            const platform = card.getAttribute("data-platform");

            const matchesSearch = name.includes(searchText);
            const matchesType = selectedType === "" || type.split(", ").includes(selectedType);
            const matchesSeason = selectedSeason === "" || selectedSeason === season;
            const matchesYear = selectedYear === "" || selectedYear === year;
            const matchesPlatform = selectedPlatform === "" || platform.split(", ").includes(selectedPlatform);

            if (matchesSearch && matchesType && matchesSeason && matchesYear && matchesPlatform) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterAnime);
    typeFilter.addEventListener("change", filterAnime);
    seasonFilter.addEventListener("change", filterAnime);
    yearFilter.addEventListener("change", filterAnime);
    platformFilter.addEventListener("change", filterAnime);
});