import { Button } from "@/components/ui/button";
import Link from "next/link";

// This would normally fetch data from a backend based on the poll ID
const getPollData = (id: string) => {
  return {
    id,
    title: "Favorite Programming Language",
    question: "What programming language do you prefer to use?",
    options: [
      { id: "1", text: "JavaScript" },
      { id: "2", text: "Python" },
      { id: "3", text: "Java" },
      { id: "4", text: "C#" },
      { id: "5", text: "Go" },
    ],
    createdBy: "John Doe",
    createdAt: "10/15/2023",
  };
};

export default function PollPage({ params }: { params: { id: string } }) {
  const poll = getPollData(params.id);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <Link href="/polls" className="text-blue-500 hover:underline">
          ← Back to Polls
        </Link>
        <div>
          <Button variant="outline" className="mr-2">
            Edit Poll
          </Button>
          <Button variant="outline" className="text-red-500">
            Delete
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg border p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-1">{poll.title}</h1>
        <p className="text-gray-600 mb-6">{poll.question}</p>

        <div className="space-y-3 mb-6">
          {poll.options.map((option) => (
            <div
              key={option.id}
              className="p-3 border rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {option.text}
            </div>
          ))}
        </div>

        <Button className="bg-gray-500 text-white hover:bg-gray-600">
          Submit Vote
        </Button>

        <div className="flex justify-between text-sm text-gray-500 mt-6 pt-4 border-t">
          <div>Created by {poll.createdBy}</div>
          <div>Created on {poll.createdAt}</div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Share this poll</h2>
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            Copy Link
          </Button>
          <Button variant="outline" className="flex-1">
            Share on Twitter
          </Button>
        </div>
      </div>
    </div>
  );
}
