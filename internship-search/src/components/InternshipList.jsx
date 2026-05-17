import InternshipCard from "./InternshipCard";
import "../style/InternshipList.css";

function InternshipList({ internships = [] }) {
  if (!Array.isArray(internships)) return null;

  return (
    <div className="list-container">
      {internships.length === 0 ? (
        <p>No data available</p>
      ) : (
        internships.map((item, index) => (
          <InternshipCard
            key={item.id || index}
            internship={item}
          />
        ))
      )}
    </div>
  );
}

export default InternshipList;
