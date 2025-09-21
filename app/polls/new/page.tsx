"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function NewPollPage() {
  const [activeTab, setActiveTab] = useState("basic"); // 'basic' or 'settings'
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Create New Poll</h1>
        <Link href="/polls">
          <Button variant="outline" className="ml-auto">
            Cancel
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="flex border-b">
          <div
            className={`flex-1 text-center py-3 cursor-pointer ${
              activeTab === "basic"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Info
          </div>
          <div
            className={`flex-1 text-center py-3 cursor-pointer ${
              activeTab === "settings"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {activeTab === "basic" ? (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-1">Poll Information</h2>
                <p className="text-gray-500 text-sm">
                  Enter the details for your new poll
                </p>
              </div>

              <form>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Poll Title</Label>
                    <Input id="title" placeholder="Enter a question or title" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Input
                      id="description"
                      placeholder="Provide more context about your poll"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Poll Options</Label>
                    <div className="space-y-2">
                      {options.map((option, index) => (
                        <Input
                          key={index}
                          placeholder={`Option ${index + 1}`}
                          value={option}
                          onChange={(e) => {
                            const newOptions = [...options];
                            newOptions[index] = e.target.value;
                            setOptions(newOptions);
                          }}
                        />
                      ))}
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="mt-2"
                      onClick={addOption}
                    >
                      Add Option
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-1">Poll Settings</h2>
                <p className="text-gray-500 text-sm">
                  Configure additional options for your poll
                </p>
              </div>

              <form>
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="multipleOptions"
                      className="rounded"
                    />
                    <Label htmlFor="multipleOptions">
                      Allow users to select multiple options
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="requireLogin"
                      className="rounded"
                      defaultChecked
                    />
                    <Label htmlFor="requireLogin">
                      Require users to be logged in to vote
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">Poll End Date (Optional)</Label>
                    <Input
                      id="endDate"
                      type="date"
                      placeholder="dd/mm/yyyy, --:-- --"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-black text-white hover:bg-gray-800"
          >
            Create Poll
          </Button>
        </div>
      </div>
    </div>
  );
}
