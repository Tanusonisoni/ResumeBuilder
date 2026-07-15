import { useSelector } from "react-redux";

export default function ResumePreview() {
  const { personal } = useSelector((state) => state.resume);

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold">{personal.name}</h1>
      <p>{personal.email} | {personal.phone}</p>
      <p>{personal.location}</p>

      <h2 className="mt-4 font-semibold">Summary</h2>
      <p>{personal.summary}</p>
    </div>
  );
}