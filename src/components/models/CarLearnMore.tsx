import Link from "next/link";

interface LearnMoreProps {
    postId: string | undefined
}

const CarLearnMoreButton = ({postId}:LearnMoreProps) => {
  return (
    <Link
      href={`/models/${postId}`}
      className="learn-more text-center text-decoration-none"
    >
      Learn More
    </Link>
  );
};

export default CarLearnMoreButton;
