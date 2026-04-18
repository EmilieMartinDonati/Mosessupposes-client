"use client"

type WritingWorkshopCarouselProps = {
    title?: string;
    workshops?: {
        uuid?: string;
        title?: string;
        prompt?: string;
    }[];
    loading: boolean;
    status: "live" | "upcoming";
};

export default function WritingsWorkshopsCarousel({ title, workshops, loading, status }: WritingWorkshopCarouselProps) {

    if (loading && status === "live") {
        return (
            <div className="flex flex-col gap-4">
                <div><h2>{title}</h2></div>
                <div className="flex gap-4 overflow-hidden">
                    {[1, 2, 3].map((_, i) => (
                        <div className="w-64 flex-shrink-0 animate-pulse space-y-2 p-4 border rounded-lg" key={i}>
                            <div className="h-4 bg-gray-300 rounded w-1/2" />
                            <div className="h-3 bg-gray-200 rounded w-full" />
                            <div className="h-3 bg-gray-200 rounded w-5/6" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            <div><h2>{title}</h2></div>
            <div className="flex gap-8">
                {workshops.map(({ uuid, title, prompt }) => (
                    <div key={uuid} className="flex flex-col gap-2 border border-l-emerald-600 rounded-lg p-4 w-64 flex-shrink-0">
                        <h3 className="font-semibold">{title}</h3>
                        <p className="text-sm">{prompt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}