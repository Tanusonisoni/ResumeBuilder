import { useSelector } from "react-redux";

export default function ResumePreview() {
  const { education } = useSelector((state) => state.resume);
  const graduation = education?.graduation || {};
  const class12 = education?.class12 || {};
  const class10 = education?.class10 || {};

  return (
    <div className="p-6 bg-gray-100 rounded shadow">
      {/* Graduation */}
      <h2 className="text-xl font-bold">Graduation</h2>
      <h1 className="text-2xl font-bold">{graduation.collegeName}</h1>
      <p>{graduation.cgpa}</p>
      <p>{graduation.passingYear}</p>

      {/* Class 12 */}
      <h2 className="text-xl font-bold mt-4">Class 12</h2>
      <h1 className="text-2xl font-bold">{class12.schoolName}</h1>
      <p>{class12.percentage}</p>
      <p>{class12.passingYear}</p>

      {/* Class 10 */}
      <h2 className="text-xl font-bold mt-4">Class 10</h2>
      <h1 className="text-2xl font-bold">{class10.schoolName}</h1>
      <p>{class10.percentage}</p>
      <p>{class10.passingYear}</p>
    </div>
  );
}