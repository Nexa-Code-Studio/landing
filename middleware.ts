// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const RATE_LIMIT = 60; // request
// const WINDOW = 60_000; // 1 menit
// const ipMap = new Map<string, { count: number; time: number }>();

// export function middleware(req: NextRequest) {
//   const ip = req.ip ?? "unknown";
//   const now = Date.now();

//   const data = ipMap.get(ip);

//   if (!data || now - data.time > WINDOW) {
//     ipMap.set(ip, { count: 1, time: now });
//     return NextResponse.next();
//   }

//   if (data.count > RATE_LIMIT) {
//     return new NextResponse("Too Many Requests", { status: 429 });
//   }

//   data.count++;
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };

// belum pake API sehingga middleware ini belum dipakai
