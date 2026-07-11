import { useSelector } from "react-redux";

export default function ResumePreview() {
  const { experience } = useSelector((state) => state.resume);

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold">{experience.companyname}</h1>
      <p>{experience.jobTitle} </p>
      <p>{experience.location}</p>
      <p>{experience.StartDate}</p>
      <p>{experience.endDate}</p>
      <p>{experience.technologies}</p>
      <p>{experience.jobdescription}</p>

      <h2 className="mt-4 font-semibold">Summary</h2>
      <p>{experience.summary}</p>
    </div>
  );
}