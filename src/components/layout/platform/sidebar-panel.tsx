"use client";

import { Flame, Heart, TrendingDown, TrendingUp, Users } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

type StockItem = {
  symbol: string;
  logo?: string;
};

type Watchlist = {
  name: string;
  stocks: StockItem[];
  change: number;
};

const favouriteStocks = [
  { symbol: "AAPL", name: "Apple", price: "$213.21", change: 1.18 },
  { symbol: "NVDA", name: "NVIDIA", price: "$943.20", change: 3.82 },
  { symbol: "MSFT", name: "Microsoft", price: "$428.61", change: 1.14 },
  { symbol: "TSLA", name: "Tesla", price: "$188.44", change: -1.64 },
  { symbol: "PLTR", name: "Palantir", price: "$31.87", change: 4.29 },
];

const watchlists: Watchlist[] = [
  {
    name: "Tech Giants",
    stocks: [
      { symbol: "AAPL" },
      { symbol: "MSFT" },
      { symbol: "NVDA" },
      { symbol: "GOOGL" },
      { symbol: "AMZN" },
      { symbol: "META" },
      { symbol: "TSM" },
    ],
    change: 2.34,
  },
  {
    name: "Dividend Picks",
    stocks: [
      { symbol: "KO" },
      { symbol: "PG" },
      { symbol: "JNJ" },
      { symbol: "PEP" },
      { symbol: "MCD" },
      { symbol: "HD" },
    ],
    change: -0.82,
  },
  {
    name: "AI & Chips",
    stocks: [
      { symbol: "NVDA" },
      { symbol: "AMD" },
      { symbol: "SMCI" },
      { symbol: "AVGO" },
      { symbol: "TSM" },
      { symbol: "ARM" },
    ],
    change: 4.91,
  },
];

const trendingItems = [
  { label: "NVIDIA earnings", type: "Topic", count: "2.3k posts" },
  { label: "AI stocks", type: "Topic", count: "1.8k posts" },
  { label: "Bitcoin breakout", type: "Topic", count: "3.1k posts" },
  { label: "@marketowl", type: "User", count: "14.2k followers" },
  { label: "@valueorbit", type: "User", count: "10.7k followers" },
];

function ChangeBadge({ value }: { value: number }) {
  const positive = value >= 0;

  return (
    <Badge
      variant="secondary"
      className={
        positive
          ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10"
          : "bg-rose-500/10 text-rose-600 hover:bg-rose-500/10"
      }
    >
      {positive ? (
        <TrendingUp className="mr-1 h-3.5 w-3.5" />
      ) : (
        <TrendingDown className="mr-1 h-3.5 w-3.5" />
      )}
      {positive ? "+" : ""}
      {value.toFixed(2)}%
    </Badge>
  );
}

function WatchlistAvatarGroup({ stocks }: { stocks: StockItem[] }) {
  const visible = stocks.slice(0, 5);
  const remaining = Math.max(stocks.length - visible.length, 0);

  return (
    <AvatarGroup>
      {visible.map((stock) => (
        <Avatar key={stock.symbol} className="h-8 w-8 border border-background">
          <AvatarImage src={stock.logo} alt={stock.symbol} />
          <AvatarFallback className="text-[10px] font-semibold">
            {stock.symbol.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      ))}
      {remaining > 0 ? <AvatarGroupCount>+{remaining}</AvatarGroupCount> : null}
    </AvatarGroup>
  );
}

function SectionCard({
  title,
  children,
  contentClassName,
}: {
  title: string;
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <Card className="flex min-h-0 flex-col rounded-3xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

export function SidebarPanel() {
  return (
    <div className="flex min-h-0 flex-col gap-4 h-full sticky top-0">
      <SectionCard
        title="Favourite Stocks"
        contentClassName="min-h-0 flex-1 pt-0"
      >
        <ScrollArea className="h-full pr-3">
          <div className="space-y-3">
            {favouriteStocks.map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between rounded-2xl border px-3 py-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{stock.symbol}</span>
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    {stock.name}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-medium">{stock.price}</div>
                  <div
                    className={`text-xs ${
                      stock.change >= 0 ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SectionCard>

      <SectionCard title="Watchlists" contentClassName="min-h-0 flex-1 pt-0">
        <ScrollArea className="h-full pr-3">
          <div className="space-y-3">
            {watchlists.map((watchlist) => (
              <div
                key={watchlist.name}
                className="rounded-2xl border px-3 py-3"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-medium">{watchlist.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {watchlist.stocks.length} stocks
                    </div>
                  </div>

                  <ChangeBadge value={watchlist.change} />
                </div>

                <WatchlistAvatarGroup stocks={watchlist.stocks} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </SectionCard>

      <SectionCard
        title="Trending Users / Topics"
        contentClassName="min-h-0 flex-1 pt-0"
      >
        <ScrollArea className="h-full pr-3">
          <div className="space-y-3">
            {trendingItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border px-3 py-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {item.type === "Topic" ? (
                      <Flame className="h-4 w-4 text-orange-500" />
                    ) : (
                      <Users className="h-4 w-4 text-sky-500" />
                    )}
                    <span className="truncate font-medium">{item.label}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {item.count}
                  </div>
                </div>

                <Badge variant="outline" className="rounded-full">
                  {item.type}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SectionCard>
    </div>
  );
}
