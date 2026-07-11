import { useSelector } from "react-redux";

export default function ResumePreview() {
  const { projects } = useSelector((state) => state.resume);

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
    <h2 className="font-semibold text-gray-800">Summary</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500">No project added yet.</p>
      ) : (
        projects.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-3 last:border-b-0">
            <h2 className="font-semibold text-gray-800">{item.project}</h2>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}