"use client";

import { getDisplayAddress, getQueryParam } from "@/lib/utils";
import { useEffect, useState } from "react";
import { leaderboardService } from "@/src/service/leaderboard.service";
import { LeaderboardError, ErrorType } from "./parts/Error";
import Config from "@/src/config";

const MedalIcon = ({ position }: { position: 1 | 2 | 3 }) => {
  const colors = {
    1: "text-yellow-400",
    2: "text-gray-500",
    3: "text-amber-700",
  };

  const bgColors = {
    1: "bg-yellow-500",
    2: "bg-gray-300",
    3: "bg-amber-600",
  };

  return (
    <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 ${bgColors[position]} rounded-full p-1 flex items-center justify-center w-8 h-8 border-2 border-white shadow-md z-10`}>
      <svg className={`w-5 h-5 ${colors[position]}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.477 6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export const Leaderboard = () => {
  const [loading, setLoading] = useState(true);
  const [participant, setParticipant] = useState<any>([]);
  const [event, setEvent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const eventId = getQueryParam("eventId");
  const challengeType = getQueryParam("challengeType");

  const fetchLeaderboardData = async () => {
    if (!eventId || !challengeType) return;
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const data = await leaderboardService.leaderboard(eventId, challengeType);

      setEvent(data.event);
      setParticipant(data.participants);
    } catch (error) {
      setError("Error fetching leaderboard data");
    } finally {
      setLoading(false);
    };
  }

  useEffect(() => {
    fetchLeaderboardData();
  }, [eventId, challengeType]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <div className="text-white text-lg">Loading leaderboard...</div>
        </div>
      </div>
    );
  }

  if (!eventId || !challengeType) return <LeaderboardError type="params" />;
  if (error) return <LeaderboardError type="data" />;

  const ensureThreeParticipants = () => {
    const result = [...participant];
    for (let i = participant.length; i < 3; i++) {
      result.push({
        id: `placeholder-${i}`,
        runnerTag: "-",
        value: null,
        rank: i + 1,
        profilePhotoUri: null,
        isPlaceholder: true
      });
    }
    return result;
  };

  const topThree = ensureThreeParticipants().slice(0, 3);
  const restOfLeaderboard = participant.length > 3 ? participant.slice(3) : [];
  const challengeTypeLabel = challengeType.slice(0, 1).toUpperCase() + challengeType.slice(1)
  const precision = challengeType === "steps" ? 0 : 2

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Leaderboard section */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Leaderboard</h1>
          <div className="flex items-center">
            <div className="text-pink-500 font-bold text-3xl">RunThatUp</div>
            <div className="ml-2">
              <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Top 3 positions */}
        <div className="flex flex-col md:flex-row justify-around mb-10">
          {/* Second Place */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:order-1">
            <div className="relative mb-4">
              <div className={`w-24 h-24 rounded-full overflow-hidden ${topThree[1]?.isPlaceholder ? 'bg-gray-700' : 'ring-2 ring-gray-300'} shadow-lg`}>
                {!topThree[1]?.isPlaceholder && (
                  <img src={topThree[1]?.profilePhotoUri || `https://api.dicebear.com/9.x/initials/svg?seed=${topThree[1].runnerTag}&radius=50`} alt={topThree[1].runnerTag} className="w-full h-full object-cover" />
                )}
              </div>
              {!topThree[1]?.isPlaceholder && <MedalIcon position={2} />}
            </div>
            <div className="text-center">
              <div className="font-semibold">{topThree[1].runnerTag}</div>
              <div className="bg-gray-800 px-4 py-2 rounded-md mt-2">
                {topThree[1]?.value !== null ? Number(topThree[1].value ?? 0).toFixed(precision) : "-"} {challengeTypeLabel}
              </div>
            </div>
          </div>

          {/* First Place */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:order-0 transform md:scale-110">
            <div className="relative mb-4">
              <div className={`w-32 h-32 rounded-full overflow-hidden ${topThree[0]?.isPlaceholder ? 'bg-gray-700' : 'ring-4 ring-yellow-400'} shadow-xl`}>
                {!topThree[0]?.isPlaceholder && (
                  <img src={topThree[0]?.profilePhotoUri || `https://api.dicebear.com/9.x/initials/svg?seed=${topThree[0].runnerTag}&radius=50`} alt={topThree[0].runnerTag} className="w-full h-full object-cover" />
                )}
              </div>
              {!topThree[0]?.isPlaceholder && <MedalIcon position={1} />}
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">{topThree[0].runnerTag}</div>
              <div className="bg-gray-800 px-6 py-2 rounded-md mt-2 font-semibold">
                {topThree[0]?.value !== null ? Number(topThree[0].value ?? 0).toFixed(precision) : "-"} {challengeTypeLabel}
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="flex flex-col items-center md:order-2">
            <div className="relative mb-4">
              <div className={`w-24 h-24 rounded-full overflow-hidden ${topThree[2]?.isPlaceholder ? 'bg-gray-700' : 'ring-2 ring-amber-700'} shadow-lg`}>
                {!topThree[2]?.isPlaceholder && (
                  <img src={topThree[2]?.profilePhotoUri || `https://api.dicebear.com/9.x/initials/svg?seed=${topThree[2].runnerTag}&radius=50`} alt={topThree[2].runnerTag} className="w-full h-full object-cover" />
                )}
              </div>
              {!topThree[2]?.isPlaceholder && <MedalIcon position={3} />}
            </div>
            <div className="text-center">
              <div className="font-semibold">{topThree[2].runnerTag}</div>
              <div className="bg-gray-800 px-4 py-2 rounded-md mt-2">
                {topThree[2]?.value !== null ? Number(topThree[2].value ?? 0).toFixed(precision) : "-"} {challengeTypeLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Rest of leaderboard */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {restOfLeaderboard.length > 0 ? (
            restOfLeaderboard.map((item: any) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-700 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="w-8 text-gray-400 text-right font-mono">
                    {String(item.rank).padStart(2, '0')}
                  </div>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={item.profilePhotoUri || `https://api.dicebear.com/9.x/initials/svg?seed=${item.runnerTag}&radius=50`} alt={item.runnerTag} className="w-full h-full object-cover" />
                  </div>
                  <div className="font-medium">{item.runnerTag}</div>
                </div>
                <div className="font-medium">
                  {item.value !== null ? Number(item.value ?? 0).toFixed(precision) : "-"} {challengeTypeLabel}
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-lg font-medium mb-1">No additional participants</p>
              <p className="text-sm">Join this challenge and climb the leaderboard!</p>
            </div>
          )}
        </div>
      </div>

      {/* Event info sidebar */}
      <div className="w-full md:w-96 bg-gray-800 p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
          <div className="text-gray-400 text-sm flex items-center mb-1">
            <span>{getDisplayAddress(event.origin, event.location)}</span>
          </div>       
          <div className="flex items-center text-sm text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {event.origin.city}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">About Event</h3>
          <p className="text-gray-300 text-sm">{event.description}</p>
        </div>       
        
        <button onClick={() => window?.open(Config.appStoreUrl, '_blank')} className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full py-3 px-4 transition duration-200">
          Download App
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;