export default function ProfileInformation({ data }) {
  return (
    <div>
      <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900"> {data.phone}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">{data.email}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900">{data.career}</dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Birthday</dt>
            <dd className="mt-1 text-sm text-gray-900">{data.dob}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Subscription</dt>
            <dd className="mt-1 text-sm text-gray-900">{data.subscription}</dd>
          </div>

          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 max-w-prose space-y-5 text-sm text-gray-900">
              {data.about}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
