import { getWordPressPosts } from "@/lib/wordpress";

export const revalidate = 3600;

export async function GET(request: Request) {
  const page = Math.max(
    1,
    Number(new URL(request.url).searchParams.get("page")) || 1,
  );

  try {
    const result = await getWordPressPosts(page);
    return Response.json(result);
  } catch {
    return Response.json({ posts: [], total: 0, totalPages: 0 });
  }
}
