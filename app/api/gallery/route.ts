// route handler til GET request for gallry billeder

export async function GET() {
  try {
    const response = await fetch("http://localhost:4000/gallery");

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    if (!response.ok) {
      throw new Error("Fejl i fetch");
    }

    const data = await response.json();

    const images = data.map((item: any) => ({
      id: item.id,
      image: item.asset.url,
      alt: item.description || `Gallery ${item.id}`,
      description: item.description || "",
    }));

    return Response.json(images);
  } catch (error) {
    console.error("Gallery API error:", error);
    return Response.json({ error: "Fejl i indlæsning af galleri" }, { status: 500 });
  }
}
