export const metadata = {
  title: 'Gallery | Raj Palace & Convention',
  description: 'Browse our gallery of events and venues at Raj Palace & Convention.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
      {children}
    </div>
  );
} 