import React from 'react';

export interface CampaignProps {
  title: string;
  coverImageUrl: string;
  currency: string;
  currentAmount: number;
  targetAmount: number;
}

export default function CampaignView({ campaign }: { campaign: CampaignProps }) {
    const percentage = Math.min(Math.round((campaign.currentAmount / campaign.targetAmount) * 100), 100);
    return (
        <div className="min-h-screen bg-[#fbfbfa] text-gray-900">
            <header className="bg-white border-b h-16 flex items-center justify-between px-6">
                <span className="text-2xl font-black text-[#02a95c]">fenna</span>
                <button className="bg-[#02a95c] text-white font-bold px-4 py-2 rounded-full">Start a Fenna</button>
            </header>
            <main className="max-w-6xl mx-auto p-6 flex flex-col md:grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-4">
                    <h1 className="text-3xl font-extrabold">{campaign.title}</h1>
                    <img src={campaign.coverImageUrl} className="rounded-2xl aspect-video object-cover w-full" />
                </div>
                <div className="md:col-span-5 bg-white p-6 rounded-2xl border shadow-xl h-fit">
                    <div className="text-3xl font-black">{campaign.currency} {campaign.currentAmount.toLocaleString()}</div>
                    <div className="text-gray-500 mb-2">raised of {campaign.currency} {campaign.targetAmount.toLocaleString()} goal</div>
                    <div className="w-full bg-gray-100 h-3 rounded-full mt-2">
                        <div className="bg-[#02a95c] h-3 rounded-full" style={{ width: `${percentage}%` }} />
                    </div>
                    <button className="w-full bg-[#02a95c] text-white font-extrabold py-4 rounded-2xl mt-4">Donate now</button>
                </div>
            </main>
        </div>
    );
}
