"use client";

import { Plus, TrendingUp, Clock3, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const watchlist = [
  { symbol: "AAPL", name: "Apple", price: "$212.43", change: "+1.24%" },
  { symbol: "NVDA", name: "NVIDIA", price: "$891.12", change: "+2.98%" },
  { symbol: "MSFT", name: "Microsoft", price: "$428.77", change: "-0.35%" },
  { symbol: "TSLA", name: "Tesla", price: "$187.52", change: "+4.10%" },
];

const recent = [
  { symbol: "AMD", name: "Advanced Micro Devices" },
  { symbol: "META", name: "Meta Platforms" },
  { symbol: "AMZN", name: "Amazon" },
];

const events = [
  { label: "NVDA earnings", when: "Tomorrow" },
  { label: "Fed minutes", when: "2 days" },
  { label: "AAPL dividend date", when: "This week" },
];

export function SidebarPanel() {
  return (
    <div className="space-y-4">
      <section className="rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold">My Watchlist</h2>
            <p className="text-xs text-muted-foreground">Pinned symbols</p>
          </div>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          {watchlist.map((item) => (
            <button
              key={item.symbol}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors hover:bg-accent"
            >
              <div className="min-w-0">
                <div className="font-medium">{item.symbol}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {item.name}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-medium">{item.price}</div>
                <div
                  className={`text-xs ${
                    item.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.change}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          <h3 className="text-sm font-semibold">Market Movers</h3>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-accent">
            <span>Top gainers</span>
            <span className="text-muted-foreground">View</span>
          </div>
          <div className="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-accent">
            <span>Top losers</span>
            <span className="text-muted-foreground">View</span>
          </div>
          <div className="flex items-center justify-between rounded-lg px-2 py-1.5 hover:bg-accent">
            <span>Most active</span>
            <span className="text-muted-foreground">View</span>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur">
        <div className="mb-3 flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          <h3 className="text-sm font-semibold">Recently Viewed</h3>
        </div>

        <div className="space-y-2">
          {recent.map((item) => (
            <button
              key={item.symbol}
              className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left hover:bg-accent"
            >
              <span className="font-medium">{item.symbol}</span>
              <span className="max-w-45 truncate text-xs text-muted-foreground">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur">
        <div className="mb-3 flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <h3 className="text-sm font-semibold">Upcoming Events</h3>
        </div>

        <div className="space-y-2">
          {events.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg px-2 py-1.5"
            >
              <span className="text-sm">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.when}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
