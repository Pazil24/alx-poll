import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

// Mock poll data to display sample polls
const samplePolls = [
  {
    id: "1",
    title: "Favorite Programming Language",
    question: "What programming language do you prefer to use?",
    options: 5,
    votes: 42,
    createdAt: "10/15/2023",
  },
  {
    id: "2",
    title: "Best Frontend Framework",
    question: "Which frontend framework do you think is the best?",
    options: 4,
    votes: 38,
    createdAt: "10/10/2023",
  },
  {
    id: "3",
    title: "Preferred Database",
    question: "What database do you prefer to work with?",
    options: 5,
    votes: 27,
    createdAt: "10/5/2023",
  },
];

export default function PollsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Polls</h1>
        <Link href="/polls/new">
          <Button className="bg-black text-white hover:bg-gray-800">
            Create New Poll
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePolls.map((poll) => (
          <Link href={`/polls/${poll.id}`} key={poll.id}>
            <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <h2 className="text-xl font-semibold">{poll.title}</h2>
                <p className="text-gray-600">{poll.question}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p>{poll.options} options</p>
                  <p>{poll.votes} total votes</p>
                  <div className="text-sm text-gray-500 mt-2">
                    Created on {poll.createdAt}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
