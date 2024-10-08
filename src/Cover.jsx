import LetterComponents from "./components/LetterComponent";

const Cover = () => {
  const coverLetterDetails = {
    recipientName: "John Doe",
    companyName: "Tech Solutions Inc.",
    position: "Hiring Manager",
    body: "I am excited to apply for the Frontend Developer position at Tech Solutions Inc. With my experience in building dynamic web applications using React, I am confident in my ability to contribute to your team. I have a strong foundation in JavaScript and a passion for creating intuitive user interfaces. My skills in modern web development technologies, coupled with my eagerness to learn and adapt, make me a suitable candidate for this role.",
    closing:
      "Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.",
    senderName: "Pelumi Adeayo",
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-8">
      <LetterComponents
        recipientName={coverLetterDetails.recipientName}
        companyName={coverLetterDetails.companyName}
        position={coverLetterDetails.position}
        body={coverLetterDetails.body}
        closing={coverLetterDetails.closing}
        senderName={coverLetterDetails.senderName}
      />
    </div>
  );
};

export default Cover;
