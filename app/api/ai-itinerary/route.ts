export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tripLengthDays, budget, interests } = body;

    const length = Number(tripLengthDays) || 7;
    const budgetLabel = budget || "mid";
    const interestText = interests || "general sightseeing";

    const days = Array.from({ length }).map((_, i) => ({
      dayNumber: i + 1,
      title: `Example NZ day ${i + 1}`,
      summary: `Example day in New Zealand focused on ${interestText} with a ${budgetLabel}-level budget. This is mock data while the real AI is being set up.`,
    }));

    return Response.json({ days }, { status: 200 });
  } catch (err) {
    console.error("Error in /api/ai-itinerary:", err);
    return Response.json(
      { error: "Something went wrong", days: [] },
      { status: 500 }
    );
  }
}
