import {
  ArrowDownRight,
  ArrowUpRight,
  Bitcoin,
  BriefcaseBusiness,
  Globe,
  Newspaper,
  Sparkles,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const watchlists = [
  {
    name: "Tech Giants",
    stocks: ["AAPL", "MSFT", "NVDA", "GOOGL", "AMZN"],
    change: 2.34,
  },
  {
    name: "Dividend Picks",
    stocks: ["KO", "JNJ", "PG", "PEP", "MCD"],
    change: -0.82,
  },
  {
    name: "AI & Chips",
    stocks: ["NVDA", "AMD", "TSM", "SMCI", "AVGO"],
    change: 4.91,
  },
];

const worldIndices = [
  { name: "S&P 500", symbol: "SPX", value: "5,214.42", change: 0.84 },
  { name: "NASDAQ", symbol: "IXIC", value: "16,388.24", change: 1.12 },
  { name: "Dow Jones", symbol: "DJI", value: "39,204.15", change: -0.28 },
  { name: "ASX 200", symbol: "XJO", value: "7,812.60", change: 0.46 },
  { name: "Nikkei 225", symbol: "N225", value: "39,104.91", change: 0.91 },
  { name: "FTSE 100", symbol: "UKX", value: "8,124.88", change: -0.17 },
];

const cryptoOverview = [
  { name: "Bitcoin", symbol: "BTC", value: "$84,920", change: 2.81 },
  { name: "Ethereum", symbol: "ETH", value: "$4,180", change: 1.49 },
  { name: "Solana", symbol: "SOL", value: "$191.22", change: 5.74 },
  { name: "XRP", symbol: "XRP", value: "$0.72", change: -1.11 },
];

const spotlightStocks = [
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: "$943.20",
    change: 3.82,
    note: "Semiconductor momentum remains strong.",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: "$188.44",
    change: -1.64,
    note: "High volatility and strong retail attention.",
  },
  {
    symbol: "PLTR",
    name: "Palantir",
    price: "$31.87",
    change: 4.29,
    note: "AI and defense themes driving interest.",
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: "$428.61",
    change: 1.14,
    note: "Cloud and AI continue to support strength.",
  },
];

const newsItems = [
  {
    title: "US equities rally as AI names lead gains",
    source: "Bloomberg-style placeholder",
    time: "2h ago",
    tag: "Markets",
  },
  {
    title: "Bitcoin rises as institutional flows pick up",
    source: "CryptoWire placeholder",
    time: "3h ago",
    tag: "Crypto",
  },
  {
    title: "Fed commentary keeps rate-cut hopes alive",
    source: "Macro Daily placeholder",
    time: "5h ago",
    tag: "Macro",
  },
  {
    title: "Semiconductor stocks remain in spotlight",
    source: "Market Pulse placeholder",
    time: "6h ago",
    tag: "Stocks",
  },
];

function ChangePill({ value }: { value: number }) {
  const positive = value >= 0;

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
        positive
          ? "bg-emerald-500/10 text-emerald-600"
          : "bg-rose-500/10 text-rose-600"
      }`}
    >
      {positive ? (
        <ArrowUpRight className="h-3.5 w-3.5" />
      ) : (
        <ArrowDownRight className="h-3.5 w-3.5" />
      )}
      {positive ? "+" : ""}
      {value.toFixed(2)}%
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border bg-card/70 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Sparrow Dashboard
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome back, Jayn 👋
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Here’s your simple market snapshot for today — watchlists,
              spotlight stocks, macro sentiment, crypto, and the latest news in
              one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Card className="rounded-2xl">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground">Watchlists</div>
                <div className="mt-1 text-2xl font-semibold">3</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground">Spotlight</div>
                <div className="mt-1 text-2xl font-semibold">4</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground">News</div>
                <div className="mt-1 text-2xl font-semibold">24</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 2xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Watchlists</CardTitle>
            </div>
            <CardDescription>
              Your saved baskets and their overall movement.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {watchlists.map((watchlist) => (
              <div
                key={watchlist.name}
                className="rounded-2xl border bg-background/60 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-medium">{watchlist.name}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {watchlist.stocks.join(" • ")}
                    </div>
                  </div>
                  <ChangePill value={watchlist.change} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Market Overview</CardTitle>
            </div>
            <CardDescription>Major world indices at a glance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {worldIndices.map((index) => (
              <div
                key={index.symbol}
                className="flex items-center justify-between rounded-2xl border px-4 py-3"
              >
                <div>
                  <div className="font-medium">{index.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {index.symbol}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium">{index.value}</div>
                  <ChangePill value={index.change} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 gap-6 2xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bitcoin className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Crypto Overview</CardTitle>
            </div>
            <CardDescription>
              Major crypto movers and sentiment placeholders.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {cryptoOverview.map((coin) => (
              <div
                key={coin.symbol}
                className="flex items-center justify-between rounded-2xl border px-4 py-3"
              >
                <div>
                  <div className="font-medium">{coin.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {coin.symbol}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium">{coin.value}</div>
                  <ChangePill value={coin.change} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Spotlight / Trending Stocks</CardTitle>
            </div>
            <CardDescription>
              Stocks currently getting attention across the market.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {spotlightStocks.map((stock) => (
              <div
                key={stock.symbol}
                className="rounded-2xl border bg-background/60 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{stock.symbol}</div>
                    <div className="text-sm text-muted-foreground">
                      {stock.name}
                    </div>
                  </div>
                  <ChangePill value={stock.change} />
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="text-sm font-medium">{stock.price}</div>
                  <p className="text-sm text-muted-foreground">{stock.note}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="rounded-3xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-muted-foreground" />
              <CardTitle>News</CardTitle>
            </div>
            <CardDescription>
              Placeholder headlines for your home feed.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2">
            {newsItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-background/60 p-4 transition-colors hover:bg-accent/30"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Badge variant="outline" className="rounded-full">
                    {item.tag}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-medium leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.source}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="rounded-3xl border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Extra ideas for Sparrow</CardTitle>
            </div>
            <CardDescription>
              A few simple features that would genuinely add value later.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Daily market mood / sentiment card",
              "Upcoming earnings calendar",
              "Recently viewed stocks",
              "Your portfolio heatmap",
            ].map((idea) => (
              <div
                key={idea}
                className="rounded-2xl border bg-background/50 px-4 py-3 text-sm text-muted-foreground"
              >
                {idea}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
