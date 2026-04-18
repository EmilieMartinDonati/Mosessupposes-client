"use client"

export function WorkshopCardSkeleton() {
    return (
        <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>
    );
}