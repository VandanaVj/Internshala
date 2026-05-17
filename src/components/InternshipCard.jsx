import "../style/InternshipCard.css";

function InternshipCard({ internship }) {
  return (
    <div className="card">
      <h2>{internship.title || "No Title Available"}</h2>

      <p>
        <strong>Company:</strong>{" "}
        {internship.company_name || internship.company || "N/A"}
      </p>

      <p>
        <strong>Location:</strong>{" "}
        {Array.isArray(internship.location_names)
          ? internship.location_names.join(", ")
          : internship.location || "N/A"}
      </p>

      <p>
        <strong>Duration:</strong>{" "}
        {internship.duration || "Not specified"}
      </p>
    </div>
  );
}

export default InternshipCard;
