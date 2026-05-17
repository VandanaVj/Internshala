import "../style/FilterPanel.css";

function FilterPanel({ filters, setFilters }) {
  return (
    <div className="filter-wrapper">
      <div className="filter-header">
        <h2>Filters</h2>
      </div>

      <div className="filter-group">
        <label>Profile</label>

        <input
          type="text"
          placeholder="e.g. Marketing"
          value={filters.profile}
          onChange={(e) =>
            setFilters({
              ...filters,
              profile: e.target.value,
            })
          }
        />
      </div>

      <div className="filter-group">
        <label>Location</label>

        <input
          type="text"
          placeholder="e.g. Delhi"
          value={filters.location}
          onChange={(e) =>
            setFilters({
              ...filters,
              location: e.target.value,
            })
          }
        />
      </div>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          Work from home
        </label>

        <label>
          <input type="checkbox" />
          Part-time
        </label>
      </div>

      <div className="filter-group">
        <label>Duration (months)</label>

        <select
          value={filters.duration}
          onChange={(e) =>
            setFilters({
              ...filters,
              duration: e.target.value,
            })
          }
        >
          <option value="">Choose duration</option>
          <option value="1 Month">1 Month</option>
          <option value="2 Months">2 Months</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;