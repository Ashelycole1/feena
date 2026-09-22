"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Share2, 
  Eye, 
  Users, 
  Rocket, 
  MessageSquare, 
  CheckCircle2, 
  Circle,
  BarChart3
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-[#fbfbfa] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="hidden lg:block space-y-1">
            <SidebarLink icon={<BarChart3 className="w-5 h-5" />} label="Today" active />
            <SidebarLink icon={<Users className="w-5 h-5" />} label="Supporters" />
            <SidebarLink icon={<Share2 className="w-5 h-5" />} label="Sharehub" />
            <SidebarLink icon={<TrendingUp className="w-5 h-5" />} label="Fundraiser" />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Goal Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Current Goal</h2>
                  <div className="text-4xl font-black text-gray-900 mb-2">UGX 1,500,000</div>
                  <div className="text-gray-500 mb-6">raised of UGX 5,000,000</div>
                  
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "30%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-[#02a95c] h-full rounded-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <StatBox icon={<Users className="w-5 h-5 text-blue-500" />} label="Donors" value="24" />
                  <StatBox icon={<Share2 className="w-5 h-5 text-purple-500" />} label="Shares" value="156" />
                  <StatBox icon={<Eye className="w-5 h-5 text-orange-500" />} label="Views" value="892" />
                  <StatBox icon={<TrendingUp className="w-5 h-5 text-green-500" />} label="Trend" value="+12%" />
                </div>
              </div>
            </motion.div>

            {/* Daily Plan List */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Your Daily Plan</h2>
              <div className="space-y-4">
                <PlanCard 
                  icon={<Rocket className="w-6 h-6 text-[#02a95c]" />}
                  title="Momentum is a fundraiser's best friend"
                  description="Share your fundraiser with 3 close friends or family members today."
                  action="Share now"
                  completed={false}
                />
                <PlanCard 
                  icon={<MessageSquare className="w-6 h-6 text-blue-500" />}
                  title="Let social media do its thing"
                  description="Post an update to your WhatsApp status to reach more potential donors."
                  action="Post update"
                  completed={false}
                />
                <PlanCard 
                  icon={<CheckCircle2 className="w-6 h-6 text-gray-400" />}
                  title="Streamline fundraising"
                  description="You've successfully verified your identity and connected your Mobile Money account."
                  action=""
                  completed={true}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${active ? 'bg-emerald-50 text-[#02a95c] font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-semibold'}`}>
      {icon}
      <span>{label}</span>
    </a>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-start">
      <div className="mb-2">{icon}</div>
      <div className="text-2xl font-black text-gray-900">{value}</div>
      <div className="text-sm font-semibold text-gray-500">{label}</div>
    </div>
  );
}

function PlanCard({ icon, title, description, action, completed }: { icon: React.ReactNode, title: string, description: string, action: string, completed: boolean }) {
  return (
    <motion.div 
      whileHover={{ scale: completed ? 1 : 1.01 }}
      className={`bg-white p-6 rounded-2xl border ${completed ? 'border-gray-100 opacity-60' : 'border-gray-200 shadow-sm'} flex items-start space-x-4`}
    >
      <div className={`p-3 rounded-full ${completed ? 'bg-gray-100' : 'bg-emerald-50'}`}>
        {completed ? <CheckCircle2 className="w-6 h-6 text-gray-400" /> : icon}
      </div>
      <div className="flex-1">
        <h3 className={`text-lg font-bold mb-1 ${completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{title}</h3>
        <p className="text-gray-600 font-medium mb-4">{description}</p>
        {!completed && (
          <button className="text-sm font-bold text-[#02a95c] hover:text-emerald-700 transition-colors">
            {action} →
          </button>
        )}
      </div>
      {!completed && (
        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <Circle className="w-6 h-6 text-gray-300" />
        </button>
      )}
    </motion.div>
  );
}
