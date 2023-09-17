export default function NoSelection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <img
        src="https://res-h3.public.cdn.office.net/owamail/20230904003.13/resources/images/illustration_mail-hash-4338a4a7.m.svg"
        alt="Mail Illustration"
      />
      <p className="font-semibold py-2 text-gray-800">Select an item to read</p>
      <p className="text-gray-600">Nothing is selected</p>
    </div>
  );
}
