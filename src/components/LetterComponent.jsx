const LetterComponents = ({
  recipientName,
  companyName,
  position,
  body,
  closing,
  senderName,
}) => {
  return (
    <section className="bg-gray-800 p-8 rounded-lg shadow-md max-w-3xl mx-auto text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Cover Letter</h1>

      <div className="mb-4">
        <p className="text-gray-300">{recipientName},</p>
        <p className="text-gray-300">{companyName}</p>
        <p className="text-gray-300">{position}</p>
      </div>

      <p className="mt-4">{body}</p>

      <div className="mt-6">
        <p className="text-gray-300">{closing}</p>
        <p className="mt-2">{senderName}</p>
      </div>
    </section>
  );
};

export default LetterComponents;
