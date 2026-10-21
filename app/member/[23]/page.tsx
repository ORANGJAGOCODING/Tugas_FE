import Link from "next/link";

const MemberPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>Member Page</h1>
      <p>This is the page for member with ID: {id}</p>
      <p>Use the navigation bar to explore other members.</p>
      <p>
        Check out <Link href="/member">Member Home</Link> for more members.
      </p>
    </div>
  );
};

export default MemberPage;
