/**
 * Injeta um ou mais blocos JSON-LD. Server component, sem 'use client'.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const arr = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(arr) }}
    />
  );
}
