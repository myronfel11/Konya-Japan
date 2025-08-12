// src/components/MapEmbed.tsx
type Props = { address: string; heightClass?: string };

export default function MapEmbed({
  address,
  heightClass = "h-80 lg:h-[28rem]",
}: Props) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;
  return (
    <iframe
      title={`Map of ${address}`}
      src={src}
      loading="lazy"
      className={`w-full ${heightClass} rounded-xl border`}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
