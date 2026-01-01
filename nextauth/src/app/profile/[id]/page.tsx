export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile page</h1>

      <h2 className="p-3 bg-green-500 rounded text-black">
        {id}
      </h2>
    </div>
  );
}
